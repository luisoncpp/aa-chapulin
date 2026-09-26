# plate_huacal_sellos — hoja de hechos
Clase: `plate`. Espec: §23.0, §23.4, L6 de §7.3/§14.1. Guion: D3 bodega, `hotspot_huacal`, lámina explicativa L6.

## Mapa semántico

- Lugar/momento: lámina didáctica mostrada durante la inspección del huacal 9 en la bodega de bienes del Archivo Judicial, día 3.
- Objeto: tapa de un bien en depósito judicial, con una junta que cruza una tira de papel engomado.
- Proceso: una persona firma una tira nueva y la pega encima de la anterior sin retirar ninguna.
- Relación: la pila de tiras representa el historial del depósito: cuántas veces se abrió, cuándo y quién.
- Medio: secuencia explicativa de tres viñetas, no fotografía pericial ni vista del fondo completo.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — La composición contiene exactamente tres viñetas secuenciales: una tapa con tiras, una mano firmando una tira nueva y la tira nueva pegada **encima** de las anteriores (§23.4, `docs/specs/case-5-el-tomo-trece.md:4081`).
- [ ] `PINTAR` — La primera viñeta hace visible una tapa atravesada por tiras de papel sellado/engomado encabalgadas; debe leerse como sellado de un bien en depósito, no como una tapa abierta o una colección de papeles sueltos (`docs/specs/case-5-el-tomo-trece.md:2158-2161`; `src/case/case5/Private/bodega_masa_hotspots.ts:28-30`).
- [ ] `PINTAR` — La segunda viñeta muestra la acción de firmar la tira nueva con una mano; la firma es una acción visible, pero no se exige identidad legible de la rúbrica (§23.4; `src/case/case5/Private/bodega_masa_hotspots.ts:29`).
- [ ] `PINTAR` — La tercera viñeta muestra físicamente la tira nueva cruzando la junta y superpuesta a las anteriores, sin retirar las capas previas (`docs/specs/case-5-el-tomo-trece.md:2159-2161,4081`; `src/case/case5/Private/bodega_masa_hotspots.ts:28-30`).
- [ ] `NO CONTRADECIR` — La imagen debe explicar el mecanismo general de cada apertura y resellado; no convertir la lámina en una representación de la segunda apertura del 4 de diciembre ni fijar cuántas tiras concretas hay en ella (§14.1; `docs/specs/case-5-el-tomo-trece.md:2159-2167`).
- [ ] `AUSENTE` — No incluir personajes completos, el sótano, los nueve cajones, la máquina de escribir, números de huacal, flechas, círculos, realces de respuesta ni una fotografía forense; esos elementos pertenecen al fondo o al `detailedView`, no a esta lámina (§23.0, §23.1, §23.3–§23.4; `docs/specs/case-5-el-tomo-trece.md:3990,4058,4072-4081`).

### F2 Texto en imagen

- [ ] `AUSENTE` — No imprimir texto explicativo, etiquetas, fechas, nombres ni una rúbrica legible dentro de la imagen: §23.4 establece que las láminas didácticas no llevan texto salvo donde se indique, y `plate_huacal_sellos` no especifica ninguna cadena (§23.4, `docs/specs/case-5-el-tomo-trece.md:4070-4081`).
- [ ] `NO CONTRADECIR` — Las palabras «cuántas veces se abrió, cuándo y quién» pertenecen a la narración, no obligan a dibujar contadores ni fechas en las tiras (`src/case/case5/Private/bodega_masa_hotspots.ts:30`; `src/case/case5/Private/bodega_masa_hotspots_en.ts:30`).

### F3 Cifras/fechas/horas

