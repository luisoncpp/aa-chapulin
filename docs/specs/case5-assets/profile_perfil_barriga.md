# profile_perfil_barriga — hoja de hechos

Clase: `profile`. Espec: §6.1, §23.0, §23.2 y §23.5. Guion directo ES/EN: `src/case/case5/Private/vecindad.ts:16-29`, `vecindad_en.ts:16-29`; catálogos ES/EN: `src/state/Private/ProfileCatalogCase5Es.ts:91-97`, `ProfileCatalogCase5En.ts:91-97`.

## Mapa semántico y alcance

Señor Barriga, casero de Don Ramón y testigo del día 2. La ficha se entrega al final de la introducción de la investigación en la vecindad, cuando explica que recibió un sobre amarillo con diecisiete meses de renta; no tiene actualizaciones de catálogo en §6.1. El bitmap debe ser un busto recortado de `barriga_idle`, no una escena del despacho, un retrato del recibo ni una pose nueva.

Identidad narrativa compartida: lleva diecisiete años cobrándole a Don Ramón; recibió diecisiete mensualidades en efectivo el 29 de noviembre y expidió el recibo. Es honrado, equivocado sobre quién pagó y quiere seguir cobrando; esas relaciones viven en el catálogo y el diálogo, no como texto ni utilería dentro del icono (§6.1; `vecindad.ts:25-29`; `vecindad_en.ts:25-29`).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Busto de Señor Barriga recortado de la pose reutilizada `barriga_idle`; conservar exactamente la identidad, proporciones, ropa, rostro, expresión base y anclaje de esa pose. No inventar una pose de perfil independiente (§23.2; §23.5).
- [ ] `PINTAR` — Formato de icono de persona de 256 × 256: busto sobre un color plano distinto por persona, sin marco y con recorte limpio (§23.5).
- [ ] `NO CONTRADECIR` — El retrato debe sostener a un casero adulto reconocible como el mismo Barriga que aparece en la investigación, el estrado y el epílogo; no convertirlo en Don Ramón, Berrondo ni otro personaje (`vecindad.ts:16-29`; `trial_day2_t1.ts:19-25`; `climax_epilogue.ts:12-23`).
- [ ] `AUSENTE` — Despacho, puerta, escalón, sobre amarillo, billetes, recibo, nota mecanografiada, caja fuerte, patio, vecinas, juzgado y cualquier otro fondo u objeto narrativo. El icono representa sólo a la persona (§23.5; `vecindad_hotspots.ts:28-33`).
- [ ] `AUSENTE` — `barriga_vendado` y cualquier silla de ruedas, vendaje o estado del Caso 3. Caso 5 usa `barriga_idle` y su familia sana `barriga_sorpresa / barriga_reclamo / barriga_confundido / barriga_aliviado`; la ficha deriva sólo de `barriga_idle` (§23.2).

### F2 Texto en imagen

