# examine_libro_peritos — hoja de hechos

Clase: `examine`. Espec: §23.0, §23.3, §4.1 P1/P4/P5, §4.2, §5.2 y §24. Guion directo: orden y lectura del libro en D2 (`trial_day2`) y contradicciones de D2-T2 y D4-T1; variantes ES/EN: `examine_libro_peritos.webp` y `examine_libro_peritos_en.webp` se auditan juntas.

## Mapa semántico y alcance

- Objeto: libro pequeño de peritos y auxiliares de la justicia, hoja del sábado 4 de diciembre de 1982; es el segundo libro del Archivo, separado del libro público de visitas (§4.1 P1/P4; §5.2; `docs/specs/case-5-el-tomo-trece.md:206,288`).
- Medio y composición: `detailedView` de una lámina de examen, 1280 × 720 mostrada a 640 × 360; libro empastado en hule negro, mucho más delgado que el libro público (`docs/specs/case-5-el-tomo-trece.md:1709-1711`; §23.3).
- Contenido: cuatro asientos, en este orden: Hermenegildo Rosas, Fulgencio Berrondo, Hilario Balbuena y Refugio Pazguato (`docs/specs/case-5-el-tomo-trece.md:1711-1715`; §23.3).
- Columnas: sólo hora de entrada y hora de devolución de gafete; no existe columna de salida (§4.1 P4; §24.C F3; §23.3).
- Dato temporal decisivo: el tercer asiento, Balbuena, marca entrada `17:44` y devolución `18:05`; en ES el catálogo lo expresa como `17:44 / 18:05`, y en EN como `5:44 PM / 6:05 PM` (`EvidenceCatalogCase5EsB.ts:24-29`; `EvidenceCatalogCase5EnB.ts:24-29`).
- Dato probatorio de Berrondo: el segundo asiento corresponde a entrada `16:05` y devolución de gafete `16:50`; esa devolución no prueba salida (§4.2:215,221; §24.A A1; §24.C F3).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Libro pequeño, delgado, empastado en hule negro; no sustituirlo por el libro grande del acceso público (`docs/specs/case-5-el-tomo-trece.md:1709-1711`; §23.3).
- [ ] `PINTAR` — Hoja del 4 de diciembre de 1982 con exactamente cuatro asientos (`docs/specs/case-5-el-tomo-trece.md:215,233,288,1710-1715`).
- [ ] `PINTAR` — Asiento 1: Hermenegildo Rosas, perito valuador; entrada `09:10`, gafete devuelto `09:40` (`docs/specs/case-5-el-tomo-trece.md:1711-1713`).
- [ ] `PINTAR` — Asiento 2: Lic. Fulgencio Berrondo, síndico de la quiebra 114/1971; entrada `16:05`, gafete devuelto `16:50` (`docs/specs/case-5-el-tomo-trece.md:1713`; §24.C F3).
- [ ] `PINTAR` — Asiento 3: Lic. Hilario Balbuena, actuario; entrada `17:44`, gafete devuelto `18:05` (`docs/specs/case-5-el-tomo-trece.md:1714`; §24.A A10; §23.3).
- [ ] `PINTAR` — Asiento 4: Sargento Refugio Pazguato, policía judicial; entrada `17:52`, gafete devuelto `22:15` (`docs/specs/case-5-el-tomo-trece.md:1715`; §24.A A11).
- [ ] `PINTAR` — Dos columnas impresas, una para entrada y otra para devolución del gafete; conservar el orden de lectura y la alineación de las cuatro filas (`docs/specs/case-5-el-tomo-trece.md:196,288,4049`).
- [ ] `AUSENTE` — Tachaduras o correcciones en la hoja del 4 de diciembre; la contradicción de D4 depende de que no haya ninguna (`trial_day4_t1.ts:44-56`; `trial_day4_t1_en.ts:44-56`; §23.3).
- [ ] `AUSENTE` — Columna de salida, columna de permanencia o cualquier marca que convierta automáticamente la devolución del gafete en salida del edificio (§4.1 P4; §24.D I1; `trial_day2_success.ts:126-130`).
- [ ] `AUSENTE` — Libro de visitas, catorce firmas del acceso público, personajes, manos, mostrador, fondo de ventanilla o elementos de la sala; el activo es el documento recortado, no el entorno (§4.1 P1; §4.2:206; `trial_day2.ts:18-24`).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — Encabezado español de la primera columna: `HORA DE ENTRADA` (§23.3; `trial_day2_success.ts:129`).
- [ ] `TEXTO EXACTO` — Encabezado español de la segunda columna: `HORA DE DEVOLUCIÓN DE GAFETE` (§23.3; `trial_day2_success.ts:129`; `trial_day4_success.ts:57-58`).
- [ ] `TEXTO EXACTO` — Los nombres, cargos y horas de los cuatro asientos deben ser legibles y coincidir con la lectura del secretario (`trial_day2.ts:20-24`; §23.3).
- [ ] `TEXTO EXACTO` — En la variante inglesa, los encabezados deben ser `TIME OF ENTRY` y `TIME BADGE RETURNED`, y el tercer asiento debe conservar `5:44 PM / 6:05 PM` (`EvidenceCatalogCase5EnB.ts:24-29`; `trial_day2_success_en.ts:124-130`; `trial_day4_success_en.ts:53-58`).
- [ ] `AUSENTE` — Prosa explicativa, título de lámina, flechas, círculos, realces, marcas de respuesta, marcas de agua o texto inglés en la variante ES (§23.0, §23.3; `trial_day2_success.ts:129`).

