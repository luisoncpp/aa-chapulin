# bg_gallery_case5_berrondo_witness_sam — hoja de hechos

Clase: `bg`. Imagen: `assets/bg_gallery_case5_berrondo_witness_sam.webp`. Uso: declaración voluntaria D2-T2, con reacciones de galería en `src/case/case5/Private/trial_day2_success.ts:95`, `:117` y `:127`. Base: [[docs/specs/common/bg_gallery.md]].

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Berrondo de pie dentro de la U del podio, del lado de la cámara, con el frente cerrado del podio entre él y el juez. Está de espaldas tres cuartos y mira al juez. Super Sam está en la mesa fiscal con su bolsa llena con `$` en la mano; Don Ramón y Chapulín en defensa (`docs/specs/case-5-el-tomo-trece.md:1892`; `docs/specs/case-5-el-tomo-trece.md:1990`).
- [ ] `PINTAR` — Berrondo tiene pelo blanco, lentes de media luna con cordoncillo, traje negro y tomo; Sam conserva uniforme azul y capa de bandera (`docs/specs/case-5-el-tomo-trece.md:4165`; `docs/lessons-learned/supersam-pose-identity-lock.md`).
- [ ] `NO CONTRADECIR` — Podio, micrófono, muebles, juez y público proceden de `bg_gallery.webp` (`docs/specs/common/bg_gallery.md`).

### F2 Texto en imagen

- [ ] `AUSENTE` — Rótulos, subtítulos y marcas de agua nuevos.

### F3 Cifras, fechas y horas

- [ ] `AUSENTE` — Fecha y número de caso pintados.

### F4 Contrato en pantalla

- [ ] `NO CONTRADECIR` — Compartida en ES/EN y con `furniture: 'none'` (`docs/live/glossary.md`).

### F5 Estilo

- [ ] `PINTAR` — Contrato 2D Capcom Ace Attorney GBA/DS, contorno carbón, cel-shading y Chespirito setentero; sin fotorrealismo, 3D, acuarela, anime moderno, texto inglés ni magenta (`docs/specs/case-5-el-tomo-trece.md:4138`).

### F6 Localización

- [ ] `NO CONTRADECIR` — Un solo archivo para ES y EN.

## Consistencia

- `bg_gallery.webp` — podio y sala originales, píxel por píxel fuera de inserciones.
- `berrondo_idle.webp` — identidad del testigo. No es fuente de verdad de la sala.
- `bg_gallery_case5_sam_berrondo.webp` — Sam mantiene el uniforme y la bolsa con `$`. No es fuente de verdad del podio.

## Hallazgos de auditoría 2026-09-27

**Veredicto:** cumple en estado, identidad, estilo y preservación del podio.

**Cumple:** F1: recortes ampliados muestran a Berrondo detrás del podio, mirando hacia el estrado del juez en tres cuartos, con el micrófono delante; Sam ocupa la fiscalía con la bolsa de sello verde. F2–F3: sin texto ni cifras nuevas. F4–F6: continuidad de sala, ES/EN compartida; 0 píxeles distintos fuera de las columnas de mesa y podio permitidas, 0 diferencias en defensa frente a `bg_gallery_characters.webp`, 0 diferencias en el frente de la mesa fiscal.

**Defectos confirmados:** ninguno en los recortes revisados.

## Recomposición 2026-09-27 (defectos del usuario)

El usuario encontró dos defectos en la versión anterior: Berrondo estaba más allá del frente del podio, del lado del juez, y la bolsa de Sam llevaba el sello verde. Respaldo: `tools/masters/bg_gallery_case5_berrondo_witness_sam_before_witness_side_fix_20260927.webp`. La orientación de Berrondo era correcta y se conservó. El lado abierto del podio mira a la cámara (`bg_gallery.md`, F1), así que el testigo entra por ahí y queda dentro de la U. Su cuerpo tapa el micrófono, que está en el remate del frente, delante de él.

`tools/compose_gallery_case5.py` (con las piezas en `tools/compose_gallery_case5_common.py`) compone las siete láminas del Caso 5. Copia `bg_gallery.webp` y copia píxel por píxel las columnas de defensa de `bg_gallery_characters.webp`. Escala cada figura de fiscalía con la altura de la mesa (0.95 m) y restaura la mesa con la línea ajustada del canto. El testigo se escala con la escala de suelo que se ajusta en las esquinas de las dos mesas (168 px/m con los pies en `y=696`) y se coloca dentro de la U del podio. Los barandales y los balaustres se restauran del fondo limpio. Este script sustituye a `compose_gallery_case5_sam_berrondo.py`, `compose_gallery_secretary_berrondo.py` y `compose_gallery_case5_empty_bag.py`.

**Bolsa de Sam:** lleva el signo `$` oscuro de los sprites `supersam_*` y de `bg_gallery_characters.webp`, nunca el sello verde. Desde agosto la lleva rellena de algodón (`docs/specs/case-5-el-tomo-trece.md:2589`), así que en la sala se ve llena, tanto en su mano como sobre la mesa. Recortes: `bg_gallery_characters_supersam_standing.png` (bolsa en la mano) y `bg_gallery_sam_bag_on_table.png` (bolsa sobre la mesa). Los recortes con sello verde `bg_gallery_case5_sam_standing_seal*.png` y la bolsa plana `bg_gallery_case5_empty_bag_cutout*.png` ya no se usaban y se eliminaron de `tools/masters/` el 2026-09-27; quedan los respaldos `*_before_*` de las láminas.

**Inconsistencia abierta con `bg_fiscalia.webp`:** el despacho pinta la bolsa doblada con sello verde, y las láminas de galería llevan el `$` de los sprites. El usuario decidió el 2026-09-27 no tocar `bg_fiscalia.webp`; falta unificar la marca.

## Hallazgos de auditoría 2026-09-27 (recomposición)

**Veredicto:** cumple en contenido, posición, estilo y exclusiones. ~~La auditoría anterior del mismo día («Berrondo detrás del podio… sello verde»)~~ queda retirada porque el usuario la rechazó.

**Cumple:** F1: el recorte del podio muestra a Berrondo de espaldas tres cuartos entre los dos barandales, con el frente cerrado delante y los pies en el suelo interior. Se leen el pelo blanco, el cordoncillo de los lentes, el traje negro y el tomo bajo el brazo. Mide 1.83 m con la escala de suelo del podio. En el recorte ×3, los barandales y los balaustres quedan delante de él y no hay bordes cortados. Sam está en su posición aprobada con la bolsa llena con `$`. F2–F3: no hay texto ni cifras nuevas. F4–F6: una sola lámina, 1376×768 sin pérdida. Píxeles: 0 cambios fuera de las columnas de fiscalía y del podio, 0 en la defensa y 0 en los barandales (`x<612` y `x≥768`, `y≥500`).

**Defectos confirmados:** `MENOR · F1`: el micrófono queda oculto tras la espalda del testigo. Es lo físicamente correcto, porque el micrófono está delante de él, pero ya no se ve en esta lámina.
