# plate_anatomia_ficha — hoja de hechos

Clase: `plate`. Espec: §23.0, §7.1–§7.3, §23.4 (L4) y §24. Guion directo: `src/case/case5/Private/despacho_berrondo_talks.ts:45-48`; variante EN equivalente en `despacho_berrondo_talks_en.ts:46-49`. No existe variante `_en`: la imagen es compartida entre ES/EN y sólo cambia la narración.

## Mapa semántico y alcance

Lámina didáctica a pantalla completa en el despacho de Berrondo, durante el Día 2, después de que Berrondo muestra una tarjeta en blanco del cedulario. Representa la anatomía funcional de una tarjeta de cedulario de formato único desde 1956, no una ficha concreta de una familia ni una prueba del Acta. La tarjeta ampliada debe mostrar seis campos vacíos mediante llaves tipográficas; el sexto, situado abajo, se entiende como el estado de la puerta y se dibuja como una puerta con su chapa.

Alias seguidos: `tarjeta de cedulario`, `cedulario`, `tarjeta en blanco`, `card-file card`, `card file`, `estado de la puerta`, `chapa`, `puerta`.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Una tarjeta de cedulario ampliada, de formato único, presentada como esquema/ilustración didáctica y no como fotografía pericial (§23.4; `docs/specs/case-5-el-tomo-trece.md:4070-4079`).
- [ ] `PINTAR` — Exactamente seis campos vacíos, cada uno señalado por una llave tipográfica; no rellenarlos con respuestas, nombres, cifras ni escritura mecanografiada (§23.4; `docs/specs/case-5-el-tomo-trece.md:4079`).
- [ ] `PINTAR` — El sexto campo ocupa la parte inferior de la tarjeta y se representa con una puerta y su chapa, porque registra el estado de la puerta (§23.4; `docs/specs/case-5-el-tomo-trece.md:4079`; `src/case/case5/Private/despacho_berrondo_talks.ts:47-50`).
- [ ] `NO CONTRADECIR` — La estructura de los seis campos corresponde a: domicilio; ingreso declarado por el jefe de familia; objetos de valor declarados; puntualidad de pago; observaciones del vendedor; y estado de la puerta (§12.3, bloque L4; `despacho_berrondo_talks.ts:45-48`). La placa no necesita imprimir esos nombres: los explica el narrador.
- [ ] `NO CONTRADECIR` — La tarjeta pertenece al cedulario de una empresa de crédito a domicilio y sirve para decidir si había que volver o si se podía dejar el tomo dentro (`despacho_berrondo_talks.ts:49-56`; `despacho_berrondo_talks_en.ts:50-57`). No convertirla en formulario moderno, contrato, expediente judicial o tarjeta de identidad.
- [ ] `AUSENTE` — Personajes, despacho de Berrondo, muebles, huacales, tomos, sobres, fragmentos rotos, fotografías, flechas, círculos, realces de color o cualquier objeto ajeno a la tarjeta didáctica (§7.3; §23.4).

### F2 Texto en imagen

