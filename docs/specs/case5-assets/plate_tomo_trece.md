# plate_tomo_trece — hoja de hechos

Clase: `plate`. Espec: §23.0 y §23.4. Guion directo: §7.3/L8, §18.3, `src/case/case5/Private/climax_stage3_success.ts:51-54` y `climax_stage3_success_en.ts:51-54`. Variante localizada: no existe ni se exige; ES y EN comparten `assets/plate_tomo_trece.webp` porque la imagen no contiene texto legible.

## Mapa semántico y alcance

- Lámina explicativa didáctica de pantalla completa, mostrada en el clímax E3 sólo después de acertar el señalamiento de la ranura 11.
- Colección de *El Saber Universal* representada como una fila de veinticuatro lomos.
- El decimotercer volumen no existe físicamente: su lugar aparece únicamente como un contorno punteado y vacío.
- Debajo de la fila hay una publicidad de época recortada de periódico, deliberadamente ilegible.
- La imagen explica el origen del nombre «el Tomo Trece»; no es el `detailedView` del estante, del tomo caído ni del inventario.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Fila completa de veinticuatro posiciones/lomos de una colección editorial, con una composición que permita contar la serie sin añadir volúmenes sueltos ni una segunda fila (§23.4, línea 4083; §7.3/L8).
- [ ] `PINTAR` — La posición decimotercera está dibujada sólo como contorno punteado, sin lomo sólido, páginas ni volumen dentro (§23.4, línea 4083; §7.3/L8).
- [ ] `PINTAR` — La ausencia del decimotercer tomo se lee como un hueco estructural de la colección, no como un tomo caído o retirado durante el crimen (§23.4, línea 4083; `src/case/case5/Private/climax_stage3_success.ts:51-54`; variante EN `climax_stage3_success_en.ts:51-54`).
- [ ] `PINTAR` — Publicidad de época recortada de periódico debajo de la colección, usada como contexto visual de la edición (§23.4, línea 4083).
- [ ] `NO CONTRADECIR` — La lámina debe poder sostener que la colección fue anunciada en veinticuatro volúmenes pero sólo llegó a imprimir veintitrés y que todas las colecciones conservan el mismo hueco (§18.3; `climax_stage3_success.ts:51-54`; `climax_stage3_success_en.ts:51-54`).
- [ ] `AUSENTE` — Tomo XI caído, sangre, cadáver, ranura 11 especial, mesa, estante del pasillo, huacal 9, sello de Berrondo, personajes o escena del crimen: esos hechos pertenecen a otras pruebas y al diálogo del clímax, no a esta lámina (§7.3/L8; §23.3, líneas 4056-4057; `climax_stage3_success.ts:16-50`).

### F2 Texto en imagen

- [ ] `AUSENTE` — No incluir texto legible dentro de la lámina: ni títulos de volúmenes, ni números de tomo, ni rótulos de la publicidad, ni «Tomo Trece», ni explicaciones sobre la colección (§23.4, líneas 4070-4073, 4083; §7.2, reglas 3-6).
- [ ] `AUSENTE` — La publicidad debe ser reconocible como recorte de periódico de época, pero ilegible; no inventar nombres de empresa, precios, fechas o eslóganes que puedan competir con la narración (§23.4, línea 4083).
- [ ] `NO CONTRADECIR` — La ausencia visual del tomo 13 puede comunicarse con el contorno punteado, pero la afirmación verbal «nunca se imprimió ni se entregó» queda en el narrador; no convertir el contorno en una palabra o etiqueta (§18.3; `climax_stage3_success.ts:51-52`; `climax_stage3_success_en.ts:51-52`).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La colección tiene veinticuatro posiciones anunciadas y veintitrés volúmenes impresos; el número debe quedar verificable por el conteo de la fila, no impreso como cifra en la imagen (§18.3; §24.A, fila A8; `climax_stage3_success.ts:51-54`).
- [ ] `NO CONTRADECIR` — La ranura histórica vacía es la número 13 y permanece vacía desde 1971; la fecha y la antigüedad son narración, no texto de la lámina (§10.2, líneas 793-801; §18.3; `climax_stage3_success.ts:52-54`; variante EN `climax_stage3_success_en.ts:52-54`).
- [ ] `NO CONTRADECIR` — «El Tomo Trece» es el nombre que el bajo mundo usa desde hace once años para lo que quedó de la empresa; no representarlo como un volumen real ni como una ficha de catálogo (§18.3; `climax_stage3_success.ts:54`; `climax_stage3_success_en.ts:54`).
- [ ] `NO CONTRADECIR` — El tomo que aparece físicamente en el crimen es el Tomo XI, no el inexistente Tomo XIII; la lámina posterior no puede sugerir que la víctima fue golpeada con el tomo punteado (`src/case/case5/Private/climax_stage3_success.ts:25-26,51-54`; §23.3, línea 4056).

