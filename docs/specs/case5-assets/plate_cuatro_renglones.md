# plate_cuatro_renglones — hoja de hechos

Clase: `plate`. Espec: §23.0, §18.6, §23.4 (L9), §24 F10/I24/I31. Guion directo: `src/case/case5/Private/climax_stage5.ts:34-37`; variante EN en `climax_stage5_en.ts:34-37`. Variante localizada obligatoria: `assets/plate_cuatro_renglones_en.webp`.

## Mapa semántico y alcance

Lámina explicativa L9 a pantalla completa, mostrada únicamente después de acertar la etapa 5 del clímax y después de que el secretario mecanografía la muestra judicial. Compara cuatro documentos producidos por la misma máquina: la tarjeta de presentación decomisada a Casimiro Lengua el 12 de julio; la ficha mecanografiada de seis renglones hallada en el patio de carga del museo el 28 de agosto; la nota de tres renglones que acompañó los diecisiete meses de renta el 29 de noviembre; y la muestra recién mecanografiada en la sala el 9 de diciembre.

La lámina no es un `detailedView`, no es una fotografía pericial y no atribuye por sí sola quién pulsó las teclas ni quién cometió el homicidio. Su función visual es hacer comparable el defecto: en cada uno de los cuatro renglones legibles, la `s` minúscula cae media línea y las cuatro `s` quedan alineadas en la misma vertical.

