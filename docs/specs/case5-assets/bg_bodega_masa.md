# bg_bodega_masa — hoja de hechos

Clase: `bg`. Espec: §23.0, §23.1 (`bg_bodega_masa.webp`). Guion: §14.1; `bodega_masa.ts`, `bodega_masa_en.ts`, `bodega_masa_intro.ts`, `bodega_masa_intro_en.ts`, `bodega_masa_hotspots.ts`, `bodega_masa_hotspots_en.ts`.

El activo es un fondo compartido por las variantes española e inglesa. Representa el sótano del Archivo Judicial el día 3, durante la inspección de las 9:00 AM; el estado visual es el huacal 9 abierto para inspección, no una reconstrucción del crimen ni una escena con personajes.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Sótano con bóveda de ladrillo y vigas de hierro remachado; suelo de cemento con marcas de arrastre; atmósfera visual fría salvo por un foco desnudo colgando de un cable (§23.1, línea 3990).
- [ ] `PINTAR` — Catorce huacales de madera rubia: doce apilados de dos en dos y dos apoyados en el suelo. Todos llevan numeración de plantilla negra; sus tapas muestran tiras de papel sellado encabalgadas como escamas, amarilleando hacia abajo (§23.1, línea 3990; `bodega_masa_intro.ts:12`).
- [ ] `PINTAR` — Al frente, el huacal 9 es de gran formato y está abierto; la tapa está recargada a un lado y el borde muestra cuatro cierres de palanca reutilizables (§23.1, línea 3990).
- [ ] `PINTAR` — Dentro del huacal 9 hay nueve cajones de madera con tiradores de latón y una etiqueta manuscrita en cada frente (`bodega_masa_hotspots.ts:39`; §23.1, línea 3990).
- [ ] `PINTAR` — Dentro hay un compartimento lateral con ejemplares de lujo encuadernados en piel (§23.1, línea 3990; §2.2, líneas 113–115).
- [ ] `PINTAR` — Al fondo del huacal hay una máquina de escribir negra, con carro cromado, envuelta a medias en una funda de hule; lleva el número de partida 41 pintado a plantilla en blanco en el costado (§23.1, línea 3990; `bodega_masa_hotspots.ts:62–64`).
- [ ] `PINTAR` — Una pata de cabra cuelga de un clavo en una viga (§23.1, línea 3990; `bodega_masa_hotspots.ts:79`).
- [ ] `PINTAR` — Al fondo a la izquierda aparecen el arranque de una escalera de servicio de hierro y la reja de un montacargas (§23.1, línea 3990; §24.B, líneas 4131–4145).
- [ ] `AUSENTE` — Personajes vivos, incluido el Chómpiras, Berrondo, el Sargento y el Chapulín; el fondo se muestra sin personajes (§23.1, línea 3990; la escena coloca los personajes mediante `pose`, `bodega_masa_intro.ts:13–35`).
- [ ] `AUSENTE` — Silueta, cuerpo, tomo caído, estante de consulta o cualquier detalle del pasillo 7: esos elementos pertenecen a `bg_archivo_pasillo7`, no a la bodega (§23.1, línea 3987; §23.1, línea 3990).

### F2 Texto en imagen

