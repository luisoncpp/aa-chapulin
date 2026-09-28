# bg_gallery_case5_secretary_berrondo_witness — hoja de hechos

Clase: `bg`. Variante del plano aprobado `bg_gallery.webp`, para el testimonio 3 del día 3 tras la separación de Super Sam (§15.3–15.4 de `case-5-el-tomo-trece.md`). Imagen: `assets/bg_gallery_case5_secretary_berrondo_witness.webp`.

## Hechos a verificar

### F1 Contenido

- [x] `PINTAR` — Don Ramón y el Chapulín tras la mesa de defensa, exactamente como en `bg_gallery_characters.webp` (`bg_gallery.md`, variante con personajes).
- [x] `PINTAR` — El secretario de acuerdos en la mesa de fiscalía, con traje oscuro, lentes, lápiz en la oreja y libro abierto (§3, §15.3, `secretario_leyendo`).
- [x] `PINTAR` — Berrondo declara dentro de la U del podio central, del lado de la cámara, de espaldas tres cuartos y mirando al juez: canas, lentes de media luna, traje oscuro de tres piezas, leontina dorada y tomo bajo el brazo (§15.4, §23.2 A).
- [x] `PINTAR` — La bolsa de lona que dejó Sam sobre la mesa de fiscalía (§15.3; §15.4 cierre). La bolsa está llena (rellena de algodón) y lleva el `$` de los sprites de Sam.
- [x] `AUSENTE` — Super Sam entre quienes ocupan las mesas (§15.3, separación por el Juez).
- [x] `PINTAR` — Gradas, juez, mesas, podio, micrófono y sala conservados pixel por pixel de `bg_gallery.webp` fuera de las columnas de personajes (`bg_gallery.md`).

### F2 Texto en imagen

- [x] `AUSENTE` — Rótulos, marcas de agua y texto legible (§23.0; `bg_gallery.md`).

### F3 Cifras, fechas y horas

- [x] `NO CONTRADECIR` — La variante no imprime fecha ni hora (`bg_gallery.md`).

### F4 Contrato en pantalla

- [x] `PINTAR` — Berrondo queda en el estrado de testigos durante D3-T3, mientras el secretario representa al ministerio público (§15.4; §15.3, resolución del Juez).
- [x] `NO CONTRADECIR` — El nombre de archivo evita los disparadores de mobiliario automático `bg_judge`, `bg_defense`, `bg_courtroom` y `bg_witness` (`docs/live/glossary.md`). Usar con `furniture: 'none'`.

### F5 Estilo

- [x] Contorno carbón y sombreado plano del linaje Ace Attorney; televisión mexicana de los setenta; sin fotorrealismo, 3D, acuarela, anime moderno, magenta de primer plano ni texto inglés (§23.0).

### F6 Localización

- [x] `NO CONTRADECIR` — Imagen compartida entre ES y EN, sin texto para traducir (§23.3; `bg_gallery.md`).

## Consistencia (regenerar juntos)

- `bg_gallery` — comparte la sala. Regenerar juntos; este activo no es fuente de verdad del otro.
- `bg_gallery_characters` — comparte defensa y espectadores. Regenerar juntos; este activo no es fuente de verdad del otro.
- `berrondo_idle` y `secretario_leyendo` — fijan las identidades. Regenerar juntos; este activo no es fuente de verdad de ellos.
- `bg_fiscalia` — pinta la bolsa con sello verde, en contra del `$` de las láminas de galería. Conflicto abierto, abajo.

## Conflictos abiertos

Ninguno para el testimonio 3 del día 3.

## Hallazgos de auditoría 2026-09-27

**Veredicto:** cumple en reparto, posición, estilo y exclusiones. Archivo WebP sin pérdida de 1376×768.

