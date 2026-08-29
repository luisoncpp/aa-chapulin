# Package Game Release Script (PowerShell)
# Bundles index.html, style.css, dist/, and assets/ into a single .zip file for itch.io / web hosting.
# Uses POSIX forward slashes (/) to prevent Linux/itch.io 404 extraction errors.

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
Write-Host " Packaging El Chapulín Colorado: Ace Attorney" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan

# 1. Compile TypeScript unless -SkipBuild is specified
if (-not $SkipBuild) {
    Write-Host "[1/3] Compiling TypeScript..." -ForegroundColor Yellow
    npm run build
    if ($LASTEXITCODE -ne 0) {
        Write-Error "TypeScript compilation failed."
        exit 1
    }
} else {
    Write-Host "[1/3] Skipping TypeScript build (-SkipBuild specified)..." -ForegroundColor DarkGray
}

# 2. Verify required files and folders exist
Write-Host "[2/3] Checking required distribution files..." -ForegroundColor Yellow
$RequiredItems = @("index.html", "style.css", "dist", "assets")
foreach ($item in $RequiredItems) {
    if (-not (Test-Path $item)) {
        Write-Error "Missing required item: $item. Please make sure the build completed successfully."
        exit 1
    }
}

# 3. Create Zip Archive with POSIX forward slashes (fixes itch.io / Linux 404 errors)
Write-Host "[3/3] Creating web-compatible archive: $OutputFile..." -ForegroundColor Yellow

$OutputPath = Join-Path $ProjectRoot $OutputFile
if (Test-Path $OutputPath) {
    Remove-Item $OutputPath -Force
}

$TarCommand = Get-Command "tar.exe" -ErrorAction SilentlyContinue

if ($TarCommand) {
    # tar.exe natively uses forward-slash path separators in ZIP archives
    tar.exe -a -c -f $OutputPath index.html style.css dist assets
    if ($LASTEXITCODE -ne 0) {
        Write-Error "tar.exe compression failed."
        exit 1
    }
} else {
    # .NET ZipArchive fallback with explicit forward slashes (/)
    Add-Type -AssemblyName System.IO.Compression
    Add-Type -AssemblyName System.IO.Compression.FileSystem

    $zipStream = [System.IO.File]::Open($OutputPath, [System.IO.FileMode]::Create)
    $archive = New-Object System.IO.Compression.ZipArchive($zipStream, [System.IO.Compression.ZipArchiveMode]::Create)

    try {
        # Add root files
        @("index.html", "style.css") | ForEach-Object {
            $filePath = Join-Path $ProjectRoot $_
            if (Test-Path $filePath) {
                [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, $filePath, $_, [System.IO.Compression.CompressionLevel]::Optimal) | Out-Null
            }
        }

        # Add directory contents
        @("dist", "assets") | ForEach-Object {
            $dirName = $_
            $dirPath = Join-Path $ProjectRoot $dirName
            Get-ChildItem -Path $dirPath -Recurse -File | ForEach-Object {
                $relative = $_.FullName.Substring($ProjectRoot.Length).TrimStart("\", "/")
                $entryName = $relative -replace "\\", "/"
                [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, $_.FullName, $entryName, [System.IO.Compression.CompressionLevel]::Optimal) | Out-Null
            }
        }
    } finally {
        $archive.Dispose()
        $zipStream.Dispose()
    }
}

$ZipSize = (Get-Item $OutputPath).Length / 1MB
Write-Host "=========================================" -ForegroundColor Green
Write-Host " Package successfully created (Web/itch.io compatible)!" -ForegroundColor Green
Write-Host " File: $OutputPath" -ForegroundColor Green
Write-Host (" Size: {0:N2} MB" -f $ZipSize) -ForegroundColor Green
Write-Host " Contents: index.html, style.css, dist/, assets/" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Green
