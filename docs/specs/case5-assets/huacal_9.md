# huacal_9 — hoja de hechos

Clase: `icon` / prueba del Acta. Espec: §23.0, §23.3, §23.5, §5.3, §14.1, §15.2, §18.3 y §24.B–§24.D. Guion: investigación D3 `bodega_masa`; D3-T1 `followUp`; clímax E3. Catálogo: `src/state/Private/EvidenceCatalogCase5EsB.ts`; `src/state/Private/EvidenceCatalogCase5EnB.ts`. La hoja cubre el icono `huacal_9` y su `detailedView`, `examine_huacal9.webp` / `_en.webp`.

## Mapa semántico y alcance

- Lugar y momento: huacal de madera número 9, en la bodega de bienes del sótano del Archivo Judicial, quiebra 114/1971; se recoge durante la investigación del día 3 (`docs/specs/case-5-el-tomo-trece.md:295,2084-2088`).
- Objeto visible: tapa de un depósito judicial, cubierta por una acumulación histórica de tiras de sello engomado superpuestas; el icono debe identificar el mismo huacal cuya tapa se examina en detalle (`docs/specs/case-5-el-tomo-trece.md:2152-2167,4058`; `src/state/Private/EvidenceCatalogCase5EsB.ts:38-43`).
- Marcas decisivas: más de 250 tiras, cada una con rúbrica y fecha; la tira superior es blanca y limpia y dice `SÁB 4-XII`; debajo asoma otra con la misma fecha (`docs/specs/case-5-el-tomo-trece.md:2165,4058`).
- Función narrativa: la tira superior contradice la rutina declarada de aperturas los jueves; la segunda tira del mismo día se reserva para demostrar en E3 que el huacal fue abierto dos veces (`docs/specs/case-5-el-tomo-trece.md:2165-2167`; `src/case/case5/Private/trial_day3_success.ts:52-67`).
- Medio: el icono es un recorte de prueba del Acta; no debe intentar pintar la bodega completa ni adelantar la interpretación de la segunda apertura.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Una tapa de huacal de madera, reconocible como el huacal 9 de la quiebra 114/1971; el encuadre puede ser un recorte de la tapa, no una vista general de la bodega (`docs/specs/case-5-el-tomo-trece.md:295`; `src/state/Private/EvidenceCatalogCase5EsB.ts:38-43`).
- [ ] `PINTAR` — Más de doscientas cincuenta tiras de sello engomado, encabalgadas y amarilleando hacia abajo; deben leerse como capas físicas acumuladas, no como decoración plana (`docs/specs/case-5-el-tomo-trece.md:2165,4058`).
- [ ] `PINTAR` — Las tiras llevan rúbrica y fecha manuscritas con el formato institucional `DÍA D-MES` (`docs/specs/case-5-el-tomo-trece.md:2165,4058`).
- [ ] `PINTAR` — La tira superior es blanca y limpia, visualmente más reciente, y la tira inmediatamente inferior asoma medio tapada (`docs/specs/case-5-el-tomo-trece.md:2165`).
- [ ] `NO CONTRADECIR` — La composición debe conservar la identidad de la tapa y sus sellos; no sustituirla por los nueve cajones, la máquina de escribir, la pata de cabra o el interior de la bodega (`docs/specs/case-5-el-tomo-trece.md:3990,4058`).
- [ ] `AUSENTE` — Personajes, manos, flechas, círculos, realces, carteles de «primera/segunda apertura» y cualquier explicación del clímax; la pista debe quedar visible sin señalar la respuesta (`docs/specs/case-5-el-tomo-trece.md:2165-2167`).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — Variante ES: la tira superior debe permitir leer `SÁB 4-XII`; la inferior conserva la misma fecha aunque quede parcialmente cubierta (`docs/specs/case-5-el-tomo-trece.md:2165,4058`; `src/state/Private/EvidenceCatalogCase5EsB.ts:40-43`).
- [ ] `TEXTO EXACTO` — Variante EN: la tira superior debe permitir leer `SAT 4-XII`; la composición física y la fecha del 4 de diciembre permanecen iguales (`docs/specs/case-5-el-tomo-trece.md:4064-4066`; `src/state/Private/EvidenceCatalogCase5EnB.ts:40-43`).
- [ ] `NO CONTRADECIR` — Las demás fechas pueden ser manuscritas y difíciles de leer; el `followUp` sólo exige la fecha completa de la tira superior (`docs/specs/case-5-el-tomo-trece.md:2165`; `src/case/case5/Private/trial_day3_t1.ts:63-69`).
- [ ] `AUSENTE` — No imprimir en el icono que hubo dos aperturas el 4 de diciembre; esa conclusión depende de comparar las dos tiras y se argumenta en E3 (`docs/specs/case-5-el-tomo-trece.md:2165-2167`).

