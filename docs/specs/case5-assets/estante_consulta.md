# estante_consulta — hoja de hechos
Clase: examine. Espec: §23.0, §23.3. Guion: D1 pasillo 7; clímax E3 / Señalamiento 2.

Activo compartido por ES/EN: `assets/examine_estante_consulta.webp` (no existe `_en`). Es una lámina de examen mostrada a 640 × 360 desde un archivo de 1280 × 720; las marcas operativas son números y geometría, por lo que la composición no se duplica por idioma (§23.3, línea 4041; §23.3, línea 4066; `EvidenceCatalogCase5EsA.ts:48-53`; `EvidenceCatalogCase5EnA.ts:48-53`).

Mapa semántico: estante de consulta del pasillo 7; mueble de madera oscura visto de frente; 24 ranuras con cartoncitos numerados; colección de *El Saber Universal* donada en 1971; 23 tomos en el estante y un tomo adicional en el suelo; ranura 13 vacía/oscura desde 1971; fila de lomos de tela verde oliva; lomo distinto de la ranura 11; zoclo con polvo; regla testigo abajo. Alias seguidos: `estante`, `estante de veinticuatro ranuras`, `cartoncitos`, `hueco_13`, `lomo_11`.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Estante de consulta de madera oscura, pegado al muro y encuadrado de frente (§23.3, línea 4057; `archivo_pasillo7_hotspots.ts:45`).
- [ ] `PINTAR` — Veinticuatro ranuras en una sola fila/estructura, con cartoncitos numerados escritos a mano (`1`–`24` como numeración diegética) (§23.3, línea 4057; `archivo_pasillo7_hotspots.ts:45-46`).
- [ ] `PINTAR` — Veintidós lomos de tela verde oliva idénticos (§23.3, línea 4057; §24.C F7/I3, líneas 4178-4179).
- [ ] `PINTAR` — Ranura 13 vacía y más oscura; representa la ausencia histórica del tomo anunciado pero nunca publicado (§23.3, línea 4057; §4.1 P6, líneas 198-200; `archivo_pasillo7_hotspots.ts:48-52`).
- [ ] `PINTAR` — En la ranura 11, un lomo distinto entre sus vecinos: media piel color vino, con nervios y dos cantoneras de latón en el canto, aproximadamente media pulgada más grueso (§23.3, línea 4057; §18.3, líneas 3398-3405).
- [ ] `PINTAR` — Zoclo de madera bajo el mueble con polvo visible (§23.3, línea 4057; `climax_stage3_point.ts:21-23`).
- [ ] `PINTAR` — Regla testigo apoyada abajo, como elemento de fotografía pericial (§23.3, línea 4057).

### F2 Texto en imagen

- [ ] `PINTAR` — Los cartoncitos deben comunicar la numeración de las 24 ranuras; la numeración manuscrita es parte de la geometría jugable (§23.3, línea 4057; `archivo_pasillo7_hotspots.ts:45`; `climax_stage3_point.ts:20`).
- [ ] `NO CONTRADECIR` — No añadir títulos, sellos, publicidad, flechas, círculos, etiquetas explicativas ni texto narrativo no pedido; el spec sólo exige numeración manuscrita en los cartoncitos y prohíbe realces (§23.3, línea 4057).
- [ ] `NO CONTRADECIR` — La descripción inicial del Acta no debe transcribir ni revelar que el lomo distinto está específicamente en la ranura 11: la regla de redacción mantiene la solución del señalamiento fuera de la descripción inicial (§5.6, líneas 317-323; `EvidenceCatalogCase5EsA.ts:49-53`).

### F3 Cifras/fechas/horas