- [ ] `AUSENTE` — Todo texto legible dentro de la placa: encabezados, etiquetas de campos, respuestas, nombres, domicilios, fechas, números, membretes, marcas de empresa y rótulos explicativos (§23.4; `docs/specs/case-5-el-tomo-trece.md:4072-4079`). La narración es la que lee la lámina.
- [ ] `NO CONTRADECIR` — Las llaves tipográficas son señalización gráfica de los seis campos, no texto localizado ni líneas de formulario que deban contener palabras.
- [ ] `NO CONTRADECIR` — No aplicar aquí la regla de conservar una `s` minúscula visible en documentos traducidos: esta lámina no contiene texto legible y no es una lámina cuestionada (§23.3, `docs/specs/case-5-el-tomo-trece.md:4064-4068`).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — “Desde 1956” es un dato de la narración, no una fecha que deba imprimirse en la imagen (`docs/specs/case-5-el-tomo-trece.md:1581`; `despacho_berrondo_talks.ts:45`; variante EN `despacho_berrondo_talks_en.ts:46`).
- [ ] `NO CONTRADECIR` — La escala conceptual posterior es de 11,400 tarjetas en el diálogo y de 11,407 tarjetas físicas en el catálogo; la placa no imprime ninguna cifra y no debe resolver esa diferencia visualmente (`despacho_berrondo_talks.ts:41`; `src/state/Private/EvidenceCatalogCase5EsB.ts:45-48`; EN `despacho_berrondo_talks_en.ts:42`, `EvidenceCatalogCase5EnB.ts:45-47`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — La lámina aparece cuando Berrondo entrega una tarjeta en blanco y dice que todas son iguales; la imagen debe ser una tarjeta vacía, no la `ficha_domicilio` de Don Ramón ni la ficha vendida del Caso 1 (`despacho_berrondo_talks.ts:43-45`; variante EN `despacho_berrondo_talks_en.ts:44-46`).
- [ ] `NO CONTRADECIR` — Las cuatro líneas de NARRADOR que permanecen sobre la placa explican, en orden: formato único y llenado a máquina; domicilio/ingreso/objetos de valor; puntualidad/observaciones/estado de la puerta; y el uso práctico del sexto campo (`despacho_berrondo_talks.ts:45-48`; EN `despacho_berrondo_talks_en.ts:46-49`).
- [ ] `NO CONTRADECIR` — Al terminar la cuarta línea, la cámara vuelve al despacho con `bg_despacho_berrondo` antes de que Chapulín pregunte por el estado de la puerta (`despacho_berrondo_talks.ts:49`; EN `despacho_berrondo_talks_en.ts:50`). La placa no debe incluir el despacho como fondo ni personajes superpuestos.
- [ ] `NO CONTRADECIR` — El diálogo posterior llama al sexto campo “la chapa” y distingue si estaba buena, vencida o se empujaba; esas respuestas pertenecen a la conversación posterior y no deben aparecer impresas en la tarjeta vacía (`despacho_berrondo_talks.ts:50-53`; EN `despacho_berrondo_talks_en.ts:51-54`).
- [ ] `NO CONTRADECIR` — La lámina explica y no demuestra: no entrega pruebas, no muestra la tarjeta concreta del clímax y no debe incluir la respuesta posterior “chapa vencida. Se empuja” (§7.2; §21, referencia del campo «estado de la puerta»; `docs/specs/case-5-el-tomo-trece.md:3891`).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA/Nintendo DS) en alta definición; cel-shading de colores planos con terminador de sombra duro, dos tonos por superficie y ; contorno carbón `#1A1A1A` nítido y continuo, más grueso en la silueta exterior; anatomía expresiva cuando aplique; colores primarios saturados.
- [ ] `PINTAR` — Registro de lámina ilustrativa didáctica, plana, con fondo crema de papel y trazo de manual escolar mexicano de los años setenta (§23.4; `docs/specs/case-5-el-tomo-trece.md:4070-4079`). Papel y esquema deben leerse con claridad; no tratar la tarjeta como objeto fotográfico.
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano de superhéroes, marcas de agua, texto en inglés dentro de la imagen y cualquier tono rosa o magenta en primer plano (§23.0; `docs/specs/case-5-el-tomo-trece.md:3974-3980`).

### F6 Localización

- [ ] `NO CONTRADECIR` — ES y EN usan exactamente `assets/plate_anatomia_ficha.webp`; no existe `plate_anatomia_ficha_en.webp` porque la imagen no contiene texto legible (`despacho_berrondo_talks.ts:10,45-48`; `despacho_berrondo_talks_en.ts:11,46-49`; §23.4).
- [ ] `NO CONTRADECIR` — Composición, seis campos, llaves tipográficas, puerta/chapa del sexto campo, fondo crema y estilo permanecen idénticos entre idiomas; sólo cambia la narración EN/ES.

## Consistencia (regenerar juntos)

