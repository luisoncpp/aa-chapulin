# examine_credencial — hoja de hechos

Clase: `examine`. Espec: §23.0, §23.3, §4.1, §4.2 y §24. Guion: D2 despacho de Berrondo, D3-T3 presión 2, D4-T1 presión 2, clímax E2. Variantes cubiertas: `examine_credencial.webp` y `examine_credencial_en.webp`.

## Mapa semántico

- Copia certificada de la credencial de cartulina de Fulgencio Berrondo, síndico de la quiebra 114/1971, entregada por él en su despacho durante el día 2.
- Credencial expedida por un juez del Juzgado Séptimo; no es el gafete de visita que Berrondo devuelve en la ventanilla profesional.
- Frente: fotografía en blanco y negro del propio Berrondo, hombre mayor de traje oscuro y lentes de media luna; sello seco del Juzgado Séptimo; tres renglones impresos que conceden vigencia, ausencia de límite horario y acceso al depósito.
- Reverso: firma del juez expedidor fechada en 1971.
- La imagen es una copia certificada examinable en dos vistas, no una fotografía del despacho ni una escena del sótano.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Dos vistas de una copia certificada de credencial de cartulina: frente y reverso (§23.3, línea 4053; `src/state/Private/EvidenceCatalogCase5EsB.ts:10-15`; `src/state/Private/EvidenceCatalogCase5EnB.ts:10-15`).
- [ ] `PINTAR` — En el frente, fotografía en blanco y negro de un hombre mayor con traje oscuro y lentes de media luna (§23.3, línea 4053; catálogos ES/EN citados arriba).
- [ ] `PINTAR` — Sello seco en relieve del Juzgado Séptimo (§23.3, línea 4053; §10.1, línea 1518).
- [ ] `PINTAR` — Tres renglones impresos legibles, separados como líneas de la credencial, no como texto de un pie de lámina (§23.3, línea 4053; §18.2, líneas 3334-3336).
- [ ] `PINTAR` — En el reverso, firma del juez que la expidió en 1971 (§23.3, línea 4053; §10.1, línea 1518).
- [ ] `AUSENTE` — No mostrar el gafete de visita de latón, el depósito, el despacho completo, el huacal, el pasillo 7 ni personajes adicionales: el activo es la copia certificada, no una reconstrucción del argumento (§23.3, línea 4053; D3-T3, `src/case/case5/Private/trial_day3_t3.ts:42-46`; clímax E2, `src/case/case5/Private/climax_stage2.ts:17-25`).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — Variante ES, primer renglón: «Vigente hasta la conclusión del concurso» (§23.3, línea 4053; catálogo ES, `src/state/Private/EvidenceCatalogCase5EsB.ts:12`).
- [ ] `TEXTO EXACTO` — Variante ES, segundo renglón: «Sin límite de horario» (§23.3, línea 4053; catálogo ES, `src/state/Private/EvidenceCatalogCase5EsB.ts:12`).
- [ ] `TEXTO EXACTO` — Variante ES, tercer renglón: «Acceso al depósito de bienes de la masa» (§23.3, línea 4053; catálogo ES, `src/state/Private/EvidenceCatalogCase5EsB.ts:12`).
- [ ] `TEXTO EXACTO` — La variante EN debe traducir esos tres renglones a «Valid until conclusion of the bankruptcy.», «No hour limit.», «Access to the estate goods deposit.»; deben coincidir con el catálogo inglés y con la lectura del clímax (§23.3, línea 4064; catálogo EN, `src/state/Private/EvidenceCatalogCase5EnB.ts:12`; `src/case/case5/Private/climax_stage2_en.ts:17-23`).
- [ ] `PINTAR` — El frente identifica a Fulgencio Berrondo como síndico de la quiebra 114/1971, pero el spec no exige que ese encabezado completo sea legible como uno de los tres renglones; no inventar texto adicional legible (§10.1, línea 1518; catálogo ES/EN, `src/state/Private/EvidenceCatalogCase5EsB.ts:10-15`, `src/state/Private/EvidenceCatalogCase5EnB.ts:10-15`).
- [ ] `AUSENTE` — No imprimir en la credencial flechas, círculos, realces, una explicación de la deducción ni un pie que comente los tres renglones; el spec ordena expresamente que el pie no los comente (§10.1, línea 1518; §23.0, líneas 3974-3980).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La credencial pertenece a la quiebra 114/1971 y la firma del reverso corresponde a 1971 (§10.1, línea 1518; §23.3, línea 4053; catálogo ES/EN).
- [ ] `NO CONTRADECIR` — «Vigente hasta la conclusión del concurso» significa que no caduca mientras el concurso siga abierto; no convertirlo en una vigencia diaria o temporal (§1.1, línea 197; catálogo ES/EN; clímax E2).
- [ ] `NO CONTRADECIR` — «Sin límite de horario» autoriza la permanencia del síndico a cualquier hora, pero no imprime una hora concreta ni prueba por sí sola que Berrondo se quedara o saliera el 4 de diciembre (§24.A A1; §24.C F3; `src/case/case5/Private/trial_day4_success.ts:68-74`).
- [ ] `NO CONTRADECIR` — La credencial abre el depósito de bienes de la masa; el gafete sólo habilita las salas de lectura del primer piso (§1.1, línea 197; D3-T3, `src/case/case5/Private/trial_day3_t3.ts:42-46`; D4-T1, `src/case/case5/Private/trial_day4_t1.ts:71-78`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En el D2 despacho, Berrondo entrega una copia certificada que tenía preparada desde hace años; la vista debe sostener que es una copia entregable, no un documento único imposible de separar de su vitrina (`src/case/case5/Private/despacho_berrondo_hotspots.ts:20-22`; EN: `despacho_berrondo_hotspots_en.ts:21-23`).
- [ ] `PINTAR` — D3-T3 establece que la credencial es del concurso, la dio un juez y es la que abre el sótano; el activo no puede hacerla parecer equivalente al gafete del Archivo (`src/case/case5/Private/trial_day3_t3.ts:42-46`; EN equivalente en `trial_day3_t3_en.ts`).
- [ ] `PINTAR` — En D4-T1, Genoveva precisa que el sótano se abre con credencial y que la credencial de síndico la expide un juez y se la queda él; la imagen debe ser compatible con una autorización personal del síndico, no con un pase que conserva la ventanilla (`src/case/case5/Private/trial_day4_t1.ts:71-78`; EN equivalente en `trial_day4_t1_en.ts`).
- [ ] `PINTAR` — En el clímax E2, la defensa presenta esta prueba y la corte lee los tres renglones uno por uno; cada línea debe poder leerse en la lámina, sin depender del pie de imagen (`src/case/case5/Private/climax_stage2.ts:17-25`; EN: `climax_stage2_en.ts:17-23`).
- [ ] `NO CONTRADECIR` — El clímax sólo prueba que Berrondo podía permanecer en el sótano, no que efectivamente se quedara, saliera o subiera al pasillo 7; la lámina no debe mostrar una ruta ni una presencia física no contenida en el documento (`src/case/case5/Private/climax_stage2.ts:26-30`; §24.C F3).
- [ ] `NO CONTRADECIR` — El permiso puede durar toda la noche, pero Berrondo declara que no se quedó; no transformar la autorización en una afirmación de conducta (§18.2, líneas 3344-3360; `src/case/case5/Private/climax_stage2.ts:26-30`).

### F5 Estilo

- [ ] `PINTAR` — Repetir completo el contrato obligatorio de §23.0 en el prompt: ilustración 2D estilo Capcom Ace Attorney de linaje GBA/Nintendo DS; cel-shading plano con terminador duro y dos tonos por superficie; contorno carbón `#1A1A1A`; registro mexicano setentero/Chespirito; papel, madera, polvo, latón envejecido y luz de tungsteno (§23.0, líneas 3974-3978).
- [ ] `AUSENTE` — Prohibidos fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto inglés en ES y cualquier rosa o magenta en primer plano (§23.0, líneas 3978-3980).
- [ ] `AUSENTE` — No usar flechas, círculos ni realces de color para dirigir la respuesta; el texto debe ser legible por su composición, no por anotaciones (§23.0; §23.3, línea 4054 como regla de láminas; el contrato E2 exige lectura, no marcación).

### F6 Localización

- [ ] `PINTAR` — ES y EN son gemelas de composición: misma credencial, fotografía, sello seco, dos vistas, firma de 1971, posición de los renglones y marcas físicas; sólo cambia el texto legible (§23.3, líneas 4064-4066).
- [ ] `TEXTO EXACTO` — ES usa las tres frases del catálogo español; EN usa las tres frases del catálogo inglés y las frases leídas en `climax_stage2_en.ts` (§23.3, línea 4064; catálogos ES/EN; scripts de clímax ES/EN).
- [ ] `NO CONTRADECIR` — La regla de la `s` minúscula caída aplica a láminas traducidas que imprimen documentos cuestionados; no se exige introducir artificialmente ese defecto en esta credencial, cuyos tres renglones deben seguir el texto localizado del catálogo (§23.3, líneas 4064-4068).

## Consistencia (regenerar juntos)

- `examine_credencial_en` — gemela localizada: comparte encuadre, cartulina, fotografía, sello, reverso, firma, fechas y geometría; sólo cambia el texto legible. Regenerar juntas; este activo no es fuente de verdad del otro.
- `credencial_sindico` — icono del Acta: debe representar la misma identidad física que el `detailedView` y conservar la lectura visual de una credencial de síndico, no la del gafete de visita (§23.5, líneas 4086-4090; catálogos ES/EN). Regenerar juntos; este activo no es fuente de verdad del otro.
- `bg_despacho_berrondo` — comparte el marco con una credencial en la vitrina y el contexto donde Berrondo entrega la copia; el fondo fija la existencia del marco, mientras esta lámina fija el documento legible (§23.1, línea 3989; `despacho_berrondo_hotspots.ts:14-22`). Regenerar juntos; este activo no es fuente de verdad del otro.
- `berrondo_idle` y poses de Berrondo — comparten la identidad del hombre de setenta y un años: lentes de media luna dorados, traje negro de tres piezas, leontina y tomo; la fotografía debe ser compatible con ese Berrondo sin copiar la pose ni convertir el documento en sprite (§23.2, líneas 3997-4008). Regenerar juntos; este activo no es fuente de verdad del otro.
- `examine_libro_peritos` — comparte por contraste la distinción entre credencial de síndico y gafete de visita y la terminología de entrada/devolución; no debe aportar sus columnas ni sus horas a esta placa (§23.3, línea 4050; D4-T1, `trial_day4_t1.ts:68-78`). Regenerar juntos para comprobar que no se intercambien identidades; este activo no es fuente de verdad del otro.

## Conflictos abiertos

- El catálogo español llama al primer renglón «Vigente hasta la conclusión del concurso», mientras el catálogo inglés lo traduce «Valid until the proceeding concludes» y el clímax inglés usa «Valid until conclusion of the bankruptcy» (`EvidenceCatalogCase5EnB.ts:12`, `climax_stage2_en.ts:19`). No resolver aquí: la variante EN debe seguir la cadena que el proyecto decida canonizar; la placa ES permanece fijada por §23.3.
- La narración de §10.1 dice que Berrondo «se la queda» y el guion de clímax trata la credencial como el permiso que le permitiría permanecer, pero §24.A/F3 separa autorización de presencia efectiva. No es un conflicto gráfico: la lámina debe mostrar la autorización y no afirmar que Berrondo la usó en un momento concreto.

## Hallazgos de auditoría 2026-09-19

**Veredicto: NO CUMPLE** en contenido (F1/F2/F4), localización (F6) y consistencia (gemelas); estilo (F5) con matices sin bloqueo directo.

**Cumple**
- ✓ Dos vistas de la credencial de cartulina, frente y reverso (F1-1, ES y EN).
- ✓ ES: los tres renglones exactos del catálogo español: «Vigente hasta la conclusión del concurso» / «Sin límite de horario» / «Acceso al depósito de bienes de la masa», separados como renglones con filete, legibles (F2-1/2/3; `climax_stage2.ts:19-21`).
- ✓ Reverso ES fechado 1971 (F1-5; F3-1).
- ✓ Exclusiones: sin gafete de latón, sin depósito, sin despacho, sin huacal, sin pasillo 7, sin personajes (F1-6). Sin flechas, círculos ni realces; sin rosa/magenta (F2-6, F5-3).
- ✓ Lámina legible sin pie que comente los renglones (F4-4).

**Defectos confirmados**
- CONTRADICE — MAYOR — F4/F1-5: el reverso ES atribuye la firma a «SECRETARIO DE ACUERDOS», no al juez expedidor; el clímax exige «Lo firmó un juez… en 1971» (`climax_stage2.ts:22`, `climax_stage2_en.ts:22`; D4-T1, `trial_day4_t1.ts:71-78`).
- CONTRADICE — MEDIO — F2-4/F6-2 (EN): primer renglón «Valid until the proceeding concludes» y segundo «No time limit» no coinciden con la cadena del clímax exigida por F2 («Valid until conclusion of the bankruptcy.», «No hour limit.», `climax_stage2_en.ts:19-20`; coinciden con `EvidenceCatalogCase5EnB.ts:12`). Cae bajo el conflicto abierto 1: decidir la cadena y regenerar (hoy F2 fija la del clímax).
- CONTRADICE — MEDIO — F6-1/F2-5: la variante EN conserva media credencial en español («SÍNDICO», «CREDENCIAL CERTIFICADA», «COPIA CERTIFICADA», «REVERSO», «Lic. Juez», «SELLO SECO», «Juez de lo Familiar»): el texto no localizado «resuelve» la traducción a medias y duplica términos («CREDENCIAL CERTIFICADA» + «COPIA CERTIFICADA»).
- CONTRADICE — MEDIO — F1-2: la fotografía muestra lentes redondos de aro completo, no lentes de media luna (catálogo ES/EN:15 y caption; consistencia con `berrondo_idle`, lentes de media luna dorados).
- CONTRADICE — MEDIO — F1-3: el sello seco en relieve no existe como relieve: ES lo pinta como estampado de tinta plana más un sello de lacre rojo con cintas (elemento no pedido); EN lo pinta dorado con la palabra «SELLO SECO» impresa sobre el sello (rotulación meta).
- CONTRADICE — MEDIO — F2-5: el frente no identifica a Fulgencio Berrondo como síndico de la quiebra 114/1971 (no hay nombre ni número de quiebra); en su lugar inventa encabezado legible («REPÚBLICA MEXICANA / PODER JUDICIAL DE LA FEDERACIÓN / CREDENCIAL DE CARTULINA» en ES; «SÍNDICO / …» en EN) que además es texto meta («CREDENCIAL DE CARTULINA» no es rótulo diegético) contra el «no inventar texto adicional legible».
- CONTRADICE — MEDIO — F3/F4 (EN): el reverso EN imprime «Juez de lo Familiar», jurisdicción que contradice el Juzgado Séptimo de distrito del concurso 114/1971; además «Lic. Juez» es línea absurda.
- DRIFT — MEDIO — F6-1: las gemelas no comparten composición: encabezados, borde, tipo de sello, fotografía, caligrafía y distribución del reverso difieren entre ES y EN; las firmas inventadas tampoco coinciden (ES «Aureliano Gómez Pedraza», EN «Arturo Chavarría Gómez»). Debe regenerarse una sola geometría con texto traducido.
- MENOR — F2-6: rotulación meta «REVERSO» impresa como título en ambas variantes (texto no pedido).
- MENOR — F5-2 (matiz, decisión del revisor): fondos con degradados suaves/bokeh en los libros y superficie de madera, alejados del cel-shading plano con terminador duro de §23.0 (líneas 3974-3978 pegadas en hoja); la credencial misma está más cerca del contrato.

**Correcciones de auditoría**
- Reemplaza la pasada anterior que no inspeccionó imagen («No se inspeccionó ninguna imagen por protocolo de `asset-facts`»): auditoría visual ejecutada 2026-09-19 sobre recortes por sustantivo de `examine_credencial.png` y `examine_credencial_en.png` (encabezado, foto+sello, renglones, reverso, ambas variantes), contrastada con catálogos ES/EN y clímax E2.
- Traza de los ✓ de esa pasada: ~~«La hoja queda como contrato de aceptación derivado sólo del spec…»~~ — sustituido por esta sección; los ✓ listados arriba fueron verificados por recorte, no por presencia.

**Recomendación (orden del conjunto de consistencia)**
1. Rehacer ambas gemelas desde una sola composición compartida (F6): mismo encuadre, misma cartulina, misma fotografía, mismo sello, mismo reverso y misma firma; sólo cambia el texto legible.
2. Fotografía: hombre mayor, traje oscuro, lentes de media luna (apoyados en nariz), blanco y negro.
3. Sello seco del Juzgado Séptimo como relieve sin tinta (empapado, sin lacre, sin la palabra «SELLO SECO» impresa).
4. Reverso: firma manuscrita del juez expedidor fechada 1971, sin atribuirla al secretario de acuerdos y sin «Juez de lo Familiar» ni «Lic. Juez».
5. ES: encabezado mínimo que identifique a Fulgencio Berrondo, síndico, quiebra 114/1971; los tres renglones exactos del catálogo ES; cero texto adicional inventado o meta («CREDENCIAL DE CARTULINA», «REVERSO»).
6. EN: los tres renglones según la cadena canonizada (F2 fija «Valid until conclusion of the bankruptcy.», «No hour limit.», «Access to the estate goods deposit.»); todo el resto del texto impreso traducido, sin restos de español.
7. Estilo: endurecer cel-shading y terminador en fondos; eliminar degradados fotográficos.

## Hallazgos de auditoría 2026-09-19 (regeneración Lote E)

**Veredicto: CUMPLE** en los ejes bloqueantes de la pasada anterior (firma del juez, sello seco en relieve, cadena EN del clímax, sin español residual, gemelas). RAW: `tools/raw/case5/examine_credencial.jpg` y `tools/raw/case5/examine_credencial_en.jpg` (1280×720). Recortes: encabezado, foto, sello, renglones, reverso. Quedan dos defectos no bloqueantes (lentes; coma ES).

### Cumple

- ✓ F1 — Dos vistas de cartulina, frente izquierda / reverso derecha, misma geometría ES/EN (pasada completa).
- ✓ F1-3 — Sello seco como relieve ciego con balanza, sin tinta, sin lacre, sin la palabra «SELLO SECO» (recorte `v4_seal` / equivalente EN).
- ✓ F1-5 / F4 — Reverso firmado por el **juez** (`Luis M. de la Garza` + «Juez del Juzgado Séptimo, 1971» / EN «Judge of the Seventh Court, 1971»). No hay «SECRETARIO DE ACUERDOS», ni «Lic. Juez», ni «Juez de lo Familiar» (`climax_stage2.ts:22`).
- ✓ F2 ES — Encabezado mínimo «FULGENCIO BERRONDO / Síndico · Quiebra 114/1971»; los tres renglones del catálogo están presentes y legibles (recorte `v4_lines`).
- ✓ F2-4 / F6-2 EN — Cadena exacta del clímax (recorte `en_lines`): «Valid until conclusion of the bankruptcy.» / «No hour limit.» / «Access to the estate goods deposit.» (`climax_stage2_en.ts:19-21`).
- ✓ F6 — EN sin restos de español: «Syndic · Bankruptcy 114/1971»; reverso en inglés; misma foto, mismo sello, misma rúbrica (recortes `en_header`, `en_sig`).
- ✓ F1 exclusiones — Sin gafete de latón, sin despacho, sin huacal, sin flechas, sin magenta, sin rótulo «REVERSO».

### Defectos confirmados

- **CONTRADICE · MEDIO — F1-2:** la fotografía (ES y EN) muestra **lentes de aro completo redondos/dorados**, no lentes de media luna. Recorte `v4_glasses`: prueba de nombrar «gafas redondas de oro», no «media luna». Tres regeneraciones no movieron el aro superior. No rompe el clímax E2 (la corte lee los renglones, no la montura).
- **CONTRADICE · MENOR — F2 ES:** el primer renglón imprime una coma extra: «Vigente hasta la conclusión del concurso,» (recorte `v4_lines`). Las tres frases siguen siendo las del catálogo; el clímax ES cita sin coma (`climax_stage2.ts:19`).

### Correcciones de auditoría

- ~~CONTRADICE MAYOR — firma del SECRETARIO DE ACUERDOS~~ — [x] RETIRADO POR REGENERACIÓN (Lote E): firma del juez, 1971.
- ~~CONTRADICE MEDIO — cadena EN «proceeding concludes» / «No time limit»~~ — [x] RETIRADO: cadena del clímax.
- ~~CONTRADICE MEDIO — español residual en EN~~ — [x] RETIRADO.
- ~~CONTRADICE MEDIO — sello de lacre / «SELLO SECO» impreso~~ — [x] RETIRADO: relieve ciego.
- ~~CONTRADICE MEDIO — encabezado meta sin 114/1971~~ — [x] RETIRADO: Fulgencio Berrondo, síndico, 114/1971.
- ~~CONTRADICE MEDIO — Juez de lo Familiar / Lic. Juez~~ — [x] RETIRADO.
- ~~DRIFT MEDIO — gemelas de distinta geometría~~ — [x] RETIRADO: una sola composición, texto traducido.
- ~~MENOR — rótulo REVERSO~~ — [x] RETIRADO.
- Lentes de media luna: se intentó en las tres regeneraciones; el defecto MEDIO permanece.
- No se ejecutó `process_case5_assets.py`.
