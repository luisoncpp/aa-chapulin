# bg_gallery — hoja de hechos

Clase: `bg`. Espec: [[docs/specs/artistic-direction.md]] §3. Fondo panorámico: `assets/bg_gallery.webp`. Variante con abogados: `assets/bg_gallery_characters.webp`. Ambos miden 1376×768 y usan el marco de `bg_defense`, `bg_courtroom`, `bg_judge` y `bg_witness`.

## Mapa semántico y alcance

Plano de la sala desde el pozo, de frente al juez. Cuando una línea de `NARRADOR` describe la galería del tribunal o la reacción de sus espectadores durante el juicio, debe mostrar `assets/bg_gallery_characters.webp` y declarar `furniture: 'none'`. La variante incluye a Don Ramón y el Chapulín tras la mesa de defensa y a Super Sam tras la mesa de fiscalía. No es la cámara del juez, ni la de la defensa, ni la de la fiscalía.

La galería ocupa dos gradas laterales elevadas por encima de los fondos de defensa y fiscalía. Los paneles de esos fondos bajan hasta el suelo detrás de cada mesa y no dejan ver las gradas en los planos cercanos. El estrado del juez queda al fondo, con el escritorio delante de la silla. Defensa y fiscalía tienen mesas independientes frente a frente. En primer plano, el lado abierto del podio de testigos mira a la cámara; el testigo miraría al juez.

Guía de escala: `tools/gallery_guide/out/full_empty_guide.png` para generar (sin abogados ni testigo) y `full_guide.png` para verificar con el reparto completo (`python -m tools.gallery_guide --preset full_empty --preset full`). Prompt aprobado para la versión instalada: `tools/masters/bg_gallery_fresh_final_20260924.prompt.txt`. La guía coloca siluetas a la escala de los primeros planos: mesas y parapetos a la cadera de un adulto de pie, estrado del juez de unos siete anchos de hombro, silla tan ancha como sus hombros. La versión instalada conserva un desvío de escala aceptado por el usuario el 2026-09-24; se detalla en la auditoría de abajo.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Cámara en el pozo, simétrica, mirando al juez (`docs/specs/artistic-direction.md:101`).
- [ ] `PINTAR` — Dos gradas laterales altas, con cuatro espectadores sentados en cada lado, visibles por debajo de la barra superior del juego. Miran hacia el pasillo central, con la cabeza erguida. Los parapetos son macizos, sin barandal abierto (indicaciones del usuario, 2026-09-24).
- [ ] `PINTAR` — Al fondo, el juez calvo, de barba blanca y toga negra, está sentado tras el estrado con canto de oro. La única silla queda detrás del canto; encima está la balanza circular del plano cercano (`tools/raw/bg_judge_close.png`). El respaldo de la versión instalada es más alto que la escala prevista en la guía (auditoría 2026-09-24).
- [ ] `PINTAR` — Mesa de defensa vacía junto al muro izquierdo, con el lambrín liso de `bg_defense`. Mesa de fiscalía independiente junto al muro derecho, con las cortinas burdeos y el escudo de la balanza de `bg_courtroom`. Los lados de trabajo se miran a través del pasillo. Los paneles detrás de las mesas bajan hasta el suelo y ocultan por completo las gradas desde los planos cercanos (indicaciones del usuario, 2026-09-23).
- [ ] `PINTAR` — En primer plano del pasillo, el mismo podio que `court_podium`, visto por su lado abierto. El frente decorado y las bandas de oro apuntan hacia el juez; el micrófono de latón de cuello de ganso apunta al lugar del testigo junto a la cámara (`assets/court_podium.webp`; indicación del usuario, 2026-09-23).
- [ ] `PINTAR` — El podio tiene fondo para una sola persona. Ambos costados conservan el remate saliente, dos montantes delgados y la base escalonada del asset aprobado. El micrófono conserva la cápsula dorada estriada con ranuras oscuras, cuello curvo y base circular (`assets/court_podium.webp`; indicación del usuario, 2026-09-23).
- [ ] `PINTAR` — Suelo de tablones de madera como en `bg_witness`, sin mármol ni baldosas (`assets/bg_witness.webp`).
- [ ] `PINTAR` — Paleta de la sala: caoba `#3D2314`, latón `#C5A059`, piedra `#7F8C8D`, ámbar `#F39C12`, terciopelo `#581825` (`docs/specs/artistic-direction.md:97`).
- [ ] `AUSENTE` — Cuerdas, postes de cordón y pasillo de terciopelo.
- [ ] `AUSENTE` — Abogados, testigo, una segunda silla y público fuera de las gradas.