### F3 Cifras/fechas/horas

- [ ] `NO CONTRADECIR` — El presente del caso es 1982 y la hoja corresponde al sábado 4 de diciembre; no imprimir otra fecha (§4.2:202-215; §24.D I10).
- [ ] `NO CONTRADECIR` — La entrada de Berrondo es `16:05` y la devolución `16:50`; su devolución ocurre mientras sigue dentro del edificio y no registra salida (§4.2:215,221,238; §24.A A1; §24.D I1, I17).
- [ ] `NO CONTRADECIR` — Balbuena entra a las `17:44`, después del hallazgo de las 17:35, y devuelve el gafete a las `18:05`; Pazguato entra a las `17:52` y devuelve a las `22:15` (§24.A A10-A11; §24.C F16).
- [ ] `NO CONTRADECIR` — El libro registra entradas y devoluciones de gafete, no un censo de quién permanecía dentro ni una hora de salida (§24.C F3; `trial_day4_success.ts:64-65`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En D2 el alguacil deposita el libro negro, el secretario lee los cuatro asientos y después el Acta entrega `libro_peritos` y el perfil de Genoveva; el activo debe permitir reconocer el documento que acaba de leerse (`trial_day2.ts:18-36`; `trial_day2_en.ts:18-36`).
- [ ] `PINTAR` — En D2-T2 la defensa presenta este activo para demostrar que la frase de Berrondo «salí a las dieciséis cincuenta» no está respaldada por una columna de salida; el encabezado de devolución debe ser legible y no debe sugerir que 16:50 sea una salida (`trial_day2_t2.ts:104-110`; `trial_day2_success.ts:124-130`; variantes EN equivalentes).
- [ ] `PINTAR` — En D4-T1 la defensa presenta el mismo activo contra la afirmación de Genoveva de que las cuatro personas tienen hora de entrada y hora de salida; el segundo encabezado debe resolver la contradicción como `devolución de gafete` (`trial_day4_t1.ts:44-56`; `trial_day4_success.ts:53-65`; variantes EN equivalentes).
- [ ] `NO CONTRADECIR` — La ausencia de columna de salida no elimina las cuatro devoluciones de gafete ni convierte el documento en incompleto: la sorpresa nace de la etiqueta exacta de la segunda columna (§4.1 P4; `trial_day4_success.ts:57-62`).
- [ ] `NO CONTRADECIR` — El documento no prueba que Berrondo saliera a las 16:50 ni que estuviera fuera antes de las 17:02; sólo prueba entrada y devolución (§24.C F3; §24.D I1; `trial_day4_success.ts:36-39`).
- [ ] `NO CONTRADECIR` — La hoja no debe aparecer como conocida o leída antes de que la corte ordene producirla en D2; el descubrimiento del libro ocurre en el juicio, no durante la investigación del D1 (§4.1 P1; §24.D I18; `trial_day1_success.ts:123-126`).

### F5 Estilo y prohibidos

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA / Nintendo DS) en alta definición; ; contorno oscuro nítido y continuo en carbón `#1A1A1A`, más grueso en la silueta exterior que en los detalles internos; anatomía facial expresiva y exagerada cuando aparezca una persona; colores primarios saturados.
- [ ] Contrato §23.0 completo en el prompt: televisión mexicana de los años setenta, universo Chespirito / El Chapulín Colorado; melodrama judicial tratado en serio por el sistema y absurdo en los personajes; registro de papel, madera y polvo, archivo judicial, expedientes atados con listón, madera barnizada, latón envejecido y luz de tungsteno.
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, estética de cómic americano, marcas de agua, flechas/círculos/realces y cualquier tono rosa o magenta en primer plano (§23.0; §23.3; `docs/architecture/asset-pipeline.md`).
- [ ] `NO CONTRADECIR` — La legibilidad tipográfica es prioritaria: el argumento depende de leer ambos encabezados, pero el documento sigue siendo un objeto de archivo sobrio, no una infografía ni una lámina autodescriptiva (§23.3; `trial_day2_success.ts:129`; `trial_day4_success.ts:57-58`).

