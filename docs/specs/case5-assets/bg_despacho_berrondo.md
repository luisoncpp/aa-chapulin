# bg_despacho_berrondo — hoja de hechos

Clase: `bg`. Espec: §23.0, §23.1 y §12.3. Guion directo: `src/case/case5/Private/despacho_berrondo.ts:13-28`, `despacho_berrondo_hotspots.ts:10-42` y `despacho_berrondo_talks.ts:9-132`; variantes EN equivalentes en `despacho_berrondo_en.ts`, `despacho_berrondo_hotspots_en.ts` y `despacho_berrondo_talks_en.ts`. Variantes ES/EN: el mismo fondo, sin texto de interfaz ni localización gráfica declarada.

## Mapa semántico y alcance

Despacho del Lic. Fulgencio Berrondo, Donceles 14, segundo piso, 7 de diciembre de 1982 a las 11:30 AM. Es la sala de investigación del Día 2: Berrondo está presente mediante sus sprites, pero el fondo debe exportarse sin personajes. La escena presenta a un abogado antiguo, cortés y obsesivamente ordenado; el jugador ve el despacho antes de examinar la vitrina, el retrato y el inventario. La misma cámara vuelve después de cada lámina didáctica (`plate_masa_concursal` y `plate_anatomia_ficha`) mediante `bg_despacho_berrondo`.

Alias seguidos: `despacho de Berrondo`, `despacho del Lic. Fulgencio Berrondo`, `vitrina de la sindicatura`, `retrato de la editorial`, `legajos`, `credencial`, `escritorio`, `libros encuadernados en piel`.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Despacho de abogado antiguo, de cuatro paredes, con librerías de caoba provistas de vidrio corredizo desde el piso hasta el techo (§23.1).
- [ ] `PINTAR` — Volúmenes encuadernados en piel granate, con tejuelos dorados perfectamente alineados y todos a la misma distancia del canto del estante (§23.1). La ordenación por tomo y año también es una identidad narrada del cuarto (§12.3; `despacho_berrondo.ts:18-19`).
- [ ] `PINTAR` — Escritorio de caoba al centro, con superficie de cuero verde y despejado salvo por un secante, un tintero y una taza de café en su platito (§23.1; `despacho_berrondo.ts:23`). No añadir papeles, legajos ni útiles no declarados en la superficie inicial.
- [ ] `PINTAR` — Vitrina de caoba detrás del escritorio, con tres legajos exhibidos como trofeos y una credencial enmarcada (§23.1; `despacho_berrondo_hotspots.ts:14`). Debe permitir que el guion saque de ella un legajo delgado para ponerlo abierto sobre el escritorio (`despacho_berrondo_talks.ts:86-91`).
- [ ] `PINTAR` — Fotografía de grupo enmarcada, a la izquierda, en sepia: cincuenta hombres de traje frente a un edificio y una banda de tela cruzada (§23.1; `despacho_berrondo_hotspots.ts:30`). El diálogo identifica la foto como la empresa y distingue los cincuenta retratados de ciento diez distribuidores (`despacho_berrondo_hotspots.ts:31-38`).
- [ ] `PINTAR` — Alfombra persa desgastada en el centro exacto de la habitación (§23.1).
- [ ] `PINTAR` — Ventana con visillos y luz de mediodía filtrada (§23.1).
- [ ] `AUSENTE` — Personajes, poses, cuerpos o sprites horneados en el fondo (§23.1; `despacho_berrondo.ts:16-18`). Berrondo, Chapulín y sus poses se renderizan aparte.
- [ ] `AUSENTE` — Papeles fuera de sitio, desorden, objetos de oficina adicionales, decoración moderna o muebles que rompan la cámara ordenada (§23.1).

### F2 Texto en imagen

