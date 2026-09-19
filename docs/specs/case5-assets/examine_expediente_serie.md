# examine_expediente_serie — hoja de hechos

Clase: `examine`. Espec: §23.0, §23.3, §4.3, §5.2, §12.4, §13.2, §15.3 y §24. Guion directo: entrega en la delegación D2, Señalamiento 1 de D2-T2 y `followUp` de D3-T2. Variantes localizadas cubiertas juntas: `examine_expediente_serie.webp` y `examine_expediente_serie_en.webp`.

## Mapa semántico y alcance

- Objeto: extracto certificado de cinco expedientes de 1982, compilado por la policía judicial y dispuesto como cinco paneles contiguos sobre una mesa de peritajes (`docs/specs/case-5-el-tomo-trece.md:289,4055`).
- Orden visual por letras, no por cronología ascendente: A = 12 JUL, B = 28 AGO, C = 21 AGO, D = 15 SEP, E = 24 OCT (§4.3; §23.3; §24.C I34).
- Panel A: tarjeta de presentación de «Enciclopedias El Saber Universal, S.A.», sociedad disuelta desde 1971; conserva el defecto de la `s` minúscula caída (§23.3; §4.3).
- Panel B: ficha de cartulina mecanografiada de seis renglones, aparecida el 28 de agosto en el patio de carga del museo; es la respuesta correcta del Señalamiento 1 (§23.3; `trial_day2_success.ts:15-32`; `trial_day3_success_sam.ts:31-48`).
- Panel C: frasco de vidrio ámbar de valeriana y molde de cera agrietado, comprados/dejado por el propio culpable del Caso 2 al copiar una llave (§4.3; §24.C I33; §23.3).
- Panel D: boleta del Monte de Piedad con `$12,000` en efectivo pagados por Aniceto el 3 de septiembre para desempeñar el micrófono; es un gasto del culpable, no un cobro (§4.3; §24.C F12; §23.3).
- Panel E: telegrama mecanografiado con acuse de recibo, fechado 24 OCT, reclamando la parte impaga de un collar robado (§4.3; §23.3; §24.C I37).
- El encuadre es una lámina documental, no una escena de los cinco episodios: no añadir personas, fondos de museo/hacienda/radiodifusora/hotel ni una explicación gráfica del patrón (§23.3; `trial_day2_success.ts:34-41`).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Cinco paneles en fila, separados y legibles, sobre una mesa de peritajes; cada panel lleva su etiqueta de fecha escrita a máquina (§23.3; catálogo ES/EN).
- [ ] `PINTAR` — Panel A, `12 JUL`: tarjeta de presentación de «Enciclopedias El Saber Universal, S.A.»; las `s` minúsculas quedan media línea debajo y medio grado inclinadas a la izquierda (§23.3; §4.3).
- [ ] `PINTAR` — Panel B, `28 AGO`: ficha de cartulina con seis renglones mecanografiados legibles (§23.3; `trial_day3_success.ts:33-41`).
- [ ] `PINTAR` — Panel C, `21 AGO`: frasco de vidrio ámbar con etiqueta manuscrita y molde de cera agrietado (§23.3; §4.3; §24.C I33).
- [ ] `PINTAR` — Panel D, `15 SEP`: boleta de empeño del Monte de Piedad con `$12,000` y `EFECTIVO` legibles (§23.3; §4.3; §24.C F12).
- [ ] `PINTAR` — Panel E, `24 OCT`: telegrama mecanografiado con su acuse de recibo, reclamando la parte de un collar (§23.3; §4.3; §24.C I37).
- [ ] `AUSENTE` — Flechas, círculos, halos, realces de color, marcas de «respuesta correcta», personas o texto explicativo superpuesto; la lámina no puede señalar el panel B (§23.3; `trial_day2_success.ts:20-24`).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — Etiquetas de fecha de los cinco paneles: `12 JUL`, `28 AGO`, `21 AGO`, `15 SEP`, `24 OCT` (§23.3; §4.3). La identidad de las letras prevalece aunque B y C no estén en orden ascendente.
- [ ] `TEXTO EXACTO` — Panel A debe identificar a «Enciclopedias El Saber Universal, S.A.» y mostrar el defecto visible de la `s` minúscula (§23.3; `trial_day2_success.ts:32,39`; §24.C I24).
- [ ] `TEXTO EXACTO` — Panel B debe conservar exactamente estos seis renglones españoles, legibles y sin resumir: `1. Chapa puerta de carga: vencida desde marzo. Se empuja.` / `2. Rejilla sala dos: dieciocho por veinticuatro. Malla floja en la esquina inferior. Da al patio.` / `3. Velador: veinte cuarenta y cinco bodega de proa; veintiuna cero cero bodega de popa. Copiado de su libreta; cuelga de un clavo en la caseta.` / `4. Pastillas de chiquitolina: farmacia de Insurgentes, mostrador de atrás.` / `5. Rollo de cámara: se cambia los lunes. El martes queda un cuadro.` / `6. Servicio de cierre incluido. Cinco minutos.` (§23.3; §24.C I51; `trial_day3_success_sam.ts:35-41`).
- [ ] `PINTAR` — Todas las `s` minúsculas de los renglones cuestionados del panel B conservan la caída tipográfica; no convertir el defecto en una anotación o pie de lámina (§23.3; §24.C I24/I51).
- [ ] `TEXTO EXACTO` — En la variante EN, el panel B debe traducir sus seis renglones según la lectura del guion, incluida `Closing service included. 5 min.`; conservar al menos una `s` minúscula visible y su caída tipográfica (`trial_day3_success_sam_en.ts:33-41`; regla de localización de §23.3).
- [ ] `AUSENTE` — No imprimir «correcto», «producto vendido», «cedulario», una respuesta del juez ni la explicación de que el panel B es la solución; eso pertenece al diálogo y al punto interactivo (`trial_day2_success.ts:26-32`).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — El extracto pertenece a expedientes de este año, 1982; las fechas visibles son 12 de julio, 28 y 21 de agosto, 15 de septiembre y 24 de octubre (§4.3; §23.3; §24.D I10).
- [ ] `NO CONTRADECIR` — `$12,000` del panel D fue pagado por Aniceto el 3 de septiembre para desempeñar el micrófono; no es dinero recibido por Berrondo ni «gasto de preparación» del homicidio (§4.3; §24.C F12; §24.D I2).
- [ ] `NO CONTRADECIR` — Panel B es la ficha del museo de 28 de agosto y panel C es el frasco/molde del 21 de agosto; las letras no se pueden intercambiar para hacer las fechas ascender (§24.C I33–I34).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En D2 el Sargento desata cinco legajos, los alinea por fecha y enumera: tarjeta de julio, ficha del museo, frasco/molde, boleta de septiembre y collar de octubre; después entrega `expediente_serie` (`delegacion_c5_talks.ts:23-37`; EN: `delegacion_c5_talks_en.ts:23-37`). La imagen debe permitir reconocer esos cinco objetos, aunque la narración no sustituye las etiquetas canónicas de §23.3.
- [ ] `PINTAR` — En el Señalamiento 1 la pregunta es qué papel ya describe el producto que Berrondo admite vender. `panel_b` es la única zona correcta; A sólo identifica la sociedad, C muestra preparación de otro delito, D muestra un gasto y E muestra reparto impago (`trial_day2_success.ts:15-24`; EN: `trial_day2_success_en.ts:15-24`).
- [ ] `NO CONTRADECIR` — El éxito identifica los seis renglones del panel B como información doméstica convertida en producto, pero declara que los otros cuatro paneles sólo dan contexto y no prueban que Berrondo los vendiera (`trial_day2_success.ts:26-32`; EN: `trial_day2_success_en.ts:26-32`).
- [ ] `PINTAR` — En el `followUp` de D3-T2 la defensa vuelve al panel B y lee sus seis renglones, incluido «Servicio de cierre incluido. Cinco minutos.»; la imagen debe sostener una lectura exacta de cada línea (`trial_day3_success_sam.ts:31-48`; EN: `trial_day3_success_sam_en.ts:31-48`).
- [ ] `NO CONTRADECIR` — El activo no identifica por sí solo al vendedor, al mecanógrafo, al culpable de cada caso ni al homicida. El caso exige la cadena posterior de cedulario, acceso, máquina y conducta de Berrondo (§24.C F11; §24.D I16; `trial_day2_success.ts:38-41`).
- [ ] `NO CONTRADECIR` — Los paneles C y E conservan su identidad probatoria: C es una compra atribuida al culpable del Caso 2 y E es el telegrama de Cuajinais, no un acta con fotografía (§24.C I33, I37).

