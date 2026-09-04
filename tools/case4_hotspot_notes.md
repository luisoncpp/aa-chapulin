# Case 4 hotspot notes (painted-object guesses)

Percent boxes are **guesses on the processed 1536×1024 plates** (`assets/bg_hotel_*.webp`). The investigation stage is 960×540 with CSS `background-size: cover` + center, so it trims ~equal bands from the top and bottom of the 3:2 plate (~8% of plate height each side). Do not place a clickable box only in the extreme top or bottom 10% of these notes without overlaying a 960×540 cover crop. Re-tune after overlaying [[docs/lessons-learned/investigation-hotspot-cover-crop.md]].

Deep-examine bounds below are **percent of `assets/examine_*.webp` (960×540)** and must stay aligned with the spec Present & Point boxes.

## `bg_hotel_lobby.webp`

- Reception desk: ~52–96% X, 42–78% Y
- Key pigeonholes behind the desk: ~58–92% X, 22–52% Y
- Persian red carpet runner: ~4–48% X, 48–92% Y
- Chandelier (crystals hang into mid-frame): ~28–68% X, 4–28% Y — top of the fixture may clip in 16:9
- Arch / hallway: ~18–48% X, 28–58% Y

## `bg_hotel_suite.webp` (Suite 304)

- Door + chain lock / splintered jamb: ~0–22% X, 18–78% Y
- Wrought-iron radiator (left of fireplace): ~24–40% X, 48–82% Y
- Marble fireplace: ~40–62% X, 22–62% Y
- Chalk body outline on the rug (near fireplace): ~28–58% X, 58–82% Y
- Coffee table: ~58–92% X, 62–92% Y
- Ice bucket on the table: ~68–84% X, 64–86% Y — the **wide plate still shows ice cubes**; the melted-water fact lives on `examine_foto.webp`
- Wicker hamper: ~84–98% X, 42–78% Y
- Window / gold curtains: ~70–98% X, 12–48% Y

## `bg_hotel_bar.webp` (El Chapuzón)

- Wood bar counter: ~2–42% X, 42–78% Y
- Leather stools: ~8–38% X, 58–86% Y
- Bottle rack / “EL CHAPUZON” sign: ~6–40% X, 12–42% Y
- Umbrella tables: ~48–92% X, 42–78% Y
- Garden / palms beyond the rail: ~40–100% X, 18–48% Y

## `bg_hotel_sotano.webp`

- Gauge panel: ~4–22% X, 32–62% Y
- Horizontal riveted steam pipe: ~8–70% X, 38–58% Y
- Coal furnace door + glow: ~58–92% X, 28–78% Y
- Ash pit / ember tray: ~62–88% X, 70–88% Y
- “SALA DE CALDERAS” sign: ~4–26% X, 12–32% Y

## `bg_hotel_suite204.webp`

- Valet stand + black tailcoat: ~4–26% X, 28–86% Y
- Oak wardrobe (open door): ~22–56% X, 8–76% Y
- Leather briefcase at wardrobe base: ~24–38% X, 68–84% Y
- Radiator: ~60–88% X, 46–90% Y
- Brass purge valve on the radiator: ~74–84% X, 56–74% Y

## `bg_hotel_cava.webp`

- Oak racks / bottles (back wall): ~8–70% X, 18–62% Y
- Locked private bins (right, padlocks): ~62–96% X, 42–78% Y
- Nameplate bin (“Marqués…”): ~78–96% X, 48–72% Y
- Barrels: ~8–48% X, 48–78% Y
- Tasting table + glass: ~28–62% X, 62–88% Y

## `bg_hotel_azotea.webp`

- Elevator motor housing / gauges / wheel: ~32–68% X, 22–72% Y
- Steel cables above the housing: ~40–60% X, 4–24% Y — may clip in 16:9
- English travel trunk in the machinery recess: ~38–62% X, 58–78% Y
- Brick chimney flues: ~12–28% X and ~70–86% X, 18–52% Y
- “GRAN HOTEL BUENA VISTA” roof sign: ~4–28% X, 22–42% Y

## Examine plates (`examine_*.webp`)

These match the spec click boxes; overlay before changing numbers.

| File | Target | Spec box `[minX, minY, maxX, maxY]` | What landed |
|------|--------|--------------------------------------|-------------|
| `examine_foto.webp` | Metal ice bucket with melted water, no cubes | `[56, 46, 76, 70]` | Galvanized bucket body fills this rectangle; bottle and broken glass sit to the left of it |
| `examine_plano.webp` | Vertical steam pipe 204↔304↔caldera | `[42, 26, 58, 68]` | Riveted stack + both radiators sit in the center column |
| `examine_botella.webp` | Red wax seal dome + needle puncture | `[44, 4, 56, 24]` | Standing bottle; glossy red dome with a dark puncture occupies the top-center box |
| `examine_cadena.webp` | Brass slide rail, nylon on the bolt, jamb scratch | (no Present & Point box) | Horizontal brass lock fills the frame; nylon trails into the jamb gap; scratch below the plate |
| `examine_nota.webp` | 1970s telegram, readable Spanish | (no Present & Point box) | Telégrafos Nacionales form; postmark Terminal de Autobuses 24 OCT 1978 8:15 PM; Conde de Montemayor; $50,000 / Collar de Cleopatra / habitación 304 |
