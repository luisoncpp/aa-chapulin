# bg_gallery_case5_sam_berrondo — hoja de hechos

Clase: `bg`. Imagen: `assets/bg_gallery_case5_sam_berrondo.webp`. Uso: días 1 y 2 del Caso 5 y día 3 antes de la declaración de Sam. Base: [[docs/specs/common/bg_gallery.md]].

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Don Ramón y el Chapulín detrás de defensa; Super Sam y Berrondo de pie detrás de fiscalía; juez y ocho espectadores en sus sitios. La bolsa está en la mano de Sam (`docs/specs/case-5-el-tomo-trece.md:895`; `docs/specs/case-5-el-tomo-trece.md:2585`).
- [ ] `PINTAR` — Berrondo a la derecha de Sam en pantalla: la lectura visual de «a la derecha de Super Sam» fija ese orden para la panorámica (`docs/specs/case-5-el-tomo-trece.md:895`).
- [ ] `PINTAR` — Berrondo mira hacia la izquierda de la pantalla, hacia la defensa y el juez, como Sam.
- [ ] `PINTAR` — Berrondo conserva lentes de media luna, cordoncillo, traje negro de tres piezas, leontina y tomo bajo el brazo (`docs/specs/case-5-el-tomo-trece.md:4165`).
- [ ] `NO CONTRADECIR` — Sala, público, juez, defensa y muebles son la misma pintura aprobada de `bg_gallery.webp` y `bg_gallery_characters.webp` (`docs/specs/common/bg_gallery.md`).

### F2 Texto en imagen

- [ ] `AUSENTE` — Rótulos, subtítulos, marcas de agua y texto nuevo; la bolsa de Sam lleva el signo `$` oscuro de sus sprites (`assets/supersam_idle.webp`; `bg_gallery_characters.webp`).

### F3 Cifras, fechas y horas

- [ ] `AUSENTE` — Fecha, hora y número de caso pintados.

### F4 Contrato en pantalla

- [ ] `NO CONTRADECIR` — Panorama compartido entre ES y EN, `furniture: 'none'`; el nombre del archivo no dispara mobiliario dinámico (`docs/live/glossary.md`).

### F5 Estilo

- [ ] `PINTAR` — Ilustración 2D Capcom Ace Attorney GBA/DS, contorno carbón `#1A1A1A`, cel-shading, universo Chespirito setentero; sin fotorrealismo, 3D, acuarela, anime moderno, texto inglés ni magenta de primer plano (`docs/specs/case-5-el-tomo-trece.md:4138`).

### F6 Localización

- [ ] `NO CONTRADECIR` — Un solo archivo sin texto para ES y EN.

## Consistencia

- `bg_gallery.webp` — geometría y píxeles de sala. Se conserva, no se repinta.
- `bg_fiscalia.webp` — pinta la bolsa con sello verde y contradice el `$` de las láminas de galería (conflicto abierto, abajo).
- `bg_gallery_characters.webp` — composición de defensa y diseño de Super Sam. Sam y su bolsa con `$` se reutilizan tal cual.
- `berrondo_idle.webp` — identidad de Berrondo. No es fuente de verdad de la sala.

## Composición

`tools/compose_gallery_case5_sam_berrondo.py` compone recortes RGBA sobre una copia de `bg_gallery.webp`, recupera los muebles de la base y guarda WebP sin pérdida de 1376×768. `tools/masters/bg_gallery_case5_sam_standing_seal_v2.png` (eliminado el 2026-09-27) llevaba la bolsa de Sam con el sello del Caso 5; `tools/masters/bg_gallery_berrondo_standing_left.png` lo orienta hacia defensa. Las recomposiciones anteriores a las correcciones de orientación, orden, micrófono y sello quedaron respaldadas bajo `tools/masters/*_before_*_20260927.webp`.

## Hallazgos de auditoría 2026-09-27

**Veredicto:** cumple en elenco, orientación, estilo y continuidad de la sala.

