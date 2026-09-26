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
- [ ] `TEXTO EXACTO` — Encabezado español de la segunda columna: `HORA DE DEVOLUCIÓN DE GAFETE` (§23.3; `trial_day2_success.ts:129`; `trial_day4_success.ts:58-59`).
- [ ] `TEXTO EXACTO` — Los nombres, cargos y horas de los cuatro asientos deben ser legibles y coincidir con la lectura del secretario (`trial_day2.ts:20-24`; §23.3).
- [ ] `TEXTO EXACTO` — En la variante inglesa, los encabezados deben ser `TIME OF ENTRY` y `TIME BADGE RETURNED`, y el tercer asiento debe conservar `5:44 PM / 6:05 PM` (`EvidenceCatalogCase5EnB.ts:24-29`; `trial_day2_success_en.ts:124-130`; `trial_day4_success_en.ts:54-59`).
- [ ] `AUSENTE` — Prosa explicativa, título de lámina, flechas, círculos, realces, marcas de respuesta, marcas de agua o texto inglés en la variante ES (§23.0, §23.3; `trial_day2_success.ts:129`).

### F3 Cifras/fechas/horas

- [ ] `NO CONTRADECIR` — El presente del caso es 1982 y la hoja corresponde al sábado 4 de diciembre; no imprimir otra fecha (§4.2:202-215; §24.D I10).
- [ ] `NO CONTRADECIR` — La entrada de Berrondo es `16:05` y la devolución `16:50`; su devolución ocurre mientras sigue dentro del edificio y no registra salida (§4.2:215,221,238; §24.A A1; §24.D I1, I17).
- [ ] `NO CONTRADECIR` — Balbuena entra a las `17:44`, después del hallazgo de las 17:35, y devuelve el gafete a las `18:05`; Pazguato entra a las `17:52` y devuelve a las `22:15` (§24.A A10-A11; §24.C F16).
- [ ] `NO CONTRADECIR` — El libro registra entradas y devoluciones de gafete, no un censo de quién permanecía dentro ni una hora de salida (§24.C F3; `trial_day4_success.ts:65-66`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En D2 el alguacil deposita el libro negro, el secretario lee los cuatro asientos y después el Acta entrega `libro_peritos` y el perfil de Genoveva; el activo debe permitir reconocer el documento que acaba de leerse (`trial_day2.ts:18-36`; `trial_day2_en.ts:18-36`).
- [ ] `PINTAR` — En D2-T2 la defensa presenta este activo para demostrar que la frase de Berrondo «salí a las dieciséis cincuenta» no está respaldada por una columna de salida; el encabezado de devolución debe ser legible y no debe sugerir que 16:50 sea una salida (`trial_day2_t2.ts:104-110`; `trial_day2_success.ts:124-130`; variantes EN equivalentes).
- [ ] `PINTAR` — En D4-T1 la defensa presenta el mismo activo contra la afirmación de Genoveva de que las cuatro personas tienen hora de entrada y hora de salida; el segundo encabezado debe resolver la contradicción como `devolución de gafete` (`trial_day4_t1.ts:44-56`; `trial_day4_success.ts:54-66`; variantes EN equivalentes).
- [ ] `NO CONTRADECIR` — La ausencia de columna de salida no elimina las cuatro devoluciones de gafete ni convierte el documento en incompleto: la sorpresa nace de la etiqueta exacta de la segunda columna (§4.1 P4; `trial_day4_success.ts:58-63`).
- [ ] `NO CONTRADECIR` — El documento no prueba que Berrondo saliera a las 16:50 ni que estuviera fuera antes de las 17:02; sólo prueba entrada y devolución (§24.C F3; §24.D I1; `trial_day4_success.ts:37-40`).
- [ ] `NO CONTRADECIR` — La hoja no debe aparecer como conocida o leída antes de que la corte ordene producirla en D2; el descubrimiento del libro ocurre en el juicio, no durante la investigación del D1 (§4.1 P1; §24.D I18; `trial_day1_success.ts:123-126`).

### F5 Estilo y prohibidos

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA / Nintendo DS) en alta definición; ; contorno oscuro nítido y continuo en carbón `#1A1A1A`, más grueso en la silueta exterior que en los detalles internos; anatomía facial expresiva y exagerada cuando aparezca una persona; colores primarios saturados.
- [ ] Contrato §23.0 completo en el prompt: televisión mexicana de los años setenta, universo Chespirito / El Chapulín Colorado; melodrama judicial tratado en serio por el sistema y absurdo en los personajes; registro de papel, madera y polvo, archivo judicial, expedientes atados con listón, madera barnizada, latón envejecido y luz de tungsteno.
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, estética de cómic americano, marcas de agua, flechas/círculos/realces y cualquier tono rosa o magenta en primer plano (§23.0; §23.3; `docs/architecture/asset-pipeline.md`).
- [ ] `NO CONTRADECIR` — La legibilidad tipográfica es prioritaria: el argumento depende de leer ambos encabezados, pero el documento sigue siendo un objeto de archivo sobrio, no una infografía ni una lámina autodescriptiva (§23.3; `trial_day2_success.ts:129`; `trial_day4_success.ts:58-59`).

