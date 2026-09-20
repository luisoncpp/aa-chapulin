# bg_archivo_pasillo7_d4 — hoja de hechos

Clase: `bg`. Espec: §23.0, §23.1. Guion: §10.1, bloque de relato del 4 de diciembre; `src/case/case5/Private/celda_talks.ts` y `celda_talks_en.ts`. Variante localizada: fondo compartido entre ES/EN.

## Mapa semántico y alcance

Fondo del pasillo 7 del primer piso del Archivo Judicial durante el recuerdo del 4 de diciembre a las 16:44–16:56, antes del homicidio de las 17:02. Debe conservar la identidad espacial del pasillo canónico: corredor estrecho y largo con estanterías altas de madera oscura, mueble de consulta, mesa de roble, puerta de servicio, rejilla de ventilación caliente y reja al extremo opuesto. En este estado Casimiro está vivo y sentado en la mesa de consulta con Don Ramón; dos custodios esperan en la reja. Los personajes se componen como sprites sobre el fondo: el fondo no debe dibujar personas.

Alias seguidos: `pasillo 7`, `Archivo Judicial`, `mesa de consulta`, `mueble/estante de consulta`, `reja`, `puerta de servicio`, `rejilla`, `calor`, `expediente`, `página 214`, `tarjeta`.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Pasillo estrecho y largo del primer piso, entre estanterías de madera oscura de piso a techo cargadas con legajos atados con listón, en perspectiva de un punto de fuga, con techo alto y tubería vista (§23.1, `docs/specs/case-5-el-tomo-trece.md:3987`).
- [ ] `PINTAR` — Mueble de consulta distinto de las estanterías, a la derecha y al frente, con **una sola banda horizontal continua de 24 ranuras claramente separadas**; no usar dos filas apiladas ni una consola baja. Conservar cartoncitos numerados, 22 lomos de tela verde oliva, la ranura 13 vacía y oscura, y el lomo de media piel con nervios y dos cantoneras de latón en la ranura 11. Es la identidad espacial compartida del estante, aunque el diálogo del recuerdo no lo examina (`docs/specs/case-5-el-tomo-trece.md:3987,4057`; `examine_estante_consulta.md:23-27`).
- [ ] `PINTAR` — Mesa larga de roble a la izquierda, con lámpara de pantalla verde encendida y expediente abierto sobre ella; la mesa es el lugar donde Casimiro está sentado durante el recuerdo (§23.1, `docs/specs/case-5-el-tomo-trece.md:3987`; §10.1, líneas 542, 558).
- [ ] `PINTAR` — Silla en su posición normal junto a la mesa; no debe estar volcada, porque la silla volcada pertenece al estado posterior al homicidio y a la dirección del fondo canónico (§23.1, `docs/specs/case-5-el-tomo-trece.md:3987`; `docs/specs/case5-assets/new-assets.md:11-13`).
- [ ] `PINTAR` — Puerta metálica gris de servicio entreabierta al fondo, rejilla grande de ventilación en el muro izquierdo con una línea sutil de aire caliente, y reja de barrotes al extremo opuesto (§23.1, `docs/specs/case-5-el-tomo-trece.md:3987`; §4.1 P2/P3/P7, líneas 194–199).
- [ ] `AUSENTE` — Cadáver, silueta de gis, tomo caído en el piso, cartelito numerado de perito y cualquier marcaje de escena del crimen: el recuerdo ocurre dieciocho minutos antes del homicidio y el hallazgo es posterior (§10.1, líneas 550–567; §24.A, líneas 4113–4119; `docs/specs/case5-assets/new-assets.md:11-13`).
- [ ] `AUSENTE` — Personajes dibujados en el fondo. Casimiro, Don Ramón y los dos custodios aparecen como sprites en pantalla, mientras `furniture: none` deja al fondo responsable de los muebles (`src/case/case5/Private/celda_talks.ts:12-28`; `src/case/case5/Private/celda_talks_en.ts:12-28`).

### F2 Texto en imagen