**Cumple:** F1: los recortes de defensa, Sam, Berrondo, ambas gradas, juez y mesa muestran figuras legibles y muebles que ocultan las piernas; Berrondo está a la derecha de Sam. La bolsa de Sam tiene el sello de balanza verde de `bg_fiscalia.webp`. F2–F3: no hay texto, fecha ni marca nueva. F4–F6: una sola lámina compartida, fondo sin repintar, contorno y sombreado acordes. Comparación decodificada con `bg_gallery.webp`: 0 píxeles distintos fuera de las columnas permitidas, 0 diferencias en defensa frente a `bg_gallery_characters.webp`, 0 diferencias en el frente de la mesa fiscal.

**Defectos confirmados:** ninguno en los recortes revisados.

## Recomposición 2026-09-27 (defectos del usuario)

El usuario encontró dos defectos en la versión anterior: Berrondo miraba hacia la derecha, de espaldas a la defensa, y la bolsa de Sam llevaba el sello verde. Respaldo: `tools/masters/bg_gallery_case5_sam_berrondo_before_dollar_bag_facing_fix_20260927.webp`.

`tools/compose_gallery_case5.py` (con las piezas en `tools/compose_gallery_case5_common.py`) compone las siete láminas del Caso 5. Copia `bg_gallery.webp` y copia píxel por píxel las columnas de defensa de `bg_gallery_characters.webp`. Escala cada figura de fiscalía con la altura de la mesa (0.95 m) y restaura la mesa con la línea ajustada del canto. El testigo se escala con la escala de suelo que se ajusta en las esquinas de las dos mesas (168 px/m con los pies en `y=696`) y se coloca dentro de la U del podio. Los barandales y los balaustres se restauran del fondo limpio. Este script sustituye a `compose_gallery_case5_sam_berrondo.py`, `compose_gallery_secretary_berrondo.py` y `compose_gallery_case5_empty_bag.py`.

**Bolsa de Sam:** lleva el signo `$` oscuro de los sprites `supersam_*` y de `bg_gallery_characters.webp`, nunca el sello verde. Desde agosto la lleva rellena de algodón (`docs/specs/case-5-el-tomo-trece.md:2589`), así que en la sala se ve llena, tanto en su mano como sobre la mesa. Recortes: `bg_gallery_characters_supersam_standing.png` (bolsa en la mano) y `bg_gallery_sam_bag_on_table.png` (bolsa sobre la mesa). Los recortes con sello verde `bg_gallery_case5_sam_standing_seal*.png` y la bolsa plana `bg_gallery_case5_empty_bag_cutout*.png` ya no se usaban y se eliminaron de `tools/masters/` el 2026-09-27; quedan los respaldos `*_before_*` de las láminas.

**Inconsistencia abierta con `bg_fiscalia.webp`:** el despacho pinta la bolsa doblada con sello verde, y las láminas de galería llevan el `$` de los sprites. El usuario decidió el 2026-09-27 no tocar `bg_fiscalia.webp`; falta unificar la marca.

## Hallazgos de auditoría 2026-09-27 (recomposición)

**Veredicto:** cumple en contenido, orientación, estilo y exclusiones. ~~La auditoría anterior del mismo día~~ aprobó un Berrondo que miraba hacia la derecha y una bolsa con sello verde. El usuario rechazó las dos cosas.

**Cumple:** F1: en el recorte ampliado de fiscalía, Sam (recorte aprobado, `x=1072`) levanta la bolsa llena con `$`. Berrondo (`x=1142`) está a su derecha en pantalla y mira hacia la izquierda, con lentes de media luna, cordoncillo, leontina y tomo. Las caderas quedan a la altura del canto y la mesa oculta las piernas. El recorte ×4 del canto no muestra franjas ni picos. Defensa, juez y los ocho espectadores siguen intactos. F2–F3: no hay texto, fecha ni cifras nuevas; el `$` es la identidad de la bolsa. F4–F6: WebP sin pérdida de 1376×768, una sola lámina para ES y EN. Píxeles: 0 cambios fuera de las columnas de fiscalía, 0 en la defensa frente a `bg_gallery_characters.webp` y 0 bajo el canto de la mesa fiscal (`y≥495`). `python verify_assets.py` terminó sin errores.

**Defectos confirmados:** ninguno. Sigue abierta la marca de `bg_fiscalia.webp` (ver arriba).
