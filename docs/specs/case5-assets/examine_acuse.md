# examine_acuse — hoja de hechos

Clase: `examine` / `plate`. Espec: §5.2, §12.2, §15.4, §23.0, §23.3 y §24.C–§24.D. Guion: `src/case/case5/Private/correspondencia.ts`; `src/case/case5/Private/correspondencia_en.ts`; `src/case/case5/Private/trial_day3_success_berrondo.ts`; `src/case/case5/Private/trial_day3_success_berrondo_en.ts`. Catálogo: `src/state/Private/EvidenceCatalogCase5EsA.ts`; `src/state/Private/EvidenceCatalogCase5EnA.ts`.

## Mapa semántico

- Lugar y momento documentado: asiento del libro de acuses del Juzgado Séptimo, correspondiente al aviso entregado el 29 de noviembre en la sindicatura de la quiebra 114/1971 (`docs/specs/case-5-el-tomo-trece.md:285`; `docs/specs/case-5-el-tomo-trece.md:1438-1441`).
- Documento: oficio 4471; la diligencia de cotejo documental fue promovida por el interno C. Lengua y estaba prevista para el Archivo Judicial el 4 de diciembre a las 17:00 (`src/case/case5/Private/correspondencia.ts:35-38`; `src/case/case5/Private/correspondencia_en.ts:35-38`).
- Marcas que distinguen el asiento: renglón mecanografiado, rúbrica manuscrita azul muy pequeña y enérgica con dos rayas debajo, y fechador de hule morado «29 NOV» (`docs/specs/case-5-el-tomo-trece.md:1441`; `docs/specs/case-5-el-tomo-trece.md:4052`; `src/state/Private/EvidenceCatalogCase5EsA.ts:88-89`).
- Función narrativa: demuestra que alguien recibió el aviso; en D3-T3 Berrondo reconoce que la rúbrica es suya y que firmó de recibido (`src/case/case5/Private/correspondencia.ts:44`; `docs/specs/case-5-el-tomo-trece.md:2807-2835`).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Lámina de examen de un asiento del libro de acuses, fotografiado de plano, no una vista general de la oficina (`docs/specs/case-5-el-tomo-trece.md:1441`; `docs/specs/case-5-el-tomo-trece.md:4052`).
- [ ] `PINTAR` — Renglón mecanografiado que identifica el oficio 4471 y contiene el nombre del interno C. Lengua (`docs/specs/case-5-el-tomo-trece.md:285`; `docs/specs/case-5-el-tomo-trece.md:4052`; `src/state/Private/EvidenceCatalogCase5EsA.ts:84-89`).
- [ ] `PINTAR` — Al margen derecho, rúbrica manuscrita a tinta azul, muy pequeña y enérgica, con dos rayas bajo el trazo (`docs/specs/case-5-el-tomo-trece.md:1441`; `docs/specs/case-5-el-tomo-trece.md:4052`).
- [ ] `PINTAR` — Fechador de hule morado con la fecha «29 NOV» (`docs/specs/case-5-el-tomo-trece.md:1441`; `docs/specs/case-5-el-tomo-trece.md:4052`; `src/state/Private/EvidenceCatalogCase5EsA.ts:88-89`).
- [ ] `AUSENTE` — No añadir una firma grande, legible o caligráficamente identificable como nombre completo: la firma debe seguir siendo una rúbrica pequeña; la identificación de Berrondo ocurre cuando la corte la confronta con él (`docs/specs/case-5-el-tomo-trece.md:1441`; `docs/specs/case-5-el-tomo-trece.md:2815-2828`).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — La versión ES debe conservar legibles los datos del oficio 4471 y el nombre del interno; el bloque de investigación lee: «Oficio 4471. Diligencia de cotejo documental promovida por el interno C. Lengua. Archivo Judicial, 4 de diciembre, 17:00 horas.» y «Entregado en: Sindicatura de la quiebra 114/1971.» (`src/case/case5/Private/correspondencia.ts:37-38`; `docs/specs/case-5-el-tomo-trece.md:1438-1441`).
- [ ] `TEXTO EXACTO` — La versión EN debe traducir el texto legible para sostener el mismo argumento: “Official letter 4471. Document-comparison procedure filed by inmate C. Lengua. Judicial Archive, December fourth, 5:00 PM.” y “Delivered to: Syndicate of bankruptcy 114/1971.” (`src/case/case5/Private/correspondencia_en.ts:37-38`; `src/state/Private/EvidenceCatalogCase5EnA.ts:84-89`).
- [ ] `TEXTO EXACTO` — Ambas variantes deben conservar «29 NOV» / «NOV 29» según el tratamiento visual declarado por el catálogo; la fecha física es compartida y no cambia de día (`docs/specs/case-5-el-tomo-trece.md:4052`; `src/state/Private/EvidenceCatalogCase5EsA.ts:88-89`; `src/state/Private/EvidenceCatalogCase5EnA.ts:88-89`).
- [ ] `AUSENTE` — No imprimir el nombre de Berrondo como texto: la prueba muestra la rúbrica, y el testimonio posterior establece que es suya (`docs/specs/case-5-el-tomo-trece.md:1441`; `docs/specs/case-5-el-tomo-trece.md:2815-2828`).
- [ ] `AUSENTE` — No añadir flechas, círculos, realces ni notas explicativas que señalen la rúbrica; el jugador debe leer el asiento y escuchar la confrontación (`docs/specs/case-5-el-tomo-trece.md:4052`; `docs/specs/case-5-el-tomo-trece.md:2810-2828`).