### F4 Contrato en pantalla

- [ ] `PINTAR` — Tras la línea «Es una firma», las cuatro líneas del narrador reestampan `bg: assets/plate_tomo_trece.webp` con `furniture: 'none'`; ningún sprite debe cubrir la lámina (`src/case/case5/Private/climax_stage3_success.ts:50-54`; variante EN `climax_stage3_success_en.ts:50-54`).
- [ ] `PINTAR` — La primera línea ES/EN explica la proporción 24 anunciados/23 impresos; la fila debe hacer visible esa relación sin depender de texto (§18.3; `climax_stage3_success.ts:51`; `climax_stage3_success_en.ts:51`).
- [ ] `PINTAR` — La segunda línea explica que el Tomo Trece fue anunciado pero nunca impreso ni entregado; el contorno punteado vacío es la única marca visual necesaria (`climax_stage3_success.ts:52`; `climax_stage3_success_en.ts:52`).
- [ ] `NO CONTRADECIR` — La tercera línea dice que todas las colecciones del país tienen el hueco en el mismo sitio; no dibujar una colección completa alternativa ni poner el vacío en otra posición (`climax_stage3_success.ts:53`; `climax_stage3_success_en.ts:53`).
- [ ] `NO CONTRADECIR` — La cuarta línea fija el uso coloquial «el Tomo Trece» desde hace once años; la publicidad es contexto ilegible y no una fuente de texto o identidad adicional (`climax_stage3_success.ts:54`; `climax_stage3_success_en.ts:54`).
- [ ] `NO CONTRADECIR` — L8 sólo aparece después de acertar E3; no anticipar la respuesta mostrando esta lámina antes del señalamiento de `estante_consulta` (§7.3/L8 y regla de justicia; §18.3; `climax_stage3.ts:10-28`, `climax_stage3_success.ts:8-11`).
- [ ] `NO CONTRADECIR` — El señalamiento previo se hace sobre `assets/examine_estante_consulta.webp`, zona `lomo_11`; esta placa no recibe zonas interactivas ni sustituye la prueba presentada (`src/case/case5/Private/climax_stage3_point.ts:15-21`; variante EN `climax_stage3_point_en.ts:15-21`).

### F5 Estilo y prohibidos

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA/Nintendo DS) en alta definición; cel-shading de colores planos con terminador de sombra duro, dos tonos por superficie y ; contorno oscuro nítido y continuo en carbón `#1A1A1A`, más grueso en la silueta exterior; anatomía caricaturesca y colores primarios saturados (§23.0, líneas 3974-3978).
- [ ] Contrato §23.0 completo en el prompt: televisión mexicana de los años setenta, universo Chespirito/El Chapulín Colorado, melodrama judicial tratado con seriedad y registro de papel, madera, polvo, archivo judicial, listones, madera barnizada, latón envejecido y luz de tungsteno (§23.0, líneas 3978-3979).
- [ ] `PINTAR` — Tratamiento de ilustración didáctica plana, con fondo crema de papel y trazo de manual escolar mexicano de los setenta; no fotografía pericial ni recorte presentado como documento legible (§23.4, líneas 4070-4073, 4083).
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, estética de cómic americano, marcas de agua, texto en inglés dentro de la imagen y cualquier rosa o magenta en primer plano (§23.0, líneas 3974-3980).
- [ ] `AUSENTE` — Flechas, círculos, realces, llaves explicativas, números grandes, texto de interfaz o marcas que señalen directamente la ranura 13; la conclusión debe salir de la composición y de la narración (§7.2, reglas 3-6; regla de justicia de §7.3; §23.4, línea 4083).

### F6 Localización

