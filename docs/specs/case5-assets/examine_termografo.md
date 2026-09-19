# examine_termografo — hoja de hechos

Clase: `examine`. Espec: §23.0, §23.3, §4.1 P7, §4.2, §5.4, §16.2, §17.1 y §24.D I45. Guion directo: punto `hotspot_termografo` de D4 y `openingPresent` de `bitacora_caldera`. Variantes localizadas cubiertas juntas: `examine_termografo.webp` y `examine_termografo_en.webp`.

## Mapa semántico y alcance

- Objeto: `bitacora_caldera`, prueba entregada al terminar la inspección del termógrafo; la imagen es un `detailedView` de dos paneles, no la sala de calderas completa (§5.4; §16.2; catálogo ES/EN).
- Panel superior: hoja de bitácora de mantenimiento del Archivo, con el asiento manuscrito del 3 de diciembre sobre el tubo reventado en el muro poniente del pasillo 7 y la operación máxima de la caldera y los dos secadores (§23.3; §16.2; catálogo ES/EN).
- Panel inferior: tira semanal del termógrafo, retirada y archivada el domingo 5; el tambor está en el sótano, pero la sonda remota mide el aire del pasillo 7 (§4.1 P7; §16.2; §23.3).
- Datos que la tira debe sostener: eje horizontal de horas, eje vertical de grados, subida de 19 °C a 31 °C el día 3, línea plana en 31 °C hasta el 5 y punto marcado a lápiz por el perito a las 18:40 del día 4 (§23.3; §16.2).
- La prueba sirve para corregir el modelo forense de una sala a 20 °C: la temperatura real del pasillo 7 fue 31 °C y desplaza el intervalo de muerte a 16:35–17:05 (§4.2; §17.1; `trial_day4_success.ts:9-22` y equivalente EN).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Composición documental de dos paneles, arriba la bitácora y abajo la tira semanal desenrollada; no convertirla en un fondo de la sala ni en una lámina explicativa (§23.3; catálogo ES/EN).
- [ ] `PINTAR` — Panel superior: hoja de mantenimiento con asiento manuscrito del 3 de diciembre sobre «tubo reventado, muro poniente pasillo 7; caldera y dos secadores al máximo» (§23.3, §16.2).
- [ ] `PINTAR` — Panel superior: nota que identifica la sonda remota en el pasillo 7; el registrador/termógrafo permanece en el sótano, pero la medición representa el aire de la escena (§4.1 P7; catálogo ES/EN; `archivo_caldera_hotspots.ts:30-32`).
- [ ] `PINTAR` — Panel inferior: tira semanal archivada el 5 de diciembre, con cuadrícula de horas en horizontal y grados en vertical (§23.3; §16.2).
- [ ] `PINTAR` — Panel inferior: línea de tinta que sube de 19 °C a 31 °C y se aplana en 31 °C hasta el domingo 5 (§23.3, §16.2 detailedView; `trial_day4_success.ts:11-17`).
- [ ] `PINTAR` — Punto marcado a lápiz por el perito sobre la línea a las 18:40 del 4 de diciembre (§23.3; §4.2; §16.2 detailedView).
- [ ] `AUSENTE` — Personas, manos, flechas, círculos, halos o realces que señalen la respuesta; la prueba debe seguir siendo un documento físico y no una infografía (§23.0; §23.3; §17.1).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — La bitácora debe permitir leer el asiento manuscrito del 3 de diciembre: «tubo reventado, muro poniente pasillo 7; caldera y dos secadores al máximo» (§16.2 detailedView; §23.3).
- [ ] `TEXTO EXACTO` — La nota de la bitácora debe identificar la sonda remota del pasillo 7; no sustituir «pasillo 7» por sótano (§4.1 P7; catálogo ES/EN; §23.3).
- [ ] `PINTAR` — La tira debe mostrar físicamente sus ejes, cuadrícula, curva y punto pericial; las palabras de los ejes pueden ser funcionales y legibles, pero no añadir texto explicativo que el spec no pide (§23.3; §23.0).
- [ ] `AUSENTE` — No imprimir dentro del activo la explicación «once grados», el intervalo `16:35–17:05`, la conclusión sobre la muerte ni la frase «tabla de una sala a 20 °C» como anotación editorial; esas relaciones se narran después (§17.1; `trial_day4_success.ts:11-22`).

