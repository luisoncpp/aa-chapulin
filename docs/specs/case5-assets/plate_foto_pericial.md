# plate_foto_pericial — hoja de hechos

Clase: `plate`. Espec: §23.0, §23.1, §23.4 (L2), §7.3 y §24. Guion directo: `src/case/case5/Private/trial_day1_success.ts:161-164` y su variante `_en`; la lámina se muestra una sola vez. Variante EN: no requiere — la imagen no contiene prosa ni abreviaturas de idioma y se comparte entre ES/EN.

## Mapa semántico y alcance

La lámina es la **fotografía pericial completa del pasillo 7**, no un diagrama ni una ilustración didáctica. El encuadre debe identificar el mismo espacio y la misma disposición posterior al crimen que las vistas de investigación: pasillo estrecho y largo, mesa de consulta, estante de consulta de 24 ranuras, tomo caído, reja, puerta de servicio y el mobiliario que fija la orientación. El estado no es idéntico al fondo de investigación: a las 19:05 del 4 de diciembre la fotografía todavía muestra el cuerpo; la vista investigable posterior lo sustituye por el contorno de gis.

Alias seguidos: `estante de consulta`, `estante`, `estante de veinticuatro ranuras`; `tomo`, `Tomo XI`, `tomo caído`; `mesa de consulta`; `legajo/expediente abierto`; `reja del pasillo`; `puerta metálica de servicio`.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Fotografía de la escena completa del pasillo 7, tomada desde el interior del pasillo junto a la mesa; el encuadre debe mostrar cuerpo, tomo y mesa, y conservar la perspectiva estrecha y larga. Desde la reja la mesa queda oculta por los estantes (§23.4; plano P3 §4.1; `docs/specs/case-5-el-tomo-trece.md:173-198`).
- [ ] `PINTAR` — Cuerpo tendido **boca abajo** entre el estante y la mesa, con la cabeza hacia el estante y los pies hacia la mesa; la toma no puede convertirlo en una silueta de pie, boca arriba o con otra orientación (§10.3; `src/case/case5/Private/trial_day1_t2.ts:43-49`; `trial_day1_success.ts:162`).
- [ ] `PINTAR` — Tomo caído a un metro del cuerpo, cerrado, encuadernado en tela, con el lomo hacia arriba y una mancha/sangre oscura en el lomo; junto a él va el cartelito numerado de perito (§23.1; §10.3; `src/case/case5/Private/archivo_pasillo7_hotspots.ts:29-35`; `trial_day1_t2.ts:58`; `trial_day1_success.ts:163`). En esta foto no se exige mostrar el canto ni el sello de la guarda: el detalle del sello pertenece a `examine_tomo_caido` (§23.3, `docs/specs/case-5-el-tomo-trece.md:4056`).
- [ ] `PINTAR` — Mesa larga de roble con la lámpara de pantalla verde encendida y el legajo/expediente abierto y atado con listón; la silla está volcada hacia atrás (§23.1; §10.3; `src/case/case5/Private/archivo_pasillo7_hotspots.ts:69-72`; `trial_day1_t2.ts:49-50`; `trial_day1_t3.ts:54`).
- [ ] `PINTAR` — Estante de consulta de madera oscura pegado al muro, con **24 ranuras** y cartoncitos manuscritos numerados del 1 al 24 (`src/case/case5/Private/archivo_pasillo7_hotspots.ts:45-46`; §23.1; `trial_day1_success.ts:164`).
- [ ] `PINTAR` — Estado del estante a las 19:05: **22 lomos de tela idénticos**, un lomo distinto de **media piel en la ranura 11**, con nervios y dos cantoneras de latón, y la **ranura 13 vacía y oscura**; el lomo de la ranura 11 es algo más grueso que sus vecinos (§23.1; §23.3, `docs/specs/case-5-el-tomo-trece.md:4057`; `src/case/case5/Private/climax_stage3_success.ts:12,16,27-33`). En la foto B/N, verde oliva/vino/latón son identidad compartida: verificar textura de tela, superficie de piel, nervios, cantoneras y contraste tonal, no el matiz cromático literal.
- [ ] `PINTAR` — La cuenta visible debe ser coherente: 23 tomos en el estante (22 de tela + 1 de media piel) y 1 tomo en el suelo; son 24 objetos físicos para 24 ranuras, pero la 13 permanece vacía porque ese tomo se anunció y nunca se publicó (§4.1 P6; §10.3; §24.C F7 e I3; `archivo_pasillo7_hotspots.ts:48-55`).
- [ ] `PINTAR` — Geometría de sala consistente con el fondo: estanterías altas de madera oscura, piso de madera encerada, reja de barrotes al extremo opuesto, puerta metálica gris de servicio entreabierta y rejilla de ventilación del muro con una indicación sutil de aire caliente; sin vapor fotográfico (§23.1; §4.1 P3/P7; `trial_day1_success.ts:167`).
- [ ] `AUSENTE` — Personajes vivos, policías visibles, mobiliario inventado, una segunda mesa, escombros o una distribución que permita ver la mesa desde la reja; la foto documenta la escena, no una reconstrucción ni una escena de acción (§23.1; §4.1 P3; `trial_day1_success.ts:161-164,167`).