### F6 Localización

- [ ] `PINTAR` — Generar `examine_libro_peritos.webp` y `examine_libro_peritos_en.webp`; §23.3 exige variante EN porque el argumento depende de texto legible (§23.3:4041,4049,4064).
- [ ] `NO CONTRADECIR` — Mantener idénticos entre ES/EN el encuadre, libro negro, cuatro filas, nombres propios, fechas, horas, ausencia de tachaduras y marcas físicas; sólo traducir el texto legible que sostiene el argumento (§23.3; §23.3:4064).
- [ ] `TEXTO EXACTO` — En EN usar `TIME OF ENTRY` y `TIME BADGE RETURNED`; el catálogo inglés confirma esas cadenas y el formato horario `5:44 PM / 6:05 PM` (`EvidenceCatalogCase5EnB.ts:24-29`; `trial_day4_success_en.ts:58-59`).
- [ ] `NO CONTRADECIR` — No usar la etiqueta inglesa `TIME OF DEPARTURE`: la traducción del guion habla de departure como el error de Genoveva, pero el encabezado correcto es `TIME BADGE RETURNED` (`trial_day4_t1_en.ts:44`; `trial_day4_success_en.ts:56-63`).

## Consistencia (regenerar juntos)

- `examine_libro_peritos_en` — gemelo localizado; comparte composición, cuatro asientos, horas, ausencia de tachaduras y marcas físicas; sólo cambia el texto legible. **Regenerar juntos, este activo no es fuente de verdad del otro** (§23.3).
- `examine_libro_visitas` — comparte la idea de un libro del Archivo y la comparación entre accesos, pero este activo debe seguir siendo el libro pequeño profesional de dos columnas y no heredar las catorce firmas, el sello del público ni el tamaño del libro grande. **Regenerar juntos, este activo no es fuente de verdad del otro** (§4.1 P1; §23.3; `examine_libro_visitas.md`).
- `bg_archivo_vestibulo` — comparte el acceso público y la existencia de una ventanilla separada; el fondo no es fuente de verdad del recorte documental. **Regenerar juntos, este activo no es fuente de verdad del otro** (§23.1; §4.1 P1).
- `genoveva_idle` y `genoveva_reglamento` — comparten a Genoveva como encargada de la ventanilla y el contexto del segundo libro, pero ningún sprite debe hornearse en la lámina ni fijar su texto. **Regenerar juntos, este activo no es fuente de verdad del otro** (§12.3; `trial_day4_success.ts:47-51`).
- `examine_plano_archivo` — comparte la distinción entre acceso público y acceso de peritos/auxiliares; el plano usa rótulos de accesos y el libro materializa la segunda vía, sin añadir al plano el contenido de esta hoja. **Regenerar juntos, este activo no es fuente de verdad del otro** (§4.1 P1; §23.3).
- `examine_libro_peritos` ES↔EN — gemelos de idioma del mismo documento; la aceptación debe comprobar paridad de conteos, nombres, horas, composición y defecto de texto, cambiando sólo las cadenas localizadas. **Regenerar juntos, este activo no es fuente de verdad del otro**.

## Conflictos abiertos

