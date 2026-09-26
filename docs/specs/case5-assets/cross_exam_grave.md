# cross_exam_grave — hoja de hechos
Clase: `music`. Espec: §23.7. Guion: D2-T2, D3-T2 y D3-T3, en español e inglés.

Fuente de verdad: la especificación de Case 5 y sus contratos de guion. Este activo es música procedural; no tiene imagen que inspeccionar.

## Mapa semántico

- Lugar/estado: sala de audiencias durante un contrainterrogatorio, con la tensión grave propia de cada bloque; el activo no fija una locación visual.
- Identidades dramáticas: Berrondo en D2-T2; Super Sam en D3-T2; Berrondo investigado en D3-T3.
- Función: separar estos tres contrainterrogatorios de los testigos y bloques que usan `cross_exam_moderato` o `cross_exam_allegro` desde el primer compás.
- Idiomas: la misma pista procedural se comparte entre los bloques ES y EN; sólo cambian texto de diálogo y etiquetas de interfaz.

## Hechos a verificar

### F1 Contenido musical

- [ ] `PINTAR` — No aplica al medio visual: producir una pista de contrainterrogatorio en **modo menor**, con **tempo lento**, **bajo de pasos firmes** y **lead de registro grave** (§23.7).
- [ ] `PINTAR` — La identidad sonora debe hacer que Berrondo **no suene como los demás testigos** en D2-T2 (§13.3, línea 1895).
- [ ] `PINTAR` — La pista debe distinguirse de `cross_exam_moderato` y `cross_exam_allegro` **al primer compás** (§23.7).
- [ ] `NO CONTRADECIR` — El registro grave y los pasos firmes deben sostener el tono severo de los tres contrainterrogatorios, sin convertirse en una pista de peligro o persecución; el spec la reserva para testimonios graves (§23.7).

### F2 Texto en el activo

- [ ] `AUSENTE` — No hay texto, voz ni rótulos que deban imprimirse dentro de la música; los títulos son metadatos de interfaz, no material sonoro (§23.0, §23.7).

### F3 Cifras/tempo/duración

- [ ] `TEXTO EXACTO` — Identificador de catálogo: `cross_exam_grave` (§23.7; `src/types/Private/audio.ts:42`).
- [ ] `NO CONTRADECIR` — La implementación canónica declara `96` BPM y `128` pasos (`src/audio/Private/tracks/Case5Tracks.ts:55-60`). La cifra de BPM no se muestra al jugador.
- [ ] `NO CONTRADECIR` — La pista debe ser un bucle procedural de 128 pasos, conforme a la definición de `TrackDefinition` (`src/audio/Private/tracks/Case5Tracks.ts:55-60`).

### F4 Contrato en pantalla/runtime

- [ ] `PINTAR` — D2-T2, Testimonio 2 de Lic. Berrondo, usa `cross_exam_grave` como BGM; su identidad es la de una pista propia para Berrondo (`docs/specs/case-5-el-tomo-trece.md:1893-1895`; `src/case/case5/Private/trial_day2_t2.ts:19-22`).
- [ ] `PINTAR` — El gemelo inglés de D2-T2 conserva la misma BGM (`src/case/case5/Private/trial_day2_t2_en.ts:19-22`).
- [ ] `PINTAR` — D3-T2, Testimonio 2 de Super Sam, usa la pista mientras el fiscal declara desde el estrado con la bolsa de lona vacía visible sobre la mesa (`docs/specs/case-5-el-tomo-trece.md:2546-2548`; `src/case/case5/Private/trial_day3_t2.ts:17-20`).
- [ ] `PINTAR` — El gemelo inglés de D3-T2 conserva la misma BGM (`src/case/case5/Private/trial_day3_t2_en.ts:17-20`).
- [ ] `PINTAR` — D3-T3, Testimonio 3 de Berrondo investigado, usa la pista y contiene la segunda declaración `unlockedBy` del caso (`docs/specs/case-5-el-tomo-trece.md:2709-2711`; `src/case/case5/Private/trial_day3_t3.ts:17-20`).
- [ ] `PINTAR` — El gemelo inglés de D3-T3 conserva la misma BGM (`src/case/case5/Private/trial_day3_t3_en.ts:17-20`).
- [ ] `NO CONTRADECIR` — Las líneas posteriores que cambian explícitamente a `suspense` en la contradicción de D3-T3 deben poder reemplazar esta BGM sin que la pista se trate como música permanente de todo el juicio (`src/case/case5/Private/trial_day3_t3.ts:118`; `src/case/case5/Private/trial_day3_t3_en.ts:118`).
- [ ] `PINTAR` — El catálogo registra la pista en `TRACK_CATALOG` y la etiqueta española es `Interrogatorio — Grave` (`src/audio/Private/TrackCatalog.ts:22-29`; `src/i18n/Private/ui_es.ts:80-81`).
- [ ] `PINTAR` — La etiqueta inglesa correspondiente es `Cross-Examination — Grave` (`src/i18n/Private/ui_en.ts:80-81`).