- [ ] `NO CONTRADECIR` — El huacal real tiene más de doscientas cincuenta tiras y la superior corresponde al 4 de diciembre; esos datos sostienen la escena y el clímax, pero esta lámina general no debe inventar una fecha, cifra o lectura de sello (§14.1; §23.3; `docs/specs/case-5-el-tomo-trece.md:2142-2148,2165,4160`).
- [ ] `NO CONTRADECIR` — El detalle probatorio de dos tiras del mismo 4 de diciembre pertenece a `examine_huacal9`/la fotografía de la tapa y se argumenta en el clímax, no a una marca que la lámina de proceso deba mostrar (§14.1; `docs/specs/case-5-el-tomo-trece.md:2165-2167,4081`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — Al entrar la lámina, la narración dice que una tira de papel engomado cruza la junta de la tapa; la composición debe hacer esa relación espacial inequívoca (`src/case/case5/Private/bodega_masa_hotspots.ts:28`; `src/case/case5/Private/bodega_masa_hotspots_en.ts:28`).
- [ ] `PINTAR` — La narración explica que quien abre firma la tira nueva y la pega encima de la anterior sin retirar ninguna; las viñetas deben mostrar firma, superposición y permanencia de las capas (`src/case/case5/Private/bodega_masa_hotspots.ts:29`; `src/case/case5/Private/bodega_masa_hotspots_en.ts:29`).
- [ ] `PINTAR` — La narración presenta la pila como historial de aperturas, fechas y responsables; la imagen debe permitir entender acumulación y orden temporal sin añadir texto inventado (`src/case/case5/Private/bodega_masa_hotspots.ts:30`; `src/case/case5/Private/bodega_masa_hotspots_en.ts:30`).
- [ ] `NO CONTRADECIR` — Tras la tercera línea, el juego vuelve al fondo `bg_bodega_masa`; la lámina no debe parecer una vista persistente de la bodega ni requerir sprites o mobiliario (`src/case/case5/Private/bodega_masa_hotspots.ts:31`; `src/case/case5/Private/bodega_masa_hotspots_en.ts:31`).

### F5 Estilo

- [ ] `PINTAR` — Repetir el contrato §23.0 completo en el prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA/Nintendo DS) en alta definición; cel-shading de colores planos con terminador duro, dos tonos por superficie y ; contorno carbón `#1A1A1A`, continuo y más grueso en la silueta; anatomía expresiva/caricaturesca cuando aparezca una mano; colores primarios saturados (§23.0, `docs/specs/case-5-el-tomo-trece.md:3974-3980`).
- [ ] `PINTAR` — Por ser lámina explicativa, usar el tratamiento específico de §23.4: ilustración didáctica plana, fondo crema de papel y trazo de manual escolar mexicano de los setenta, a 1280 × 720 (§23.4, `docs/specs/case-5-el-tomo-trece.md:4070-4072`).
- [ ] `AUSENTE` — Prohibidos: fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano de superhéroes, marcas de agua, texto inglés no exigido y cualquier rosa/magenta en primer plano (§23.0, `docs/specs/case-5-el-tomo-trece.md:3978-3980`).

### F6 Localización

- [ ] `NO CONTRADECIR` — La lámina es compartida por español e inglés: ambos scripts estampan `assets/plate_huacal_sellos.webp`, y sólo cambia la narración que explica la viñeta (`src/case/case5/Private/bodega_masa_hotspots.ts:28-31`; `src/case/case5/Private/bodega_masa_hotspots_en.ts:28-31`; §23.3, `docs/specs/case-5-el-tomo-trece.md:4064-4066`).
- [ ] `AUSENTE` — No generar variante `_en`, porque esta placa no contiene texto legible y §23.4 reserva las variantes a las láminas cuyo argumento visible depende de texto (§23.3–§23.4, `docs/specs/case-5-el-tomo-trece.md:4064-4066,4070-4084`).

## Consistencia (regenerar juntos)

- `bg_bodega_masa` — comparte el huacal 9, sus tiras encabalgadas y el contexto de bodega; el fondo fija la escena completa, no el diseño didáctico de las tres viñetas. **Regenerar juntos, este activo no es fuente de verdad del otro** (§23.1, `docs/specs/case-5-el-tomo-trece.md:3990`).
- `examine_huacal9` / `examine_huacal9_en` — comparten el mismo objeto y la superposición de sellos, pero el `detailedView` fija la tapa real, la fecha `SÁB 4-XII`/`SAT 4-XII` y las dos tiras del 4 de diciembre; la placa sólo explica el mecanismo general. **Regenerar juntos, este activo no es fuente de verdad del otro** (§23.3, `docs/specs/case-5-el-tomo-trece.md:4058,4064-4066`).
- `huacal_9` — comparte la identidad del objeto de prueba y la tapa con más de doscientas cincuenta tiras; el icono/catálogo no sustituye la composición de la lámina. **Regenerar juntos, este activo no es fuente de verdad del otro** (`src/state/Private/EvidenceCatalogCase5EsB.ts:38-44`; `src/state/Private/EvidenceCatalogCase5EnB.ts:38-44`).