- [ ] `AUSENTE` — No imprimir nombre, cargo, fechas, cifras, recibo, domicilio, etiquetas, marco ni texto localizado. El Acta muestra esos datos desde el catálogo, no desde el bitmap (§23.5; `ProfileCatalogCase5Es.ts:91-97`; `ProfileCatalogCase5En.ts:91-97`).
- [ ] `NO CONTRADECIR` — El icono puede acompañar la descripción de diecisiete años, diecisiete meses, el 29 de noviembre y el recibo, pero ninguna de esas palabras o cifras debe aparecer en la imagen (§6.1; `vecindad.ts:25-29`).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La identidad de la ficha es la del casero que recibió diecisiete meses en efectivo el 29 de noviembre; no sugerir que fue quien dejó el sobre, que identificó al pagador o que pagó la renta (§6.1; `vecindad_talks.ts:24-30`; `trial_day2_t1.ts:1760-1764`).
- [ ] `NO CONTRADECIR` — Las nueve de la mañana, 1954, cuatro mil doscientos cincuenta pesos y el lunes de entrega del recibo son datos de diálogo y prueba, no accesorios ni texto obligatorio del retrato (`vecindad_talks.ts:13-28`; `trial_day2_t1.ts:1771-1786`).
- [ ] `NO CONTRADECIR` — La ficha no debe anticipar la rectificación del epílogo: allí Barriga entrega los billetes al juzgado, conserva copia y puede retirar el abono; el retrato sigue siendo el mismo perfil del testigo (`climax_epilogue.ts:14-18`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — La escena D2 de la vecindad usa `barriga_idle` como `idlePose` y añade `perfil_barriga` al concluir la introducción, después de que Barriga cuenta que recibió el sobre y se quedó quieto por el susto (`vecindad.ts:16-29`; variante EN `vecindad_en.ts:16-29`).
- [ ] `NO CONTRADECIR` — La tarjeta queda disponible como perfil del Acta de Personajes, con rol de casero, mientras las conversaciones posteriores desarrollan el sobre, el dinero, el recibo y la nota (`ProfileCatalogCase5Es.ts:91-97`; `vecindad_talks.ts:1-46`; variante EN `vecindad_talks_en.ts:1-46`).
- [ ] `NO CONTRADECIR` — Durante el día 2 Barriga alterna `barriga_idle`, `barriga_sorpresa`, `barriga_reclamo`, `barriga_confundido` y `barriga_aliviado`; esas poses de diálogo no cambian la imagen del perfil ni autorizan una variante localizada del icono (`trial_day2_t1.ts:19-99`; `trial_day2_t1_en.ts:19-99`).
- [ ] `NO CONTRADECIR` — La tarjeta de persona no ofrece botón de presentar durante un contrainterrogatorio; el perfil sirve para lectura e identificación dentro del Acta, no para presentar a Barriga antes de una ranura autorizada (§6; §6.2; `docs/flows/character-record-flow.md`).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA / Nintendo DS) en alta definición; ; contorno oscuro nítido y continuo en carbón `#1A1A1A`, más grueso en la silueta exterior que en los detalles internos; anatomía facial expresiva y exagerada, al borde de la caricatura; colores primarios saturados; televisión mexicana de los años setenta, universo Chespirito / El Chapulín Colorado, melodrama de tribunal tratado en serio por el sistema y absurdo en los personajes, con registro de papel, madera, polvo, archivo judicial, madera barnizada, latón envejecido y luz de tungsteno; prohibidos fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, estética de cómic americano de superhéroes, marcas de agua, texto en inglés salvo variantes EN exigidas y cualquier tono rosa o magenta en primer plano por el pipeline sobre `#FF00FF` (§23.0).
- [ ] `PINTAR` — Fondo plano individual, nunca magenta; sin marco, sin interfaz del Acta y sin elementos de la vecindad (§23.5).
- [ ] `AUSENTE` — Flechas, círculos, realces didácticos, etiquetas de evidencia, recibos ampliados y cualquier composición de comparación (§23.0; §23.5).

### F6 Localización

- [ ] `NO CONTRADECIR` — ES y EN usan exactamente `assets/profile_perfil_barriga.webp`; no crear `profile_perfil_barriga_en.webp` (`ProfileCatalogCase5Es.ts:95`; `ProfileCatalogCase5En.ts:95`).
- [ ] `NO CONTRADECIR` — Composición, recorte, fondo plano, identidad, expresión base y anclaje permanecen idénticos entre idiomas; sólo se localizan nombre, rol y descripción en la interfaz del catálogo (`ProfileCatalogCase5Es.ts:91-97`; `ProfileCatalogCase5En.ts:91-97`).
- [ ] `TEXTO EXACTO` — La interfaz ES usa `name: Señor Barriga`, `role: Casero` y `desc: Casero del acusado. Diecisiete años cobrándole. Recibió diecisiete meses en efectivo el 29 de noviembre y expidió recibo.` (`ProfileCatalogCase5Es.ts:91-97`).
- [ ] `TEXTO EXACTO` — La interfaz EN usa `name: Señor Barriga`, `role: Landlord` y `desc: The defendant’s landlord. Seventeen years collecting from him. Received seventeen months in cash on November 29 and issued a receipt.` (`ProfileCatalogCase5En.ts:91-97`).
- [ ] `AUSENTE` — La regla de la ese caída tipográfica de §23.3 no aplica a este icono sin texto; no añadir letras o traducciones dentro del bitmap (§23.3; §23.5).

