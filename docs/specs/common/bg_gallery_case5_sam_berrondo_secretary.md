# bg_gallery_case5_sam_berrondo_secretary — hoja de hechos

Clase: `bg`. Imagen: `assets/bg_gallery_case5_sam_berrondo_secretary.webp`. Uso: apertura del juicio del día 2, tras la lectura del libro negro (`src/case/case5/Private/trial_day2.ts:25`). Base: [[docs/specs/common/bg_gallery.md]].

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Don Ramón y el Chapulín en defensa; Secretario lector, Super Sam con bolsa y Berrondo en fiscalía; juez y ocho espectadores (`src/case/case5/Private/trial_day2.ts:25`; `docs/specs/case-5-el-tomo-trece.md:895`).
- [ ] `PINTAR` — En fiscalía, Secretario a la izquierda, Sam al centro, Berrondo a la derecha de Sam en pantalla (`docs/specs/case-5-el-tomo-trece.md:895`; `docs/specs/case-5-el-tomo-trece.md:153`).
- [ ] `PINTAR` — Secretario sostiene libro abierto; Berrondo conserva lentes, cordoncillo, leontina y tomo (`docs/specs/case-5-el-tomo-trece.md:153`; `docs/specs/case-5-el-tomo-trece.md:4165`).
- [ ] `NO CONTRADECIR` — Mesas y podio originales, sin figuras recortadas fuera de la columna de fiscalía (`docs/specs/common/bg_gallery.md`).

### F2 Texto en imagen

- [ ] `AUSENTE` — Rótulos, subtítulos y marca de agua nuevos.

### F3 Cifras, fechas y horas

- [ ] `AUSENTE` — Cifras añadidas a la sala.

### F4 Contrato en pantalla

- [ ] `NO CONTRADECIR` — La lámina comparte ES/EN y requiere `furniture: 'none'` (`docs/live/glossary.md`).

### F5 Estilo

- [ ] `PINTAR` — Contrato 2D Capcom Ace Attorney GBA/DS, contorno carbón, cel-shading y periodo Chespirito; sin fotorrealismo, 3D, acuarela, anime moderno, texto inglés ni magenta (`docs/specs/case-5-el-tomo-trece.md:4138`).

### F6 Localización

- [ ] `NO CONTRADECIR` — Una lámina sin variante `_en`.

## Consistencia

- `bg_gallery.webp` — sala, muebles, público y juez; sólo se agregan figuras.
- `bg_gallery_case5_sam_berrondo.webp` — mismo orden de Sam y Berrondo. No es fuente de verdad del guion.
- `secretario_leyendo.webp` — identidad del Secretario. No es fuente de verdad de la sala.

## Hallazgos de auditoría 2026-09-27

**Veredicto:** cumple, con una superposición menor entre libro y bolsa que no oculta los rostros.

**Cumple:** F1: los recortes individuales muestran a los tres hombres distinguibles, el libro abierto, la bolsa con el sello verde del Caso 5 y Berrondo a la derecha de Sam. Defensa, juez y ocho espectadores permanecen. F2–F3: sin texto o cifras nuevas. F4–F6: mismo fondo y estilo; 0 píxeles distintos fuera de las columnas de mesa y podio permitidas, 0 diferencias en defensa frente a `bg_gallery_characters.webp`, 0 diferencias en el frente de la mesa fiscal.

**Defectos confirmados:** `MENOR · MALFORMADO · F1`: la bolsa alzada de Sam se superpone al borde derecho del libro del Secretario, sin tapar el rostro ni impedir reconocer el libro. Una nueva composición de tres figuras en una mesa de 242 píxeles podría separarlos, pero perdería la escala aprobada.

## Recomposición 2026-09-27 (defectos del usuario)

El usuario encontró dos defectos en la versión anterior: Berrondo miraba hacia la derecha, y el Secretario era demasiado bajo y quedaba más allá del extremo de la mesa, junto a la columna y cerca del juez. Respaldo: `tools/masters/bg_gallery_case5_sam_berrondo_secretary_before_secretary_bench_fix_20260927.webp`.

Los tres ocupan el canto trasero de la mesa fiscal. De izquierda a derecha en pantalla, que aquí es de lejos a cerca: Secretario `x=1026` (1.76 m), Sam `x=1100` (1.88 m) y Berrondo `x=1151` (1.83 m). Cada uno se escala con la altura de la mesa en su columna.

`tools/compose_gallery_case5.py` (con las piezas en `tools/compose_gallery_case5_common.py`) compone las siete láminas del Caso 5. Copia `bg_gallery.webp` y copia píxel por píxel las columnas de defensa de `bg_gallery_characters.webp`. Escala cada figura de fiscalía con la altura de la mesa (0.95 m) y restaura la mesa con la línea ajustada del canto. El testigo se escala con la escala de suelo que se ajusta en las esquinas de las dos mesas (168 px/m con los pies en `y=696`) y se coloca dentro de la U del podio. Los barandales y los balaustres se restauran del fondo limpio. Este script sustituye a `compose_gallery_case5_sam_berrondo.py`, `compose_gallery_secretary_berrondo.py` y `compose_gallery_case5_empty_bag.py`.

**Bolsa de Sam:** lleva el signo `$` oscuro de los sprites `supersam_*` y de `bg_gallery_characters.webp`, nunca el sello verde. Desde agosto la lleva rellena de algodón (`docs/specs/case-5-el-tomo-trece.md:2589`), así que en la sala se ve llena, tanto en su mano como sobre la mesa. Recortes: `bg_gallery_characters_supersam_standing.png` (bolsa en la mano) y `bg_gallery_sam_bag_on_table.png` (bolsa sobre la mesa). Los recortes con sello verde `bg_gallery_case5_sam_standing_seal*.png` y la bolsa plana `bg_gallery_case5_empty_bag_cutout*.png` ya no se usaban y se eliminaron de `tools/masters/` el 2026-09-27; quedan los respaldos `*_before_*` de las láminas.

**Inconsistencia abierta con `bg_fiscalia.webp`:** el despacho pinta la bolsa doblada con sello verde, y las láminas de galería llevan el `$` de los sprites. El usuario decidió el 2026-09-27 no tocar `bg_fiscalia.webp`; falta unificar la marca.

## Hallazgos de auditoría 2026-09-27 (recomposición)

**Veredicto:** cumple en contenido, orden, escala, estilo y exclusiones.

**Cumple:** F1: el recorte ampliado de fiscalía muestra al Secretario tras el extremo lejano de la mesa, leyendo el libro abierto, con lentes y lápiz en la oreja. Su cadera queda en el canto, a la misma escala que los otros dos. Sam ocupa el centro con la bolsa llena con `$`, y Berrondo está a su derecha, mirando hacia la izquierda. Los tres rostros se distinguen. El recorte ×4 del canto no muestra franjas ni picos. F2–F3: no hay texto ni cifras nuevas. F4–F6: una sola lámina, 1376×768 sin pérdida. Píxeles: 0 cambios fuera de las columnas de fiscalía y 0 en la defensa.

**Defectos confirmados:** `MENOR · F1`: la bolsa alzada de Sam tapa el lomo derecho del libro del Secretario, aunque el rostro y la página abierta siguen legibles. ~~El defecto anterior de libro y bolsa~~ se redujo al separar las figuras.