- [ ] `NO CONTRADECIR` — ES y EN usan exactamente `assets/plate_tomo_trece.webp`; no crear `plate_tomo_trece_en.webp` (§23.4, línea 4083; `climax_stage3_success.ts:8`, `climax_stage3_success_en.ts:8`).
- [ ] `NO CONTRADECIR` — Composición, conteo, posición del vacío, estilo, publicidad y legibilidad son idénticos entre idiomas; sólo cambia el texto del narrador fuera de la imagen (`climax_stage3_success.ts:51-54`; `climax_stage3_success_en.ts:51-54`).
- [ ] `AUSENTE` — No aplicar la regla de la `s` minúscula caída ni introducir cadenas ES/EN en la publicidad: esa regla corresponde a documentos y láminas con texto legible, no a esta lámina sin rótulos (§23.3, líneas 4064-4068; §23.4, líneas 4070-4083).

## Consistencia (regenerar juntos)

- `examine_estante_consulta` y `examine_estante_consulta_en` — comparten la colección de 24 ranuras, el hueco 13 y la identidad del estante que el jugador acaba de señalar. La fotografía de examen es la fuente de las zonas interactivas; esta placa sólo explica el significado histórico después del acierto. **Regenerar juntos, este activo no es fuente de verdad del otro** (§23.3, línea 4057; §23.4, línea 4083; `climax_stage3_point.ts:15-21`).
- `bg_archivo_pasillo7` — comparte el mueble de consulta, sus 24 ranuras y la ranura 13 vacía; el fondo es la escena del crimen y no debe transferir cadáver, tomo caído, mesa, silueta de gis ni temperatura a la ilustración. **Regenerar juntos, este activo no es fuente de verdad del otro** (§23.1, línea 3987; §23.4, línea 4083).
- `bg_archivo_pasillo7_d4` — comparte la misma geometría del estante en el estado previo al crimen; la variante temporal no cambia la identidad de la colección ni convierte el hueco en una respuesta textual. **Regenerar juntos, este activo no es fuente de verdad del otro** (§23.1, línea 3987; §4.1 P6; §23.4, línea 4083).
- `plate_foto_pericial` — comparte el hecho de que el estante tiene 24 ranuras, el hueco 13 y un tomo XI fuera de su ranura; la fotografía conserva la escena y esta placa abstrae la historia editorial. **Regenerar juntos, este activo no es fuente de verdad del otro** (§23.3, línea 4057; §23.4, líneas 4077, 4083).
- `examine_tomo_caido` + icono `tomo_caido` — comparten que el objeto físico usado en el crimen es el Tomo XI, no el Tomo XIII. El detailed view fija tela verde, tejuelo XI y sello; no exigir esos detalles en la placa didáctica. **Regenerar juntos, este activo no es fuente de verdad del otro** (§23.3, línea 4056; catálogo ES `EvidenceCatalogCase5EsA.ts:41-46`; catálogo EN `EvidenceCatalogCase5EnA.ts:41-46`).
- `plate_cuatro_renglones` — comparte el uso de una lámina explicativa en el clímax E5 y el contrato de aparecer sólo después del acierto, pero no comparte contenido visual ni texto; ambas deben conservar la justicia de no anticipar la respuesta. **Regenerar juntos, este activo no es fuente de verdad del otro** (§7.3/L8-L9; §23.4, líneas 4083-4084).

## Conflictos abiertos

- §23.4 fija las láminas explicativas en `1280 × 720`, mientras la arquitectura de la tubería de Case 5 documenta exportación/runtime de placas didácticas a `960 × 540` (`docs/specs/case-5-el-tomo-trece.md:4041-4043,4070-4084`; `docs/architecture/asset-pipeline.md:76-78`). Esta hoja conserva la resolución explícita del spec y no decide aquí cuál contrato de exportación prevalece.
- La dirección de arte general pide el registro de papel, madera, polvo, latón y luz de tungsteno (§23.0), mientras §23.4 pide fondo crema y trazo plano de manual escolar. Se conserva la combinación: el acabado didáctico de §23.4 gobierna esta placa; no se añade una textura fotográfica para resolver la tensión.

## Hallazgos de auditoría 2026-09-19

Veredicto: **NO CUMPLE** — eje contenido (posición del hueco) y eje exclusiones/texto (titular legible del recorte). Estilo y localización sí cumplen.

