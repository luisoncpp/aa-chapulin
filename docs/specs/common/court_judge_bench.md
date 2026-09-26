# court_judge_bench — hoja de hechos

Clase: utilería de primer plano, el mismo papel que `court_bench` y `court_podium`. Espec: [[docs/specs/artistic-direction.md]] §3 y §4; regla de recorte en [[docs/lessons-learned/decoupled-character-furniture-sprites.md]]; contrato de generación §23.0 de [[docs/specs/case-5-el-tomo-trece.md]]. Guion: líneas de `JUEZ` en los casos 0 a 5, cuando el motor llegue a proyectarla. Runtime propuesto: `assets/court_judge_bench.webp`. Activo nuevo. No sustituye a `court_bench.webp`.

## Mapa semántico y alcance

Frente del estrado del juez, separado del muro. Va en la capa de mueble, por delante del busto en las poses de pie y sin tapar la cabeza del mazo.

Se lee como mesa: tablero y frente. No se lee como asiento. El sillón se queda en `bg_judge`.

Alias: `mesa del juez`, `estrado`, `bufete del juez`. No es el bufete de la defensa ni el de la fiscalía. Esos dos comparten `court_bench`.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Una mesa de estrado alto, de caoba `#3D2314`, con canto y herraje de latón `#C5A059`. Tablero horizontal y frente vertical, unidos de forma que se nombre «mesa» sin el fondo detrás (`docs/specs/artistic-direction.md:97`; `docs/specs/artistic-direction.md:126`; `docs/lessons-learned/presence-is-not-legibility.md`).
- [ ] `PINTAR` — Silueta de estrado alto, distinta del bufete ancho de `court_bench`. Misma madera y el mismo latón, otro mueble (`docs/specs/artistic-direction.md:88`, `:126`).
- [ ] `PINTAR` — La fila 0 del archivo opaco es el canto lejano del tablero. Por encima de ese canto no hay banda vacía ni madera de más. Ese canto es la línea de contacto con el busto (`docs/lessons-learned/decoupled-character-furniture-sprites.md`, punto 7; recorte análogo en `process_assets.py:486-494`).
- [ ] `PINTAR` — Fondo de generación en magenta puro `#FF00FF`, para croma. El magenta no entra en la madera, el latón ni el terciopelo (`docs/specs/artistic-direction.md` §5; `docs/specs/case-5-el-tomo-trece.md:4135`).
- [ ] `AUSENTE` — Sillón, segundo asiento, o un frente que se lea como respaldo. El único sillón vive en el fondo (`docs/specs/common/bg_judge.md`).
- [ ] `AUSENTE` — Juez, toga, manos, barba y mazo. El mazo lo lleva `judge_gavel`. Una mesa con mazo pintado duplica el de la pose (`docs/specs/artistic-direction.md:72-74`).
- [ ] `AUSENTE` — Balanza, galería y muro. Eso es `bg_judge`, no esta capa (`docs/specs/artistic-direction.md:88-98`).

### F2 Texto en imagen

- [ ] `AUSENTE` — Texto legible, sellos con leyenda, marcas de agua y texto en inglés. La mesa es compartida entre ES y EN (`docs/specs/case-5-el-tomo-trece.md:4135`).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — Sin fecha, hora ni número de caso impresos.

### F4 Contrato en pantalla