- `bg_despacho_berrondo` — comparte la cámara y la continuidad del despacho antes y después de L4. Regenerar juntos para conservar la escala material del papel y la transición de regreso; este activo no es fuente de verdad de la placa.
- `plate_masa_concursal` — comparte el registro de lámina didáctica, fondo crema y manual escolar de los setenta en el mismo bloque de investigación. Regenerar juntos por estilo; esta placa no es fuente de verdad de la otra.
- `ficha_domicilio` / `examine_ficha_domicilio` — comparte la familia material de tarjetas del cedulario y la división funcional del campo de puerta. Regenerar juntos para que la anatomía de seis campos siga siendo reconocible; la tarjeta concreta y sus respuestas no son fuente de verdad de esta placa.
- `examine_expediente_serie` (panel B) — comparte la familia de fichas mecanografiadas y el contexto de las tarjetas vendidas, pero el panel B tiene seis renglones con contenido legible. Regenerar juntos sólo por continuidad de familia; este activo no es fuente de verdad de la placa vacía.
- `examine_maquina` — comparte la procedencia “llenado a máquina” y el defecto de la `s` minúscula en otros documentos, pero la placa L4 no contiene texto ni debe heredar el defecto visible. Regenerar juntos sólo para continuidad material; este activo no es fuente de verdad de la placa.
- `fichero_cedulario` — comparte el sistema de 11,400/11,407 tarjetas, nueve cajones, orden por calle y los campos funcionales del cedulario. Regenerar juntos para continuidad semántica; el catálogo no dicta la composición visual de la lámina.
- `plate_cuatro_renglones` — comparte el registro de placa explicativa y el tema documental, pero no el contenido: L9 sí tiene texto legible y variante EN; L4 debe permanecer sin texto. Regenerar juntos por estilo únicamente; este activo no es fuente de verdad de éste.

## Conflictos abiertos

- El diálogo de investigación dice “once mil cuatrocientas tarjetas” (`despacho_berrondo_talks.ts:41`; EN:42), mientras el catálogo describe 11,407 tarjetas físicas (`EvidenceCatalogCase5EsB.ts:45-48`; EN:45-47). La discrepancia no cambia esta placa porque sus seis campos están vacíos y ninguna cifra debe imprimirse; queda registrada sin resolver aquí.
- El catálogo enumera cinco categorías funcionales en cada tarjeta (domicilio, ingreso, objetos de valor, puntualidad y estado de la chapa), mientras el bloque L4 desglosa seis campos al añadir “observaciones del vendedor” (`EvidenceCatalogCase5EsB.ts:47`; `despacho_berrondo_talks.ts:45-48`). La placa sigue el contrato explícito de L4: seis campos, sin texto; resolver la taxonomía del catálogo pertenece al spec.

## Hallazgos de auditoría 2026-09-19

**VEREDICTO: NO CUMPLE** — en contenido (F1) y en texto en imagen (F2). El estilo (F5), las cifras (F3) y la localización (F6) sí cumplen. La imagen no es la lámina pedida: es un diagrama de ferretería con rótulos legibles, no la anatomía de una tarjeta de cedulario con seis campos vacíos.

### Cumple

- ✓ F5 — Fondo crema de papel, colores planos, contorno carbón continuo, registro plano de lámina didáctica; sin fotorrealismo, , sin magenta, sin marca de agua, sin texto en inglés (`plate_anatomia_ficha.webp`, inspección completa a 960×540).
- ✓ F3 — No hay cifras, fechas ni horas impresas en ninguna zona ("1956" y "11,400/11,407" no aparecen; recorte del panel central `temp_audit_anatomia/c4_panel.png` limpio).
- ✓ F1 (literal) — El sexto campo se dibuja como puerta con su chapa en la parte inferior: recorte `c5_door.png` muestra puerta de madera con bisagras de latón y chapa con perilla; sin embargo, al faltar los seis campos no puede leerse como "sexto campo" de la tarjeta (ver defecto 2).
- ✓ F1/F4 (parcial) — Sin personajes, sin despacho de fondo, sin tomos ni fotografías; el panel central está vacío, sin respuestas ni escritura mecanografiada dentro del campo (`c4_panel.png`).
- ✓ F6 — No existe `plate_anatomia_ficha_en.webp` en `assets/` (listado verificado); composición compartida ES/EN posible porque el texto no depende del idioma… salvo que el texto presente (defecto 1) está en español, lo que rompería la reutilización EN si se conservara.
- ✓ F2 (parcial) — Las señales gráficas de campos no son líneas de formulario; pero véase defecto 1: son rótulos con palabras.

