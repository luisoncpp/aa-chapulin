# nicanor_idle — hoja de hechos

Clase: `sprite`. Espec: §23.0, §23.2.B, §10.2, §11.2 y §11.4; Libro de hechos §24. Guion directo ES/EN: `src/case/case5/Private/archivo_vestibulo.ts:10-31`, `archivo_vestibulo_en.ts:10-31`, `archivo_vestibulo_hotspots.ts:13-60`, `archivo_vestibulo_hotspots_en.ts:13-60`, `archivo_vestibulo_talks.ts:10-32`, `archivo_vestibulo_talks_en.ts:10-32`, `trial_day1_t1.ts`, `trial_day1_t1_en.ts`, `trial_day1_t3.ts`, `trial_day1_t3_en.ts`, `climax_stage3.ts:18-23` y `climax_stage3_en.ts:18-23`. Variante EN: no existe ni se exige; ES/EN usan `assets/nicanor_idle.webp`.

## Mapa semántico y alcance

Nicanor Tolentino, «el Conserje» del Archivo Judicial: hombre de 64 años, bajo, encorvado y muy delgado; rostro redondo y curtido, bigote blanco corto, cejas pobladas, orejas grandes, calvicie en la coronilla y pelo blanco en las sienes. Viste overol de mezclilla azul desteñido sobre camisa de franela a cuadros, con franela amarilla en el bolsillo del pecho, manojo grande de llaves en el cinturón y zapatos de trabajo. `nicanor_idle` es el candado de identidad y el busto base para el estrado y el vestíbulo: hasta la cintura, ligeramente encorvado, ambas manos apoyadas en el palo de la escoba, mentón casi encima, expresión atenta y tranquila.

Alias seguidos: `Nicanor`, `don Nicanor`, `señor Tolentino`, `el conserje`, `el hombre de la puerta`, `el testigo`, `conserje del Archivo Judicial`. La frase «treinta y un años» en el guion y catálogo describe servicio en el edificio, no su edad. Este activo es una pose de personaje, no el fondo del vestíbulo, una escoba aislada ni el perfil recortado.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Hombre de 64 años, bajo, encorvado y muy delgado; cara redonda y curtida, bigote blanco corto y recortado, cejas pobladas, orejas grandes, calvo en la coronilla con pelo blanco en las sienes (§23.2.B).
- [ ] `PINTAR` — Overol de mezclilla azul desteñido sobre camisa de franela a cuadros; franela amarilla colgando del bolsillo del pecho; manojo de llaves grande al cinturón; zapatos de trabajo (§23.2.B).
- [ ] `PINTAR` — Busto hasta la cintura, ligeramente encorvado, con las dos manos apoyadas en el palo de la escoba y el mentón casi encima (§23.2.B).
- [ ] `PINTAR` — Escoba de vara presente y sostenida en la pose idle; la excepción «salvo donde se indique» no aplica a `nicanor_idle` (§23.2.B; la variante `nicanor_escoba` es la pose de barrer y `nicanor_sweat` la de humedad/cadáver).
- [ ] `PINTAR` — Expresión atenta y tranquila: no barrer, no girar el torso, no levantar una ceja en protesta, no mostrar sudor y no quitarse una gorra imaginaria (§23.2.B).
- [ ] `AUSENTE` — Elementos de otras poses: motas de polvo alrededor del cepillo, torso girado y escoba diagonal de `nicanor_escoba`; dos gotas de sudor, escoba al hombro y mano izquierda levantada de `nicanor_sweat` (§23.2.B).
- [ ] `AUSENTE` — Personajes adicionales, fondo del Archivo, mostrador, pasillo 7, cadáver, estante, documentos o texto de escena: el busto se coloca sobre las cámaras de vestíbulo/estrado y no debe hornear la locación (§10.2; §11.2; §11.4).

### F2 Texto en imagen