Alias seguidos: `L9`, `cuatro papeles`, `cuatro documentos`, `cuatro tiras`, `la ese caída`, `muestra`, `muestra judicial`, `tarjeta de julio`, `ficha del museo`, `nota del sobre`.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Exactamente cuatro tiras de papel/documentos, dispuestas en escalera, una por cada muestra comparada (§23.4, `docs/specs/case-5-el-tomo-trece.md:4084`; §18.6, `docs/specs/case-5-el-tomo-trece.md:3645-3649`).
- [ ] `PINTAR` — Cada tira contiene un renglón mecanografiado legible; los cuatro renglones funcionan como muestras comparables, no como cuatro párrafos completos (§23.4, `docs/specs/case-5-el-tomo-trece.md:4084`).
- [ ] `PINTAR` — La `s` minúscula de cada renglón está media línea por debajo del resto del renglón y las cuatro `s` quedan alineadas en la misma vertical (§23.4, `docs/specs/case-5-el-tomo-trece.md:4084`; §24 F10, `docs/specs/case-5-el-tomo-trece.md:4160-4161`).
- [ ] `NO CONTRADECIR` — Las cuatro muestras representan, en orden narrativo, julio, agosto, noviembre y la muestra recién mecanografiada de hoy; no convertirlas en cuatro documentos del mismo caso ni cambiar el orden de comparación (§18.6, `docs/specs/case-5-el-tomo-trece.md:3645-3649`; `climax_stage5.ts:34-37`).
- [ ] `NO CONTRADECIR` — El defecto es compartido por la tarjeta de julio, la ficha de agosto, la nota del sobre y la muestra de la sala; la lámina no debe mostrar una `s` normal en ninguno de los cuatro (§24 F10/I24, `docs/specs/case-5-el-tomo-trece.md:4160-4161,4206-4207`).
- [ ] `AUSENTE` — Personajes, máquina de escribir, secretario, tribunal, huacal, sobres, fechas como etiquetas de calendario, flechas, círculos, realces de color, sellos probatorios o cualquier conclusión escrita sobre Berrondo. La lámina compara los papeles; no reproduce la escena ni imprime la respuesta del clímax (§7.2, reglas de láminas; §23.4; `climax_stage5.ts:34-42`).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — Debe haber cuatro renglones mecanografiados legibles y cada uno debe contener al menos una `s` minúscula visible; la `s` es el único carácter cuya posición está fijada literalmente por el contrato (§23.4; regla de localización de §23.3, `docs/specs/case-5-el-tomo-trece.md:4064-4068`; §24 I31, `docs/specs/case-5-el-tomo-trece.md:4206-4207`).
- [ ] `NO CONTRADECIR` — El spec no prescribe las cadenas exactas de esos cuatro renglones ni exige imprimir fechas, nombres de documentos o etiquetas. No inventar texto adicional para explicar qué papel es cada uno; la identificación la aporta el NARRADOR (`docs/specs/case-5-el-tomo-trece.md:3645-3649,4084`).
- [ ] `NO CONTRADECIR` — En ES, cualquier texto elegido para las cuatro muestras debe conservar el sentido de documentos mecanografiados y mostrar la `s` caída; no convertir la lámina en una transcripción completa de la tarjeta del museo, la nota de renta o la tarjeta de domicilio.
- [ ] `NO CONTRADECIR` — En EN, sólo se localiza el texto legible de las cuatro tiras; la composición, el defecto mecánico, la cantidad de tiras y su alineación permanecen idénticos (§23.3, `docs/specs/case-5-el-tomo-trece.md:4064-4068`; `climax_stage5_en.ts:34-37`).
- [ ] `AUSENTE` — Texto en inglés dentro de la variante ES; texto en español dentro de la variante EN; rótulos de fecha o de panel que no estén exigidos por §23.4 (§23.0; §23.4).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — Las fechas narradas son 12 de julio, 28 de agosto, 29 de noviembre y el día de la muestra judicial; la placa no necesita imprimirlas (`climax_stage5.ts:34-37`; §24 F10, `docs/specs/case-5-el-tomo-trece.md:4160-4161`).
- [ ] `NO CONTRADECIR` — La tarjeta del museo tiene seis renglones y la nota de renta tres, pero L9 muestra un solo renglón representativo de cada documento; no dibujar seis o tres líneas en esas tiras salvo que se cambie el contrato del spec (§18.6, `docs/specs/case-5-el-tomo-trece.md:3646-3649`; §23.4, `docs/specs/case-5-el-tomo-trece.md:4084`).
- [ ] `NO CONTRADECIR` — El cotejo identifica la máquina detrás de los papeles, no por sí solo al usuario ni al homicida; la imagen no debe convertir la semejanza tipográfica en una atribución directa (`climax_stage5.ts:38-42`; §24 I16, `docs/specs/case-5-el-tomo-trece.md:4191-4192`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — La placa aparece con `bg: assets/plate_cuatro_renglones.webp` y `furniture: 'none'` después de que el juez ordena la muestra y el secretario confirma que todas las `s` están media línea abajo (`climax_stage5.ts:26-37`; variante EN `climax_stage5_en.ts:26-37`).
- [ ] `NO CONTRADECIR` — Las cuatro líneas del NARRADOR, en orden, identifican tarjeta de julio, ficha del museo de agosto, nota de renta de noviembre y muestra de hoy; cada renglón visible debe sostener la frase repetida “la `s`, media línea abajo” / “the `s`, half a line down” (`climax_stage5.ts:34-37`; `climax_stage5_en.ts:34-37`).
- [ ] `NO CONTRADECIR` — Al terminar L9, la defensa dice “Cuatro papeles. Una máquina” y limita expresamente el alcance del cotejo; la placa no debe insinuar que muestra al mecanógrafo o al asesino (`climax_stage5.ts:38-42`; variante EN `climax_stage5_en.ts:38-42`).
- [ ] `NO CONTRADECIR` — L9 se muestra sólo después del acierto de E5; no debe aparecer antes de la respuesta del jugador porque revelaría la solución impresa (§23, regla de justicia sobre L8/L9, `docs/specs/case-5-el-tomo-trece.md:387-389`).
- [ ] `NO CONTRADECIR` — La lámina explica y no demuestra: no entrega una prueba, no resuelve una contradicción y no sustituye los `detailedView` de `examine_esquina_tarjeta`, `examine_nota_renta` ni `examine_expediente_serie` (§7.2; §24 I24).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA/Nintendo DS) en alta definición; cel-shading de colores planos con terminador duro, dos tonos por superficie y ; contorno carbón `#1A1A1A` nítido y continuo, más grueso en la silueta exterior; anatomía expresiva cuando aplique; colores primarios saturados (§23.0, `docs/specs/case-5-el-tomo-trece.md:3974-3978`).
- [ ] `PINTAR` — Registro de lámina explicativa didáctica: fondo crema de papel, ilustración plana y trazo de manual escolar mexicano de los años setenta (§23.4, `docs/specs/case-5-el-tomo-trece.md:4070-4084`).
- [ ] `NO CONTRADECIR` — Aunque el sujeto son documentos, L9 no es una fotografía pericial de grano, una mesa de peritajes ni un `detailedView`; debe leerse como comparación didáctica de cuatro tiras (§23.4; §7.2).
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, estética de cómic americano, marcas de agua, cualquier tono rosa o magenta en primer plano y texto en inglés dentro de la variante ES (§23.0, `docs/specs/case-5-el-tomo-trece.md:3974-3980`).

### F6 Localización