### F5 Estilo y prohibidos

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D HD de linaje *Capcom Ace Attorney* GBA/NDS; cel-shading de dos tonos planos con terminador duro; contorno carbón `#1A1A1A`; registro mexicano setentero/Chespirito; papel, madera, polvo, mesa de peritajes y luz de archivo; sin fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto inglés en ES ni rosa/magenta en primer plano (§23.0).
- [ ] `AUSENTE` — No añadir flechas, círculos ni realces, incluso alrededor del panel B; el tablero interactivo superpone la lógica, no la lámina (§23.3; `trial_day2_success.ts:20-24`).
- [ ] `NO CONTRADECIR` — La legibilidad tipográfica es parte del argumento: panel B, etiquetas de fecha, `$12,000`, `EFECTIVO`, nombres y documentos deben poder distinguirse sin convertir la composición en una infografía (§23.3; §24.C I24/I51).

### F6 Localización

- [ ] `PINTAR` — Generar `examine_expediente_serie.webp` y `examine_expediente_serie_en.webp`; son gemelas de composición, encuadre, paneles, fechas, objetos y marcas físicas (§23.3, regla de variantes).
- [ ] `NO CONTRADECIR` — La variante EN traduce el texto legible que sostiene el argumento, pero mantiene nombres propios, fechas numéricas, cifras, disposición, defecto de la `s` y la identidad de A–E (§23.3; §23.3:4064-4066).
- [ ] `TEXTO EXACTO` — En EN, el panel B debe coincidir con la lectura de `trial_day3_success_sam_en.ts:35-41`, incluyendo `Loading door latch`, `Gallery 2 grate`, `Watchman`, `Chiquitolina pills`, `Camera roll` y `Closing service included. 5 min.`; no usar una versión resumida del catálogo.
- [ ] `NO CONTRADECIR` — La variante EN no debe convertir la `s` cuestionada en otra letra ni eliminarla de todas las líneas; si una traducción la pierde, se reescribe el texto (§23.3, regla de localización del defecto).