### F2 Texto en imagen

- [ ] `AUSENTE` — Títulos, subtítulos, rótulos de lámina, número de expediente, fecha impresa, leyendas de pared, marcas de agua, flechas, círculos o realces; §23.4 prohíbe texto salvo indicación expresa y L2 no indica ninguna cadena.
- [ ] `NO CONTRADECIR` — Los cartoncitos numerados 1–24 y el cartelito de perito sí son marcas diegéticas exigidas por §23.1 y el guion, pero no requieren una cadena legible ni deben convertirse en rotulación explicativa. El número de la ranura y la presencia del marcador no se borran para cumplir la prohibición de prosa.
- [ ] `NO CONTRADECIR` — El tomo puede identificarse por silueta/material y la mancha; `XI`, el domicilio, el sello del tomo y cualquier texto del legajo no tienen que ser legibles en esta toma. Sus cadenas pertenecen a otros `detailedView` o al diálogo (`archivo_pasillo7_hotspots.ts:29-35,45-56`; §23.3).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La foto representa las **19:05 del sábado 4 de diciembre de 1982**; la fecha y la hora se narran, no se imprimen en la placa (`docs/specs/case-5-el-tomo-trece.md:202-236`, §24 I10/I20; `trial_day1_success.ts:162`; `trial_day1_success_en.ts:162`).
- [ ] `NO CONTRADECIR` — La aritmética visual es 24 ranuras, 23 tomos en el mueble y uno en el suelo; 22 lomos de tela + el lomo distinto de la ranura 11; la ranura 13 es la ausencia histórica, no un segundo hueco (§24.C F7; §24.D I3; `archivo_pasillo7_hotspots.ts:48-55`).
- [ ] `AUSENTE` — Fechas, horas o números de expediente inventados (por ejemplo, un año anterior a 1982) y cualquier número de ranura que contradiga el reparto anterior. La única numeración permitida como marca diegética es la de los cartoncitos 1–24 y el marcador pericial.

### F4 Contrato en pantalla

