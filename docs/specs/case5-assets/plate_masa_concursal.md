# plate_masa_concursal — hoja de hechos

Clase: `plate`. Espec: §23.0, §23.4, §22.2 y L3 (§12.3). Guion directo: `docs/specs/case-5-el-tomo-trece.md:1536-1555`; `src/case/case5/Private/despacho_berrondo_talks.ts:17-30`; variante EN `src/case/case5/Private/despacho_berrondo_talks_en.ts:17-30`. Activo compartido por ES/EN: ambos guiones estampan `assets/plate_masa_concursal.webp`; no existe `plate_masa_concursal_en.webp`.

## Mapa semántico y alcance

- Diagrama didáctico de una **empresa quebrada** representada como un edificio que se desploma.
- Los bienes que deja la empresa caen dentro de **un huacal sellado**.
- Una **mano con una llave** queda sobre el huacal: identifica la custodia y la posibilidad reglada de abrir el depósito.
- Una **fila de acreedores** espera alrededor del huacal: representa la concurrencia de acreedores sobre lo que queda.
- Es una lámina explicativa, no una fotografía pericial ni una vista literal del Huacal 9. El contrato visual sólo exige el esquema conceptual de L3; el detalle concreto del inventario, las catorce unidades y las tiras fechadas se explican o se prueban en otras vistas.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Una empresa dibujada como edificio que se desploma (§23.4; §23.1, tabla de L3).
- [ ] `PINTAR` — Los bienes de la empresa caen debajo del edificio dentro de un huacal sellado (§23.4; §23.1, tabla de L3).
- [ ] `PINTAR` — Una mano sostiene o coloca una llave sobre el huacal, sin convertirla en una escena de robo (§23.4; §23.1, tabla de L3).
- [ ] `PINTAR` — Una fila de acreedores espera alrededor del huacal, leyendo la concurrencia sobre los bienes restantes (§23.4; §22.2; §23.1, tabla de L3).
- [ ] `NO CONTRADECIR` — La imagen debe poder representar bienes de una sociedad quebrada inventariados, sellados y depositados; no debe mostrar una adjudicación individual ya resuelta como estado único del conjunto (§12.3, L3; `despacho_berrondo_talks.ts:23-24`).
- [ ] `NO CONTRADECIR` — El huacal es un símbolo del depósito judicial; la lámina no tiene que mostrar literalmente los nueve cajones, la máquina 41, los ejemplares de lujo ni las catorce cajas de la bodega (`docs/specs/case-5-el-tomo-trece.md:1531-1555`; §23.1 `bg_bodega_masa`; I54).

### F2 Texto en la imagen

