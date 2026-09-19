# parte_detencion_c5 — hoja de hechos

Clase: `icon`. Espec: §23.0, §23.5, §4.2, §5.1 y §24.C. Guion directo: `docs/specs/case-5-el-tomo-trece.md:236,262,269,582-591`; `src/case/case5/Private/celda_talks.ts:52-62`; variante EN `src/case/case5/Private/celda_talks_en.ts:52-62`. Catálogos ES/EN: `src/state/Private/EvidenceCatalogCase5EsA.ts:15-18` y `src/state/Private/EvidenceCatalogCase5EnA.ts:15-18`. Archivo único: `assets/parte_detencion_c5.webp`; no existe variante `_en`.

## Mapa semántico

- Icono de Acta para el **acta de detención del 4 de diciembre** de Ramón Valdés.
- El documento registra la detención a las **21:40** en la vecindad.
- El inventario del detenido contiene una insignia de abogado, tres pesos, una libreta y un recibo de renta a nombre de Ramón por diecisiete mensualidades.
- El activo es un icono centrado y aislado de Acta; no es una reproducción legible del acta, una escena de la vecindad ni el recibo separado que se argumenta en el día 2.
- El sufijo `_c5` es obligatorio porque el `EvidenceId` `parte_detencion` colisiona con los Casos 0 y 1; este icono no puede heredar el contenido de esos informes (`docs/specs/case-5-el-tomo-trece.md:262`; §23.5).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Un documento policial de detención presentado como objeto único, centrado, con silueta reconocible de acta o informe y fondo transparente (§23.5; `EvidenceCatalogCase5EsA.ts:15-18`; `EvidenceCatalogCase5EnA.ts:15-18`).
- [ ] `NO CONTRADECIR` — La identidad del documento es el acta del 4 de diciembre de Ramón Valdés, no un parte de los Casos 0 o 1 (§5.1, `docs/specs/case-5-el-tomo-trece.md:269`; §4.2, línea 236).
- [ ] `NO CONTRADECIR` — El icono puede sugerir papel oficial, pero no debe convertir el activo en una fotografía de la detención, de la vecindad o de Don Ramón (§23.5; clase `icon`).
- [ ] `AUSENTE` — No mostrar como objeto principal el recibo de renta aislado, la insignia, la libreta, monedas, una escena del Archivo, la hoja de relevo ni anexos: el Caso 5 especifica que esta acta **ya no lleva anexo** (§5.1, línea 269; `celda_talks.ts:55-63`).

### F2 Texto en la imagen

- [ ] `AUSENTE` — No exigir texto legible, cifras, nombres ni etiquetas dentro del icono. §23.5 sólo fija el estilo de icono de Acta —objeto centrado, fondo transparente y contorno carbón—; las cadenas del acta viven en el catálogo y el diálogo (§23.5; catálogos ES/EN citados arriba).
- [ ] `AUSENTE` — No imprimir «parte_detencion_c5», «Acta de Detención», «Arrest Report», «21:40», «17 mensualidades» ni una traducción parcial como si el icono fuera la vista detallada del documento (`EvidenceCatalogCase5EsA.ts:15-18`; `EvidenceCatalogCase5EnA.ts:15-18`).
- [ ] `NO CONTRADECIR` — Si el dibujo sugiere un membrete o líneas de formulario, no debe introducir texto legible en inglés en la variante compartida ni datos de los informes homónimos de otros casos (§23.0; §23.5).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La ficha representa el 4 de diciembre y la detención de Ramón Valdés a las 21:40; esos datos no tienen que imprimirse en el icono (§4.2, línea 236; §5.1, línea 269; catálogos ES/EN).
- [ ] `NO CONTRADECIR` — El inventario es exactamente una insignia de abogado, tres pesos, una libreta y un recibo de renta por diecisiete mensualidades; no sustituirlo por la barra de hielo, los cuarenta centavos, el recibo de hielería o el anexo del `parte_detencion` del Caso 0 (catálogos Case 5 y `EvidenceCatalogCase0Es.ts:10`).
- [ ] `NO CONTRADECIR` — El acta acredita que el recibo estaba en poder del detenido y que decía diecisiete mensualidades pagadas; no prueba por sí sola quién pagó la renta. El día 2 deja abierta la identidad del pagador (§13, línea 1701; `celda_talks.ts:56-61`; §24.C F13).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En la charla de la celda, el alguacil desliza una copia del acta del 4 de diciembre por la ranura; la imagen debe leerse como un documento oficial separado de la segunda hoja que aparece después (`celda_talks.ts:55`; EN: `celda_talks_en.ts:55`).
- [ ] `PINTAR` — La conversación enumera primero la detención a las 21:40 y la insignia, los tres pesos y la libreta; después destaca el recibo de renta por diecisiete mensualidades (`celda_talks.ts:56-58`; EN: `celda_talks_en.ts:56-58`).
- [ ] `NO CONTRADECIR` — Don Ramón niega haber pagado y explica que el señor Barriga le entregó el recibo el lunes; el icono no debe ilustrar como hecho probado que Ramón pagó la renta (`celda_talks.ts:59-61`; EN: `celda_talks_en.ts:59-61`).
- [ ] `PINTAR` — Tras la línea «Me quedo con el acta», se entrega `parte_detencion` al Acta; el activo debe funcionar como prueba inventariable que sostiene el recibo de renta en el giro 2, no como la hoja de relevo que se entrega inmediatamente después (§5.1, línea 269; `celda_talks.ts:62-66`).
- [ ] `NO CONTRADECIR` — El icono no debe mostrar la brecha de custodios de 17:00–17:15 ni cuatro firmas: esos hechos pertenecen a `hoja_relevo`, que el alguacil desliza como segunda hoja (`celda_talks.ts:63-66`; §5.1, línea 270).

