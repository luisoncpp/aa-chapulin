# bg_gallery_case5_empty_bag — hoja de hechos

Clase: `bg`. Variante del panorama `assets/bg_gallery.webp` para el final del juicio del día 3 del Caso 5. Guion: `src/case/case5/Private/trial_day3_success_berrondo.ts:54` y espejo inglés `trial_day3_success_berrondo_en.ts:54`.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — La misma sala, juez, podio, mesas y gradas del panorama `bg_gallery.webp` (`docs/specs/common/bg_gallery.md`, F1).
- [ ] `PINTAR` — Una sola bolsa de lona cruda, de pie sobre la mesa de fiscalía (`:2984`). Está **llena** (rellena de algodón desde agosto, `docs/specs/case-5-el-tomo-trece.md:2589`), atada en la boca y con el signo `$` oscuro de los sprites de Sam. ~~Doblada y visiblemente vacía~~: el usuario lo rechazó el 2026-09-27, porque la bolsa sólo aparece doblada y plana en su despacho.
- [ ] `AUSENTE` — Super Sam, Berrondo, el secretario, Don Ramón y el Chapulín de las mesas y del podio: la sala se vacía mientras Sam sale sin la bolsa (`docs/specs/case-5-el-tomo-trece.md:2984`).

### F2 Texto en imagen

- [ ] `AUSENTE` — Letras legibles, marcas de agua o números añadidos (`docs/specs/common/bg_gallery.md`, F2; `docs/specs/case-5-el-tomo-trece.md:4144`). El `$` de la bolsa es la identidad del objeto, no rotulación.

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — Una bolsa, sin cifra ni fecha pintada (`docs/specs/case-5-el-tomo-trece.md:2984`, I35).

### F4 Contrato en pantalla

- [ ] `PINTAR` — La línea «Super Sam sale sin la bolsa de lona, que se queda sobre la mesa» debe mostrar esa bolsa sobre la mesa de fiscalía (`src/case/case5/Private/trial_day3_success_berrondo.ts:54`).
- [ ] `NO CONTRADECIR` — El asset tiene 1376×768, se comparte en ES y EN y se estampa con `furniture: 'none'`; su nombre evita `bg_judge`, `bg_defense`, `bg_courtroom` y `bg_witness` (`docs/live/glossary.md`, entrada Galería).

### F5 Estilo

- [ ] `PINTAR` — Ilustración 2D estilo Capcom Ace Attorney de linaje GBA / Nintendo DS en alta definición, contorno oscuro continuo en carbón `#1A1A1A`, exterior más grueso que los detalles. Universo de televisión mexicana de los años setenta; papel, madera y polvo, madera barnizada, latón envejecido, luz de tungsteno. Sin fotorrealismo, render 3D, acuarela, textura fotográfica, anime moderno, cómic americano de superhéroes, marcas de agua, inglés ni rosa o magenta en primer plano (`docs/specs/case-5-el-tomo-trece.md:4138-4144`).

### F6 Localización

- [ ] `NO CONTRADECIR` — La misma lámina para ES y EN, sin texto que requiera traducción (`trial_day3_success_berrondo.ts:54`; `trial_day3_success_berrondo_en.ts:54`).

## Consistencia (regenerar juntos)

- `bg_gallery` — la misma sala y las mismas mesas; regenerar juntos, este activo no es fuente de verdad del otro.
- `bg_fiscalia` — muestra la bolsa en el despacho, doblada y con sello verde, lo que contradice el `$` (conflicto abierto).

## Conflictos abiertos

`bg_fiscalia.webp` y `docs/specs/case-5-el-tomo-trece.md:2273` muestran la bolsa vacía doblada con sello verde, mientras que el recorte de Super Sam en `bg_gallery_characters.webp` y el icono `bolsa_dolares.webp` llevan el signo `$` oscuro. ~~Este panorama sigue la bolsa del Caso 5 en la oficina~~. Desde el 2026-09-27, por decisión del usuario, sigue el `$` de los sprites. `bg_fiscalia.webp` no se toca y la marca sigue sin unificar. La línea dice que la sala «se vacía despacio»; los espectadores del panorama base pueden continuar visibles durante esa transición.

## Composición 2026-09-27

`tools/compose_gallery_case5_empty_bag.py` (ya sustituido) colocaba el recorte RGBA `tools/masters/bg_gallery_case5_empty_bag_cutout.png` (eliminado el 2026-09-27) sobre una copia del panorama aprobado. La bolsa se generó aislada con `image_gen`, usando la bolsa doblada de `assets/bg_fiscalia.webp` como referencia de identidad; el prompt pidió la dirección de arte completa de §23.0 y un sello abstracto sin letras. El primer recorte, demasiado abultado, era `tools/masters/bg_gallery_case5_empty_bag_cutout_puffed_20260927.png` (eliminado el 2026-09-27). El WebP se guarda sin pérdida. No se modificó el panorama base.

