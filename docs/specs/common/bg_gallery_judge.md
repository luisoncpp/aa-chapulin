# bg_gallery_judge — hoja de hechos

Clase: `bg`. Base: `assets/bg_gallery_empty.webp` (1376×768). Referencia de identidad: `assets/judge_neutral.webp`. Encargo del usuario: 2026-09-23. Esta variante todavía no tiene una referencia de guion.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Un solo juez sentado en la silla central, detrás del escritorio dorado. Cabeza, barba blanca y parte superior de la toga negra visibles; el escritorio tapa la parte inferior del cuerpo (`assets/judge_neutral.webp`; encargo del usuario, 2026-09-23).
- [ ] `PINTAR` — Conservar la identidad del juez aprobado: calva con pelo lateral, cejas blancas, barba larga blanca, toga negra y expresión neutral (`docs/specs/artistic-direction.md` §2.D; `assets/judge_neutral.webp`).
- [ ] `NO CONTRADECIR` — Mantener una sola silla y la balanza circular de la base, sin que la figura tape el emblema (`assets/bg_gallery_empty.webp`; `docs/specs/common/bg_gallery.md`).
- [ ] `AUSENTE` — Otras personas, cambios en la galería, mesas, podio, paredes o suelo (`assets/bg_gallery_empty.webp`; encargo del usuario, 2026-09-23).

### F2 Texto en imagen

- [ ] `AUSENTE` — Texto y marcas de agua (`docs/specs/common/bg_gallery.md`).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — Sin fecha, hora ni número de caso (`docs/specs/common/bg_gallery.md`).

### F4 Contrato de composición

- [ ] `PINTAR` — Generar primero una edición con el juez y copiar sólo su región sobre una copia exacta de `bg_gallery_empty.webp` (encargo del usuario, 2026-09-23).
- [ ] `NO CONTRADECIR` — Cada píxel fuera de la región compuesta debe ser idéntico al de `bg_gallery_empty.webp` (encargo del usuario, 2026-09-23).

### F5 Estilo

- [ ] Cel shading 2D, contorno carbón y acabado del juez coherente con `judge_neutral.webp` y con la sala (`docs/specs/artistic-direction.md` §§2.D, 3).

### F6 Localización

- [ ] Sin texto y sin variante `_en` (`docs/specs/common/bg_gallery.md`).

## Consistencia

- `bg_gallery_empty` — identidad de todos los píxeles salvo la región del juez. Es la base de composición.
- `judge_neutral` — identidad visual del único personaje visible.

## Hallazgos de auditoría 2026-09-23

**Veredicto:** cumple. El WebP final mide 1376×768 y conserva exactamente la base fuera de la zona del juez.

**Cumple:** F1: un solo juez neutral, reconocible por la calva, el pelo lateral, la barba blanca y la toga negra, aparece sentado en la silla. El escritorio tapa su torso inferior; la balanza circular queda libre. F2–F3: sin texto, fecha ni marcas. F4: la composición usa `bg_gallery_empty.webp` como capa inferior y sólo la región del juez de la edición generada como capa superior. Tras guardar el WebP sin pérdida y volver a abrirlo, hay **0 píxeles distintos** fuera del rectángulo de control `x=610..764, y=145..269`; la caja real de píxeles alterados es `x=621..754, y=152..262` (13 903 píxeles). F5–F6: el cel shading y la imagen compartida ES/EN se mantienen.

**Defectos confirmados:** ninguno en el recorte ampliado del juez y el borde del escritorio.

**Composición:** la edición generada `tools/masters/bg_gallery_judge_edit.png` (1678×937) se ajustó a 1376×768. Una máscara de rectángulo redondeado `(625,158,750,256)`, radio 7 y desenfoque gaussiano 2.5 píxeles, guardada en `tools/masters/bg_gallery_judge_mask.png`, selecciona sólo la zona del juez sobre la base intacta. El compuesto maestro está en `tools/masters/bg_gallery_judge.png`. El prompt está en `tools/masters/bg_gallery_judge.prompt.txt`.
