# bg_archivo_pasillo7_d4 — hoja de hechos

Clase: `bg`. Espec: §23.0, §23.1. Guion: §10.1, bloque de relato del 4 de diciembre; `src/case/case5/Private/celda_talks.ts` y `celda_talks_en.ts`. Variante localizada: fondo compartido entre ES/EN.

## Mapa semántico y alcance

Fondo del pasillo 7 del primer piso del Archivo Judicial durante el recuerdo del 4 de diciembre a las 16:44–16:56, antes del homicidio de las 17:02. Debe conservar la identidad espacial del pasillo canónico: corredor estrecho y largo con estanterías altas de madera oscura, mueble de consulta, mesa de roble, puerta de servicio, rejilla de ventilación caliente y reja al extremo opuesto. En este estado Casimiro está vivo y sentado en la mesa de consulta con Don Ramón; dos custodios esperan en la reja. Los personajes se componen como sprites sobre el fondo: el fondo no debe dibujar personas.

Alias seguidos: `pasillo 7`, `Archivo Judicial`, `mesa de consulta`, `mueble/estante de consulta`, `reja`, `puerta de servicio`, `rejilla`, `calor`, `expediente`, `página 214`, `tarjeta`.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Pasillo estrecho y largo del primer piso, entre estanterías de madera oscura de piso a techo cargadas con legajos atados con listón, en perspectiva de un punto de fuga, con techo alto y tubería vista (§23.1, `docs/specs/case-5-el-tomo-trece.md:3987`).
- [ ] `PINTAR` — Mueble de consulta distinto de las estanterías, a la derecha y al frente, con 24 ranuras y cartoncitos numerados; conservar 22 lomos de tela verde oliva, la ranura 13 vacía y oscura, y el lomo de media piel con nervios y dos cantoneras de latón en la ranura 11. Es la identidad espacial compartida del estante, aunque el diálogo del recuerdo no lo examina (`docs/specs/case-5-el-tomo-trece.md:3987`; §4.1 P6, línea 198; §10.3, líneas 794–804).
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

- [ ] `NO CONTRADECIR` — ES y EN usan el mismo fondo compartido; ambas variantes del relato apuntan a `assets/bg_archivo_pasillo7.webp` actualmente y el nuevo activo debe conservar una única composición sin texto traducible (`src/case/case5/Private/celda_talks.ts:9-28`; `celda_talks_en.ts:9-28`).
- [ ] La composición, geometría, props, conteos y estado previo al crimen permanecen idénticos entre idiomas. Sólo cambia la prosa de `celda_talks.ts` y `celda_talks_en.ts`; no generar una variante `_en` ni introducir texto para resolver la traducción.

## Consistencia (regenerar juntos)

- `bg_archivo_pasillo7` — comparte la geometría del pasillo, piso de madera, estanterías, mueble de 24 ranuras, mesa, lámpara, puerta, rejilla y reja. Regenerar juntos, este activo no es fuente de verdad del otro; conservar estados distintos: investigación posterior con silueta/tomo/cartel/silla volcada frente a recuerdo previo sin esos elementos.
- `plate_foto_pericial` — comparte la sala y la orientación general, pero representa la escena del crimen a las 19:05 con cuerpo; regenerar juntos para fijar arquitectura y materiales, este activo no es fuente de verdad del otro.
- `examine_estante_consulta` — comparte el mueble de 24 ranuras, sus 22 lomos de tela, el hueco 13 y el lomo distinto de la ranura 11; regenerar juntos, este activo no es fuente de verdad del otro.
- `examine_tomo_caido` + icono `tomo_caido` — comparten la identidad del tomo de tela verde y su relación con la escena; regenerar juntos, este activo no es fuente de verdad del otro. En esta variante el tomo no está caído ni funciona como arma visible.
- `expediente_casimiro` — comparte el expediente abierto sobre la mesa y la página 214 como objeto narrado; regenerar juntos, este activo no es fuente de verdad del otro y el fondo no hereda su texto legible.
- `bg_archivo_vestibulo` — comparte el lenguaje material del Archivo y la ruta hacia el pasillo, no la composición; regenerar juntos sólo para evitar drift de madera, luz y arquitectura, este activo no es fuente de verdad del otro.

## Conflictos abiertos

- El guion de §10.1 y `celda_talks.ts`/`_en` reutiliza `bg_archivo_pasillo7` durante el recuerdo de las 16:44–16:56, pero §23.1 y §10.3 definen ese fondo como escena del crimen descubierta con silueta de gis, tomo caído, cartelito pericial y silla volcada (§10.1, líneas 550–567; §10.3, líneas 736–743; §23.1, `docs/specs/case-5-el-tomo-trece.md:3987`). La propuesta de `bg_archivo_pasillo7_d4` resuelve el estado visual mediante un segundo fondo, pero el cambio de referencia en el guion sigue pendiente (`docs/specs/case5-assets/new-assets.md:9-14`).
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
