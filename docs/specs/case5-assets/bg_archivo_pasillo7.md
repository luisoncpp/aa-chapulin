# bg_archivo_pasillo7 — hoja de hechos

Clase: `bg`. Espec: §23.0, §23.1. Guion: §10.3 (investigación del 6 de diciembre) y las variantes ES/EN de `src/case/case5/Private/archivo_pasillo7*.ts`; el recuerdo del 4 de diciembre usa `bg_archivo_pasillo7_d4`.

## Mapa semántico y alcance

Fondo del pasillo 7 del primer piso del Archivo Judicial, en perspectiva larga de punto de fuga. La identidad espacial la forman las estanterías altas de madera oscura con legajos atados con listón, la tubería vista, el mueble de consulta, la mesa de roble, la puerta metálica de servicio, la rejilla de ventilación caliente y la reja del extremo opuesto. El estado canónico de §23.1/§10.3 es la escena del crimen ya descubierta: silueta de gis boca abajo, tomo caído y cartelito pericial. El relato de §10.1 reutiliza el mismo id dieciocho minutos antes del homicidio, lo que abre un conflicto de estado de trama documentado abajo.

Alias seguidos: `pasillo 7`, `estante de consulta`, `estante`, `mueble de consulta`, `ranura 13`, `mesa de consulta`, `legajo/expediente`, `tomo caído`, `reja`, `puerta de servicio`, `rejilla`, `calor`.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Pasillo estrecho y largo del primer piso, entre estanterías de madera oscura de piso a techo cargadas con legajos atados con listón, con perspectiva de un punto de fuga y techo alto con una tubería vista (§23.1, `docs/specs/case-5-el-tomo-trece.md:3987`).
- [ ] `PINTAR` — A la derecha y al frente, un mueble de consulta distinto de las estanterías: **una sola banda horizontal continua de 24 ranuras claramente separadas**, no dos filas apiladas ni una consola baja, con cartoncitos numerados; 22 lomos de tela verde oliva idénticos, la ranura 13 vacía y oscura, y en la ranura 11 un lomo de media piel color vino con nervios y dos cantoneras de latón (`examine_estante_consulta.md:23-27`).
- [ ] `PINTAR` — A la izquierda, mesa larga de roble con lámpara de pantalla verde encendida, legajo abierto sobre la mesa y silla volcada hacia atrás (§23.1; `archivo_pasillo7_hotspots.ts:69-72`; `docs/specs/case-5-el-tomo-trece.md:790-824`).
- [ ] `PINTAR` — Entre mesa y estante, silueta de cuerpo marcada con gis blanco, boca abajo y con la cabeza hacia el estante; a un metro, tomo grueso de tela verde caído con el lomo hacia arriba y cartelito numerado de perito al lado (§23.1; §10.3; `archivo_pasillo7_hotspots.ts:19-35`).
- [ ] `PINTAR` — Al fondo, puerta metálica gris de servicio entreabierta; en el muro izquierdo, rejilla grande de ventilación con una línea sutil de aire caliente, nunca vapor fotográfico; al fondo opuesto, reja de barrotes que cierra el pasillo (§23.1; §4.1 P3/P7).
- [ ] `AUSENTE` — Personajes vivos; la escena de investigación sólo contiene el fondo y recibe al Sargento como sprite aparte (`archivo_pasillo7.ts:9-29`; `archivo_pasillo7_en.ts:9-29`).

### F2 Texto en imagen

- [ ] `AUSENTE` — Texto legible, rótulos de escena, subtítulos, marcas de agua o texto en inglés; §23.1 termina expresamente en «sin texto legible» y §23.0 prohíbe texto en inglés salvo variantes EN exigidas en §23.3.
- [ ] `NO CONTRADECIR` — Los cartoncitos numerados de las ranuras y el cartelito de perito son marcas diegéticas exigidas, pero no deben convertirse en rotulación explicativa ni exigir prosa legible (§23.1; `archivo_pasillo7_hotspots.ts:45-46`).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La investigación representa el 6 de diciembre a las 11:40 AM, con calor absurdo para diciembre; esas palabras están en la narración y no deben imprimirse en el fondo (`archivo_pasillo7.ts:17`; `archivo_pasillo7_en.ts:17`; §10.3).
- [ ] `NO CONTRADECIR` — La colección visible conserva la aritmética de 24 ranuras, 23 tomos en el mueble y un tomo en el suelo; la ranura 13 es el hueco histórico del tomo anunciado y nunca publicado (§4.1 P6; §24.C F7; §24.D I3).
- [ ] `NO CONTRADECIR` — El fondo se reserva para la investigación posterior del 6 de diciembre; el relato previo al homicidio de las 17:02 usa `bg_archivo_pasillo7_d4` (§10.1; §10.3; §24.A/§24.B).

### F4 Contrato en pantalla

