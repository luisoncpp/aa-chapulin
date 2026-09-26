# expediente_serie — hoja de hechos
Clase: icono de prueba del Acta + vista detallada `examine_expediente_serie` (ES/EN). Espec: §23.0, §23.3, §23.5. Guion: §12.4, §13.3–§13.4, `delegacion_c5_talks`, `trial_day2_success`, `trial_day3_success_sam`.

## Mapa semántico y alcance

Es un extracto certificado de cinco expedientes de 1982, compilado por la policía judicial y entregado por el Sargento en la delegación el 7 de diciembre a las 15:00. La vista detallada es el **Tablero del Señalamiento 1**: cinco paneles alineados sobre una mesa de peritajes, con etiquetas de fecha mecanografiadas. El icono del Acta sólo representa el conjunto de expedientes; la composición de los cinco paneles pertenece a `examine_expediente_serie` y su variante inglesa.

Identidades seguidas: panel A / sociedad disuelta y tarjeta de presentación; panel B / ficha mecanografiada del museo; panel C / frasco de valeriana y molde de cera de la hacienda; panel D / boleta de empeño de $12,000; panel E / telegrama y acuse del collar. El vínculo probatorio fuerte es A+B: los otros tres paneles son contexto de preparación, dinero y botín, no prueba de que Berrondo vendiera esos objetos.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Cinco paneles en fila, sobre mesa de peritajes, con etiquetas de fecha escritas a máquina; zonas de interacción `panel_a`, `panel_b`, `panel_c`, `panel_d`, `panel_e` (§23.3; `trial_day2_success.ts:15-24`, `_en.ts:15-24`).
- [ ] `PINTAR` — Panel A: tarjeta de presentación de «Enciclopedias El Saber Universal, S.A.» / “Enciclopedias El Saber Universal, S.A.”, correspondiente a 12 JUL / Jul 12 (§23.3; catálogos `EvidenceCatalogCase5EsB.ts:31-36`, `EvidenceCatalogCase5EnB.ts:31-36`).
- [ ] `PINTAR` — Panel B: ficha de cartulina con seis renglones mecanografiados legibles, que contiene la chapa de la puerta, la rejilla, la ronda escrita del velador, las pastillas, el rollo de cámara y el servicio de cierre (§23.3; `trial_day3_success_sam.ts:31-43`, `_en.ts:31-43`; invariant I51).
- [ ] `PINTAR` — Panel C: frasco de vidrio ámbar con etiqueta manuscrita y molde de cera agrietado (§23.3; §24.C F11, I33).
- [ ] `PINTAR` — Panel D: boleta de empeño del Monte de Piedad con «$12,000» y «EFECTIVO» legibles (§23.3; §24.C F12).
- [ ] `PINTAR` — Panel E: telegrama mecanografiado con su acuse de recibo, relativo al reclamo de la parte de un collar; no convertirlo en un acta con fotografía (§23.3; §24.C F14, I37).
- [ ] `AUSENTE` — Flechas, círculos, halos o cualquier realce que revele la respuesta del señalamiento (§23.3; `trial_day2_success.ts:20-24`, `_en.ts:20-24`).
- [ ] `AUSENTE` — Personajes, una sala completa, fondo de delegación, huacal, cedulario, máquina de escribir o elementos de interfaz dentro de la vista detallada; sólo la mesa de peritajes y los cinco documentos forman la composición (§23.3, §23.5).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — Etiquetas de fecha de cada panel: `12 JUL` / `JUL 12`, `28 AGO` / `AUG 28`, `21 AGO` / `AUG 21`, `15 SEP` / `SEP 15`, `24 OCT` / `OCT 24`, sujeto al conflicto documentado abajo (§23.3, I34).
- [ ] `TEXTO EXACTO` — Panel A: «Enciclopedias El Saber Universal, S.A.» (§23.3).
- [ ] `TEXTO EXACTO` — Panel B: los seis renglones completos, sin resumir ni añadir un guion antes de «Cinco minutos.»: «1. Chapa puerta de carga: vencida desde marzo. Se empuja.» / «2. Rejilla sala dos: dieciocho por veinticuatro. Malla floja en la esquina inferior. Da al patio.» / «3. Velador: veinte cuarenta y cinco bodega de proa; veintiuna cero cero bodega de popa. Copiado de su libreta; cuelga de un clavo en la caseta.» / «4. Pastillas de chiquitolina: farmacia de Insurgentes, mostrador de atrás.» / «5. Rollo de cámara: se cambia los lunes. El martes queda un cuadro.» / «6. Servicio de cierre incluido. Cinco minutos.» (§23.3; §24.C F10–F11; I51).
- [ ] `TEXTO EXACTO` — Panel D: `$12,000` y `EFECTIVO` (§23.3; §24.C F12).
- [ ] `NO CONTRADECIR` — En A y B, cada línea mecanografiada cuestionada conserva al menos una `s` minúscula visible; esa `s` cae media línea y se inclina medio grado a la izquierda (§23.3, I24, I31).
- [ ] `NO CONTRADECIR` — La prosa legible debe limitarse a las cadenas exigidas por los documentos; no añadir nombres, fechas, conclusiones o rótulos explicativos no pedidos (§23.0–§23.3).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — El conjunto representa los cinco casos en las fechas canónicas 12 de julio, 21 y 28 de agosto, 15 de septiembre y 24 de octubre; el panel B/C y el orden visual están sujetos al conflicto abierto (§4.3, §13.4, §24.C F11, I34).
- [ ] `NO CONTRADECIR` — El panel D representa los $12,000 pagados por Aniceto para desempeñar el micrófono; no es dinero recibido por Berrondo (§24.C F12).
- [ ] `NO CONTRADECIR` — El panel E es el telegrama del 24 de octubre y su acuse sobre el reparto impago del collar; no es una prueba de un vendedor común (§24.C F14, I37).