- [ ] `PINTAR` — Deben existir ambas variantes: `plate_cuatro_renglones.webp` para ES y `plate_cuatro_renglones_en.webp` para EN; §23.4 exige la variante porque L9 es la única lámina explicativa con texto legible (`docs/specs/case-5-el-tomo-trece.md:4084`; `climax_stage5.ts:9`; `climax_stage5_en.ts:9`).
- [ ] `NO CONTRADECIR` — ES y EN conservan exactamente el mismo encuadre escalonado, cuatro tiras, cuatro renglones y alineación vertical de las `s`; sólo cambia el texto legible de las muestras (§23.3, `docs/specs/case-5-el-tomo-trece.md:4064-4068`; §23.4).
- [ ] `NO CONTRADECIR` — Toda traducción impresa debe conservar al menos una `s` minúscula visible por renglón. Si una traducción elimina la `s` del texto elegido, se reescribe el texto y no se elimina el defecto (§23.3; §24 I31).

## Consistencia (regenerar juntos)

- `examine_esquina_tarjeta` / `_en` — comparte la `s` caída y la procedencia del fragmento de domicilio; la lámina L9 no debe heredar su regla testigo, fondo gris ni composición fotográfica. **Regenerar juntos, este activo no es fuente de verdad del otro.**
- `examine_nota_renta` / `_en` — comparte la `s` caída, el origen de la nota del sobre y la tipografía mecánica; L9 muestra una sola línea representativa, no la media cuartilla ni el sobre. **Regenerar juntos, este activo no es fuente de verdad del otro.**
- `examine_expediente_serie` / `_en` — comparte la tarjeta de julio, la ficha de agosto y el defecto visible en los paneles A/B; el tablero de cinco expedientes no es la composición de L9. **Regenerar juntos, este activo no es fuente de verdad del otro.**
- `examine_maquina` — comparte la causa material del defecto: la barra de la `s` torcida y la cinta gastada; la lámina no debe convertirse en un primer plano de la Olivetti. **Regenerar juntos, este activo no es fuente de verdad del otro.**
- `maquina_escribir` y `inventario_1971` — comparten la identificación de la máquina como Olivetti Lexikon 80, partida 41, y el cotejo de E5; esos activos fijan identidad probatoria, no el diseño de la lámina. **Regenerar juntos, este activo no es fuente de verdad del otro.**
- `plate_cinco_papeles` — comparte el registro de lámina didáctica, fondo crema y comparación cronológica de documentos, pero L5 contiene cinco expedientes y L9 cuatro tiras con texto legible. **Regenerar juntos por estilo y continuidad, este activo no es fuente de verdad del otro.**
- `plate_anatomia_ficha` — comparte el manual escolar mexicano de los setenta y el tratamiento plano de papel; L4 no tiene texto legible y L9 sí lo tiene. **Regenerar juntos por estilo únicamente, este activo no es fuente de verdad del otro.**

## Conflictos abiertos

- §23.4 exige que cada tira tenga un renglón mecanografiado legible, pero no fija las cadenas exactas que deben imprimirse. El guion sólo identifica los cuatro documentos por narración (`docs/specs/case-5-el-tomo-trece.md:3645-3649`; `climax_stage5.ts:34-37`). Esta hoja no inventa una transcripción: la regeneración debe conservar cuatro líneas legibles con `s` visible y caída, y cualquier texto adicional queda pendiente de decisión editorial.
- La narración de L9 llama “muestra recién mecanografiada” al cuarto papel, mientras §24 F10 la describe como muestra judicial del 9 de diciembre y el diálogo de E5 la mecanografía en la sala después de la orden (`docs/specs/case-5-el-tomo-trece.md:3649,4160-4161`; `climax_stage5.ts:26-37`). No cambia el aspecto requerido, pero la hoja conserva ambas formulaciones.
- La regla general de §23.4 dice que no hay texto dentro de las láminas explicativas salvo donde se indique, mientras L9 exige texto legible sin proporcionar cadenas exactas (`docs/specs/case-5-el-tomo-trece.md:4070-4071,4084`). El contrato mínimo verificable es un renglón legible por tira y la `s` caída; no se resuelve aquí qué palabras exactas deben aparecer.

## Hallazgos de auditoría 2026-09-19

**Veredicto: NO CUMPLE.** Se auditaron `assets/plate_cuatro_renglones.webp` (ES, 960×540) y `assets/plate_cuatro_renglones_en.webp` (EN, 960×540), convertidas a PNG y con 7 recortes de verificación. La variante EN cumple la mayor parte del contrato; la variante ES presenta defectos MAYOR en el texto de los renglones (el único carácter con posición fijada), en la disposición escalonada y en la composición compartida con EN.

### Cumple