- [ ] `PINTAR` — El Juez ordena poner **la fotografía pericial** a la vista, no una ilustración didáctica (`src/case/case5/Private/trial_day1_success.ts:161`; `trial_day1_success_en.ts:161`).
- [ ] `PINTAR` — Mientras está a pantalla completa, el NARRADOR fija: cuerpo boca abajo entre estante y mesa; tomo de tela a un metro con mancha en el lomo; legajo abierto y lámpara encendida; estante de 24 ranuras (`trial_day1_success.ts:162-164`; `trial_day1_success_en.ts:162-164`).
- [ ] `NO CONTRADECIR` — La frase posterior de Nicanor sobre el piso que él encera y que pisaron veinte policías exige un piso de madera encerada y limpio de escombros, pero no policías, huellas dramáticas ni suciedad inventada (`trial_day1_success.ts:167`; `trial_day1_success_en.ts:167`).
- [ ] `NO CONTRADECIR` — Las declaraciones posteriores fijan la misma orientación y estado: pies hacia la mesa, silla volcada, víctima sentada/leyendo con la lámpara encendida y expediente abierto (`src/case/case5/Private/trial_day1_t2.ts:43-50`); tomo cerrado boca abajo con el lomo arriba (`trial_day1_t3.ts:44`); estante completo, sin hueco adicional, aun con un tomo en el suelo (`trial_day1_t3.ts:54-60`).
- [ ] `NO CONTRADECIR` — La investigación cuenta 23 tomos en el mueble + 1 en el suelo, mantiene vacía la ranura 13 y usa la distinción de la ranura 11 para el clímax (`src/case/case5/Private/archivo_pasillo7_hotspots.ts:45-56`; `src/case/case5/Private/climax_stage3.ts:19-26`; `climax_stage3_success.ts:12,16,27-33`). Estas referencias amplían el contrato del mismo lugar/objeto; no convierten la lámina en un primer plano del `detailedView` del estante.
- [ ] `NO CONTRADECIR` — El encuadre de L2 se muestra una sola vez antes del primer testimonio y no reaparece como lámina (`docs/specs/case-5-el-tomo-trece.md:375-389`). No añadir una segunda aparición ni cambiar el estado del cuarto entre la foto y las líneas que la describen.

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA/Nintendo DS) en alta definición; , ; contorno carbón nítido y continuo `#1A1A1A`, más grueso en silueta que en detalles; anatomía expresiva/caricaturesca; colores primarios saturados cuando el medio los permita.
- [ ] El registro del Caso 5 es papel, madera y polvo: archivo judicial, expedientes con listón, madera barnizada, latón envejecido y luz de tungsteno (§23.0). Para esta placa, la excepción de medio manda: blanco y negro con **grano grueso**, contraste fotográfico y siluetas/materiales reconocibles; no se verifica literalmente verde oliva, vino o latón de color (§23.4; §23.1).
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto en inglés y cualquier rosa/magenta en primer plano (§23.0; [[docs/specs/artistic-direction.md]] §5).
- [ ] `AUSENTE` — Marco decorativo, manillas de latón, borde de placa, sello autodescriptivo, aspecto sepia o tratamiento didáctico. Es la única lámina de §23.4 que no es ilustrativa; el formato es una imagen plana de 1280 × 720, no una fotografía enmarcada (§23.4, `docs/specs/case-5-el-tomo-trece.md:4070-4077`).

### F6 Localización

- [ ] `NO CONTRADECIR` — No existe `plate_foto_pericial_en.webp`: ES y EN apuntan al mismo `assets/plate_foto_pericial.webp` (`src/case/case5/Private/trial_day1_success.ts:8,162-164`; `trial_day1_success_en.ts:8,162-164`).
- [ ] Composición, conteos, estado temporal, marcas diegéticas y grano permanecen idénticos entre idiomas; no introducir texto para resolver una traducción. §23.3 sólo localiza documentos cuyo argumento depende de cadenas como `SÁB` o la `s` caída; L2 no tiene ese requisito.

## Consistencia (regenerar juntos)

- `bg_archivo_pasillo7` — comparte pasillo, piso de madera, estanterías, reja, puerta de servicio, rejilla caliente, mesa, lámpara, silla, legajo y disposición posterior al crimen. No comparte el estado exacto: el fondo investigable muestra el contorno de gis y la fotografía de las 19:05 muestra el cuerpo. No es fuente de verdad de éste; la hoja sigue §23 y el contrato de la foto.
- `examine_estante_consulta` — comparte el objeto de 24 ranuras: 22 lomos de tela idénticos, ranura 13 vacía/oscura y ranura 11 de media piel con nervios y cantoneras. No es fuente de verdad de éste; la foto B/N traduce el color a textura/contraste.
- `examine_tomo_caido` + icono `tomo_caido` — comparten el tomo caído: tela, tejuelo XI cuando el encuadre lo permita, mancha en el lomo y escala de un metro. El sello de guarda pertenece sólo al `detailedView`; no exigirlo en esta toma.
- `bg_archivo_pasillo7_d4` (propuesto en [[new-assets.md]]) — mismo espacio antes del crimen; regenerar juntos sólo para conservar geometría y materiales, pero no trasladar a L2 el estado vivo/sin cuerpo del recuerdo.
- `plate_tomo_trece` — comparte las 24 ranuras y la ausencia histórica de la 13 como relación de objeto/colección; no es fuente de verdad de la fotografía ni debe imponer su dibujo frontal o su publicidad ilegible.

## Conflictos abiertos

