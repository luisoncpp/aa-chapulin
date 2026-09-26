# recibo_renta — hoja de hechos

Clase: `icon`. Espec: §23.0, §23.5, §4.3, §5.2, §13.1–§13.2 y §24.C F13. Guion directo: `docs/specs/case-5-el-tomo-trece.md:107,283,1350-1380,1759-1868,3759`; `src/case/case5/Private/vecindad_hotspots.ts:28-35`; `src/case/case5/Private/vecindad_talks.ts:23-30`; `src/case/case5/Private/trial_day2_t1.ts:105-112`; variante EN en `vecindad_hotspots_en.ts:35-39`, `vecindad_talks_en.ts:23-30` y `trial_day2_t1_en.ts:105-112`. Catálogos ES/EN: `src/state/Private/EvidenceCatalogCase5EsA.ts:72-75` y `src/state/Private/EvidenceCatalogCase5EnA.ts:72-75`. Archivo compartido esperado: `assets/recibo_renta.webp`; no existe variante `_en` ni `detailedView` declarada para este icono.

## Mapa semántico

- Icono de Acta del recibo expedido por el Señor Barriga el **29 de noviembre**.
- Acredita un pago de **diecisiete mensualidades** de renta de Don Ramón; el importe narrado es **$4,250**, en billetes nuevos, dentro de un sobre amarillo.
- El concepto manuscrito por Barriga dice exactamente: **«Recibí de tercero no identificado, a cuenta del inquilino.»** En EN, la interfaz lo traduce como **“received from unidentified third party, on account of the tenant.”**
- El documento es una prueba separada de la nota mecanografiada y del acta de detención: no es el sobre, no es la nota y no es una reproducción del inventario del detenido.
- Su función dramática es sostener la pregunta del D2-T1 sobre quién entregó el dinero y demostrar que Barriga no identificó al pagador; no identifica por sí solo a Berrondo ni prueba por sí solo quién financió el pago.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Un recibo de renta como objeto único, centrado y aislado, con silueta reconocible de comprobante de papel y fondo transparente, según el estilo de icono de Acta (§23.5; `EvidenceCatalogCase5EsA.ts:72-75`; `EvidenceCatalogCase5EnA.ts:72-75`).
- [ ] `PINTAR` — La identidad del objeto es el recibo del Señor Barriga por diecisiete mensualidades del 29 de noviembre (§4.3, línea 283; §13.1, líneas 1373-1380; catálogos ES/EN citados arriba).
- [ ] `NO CONTRADECIR` — El recibo pertenece al pago enviado en un sobre amarillo y queda asociado a los mismos billetes que Barriga guardó en la caja fuerte; no convertirlo en el sobre ni en la nota que acompañó el efectivo (§2.2, línea 107; §24.C F13, línea 4165; `vecindad_talks.ts:23-30`).
- [ ] `AUSENTE` — No mostrar como objetos principales la nota mecanografiada, el sobre amarillo, los billetes, la banda bancaria, una máquina de escribir, a Don Ramón, a Barriga ni una escena de la vecindad: todos son contexto o pruebas separadas (§23.5; §13.1, líneas 1373-1380; §24.C F13).
- [ ] `NO CONTRADECIR` — El recibo es la copia/prueba separada que el jugador obtiene en la investigación; la nota y el sobre se prestan, pero Barriga conserva el recibo como comprobante fiscal (`vecindad_hotspots.ts:28-35`; EN: `vecindad_hotspots_en.ts:35-39`; `vecindad_talks_en.ts:40-47`).

### F2 Texto en la imagen

