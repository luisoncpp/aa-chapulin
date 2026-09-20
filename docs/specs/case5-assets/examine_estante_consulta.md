# examine_estante_consulta — hoja de hechos

Clase: `examine`. Espec: §23.0, §23.3 y §24. Guion: §10.3, investigación D1 `hotspot_estante`, clímax E3 / Señalamiento 2 (§18.3).

Activo base: `examine_estante_consulta.webp`. Variante localizada: no existe ni se necesita; ES y EN comparten exactamente la misma imagen porque las marcas operativas son números y geometría, no prosa localizada (§23.3, `docs/specs/case-5-el-tomo-trece.md:4041-4043,4057,4064-4066`).

## Mapa semántico

- Estante de consulta de madera oscura, pegado al muro del pasillo 7.
- Veinticuatro ranuras con cartoncitos manuscritos numerados del 1 al 24.
- Veintidós lomos idénticos de tela verde oliva.
- Ranura 13 vacía y oscura: el tomo fue anunciado, pero nunca se publicó.
- Ranura 11 ocupada por un lomo distinto de media piel color vino, con nervios y dos cantoneras de latón; es media pulgada más grueso que sus vecinos.
- Zócalo inferior con polvo.
- Zócalo inferior con polvo; aquí "regla" significa el conjunto de condiciones de la placa, no una regla física para medir. La composición es completamente frontal, sin instrumento de medición, flechas, círculos ni realces.
- El objeto que se presenta en E3 es el estante fotografiado; el tomo caído del suelo y la explicación de los 24 objetos físicos se completan mediante el diálogo, no convierten esta placa en una vista del pasillo completo.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Fotografía pericial en color desaturado, frontal, del estante de consulta; no es el fondo completo del pasillo ni una lámina explicativa (§23.3, `docs/specs/case-5-el-tomo-trece.md:4041-4045,4057`).
- [ ] `PINTAR` — Estante de madera oscura pegado al muro, con **una sola banda horizontal continua de 24 ranuras claramente separadas**; esta geometría frontal es el candado de consistencia para los fondos y la placa amplia (§10.3, `docs/specs/case-5-el-tomo-trece.md:791-806`; §23.3, `docs/specs/case-5-el-tomo-trece.md:4057`).
- [ ] `PINTAR` — Cartoncitos escritos a mano numerados del 1 al 24; deben seguir siendo marcas diegéticas, no rótulos explicativos superpuestos (§10.3, `docs/specs/case-5-el-tomo-trece.md:794`; §18.3, `docs/specs/case-5-el-tomo-trece.md:3398-3406`).
- [ ] `PINTAR` — Veintidós lomos de tela verde oliva idénticos (§23.3, `docs/specs/case-5-el-tomo-trece.md:4057`; éxito del señalamiento, `docs/specs/case-5-el-tomo-trece.md:3411-3414`).
- [ ] `PINTAR` — Ranura 13 vacía y oscura (§23.3, `docs/specs/case-5-el-tomo-trece.md:4057`; §10.3, `docs/specs/case-5-el-tomo-trece.md:797-801`).
- [ ] `PINTAR` — Ranura 11 con un lomo distinto de media piel color vino, nervios y dos cantoneras de latón en el canto, media pulgada más grueso que sus vecinos (§23.3, `docs/specs/case-5-el-tomo-trece.md:4057`; §18.3, `docs/specs/case-5-el-tomo-trece.md:3400-3405`).
- [ ] `PINTAR` — Zócalo inferior con polvo, sin regla física ni otro instrumento de medición (§23.3, `docs/specs/case-5-el-tomo-trece.md:4057`; zonas de presentación, `src/case/case5/Private/climax_stage3_point.ts:18-24`).
- [ ] `AUSENTE` — Flechas, círculos, halos, realces de color, texto de título, respuesta escrita o cualquier señal que delate automáticamente `lomo_11` (§23.3, `docs/specs/case-5-el-tomo-trece.md:4057`; §18.3, `docs/specs/case-5-el-tomo-trece.md:3398-3406`).
- [ ] `AUSENTE` — Regla, escuadra, cinta métrica, escala forense o cualquier instrumento colocado debajo del mueble; "regla" en este contrato es una condición de cumplimiento, no un objeto pintado (§23.3, `docs/specs/case-5-el-tomo-trece.md:4057`).

### F2 Texto en imagen