### F2 Texto en imagen

- [ ] `AUSENTE` — Texto legible, rótulos y marcas de agua. La lámina es compartida entre ES y EN.

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — Sin fecha, hora ni número de caso.

### F4 Contrato en pantalla

- [ ] `PINTAR` — Toda línea de `NARRADOR` que describa visualmente la galería del tribunal o la reacción de sus espectadores durante un juicio estampa `assets/bg_gallery_characters.webp` con `furniture: 'none'`; la variante muestra a la defensa y fiscalía frente a frente y deja la reacción de los espectadores en la misma composición. Se comparte entre ES y EN.
- [ ] `NO CONTRADECIR` — El nombre del archivo no contiene `bg_judge`, `bg_defense`, `bg_courtroom` ni `bg_witness`. Si lo contuviera, el juicio le colgaría una mesa (`docs/live/glossary.md`).

### F5 Estilo

- [ ] Misma pintura que los fondos aprobados de la sala: cel-shading plano, contorno carbón, dos tonos por panel. El plano cercano del juez, `bg_defense` y `bg_courtroom` fijan silla, madera y cortinas. Esta lámina no inventa otro acabado.
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela y magenta en primer plano.

### F6 Localización

- [ ] `NO CONTRADECIR` — Una sola imagen para ES y EN. Sin variante `_en`.

## Consistencia (regenerar juntos)

- `bg_judge` — comparte la silla de botones, los dos montantes y la balanza circular. Regenerar juntos, este activo no es fuente de verdad del otro.
- `bg_defense` — comparte el lambrín liso del lado izquierdo. Regenerar juntos, este activo no es fuente de verdad del otro.
- `bg_courtroom` — comparte las cortinas burdeos y el escudo de la balanza del lado derecho. Regenerar juntos, este activo no es fuente de verdad del otro.
- `bg_witness` — comparte la sala. Regenerar juntos, este activo no es fuente de verdad del otro.

## Conflictos abiertos

Ninguno. Las capturas de juego del 2026-09-23 aclaran la orientación de las tres mesas.

## Hallazgos de auditoría 2026-09-23

**Veredicto:** ~~cumple en contenido, orientación, estilo y exclusiones~~ cumple en disposición, pero no en acabado sobre el WebP final de 1376×768.

**Cumple:** F1: el plano mira de frente al juez; ambas gradas elevadas muestran filas sobre paneles macizos, mientras los fondos de defensa y fiscalía llegan al suelo detrás de dos mesas independientes que se miran a través del pasillo. El escritorio dorado del juez tapa la base de una sola silla. El podio central se ve por su lado abierto, con el micrófono hacia el lugar del testigo y el frente cerrado hacia el juez. Los recortes ampliados de izquierda, derecha, juez y podio confirman la forma de cada mueble. F2–F3: no hay texto, marcas, fecha ni cifras. F4–F6: una sola imagen compartida para ES y EN, sin personas, cuerdas, público ni mobiliario dinámico; el suelo de madera y los materiales siguen los assets aprobados.

**Defectos confirmados:** ~~ninguno~~ `MEDIO · MALFORMADO · F1/F5`: los cantos dorados de las mesas muestran empalmes borrosos y segmentos inconsistentes en las esquinas. Confirmado en recortes ampliados de ambas mesas tras la observación del usuario.

**Corrección de auditoría:** el veredicto original pasó por alto artefactos de las regeneraciones sucesivas. Se conserva la evaluación de disposición, pero se retira la aprobación del acabado.

## Hallazgos de auditoría 2026-09-23 — `bg_gallery_refined.webp`

**Veredicto:** ~~cumple en contenido, orientación, estilo y exclusiones~~ no cumple en acabado. Esta es una versión candidata separada; el juego sigue usando `bg_gallery.webp`.

