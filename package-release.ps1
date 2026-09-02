# Forwards to build.ps1 (kept so older npm / docs paths still work).
& "$PSScriptRoot\build.ps1" @args
exit $LASTEXITCODE