- Ninguno propio. `bg_archivo_pasillo7` tiene una deriva visual documentada (la imagen actual puede omitir la reja o pintar una silueta incompatible), pero esta hoja sigue el spec y no la imagen ni el fondo defectuoso. La variante previa al crimen ya está documentada como `bg_archivo_pasillo7_d4` en `new-assets.md`.

## Hallazgos de auditoría 2026-09-18

- **Bloqueante:** título «CASE 5 – PLACA DIDÁCTICA» y subtítulo autodescriptivo; contradice que L2 es la única lámina no ilustrativa (§23.4).
- **Bloqueante:** silueta de gis de pie, brazos en alto; contradice cuerpo boca abajo y la orientación cabeza-estante (§10.3; `trial_day1_t2.ts:43-49`).
- **Bloqueante:** faltan estante visible de 24 ranuras, estado completo con ranura 13 vacía y lomo distinto en 11, legajo abierto, lámpara encendida, mancha del tomo y cartelito de perito (§23.1; §23.3; `trial_day1_success.ts:162-164`).
- **Bloqueante:** sepia y sin grano; marco de madera con manillas; contradice foto B/N de grano grueso y placa plana (§23.4).
- **Bloqueante:** placa «EXPEDIENTE No. 1977-05-14»; inventa fecha/número y contradice el presente de 1982 (§24 I4/I10/I20).
- **Medio:** piso de losetas pétreas con escombros; lámpara negra de arquitecto; mesa rústica corta; lupa inventada; segunda mesa; rótulo «PASILLO 7»; tomo negro con listón. Deben desaparecer o volver a la identidad de §23.1 y al contrato B/N de esta hoja.
- **Geometría:** reja–cuerpo–mesa quedó en una línea corta y despejada; contradice que desde la reja la mesa queda oculta por los estantes (§4.1 P3; §23.4).

## Hallazgos de auditoría 2026-09-19

**Veredicto: NO CUMPLE** — la regeneración del 2026-09-18 20:23 (`assets/plate_foto_pericial.webp`, 960×540) conserva los siete hallazgos del 2026-09-18 y añade un defecto de formato. Sólo cambió la pose de la silueta.

### Cumple (defendido con recortes)

- ✓ Tomo caído: cerrado, encuadernado en tela, con lomo hacia arriba, en el piso a ~1 m del cuerpo/silueta y entre éste y la mesa (`crop_piso.png`) — F1 (`plate_foto_pericial.md:17`, parcial: faltan mancha y cartelito, ver defectos).
- ✓ Lámpara **encendida** con haz visible sobre la mesa (`crop_estante.png`) — F1 (`:18`, parcial: el modelo es de arquitecto, ver defectos).
- ✓ Reja de barrotes al extremo opuesto con puerta metálica de servicio al fondo (`full.png`) — F1 (`:22`, parcial).
- ✓ Perspectiva estrecha y larga del pasillo, encuadre desde el interior junto a la mesa (`full.png`) — F1 (`:15`).
- ✓ F6: no existe `plate_foto_pericial_en.webp`; ES/EN comparten el mismo archivo (`assets/` verificado) — `:55`.

### Defectos confirmados

