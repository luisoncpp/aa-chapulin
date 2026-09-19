# oficio_diligencia — hoja de hechos

Clase: `icon`. Espec: §5.2, §14.2, §15.3, §23.0 y §23.5. Guion: fiscalía D3, charla `pedir_oficio`, D3-T2 contradicción resolutoria; variantes ES/EN comparten el mismo icono.

## Mapa semántico

- **Objeto:** icono de Acta del oficio oficial 4471 emitido por la fiscalía; no es una lámina de examen ni una escena de la oficina (§5.2; §23.5).
- **Momento y función:** oficio fechado el 26 de noviembre que ordena la diligencia del sábado 4 de diciembre a las 17:00 en el Archivo Judicial (§5.2; §14.2; §15.3).
- **Identidades documentales:** diligencia de cotejo documental; actuario Hilario Balbuena; lista de distribución al calce para Actuaría adscrita, Dirección del Archivo y Sindicatura de la quiebra 114/1971 (§5.2; `fiscalia_c5_talks.ts:10-19`; `trial_day3_success_sam.ts:2-19`).
- **Relación dramática:** la lista de distribución contradice la afirmación de Super Sam de que nadie más supo de la diligencia; demuestra que el propio oficio comunicó día, hora, lugar y el hombre que estaría allí (§15.3; §24.C; `trial_day3_t2.ts:45-70`).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Un único documento oficial centrado, reconocible como oficio/orden de fiscalía dentro del estilo de icono de Acta; fondo transparente y contorno carbón (§23.5; `EvidenceCatalogCase5EsB.ts:60-63`; `EvidenceCatalogCase5EnB.ts:60-63`).
- [ ] `PINTAR` — La identidad visual debe sugerir el oficio 4471 y su carácter de documento jurídico, sin convertirse en una oficina, una pila de papeles o una escena completa (§5.2; §23.5).
- [ ] `NO CONTRADECIR` — El objeto representado es el oficio de la diligencia, no el acuse de recepción del 29 de noviembre, la copia al carbón de Casimiro ni la nota mecanografiada (§5.2; §5.3; `acuse_notificacion.md`).
- [ ] `AUSENTE` — No incluir personajes, manos, fiscalía completa, Archivo Judicial, Super Sam, Berrondo, flechas, círculos o realces que señalen automáticamente la contradicción (§23.0; §23.5; §15.3).
- [ ] `AUSENTE` — No dibujar el contenido como una lámina pericial con múltiples paneles: el spec no asigna `detailedView` ni placa de examen a `oficio_diligencia` (§5.2; §23.3; §23.5).

### F2 Texto en imagen