- [ ] `PINTAR` — Al entrar en `archivo_pasillo7`, el fondo muestra el pasillo mientras el narrador fija «6 de diciembre, 11:40 AM», calor y primer piso; `furniture: 'none'` significa que los elementos propios deben estar integrados en el fondo (`archivo_pasillo7.ts:9-29`; variante EN equivalente).
- [ ] `PINTAR` — La silueta, el tomo y el estante están pintados en el fondo para que Examinar no los oculte; los hotspots sólo estampan el diálogo y entregan `informe_forense_c5`, `tomo_caido` y `estante_consulta` (`archivo_pasillo7_hotspots.ts:3-5,9-56`; variante EN equivalente).
- [ ] `NO CONTRADECIR` — La conversación sobre el estante depende de ver 24 ranuras, la 13 vacía, 23 tomos en el mueble y uno en el piso; no introducir un segundo hueco ni quitar el lomo distinto de la ranura 11 (`archivo_pasillo7_hotspots.ts:45-56`; §24.C F7; §24.D I3).
- [ ] `NO CONTRADECIR` — La conversación sobre la mesa depende de la lámpara encendida, el expediente abierto en la página 214 y la silla volcada; el fondo no tiene que imprimir «214» ni el texto de la tarjeta (`archivo_pasillo7_hotspots.ts:69-77`; §10.3).
- [ ] `NO CONTRADECIR` — Las referencias posteriores mantienen la orientación del cuerpo, el tomo, la mesa y el estante: cuerpo boca abajo entre estante y mesa, tomo a un metro, legajo abierto, lámpara encendida y 24 ranuras (`trial_day1_success.ts:161-164`; `trial_day1_success_en.ts:161-164`).
- [ ] `AUSENTE` — En el estado de investigación, cuerpo vivo, policías, segunda mesa, escombros, vapor fotográfico o mobiliario inventado (§23.1; §4.1 P3/P7).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* de linaje GBA/Nintendo DS, alta definición; cel-shading plano con terminador duro de dos tonos; contorno continuo carbón `#1A1A1A`, más grueso en la silueta; caricatura expresiva; colores primarios saturados.
- [ ] El registro visual del caso es papel, madera y polvo: archivo judicial, expedientes con listón, madera barnizada, latón envejecido y luz de tungsteno (§23.0). El ambiente debe sentirse cálido y opresivo, no fotográfico (§23.1).
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto en inglés y rosa/magenta en primer plano (§23.0; [[docs/specs/artistic-direction.md]] §5).

### F6 Localización

- [ ] `NO CONTRADECIR` — No existe variante localizada del fondo: ES y EN apuntan a `assets/bg_archivo_pasillo7.webp` (`archivo_pasillo7.ts:12,17`; `archivo_pasillo7_en.ts:12,17`).
- [ ] La composición, objetos, conteos, estado del crimen y marcas diegéticas son idénticos entre idiomas. Sólo cambia la prosa de los diálogos en `archivo_pasillo7_hotspots*.ts` y `celda_talks*.ts`; no introducir texto para resolver la traducción.

## Consistencia (regenerar juntos)

- `plate_foto_pericial` — comparte geometría del pasillo, piso de madera, estanterías, reja, puerta de servicio, rejilla caliente, mesa, lámpara, silla, legajo y disposición posterior al crimen. No es fuente de verdad de éste; aquí la silueta sustituye al cuerpo de la fotografía.
- `examine_estante_consulta` — fija la referencia canónica del mueble compartido: una sola fila horizontal de 24 ranuras, 22 lomos de tela, hueco 13 y lomo distinto de la ranura 11. Regenerar junto con este fondo; el fondo no es fuente de verdad de la placa frontal.
- `examine_tomo_caido` + icono `tomo_caido` — comparten tomo de tela verde, lomo arriba, mancha y posición a un metro; el sello violeta de la guarda pertenece al `detailedView`, no al fondo. No son fuente de verdad de éste.
- `expediente_casimiro` — comparte mesa, legajo abierto y página 214 como objeto narrado; el texto de la tarjeta no debe imprimirse en el fondo. No es fuente de verdad de éste.
- `bg_archivo_pasillo7_d4` (propuesto en `new-assets.md`) — mismo espacio en el recuerdo previo al crimen; regenerar juntos para conservar geometría y materiales, pero no mezclar su estado sin silueta/tomo/cartel con el estado canónico de investigación.
- `plate_tomo_trece` — comparte la colección, 24 ranuras y ausencia histórica de la 13; no es fuente de verdad del fondo ni debe imponer un primer plano frontal.
- `bg_archivo_vestibulo` — comparte el edificio y la ruta de acceso, no la sala ni los props; regenerar juntos sólo si se cambia el lenguaje material del Archivo.

## Decisión de regeneración futura

El mueble de `examine_estante_consulta.webp` es el candado de consistencia. `bg_archivo_pasillo7_d4`, `bg_archivo_pasillo7` y `plate_foto_pericial` deben mostrar el mismo mueble de **una sola fila horizontal**, adaptado a la perspectiva del pasillo; no se acepta el diseño actual de dos filas. No regenerar la placa frontal ni otros assets del caso por este problema: el lote afectado son esos tres fondos/placa.

## Corrección de auditoría 2026-09-19 (revisión posterior)

El veredicto «cumple» de Lote B queda **supersedido** por drift de consistencia: el mueble instalado usa dos filas, mientras `examine_estante_consulta` fija una sola fila horizontal continua. La próxima regeneración debe cambiar sólo el lote de tres assets y conservar el resto del caso.

## Conflictos abiertos

- `bg_archivo_pasillo7` queda reservado para la escena del crimen descubierta de §10.3: silueta de gis, tomo caído, cartelito pericial y silla volcada. El relato previo de §10.1 usa la variante `bg_archivo_pasillo7_d4`, que separa el estado visual anterior al homicidio (`docs/specs/case-5-el-tomo-trece.md:550-567`; `src/case/case5/Private/celda_talks.ts:12-28` y `_en`).
- §10.1 no fija una composición alternativa visible para el recuerdo más allá de la mesa y los dos custodios descritos por el diálogo; por ello no se inventan requisitos de props para el estado previo. El conflicto queda limitado al estado incompatible ya documentado.