- [ ] `TEXTO EXACTO` — Si el icono contiene texto legible, el concepto debe decir exactamente: «Recibí de tercero no identificado, a cuenta del inquilino.» (§13.2, línea 1859; `trial_day2_success.ts:91-95`; `vecindad_talks.ts:27-30`).
- [ ] `NO CONTRADECIR` — El texto no debe decir «recibí del señor Ramón»: Barriga explica que habría escrito eso sólo si Ramón le hubiera entregado el dinero (§13.2, línea 1863; `trial_day2_success.ts:95-99`).
- [ ] `NO CONTRADECIR` — El icono no necesita reproducir de forma legible todo el recibo, la firma de Barriga, el importe, la fecha ni un membrete: §23.5 fija un icono de objeto centrado y el catálogo aporta la descripción narrativa; no hay `detailedView` declarada para `recibo_renta` (§23.5; `EvidenceCatalogCase5EsA.ts:72-75`; `EvidenceCatalogCase5EnA.ts:72-75`).
- [ ] `AUSENTE` — No imprimir «recibo_renta», «Recibo de Renta», «Rent Receipt», «tercero no identificado» como rótulo separado, la conclusión «Berrondo pagó» ni una traducción mezclada ES/EN; el concepto, si se lee, debe pertenecer al documento y no a una etiqueta de interfaz (§23.0; §23.5; catálogos ES/EN).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La fecha del documento es 29 de noviembre; no convertirla en 4 de diciembre, fecha de la detención, ni en una fecha impresa distinta (§4.3, línea 283; §5.1, línea 236; `trial_day2_success.ts:91-95`).
- [ ] `NO CONTRADECIR` — El recibo cubre diecisiete mensualidades y el pago asciende a $4,250; la cantidad y los billetes son hechos narrativos, no una licencia para inventar una cifra, sello u hora no fijados para el icono (§2.2, línea 107; §13.1, líneas 1376-1380; §24.C F13, línea 4165).
- [ ] `NO CONTRADECIR` — La hora exacta de entrega del sobre no consta. Barriga lo encuentra a las nueve de la mañana, pero el recibo no debe mostrar una hora de entrega como si estuviera certificada (§2.2, línea 107; §24.C F13, línea 4165).
- [ ] `NO CONTRADECIR` — El concepto deja sin identificar a quien entregó el dinero; el recibo no prueba por sí solo que Don Ramón pagó ni que Berrondo lo pagó, aunque el clímax y el epílogo relacionan el efectivo con el montaje (§13.2, líneas 1859-1868; §24.C F13, línea 4165).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En la investigación de la vecindad, Barriga conserva el sobre, el papel y la copia de su recibo; la defensa lee la nota y añade `recibo_renta` después de identificar la frase «tercero no identificado» (`vecindad_hotspots.ts:28-35`; EN: `vecindad_hotspots_en.ts:35-39`). El icono debe distinguirse de la nota mecanografiada y del sobre.
- [ ] `PINTAR` — Barriga dice que hizo el recibo esa mañana y se lo dio a Don Ramón el lunes; también afirma que escribió «Recibí de tercero no identificado, a cuenta del inquilino» porque Ramón no le entregó el dinero (`vecindad_talks.ts:23-30`; EN: `vecindad_talks_en.ts:23-30`).
- [ ] `PINTAR` — En D2-T1, el `followUp` pregunta «¿De quién dijo el testigo que recibía ese dinero?» / “From whom did the witness say he received that money?” y presenta `recibo_renta` (`trial_day2_t1.ts:105-112`; EN: `trial_day2_t1_en.ts:105-112`).
- [ ] `PINTAR` — La resolución lee el concepto como prueba de que Barriga no pudo identificar a quien dejó el dinero y limita expresamente la conclusión: no demuestra todavía quién pagó; demuestra que el recibo no acredita un pago personal de Don Ramón (`trial_day2_success.ts:91-99`; EN: `trial_day2_success_en.ts:89-97`).
- [ ] `NO CONTRADECIR` — La fiscalía usa el pago de un tercero para sostener que el acusado tiene un cómplice, pero esa afirmación es una inferencia litigiosa posterior, no texto ni identidad que el icono deba afirmar (`trial_day2_success.ts:102-108`; EN: `trial_day2_success_en.ts:102-108`).
- [ ] `NO CONTRADECIR` — En el epílogo, los billetes quedan a disposición del juzgado y Don Ramón pide retirar el abono; Barriga conserva copia y constancia de la rectificación. El icono representa el recibo de la investigación, no una orden judicial ni el estado administrativo final (§24.C F13, línea 4165; `climax_epilogue.ts:3-9`).

### F5 Estilo

- [ ] `PINTAR` — Repetir completo el contrato obligatorio de §23.0 en el prompt: ilustración 2D HD estilo *Capcom Ace Attorney* de linaje GBA/Nintendo DS; cel-shading plano con terminador duro y dos tonos por superficie; contorno continuo carbón `#1A1A1A`, más grueso en la silueta; tema mexicano setentero/Chespirito y registro de papel, madera, polvo, archivo judicial, madera barnizada, latón envejecido y luz de tungsteno (§23.0, líneas 3974-3978).
- [ ] `PINTAR` — Aplicar el medio de icono de Acta: objeto centrado, fondo transparente y contorno carbón (§23.5, líneas 4086-4090).
- [ ] `AUSENTE` — Prohibidos fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto inglés no exigido y cualquier tono rosa o magenta en primer plano (§23.0, líneas 3974-3980).
- [ ] `AUSENTE` — No añadir flechas, círculos, realces didácticos, una interfaz del Acta, etiquetas de evidencia ni una comparación visual con la nota; el icono sólo identifica el recibo (§23.0; §23.5).