## Consistencia (regenerar juntos)

- `examine_expediente_serie_en` — gemelo localizado; comparte composición, cinco zonas, fechas, objetos y defecto tipográfico; sólo cambia el texto legible. **Regenerar juntos, este activo no es fuente de verdad del otro** (§23.3).
- `examine_esquina_tarjeta`, `examine_nota_renta` y `examine_ficha_domicilio` — comparten la `s` minúscula caída de la máquina y el tratamiento de documentos mecanografiados; deben mantener el mismo defecto, sin que este tablero sea fuente de verdad de sus textos. **Regenerar juntos, este activo no es fuente de verdad del otro** (§24.C I24; fact sheets correspondientes).
- `examine_maquina` — comparte el defecto mecánico de la `s`; la máquina explica el defecto, pero no autoriza a inventar detalles en los paneles. **Regenerar juntos, este activo no es fuente de verdad del otro** (§23.3; §24.C I24).
- `plate_cinco_papeles` — comparte el arco visual de los cinco expedientes y sus fechas; la placa explicativa no sustituye el texto legible ni decide el panel correcto. **Regenerar juntos, este activo no es fuente de verdad del otro** (§7.3; `trial_day2_success.ts:34-37`).
- `expediente_serie` / `expediente_serie` en los catálogos ES/EN — comparten el mismo `EvidenceId` y el mismo examen, pero sus descripciones/captions deben quedar subordinadas al contrato de §23.3. **Regenerar juntos, este activo no es fuente de verdad del otro** (`EvidenceCatalogCase5EsB.ts:31-36`; `EvidenceCatalogCase5EnB.ts:31-36`).

