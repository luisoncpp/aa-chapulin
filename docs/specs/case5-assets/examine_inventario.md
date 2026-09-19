# examine_inventario — hoja de hechos

Clase: `examine`. Espec: §23.0, §23.3, §5.2, §12.3, §15.2 y §24. Guion directo: investigación D2 `despacho_berrondo` y contradicción D3-T1; variantes ES/EN: `examine_inventario.webp` y `examine_inventario_en.webp` se auditan juntas.

Activo base: `examine_inventario.webp`. Variante localizada: `examine_inventario_en.webp`. Ambas muestran los mismos dos folios, encuadre, grapado, posiciones, cifras y marcas físicas; sólo cambia el texto legible localizado.

## Mapa semántico y alcance

- Documento: inventario de la masa concursal de *Enciclopedias El Saber Universal, S.A.*, fechado el 14 de octubre de 1971; es público y Berrondo lo entrega durante la investigación del día 2.
- Medio y composición: dos folios mecanografiados en papel revolución, grapados, con membrete del juzgado y una columna de partidas numeradas; lámina de examen de 1280 × 720, mostrada a 640 × 360.
- Hechos legibles que distinguen la prueba: 47 partidas; partida 12, cedulario de 11,400 tarjetas; partida 41, máquina de escribir Olivetti Lexikon 80; partida 44, ejemplares de lujo sin vender, 210.
- Alcance probatorio: el inventario identifica bienes de la masa y sus partidas; no es por sí solo una fotografía del interior del huacal 9 ni un inventario de nueve cajones físicos.
- Relación narrativa: la máquina sigue abajo, en depósito, con el número 41 pintado en la carcasa; el cedulario y los ejemplares de lujo reaparecen en la inspección judicial del huacal 9.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Dos folios mecanografiados en papel revolución, grapados, con membrete del juzgado y columna de partidas numeradas (§23.3, `docs/specs/case-5-el-tomo-trece.md:4054`; catálogo ES, `src/state/Private/EvidenceCatalogCase5EsB.ts:17-22`; catálogo EN, `src/state/Private/EvidenceCatalogCase5EnB.ts:17-22`).
- [ ] `PINTAR` — La fecha del inventario es 14 de octubre de 1971 y el documento contiene 47 partidas (§5.2, `docs/specs/case-5-el-tomo-trece.md:287`; §23.3, `docs/specs/case-5-el-tomo-trece.md:4054`).
- [ ] `PINTAR` — La partida 12 identifica un cedulario de 11,400 tarjetas (§23.3, `docs/specs/case-5-el-tomo-trece.md:4054`; catálogo ES/EN, `src/state/Private/EvidenceCatalogCase5EsB.ts:17-22`, `src/state/Private/EvidenceCatalogCase5EnB.ts:17-22`).
- [ ] `PINTAR` — La partida 41 identifica una máquina de escribir Olivetti Lexikon 80 (§23.3, `docs/specs/case-5-el-tomo-trece.md:4054`; D2, `src/case/case5/Private/despacho_berrondo_talks.ts:89-96`, variante EN `despacho_berrondo_talks_en.ts:90-97`).
- [ ] `PINTAR` — La partida 44 identifica 210 ejemplares de lujo sin vender (§23.3, `docs/specs/case-5-el-tomo-trece.md:4054`; D3-T1, `src/case/case5/Private/trial_day3_success.ts:41-46`, variante EN `trial_day3_success_en.ts:41-46`).
- [ ] `NO CONTRADECIR` — Las partidas 12, 41 y 44 deben distinguirse por su posición dentro de la columna, no por flechas, círculos, color de marcador o realce editorial (§23.3, `docs/specs/case-5-el-tomo-trece.md:4054`; catálogo ES/EN, `src/state/Private/EvidenceCatalogCase5EsB.ts:21-22`, `src/state/Private/EvidenceCatalogCase5EnB.ts:21-22`).
- [ ] `AUSENTE` — Sin personajes, manos, escritorio completo, huacal, cajones, máquina fotografiada ni flechas/círculos superpuestos: el activo es el documento examinado, no una vista de la bodega (§23.3, `docs/specs/case-5-el-tomo-trece.md:4054`; §23.0, `docs/specs/case-5-el-tomo-trece.md:3978-3980`).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — Variante ES: debe poder leerse la fecha `14 de octubre de 1971` o su forma documental equivalente, el total de `47` partidas y las entradas de las partidas `12`, `41` y `44` con sus descripciones (§5.2, `docs/specs/case-5-el-tomo-trece.md:287`; §23.3, `docs/specs/case-5-el-tomo-trece.md:4054`).
- [ ] `TEXTO EXACTO` — Variante ES: partida 12: `cedulario, 11,400 tarjetas`; partida 41: `máquina de escribir Olivetti Lexikon 80`; partida 44: `ejemplares de lujo sin vender, 210` (§23.3, `docs/specs/case-5-el-tomo-trece.md:4054`; catálogo ES, `src/state/Private/EvidenceCatalogCase5EsB.ts:18-22`).
- [ ] `TEXTO EXACTO` — Variante EN: `Item 12: card file, 11,400 cards`; `Item 41: Olivetti Lexikon 80 typewriter`; `Item 44: unsold luxury copies, 210` (catálogo EN, `src/state/Private/EvidenceCatalogCase5EnB.ts:18-22`; D3-T1 EN, `src/case/case5/Private/trial_day3_success_en.ts:37-42`).
- [ ] `NO CONTRADECIR` — Las líneas no marcadas del inventario pueden ser mecanografiadas y legibles sólo en la medida necesaria para parecer un documento real; el spec no fija su texto exacto y no deben añadir una respuesta narrativa nueva (§23.3, `docs/specs/case-5-el-tomo-trece.md:4054`).
- [ ] `AUSENTE` — No imprimir flechas, círculos, subrayados, resaltadores, etiquetas explicativas ni texto inglés en ES; el descubrimiento debe depender de la posición y lectura del documento (§23.3, `docs/specs/case-5-el-tomo-trece.md:4054`; §23.0, `docs/specs/case-5-el-tomo-trece.md:3978-3980`).

