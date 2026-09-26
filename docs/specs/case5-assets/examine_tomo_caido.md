# examine_tomo_caido — hoja de hechos

Clase: `examine`. Espec: §23.0, §23.3, §5.1 y §24.D. Guion: investigación D1 pasillo 7 (`hotspot_tomo`), D3-T3 `followUp`, y catálogo ES/EN. La hoja cubre `examine_tomo_caido.webp` y `examine_tomo_caido_en.webp`.

## Mapa semántico y alcance

Es la vista ampliada del arma física hallada en el pasillo 7 el 4 de diciembre: el Tomo XI de *El Saber Universal*, edición económica, encuadernado en tela. El objeto fue encontrado a un metro del cuerpo, con sangre/mancha parda en el lomo y peso de 2.8 kg; la vista ampliada añade el sello de donación que después se lee en el juicio. No es el ejemplar de lujo de media piel con cantoneras que Berrondo extrae del huacal 9 y coloca en la ranura 11.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Composición de dos vistas: a la izquierda, el tomo cerrado de canto sobre una mesa de peritajes; a la derecha, la guarda abierta del mismo tomo (§23.3, `docs/specs/case-5-el-tomo-trece.md:4056`; `docs/specs/case-5-el-tomo-trece.md:789`).
- [ ] `PINTAR` — El volumen de la vista izquierda es la edición económica de *El Saber Universal*, Tomo XI, encuadernado en tela verde oliva; debe conservar la identidad de libro pesado usado como arma (§5.1, `docs/specs/case-5-el-tomo-trece.md:273`; `src/case/case5/Private/archivo_pasillo7_hotspots.ts:30-34`).
- [ ] `PINTAR` — Tejuelo dorado legible con `XI` en el lomo (§23.3, `docs/specs/case-5-el-tomo-trece.md:4056`).
- [ ] `PINTAR` — Mancha parda/sangre localizada en el lomo, no en el canto ni como una herida distinta (§23.3, `docs/specs/case-5-el-tomo-trece.md:4056`; `docs/specs/case-5-el-tomo-trece.md:415`).
- [ ] `PINTAR` — Regla testigo junto al tomo en la vista pericial izquierda (§23.3, `docs/specs/case-5-el-tomo-trece.md:4056`; `docs/specs/case-5-el-tomo-trece.md:789`).
- [ ] `PINTAR` — Guarda abierta en la vista derecha, con sello ovalado de tinta violeta parcialmente corrido; el sello es un objeto observado, no una interpretación gráfica (§23.3, `docs/specs/case-5-el-tomo-trece.md:4056`; `docs/specs/case-5-el-tomo-trece.md:789`).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — El tejuelo debe decir `XI` (§23.3, `docs/specs/case-5-el-tomo-trece.md:4056`).
- [ ] `TEXTO EXACTO` — El sello debe poder leerse con esfuerzo como `DONACIÓN DEL SÍNDICO DE LA QUIEBRA 114/1971 · 14-X-1971` (§23.3, `docs/specs/case-5-el-tomo-trece.md:4056`; `docs/specs/case-5-el-tomo-trece.md:789`). La tinta puede estar corrida, pero no debe sustituirse por texto inventado ni por una explicación del argumento.
- [ ] `AUSENTE` — No añadir flechas, círculos, realces, etiquetas explicativas ni texto ajeno al tejuelo y al sello; el pie de lámina describe el sello sin interpretarlo (`docs/specs/case-5-el-tomo-trece.md:789`; contrato general §23.0).

### F3 Cifras, fechas y pesos