### Defectos confirmados

1. **MAYOR / CONTRADICE — F2** (`plate_anatomia_ficha.md:24`): seis etiquetas legibles impresas —"PAPEL", "EXPEDIENTE", "LISTÓN", "MADERA", "LATÓN", "LUZ DE TUNGSTENO"— (`temp_audit_anatomia/c1_signs.png`). La hoja exige `AUSENTE` de "todo texto legible: encabezados, etiquetas de campos, rótulos explicativos" (`docs/specs/case-5-el-tomo-trece.md:4072-4079`). Rompe el contrato de `src/case/case5/Private/despacho_berrondo_talks.ts:45-48`: la narración es la que nombra los campos; además el texto en español invalida la imagen compartida ES/EN (F6, `plate_anatomia_ficha.md:49-50`).
2. **MAYOR / CONTRADICE — F1** (`plate_anatomia_ficha.md:16`): no hay "exactamente seis campos vacíos, cada uno señalado por una llave tipográfica". En su lugar hay UN solo panel vacío rectangular con UNA llave curva inferior (`c4_panel.png`, `full.png`). Las "seis señales" se materializaron como rótulos colgantes con nombres de materiales, que además rellenan los campos con contenido semántico contrario a la prohibición de `plate_anatomia_ficha.md:16`. Rompe `despacho_berrondo_talks.ts:45-48` (las cuatro líneas NARRADOR recorren domicilio/ingreso/objetos/puntualidad/observaciones/puerta sobre seis campos).
3. **MAYOR / CONTRADICE — F1** (`plate_anatomia_ficha.md:15`): no aparece una "tarjeta de cedulario ampliada" con su anatomía de seis campos; la composición (rótulos de materiales + panel + puerta + bisagra) se lee como diagrama de materiales/ferretería, no como tarjeta del cedulario. Contradice además el `NO CONTRADECIR` de `plate_anatomia_ficha.md:19` (no convertirla en otra cosa).
4. **MAYOR / CONTRADICE — F1 exclusiones** (`plate_anatomia_ficha.md:20`): pila de papeles/expedientes atada con moño en la esquina superior derecha (`c3_papers.png`) — objeto ajeno explícitamente excluido ("sobres", "cualquier objeto ajeno").
5. **MEDIO / CONTRADICE — F1 exclusiones** (`plate_anatomia_ficha.md:20`): bisagra metálica de latón montada en la esquina superior izquierda (`c2_hinge.png`) — pieza de ferretería ajena a la tarjeta didáctica.
6. **MEDIO / CONTRADICE — F1 exclusiones** (`plate_anatomia_ficha.md:20`): dos muebles de madera (muebles bajos con paneles) invaden las esquinas inferiores izquierda y derecha (`c6_furnL.png`, `c7_furnR.png`) — "muebles" están en la lista de exclusiones §7.3/§23.4.

### Correcciones de auditoría

- ~~Hallazgos de auditoría 2026-09-19 — "No se inspeccionó ninguna imagen, por instrucción del encargo…"~~ Reemplazado en esta pasada: la pasada anterior no ejecutó pruebas; esta auditoría del 2026-09-19 sí inspeccionó `assets/plate_anatomia_ficha.webp` (conversión a PNG + 7 recortes) y confirma los indicios preliminares de texto legible, muebles y objetos extra.