## Conflictos abiertos

- No se identificó una discrepancia entre la descripción de §23.4 y el guion ES/EN para este activo. La placa generaliza el proceso; la fecha y el conteo concreto permanecen en el fondo, el `detailedView` y la narración.

## Hallazgos de auditoría 2026-09-19

- **Veredicto: NO CUMPLE** en contenido (F1/F4) y texto (F2/F3/F6). El estilo didáctico de fondo crema y la ausencia de magenta sí cumplen, pero la imagen es un manual de instrucciones con rótulos, no la lámina muda de las tres viñetas del huacal 9.
- **Cumple:**
  - ✓ Estructura de exactamente tres viñetas secuenciales distinguibles, con orden legible (recortes `temp_audit_huacal/v1-v3.png`) — sólo el conteo y la secuencia; el contenido de cada viñeta NO cumple (ver defectos).
  - ✓ F1 `AUSENTE` parcial: no hay personajes completos, sótano, nueve cajones, máquina de escribir, números de huacal ni fotografía forense (recorrido de la imagen completa).
  - ✓ F4 `NO CONTRADECIR`: la lámina no parece una vista persistente de la bodega; es un plato de manual, sin sprites ni mobiliario exigido.
  - ✓ F5 `AUSENTE` parcial: sin rosa/magenta en primer plano (paleta sepia/crema/marrón/rojo verificada en imagen completa y recortes); tratamiento didáctico plano con fondo crema de papel acorde a §23.4.
  - ✓ F6 `AUSENTE`: no existe variante `_en` en `assets/` (sólo `plate_huacal_sellos.webp`).
- **Defectos confirmados:**
  - MAYOR `CONTRADICE` (F2, línea 25; F6, línea 48): la imagen está llena de texto legible no pedido — título «SELLADO DE CAJA DE MADERA CON TIRAS DE PAPEL SUPERPUESTAS», rótulos «PREPARAR Y COLOCAR…» / «SUPERPONER Y AJUSTAR…» / «SELLAR Y LACRAR», leyendas de tres renglones bajo cada viñeta, franja «NOTA: Este método preserva la integridad del expediente…» y placa «ARCHIVO JUDICIAL / SECRETARÍA DEL TRIBUNAL» (`header.png`, `bottom.png`, `v1-v3.png`). §23.4 prohibe texto salvo indicación y, al ser lámina compartida ES/EN sin variante, ese español impreso aparece también en la versión inglesa (`src/case/case5/Private/bodega_masa_hotspots_en.ts:28-31`).
  - MAYOR `AUSENTE` (F1, línea 18): la segunda viñeta no muestra mano ni acción de firmar la tira nueva; muestra una caja cerrada con correas (`v2.png`). Rompe la línea de narración `bodega_masa_hotspots.ts:29`.
  - MAYOR `AUSENTE` (F1, líneas 16-17; F4, línea 35): ninguna viñeta muestra una tapa atravesada por tiras encabalgadas cruzando una junta; las tres muestran una caja de madera entera con correas de papel kraft sobre tapa y costados (`v1-v3.png`). La relación espacial tira/junta que la narración de la línea 28 exige no existe.
  - MAYOR `AUSENTE` (F1, línea 19): la tercera viñeta no muestra la tira nueva pegada **encima** de las anteriores; muestra un sello de lacre con listón rojo («SELLAR Y LACRAR») (`v3.png`). La superposición y permanencia de capas (línea 36) no se ve en ninguna parte.
  - MEDIO `CONTRADICE` (F3, líneas 30-31): la lámina inventa una lectura de sello y una fecha impresa — «AÑO DE 1974» en la cabecera y sello de lacre con balanza estampado; además la NOTA argumenta «evidencia en el lacre o en el papel», argumento que pertenece al clímax, no a la placa (`header.png`, `v3.png`, `bottom.png`).
  - MEDIO `CONTRADICE` (F1 `AUSENTE`, línea 21): flechas negras de progresión entre viñetas y viñetas numeradas con medallones circulares, elementos excluidos por §23.0/§23.4 (`v2.png`, `v3.png`).
  - MEDIO `CONTRADICE` (F5, línea 43): la imagen mide 960 × 540 px, no los 1280 × 720 exigidos por §23.4 (verificado con `ffprobe`).
  - MENOR `CONTRADICE` (F1, línea 16; Mapa, línea 10): el proceso representado («preparar y colocar / superponer y ajustar / sellar y lacrar») es un manual genérico de embalaje, no la secuencia del resellado del huacal 9; la pila de tiras no se lee como historial de aperturas (F4, línea 37).
  - MENOR `AUSENTE` (Mapa, línea 10): franja inferior con pila de expedientes atada con listón y vela encendida, elementos no pedidos por la hoja (`bottom.png`).