## Conflictos abiertos

- Los catálogos ES y EN invierten B y C: dicen B = 21 ago y C = 28 ago (`EvidenceCatalogCase5EsB.ts:31-36`; `EvidenceCatalogCase5EnB.ts:31-36`), mientras §4.3, §23.3 y §24.C I34 fijan B = 28 ago y C = 21 ago. La lámina debe seguir el spec: B es la ficha correcta y C es el frasco/molde.
- Los catálogos describen el panel E como «acta con fotografía» / «typed minutes with a photograph» (`EvidenceCatalogCase5EsB.ts:36`; `EvidenceCatalogCase5EnB.ts:36`), pero §4.3, §23.3 y §24.C I37 fijan un telegrama del 24 de octubre con acuse de recibo. No pintar un acta ni una fotografía.
- El diálogo de entrega en D2 enumera primero «el museo» y luego «la hacienda» (`delegacion_c5_talks.ts:27-32`; EN equivalente), mientras §24.C I34 exige narrar la secuencia cronológica 12 jul, 21 ago, 28 ago, 15 sep, 24 oct y §13.2 llega a leer primero la fecha de B como 21 de agosto (`trial_day2_success.ts:34-37`). La lámina conserva las letras y fechas canónicas; no resolver aquí la discrepancia de orden del guion.
- El caption del catálogo llama al conjunto «cinco paneles fechados», pero no exige legibilidad completa de todos los textos; §23.3 sí exige seis renglones legibles en B, fechas y marcas clave en A, D y E. Se adopta la exigencia más fuerte del spec, sin añadir texto explicativo.

## Hallazgos de auditoría 2026-09-19

- ~~No se inspeccionó ninguna imagen… no se confirma ningún defecto visual de la exportación actual.~~ SUPERSEDED: pasada de auditoría con recortes por panel sobre `examine_expediente_serie.png` y `examine_expediente_serie_en.png` (gemelos auditados juntos), conforme al protocolo `asset-audit`.

**Veredicto: NO CUMPLE** en contenido (F1–F3), texto (F2), contrato (F4) y localización (F6); estilo (F5) cumple salvo la fotografía del panel E. La lámina pinta los cinco paneles y las fechas legibles, pero invierte las fechas B/C, sustituye el contenido real de B, C y E, omite el defecto de la `s` y añade rótulos explicativos superpuestos prohibidos. El Señalamiento 1 y el `followUp` de D3-T2 no pueden jugarse sobre esta imagen: el jugador no puede leer los seis renglones de B ni distinguir la ficha correcta.

**Cumple**
- Cinco paneles contiguos, separados y legibles sobre una mesa de peritajes (F1, línea 20).
- Etiquetas de fecha legibles a máquina en los cinco encabezados: `12 JUL`, `21 AGO`, `28 AGO`, `15 SEP`, `24 OCT` — legibles como texto, aunque mal asignadas (véase defecto 1).
- Panel D: `$12,000.00` y `EFECTIVO` legibles en una boleta de empeño (F1, línea 24).
- Sin flechas, círculos, halos ni marcas de «respuesta correcta» que señalen el panel B (F1 exclusión, línea 26; F5 línea 55).
- Estilo general conforme al literal §23.0: cel-shading plano, contorno carbón, registro setentero, sin fotorrealismo salvo el recorte fotográfico del panel E (defecto 11).
- Gemelos con composición idéntica: mismas cinco zonas, mismos objetos, mismos encuadres (F6, línea 60).