## Hallazgos de auditoría 2026-09-19

Auditoría visual de `assets/bg_archivo_pasillo7.webp` (1536×1024) contra esta hoja, con recortes ampliados por sustantivo (segunda pasada, misma fecha). Veredicto: **no cumple el contrato en contenido (F1/F4); requiere regeneración.** Cumple el estado post-crimen, las exclusiones (`AUSENTE`), F2, F6 y el estilo (aceptado por el revisor). Falla en 3 puntos mayores (mueble de consulta, cartelito pericial, legajo abierto) y varios medios (puerta, reja, rejilla, tubería, tomo, orientaciones). Cambio respecto de la primera pasada: el defecto MAYOR de la silla volcada se retira — con zoom ×3 la silla sí se lee como «silla volcada hacia atrás».

### Cumple (coincidencias)

- ✓ Silueta de gis blanca pintada en el piso, integrada al fondo sin sprite (F1, F4 `PINTAR`; `furniture: 'none'`; `archivo_pasillo7.ts:9-29`). Pose legible de cuerpo caído boca abajo, brazos y piernas abiertos.
- ✓ Tomo de tela verde caído junto a los pies de la silueta, pintado en el fondo, un solo tomo en el piso (F1; F3 aritmética parcial: 1 en el suelo ✓).
- ✓ Mesa de roble a la izquierda con lámpara de pantalla verde **encendida** (F1; `archivo_pasillo7_hotspots.ts:69-69`).
- ✓ Silla volcada hacia atrás junto a la mesa: el recorte ampliado muestra asiento, dos postes de respaldo y travesaños con patas abiertas, legibles como silla volcada (F1; defiende el ✓ de la primera pasada, ver corrección abajo).
- ✓ Estantes de madera oscura de piso a techo con legajos atados con listón (lazos rojizos con moño visibles en los estantes superiores) y perspectiva de un punto de fuga hacia el fondo (F1, §23.1).
- ✓ Existe un hueco oscuro vacío en la estantería y, junto a él, un tomo distinto con nervios y cantoneras doradas: lectura parcial de «ranura 13 vacía» y «ranura 11 distinta» (F1/F4, parcial — sin mueble propio ni cartoncitos, ver defectos).
- ✓ `AUSENTE` todo en orden: sin personajes vivos, sin policías, sin segunda mesa, sin escombros relevantes, sin vapor fotográfico, sin mobiliario inventado (sólo cuadros y aplique de ambiente en el muro izquierdo, menor; barrido con brillo aumentado para zonas oscuras) (F1/F4 `AUSENTE`).
- ✓ F2: sin texto legible ni marcas de agua; los filetes dorados de los lomos son garabatos ilegibles, no rotulación. Sin fecha ni hora impresas (F3; `archivo_pasillo7.ts:17`).
- ✓ F6: no existe variante `_en` del asset; `archivo_pasillo7.ts:12,17` y `archivo_pasillo7_en.ts:12,17` apuntan al mismo `assets/bg_archivo_pasillo7.webp`; sin texto pensado para «resolver» la traducción.
- ✓ F5 tema: madera barnizada, papel, latón envejecido, luz de tungsteno, ambiente cálido y opresivo, no fotográfico (§23.0/§23.1). Estilo pictórico aceptado por el revisor (ver hallazgo retirado abajo).

### Defectos confirmados