- **MAYOR / CONTRADICE** — F1 (`plate_foto_pericial.md:16`): el cuerpo boca abajo cabeza-estante/pies-mesa no existe; hay una silueta de gis tendida en el piso (`crop_piso.png`). La foto de las 19:05 debe mostrar el cuerpo, no el contorno posterior.
- **MAYOR / AUSENTE** — F1 (`:19-20`): el estante de la derecha es un mueble genérico de papeles apilados sin **24 ranuras** ni cartoncitos numerados; no hay ranura 13 vacía/oscura ni lomo de media piel con nervios y cantoneras en la 11 (`crop_estante.png`).
- **MAYOR / AUSENTE** — F1 (`:18`): no hay legajo/expediente abierto atado con listón sobre la mesa; sólo un libro cerrado y papeles sueltos (`crop_mesa.png`). Tampoco silla volcada hacia atrás.
- **MAYOR / CONTRADICE** — F3 (`:35`) y F1 (`:17`): placa metálica «ARCHIVO JUDICIAL / EXPEDIENTE No. 1977-05-14» inventa fecha/número anterior al presente de 1982 (`crop_placa.png`).
- **MAYOR / CONTRADICE** — F2 (`:27`): título «CASE 5 - PLACA DIDÁCTICA» + subtítulo autodescriptivo («Foto pericial B/N grano grueso…») y rótulo de pared «PASILLO 7»; texto prohibido en L2 (`crop_titulo.png`, `full.png`).
- **MAYOR / CONTRADICE** — F5 (`:49,:51`): tratamiento sepia/marrón sin el contrato B/N de grano grueso, marco de madera con manillas de latón y placa con borde — placa enmarcada en lugar de imagen plana (`full.png`).
- **MAYOR / CONTRADICE** — F5 (`:51`): resolución real 960×540 (ffprobe), no la imagen plana 1280×720 exigida (hallazgo nuevo de esta auditoría).
- **MAYOR / AUSENTE** — F1 (`:17`): cartelito numerado de perito ausente junto al tomo (`crop_piso.png`).
- **MEDIO / AUSENTE** — F1 (`:17`): mancha/sangre oscura en el lomo del tomo no visible (`crop_piso.png`).
- **MEDIO / DRIFT** — F1 (`:18,:22`, F5 `:50`): piso de losetas pétreas con escombros en vez de madera encerada limpia; lámpara negra de arquitecto en vez de pantalla verde; lupa inventada sobre la mesa; segunda mesa visible tras la reja; mesa rústica corta en vez de mesa larga de roble (`crop_piso.png`, `crop_estante.png`, `crop_mesa.png`).
- **MEDIO / CONTRADICE** — F1 (`:15`, geometría): la línea reja–cuerpo–mesa queda corta y despejada y la mesa es visible desde la reja; §4.1 P3 exige que los estantes la oculten (`full.png`).

### Correcciones de auditoría (contra hallazgos 2026-09-18)

- Título «CASE 5 – PLACA DIDÁCTICA»: **CONFIRMADO** — persiste idéntico (`crop_titulo.png`).
- Silueta de gis de pie con brazos en alto: **PARCIAL** — la silueta ya está tendida en el piso, no de pie; pero el defecto de fondo persiste porque sigue siendo contorno de gis y no el cuerpo boca abajo (no procede ~~tachado~~: el crop no prueba cumplimiento de `:16`).
- Falta de estante 24 ranuras / ranura 13 / lomo 11 / legajo / lámpara encendida / mancha / cartelito: **CONFIRMADO** — la lámpara encendida es lo único que apareció; el resto sigue ausente.
- Sepia sin grano + marco con manillas: **CONFIRMADO** — persiste sepia, marco y placa metálica; el subtítulo incluso proclama «B/N grano grueso» sin cumplirlo.
- Placa «EXPEDIENTE No. 1977-05-14»: **CONFIRMADO** — persiste idéntica (`crop_placa.png`).
- Piso de losetas, lámpara de arquitecto, mesa corta, lupa, segunda mesa, rótulo «PASILLO 7», tomo con listón: **CONFIRMADO** — todos persisten.
- Geometría reja–cuerpo–mesa: **CONFIRMADO** — persiste línea corta y despejada.

### Recomendación (regeneración)

1. Reemitir la placa como imagen plana **1280×720** B/N con grano grueso y contraste fotográfico: sin marco, manillas, título, subtítulo, rótulo «PASILLO 7» ni placa de expediente (F2/F3/F5).
2. Sustituir la silueta de gis por el **cuerpo boca abajo**, cabeza hacia el estante y pies hacia la mesa (F1 `:16`).
3. Pintar el estante de madera oscura con **24 ranuras** y cartoncitos 1–24: 22 lomos de tela idénticos, ranura 11 de media piel con nervios/cantoneras y algo más gruesa, ranura 13 vacía y oscura (F1 `:19-20`).
4. En la mesa larga de roble: legajo abierto atado con listón, lámpara de pantalla verde encendida y silla volcada; eliminar lupa y segunda mesa (F1 `:18`, F5 `:50`).
5. Añadir al tomo la mancha oscura en el lomo y el cartelito numerado de perito junto a él (F1 `:17`).
6. Piso de madera encerada limpia sin escombros; geometría con los estantes ocultando la mesa desde la reja (F1 `:15,:22`, F4 `:41`).

## Hallazgos de auditoría 2026-09-19 (regeneración Lote A)

