"""Courtroom layout in world meters, shared by every gallery framing.

Defense on the left wall, prosecution on the right, judge at the far end, witness
podium in the aisle with its open side toward the well. The side galleries sit on
top of the panels behind the counsel desks, so close-ups never show them.
"""

from dataclasses import dataclass, field
from . import scale as s

ROOM_HALF_WIDTH = 5.0
GALLERY_OUTER = 7.7
BACK_WALL_Z = 11.5
FRONT_Z = -3.0


@dataclass
class Box:
    label: str
    lo: tuple
    hi: tuple
    color: str
    trim: str | None = None


@dataclass
class Wall:
    label: str
    corners: list
    color: str


@dataclass
class Disc:
    label: str
    center: tuple
    radius: float
    color: str


@dataclass
class Person:
    label: str
    sprite: str
    feet: tuple
    head_top: float
    flip: bool = False
    role: str = 'public'


@dataclass
class Room:
    walls: list = field(default_factory=list)
    boxes: list = field(default_factory=list)
    discs: list = field(default_factory=list)
    people: list = field(default_factory=list)


def build_room():
    room = Room()
    _add_shell(room)
    _add_judge(room)
    for side in (-1, 1):
        _add_counsel(room, side)
        _add_gallery(room, side)
    _add_podium(room)
    return room


def _add_shell(room):
    w, g, b, f = ROOM_HALF_WIDTH, GALLERY_OUTER, BACK_WALL_Z, FRONT_Z
    room.walls.append(Wall('floor', [(-g, 0, f), (g, 0, f), (g, 0, b), (-g, 0, b)], '#8a6a4a'))
    room.walls.append(Wall('ceiling', [(-g, 7, f), (g, 7, f), (g, 7, b), (-g, 7, b)], '#8f7f6c'))
    room.walls.append(Wall('back wall', [(-g, 0, b), (g, 0, b), (g, 7, b), (-g, 7, b)], '#a8927a'))
    for side in (-1, 1):
        x, top = side * w, s.SIDE_PANEL_TOP
        room.walls.append(Wall('side panel', [(x, 0, f), (x, 0, b), (x, top, b), (x, top, f)], '#6b4a33'))
        room.walls.append(Wall('gallery wall', [(side * g, top, f), (side * g, top, b),
                                                (side * g, 7, b), (side * g, 7, f)], '#b8a590'))


def _add_judge(room):
    half, z = s.JUDGE_BENCH_WIDTH / 2, 10.0
    room.boxes.append(Box('judge bench', (-half, 0, z - 0.45), (half, s.JUDGE_LIP, z + 0.45),
                          '#7a4a2a', trim='#e0b860'))
    room.boxes.append(Box('dais', (-half, 0, z + 0.45), (half, s.JUDGE_DAIS, BACK_WALL_Z - 0.01), '#5e3a22'))
    chair = s.JUDGE_SHOULDERS / 2
    room.boxes.append(Box('judge chair', (-chair, s.JUDGE_DAIS, 10.95),
                          (chair, s.JUDGE_CHAIR_CREST, 11.1), '#26211e'))
    room.discs.append(Disc('scales medallion', (0, s.JUDGE_CHAIR_CREST + 0.45, BACK_WALL_Z - 0.02),
                           s.JUDGE_SHOULDERS * 0.55, '#c5a059'))
    room.people.append(Person('judge', 'judge_neutral', (0, s.JUDGE_DAIS, 10.7),
                              s.JUDGE_HEAD, role='judge'))


def _add_counsel(room, side):
    near, far = side * 2.8, side * 3.6
    lo, hi = (min(near, far), 0, 4.0), (max(near, far), s.COUNTER_HEIGHT, 6.8)
    label = 'defense desk' if side < 0 else 'prosecution desk'
    room.boxes.append(Box(label, lo, hi, '#7a4a2a', trim='#c5a059'))
    sprite, name = ('donramon_idle', 'defense') if side < 0 else ('supersam_idle', 'prosecution')
    room.people.append(Person(name, sprite, (side * 4.1, 0, 5.4), s.PERSON_HEIGHT,
                              flip=side > 0, role='counsel'))


PUBLIC_SPRITES = ['florinda_idle', 'jirafales_idle', 'clotilde_idle', 'barriga_idle',
                  'jaimito_idle', 'chompiras_idle', 'maruja_idle', 'nono_idle', 'cecilio_idle']


def _add_gallery(room, side):
    w, top = ROOM_HALF_WIDTH, s.SIDE_PANEL_TOP
    room.boxes.append(Box('gallery parapet', *_span(side, w - 0.15, w, top, top + s.COUNTER_HEIGHT),
                          '#6b4a33', trim='#c5a059'))
    for row in range(s.GALLERY_ROWS):
        inner = w + row * s.GALLERY_ROW_DEPTH
        floor = top + row * s.GALLERY_ROW_RISE
        room.boxes.append(Box('gallery row', *_span(side, inner, GALLERY_OUTER, top, floor + 0.02),
                              '#9a8070'))
        _seat_public(room, side, (inner + 0.45, floor, row))


def _seat_public(room, side, seat):
    x, floor, row = seat
    for i, z in enumerate((2.2, 3.6, 5.0, 6.4, 7.8, 9.2)):
        if (i + row) % 3 == 2:
            continue
        sprite = PUBLIC_SPRITES[(i * 3 + row + (side > 0) * 4) % len(PUBLIC_SPRITES)]
        room.people.append(Person('public', sprite, (side * x, floor, z + row * 0.3),
                                  floor + s.SEATED_HEAD, flip=side < 0))


def _span(side, inner, outer, y0, y1):
    xs = sorted((side * inner, side * outer))
    return ((xs[0], y0, 1.0), (xs[1], y1, 9.8))


def _add_podium(room):
    top, z0, z1 = s.COUNTER_HEIGHT + 0.05, 2.2, 3.0
    room.boxes.append(Box('podium front', (-0.55, 0, z1 - 0.1), (0.55, top, z1), '#7a4a2a', trim='#c5a059'))
    for x in (-0.55, 0.45):
        room.boxes.append(Box('podium rail', (x, 0, z0), (x + 0.1, top, z1), '#7a4a2a', trim='#c5a059'))
    room.people.append(Person('witness', 'casimiro_amable', (0, 0, 2.55), s.PERSON_HEIGHT, role='witness'))