- [ ] `AUSENTE` — Texto legible, nombres, etiquetas, horas, números de expediente, marcas de llaves o rótulos en la ropa; §23.2.B sólo fija la identidad visual del personaje y no pide texto dentro del sprite.
- [ ] `NO CONTRADECIR` — Las palabras «Nicanor Tolentino», «conserje», «treinta y un años», horarios, catorce visitas, el Tomo XI, el hueco del trece y «Ferrocarriles-Guatemala» pertenecen al diálogo, perfil o pruebas, no a una placa o inscripción del sprite (§10.2; §11.2; §11.4; catálogo `ProfileCatalogCase5Es.ts:64-72`, `ProfileCatalogCase5En.ts:64-72`).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — En la primera visita, Nicanor aparece el 6 de diciembre a las 10:15 AM en el vestíbulo (§10.2; `archivo_vestibulo.ts:10-18`, `archivo_vestibulo_en.ts:10-18`); el sprite no debe llevar fecha ni hora.
- [ ] `NO CONTRADECIR` — El guion fija 31 años de servicio y el perfil fija el hallazgo del cuerpo a las 17:35; el testimonio añade «treinta y un años, cuatro meses» como antigüedad declarada (`ProfileCatalogCase5Es.ts:69-71`, `ProfileCatalogCase5En.ts:69-71`; `trial_day1_success.ts:166`, `trial_day1_success_en.ts:166`). Son datos narrativos, no edad pintada ni texto del sprite.
- [ ] `NO CONTRADECIR` — El estado de Nicanor en la pose idle es sereno incluso cuando afirma horarios, conteos o la topología del edificio; la angustia por humedad/cadáver se reserva a `nicanor_sweat` (§23.2.B; `archivo_vestibulo_talks.ts:13-17`, `trial_day1_t1.ts:36-93`, `trial_day1_t3.ts:25-80`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En la introducción del vestíbulo, `nicanor_idle` aparece cuando Nicanor se identifica como conserje de 31 años y dice que encontró al muerto; la identidad debe ser legible junto a `nicanor_escoba` y `nicanor_sweat` sin cambiar de personaje (`archivo_vestibulo.ts:20-31`; `archivo_vestibulo_en.ts:20-31`).
- [ ] `PINTAR` — En los hotspots del libro, plano y carrito, la pose idle acompaña las explicaciones sobre catorce visitantes, la puerta de peritos, los dos libros y Chómpiras; debe conservar una postura neutral que no implique que está barriendo o entrando por la ventanilla profesional (`archivo_vestibulo_hotspots.ts:13-60`; variante EN `archivo_vestibulo_hotspots_en.ts:13-60`).
- [ ] `PINTAR` — En las dos conversaciones de Nicanor, la pose idle acompaña el horario fijo de las 17:35, la cantidad de visitantes y la afirmación de que el estante está derecho; el sprite no puede parecer sudoroso ni estar en movimiento (`archivo_vestibulo_talks.ts:10-32`; `archivo_vestibulo_talks_en.ts:10-32`).
- [ ] `PINTAR` — En D1-T1, `nicanor_idle` se usa para la declaración base y las presiones sobre horario, catorce firmas, salida de Valdés y ausencia de entradas posteriores; el gesto de encerar se muestra únicamente con `nicanor_escoba`, y la humedad/ruido con `nicanor_sweat` (`trial_day1_t1.ts:34-93`; `trial_day1_t1_en.ts:34-94`).
- [ ] `PINTAR` — En D1-T3, `nicanor_idle` sostiene las afirmaciones sobre las 17:35, el tomo cerrado boca abajo, el Tomo XI, el estante completo, sus 23 tomos y el hueco del 13, y la escalera propia; la reacción breve al cadáver es `nicanor_sweat` (`trial_day1_t3.ts:23-80`; `trial_day1_t3_en.ts:23-80`).
- [ ] `PINTAR` — En el clímax de la etapa 3, vuelve como testigo de identidad cuando confirma que el estante está derecho y completo; no debe adoptar la escoba diagonal ni el sudor de otras poses (`climax_stage3.ts:18-23`; `climax_stage3_en.ts:18-23`).
- [ ] `NO CONTRADECIR` — La posición del busto es hasta la cintura y debe admitir el anclaje de busto de pie usado por Case 5; no producir un cuerpo completo, una silueta flotante o un recorte que pierda la cintura (§23.2; `docs/architecture/asset-pipeline.md`, sección «Case 5»).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA/Nintendo DS) en alta definición; , ; contorno oscuro nítido y continuo en carbón `#1A1A1A`, más grueso en la silueta exterior; anatomía facial expresiva y exagerada al borde de la caricatura; colores primarios saturados.
- [ ] Aplicar el registro del Caso 5: papel, madera y polvo; archivo judicial, expedientes atados con listón, madera barnizada, latón envejecido y luz de tungsteno (§23.0). En el sprite, este registro sólo puede aparecer como acabado cromático compatible con el vestuario y el contorno, no como fondo o textura fotográfica.
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, estética de cómic americano, marcas de agua, texto en inglés y cualquier tono rosa o magenta en primer plano (§23.0; `docs/specs/artistic-direction.md:5`).
- [ ] `NO CONTRADECIR` — El formato es una pose de la familia nueva de sprites de Case 5; todas las poses de pie pasan por `anchor_standing_bust`, y el recorte debe conservar la cintura y el mismo suelo de busto que las poses hermanas (§23.2; `docs/architecture/asset-pipeline.md`, sección «Case 5»).