**Cumple:** F1: los recortes propios de ambas gradas muestran filas elevadas y parapetos macizos; los recortes de defensa y fiscalía muestran paneles hasta el suelo, mesas independientes frente al pasillo y el escudo con cortinas sólo en fiscalía. El recorte del juez muestra una sola silla detrás del escritorio con canto de oro y la balanza circular. El recorte del podio muestra la entrada abierta hacia la cámara y un solo micrófono orientado hacia el lugar del testigo. El recorte del suelo muestra tablones de madera. F2–F3: sin texto, números, fechas ni marcas de agua. F4–F6: la imagen conserva la composición compartida de la sala y no contiene personas, cuerdas, mármol ni baldosas. El archivo final mide 1376×768 y se guardó como WebP sin pérdida.

**Defectos confirmados:** ~~ninguno en los recortes revisados~~ `MEDIO · MALFORMADO · F1/F5`: una esquina de mesa conserva una moldura dorada borrosa y con artefactos heredados de las ediciones sucesivas. El recorte aportado por el usuario muestra el defecto que la auditoría anterior pasó por alto.

**Corrección de auditoría:** la inspección anterior comprobó la presencia y orientación de los muebles, pero no examinó con suficiente rigor la continuidad de sus molduras ampliadas. Se retira el veredicto de acabado limpio.

**Recomendación:** conservar esta variante para comparación visual antes de cambiar la referencia del juego.

**Fuente maestra:** `tools/masters/bg_gallery_refined.png` (1679×937). El prompt y las referencias usadas están en `tools/masters/bg_gallery_refined.prompt.txt`.

## Hallazgos de auditoría 2026-09-23 — `bg_gallery_rebuilt.webp`

**Veredicto:** ~~cumple en contenido, orientación y calidad de los bordes revisados~~ cumple en la sala y los bordes de las mesas, pero no en la identidad del podio. Imagen nueva generada sólo desde los fondos y muebles aprobados, sin usar `bg_gallery.webp` ni `bg_gallery_refined.webp` como entrada.

**Cumple:** F1: dos gradas laterales elevadas muestran filas de asientos por encima de paneles macizos; defensa y fiscalía tienen mesas separadas y paneles hasta el suelo. El juez conserva una sola silla tras su escritorio con canto dorado y la balanza circular. El podio abre hacia la cámara, con la pared cerrada en el extremo alejado y tablones de madera dentro y fuera. F2–F3: sin texto, fecha ni número de caso. F4–F6: sin personas, cuerdas, mármol ni baldosas. Los recortes ampliados de ambas esquinas de mesa muestran cantos y molduras continuos; se repitió la inspección sobre el WebP final de 1376×768.

**Defectos confirmados:** ~~ninguno en los recortes revisados~~ `MAYOR · MALFORMADO · F1`: el podio usa un micrófono distinto, omite los dos remates laterales del asset aprobado y prolonga el espacio interior como si cupieran varias personas en fila (observación del usuario, 2026-09-23).

**Corrección de auditoría:** se retira la aprobación del podio. La revisión anterior comprobó la abertura hacia la cámara, pero no contrastó su micrófono, remates ni profundidad contra `court_podium.webp`.

**Fuente maestra:** `tools/masters/bg_gallery_rebuilt.png` (1672×940). El prompt y las referencias usadas están en `tools/masters/bg_gallery_rebuilt.prompt.txt`.

## Hallazgos de auditoría 2026-09-23 — `bg_gallery_podium_corrected.webp`

**Veredicto:** cumple en los tres rasgos del podio corregidos y conserva la sala de `bg_gallery_rebuilt.webp`.

**Cumple:** F1: el lado abierto del podio mira a la cámara. El recorte ampliado del WebP final muestra un espacio interior para una persona; los dos costados tienen remate saliente, dos montantes y base escalonada. El micrófono tiene cápsula dorada estriada, ranuras oscuras, cuello de latón y base circular como `court_podium.webp`. Se revisaron por separado los dos laterales, el micrófono y las esquinas de ambas mesas. F2–F6: siguen sin aparecer texto, personas, cuerdas, mármol ni baldosas; la sala y las gradas conservan la composición anterior.

**Defectos confirmados:** ninguno en los recortes revisados.

**Fuente maestra:** `tools/masters/bg_gallery_podium_corrected.png` (1673×940). El prompt y las referencias están en `tools/masters/bg_gallery_podium_corrected.prompt.txt`.

## Variante poblada solicitada 2026-09-24

