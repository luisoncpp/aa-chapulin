"""Gallery layout guides.

    python -m tools.gallery_guide                       # all presets into tools/gallery_guide/out
    python -m tools.gallery_guide --overlay assets/bg_gallery.webp --preset full

Per preset writes <name>_guide.png (flat, no text: feed it to the image model as the
layout to paint over) and <name>_annotated.png (labels, for people). --overlay draws
the silhouettes and furniture outlines over a candidate image to check its scale.
"""

import argparse
from pathlib import Path
from PIL import Image
from .camera import Camera
from .render import Style, render
from .room import build_room

OUT = Path(__file__).resolve().parent / 'out'

OVERVIEW = Camera(0.0, 2.3, -2.5, pitch_deg=-2.0, focal_px=880)
PRESETS = {
    'full': (OVERVIEW, ('judge', 'counsel', 'witness', 'public')),
    'full_empty': (OVERVIEW, ('judge', 'public')),
    'left': (Camera(1.5, 3.6, 1.5, yaw_deg=-32.0, pitch_deg=6.0, focal_px=1000), ('judge', 'public')),
    'right': (Camera(-1.5, 3.6, 1.5, yaw_deg=32.0, pitch_deg=6.0, focal_px=1000), ('judge', 'public')),
}
# Case-agnostic plate: counsel and witness are left out on purpose, with their furniture in view.
EMPTY_STAGE_PRESETS = {'full_empty'}


def main():
    parser = argparse.ArgumentParser(description='Courtroom gallery layout guides')
    parser.add_argument('--preset', choices=sorted(PRESETS), action='append')
    parser.add_argument('--overlay', type=Path, help='candidate image to check against the guide')
    args = parser.parse_args()
    OUT.mkdir(exist_ok=True)
    room = build_room()
    for name in args.preset or sorted(PRESETS):
        camera, roles = PRESETS[name]
        if args.overlay:
            _write_overlay(room, (name, camera, roles), args.overlay)
            continue
        if name not in EMPTY_STAGE_PRESETS:
            _warn_hidden_cast(room, (name, camera, roles))
        render(room, camera, Style(roles=roles)).convert('RGB').save(OUT / f'{name}_guide.png')
        render(room, camera, Style(roles=roles, labels=True)).convert('RGB').save(OUT / f'{name}_annotated.png')
        print(f'wrote {name}_guide.png, {name}_annotated.png')


def _warn_hidden_cast(room, preset):
    """A framing that leaves someone out must keep their head out of frame too."""
    name, camera, roles = preset
    for person in room.people:
        if person.role in roles:
            continue
        head = camera.project((person.feet[0], person.head_top, person.feet[2]))
        if head and 0 <= head[0] < camera.width and 0 <= head[1] < camera.height:
            print(f'WARNING {name}: {person.label} is omitted but their head is in frame at {head}')


def _write_overlay(room, preset, candidate_path):
    name, camera, roles = preset
    candidate = Image.open(candidate_path).resize((camera.width, camera.height))
    image = render(room, camera, Style(roles=roles, wireframe=True), base=candidate)
    target = OUT / f'{name}_overlay_{candidate_path.stem}.png'
    image.convert('RGB').save(target)
    print(f'wrote {target.name}')


if __name__ == '__main__':
    main()