## Hallazgos de auditoría 2026-09-27

**Veredicto:** cumple en contenido, estado vacío de la mesa, identidad de la bolsa y estilo.

**Cumple:** F1: los recortes independientes del panorama, gradas, estrado, podio y ambas mesas muestran los mismos elementos que `bg_gallery.webp`; no hay abogados ni testigo. El recorte ampliado de la mesa derecha permite nombrar el objeto como una bolsa de lona cruda doblada, de bordes cosidos y sin volumen de monedas, apoyada sobre la cubierta. F2–F3: sello circular verde sin letras legibles, fechas o cifras añadidas. F4 y F6: el archivo mide 1376×768, sirve para la línea española e inglesa y su nombre no activa mobiliario dinámico. F5: el recorte conserva ilustración 2D de contorno oscuro y los materiales del panorama. La bolsa comparte pliegue plano, lona cruda y sello verde con `bg_fiscalia.webp`.

**Defectos confirmados:** ninguno en los recortes revisados.

**Comprobación de píxeles:** 3323 píxeles distintos frente a `bg_gallery.webp`, todos dentro de `x=1040..1135`, `y=419..471` de la mesa de fiscalía; cero píxeles distintos fuera de sus columnas. `python verify_assets.py` terminó correctamente.

## Recomposición 2026-09-27 (defectos del usuario)

El usuario encontró un defecto en la versión anterior: la bolsa estaba doblada, plana y con sello verde. Respaldo: `tools/masters/bg_gallery_case5_empty_bag_before_full_bag_fix_20260927.webp`. Ahora se usa el recorte `bg_gallery_sam_bag_on_table.png` (bolsa llena, `$`), de 46 px de alto con la escala de la mesa en `x=1072`, unos 0.4 m. Las mesas y el podio están vacíos.

`tools/compose_gallery_case5.py` (con las piezas en `tools/compose_gallery_case5_common.py`) compone las siete láminas del Caso 5. Copia `bg_gallery.webp` y copia píxel por píxel las columnas de defensa de `bg_gallery_characters.webp`. Escala cada figura de fiscalía con la altura de la mesa (0.95 m) y restaura la mesa con la línea ajustada del canto. El testigo se escala con la escala de suelo que se ajusta en las esquinas de las dos mesas (168 px/m con los pies en `y=696`) y se coloca dentro de la U del podio. Los barandales y los balaustres se restauran del fondo limpio. Este script sustituye a `compose_gallery_case5_sam_berrondo.py`, `compose_gallery_secretary_berrondo.py` y `compose_gallery_case5_empty_bag.py`.

**Bolsa de Sam:** lleva el signo `$` oscuro de los sprites `supersam_*` y de `bg_gallery_characters.webp`, nunca el sello verde. Desde agosto la lleva rellena de algodón (`docs/specs/case-5-el-tomo-trece.md:2589`), así que en la sala se ve llena, tanto en su mano como sobre la mesa. Recortes: `bg_gallery_characters_supersam_standing.png` (bolsa en la mano) y `bg_gallery_sam_bag_on_table.png` (bolsa sobre la mesa). Los recortes con sello verde `bg_gallery_case5_sam_standing_seal*.png` y la bolsa plana `bg_gallery_case5_empty_bag_cutout*.png` ya no se usaban y se eliminaron de `tools/masters/` el 2026-09-27; quedan los respaldos `*_before_*` de las láminas.

**Inconsistencia abierta con `bg_fiscalia.webp`:** el despacho pinta la bolsa doblada con sello verde, y las láminas de galería llevan el `$` de los sprites. El usuario decidió el 2026-09-27 no tocar `bg_fiscalia.webp`; falta unificar la marca.

## Hallazgos de auditoría 2026-09-27 (recomposición)

**Veredicto:** cumple en contenido, estado de la bolsa, estilo y exclusiones. ~~La auditoría anterior («bolsa de lona cruda doblada… sello verde»)~~ queda retirada porque el usuario la rechazó.

**Cumple:** F1: en el recorte ampliado, lo que hay sobre la cubierta de la mesa derecha se nombra como «una bolsa de lona abultada, atada, con `$`». Está de pie y no toca el canto. No hay abogados ni testigo, y el juez, el podio y las gradas son los de `bg_gallery.webp`. F2–F3: no se añadió texto, fecha ni cifra. F4–F6: 1376×768 sin pérdida, una sola lámina para ES y EN. Píxeles: 0 cambios fuera de las columnas de fiscalía, y la defensa es idéntica a la de `bg_gallery.webp`.

**Defectos confirmados:** ninguno.