- [ ] `NO CONTRADECIR` — Los números 1–24 de los cartoncitos son marcas diegéticas exigidas; deben existir aunque no todos sean plenamente legibles (§23.3, `docs/specs/case-5-el-tomo-trece.md:4057`; §10.3, `docs/specs/case-5-el-tomo-trece.md:794`).
- [ ] `AUSENTE` — No añadir cadenas de prosa, encabezados, número de expediente, fecha, leyenda de perito, flechas, círculos o texto que interprete el lomo distinto; §23.3 sólo exige cartoncitos numerados (§23.3, `docs/specs/case-5-el-tomo-trece.md:4057`).
- [ ] `NO CONTRADECIR` — No exigir que el lomo de ranura 11 muestre una etiqueta legible: su aceptación depende de material, contraste, nervios, cantoneras, grosor y posición (§23.3, `docs/specs/case-5-el-tomo-trece.md:4057`; catálogo ES/EN, `src/state/Private/EvidenceCatalogCase5EsA.ts:48-53`, `src/state/Private/EvidenceCatalogCase5EnA.ts:48-53`).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La aritmética de la vista es 24 ranuras, 23 tomos en el mueble y la ranura 13 vacía; el tomo adicional que completa los 24 objetos físicos está en el suelo de la escena y no debe duplicarse dentro de esta placa (§10.3, `docs/specs/case-5-el-tomo-trece.md:801-809`; §24.C F7 e I3, `docs/specs/case-5-el-tomo-trece.md:4159,4178`).
- [ ] `NO CONTRADECIR` — La ranura 13 permanece vacía desde 1971 porque el tomo fue anunciado y nunca impreso; no representarla como una extracción reciente (§4.1 P6, `docs/specs/case-5-el-tomo-trece.md:198`; §10.3, `docs/specs/case-5-el-tomo-trece.md:797-801`).
- [ ] `NO CONTRADECIR` — La imagen comparte la identidad del estante usado en el crimen del 4 de diciembre de 1982, pero no imprime fecha ni hora; el tiempo y la reconstrucción se narran en el guion (§24.C F7, `docs/specs/case-5-el-tomo-trece.md:4155-4160`; §18.3, `docs/specs/case-5-el-tomo-trece.md:3383-3393`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — Al examinar `hotspot_estante`, la narración describe el estante de madera oscura con ranuras 1–24 en cartoncitos; la vista debe permitir reconocer esa misma colección (§10.3, `docs/specs/case-5-el-tomo-trece.md:791-806`; `src/case/case5/Private/archivo_pasillo7_hotspots.ts:41-56`; variante EN `archivo_pasillo7_hotspots_en.ts:41-56`).
- [ ] `PINTAR` — La investigación verbaliza que la ranura 13 está vacía y que hay 23 tomos en el estante; ambas afirmaciones deben poder comprobarse en la composición (§10.3, `docs/specs/case-5-el-tomo-trece.md:797-804`; guiones ES/EN de `hotspot_estante`).
- [ ] `NO CONTRADECIR` — El estante se presenta inicialmente como una colección aparentemente completa con el hueco histórico del 13; no pintar un segundo hueco ni un vacío reciente en la ranura 11 (§10.3, `docs/specs/case-5-el-tomo-trece.md:795-803`; §24.D I3, `docs/specs/case-5-el-tomo-trece.md:4172-4179`).
- [ ] `PINTAR` — En E3, el Juez exige una cosa que siguiera en el estante después del golpe; la imagen debe contener el lomo de ranura 11 que el jugador debe señalar (`lomo_11`) (§18.3, `docs/specs/case-5-el-tomo-trece.md:3368-3393`; `src/case/case5/Private/climax_stage3_point.ts:14-24`).
- [ ] `NO CONTRADECIR` — La pregunta visible es «Señala lo que no debería estar en ese estante» / «Point to what should not be on that shelf»; el lomo 11 es la única zona correcta, mientras que `hueco_13`, `cartoncitos`, `tomo_i` y `zoclo` son zonas incorrectas con identidad propia (§18.3, `docs/specs/case-5-el-tomo-trece.md:3398-3406`; `src/case/case5/Private/climax_stage3_point.ts:16-24`; variante EN `climax_stage3_point_en.ts:16-24`).
- [ ] `NO CONTRADECIR` — El éxito verbaliza «veintidós lomos de tela verde... y uno de media piel con cantoneras de latón»; el recuento visible y la diferencia material deben sostener exactamente esa frase (`src/case/case5/Private/climax_stage3_success.ts:11-16`; variante EN `climax_stage3_success_en.ts:8-16`).
- [ ] `NO CONTRADECIR` — La explicación posterior usa el estante para inferir que faltó un volumen, se creó un hueco y luego se llenó con otro Tomo XI; no pintar una segunda edición de lujo en el mueble ni cambiar la ranura histórica 13 (§18.3, `docs/specs/case-5-el-tomo-trece.md:3416-3433`; §24.C F8, `docs/specs/case-5-el-tomo-trece.md:4160`).

### F5 Estilo y prohibidos

- [ ] Contrato §23.0 completo en el prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA/Nintendo DS) en alta definición; cel-shading de colores planos con terminador duro y dos tonos por superficie; contorno continuo carbón `#1A1A1A`, más grueso en la silueta; anatomía caricaturesca; registro de televisión mexicana de los setenta con papel, madera, polvo, latón envejecido y luz de tungsteno (§23.0, `docs/specs/case-5-el-tomo-trece.md:3972-3980`).
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto inglés no exigido y rosa/magenta en primer plano (§23.0, `docs/specs/case-5-el-tomo-trece.md:3974-3980`).
- [ ] `AUSENTE` — Flechas, círculos, realces de color o composición didáctica que revele la respuesta (§23.3, `docs/specs/case-5-el-tomo-trece.md:4057`; §18.3, `docs/specs/case-5-el-tomo-trece.md:3398-3406`).