### F6 Localización

- [ ] `NO CONTRADECIR` — ES y EN referencian el mismo `assets/nicanor_idle.webp`; no crear `nicanor_idle_en.webp` (`archivo_vestibulo.ts:10-18`, `archivo_vestibulo_en.ts:10-18`; usos bilingües en `trial_day1_t1*`, `trial_day1_t3*` y `climax_stage3*`).
- [ ] Composición, geometría, edad aparente, vestuario, llaves, escoba, expresión y anclaje son idénticos entre idiomas. Sólo cambia el diálogo que acompaña al sprite; no hay texto localizado dentro de la imagen (§23.0, §23.2.B y §23.3; `ProfileCatalogCase5Es.ts:64-72`, `ProfileCatalogCase5En.ts:64-72`).
- [ ] `NO CONTRADECIR` — La regla de la ese caída y las traducciones de documentos EN de §23.3 no aplica a este sprite porque no contiene texto; no añadir letras para «localizar» la pose.

## Consistencia (regenerar juntos)

- `nicanor_escoba` — comparte la identidad completa de Nicanor, edad aparente, ropa, llaves, escoba y recorte hasta la cintura; sólo cambia la acción y expresión de queja. Regenerar juntos; este activo no es fuente de verdad del otro.
- `nicanor_sweat` — comparte la misma identidad, vestuario y anclaje; añade las dos gotas de sudor y la reacción a humedad/cadáver. Regenerar juntos; este activo no es fuente de verdad del otro.
- `perfil_nicanor` — comparte la identidad visual del conserje y funciona como icono de personaje en el Acta; el sprite idle es el candado de identidad, mientras el perfil debe conservar la misma cara, pelo, bigote, overol, franela y llaves. Regenerar juntos; este activo no es fuente de verdad del otro.
- `bg_archivo_vestibulo` — comparte el uso de vestíbulo y la primera aparición de Nicanor, pero el fondo no debe hornear el personaje; regenera el lenguaje de la escena junto con el sprite sin hacer que éste sea fuente de verdad del fondo.
- `bg_archivo_pasillo7` y `bg_archivo_pasillo7_d4` — comparten el edificio, el contexto de archivo y las declaraciones posteriores del testigo, pero no deben incluir a Nicanor ni convertir su pose en elemento del fondo. Regenerar juntos sólo para coherencia de época/registro; este activo no es fuente de verdad de ninguno.

## Conflictos abiertos

- No hay conflicto visual interno confirmado en §23.2.B: la edad de identidad es 64 años, mientras «treinta y un años» en la tabla, perfil y diálogos describe servicio en el edificio; no convertir esa antigüedad en la edad del personaje (`docs/specs/case-5-el-tomo-trece.md:140,343`; §23.2.B; `ProfileCatalogCase5Es.ts:69-71`, `ProfileCatalogCase5En.ts:69-71`).
- La frase de §23.2.B «siempre con una escoba ... salvo donde se indique» y la descripción de `nicanor_idle` con ambas manos sobre el palo son compatibles. `nicanor_escoba` y `nicanor_sweat` son estados distintos, no variantes localizadas ni correcciones de este idle (§23.2.B).
- La cifra «treinta y un años, cuatro meses» del testimonio es más precisa que «treinta y un años» del perfil y de la presentación; es una diferencia de diálogo sobre antigüedad, no un requisito gráfico ni una razón para alterar el sprite (`trial_day1_success.ts:166`, `trial_day1_success_en.ts:166`; `ProfileCatalogCase5Es.ts:69`, `ProfileCatalogCase5En.ts:69`).

## Auditoría visual

- No realizada por protocolo: esta hoja se construyó sin abrir ni inspeccionar ninguna imagen. La aceptación posterior debe comprobar cada casilla contra el sprite regenerado y conservar la prohibición de usar la imagen como fuente de verdad.
