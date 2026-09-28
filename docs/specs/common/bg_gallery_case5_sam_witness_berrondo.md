# bg_gallery_case5_sam_witness_berrondo — hoja de hechos

Clase: `bg`. Imagen: `assets/bg_gallery_case5_sam_witness_berrondo.webp`. Uso: D3-T2, antes del relevo de fiscal; galería en `src/case/case5/Private/trial_day3_t2.ts:100` y `:117`. Base: [[docs/specs/common/bg_gallery.md]].

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Super Sam de pie dentro de la U del podio, del lado de la cámara, de espaldas tres cuartos y mirando al juez, con las manos libres y sin bolsa; Berrondo en fiscalía; Don Ramón y Chapulín en defensa (`docs/specs/case-5-el-tomo-trece.md:2585`).
- [ ] `PINTAR` — El secretario de acuerdos en la mesa fiscal junto a Berrondo, con traje oscuro, lentes, lápiz en la oreja y libro abierto: el Juez ya lo designó ministerio público antes de que Sam declare (`src/case/case5/Private/trial_day3_success.ts:84`).
- [ ] `PINTAR` — La bolsa de Sam, llena (rellena de algodón) y con el signo `$` de sus sprites, está de pie sobre la mesa fiscal, no en su mano (`docs/specs/case-5-el-tomo-trece.md:2585`; `docs/specs/case-5-el-tomo-trece.md:2984`).
- [ ] `PINTAR` — Sam tiene traje azul, capa de bandera y pelo rubio; Berrondo tiene pelo blanco, lentes con cordoncillo, traje negro, cadena de oro y tomo (`docs/specs/case-5-el-tomo-trece.md:4165`; `docs/lessons-learned/supersam-pose-identity-lock.md`).
- [ ] `NO CONTRADECIR` — Podio, micrófono, muebles, juez y público proceden de `bg_gallery.webp` (`docs/specs/common/bg_gallery.md`).

### F2 Texto en imagen

- [ ] `AUSENTE` — Rótulos, subtítulos y marcas de agua nuevos; el símbolo de la bolsa pertenece a la identidad del objeto.

### F3 Cifras, fechas y horas

- [ ] `AUSENTE` — Fecha y número de caso pintados.

### F4 Contrato en pantalla

- [ ] `NO CONTRADECIR` — Compartida en ES/EN y con `furniture: 'none'` (`docs/live/glossary.md`).

### F5 Estilo

- [ ] `PINTAR` — Contrato 2D Capcom Ace Attorney GBA/DS, contorno carbón, cel-shading y Chespirito setentero; sin fotorrealismo, 3D, acuarela, anime moderno, texto inglés ni magenta (`docs/specs/case-5-el-tomo-trece.md:4138`).

### F6 Localización

- [ ] `NO CONTRADECIR` — Un solo archivo para ES y EN.

## Consistencia

- `bg_gallery.webp` — sala y podio originales.
- `bg_gallery_case5_empty_bag.webp` — la misma bolsa llena con `$` sobre la mesa. No es fuente de verdad de la escena de testimonio.
- `bg_gallery_case5_sam_berrondo.webp` — Berrondo conserva identidad. No es fuente de verdad del testimonio.

## Hallazgos de auditoría 2026-09-27

**Veredicto:** cumple en estado, identidad y continuidad con la fiscalía del Caso 5.

**Cumple:** F1: recortes ampliados muestran a Sam detrás del podio sin saco en mano, Berrondo en fiscalía, defensa, juez y público. La bolsa se ve plana sobre la mesa y su sello verde coincide con `bg_fiscalia.webp`. F2–F3: sin texto o cifras nuevas. F4–F6: sala y podio conservados; 0 píxeles distintos fuera de las columnas permitidas, 0 diferencias en defensa frente a `bg_gallery_characters.webp`, 0 diferencias en el frente de la mesa fiscal.

**Defectos confirmados:** ninguno respecto del contrato del Caso 5. El `$` de la bolsa heredada de `bg_gallery_characters.webp` es una diferencia histórica de ese asset, que no se ha sustituido.

## Recomposición 2026-09-27 (defectos del usuario)

El archivo no estaba en `assets/`; sólo quedaban los respaldos de Codex (`tools/masters/bg_gallery_case5_sam_witness_berrondo_before_*_20260927.webp`), y se volvió a componer. Sam está dentro de la U del podio, porque el testigo nunca se coloca más allá del frente. La bolsa llena con `$` está sobre la mesa, y Berrondo está en fiscalía (`x=1120`), mirando hacia la izquierda. Codex había vaciado la bolsa por «continuidad», y el usuario lo rechazó.