### F6 Localización

- [ ] `PINTAR` — Generar `examine_libro_peritos.webp` y `examine_libro_peritos_en.webp`; §23.3 exige variante EN porque el argumento depende de texto legible (§23.3:4041,4049,4064).
- [ ] `NO CONTRADECIR` — Mantener idénticos entre ES/EN el encuadre, libro negro, cuatro filas, nombres propios, fechas, horas, ausencia de tachaduras y marcas físicas; sólo traducir el texto legible que sostiene el argumento (§23.3; §23.3:4064).
- [ ] `TEXTO EXACTO` — En EN usar `TIME OF ENTRY` y `TIME BADGE RETURNED`; el catálogo inglés confirma esas cadenas y el formato horario `5:44 PM / 6:05 PM` (`EvidenceCatalogCase5EnB.ts:24-29`; `trial_day4_success_en.ts:57-58`).
- [ ] `NO CONTRADECIR` — No usar la etiqueta inglesa `TIME OF DEPARTURE`: la traducción del guion habla de departure como el error de Genoveva, pero el encabezado correcto es `TIME BADGE RETURNED` (`trial_day4_t1_en.ts:44`; `trial_day4_success_en.ts:55-62`).

## Consistencia (regenerar juntos)

- `examine_libro_peritos_en` — gemelo localizado; comparte composición, cuatro asientos, horas, ausencia de tachaduras y marcas físicas; sólo cambia el texto legible. **Regenerar juntos, este activo no es fuente de verdad del otro** (§23.3).
- `examine_libro_visitas` — comparte la idea de un libro del Archivo y la comparación entre accesos, pero este activo debe seguir siendo el libro pequeño profesional de dos columnas y no heredar las catorce firmas, el sello del público ni el tamaño del libro grande. **Regenerar juntos, este activo no es fuente de verdad del otro** (§4.1 P1; §23.3; `examine_libro_visitas.md`).
- `bg_archivo_vestibulo` — comparte el acceso público y la existencia de una ventanilla separada; el fondo no es fuente de verdad del recorte documental. **Regenerar juntos, este activo no es fuente de verdad del otro** (§23.1; §4.1 P1).
- `genoveva_idle` y `genoveva_reglamento` — comparten a Genoveva como encargada de la ventanilla y el contexto del segundo libro, pero ningún sprite debe hornearse en la lámina ni fijar su texto. **Regenerar juntos, este activo no es fuente de verdad del otro** (§12.3; `trial_day4_success.ts:46-50`).
- `examine_plano_archivo` — comparte la distinción entre acceso público y acceso de peritos/auxiliares; el plano usa rótulos de accesos y el libro materializa la segunda vía, sin añadir al plano el contenido de esta hoja. **Regenerar juntos, este activo no es fuente de verdad del otro** (§4.1 P1; §23.3).
- `examine_libro_peritos` ES↔EN — gemelos de idioma del mismo documento; la aceptación debe comprobar paridad de conteos, nombres, horas, composición y defecto de texto, cambiando sólo las cadenas localizadas. **Regenerar juntos, este activo no es fuente de verdad del otro**.