### F3 Cifras, fechas y horas

- [ ] `TEXTO EXACTO` — El asiento corresponde al 3 de diciembre; la tira se archiva el domingo 5 y el punto pericial queda a las 18:40 del 4 de diciembre (§16.2 detailedView; §4.2).
- [ ] `TEXTO EXACTO` — La escala de la tira debe sostener 19 °C → 31 °C y 31 °C sostenidos hasta el 5 (§23.3; §16.2 detailedView).
- [ ] `NO CONTRADECIR` — La caldera y los dos secadores estuvieron al máximo del 3 al 7 de diciembre y fueron apagados anteayer respecto de la visita del 9; la bitácora no debe sugerir que el cuarto del sótano o el termógrafo se mantuvieron a 31 °C (§16.2; §24.D I45).
- [ ] `NO CONTRADECIR` — El termógrafo lleva dieciocho años registrando en tiras cambiadas cada domingo; se instaló en 1964 por la humedad (§16.2; `trial_day4_success.ts:11`). Este dato es narrativo y no exige imprimirse como leyenda (§23.0; §23.3).
- [ ] `NO CONTRADECIR` — Los 20 °C son la tabla usada por el forense, mientras 31 °C es la lectura del pasillo 7; no fusionar ambos valores en una sola escala (§4.2; §17.1; `trial_day4_success.ts:11-17`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — El hotspot sólo aparece después de examinar la caldera; su narración debe encontrar un tambor de reloj atornillado al muro, papel cuadriculado y plumilla de línea continua (`archivo_caldera_hotspots.ts:24-31`; variante EN equivalente).
- [ ] `PINTAR` — El diálogo establece que el tambor está abajo y la sonda está cableada al pasillo 7, donde mide el aire de la escena; la imagen debe hacer compatible esa relación espacial, sin presentar la lectura como temperatura del sótano (`archivo_caldera_hotspots.ts:30-32`; EN: líneas equivalentes).
- [ ] `NO CONTRADECIR` — El objeto da una vuelta por semana; la tira mostrada es la del sábado 4, retirada y archivada el domingo 5 (`archivo_caldera_hotspots.ts:32-35`; EN equivalente).
- [ ] `NO CONTRADECIR` — La conversación de investigación concluye en 31 °C sostenidos frente a 20 °C de la tabla forense y entrega `bitacora_caldera`; la imagen debe sostener el contraste sin adelantar la explicación de la lámina L7 (`archivo_caldera_hotspots.ts:35-40`; §17.1).
- [ ] `NO CONTRADECIR` — Tras entregar la bitácora, el mismo bloque habla de tres documentos y de la imposibilidad de cotejar la Olivetti por estar en depósito judicial; no añadir documentos, máquina de escribir ni una segunda prueba a este examen (`archivo_caldera_hotspots.ts:41-50`; variante EN equivalente).
- [ ] `NO CONTRADECIR` — En D4 `openingPresent` la defensa usa la bitácora para afirmar 31 °C sostenidos el 4 de diciembre y 20 °C en la tabla; la lámina posterior explica el desplazamiento de veinticinco minutos, pero esa curva no pertenece a este activo (§17.1; `trial_day4_success.ts:9-17`).

### F5 Estilo y prohibidos

- [ ] Repetir completo el contrato §23.0 en cualquier prompt: ilustración 2D HD de estilo *Capcom Ace Attorney* GBA/NDS; cel-shading plano con terminador duro; contorno continuo carbón `#1A1A1A`; caricatura expresiva; registro mexicano setentero/Chespirito; papel, madera, polvo y luz de tungsteno; sin fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, inglés no localizado ni rosa/magenta en primer plano (§23.0).
- [ ] `AUSENTE` — No añadir flechas, círculos, realces de color ni etiquetas editoriales que conviertan el documento en una solución señalada; la evidencia se lee por sus hechos (§23.3; §17.1).
- [ ] `NO CONTRADECIR` — Mantener la textura de papel, manuscrito, cuadrícula y lápiz como objetos documentales; no hacerlos fotorealistas ni usar degradados suaves (§23.0; §23.3).

### F6 Localización

- [ ] `PINTAR` — Generar `examine_termografo.webp` y `examine_termografo_en.webp`; ambas conservan composición, encuadre, curva, punto pericial, fechas, cifras y marcas físicas (§23.3, línea 4064).
- [ ] `TEXTO EXACTO` — La variante ES mantiene el asiento y la nota de la sonda en español; la variante EN traduce el texto legible para coincidir con `EvidenceCatalogCase5EnB.ts:71-76`, sin cambiar la fecha, la escala ni la identidad del pasillo 7.
- [ ] `NO CONTRADECIR` — La localización no mueve la sonda al sótano, no cambia `31 °C`/`20 °C`, no cambia el 3, 4 o 5 de diciembre y no transforma la tira semanal en otra clase de registro (§23.3; catálogos ES/EN; hotspot EN).
- [ ] `AUSENTE` — No introducir texto en inglés en la variante ES ni texto español en la variante EN, salvo marcas físicas no localizadas que el spec fija como números, fechas o símbolos (§23.0; §23.3).

## Consistencia (regenerar juntos)

- `examine_termografo_en` — gemelo localizado; comparte paneles, composición, curva, punto a las 18:40, fechas y cifras; sólo cambia el texto legible. **Regenerar juntos, este activo no es fuente de verdad del otro** (§23.3).
- `bg_archivo_caldera` — comparte el termógrafo mural, el cable hacia la sonda del pasillo 7 y la bitácora colgada; el fondo debe seguir mostrando el objeto sin texto legible y este examen debe seguir siendo su vista documental. **Regenerar juntos, este activo no es fuente de verdad del otro** (§23.1; §23.3; fact sheet de `bg_archivo_caldera`).
- `bitacora_caldera` en los catálogos ES/EN — comparte `EvidenceId`, objeto, asiento del 3 de diciembre y tira archivada; la descripción/caption debe permanecer subordinada al contrato visual de §23.3. **Regenerar juntos, este activo no es fuente de verdad del otro** (`EvidenceCatalogCase5EsB.ts:71-76`; `EvidenceCatalogCase5EnB.ts:71-76`).
- `plate_curva_enfriamiento` — comparte el contraste probatorio 31 °C del pasillo 7 frente a 20 °C de la tabla forense, pero la placa dibuja curvas explicativas y el examen muestra la tira original. **Regenerar juntos si cambian las cifras o el argumento, este activo no es fuente de verdad del otro** (§17.1; §23.4 L7).
- `informe_forense_c5` — comparte la medición de las 18:40 y la corrección del intervalo de muerte a 16:35–17:05; el informe no es fuente de verdad del aspecto físico de la tira. **Regenerar juntos, este activo no es fuente de verdad del otro** (§4.2; §5.4; §17.1).

## Conflictos abiertos

- §23.1 describe el termógrafo del fondo con una línea de tinta que «sube y se aplana» (`docs/specs/case-5-el-tomo-trece.md:3993`), mientras el diálogo de `hotspot_termografo` dice que la tira «sube y baja como una sierra» (`archivo_caldera_hotspots.ts:33-35`; EN equivalente). El `detailedView` de §16.2/§23.3 y el juicio fijan la lectura como subida de 19 °C a 31 °C y plana hasta el 5 (`docs/specs/case-5-el-tomo-trece.md:3013`, `:4061`, `trial_day4_success.ts:11-17`). No resolver aquí; el spec debe unificar la forma canónica de la línea.
- §23.0 establece luz de tungsteno como parte del registro general, mientras §23.1 exige para `bg_archivo_caldera` luz de foco blanco y un cuarto ya enfriado (`docs/specs/case-5-el-tomo-trece.md:3979`, `:3993`). Este examen documental no debe inventar una iluminación que contradiga la escena compartida; la tensión pertenece a la dirección de arte del fondo.

## Hallazgos de auditoría 2026-09-19

**VEREDICTO: NO CUMPLE** (contenido F1/F2/F3, exclusiones F5 y localización F6). La variante ES sostiene la mayor parte del contrato (dos paneles, asiento del 3 dic, sonda en pasillo 7, tira 19→31 °C plana, archivada el 5) pero rompe el eje temporal de días, imprime una etiqueta editorial prohibida y recorta texto exacto del asiento. La variante EN **no es el gemelo localizado de ES**: es otro documento (fechas 14–20/04/77, curva 12→26 °C, medición atribuida al sótano, sin punto pericial). Segunda pasada: sustituye el placeholder previo (no hubo inspección en ese intento; sin hallazgos que retirar).

### Cumple (ES, `.tmp-audit/examine_termografo.png`)

- Composición documental de dos paneles (bitácora arriba, tira abajo): ✓ F1-1, §23.3.
- Panel superior: asiento manuscrito fechado «3 DIC» con «TUBO REVENTADO PASILLO 7» y «CALDERA Y SECADORES AL MÁXIMO»: ✓ parcial F1-2/F2 (ver defecto 4 por el texto faltante).
- Nota «SONDA REMOTA PASILLO 7» en la bitácora: el registrador queda en el sótano y la medición es del aire del pasillo: ✓ F1-3/F2 (`archivo_caldera_hotspots.ts:30-32`).
- Panel inferior: título «TIRA TERMÓGRAFO ARCHIVADA 5 DIC» con cuadrícula, horas en horizontal y grados en vertical (15–35 °C): ✓ F1-4, F3-escala.
- Curva que sube de 19 °C a ~31 °C y se aplana en 31: ✓ F1-5/F3 (`trial_day4_success.ts:11-17`).
- Sin personas, halos ni degradados suaves; cel-shading, contorno carbón, papel manchado y luz cálida acordes a §23.0: ✓ F5. Sin inglés en la variante ES (el rótulo «EXAMINE» es cromo de UI, no del activo): ✓ F6.

### Defectos confirmados

Variante ES:

1. **MAYOR — CONTRADICE (F1/F3/F4)** — El eje horizontal de la tira cubre sólo 0–24 h de un solo día; el spec exige la tira semanal con la subida el día 3 y la línea plana «hasta el domingo 5»: no existe ningún eje/etiqueta de los días 3, 4 y 5 de diciembre, y en consecuencia no puede representarse el punto pericial a las 18:40 del día 4. Rompe `trial_day4_success.ts:9-17` y `archivo_caldera_hotspots.ts:32-40` (contraste 31 °C sostenidos frente a la tabla).
2. **MEDIO — MALFORMADO (F1/F3)** — El «punto a lápiz del perito» no se lee como marca de lápiz: es un punto de tinta negra impresa con flecha, situado cerca de la hora 16, no de las 18:40 del 4 de diciembre (§23.3; §16.2).
3. **MEDIO — CONTRADICE (F1/F5)** — Flecha + rótulo «PUNTO LÁPIZ PERITO» señalan la respuesta: exactamente lo que el `AUSENTE` de F1-7 y F5 prohíben («no añadir flechas, círculos, realces ni etiquetas editoriales»).
4. **MEDIO — CONTRADICE (F2/F3, TEXTO EXACTO)** — El asiento omite «muro poniente» y «dos» (dice «SECADORES» a secas): el texto exigido es «tubo reventado, muro poniente pasillo 7; caldera y dos secadores al máximo» (§16.2 detailedView; §23.3).
5. **MENOR — CONTRADICE (F2)** — Texto editorial no pedido: franja «ARCHIVO JUDICIAL – SECCIÓN TÉCNICA» y línea «REGISTRO VERIFICADO. SEGUIMIENTO CONTINÚA.» (§23.0; F2 `PINTAR` no añadir texto explicativo).
6. **MENOR — CONTRADICE (F4)** — Un expediente atado (77-12-03) aparece junto a la bitácora; el examen es de dos paneles y el diálogo no suma documentos a esta vista (`archivo_caldera_hotspots.ts:41-50`).

Variante EN (`.tmp-audit/examine_termografo_en.png`):

7. **MAYOR — DRIFT (F6)** — Los gemelos no comparten composición, encuadre ni contenido (§23.3, línea 4064): la variante EN es un par bitácora-tabla + termógrafo de pared, no la misma pieza de dos paneles.
8. **MAYOR — CONTRADICE (F1/F2/F3)** — Fechas 14/04/77–20/04/77 en lugar de 3–5 de diciembre; curva de 12 °C subiendo hasta ~26 °C en tinta roja en lugar de 19→31 °C plana; sin punto pericial a las 18:40 (AUSENTE). Rompe `EvidenceCatalogCase5EnB.ts:71-76` y el hot spot EN.
9. **MAYOR — CONTRADICE (F2/F6)** — La nota dice «Location: basement, east wing»: localiza la medición en el sótano, exactamente la lectura que la hoja prohíbe (`NO CONTRADECIR` F6-3; `archivo_caldera_hotspots.ts:30-32`).
10. **MEDIO — CONTRADICE (F2)** — La variante EN no traduce el texto legible ES (asiento del 3 dic, sonda remota, pasillo 7); inventa una tabla de mantenimiento semanal con actividades y firmas que el spec no pide (§23.3; F6-2).
11. **MENOR — CONTRADICE (F5)** — Sombra rosa/rojiza difusa sobre la cuadrícula del panel derecho (falso degradado suave prohibido por §23.0).

### Correcciones de auditoría

- Se reemplaza íntegramente el placeholder «Hallazgos de auditoría 2026-09-19» de la primera pasada (crash previo sin inspección); no había hallazgos que retirar ni ✓ previos que corregir. Traza: ninguna sección anterior de auditoría contenía verificaciones de imagen.
- Ningún hallazgo `[x] RETIRADO POR REVISIÓN` en esta pasada.

### Recomendación (orden del conjunto de consistencia)

1. Regenerar **juntas** ambas variantes con la misma composición de dos paneles (§23.3, línea 4064): bitácora arriba, tira semanal abajo; prohibido el formato «tabla de mantenimiento» de la variante EN actual.
2. Panel inferior: dar a la tira un eje horizontal de **días 3→5 de diciembre** (con el sábado 4 como tramo visible) y horas dentro del día; curva 19→31 °C que sube el día 3 y queda plana hasta el 5; punto pericial a **lápiz** (grafito gris, sin flecha ni rótulo) en las 18:40 del día 4; eliminar «PUNTO LÁPIZ PERITO» y la flecha (F1-7/F5).
3. Asiento de la bitácora con el texto exacto «tubo reventado, muro poniente pasillo 7; caldera y dos secadores al máximo», fechado 3 de diciembre, más la nota de la sonda remota del pasillo 7; suprimir «REGISTRO VERIFICADO…», la franja «ARCHIVO JUDICIAL…» y el expediente atado.
4. EN: traducir exactamente el texto legible ES acorde a `EvidenceCatalogCase5EnB.ts:71-76`, sin fechas 14–20/04/77, sin «basement», sin tinta roja, manteniendo 3/4/5 de diciembre, 19→31 °C y pasillo 7; eliminar la sombra rosada.
5. Verificar contra `bg_archivo_caldera` y `informe_forense_c5` tras regenerar (misma tira, misma marca de 18:40).