- [x] **MAYOR (estilo, §23.0) — RETIRADO POR REVISIÓN (2026-09-19).** El revisor confirma que el estilo de la imagen es correcto. Para constancia, §23.0 (`docs/specs/case-5-el-tomo-trece.md:3978-3980`) pide en su literal «cel-shading de colores planos con terminador de sombra duro», «contorno oscuro nítido y continuo en carbón `#1A1A1A`» y «colores primarios saturados», y prohíbe «degradados suaves» y «texturas fotográficas»; la imagen satisface el **tema** (madera barnizada, latón, tungsteno, cálido opresivo) y ninguno de los prohibidos duros, y el revisor acepta su acabado pictórico como válido. No bloquea la regeneración por estilo.
- [x] ~~**MAYOR (F1/F4, forma)** — El objeto volcado junto a la mesa no tiene forma de silla: enredo de tablas sin asiento ni respaldo legibles.~~ **[x] RETIRADO POR REVISIÓN (2026-09-19, segunda pasada):** el recorte ampliado ×3 de la zona `(150,380)-(560,900)` muestra un asiento con veta, dos postes de respaldo y patas con travesaños que ensamblan; el honesto test de nombrar responde «silla de madera volcada hacia atrás contra la mesa». Conforme a Paso 7 el ✓ de «Cumple» se restaura y el defecto deja de bloquear.
- [ ] **MAYOR (F1/F4, AUSENTE)** — No existe el **mueble de consulta** como objeto distinto de la estantería general: no hay 24 ranuras numeradas ni cartoncitos; los tomos verdes viven en la estantería del muro derecho con un conteo muy superior a 23, y el hueco oscuro no es una ranura contable. Rompe la aritmética de F3 (24 ranuras / 23 tomos / 1 en el suelo) y el diálogo del hotspot `examine_estante_consulta` (`archivo_pasillo7_hotspots.ts:45-56`): «las ranuras numeradas del 1 al 24 en cartoncitos», «la ranura trece está vacía» y «veintitrés tomos y el hueco de siempre» quedan sin soporte visual.
- [ ] **MAYOR (F1/F4, AUSENTE)** — **Cartelito numerado de perito ausente** junto al tomo caído (recorte de la zona tomo–silueta: sólo piso y silueta). El narrador del hotspot `hotspot_tomo` lo cita mientras se ve el fondo: «marcado con un cartelito de perito» (`archivo_pasillo7_hotspots.ts:30`).
- [ ] **MAYOR (F1/F4, AUSENTE)** — **Legajo abierto y atado con listón ausente** sobre la mesa; la superficie sólo tiene la lámpara y una mota. El narrador del hotspot `hotspot_mesa` lo cita: «Sobre ella, un legajo abierto y atado con listón» (`archivo_pasillo7_hotspots.ts:69-77`; también `trial_day1_success.ts:164`).
- [ ] **MEDIO (F1, CONTRADICE)** — Puerta del fondo: es de **madera, cerrada, con vano superior de lucarnetas**; §23.1 exige **puerta metálica gris de servicio entreabierta**. Contradice también la entrada de consistencia con `plate_foto_pericial`.
- [ ] **MEDIO (F1, AUSENTE)** — **Reja de barrotes ausente** al fondo opuesto; el punto de fuga remata en la puerta de madera, sin barra alguna que cierre el pasillo (§23.1; §4.1 P7).
- [ ] **MEDIO (F1, AUSENTE)** — **Rejilla de ventilación con línea sutil de aire caliente ausente** en el muro izquierdo; en su lugar hay cuadros enmarcados y un aplique encendido (§23.1; §4.1 P3; el «calor de fritanga» del diálogo no tiene ancla visual).
- [ ] **MEDIO (F1, AUSENTE)** — **Tubería vista en el techo ausente**; el techo apenas es visible y no muestra tubería alguna (§23.1).
- [ ] **MEDIO (F1, CONTRADICE/DRIFT)** — Tomo caído: se ve la **tapa hacia arriba** con el lomo al costado izquierdo, no el **lomo hacia arriba** como exige §23.1; contradice además la entrada de consistencia con `examine_tomo_caido` (que comparte «lomo arriba, mancha») y deja sin ancla el «Tiene sangre en el lomo» de `archivo_pasillo7_hotspots.ts:32`.
- [ ] **MENOR (F1, CONTRADICE)** — Orientación de la silueta: la cabeza apunta hacia el fondo/izquierda (hacia la puerta y la mesa), no **hacia el estante** como exige §23.1 y narra `archivo_pasillo7_hotspots.ts:15` («Boca abajo, con la cabeza hacia el estante»).
- [ ] **MENOR (F1, DRIFT)** — El tomo distinto junto al hueco es **cuero marrón liso** con nervios y cantoneras doradas; §23.1 pide **media piel color vino** con dos cantoneras de latón. Legible como «tomo distinto» pero con el color equivocado; afecta la lectura compartida con `examine_estante_consulta`.

### Correcciones de auditoría

- Primera pasada (misma fecha) marcaba «✗ silla volcada: enredo de tablas» como defecto MAYOR de forma. La segunda pasada, con recorte ampliado, desmiente el hallazgo: la silla es legible. Se retira citando la decisión y el ✓ vuelve a la lista de cumplidos (traza conservada arriba).
- El hallazgo de estilo MAYOR permanece retirado por decisión del revisor (2026-09-19), sin cambios.
- Los ✓ «hueco oscuro» y «tomo distinto» de la primera pasada se mantienen, pero se recalifican como **lectura parcial**: sin mueble de consulta propio ni cartoncitos, no satisfacen por sí solos F3/F4.

### Recomendación

No cumple: regenerar junto con el conjunto de consistencia de esta hoja (`plate_foto_pericial`, `examine_estante_consulta`, `examine_tomo_caido`, `expediente_casimiro`, `bg_archivo_pasillo7_d4`, `plate_tomo_trece`). El prompt de regeneración debe, en orden:

1. Añadir el **mueble de consulta** distinto (derecha/frente): 24 ranuras con cartoncitos numerados ilegibles, 22 lomos de tela verde oliva idénticos, ranura 13 vacía y oscura, ranura 11 con lomo de **media piel color vino** con nervios y dos cantoneras de latón.
2. Añadir el **cartelito numerado de perito** junto al tomo caído.
3. Añadir el **legajo abierto atado con listón** sobre la mesa de roble (sin imprimir «214» ni texto legible).
4. Corregir la puerta del fondo a **metálica gris de servicio entreabierta**; añadir **reja de barrotes** en el fondo opuesto, **rejilla de ventilación con línea sutil de aire caliente** en el muro izquierdo y **tubería vista** en el techo.
5. Girar el tomo caído a **lomo hacia arriba** (con la mancha compartida con `examine_tomo_caido`) y orientar la cabeza de la silueta **hacia el estante**.
6. Mantener la silla volcada actual, el estilo aceptado y todas las exclusiones que ya cumplen.

## Hallazgos de auditoría 2026-09-19 (regeneración Lote A)

Auditoría visual de `tools/raw/case5/bg_archivo_pasillo7.jpg` (1280×720) contra esta hoja, recortes por sustantivo. Tres intentos. **Veredicto: cumple el eje bloqueante de contenido (F1/F4 MAYOR); restan MEDIO.** Los tres MAYOR de la pasada previa (mueble de consulta, cartelito pericial, legajo abierto) están pintados y se nombran. No se regenera más (tope de 3).