- [ ] `NO CONTRADECIR` — El tomo caído pesa 2.8 kg; la cifra pertenece al diálogo y no obliga a imprimir un peso en la lámina (`src/case/case5/Private/archivo_pasillo7_hotspots.ts:33`; §24.D I28, `docs/specs/case-5-el-tomo-trece.md:4190`).
- [ ] `NO CONTRADECIR` — El sello fija `114/1971` y `14-X-1971`; la donación ocurrió once años antes del crimen, pero la lámina no debe convertir la fecha en un sello distinto (§23.3; §24.D I4, `docs/specs/case-5-el-tomo-trece.md:4190`).
- [ ] `NO CONTRADECIR` — Este ejemplar es el arma de tela y no el ejemplar de lujo de 3.4 kg, media piel y cantoneras de latón que aparece después en el clímax (§24.D I28, `docs/specs/case-5-el-tomo-trece.md:4190`; `docs/specs/case-5-el-tomo-trece.md:3416-3418`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — Durante la investigación, el narrador identifica el tomo a un metro de la silueta y el Chapulín nombra `El Saber Universal. Tomo XI. Ferrocarriles - Guatemala.`; la imagen no puede mostrar otro volumen ni otra serie (`src/case/case5/Private/archivo_pasillo7_hotspots.ts:30-31`).
- [ ] `PINTAR` — La investigación afirma que tiene sangre en el lomo; el lomo debe ser el lugar visible de la mancha (`src/case/case5/Private/archivo_pasillo7_hotspots.ts:32`).
- [ ] `NO CONTRADECIR` — El Sargento identifica 2.8 kg y dice que es el arma, pero esa cifra y esa conclusión son diálogo, no texto que deba aparecer impreso (`src/case/case5/Private/archivo_pasillo7_hotspots.ts:33`).
- [ ] `PINTAR` — El sello morado está medio borrado y tiene letra pequeña; la imagen debe permitir que el Acta lo amplíe, sin presentarlo como totalmente nítido (`src/case/case5/Private/archivo_pasillo7_hotspots.ts:34-35`).
- [ ] `NO CONTRADECIR` — En D3-T3, presentar esta prueba responde de dónde salió el libro: el juez ordena leer el sello y la defensa lee la donación del síndico de la quiebra; la lámina debe contener la respuesta visible sin imprimir la conclusión «Berrondo lo donó» (`src/case/case5/Private/trial_day3_t3.ts:126-128`; `src/case/case5/Private/trial_day3_success_berrondo.ts:65-73`; `docs/specs/case-5-el-tomo-trece.md:2840-2854`).
- [ ] `NO CONTRADECIR` — La afirmación posterior distingue esta edición económica de la edición de lujo: no añadir cantoneras ni media piel a la vista del tomo caído (`src/case/case5/Private/trial_day3_success_berrondo.ts:65`; `src/case/case5/Private/climax_stage3_success.ts:16-18`).

### F5 Estilo

- [ ] Contrato §23.0 completo pegado en el prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* GBA/DS en alta definición; ; contorno carbón `#1A1A1A` nítido y continuo, más grueso en la silueta; anatomía no aplica al objeto; colores primarios saturados; tema de televisión mexicana de los setenta/Chespirito, con papel, madera, polvo, archivo judicial, madera barnizada, latón envejecido y luz de tungsteno; prohibidos fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto en inglés salvo la variante EN exigida, y cualquier rosa o magenta en primer plano (§23.0).
- [ ] `AUSENTE` — No usar fotorealismo, degradado suave, flechas, círculos, realces de color ni magenta/rosa en el primer plano (§23.0; §23.3).

### F6 Localización

- [ ] `examine_tomo_caido_en.webp` existe como gemelo localizado: misma composición, escala, materiales, mancha, regla y sello; sólo cambia el texto legible exigido por la variante inglesa (§23.3, `docs/specs/case-5-el-tomo-trece.md:4064`).
- [ ] `TEXTO EXACTO` — La variante EN debe conservar el argumento y traducir el sello de forma coherente con el catálogo inglés: `DONATION FROM THE SYNDIC OF BANKRUPTCY 114/1971 · 14-X-1971` (la composición, fecha y marcas físicas no cambian; el catálogo sólo traduce la descripción, `src/state/Private/EvidenceCatalogCase5EnA.ts:41-47`; §23.3).
- [ ] `NO CONTRADECIR` — No aplicar la regla de la `s` caída a este sello: §23.3 limita esa regla a las líneas traducidas de las láminas cuestionadas, y el sello del tomo se localiza por texto argumental propio, no por ese defecto tipográfico (§23.3, `docs/specs/case-5-el-tomo-trece.md:4068`).

## Consistencia (regenerar juntos)

- `examine_tomo_caido` ES ↔ `examine_tomo_caido_en` — gemelos de idioma: comparten composición, tomo, tela, tejuelo, mancha, regla, sello, fechas y marcas físicas; sólo cambia el texto legible. Regenerar juntos; este activo no es fuente de verdad del otro (§23.3).
- `tomo_caido` — comparte el icono del mismo volumen y su identidad de arma. Regenerar juntos; el icono no es fuente de verdad de esta lámina (§23.3, §23.5).
- `bg_archivo_pasillo7` — comparte el tomo de tela verde caído, su lomo hacia arriba, la mancha y la relación espacial con el cuerpo; el fondo fija la escena completa, no el detalle del sello. Regenerar juntos; este activo no es fuente de verdad del otro (§23.1, `docs/specs/case-5-el-tomo-trece.md:3987`).
- `plate_foto_pericial` — comparte el tomo a un metro del cuerpo, cerrado, con lomo hacia arriba, mancha y cartelito de perito; esta lámina es el detalle de la guarda y del sello. Regenerar juntos; este activo no es fuente de verdad del otro (`docs/specs/case5-assets/plate_foto_pericial.md:17,62`).
- `examine_estante_consulta` — comparte el Tomo XI como miembro de la colección y la distinción entre el tomo caído de tela y el ejemplar de lujo que termina en la ranura 11; no trasladar a esta lámina la media piel ni las cantoneras. Regenerar juntos; este activo no es fuente de verdad del otro (§23.3, `docs/specs/case-5-el-tomo-trece.md:4057`).
- `bg_archivo_pasillo7_d4` — comparte la geometría y el objeto del pasillo antes del crimen, pero no el estado narrativo: ese fondo está sin cadáver, silueta ni tomo caído. Regenerar juntos para conservar el diseño del tomo, sin usarlo como fuente de verdad (§10.1; `docs/specs/case5-assets/new-assets.md:9-14`).
- `plate_tomo_trece` — comparte la colección de 24 ranuras y la ausencia histórica del tomo XIII; no es fuente de verdad del ejemplar caído ni debe imponer una vista de lomos o un texto distinto (§23.4; §24.C F7/I3).

## Conflictos abiertos

- El diálogo de investigación llama al sello «de la primera hoja» y el Sargento dice que está en «la primera hoja» (`src/case/case5/Private/archivo_pasillo7_hotspots.ts:34`; `docs/specs/case-5-el-tomo-trece.md:782`), mientras el contrato visual de §23.3 y la descripción de `detailedView` lo ubican en la **guarda** (`docs/specs/case-5-el-tomo-trece.md:4056,789`). No resolver aquí: conservar la guarda exigida por §23.3 y documentar la discrepancia para el spec/guion.
- El sello tiene un texto legible «con esfuerzo» en §23.3, pero el diálogo lo describe como medio borrado y de letra pequeña (`docs/specs/case-5-el-tomo-trece.md:789`; `src/case/case5/Private/archivo_pasillo7_hotspots.ts:34-35`). Es una tensión de legibilidad, no permiso para cambiar la cadena ni para omitirla.

## Hallazgos de auditoría 2026-09-19

- ~~No se inspeccionó ninguna imagen por protocolo. Por tanto, no se confirma ningún defecto visual de la imagen actual; esta hoja registra únicamente hechos verificables derivados del spec, catálogo y guion.~~ (Sustituido por la auditoría per-crop del 2026-09-19 sobre `examine_tomo_caido.png` / `examine_tomo_caido_en.png`; traza conservada.)

**Veredicto: NO CUMPLE.** El gemelo ES cumple en contenido (F1) y texto exacto (F2), con desvíos menores de orientación/mancha y un elemento no pedido. El gemelo EN no cumple: viola F2 (rótulos ajenos e interpretativos), F6 (composición distinta del gemelo) y F4 (sello nítido y rectangular). Eje contenido: parcial; eje exclusiones: falla en EN; eje estilo: falla en EN.

### Cumple (defendidos por recorte, ambos gemelos salvo nota)

- ES — Composición de dos vistas, tomo cerrado a la izquierda y guarda abierta a la derecha (F1 ✓, §23.3).
- ES/EN — Tela verde oliva, libro pesado, identidad de arma; sin media piel ni cantoneras (F1/F3 ✓, §5.1).
- ES — Tejuelo `XI` exacto y legible en el lomo (F1/F2 ✓, §23.3).
- ES — Regla testigo junto al tomo en la vista pericial (F1 ✓, §23.3).
- ES — Sello ovalado violeta, texto exacto `DONACIÓN DEL SÍNDICO DE LA QUIEBRA 114/1971 · 14-X-1971`, tinta parcialmente corrida, no totalmente nítido (F1/F2/F4 ✓, §23.3; `archivo_pasillo7_hotspots.ts:34-35`).
- ES/EN — Sin peso 2.8 kg impreso, sin fecha alternativa, sin conclusión «Berrondo lo donó» impresa (F3 ✓).
- ES — Sin flechas, círculos ni realces; estilo cel-shading cálido conforme a §23.0 (F5 ✓ en ES).

### Defectos confirmados

- **MAYOR · AUSENTE** — EN: rótulos ajenos e interpretativos en toda la lámina (`$23.0 FORENSIC PLATE`, `EVIDENCE ITEM: A-0710-11`, `CASE: AA-2A-0710`, `PLATE: FP-1280-0720`, `LEGEND: STAIN: BROWN (SUSPECTED BIOLOGICAL)`, `NOTES: …DOCUMENT PRESERVED AS RECEIVED`). Viola la exclusión F2 y el contrato «describir sin interpretar» (`docs/specs/case5-assets/examine_tomo_caido.md:24,38`; §23.0).
- **MAYOR · DRIFT** — EN: composición distinta del gemelo ES (fondo gris pericial sin mesa de madera, sello rectangular vs ovalado, sin cinta, encuadre y escala diferentes). Rompe el gemelo de idioma F6 (`docs/specs/case5-assets/examine_tomo_caido.md:48,54`; §23.3).
- **MEDIO · CONTRADICE** — EN: sello rectangular y perfectamente nítido; el spec exige sello ovalado, medio borrado y de letra pequeña (F1/F4; `archivo_pasillo7_hotspots.ts:34-35`; §23.3).
- **MEDIO · CONTRADICE** — EN: sello dice `DONATION OF SYNDIC OF BANKRUPTCY` en lugar del exacto `DONATION FROM THE SYNDIC OF BANKRUPTCY 114/1971 · 14-X-1971` (F2/F6, `docs/specs/case5-assets/examine_tomo_caido.md:49`).
- **MEDIO · CONTRADICE** — ES/EN: la mancha parda está sobre la tapa/canto junto al lomo, no sobre el lomo; el diálogo exige el lomo como lugar visible de la sangre (F1/F4, `archivo_pasillo7_hotspots.ts:32`; `docs/specs/case5-assets/examine_tomo_caido.md:16,35`). En EN además se extiende sobre la regla.
- **MEDIO · DRIFT** — ES/EN: tomo apoyado sobre la tapa con el lomo hacia el frente, no «de canto» ni con el lomo hacia arriba como fija el conjunto con `bg_archivo_pasillo7` / `plate_foto_pericial` (`docs/specs/case5-assets/examine_tomo_caido.md:13,56-57`; §23.1).
- **MEDIO · CONTRADICE** — EN: tejuelo dice `VOLUME XI` en vez del exacto `XI` (F2, `docs/specs/case5-assets/examine_tomo_caido.md:22`).
- **MENOR · AUSENTE (exceso)** — ES: cinta/lazo granate como separador no pedido en la guarda, en primer plano y con tono rojizo cercano al magenta prohibido (F1/F5; §23.0).
- **MENOR · DRIFT (estilo)** — EN: fondo gris frío y plano, paleta desaturada; desvía del literal §23.0 (colores saturados, madera/latón, luz de tungsteno). Aceptación del revisor pendiente.

### Correcciones de auditoría

- 2026-09-19: sección previa «no se inspeccionó ninguna imagen» retirada tras auditoría per-crop de ambos gemelos (ver traza tachada arriba).
- Verificado en EN que NO se aplicó la regla de la `s` caída al sello — correcto; el defecto del sello EN es de cadena (`OF` vs `FROM THE`) y forma, no de esa regla (`docs/specs/case5-assets/examine_tomo_caido.md:50`).

### Recomendación (orden del conjunto de consistencia)

1. Regenerar EN como gemelo literal de ES: misma composición (mesa de madera, encuadre, escala, cinta si se decide conservar), sello ovalado violeta corrido y medio borrado; único cambio permitido: texto del sello `DONATION FROM THE SYNDIC OF BANKRUPTCY 114/1971 · 14-X-1971` y tejuelo `XI`. Eliminar todo rótulo, leyenda, nota, número de pieza y fondo gris.
2. Reposicionar el tomo de canto / lomo hacia arriba en AMBOS gemelos y mover la mancha parda al lomo (consistencia con `bg_archivo_pasillo7`, `plate_foto_pericial`).
3. ES: retirar la cinta granate de la guarda (o decisión del revisor de conservarla, dejando traza) y confirmar que ningún tono magenta quede en primer plano.
4. Verificar tras regeneración que el tejuelo ES/EN diga exactamente `XI` y que el sello EN conserve `114/1971` y `14-X-1971` sin fechas alternativas.

## Hallazgos de auditoría 2026-09-19 (regeneración Lote A)

Auditoría de `tools/raw/case5/examine_tomo_caido.jpg` y `examine_tomo_caido_en.jpg` (1280×720), recortes de lomo, guarda y sello. ES en tres intentos; EN como gemelo de ES. **Veredicto: cumple** (contenido, texto exacto, exclusiones, gemelo F6).

### Cumple

- ✓ Dos vistas: tomo cerrado de canto a la izquierda (lomo al cámara), guarda abierta a la derecha (F1).
- ✓ Tela verde oliva, tejuelo exacto `XI`, mancha parda **en el lomo** (F1/F2/F4; recorte `examine_tomo_caido_spine`).
- ✓ Regla testigo. Sin cinta granate. Sin UI EXAMINE / CASE 5 / leyendas (F1/F2).
- ✓ ES sello ovalado violeta: `DONACIÓN DEL SÍNDICO DE LA QUIEBRA 114/1971 · 14-X-1971` (F2).
- ✓ EN gemelo de composición; sello exacto `DONATION FROM THE SYNDIC OF BANKRUPTCY 114/1971 · 14-X-1971`; tejuelo `XI`; sin rótulos forenses (F2/F6).
- ✓ Sin media piel ni cantoneras (F3).

### Defectos confirmados

- [x] ~~MAYOR EN rótulos FORENSIC PLATE / composición distinta~~ **[x] RETIRADO POR REGENERACIÓN (2026-09-19 Lote A).**
- [x] ~~MEDIO mancha en la tapa y tomo no de canto~~ **[x] RETIRADO POR REGENERACIÓN:** mancha y `XI` en el lomo de canto.
- **MENOR · CONTRADICE (F4)** — ES/EN: el sello es legible con claridad y la tinta no se lee corrida; el diálogo lo describe medio borrado y de letra pequeña (`src/case/case5/Private/archivo_pasillo7_hotspots.ts:34-35`). La cadena es exacta y no se imprime conclusión; no bloquea.
- **MENOR · CONTRADICE (F1/F4, matiz)** — ES/EN: la mancha parda se concentra en el lomo (✓), pero salpica sobre el borde de la tapa junto al tejuelo; el spec pide localizada en el lomo, «no en el canto ni como una herida distinta». Lectura dominante sigue siendo el lomo; no bloquea.

### Re-verificación per-crop (2026-09-19, auditoría Lote A) — re-auditoría del RAW final 15:29

Re-auditoría sobre la versión RAW definitiva (LastWriteTime 19/09 15:29 ambos gemelos, 1280×720) con recortes ampliados de lomo/tejuelo/mancha y de ambos sellos. La prueba de nombrar confirma: «tomo de tela verde oliva de pie con el lomo al cámara, tejuelo dorado XI y mancha parda en el lomo»; «sello ovalado violeta de donación». Textos exactos verificados carácter a carácter: ES `DONACIÓN DEL SÍNDICO DE LA QUIEBRA 114/1971 · 14-X-1971`; EN `DONATION FROM THE SYNDIC OF BANKRUPTCY 114/1971 · 14-X-1971` (sin regla de la `s` caída). Sin rótulos forenses, sin flechas/realces, sin magenta, sin cantoneras ni media piel. Composición gemela idéntica (misma mesa de madera, encuadre, regla continua, sello ovalado). Se mantiene el veredicto «cumple» y los dos defectos MENOR (tinta del sello más nítida de lo descrito; salpicadura de la mancha saliendo del lomo hacia el borde de la tapa junto al tejuelo). No se convierte ningún ✓ en defecto.

Recortes ampliados de ambos RAW (lomo/tejuelo/mancha, sello ES, sello EN, regla, zonas de exclusión) confirman el veredicto «cumple»: composición de dos vistas idéntica entre gemelos; tejuelo dorado exacto `XI` en el lomo de canto de pie; regla testigo única pasando por detrás del tomo (numeración continua 4→8, no son dos reglas); sello ovalado violeta con cadena exacta en cada idioma, sin regla de la `s` caída en EN; sin rótulos, flechas, realces, magenta en primer plano, ni cantoneras/media piel. Los ✓ anteriores se defienden por recorte; no se convierte ninguno en defecto MAYOR/MEDIO.

### Recomendación

Ninguna bloqueante. Opcional: ensuciar un poco más la tinta del sello (medio borrado) y reducir la salpicadura sobre la tapa.
