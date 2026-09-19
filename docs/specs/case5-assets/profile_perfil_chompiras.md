# profile_perfil_chompiras — hoja de hechos

Clase: `profile`. Espec: §6.1, §23.0, §23.2 y §23.5. Guion directo ES/EN: `src/case/case5/Private/bodega_masa_intro.ts:17-22`, `bodega_masa_intro_en.ts:17-22`, `trial_day3_success.ts:27-30,76`, `trial_day3_success_en.ts:27-30,76`; catálogo ES/EN: `src/state/Private/ProfileCatalogCase5Es.ts:98-106`, `ProfileCatalogCase5En.ts:98-106`.

## Mapa semántico y alcance

El Chómpiras, cargador del Archivo Judicial y testigo del día 3. La ficha se entrega al terminar la introducción de la bodega de bienes, cuando dice que carga huacales desde septiembre, que ese empleo tiene seguro y aguinaldo y que no quiere perderlo; el juicio la actualiza después de su testimonio sobre el huacal 9, las aperturas de seis o siete veces y el mando independiente de Berrondo (`bodega_masa_intro.ts:17-22`; `trial_day3_success.ts:27-30,57-76`). El bitmap debe ser un busto recortado de `chompiras_idle`, no una escena de la bodega, una prueba de agosto ni una pose nueva (§6.1; §23.2; §23.5).

Identidad narrativa compartida: fue absuelto en agosto del robo del Chanfle de Oro; trabaja como cargador desde el 15 de septiembre; teme perder su primer empleo con seguro y aguinaldo; ayuda a abrir el huacal 9 y lo ha visto abierto seis o siete veces. Es honesto y está equivocado sobre el contenido del huacal. Esos datos viven en el catálogo y el guion, no como texto ni utilería dentro del icono (§6.1; `ProfileCatalogCase5Es.ts:98-106`; `ProfileCatalogCase5En.ts:98-106`).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Busto de El Chómpiras recortado de la pose reutilizada `chompiras_idle`; conservar exactamente identidad, proporciones, ropa, rostro, expresión base y anclaje de esa pose. No inventar una pose de perfil independiente (§23.2; §23.5).
- [ ] `PINTAR` — Formato de icono de persona de 256 × 256: busto sobre un color plano distinto por persona, con recorte limpio, sin marco y sin texto (§23.5).
- [ ] `NO CONTRADECIR` — El retrato debe sostener al mismo cargador que aparece en la bodega y en el estrado, reconocible como el aliado honesto que teme perder su empleo; no convertirlo en Berrondo, el Sargento ni el Chómpiras del Caso 2 (`bodega_masa_intro.ts:17-22`; `trial_day3_success.ts:27-30`).
- [ ] `AUSENTE` — Bodega, huacales, pata de cabra, montacargas, máquina de escribir, tiras de sellado, documentos, papel de absolución, mesa de juicio, juzgado, personajes secundarios y cualquier otro fondo u objeto narrativo. El icono representa sólo a la persona (§23.5; §23.2).
- [ ] `AUSENTE` — `chompiras_nervous`, `chompiras_crying` y `chompiras_relieved` como pose de fuente; la ficha se deriva del `*_idle` reutilizado y las otras poses sólo sirven para diálogo (§23.2; `bodega_masa_intro.ts:17-22`; `trial_day3_t1.ts:24-88`).

### F2 Texto en imagen