### Cumple

- ✓ Pasillo estrecho de un punto de fuga, estanterías de piso a techo con legajos atados con listón, techo con tubería vista (F1).
- ✓ Mueble de consulta **distinto** a la derecha-frente: fila de lomos de tela verde, lomo vino con cantoneras, no es la estantería general (F1/F4; `archivo_pasillo7_hotspots.ts:45-56`).
- ✓ Mesa de roble a la izquierda, lámpara de pantalla verde encendida, **legajo abierto atado con listón** (F1; `archivo_pasillo7_hotspots.ts:69-77`).
- ✓ Silla volcada hacia atrás: asiento, respaldo y patas legibles (F1).
- ✓ Silueta de gis boca abajo, cabeza hacia el estante/derecha, pies hacia la mesa (F1/F4).
- ✓ Cartelito pericial en blanco junto al tomo (F1; `archivo_pasillo7_hotspots.ts:30`).
- ✓ Puerta metálica gris entreabierta; reja de barrotes al fondo; rejilla de ventilación en el muro izquierdo con línea de calor; tubería al techo (F1).
- ✓ AUSENTE personajes vivos, UI, fechas impresas, inglés (F1/F2/F4). F6: sin variante `_en`.

### Defectos confirmados

- [x] ~~MAYOR mueble de consulta ausente~~ **[x] RETIRADO POR REGENERACIÓN (2026-09-19 Lote A):** el recorte `bg_archivo_pasillo7_cabinet` se nombra «mueble de consulta de lomos verdes con un lomo vino».
- [x] ~~MAYOR cartelito pericial ausente~~ **[x] RETIRADO POR REGENERACIÓN:** cartoncito en pie junto al tomo.
- [x] ~~MAYOR legajo abierto ausente~~ **[x] RETIRADO POR REGENERACIÓN:** expediente abierto con listón sobre la mesa.
- [x] ~~MEDIO puerta de madera / reja / rejilla / tubería~~ **[x] RETIRADO POR REGENERACIÓN:** puerta gris entreabierta, reja, rejilla y tubería presentes.
- [x] ~~**MEDIO (F1, CONTRADICE/DRIFT)** — Tomo caído: tapa hacia arriba con `XI` y mancha en la tapa, no **lomo hacia arriba**.~~ **[x] RETIRADO POR CONSISTENCIA (2026-09-19):** recorte `bg_tomo_tight` se nombra «tomo de tela con el lomo hacia arriba, tejuelo XI y mancha parda en el lomo»; ancla el «Tiene sangre en el lomo» de `archivo_pasillo7_hotspots.ts:32` y alinea con `examine_tomo_caido`.
- [ ] **MEDIO (F1/F3, CONTRADICE)** — Los cartoncitos del mueble son cifras grandes saltadas (`2 3 4 5 8 18 / 11 12 / 16…24`); el hueco 13 no se lee como ranura vacía oscura. El tablero jugable sigue siendo `examine_estante_consulta`; el fondo no sostiene por sí solo el conteo 24/13.

### Recomendación

Si hay un cuarto pase: igualar el mueble al tablero de `examine_estante_consulta` (hueco 13 oscuro, tags 1–12 / 14–24, lomo 11 vino) con cartoncitos pequeños.

## Hallazgos de auditoría 2026-09-19 (consistencia lomo-arriba)

Auditoría visual de `tools/raw/case5/bg_archivo_pasillo7.jpg` (1280×720) tras el arreglo de consistencia del tomo del piso. Recortes por sustantivo (`bg_tomo_tight`, `bg_body`, `bg_cab`, `bg_door`, `bg_tag`, `bg_mesa`). `bg_archivo_pasillo7_d4.jpg` no se tocó (suelo sin tomo). **Veredicto: cumple** el eje de consistencia del tomo (F1/F4 lomo arriba + mancha en el lomo). Sigue el MEDIO de numeración del mueble, fuera de este arreglo.

### Cumple

- ✓ Tomo caído **lomo hacia arriba** (ladrillo sobre el canto, no tapa al cielo): tejuelo `XI` y mancha parda **en el lomo**; el recorte `bg_tomo_tight` se nombra así sin el contexto de la hoja (F1/F4; `archivo_pasillo7_hotspots.ts:32`; consistencia con `examine_tomo_caido`).
- ✓ Silueta de gis boca abajo, cabeza hacia el estante, pies hacia la mesa (F1; recorte `bg_body`).
- ✓ Mueble de consulta de 24 ranuras a la derecha, lomo vino en 11, cartelitos diegéticos (F1; recorte `bg_cab`).
- ✓ Puerta metálica gris entreabierta; reja al fondo (F1; recorte `bg_door`).
- ✓ Cartelito pericial junto al tomo, sólo en este fondo de crimen (F1; recorte `bg_tag`).
- ✓ Mesa, lámpara encendida, legajo abierto, silla volcada; sin personajes vivos (F1/F4).

### Defectos confirmados

- [x] ~~MEDIO tomo tapa-arriba~~ **[x] RETIRADO POR CONSISTENCIA (2026-09-19):** ver traza en la pasada Lote A.
- [ ] **MEDIO (F1/F3, CONTRADICE)** — Cartoncitos saltados; hueco 13 no oscuro. Fuera de este arreglo.
- [ ] **MENOR (F5, DRIFT de postproceso)** — El tomo del piso es un prop compuesto sobre el fondo: el lomo se lee, pero el contorno y la luz son un grado más gráficos que el resto de la sala.

