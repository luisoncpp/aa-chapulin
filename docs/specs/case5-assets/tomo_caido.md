# tomo_caido — hoja de hechos

Clase: `icon` / prueba del Acta. Espec: §23.0, §23.3, §5.1 y §24.C–§24.D. Guion: investigación D1 pasillo 7 (`hotspot_tomo`), catálogo ES/EN, y D3-T3 `followUp`. La hoja cubre la identidad del icono de Court Record y su `detailedView` (`examine_tomo_caido.webp` / `_en.webp`).

## Mapa semántico y alcance

Es la prueba física que el jugador recoge en el pasillo 7: el Tomo XI de *El Saber Universal*, edición económica, encuadernado en tela verde oliva, hallado a un metro del cuerpo y usado como arma. El icono debe representar ese mismo volumen que amplía la lámina de examen. El objeto tiene sangre/mancha parda en el lomo, pesa 2.8 kg según el diálogo y conserva en la guarda un sello ovalado de tinta violeta. No es el ejemplar de lujo de media piel, cantoneras de latón y 3.4 kg que Berrondo extrae del huacal 9 y coloca después en la ranura 11.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — El icono representa un tomo grueso de *El Saber Universal*, Tomo XI, edición económica, encuadernado en tela verde oliva; debe ser reconocible como el libro encontrado y como el arma (`docs/specs/case-5-el-tomo-trece.md:273`; `src/case/case5/Private/archivo_pasillo7_hotspots.ts:30-33`).
- [ ] `PINTAR` — La identidad compartida del volumen incluye sangre/mancha parda en el lomo, no en el canto (`src/state/Private/EvidenceCatalogCase5EsA.ts:41-46`; `docs/specs/case-5-el-tomo-trece.md:415`).
- [ ] `NO CONTRADECIR` — El hallazgo fue a un metro del cuerpo y el objeto quedó bajo resguardo como arma; el icono puede ser un recorte de objeto y no debe intentar pintar el pasillo, el cadáver o el cartel pericial completos (`src/case/case5/Private/archivo_pasillo7_hotspots.ts:30-33`; `docs/specs/case-5-el-tomo-trece.md:273`).
- [ ] `NO CONTRADECIR` — La guarda contiene un sello ovalado de tinta violeta parcialmente corrido; el icono no necesita mostrar la guarda completa, pero no debe sustituir la identidad del tomo por otro libro (`docs/specs/case-5-el-tomo-trece.md:789,4056`).

### F2 Texto y marcas en la imagen

- [ ] `PINTAR` — Si el encuadre del icono muestra el lomo, el tejuelo dorado debe identificar `XI`; el texto completo del sello pertenece a la vista ampliada (`docs/specs/case-5-el-tomo-trece.md:4056,789`).
- [ ] `TEXTO EXACTO` — La `detailedView` debe conservar el sello legible con esfuerzo como `DONACIÓN DEL SÍNDICO DE LA QUIEBRA 114/1971 · 14-X-1971`; la ficha corta y el icono no deben adelantar esa transcripción (`docs/specs/case-5-el-tomo-trece.md:320,789,4056`).
- [ ] `AUSENTE` — No añadir flechas, círculos, realces, interpretación de la donación, peso impreso ni texto explicativo en el icono (`docs/specs/case-5-el-tomo-trece.md:789`; contrato §23.0).

### F3 Cifras, fechas y estados