**Cumple:** F1: recortes ampliados del podio, defensa y mesa fiscal muestran a Berrondo detrás del frente del podio, al secretario con el libro y la bolsa sobre la mesa. El micrófono y los cantos de los muebles permanecen legibles. F2–F3: no hay texto, fecha ni marca de agua. F4–F6: corresponde al estado posterior a la separación, comparte ES/EN y conserva la identidad de los bustos.

**Defectos confirmados:** ninguno en los recortes revisados. La comparación de píxeles contra `bg_gallery.webp` encontró cero cambios fuera de las columnas de defensa, fiscalía y podio.

## Recomposición 2026-09-27 (defectos del usuario)

El usuario encontró un defecto en la versión anterior: Berrondo estaba más allá del frente del podio y miraba a la cámara. Respaldo: `tools/masters/bg_gallery_case5_secretary_berrondo_witness_before_witness_side_fix_20260927.webp`. Ahora se usa el recorte de espaldas `bg_gallery_berrondo_witness.png`, dentro de la U. El Secretario está en fiscalía (`x=1120`, 1.76 m) y la bolsa llena con `$` está sobre la mesa.

`tools/compose_gallery_case5.py` (con las piezas en `tools/compose_gallery_case5_common.py`) compone las siete láminas del Caso 5. Copia `bg_gallery.webp` y copia píxel por píxel las columnas de defensa de `bg_gallery_characters.webp`. Escala cada figura de fiscalía con la altura de la mesa (0.95 m) y restaura la mesa con la línea ajustada del canto. El testigo se escala con la escala de suelo que se ajusta en las esquinas de las dos mesas (168 px/m con los pies en `y=696`) y se coloca dentro de la U del podio. Los barandales y los balaustres se restauran del fondo limpio. Este script sustituye a `compose_gallery_case5_sam_berrondo.py`, `compose_gallery_secretary_berrondo.py` y `compose_gallery_case5_empty_bag.py`.

**Bolsa de Sam:** lleva el signo `$` oscuro de los sprites `supersam_*` y de `bg_gallery_characters.webp`, nunca el sello verde. Desde agosto la lleva rellena de algodón (`docs/specs/case-5-el-tomo-trece.md:2589`), así que en la sala se ve llena, tanto en su mano como sobre la mesa. Recortes: `bg_gallery_characters_supersam_standing.png` (bolsa en la mano) y `bg_gallery_sam_bag_on_table.png` (bolsa sobre la mesa). Los recortes con sello verde `bg_gallery_case5_sam_standing_seal*.png` y la bolsa plana `bg_gallery_case5_empty_bag_cutout*.png` ya no se usaban y se eliminaron de `tools/masters/` el 2026-09-27; quedan los respaldos `*_before_*` de las láminas.

**Inconsistencia abierta con `bg_fiscalia.webp`:** el despacho pinta la bolsa doblada con sello verde, y las láminas de galería llevan el `$` de los sprites. El usuario decidió el 2026-09-27 no tocar `bg_fiscalia.webp`; falta unificar la marca.

## Hallazgos de auditoría 2026-09-27 (recomposición)

**Veredicto:** cumple en contenido, posición, estilo y exclusiones. ~~La auditoría anterior («Berrondo detrás del frente del podio»)~~ queda retirada porque el usuario la rechazó.

**Cumple:** F1: en el recorte del podio, Berrondo está de espaldas tres cuartos hacia el juez, entre los barandales, con el pelo blanco, el cordoncillo y el tomo. En el recorte de fiscalía, el Secretario lee con lentes y lápiz, con la cadera en el canto. La bolsa llena con `$` está sobre la mesa y Sam no aparece. F2–F3: no hay texto ni cifras nuevas. F4–F6: una sola lámina, 1376×768 sin pérdida. Píxeles: 0 cambios fuera de las columnas permitidas, 0 en la defensa, 0 bajo el canto de la mesa fiscal y 0 en los barandales.

**Defectos confirmados:** `MENOR · F1`: el micrófono queda oculto tras la espalda del testigo, igual que en `bg_gallery_case5_berrondo_witness_sam`.