- [ ] `AUSENTE` — Texto legible, rótulos explicativos, títulos, marcas de agua o texto en inglés dentro del fondo (§23.1; §23.0).
- [ ] `NO CONTRADECIR` — La banda de la fotografía es una marca diegética mencionada por el hotspot como `EL SABER UNIVERSAL · 1969` (`despacho_berrondo_hotspots.ts:30`; variante EN `despacho_berrondo_hotspots_en.ts:31`), pero su legibilidad queda abierta en “Conflictos abiertos”.
- [ ] `NO CONTRADECIR` — La credencial enmarcada y los tejuelos dorados pueden existir como formas/materiales; no imprimir la credencial, números de quiebra ni títulos legibles en el fondo. El texto detallado de la credencial pertenece a `examine_credencial` (§12.3; `docs/specs/case-5-el-tomo-trece.md:1518`).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La escena representa el 7 de diciembre, 11:30 AM, Donceles 14, segundo piso; son datos de situación, no texto para imprimir en la imagen (§12.3; `despacho_berrondo.ts:18`; variante EN `despacho_berrondo_en.ts:18`).
- [ ] `NO CONTRADECIR` — La foto alude a 50 hombres retratados, 110 distribuidores y el año 1969; los números se narran en la interacción y no deben convertirse en rótulos visibles si se mantiene la prohibición de §23.1 (`despacho_berrondo_hotspots.ts:30-38`).
- [ ] `NO CONTRADECIR` — La vitrina debe tener exactamente tres legajos y una credencial; no agregar legajos para representar los 47 elementos del inventario. Las 47 partidas, la partida 12 y la 41 aparecen sólo cuando el legajo se abre en pantalla (`despacho_berrondo_talks.ts:88-97`; spec §12.3).

### F4 Contrato en pantalla

- [ ] `PINTAR` — La primera línea estampa `bg_despacho_berrondo`, `furniture: none` y música `suspense`; el fondo queda como cámara de la escena (`despacho_berrondo.ts:13-18`; `despacho_berrondo_en.ts:13-18`).
- [ ] `NO CONTRADECIR` — El jugador debe poder localizar la vitrina en el área del hotspot `x: 0, y: 28, w: 28, h: 42` y el retrato en `x: 0, y: 4, w: 16, h: 28`; la composición izquierda debe dejar ambos puntos de interés identificables (`despacho_berrondo_hotspots.ts:10-12,26-28`; EN conserva la geometría).
- [ ] `NO CONTRADECIR` — Tras L3, la cámara vuelve al despacho cuando Chapulín pregunta “¿En el Archivo?”; el escritorio y la vitrina siguen siendo la misma sala (`despacho_berrondo_talks.ts:19-24`; `despacho_berrondo_talks_en.ts:24-31`).
- [ ] `NO CONTRADECIR` — Tras L4, la cámara vuelve al mismo despacho cuando se pregunta por el estado de la puerta (`despacho_berrondo_talks.ts:46-51`; variante EN `despacho_berrondo_talks_en.ts:46-51`).
- [ ] `NO CONTRADECIR` — La vitrina debe soportar visualmente que Berrondo entregue una copia certificada y después extraiga un legajo delgado; no debe estar vacía, tapada por el escritorio ni sustituida por un archivero (`despacho_berrondo_hotspots.ts:14-23`; `despacho_berrondo_talks.ts:88-91`).
- [ ] `NO CONTRADECIR` — La luz es de mediodía filtrada, aunque la pista de investigación sea `suspense`; no convertir el lugar en despacho nocturno, celda o fiscalía (§23.1; §12.3).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA/Nintendo DS) en alta definición; ; contorno carbón `#1A1A1A` nítido y continuo; colores primarios saturados; registro de papel, madera y polvo.
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto en inglés no exigido y cualquier rosa/magenta en primer plano (§23.0).
- [ ] `PINTAR` — Madera barnizada, latón envejecido, cuero, piel granate y luz filtrada como materiales cel-shaded; mantener el orden obsesivo como rasgo visual dominante (§23.0; §23.1).

### F6 Localización

