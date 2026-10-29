# setup-photo-warmer.ps1: sets up the photo copier in Cloudflare with one run.
#
#   cd C:\c3
#   powershell -ExecutionPolicy Bypass -File C:\Blog-Brain\website-patches\setup-photo-warmer.ps1
#
# It uses the same Cloudflare login as deploy.ps1 (npx wrangler). It:
#   1. creates the R2 bucket "listing-photos", where the photo copies live;
#   2. adds the bucket rule that deletes a copy 30 days after it was made;
#   3. makes a new random WARM_KEY and gives it to the website (chapter3realty) as a secret;
#   4. creates the photo-warmer Worker with its every-minute timer, and gives it the same WARM_KEY.
# The key never shows on screen. A copy is saved on this computer only, in your user folder,
# as photo-warmer-key.txt, in case you want to open the warmer's status page.
# Safe to run again: it makes a new key and gives it to both.
#
# One thing it cannot do: connect the bucket to the website. That is one click in the dashboard,
# shown at the end.

$ErrorActionPreference = "Continue"
function Step($t) { Write-Host ""; Write-Host "== $t" -ForegroundColor Cyan }
function Good($t) { Write-Host "   $t" -ForegroundColor Green }
function Warn($t) { Write-Host "   $t" -ForegroundColor Yellow }

$worker = "C:\Blog-Brain\website-patches\photo-warmer-worker.js"
if (-not (Test-Path $worker)) { Write-Host "Cannot find $worker. Run 'git pull' in C:\Blog-Brain first." -ForegroundColor Red; exit 1 }
if (-not (Test-Path "C:\c3")) { Write-Host "Cannot find C:\c3 (the website folder deploy.ps1 uses)." -ForegroundColor Red; exit 1 }
Set-Location "C:\c3"

Step "1. The photo store (R2 bucket listing-photos)"
$out = & npx wrangler r2 bucket create listing-photos 2>&1 | Out-String
if ($LASTEXITCODE -eq 0) { Good "Created." }
elseif ($out -match "already exists|already own") { Good "Already there." }
else { Write-Host $out; Warn "Could not create it. If it says R2 is not enabled, open dash.cloudflare.com > R2, turn it on (free plan), and run this again."; exit 1 }

Step "2. Delete each copy after 30 days"
$out = & npx wrangler r2 bucket lifecycle add listing-photos delete-after-30-days --expire-days 30 --force 2>&1 | Out-String
if ($LASTEXITCODE -eq 0) { Good "Rule added." }
elseif ($out -match "already exists|duplicate") { Good "Rule already there." }
else { Write-Host $out; Warn "The rule was not added. Add it in the dashboard: R2 > listing-photos > Settings > Object lifecycle rules > delete after 30 days. Continuing." }

Step "3. A new WARM_KEY for the website"
$chars = (48..57) + (65..90) + (97..122)
$key = -join (1..40 | ForEach-Object { [char]($chars | Get-Random) })
$keyFile = Join-Path $env:USERPROFILE "photo-warmer-key.txt"
Set-Content -Path $keyFile -Value $key -NoNewline
$key | & npx wrangler pages secret put WARM_KEY --project-name chapter3realty 2>&1 | Out-Null
if ($LASTEXITCODE -eq 0) { Good "Given to the website (it takes effect on the next deploy)." }
else { Warn "Could not set it on the website. Run: Get-Content '$keyFile' | npx wrangler pages secret put WARM_KEY --project-name chapter3realty" }

Step "4. The photo-warmer Worker, every minute"
$dir = Join-Path $env:USERPROFILE "photo-warmer"
New-Item -ItemType Directory -Force -Path $dir | Out-Null
Copy-Item $worker (Join-Path $dir "photo-warmer-worker.js") -Force
@"
name = "photo-warmer"
main = "photo-warmer-worker.js"
compatibility_date = "2026-10-01"

[triggers]
crons = ["* * * * *"]
"@ | Set-Content -Path (Join-Path $dir "wrangler.toml")
& npx wrangler deploy --config (Join-Path $dir "wrangler.toml")
if ($LASTEXITCODE -ne 0) { Warn "The Worker did not deploy. Send me the output above."; exit 1 }
$key | & npx wrangler secret put WARM_KEY --config (Join-Path $dir "wrangler.toml") 2>&1 | Out-Null
if ($LASTEXITCODE -eq 0) { Good "Worker deployed, timer set, key given." }
else { Warn "Could not give the Worker its key. Run: Get-Content '$keyFile' | npx wrangler secret put WARM_KEY --config '$dir\wrangler.toml'" }

Step "Done. One click left, in the dashboard:"
Write-Host "   dash.cloudflare.com > Workers & Pages > chapter3realty > Settings > Bindings > Add > R2 bucket"
Write-Host "   Variable name: PHOTOS     Bucket: listing-photos     > Save"
Write-Host ""
Write-Host "   Then deploy the website updates (v1.13 to v1.16). The copier starts on its own after that."