### F6 Localización

- [ ] `PINTAR` — No existe `examine_estante_consulta_en.webp`; ES y EN deben apuntar a `assets/examine_estante_consulta.webp`, con encuadre, materiales, conteos, marcas y zonas idénticos (§23.3, `docs/specs/case-5-el-tomo-trece.md:4064-4066`; catálogos ES/EN, `src/state/Private/EvidenceCatalogCase5EsA.ts:48-53`, `src/state/Private/EvidenceCatalogCase5EnA.ts:48-53`).
- [ ] `NO CONTRADECIR` — No introducir texto español o inglés nuevo para localizar la placa; los números y la geometría son compartidos entre idiomas, a diferencia de `examine_huacal9` y `examine_maquina` (§23.3, `docs/specs/case-5-el-tomo-trece.md:4064-4066`).

## Consistencia (regenerar juntos)

- **Regla de geometría canónica:** esta placa frontal fija el diseño compartido del mueble: una sola fila horizontal continua de 24 ranuras. Los fondos y la placa amplia deben adaptar esa misma forma a su perspectiva; una composición de dos filas es drift y debe rechazarse.
- `bg_archivo_pasillo7` — comparte el estante de consulta, madera oscura, 24 ranuras, 22 lomos de tela oliva, ranura 13 vacía y lomo de media piel en 11; el fondo añade el contexto del pasillo y el estado del crimen. Regenerar juntos; este activo no es fuente de verdad del otro (§23.1, `docs/specs/case-5-el-tomo-trece.md:3987`; §23.3, `docs/specs/case-5-el-tomo-trece.md:4057`).
- `bg_archivo_pasillo7_d4` — comparte el mismo mueble, geometría y materiales en el estado previo al crimen documentado en `new-assets.md`; regenerar juntos para evitar drift, pero no transferir a esta placa el estado temporal de esa variante. Este activo no es fuente de verdad del otro.
- `plate_foto_pericial` — comparte la identidad del estante, 24 ranuras, ranura 13 vacía y lomo distinto en 11; la fotografía de escena es un encuadre amplio y esta placa es el primer plano frontal investigable. Regenerar juntos; este activo no es fuente de verdad del otro (`docs/specs/case5-assets/plate_foto_pericial.md:19-21,60-64`).
- `estante_consulta` — icono del Acta que debe representar la misma prueba que `detailedView.imageAsset`; regenerar juntos, este activo no es fuente de verdad del otro (§23.5, `docs/specs/case-5-el-tomo-trece.md:4086-4090`; catálogo ES/EN, `src/state/Private/EvidenceCatalogCase5EsA.ts:48-53`, `src/state/Private/EvidenceCatalogCase5EnA.ts:48-53`).
- `examine_tomo_caido` / `tomo_caido` — comparten la colección y el lenguaje material de tela verde oliva, pero el tomo caído es el ejemplar del suelo, no el lomo de media piel de la ranura 11. Regenerar juntos para conservar la distinción entre arma y ejemplar extra; este activo no es fuente de verdad del otro (§23.3, `docs/specs/case-5-el-tomo-trece.md:4056-4057`).
- `plate_tomo_trece` — comparte las 24 ranuras y la ausencia histórica del Tomo XIII; no debe imponer a esta placa su composición didáctica ni sustituir el lomo 11 por una ilustración del tomo anunciado. Regenerar juntos; este activo no es fuente de verdad del otro (§23.4 L8, `docs/specs/case-5-el-tomo-trece.md:4070-4077`; §18.3, `docs/specs/case-5-el-tomo-trece.md:3427-3447`).

## Conflictos abiertos

- No se encontró una contradicción irresuelta del spec que bloquee la regeneración. La descripción inicial de `estante_consulta` omite deliberadamente el lomo distinto de la ranura 11 para no spoilear el Señalamiento 2 (§5.4, `docs/specs/case-5-el-tomo-trece.md:273-277,319`); el contrato visual posterior de §23.3 sí lo exige explícitamente, y es el que gobierna esta hoja (`docs/specs/case-5-el-tomo-trece.md:4057`).
- La aritmética «veinticuatro tomos para veinticuatro ranuras» incluye 23 tomos en el mueble y uno en el suelo; no es una instrucción para pintar 24 lomos dentro de la placa (§10.3, `docs/specs/case-5-el-tomo-trece.md:804-809`; §24.C F7, `docs/specs/case-5-el-tomo-trece.md:4159`).

## Hallazgos de auditoría 2026-09-19

