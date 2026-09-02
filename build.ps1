# Compile TypeScript and zip the static site for Netlify (or itch.io) drag-and-drop.
# index.html must sit at the zip root. Paths use forward slashes so Linux hosts extract cleanly.
#
# Usage:
#   .\build.ps1
#   .\build.ps1 -OutputFile my-deploy.zip
#   .\build.ps1 -SkipBuild
#   npm run package

param (
    [string]$OutputFile = "ace-attorney-chapulin.zip",
    [switch]$SkipBuild
)

$ErrorActionPreference = "Stop"
$ProjectRoot = $PSScriptRoot
if (-not $ProjectRoot) {
    $ProjectRoot = Get-Location
}

Set-Location $ProjectRoot

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host " Build El Chapulin Colorado: Ace Attorney" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan

if (-not $SkipBuild) {
    Write-Host "[1/3] Compiling TypeScript..." -ForegroundColor Yellow
    npm run build
    if ($LASTEXITCODE -ne 0) {
        Write-Error "TypeScript compilation failed."
        exit 1
    }
} else {
    Write-Host "[1/3] Skipping TypeScript build (-SkipBuild)..." -ForegroundColor DarkGray
}

Write-Host "[2/3] Checking required distribution files..." -ForegroundColor Yellow
$RequiredItems = @("index.html", "style.css", "dist", "assets")
foreach ($item in $RequiredItems) {
    if (-not (Test-Path $item)) {
        Write-Error "Missing required item: $item. Run without -SkipBuild, or restore assets/."
        exit 1
    }
}

Write-Host "[3/3] Creating Netlify zip: $OutputFile..." -ForegroundColor Yellow

$OutputPath = Join-Path $ProjectRoot $OutputFile
if (Test-Path $OutputPath) {
    Remove-Item $OutputPath -Force
}

function Add-ZipWithForwardSlashes {
    Add-Type -AssemblyName System.IO.Compression
    Add-Type -AssemblyName System.IO.Compression.FileSystem

    $zipStream = [System.IO.File]::Open($OutputPath, [System.IO.FileMode]::Create)
    $archive = New-Object System.IO.Compression.ZipArchive($zipStream, [System.IO.Compression.ZipArchiveMode]::Create)

    try {
        @("index.html", "style.css") | ForEach-Object {
            $filePath = Join-Path $ProjectRoot $_
            if (Test-Path $filePath) {
                [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
                    $archive, $filePath, $_, [System.IO.Compression.CompressionLevel]::Optimal
                ) | Out-Null
            }
        }

        @("dist", "assets") | ForEach-Object {
            $dirPath = Join-Path $ProjectRoot $_
            Get-ChildItem -Path $dirPath -Recurse -File | ForEach-Object {
                $relative = $_.FullName.Substring($ProjectRoot.Length).TrimStart("\", "/")
                $entryName = $relative -replace "\\", "/"
                [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
                    $archive, $_.FullName, $entryName, [System.IO.Compression.CompressionLevel]::Optimal
                ) | Out-Null
            }
        }
    } finally {
        $archive.Dispose()
        $zipStream.Dispose()
    }
}

$TarCommand = Get-Command "tar.exe" -ErrorAction SilentlyContinue
if ($TarCommand) {
    tar.exe -a -c -f $OutputPath index.html style.css dist assets
    if ($LASTEXITCODE -ne 0) {
        Write-Error "tar.exe compression failed."
        exit 1
    }
} else {
    Add-ZipWithForwardSlashes
}

$ZipSize = (Get-Item $OutputPath).Length / 1MB
Write-Host "=========================================" -ForegroundColor Green
Write-Host " Zip ready for Netlify (Sites -> Deploy manually)." -ForegroundColor Green
Write-Host " File: $OutputPath" -ForegroundColor Green
Write-Host (" Size: {0:N2} MB" -f $ZipSize) -ForegroundColor Green
Write-Host " Contents: index.html, style.css, dist/, assets/" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Green