- [ ] `PINTAR` — Con `judge_neutral`, `judge_gavel`, `judge_shock` y `judge_thinking`, el canto tapa el bajo de la toga y deja libres la barba, las manos y la cabeza del mazo. El mazo de `judge_gavel` queda por encima del tablero (`docs/specs/artistic-direction.md:74`).
- [ ] `NO CONTRADECIR` — `judge_neutral` no trae mesa ni sillón. La mesa no se encoge para esa pose: el busto se recortó al mismo suelo de 512 que las otras.
- [ ] `NO CONTRADECIR` — La línea de galería del Caso 5 lleva `furniture: none`. Esa línea no muestra esta mesa. El fondo tiene que sostener la sala sin ella (`docs/specs/case-5-el-tomo-trece.md:3178`; `docs/specs/common/bg_judge.md`).
- [ ] `NO CONTRADECIR` — En la cámara del juez el motor proyecta este archivo como `judge-bench`, con el marco `bench-stand` (`src/engine/Private/VisualEffects.ts`; `src/engine/Private/StageLayout.ts`).
- [ ] `NO CONTRADECIR` — Si más adelante se monta como los bufetes, el marco de pie deja al personaje detrás del mueble y el marco de golpe de mesa lo pasa delante. Ninguna pose actual del juez es de golpe de mesa: el nombre no contiene `slam` (`src/engine/Private/StageLayout.ts:78-86`, `:113-114`). No dibujar palmas aplastadas contra el tablero.

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo Capcom Ace Attorney, linaje GBA / Nintendo DS, en alta definición; cel-shading plano con terminador duro; contorno carbón `#1A1A1A` continuo y más grueso en la silueta; colores primarios saturados (`docs/specs/case-5-el-tomo-trece.md:4133`).
- [ ] `PINTAR` — Misma caoba, mismo latón y misma luz ámbar que la sala (`docs/specs/artistic-direction.md:97`).
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano de superhéroes, marcas de agua, y rosa o magenta en la madera (`docs/specs/case-5-el-tomo-trece.md:4135`).

### F6 Localización

- [ ] `NO CONTRADECIR` — Una sola imagen para ES y EN. Sin variante `_en`.

## Consistencia (regenerar juntos)

- `bg_judge` — comparte caoba, latón y el hueco del busto sobre el sillón. Regenerar juntos, este activo no es fuente de verdad del otro.
- `court_bench` — comparte la regla de la fila 0, la caoba y el latón. No comparte la silueta. Regenerar juntos, este activo no es fuente de verdad del otro.
- `court_podium` — comparte madera y latón de la sala, y el papel de capa de primer plano. Regenerar juntos, este activo no es fuente de verdad del otro.
- `bg_defense`, `bg_courtroom`, `bg_witness` — comparten la sala que esta mesa tiene que poder tapar por abajo. Regenerar juntos, este activo no es fuente de verdad del otro.
- `judge_gavel`, `judge_shock`, `judge_thinking` — candado de contacto. Regenerar juntos, este activo no es fuente de verdad del otro.
- `judge_neutral` — misma persona y el mismo candado de contacto. Sin mesa en el sprite.

## Conflictos abiertos

- §23.0 describe el Caso 5 con papel, polvo y tungsteno de archivo (`docs/specs/case-5-el-tomo-trece.md:4134`). Esta mesa sigue la paleta de la sala (`docs/specs/artistic-direction.md:97`). No se resuelve aquí.

## Hallazgos de auditoría 2026-09-22

Veredicto: cumple en contenido, exclusiones y contacto.

**Cumple**

- F1 se nombra «mesa»: tablero horizontal y frente de tres paneles. No se nombra silla. Silueta más alta que `court_bench`.
- F1 la fila 0 del recorte opaco es el canto del tablero. Por encima no queda banda vacía. Croma magenta fuera de la madera, 0 píxeles magenta opacos dentro.
- F1 ausentes el sillón, el juez, el mazo, la balanza y el muro.
- F2 y F3 sin texto y sin cifras.
- F4 con `judge_neutral`, `judge_gavel`, `judge_shock` y `judge_thinking` el canto tapa el bajo de la toga. Quedan libres la barba, la mano de `judge_thinking` y la cabeza del mazo. `judge_neutral` ya no trae mesa propia.
- F5 misma caoba, mismo latón y el mismo cel que `court_bench`. Sin rosa en la madera.
- F6 una sola imagen.

**Defectos confirmados**

- Ninguno.

**Recomendación**

- Ninguna.