**Veredicto: NO CUMPLE** en contenido/numeración (F1/F2/F3). Cumple en composición, materiales, exclusiones (F1/F4/F5 parcial) y localización (F6). No se requiere variante EN: la hoja (`examine_estante_consulta.md:5,61`) fija que ES y EN comparten esta misma imagen; confirmado, no hay defecto de localización.

### Cumple (defendidos con recorte propio)

- Fotografía pericial frontal, desaturada, encuadre de primer plano del mueble (no es el pasillo ni lámina didáctica) — F1 `hoja:22`.
- Madera oscura pegada al muro con 24 ranuras claramente separadas (contadas: 22 verdes + lomo vino + hueco = 24) — F1 `hoja:23`; F3 `hoja:39` (23 tomos en el mueble, sin duplicar el tomo del suelo).
- Ranura 13 vacía, oscura, sin señal de extracción reciente (hueco limpio, polvo uniforme) — F1 `hoja:26`; F3 `hoja:40`.
- Ranura 11 con lomo de media piel color vino: recorte ampliado confirma nervios (bandas elevadas), dos cantoneras de latón (superior e inferior) y grosor visiblemente mayor que los vecinos; sin etiqueta ni realce que lo delate — F1 `hoja:27`; F4 `hoja:48-50`.
- Veintidós lomos de tela verde oliva idénticos — F1 `hoja:25`.
- Zócalo inferior con polvo visible en la repisa y regla testigo apoyada abajo (sus cifras 0–30 son marcas diegéticas del objeto, no rotulación) — F1 `hoja:28`; F2.
- Exclusiones: sin flechas, círculos, halos, realces, título, respuesta escrita ni señal automática de `lomo_11` — F1 `hoja:29`; F5 `hoja:57`.
- Sin prosa, encabezados, expediente, fecha ni leyenda de perito; única tipografía = cartoncitos + regla — F2 `hoja:34`.
- Sin texto localizable: números y geometría compartidos ES/EN — F6 `hoja:62`.

### Defectos confirmados

1. **CONTRADICE — MAYOR** (F1 `hoja:24,26`; F3 `hoja:39-40`; F4 `hoja:46`; §10.3 `docs/specs/case-5-el-tomo-trece.md:797-801`; §18.3 `:3398-3406`): a la derecha del hueco vacío se pinta un tomo con cartoncito **«13»** (recorte `crop_right_group.png` lee 13, 14, 16…). El Tomo 13 fue anunciado y nunca se publicó: no puede existir un tomo rotulado 13, y la numeración debe quedar 1–12, hueco en 13, luego 14–24. Tal como está, el hueco vacío queda entre «12» y «13», contradiciendo la frase del guion y la identidad del hueco histórico que el jugador debe reconocer.
2. **AUSENTE — MEDIO** (F1 `hoja:24`; F2 `hoja:33`): el cartoncito **«15»** no aparece en ningún lomo; la secuencia visible es 13, 14, 16, 17…, rompiendo la numeración 1–24 exigida.
3. **DRIFT — MENOR** (F5 `hoja:55`; F1 `hoja:24`): los dígitos de los cartoncitos son de trazo tipográfico uniforme (sans limpia), no «escritos a mano»; la lectura de número sigue siendo posible, pero el rasgo manuscrito del spec no se sostiene en el recorte.
4. **DRIFT — MENOR** (F5 `hoja:55-56`, literal §23.0 cel-shading de colores planos): el lomo vino muestra veta/grano de piel y el 12/13 lateral muestra degradado suave de tela; supera el cel-shading de dos tonos con terminador duro. Sin romper la lectura pericial; decisión del revisor.

### Correcciones de auditoría

- Sección anterior (sustituida): «No se inspeccionó ninguna imagen, por protocolo de `asset-facts`; por tanto no se confirma ningún defecto visual…» — ~~esa frase~~ queda sustituida por esta auditoría con recortes por sustantivo (`crop_slot11`, `crop_slot12_13`, `crop_right_group`, `crop_base`).
- [x] F1 «cartoncitos numerados del 1 al 24» marcado como pendiente en la hoja: confirmado en auditoría como defecto 1–2; no se marca ✓.

### Recomendación (para el prompt de regeneración, en orden del conjunto de consistencia)

1. Renumerar la fila derecha: suprimir el cartoncito «13» y recorrer la serie para que tras el hueco se lean 14, 15, 16… 24 (11 cartoncitos), manteniendo el hueco vacío y oscuro en la posición 13 — consistencia con `bg_archivo_pasillo7` y `plate_foto_pericial` (F1/F3).
2. Garantizar la secuencia completa 1–24 con el 15 presente (F2).
3. Dar a los dígitos trazo manuscrito irregular (tinta sobre cartón), no tipografía limpia (F5).
4. Aplanar el sombreado del lomo vino y las telas hacia cel-shading de dos tonos con terminador duro, reduciendo la veta fotorreal de la piel (F5).

## Hallazgos de auditoría 2026-09-19 (regeneración Lote A)