- [ ] `AUSENTE` — No imprimir nombre, cargo, fechas, cifras, “seguro”, “aguinaldo”, Chanfle de Oro, huacal 9, absolución, etiquetas, marco ni texto localizado. El Acta muestra esos datos desde el catálogo, no desde el bitmap (§23.5; `ProfileCatalogCase5Es.ts:98-106`; `ProfileCatalogCase5En.ts:98-106`).
- [ ] `NO CONTRADECIR` — El icono puede acompañar la descripción de agosto, septiembre, el empleo y las seis o siete aperturas, pero ninguna de esas palabras o cifras debe aparecer en la imagen (§6.1; §23.5).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La identidad de la ficha es la del cargador absuelto en agosto y empleado del Archivo desde septiembre; no sugerir que fue culpable, que estuvo presente el sábado 4 de diciembre o que es quien conserva el mando de síndico (§6.1; §4.2; `trial_day3_success.ts:57-62`).
- [ ] `NO CONTRADECIR` — “Seis o siete” aperturas del huacal, cuatro cierres de palanca, dos minutos para abrir, dos minutos y medio para cerrar y minuto y medio entre sótano y primer piso son hechos de testimonio y prueba, no accesorios ni texto obligatorio del retrato (`trial_day3_t1.ts:53-88`; `trial_day3_success.ts:57-62`).
- [ ] `NO CONTRADECIR` — La ficha no debe anticipar que Chómpiras sabe que Berrondo es culpable: sólo declara de buena fe sobre la rutina, el huacal y los dos mandos; la imagen sigue siendo la de un aliado honesto (§1.1; §15.2; `trial_day3_t1.ts:63-88`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — La investigación D3 usa `chompiras_idle` como `idlePose` y entrega `perfil_chompiras` después de que explica que carga huacales desde septiembre, que el trabajo tiene seguro y aguinaldo y que en agosto acabó preso (`bodega_masa.ts:11-18`; `bodega_masa_intro.ts:17-22`; variante EN `bodega_masa_en.ts:11-18`, `bodega_masa_intro_en.ts:17-22`).
- [ ] `NO CONTRADECIR` — La tarjeta queda disponible como perfil del Acta de Personajes, con rol de cargador/porter, mientras el testimonio desarrolla su rutina del huacal 9 y sus observaciones del montacargas (`ProfileCatalogCase5Es.ts:98-106`; `ProfileCatalogCase5En.ts:98-106`; `trial_day3_t1.ts:24-88`).
- [ ] `NO CONTRADECIR` — Tras la contradicción y el dictamen de la máquina, el Juez actualiza el perfil al retirar al testigo; esa actualización no cambia el bitmap ni autoriza una pose localizada (`trial_day3_success.ts:70-76`; `trial_day3_success_en.ts:70-76`).
- [ ] `NO CONTRADECIR` — Durante el testimonio se alternan `chompiras_idle`, `chompiras_nervous` y `chompiras_relieved`; esas poses no cambian la imagen del perfil (`trial_day3_t1.ts:24-88`; `trial_day3_t1_en.ts:24-88`).
- [ ] `NO CONTRADECIR` — La tarjeta de persona no es una prueba presentable durante el contrainterrogatorio; sirve para lectura e identificación dentro del Acta, con actualización sólo en el punto autorizado (§6; §6.2; `trial_day3_success.ts:76`).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA / Nintendo DS) en alta definición; ; contorno oscuro nítido y continuo en carbón `#1A1A1A`, más grueso en la silueta exterior que en los detalles internos; anatomía facial expresiva y exagerada, al borde de la caricatura; colores primarios saturados; televisión mexicana de los años setenta, universo Chespirito / El Chapulín Colorado, melodrama de tribunal tratado en serio por el sistema y absurdo en los personajes, con registro de papel, madera, polvo, archivo judicial, madera barnizada, latón envejecido y luz de tungsteno; prohibidos fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, estética de cómic americano de superhéroes, marcas de agua, texto en inglés salvo variantes EN exigidas y cualquier tono rosa o magenta en primer plano por el pipeline sobre `#FF00FF` (§23.0).
- [ ] `PINTAR` — Fondo plano individual, nunca magenta; sin marco, sin interfaz del Acta y sin elementos de la bodega (§23.5).
- [ ] `AUSENTE` — Flechas, círculos, realces didácticos, etiquetas de evidencia, huacales ampliados y cualquier composición de comparación (§23.0; §23.5).

### F6 Localización

- [ ] `NO CONTRADECIR` — ES y EN usan exactamente `assets/profile_perfil_chompiras.webp`; no crear `profile_perfil_chompiras_en.webp` (`ProfileCatalogCase5Es.ts:102`; `ProfileCatalogCase5En.ts:102`).
- [ ] `NO CONTRADECIR` — Composición, recorte, fondo plano, identidad, expresión base y anclaje permanecen idénticos entre idiomas; sólo se localizan nombre, rol y descripción en la interfaz del catálogo (`ProfileCatalogCase5Es.ts:98-106`; `ProfileCatalogCase5En.ts:98-106`).
- [ ] `TEXTO EXACTO` — La interfaz ES usa `name: El Chómpiras`, `role: Cargador`, `desc: Cargador del Archivo. Absuelto en agosto del robo del Chanfle de Oro. Es el primer trabajo fijo que tiene y no piensa perderlo.`, y actualización: `Ayuda a destapar el huacal 9 desde septiembre y lo ha visto abierto seis o siete veces.` (`ProfileCatalogCase5Es.ts:98-106`).
- [ ] `TEXTO EXACTO` — La interfaz EN usa `name: El Chómpiras`, `role: Porter`, `desc: Archive porter. Acquitted in August of stealing the Golden Chanfle. First steady job he has had and he does not intend to lose it.`, y actualización: `He has helped unseal Crate 9 since September and has seen it open six or seven times.` (`ProfileCatalogCase5En.ts:98-106`).
- [ ] `AUSENTE` — La regla de la ese caída tipográfica no aplica a este icono sin texto; no añadir letras ni traducciones dentro del bitmap (§23.3; §23.5).