## Conflictos abiertos

- §4.1 P4, §23.3, el catálogo y las líneas de éxito fijan que la segunda columna es «HORA DE DEVOLUCIÓN DE GAFETE» / `TIME BADGE RETURNED` y que no existe columna de salida. Sin embargo, la declaración inicial de Genoveva dice que las cuatro personas aparecen con hora de «salida» / `departure` (`trial_day4_t1.ts:44`; `trial_day4_t1_en.ts:44`). Es una contradicción narrativa deliberada que la presentación de este activo resuelve; no rotular la imagen con «salida».
- La tabla de §23.3 exige que los cuatro nombres y horas sean legibles, mientras el catálogo sólo destaca expresamente las cabeceras y el tercer asiento (`EvidenceCatalogCase5EsB.ts:26-29`; `EvidenceCatalogCase5EnB.ts:26-29`). Aceptar la exigencia más fuerte del spec: las cuatro filas deben poder leerse, sin convertirlas en texto explicativo añadido.
- La hoja se ordena «del cuatro de diciembre» y el libro de hechos fija 1982 (§4.2; §24.D I10), pero la fila de §23.3 no exige imprimir una fecha visible en la página. La fecha es identidad de documento y no una cadena adicional salvo que el diseño del folio la necesite; no inventar otro día o año.

## Hallazgos de auditoría 2026-09-19

~~- No se inspeccionó ninguna imagen, conforme al protocolo `asset-facts`; por tanto, no se confirma ningún defecto visual de la exportación actual.~~ — Pasada previa sin inspección; sustituida por esta auditoría con recortes ES/EN.

**Veredicto: NO CUMPLE** (contenido y localización). Contenido F1/F2/F3/F4 con defectos MAYOR en ambas variantes; estilo F5 con desviación registrada (decisión del revisor); exclusiones de F1 rotas en ES; F6 paridad de gemelos rota por completo.

### Cumple

- ES/EN: dos columnas impresas, sin columna de salida ni permanencia (F1/F2, `trial_day2_success.ts:126-130`) ✓
- ES: encabezados `HORA DE ENTRADA` / `HORA DE DEVOLUCIÓN DE GAFETE` exactos y legibles ✓
- EN: encabezados `TIME OF ENTRY` / `TIME BADGE RETURNED`; no aparece `TIME OF DEPARTURE` ✓
- ES: fila 2 `16:05 - 16:50`, fila 3 `17:44 - 18:05`, fila 4 `17:52 - 22:15` ✓ (F3; `EvidenceCatalogCase5EsB.ts:24-29`)
- EN: fila 3 Balbuena `5:44 PM / 6:05 PM` ✓ (F3)
- Ambas: sin tachaduras ni correcciones (F1 AUSENTE, `trial_day4_t1.ts:44-56`) ✓
- ES: no hay texto inglés ni marcas de agua (F2) ✓

### Defectos confirmados

ES (`examine_libro_peritos.png`):
1. **MAYOR / CONTRADICE (F1)** — El libro es un tomo grueso de piel/duro con hebillas de latón, cinta roja y marco dorado en la página: no es «libro pequeño, delgado, empastado en hule negro», y su masa/aspecto hereda la identidad del libro público grande (`case-5-el-tomo-trece.md:1709-1711`; D2 `trial_day2.ts:18-36`).
2. **MEDIO / AUSENTE (F1/F2)** — Faltan los cargos de los cuatro asientos (perito valuador, síndico de la quiebra 114/1971, actuario, policía judicial) que el secretario lee (`trial_day2.ts:20-24`).
3. **MAYOR / AUSENTE (F1, exclusión)** — Fondo pintado con escritorio, silla, pila de expedientes atados, lámpara de latón y ventanal: el activo debe ser «el documento recortado, no el entorno» (`trial_day2.ts:18-24`).
4. **MEDIO / CONTRADICE (F2)** — Insignia «5 EXAMINE» horneada en la esquina superior izquierda: rótulo de lámina prohibido (§23.3) salvo que sea UI del motor; confirmar y regenerar sin ella.
5. **MENOR / DRIFT (F3)** — Asiento 1 impreso `9:10 - 9:40` en vez de `09:10 / 09:40`; la hoja fija formato `09:10`.
6. **MEDIO / CONTRADICE (F1, exclusión)** — Marco dorado alrededor de la hoja y numeración 1-4 añadida: rotulación no pedida (§23.3; matiz: la numeración es defensible como folio, decide el revisor).