### Recomendación

Ninguna bloqueante para el lomo. Opcional: alinear la numeración del mueble con `examine_estante_consulta`.

## Hallazgos de auditoría 2026-09-19 (regeneración final Lote B)

Auditoría visual per-crop de `assets/bg_archivo_pasillo7.webp` (1536×1024): silla, mueble, cuerpo, tomo y mesa. **Veredicto: cumple** los defectos críticos solicitados y la consistencia del tomo.

### Cumple

- ✓ Silla volcada hacia atrás pero inequívocamente silla: asiento, respaldo con listones y patas coherentes (`bg_chair`).
- ✓ Mueble de consulta alto con varias repisas, zócalo, fila superior e inferior y una cavidad oscura; ya no es una repisa baja de una sola fila (`bg_bookcase`).
- ✓ Silueta de gis boca abajo, cabeza hacia el mueble y pies hacia la mesa; tomo separado de la silueta (`bg_body`).
- ✓ Tomo cerrado de tela verde, lomo hacia arriba, tejuelo `XI` y mancha concentrada sobre el lomo; cartelito junto al volumen (`bg_tome`).
- ✓ Mesa larga, lámpara encendida, expediente abierto, puerta y reja; sin personajes vivos ni mobiliario inventado (`bg_table`, `bg_bookcase`).

### Defectos confirmados

- [x] ~~MEDIO · DRIFT — cifras saltadas y hueco 13 no oscuro~~ **[x] RETIRADO POR REGENERACIÓN (2026-09-19 Lote B):** el mueble comparte la geometría alta y la cavidad oscura con el nuevo `d4`; los cartoncitos no contienen cifras falsas legibles.
- [x] ~~MENOR · DRIFT — tomo compuesto más gráfico que la sala~~ **[x] RETIRADO POR REGENERACIÓN (2026-09-19 Lote B):** el tomo conserva una silueta limpia y coincide en orientación, tela, tejuelo y mancha con la placa.

### Recomendación

Ninguna regeneración adicional.

## Hallazgos de auditoría 2026-09-19 (regeneración desde cero)

Auditoría visual per-crop de `assets/bg_archivo_pasillo7.webp` (1536×1024), generada desde la descripción escrita sin imagen de referencia. **Veredicto: cumple** el estado de investigación, el contenido bloqueante, las exclusiones y el conjunto de consistencia.

### Cumple

- ✓ Mueble de consulta como una sola banda continua de 24 ranuras, con hueco oscuro en la 13 y lomo vino con nervios/cantoneras en la 11; no hay segunda fila (`crime_bookcase`).
- ✓ Silla caída inequívocamente reconocible: asiento, respaldo, listones, patas y travesaños ensamblados (`crime_floor`).
- ✓ Silueta de gis boca abajo, cabeza hacia el mueble y pies hacia la mesa; tomo cerrado con lomo arriba, mancha en el lomo y cartelito adyacente (`crime_floor`).
- ✓ Mesa larga, lámpara encendida, expediente abierto, puerta gris entreabierta, reja, rejilla con onda de aire y tubería (`crime_corridor`, `crime_floor`).
- ✓ AUSENTE cuerpo vivo, personajes, policía, segunda mesa, máquina de escribir, vapor fotográfico y texto explicativo (`crime_corridor`).

### Defectos confirmados

- Ninguno que justifique otra regeneración. La silla pasa el test de nombrar como silla volcada, no como tablas sueltas.

### Recomendación

Conservar esta generación.

## Hallazgos de auditoría 2026-09-19 (lote canónico compartido)

Auditoría visual per-crop de `assets/bg_archivo_pasillo7.webp` (1536×1024), con comparación de geometría contra `bg_archivo_pasillo7_d4`, `plate_foto_pericial` y `examine_estante_consulta`. **Veredicto: cumple** contenido bloqueante, legibilidad de objetos y consistencia del lote.

### Cumple

- ✓ La silla volcada conserva asiento, respaldo alto, listones, patas y travesaños conectados; pasa el test de nombrar como silla (`bg_archivo_pasillo7_2`, `bg_archivo_pasillo7_3`).
- ✓ El mueble de consulta es una sola banda horizontal con 24 ranuras, hueco oscuro en 13 y lomo vino en 11 (`bg_archivo_pasillo7_1`).
- ✓ La silueta, el tomo con lomo arriba y el cartel pericial están separados y legibles; la cabeza de la silueta apunta al mueble (`bg_archivo_pasillo7_3`).
- ✓ Mesa, expediente abierto, lámpara encendida, puerta, reja, rejilla con ondas de aire y ducto permanecen en la composición compartida (`bg_archivo_pasillo7_0`, `bg_archivo_pasillo7_4`, `bg_archivo_pasillo7_5`).
- ✓ No hay personajes, texto explicativo, humo fotográfico, segunda fila del mueble ni segundo hueco.

### Defectos confirmados

- Ninguno que justifique otra regeneración. Esta generación queda como master del lote compartido.

### Recomendación

Conservar esta generación y derivar las variantes únicamente desde este master.

## Hallazgos de auditoría 2026-09-19 (regeneración Lote A v2, RAW ~19:56)