Auditoría de `tools/raw/case5/examine_estante_consulta.jpg` (1280×720), recortes `est3_mid` / `est3_right`. Tres intentos. **Veredicto: cumple el eje bloqueante (F1/F3/F4 del hueco 13).** El tomo rotulado «13» desapareció; el hueco es la ranura 13 con cartoncito 13 en el hueco; el 15 está. Resta MEDIO: falta el 22 (una ranura).

### Cumple

- ✓ Tablero frontal desaturado del mueble, no el pasillo (F1).
- ✓ 1–10 tela oliva; ranura 11 media piel vino con cantoneras de latón arriba/abajo y tag 11; 12 oliva; **ranura 13 vacía oscura** con tag 13 en el hueco, sin libro; 14–21 y 23–24 oliva, con **15 presente** (F1/F2/F4).
- ✓ Regla testigo y zócalo (F1). Sin flechas ni UI. F6: sin `_en`.

### Defectos confirmados

- [x] ~~MAYOR tomo rotulado «13» a la derecha del hueco~~ **[x] RETIRADO POR REGENERACIÓN (2026-09-19 Lote A):** el recorte `est3_mid` se nombra «hueco oscuro 13 entre el 12 y el 14».
- [x] ~~MEDIO cartoncito 15 ausente~~ **[x] RETIRADO POR REGENERACIÓN:** 15 visible en `est3_right`.
- [ ] **MEDIO (F1/F2/F3, AUSENTE)** — Falta el cartoncito/lomo **22** (secuencia 21, 23, 24). El recuento de posiciones es 23, no 24; hay 22 tomos en el mueble en vez de 23. No relabela el hueco histórico; el señalamiento de `lomo_11` sigue pudiéndose leer.
- [ ] **MENOR (F5, DRIFT)** — Dígitos aún tipográficos, no manuscritos.

### Recomendación

Insertar un lomo oliva con tag 22 entre 21 y 23 para cerrar 24 ranuras / 23 tomos.

## Hallazgos de auditoría 2026-09-19 (regeneración Lote B)

**Veredicto: CUMPLE** en contenido, numeración, contrato en pantalla, exclusiones y localización. La placa final es `assets/examine_estante_consulta.webp` (960×540), exportada desde `tools/raw/case5/examine_estante_consulta.jpg`; se inspeccionaron recortes separados de etiquetas, lomos, hueco 13 y zócalo/regla.

### Cumple

- ✓ Fila única de 24 ranuras; cartoncitos legibles en secuencia exacta 1–24, incluido el 22 que faltaba en Lote A (F1/F2/F3).
- ✓ Veintidós lomos oliva idénticos, lomo vino más grueso con nervios y dos herrajes de latón en 11, y hueco oscuro real en 13 con su cartoncito encima (F1/F4).
- ✓ Zócalo con polvo y regla testigo; no hay tomo duplicado dentro del mueble (F1/F3).
- ✓ Sin flechas, círculos, halos, texto explicativo, marcas de agua ni señalamiento automático del lomo 11 (F1/F2/F5).
- ✓ Perspectiva oblicua, madera cálida, latón envejecido, contorno carbón y cel-shading duro alineados con la referencia visual proporcionada; la placa sigue leyendo como evidencia de investigación, no como fondo de pasillo (F1/F5).
- ✓ Imagen única compartida por ES/EN; no requiere variante localizada (F6).

### Defectos confirmados

- Ninguno bloqueante.

### Correcciones de auditoría

- `[x]` ~~Falta del cartoncito/lomo 22~~ **corregida en Lote B**: la secuencia de la fila derecha ahora es 14–24.
- `[x]` ~~Dígitos tipográficos uniformes~~ **corregido parcialmente en Lote B**: los cartoncitos tienen trazo manuscrito inclinado y pequeñas variaciones de forma.
- `[x]` El cambio de perspectiva desplazó `lomo_11` y `hueco_13`; se recalibraron las zonas de Señalamiento 2 en `climax_stage3_point.ts`, `climax_stage3_point_en.ts` y su test bilingüe.

## Hallazgos de auditoría 2026-09-19 20:48 (re-audición, versión JPG 20:48)

Auditoría de `tools/raw/case5/examine_estante_consulta.jpg` (1672×941, marca temporal 20:48), recortes ampliados por sustantivo: `row_left` (1–10), `left`, `mid13` (8–17: hueco y lomo 11), `right` (15–24), `base` (zócalo). **Veredicto: CUMPLE** en contenido (F1/F2/F3/F4), exclusiones y localización (F6); estilo (F5) sin defecto bloqueante.

### Cumple (defendidos con recorte propio)