- [ ] `NO CONTRADECIR` — 24 ranuras, 23 tomos en el mueble y un tomo en el suelo: 24 objetos físicos para 24 ranuras, mientras que la colección publicada tiene 23 títulos (§4.1 P6, líneas 198-200; §24.C F7; §24.D I3, líneas 4178-4179; `archivo_pasillo7_hotspots.ts:52-55`).
- [ ] `NO CONTRADECIR` — La ranura 13 lleva vacía desde 1971; no convertirla en un segundo faltante ni presentarla como la respuesta correcta del señalamiento (§4.1 P6, líneas 198-200; `climax_stage3_point.ts:22`; `climax_stage3_point_en.ts:22`).
- [ ] `NO CONTRADECIR` — La diferencia del lomo de la ranura 11 es la prueba de que sobra un tomo y de que ese objeto no estaba en su lugar antes del golpe; no alterar su posición a otra ranura (§18.3, líneas 3383-3393, 3398-3405; `climax_stage3_point.ts:21`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — Al examinar el hotspot, el narrador identifica madera oscura contra el muro y ranuras del 1 al 24 en cartoncitos (`archivo_pasillo7_hotspots.ts:41-46`; variante EN `archivo_pasillo7_hotspots_en.ts:41-46`).
- [ ] `PINTAR` — La investigación debe poder sostener visualmente la secuencia: se detecta el hueco 13, se explica que existe desde antes y que el tomo se anunció pero nunca se imprimió, y se cuentan 23 tomos en el estante más uno en el suelo (`archivo_pasillo7_hotspots.ts:47-56`; variante EN `archivo_pasillo7_hotspots_en.ts:47-56`).
- [ ] `NO CONTRADECIR` — El Acta identifica el objeto como el estante donado al Archivo en 1971 y lo entrega como `estante_consulta`; su descripción inicial sólo dice “24 ranuras numeradas” y la colección, sin resolver el señalamiento (`EvidenceCatalogCase5EsA.ts:48-53`; `EvidenceCatalogCase5EnA.ts:48-53`; §5.6, líneas 317-320).
- [ ] `PINTAR` — En el clímax E3, presentar esta prueba abre el señalamiento sobre la pregunta «Señala lo que no debería estar en ese estante» / “Point to what should not be on that shelf.” (`climax_stage3.ts:9-30`; `climax_stage3_en.ts:9-30`; `climax_stage3_point.ts:14-18`; `climax_stage3_point_en.ts:14-18`).
- [ ] `PINTAR` — La zona correcta es `lomo_11`: el lomo de media piel con cantoneras de latón en la ranura 11. La composición debe dejarlo distinguible de `tomo_i`, `cartoncitos`, `hueco_13` y `zoclo` (`climax_stage3_point.ts:18-23`; variante EN `climax_stage3_point_en.ts:18-23`).
- [ ] `NO CONTRADECIR` — El hueco 13, los cartoncitos, el Tomo I y el zoclo son zonas de fallo con respuestas verdaderas; no ocultarlos, fusionarlos ni hacer que parezcan el lomo correcto (`climax_stage3_point.ts:19-23`; `climax_stage3_point_en.ts:19-23`).
- [ ] `NO CONTRADECIR` — Después del acierto, el diálogo cuenta 23 tomos y el hueco del 13, añade el tomo a un metro del cuerpo y concluye que hay 24 tomos para 24 ranuras, con uno de más; la lámina debe permitir esa lectura sin mostrar cadáver, escena completa ni información posterior del Tomo XIII (`climax_stage3.ts:18-28`; §18.3, líneas 3383-3393).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* de linaje GBA/Nintendo DS en alta definición; cel-shading de colores planos con terminador duro, dos tonos por superficie y ; contorno carbón `#1A1A1A` nítido y continuo, más grueso en silueta; formas expresivas al borde de la caricatura; colores primarios saturados; registro mexicano setentero / Chespirito con papel, madera, polvo, latón envejecido y luz de tungsteno; prohibidos fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto en inglés salvo variantes exigidas y rosa/magenta en primer plano (§23.0, líneas 3974-3980).
- [ ] `AUSENTE` — Flechas, círculos y realces de color: la lámina es el tablero de señalamiento, pero el jugador debe localizar visualmente el lomo; no incorporar ayudas gráficas (§23.3, línea 4057; `climax_stage3_point.ts:16-23`).
- [ ] `AUSENTE` — Personajes, cuerpo, silueta de gis, tomo caído en el suelo, mesa de consulta, puerta, reja, rejilla de ventilación y cualquier fondo del pasillo: esta lámina es el examen frontal del mueble, no el fondo `bg_archivo_pasillo7` (§23.1, línea 3987; §23.3, línea 4057).

### F6 Localización

- [ ] Variante única compartida ES/EN: conservar la misma composición, posiciones, cantidades, zonas y geometría; no crear `examine_estante_consulta_en` (§23.3, línea 4066; `EvidenceCatalogCase5EsA.ts:52`; `EvidenceCatalogCase5EnA.ts:52`).
- [ ] Las marcas operativas son números y geometría, por lo que no requieren traducción; todo texto incidental no pedido debe permanecer ilegible o ausente. La localización ocurre en el nombre, descripción y diálogo del Acta/clímax, no en una segunda imagen (§23.3, línea 4066; `archivo_pasillo7_hotspots_en.ts:45-56`; `climax_stage3_point_en.ts:16-23`).

## Consistencia (regenerar juntos)

- `bg_archivo_pasillo7` — comparte el mueble de consulta, 24 ranuras, 22 lomos de tela, hueco 13 y lomo distinto en 11. Regenerar juntos, este activo no es fuente de verdad del otro (§23.1, línea 3987; §23.3, línea 4057). El fondo además contiene crimen, mesa, tomo caído y pasillo; no trasladarlos a esta lámina.
- `bg_archivo_pasillo7_d4` — comparte la identidad espacial del pasillo y del mueble en el estado previo al crimen. Regenerar juntos, este activo no es fuente de verdad del otro (hoja `bg_archivo_pasillo7_d4.md`; §23.1; §10.1).
- `plate_foto_pericial` — comparte el objeto de 24 ranuras, el hueco 13 y la diferencia del lomo 11. Regenerar juntos, este activo no es fuente de verdad del otro (§23.3, línea 4057; `plate_foto_pericial.md`). La fotografía conserva cuerpo y escena; esta lámina no.
- `examine_tomo_caido` — comparte la colección, el Tomo XI de tela y la separación entre el ejemplar caído y el lomo distinto de la ranura 11. Regenerar juntos, este activo no es fuente de verdad del otro (§23.3, línea 4057; `examine_tomo_caido.md`). No trasladar a esta lámina la mancha, el sello violeta ni la guarda abierta.
- `plate_tomo_trece` — comparte las 24 ranuras y la ausencia histórica de la 13. Regenerar juntos, este activo no es fuente de verdad del otro (§23.4; §24.C F7; `plate_tomo_trece.md`). La placa histórica no sustituye el tablero interactivo ni debe anticipar el señalamiento.
- `examine_estante_consulta` ES/EN — gemelo de idioma operativo, no dos archivos: misma imagen para ambas localizaciones (`EvidenceCatalogCase5EsA.ts:48-53`; `EvidenceCatalogCase5EnA.ts:48-53`).

## Conflictos abiertos

- La regla narrativa de §5.6 dice que la descripción inicial de `estante_consulta` no debe revelar que el lomo distinto está en la ranura 11 (§5.6, líneas 317-320), mientras que §23.3 y el contrato de zonas exigen que la imagen sí muestre el lomo distinto en la 11 para el Señalamiento 2 (§23.3, línea 4057; §18.3, líneas 3398-3405). Se conserva la separación: la imagen lo pinta; la descripción del Acta no lo nombra.
- El guion de investigación llama a la colección “completa” y cuenta 23 tomos en el estante más uno en el suelo (`archivo_pasillo7_hotspots.ts:46-56`), mientras que el Libro de hechos distingue 24 objetos físicos de 23 títulos publicados (§24.D I3, líneas 4178-4179). La lámina debe hacer visible esa aritmética sin inventar un título publicado para la ranura 13.
- El catálogo/caption sólo promete “un lomo distinto entre sus vecinos” (`EvidenceCatalogCase5EsA.ts:49-53`), pero §23.3 fija media piel color vino, nervios, dos cantoneras de latón y mayor grosor (§23.3, línea 4057). Para aceptación visual manda §23.3; no resolver la discrepancia debilitando el detalle obligatorio.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen por protocolo. No hay defectos visuales confirmados ni severidades que registrar.
- La hoja queda como contrato previo a regeneración/aceptación; las zonas de Present & Point deberán remedirse si se redibuja la imagen, tal como exige el pipeline (`climax_stage3_point.ts:3-4`; `docs/architecture/asset-pipeline.md:78`).
