---
id: asset_pipeline
label: Asset Pipeline
color: "#6366f1"
icon: wrench
files:
  - process_assets.py
  - process_case2_assets.py
  - verify_assets.py
architectureDoc: docs/architecture/asset-pipeline.md
descriptionShort: "Automates sprite chroma-keying, grid slicing, and asset verification"
---

# Asset Pipeline

Provides Python automation tools for asset generation, transparency alpha masking, sprite sheet slicing, and integrity validation. [[process_assets.py]] handles Case 1 sheets, cut-ins, and furniture; [[process_case2_assets.py]] slices Case 2 2x2 poses (Chómpiras, Peterete, Jirafales, Jaimito, Clotilde), the 4×3 court-record icon grid, and location JPEGs (`bg_boveda`, `bg_restaurante`, `bg_postal`, `bg_clotilde`). Validates all referenced script assets against disk files to prevent missing asset errors.