## Consistencia (regenerar juntos)

- `barriga_idle` — fuente visual obligatoria del recorte; comparte la identidad y el anclaje del personaje. Regenerar/recortar juntos; este activo no es fuente de verdad del otro (§23.2; §23.5).
- `barriga_sorpresa`, `barriga_reclamo`, `barriga_confundido` y `barriga_aliviado` — comparten identidad sana, ropa, rostro, maletín y línea inferior con `barriga_idle` en el testimonio, la investigación y el epílogo. Regenerar juntos; este activo no es fuente de verdad de los otros (§23.2; `vecindad.ts:19-29`; `trial_day2_t1.ts:25-99`).
- `profile_perfil_donramon`, `profile_perfil_chapulin`, `profile_perfil_casimiro` y las demás fichas de §6.1 — comparten formato de Acta: 256 × 256, busto, color plano individual, sin texto ni marco. Regenerar juntos; estos activos no son fuente de verdad de éste (§6.1; §23.5).
- `bg_despacho` — comparte el momento y la escena de la vecindad, pero el perfil no debe importar el despacho ni sus muebles. Regenerar juntos para continuidad de identidad/escena; este activo no es fuente de verdad del fondo (§12.1; `vecindad.ts:3-18`).
- `recibo_renta`, `nota_mecanografiada` y `acuse_notificacion` — comparten el hilo documental del pago, pero ninguno de esos objetos debe aparecer en el busto. Regenerar juntos para continuidad semántica; estos activos no son fuente de verdad de éste (§23.5; §13.2; `vecindad_hotspots.ts:28-33`).
- `profile_perfil_barriga` ES↔EN — gemelos de idioma del mismo archivo compartido; sólo cambia el catálogo visible. Regenerar juntos; este activo no es fuente de verdad del otro (§23.5; `ProfileCatalogCase5Es.ts:95`; `ProfileCatalogCase5En.ts:95`).

## Conflictos abiertos

- §6.1 fija el nombre de la ficha como «Señor Barriga» y el catálogo conserva ese nombre, mientras el estrado lo presenta por su nombre completo, «Señor Zenón Barriga y Pesado». Es una diferencia entre etiqueta de Acta y presentación formal, no una razón para imprimir texto en el icono (§6.1; `ProfileCatalogCase5Es.ts:92-94`; `trial_day2_success.ts:164-166`; variante EN `trial_day2_success_en.ts:164-166`).
- El catálogo y §6.1 resumen que Barriga «expidió recibo», mientras el guion precisa que lo escribió el 29 de noviembre, lo entregó a Don Ramón el lunes y conservó una copia; el epílogo añade una rectificación posterior. Es flujo documental de la historia, no un cambio de identidad visual (`ProfileCatalogCase5Es.ts:94-97`; `vecindad_talks.ts:24-30`; `climax_epilogue.ts:16-18`).
- La descripción de §6.1 dice que recibió el efectivo y expidió recibo; el testimonio dice «yo no vi a nadie» y supone que tuvo que ser Don Ramón. La ficha debe sostener a un testigo honesto pero equivocado y no representar al pagador ni una certeza visual sobre Berrondo (`docs/specs/case-5-el-tomo-trece.md:346`; `trial_day2_t1.ts:1760-1764`; `trial_day2_t1.ts:1822-1829`).

## Hallazgos de auditoría 2026-09-19

- No realizada por protocolo: no se abrió ni inspeccionó ninguna imagen. Por tanto, no se confirma ningún defecto visual del archivo actual.
- Hoja construida únicamente desde §6.1, §23.0, §23.2, §23.5, el Libro de hechos y las referencias ES/EN citadas. No se ejecutaron tests, lint, auditorías, procesamiento ni verificación de assets.