~~- No se inspeccionó ninguna imagen, por protocolo. No se confirma ningún defecto visual de la versión actual; esta sección queda como lista de aceptación derivada únicamente del spec, los guiones ES/EN y los catálogos relevantes.~~ (Retirado: auditoría real ejecutada el 2026-09-19 sobre `assets/plate_tomo_trece.webp` convertido a PNG (960×540) con inspección por recortes ampliados de cada sustantivo de F1–F6; esta lista se reemplaza por los hallazgos de abajo.)

### Cumple

- F1 — Fila única contable de 24 posiciones (23 lomos + 1 contorno punteado), sin segunda fila, sin volúmenes sueltos y con ancho que permite contar la serie (recortes de mitad izquierda y mitad derecha).
- F1 — La posición vacía está dibujada sólo como contorno punteado, sin lomo sólido, páginas ni volumen dentro; el interior queda en fondo crema (recorte 4× de la ranura).
- F1 — La ausencia se lee como hueco estructural de la colección: vecinos derechos y aplomados, sin tomo caído, inclinado ni retirado durante el crimen.
- F1 — Publicidad de época recortada de periódico debajo de la colección, con doblez rasgado, sombra y fotografía de interior genérica de la época (viñeta periodística, no la escena del crimen ni el estante del pasillo).
- F1 AUSENTE — No hay tomo XI caído, sangre, cadáver, ranura 11 especial, mesa, estante del pasillo, huacal 9, sello de Berrondo ni personajes de la escena del crimen en la lámina.
- F2 — Los tejuelos no llevan títulos, números de tomo ni letras: sólo flores de lis/florones dorados y filetes (recorte 3×); el cuerpo y los epígrafes del periódico son rayitas ilegibles.
- F2/F4 — El contorno punteado es la única marca visual del vacío: no hay flechas, círculos, llaves, números grandes ni realces señalando la ranura.
- F3 — Aritmética total verificable por conteo: 23 lomos impresos + 1 posición vacía = 24 posiciones anunciadas (aunque la posición del vacío falla; ver defecto 1).
- F5 — Tratamiento didáctico plano: fondo crema de papel, contorno continuo de carbón, cel-shading de tonos planos con terminador duro, , sin fotorrealismo (la media tinta es sólo la fotografía interior del periódico), sin rosa/magenta, estilo de manual escolar mexicano de los setenta.
- F5 AUSENTE — Sin marcas de agua ni texto en inglés legible en bordes y esquinas (recortes de esquinas inferior izquierda y superior derecha).
- F6 — ES y EN comparten exactamente `assets/plate_tomo_trece.webp`; no existe `plate_tomo_trece_en.webp` en `assets/` y no hay cadenas ES/EN resolubles en la imagen (el titular es pseudo-texto, no una palabra real en ningún idioma).
- F4 — Contrato en pantalla verificado en código: `climax_stage3_success.ts:7` fija la constante y las líneas 50-54 reestampan `bg` con `furniture: 'none'` tras «Es una firma»; la composición de la imagen (fila contable sin texto) sostiene las líneas 1-2 sin depender de rótulos.

### Defectos confirmados

- MAYOR / CONTRADICE — F1 (posición decimotercera), F3 (conteo verificable) y F4 (línea 3, «hueco en el mismo sitio»): la fila deja **11 lomos a la izquierda** del contorno punteado, así que el vacío ocupa la **posición 12, no la 13**. El conteo de la fila es la única verificación que exige la hoja y el jugador que cuenta lee un hueco en el tomo 12, contradiciendo la identidad «Tomo Trece» y la línea `climax_stage3_success.ts:53` (y `climax_stage3_success_en.ts:52-54`): se rompe la relación 24/23 en su punto contable.
- MEDIO / CONTRADICE — F2 AUSENTE (publicidad deliberadamente ilegible; §23.4, líneas 4070-4073, 4083): el titular del recorte «Tmdaami Hom iynisa» está compuesto en gótica de gran tamaño con glifos individualmente legibles. Aunque son pseudo-palabras sin significado, violan el requisito de recorte reconocible pero ilegible y de no inventar nombres de empresa en el rótulo. No rompe directamente ninguna línea de diálogo, por eso MEDIO y no MAYOR.

### Observaciones (sin clasificar como defecto)

- Resolución: el activo exportado es 960×540, mientras §23.4 fija 1280×720. La hoja ya registra esta tensión en «Conflictos abiertos» sin decidir qué contrato prevalece; el activo coincide con la tubería documentada (`docs/architecture/asset-pipeline.md:76-78`). Se deja registrado; la aceptación es decisión del revisor.