### F4 Contrato en pantalla

- [ ] `PINTAR` — La delegación entrega `expediente_serie` después de que el Sargento desata cinco legajos y los ordena por fecha; el diálogo identifica julio, hacienda de agosto, museo de agosto, septiembre y octubre, y la defensa resume que los cinco papeles hablan del mismo negocio (`delegacion_c5_talks.ts:23-37`; `_en.ts:23-37`; §12.4).
- [ ] `PINTAR` — Al presentar la prueba en el Señalamiento 1, sólo `panel_b` es correcto: la ficha del museo contiene seis renglones con la chapa, la rejilla, la ronda y el servicio de cierre; A, C, D y E tienen fallos diagnósticos específicos (`trial_day2_success.ts:15-35`; `_en.ts:15-35`; §13.3–§13.4).
- [ ] `NO CONTRADECIR` — La defensa afirma que A identifica a la sociedad disuelta y B muestra una ficha operativa; el conjunto justifica inspeccionar el cedulario, pero no prueba por sí solo que Berrondo vendiera la ficha ni que haya homicidio (`trial_day2_success.ts:37-43`; `_en.ts:37-43`; §13.4; §24.C F11).
- [ ] `PINTAR` — En D3-T2, el `followUp` vuelve a presentar `expediente_serie` y lee específicamente el panel B y sus seis renglones; la imagen debe permitir localizar y leer ese panel (`trial_day3_t2.ts:68-74`; `_en.ts:68-74`; `trial_day3_success_sam.ts:31-43`; `_en.ts:31-43`).
- [ ] `NO CONTRADECIR` — El mismo activo también aparece como contexto de la pregunta sobre lo pagado al fiscal; no convertir C, D o E en una acusación autónoma contra Berrondo (`trial_day3_t2.ts:72-74`; `_en.ts:72-74`; §24.C F12–F14).
- [ ] `NO CONTRADECIR` — El icono se entrega al Acta como `expediente_serie` en el día 2 y usa `assets/examine_expediente_serie.webp` / `_en.webp` como vista detallada (`progress.ts:14-17`; `EvidenceCatalogCase5EsB.ts:31-36`; `EvidenceCatalogCase5EnB.ts:31-36`).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA / Nintendo DS) en alta definición; cel-shading de colores planos con terminador de sombra duro, dos tonos por superficie y ; contorno continuo carbón `#1A1A1A`, más grueso en la silueta exterior; anatomía expresiva/caricaturesca y colores primarios saturados (§23.0).
- [ ] Aplicar el registro del episodio: papel, madera, polvo, mesa de peritajes, documentos judiciales, sellos y tipografía mecánica; conservar materiales y defectos de máquina sin fotorealismo (§23.0, §23.3).
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto en inglés salvo la variante EN exigida y cualquier rosa/magenta en primer plano (§23.0).
- [ ] `NO CONTRADECIR` — Vista detallada de 1280 × 720, mostrada a 640 × 360; el icono separado sigue el estilo de Acta: objeto centrado, fondo transparente y contorno carbón (§23.3, §23.5; `docs/architecture/asset-pipeline.md`, sección Case 5).