El encargo posterior del usuario pidió una lámina con público y juez sentado. El 2026-09-24 aprobó guardar la versión fresca como `assets/bg_gallery.webp`. Los espectadores permanecen sentados en las dos galerías y miran hacia el pasillo central y el podio, con la cabeza erguida; el juez conserva el fondo tallado del plano del juego. El podio mantiene el remate a la misma altura en ambos lados y sus adornos laterales.

## Hallazgos de auditoría 2026-09-24 — `bg_gallery_guide_painted_inward_gaze_20260924.webp`

**Veredicto:** cumple como candidata de la variante poblada. No cumple la exclusión de personas de F1 para el archivo canónico vacío, por lo que se conserva bajo otro nombre y no se usa como `bg_gallery.webp`.

**Cumple:** los recortes ampliados de ambas galerías muestran a los cuatro espectadores de la izquierda mirando hacia la derecha y a los cuatro de la derecha mirando hacia la izquierda, hacia el centro de la sala, con la cabeza erguida. El recorte del juez conserva una sola silla, el fondo tallado, la balanza circular y el canto dorado continuo. Los recortes de las mesas muestran dos escritorios independientes con molduras legibles. El podio conserva la abertura hacia la cámara, un micrófono con cápsula estriada, remates laterales y el espacio interior de una persona. El WebP mide 1376×768 y no tiene texto ni marcas de agua.

**Defectos confirmados:** ninguno en las zonas revisadas para esta variante. La incompatibilidad con la exclusión de personas de F1 es deliberada y queda acotada al archivo candidato.

**Fuente maestra:** `tools/masters/bg_gallery_guide_painted_inward_gaze_20260924.png` (1678×937). La pasada posterior de image_gen hizo que varios espectadores miraran a la cámara y se descartó; esta fuente procede de la corrección anterior que quedó sin guardar tras la desconexión del cliente.

## Hallazgos de auditoría 2026-09-24 — `bg_gallery_fresh_complete_20260924.webp`

**Veredicto:** la variante poblada se regeneró desde la guía plana y cuatro referencias aprobadas, sin usar los panoramas editados como entrada. Cumple en limpieza de líneas, orientación del público y lectura de los muebles; no cumple todavía la geometría estricta de la guía.

**Cumple:** los recortes ampliados del WebP final muestran cuatro espectadores de cada lado con la cabeza erguida y la mirada hacia el centro. Las molduras de las dos mesas independientes y del estrado tienen esquinas nítidas y cantos continuos. El podio deja ver su interior para una persona, dos remates laterales con un montante por lado y un solo micrófono con cápsula estriada. El fondo del juez conserva los dos montantes tallados, la silla negra y la balanza circular. Hay tablones de madera, no hay texto ni marcas de agua. El WebP sin pérdida mide 1376×768.

**Defectos confirmados:** `MEDIO · DRIFT · F1`: el modelo subió el canto del estrado a aproximadamente el 43 % de la altura de imagen, frente al 49 % de la guía; el remate del podio también comienza aproximadamente seis puntos porcentuales por encima de su silueta. `MEDIO · DRIFT · F1`: el respaldo de la silla sobresale más por encima de la cabeza del juez de lo indicado en la hoja. La exclusión de personas de F1 sólo corresponde al archivo canónico vacío, no a esta variante solicitada.

**Recomendación:** ~~conservar la imagen como candidata limpia para comparación; no sustituir `bg_gallery.webp` hasta aprobar el desvío de escala~~. El usuario aprobó usar esta versión en `bg_gallery.webp` el 2026-09-24. Se conserva el hallazgo de escala como límite conocido, sin bloquear la instalación.

**Fuente maestra:** `tools/masters/bg_gallery_fresh_complete_20260924.png` (1672×941). Prompt completo: `tools/masters/bg_gallery_fresh_final_20260924.prompt.txt`.

**Instalación 2026-09-24:** `assets/bg_gallery.webp` es copia byte por byte de `assets/bg_gallery_fresh_complete_20260924.webp`. La versión anterior quedó en `tools/masters/bg_gallery_before_fresh_20260924.webp`.

## Variante con personajes 2026-09-24

`assets/bg_gallery_characters.webp` añade a Don Ramón y el Chapulín detrás de la mesa de defensa y a Super Sam detrás de la mesa de fiscalía. El juego usa esta variante en los cortes de `NARRADOR` que describen la galería del tribunal o la reacción de sus espectadores durante el juicio; el panorama base `assets/bg_gallery.webp` conserva las mesas vacías. El saco de Super Sam queda visible sobre la mesa.