### F3 Cifras/fechas/horas

- [ ] `NO CONTRADECIR` — El inventario es del 14-X-1971; no sustituir la fecha por la fecha de la inspección judicial ni por el 4-XII de las tiras del huacal (§5.2, `docs/specs/case-5-el-tomo-trece.md:287`; §23.3, `docs/specs/case-5-el-tomo-trece.md:4054`).
- [ ] `NO CONTRADECIR` — La cifra documental de la partida 12 es 11,400 tarjetas, mientras que la inspección posterior cuenta 11,407 tarjetas físicas en el cedulario; esta lámina no debe convertir el total del inventario histórico en el conteo posterior (§5.2, `docs/specs/case-5-el-tomo-trece.md:287,296`; §24.D I54, `docs/specs/case-5-el-tomo-trece.md:4229`).
- [ ] `NO CONTRADECIR` — La partida 44 son 210 ejemplares sueltos sin vender; no convertirlos en 210 colecciones completas, corrección que Berrondo hace en D3-T1 (`src/case/case5/Private/trial_day3_success.ts:42-46`; variante EN `trial_day3_success_en.ts:42-46`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En el despacho, Berrondo saca de la vitrina un legajo delgado, lo deja abierto y la defensa lee las 47 partidas, la 12 y la 41; el documento debe permitir reconocer exactamente ese legajo (`src/case/case5/Private/despacho_berrondo_talks.ts:83-92`; variante EN `despacho_berrondo_talks_en.ts:84-93`).
- [ ] `PINTAR` — La defensa recibe `inventario_1971` después de que Berrondo explica que la máquina es un bien de la masa y que sigue abajo; la lámina debe sostener la asociación entre partida 41 y Olivetti, sin dibujar la máquina dentro del documento (`src/case/case5/Private/despacho_berrondo_talks.ts:92-97`; variante EN `despacho_berrondo_talks_en.ts:93-98`).
- [ ] `NO CONTRADECIR` — D3-T1 presenta esta prueba contra «libros viejos y unos cajones» y lee 47 partidas, 12, 41 y 44; el éxito depende de que esos datos sean comprobables, pero la siguiente pregunta sobre `SÁB 4-XII` pertenece al `followUp` de `huacal_9`, no a esta lámina (`src/case/case5/Private/trial_day3_t1.ts:63-69`; `trial_day3_success.ts:34-49`; variantes EN equivalentes).
- [ ] `NO CONTRADECIR` — El juicio posterior resume que en el huacal 9 se inventariaron 210 ejemplares, un cedulario de 11,407 tarjetas y una máquina, y que todo estaba inventariado desde 1971; esa narración es una consecuencia de la inspección y no autoriza a redibujar el inventario histórico como si tuviera 11,407 tarjetas (§12.3, `src/case/case5/Private/trial_day3.ts:17-20`; variante EN `trial_day3_en.ts:17-20`).
- [ ] `NO CONTRADECIR` — El inventario acredita bienes de la masa y la existencia histórica de las partidas; no prueba por sí mismo quién escribió las fichas, quién cometió el homicidio ni que los ejemplares sean colecciones completas (§2.2, `docs/specs/case-5-el-tomo-trece.md:99-103`; D3-T1, `src/case/case5/Private/trial_day3_success.ts:44-46`).

### F5 Estilo y prohibidos

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA / Nintendo DS) en alta definición; cel-shading de colores planos con terminador duro y dos tonos por superficie; contorno continuo carbón `#1A1A1A`, más grueso en la silueta; anatomía expresiva caricaturesca cuando aparezca una persona; colores primarios saturados; televisión mexicana de los setenta, universo Chespirito, papel/madera/polvo, expedientes con listón, madera barnizada, latón envejecido y luz de tungsteno; prohibidos fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto inglés salvo EN y rosa/magenta en primer plano (§23.0, `docs/specs/case-5-el-tomo-trece.md:3974-3980`).
- [ ] `AUSENTE` — Sin realces gráficos de ninguna clase: la composición debe guiar la lectura por la numeración y la posición natural de las partidas (§23.3, `docs/specs/case-5-el-tomo-trece.md:4054`).

