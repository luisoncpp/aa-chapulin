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
- Regla testigo apoyada abajo; composición frontal de fotografía pericial desaturada, sin flechas, círculos ni realces.
- El objeto que se presenta en E3 es el estante fotografiado; el tomo caído del suelo y la explicación de los 24 objetos físicos se completan mediante el diálogo, no convierten esta placa en una vista del pasillo completo.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Fotografía pericial en color desaturado, frontal, del estante de consulta; no es el fondo completo del pasillo ni una lámina explicativa (§23.3, `docs/specs/case-5-el-tomo-trece.md:4041-4045,4057`).
- [ ] `PINTAR` — Estante de madera oscura pegado al muro, con 24 ranuras claramente separadas (§10.3, `docs/specs/case-5-el-tomo-trece.md:791-806`; §23.3, `docs/specs/case-5-el-tomo-trece.md:4057`).
- [ ] `PINTAR` — Cartoncitos escritos a mano numerados del 1 al 24; deben seguir siendo marcas diegéticas, no rótulos explicativos superpuestos (§10.3, `docs/specs/case-5-el-tomo-trece.md:794`; §18.3, `docs/specs/case-5-el-tomo-trece.md:3398-3406`).
- [ ] `PINTAR` — Veintidós lomos de tela verde oliva idénticos (§23.3, `docs/specs/case-5-el-tomo-trece.md:4057`; éxito del señalamiento, `docs/specs/case-5-el-tomo-trece.md:3411-3414`).
- [ ] `PINTAR` — Ranura 13 vacía y oscura (§23.3, `docs/specs/case-5-el-tomo-trece.md:4057`; §10.3, `docs/specs/case-5-el-tomo-trece.md:797-801`).
- [ ] `PINTAR` — Ranura 11 con un lomo distinto de media piel color vino, nervios y dos cantoneras de latón en el canto, media pulgada más grueso que sus vecinos (§23.3, `docs/specs/case-5-el-tomo-trece.md:4057`; §18.3, `docs/specs/case-5-el-tomo-trece.md:3400-3405`).
- [ ] `PINTAR` — Zócalo inferior con polvo y regla testigo apoyada abajo (§23.3, `docs/specs/case-5-el-tomo-trece.md:4057`; zonas de presentación, `src/case/case5/Private/climax_stage3_point.ts:18-24`).
- [ ] `AUSENTE` — Flechas, círculos, halos, realces de color, texto de título, respuesta escrita o cualquier señal que delate automáticamente `lomo_11` (§23.3, `docs/specs/case-5-el-tomo-trece.md:4057`; §18.3, `docs/specs/case-5-el-tomo-trece.md:3398-3406`).

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
