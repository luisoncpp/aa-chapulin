# libro_peritos — hoja de hechos

Clase: `icon` de Acta con `detailedView`. Espec: §23.0, §23.3, §23.5, §4.1 P1/P4/P5, §4.2, §5.2 y §24. Guion: orden y lectura del libro en D2; contradicciones D2-T2 y D4-T1; variantes del `detailedView`: `examine_libro_peritos.webp` y `examine_libro_peritos_en.webp`.

## Mapa semántico y alcance

- Objeto: segundo libro del Archivo Judicial, reservado para peritos y auxiliares de la justicia; no es el libro público de visitas (§4.1 P1; §5.2).
- Icono: objeto de prueba centrado, con fondo transparente y contorno carbón, siguiendo el estilo establecido del Acta (§23.5).
- Documento asociado: libro pequeño, delgado, empastado en hule negro, hoja del sábado 4 de diciembre de 1982; su `detailedView` es una lámina de examen de 1280 × 720 mostrada a 640 × 360 (§4.2; §23.3; `docs/specs/case-5-el-tomo-trece.md:206,288,4041-4049`).
- Contenido visible del documento: cuatro asientos en orden —Hermenegildo Rosas, Fulgencio Berrondo, Hilario Balbuena y Refugio Pazguato— y sólo dos columnas: entrada y devolución de gafete (`docs/specs/case-5-el-tomo-trece.md:1710-1715`; §4.1 P4).
- Identidad probatoria: la fila de Berrondo registra `16:05 / 16:50`; la de Balbuena, `17:44 / 18:05`. La segunda hora es devolución de gafete, no salida del edificio (§4.2:215,221,233,238; §24.A A1/A10; §24.C F3).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Icono de Acta: libro pequeño de peritos y auxiliares, centrado, recortado sobre fondo transparente y con contorno carbón; no representar una escena ni el libro grande público (§23.5).
- [ ] `PINTAR` — El `detailedView` muestra el libro pequeño empastado en hule negro y la hoja del 4 de diciembre, no el libro de visitas (`docs/specs/case-5-el-tomo-trece.md:206,288,4049`; catálogo ES, `src/state/Private/EvidenceCatalogCase5EsB.ts:24-29`).
- [ ] `PINTAR` — El `detailedView` contiene exactamente cuatro asientos, en este orden: Hermenegildo Rosas, Fulgencio Berrondo, Hilario Balbuena y Refugio Pazguato (`docs/specs/case-5-el-tomo-trece.md:1710-1715`; `src/case/case5/Private/trial_day2.ts:18-24`).
- [ ] `PINTAR` — Asiento 1: Rosas, perito valuador, entrada `09:10`, devolución `09:40` (`docs/specs/case-5-el-tomo-trece.md:1711-1713`; `src/case/case5/Private/trial_day2.ts:20`).
- [ ] `PINTAR` — Asiento 2: Fulgencio Berrondo, síndico de la quiebra 114/1971, entrada `16:05`, devolución `16:50` (§24.A A1; §24.C F3; `docs/specs/case-5-el-tomo-trece.md:1713`).
- [ ] `PINTAR` — Asiento 3: Hilario Balbuena, actuario, entrada `17:44`, devolución `18:05` (§24.A A10; `docs/specs/case-5-el-tomo-trece.md:1714`; catálogo ES, `src/state/Private/EvidenceCatalogCase5EsB.ts:24-29`).
- [ ] `PINTAR` — Asiento 4: Refugio Pazguato, policía judicial, entrada `17:52`, devolución `22:15` (§24.A A11; `docs/specs/case-5-el-tomo-trece.md:1715`).
- [ ] `PINTAR` — Dos columnas impresas, alineadas con las cuatro filas: entrada y devolución de gafete (§4.1 P4; §23.3; §24.C F3).
- [ ] `AUSENTE` — Tachaduras, correcciones, columna de salida, columna de permanencia o cualquier elemento que convierta la devolución del gafete en prueba automática de salida (`src/case/case5/Private/trial_day4_success.ts:55-65`; §24.D I1).
- [ ] `AUSENTE` — Personajes, manos, ventanilla, mostrador, libro público, catorce firmas, fondo de archivo o texto editorial; el `detailedView` es un documento recortado (§4.1 P1; §4.2:206; §23.3).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — Encabezado ES de la primera columna: `HORA DE ENTRADA` (§23.3; `src/case/case5/Private/trial_day2_success.ts:129`).
- [ ] `TEXTO EXACTO` — Encabezado ES de la segunda columna: `HORA DE DEVOLUCIÓN DE GAFETE` (§23.3; `src/case/case5/Private/trial_day2_success.ts:129`; `src/case/case5/Private/trial_day4_success.ts:57-58`).
- [ ] `TEXTO EXACTO` — Los cuatro nombres, cargos y horas deben ser legibles y coincidir con la lectura del secretario (`src/case/case5/Private/trial_day2.ts:20-24`; §23.3).
- [ ] `TEXTO EXACTO` — Variante EN: encabezados `TIME OF ENTRY` y `TIME BADGE RETURNED`; Balbuena conserva `5:44 PM / 6:05 PM` (`src/state/Private/EvidenceCatalogCase5EnB.ts:24-29`; `src/case/case5/Private/trial_day4_success_en.ts:53-58`).
- [ ] `AUSENTE` — Texto inglés en la variante ES, prosa explicativa, flechas, círculos, realces, marcas de respuesta y marcas de agua (§23.0; §23.3).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La hoja pertenece al sábado 4 de diciembre de 1982; no introducir otra fecha (§4.2:202-215; §24.D I10).
- [ ] `NO CONTRADECIR` — La devolución de Berrondo a las `16:50` no prueba que saliera del edificio; la entrada y la devolución son los únicos hechos registrados (§4.2:221,238; §24.C F3; §24.D I1).
- [ ] `NO CONTRADECIR` — Balbuena entra a las `17:44`, después del hallazgo de las 17:35; Pazguato entra a las `17:52` (§24.A A10-A11; §24.C F16).
- [ ] `NO CONTRADECIR` — El registro no es un censo de quién permanece dentro del Archivo (`src/case/case5/Private/trial_day2_success.ts:126-130`; `src/case/case5/Private/trial_day4_success.ts:63-65`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En D2 la fiscalía entrega el libro negro, el secretario lee sus cuatro asientos y el Acta incorpora `libro_peritos` junto con el perfil de Genoveva (`src/case/case5/Private/trial_day2.ts:16-36`; variante EN `src/case/case5/Private/trial_day2_en.ts:16-36`).
- [ ] `PINTAR` — En D2-T2 se presenta el activo contra «salí a las dieciséis cincuenta»: la imagen debe permitir leer que no hay columna de salida y que la segunda columna es devolución de gafete (`src/case/case5/Private/trial_day2_t2.ts:104-110`; `src/case/case5/Private/trial_day2_success.ts:124-130`; variantes EN equivalentes).
- [ ] `PINTAR` — En D4-T1 se presenta de nuevo contra la afirmación de Genoveva sobre una hora de salida; el encabezado exacto debe resolver la contradicción (`src/case/case5/Private/trial_day4_t1.ts:44-56`; `src/case/case5/Private/trial_day4_success.ts:53-65`; variantes EN equivalentes).
- [ ] `NO CONTRADECIR` — El libro no demuestra que Berrondo saliera a las 16:50 ni que estuviera fuera antes de las 17:02; sólo documenta entrada y devolución (§24.C F3; `src/case/case5/Private/trial_day4_success.ts:36-39`).
- [ ] `NO CONTRADECIR` — El segundo libro no es conocido durante la investigación del D1; la sorpresa se produce cuando el Juez ordena traerlo en GIRO 1 (`docs/specs/case-5-el-tomo-trece.md:193,1285`; §24.D I18).

### F5 Estilo y prohibidos

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* de linaje GBA/Nintendo DS en alta definición; ; contorno carbón `#1A1A1A` continuo, más grueso en la silueta; paleta primaria saturada.
- [ ] Contrato §23.0 completo en el prompt: televisión mexicana de los años setenta, universo Chespirito / El Chapulín Colorado; melodrama judicial tratado en serio; registro de papel, madera, polvo, archivo judicial, latón envejecido y luz de tungsteno.
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto inglés en ES y cualquier rosa o magenta en primer plano (§23.0).
- [ ] `NO CONTRADECIR` — Priorizar la legibilidad de ambos encabezados sin convertir el documento en una infografía ni añadir realces editoriales (§23.3; `src/case/case5/Private/trial_day2_success.ts:129`; `src/case/case5/Private/trial_day4_success.ts:57-58`).

### F6 Localización

- [ ] `PINTAR` — Generar el icono `libro_peritos.webp` y sus `detailedView` localizados `examine_libro_peritos.webp` / `examine_libro_peritos_en.webp`; la variante EN es obligatoria porque el argumento depende de texto legible (§23.3:4041,4049,4064; §23.5).
- [ ] `NO CONTRADECIR` — ES y EN mantienen idénticos encuadre, libro negro, cuatro filas, nombres propios, fechas, horas, ausencia de tachaduras y marcas físicas; sólo cambia el texto legible localizado (§23.3:4064).
- [ ] `TEXTO EXACTO` — No traducir el encabezado correcto como `TIME OF DEPARTURE`: el catálogo y el guion EN fijan `TIME OF ENTRY` y `TIME BADGE RETURNED` (`src/state/Private/EvidenceCatalogCase5EnB.ts:24-29`; `src/case/case5/Private/trial_day4_success_en.ts:53-62`).

## Consistencia (regenerar juntos)

- `examine_libro_peritos` y `examine_libro_peritos_en` — gemelos localizados del documento; comparten composición, cuatro asientos, nombres, horas, ausencia de tachaduras y marcas físicas; sólo cambia el texto legible. **Regenerar juntos, este activo no es fuente de verdad del otro.**
- `libro_peritos` ↔ `examine_libro_peritos` / `_en` — el icono y el `detailedView` deben representar el mismo libro pequeño de hule negro y no el libro público. **Regenerar juntos, este activo no es fuente de verdad del otro** (§23.5; §23.3).
- `examine_libro_visitas` — comparte la existencia de registros del Archivo, pero debe conservarse la separación: libro grande público con catorce firmas frente a libro pequeño profesional de cuatro asientos. **Regenerar juntos, este activo no es fuente de verdad del otro** (§4.1 P1/P4; `docs/specs/case5-assets/examine_libro_visitas.md`).
- `bg_archivo_vestibulo` — comparte la ventanilla y la distinción entre acceso público y acceso profesional; el fondo no es fuente de verdad del documento recortado. **Regenerar juntos, este activo no es fuente de verdad del otro** (§23.1; §4.1 P1).
- `examine_plano_archivo` — comparte los dos accesos, pero el plano sólo fija su relación espacial y no debe heredar filas ni encabezados del libro. **Regenerar juntos, este activo no es fuente de verdad del otro** (§4.1 P1; §23.3).
- `genoveva_idle` y `genoveva_reglamento` — comparten la identidad de la encargada de la ventanilla; ningún sprite aparece dentro del documento. **Regenerar juntos, este activo no es fuente de verdad del otro** (`src/case/case5/Private/trial_day4_success.ts:46-50`).

## Conflictos abiertos

- La declaración inicial de Genoveva llama «hora de salida» a la segunda columna, mientras §4.1 P4, §23.3, el catálogo y las líneas de éxito fijan `HORA DE DEVOLUCIÓN DE GAFETE` / `TIME BADGE RETURNED` (`src/case/case5/Private/trial_day4_t1.ts:44`; `src/case/case5/Private/trial_day4_t1_en.ts:44`; `src/case/case5/Private/trial_day4_success.ts:55-62`). Es una contradicción narrativa deliberada que este activo resuelve; no rotular la imagen con «salida».
- §23.3 exige que los cuatro asientos sean legibles, mientras el catálogo destaca explícitamente las cabeceras y el asiento de Balbuena (`src/state/Private/EvidenceCatalogCase5EsB.ts:24-29`; `src/state/Private/EvidenceCatalogCase5EnB.ts:24-29`). Se conserva el requisito más fuerte del spec: las cuatro filas deben poder leerse.
- El spec fija la hoja del 4 de diciembre de 1982, pero no exige una cadena de fecha visible en la lámina (§4.2; §23.3). La fecha es identidad del documento; no inventar una fecha impresa adicional.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, conforme al protocolo `asset-facts`; no se confirma ningún defecto visual de la exportación actual.
- Hoja preparada sólo desde el spec de Caso 5, catálogos ES/EN y guiones ES/EN D2 y D4. No se ejecutaron tests, lint, auditorías, procesamiento ni verificación de assets.