### F5 Estilo y prohibidos

- [ ] `NO CONTRADECIR` — El contrato general de §23.0 se aplica al activo generado o a cualquier representación promocional: ilustración 2D estilo *Capcom Ace Attorney* de linaje GBA/Nintendo DS, cel-shading de colores planos, terminador duro, contorno carbón `#1A1A1A`, tema setentero mexicano/Chespirito, y registro visual de papel, madera y polvo.
- [ ] `AUSENTE` — No fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto en inglés no exigido, ni rosa/magenta en primer plano (§23.0). Para el archivo de audio, estas prohibiciones visuales no constituyen criterios de aceptación sonora.

### F6 Localización

- [ ] `PINTAR` — No existe variante musical `_en`: ES y EN comparten exactamente `cross_exam_grave`; la localización se limita al título de interfaz y al diálogo (`src/case/case5/Private/trial_day2_t2.ts:19-22`; `src/case/case5/Private/trial_day2_t2_en.ts:19-22`; `src/i18n/Private/ui_es.ts:80-81`; `src/i18n/Private/ui_en.ts:80-81`).
- [ ] `NO CONTRADECIR` — La etiqueta española debe conservar `Interrogatorio — Grave`; la inglesa debe conservar `Cross-Examination — Grave` (fuentes anteriores). No se requiere texto diegético dentro de la pista.

## Consistencia (regenerar juntos)

- `cross_exam_moderato` — comparte la familia de contrainterrogatorios; `cross_exam_grave` debe diferenciarse desde el primer compás. Regenerar juntos, este activo no es fuente de verdad del otro (§23.7).
- `cross_exam_allegro` — comparte la familia de contrainterrogatorios; `cross_exam_grave` debe diferenciarse desde el primer compás. Regenerar juntos, este activo no es fuente de verdad del otro (§23.7).
- `cross_exam_presto` — comparte el catálogo de pistas de juicio, pero no es una comparación explícita de §23.7. Regenerar juntos si se reajusta la identidad global de la familia; este activo no es fuente de verdad del otro (`src/audio/Private/TrackCatalog.ts:23-29`).
- `trial` — comparte el contexto de sala de audiencias y el catálogo de música judicial, pero no el contrato de tempo o instrumentación. Regenerar juntos sólo para una revisión de mezcla; este activo no es fuente de verdad del otro (`src/audio/Private/TrackCatalog.ts:22-29`).
- Gemelos de idioma D2-T2, D3-T2 y D3-T3 — cada bloque ES ↔ EN usa la misma pista, sin variante sonora localizada. Regenerar juntos, ninguno es fuente de verdad del otro (seis referencias de guion F4).

## Conflictos abiertos

- No se encontró una discrepancia entre §23.7, los bloques ES/EN que estampan la BGM, el catálogo y la implementación de `crossExamGraveTrack`. La especificación exige “tempo lento”, mientras la implementación fija 96 BPM; se registra como concreción compatible, no como conflicto.
- §23.0 contiene prohibiciones visuales para toda generación, pero `cross_exam_grave` es un activo de audio. No se resuelve aquí una adaptación de ese contrato visual; las restricciones se conservan como no aplicables al sonido.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen: este activo es música procedural. No se registran defectos visuales ni hallazgos de procesamiento.
- Fact sheet derivada únicamente de la especificación, el Libro de hechos cuando fija la autoridad del spec (§24.0), los guiones ES/EN y el catálogo/definición de runtime. No se ejecutaron tests, lint, auditorías ni procesamiento de assets, conforme a la solicitud.