### Recomendación (regeneración)

1. Eliminar todo texto legible: los seis rótulos "PAPEL/EXPEDIENTE/LISTÓN/MADERA/LATÓN/LUZ DE TUNGSTENO" no deben existir; la lámina no contiene ninguna palabra (§23.4).
2. Redibujar la tarjeta como UNA tarjeta de cedulario ampliada (rectángulo con esquinas y borde de tarjeta, no diagrama de pared) con EXACTAMENTE seis campos vacíos, cada uno señalado por una llave tipográfica `}` hacia el campo; campos en blanco, sin nombres, cifras ni relleno.
3. El sexto campo, abajo, se dibuja como puerta con su chapa — conservar la puerta con chapa actual como icono del sexto campo, integrada a la tarjeta, no como puerta exenta bajo el panel.
4. Eliminar los objetos ajenos: pila de papeles con moño (sup. der.), bisagra de latón (sup. izq.) y los dos muebles de madera (esquinas inferiores). Fondo crema liso, sólo la tarjeta.
5. Mantener el estilo actual (F5 ✓): crema, colores planos, contorno carbón, registro de manual escolar mexicano de los setenta; sin magenta ni fotorealismo.
6. Sin variante `_en` (correcto hoy); al regenerar sin texto, la imagen compartida ES/EN queda válida.

## Hallazgos de auditoría 2026-09-19 (regeneración Lote E)

**Veredicto: CUMPLE** en contenido (F1), texto (F2), cifras (F3), contrato (F4), estilo (F5) y localización (F6). RAW: `tools/raw/case5/plate_anatomia_ficha.jpg` (1280×720). Recortes: tarjeta completa, cinco campos superiores, puerta/chapa, llaves tipográficas, esquinas de exclusión.

### Cumple

- ✓ F1 — Una tarjeta de cedulario ampliada, rectángulo con borde doble sobre fondo crema (recorte `ficha_card`). Prueba de nombrar: «ficha/formulario en blanco», no diagrama de ferretería.
- ✓ F1 — Exactamente **seis** campos vacíos, cada uno con su llave tipográfica `}` a la derecha (recorte `ficha_braces`: seis llaves; recorte `ficha_five_fields` + `ficha_door`). Campos 1–5 en blanco, sin nombres ni cifras.
- ✓ F1 — El sexto campo, abajo, es una puerta de madera con chapa/pestillo, integrada a la tarjeta.
- ✓ F2 — Cero texto legible: sin «PAPEL/EXPEDIENTE/LISTÓN/MADERA/LATÓN/LUZ DE TUNGSTENO» (pasada completa + recortes de exclusión `ficha_tr` / `ficha_tl`).
- ✓ F1 exclusiones — Sin pila de papeles atada, sin bisagra de pared, sin muebles en las esquinas. Sólo la tarjeta sobre crema.
- ✓ F5 — Fondo crema, contorno carbón, trazo de manual escolar; sin magenta ni fotorrealismo.
- ✓ F6 — Sin `plate_anatomia_ficha_en`; imagen muda reutilizable.

### Defectos confirmados

Ninguno bloqueante. Matiz no defectuoso: varios de los cinco campos superiores llevan una raya interior de renglón; siguen siendo un campo por llave, no campos extra.

### Correcciones de auditoría

- ~~MAYOR F2 — seis rótulos PAPEL/EXPEDIENTE/…~~ — [x] RETIRADO POR REGENERACIÓN (Lote E).
- ~~MAYOR F1 — un panel y una llave en vez de seis campos~~ — [x] RETIRADO: seis campos + seis `}`.
- ~~MAYOR F1 — diagrama de ferretería~~ — [x] RETIRADO: tarjeta de cedulario.
- ~~MAYOR F1 — pila de papeles con moño~~ — [x] RETIRADO.
- ~~MEDIO F1 — bisagra y muebles de esquina~~ — [x] RETIRADO.
- No se ejecutó `process_case5_assets.py`.