### F5 Estilo

- [ ] `PINTAR` — Repetir completo el contrato obligatorio de §23.0 en el prompt: ilustración 2D estilo *Capcom Ace Attorney* de linaje GBA/Nintendo DS en alta definición; cel-shading plano con terminador duro y dos tonos por superficie; contorno continuo carbón `#1A1A1A`, más grueso en la silueta; tema mexicano setentero/Chespirito y registro de papel, madera, polvo, archivo judicial, madera barnizada, latón envejecido y luz de tungsteno (§23.0, líneas 3974-3978).
- [ ] `PINTAR` — Aplicar el medio de icono de Acta: objeto centrado, fondo transparente y contorno carbón (§23.5, líneas 4086-4090).
- [ ] `AUSENTE` — Prohibidos fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto inglés no exigido y cualquier tono rosa o magenta en primer plano (§23.0, líneas 3978-3980).
- [ ] `AUSENTE` — No añadir flechas, círculos, realces, sellos narrativos ni una interfaz del Acta dentro del icono; la composición sólo identifica el objeto (§23.0; §23.5).

### F6 Localización

- [ ] `NO CONTRADECIR` — Usar un único `assets/parte_detencion_c5.webp` para ES y EN. Los catálogos localizan nombre y descripción, pero ambos apuntan al mismo icono (`EvidenceCatalogCase5EsA.ts:15-18`; `EvidenceCatalogCase5EnA.ts:15-18`).
- [ ] `NO CONTRADECIR` — La composición física, el papel y cualquier marca no legible permanecen idénticos entre idiomas; ES dice «Acta de Detención» y «diecisiete mensualidades», EN dice «Arrest Report» y «seventeen months» sólo en la interfaz y el diálogo, no dentro de la imagen (catálogos y guiones ES/EN citados arriba).
- [ ] `AUSENTE` — No crear `parte_detencion_c5_en.webp` ni introducir texto localizado legible que fuerce una divergencia visual (§23.5; catálogos ES/EN).

## Consistencia (regenerar juntos)

- `parte_detencion` de los Casos 0 y 1 — comparte `EvidenceId`, pero no contenido ni archivo. Regenerar/comprobar juntos sólo para evitar colisión de nombres y contaminación de inventarios; este activo no es fuente de verdad de los otros.
- `celda_c5` / `celda_talks.ts` — comparte el momento de entrega por la ranura y la secuencia visual del acta seguida por la hoja de relevo; regenerar juntos para conservar la separación de objetos, pero el guion es la fuente de verdad del contrato en pantalla.
- `EvidenceCatalogCase5EsA.ts` y `EvidenceCatalogCase5EnA.ts` — gemelos de idioma del mismo icono; comparten composición y sólo localizan la interfaz; ninguno es fuente de verdad visual del otro.
- `hoja_relevo` / `assets/bitacora_transmision.webp` — aparece inmediatamente después como segunda hoja, por lo que debe conservar silueta y escala distinguibles del acta; este activo no es fuente de verdad de la hoja.
- `recibo_renta` — comparte el hecho narrativo de las diecisiete mensualidades y su uso en el día 2, pero es la prueba separada que resuelve el pagador en el clímax; regenerar juntos para no convertir el acta en el recibo; este activo no es fuente de verdad del otro.

## Conflictos abiertos

- El `EvidenceId` se llama `parte_detencion`, mientras el archivo del Caso 5 debe llamarse `parte_detencion_c5`; es una colisión de almacenamiento deliberada, no una discrepancia de contenido (§5, línea 262; §23.5).
- El acta dice que el recibo está a nombre de Ramón por diecisiete mensualidades, y el diálogo lo resume como «Pagadas», pero §13 y §24.C F13 mantienen abierta la identidad de quien pagó. No resolver aquí: el icono no debe afirmar el pagador.
- El spec §23.5 declara «23 nuevos» iconos, pero enumera también `parte_detencion_c5` dentro de esa lista junto con el resto del bloque; no afecta el contrato individual del activo y no se corrige desde esta hoja.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen por protocolo de `asset-facts`; no hay defectos visuales confirmados ni severidades que registrar.
- Hoja derivada exclusivamente del spec, Libro de hechos, catálogo ES/EN y guion ES/EN citados arriba. No se ejecutaron tests, lint, auditorías ni procesamiento de assets, y no se modificaron otros archivos.