**Defectos confirmados** (ambas variantes salvo indicación)
1. MAYOR / CONTRADICE (F1 línea 20, F2 línea 30, F3 línea 41) — Fechas B y C invertidas: el panel B lleva `21 AGO` y el C `28 AGO`, cuando §4.3/§23.3/§24.C I34 fijan B = 28 ago y C = 21 ago. Rompe `trial_day2_success.ts:15-32` y la narración cronológica de `delegacion_c5_talks.ts:23-37`. Es exactamente la inversión de los catálogos (`EvidenceCatalogCase5EsB.ts:31-36`) que el apartado «Conflictos abiertos» prohibía copiar: la imagen siguió al catálogo, no al spec.
2. MAYOR / CONTRADICE (F1 línea 22, F2 línea 32, F4 líneas 46/48) — Panel B no es la ficha de seis renglones canónicos: es una «FICHA DE OBJETO / MUSEO NACIONAL DE HISTORIA» con una lista resumida de ítems erróneos (`chapa de latón, rejilla de hierro, velador de pólvora, pastillas de plomo, rollo de cuero, servicio de cierre`), sin ninguno de los seis renglones exigidos (chapa vencida desde marzo, rejilla dieciocho por veinticuatro, velador con horas de bodega, pastillas de chiquitolina, rollo de cámara, servicio de cierre incluido 5 min). Además incluye un candado metálico pintado sobre la ficha, objeto que no pertenece a la lámina documental (línea 14). El jugador no puede leer B en el Señalamiento 1 ni en el `followUp` (`trial_day2_success.ts:15-32`; `trial_day3_success_sam.ts:31-48`).
3. MAYOR / CONTRADICE (F1 línea 23, F4 línea 50) — Panel C: el frasco lleva etiqueta mecanografiada «PÓLVORA FINA / PARA USO PIROTÉCNICO» en vez del frasco de valeriana con etiqueta manuscrita; el «molde de cera» es un bloque de madera con concavidad. Contradice §4.3, §23.3 y §24.C I33.
4. MAYOR / CONTRADICE (F1 línea 25, F4 línea 50, Conflictos abiertos línea 76) — Panel E pintado como «ACTA CIRCUNSTANCIADA» con fotografía de un collar, exactamente lo que el conflicto abierto prohibió («no pintar un acta ni una fotografía»); el spec exige telegrama mecanografiado del 24 OCT con acuse de recibo reclamando la parte impaga (§4.3; §23.3; §24.C I37). La imagen copió al catálogo (`EvidenceCatalogCase5EsB.ts:36`) en vez del spec.
5. MAYOR / AUSENTE (F1 líneas 21/33, F2 líneas 31/33) — El defecto de la `s` minúscula caída no aparece en ninguna parte: la tarjeta A muestra «ENCICLOPEDIAS EL SABER UNIVERSAL S.A.» en mayúsculas sin caída y el renglón 6 de B («SERVICIO DE CIERRE») tampoco la conserva. Rompe `trial_day2_success.ts:32,39` y §24.C I24/I51.
6. MAYOR / CONTRADICE (F1 exclusión línea 26, F5 línea 55) — Rótulos explicativos superpuestos en el encabezado de cada panel («tarjeta Enciclopedias El Saber Universal S.A.», «ficha seis renglones museo», «frasco ámbar y molde cera», «boleta empeño $12000 EFECTIVO», «acta con foto collar»). §23.3 y `trial_day2_success.ts:34-41` excluyen texto explicativo superpuesto: la lámina debe ser documental, no una infografía con pie de cada panel. El rótulo del panel D además adelanta la marca `EFECTIVO` como anotación.
7. MEDIO / CONTRADICE (F3 líneas 39/40) — Año impreso «1975»: sello «PAGADO 15 SEP 1975» (D) y «ACTA CIRCUNSTANCIADA No. 3178 / 75» (E). El extracto pertenece a expedientes de 1982; fechas visibles 12 jul, 28 y 21 ago, 15 sep, 24 oct.
8. MEDIO / CONTRADICE (F3 línea 40) — Panel D: sello «PAGADO 15 SEP»; el `$12,000` fue pagado por Aniceto el 3 de septiembre para desempeñar el micrófono. La fecha impresa contradice el hecho.
9. MAYOR / CONTRADICE (F6 líneas 61-63) — Variante EN con idioma mezclado: el cuerpo de A queda en español («OFRECEMOS CONOCIMIENTO PARA TODA LA FAMILIA.»), y D y E conservan «BOLETA DE EMPEÑO», «RECIÉI DE» (además malformado: debe ser RECIBÍ), «EFECTIVO», «EMPEÑO DE BIENES DIVERSOS», «DESCRIPCIÓN», «OBSERVACIONES», «SECRETARIO», «JUZGADO». El panel B en EN tampoco coincide con `trial_day3_success_sam_en.ts:35-41` (`Loading door latch`, `Gallery 2 grate`, `Watchman`, `Chiquitolina pills`, `Camera roll`, `Closing service included. 5 min.`): lista resumida errónea.
10. MEDIO / MALFORMADO (F6) — Variante EN, panel A: la línea «Knowledge for every family» aparece duplicada dos veces seguidas, texto incoherente.
11. MEDIO / CONTRADICE (F5 línea 54) — Panel E contiene una fotografía con textura fotorrealista de cadena y colgante contra fondo negro, contra el literal §23.0 («sin fotorrealismo… texturas fotográficas»).