Auditoría de `tools/raw/case5/plate_foto_pericial.jpg` (1280×720), recortes de cuerpo, mesa, estante y esquinas. Dos intentos. **Veredicto: cumple** los siete MAYOR de 2026-09-18/19 (cuerpo, no silueta; sin título didáctico; sin placa de expediente; B/N plano; mueble, legajo, lámpara, cartelito). Resta MEDIO (lomo del tomo; numeración del estante).

### Cumple

- ✓ Imagen plana B/N, sin marco ni manillas, sin «CASE 5 – PLACA DIDÁCTICA», sin «PASILLO 7», sin «EXPEDIENTE No. 1977-05-14» (F2/F3/F5; recorte de esquinas).
- ✓ **Cuerpo** de traje boca abajo, cabeza hacia el estante, pies hacia la mesa — no contorno de gis (F1/F4; recorte `plate_foto_pericial_body`; `trial_day1_success.ts:162`).
- ✓ Mesa larga, lámpara encendida, legajo abierto con listón, silla caída (F1).
- ✓ Mueble de consulta a la derecha; tomo en el piso con mancha; cartelito pericial (F1).
- ✓ Reja al fondo, puerta de servicio, tubería, piso de madera, sin gente viva (F1/F4). F6: sin `_en`.

### Defectos confirmados

- [x] ~~MAYOR título CASE 5 / silueta de gis / placa 1977 / marco sepia~~ **[x] RETIRADO POR REGENERACIÓN (2026-09-19 Lote A).**
- [x] ~~**MEDIO (F1, CONTRADICE)** — Tomo con tapa hacia arriba y mancha en la tapa, no lomo hacia arriba.~~ **[x] RETIRADO POR CONSISTENCIA (2026-09-19):** recorte `pl_tomo_tight` se nombra «tomo cerrado con el lomo hacia arriba, XI y mancha en el lomo».
- [ ] **MEDIO (F1/F3, DRIFT)** — Cartoncitos del estante con cifras saltadas; hueco 13 no oscuro. El tablero de señalamiento sigue siendo `examine_estante_consulta`.
- [ ] **MENOR (F5)** — Grano fotográfico poco grueso; cel-shade B/N aceptable como no-fotorrealismo.

### Recomendación

Alinear el mueble con `examine_estante_consulta` cuando se reabra el fondo.

## Hallazgos de auditoría 2026-09-19 (consistencia lomo-arriba)

Auditoría visual de `tools/raw/case5/plate_foto_pericial.jpg` (1280×720) tras el arreglo de consistencia del tomo del piso. Recortes por sustantivo (`pl_tomo_tight`, `pl_body`, `pl_cab`, `pl_door`, `pl_tag`). **Veredicto: cumple** el eje de consistencia del tomo (F1/F4 lomo arriba + mancha en el lomo). Sigue el MEDIO de numeración del estante.

### Cumple

- ✓ Tomo caído **lomo hacia arriba**, cerrado, tela, tejuelo `XI` y mancha oscura **en el lomo** (no en la tapa); el recorte `pl_tomo_tight` se nombra así (F1/F4; `trial_day1_success.ts:163`; consistencia con `examine_tomo_caido`).
- ✓ Cuerpo de traje boca abajo, cabeza hacia el estante, pies hacia la mesa — no silueta de gis (F1; recorte `pl_body`).
- ✓ Mueble de consulta a la derecha; cartelito pericial junto al tomo (F1; recortes `pl_cab`, `pl_tag`).
- ✓ Puerta metálica de servicio entreabierta; reja al fondo; piso de madera; B/N plano sin marco ni títulos (F1/F2/F5; recorte `pl_door`).

### Defectos confirmados

- [x] ~~MEDIO tomo tapa-arriba~~ **[x] RETIRADO POR CONSISTENCIA (2026-09-19):** ver traza en la pasada Lote A.
- [ ] **MEDIO (F1/F3, DRIFT)** — Cartoncitos saltados; hueco 13 no oscuro. Fuera de este arreglo.
- [ ] **MENOR (F5)** — Grano fotográfico poco grueso (sin cambio). El tomo compuesto es un grado más gráfico que el resto de la placa.

### Recomendación

Ninguna bloqueante para el lomo. Opcional: alinear la numeración del mueble con `examine_estante_consulta`.
