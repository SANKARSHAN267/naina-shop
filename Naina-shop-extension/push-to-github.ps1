Param(
  [Parameter(Mandatory=$true)]
  [string]$RepoUrl,
  [string]$Branch = "main"
)

# Run from inside the prepared repo folder. This script initializes git (if needed) and pushes.
Set-Location -Path $PSScriptRoot
Write-Host "Working in: $PSScriptRoot"

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Error "git is not installed or not on PATH. Install Git and rerun."
  exit 1
}

if (-not (Test-Path ".git")) {
  git init
  Write-Host "Initialized new git repository."
} else {
  Write-Host ".git exists — using existing repo." -ForegroundColor Yellow
}

# Stage and commit
git add --all
try {
  git commit -m "Add landing page, privacy policy, sitemap for GitHub Pages" -q
  Write-Host "Committed changes."
} catch {
  Write-Host "No changes to commit or commit failed (likely already committed)." -ForegroundColor Yellow
}

# Configure remote
git remote remove origin 2>$null
git remote add origin $RepoUrl
Write-Host "Remote origin set to $RepoUrl"

# Set branch and push
git branch -M $Branch
Write-Host "Pushing to $RepoUrl (branch: $Branch). You may be prompted for credentials."

git push -u origin $Branch

if ($LASTEXITCODE -eq 0) {
  Write-Host "Push succeeded. Open GitHub and enable Pages: Settings → Pages → Source: main / (root)" -ForegroundColor Green
} else {
  Write-Error "Push failed. Check credentials and repo URL, then try again."
}