- [ ] `AUSENTE` — Texto legible, rótulos, subtítulos, marcas de agua o texto en inglés. §23.1 termina el contrato del fondo con «sin texto legible», y §23.0 prohíbe texto en inglés salvo las variantes EN exigidas en §23.3 (§23.0–§23.1, `docs/specs/case-5-el-tomo-trece.md:3978-3987`).
- [ ] `NO CONTRADECIR` — Los cartoncitos numerados de las ranuras son marcas diegéticas del mueble y pueden conservarse como formas/numeración de referencia, pero no deben convertirse en prosa explicativa legible (§23.1, `docs/specs/case-5-el-tomo-trece.md:3987`; §10.3, líneas 793–801).
- [ ] `NO CONTRADECIR` — El expediente abierto, la página 214 y la tarjeta pegada son hechos narrados por el diálogo; no exigir que «214», un domicilio o cualquier texto de la tarjeta sea legible en el fondo (§10.1, líneas 558–564; §23.1, `docs/specs/case-5-el-tomo-trece.md:3987`).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — El fondo representa el 4 de diciembre a las 16:44, con la conversación extendiéndose hasta las 16:56; no imprimir fecha ni hora en la imagen (§10.1, líneas 550–567; `src/case/case5/Private/celda_talks.ts:12-28`; `celda_talks_en.ts:12-28`).
- [ ] `NO CONTRADECIR` — El homicidio ocurre a las 17:02; la escena previa debe quedar visualmente separada del cadáver y del marcaje pericial (§24.A, líneas 4113–4119; §24.B, tabla de cronología alrededor de las líneas 4137–4140).
- [ ] `NO CONTRADECIR` — La colección visible conserva 24 ranuras, 23 tomos en el mueble y la ranura 13 vacía por el tomo anunciado y nunca publicado; el tomo que luego será arma todavía no debe aparecer caído en el suelo (§4.1 P6, línea 198; §24.C F7; §24.D I3; `docs/specs/case5-assets/new-assets.md:13`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — Durante `[RELATO]`, el narrador fija «4 de diciembre, 16:44. Pasillo 7 del Archivo Judicial» y todas las líneas del recuerdo usan este fondo con `furniture: none` y música `suspense` (`src/case/case5/Private/celda_talks.ts:11-28`; variante EN equivalente).
- [ ] `PINTAR` — La composición debe permitir que los sprites de Casimiro y Don Ramón ocupen la mesa de consulta y que los dos custodios ocupen la reja; Don Ramón confirma que Casimiro estaba sentado en la mesa y que los custodios estaban en la reja (§10.1, líneas 536–544; `celda_talks.ts:38-42`; `celda_talks_en.ts:38-42`).
- [ ] `PINTAR` — La mesa debe admitir el expediente abierto en la página 214 y la tarjeta pegada que Casimiro señala; la página y el domicilio son contrato narrativo, no texto obligatorio del fondo (§10.1, líneas 558–564).
- [ ] `NO CONTRADECIR` — Las líneas posteriores sitúan la máquina de escribir a doce metros y «abajo»; no añadir una máquina en el pasillo ni cambiar la lectura espacial del Archivo (§10.1, líneas 560–562; §4.1 P2/P7, líneas 194–199).
- [ ] `AUSENTE` — El estado de investigación del 6 de diciembre: cuerpo retirado pero silueta de gis, tomo caído y demás restos de la escena. Esos elementos son parte del fondo `bg_archivo_pasillo7` posterior y no de esta variante previa al crimen (§10.3, líneas 736–743; §23.1, `docs/specs/case-5-el-tomo-trece.md:3987`; `docs/specs/case5-assets/new-assets.md:11-13`).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* de linaje GBA/Nintendo DS, alta definición;  y ; contorno continuo carbón `#1A1A1A`, más grueso en la silueta exterior; caricatura expresiva; colores primarios saturados (§23.0, `docs/specs/case-5-el-tomo-trece.md:3974-3978`).
- [ ] Mantener el registro de papel, madera y polvo: archivo judicial, legajos atados con listón, madera barnizada, latón envejecido y luz de tungsteno; el ambiente debe ser cálido y opresivo (§23.0–§23.1, `docs/specs/case-5-el-tomo-trece.md:3978-3987`).
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano de superhéroes, marcas de agua, texto en inglés no exigido y cualquier rosa/magenta en primer plano (§23.0, `docs/specs/case-5-el-tomo-trece.md:3978`; [[docs/specs/artistic-direction.md]] §5).

### F6 Localización

- [ ] `NO CONTRADECIR` — ES y EN usan el mismo fondo compartido `assets/bg_archivo_pasillo7_d4.webp`, con una única composición sin texto traducible (`src/case/case5/Private/celda_talks.ts:9-28`; `celda_talks_en.ts:9-28`).
- [ ] La composición, geometría, props, conteos y estado previo al crimen permanecen idénticos entre idiomas. Sólo cambia la prosa de `celda_talks.ts` y `celda_talks_en.ts`; no generar una variante `_en` ni introducir texto para resolver la traducción.

## Consistencia (regenerar juntos)

- `bg_archivo_pasillo7` — comparte la geometría del pasillo, piso de madera, estanterías, mueble de 24 ranuras, mesa, lámpara, puerta, rejilla y reja. Regenerar juntos, este activo no es fuente de verdad del otro; conservar estados distintos: investigación posterior con silueta/tomo/cartel/silla volcada frente a recuerdo previo sin esos elementos.
- `plate_foto_pericial` — comparte la sala y la orientación general, pero representa la escena del crimen a las 19:05 con cuerpo; regenerar juntos para fijar arquitectura y materiales, este activo no es fuente de verdad del otro.
- `examine_estante_consulta` — comparte el mueble de 24 ranuras, sus 22 lomos de tela, el hueco 13 y el lomo distinto de la ranura 11; regenerar juntos, este activo no es fuente de verdad del otro.
- `examine_tomo_caido` + icono `tomo_caido` — comparten la identidad del tomo de tela verde y su relación con la escena; regenerar juntos, este activo no es fuente de verdad del otro. En esta variante el tomo no está caído ni funciona como arma visible.
- `expediente_casimiro` — comparte el expediente abierto sobre la mesa y la página 214 como objeto narrado; regenerar juntos, este activo no es fuente de verdad del otro y el fondo no hereda su texto legible.
- `bg_archivo_vestibulo` — comparte el lenguaje material del Archivo y la ruta hacia el pasillo, no la composición; regenerar juntos sólo para evitar drift de madera, luz y arquitectura, este activo no es fuente de verdad del otro.

## Decisión de regeneración futura

`examine_estante_consulta.webp` es la referencia canónica de la geometría del mueble: una sola fila horizontal continua de 24 ranuras. `bg_archivo_pasillo7_d4`, `bg_archivo_pasillo7` y `plate_foto_pericial` deben regenerarse como un lote para reproducir esa identidad en perspectiva; no regenerar `examine_estante_consulta` por este drift. Para `d4`, partir de la versión previa de mejor calidad y hacer una composición pixel-perfect de las correcciones, no encadenar nuevas regeneraciones de la imagen completa.

## Corrección de auditoría 2026-09-19 (revisión posterior)

El veredicto «cumple» de Lote B queda **supersedido**. La imagen instalada conserva un mueble de dos filas que contradice el diseño canónico de `examine_estante_consulta`, y la cadena de regeneraciones degradó la calidad respecto de una base anterior. La próxima regeneración debe usar composición pixel-perfect desde la mejor base disponible y corregir sólo las zonas necesarias.

## Conflictos abiertos

- El guion de §10.1 y `celda_talks.ts`/`_en` usa `bg_archivo_pasillo7_d4` durante el recuerdo de las 16:44–16:56; `bg_archivo_pasillo7` queda reservado para la escena del crimen descubierta con silueta de gis, tomo caído, cartelito pericial y silla volcada (§10.1, líneas 550–567; §10.3, líneas 736–743; §23.1, `docs/specs/case-5-el-tomo-trece.md:3987`).
- §10.1 sólo fija para el recuerdo la mesa, Casimiro sentado y dos custodios en la reja; no especifica una disposición alternativa completa de props. Esta hoja hereda únicamente la geometría espacial de §23.1 y marca como ausentes los elementos posteriores al crimen; no inventa detalles adicionales de decoración.

## Hallazgos de auditoría 2026-09-19

- ~~No se realizó auditoría visual ni se inspeccionó ninguna imagen, conforme al protocolo de `asset-facts` y a la solicitud. No hay defectos visuales confirmados; los conflictos abiertos proceden únicamente de la comparación entre el spec, el guion y la propuesta de activo nuevo.~~ (Sustituido por la auditoría de regeneración Lote A sobre `tools/raw/case5/bg_archivo_pasillo7_d4.jpg`.)

## Hallazgos de auditoría 2026-09-19 (regeneración Lote A)

Auditoría visual de `tools/raw/case5/bg_archivo_pasillo7_d4.jpg` (1280×720), recortes por sustantivo. Primera imagen del activo. **Veredicto: cumple** el estado previo al crimen (F1/F4) y las exclusiones. Resta MEDIO heredado del fondo canónico (numeración del mueble; línea de calor).

### Cumple

- ✓ Misma geometría de pasillo que `bg_archivo_pasillo7`: estanterías, mesa, lámpara encendida, mueble de consulta, puerta metálica gris entreabierta, reja, rejilla, tubería (F1).
- ✓ Mesa de roble con expediente abierto atado con listón; silla **en pie** junto a la mesa, no volcada (F1; recorte `d4_chair`).
- ✓ AUSENTE cadáver, silueta de gis, tomo caído, cartelito pericial: el piso entre mesa y estante está vacío (F1/F4; recorte `d4_floor`).
- ✓ AUSENTE personajes pintados (F1). F2: sin texto de fecha/hora. F6: composición única ES/EN.

### Defectos confirmados

- [ ] **MEDIO (F1, DRIFT)** — El mueble hereda las cifras saltadas del fondo canónico; el hueco 13 no se lee. No rompe el relato del 4 de diciembre (el diálogo no examina el estante).
- [ ] **MEDIO (F1, AUSENTE)** — Rejilla presente; la línea sutil de aire caliente no se nombra en el recorte (un intento con vapor fotográfico se descartó por contradecir «nunca vapor»).

### Recomendación

Alinear el mueble con `examine_estante_consulta` cuando se reabra el fondo canónico; añadir una línea de calor plana, no humo.

## Hallazgos de auditoría 2026-09-19 (regeneración final Lote B)

Auditoría visual per-crop de `assets/bg_archivo_pasillo7_d4.webp` (1536×1024): silla, mueble, corredor y piso. **Veredicto: cumple** el contenido bloqueante, la forma de los props, el estado previo al crimen y las exclusiones.

### Cumple

- ✓ Silla normal, erguida y reconocible: asiento, respaldo alto con listones y cuatro patas coherentes (`d4_final_chair`).
- ✓ Mueble de consulta alto y creíble, con tapa, laterales, zócalo y dos filas de ranuras; la primera ranura de la fila inferior queda vacía y oscura, seguida por once lomos (`d4_final_bookcase`).
- ✓ Cartoncitos reducidos a marcas diegéticas abstractas, sin números falsos legibles; no hay tomo, sangre, cartel pericial, silueta ni cadáver en el piso (`d4_final_floor`).
- ✓ Mesa, expediente abierto, lámpara verde, estanterías altas, puerta gris, rejilla, tubería y reja conservan la identidad espacial compartida (`d4_final_corridor`).

### Defectos confirmados

- [x] ~~MEDIO · DRIFT — cifras saltadas y hueco 13 no verificable~~ **[x] RETIRADO POR REGENERACIÓN (2026-09-19 Lote B):** la numeración dejó de ser texto falso legible y el hueco oscuro quedó explícito al inicio de la fila inferior.
- [x] ~~MEDIO · AUSENTE — línea de calor no visible~~ **[x] RETIRADO POR REVISIÓN (2026-09-19):** la rejilla queda presente sin vapor fotográfico y no bloquea el recuerdo.

### Recomendación

Ninguna regeneración adicional.

## Hallazgos de auditoría 2026-09-19 (regeneración desde cero solicitada)

Auditoría visual de `assets/bg_archivo_pasillo7_d4.webp` (1536×1024), con recortes separados de mueble, mesa/silla, corredor y piso. **Veredicto: cumple** el estado previo al crimen, el contenido bloqueante, las exclusiones y la consistencia material exigida por `examine_estante_consulta`.

### Cumple

- ✓ El mueble de consulta aparece como una sola banda horizontal continua, con un único hueco oscuro y un solo lomo vino más grueso con detalles de latón; no hay segunda fila (`d4/shelf2`).
- ✓ La mesa de roble tiene lámpara verde encendida y expediente abierto atado con listón; la silla está erguida y reconocible (`d4/table_chair2`).
- ✓ El piso es madera encerada de tablones largos, no loseta gris; la perspectiva mantiene un corredor central despejado (`d4/floor2`).
- ✓ Se conservan puerta metálica gris entreabierta, reja, rejilla de ventilación, ducto visto y estanterías altas con legajos atados (`d4/corridor2`).
- ✓ No aparecen personajes, cadáver, silueta de gis, tomo caído, cartel pericial, sangre ni silla volcada. No hay texto explicativo, marcas de agua, flechas ni magenta en primer plano.

### Defectos confirmados

- Ninguno que justifique otra regeneración. Los cartoncitos del mueble se leen como marcas diegéticas abstractas, por lo que no se exige una numeración legible en esta vista en perspectiva.

### Recomendación

Conservar esta generación como base del recuerdo previo al crimen. El guion ya referencia `bg_archivo_pasillo7_d4`; mantener la separación temporal en futuras regeneraciones.

## Hallazgos de auditoría 2026-09-19 (regeneración desde cero)

Auditoría visual per-crop de `assets/bg_archivo_pasillo7_d4.webp` (1536×1024), generada desde la descripción escrita sin imagen de referencia. **Veredicto: cumple** contenido, estado previo al crimen, exclusiones y consistencia con el mueble canónico.

### Cumple

- ✓ Mueble de consulta como una sola banda continua de 24 ranuras; el hueco oscuro está en la posición 13 y el lomo vino con nervios/cantoneras en la 11; no hay segunda fila (`d4_bookcase`).
- ✓ Mesa de roble con lámpara verde encendida, expediente abierto atado con listón y silla normal completa (`d4_table_chair`).
- ✓ Pasillo estrecho de punto de fuga con estanterías altas, legajos atados, tubería vista, puerta metálica entreabierta y reja (`d4_corridor`).
- ✓ Rejilla con ondas planas de aire caliente; no hay humo ni vapor fotográfico (`d4_corridor`).
- ✓ AUSENTE cadáver, silueta, tomo caído, cartel pericial, sangre, silla volcada, personajes, texto explicativo y marcas de agua (`d4_floor`, `d4_corridor`).

### Defectos confirmados

- Ninguno que justifique otra regeneración. Los cartoncitos son marcas diegéticas y no se exige leerlos como prosa en esta perspectiva.

### Recomendación

Conservar esta generación. El relato ya está re-apuntado desde `bg_archivo_pasillo7` a `bg_archivo_pasillo7_d4`.

## Hallazgos de auditoría 2026-09-19 (lote canónico compartido)

Auditoría visual per-crop de `assets/bg_archivo_pasillo7_d4.webp` (1536×1024), comparada contra el master de investigación y la placa forense. **Veredicto: cumple** estado previo al crimen, legibilidad de muebles y consistencia de arquitectura.

### Cumple

- ✓ La silla está erguida y se nombra sin ambigüedad: asiento, respaldo, listones y cuatro patas coherentes (`bg_archivo_pasillo7_d4_2`).
- ✓ El piso entre mesa y mueble está limpio: no hay cadáver, gis, tomo, sangre ni cartel (`bg_archivo_pasillo7_d4_3`).
- ✓ El mueble mantiene una sola banda de 24 ranuras, hueco 13 y lomo vino 11 (`bg_archivo_pasillo7_d4_1`).
- ✓ Grille, ondas de aire, puerta, reja, ducto, mesa, lámpara y expediente conservan la misma posición visual que el master (`bg_archivo_pasillo7_d4_0`, `bg_archivo_pasillo7_d4_4`, `bg_archivo_pasillo7_d4_5`).
- ✓ No aparecen personajes pintados ni texto explicativo.

### Defectos confirmados

- Ninguno que justifique otra regeneración.

### Recomendación

Conservar esta variante y no regenerarla de forma independiente del master.

## Hallazgos de auditoría 2026-09-19 (RAW regenerado ~20:15)

**RE-AUDITADO DESDE CERO (2026-09-19, pasada 2):** sección ratificada con recortes propios independientes (`tmp_full`, `tmp_mueble2`, `tmp_mesa`, `tmp_piso`, `tmp_fondo`, `tmp_rejilla`); los cuatro defectos se reproducen idénticos en la nueva pasada.

Auditoría visual per-crop de `tools/raw/case5/bg_archivo_pasillo7_d4.jpg` (1536×1024): mueble/ranuras, mesa/silla, piso, fondo (puerta+reja), rejilla, primera pasada completa. **Veredicto: no cumple** contenido/consistencia: el piso contradice la madera exigida y la aritmética del mueble está rota (etiquetas duplicadas) además de una lectura de consola baja.

### Cumple

- ✓ Pasillo estrecho de un punto de fuga con estanterías altas de piso a techo cargadas de legajos atados con listón, techo alto con tubería/ducto visto y luz de tungsteno cálida (`_tmp_full`, `_tmp_mesa`).
- ✓ Mesa larga de roble a la izquierda con lámpara de pantalla verde encendida y expediente abierto atado con listón; se nombra sin ambigüedad (F1; `_tmp_mesa`).
- ✓ Silla erguida y reconocible — asiento, respaldo con listones y patas coherentes; no está volcada (F1; `_tmp_piso`).
- ✓ Puerta metálica gris entreabierta, reja de barrotes al extremo opuesto y rejilla de ventilación en el muro izquierdo con líneas de aire caliente (`_tmp_puerta`, `_tmp_reja`, `_tmp_fondo`).
- ✓ AUSENTE cadáver, silueta de gis, tomo caído, cartelito pericial, sangre, silla volcada y personajes pintados; el corredor central queda despejado para sprites (F1/F4; `_tmp_piso`, `_tmp_fondo`).
- ✓ F2: sin prosa legible, rótulos, inglés ni marcas de agua; los únicos caracteres son los cartoncitos diegéticos del mueble, permitidos como numeración de referencia (F2; `_tmp_mueble2`).
- ✓ F5: cel-shading estilo Capcom GBA/DS, contorno carbón, colores saturados, registro cálido de papel/madera/latón; sin fotorrealismo ni magenta (F5).

### Defectos confirmados

- [ ] **MEDIO (F1, DRIFT)** — El piso es loseta cerámica gris brillante con juntas en cuadrícula, no madera encerada de tablones largos; contradice el rasgo compartido del conjunto («piso de madera») y el ✓ histórico del piso. Rompe la identidad material del Archivo (`_tmp_piso`).
- [ ] **MEDIO (F3, CONTRADICE)** — La fila de cartoncitos tiene 25 etiquetas para 24 ranuras: el número «17» aparece duplicado (…16, 17, 17, 18…), rompiendo la aritmética 24 ranuras / 23 tomos (§4.1 P6; `examine_estante_consulta.md:23-27`; `_tmp_mueble2`).
- [ ] **MEDIO (F1, DRIFT)** — En el mueble, el lomo vino con nervios/cantoneras cae bajo el cartoncito 12 (debe ser ranura 11) y el hueco vacío y oscuro cae entre los cartoncitos 13–14 (debe ser la ranura 13); ambos desplazados un puesto frente a la identidad de `examine_estante_consulta` (`_tmp_mueble2`).
- [ ] **MEDIO (F1, CONTRADICE)** — El mueble de consulta se lee como una consola baja: mostrador a la altura de la cintura con frente macizo y zócalo, forma que la hoja prohíbe explícitamente («no usar … ni una consola baja»). La banda única de 24 ranuras sí existe, pero el cuerpo del mueble no tiene la presencia del mueble de consulta (`_tmp_mueble2`).

### Recomendación

1. Rehacer el piso como madera encerada de tablones largos en dirección del punto de fuga, sin juntas de loseta (rasgo compartido con `bg_archivo_pasillo7`, `plate_foto_pericial`).
2. Corregir la fila de cartoncitos a exactamente 24 etiquetas 1–24 sin duplicados (eliminar el «17» repetido).
3. Reubicar el lomo vino con latón en la ranura 11 y el hueco vacío y oscuro en la ranura 13, alineados con sus cartoncitos.
4. Elevar y dar cuerpo de mueble (no mostrador bajo) al estante de consulta, conservando la banda única continua de 24 ranuras.