### F6 Localización

- [ ] `PINTAR` — Generar `examine_inventario.webp` y `examine_inventario_en.webp`; §23.3 exige la variante EN porque el argumento depende de texto legible (§23.3, `docs/specs/case-5-el-tomo-trece.md:4041-4055,4064`).
- [ ] `NO CONTRADECIR` — ES/EN conservan idénticos encuadre, folios, grapado, membrete, columna, posiciones de las partidas, fecha y cifras; sólo se localizan las cadenas legibles (§23.3, `docs/specs/case-5-el-tomo-trece.md:4064`).
- [ ] `NO CONTRADECIR` — No aplicar la regla de la `s` minúscula caída a este inventario salvo que una cadena traducida la contenga incidentalmente: §23.3 la exige para las láminas cuestionadas que sostienen el defecto documental, no convierte toda lámina del caso en un documento con ese defecto (§23.3, `docs/specs/case-5-el-tomo-trece.md:4068`).
- [ ] `TEXTO EXACTO` — En EN, usar las formas del catálogo inglés: `1971 Inventory`, `Estate inventory, October 14, 1971`, `Forty-seven line items`, `Item 12`, `card file, 11,400 cards`, `Item 41`, `Olivetti Lexikon 80 typewriter`, `Item 44`, `unsold luxury copies, 210` (`src/state/Private/EvidenceCatalogCase5EnB.ts:17-22`).

## Consistencia (regenerar juntos)

- `examine_inventario_en` — gemelo localizado del mismo documento; comparte encuadre, folios, grapado, posiciones, cifras, fecha y marcas físicas. Regenerar juntos; este activo no es fuente de verdad del otro.
- `inventario_1971` — icono de Acta que debe conservar la identidad del inventario y corresponder a ambas variantes de `detailedView` (§23.5, `docs/specs/case-5-el-tomo-trece.md:4086-4090`; catálogos ES/EN, `src/state/Private/EvidenceCatalogCase5EsB.ts:17-22`, `src/state/Private/EvidenceCatalogCase5EnB.ts:17-22`). Regenerar juntos; este activo no es fuente de verdad del otro.
- `bg_despacho_berrondo` — comparte el despacho y la vitrina de la que Berrondo extrae el legajo, pero no debe aportar una vista de documento ni texto legible a la lámina (§23.1, `docs/specs/case-5-el-tomo-trece.md:3989`; guion D2, `src/case/case5/Private/despacho_berrondo_talks.ts:87-89`). Regenerar juntos para continuidad espacial; este activo no es fuente de verdad del otro.
- `examine_maquina` / `maquina_escribir` — comparten la identidad de la Olivetti Lexikon 80 y la partida 41; la máquina es un bien descrito por el inventario, pero la lámina de máquina fija su número 41 y su defecto tipográfico posterior (§5.3, `docs/specs/case-5-el-tomo-trece.md:297`; §23.3, `docs/specs/case-5-el-tomo-trece.md:4059`). Regenerar juntos; este activo no es fuente de verdad del otro.
- `examine_huacal9` / `huacal_9` — comparten la inspección posterior del depósito, las tiras de sello y la fecha `SÁB 4-XII`; no mezclar sus dos tiras ni el total físico 11,407 con la partida histórica 12 de 11,400 (§5.3, `docs/specs/case-5-el-tomo-trece.md:295-297,4058`; §24.D I15 e I54, `docs/specs/case-5-el-tomo-trece.md:4197,4229`). Regenerar juntos; este activo no es fuente de verdad del otro.
- `examine_ficha_domicilio` / `ficha_domicilio` — relacionado por el cedulario, pero es una tarjeta individual de 1969/actualizada en agosto y no una partida del inventario de 1971 (§5.4, `docs/specs/case-5-el-tomo-trece.md:306`; §23.3, `docs/specs/case-5-el-tomo-trece.md:4060`). Regenerar juntos sólo para impedir intercambio de identidad; este activo no es fuente de verdad del otro.