Los tres personajes se generaron como recortes RGBA aislados usando sus poses `*_idle.webp` como referencia de identidad. `tools/compose_gallery_characters.py` los coloca sobre una copia del fondo limpio y restaura los píxeles originales de ambas mesas para que tapen los torsos. El WebP final es sin pérdida, mide 1376×768 y conserva exactamente los píxeles decodificados del fondo limpio fuera de las dos zonas de inserción. Las fuentes y el prompt están en `tools/masters/bg_gallery_characters_*.png` y `tools/masters/bg_gallery_characters.prompt.txt`.

**Corrección de pose 2026-09-24:** los tres recortes frontales se sustituyeron por perfiles laterales que miran a la mesa contraria a través del pasillo, como en Ace Attorney. Don Ramón y el Chapulín miran hacia la derecha de la imagen; Super Sam mira hacia la izquierda. El archivo `bg_gallery_characters.webp` se recompone desde el fondo limpio con estos recortes, sin repintar la sala. La versión frontal quedó en `tools/masters/bg_gallery_characters_front_20260924.webp`; los recortes elegidos llevan el sufijo `_side.png`.

**Corrección de escala y profundidad 2026-09-25:** la primera composición colocaba las cabezas demasiado bajas para personajes de pie, dibujaba a Don Ramón detrás del Chapulín pese a estar más cerca de la cámara y dejaba píxeles de traje y capa sobre los cantos de ambas mesas. La composición actual sube las tres figuras, dibuja primero al Chapulín y luego a Don Ramón, y restaura desde `bg_gallery.webp` la silueta completa de cada mesa, incluido el canto dorado. Super Sam se desplaza hacia el centro para que su capa termine detrás de la mesa. La variante anterior queda en `tools/masters/bg_gallery_characters_low_20260925.webp`.

**Recomposición por geometría 2026-09-25 (segunda):** la corrección anterior dejaba franjas de pared entre los torsos y el canto (la máscara trazada a mano quedaba por fuera del borde), agrandaba a los personajes cerca del doble y los colocaba demasiado altos. Ahora la escala sale de la mesa: su cubierta mide 0.95 m, así que los píxeles por metro son la altura de la mesa en la columna donde está cada figura; los pies caen en el suelo tras la mesa y la cadera coincide con la cubierta. Se usan recortes de cuerpo entero (`*_standing.png`, alturas 1.78/1.78/1.88 m) para que ningún corte plano quede sobre el canto. La máscara de restauración es una recta ajustada al borde superior de la línea de tinta del canto trasero, con antialias de un píxel: la pared justo encima del canto también es oscura y un umbral fijo por columna la restauraba sobre la figura (franja visible) o dejaba picos de un píxel. Fuera de las columnas de las mesas no cambia ningún píxel. La variante previa queda en `tools/masters/bg_gallery_characters_raised_20260925.webp`.

## Hallazgos de auditoría 2026-09-25 — `bg_gallery_characters.webp`

**Veredicto:** cumple como variante con personajes de pie. La sala y las mesas siguen siendo los píxeles de `bg_gallery.webp`; el archivo canónico de fondo conserva su contrato independiente.

**Cumple:** los recortes ampliados muestran a Don Ramón delante del hombro y la capa del Chapulín, con ambos de perfil hacia la derecha; Super Sam mira hacia la izquierda y conserva la bolsa visible. El borde superior y los laterales de las dos mesas ocultan los cuerpos y la capa sin atravesarlos. Las cabezas quedan a la altura del estrado en vez de junto al canto de las mesas. F2–F3: sin texto, fecha, número de caso ni marca de agua nueva. F5–F6: los tres personajes conservan el cel-shading y la variante se comparte entre ES y EN.

**Defectos confirmados:** ninguno en los recortes de personajes, cantos y esquinas revisados. La exclusión de abogados de F1 sólo se aplica al fondo canónico sin personajes.

**Comprobación de píxeles:** el WebP sin pérdida mide 1376×768. Comparado con `bg_gallery.webp`, no cambia ningún píxel fuera de las zonas de inserción ni sobre las dos máscaras de mesa restauradas.