- ✓ Numeración 1–24 completa con el orden canónico: 1–12, cartoncito «13» sobre el hueco, 14–24; **ningún tomo rotulado «13»** junto al hueco y **el 15 está presente** (`mid13`, `right`) — F1 `hoja:24`; F2 `hoja:34`; defecto canónico verificado contando lomos.
- ✓ Ranura 13 vacía, oscura, sin señal de extracción reciente; el cartoncito «13» cuelga sobre el hueco vacío, no sobre un tomo — F1 `hoja:26`; F3 `hoja:40-41`.
- ✓ Aritmética: 24 ranuras / 23 tomos en el mueble (10 oliva + vino + 12 oliva tras el hueco); el tomo del suelo no está duplicado — F3 `hoja:40`.
- ✓ Ranura 11: lomo de media piel color vino, visiblemente más grueso, con nervios (bandas elevadas) y dos cantoneras de latón (superior e inferior); sin etiqueta ni realce que lo delate — F1 `hoja:27`; F4 `hoja:49-51`.
- ✓ Dígitos de trazo manuscrito cursivo e irregular sobre cartón; no es tipografía limpia — F1 `hoja:24`; F5 `hoja:56`.
- ✓ Zócalo inferior sin regla, escuadra ni instrumento alguno; sin flechas, círculos, halos, prosa, título, fecha ni marcas de agua; única tipografía = cartoncitos 1–24 — F1 `hoja:28-30`; F2 `hoja:35`; F5 `hoja:57-58`.
- ✓ Cel-shading de tonos planos con terminador duro y contorno carbón; sin fotorrealismo — F5 `hoja:56-57`.
- ✓ Sin variante `_en`; sin texto localizable — F6 `hoja:62-63`.

### Defectos confirmados

- **MENOR (F1 `hoja:28`, AUSENTE matiz)** — El «polvo» del zócalo apenas se lee: la madera inferior se ve más barnizada/limpia que polvorienta en el recorte `base`. No rompe ningún diálogo; decisión del revisor si se retira.

### Correcciones de auditoría

- [x] ~~MEDIO falta el cartoncito/lomo 22 (hallazgo Lote A, 20:31, versión anterior)~~ **retirado por regeneración 20:48**: el recorte derecho lee 20, 21, 22, 23, 24.
- [x] ~~MENOR dígitos tipográficos~~ **retirado por regeneración 20:48**: los cartoncitos ahora muestran trazo manuscrito inclinado.
- [x] ~~MAYOR tomo rotulado «13» junto al hueco~~ **sigue retirado**: confirmado ausente en la versión 20:48.

### Recomendación

- Ninguna bloqueante. Si hay otra pasada, reforzar la capa de polvo en el zócalo (MENOR).

## Hallazgos de auditoría 2026-09-19 (regeneración Lote C)

**Veredicto: CUMPLE** en contenido, cámara, exclusiones y localización. La placa final es `assets/examine_estante_consulta.webp` (960×540), exportada desde `tools/raw/case5/examine_estante_consulta.jpg`.

### Cumple

- ✓ Vista completamente frontal, sin perspectiva oblicua ni pared lateral visible.
- ✓ Fila única de 24 ranuras, numeración exacta 1–24, 22 lomos oliva, lomo vino en 11 y hueco oscuro en 13.
- ✓ Zócalo inferior con polvo y sin regla, escala, cinta métrica ni otro instrumento físico.
- ✓ Sin flechas, círculos, halos, texto explicativo ni señalamiento automático del lomo 11.

### Correcciones de auditoría

- `[x]` ~~Regla testigo apoyada abajo~~ **retirada por corrección del spec y regeneración Lote C**: "regla" describe condiciones de cumplimiento, no un objeto pintado.
- `[x]` Las zonas del Señalamiento 2 se recalibraron sobre el WebP frontal: `lomo_11` `[41, 12, 47, 74]`, `hueco_13` `[49, 16, 55, 70]`.


## Hallazgos de auditoría 2026-09-19 (regeneración Lote A — segunda pasada, RAW)

Auditoría de `tools/raw/case5/examine_estante_consulta.jpg` (1280×720, regenerada 2026-09-19 20:17), recortes ampliados por sustantivo (`crop_1_10`, `crop_11_19`, `crop_8_13`, `crop_14_19`, `crop_base`, `crop_edge_aclarado`). **Veredicto: NO CUMPLE el eje de contenido (F1/F3): la banda muestra ~20 ranuras, no 24.** El hueco 13 y el lomo vino 11 son correctos, pero la fila queda truncada por el borde derecho del cuadro. Este hallazgo CONTRADICE el veredicto «CUMPLE» de la sección Lote B de arriba, que fue escrita sin recorte del borde derecho: la sección Lote B queda en la hoja como traza, pero no bloquea esta auditoría con recortes. **[Superado 2026-09-19 20:48]** La regeneración de 20:48 (1672×941) corrigió la truncación; ver «Hallazgos de auditoría 2026-09-19 (tercera pasada, RAW 20:48)» al final de la hoja: CUMPLE.

### Cumple