## Conflictos abiertos

- El inventario de 1971 está definido como un documento de 47 partidas de la masa concursal (§5.2 y §23.3), pero D3-T1 formula la contradicción como «lo que la corte escribió de ese huacal en 1971» y el relato del día 3 resume datos del huacal 9. La invariante I54 aclara que las 47 partidas pertenecen al inventario de la masa y no al contenido físico del huacal; esta hoja conserva ambas formulaciones y no decide cómo debe reescribirse el guion (`src/case/case5/Private/trial_day3_success.ts:37`; §24.D I54, `docs/specs/case-5-el-tomo-trece.md:4229`).
- La lámina fija 11,400 tarjetas en la partida 12, mientras la inspección posterior fija 11,407 tarjetas físicas; es una diferencia histórica/documental que debe permanecer visible como diferencia de alcance, no corregirse en el arte (§5.2-§5.3, `docs/specs/case-5-el-tomo-trece.md:287,296`; §24.D I54, `docs/specs/case-5-el-tomo-trece.md:4229`).
- D3-T1 deja que la defensa diga «doscientas diez colecciones de lujo completas» antes de que Berrondo corrija a «ejemplares sueltos»; la imagen sólo debe mostrar la entrada fijada del inventario, no anticipar la interpretación equivocada ni la corrección en forma de anotación (§23.3, `docs/specs/case-5-el-tomo-trece.md:4054`; `src/case/case5/Private/trial_day3_success.ts:44-46`).

## Hallazgos de auditoría 2026-09-19

**Veredicto: NO CUMPLE** en contenido (F1), texto (F2), cifras (F3), contrato en pantalla (F4) y localización (F6), en ambas variantes ES y EN. Las dos láminas generadas son documentos distintos y ninguno es el inventario de la hoja.

### Cumple

- (Ninguno de los hechos F1–F6 marcados `PINTAR` se satisface. Los ✓ presuntivos quedan sin fundamento; véase correcciones de auditoría.)
- Cumple parcialmente el §23.0 en estilo (F5): ambas láminas son ilustración 2D de linaje Ace Attorney con papel viejo, madera y latón; sin marcas de agua ni degradados llamativos. El resto de F5 (texto rosa/magenta no aparece; pero véase texto inglés en ES).
- `AUSENTE` parcial: no hay flechas, círculos, subrayados ni resaltes editoriales en ninguna variante (F1/F5, `NO CONTRADECIR` de realces). Sin personajes ni huacal. El resto de exclusiones NO se cumple (véase defecto 9).

### Defectos confirmados