### Correcciones de auditoría

- La sección previa «no se inspeccionó ninguna imagen» se retira por decisión de auditoría (inspección real ejecutada) y se conserva tachada arriba; no se borró ningún hallazgo.

### Recomendación (regenerar juntos, en orden del conjunto de consistencia)

1. `plate_tomo_trece`: desplazar el contorno punteado una posición a la derecha — **12 lomos a la izquierda, hueco en la posición 13, 11 lomos a la derecha** (24 posiciones, 23 impresos), manteniendo una sola fila y tejuelos con florones sin letras ni números.
2. `plate_tomo_trece`: redibujar el titular del recorte de periódico como caligrafía gótica ilegible (tinta corrida, manchada o difuminada, sin glifos individuales legibles); conservar cuerpo y epígrafes como rayas ilegibles.
3. `plate_tomo_trece`: conservar lo ya verificado — contorno punteado sin volumen, vecinos aplomados, publicidad con doblez y sombra, estilo plano didáctico y ninguna marca que señale la ranura.
4. Regenerar junto con `examine_estante_consulta` (ES/EN), `bg_archivo_pasillo7`, `bg_archivo_pasillo7_d4` y `plate_foto_pericial`, verificando en todos que el hueco quede en la ranura 13; este activo no es fuente de verdad del otro (§23.3, línea 4057; §23.4, línea 4083).

## Hallazgos de auditoría 2026-09-19 (regeneración Lote A)

Auditoría de `tools/raw/case5/plate_tomo_trece.jpg` (1280×720), recortes de la fila y del recorte de periódico. **Veredicto: cumple** el eje bloqueante (hueco en la posición 13; titular ilegible). Estilo didáctico y F6 intactos.

### Cumple

- ~~✓ Fila única; **12 lomos a la izquierda**, contorno punteado vacío, lomos a la derecha. El hueco se nombra «posición 13», no 12 (F1/F3/F4; recorte `plate_tomo_trece_row`).~~ **CORREGIDO en la re-verificación de recortes (ver sección inferior): el recuento real sobre recortes ampliados es 11 lomos a la izquierda y 12 a la derecha — el hueco sigue en la posición 12.**
- ✓ Contorno punteado sin volumen (F1). Publicidad de época debajo, titular gótico **borrado en mancha de tinta**, sin glifos de empresa (F2; recorte `plate_tomo_trece_news`).
- ✓ AUSENTE escena del crimen, ranura 11 especial, personajes, flechas, UI (F1/F5).

### Defectos confirmados

- [x] ~~MAYOR hueco en posición 12 (11 lomos a la izquierda)~~ **[x] RETIRADO POR REGENERACIÓN (2026-09-19 Lote A):** 12 lomos a la izquierda.
- [x] ~~MEDIO titular «Tmdaami Hom iynisa» con glifos legibles~~ **[x] RETIRADO POR REGENERACIÓN:** el titular es una mancha.
- [ ] ~~**MEDIO (F3, CONTRADICE)** — El flanco derecho admite lectura de 12 lomos (24 impresos + 1 hueco = 25 posiciones). El eje «Tomo Trece» se sostiene por los 12 de la izquierda; el total 24/23 queda dudoso.~~ **CORREGIDO en la re-verificación de recortes:** el recuento real es 11 a la izquierda + hueco + 12 a la derecha = 24 posiciones con el hueco en la posición **12**. El defecto de posición es MAYOR (ver sección inferior); la aritmética total 24/23 sí es correcta.

### Recomendación

Quitar un lomo del flanco derecho para dejar 11 a la derecha (24 posiciones, 23 impresos).

## Hallazgos de auditoría 2026-09-19 (re-verificación de recortes, Lote A)

Re-auditoría independiente de `tools/raw/case5/plate_tomo_trece.jpg` (1280×720, regenerada 2026-09-19) con recortes ampliados (`tmp_tomo13_left/right/full`, borrados al cerrar). Contradice el veredicto «cumple» de la sección anterior: **Veredicto: no cumple** en el eje contenido (posición del hueco).

### Cumple

