"""Process newly generated bagless Super Sam poses into assets/ and tools/raw/."""
import os
import sys
from PIL import Image
import numpy as np
from scipy import ndimage

# Add project root to path for importing functions from process_assets
ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, ROOT_DIR)

from process_assets import (
    remove_bg_magenta_vectorized,
    clean_edges_vectorized,
    extract_primary_components_fast,
    despill_final,
)
from process_case2_assets import anchor_standing_bust

RAW_INPUTS = [
    (
        r"C:\Users\luiso\.gemini\antigravity\brain\6cd27aa2-f39f-4198-82a2-a7d0879b3571\supersam_case1_idle_1790540267422.jpg",
        "supersam_case1_idle"
    ),
    (
        r"C:\Users\luiso\.gemini\antigravity\brain\6cd27aa2-f39f-4198-82a2-a7d0879b3571\supersam_crossed_1790540288910.jpg",
        "supersam_crossed"
    ),
    (
        r"C:\Users\luiso\.gemini\antigravity\brain\f80d20d4-1408-4136-946e-bfa6e214f407\supersam_watch_bare_1790543724015.jpg",
        "supersam_watch"
    ),
    (
        r"C:\Users\luiso\.gemini\antigravity\brain\6cd27aa2-f39f-4198-82a2-a7d0879b3571\supersam_thinking_1790540338557.jpg",
        "supersam_thinking"
    )
]

def process_pose(input_path: str, pose_name: str) -> None:
    if not os.path.exists(input_path):
        print(f"Error: input not found: {input_path}")
        return

    img = Image.open(input_path).convert("RGBA")
    
    # Save raw PNG in tools/raw/
    raw_dest = os.path.join(ROOT_DIR, "tools", "raw", f"{pose_name}_raw.png")
    img.save(raw_dest)
    print(f"  [RAW] Saved: {raw_dest}")

    # 1. Magenta removal
    cleaned = remove_bg_magenta_vectorized(img, threshold=165.0, despill_depth=4)
    # 2. Clean edges
    cleaned = clean_edges_vectorized(cleaned, depth=5)
    # 3. Extract primary character component
    filtered = extract_primary_components_fast(cleaned, min_area_fraction=0.10)
    # 4. Despill fringe
    despilled = despill_final(filtered)
    # 5. Anchor standing bust to 512x512 canvas floor
    final_img = anchor_standing_bust(despilled)

    # 6. Save as WebP in assets/
    webp_dest = os.path.join(ROOT_DIR, "assets", f"{pose_name}.webp")
    final_img.save(webp_dest, "WEBP", quality=85, method=6)
    print(f"  [OK] Processed {pose_name}.webp -> size: {final_img.size}")

def main():
    print("Processing new bagless Super Sam poses...")
    for input_path, pose_name in RAW_INPUTS:
        process_pose(input_path, pose_name)
    print("Finished processing all poses.")

if __name__ == "__main__":
    main()