- **Correcciones de auditoría:**
  - ~~Hallazgos de auditoría 2026-09-19: «No se inspeccionó ninguna imagen… Pendiente de aceptación visual…»~~ — reemplazado por esta sección tras la primera inspección visual real de `assets/plate_huacal_sellos.webp` (2026-09-19); ninguna pasada anterior había verificado recortes, por lo que no había ✓s previos que retirar.
- **Recomendación** (regenerar; en el orden del conjunto de consistencia):
  1. Sin NINGÚN texto impreso: ni título, ni rótulos, ni leyendas, ni NOTA, ni placa, ni fechas ni numeración; la lámina es muda (F2/F6).
  2. Viñeta 1: tapa (sólo la tapa, no una caja entera) vista desde arriba, atravesada por tiras de papel engomado encabalgadas cruzando la junta, pila gruesa que se lea como historial acumulado (F1/F4).
  3. Viñeta 2: una mano caricaturesca firmando una tira nueva; la rúbrica como acción visible sin texto legible (F1).
  4. Viñeta 3: la misma tapa con la tira nueva pegada encima de la pila, capas previas intactas y visibles debajo; sin lacre, sin listón, sin sello estampado (F1/F3).
  5. Sin flechas, medallones numerados ni círculos de realce (F1 `AUSENTE`).
  6. Sin fecha, cifra o lectura de sello inventadas; los «cuántas veces, cuándo y quién» permanecen en la narración (F3).
  7. Eliminar la franja inferior con expedientes y vela; fondo crema plano a página completa (F5).
  8. Renderizar a 1280 × 720 (F5).

## Hallazgos de auditoría 2026-09-19 (regeneración Lote C)

RAW auditado: `tools/raw/case5/plate_huacal_sellos.jpg` (1280 × 720). Recortes de las tres viñetas.

**Veredicto: CUMPLE** en contenido (F1/F4), texto (F2/F6), exclusiones y estilo (F5).

### Cumple

- Tres viñetas mudas en fila, fondo crema de manual escolar, sin título, rótulos, NOTA, placa, fechas, flechas ni medallones (F2/F6; cancela los MAYOR de texto de la pasada previa).
- Viñeta 1: madera vista desde arriba con junta central cruzada por tiras engomadas encabalgadas, amarilleando debajo (F1/F4, `bodega_masa_hotspots.ts:28`).
- Viñeta 2: mano caricaturesca firmando una tira nueva; rúbrica ilegible (F1, `bodega_masa_hotspots.ts:29`).
- Viñeta 3: tira blanca nueva pegada encima de las capas previas, que siguen visibles; sin lacre, listón ni sello (F1).
- Sin personajes completos, sótano, cajones, máquina, números de huacal ni fotografía forense (F1 AUSENTE).
- 1280 × 720, cel-shading, sin magenta en primer plano (F5). Una sola lámina ES/EN (F6).

### Defectos confirmados

- `MALFORMADO` / **MENOR** / F1 — Las viñetas no muestran el canto de una tapa de huacal: se leen como tablones con tiras. La junta y el proceso de firmar/superponer sí se entienden.

### Correcciones de auditoría

- ~~MAYOR de texto de manual, viñeta 2 sin mano, viñeta 3 con lacre, flechas, vela y 960 × 540~~ — retirados por la RAW nueva; la traza de 2026-09-19 sobre `assets/plate_huacal_sellos.webp` se conserva arriba.

### Recomendación

Ninguna bloqueante. Opcional: dibujar el canto rectangular de la tapa en las tres viñetas.