- ✓ F1/F2: contorno punteado de la posición vacía sin lomo sólido, páginas ni volumen; se lee como ausencia estructural de la colección, no como tomo caído.
- ✓ F2: titular del recorte de periódico convertido en mancha de tinta negra, sin glifos de empresa legibles (recorte de la publicidad). El cuerpo son pseudo-líneas góticas ilegibles, sin palabras en español ni inglés.
- ✓ F1/F5: publicidad de época recortada (papel rasgado, doblez, sombra) debajo de la fila; estilo plano didáctico; sin personajes, sangre, ranura 11 especial, flechas ni UI (AUSENTE confirmado por recortes).

### Defectos confirmados

- [ ] **MAYOR / CONTRADICE (F1/F3/F4)** — El hueco punteado está en la **posición 12, no en la 13**: recuento sobre recortes ampliados da **11 lomos a la izquierda** (verde, rojo, azul, marrón, verde, rojo, ocre, gris, ocre, azul, verde) + hueco + **12 lomos a la derecha** = 24 posiciones. La auditoría previa contó 12 a la izquierda por error; el recuento corregido deja el hueco en la posición que el jugador lee como «tomo doce», contradiciendo la identidad «Tomo Trece» y `climax_stage3_success.ts:53` (y `climax_stage3_success_en.ts:52-54`). Es el defecto previo a la regeneración, no corregido.

### Recomendación

1. Desplazar la fila un lomo a la derecha (o eliminar el lomo 12 y rellenar): **12 lomos a la izquierda, hueco en la posición 13, 11 a la derecha**, 24 posiciones / 23 impresos, una sola fila.
2. Mantener el titular del periódico como mancha de tinta ilegible (ya correcto en esta regeneración).
3. Regenerar junto con `examine_estante_consulta` (ES/EN), `bg_archivo_pasillo7`, `bg_archivo_pasillo7_d4` y `plate_foto_pericial`, verificando en todos el hueco en la ranura 13.

## Hallazgos de auditoría 2026-09-19 (regeneración final)

Auditoría de `assets/plate_tomo_trece.webp` y `tools/raw/case5/plate_tomo_trece.jpg`, con recortes ampliados independientes para los dos flancos de la fila, el hueco y la publicidad. **Veredicto: cumple** en contenido, exclusiones, estilo y localización.

### Cumple

- F1/F3 — La fila contiene **12 lomos a la izquierda + hueco punteado en la posición 13 + 11 lomos a la derecha**: 24 posiciones, 23 volúmenes impresos y un único vacío estructural.
- F1 — El hueco sólo contiene fondo crema y contorno discontinuo; no hay lomo, páginas, volumen caído ni indicio de retirada durante el crimen.
- F1 — La publicidad de época está debajo de la colección, con papel rasgado, doblez, sombra y fotografía contextual; no introduce la escena del crimen.
- F2 — Tejuelos y publicidad no contienen texto legible, números, títulos, «Tomo Trece», fechas, precios, nombres de empresa ni pseudo-palabras identificables; el titular es una mancha de tinta y el cuerpo son líneas ilegibles.
- F1/F5 — No aparecen Tomo XI, sangre, cadáver, ranura 11 especial, estante del pasillo, huacal, sello, personajes, flechas, círculos, realces, UI, marcas de agua ni magenta en primer plano.
- F4/F6 — La composición muda sostiene por igual el diálogo ES/EN y se mantiene en el archivo compartido `assets/plate_tomo_trece.webp`; no existe variante `_en`.
- F5 — Se conserva la ilustración didáctica plana sobre fondo crema, con cel-shading duro, contorno carbón y registro de manual escolar mexicano de los setenta.
- Consistencia visual — Astra comparó la versión final con el estante, fondos, foto pericial y tomo caído relacionados: confirmó **12 + hueco 13 + 11**, publicidad ilegible y ninguna contradicción material pendiente.

### Defectos confirmados

- Ninguno en la versión final auditada.

### Correcciones de auditoría

- [x] RETIRADO POR REGENERACIÓN (2026-09-19, lote final): el defecto MAYOR de hueco en posición 12 queda corregido; el recuento ampliado confirma posición 13.
- [x] RETIRADO POR REGENERACIÓN (2026-09-19, lote final): el defecto MEDIO de titular legible queda corregido; la publicidad permanece reconocible pero ilegible.

### Recomendación

- Mantener esta versión y no introducir texto, numeración ni una segunda fila; si se regenera un asset del conjunto, volver a comprobar que conserve el hueco 13 y la distinción visual respecto del Tomo XI.
