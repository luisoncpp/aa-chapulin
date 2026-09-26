# bg_judge — hoja de hechos

Clase: `bg`. Espec: [[docs/specs/artistic-direction.md]] §3 y §4; contrato de generación §23.0 de [[docs/specs/case-5-el-tomo-trece.md]]. Guion: cámara de `JUEZ` en los casos 0 a 5, y la línea de galería del Caso 5. Runtime: `assets/bg_judge.webp`. Sustituye la lámina instalada. No crea un id nuevo.

## Mapa semántico y alcance

Plano del estrado del juez en la sala compartida. El juez no se pinta aquí. Entra como sprite sobre el fondo, y la mesa entra como otro activo.

Lo que este fondo sí pinta: un plano cercano del muro del estrado, la balanza, la luz de la sala y un solo sillón vacío, grande. El encuadre corta antes del suelo. Lo que no pinta: el piso, la mesa, el mazo, un segundo asiento, ni personas.

Alias: `estrado del juez`, `podio elevado`, `balanza`, `galería`, `sillón del juez`, `bg_judge`.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Plano cercano del muro del estrado, no la sala entera. Lambrín de caoba y talla de la balanza detrás del sillón. El borde inferior corta el cuadro antes del suelo: no hay baldosa, ni escalón, ni alfombra (`docs/specs/artistic-direction.md:88-98`).
- [ ] `PINTAR` — Paleta visible en este recorte: caoba `#3D2314`, latón dorado `#C5A059`, piedra `#7F8C8D` y luz ámbar `#F39C12`. El burdeos `#581825` iba en la alfombra de la escalera, y la escalera queda fuera de cuadro (`docs/specs/artistic-direction.md:97`).
- [ ] `PINTAR` — Un solo sillón de juez, vacío y grande, sin apoyabrazos. Se lee como sillón: asiento, respaldo alto y dos montantes del respaldo, unidos. Los montantes enmarcan la cabeza. No hay brazo de madera a la altura del hombro, porque ese brazo queda detrás de la manga y el busto deja de leerse sentado (`docs/lessons-learned/presence-is-not-legibility.md`).
- [ ] ~~`PINTAR` — Galería del público con una segunda fila reconocible.~~ Retirado el 2026-09-22: el encuadre cercano no muestra la sala entera. La línea del forense queda en Conflictos abiertos (`docs/specs/case-5-el-tomo-trece.md:3175-3178`).
- [ ] `AUSENTE` — Un segundo asiento del juez, aunque sea un bulto que sólo se parece a un asiento. El defecto de la lámina instalada es ese par: dos asientos, y uno no se lee como asiento.
- [ ] `AUSENTE` — Suelo, baldosas, escaleras y el frente del estrado. La toma es tan cercana que el piso no entra en cuadro.
- [ ] `AUSENTE` — Mesa, bufete o tablero horneados. La mesa es `court_judge_bench` (`docs/specs/common/court_judge_bench.md`).
- [ ] `AUSENTE` — Juez, toga, barba, mazo, fiscales, defensores, testigos o público con cara. El juez entra por sprite (`docs/specs/artistic-direction.md:72-74`). El forense de la galería es narración, no un cuerpo pintado (`docs/specs/case-5-el-tomo-trece.md:3178`).
- [ ] `NO CONTRADECIR` — Misma sala que `bg_defense`, `bg_courtroom`, `bg_witness` y `bg_waiting_room`: caoba, latón, piedra, ámbar y burdeos. Esos fondos no dictan el encuadre de éste (`docs/specs/artistic-direction.md:96-112`).

### F2 Texto en imagen

- [ ] `AUSENTE` — Texto legible, rótulos, subtítulos, marcas de agua y texto en inglés. La lámina es compartida entre ES y EN (`docs/specs/case-5-el-tomo-trece.md:4135`; `docs/specs/artistic-direction.md:96-100`).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — Este plano no pertenece a un día ni a una hora. No imprimir fecha, hora ni número de caso.

### F4 Contrato en pantalla

