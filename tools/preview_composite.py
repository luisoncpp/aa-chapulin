"""Offline composite preview of the courtroom stage.

The FRAMES table below MIRRORS src/engine/Private/StageLayout.ts, which is the
source of truth. If you change a ratio there, change it here too, or this tool
will quietly preview a composition the game no longer renders.
"""

import os
from PIL import Image

SCREEN = (960, 540)

# Fractions of the stage box, matching STAGE_FRAMES in StageLayout.ts.
FRAMES = {
    "plain": dict(char_h=0.62, char_base=0.13, char_over=False,
                  furn_w=0.0, furn_h=0.0, furn_base=0.0),
    "bench-stand": dict(char_h=0.62, char_base=0.34, char_over=False,
                        furn_w=1.0, furn_h=0.457, furn_base=0.0),
    "bench-slam": dict(char_h=0.62, char_base=0.376, char_over=True,
                       furn_w=1.0, furn_h=0.457, furn_base=0.0),
    "podium": dict(char_h=0.62, char_base=0.18, char_over=False,
                   furn_w=0.75, furn_h=0.42, furn_base=0.0),
}

FURNITURE_ASSETS = {"bench": "court_bench.png", "podium": "court_podium.png"}


def resolve_frame(furniture: str, pose: str) -> str:
    if furniture == "podium":
        return "podium"
    if furniture != "bench":
        return "plain"
    return "bench-slam" if "slam" in (pose or "") else "bench-stand"


def cover_crop(src: Image.Image, box_w: int, box_h: int) -> Image.Image:
    """object-fit: cover with object-position: 50% 0% — aspect preserved, top anchored."""
    iw, ih = src.size
    scale = max(box_w / iw, box_h / ih)
    resized = src.resize((int(iw * scale), int(ih * scale)), Image.Resampling.NEAREST)
    x0 = max(0, (resized.width - box_w) // 2)
    return resized.crop((x0, 0, x0 + box_w, box_h))


def render_scene(bg_name: str, char_name: str, furniture: str, out_name: str):
    width, height = SCREEN
    frame = FRAMES[resolve_frame(furniture, char_name)]
    comp = Image.new("RGBA", SCREEN)
    comp.alpha_composite(Image.open(f"assets/{bg_name}").convert("RGBA").resize(SCREEN, Image.Resampling.NEAREST))

    char_img = char_xy = None
    if char_name:
        # Sprites are square, so the contain-fitted box side equals its height.
        side = round(frame["char_h"] * height)
        char_img = Image.open(f"assets/{char_name}.png").convert("RGBA").resize((side, side), Image.Resampling.NEAREST)
        char_xy = ((width - side) // 2, height - round(frame["char_base"] * height) - side)

    furn_img = furn_xy = None
    if furniture in FURNITURE_ASSETS:
        box_w = round(frame["furn_w"] * width)
        box_h = round(frame["furn_h"] * height)
        src = Image.open(f"assets/{FURNITURE_ASSETS[furniture]}").convert("RGBA")
        furn_img = cover_crop(src, box_w, box_h)
        furn_xy = ((width - box_w) // 2, height - round(frame["furn_base"] * height) - box_h)

    # Surface-contact poses paint over the counter; everything else sits behind it.
    layers = [(furn_img, furn_xy), (char_img, char_xy)] if frame["char_over"] \
        else [(char_img, char_xy), (furn_img, furn_xy)]
    for img, xy in layers:
        if img:
            comp.alpha_composite(img, xy)

    out_path = os.path.join("tools", out_name)
    comp.convert("RGB").save(out_path)
    print(f"Rendered: {out_path}")


if __name__ == "__main__":
    render_scene("bg_defense.jpg", "chapulin_slam", "bench", "preview_defense_slam.png")
    render_scene("bg_defense.jpg", "chapulin_idle", "bench", "preview_defense_idle.png")
    render_scene("bg_courtroom.jpg", "supersam_slam", "none", "preview_prosecution_slam.png")
    render_scene("bg_courtroom.jpg", "supersam_idle", "none", "preview_prosecution_idle.png")
    render_scene("bg_witness.jpg", "tripaseca_smug", "podium", "preview_witness_stand.png")
    render_scene("bg_detention.jpg", "chapulin_idle", "none", "preview_detention_booth.png")