- §4.1 P4, §23.3, el catálogo y las líneas de éxito fijan que la segunda columna es «HORA DE DEVOLUCIÓN DE GAFETE» / `TIME BADGE RETURNED` y que no existe columna de salida. Sin embargo, la declaración inicial de Genoveva dice que las cuatro personas aparecen con hora de «salida» / `departure` (`trial_day4_t1.ts:44`; `trial_day4_t1_en.ts:44`). Es una contradicción narrativa deliberada que la presentación de este activo resuelve; no rotular la imagen con «salida».
- La tabla de §23.3 exige que los cuatro nombres y horas sean legibles, mientras el catálogo sólo destaca expresamente las cabeceras y el tercer asiento (`EvidenceCatalogCase5EsB.ts:26-29`; `EvidenceCatalogCase5EnB.ts:26-29`). Aceptar la exigencia más fuerte del spec: las cuatro filas deben poder leerse, sin convertirlas en texto explicativo añadido.
- La hoja se ordena «del cuatro de diciembre» y el libro de hechos fija 1982 (§4.2; §24.D I10), pero la fila de §23.3 no exige imprimir una fecha visible en la página. La fecha es identidad de documento y no una cadena adicional salvo que el diseño del folio la necesite; no inventar otro día o año.

## Hallazgos de auditoría 2026-09-19

~~- No se inspeccionó ninguna imagen, conforme al protocolo `asset-facts`; por tanto, no se confirma ningún defecto visual de la exportación actual.~~ — Pasada previa sin inspección; sustituida por la auditoría con recortes ES/EN.

~~**Veredicto: NO CUMPLE** (contenido y localización).~~ — Sustituido por la regeneración RAW Lote K del mismo día (abajo).

### Cumple (pasada previa, RAW anteriores)

- ES/EN: dos columnas impresas, sin columna de salida ni permanencia (F1/F2, `trial_day2_success.ts:126-130`) ✓ — se conserva en la regeneración
- ES: encabezados `HORA DE ENTRADA` / `HORA DE DEVOLUCIÓN DE GAFETE` exactos y legibles ✓ — se conserva
- EN: encabezados `TIME OF ENTRY` / `TIME BADGE RETURNED`; no aparece `TIME OF DEPARTURE` ✓ — se conserva
- ES: fila 2 `16:05` / `16:50`, fila 3 `17:44` / `18:05`, fila 4 `17:52` / `22:15` ✓ — se conserva (formato de celdas separado, no rango)
- EN: fila 3 Balbuena `5:44 PM / 6:05 PM` ✓ — se conserva
- Ambas: sin tachaduras ni correcciones (F1 AUSENTE, `trial_day4_t1.ts:44-56`) ✓ — se conserva
- ES: no hay texto inglés ni marcas de agua (F2) ✓ — se conserva

### Defectos confirmados (RAW anteriores; retirados por regeneración)

ES (`examine_libro_peritos.jpg` previo):
1. ~~**MAYOR / CONTRADICE (F1)** — El libro es un tomo grueso de piel/duro con hebillas de latón, cinta roja y marco dorado.~~ — Corregido: lomo cilíndrico de hule negro mate, bloque delgado, sin hebillas ni marco dorado.
2. ~~**MEDIO / AUSENTE (F1/F2)** — Faltan los cargos de los cuatro asientos.~~ — Corregido: los cuatro cargos están impresos y legibles.
3. ~~**MAYOR / AUSENTE (F1, exclusión)** — Fondo con escritorio, silla, expedientes, lámpara y ventanal.~~ — Corregido: documento recortado sobre relleno crema plano.
4. ~~**MEDIO / CONTRADICE (F2)** — Insignia «5 EXAMINE».~~ — Corregido: ausente.
5. ~~**MENOR / DRIFT (F3)** — Asiento 1 `9:10 - 9:40` en vez de `09:10` / `09:40`.~~ — Corregido: `09:10` y `09:40` en celdas separadas.
6. ~~**MEDIO / CONTRADICE (F1, exclusión)** — Marco dorado y numeración 1-4.~~ — Corregido: sin marco dorado ni numeración de filas.

EN (`examine_libro_peritos_en.jpg` previo):
7. ~~**MAYOR / CONTRADICE (F3/F2)** — Fecha «(1974)» y «EXP. 17-12-74».~~ — Corregido: `December 4, 1982`; sin expediente de fondo.
8. ~~**MAYOR / CONTRADICE (F3)** — Horas de asientos 1, 2 y 4 erróneas.~~ — Corregido: Rosas `9:10 AM` / `9:40 AM`; Berrondo `4:05 PM` / `4:50 PM`; Pazguato `5:52 PM` / `10:15 PM`.
9. ~~**MEDIO / CONTRADICE (F2/F6)** — Título «REGISTRO DE INSIGNIAS» y apellidos sin cargos.~~ — Corregido: sin título de lámina; cargos traducidos.
10. ~~**MAYOR / CONTRADICE (F6, paridad)** — Composición distinta (doble página en blanco).~~ — Corregido: gemelo literal de ES (un folio, misma retícula).
11. ~~**MEDIO / AUSENTE (F1)** — Libro grueso.~~ — Corregido: mismo lomo delgado de hule negro que ES.
12. ~~**MENOR / DRIFT (F6)** — Folio inglés en español.~~ — Corregido: `December 4, 1982`.