## Consistencia (regenerar juntos)

- `chompiras_idle` — fuente visual obligatoria del recorte; comparte la identidad y el anclaje del personaje. Regenerar/recortar juntos; este activo no es fuente de verdad del otro (§23.2; §23.5).
- `chompiras_nervous`, `chompiras_relieved` y `chompiras_crying` — comparten identidad, ropa y diseño del personaje en investigación, testimonio y veredicto. Regenerar juntos; este activo no es fuente de verdad de los otros (§23.2; `bodega_masa_intro.ts:17-22`; `trial_day3_t1.ts:24-88`).
- `profile_perfil_donramon`, `profile_perfil_chapulin`, `profile_perfil_casimiro` y las demás fichas de §6.1 — comparten formato de Acta: 256 × 256, busto, color plano individual, sin texto ni marco. Regenerar juntos; estos activos no son fuente de verdad de éste (§6.1; §23.5).
- `bg_bodega_masa` — comparte el momento de la investigación y el espacio de trabajo, pero el perfil no debe importar la bodega, los huacales ni el montacargas. Regenerar juntos para continuidad de identidad/escena; este activo no es fuente de verdad del perfil (§14.1; `bodega_masa.ts:11-18`).
- `huacal_9`, `inventario_1971`, `maquina_escribir` y `plate_huacal_sellos` — comparten el hilo probatorio del huacal, sus tiras y la máquina, pero ningún objeto debe aparecer en el busto. Regenerar juntos para continuidad semántica; estos activos no son fuente de verdad de éste (§15.2; §23.3; §23.5).
- `profile_perfil_chompiras` ES↔EN — gemelos de idioma del mismo archivo compartido; sólo cambia el catálogo visible. Regenerar juntos; este activo no es fuente de verdad del otro (§23.5; `ProfileCatalogCase5Es.ts:102`; `ProfileCatalogCase5En.ts:102`).

## Conflictos abiertos

- §6.1 y el catálogo describen éste como “el primer trabajo fijo” / “first steady job”, mientras la invariante I36 exige no presentar el trabajo del Archivo como su primer trabajo fijo porque sus empleos hoteleros previos siguen siendo canon. El bitmap no puede resolver la discrepancia; conservarla como conflicto textual (`docs/specs/case-5-el-tomo-trece.md:347,4211`; `ProfileCatalogCase5Es.ts:103`; `ProfileCatalogCase5En.ts:103`).
- El catálogo dice que fue absuelto del robo del Chanfle de Oro, mientras el guion de investigación y el testimonio alternan “acabé en el bote”, “salí inocente” y el miedo a perder el empleo; son estados narrativos y tono del diálogo, no cambios del retrato (`bodega_masa_intro.ts:20-22`; `trial_day3_success.ts:29-30`; `trial_day3_t1.ts:60`).
- El catálogo resume “ayuda a destapar” el huacal desde septiembre y el guion precisa que el sábado del crimen no estuvo allí, que Berrondo puede operar el montacargas con su propio mando y que Chómpiras sólo conoce la rutina desde su ingreso. La ficha debe sostener al cargador ausente el sábado, no representar presencia en el crimen (`ProfileCatalogCase5Es.ts:104-106`; `trial_day3_success.ts:57-62`; §4.2; §24.B).

## Hallazgos de auditoría 2026-09-19

- No realizada por protocolo: no se abrió ni inspeccionó ninguna imagen. Por tanto, no se confirma ningún defecto visual del archivo actual.
- Hoja construida únicamente desde §6.1, §23.0, §23.2, §23.5, el Libro de hechos y las referencias ES/EN citadas. No se ejecutaron tests, lint, auditorías, procesamiento ni verificación de assets.