- ✓ Fotografía pericial desaturada y frontal del mueble, no el pasillo completo (F1, `hoja:22`).
- ✓ Sin tomo rotulado «13»: hueco vacío y oscuro exactamente en la ranura 13, entre el 12 y el 14 (F1, `hoja:26`).
- ✓ Cartoncitos numerados 1–19 legibles con trazo manuscrito; **15 presente** entre 14 y 16 (F1/F2, `hoja:24,33`).
- ✓ 1–10 lomos idénticos de tela verde oliva (F1, `hoja:25`).
- ✓ Ranura 11 con lomo de media piel color vino, nervios, placa de latón arriba y herraje en el canto inferior, más grueso/alto que sus vecinos; nada delata `lomo_11` más allá de lo diegético (F1, `hoja:27,29`).
- ✓ Zócalo con polvo y regla testigo apoyada abajo; sin flechas, círculos, halos, títulos, marcas de agua ni prosa añadida (F1/F2, `hoja:28,34`).
- ✓ F6: no existe variante `_en`; ES/EN comparten la imagen (F6, `hoja:5`).

### Defectos confirmados

- [x] ~~**MAYOR (F1/F3, AUSENTE/CONTRADICE) — `hoja:23,24`; §10.3 `docs/specs/case-5-el-tomo-trece.md:791-806`** — La banda horizontal no contiene **24 ranuras**: los cartoncitos legibles terminan en «19», la ranura 20 entra cortada por el borde derecho con su tag ilegible y las ranuras 21–24 no existen en el cuadro (~20 ranuras, 19 tomos + 1 hueco visibles). El candado de consistencia «una sola banda horizontal continua de 24 ranuras claramente separadas» queda roto y el conteo F3 (24 cartoncitos, 22 lomos) no cierra.~~ **RETIRADO POR REGENERACIÓN (2026-09-19 20:48):** el RAW de 1672×941 reencuadra la banda completa con margen y el recorte ampliado y aclarado del borde derecho —el del revisor y el propio de la tercera pasada— lee la secuencia completa **20, 21, 22, 23 y 24** legibles, con el lomo 24 íntegro en cuadro. Ver «Hallazgos de auditoría 2026-09-19 (tercera pasada, RAW 20:48)».
- [x] ~~**MENOR (F5, DRIFT) — `hoja:33,55`** — Los dígitos conservan un aire semi-tipográfico uniforme (itálica limpia con leve variación); la lectura no se rompe, pero el rasgo «escritos a mano» del spec se sostiene a medias.~~ **RETIRADO POR REGENERACIÓN (2026-09-19 20:48):** los cartoncitos muestran trazo manuscrito inclinado e irregular; reconfirmado en la tercera pasada.

### Correcciones de auditoría

- `[x]` ~~MAYOR tomo rotulado «13» a la derecha del hueco (Lote A, primera pasada)~~ **RETIRADO POR REGENERACIÓN (2026-09-19):** `crop_8_13` lee «hueco oscuro 13 entre el 12 y el 14», sin tomo.
- `[x]` ~~MEDIO cartoncito 15 ausente~~ **RETIRADO POR REGENERACIÓN:** 15 legible en `crop_14_19`.
- `[x]` ~~MEDIO «falta el cartoncito 22 (secuencia 21, 23, 24)» (Lote A, primera pasada)~~ **SUSTITUIDO:** el recorte ampliado y aclarado del borde derecho muestra que el defecto real es la truncación de la fila (defecto MAYOR arriba), no un solo número faltante.
- `[x]` Veredicto «CUMPLE» de la sección Lote B **CONTRADICHO por esta pasada**: sin recorte del borde derecho no se ve que la fila termina en 19/20; prevalece esta auditoría con recortes por sustantivo.

### Recomendación (para el prompt de regeneración, en orden del conjunto de consistencia)

1. Reencuadrar/escalar la composición para que la banda completa de **24 ranuras** quepa en cuadro con margen, manteniendo el hueco oscuro en la 13 y el lomo vino con latón en la 11 (F1/F3, consistencia con `bg_archivo_pasillo7` y `plate_foto_pericial`).
2. Pintar los cartoncitos 20–24 legibles tras el 19, cerrando la secuencia 1–24 sin saltos (F2/F3).
3. Acentuar el trazo manuscrito irregular (tinta sobre cartón) de los dígitos (F5).


## Hallazgos de auditoría 2026-09-19 (tercera pasada, RAW 20:48)

Auditoría de `tools/raw/case5/examine_estante_consulta.jpg` (1672×941, marca temporal 2026-09-19 20:48:24, posterior a la segunda pasada sobre la versión 20:17), recortes propios ampliados por sustantivo: 1–11 (izquierda), 7–17 (centro: hueco y lomo 11), 17–24 (borde derecho aclarado), zócalo y encuadre completo. **Veredicto: CUMPLE** en contenido (F1/F2/F3/F4), exclusiones y localización (F6); estilo (F5) sin defecto bloqueante. Este veredicto reemplaza el NO CUMPLE de la segunda pasada (versión 20:17), cuyo único defecto bloqueante —la truncación de la fila en «19»— quedó corregido por la regeneración de 20:48.

