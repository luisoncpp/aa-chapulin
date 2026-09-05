---
id: asset_pipeline
label: Asset Pipeline
color: "#6366f1"
icon: wrench
files:
  - process_assets.py
  - process_case2_assets.py
  - process_case3_assets.py
  - process_case4_assets.py
  - verify_assets.py
architectureDoc: docs/architecture/asset-pipeline.md
descriptionShort: "Automates sprite chroma-keying, grid slicing, and asset verification"
---

# Asset Pipeline

Provides Python automation tools for asset generation, transparency alpha masking, sprite sheet slicing, and integrity validation. [[process_assets.py]] handles Case 1 sheets, cut-ins, and furniture; [[process_case2_assets.py]] slices Case 2 2x2 poses, the 4×3 court-record icon grid, and location JPEGs; [[process_case3_assets.py]] slices Case 3 poses, 4×3 / 3×2 icons, and kermes plates; [[process_case4_assets.py]] slices Case 4 2x2 poses (Botija, Cecilio, Maruja, Rufino), the 4×4 hotel evidence grid, 1536×1024 lobby-to-azotea plates, and 960×540 `examine_*` views. Validates referenced script assets against disk files.