Auditoría visual per-crop de `tools/raw/case5/bg_archivo_pasillo7.jpg` (1536×1024, regenerado 2026-09-19 ~19:56), recortes ampliados por sustantivo: `c_mueble`, `c_slots` (×4), `c_tomo`, `c_silla`, `c_gis`, `c_puerta`, `c_rejilla`, `c_techo`, `c_mesa`. Los hallazgos previos corresponden a la generación anterior. **Veredicto: cumple** los nueve puntos solicitados para la regeneración (F1/F4 bloqueante) y las exclusiones; restan dos defectos no bloqueantes (MEDIO/MEDIO) y un matiz de estilo.

### Cumple

- ✓ **Mueble de consulta** distinto de las estanterías: una sola banda horizontal continua de 24 ranuras con cartoncitos numerados, sin segunda fila ni consola baja; aritmética correcta — 12 tomos a la izquierda del hueco (11 verdes + lomo vino en la ranura 11), **ranura 13 vacía y oscura**, 11 tomos a la derecha → 23 tomos en el mueble y el tomo 24 en el suelo (F1/F3; `examine_estante_consulta.md:23-27`; `archivo_pasillo7_hotspots.ts:45-56`). Prueba de nombrar: «mueble de consulta de lomos verdes con un lomo vino y un hueco oscuro».
- ✓ **Lomo vino** de la ranura 11: burdeos con nervios y franjas doradas, claramente distinto del oliva; las cantoneras de latón no son visibles en vista de lomo (aceptación del revisor en pasadas previas) (F1; recorte `c_mueble`).
- ✓ **Cartelito pericial** numerado en pie junto al tomo, sin volverse rotulación (F1/F2; `archivo_pasillo7_hotspots.ts:30`).
- ✓ **Tomo caído**: cerrado, tela verde, **lomo hacia arriba** con tejuelo y mancha parda concentrada en el lomo, a un metro de la silueta (F1/F4; consistencia con `examine_tomo_caido`).
- ✓ **Silueta de gis** boca abajo, mano visible, **cabeza hacia el estante/mueble** y pies hacia la mesa (F1/F4; `trial_day1_success.ts:161-164`).
- ✓ **Legajo abierto atado con listón** sobre la mesa de robe; **lámpara de pantalla verde encendida** (F1; `archivo_pasillo7_hotspots.ts:69-77`).
- ✓ **Silla volcada hacia atrás**: pasa el test de nombrar — asiento, respaldo con listones, travesaños y patas ensamblados; no es un enredo de tablas (F1; recorte `c_silla`).
- ✓ **Puerta metálica gris de servicio entreabierta** con ojo de buey y mirilla reticulada; **reja de barrotes** cerrando el pasillo al fondo opuesto (F1; recorte `c_puerta`).
- ✓ **Rejilla de ventilación** metálica en el muro izquierdo con tres ondas grises de aire; se leen como línea de aire estilizada, no vapor fotográfico (F1; recorte `c_rejilla`).
- ✓ **Tubería vista** en el techo: ducto metálico espiral a lo largo del pasillo con puntos de fuga (F1; recorte `c_techo`).
- ✓ **AUSENTE** personajes vivos, policía, escombros, segunda mesa, mobiliario inventado, fechas/horas impresas, texto en inglés ni marcas de agua (F1/F2/F4). F6: sin variante localizada; sin texto de «ayuda» de traducción.

### Defectos confirmados

- [ ] **MEDIO (F3/F4, CONTRADICE)** — Los cartoncitos numerados del mueble están **saltados y duplicados**: tras «16» se leen `17, 17, 19, 19, 20, 21, 22, 23, 24`; falta el 18. El conteo de ranuras (24) y el hueco 13 sí son correctos, pero la numeración impresa contradice el tag 13 narrado («el hueco histórico del tomo anunciado»); la aritmética del mueble no se sostiene por sí sola en pantalla (recorte `c_slots`; `archivo_pasillo7_hotspots.ts:45-56`).
- [ ] **MEDIO (consistencia, DRIFT)** — El piso es **losa gris pulida**; el conjunto de consistencia fija «piso de madera» compartido con `plate_foto_pericial` («Consistencia», primera viñeta). No rompe un diálogo directamente, pero contradice el rasgo compartido del lote.
- [ ] **MENOR (F5, DRIFT de estilo, pendiente de revisor)** — El sombreado es de transición suave con oclusión ambiental; diluye el «cel-shading plano con terminador duro de dos tonos y contorno carbón `#1A1A1A`» del §23.0. En pasadas anteriores un hallazgo equivalente fue retirado por decisión del revisor; se registra para que el revisor decida sobre este render.

### Correcciones de auditoría

- Los ✓ de la generación anterior sobre el mismo archivo quedan superseded por esta pasada; las trazas previas se conservan arriba sin cambios.

### Recomendación

1. Corregir la numeración de los cartoncitos a 1–24 secuenciales (o cartoncitos ilegibles pequeños) conservando el hueco 13 oscuro y el lomo vino en la 11.
2. Cambiar el piso a madera barnizada para alinear el lote (`plate_foto_pericial`).
3. Decisión de revisor sobre el estilo F5 (cel-shading vs. sombreado suave).

## Hallazgos de auditoría 2026-09-19 (regeneración Lote A v3, RAW 21:18)