1. **CONTRADICE — MAYOR (F2/F3, variante ES):** la fecha impresa es `17 DE MAYO DE 1971` y el membrete dice `INVENTARIO MECANOGRAFIADO 1971` con folio `73-5581`, no el 14 de octubre de 1971 del spec (F2, hoja:29; §5.2, `docs/specs/case-5-el-tomo-trece.md:287`). Rompe la identidad documental de la prueba.
2. **CONTRADICE — MAYOR (F2/F3, variante ES):** `TOTAL DE PARTIDAS: 58`, no `47` (F2 hoja:29, F3 hoja:37; D3-T1 `src/case/case5/Private/trial_day3_success.ts:41`). La contradicción de D3-T1 exige 47 comprobables.
3. **CONTRADICE — MAYOR (F1/F2, variante ES):** la partida 12 dice `Expediente judicial No. 68-4217, con anexos`, no `cedulario, 11,400 tarjetas` (F1 hoja:21, F2 hoja:30; `EvidenceCatalogCase5EsB.ts:18-22`). Rompe el vínculo con `examine_ficha_domicilio` y el cotejo 11,400/11,407 (F3 hoja:38, I54).
4. **CONTRADICE — MAYOR (F1/F2, variante ES):** la partida 41 dice `Maquinilla de escribir manual`, no `máquina de escribir Olivetti Lexikon 80` (F1 hoja:22, F2 hoja:30; D2 `despacho_berrondo_talks.ts:89-96`). Rompe la asociación partida 41 ↔ Olivetti que exige F4 (hoja:44) y la consistencia con `examine_maquina`/`maquina_escribir`.
5. **CONTRADICE — MAYOR (F1/F2, variante ES):** la partida 44 dice `Fotografías judiciales (negativos y positivos)`, no `ejemplares de lujo sin vender, 210` (F1 hoja:23, F2 hoja:30; D3-T1 `trial_day3_success.ts:41-46`). La contradicción central del día 3 no es comprobable sobre esta lámina.
6. **MALFORMADO — MEDIO (F2, variante ES):** el listado está desordenado y con líneas corruptas (`16.` repetida, `41. Paque ala pat orento`, `44.` dos veces fuera de orden, `19. Maquinilla de escrif=anoa`, `18. Caja gill legaro`): pasa por documento pero impide la lectura posicionada que F4 exige (hoja:43-45, `trial_day3_t1.ts:63-69`).
7. **CONTRADICE — MAYOR (F6, gemelos):** ES y EN no comparten composición alguna: ES es un solo folio con listón/banda roja, firma manuscrita, tintero y lámpara sobre escritorio; EN son dos folios grapados con membrete `TRIBUNAL SUPERIOR DE JUSTICIA`, expediente `2147/1976`, placa `ARCHIVO JUDICIAL` y columnas LÍNEA/DESCRIPCIÓN/CANTIDAD. §23.3 exige idénticos encuadre, folios, grapado, membrete, columna, posiciones, fecha y cifras (hoja:57; §23.3, `docs/specs/case-5-el-tomo-trece.md:4064`). Ninguno de los dos es la forma canónica de la hoja, así que regenerar uno no corrige el otro.
8. **CONTRADICE/MALFORMADO — MAYOR (F2, variante EN):** la partida 41 dice `Olivetti Lexikon 80 typeriter` — falta ortográfica de `typewriter`, cadena exacta del catálogo EN (F2 hoja:31, F6 hoja:59; `EvidenceCatalogCase5EnB.ts:18-22`). Las líneas 35–50 son guiones ilegibles y la línea `49` está duplicada; no hay fecha `October 14, 1971` ni total `47` legibles en ninguna variante (F2 hoja:29-31).
9. **CONTRADICE — MEDIO (F1 `AUSENTE` / F6, variante EN):** elementos no pedidos por la hoja: pila de expedientes rotulada `EXPEDIENTE 2147/1976` y placa metálica `ARCHIVO JUDICIAL / DIRECCIÓN DE GUARDA Y CUSTODIA` (F1 hoja:25; §23.3 4054). Añaden una identidad documental (expediente 1976, archivo judicial) que la hoja no fija y que puede leerse como respuesta narrativa nueva (F2 hoja:32).

### Correcciones de auditoría

- La sección anterior decía «No se inspeccionó ninguna imagen, por protocolo de asset-facts». Se conserva como traza: esa sección era el estado previo a la auditoría visual y no un hallazgo retirado. Ningún ✓ previo existía que corregir.
- Trazas de esta pasada: los "Cumple" derivados de la lectura de imagen completa quedan anulados por los recortes (`c_es_membrete`, `c_es_partidas_sup`, `c_es_partidas_inf`, `c_es_total`, `c_en_membrete`, `c_en_filas`, `c_en_placa`): el recorte del pie ES desmiente la fecha y el total; el recorte de filas EN desmiente `typeriter` como ✓.

### Recomendación (orden del conjunto de consistencia)

1. Regenerar ES y EN **juntas, en una sola pasada**, con la misma composición canónica: dos folios mecanografiados, grapados, mismo encuadre, membrete del juzgado, columna de partidas numeradas; sólo cambia el texto localizado (F6, hoja:57; §23.3 4064).
2. Imprimir en ambas la fecha **14 de octubre de 1971** y el total **47 partidas** (F2/F3, hoja:29,37).
3. Fijar partida 12 = `cedulario, 11,400 tarjetas` / `card file, 11,400 cards` (F2 hoja:30-31, F3 hoja:38; I54).
4. Fijar partida 41 = `máquina de escribir Olivetti Lexikon 80` / `Olivetti Lexikon 80 typewriter` (corregir `typeriter`) (F2/F4 hoja:30-31,44; D2).
5. Fijar partida 44 = `ejemplares de lujo sin vender, 210` / `unsold luxury copies, 210` (F2/F3 hoja:30-31,39; D3-T1).
6. Eliminar elementos no fijados: placa `ARCHIVO JUDICIAL`, expediente `2147/1976`, folio `73-5581`, firma, tintero/lámpara; y todo texto inglés en la variante ES (F1 hoja:25, F2 hoja:33).
7. Las líneas restantes pueden ser mecanografiadas y legibles sólo lo necesario para parecer documento real; sin líneas corruptas ni numeración desordenada (F2 hoja:32).