- F1/`PINTAR` — Exactamente cuatro tiras con un renglón mecanografiado legible cada una, en ambas variantes (recortes `es_strip12/34`, `en_strip12/34`); F3: un solo renglón representativo por documento (no seis ni tres líneas) y sin fechas como etiquetas de calendario. ✓
- F1/`NO CONTRADECIR` — EN: las cuatro `s` minúsculas caen media línea por debajo del renglón, una por renglón (bajo "is", "rests", "accumulates", "reveals"). ✓
- F1/`AUSENTE` — EN: sin personajes, máquina, sello, flechas, círculos ni conclusión escrita. ✓
- F2/`AUSENTE` — Sin texto en inglés en la variante ES ni texto en español en la variante EN; sin rótulos de fecha o panel. ✓
- F3/`NO CONTRADECIR` — La imagen no atribuye autoría ni imprime la solución del clímax en ninguna variante. ✓
- F5 — Registro de lámina didáctica, fondo crema, trazo plano 2D en ambas; sin fotorrealismo, degradados suaves ni marcas de agua. ✓
- F6/`PINTAR` — Ambas variantes existen (960×540 cada una). ✓

### Defectos confirmados

1. **MAYOR — CONTRADICE** (F2/TEXTO EXACTO, hoja:26; F1, hoja:21) — ES renglón 1 «en el expediente judicial.» no contiene ninguna `s` minúscula visible. Evidencia: recorte de `assets/plate_cuatro_renglones.webp` (tiras superiores).
2. **MAYOR — CONTRADICE** (F2/TEXTO EXACTO, hoja:26; F1, hoja:21) — ES renglón 2 «obrante en el archivo general.» tampoco contiene ninguna `s`. Mismo recorte.
3. **MAYOR — CONTRADICE** (F1, hoja:21; F2, hoja:28) — ES renglón 3 «de la causa penal número 77-14.»: la `s` de "causa" es normal, en línea, no caída; la lámina no debe mostrar una `s` normal en ninguno de los cuatro renglones.
4. **MAYOR — CONTRADICE** (F1, hoja:19; §24 F10) — ES renglón 4 «fojas útiles…»: la `s` de "fojas" va media línea por **encima** (superíndice), defecto invertido respecto del contrato «media línea por debajo».
5. **MAYOR — CONTRADICE** (F1/`PINTAR`, hoja:17) — ES: las cuatro tiras son barras paralelas alineadas a la izquierda, no la disposición en escalera exigida por §23.4 (la EN sí la tiene).
6. **MAYOR — CONTRADICE** (F6, hoja:56) — ES y EN no comparten encuadre: ES es un tablero enmarcado en madera con atado de documentos, mazo, tintero y placa de latón; EN es fondo crema plano con tiras en escalera. Sólo debería cambiar el texto legible.
7. **MEDIO — CONTRADICE** (F1/`AUSENTE`, hoja:22) — ES incluye un mazo de juez (atributo de tribunal), elemento de la lista de exclusión. Evidencia: recorte superior derecho de `assets/plate_cuatro_renglones.webp`.
8. **MEDIO — DRIFT** (F1, hoja:22; F5, hoja:50) — ES añade adornos no solicitados (atado con listón rojo, pluma y tintero, placa de latón) que empujan la lámina hacia lectura de vitrina/`detailedView` en lugar de comparación didáctica de cuatro tiras.
9. **MEDIO — CONTRADICE** (F1, hoja:19; F6, hoja:56) — En AMBAS variantes las cuatro `s` caídas no quedan alineadas en la misma vertical (cada una cae bajo una palabra distinta). El contrato exige alineación vertical compartida; requiere elegir cadenas cuya `s` caiga en la misma columna.
10. **MENOR — DRIFT** (F2, hoja:26) — EN renglón 3 lleva una segunda `s` caída bajo "brass" además de la de "accumulates"; no está prohibido, pero complica la exigencia de la vertical única.

### Correcciones de auditoría

- ~~No se inspeccionó ninguna imagen, por instrucción del encargo. No se confirman defectos visuales de los archivos actuales; no se ejecutaron pruebas, lint, auditorías ni procesamiento de assets.~~ — Placeholder reemplazado por esta sección el 2026-09-19 tras inspección real de ambas imágenes con recortes de verificación. Archivos temporales eliminados al cierre.

### Recomendación (regeneración de `plate_cuatro_renglones.webp` ENTIENDE AMBAS variantes)

