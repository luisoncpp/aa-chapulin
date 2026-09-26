# bg_gallery_right — hoja de hechos

Clase: `bg`. Espec: [[docs/specs/artistic-direction.md]] §3. Guion: todavía sin línea que lo estampe. Runtime previsto: `assets/bg_gallery_right.webp`, 1376×768. Encargo del usuario: 2026-09-24.

## Mapa semántico y alcance

Plano de la grada de la **fiscalía** (muro derecho visto desde el pozo), tomado desde arriba del pasillo, del lado de la defensa, girando hacia la esquina de la fiscalía con el juez. Se usa cuando el narrador habla del público. Encuadra sólo lo que está por encima de las cabezas de los abogados, así que no tiene que mostrar a nadie que esté en juicio.

Guía de composición: `tools/gallery_guide/out/right_guide.png` (plana, sin texto, para entregarla al modelo) y `right_annotated.png` (con rótulos). Se regenera con `python -m tools.gallery_guide --preset right`. Las medidas vienen de `tools/gallery_guide/scale.py`, que las deriva de `STAGE_FRAMES` (`src/engine/Private/StageLayout.ts`).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Grada lateral derecha elevada: tres filas escalonadas sobre el muro de la fiscalía, con parapeto macizo de caoba y canto de latón. El parapeto cruza el tercio inferior derecho y sube en diagonal hacia la esquina del fondo (guía: de `x≈1376, y≈570` a `x≈784, y≈533`).
- [ ] `PINTAR` — Público sentado en las tres filas. **Escala:** cada busto sentado mide entre 80 y 125 px de coronilla a cadera, según la fila. Por encima del parapeto de la primera fila asoman cabeza y hombros; por encima de las filas de atrás, algo más de torso (`scale.py`: parapeto 0.95 m, fila +0.45 m, cabeza sentada 1.30 m).
- [ ] `PINTAR` — Si alguien se pone de pie en la grada, el parapeto le llega a la cadera: se ve de la cabeza a la cintura. Una baranda que le llegue a la rodilla incumple esta escala.
- [ ] `PINTAR` — Juez en la esquina inferior izquierda, cortado por el borde: cabeza hacia `x≈262, y≈584`, busto de unos 110 px, **del mismo tamaño que el público de la primera fila**. El canto de oro del estrado le tapa el vientre, no el pecho (`JUDGE_LIP`).
- [ ] `PINTAR` — Silla del juez con respaldo **tan ancho como sus hombros**; el copete queda a la altura de la cabeza, sin sobresalir por encima. Detrás, la balanza circular, de un ancho de silla aproximadamente (`bg_judge.webp`; `JUDGE_CHAIR_CREST`).
- [ ] `PINTAR` — El estrado mide unos siete anchos de hombro del juez. Aquí sólo se ve su extremo derecho; sale del cuadro por la izquierda.
- [ ] `PINTAR` — Muro de la galería por encima del público: lambrín claro con apliques de latón y columnas como en `bg_gallery.webp`. Ocupa la mitad superior; no dejarlo liso.
- [ ] `AUSENTE` — Mesa de la defensa, Don Ramón, el Chapulín, fiscalía, testigo y podio. La guía coloca sus cabezas bajo el borde inferior; `python -m tools.gallery_guide` avisa si un encuadre las deja entrar.
- [ ] `AUSENTE` — Cuerdas, postes de cordón y rótulos.

### F2 Texto en imagen

- [ ] `AUSENTE` — Texto legible, rótulos y marcas de agua. Lámina compartida ES/EN.

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — Sin fecha, hora ni número de caso.

### F4 Contrato en pantalla

- [ ] `NO CONTRADECIR` — El nombre no contiene `bg_judge`, `bg_defense`, `bg_courtroom` ni `bg_witness`; `inferFurniture` devuelve `none` (`docs/live/glossary.md`, *Galería*).
- [ ] `PINTAR` — Plano de narrador. Si una línea con este fondo tiene hablante, lleva `furniture: none` y ningún sprite, porque el juez ya está pintado.

### F5 Estilo

- [ ] Misma pintura que los fondos aprobados: cel shading plano, contorno carbón, dos tonos por panel. Paleta: caoba `#3D2314`, latón `#C5A059`, piedra `#7F8C8D`, ámbar `#F39C12`, terciopelo `#581825` (`docs/specs/artistic-direction.md:97`).
- [ ] Público pintado como extras: siluetas de época sin rasgos de un personaje del reparto, para que no se lea como un cameo.
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela y magenta.

### F6 Localización

- [ ] `NO CONTRADECIR` — Una sola imagen para ES y EN. Sin variante `_en`.

## Consistencia (regenerar juntos)

- `bg_gallery_left` — espejo de esta lámina con la grada de la defensa. Mismo parapeto, filas y juez.
- `bg_gallery` — comparte gradas, parapeto, columnas y apliques. Ninguno de los dos es fuente de verdad del otro.
- `bg_judge`, `court_judge_bench`, `judge_neutral` — fijan la silla, la balanza, el canto dorado y la identidad del juez.
- `bg_courtroom` — el muro bajo la grada es el mismo que se ve detrás de la fiscalía: cortinas burdeos y escudo de la balanza.

## Verificación de escala

Con la imagen candidata ya generada sobre la guía:

    python -m tools.gallery_guide --preset right --overlay <candidata>

Escribe `tools/gallery_guide/out/right_overlay_<candidata>.png` con las siluetas y los muebles en contorno magenta. Si una silueta sale por encima del parapeto más de lo que muestra la guía, o la silla del juez es más ancha que su contorno, falla F1.