### F6 Localización

- [ ] `NO CONTRADECIR` — Usar un único `assets/recibo_renta.webp` para ES y EN. Los catálogos localizan nombre y descripción, pero no declaran `recibo_renta_en.webp` (`EvidenceCatalogCase5EsA.ts:72-75`; `EvidenceCatalogCase5EnA.ts:72-75`).
- [ ] `NO CONTRADECIR` — La composición física, el papel, la escritura y cualquier marca no legible permanecen idénticos entre idiomas; ES localiza «Recibo de Renta» y el concepto narrado, EN usa “Rent Receipt” y “received from unidentified third party, on account of the tenant” en la interfaz/diálogo, no como una segunda imagen (§23.0; catálogos y guiones ES/EN citados arriba).
- [ ] `AUSENTE` — No crear `recibo_renta_en.webp` ni introducir texto inglés legible dentro del archivo compartido; §23.0 sólo permite texto inglés dentro de variantes EN exigidas (§23.0, línea 3980; §23.5).

## Consistencia (regenerar juntos)

- `examine_nota_renta` / `_en` — comparte el sobre amarillo, el pago de diecisiete mensualidades y la fecha narrativa, pero la lámina es la nota mecanografiada y este activo es el recibo manuscrito. Regenerar juntos para conservar la separación de documentos; este activo no es fuente de verdad del otro.
- `nota_mecanografiada` — es la prueba hermana que acompaña el sobre y pide expedir/conservar el recibo; comparte contexto y no composición. Regenerar juntos; este activo no es fuente de verdad del otro.
- `parte_detencion_c5` — comparte el hecho de que el recibo estaba en poder de Ramón y cubría diecisiete mensualidades, pero su icono representa el acta policial y no el recibo aislado. Regenerar juntos para evitar contaminar inventarios; este activo no es fuente de verdad del otro.
- `EvidenceCatalogCase5EsA.ts` / `EvidenceCatalogCase5EnA.ts` — gemelos de idioma del mismo icono; comparten la identidad física y sólo localizan nombre/descripcion. Ninguno es fuente de verdad visual del otro.
- `vecindad_c5` — comparte la escena y el momento de entrega/consulta, pero el icono no debe convertirse en un recorte del fondo `bg_despacho.webp` ni mostrar a Barriga. Regenerar juntos sólo para conservar el contrato de presentación; este activo no es fuente de verdad de la escena.
- `trial_day2_t1` / `trial_day2_t1_en` — comparten el `followUp`, la pregunta sobre el pagador y la resolución bilingüe; el guion es la fuente de verdad del contrato en pantalla, no el icono.

## Conflictos abiertos

- El catálogo ES/EN describe el concepto como escrito «de su puño» / “in his own hand”, mientras la clase de icono de §23.5 no exige texto legible ni una reproducción completa del documento (`EvidenceCatalogCase5EsA.ts:72-75`; `EvidenceCatalogCase5EnA.ts:72-75`; §23.5). No resolver aquí si la generación debe hacer legible toda la frase: el mínimo seguro es un recibo manuscrito que no contradiga la cadena exacta del diálogo.
- Barriga dice en la investigación que hizo el recibo esa mañana y se lo dio a Ramón el lunes (`vecindad_talks.ts:25-30`), mientras §24.C F13 describe el original entregado a Don Ramón y una copia conservada. La relación de original/copia es de flujo documental y no fija qué soporte físico debe mostrar el icono; no inventar un reverso, sello o duplicado.
- La cronología fija el 29 de noviembre y el hallazgo del sobre a las nueve de la mañana, pero declara que la hora exacta de entrega no consta (§2.2, línea 107; §24.C F13, línea 4165). No imprimir una hora para resolverlo en la imagen.
- El diálogo de D2-T1 permite que la fiscalía infiera un cómplice, pero la defensa y el juez mantienen abierta la identidad del pagador (`trial_day2_success.ts:91-108`; §24.C F13). No convertir esa inferencia en un nombre o firma dentro del recibo.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen por protocolo de `asset-facts`; no hay defectos visuales confirmados ni severidades que registrar.
- Hoja derivada exclusivamente del spec, Libro de hechos, catálogo ES/EN y guion ES/EN citados arriba. No se ejecutaron tests, lint, auditorías ni procesamiento de assets, y no se modificaron otros archivos.