Auditoría visual per-crop de `tools/raw/case5/bg_archivo_pasillo7.jpg` — **última versión confirmada por LastWriteTime: 19/09/2026 21:18** (posterior a la v2 de ~19:56; la sección anterior queda superseded como traza). Recortes propios ampliados por sustantivo: `c_mueble_v3`, `c_slots_v3` (×4), `c_gis_tomo_v3`, `c_mesa_v3`, `c_silla_v3`, `c_puerta_v3`, `c_rejilla_v3`, `c_techo_v3`, `c_piso_v3`. Los hallazgos previos corresponden a las generaciones anteriores.

**Veredicto: cumple** los nueve puntos solicitados para la regeneración (F1/F4 bloqueante) y las exclusiones; persisten dos defectos no bloqueantes (MEDIO/MEDIO) y un matiz de estilo pendiente de revisor.

### Cumple

- ✓ **Mueble de consulta** distinto de las estanterías: una sola banda horizontal continua con cartoncitos numerados, sin segunda fila ni consola baja; **ranura 13 vacía y oscura** tras el hueco, 12 tomos a la izquierda del hueco (11 verdes + lomo vino en la ranura 11) y 11 a la derecha → 23 tomos en el mueble y el tomo 24 en el suelo (F1/F3; `examine_estante_consulta.md:23-27`; `archivo_pasillo7_hotspots.ts:45-56`). Prueba de nombrar: «mueble de consulta de lomos verdes con un lomo vino y un hueco oscuro».
- ✓ **Lomo vino** de la ranura 11: burdeos, claramente distinto del oliva; nervios y cantoneras de latón no legibles en vista de lomo (aceptación del revisor de pasadas previas se mantiene) (F1; recorte `c_slots_v3`).
- ✓ **Cartelito pericial** numerado (marcador triangular «1») en pie junto al tomo, sin volverse rotulación (F1/F2; `archivo_pasillo7_hotspots.ts:30`).
- ✓ **Tomo caído**: cerrado, tela verde, **lomo hacia arriba** con tejuelo dorado y mancha parda concentrada en el lomo, a un metro de la silueta (F1/F4; consistencia con `examine_tomo_caido`; recorte `c_gis_tomo_v3`).
- ✓ **Silueta de gis** boca abajo, mano visible, **cabeza hacia el estante/mueble** y pies hacia la mesa (F1/F4; `trial_day1_success.ts:161-164`; recorte `c_gis_tomo_v3`).
- ✓ **Legajo abierto atado con listón** sobre la mesa de roble; **lámpara de pantalla verde encendida** (F1; `archivo_pasillo7_hotspots.ts:69-77`; recorte `c_mesa_v3`).
- ✓ **Silla volcada hacia atrás**: pasa el test de nombrar — asiento, respaldo con listones, travesaños y patas ensamblados; no es un enredo de tablas (F1; recorte `c_silla_v3`).
- ✓ **Puerta metálica gris de servicio entreabierta** con mirilla reticulada; **reja de barrotes** cerrando el pasillo al fondo (F1; recorte `c_puerta_v3`).
- ✓ **Rejilla de ventilación** metálica en el muro izquierdo con tres ondas grises de aire estilizadas, no vapor fotográfico (F1; recorte `c_rejilla_v3`).
- ✓ **Tubería vista** en el techo: ducto espiral a lo largo del pasillo (F1; recorte `c_techo_v3`).
- ✓ **AUSENTE** personajes vivos, policía, escombros, segunda mesa, mobiliario inventado, fechas/horas impresas, texto en inglés ni marcas de agua (F1/F2/F4). F6: sin variante localizada; sin texto de «ayuda» de traducción.

### Defectos confirmados

- [ ] **MEDIO (F3/F4, CONTRADICE)** — Los cartoncitos numerados del mueble siguen **saltados y duplicados**: tras «16» se leen `17, 17, 19, 19, 20, 21, 22, 23, 24` (25 cartoncitos visibles), falta el 18. La regeneración v3 no corrigió este defecto de la v2. El hueco 13 y la aritmética de tomos (23+1) se sostienen, pero la numeración impresa no demuestra la secuencia 1–24 en pantalla (recorte `c_slots_v3`; `archivo_pasillo7_hotspots.ts:45-56`).
- [ ] **MEDIO (consistencia, DRIFT)** — El piso sigue siendo **losa gris pulida**; el conjunto de consistencia fija «piso de madera» compartido con `plate_foto_pericial`. No rompe un diálogo directamente, pero contradice el rasgo compartido del lote (recorte `c_piso_v3`).
- [ ] **MENOR (F5, DRIFT de estilo, pendiente de revisor)** — Sombreado de transición suave con oclusión ambiental; diluye el «cel-shading plano con terminador duro de dos tonos y contorno carbón `#1A1A1A`» del §23.0. Se registra para decisión del revisor sobre este render.

### Correcciones de auditoría

- La sección «Hallazgos de auditoría 2026-09-19 (regeneración Lote A v2, RAW ~19:56)» queda superseded por esta pasada: se auditó la versión más reciente del JPG (21:18, confirmada por LastWriteTime). Sus ✓ se reproducen en esta sección con recortes propios `*_v3`; sus dos defectos MEDIO persisten sin cambios.

### Recomendación

1. Corregir la numeración de los cartoncitos a 1–24 secuenciales (o hacerlos ilegibles en la resolución final), conservando el hueco 13 oscuro y el lomo vino en la 11.
2. Cambiar el piso a madera barnizada para alinear el lote (`plate_foto_pericial`).
3. Decisión de revisor sobre el estilo F5 (cel-shading vs. sombreado suave).