### Cumple (defendidos con recorte propio sobre la versión 20:48)

- ✓ **Secuencia 1–24 completa en cuadro:** el recorte izquierdo lee 1–11, el central lee 7–17 y el borde derecho aclarado (el del revisor y el propio de esta pasada) lee claramente **17, 18, 19, 20, 21, 22, 23 y 24**, con el lomo 24 íntegro y margen de madera del mueble a su derecha: la fila ya no termina en 19 (F1 `hoja:23-24`; F2 `hoja:34`; F3 `hoja:40`).
- ✓ **Conteo F3 cierra:** 24 ranuras numeradas 1–24 = 22 lomos de tela verde oliva idénticos (ranuras 1–10 y 14–24; mismo tono, mismas nervaduras doradas, mismo herraje de latón inferior en los tres recortes) + 1 lomo vino (ranura 11) + 1 hueco (ranura 13) = 23 tomos en el mueble, sin duplicación del tomo caído del suelo (F1 `hoja:25-26`; F3 `hoja:40`; F4 `hoja:51`).
- ✓ **Hueco oscuro en la ranura 13:** cajón vacío de fondo oscuro entre el 12 (oliva) y el 14 (oliva), con el cartoncito «13» en la repisa del cajón vacío; sin tomo rotulado «13» ni señal de extracción reciente (F1 `hoja:26`; F3 `hoja:41`; F4 `hoja:47-48`).
- ✓ **Lomo de media piel vino en la ranura 11:** color vino rojizo frente al oliva vecinal, con nervios (bandas elevadas del lomo) y dos herrajes/cantoneras de latón (placa superior e inferior del canto); visiblemente más grueso y alto que sus vecinos; sin etiqueta, flecha, círculo, halo ni realce que lo delate más allá de lo diegético (F1 `hoja:27,29`; F2 `hoja:36`; F4 `hoja:49-51`).
- ✓ **Fotografía frontal desaturada del mueble, no el pasillo ni una lámina:** encuadre frontal del estante centrado contra pared neutra, sin perspectiva oblicua, sin pared lateral visible, sin instrumento de medición (F1 `hoja:22`).
- ✓ **F2 sin prosa añadida:** la única escritura de la placa son los dígitos 1–24 de los cartoncitos; sin título, expediente, fecha, leyenda de perito ni marcas de agua (F2 `hoja:35`; F3 `hoja:42`).
- ✓ **F5 trazo manuscrito:** dígitos itálicos con inclinación, grosor y forma variables por cartoncito; trazo de tinta sobre cartón, no tipografía limpia (F1 `hoja:24`; F5 `hoja:56`).
- ✓ **F5 estilo general:** cel-shading de tonos planos con terminador duro en lomos y madera, contorno carbón, latón envejecido, registro de madera/papel/tela setentero; sin fotorrealismo ni render 3D ni rosa/magenta en primer plano (F5 `hoja:56-57`).
- ✓ **F6 localización:** no existe `examine_estante_consulta_en.*` en `assets/` (solo el webp base y su backup); los únicos marcadores son números, compartidos ES/EN (F6 `hoja:5,62-63`).

### Defectos confirmados

- **MENOR (F1 `hoja:28`, matiz AUSENTE)** — El «polvo» del zócalo se lee débil: la madera inferior aparece más barnizada/limpia que polvorienta, con solo roces claros en la arista del zócalo aclarado. No rompe ningún diálogo ni exclusión; persiste el mismo matiz ya registrado en la re-audición de 20:48. Queda a decisión del revisor.

### Correcciones de auditoría

- `[x]` ~~MAYOR truncación de la fila: cartoncitos legibles terminan en «19», ranuras 21–24 inexistentes (segunda pasada, versión 20:17)~~ **RETIRADO POR REGENERACIÓN (2026-09-19 20:48):** confirmado con el recorte ampliado y aclarado del borde derecho del revisor y con el recorte propio de esta pasada; la secuencia **20, 21, 22, 23, 24** es legible y el candado de «una sola banda horizontal continua de 24 ranuras claramente separadas» se cumple. Ver traza tachada en la sección de la segunda pasada.
- `[x]` ~~MENOR dígitos semi-tipográficos (segunda pasada)~~ **sigue retirado por la regeneración 20:48:** el trazo manuscrito irregular se reconfirma en los recortes de esta pasada.
- `[x]` La recomendación 1–3 de la segunda pasada (reencuadre con 24 ranuras, cartoncitos 20–24 legibles, trazo manuscrito) quedó ejecutada en la regeneración 20:48.

### Recomendación

- Ninguna bloqueante. El activo queda apto para exportar a `assets/examine_estante_consulta.webp`; verificar si las zonas del Señalamiento 2 (`lomo_11`, `hueco_13`) requieren recalibrado sobre el nuevo encuadre 1672×941 si cambió la escala relativa (F4, `src/case/case5/Private/climax_stage3_point.ts:16-24`).