1. Regenerar la variante ES copiando el encuadre y composición de la EN: fondo crema plano, cuatro tiras en escalera, sin mazo, atado, tintero, placa ni marco de madera (corrige defectos 5–8).
2. Elegir cuatro cadenas ES que contengan al menos una `s` minúscula por renglón y re-dibujar la `s` de cada renglón media línea por DEBAJO del baseline (corrige defectos 1–4).
3. En ambas variantes, posicionar las cadenas de modo que la `s` caída de los cuatro renglones caiga en la misma columna vertical (corrige defecto 9); evitar `s` caídas adicionales no alineadas (defecto 10).
4. Regenerar ES y EN juntas con idéntica geometría de tiras; sólo el texto legible debe diferir entre variantes (F6, hoja:56).

## Hallazgos de auditoría 2026-09-19 — regeneración Lote I (RAW)

**Veredicto: NO CUMPLE** (F2/F1: palabras partidas alrededor de una `S` capital apilada; la `s` minúscula sí cae, no está invertida). Corregidos los MAYOR previos (ES sin escalera, tablero con mazo, `s` invertida/ausente, gemelos distintos). Archivos: `tools/raw/case5/plate_cuatro_renglones.jpg` y `plate_cuatro_renglones_en.jpg` (1280×720, 3 intentos ES / 1 EN).

### Cumple

- Exactamente cuatro tiras en **escalera** sobre fondo crema plano, sin tablero de madera, mazo, tintero ni placa (F1, F5; recortes de tira 1–4). Gemelos ES/EN de la misma geometría (F6).
- Un renglón mecanografiado por tira; las cuatro `s` de comparación cuelgan **media línea por debajo** (no superíndice invertido) y caen en la **misma vertical** (F1 hechos 2–3; F4 “la `s`, media línea abajo”).
- Sin personajes, máquina, fechas de calendario, flechas ni conclusión impresa (F1 AUSENTE). ES sin inglés, EN sin español (F2 AUSENTE).

### Defectos confirmados

- **[MAYOR / MALFORMADO]** (F2; hoja:26) — La `s` de comparación se pinta como glifo apilado `S/s` separado de la palabra: ES `ocieedad` / `S ervicio` / `S e ruega` / `e s mecanografia`; EN `ociety` / `ervice` / `eventeen` / `ample`. El renglón deja de leerse como una palabra entera (`sociedad`, `society`).
- **[MEDIO / CONTRADICE]** (F1 hecho 3) — La `S` de arriba del glifo es capital, no minúscula; el contrato pide `s` minúscula caída.

### Correcciones de auditoría

- ~~ES tiras paralelas, no escalera~~ — [x] RETIRADO POR REVISIÓN (2026-09-19, Lote I).
- ~~ES tablero con mazo / tintero / placa~~ — [x] RETIRADO POR REVISIÓN: fondo crema plano compartido con EN.
- ~~ES renglones 1–2 sin `s`; renglón 3 normal; renglón 4 `s` invertida~~ — [x] RETIRADO POR REVISIÓN: las cuatro `s` cuelgan debajo, no arriba.
- ~~Gemelos de encuadre distinto~~ — [x] RETIRADO POR REVISIÓN.

### Recomendación (si hay otra pasada)

1. Palabras enteras (`sociedad`, `servicio`, `se ruega`, `se mecanografia` / `society`, `service`, `seventeen`, `sample`) con la `s` inicial minúscula caída bajo su hueco, sin `S` capital ni espacio.

## Hallazgos de auditoría 2026-09-19 — pasada s caída (RAW)

**Veredicto: CUMPLE** (F1/F2: `s` intramisyllabic, palabras no partidas por `S/s` capital, caída hacia abajo no invertida). Archivos: `tools/raw/case5/plate_cuatro_renglones.jpg` y `plate_cuatro_renglones_en.jpg`.

### Cumple

- ES: cuatro tiras, un renglón cada una: `disuelta` / `visado` / `meses` / `pesas` con la `s` de la tercera letra en el hueco de la sílaba, media línea abajo, misma vertical (recorte de las cuatro tiras). Fondo crema, sin mazo.
- EN: escalera gemela: `dissolved` / `visible` / `cases` / `lists` con la misma mecánica (la `s` sale de la línea base y se sienta en el hueco; no hay `ociety`).
- Sin conclusión impresa, sin inglés en ES ni español en EN (F2 AUSENTE).

### Defectos confirmados

- **[MENOR / DRIFT]** (F6) — ES apila las tiras con poco desplazamiento; EN conserva más escalera. La `s` comparada sigue en la misma columna.
- **[MENOR / MALFORMADO]** (F2 EN) — Espacio extra alrededor de la `s` caída (`di  olved`, `vi ible`); la palabra se lee igual.

### Correcciones de auditoría

- ~~Palabras partidas `ocieedad` / `ociety` y glifo `S/s` capital~~ — [x] RETIRADO POR REVISIÓN (2026-09-19, pasada s caída).