- [ ] `NO CONTRADECIR` — §23.5 no exige cadenas legibles dentro del icono; no convertir la descripción de catálogo en una obligación de imprimir `4471`, nombres, fechas o la lista de distribución en miniatura (§23.5; `EvidenceCatalogCase5EsB.ts:60-63`; `EvidenceCatalogCase5EnB.ts:60-63`).
- [ ] `AUSENTE` — No introducir texto inglés en el icono compartido, ni rótulos explicativos como «contradiction», «guilty» o «distribution list» (§23.0; §23.5).
- [ ] `NO CONTRADECIR` — Si el diseño incluye marcas documentales decorativas, no deben cambiar la identidad fijada por el spec: oficio 4471, fiscalía, diligencia del Archivo Judicial y lista al calce (§5.2; §14.2).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La orden es el oficio **4471**, emitido el **26 de noviembre** (§5.2; `fiscalia_c5_talks.ts:13`; `fiscalia_c5_talks_en.ts:13`).
- [ ] `NO CONTRADECIR` — La diligencia está fijada para el **sábado 4 de diciembre a las 17:00** en el Archivo Judicial (§5.2; §24.A A10; `fiscalia_c5_talks.ts:14`; EN equivalente).
- [ ] `NO CONTRADECIR` — La lista de distribución incluye la Actuaría adscrita, la Dirección del Archivo y la Sindicatura de la quiebra **114/1971** (§5.2; `fiscalia_c5_talks.ts:15`; `trial_day3_success_sam.ts:4-6`).
- [ ] `NO CONTRADECIR` — El oficio designa al actuario Hilario Balbuena, pero el icono no debe sugerir que él estuvo presente a las 17:00: §24.A fija su entrada a las 17:44, después del hallazgo (§5.2; §24.A A10).
- [ ] `NO CONTRADECIR` — El documento prueba que la diligencia fue comunicada a esos destinatarios; no prueba por sí solo quién leyó el oficio, quién llevó físicamente el aviso ni quién cometió el homicidio (§15.3; §24.C; `trial_day3_success_sam.ts:10-19`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En la charla de la fiscalía, el diálogo identifica el objeto como oficio 4471 del 26 de noviembre, firmado y ordenado por Super Sam, y lee la diligencia, el lugar, la hora y la lista de distribución antes de entregar la prueba (`fiscalia_c5_talks.ts:10-19`; EN `fiscalia_c5_talks_en.ts:10-19`).
- [ ] `NO CONTRADECIR` — La imagen debe sostener que el oficio salió de la fiscalía con una lista al calce; la frase de Super Sam «Lo hace la máquina, no el hombre» no autoriza a borrar la identidad del documento ni a convertirlo en un formulario vacío (`fiscalia_c5_talks.ts:13-19`).
- [ ] `NO CONTRADECIR` — En D3-T2, la presentación debe permitir argumentar que el oficio fue firmado por el fiscal el 26 de noviembre y que la lista impresa por la máquina de su oficina avisó a la sindicatura de la quiebra 114/1971 (`trial_day3_t2.ts:45-70`; `trial_day3_success_sam.ts:2-19`; EN equivalentes).
- [ ] `NO CONTRADECIR` — La contradicción sólo establece que cinco personas podían saber de la diligencia el sábado por la mañana; no convierte la notificación legal en delito ni prueba por sí sola autoría (`trial_day3_success_sam.ts:10-19`; §24.C).
- [ ] `NO CONTRADECIR` — La orden no debe anticipar la deducción posterior sobre el acceso de Berrondo, el huacal 9 o el circuito del montacargas; esos hechos pertenecen a otras pruebas y al clímax (§24.B–§24.C; `credencial_sindico.md`; `plate_masa_concursal.md`).

### F5 Estilo

- [ ] Contrato §23.0 completo pegado en el prompt de regeneración: ilustración 2D HD estilo *Capcom Ace Attorney* de linaje GBA/Nintendo DS; cel-shading plano con terminador duro de dos tonos; contorno continuo carbón `#1A1A1A`, más grueso en la silueta; registro mexicano setentero/Chespirito; papel, madera, polvo, archivo judicial, madera barnizada, latón envejecido y luz de tungsteno; prohibidos fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto en inglés salvo variantes EN exigidas y rosa/magenta en primer plano (§23.0).
- [ ] `PINTAR` — Composición de icono de Acta: objeto centrado, separado del fondo, lectura inmediata y contorno carbón (§23.5).
- [ ] `AUSENTE` — Sin fondo magenta en primer plano, sin marcas de agua, sin realces, flechas, círculos ni una composición de lámina explicativa (§23.0; §23.5; arquitectura de asset pipeline).

### F6 Localización

- [ ] `PINTAR` — ES y EN usan el mismo archivo `assets/oficio_diligencia.webp`; no existe `examine_oficio_diligencia` ni una variante localizada exigida para este icono (§23.3; `EvidenceCatalogCase5EsB.ts:60-63`; `EvidenceCatalogCase5EnB.ts:60-63`).
- [ ] `NO CONTRADECIR` — La identidad visual, la composición y cualquier marca no legible permanecen idénticas entre idiomas; sólo cambian el nombre y la descripción del catálogo (§23.0; §23.5).
- [ ] `NO CONTRADECIR` — Los identificadores `4471`, `4 de diciembre`/`December 4`, `17:00`/`5:00 PM` y `114/1971` deben seguir refiriéndose al mismo documento en ambos catálogos y guiones (`EvidenceCatalogCase5EsB.ts:60-63`; `EvidenceCatalogCase5EnB.ts:60-63`; `fiscalia_c5_talks_en.ts:10-19`).

## Consistencia (regenerar juntos)

- `assets/oficio_diligencia.webp` en los catálogos ES/EN — mismo icono compartido; los catálogos cambian idioma de nombre y descripción, no la imagen. Regenerar juntos; este activo no es fuente de verdad del catálogo (§23.5; `EvidenceCatalogCase5EsB.ts:60-63`; `EvidenceCatalogCase5EnB.ts:60-63`).
- `acuse_notificacion` — comparte el oficio 4471, la diligencia del 4 de diciembre a las 17:00 y la sindicatura 114/1971; el acuse es la recepción del mismo aviso. Regenerar juntos; este activo no es fuente de verdad del otro (§5.2; §23.3; `acuse_notificacion.md`).
- `examine_libro_peritos` — comparte la diligencia, el actuario Hilario Balbuena y la llegada tardía de las 17:44; no es el mismo documento. Regenerar juntos para evitar fechas, cargo o institución incompatibles; este activo no es fuente de verdad del otro (§5.2; §24.A A10; §23.3).
- `examine_acuse` / `examine_acuse_en` — el acuse debe conservar la misma identidad documental del oficio 4471 y su destino, aunque la rúbrica y el fechador pertenecen al acuse, no a este icono. Regenerar juntos sólo para mantener la cadena documental; este activo no es fuente de verdad de las láminas (§23.3; `acuse_notificacion.md`).
- `credencial_sindico` — comparte la identidad de la sindicatura 114/1971 y el acceso jurídico del síndico, pero el oficio no prueba por sí mismo que Berrondo lo recibiera o actuara. Regenerar juntos; este activo no es fuente de verdad del otro (§5.2; §5.2 catalog; `credencial_sindico.md`).

## Conflictos abiertos

- §5.2 y los catálogos describen que el oficio **designa al actuario Hilario Balbuena** (`docs/specs/case-5-el-tomo-trece.md:298`; `EvidenceCatalogCase5EsB.ts:62`; `EvidenceCatalogCase5EnB.ts:62`), pero el texto visible leído en fiscalía y el éxito de D3-T2 enumeran la distribución como «Actuaría adscrita», «Dirección del Archivo» y «Sindicatura» sin imprimir el nombre de Balbuena (`fiscalia_c5_talks.ts:14-15`; `trial_day3_success_sam.ts:4-6`). No resolver aquí: la hoja mantiene el nombre como hecho narrativo del documento, pero no exige imprimirlo en el icono.
- El catálogo ES llama al objeto «Oficio de Diligencia» y el EN «Diligence Order», mientras el guion EN alterna `order` y `letter` para el mismo `EvidenceId` (`EvidenceCatalogCase5EsB.ts:61`; `EvidenceCatalogCase5EnB.ts:61`; `trial_day3_success_sam_en.ts:2-19`). Esto no cambia el icono, pero la terminología canónica debe fijarse en el spec si se exige texto legible en una futura vista detallada.
- El relato dice que Super Sam firma «ciento cuarenta oficios a la semana» en la charla, pero en el éxito de contradicción dice que firma «seiscientos oficios al mes» (`fiscalia_c5_talks.ts:18`; `trial_day3_success_sam.ts:15`). Es una discrepancia de volumen narrado, no un requisito visual de este icono; no resolver aquí.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, conforme al protocolo de `asset-facts` y a la solicitud; no se confirma ningún defecto visual del icono actual.
- La hoja fue extraída sólo de la especificación de Caso 5, catálogos ES/EN y guiones ES/EN relevantes. No se ejecutaron tests, lint, auditorías, procesamiento ni verificación de assets.
