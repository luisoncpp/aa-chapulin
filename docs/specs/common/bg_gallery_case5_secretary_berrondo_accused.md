# bg_gallery_case5_secretary_berrondo_accused — hoja de hechos

Clase: `bg`. Variante del plano aprobado `bg_gallery.webp`, para el día 4 y el clímax antes de que Berrondo deje la mesa. Imagen: `assets/bg_gallery_case5_secretary_berrondo_accused.webp`.

## Hechos a verificar

### F1 Contenido

- [x] `PINTAR` — Don Ramón y el Chapulín tras la mesa de defensa, exactamente como en `bg_gallery_characters.webp` (`bg_gallery.md`).
- [x] `PINTAR` — El secretario de acuerdos en la mesa de fiscalía, con traje oscuro, lentes, lápiz en la oreja y libro abierto (§3, §15.3; `secretario_leyendo`).
- [x] `PINTAR` — Berrondo de pie tras la misma mesa, a la escala de los demás abogados (1.83 m desde la mesa). ~~Sentado más bajo que el secretario~~: el usuario lo rechazó el 2026-09-27 porque se leía como un hombre demasiado bajo; canas, lentes de media luna, traje oscuro, leontina y tomo (§18, intervención de la defensa: «está sentado en la mesa de la fiscalía»; §23.2 A).
- [x] `AUSENTE` — Super Sam en la sala de este plano después de su separación (§15.3).
- [x] `PINTAR` — Gradas, juez, mesas, podio, micrófono y sala conservados pixel por pixel de `bg_gallery.webp` fuera de las columnas de personajes (`bg_gallery.md`).

### F2 Texto en imagen

- [x] `AUSENTE` — Rótulos, marcas de agua y texto legible (§23.0; `bg_gallery.md`).

### F3 Cifras, fechas y horas

- [x] `NO CONTRADECIR` — Sin fecha ni hora impresa (`bg_gallery.md`).

### F4 Contrato en pantalla

- [x] `PINTAR` — El secretario representa a la fiscalía mientras Berrondo ocupa la mesa en día 4 y en la acusación del clímax (§15.3; §18).
- [x] `NO CONTRADECIR` — El archivo evita nombres que activan mobiliario automático (`docs/live/glossary.md`). Usar con `furniture: 'none'`.

### F5 Estilo

- [x] Contorno carbón y sombreado plano del linaje Ace Attorney; televisión mexicana de los setenta; sin fotorrealismo, 3D, acuarela, anime moderno, magenta de primer plano ni texto inglés (§23.0).

### F6 Localización

- [x] `NO CONTRADECIR` — Imagen compartida entre ES y EN (§23.3; `bg_gallery.md`).

## Consistencia (regenerar juntos)

- `bg_gallery` — comparte la sala. Regenerar juntos; este activo no es fuente de verdad del otro.
- `bg_gallery_characters` — comparte defensa y espectadores. Regenerar juntos; este activo no es fuente de verdad del otro.
- `berrondo_idle` y `secretario_leyendo` — fijan las identidades. Regenerar juntos; este activo no es fuente de verdad de ellos.

## Conflictos abiertos

El guion registra la bolsa de Super Sam sobre la mesa al cerrar el día 3 (§15.4) y después sobre el banco de objetos retirados en el epílogo (§19). No fija cuándo se retira durante el día 4. Esta variante no pinta la bolsa para el clímax.

## Hallazgos de auditoría 2026-09-27

**Veredicto:** cumple en reparto, posición, estilo y exclusiones. Archivo WebP sin pérdida de 1376×768.

**Cumple:** F1: recortes ampliados de defensa y fiscalía muestran al secretario leyendo y a Berrondo más bajo a su lado, con los rasgos de identidad de su busto. F2–F3: no hay texto, fecha ni marca de agua. F4–F6: la mesa corresponde al día 4, el nombre evita mobiliario automático y la imagen se comparte entre idiomas.

**Defectos confirmados:** ninguno en los recortes revisados. La comparación de píxeles contra `bg_gallery.webp` encontró cero cambios fuera de las columnas de defensa y fiscalía.

## Recomposición 2026-09-27 (defectos del usuario)

El usuario encontró un defecto en la versión anterior: Berrondo era demasiado bajo, porque Codex usó el recorte de pie reducido y hundido 49 px bajo el suelo. Respaldo: `tools/masters/bg_gallery_case5_secretary_berrondo_accused_before_berrondo_scale_fix_20260927.webp`. Ahora Berrondo (`x=1060`, 1.83 m) y el Secretario (`x=1136`, 1.76 m) se escalan con la altura de la mesa en su columna, con los pies en el suelo detrás del canto.

El canto de la mesa llega a la cadera de un adulto de pie, así que Berrondo sentado a esa escala sólo asomaría la cabeza. Por eso está de pie. La línea «está sentado en la mesa de la fiscalía» (`src/case/case5/Private/climax_stage1.ts:19`; `docs/specs/case-5-el-tomo-trece.md:3454`) queda como una leve discrepancia visual, aunque «sentado en la mesa» también se puede entender como «ocupa la mesa».

`tools/compose_gallery_case5.py` (con las piezas en `tools/compose_gallery_case5_common.py`) compone las siete láminas del Caso 5. Copia `bg_gallery.webp` y copia píxel por píxel las columnas de defensa de `bg_gallery_characters.webp`. Escala cada figura de fiscalía con la altura de la mesa (0.95 m) y restaura la mesa con la línea ajustada del canto. El testigo se escala con la escala de suelo que se ajusta en las esquinas de las dos mesas (168 px/m con los pies en `y=696`) y se coloca dentro de la U del podio. Los barandales y los balaustres se restauran del fondo limpio. Este script sustituye a `compose_gallery_case5_sam_berrondo.py`, `compose_gallery_secretary_berrondo.py` y `compose_gallery_case5_empty_bag.py`.

## Hallazgos de auditoría 2026-09-27 (recomposición)

**Veredicto:** cumple en contenido, escala, estilo y exclusiones.

**Cumple:** F1: en el recorte ampliado de fiscalía, Berrondo tiene la cadera en el canto y la cabeza a la altura de la del Secretario. Mira hacia la izquierda con lentes, cordoncillo, leontina y tomo. El Secretario lee el libro abierto. El recorte ×4 del canto no muestra franjas. No aparecen Sam ni la bolsa. F2–F3: no hay texto ni cifras nuevas. F4–F6: una sola lámina, 1376×768 sin pérdida. Píxeles: 0 cambios fuera de las columnas permitidas y 0 en la defensa.

**Defectos confirmados:** `MENOR · CONTRADICE · F1/F4`: Berrondo está de pie y el guion dice «sentado» (ver arriba). Decide el revisor.