### F3 Cifras, fechas y estados

- [ ] `NO CONTRADECIR` — El objeto es el huacal número 9 y pertenece a la quiebra 114/1971 (`docs/specs/case-5-el-tomo-trece.md:295`; `src/state/Private/EvidenceCatalogCase5EsB.ts:38-40`).
- [ ] `NO CONTRADECIR` — La tapa registra más de 250 aperturas desde 1971; el número exacto pertenece también al diálogo y no necesita imprimirse como contador (`src/case/case5/Private/bodega_masa_hotspots.ts:17-27`; `src/case/case5/Private/trial_day3_success.ts:66-67`).
- [ ] `NO CONTRADECIR` — El 4 de diciembre es sábado, en oposición a la rutina ordinaria de aperturas los jueves; el icono no debe cambiar la fecha ni convertirla en jueves (`docs/specs/case-5-el-tomo-trece.md:208-216,3894-3896`; `src/case/case5/Private/trial_day3_success_en.ts:52-58`).
- [ ] `NO CONTRADECIR` — Las dos tiras del 4 de diciembre pertenecen al mismo día, pero la fotografía no identifica por sí sola quién abrió la segunda vez; E3 necesita la rúbrica y el cotejo de vales (`docs/specs/case-5-el-tomo-trece.md:2165-2167`; `docs/specs/case-5-el-tomo-trece.md:4196`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En D3, la investigación explica que cada apertura añade una tira nueva encima de la anterior, sin retirar las capas previas, y luego entrega `huacal_9` (`src/case/case5/Private/bodega_masa_hotspots.ts:17-27`; variante EN `bodega_masa_hotspots_en.ts:17-27`).
- [ ] `PINTAR` — El `followUp` de D3-T1 pregunta qué fecha completa aparece en la tira superior; la respuesta visible es `SÁB cuatro de diciembre` en ES y `SAT December 4` en EN (`src/case/case5/Private/trial_day3_t1.ts:63-69`; `src/case/case5/Private/trial_day3_t1_en.ts:63-69`; `src/case/case5/Private/trial_day3_success.ts:52-55`; `src/case/case5/Private/trial_day3_success_en.ts:52-55`).
- [ ] `PINTAR` — Tras la presentación, la corte ordena incorporar la fotografía de la tapa y el Sargento confirma que hay más de 250 tiras (`src/case/case5/Private/trial_day3_success.ts:51-67`; `src/case/case5/Private/trial_day3_success_en.ts:52-66`).
- [ ] `NO CONTRADECIR` — La segunda tira debe estar visible desde D3, pero el guion sólo usa la tira superior en el `followUp`; la duplicación se argumenta después, en la etapa 3 del clímax (`docs/specs/case-5-el-tomo-trece.md:2165-2167`; `src/case/case5/Private/climax_stage3_success.ts:36-44`).
- [ ] `NO CONTRADECIR` — La fecha visible prueba la contradicción con los jueves, no la culpabilidad ni por sí sola la identidad del abridor (`docs/specs/case-5-el-tomo-trece.md:4196-4197`).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt de regeneración: ilustración 2D HD estilo *Capcom Ace Attorney* de linaje GBA/Nintendo DS; ; contorno continuo carbón `#1A1A1A`; paleta primaria saturada; tema mexicano setentero/Chespirito con papel, madera, polvo, archivo judicial, latón envejecido y luz de tungsteno (`docs/specs/case-5-el-tomo-trece.md:3974-3980`).
- [ ] `AUSENTE` — Prohibidos fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto en inglés salvo la variante EN exigida y cualquier rosa o magenta en primer plano (`docs/specs/case-5-el-tomo-trece.md:3978-3980`).
- [ ] `NO CONTRADECIR` — Las sombras de las capas pueden ser claras para comunicar profundidad, pero no deben convertirse en textura fotográfica ni cambiar el medio a una foto realista (`docs/specs/case-5-el-tomo-trece.md:2165,3978-3980`).

### F6 Localización

- [ ] `GEMELOS DE IDIOMA` — ES y EN conservan encuadre, orientación, número de capas, sombras, rúbricas, amarilleamiento y duplicación del 4 de diciembre; sólo localizan la abreviatura legible del día (`docs/specs/case-5-el-tomo-trece.md:4064-4066`).
- [ ] `TEXTO EXACTO` — ES usa `SÁB 4-XII`; EN usa `SAT 4-XII`. La variante EN es obligatoria porque `SÁB` sostiene el argumento del `followUp` para el jugador español y debe tener equivalente legible en inglés (`docs/specs/case-5-el-tomo-trece.md:4066,4192`; catálogos ES/EN, líneas 40-43).
- [ ] `NO CONTRADECIR` — No traducir la fecha a otro día, no cambiar `4-XII` y no borrar la segunda tira en la variante inglesa (`src/state/Private/EvidenceCatalogCase5EnB.ts:40-43`; `docs/specs/case-5-el-tomo-trece.md:4064-4066`).

## Consistencia (regenerar juntos)

- `examine_huacal9` / `examine_huacal9_en` — son la vista ampliada del mismo objeto. Comparten la tapa, las más de 250 tiras, la sombra de las capas y las dos tiras del 4 de diciembre; sólo cambia `SÁB` por `SAT`. Regenerar juntos; este activo no es fuente de verdad del otro (`docs/specs/case-5-el-tomo-trece.md:4058,4064-4066`).
- `bg_bodega_masa` — comparte el huacal 9, su madera y las tiras de sellado en la bodega. Regenerar juntos, este activo no es fuente de verdad del otro; el icono no debe importar el encuadre completo del fondo (`docs/specs/case-5-el-tomo-trece.md:3990`).
- `plate_huacal_sellos` — comparte la junta, la tira nueva y la regla de superponer cada sello sin retirar los anteriores. Regenerar juntos, este activo no es fuente de verdad del otro; la placa explica el mecanismo y el icono identifica la prueba concreta (`docs/specs/case-5-el-tomo-trece.md:2155-2162,4081`).
- `huacal_9` ↔ `examine_huacal9.webp` / `_en.webp` — gemelos de prueba: el icono y el `detailedView` deben representar una sola tapa, no dos crates distintos. Regenerar juntos, ninguno es fuente de verdad del otro; manda el spec y los catálogos.
- `climax_stage3_success.ts` / `_en.ts` — el clímax reutiliza la fotografía de la tapa para leer la segunda tira y su rúbrica. Regenerar junto con las variantes del activo, pero el guion no es fuente de verdad visual (`src/case/case5/Private/climax_stage3_success.ts:36-44`).

## Conflictos abiertos

- §5.3 dice que «las dos superiores llevan la fecha completa `SÁB 4-XII`», mientras §23.3 y el `detailedView` precisan que la superior es blanca y limpia y que la inferior sólo asoma medio tapada (`docs/specs/case-5-el-tomo-trece.md:295,2165,4058`). Registrar la duplicación, pero no resolver aquí el grado exacto de legibilidad de la tira inferior.
- Los catálogos ES y EN dicen que cada tira está fechada «con día de la semana», mientras §23.3 fija el formato institucional `DÍA D-MES` (`src/state/Private/EvidenceCatalogCase5EsB.ts:40`; `src/state/Private/EvidenceCatalogCase5EnB.ts:40`; `docs/specs/case-5-el-tomo-trece.md:2165,4058`). La hoja conserva ambos requisitos sin decidir si todas las fechas deben mostrar abreviatura de día.
- El catálogo sólo promete como legible la tira superior (`src/state/Private/EvidenceCatalogCase5EsB.ts:40-43`; `src/state/Private/EvidenceCatalogCase5EnB.ts:40-43`), pero §23.3 exige que la inferior también contenga `SÁB 4-XII` aunque esté medio tapada (`docs/specs/case-5-el-tomo-trece.md:4058`). No convertir esa tensión en una lectura plenamente legible de la segunda tira.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, conforme al protocolo `asset-facts`; por tanto, no se confirma ningún defecto visual de la generación actual. Esta hoja contiene únicamente hechos derivados del spec, catálogos y guiones ES/EN.
