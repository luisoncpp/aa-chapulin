"""Paints a Room through a Camera: flat layout guide, labels, or a scale overlay."""

from dataclasses import dataclass
from pathlib import Path
import math
from PIL import Image, ImageDraw, ImageFilter, ImageOps
from . import scale as s

ASSETS = Path(__file__).resolve().parents[2] / 'assets'
ROLE_TINT = {'judge': '#3c3f58', 'counsel': '#4a5560', 'witness': '#55505e', 'public': '#646a70'}
OUTLINE = '#1c1a18'


@dataclass
class Style:
    roles: tuple = ('judge', 'counsel', 'witness', 'public')
    labels: bool = False
    wireframe: bool = False


def render(room, camera, style, base=None):
    image = base.convert('RGBA') if base else Image.new('RGBA', (camera.width, camera.height), '#000000')
    overlay = Image.new('RGBA', image.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    if not style.wireframe:
        for wall in room.walls:
            _polygon(draw, camera.project_polygon(wall.corners), (wall.color, OUTLINE))
    for item in _depth_sorted(room, camera, style):
        _paint(overlay, camera, (item, style))
    if style.labels:
        _label_all(draw, camera, (room, style))
    alpha = 150 if base else 255
    overlay.putalpha(overlay.getchannel('A').point(lambda a: min(a, alpha)))
    return Image.alpha_composite(image, overlay)


def _depth_sorted(room, camera, style):
    people = [p for p in room.people if p.role in style.roles]
    keyed = [(camera.distance(_box_center(b)), b) for b in room.boxes]
    keyed += [(camera.distance(p.feet) - 0.05, p) for p in people]
    keyed += [(camera.distance(d.center), d) for d in room.discs]
    return [item for _, item in sorted(keyed, key=lambda k: -k[0])]


def _paint(layer, camera, job):
    item, style = job
    draw = ImageDraw.Draw(layer)
    if hasattr(item, 'sprite'):
        _paste_person(layer, camera, (item, style.wireframe))
    elif hasattr(item, 'radius'):
        _polygon(draw, camera.project_polygon(_disc_points(item)), (None if style.wireframe else item.color, item.color))
    else:
        for face in _visible_faces(item, camera):
            _polygon(draw, camera.project_polygon(face), (None if style.wireframe else item.color, OUTLINE))
        _paint_trim(draw, camera, item)


def _polygon(draw, points, colors):
    fill, outline = colors
    if len(points) >= 3:
        draw.polygon(points, fill=fill, outline=outline, width=2)


def _box_center(box):
    return tuple((a + b) / 2 for a, b in zip(box.lo, box.hi))


def _visible_faces(box, camera):
    (x0, y0, z0), (x1, y1, z1) = box.lo, box.hi
    faces = [((-1, 0, 0), [(x0, y0, z0), (x0, y0, z1), (x0, y1, z1), (x0, y1, z0)]),
             ((1, 0, 0), [(x1, y0, z0), (x1, y1, z0), (x1, y1, z1), (x1, y0, z1)]),
             ((0, 1, 0), [(x0, y1, z0), (x0, y1, z1), (x1, y1, z1), (x1, y1, z0)]),
             ((0, 0, -1), [(x0, y0, z0), (x0, y1, z0), (x1, y1, z0), (x1, y0, z0)]),
             ((0, 0, 1), [(x0, y0, z1), (x1, y0, z1), (x1, y1, z1), (x0, y1, z1)])]
    eye = (camera.x, camera.y, camera.z)
    return [pts for normal, pts in faces if _faces_eye(normal, (pts[0], eye))]


def _faces_eye(normal, points):
    corner, eye = points
    return sum(n * (e - c) for n, e, c in zip(normal, eye, corner)) > 0


def _paint_trim(draw, camera, box):
    """Gold lip along the top front edges, so counters read as counters."""
    if not box.trim:
        return
    (x0, _, z0), (x1, y1, z1) = box.lo, box.hi
    for edge in (((x0, y1, z0), (x1, y1, z0)), ((x0, y1, z0), (x0, y1, z1)), ((x1, y1, z0), (x1, y1, z1))):
        ends = [camera.project(p) for p in edge]
        if None not in ends:
            draw.line(ends, fill=box.trim, width=3)


def _disc_points(disc):
    cx, cy, cz = disc.center
    return [(cx + disc.radius * math.cos(a / 16 * math.pi), cy + disc.radius * math.sin(a / 16 * math.pi), cz)
            for a in range(32)]


def _person_rect(camera, person):
    """Screen box of the bust: head top down to the hip line (sprite ink bottom)."""
    x, _, z = person.feet
    head = camera.project((x, person.head_top, z))
    hip = camera.project((x, person.head_top - s.BUST_HEIGHT, z))
    if head is None or hip is None:
        return None
    return head, hip


def _paste_person(layer, camera, job):
    person, wireframe = job
    rect = _person_rect(camera, person)
    if rect is None:
        return
    (hx, hy), (_, by) = rect
    sprite = Image.open(ASSETS / f'{person.sprite}.webp').convert('RGBA')
    sprite = sprite.crop(sprite.getchannel('A').getbbox())
    height = max(2, round(by - hy))
    width = max(2, round(sprite.width * height / sprite.height))
    mask = sprite.getchannel('A').resize((width, height), Image.LANCZOS).point(lambda a: 255 if a > 110 else 0)
    if person.flip:
        mask = ImageOps.mirror(mask)
    fill = Image.new('RGBA', mask.size, (0, 0, 0, 0) if wireframe else ROLE_TINT[person.role])
    edge = mask.filter(ImageFilter.FIND_EDGES)
    fill.paste(OUTLINE if not wireframe else '#ff3df0', mask=edge)
    layer.alpha_composite(Image.composite(fill, Image.new('RGBA', mask.size), mask), (round(hx - width / 2), round(hy)))


def _label_all(draw, camera, job):
    room, style = job
    seen = set()
    for item in room.boxes + room.discs + [p for p in room.people if p.role in style.roles]:
        anchor = item.feet if hasattr(item, 'feet') else (item.center if hasattr(item, 'radius') else _box_center(item))
        point = camera.project(anchor)
        key = (item.label, round(point[0] / 120) if point else 0)
        if point is None or key in seen or item.label in ('gallery row', 'public'):
            continue
        seen.add(key)
        draw.text((point[0] + 4, point[1] - 14), item.label, fill='#fff7c0', stroke_width=2, stroke_fill='#000')