- [ ] `NO CONTRADECIR` — El peso del tomo caído es 2.8 kg; es un dato de diálogo, no una etiqueta que deba imprimirse en el icono (`src/case/case5/Private/archivo_pasillo7_hotspots.ts:33`; `docs/specs/case-5-el-tomo-trece.md:4190`).
- [ ] `NO CONTRADECIR` — `114/1971` y `14-X-1971` son datos del sello de donación, no una fecha del hallazgo ni del crimen (`docs/specs/case-5-el-tomo-trece.md:4056,789`; `docs/specs/case-5-el-tomo-trece.md:4160`).
- [ ] `NO CONTRADECIR` — Este activo es el ejemplar económico de 2.8 kg; el ejemplar de lujo es distinto, pesa 3.4 kg y tiene media piel, nervios y cantoneras de latón (`docs/specs/case-5-el-tomo-trece.md:4190`; `docs/specs/case-5-el-tomo-trece.md:3416-3418`).
- [ ] `AUSENTE` — No mostrar la ranura 11 ocupada por el ejemplar de lujo, ni convertir el icono en una vista del estante de consulta o del Tomo XIII inexistente (`docs/specs/case-5-el-tomo-trece.md:198,4057`; `docs/specs/case-5-el-tomo-trece.md:4160`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — La investigación presenta el tomo a un metro de la silueta, encuadernado en tela verde, identificado como `El Saber Universal. Tomo XI. Ferrocarriles - Guatemala`, con sangre en el lomo (`src/case/case5/Private/archivo_pasillo7_hotspots.ts:30-32`; `src/case/case5/Private/archivo_pasillo7_hotspots_en.ts:30-32`).
- [ ] `NO CONTRADECIR` — El Sargento declara 2.8 kg y que es el arma; la cifra y la conclusión son narración, no texto obligatorio del icono (`src/case/case5/Private/archivo_pasillo7_hotspots.ts:33`; `src/case/case5/Private/archivo_pasillo7_hotspots_en.ts:33`).
- [ ] `PINTAR` — La vista ampliada debe permitir examinar la guarda y encontrar el sello morado medio borrado y de letra pequeña; el pie describe el sello como objeto y no lo interpreta (`src/case/case5/Private/archivo_pasillo7_hotspots.ts:34-35`; `docs/specs/case-5-el-tomo-trece.md:789`).
- [ ] `NO CONTRADECIR` — Al presentar `tomo_caido` en el `followUp` de D3-T3, el juez pide leer el sello y la defensa lee la donación del síndico; la lámina debe contener esa respuesta visual sin escribir `Berrondo lo donó` como conclusión (`src/case/case5/Private/trial_day3_t3.ts:126-128`; `src/case/case5/Private/trial_day3_success_berrondo.ts:65-73`).
- [ ] `NO CONTRADECIR` — La prueba identifica el arma como la edición económica de tela, no como el tomo de lujo que repone el hueco del estante durante el clímax (`src/case/case5/Private/trial_day3_success_berrondo.ts:65-73`; `docs/specs/case-5-el-tomo-trece.md:3427-3433`).

### F5 Estilo

- [ ] Contrato §23.0 completo en cualquier prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* GBA/DS en alta definición; ; contorno carbón `#1A1A1A` nítido y continuo, más grueso en la silueta; colores primarios saturados; tema de televisión mexicana de los setenta/Chespirito con papel, madera, polvo, archivo judicial, madera barnizada, latón envejecido y luz de tungsteno; prohibidos fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto en inglés salvo la variante EN exigida y cualquier rosa o magenta en primer plano (§23.0).
- [ ] `AUSENTE` — No usar fotorrealismo, efectos fotográficos, marcas de agua, flechas, círculos, realces ni magenta/rosa en el primer plano (§23.0; §23.3).

### F6 Localización

- [ ] `PINTAR` — El catálogo ES usa `assets/examine_tomo_caido.webp`; el catálogo EN usa `assets/examine_tomo_caido_en.webp`. La variante EN conserva la misma composición, escala, materiales, mancha, tejuelo, sello, fecha y marcas físicas (`src/state/Private/EvidenceCatalogCase5EsA.ts:41-46`; `src/state/Private/EvidenceCatalogCase5EnA.ts:41-46`; `docs/specs/case-5-el-tomo-trece.md:4064`).
- [ ] `TEXTO EXACTO` — En la variante EN, el sello localizado debe leer coherentemente `DONATION FROM THE SYNDIC OF BANKRUPTCY 114/1971 · 14-X-1971`; no traducir la fecha ni alterar la marca `XI` (`src/state/Private/EvidenceCatalogCase5EnA.ts:41-46`; §23.3).
- [ ] `NO CONTRADECIR` — El diálogo EN conserva la identidad del volumen y lee el sello como la donación de bankruptcy 114/71 del 14 de octubre de 1971; no introducir texto español fuera de la variante ES (`src/case/case5/Private/archivo_pasillo7_hotspots_en.ts:30-37`; `src/case/case5/Private/trial_day3_success_berrondo_en.ts:65-73`).

## Consistencia (regenerar juntos)

- `tomo_caido` icono ↔ `examine_tomo_caido.webp` — comparten un único Tomo XI de edición económica: tela verde oliva, `XI`, mancha parda en el lomo y sello violeta en la guarda. Regenerar juntos; ninguno es fuente de verdad del otro.
- `examine_tomo_caido` ES ↔ `examine_tomo_caido_en` — gemelos localizados: misma composición, objeto, encuadre, materiales, mancha, regla y sello; sólo cambia el texto legible. Regenerar juntos; este activo no es fuente de verdad del otro (§23.3, `docs/specs/case-5-el-tomo-trece.md:4064`).
- `bg_archivo_pasillo7` — comparte el tomo caído de tela verde, con el lomo hacia arriba, a un metro de la silueta y junto al cartelito pericial. Regenerar juntos; este activo no es fuente de verdad del otro (§23.1; `docs/specs/case-5-el-tomo-trece.md:3987`).
- `plate_foto_pericial` — comparte la presencia del tomo cerrado a un metro del cuerpo, la orientación del lomo y la mancha; el icono y esta prueba no deben heredar la composición de la fotografía completa. Regenerar juntos; este activo no es fuente de verdad del otro.
- `examine_estante_consulta` — comparte la distinción entre el Tomo XI económico caído y el ejemplar de lujo que termina en la ranura 11; no importar media piel ni cantoneras al icono del arma (§23.3, `docs/specs/case-5-el-tomo-trece.md:4057`). Regenerar juntos; este activo no es fuente de verdad del otro.
- `bg_archivo_pasillo7_d4` — comparte el diseño del tomo sólo como identidad de objeto, no el estado de escena: el pasillo pre-crimen no debe mostrar cadáver, silueta ni tomo caído. Regenerar juntos; este activo no es fuente de verdad del otro (§10.1; `docs/specs/case5-assets/new-assets.md`).
- `plate_tomo_trece` — comparte la colección publicada de veintitrés tomos y la ranura 13 vacía; no debe imponer un Tomo XIII, un sello ni la apariencia del ejemplar económico (§23.4; `docs/specs/case-5-el-tomo-trece.md:198,4083`). Regenerar juntos; este activo no es fuente de verdad del otro.

## Conflictos abiertos

- La investigación llama al sello «de la primera hoja» y el Sargento dice que está en «la primera hoja», mientras §23.3 y el `detailedView` lo ubican en la **guarda** (`src/case/case5/Private/archivo_pasillo7_hotspots.ts:34`; `docs/specs/case-5-el-tomo-trece.md:782,789,4056`). No resolver aquí: conservar la guarda exigida por el contrato visual.
- El diálogo lo describe como medio borrado y de letra pequeña, pero §23.3 exige que la cadena pueda leerse con esfuerzo (`src/case/case5/Private/archivo_pasillo7_hotspots.ts:34-35`; `docs/specs/case-5-el-tomo-trece.md:789`). Es una tensión de legibilidad, no permiso para cambiar la cadena ni omitirla.
- El catálogo y la ficha de prueba nombran sangre/mancha en el lomo, mientras la dirección de arte del fondo sólo fija un tomo caído con el lomo hacia arriba y sin texto legible (`src/state/Private/EvidenceCatalogCase5EsA.ts:43-46`; `docs/specs/case-5-el-tomo-trece.md:3987`). El icono y la lámina deben conservar la mancha; el fondo no es fuente de verdad para el detalle.

## Hallazgos de auditoría 2026-09-19

- ~~No se inspeccionó ninguna imagen por protocolo. No se confirma ningún defecto visual de la imagen actual; esta hoja contiene únicamente hechos verificables derivados del spec, catálogos y guiones ES/EN.~~ (Sustituido por la auditoría del icono regenerado en Lote A.)

## Hallazgos de auditoría 2026-09-19 (regeneración Lote A)

Auditoría del icono en `tools/raw/case5/case5_evidence_icons_raw.png` celda col 3, fila 0 (y fuente 1:1 de generación). Recorte `cell_tomo_caido`. **Veredicto: cumple.**

### Cumple

- ✓ Tomo de tela verde oliva, tejuelo `XI`, mancha parda **en el lomo** visto de canto (F1/F2; prueba de nombrar: «lomo de tomo XI con sangre»).
- ✓ Fondo magenta `#FF00FF`. Sin media piel, sin cantoneras, sin pasillo, sin peso impreso (F1/F3).
- ✓ Sin flechas ni prosa (F2). La guarda y el sello quedan en `examine_tomo_caido` (F4).

### Defectos confirmados

Ninguno bloqueante. El icono es más «lomo de frente» que el tomo del fondo (tapa arriba): DRIFT menor de encuadre, no de identidad.

### Recomendación

Ninguna. Si se reabre el fondo, girar el tomo del piso a esta misma identidad de lomo.