### F3 Cifras/fechas/horas

- [ ] `NO CONTRADECIR` — El aviso se entregó el 29 de noviembre y la diligencia consignada es del 4 de diciembre a las 17:00 (`docs/specs/case-5-el-tomo-trece.md:1438-1441`; `src/case/case5/Private/correspondencia.ts:37-38`).
- [ ] `NO CONTRADECIR` — La fila de hechos mide la anticipación desde el acuse del 29 de noviembre como cinco días (`docs/specs/case-5-el-tomo-trece.md:4172`; `docs/specs/case-5-el-tomo-trece.md:4230`).
- [ ] `NO CONTRADECIR` — El asiento prueba que el aviso fue recibido, pero no por sí solo quién lo leyó ni qué hizo después; D3-T3 obtiene la atribución cuando Berrondo reconoce la rúbrica (`docs/specs/case-5-el-tomo-trece.md:2815-2835`; `docs/specs/case-5-el-tomo-trece.md:4172`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — Al examinar el hotspot del libro, la escena primero describe el libro azul y las firmas marginales; después entrega `acuse_notificacion`, por lo que esta lámina debe contener los datos legibles que la escenografía no imprime (`src/case/case5/Private/correspondencia.ts:31-44`; `src/case/case5/Private/correspondencia_en.ts:31-44`).
- [ ] `PINTAR` — La prueba debe permitir leer el oficio 4471, C. Lengua, el destino de sindicatura, la fecha del aviso y la rúbrica; esas piezas se reutilizan literalmente en la contradicción D3-T3 (`src/case/case5/Private/trial_day3_success_berrondo.ts:10-13`; `src/case/case5/Private/trial_day3_success_berrondo_en.ts:10-13`).
- [ ] `PINTAR` — La composición debe mostrar la rúbrica en el margen derecho y dejarla suficientemente localizable para que el Juez pregunte si es de Berrondo; no debe convertirla en un retrato o una firma nominal (`docs/specs/case-5-el-tomo-trece.md:2815-2828`).
- [ ] `NO CONTRADECIR` — La lámina no debe mostrar a Berrondo, a la Chimoltrufia ni la oficina completa: los personajes aparecen en el guion mediante poses y el fondo pertenece a la escena de correspondencia (`src/case/case5/Private/correspondencia.ts:15-27`; `src/case/case5/Private/correspondencia_talks.ts:8-29`).
- [ ] `NO CONTRADECIR` — El dato de que la Chimoltrufia recuerda al visitante y que el cambio de custodios ocurre a las 17:00 pertenece al diálogo de investigación; no debe convertirse en texto, sello o anotación adicional de la lámina (`src/case/case5/Private/correspondencia_talks.ts:10-27`; `docs/specs/case-5-el-tomo-trece.md:4170`).

### F5 Estilo

- [ ] Contrato §23.0 completo pegado en el prompt de regeneración: ilustración 2D HD estilo *Capcom Ace Attorney* de linaje GBA/Nintendo DS; cel-shading de colores planos con terminador duro, dos tonos por superficie y ; contorno continuo carbón `#1A1A1A`, más grueso en la silueta exterior; anatomía expresiva y caricaturesca; paleta primaria saturada; televisión mexicana setentera / Chespirito; registro de papel, madera, polvo, archivo judicial, legajos con listón, madera barnizada, latón envejecido y luz de tungsteno (`docs/specs/case-5-el-tomo-trece.md:3974-3980`).
- [ ] `AUSENTE` — Prohibidos: fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano de superhéroes, marcas de agua, texto en inglés salvo la variante EN exigida y cualquier tono rosa o magenta en primer plano (`docs/specs/case-5-el-tomo-trece.md:3978-3980`).

### F6 Localización

- [ ] `GEMELOS DE IDIOMA` — `examine_acuse.webp` y `examine_acuse_en.webp` conservan encuadre, escala, orientación, rúbrica azul, dos rayas, fechador y marcas físicas; sólo cambia el texto legible del asiento (`docs/specs/case-5-el-tomo-trece.md:4064`; `src/state/Private/EvidenceCatalogCase5EsA.ts:88-89`; `src/state/Private/EvidenceCatalogCase5EnA.ts:88-89`).
- [ ] `NO CONTRADECIR` — La versión inglesa debe mantener el mismo argumento y la misma fecha física, y coincidir con el catálogo inglés; no puede omitir el nombre del interno ni traducirlo como una persona distinta (`docs/specs/case-5-el-tomo-trece.md:4064`; `src/case/case5/Private/correspondencia_en.ts:37-44`).
- [ ] `NO CONTRADECIR` — La regla de conservar una `s` minúscula visible sólo aplica a las láminas cuestionadas cuya traducción necesita ese defecto tipográfico; el acuse no recibe una regla adicional de `s` en §23.3, pero sí debe conservar las marcas y la composición compartida (`docs/specs/case-5-el-tomo-trece.md:4064-4068`).

## Consistencia (regenerar juntos)

- `bg_correspondencia` — comparte el libro azul, el margen de firmas y el fechador morado. Regenerar juntos, este activo no es fuente de verdad del otro; el `detailedView` fija el texto legible, la rúbrica azul y «29 NOV» (`docs/specs/case-5-el-tomo-trece.md:3988`; `docs/specs/case-5-el-tomo-trece.md:4052`).
- `acuse_notificacion` ↔ `examine_acuse.webp` — el id de prueba y el WebP son el mismo contrato de evidencia. Regenerar juntos, este activo no es fuente de verdad de otro: la descripción del spec es la fuente (`docs/specs/case-5-el-tomo-trece.md:285`; `src/state/Private/EvidenceCatalogCase5EsA.ts:84-89`).
- `examine_acuse` ↔ `examine_acuse_en` — gemelos localizados del mismo asiento. Regenerar juntos, este activo no es fuente de verdad del otro; la composición y las marcas físicas son compartidas, mientras el texto debe coincidir con cada catálogo (`docs/specs/case-5-el-tomo-trece.md:4064`; `src/state/Private/EvidenceCatalogCase5EnA.ts:84-89`).
- `trial_day3_success_berrondo.ts` ↔ `trial_day3_success_berrondo_en.ts` — ambas contradicciones leen el mismo documento y atribuyen la rúbrica a Berrondo. Regenerar junto con las dos variantes, este activo no es fuente de verdad del guion (`src/case/case5/Private/trial_day3_success_berrondo.ts:10-30`; `src/case/case5/Private/trial_day3_success_berrondo_en.ts:10-30`).

## Conflictos abiertos

- El bloque `detailedView` dice «Sin nombre impreso: sólo la rúbrica» (`docs/specs/case-5-el-tomo-trece.md:1441`), pero §23.3 exige que el renglón mecanografiado contenga el oficio 4471 y el nombre del interno, y el catálogo describe explícitamente «con nombre del interno» (`docs/specs/case-5-el-tomo-trece.md:4052`; `src/state/Private/EvidenceCatalogCase5EsA.ts:86-89`). La lectura compatible es que no debe aparecer el nombre de Berrondo: C. Lengua sí forma parte del renglón. La decisión editorial queda registrada, no resuelta aquí.
- El spec ES muestra el fechador como `29 NOV`, mientras el catálogo EN lo describe como `NOV 29` aunque §23.3 dice que fechas y marcas físicas permanecen iguales (`docs/specs/case-5-el-tomo-trece.md:4064`; `src/state/Private/EvidenceCatalogCase5EsA.ts:89`; `src/state/Private/EvidenceCatalogCase5EnA.ts:89`). Confirmar si la variante EN traduce el orden del fechador o conserva exactamente la marca física.

## Hallazgos de auditoría 2026-09-19

**Veredicto (imágenes previas a la regeneración Lote F):** NO CUMPLE (contenido F1/F2, localización F6 y composición F1; estilo F5 con matiz por decidir el revisor). Ninguno de los dos gemelos pintaba el asiento del libro de acuses conforme a la hoja. Esa pasada quedó superada por la regeneración de `tools/raw/case5/examine_acuse.jpg` y `examine_acuse_en.jpg`; los defectos MAYOR/MEDIO de abajo se marcan retirados porque las imágenes ya no existen.

### Cumple (imágenes previas)

- Fechador de hule morado presente en ambas variantes con la fecha física compartida: «29 NOV.» en ES y «NOV 29» en EN, conforme al tratamiento declarado por cada catálogo y al conflicto abierto registrado (F1/F2/F3; `src/state/Private/EvidenceCatalogCase5EsA.ts:88-89`, `EvidenceCatalogCase5EnA.ts:88-89`).
- Rúbrica a tinta azul en el margen derecho de ambas variantes, sin convertirse en retrato ni quedar señalada con flechas o círculos (F1/F4; parcial: véase defecto de tamaño).
- No aparece Berrondo, la Chimoltrufia ni texto con la custodia de las 17:00 (F4 `NO CONTRADECIR`).

### Defectos confirmados (imágenes previas)

- ~~**AUSENTE · MAYOR (ES)** — El renglón mecanografiado no existe como tal: la lámina ES sólo lee «C. JUEZ DE DISTRITO PRESENTE.» y «Oficio 4471.». Falta el nombre del interno C. Lengua, la diligencia de cotejo, el Archivo Judicial, el 4 de diciembre y la sindicatura 114/1971, que F2 exige legibles (`F1/F2/F4`; rompe `src/case/case5/Private/correspondencia.ts:37-38` y la contradicción D3-T3 `trial_day3_success_berrondo.ts:10-13`).~~ `[x] RETIRADO POR REGENERACIÓN (2026-09-19, Lote F)`: el renglón ES nuevo transcribe el oficio 4471, C. Lengua, la diligencia, el Archivo Judicial, el 4 de diciembre y la sindicatura 114/1971.
- ~~**CONTRADICE · MAYOR (EN)** — El renglón dice «Nombre del interno: José de Jesús Martínez López» (nombre completo inventado): el interno es C. Lengua y F2 exige el texto exacto en inglés; además imprime un nombre completo, lo que F1 `AUSENTE` prohíbe para la rúbrica/asiento (`F1/F2`; rompe `correspondencia_en.ts:37-38`, `EvidenceCatalogCase5EnA.ts:84-89`).~~ `[x] RETIRADO POR REGENERACIÓN (2026-09-19, Lote F)`: el renglón EN nombra a C. Lengua y no inventa otro interno.
- ~~**CONTRADICE · MAYOR (EN, F6)** — El texto visible del asiento EN está en español («Oficio No. 4471», «Nombre del interno:»): la variante EN debe traducirlo, no dejarlo para «resolver» la traducción (`correspondencia_en.ts:37-38`).~~ `[x] RETIRADO POR REGENERACIÓN (2026-09-19, Lote F)`: el asiento EN está en inglés.
- ~~**DRIFT · MAYOR (F6, gemelos)** — Encuadre, escala y composición no se comparten: ES es una vista de escritorio con lámpara, faja roja y sello institucional; EN es un plano de página con cintas moradas y ojales de carpeta. F6 exige misma composición cambiando sólo el texto legible. Además ambas usan la hoja suelta, no un asiento del libro de acuses (`F1/F6`; `docs/specs/case-5-el-tomo-trece.md:4064`).~~ `[x] RETIRADO POR REGENERACIÓN (2026-09-19, Lote F)`: ambos gemelos son el mismo libro azul abierto, mismo encuadre.
- ~~**CONTRADICE · MEDIO (ambas, F1)** — La rúbrica es una firma grande y desarrollada, no «muy pequeña y enérgica», y ninguna muestra las dos rayas bajo el trazo (`docs/specs/case-5-el-tomo-trece.md:1441,4052`).~~ `[x] RETIRADO POR REGENERACIÓN (2026-09-19, Lote F)`: rúbrica minúscula con dos rayas.
- ~~**CONTRADICE · MEDIO (ES, F2/F5)** — Banda superior con el texto en inglés «EXAMINE» y balanza: rotulación de UI no pedida y texto en inglés prohibido en la variante ES (`docs/specs/case-5-el-tomo-trece.md:3978`).~~ `[x] RETIRADO POR REGENERACIÓN (2026-09-19, Lote F)`.
- ~~**CONTRADICE · MEDIO (ES, F1)** — La lámina ES incluye un sello institucional de balanza, faja roja con moño y montón de expedientes: elementos no pedidos que convierten el asiento en un sobre/oficio y alejan la lectura de «asiento del libro de acuses fotografiado de plano» (`docs/specs/case-5-el-tomo-trece.md:1441`).~~ `[x] RETIRADO POR REGENERACIÓN (2026-09-19, Lote F)`.
- ~~**DRIFT · MENOR (EN, F5)** — El papel EN lleva textura granulada fotográfica y degradado suave hacia los bordes; el literal §23.0 pide cel-shading de colores planos ni texturas fotográficas. La aceptación es decisión del revisor (`docs/specs/case-5-el-tomo-trece.md:3974-3980`).~~ `[x] RETIRADO POR REGENERACIÓN (2026-09-19, Lote F)`: ambas variantes usan papel cel-sombreado plano; queda un matiz de bokeh en la pasada nueva.

### Correcciones de auditoría

- Sustituida la entrada previa de esta misma fecha («No se inspeccionó ninguna imagen…») por la inspección real de `examine_acuse.png` y `examine_acuse_en.png`. [x] RETIRADO POR REVISIÓN (2026-09-19): la falta de inspección quedó resuelta al ejecutarse esta auditoría; la traza se conserva porque la hoja ya no declara «sin defectos confirmados».

### Recomendación (regenerar ambos gemelos juntos, en el orden del conjunto de consistencia)

1. **Composición compartida (F6/F1):** un único plano cerrado del asiento del libro de acuses (página con renglón, margen de firmas y fechador), sin escritorio, lámpara, expedientes, faja, sello ni banda «EXAMINE». Usar como geometría base la fijada por `bg_correspondencia` (libro azul, fechador morado).
2. **Renglón mecanografiado legible (F2):** ES: «Oficio 4471. Diligencia de cotejo documental promovida por el interno C. Lengua. Archivo Judicial, 4 de diciembre, 17:00 horas.» y «Entregado en: Sindicatura de la quiebra 114/1971.». EN: la traducción literal del catálogo inglés. C. Lengua sí va impreso; nunca el nombre de Berrondo ni nombres inventados.
3. **Rúbrica (F1/F4):** misma forma en ambos gemelos, a tinta azul, muy pequeña y enérgica, con dos rayas bajo el trazo, en el margen derecho; no una firma caligráfica grande.
4. **Fechador (F2/F3):** morado, «29 NOV» en ES y «NOV 29» en EN según catálogos; única pieza de texto que puede diferir entre gemelos.
5. **Estilo (F5):** cel-shading plano con terminador duro y contorno carbón en ambas variantes; eliminar la textura granulada/degredo del papel EN (pendiente de aceptación del revisor).

## Hallazgos de auditoría 2026-09-19 (regeneración Lote F, skip `bg_correspondencia`)

Imágenes auditadas: `tools/raw/case5/examine_acuse.jpg` y `tools/raw/case5/examine_acuse_en.jpg` (1280×720, 16:9). Recortes ampliados por sustantivo F1 (renglón, rúbrica, fechador, lomo/gutter, zona superior, margen derecho). `bg_correspondencia.jpg` se usó sólo como candado de identidad del libro azul, sin regenerarse (veredicto previo: no cumple leve).

**Veredicto: CUMPLE** en contenido (F1), texto (F2), cifras (F3), contrato en pantalla (F4) y localización (F6). Estilo F5 cumple el cel-shading y el contorno carbón, con un matiz menor de bokeh (decisión del revisor). Tres defectos `MENOR` que no rompen el hotspot ni D3-T3. No se requiere otra regeneración.

### Cumple

- **F1** — Asiento del libro de acuses, no una hoja suelta: libro abierto empastado en tela azul, lomo y gutter visibles, página enfrentada con garabatos ilegibles (recorte gutter; prueba de nombrar: «libro de registro abierto»). Sustituye la oficina/sobre de la pasada previa (`docs/specs/case-5-el-tomo-trece.md:1441,4052`).
- **F1/F2** — Renglón mecanografiado ES, letras completas: «Oficio 4471. Diligencia de cotejo documental promovida por el interno C. Lengua.» / «Archivo Judicial, 4 de diciembre, 17:00 horas.» / «Entregado en: Sindicatura de la quiebra 114/1971.» (recorte typed; `src/case/case5/Private/correspondencia.ts:37-38`; `trial_day3_success_berrondo.ts:10-13`).
- **F1/F2** — Renglón mecanografiado EN, traducido, sin español residual ni nombre inventado: «Official letter 4471. Document-comparison procedure filed by inmate C. Lengua.» / «Judicial Archive, December fourth, 5:00 PM.» / «Delivered to: Syndicate of bankruptcy 114/1971.» (recorte typed; `correspondencia_en.ts:37-38`; F2 de esta hoja).
- **F1/F4** — Rúbrica a tinta azul, minúscula y enérgica, en el margen derecho de ambas variantes, con exactamente dos rayas bajo el trazo; no es un nombre caligráfico ni un retrato; sin flechas ni círculos (recorte rubric; `docs/specs/case-5-el-tomo-trece.md:1441,2815-2828`).
- **F1/F2/F3** — Fechador de hule morado rectangular (no sello institucional circular): ES «29 NOV», EN «NOV 29», misma fecha física del 29 de noviembre (`EvidenceCatalogCase5EsA.ts:88-89`, `EvidenceCatalogCase5EnA.ts:88-89`; conflicto abierto del orden del fechador conservado).
- **F1 AUSENTE / F4** — Sin Berrondo, sin Chimoltrufia, sin oficina completa, sin banda «EXAMINE», sin sello de balanza, sin faja roja con moño, sin expedientes apilados, sin el nombre del firmante impreso, sin nota de custodia a las 17:00 (recortes topbanner y margen derecho; `correspondencia.ts:15-27`; `correspondencia_talks.ts:10-27`).
- **F3** — El aviso es del 29 de noviembre y la diligencia consignada es del 4 de diciembre a las 17:00; oficio 4471 y quiebra 114/1971 coinciden (`correspondencia.ts:37-38`; `docs/specs/case-5-el-tomo-trece.md:1438-1441,4172`).
- **F4** — El jugador puede leer oficio, C. Lengua, sindicatura, fecha del aviso y rúbrica marginal, que es lo que cita D3-T3 (`correspondencia.ts:31-44`; `trial_day3_success_berrondo.ts:10-13`; `trial_day3_success_berrondo_en.ts:10-13`).
- **F5** — Cel-shading de colores planos, terminador duro, contorno carbón `#1A1A1A`, papel crema de dos tonos, tela azul saturada, sin fotorrealismo, sin magenta en primer plano, sin marcas de agua; el ES no lleva inglés (`docs/specs/case-5-el-tomo-trece.md:3974-3980`).
- **F6** — Gemelos de composición: mismo encuadre, misma escala, misma rúbrica, mismo fechador, mismas marcas físicas; sólo cambia el texto del asiento y el orden del fechador (`docs/specs/case-5-el-tomo-trece.md:4064`). Identificadores `4471`, `C. Lengua` y `114/1971` estables.

### Defectos confirmados

- `CONTRADICE` / MENOR / F2 — El fechador deja un espacio entre dígitos («2 9 NOV» / «NOV 2 9») en lugar del bloque compacto `29 NOV` / `NOV 29`. Sigue leyéndose como 29 de noviembre y no cambia el día; no rompe `correspondencia.ts:36` ni D3-T3.
- `DRIFT` / MENOR / consistencia con `bg_correspondencia` — El libro de la lámina añade cantoneras de latón y un señalador rojo que el libro de `tools/raw/case5/bg_correspondencia.jpg` no pinta. Pasta de tela azul, papel rayado crema y contorno carbón sí coinciden; el `detailedView` no es fuente de verdad del fondo (`docs/specs/case-5-el-tomo-trece.md:3988`).
- `DRIFT` / MENOR / F5 — Motas/bokeh doradas en el borde superior (polvo/tungsteno pictórico). El literal §23.0 pide cel-shading plano sin texturas fotográficas; la aceptación es decisión del revisor (`docs/specs/case-5-el-tomo-trece.md:3974-3980`).

### Correcciones de auditoría

- Los ocho defectos MAYOR/MEDIO/MENOR de la pasada sobre las JPG previas se retiran por regeneración, con traza tachada arriba. Ningún ✓ de esta pasada nueva fue desmentido por su recorte: el renglón se nombra como asiento mecanografiado, la rúbrica como rúbrica pequeña con dos rayas, el fechador como sello de hule morado, y el objeto como libro abierto.

### Recomendación

Cumple; no requiere regeneración. Si se retoca con el conjunto de consistencia (`bg_correspondencia`, aún no cumple leve), compactar `29`/`NOV 29` en el fechador y omitir cantoneras/señalador para igualar el libro de escena. No correr `process_case5_assets.py` en esta pasada: sólo RAW.