### F6 Localización

- [ ] `PINTAR` — Crear ES y EN: `assets/examine_expediente_serie.webp` y `assets/examine_expediente_serie_en.webp`; la composición, paneles, fechas, defectos mecánicos y marcas físicas permanecen iguales (§23.3; catálogos ES/EN).
- [ ] `TEXTO EXACTO` — La variante EN traduce sólo el texto legible: «JUL 12», «AUG 28», «AUG 21», «SEP 15», «OCT 24» según la resolución del conflicto; conserva la `s` minúscula caída en el material traducido cuando aparezca en documentos cuestionados (§23.3, I24, I31).
- [ ] `NO CONTRADECIR` — No compartir la vista detallada entre idiomas: contiene fechas y prosa que sostienen argumentos. El icono de Acta puede compartir composición porque su identidad no depende de texto (§23.3, regla de localización; I30–I31).

## Consistencia (regenerar juntos)

- `plate_cinco_papeles` — comparte la cronología de los cinco casos y el significado de contexto de A–E. Regenerar juntos; este activo no es fuente de verdad del otro.
- `examine_esquina_tarjeta` — comparte la tarjeta de presentación del Caso 0 y el defecto de la `s` caída. Regenerar juntos; este activo no es fuente de verdad del otro.
- `ficha_domicilio` — comparte la lógica de tarjetas del cedulario, mecanografía y la `s` caída. Regenerar juntos; este activo no es fuente de verdad del otro.
- `nota_mecanografiada` — comparte el defecto tipográfico y la cinta bicolor de los documentos mecanografiados. Regenerar juntos; este activo no es fuente de verdad del otro.
- `examine_maquina` — comparte la causa material del defecto: barra de la `s` minúscula torcida hacia la izquierda. Regenerar juntos; este activo no es fuente de verdad del otro.
- `plate_cuatro_renglones` — comparte la explicación visual de la `s` caída y su posición vertical. Regenerar juntos; este activo no es fuente de verdad del otro.
- `expediente_serie` icono ↔ `examine_expediente_serie` / `_en` — comparten la identidad del mismo evidence id, pero el icono es un recorte centrado y la vista detallada es el tablero de cinco paneles. Regenerar juntos; ninguno es fuente de verdad del otro.

## Conflictos abiertos

- **Asignación de paneles B/C:** §23.3 e I34 fijan el tablero como A=12 JUL, B=28 AGO (ficha del museo), C=21 AGO (frasco y molde), D=15 SEP y E=24 OCT; §13.4 y los éxitos de D3-T2 también describen B como la ficha del museo del 28 de agosto. Sin embargo, `EvidenceCatalogCase5EsB.ts:31-36` y `EvidenceCatalogCase5EnB.ts:31-36` listan B=21 AGO/AUG 21 y C=28 AGO/AUG 28. La hoja no resuelve qué vista debe corregirse.
- **Orden narrativo frente a orden visual:** `delegacion_c5_talks.ts:27-32` y `_en.ts:27-32` narran los legajos por fecha como julio, hacienda del 21 de agosto, museo del 28 de agosto, septiembre y octubre, mientras I34 conserva B=28 AGO y C=21 AGO para la identidad probatoria de los paneles. No reordenar paneles desde esta hoja.
- **Descripción de catálogo del panel E:** los catálogos lo resumen como «acta con fotografía» / “typed minutes with a photograph”, pero §23.3, §24.C F14 e I37 exigen un telegrama del 24 de octubre con acuse sobre el reparto impago de un collar. Mantener el conflicto visible y no añadir una fotografía ni un acta.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen. Por protocolo, no se confirma ningún defecto visual del archivo actual.
- Hechos de aceptación extraídos de la fuente: deben comprobarse después contra las imágenes generadas, especialmente panel B completo, la `s` caída en A/B, la ausencia de realces y la identidad del panel E (§23.3; I24, I31, I37, I51).