- [ ] `PINTAR` — Numeración de plantilla negra en los huacales y etiquetas manuscritas en los nueve cajones (§23.1, línea 3990; `bodega_masa_hotspots.ts:39`). No inventar contenido legible para esas etiquetas.
- [ ] `PINTAR` — Marca blanca de plantilla `41` en el costado de la Olivetti Lexikon 80 (§23.1, línea 3990; `bodega_masa_hotspots.ts:63`).
- [ ] `NO CONTRADECIR` — La imagen general no debe introducir carteles, membretes ni texto adicional; §23.1 cierra la descripción con “Sin personajes, sin texto legible” (línea 3990). La marca `41` es la excepción funcional explícitamente descrita, cuya legibilidad queda abierta abajo.

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — El estado narrado de la inspección es 8 de diciembre, 9:00 AM; la línea de inspección registra 9:02, pero ninguna hora debe imprimirse en el fondo (`bodega_masa_intro.ts:11–13`; §24.A, línea 4124).
- [ ] `NO CONTRADECIR` — El inventario distingue la máquina como partida 41 y los ejemplares de lujo como 210; no convertir esas cifras de catálogo en rótulos adicionales del fondo (§6.1, línea 287; §23.1, línea 3990).
- [ ] `NO CONTRADECIR` — El cedulario contiene 11,407 tarjetas físicas en nueve cajones, con siete altas y once bajas desde el remate; el número pertenece al diálogo y al objeto entregado, no exige imprimirse en el fondo (`bodega_masa_hotspots.ts:39–53`; §24.C, línea 4153).
- [ ] `NO CONTRADECIR` — Las más de 250 aperturas y las dos tiras superiores fechadas `SÁB 4-XII` pertenecen al `detailedView`/prueba `huacal_9`; el fondo sólo debe mostrar la acumulación de tiras sin convertirlo en una placa legible (§6.1, línea 295; §14.1, líneas 2158–2165; `bodega_masa_hotspots.ts:18–30`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — La primera línea de la introducción muestra este fondo con `furniture: none` y establece “Sótano del Archivo Judicial. Bodega de bienes en depósito” (`bodega_masa_intro.ts:11`; English: `bodega_masa_intro_en.ts:11`).
- [ ] `PINTAR` — La siguiente narración cuenta catorce huacales, con doce apilados y dos en el suelo, y llama al número 9 de gran formato (`bodega_masa_intro.ts:12`; English: `bodega_masa_intro_en.ts:12`).
- [ ] `PINTAR` — El hotspot de la tapa vuelve al fondo después de la lámina de sellos; la sala debe conservar la misma composición y el huacal sigue siendo reconocible (`bodega_masa_hotspots.ts:28–31`; English: `bodega_masa_hotspots_en.ts:28–31`).
- [ ] `PINTAR` — El hotspot de cajones muestra sobre este mismo fondo los nueve cajones, madera rubia, tiradores de latón y etiquetas manuscritas (`bodega_masa_hotspots.ts:35–53`; English: `bodega_masa_hotspots_en.ts:35–53`).
- [ ] `PINTAR` — El hotspot de la máquina muestra que está al fondo del huacal, negra, con carro cromado y funda de hule, y que su marca lateral es 41 (`bodega_masa_hotspots.ts:57–72`; English: `bodega_masa_hotspots_en.ts:57–72`).
- [ ] `NO CONTRADECIR` — La máquina no debe parecer retirada ni usada durante la inspección: Berrondo permite mirar pero no escribir, y el diálogo posterior entrega la prueba `maquina_escribir` (`bodega_masa_hotspots.ts:65–72`).
- [ ] `NO CONTRADECIR` — Las antenitas del Chapulín permanecen quietas ante el huacal; esto es una afirmación narrativa sobre la reacción del personaje, no una señal gráfica que deba añadirse al fondo (`bodega_masa_intro.ts:23–35`; English: `bodega_masa_intro_en.ts:23–35`).

### F5 Estilo y prohibidos

- [ ] Repetir el contrato §23.0 completo en cualquier prompt de regeneración: ilustración 2D HD estilo *Capcom Ace Attorney* GBA/DS; cel-shading plano con terminador duro; contorno carbón `#1A1A1A`; colores primarios saturados; tema Chespirito/televisión mexicana setentera con papel, madera, polvo, latón envejecido y luz de tungsteno (§23.0, líneas 3974–3980).
- [ ] Prohibir fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto inglés no exigido y rosa/magenta en primer plano (§23.0, líneas 3978–3980).
- [ ] `NO CONTRADECIR` — Dimensiones 1536 × 1024 y recorte `cover` a 960 × 540 (§23.1, líneas 3982–3984).

### F6 Localización

- [ ] `PINTAR` — Usar el mismo `bg_bodega_masa.webp` en ES y EN; ambos módulos apuntan al mismo archivo (`bodega_masa.ts:10–18`; `bodega_masa_en.ts:10–18`). No crear `bg_bodega_masa_en.webp`.
- [ ] `NO CONTRADECIR` — La localización se limita a los diálogos y a la lámina localizada `examine_huacal9_en.webp`; la composición, marcas físicas y geometría del fondo permanecen iguales (§23.3, líneas 4064–4066).
- [ ] `NO CONTRADECIR` — No imprimir texto inglés en el fondo compartido. El `SAT 4-XII` inglés sólo pertenece a la lámina localizada del huacal, no a este background (§23.0, línea 3980; §23.3, líneas 4064–4066).

## Consistencia (regenerar juntos)

- `plate_huacal_sellos` — comparte el huacal 9, sus tiras encabalgadas y la regla de sellar encima; la lámina vuelve explícitamente a este fondo. Regenerar juntos, este activo no es fuente de verdad del otro (`bodega_masa_hotspots.ts:28–31`; §7.3, línea 384).
- `examine_huacal9` / `examine_huacal9_en` — comparte la identidad del huacal 9 y sus más de 250 tiras; el detalle puede verificar las fechas que el fondo no debe hacer legibles. Regenerar juntos, este activo no es fuente de verdad del otro (§6.1, línea 295; §23.3, líneas 4064–4066; §23.3, líneas 4058 y 4066).
- `fichero_cedulario` — comparte los nueve cajones, madera rubia, tiradores de latón, orden por calle y etiquetas manuscritas. Regenerar juntos, este activo no es fuente de verdad del otro (`bodega_masa_hotspots.ts:39–53`; §6.1, línea 296).
- `examine_maquina` / `examine_maquina_en` y `maquina_escribir` — comparten la Olivetti Lexikon 80, funda de hule, carro cromado, cinta gastada y marca 41; la prueba añade la barra `s` torcida, que no debe aparecer como detalle ampliado en el fondo. Regenerar juntos, este activo no es fuente de verdad del otro (§6.1, línea 297; §23.3, línea 4059; `bodega_masa_hotspots.ts:62–72`).
- `bg_archivo_pasillo7` — comparte sólo el universo del Archivo Judicial y la lógica de custodia; no comparte composición ni estado espacial. Regenerar juntos para evitar confundir el pasillo 7 con el sótano, este activo no es fuente de verdad del otro (§23.1, líneas 3987 y 3990; §24.B, línea 4131).

## Conflictos abiertos

- §23.1 exige una marca `41` blanca pintada en la máquina, mientras cierra la misma descripción con “Sin personajes, sin texto legible” (§23.1, línea 3990). El guion y los catálogos llaman explícitamente a la marca lateral “41” (`bodega_masa_hotspots.ts:62–64`; `src/state/Private/EvidenceCatalogCase5EsB.ts:49–58`), pero no resuelven si debe poder leerse con nitidez en el plano general. Mantener la marca sin inventar otros textos; resolver la exigencia de legibilidad en el spec antes de usarla como criterio binario.
- La introducción fija “8 de diciembre, 9:00 AM” (`bodega_masa_intro.ts:11`), mientras el acta de inspección declara 9:02 (`bodega_masa_intro.ts:13`). No es una contradicción visual porque ninguna hora debe aparecer en el fondo; queda registrado para no pintar un reloj que el spec no pide.

## Hallazgos de auditoría 2026-09-19

> Trazas de la pasada anterior: ~~No se realizó auditoría visual: por instrucción del protocolo, esta hoja se derivó únicamente del spec y del guion; no se inspeccionó ninguna imagen.~~ — sustituido por la auditoría visual de abajo (recortes por sustantivo sobre `assets/bg_bodega_masa.webp`, 1536 × 1024).

**Veredicto: NO CUMPLE** — cumple en estilo (F5), exclusiones (AUSENTE de F1) y localización (F6); no cumple en contenido (F1), texto (F2), cifras (F3) ni contrato en pantalla (F4).

### Cumple

- Bóveda de ladrillo, vigas de hierro remachado, suelo de cemento con marcas de arrastre, foco desnudo colgando de un cable y atmósfera fría con un único punto cálido (F1, §23.1 línea 3990).
- Huacal 9 de gran formato, abierto, con la tapa recargada a un lado y legible como tapa (F1; zona del hotspot `hotspot_huacal`).
- Nueve cajones en disposición 3 × 3 de madera rubia con tiradores de latón, en la zona que el hotspot `hotspot_cajones` señala (F1/F3, conteo 9 correcto).
- Compartimento lateral con ejemplares encuadernados en piel con hierros dorados; sin títulos legibles inventados (F1/F2).
- Máquina de escribir negra al fondo del huacal, envuelta a medias en una funda de hule, en la zona del hotspot `hotspot_maquina`; no parece retirada ni en uso (F1/F4, `bodega_masa_hotspots.ts:62,65–66`).
- Escalera de servicio de hierro y reja de montacargas al fondo a la izquierda (F1, §24.B).
- Tiras de papel sellado encabalgadas como escamas, amarilleando hacia abajo, como acumulación sin volverse placa legible (F1/F3, `bodega_masa_hotspots.ts:18–30`).
- Exclusiones: sin personajes (Chómpiras, Berrondo, Sargento, Chapulín) y sin elementos del pasillo 7 (silueta, tomo caído, estante) (F1 AUSENTE).
- Sin horas ni fechas impresas, sin rótulos con 11,407/210/250, sin texto inglés ni marcas de agua (F2/F3/F6).
- Estilo §23.0: ilustración 2D HD, cel-shading con terminador duro, contorno carbón, paleta fría con tungsteno; dimensiones 1536 × 1024 (F5).
- Localización: un solo archivo para ES/EN; no existe `bg_bodega_masa_en.webp` y los tres módulos EN apuntan al mismo `assets/bg_bodega_masa.webp` (`bodega_masa.ts:13`, `bodega_masa_en.ts:13`, `bodega_masa_hotspots_en.ts:9`, `bodega_masa_intro_en.ts:8`) (F6).

### Defectos confirmados

- `CONTRADICE` / **MAYOR** / F1+F3+F4 — Apilado contrario al spec: tres columnas de tres huacales (12-8-6, 11-7-5, 10-7-4) y un solo huacal visible en el suelo (el 3); el spec y la narración en pantalla piden «doce apilados de dos en dos y otros dos sobre el suelo», y el total contable visible es 13 (10 numerados + el 9 + 1–2 ocultos tras la tapa), no verificable como catorce. Rompe la narración que corre sobre este fondo: `bodega_masa_intro.ts:12` (English `bodega_masa_intro_en.ts:12`).
- `CONTRADICE` / **MENOR** / F2+F3 — Numeración de plantilla inconsistente: dos huacales comparten el número 7 y la serie visible (3–12) no cubre catorce unidades (sin 1, 2, 13, 14). Contradice «numeración de plantilla negra» como identificación de un inventario (`bodega_masa_intro.ts:12`).
- `AUSENTE` / **MEDIO** / F1+F2+F4 — Los nueve cajones llevan portaetiquetas de latón con la tarjeta en blanco: no hay ninguna etiqueta manuscrita pintada. Rompe la narración del hotspot: `bodega_masa_hotspots.ts:39` (English `bodega_masa_hotspots_en.ts:39`).
- `AUSENTE` / **MEDIO** / F2 — La marca de plantilla blanca `41` no aparece en ninguna parte de la máquina visible. La hoja deja la legibilidad en conflicto abierto, pero la marca misma debe existir (`bodega_masa_hotspots.ts:63`; `src/state/Private/EvidenceCatalogCase5EsB.ts:49–58`).
- `CONTRADICE` / **MEDIO** / F1+F4 — El carro de la máquina no se lee cromado: bajo la funda todo es negro sobre negro, sin brillo metálico distinguible. Rompe la narración del hotspot: `bodega_masa_hotspots.ts:62` (English `bodega_masa_hotspots_en.ts:62`).
- `MALFORMADO` / **MEDIO** / F1 — El objeto colgado en el muro derecho se lee como un gancho en S de metal con mango central, no como una pata de cabra (barra con uña plana y filo); además cuelga del muro de ladrillo, no de un clavo en una viga. Referenciado por el diálogo: `bodega_masa_hotspots.ts:79` (English `bodega_masa_hotspots_en.ts`).
- `CONTRADICE` / **MEDIO** / F1+F3 — El borde frontal del huacal 9 muestra sólo dos cierres de palanca, no los cuatro exigidos (`bodega_masa_intro.ts:12` no los cuenta; el conteo viene de §23.1 línea 3990).

### Correcciones de auditoría

- Ningún ✓ previo fue retirado: esta es la primera pasada visual sobre la imagen (la sección previa de esta fecha registraba sólo la derivación del spec, ver traza arriba).
- Observación sin cambio de veredicto: los nueve cajones se pintan como mueble fichero cuya cara superior asoma por la boca del huacal 9; la lectura «cajones dentro del huacal» se sostiene a nivel de silueta y el hotspot cae sobre esa zona, por lo que no se tipifica como defecto.

### Recomendación (regeneración)

1. Re-apilar la masa de huacales según el spec: seis pilas de dos y dos huacales apoyados en el suelo, catorce en total con numeración de plantilla única (serie 1–14, el 9 aparte y de gran formato).
2. Pintar una etiqueta manuscrita (trazo tipo rúbrica ilegible, sin contenido legible) en cada una de las nueve caras de los cajones.
3. Pintar la marca blanca `41` a plantilla en el costado visible de la máquina y separar el carro del fondo: brillo cromado claro sobre la máquina negra, funda de hule cubriendo sólo la mitad.
4. Sustituir el gancho en S del muro por una pata de cabra reconocible (barra de hierro con uña plana) colgando de un clavo en una viga.
5. Añadir los cuatro cierres de palanca reutilizables en el borde del huacal 9 (al menos tres legibles con la perspectiva).
6. Regenerar junto con el conjunto de consistencia: `plate_huacal_sellos`, `examine_huacal9`/`_en`, `fichero_cedulario`, `examine_maquina`/`_en` y `maquina_escribir` (el huacal 9, las tiras, los cajones y la máquina comparten diseño entre esos activos).

## Hallazgos de auditoría 2026-09-19 (regeneración Lote C)

RAW auditado: `tools/raw/case5/bg_bodega_masa.jpg` (1280 × 720, 16:9; 3 intentos). Recortes por sustantivo: pilas, huacal 9, cajones, máquina, pata/viga, escalera.

**Veredicto: CUMPLE** en el eje mayor de contenido (F1/F4 apilado) y en estilo/exclusiones (F5/F6). Residual MEDIO/MENOR no rompe la narración de los catorce huacales.

### Cumple

- Seis pilas de exactamente dos huacales + dos en el suelo (14 y 9): catorce unidades, nunca tres de alto. Rompe el MAYOR previo (`bodega_masa_intro.ts:12`).
- Huacal 9 aparte, de gran formato, abierto, tapa recargada; nueve cajones 3×3 con tiradores de latón y etiquetas manuscritas; ejemplares de lujo en el compartimento lateral (F1/F4).
- Máquina negra al fondo del huacal 9, carro cromado distinguible, marca blanca `41` en el costado (F1/F2; `bodega_masa_hotspots.ts:62-64`).
- Tiras engomadas encabalgadas como escamas amarillentas en las tapas cerradas; sin lacre ni candelero (F1).
- Escalera de hierro y reja al fondo izquierda; bóveda de ladrillo, vigas remachadas, suelo de cemento, foco pelón (F1).
- Herramienta colgada de una viga de hierro, no de un gancho en S en el muro (ubicación F1).
- Sin personajes, sin pasillo 7, sin texto inglés, sin UI EXAMINE (F1 AUSENTE / F6). Cel-shading Ace Attorney, no foto (F5).

### Defectos confirmados

- `CONTRADICE` / **MENOR** / F2+F3 — Serie de plantilla no única: 11 duplicado en dos pilas de la derecha; asoma un 9 en una pila trasera; faltan 4, 6, 8 y 13 visibles. El conteo de catorce se sostiene; la identificación 1–14 no.
- `CONTRADICE` / **MEDIO** / F1 — El borde del huacal 9 muestra tres cierres de palanca, no cuatro.
- `MALFORMADO` / **MEDIO** / F1 — El objeto en la viga se nombra como pico/martillo de dos cabezas, no como pata de cabra de uña plana (`bodega_masa_hotspots.ts:79`).
- `AUSENTE` / **MEDIO** / F1 — La funda de hule a medias sobre la Olivetti no aparece; la máquina está descubierta.

### Correcciones de auditoría

- Los MAYOR de la pasada previa sobre `assets/bg_bodega_masa.webp` (pilas de tres, 7 duplicado como síntoma del apilado, `41` ausente, carro no cromado, gancho en S) quedan ~~superados por esta RAW~~; la traza anterior se conserva arriba.
- No se retira el MENOR de numeración: cambia de forma (11 duplicado / huecos 4-6-8-13) pero no desaparece.

### Recomendación (si hay un cuarto intento)

1. Estampar 1–14 una sola vez (sustituir el 11 derecho por 13 y el 9 de pila por 4 o 6 u 8).
2. Cuarto cierre de palanca en el borde del 9.
3. Pata de cabra de barra y uña, no pico, en el mismo clavo de viga.
4. Funda de hule cubriendo la mitad izquierda de la máquina, con `41` y carro cromado a la vista.

## Hallazgos de auditoría 2026-09-20

RAW auditado: `tools/raw/case5/bg_bodega_masa.jpg` (1536 × 1024); WebP final: `assets/bg_bodega_masa.webp` (1536 × 1024). Se inspeccionaron recortes separados de inventario, huacal 9, cajones/fichas, máquina, cierres, pata de cabra y accesos; el overlay de hotspots se comprobó sobre el recorte cover 960 × 540.

**Veredicto: CUMPLE** en contenido, contrato de pantalla, exclusiones, estilo y localización (F1–F6).

### Cumple

- Catorce huacales identificables: seis pilas de dos más los huacales 9 y 14 en el suelo; numeración única visible del 1 al 14; tapas cerradas con tiras superpuestas (F1/F2/F3; `bodega_masa_intro.ts:11-12`).
- Huacal 9 grande, abierto, con tapa recargada y cuatro cierres de palanca distinguibles (F1; §23.1 línea 3990).
- Nueve cajones 3×3 de madera rubia, tiradores de latón y etiquetas manuscritas, con muchas fichas físicas visibles detrás y entre los cajones; la lectura de “fichero” deja de contradecir la narración (F1/F4; `bodega_masa_hotspots.ts:35-53`).
- Compartimento lateral de libros de lujo encuadernados en piel; Olivetti negra al fondo, funda de hule parcial, carro cromado y marca blanca `41` (F1/F2/F4; `bodega_masa_hotspots.ts:57-72`).
- Pata de cabra reconocible colgada de un clavo en la viga; escalera de servicio y reja de montacargas al fondo izquierdo (F1; `bodega_masa_hotspots.ts:79`; §24.B).
- Sin personajes, pasillo 7, UI, horas, fechas o rótulos explicativos; sin texto inglés ni tonos rosa/magenta en primer plano (F2/F3/F5/F6).
- Los tres hotspots ahora caen sobre su objeto pintado en el cover 960×540: tapa `65,54,24,44`, cajones `27,54,29,32`, máquina `45,45,23,24`; ES/EN son idénticos y el test de geometría pasa (F4/F6; `bodega_masa_hotspots.ts`, `_en.ts`, `tests/case/Case5Hotspots.test.ts`).

### Defectos confirmados

- Ninguno en esta pasada.

### Correcciones de auditoría

- Los defectos residuales de la regeneración Lote C —numeración incompleta, tres cierres, herramienta ambigua y ausencia de funda— quedan ~~superados por esta regeneración~~; la traza anterior se conserva arriba.
- Se añade como corrección específica del reporte del usuario la masa de fichas visibles detrás de los cajones; no se clasifica como defecto del spec anterior porque la hoja sólo exigía nueve cajones, pero ahora el contrato en pantalla queda legible sin vacío visual.

### Recomendación

- Mantener este fondo como fuente de producción y no cambiar su recorte sin volver a ejecutar el overlay y el test bilingüe de geometría.