- [ ] `NO CONTRADECIR` — ES y EN usan exactamente `assets/bg_despacho_berrondo.webp`; no existe variante `_en` declarada porque el fondo es una imagen de ambiente y §23.1 prohíbe texto legible (`despacho_berrondo.ts:13,18`; `despacho_berrondo_en.ts:13,18`).
- [ ] `NO CONTRADECIR` — La composición, cámara, objetos, cantidades, materiales y luz son idénticos entre idiomas. Sólo se localizan las líneas de diálogo; el texto de la banda no debe resolverse con una variante gráfica hasta cerrar el conflicto abierto (`despacho_berrondo_hotspots_en.ts:31`).

## Consistencia (regenerar juntos)

- `despacho_berrondo` / `despacho_berrondo_en` — gemelos de idioma del mismo fondo. Regenerar juntos, este activo no es fuente de verdad del otro; deben apuntar al mismo WebP y conservar composición idéntica.
- `plate_masa_concursal` — comparte la cámara de retorno y la sala del despacho cuando termina L3. Regenerar juntos sólo para comprobar que la vuelta a la vitrina/escritorio sigue siendo reconocible; la placa no es fuente de verdad del fondo.
- `plate_anatomia_ficha` — comparte la cámara de retorno y la sala del despacho cuando termina L4. Regenerar juntos sólo para comprobar continuidad de cámara; la placa no es fuente de verdad del fondo.
- `berrondo_idle`, `berrondo_definicion`, `berrondo_sweat` — comparten la identidad del personaje que ocupa la escena (§12.3). Regenerar juntos por identidad de escala/vestuario, pero esos sprites no son fuente de verdad del fondo ni deben hornearse en él.

## Conflictos abiertos

- §23.1 exige “sin texto legible” para `bg_despacho_berrondo`, pero el hotspot del retrato describe una banda que dice exactamente `EL SABER UNIVERSAL · 1969` (`docs/specs/case-5-el-tomo-trece.md:3989`; `src/case/case5/Private/despacho_berrondo_hotspots.ts:30`; EN `despacho_berrondo_hotspots_en.ts:31`). No resolver aquí si la banda debe ser legible, sólo visible como franja, o quedar como texto narrado no verificable: esa decisión pertenece al spec.

## Hallazgos de auditoría 2026-09-19

**Veredicto: NO CUMPLE** en el eje de contenido/contrato en pantalla (F4); cumple en exclusiones (AUSENTE), texto (F2) y localización (F6). El eje de estilo (F5) presenta una desviación registrada cuya aceptación es decisión del revisor.

### Cumple

- F1 — Despacho de cuatro paredes con librerías de caoba provistas de vidrio, del piso al techo, sin desorden (recorte `left_bookcase`); el "vidrio corredizo" no es verificable ni refutable en un fotograma estático.
- F1 — Volúmenes encuadernados en piel granate con tejuelos dorados alineados a la misma altura del canto en todos los estantes (recorte `book_spines`).
- F1 — Escritorio de caoba al centro con superficie de cuero verde, tintero con pluma y taza de café en su platito; la pieza central acolchada se lee como secante/alfombrilla de escritorio; sin papeles ni útiles no declarados sobre la superficie (recorte `desk_surface`).
- F1 — Fotografía de grupo enmarcada a la izquierda, en sepia, con decenas de hombres de traje en fila y una banda de tela cruzada en diagonal (recorte `photo_group`). Matiz: la banda es una franja tricolor con escudo nacional sin rótulo; la legibilidad de «EL SABER UNIVERSAL · 1969» queda dentro del conflicto abierto y una franja sin texto no contradice F2.
- F1 — Alfombra persa centrada bajo el escritorio (recorte `rug`); matiz: el desgaste no es evidente.
- F1 — Ventana con visillos y luz de mediodía filtrada, árboles verdes al exterior (recorte `window`).
- AUSENTE — Sin personajes, poses ni sprites horneados en todo el fondo (pasada completa).
- AUSENTE — Sin papeles fuera de sitio ni desorden; la cámara ordenada se mantiene.
- F2 — Sin texto legible, sin rótulos, sin inglés ni marcas de agua: la credencial enmarcada lleva pseudotexto ilegible y la banda de la foto no lleva rótulo (recortes `credencial_zoom`, `banda_zoom`).
- F4 — La vitrina está detrás del escritorio, no vacía, no tapada por el escritorio y no sustituida por archivero; soporta la extracción del legajo (`despacho_berrondo_talks.ts:88`).
- F4 — El retrato es localizable dentro del área del hotspot `x:0, y:4, w:16, h:28` (`despacho_berrondo_hotspots.ts:28`).
- F6 — ES y EN comparten `assets/bg_despacho_berrondo.webp`; no existe variante `_en` en `assets/`; sin texto que "resolver" por idioma (`despacho_berrondo.ts:13`; `despacho_berrondo_en.ts:13`).