EN (`examine_libro_peritos_en.png`):
7. **MAYOR / CONTRADICE (F3/F2)** — Se imprime la fecha «(1974)» y en el expediente de fondo «EXP. 17-12-74»: el presente del caso es 1982 y «no imprimir otra fecha» (§4.2; §24.D I10).
8. **MAYOR / CONTRADICE (F3)** — Horas de los asientos 1, 2 y 4 erróneas: ROSAS `4:10 PM / 4:32 PM` (debe ser 9:10 AM / 9:40 AM), BERRONDO `4:58 PM / 5:20 PM` (debe ser 4:05 PM / 4:50 PM, rompe la contradicción D2-T2), PAZGUATO `6:30 PM / 6:52 PM` (debe ser 5:52 PM / 10:15 PM) (`EvidenceCatalogCase5EnB.ts:24-29`; `trial_day2_t2.ts:104-110`).
9. **MEDIO / CONTRADICE (F2/F6)** — Título añadido «REGISTRO DE INSIGNIAS» y apellidos sin cargos; sólo debe traducirse el texto que sostiene el argumento (§23.3; `trial_day2.ts:20-24`).
10. **MAYOR / CONTRADICE (F6, paridad)** — Composición totalmente distinta al gemelo ES: libro abierto a doble página con página izquierda en blanco, encuadre distinto, folio «48», fondo y remate distintos; los gemelos deben compartir composición, filas y remates (§23.3).
11. **MEDIO / AUSENTE (F1)** — El libro vuelve a ser grueso, no el libro delgado de hule negro (F1, ítem 1).
12. **MENOR / DRIFT (F6)** — El folio inglés conserva «4 DE DICIEMBRE» en español sin decisión de diseño; el resto del texto está traducido.

Estilo (F5, decisión del revisor):
- Ambas variantes usan textura de papel/madera con sombreado suave y grano fotográfico en la madera; §23.0 exige cel-shading plano con terminador duro y contorno `#1A1A1A`. Registrado como desviación; la aceptación es del revisor. Sin rosa/magenta, sin marcas de agua ✓.

### Correcciones de auditoría

- ~~- No se inspeccionó ninguna imagen, conforme al protocolo `asset-facts`…~~ — sustituido por la auditoría del 2026-09-19 con recortes ES/EN.
- Los ✓ de contenido del bloque previo (ninguno listado) no cambian; se añaden los defectos 1-12. Ningún hallazgo retirado aún.

### Recomendación (regenerar ES y EN juntos, en orden del conjunto de consistencia)

1. Libro: pequeño, delgado, empastado en hule negro, recortado como documento (sin escritorio, lámpara, pila de expedientes, silla ni ventanal; sin marco dorado ni insignia «EXAMINE» horneada).
2. Estructura de la hoja: dos columnas con encabezados `HORA DE ENTRADA` / `HORA DE DEVOLUCIÓN DE GAFETE` (ES) y `TIME OF ENTRY` / `TIME BADGE RETURNED` (EN); sin título de lámina, sin fecha impresa distinta de «4 de diciembre de 1982» o sin fecha si el diseño no la necesita (prohibido 1974).
3. Cuatro asientos con nombre, cargo y horas exactas: Rosas (perito valuador) `09:10 / 09:40`; Berrondo (síndico de la quiebra 114/1971) `16:05 / 16:50` (ES) / `4:05 PM / 4:50 PM` (EN); Balbuena (actuario) `17:44 / 18:05` / `5:44 PM / 6:05 PM`; Pazguato (policía judicial) `17:52 / 22:15` / `5:52 PM / 10:15 PM`.
4. Paridad ES↔EN: idéntica composición, encuadre, remates y ausencia de marcas; sólo cambia el texto legible localizado.
5. Estilo: cel-shading de colores planos con terminador duro y contorno carbón `#1A1A1A`; sin grano fotográfico ni sombreado suave (§23.0).