- [ ] `AUSENTE` — No incluir palabras, etiquetas, cifras, nombres, rótulos ni texto legible dentro de la lámina. §23.4 establece que las láminas explicativas se leen con la narración y sólo admite texto cuando una fila lo indica; la fila de `plate_masa_concursal` no lo indica (§23.4).
- [ ] `AUSENTE` — No imprimir «masa concursal», «insolvency», nombres de acreedores, «1971», «114/1971» ni el número del huacal. El término y la explicación se entregan en diálogo/narración (`despacho_berrondo_talks.ts:17-30`; variante EN equivalente).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La lámina no debe pintar fechas ni horas. «1971», la quiebra 114/1971, las catorce huacales y la bajada de Berrondo dos veces al mes pertenecen al diálogo y al Libro de hechos, no al dibujo (§24; `despacho_berrondo_talks.ts:27-28`).
- [ ] `NO CONTRADECIR` — No presentar el huacal simbólico como prueba de que contiene exactamente las cuarenta y siete partidas del inventario. Las cuarenta y siete partidas pertenecen al inventario de la masa concursal, no al contenido físico del huacal (I54; catálogo `inventario_1971`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — La lámina aparece después del chiste de palabra difícil cuando Berrondo define la masa concursal; debe ser legible como apoyo visual de una explicación, no como evidencia que el jugador tenga que examinar (`docs/specs/case-5-el-tomo-trece.md:1536-1555`; `despacho_berrondo_talks.ts:17-23`).
- [ ] `PINTAR` — Mientras permanece visible, la narración dice que todo lo que deja una sociedad quebrada se inventaría, se sella y se deposita; la composición debe sostener esas tres relaciones visuales (guion ES: `despacho_berrondo_talks.ts:23`; guion EN: `despacho_berrondo_talks_en.ts:23`).
- [ ] `NO CONTRADECIR` — La narración distingue un bien aún no adjudicado, que permanece en administración, de uno rematado que puede seguir depositado bajo las condiciones del remate; no dibujar todos los bienes como ya vendidos o como propiedad libre del síndico (`despacho_berrondo_talks.ts:24`; variante EN equivalente).
- [ ] `PINTAR` — La mano con llave debe apoyar la afirmación de que el síndico responde del depósito, puede abrir el huacal y responde de cada apertura con su firma; no debe parecer una mano anónima forzando la caja (`despacho_berrondo_talks.ts:25`; variante EN equivalente).
- [ ] `NO CONTRADECIR` — La lámina explica por qué los depósitos están en el Archivo Judicial, pero no debe dibujar el despacho de Berrondo, los catorce huacales reales ni la ruta al sótano. Al terminar, la cámara vuelve a `bg_despacho_berrondo` y el diálogo aporta «sótano» y «catorce huacales» (`despacho_berrondo_talks.ts:26-28`; `despacho_berrondo.ts:8-10`).
- [ ] `NO CONTRADECIR` — La pose, el escritorio y el despacho pertenecen a sus propios activos: el bloque de la placa usa `furniture: 'none'`, y la placa no debe hornear personajes, muebles o el fondo del despacho (`despacho_berrondo_talks.ts:23-26`; §23.2.A / §23.4).

### F5 Estilo

- [ ] `PINTAR` — La regeneración debe incluir completo el contrato obligatorio de §23.0: ilustración 2D estilo *Capcom Ace Attorney* GBA/Nintendo DS en alta definición; cel-shading de colores planos con terminador duro y dos tonos por superficie; contorno carbón `#1A1A1A`; anatomía/caricatura expresiva cuando haya personas; tema de televisión mexicana de los setenta y registro de papel, madera, polvo, archivo judicial, madera barnizada, latón envejecido y luz de tungsteno.
- [ ] `AUSENTE` — Prohibidos fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto inglés salvo variantes exigidas, y cualquier tono rosa o magenta en primer plano (§23.0; el fondo crema de §23.4 no es magenta de primer plano).
- [ ] `PINTAR` — Usar el medio de lámina explicativa: fondo crema de papel y trazo plano de manual escolar mexicano de los setenta, distinto del tratamiento de fotografía pericial (§23.4).

### F6 Localización

- [ ] `NO CONTRADECIR` — Mantener un único `plate_masa_concursal.webp` para ES y EN. §23.4 dice que las láminas explicativas no duplican idioma porque el texto lo dice el narrador; ambos guiones referencian el mismo archivo (`despacho_berrondo_talks.ts:23-26`; `despacho_berrondo_talks_en.ts:23-26`).
- [ ] `AUSENTE` — No resolver en la imagen la sustitución del chiste ES «masa concur... qué?» por el juego EN «insol... what?»; la adaptación de la palabra difícil vive en el diálogo y la ilustración permanece sin texto (§22.2; §23.4; guiones ES/EN).

## Consistencia (regenerar juntos)

- `plate_anatomia_ficha` — comparte la cámara didáctica de retorno del despacho y el mismo fondo crema/trazo de manual de §23.4. Regenerar juntos para conservar lenguaje gráfico, escala y ausencia de texto; este activo no es fuente de verdad del otro.
- `bg_despacho_berrondo` — comparte la transición de entrada y salida de la placa y la identidad del despacho de Berrondo. Regenerar juntos para comprobar que la vuelta al escritorio sea reconocible; este activo no es fuente de verdad de la placa.
- `plate_huacal_sellos` — comparte la identidad conceptual del huacal sellado y la lectura de sello/apertura del depósito. Regenerar juntos para que la llave, la tapa y las tiras no contradigan el mecanismo; este activo no es fuente de verdad del otro.
- `bg_bodega_masa` — comparte el contexto real del depósito de bienes y los huacales de la masa concursal. Regenerar juntos para mantener el tratamiento de madera y papel; el fondo no es fuente de verdad del diagrama.
- `examine_huacal9` — comparte la idea de un huacal judicial sellado y sus tiras de papel; el diagrama es genérico y no debe heredar el número, la fecha ni la composición fotográfica del examen. Regenerar juntos, este activo no es fuente de verdad del otro.
- `plate_masa_concursal` / `plate_masa_concursal` en el guion EN — gemelos de idioma por reutilización del mismo WebP. Regenerar una sola pieza; el narrador cambia, la imagen no.

## Conflictos abiertos

- No se detecta conflicto de contenido para este activo entre §23.4, L3, §22.2 y los guiones ES/EN. La divergencia «masa concursal» ↔ «insolvency» es una adaptación verbal deliberada del chiste, y no afecta una imagen sin texto (§22.2; guiones ES/EN).
- La cifra de **catorce huacales** pertenece al diálogo de regreso al despacho y la cifra de **catorce huacales sellados** aparece en la dirección del fondo de bodega; ninguna fuente exige dibujar catorce unidades en esta placa. Se conserva como `NO CONTRADECIR`, no como requisito gráfico (`despacho_berrondo_talks.ts:27`; §23.1 `bg_bodega_masa`).

## Hallazgos de auditoría 2026-09-19

Veredicto: **NO CUMPLE** en los tres ejes: contenido (F1), exclusiones/texto (F2, F6) y estilo (F4, F5). La imagen entregada no es la lámina didáctica sin texto del huacal de la masa concursal: es una **carátula de episodio en tres viñetas numeradas** («EPISODIO: PAPEL, MADERA Y POLVO — UN CASO DE QUEBRA Y ACREEDORES») con rótulos y pies de texto legibles en español por toda la superficie. Se inspeccionó `assets/plate_masa_concursal.webp` (960×540, convertido a PNG con ffmpeg) con recortes ampliados por cada hecho F1 y por las zonas de exclusión (banner, borde inferior, placas).

### Cumple

- ✓ `PINTAR` F1 — Empresa dibujada como edificio que se desploma: la viñeta 1 muestra un edificio de dos pisos derrumbándose entre escombro, polvo y vigas rotas. Test de nombrado sin hoja: «un edificio destruido que se viene abajo» — coincide.
- ✓ `NO CONTRADECIR` F1 — No muestra una adjudicación individual ya resuelta como estado único; no hay remate, venta ni propiedad libre del síndico pintados.
- ✓ `NO CONTRADECIR` F1/F3 — Dibuja un solo huacal genérico; no hereda los nueve cajones, la máquina 41, los ejemplares de lujo, las catorce cajas ni el número del Huacal 9 (I54; §23.1 `bg_bodega_masa`).
- ✓ `NO CONTRADECIR` F4 — Nada se dibuja como bien rematado o propiedad libre; todo el conjunto queda bajo la lectura de custodia (aunque ver defecto 2 sobre el «sella»).
- ✓ `AUSENTE` F5 — Sin tono rosa o magenta en primer plano: la fila incluye un vestido violeta y una banda roja/blanca; son violeta y rojo, no magenta. Sin marcas de agua detectadas.

### Defectos confirmados

- **AUSENTE · MAYOR** (F1 cuarto hecho; F4 cuarto hecho) — No existe **mano con llave sobre el huacal** en ninguna zona de la imagen; la única llave es un ícono grabado en una placa decorativa del borde inferior, lejos del huacal. Rompe la dependencia del diálogo donde el síndico responde del depósito y puede abrir el huacal (`src/case/case5/Private/despacho_berrondo_talks.ts:25`).
- **CONTRADICE · MAYOR** (F1 segundo hecho; F4 segundo hecho) — El huacal está pintado **abierto**: tapa levantada y bienes (papeles, marcos, cajas) asomando por arriba, con una banda de rayas rojas/blancas tipo cinta de precaución y un sello circular al frente. Mientras la lámina está en pantalla la narración dice que todo «se inventaría, **se sella** y se deposita» (`despacho_berrondo_talks.ts:23`); un huacal abierto contradice esa relación y la identidad compartida con `plate_huacal_sellos`.
- **AUSENTE · MAYOR** (F2 ambos hechos; F6 segundo hecho) — **Texto legible en toda la lámina**: rótulo de episodio, títulos numerados de las tres viñetas («LA EMPRESA SE DERRUMBA», «LOS BIENES CAEN EN LA CAJA SELLADA», «LOS ACREEDORES ESPERAN SU TURNO»), tres pies de panel con frases completas, «ARCHIVO JUDICIAL», «JUZGADO DE LO CIVIL — SIGLO XX —» y «CLAVE DEL CASO: EXP. 73/1974». §23.4 no lo admite para esta fila y rompe el gemelo de localización: al compartirse el mismo WebP para ES y EN (`despacho_berrondo_talks_en.ts:23-26`), el jugador EN vería estos rótulos en español.
- **CONTRADICE · MAYOR** (F3 primer hecho) — La placa del borde inferior pinta las cifras **«EXP. 73/1974»** y **«SIGLO XX»**. El expediente real del caso es la quiebra 114/1971; ninguna fecha, cifra ni número de expediente puede ir en la lámina (`despacho_berrondo_talks.ts:27-28`; §24). Un número de expediente falso en pantalla contradice directamente el diálogo.
- **CONTRADICE · MEDIO** (F1 cuarto hecho) — La fila de acreedores (seis hombres y una mujer, lectura correcta de concurrencia) espera en una **viñeta numerada separada**, no **alrededor del huacal** como exige el hecho; la concurrencia sobre los bienes restantes queda débil.
- **DRIFT · MEDIO** (F4 sexto hecho) — El borde inferior **hornea muebles y atrezzo de juzgado**: escritorio de madera con mazo, placas y expedientes. La fila exige `furniture: 'none'` y prohíbe hornear muebles o el fondo del despacho en la placa.
- **DRIFT · MEDIO** (F5 tercer hecho) — Medio equivocado: carátula de episodio con icono de televisor, viñetas enmarcadas y sombreado pictórico suave con viñetas de luz, en lugar de lámina explicativa de fondo crema plano con trazo de manual escolar mexicano de los setenta; no respeta el cel-shading plano de dos tonos con terminador duro de §23.0.

### Correcciones de auditoría

- Se reemplaza la sección previa de esta fecha («No se inspeccionó ninguna imagen…», emitida bajo protocolo `asset-facts` sin inspección visual) por esta auditoría real con recortes por hecho. No se borró ninguna observación: la anterior se retira citando que esta pasada sí ejecutó el protocolo de inspección visual (un recorte por sustantivo y zonas de exclusión).

### Recomendación para la regeneración

1. `plate_masa_concursal`: regenerar como **una sola lámina didáctica** de fondo crema de papel, trazo plano de manual escolar mexicano de los setenta; sin rótulo de episodio, sin televisor, sin viñetas numeradas, sin marcos ni pies de texto.
2. Texto estrictamente **cero**: sin palabras, cifras, fechas, «SIGLO XX», «EXP.» ni números de expediente; el término «masa concursal» y la quiebra 114/1971 viven sólo en el diálogo.
3. Composición: edificio que se desploma arriba; sus bienes cayendo dentro de **un huacal de madera cerrado y sellado** (tapa puesta, tiras de papel con sello); una **fila de acreedores alrededor del huacal**, no en panel aparte.
4. **Mano con llave** sostenida o apoyada sobre la tapa del huacal, leyéndose como custodia reglada del síndico (no como robo ni mano anónima forzando la caja).
5. Sin muebles horneados: fondo plano de papel crema, sin escritorio, mazo, placas ni expedientes (`furniture: 'none'`).
6. Estilo §23.0: ilustración 2D estilo *Ace Attorney* GBA/DS en HD, cel-shading plano con terminador duro y dos tonos por superficie, contorno carbón `#1A1A1A`;  ni texturas fotográficas.
7. Gemelo EN: una sola pieza sin texto resuelve F6; el narrador cambia, la imagen no.
8. Consistencia (regenerar juntos): `plate_anatomia_ficha` (mismo fondo crema y ausencia de texto), `bg_despacho_berrondo` (reconocibilidad del regreso al escritorio), `plate_huacal_sellos` (identidad del huacal sellado: tapa, tiras, llave), `bg_bodega_masa` (tratamiento madera/papel), `examine_huacal9` (el diagrama no hereda su número, fecha ni composición fotográfica).

## Hallazgos de auditoría 2026-09-19 (regeneración Lote E)

**Veredicto: CUMPLE** en contenido (F1), texto/exclusiones (F2, F6), cifras (F3), contrato (F4) y medio de lámina (F5). RAW: `tools/raw/case5/plate_masa_concursal.jpg` (1280×720). Recortes: edificio, huacal+llave, acreedores, esquinas de exclusión.

### Cumple

- ✓ F1 — Empresa como edificio de dos pisos que se desploma (recorte `masa_building`). Prueba de nombrar: «edificio derrumbándose».
- ✓ F1 — Bienes (muebles, papeles, cajas) cayendo hacia un **huacal cerrado** con tapa puesta y tiras de papel cruzando la junta (recorte `masa_crate_key`). No está abierto.
- ✓ F1/F4 — Mano con **llave** apoyada sobre la tapa, manga de traje; se lee como custodia, no como robo (`despacho_berrondo_talks.ts:25`).
- ✓ F1 — Acreedores alrededor del huacal en la misma escena, no en viñeta aparte (recorte `masa_creditors`).
- ✓ F2/F6 — Cero texto legible: sin «EXP. 73/1974», sin títulos, sin pies, sin «SIGLO XX» (recortes `masa_tl` / esquinas crema). Una sola pieza ES/EN.
- ✓ F4 — Sin atrezzo de juzgado, sin mazo, sin escritorio, sin televisor, sin viñetas numeradas. Fondo crema de papel, trazo de manual escolar.
- ✓ F1/F3 — Un solo huacal genérico; no hereda 9 cajones, máquina 41, catorce cajas ni número de Huacal 9.

### Defectos confirmados

- **MENOR — F1 (sello del huacal):** las tiras blancas llevan un punto rojo tipo lacre diminuto sobre la junta. No hay cifras ni palabras; no contradice el huacal cerrado. Opcional en una pasada futura: tira de papel sellada sin lacre, para alinear del todo con `plate_huacal_sellos`.

### Correcciones de auditoría

- ~~AUSENTE MAYOR — mano con llave~~ — [x] RETIRADO POR REGENERACIÓN (Lote E).
- ~~CONTRADICE MAYOR — huacal abierto~~ — [x] RETIRADO: tapa cerrada.
- ~~AUSENTE MAYOR — texto de episodio / EXP. 73/1974~~ — [x] RETIRADO: lámina muda.
- ~~CONTRADICE MEDIO — acreedores en viñeta aparte~~ — [x] RETIRADO: alrededor del huacal.
- ~~DRIFT MEDIO — mazo/placas/televisor~~ — [x] RETIRADO: fondo crema.
- No se ejecutó `process_case5_assets.py`.