### Defectos confirmados

- **CONTRADICE / MAYOR — F4 (hotspot vitrina):** la vitrina con los tres legajos y la credencial está centrada en la composición (x ≈ 40–65 % de la pantalla); el rect del hotspot `hotspot_vitrina` `x:0, y:28, w:28, h:42` cae sobre la librería de la izquierda y los aparadores bajos, no sobre la vitrina pintada. El jugador no puede localizar la vitrina en el área exigida. Rompe `src/case/case5/Private/despacho_berrondo_hotspots.ts:12` (y su gemela `despacho_berrondo_hotspots_en.ts:13`).
- **CONTRADICE / MEDIO — F1 + F3 (tres legajos):** de los tres objetos exhibidos, el tercero es una bolsa de tela atada con moño (no un legajo) y los dos primeros se leen como pilas de papel suelto con moños de regalo, no como legajos encuadernados; la prueba de nombrar no devuelve «legajo». La cuenta "exactamente tres legajos y una credencial" de F3 queda incompleta. Rompe `src/case/case5/Private/despacho_berrondo_hotspots.ts:14` y `despacho_berrondo_talks.ts:88` (extraer «un legajo delgado»).
- **DRIFT / MEDIO — F5 (estilo §23.0):** sombreado pictórico con degradados suaves (charcos de luz en el piso, gradientes en muros y madera) sin terminador duro de dos tonos por superficie ni contorno carbón `#1A1A1A` continuo; paleta general oscura y desaturada frente a «colores primarios saturados». Registrado contra el literal de §23.0; la aceptación del estilo es decisión del revisor (Paso 4).
- **CONTRADICE / MENOR — F1 (fondo de la foto):** el fondo de la fotografía de grupo se lee como muro interior con pilares, no claramente «frente a un edificio» (§23.1; `despacho_berrondo_hotspots.ts:30`). Lectura parcial.
- **CONTRADICE / MENOR — F1 (objeto no declarado):** samovar/urna de latón sobre un aparador lateral derecho que no está declarado en la hoja ni en §23.1. No rompe la cámara ordenada (podría defenderse como apoyo al café de Coatepec de `despacho_berrondo.ts:23`); el revisor decide si se retira.

### Correcciones de auditoría

- ~~«No se inspeccionó ninguna imagen, por lo que no se registran defectos visuales confirmados» (estado pendiente de la pasada anterior)~~ — [x] REEMPLAZADO POR REVISIÓN (2026-09-19): se inspeccionó `assets/bg_despacho_berrondo.webp` (1536×1024) con recortes ampliados por sustantivo; esta sección sustituye el estado pendiente.

### Recomendación (para el prompt de regeneración)

1. Reubicar la vitrina con los tres legajos y la credencial enmarcada en la banda izquierda de la composición (dentro de x 0–28 %, y 28–70 %), o elevar a la revisión del spec un cambio del rect del hotspot; hoy imagen y hotspot no coinciden.
2. Sustituir los tres objetos exhibidos por tres legajos encuadernados (carpetas de expediente con lomo), sin moños de regalo y sin bolsa de tela; mantener exactamente tres y conservar la credencial enmarcada.
3. Ajustar el render a §23.0: cel-shading plano con terminador duro de dos tonos, contorno carbón continuo y paleta más saturada; evitar los degradados suaves de luz.
4. En la fotografía de grupo, hacer legible el fondo como fachada de edificio detrás de los retratados.
5. Retirar el samovar del aparador derecho o declararlo en la hoja si el revisor lo acepta.
