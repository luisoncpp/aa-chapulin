---
id: asset_pipeline
label: Asset Pipeline
color: "#6366f1"
icon: wrench
files:
  - process_assets.py
  - verify_assets.py
architectureDoc: docs/architecture/asset-pipeline.md
descriptionShort: "Automates sprite chroma-keying, grid slicing, and asset verification"
---

# Asset Pipeline

Provides Python automation tools for asset generation, transparency alpha masking, sprite sheet slicing, and integrity validation. Processes raw AI image grids with magenta chroma-keying into transparent PNG character poses, cut-ins, and evidence icons. Validates all referenced script assets against disk files to prevent missing asset errors.