**Correcciones de auditoría**
- Sección anterior reemplazada; el texto original («No se inspeccionó ninguna imagen…») queda citado arriba como traza. No se retiró ningún hallazgo previo porque no existía ninguno; los ✓ de esta sección se defendieron con recortes (Paso 7).
- Los «Conflictos abiertos» de la hoja predijeron los defectos 1 y 4 (inversión B/C y acta con fotografía): la imagen confirma que el modelo siguió los catálogos y no el spec. No se modifica ningún otro apartado de la hoja.

**Recomendación** (regenerar ambos gemelos juntos, en el orden del conjunto de consistencia)
1. Corregir fechas por panel según §4.3/§23.3: A `12 JUL`, B `28 AGO`, C `21 AGO`, D `15 SEP`, E `24 OCT`; eliminar los rótulos explicativos de los encabezados (lámina documental limpia, defectos 1 y 6).
2. Repintar el panel B como ficha de cartulina con los seis renglones exactos del spec (ES: los de F2 línea 32; EN: `trial_day3_success_sam_en.ts:35-41`), mecanografiados y legibles, sin candado ni objetos añadidos.
3. Repintar el panel C como frasco ámbar de valeriana con etiqueta manuscrita más molde de cera agrietado; nada de «PÓLVORA FINA» ni bloque de madera.
4. Repintar el panel E como telegrama mecanografiado del 24 OCT con acuse de recibo reclamando la parte impaga de un collar; sin acta, sin fotografía, sin textura fotorrealista.
5. Añadir el defecto de la `s` minúscula caída en todos los renglones cuestionados de B y en la tarjeta A (medio grado a la izquierda, media línea abajo); en EN conservar al menos una `s` minúscula con su caída.
6. Quitar todo año impreso distinto de 1982 (sin «1975», sin «No. 3178/75»); en D, la fecha de pago no debe decir 15 SEP como pago del empeño.
7. EN: traducir la totalidad del texto legible (sin frases en español huérfanas en A, D ni E), corregir «RECIÉI DE» → `Received from:`, eliminar la línea duplicada de A, y mantener composición idéntica al gemelo ES.