~~Estilo (F5): textura fotográfica de papel/madera.~~ — Corregido: cel-shading plano, terminador duro en el lomo, contorno carbón `#1A1A1A`; sin grano de madera.

## Hallazgos de auditoría 2026-09-19 (regeneración RAW Lote K)

**Veredicto: CUMPLE** (contenido, exclusiones, localización y estilo). Recortes por sustantivo sobre `tools/raw/case5/examine_libro_peritos.jpg` y `examine_libro_peritos_en.jpg` (1280×720). Una regeneración ES (la primera quedó con encabezados desalojados y textura de escaneo) y un gemelo EN a partir del ES aceptado. No se ejecutó `process_case5_assets.py`.

### Cumple

- F1 libro: lomo cilíndrico de hule negro mate, bloque delgado, sin hebillas ni cinta; se nombra como libro pequeño de registro, no como tomo público (`trial_day2.ts:18`) ✓
- F1 recorte: relleno crema plano; sin escritorio, silla, lámpara, ventanal ni pila de expedientes ✓
- F1/F2 cuatro asientos con cargo, ES: Rosas perito valuador `09:10`/`09:40`; Berrondo síndico de la quiebra 114/1971 `16:05`/`16:50`; Balbuena actuario `17:44`/`18:05`; Pazguato policía judicial `17:52`/`22:15` (`trial_day2.ts:20-24`) ✓
- F1/F2 columnas: encabezados ES `HORA DE ENTRADA` / `HORA DE DEVOLUCIÓN DE GAFETE` alineados sobre las celdas de hora, no sobre los nombres (`trial_day2_success.ts:129`) ✓
- F1 AUSENTE: sin tachaduras, sin columna de salida/permanencia, sin «SALIDA» ✓
- F2 AUSENTE: sin «5 EXAMINE», sin «REGISTRO DE INSIGNIAS», sin flechas/círculos/marcas de agua, sin inglés en ES ✓
- F3 fecha 1982: ES `4 de diciembre de 1982`; EN `December 4, 1982`; sin 1974 ni `EXP. 17-12-74` (§24.D I10) ✓
- F3 EN horas canónicas: Rosas `9:10 AM`/`9:40 AM`; Berrondo `4:05 PM`/`4:50 PM`; Balbuena `5:44 PM`/`6:05 PM`; Pazguato `5:52 PM`/`10:15 PM` (`EvidenceCatalogCase5EnB.ts:24-29`) ✓
- F4: el segundo encabezado resuelve D2-T2 y D4-T1; no hay columna que convierta `16:50` / `4:50 PM` en salida (`trial_day4_success.ts:58-59`) ✓
- F5: cel-shading plano, terminador duro en el lomo, contorno `#1A1A1A`; sin rosa/magenta ✓
- F6 paridad: misma geometría, cuatro filas, lomo, relleno y ausencia de marcas; sólo cambia el texto localizado. Encabezados EN `TIME OF ENTRY` / `TIME BADGE RETURNED` (no `TIME OF DEPARTURE`) ✓

### Defectos confirmados

- **MENOR / DRIFT (F6)** — EN conserva el tratamiento `Lic.` y `Sargento` del folio ES en vez de `Counselor` / `Sergeant` del guion inglés (`trial_day2_en.ts:22-24`). No rompe encabezados, horas ni cargos; no bloquea.

### Correcciones de auditoría

- ~~Veredicto NO CUMPLE de la pasada previa del 2026-09-19~~ — sustituido por CUMPLE tras regenerar ES+EN.
- Defectos 1–12 y la desviación de estilo F5: ~~tachados~~ arriba, con la corrección observada en los RAW nuevos. Ningún MAYOR residual.
- ~~- No se inspeccionó ninguna imagen…~~ — sigue sustituido; esta pasada inspeccionó recortes ES/EN.

### Recomendación

Ninguna regeneración bloqueante. Opcional: traducir `Lic.` → `Counselor` y `Sargento` → `Sergeant` en EN si se pide paridad léxica estricta con `trial_day2_en.ts`.