`tools/compose_gallery_case5.py` (con las piezas en `tools/compose_gallery_case5_common.py`) compone las siete láminas del Caso 5. Copia `bg_gallery.webp` y copia píxel por píxel las columnas de defensa de `bg_gallery_characters.webp`. Escala cada figura de fiscalía con la altura de la mesa (0.95 m) y restaura la mesa con la línea ajustada del canto. El testigo se escala con la escala de suelo que se ajusta en las esquinas de las dos mesas (168 px/m con los pies en `y=696`) y se coloca dentro de la U del podio. Los barandales y los balaustres se restauran del fondo limpio. Este script sustituye a `compose_gallery_case5_sam_berrondo.py`, `compose_gallery_secretary_berrondo.py` y `compose_gallery_case5_empty_bag.py`.

**Bolsa de Sam:** lleva el signo `$` oscuro de los sprites `supersam_*` y de `bg_gallery_characters.webp`, nunca el sello verde. Desde agosto la lleva rellena de algodón (`docs/specs/case-5-el-tomo-trece.md:2589`), así que en la sala se ve llena, tanto en su mano como sobre la mesa. Recortes: `bg_gallery_characters_supersam_standing.png` (bolsa en la mano) y `bg_gallery_sam_bag_on_table.png` (bolsa sobre la mesa). Los recortes con sello verde `bg_gallery_case5_sam_standing_seal*.png` y la bolsa plana `bg_gallery_case5_empty_bag_cutout*.png` ya no se usaban y se eliminaron de `tools/masters/` el 2026-09-27; quedan los respaldos `*_before_*` de las láminas.

**Inconsistencia abierta con `bg_fiscalia.webp`:** el despacho pinta la bolsa doblada con sello verde, y las láminas de galería llevan el `$` de los sprites. El usuario decidió el 2026-09-27 no tocar `bg_fiscalia.webp`; falta unificar la marca.

## Hallazgos de auditoría 2026-09-27 (recomposición)

**Veredicto:** cumple en contenido, posición, estilo y exclusiones. ~~La auditoría anterior («bolsa plana… sello verde»)~~ queda retirada porque el usuario la rechazó.

**Cumple:** F1: el recorte del podio muestra a Sam de espaldas tres cuartos, de perfil hacia el juez, sin bolsa en la mano y entre los barandales, con la capa detrás de los balaustres. Mide 1.88 m con la escala de suelo. El recorte de la mesa muestra una bolsa de lona abultada, atada en la boca y con el `$` oscuro, de pie sobre la cubierta y delante de Berrondo. Berrondo mira hacia la izquierda y conserva sus rasgos. F2–F3: no hay texto ni cifras nuevas. F4–F6: una sola lámina, 1376×768 sin pérdida. Píxeles: 0 cambios fuera de las columnas permitidas, 0 en la defensa, 0 bajo el canto de la mesa fiscal y 0 en los barandales.

**Defectos confirmados:** ninguno.

## Recomposición 2026-09-27 (secretario añadido)

El Juez designa al secretario ministerio público (`src/case/case5/Private/trial_day3_success.ts:84`) antes de que Sam suba al estrado, así que la lámina sin él contradecía el estado de la mesa fiscal. Respaldo: `tools/masters/bg_gallery_case5_sam_witness_berrondo_before_secretary_added_20260927.webp`. En `sam_witness_berrondo` de `tools/compose_gallery_case5.py`, el secretario usa el mismo recorte (`bg_gallery_secretary_standing.png`), la misma escala (1.76 m) y el mismo sitio (`x=1120`) que en `bg_gallery_case5_secretary_berrondo_witness`. Berrondo pasa de `x=1120` a `x=1050`, a la izquierda del secretario, y sigue mirando hacia la izquierda. La bolsa llena con `$` no se movió (`x=1072`).

## Hallazgos de auditoría 2026-09-27 (secretario añadido)

**Veredicto:** cumple en contenido, posición, estilo y exclusiones.

**Cumple:** F1: en el recorte de fiscalía ×4, Berrondo (pelo blanco, lentes con cordoncillo, traje negro de tres piezas, cadena de oro y tomo) mira hacia la izquierda con las manos sobre el canto. A su derecha, el secretario lee el libro abierto, con lentes y lápiz en la oreja. Las dos caras quedan libres. La bolsa llena con `$` está de pie sobre la cubierta, delante de ambos, y el cuello atado toca apenas la mano izquierda del secretario sin tapar el libro. El recorte del podio no cambió: 0 píxeles distintos frente al respaldo en las columnas 556–822. F1 (canto): en el recorte ×8 del canto no hay franjas de pared, picos ni tela que cruce la línea. Píxeles: 0 cambios fuera de las columnas permitidas, 0 en la defensa frente a `bg_gallery_characters.webp`, y 0 frente a `bg_gallery_case5_secretary_berrondo_witness.webp` en las columnas 1095–1186, así que el secretario coincide píxel por píxel y Berrondo no lo invade. Las figuras ocupan las columnas 1021–1158, dentro de la mesa (945–1186). F2–F3: no hay texto ni cifras nuevas. F4–F6: una sola lámina, 1376×768 sin pérdida, con `furniture: 'none'`.

**Defectos confirmados:** ninguno.
