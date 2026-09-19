# examine_libro_visitas — hoja de hechos
Clase: `examine`. Espec: §23.0, §23.3 y §24. Guion: §10.2, investigación D1 `hotspot_libro`, D1-T1 `followUp`.

Activo base: `examine_libro_visitas.webp`. Variante localizada: `examine_libro_visitas_en.webp`. Ambas representan la misma hoja y composición; sólo cambia el texto legible exigido por la localización.

## Mapa semántico

- Libro grande de registro público, abierto y fotografiado de plano.
- Hoja del 4 de diciembre de 1982.
- Catorce renglones manuscritos; cada uno tiene nombre, asunto y dos columnas de hora.
- Último asiento: R. Valdés, asunto «diligencia sala 7», entrada 16:40 y salida 16:58.
- Sello de goma en el margen que identifica el libro como registro del público.
- El libro registra visitantes externos, no a todo el personal, policías uniformados ni demás personas que acceden por la ventanilla profesional.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Hoja rayada de un libro grande, abierta y fotografiada de plano; no es una vista del mostrador ni del vestíbulo completo (§23.3, `docs/specs/case-5-el-tomo-trece.md:4048-4049`; §10.2, `docs/specs/case-5-el-tomo-trece.md:664`).
- [ ] `PINTAR` — Catorce renglones manuscritos de registro (§23.3, `docs/specs/case-5-el-tomo-trece.md:4048`; catálogo ES, `src/state/Private/EvidenceCatalogCase5EsA.ts:55-60`; catálogo EN, `src/state/Private/EvidenceCatalogCase5EnA.ts:55-60`).
- [ ] `PINTAR` — Cada renglón contiene nombre, asunto y dos columnas de hora (§23.3, `docs/specs/case-5-el-tomo-trece.md:4048`).
- [ ] `PINTAR` — El asiento 14 es R. Valdés con el asunto «diligencia sala 7», entrada 16:40 y salida 16:58 (§23.3, `docs/specs/case-5-el-tomo-trece.md:4048`; §10.2, `docs/specs/case-5-el-tomo-trece.md:664`).
- [ ] `PINTAR` — Sello de goma al margen que identifica el documento como libro de visitas del público (§10.2, `docs/specs/case-5-el-tomo-trece.md:664`).
- [ ] `NO CONTRADECIR` — La hoja documenta visitas del público; no debe sugerir que es un censo de todas las personas presentes en el edificio (§4.1 P1, `docs/specs/case-5-el-tomo-trece.md:193`; investigación D1, `docs/specs/case-5-el-tomo-trece.md:657-660`).
- [ ] `NO CONTRADECIR` — El acceso profesional tiene un libro separado; no introducirlo en esta hoja ni mezclarlo con el libro de visitas (§4.1 P1, `docs/specs/case-5-el-tomo-trece.md:193`; §4.2, `docs/specs/case-5-el-tomo-trece.md:206`).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — Variante ES: el sello debe leerse «LIBRO DE VISITAS DEL PÚBLICO» (§10.2, `docs/specs/case-5-el-tomo-trece.md:664`).
- [ ] `TEXTO EXACTO` — Variante ES: el asiento 14 debe ser «R. Valdés · “diligencia sala 7” · 16:40 · 16:58» (§10.2, `docs/specs/case-5-el-tomo-trece.md:664`).
- [ ] `TEXTO EXACTO` — Variante EN: el catálogo exige `R. Valdés`, `4:40 PM / 4:58 PM`, y la composición conserva catorce filas (§23.3, `docs/specs/case-5-el-tomo-trece.md:4064`; catálogo EN, `src/state/Private/EvidenceCatalogCase5EnA.ts:55-60`).
- [ ] `NO CONTRADECIR` — Los otros trece asientos deben parecer manuscritos y diferenciados, pero el spec no fija sus nombres, asuntos ni horas exactos; no inventar texto argumental adicional (§23.3, `docs/specs/case-5-el-tomo-trece.md:4048`).
- [ ] `AUSENTE` — Sin anotaciones, flechas ni círculos (§10.2, `docs/specs/case-5-el-tomo-trece.md:664`).
- [ ] `AUSENTE` — No añadir texto legible que convierta el documento en el segundo libro de peritos o que identifique a personal del edificio como visitante (§4.1 P1, `docs/specs/case-5-el-tomo-trece.md:193`; §10.2, `docs/specs/case-5-el-tomo-trece.md:657-660`).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La hoja es del 4 de diciembre; el asiento de R. Valdés/Don Ramón marca entrada a las 16:40 y salida a las 16:58 (§4.2, `docs/specs/case-5-el-tomo-trece.md:218-222`; catálogo ES, `src/state/Private/EvidenceCatalogCase5EsA.ts:57-60`).
- [ ] `NO CONTRADECIR` — Las catorce firmas son las del registro público de ese sábado; el libro profesional es separado y tiene cuatro asientos (§4.2, `docs/specs/case-5-el-tomo-trece.md:206`; §4.1 P1, `docs/specs/case-5-el-tomo-trece.md:193`).
- [ ] `NO CONTRADECIR` — La hora de salida del asiento público es una hora escrita por Nicanor al observar la salida; no convertirla en una prueba de que todas las personas del edificio salieron (§10.2, `docs/specs/case-5-el-tomo-trece.md:654-660`; §24.A, `docs/specs/case-5-el-tomo-trece.md:4118-4121`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — Al examinar el hotspot, la narración establece que el libro está abierto sobre el mostrador y que tiene una pluma atada a un cordel; el detailed view debe mostrar el libro, no contradecir su función de registro público (guion ES, `src/case/case5/Private/archivo_vestibulo_hotspots.ts:17-26`; guion EN, `src/case/case5/Private/archivo_vestibulo_hotspots_en.ts:17-26`).
- [ ] `PINTAR` — La investigación verbaliza «catorce firmas» y la última entrada con sus dos horas; ambas afirmaciones deben poder comprobarse al presentar la vista (`docs/specs/case-5-el-tomo-trece.md:651-661`).
- [ ] `NO CONTRADECIR` — La investigación concluye que el libro sólo dice quién vino de visita; policías uniformados, Nicanor y la empleada de la ventanilla no firman (guion ES, `src/case/case5/Private/archivo_vestibulo_hotspots.ts:22-26`; guion EN, `src/case/case5/Private/archivo_vestibulo_hotspots_en.ts:22-26`).
- [ ] `NO CONTRADECIR` — D1-T1 usa la prueba para corregir «el libro conoce a todos»: al menos cinco personas dentro del edificio no aparecen en él, y la defensa debe distinguir «público» de «todas las personas» (§17.1, `docs/specs/case-5-el-tomo-trece.md:999-1016`; `src/case/case5/Private/trial_day1_t1.ts:18-24`; `src/case/case5/Private/trial_day1_t1_en.ts:18-24`).
- [ ] `NO CONTRADECIR` — La escalera de servicio y la ventanilla profesional permiten llegar sin pasar por el mostrador ni por este libro; esa deducción pertenece al plano, no debe aparecer como una marca nueva en la hoja (§10.2, `docs/specs/case-5-el-tomo-trece.md:672-680`; §17.1, `docs/specs/case-5-el-tomo-trece.md:1238-1249`).

### F5 Estilo y prohibidos

- [ ] Contrato §23.0 completo en el prompt de regeneración: ilustración 2D estilo Capcom Ace Attorney/GBA-DS en alta definición; cel-shading de colores planos con terminador duro y dos tonos por superficie; contorno continuo carbón `#1A1A1A`, más grueso en la silueta; anatomía expresiva caricaturesca; colores primarios saturados; tema de televisión mexicana de los setenta/Chespirito con papel, madera, polvo, latón envejecido y luz de tungsteno; prohibidos fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto inglés salvo variante EN, y rosa/magenta en primer plano (§23.0, `docs/specs/case-5-el-tomo-trece.md:3974-3980`).
- [ ] `AUSENTE` — Sin flechas, círculos, realces, marcas periciales añadidas ni magenta/rosa en el primer plano (§10.2, `docs/specs/case-5-el-tomo-trece.md:664`; §23.0, `docs/specs/case-5-el-tomo-trece.md:3978-3980`).

### F6 Localización

- [ ] `PINTAR` — `examine_libro_visitas.webp` y `examine_libro_visitas_en.webp` conservan idénticos encuadre, papel, catorce filas, sello, composición, defectos mecánicos y cifras; sólo se localiza el texto legible (§23.3, `docs/specs/case-5-el-tomo-trece.md:4064`).
- [ ] `TEXTO EXACTO` — En EN, usar la variante del catálogo: nombre `Visitors Log`, `Public visitors book`, `December 4 sheet`, `Fourteen signatures`, `R. Valdés`, `4:40 PM / 4:58 PM`; cualquier texto legible localizado debe coincidir con el catálogo inglés y no dejar prosa española en la variante EN (catálogo EN, `src/state/Private/EvidenceCatalogCase5EnA.ts:55-60`; §23.0 y §23.3, `docs/specs/case-5-el-tomo-trece.md:3978-3980,4064`).
- [ ] `NO CONTRADECIR` — La variante EN mantiene el argumento de que sólo firman visitantes externos y que el personal del edificio no firma (catálogo EN, `src/state/Private/EvidenceCatalogCase5EnA.ts:56-60`; guion EN, `src/case/case5/Private/archivo_vestibulo_hotspots_en.ts:23-26`).

## Consistencia (regenerar juntos)

- `examine_libro_visitas_en` — gemelo localizado del mismo objeto; comparte encuadre, hoja, catorce filas, sello, asiento 14, horas y marcas físicas. Regenerar juntos; este activo no es fuente de verdad del otro.
- `bg_archivo_vestibulo` — comparte el libro grande abierto sobre el mostrador y la pluma atada a cordel; el fondo fija presencia y posición general, esta lámina fija el contenido legible. Regenerar juntos; este activo no es fuente de verdad del otro.
- `libro_visitas` — icono de Acta que debe representar la misma identidad del libro y corresponder al `detailedView` (§23.5, `docs/specs/case-5-el-tomo-trece.md:4086-4090`; catálogo ES/EN, `src/state/Private/EvidenceCatalogCase5EsA.ts:55-60`, `src/state/Private/EvidenceCatalogCase5EnA.ts:55-60`). Regenerar juntos; este activo no es fuente de verdad del otro.
- `libro_peritos` / `examine_libro_peritos` — registro profesional separado, relacionado por contraste pero no el mismo objeto; mantener fuera de esta composición (§4.1 P1 y P4, `docs/specs/case-5-el-tomo-trece.md:193-197`). Regenerar juntos sólo para verificar que no haya intercambio de identidad; este activo no es fuente de verdad del otro.
- `plate_dos_accesos` — comparte la distinción espacial entre puerta pública/mostrador y ventanilla profesional, pero no debe aportar texto ni contenido del libro a esta lámina (§10.2, `docs/specs/case-5-el-tomo-trece.md:685-688`). Regenerar juntos; este activo no es fuente de verdad del otro.

## Conflictos abiertos

- No se encontró una discrepancia que requiera resolver el spec antes de regenerar este activo. `R. Valdés` es la forma impresa fijada por §23.3 y los guiones se refieren verbalmente al mismo visitante como Don Ramón (§23.3, `docs/specs/case-5-el-tomo-trece.md:4048`; §4.2, `docs/specs/case-5-el-tomo-trece.md:218-222`).

## Hallazgos de auditoría 2026-09-19 (regeneración Lote G)

**Veredicto: CUMPLE** — contenido, texto, cifras, exclusiones y localización. Estilo (F5) con textura de papel ilustrada sujeta a decisión del revisor; no bloquea. RAW: `tools/raw/case5/examine_libro_visitas.jpg` y `examine_libro_visitas_en.jpg` (1280 × 720). `bg_archivo_vestibulo` no se regeneró (skip).

### Cumple
- ES F1/F2: hoja suelta rayada sobre tabla oscura con cuatro esquineras de latón, recorte de plano; cabecera «NÚM. / NOMBRE / ASUNTO / ENTRADA / SALIDA»; catorce renglones manuscritos con tintas distintas; asiento 14 = «R. Valdés · «diligencia sala 7» · 16:40 · 16:58» (recorte de filas 13–14 y columna de horas). Sello circular **violeta** al margen: «LIBRO DE VISITAS / DEL PÚBLICO».
- ES F1 (encuadernación): canto izquierdo perforado (encuadernación); se nombra como hoja de libro de registro, no sólo como cartel (recorte del canto).
- ES/EN F2 `AUSENTE`: sin fecha impresa, sin 1974/1982, sin flechas, círculos, marcas periciales, UI `EXAMINE`/`Case 5`, ni magenta en primer plano.
- ES F3/F4: catorce firmas; última 16:40/16:58; asuntos de visitantes externos (comparecencia, testigo ocular, defensa, querellante, consulta de expediente, etc.), no censo de personal ni libro de peritos.
- EN F2/F6: gemelo literal (misma tabla, esquineras, retícula, sello circular violeta a la derecha, catorce filas, mismos nombres). Cabecera `NO. / NAME / MATTER / ENTRY / EXIT`. Asiento 14 = `R. Valdés · «room 7 diligence» · 4:40 PM · 4:58 PM` (catálogo EN, `EvidenceCatalogCase5EnA.ts:55-60`). Sello «PUBLIC VISITORS LOG». Trece asuntos traducidos; cero prosa española.
- EN F3: sin fecha impresa (el presente es 1982; no se reintroduce 1974).

### Defectos confirmados
- Ningún defecto MAYOR ni MEDIO. F5: cel-shading de ilustración Ace Attorney con grano de papel dibujado; aceptación de estilo = decisión del revisor (§23.0, `docs/specs/case-5-el-tomo-trece.md:3974-3978`).

### Correcciones de auditoría
- ~~[EN] `CONTRADICE` MAYOR — prosa española, cabecera FECHA/REGISTRO~~ — retirado: EN está íntegramente en inglés.
- ~~[EN] `CONTRADICE` MEDIO — fecha «4 de diciembre de 1974»~~ — retirado: no hay fecha impresa.
- ~~[EN] `DRIFT` MAYOR — gemelos de composición distinta~~ — retirado: misma tabla, retícula y sello violeta.
- ~~[ES] `MALFORMADO` MENOR — sin indicio de libro~~ — retirado: canto izquierdo perforado.
- Recortes sobre los JPEG RAW 1280 × 720 (cabecera, asiento 14, sello, esquineras, gutier). No se ejecutó `process_case5_assets.py`.

### Recomendación (orden del conjunto de consistencia)
1. El icono `libro_visitas` y el fondo `bg_archivo_vestibulo` (skip en este lote) siguen fuera de esta regeneración; al tocarlos, conservar la identidad de hoja rayada + sello violeta del público.
2. F5 queda al revisor; no regenerar por estilo salvo decisión explícita.