- [ ] `PINTAR` — Toda línea de `JUEZ` sin `bg` propio usa esta lámina (`src/engine/Private/TrialSpeakerCameras.ts:18`).
- [ ] `PINTAR` — El busto de `judge_neutral`, `judge_gavel`, `judge_shock` y `judge_thinking` cae delante del sillón y deja el respaldo legible alrededor del cuerpo. La barba, las manos y la cabeza del mazo quedan por encima del canto donde luego se apoya `court_judge_bench` (`docs/specs/artistic-direction.md:74`; `docs/specs/common/court_judge_bench.md`).
- [ ] `NO CONTRADECIR` — `judge_neutral` es el mismo busto, sin sillón y sin mesa pintados. Esos dos viven en este fondo y en `court_judge_bench`.
- [ ] ~~`PINTAR` — La línea del narrador «El forense se pone de pie en la segunda fila de la galería» exige que la galería se lea en el fondo solo.~~ Retirado el 2026-09-22 por el plano cercano. Desde el 2026-09-23 esa línea usa `bg_gallery`.
- [ ] `NO CONTRADECIR` — `inferFurniture` devuelve `judge-bench` en este fondo (`src/engine/Private/VisualEffects.ts`).
- [ ] `NO CONTRADECIR` — Los casos 0 a 5 reutilizan el mismo archivo. Un cambio aquí cambia todas las cámaras del juez (`docs/specs/case-5-el-tomo-trece.md:4150`; `docs/specs/case-0-el-primer-juicio-de-monchito.md:622`).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt de regeneración: ilustración 2D estilo Capcom Ace Attorney, linaje GBA / Nintendo DS, en alta definición; cel-shading plano con terminador duro; contorno carbón `#1A1A1A` continuo y más grueso en la silueta; colores primarios saturados (`docs/specs/case-5-el-tomo-trece.md:4133`).
- [ ] `PINTAR` — El registro visible de esta lámina es el de la sala en la dirección artística: caoba, latón, piedra, ámbar y terciopelo (`docs/specs/artistic-direction.md:97-98`).
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano de superhéroes, marcas de agua, y cualquier rosa o magenta en primer plano (`docs/specs/case-5-el-tomo-trece.md:4135`; `docs/specs/artistic-direction.md` §5).

### F6 Localización

- [ ] `NO CONTRADECIR` — ES y EN usan `assets/bg_judge.webp`. No hay variante `_en`. No hay texto que traducir.

## Consistencia (regenerar juntos)

- `court_judge_bench` — comparte caoba, latón y el canto donde el busto se sienta. Regenerar juntos, este activo no es fuente de verdad del otro.
- `bg_defense`, `bg_courtroom`, `bg_witness` — comparten la sala, la paleta y la balanza como motivo del edificio. Regenerar juntos, este activo no es fuente de verdad del otro.
- `bg_waiting_room` — comparte caoba, latón y burdeos del vestíbulo, sin estrado. Regenerar juntos, este activo no es fuente de verdad del otro.
- `court_bench`, `court_podium` — comparten madera y latón de la sala. Regenerar juntos, este activo no es fuente de verdad del otro.
- `judge_gavel`, `judge_shock`, `judge_thinking` — candado de composición del busto sobre el sillón. Regenerar juntos, este activo no es fuente de verdad del otro.
- `judge_neutral` — misma persona y el mismo candado de busto. Sin sillón y sin mesa en el sprite.

## Conflictos abiertos

- §23.0 pide para el Caso 5 un registro de papel, madera, polvo y luz de tungsteno de archivo (`docs/specs/case-5-el-tomo-trece.md:4134`). La dirección artística de la sala pide caoba, latón, piedra, ámbar y terciopelo (`docs/specs/artistic-direction.md:97-98`). No se resuelve aquí.
- Resuelto el 2026-09-23. La línea del forense usa `bg_gallery` (`docs/specs/common/bg_gallery.md`). Este plano cercano no muestra la galería.

## Hallazgos de auditoría 2026-09-22

Veredicto: cumple en contenido, exclusiones y encuadre. El plano cercano no muestra suelo ni apoyabrazos.

**Cumple**

- F1 muro, balanza y lambrín de caoba, sin suelo ni escalera. Recorte del plano completo `bg_judge_close.png`.
- F1 un sillón: asiento, respaldo alto y dos montantes. Sin apoyabrazos. La prueba de nombrar sobre el sillón da «sillón de juez vacío».
- F1 paleta de caoba, latón, piedra y luz ámbar. El burdeos no entra porque la alfombra quedó fuera de cuadro.
- F2 y F3 sin texto, sin fecha y sin número.
- F4 los montantes de `judge_neutral`, `judge_shock`, `judge_thinking` y `judge_gavel` quedan a los lados de la cabeza. La barba, las manos y la cabeza del mazo quedan por encima del canto de `court_judge_bench`. `judge_neutral` se regeneró el 2026-09-23 sin sillón y sin mesa; el dobladillo queda a 5px del suelo de 512, igual que las otras poses.
- F5 mismo registro pintado que `bg_courtroom` y `bg_defense`: contorno carbón, cel plano, sin fotorrealismo ni magenta.
- F6 una sola lámina, sin texto que traducir.

**Defectos confirmados**

- ~~MEDIO — MALFORMADO (F4). El sillón con apoyabrazos deja el brazo de madera detrás de la manga, y el busto no se lee sentado.~~ [x] RETIRADO POR REVISIÓN (2026-09-22). El revisor pidió un sillón sin apoyabrazos. La lámina instalada es esa.

**Correcciones de auditoría**

- La pasada ancha, con suelo y galería, no enmarcaba el busto. Quedó sustituida por el plano cercano antes de instalar.

**Recomendación**

- Ninguna sobre esta lámina. La galería vive en `bg_gallery`.
