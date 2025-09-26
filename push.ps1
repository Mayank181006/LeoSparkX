# push.ps1
param([string]$msg = "auto commit")

git add .
git commit -m $msg
git push origin main
