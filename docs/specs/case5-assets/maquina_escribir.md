# maquina_escribir — hoja de hechos

Clase: `icon`. Espec: §23.0, §23.3, §23.5, §5.3, §5.5, §16.2 y §24.C. Guion: investigación D3 bodega, investigación D4 calderas, clímax E5 y catálogos ES/EN. La hoja cubre el icono `assets/maquina_escribir.webp` y su `detailedView` compartido `assets/examine_maquina.webp`.

## Mapa semántico y alcance

Es la máquina de escribir física que permanece dentro del huacal 9 del depósito judicial: una Olivetti Lexikon 80 negra, inventariada como partida 41 en 1971. El icono debe identificar el objeto como prueba aislada del Acta; no representa la bodega completa, el huacal, a Berrondo ni los documentos mecanografiados que después se cotejan. La vista detallada muestra el mismo aparato en dos paneles y hace visible el defecto de la barra de la `s` minúscula.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Un objeto único, centrado y reconocible como máquina de escribir, sobre fondo transparente, con el estilo de icono de Acta y contorno carbón (§23.5, `docs/specs/case-5-el-tomo-trece.md:4086-4090`).
- [ ] `PINTAR` — Máquina Olivetti Lexikon 80 negra, con carro cromado; la identidad del aparato debe coincidir con la máquina encontrada en el fondo del huacal (`src/case/case5/Private/bodega_masa_hotspots.ts:62-64`; EN: `bodega_masa_hotspots_en.ts:62-64`).
- [ ] `PINTAR` — Cinta bicolor gastada hasta la tela; es un rasgo material de la máquina, no un texto de catálogo (`src/state/Private/EvidenceCatalogCase5EsB.ts:49-58`; EN: `EvidenceCatalogCase5EnB.ts:49-58`).
- [ ] `PINTAR` — Número de partida `41` pintado a plantilla en blanco sobre el costado/carcasa, visible como la identificación física del bien (`docs/specs/case-5-el-tomo-trece.md:4059`; `src/case/case5/Private/bodega_masa_hotspots.ts:62-64`).
- [ ] `NO CONTRADECIR` — El aparato permanece en depósito judicial dentro del huacal 9; no mostrarlo retirado, en manos de Berrondo ni instalado en la mesa del juzgado en la vista del icono (`docs/specs/case-5-el-tomo-trece.md:101-103,297`; §24.C F1–F2, `docs/specs/case-5-el-tomo-trece.md:4153-4154`).
- [ ] `AUSENTE` — No mostrar personajes, huacal completo, bodega, carro de transporte, documentos, texto explicativo, flechas, círculos ni realces de color en el icono; son contexto de guion o elementos de la vista detallada, no parte del objeto aislado (§23.0, §23.5; `bodega_masa_hotspots.ts:62-74`).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — La única marca legible exigida en el icono es `41`, pintada a plantilla en el costado/carcasa (§23.3, `docs/specs/case-5-el-tomo-trece.md:4059`; `bodega_masa_hotspots.ts:63`).
- [ ] `AUSENTE` — No imprimir `Olivetti Lexikon 80`, `partida 41`, descripciones del inventario, el nombre de Berrondo ni el defecto de la `s` como rótulos explicativos; esos datos los dice el catálogo, el guion o la vista detallada (`EvidenceCatalogCase5EsB.ts:49-58`; `bodega_masa_hotspots.ts:63-66`; §23.3).
- [ ] `NO CONTRADECIR` — El `41` del icono debe corresponder al número blanco de la carcasa en `examine_maquina`; no sustituirlo por un número de inventario distinto (§23.3, `docs/specs/case-5-el-tomo-trece.md:4059`).

### F3 Cifras, fechas y etapas

- [ ] `NO CONTRADECIR` — `41` es la partida del inventario de 1971; la fecha pertenece a la identidad probatoria y no necesita imprimirse en el icono (§5.3, `docs/specs/case-5-el-tomo-trece.md:297`; catálogo ES/EN).
- [ ] `NO CONTRADECIR` — La cinta está gastada hasta la tela; no convertir el desgaste en una fecha, una muestra de papel o una afirmación de uso reciente (`EvidenceCatalogCase5EsB.ts:51`; EN: `EvidenceCatalogCase5EnB.ts:51`).
- [ ] `NO CONTRADECIR` — La prueba tiene `updates[]` de exactamente dos etapas. Etapa 1: la barra de la `s` minúscula está vencida nueve décimas de milímetro, imprime media línea abajo y medio grado a la izquierda. Etapa 2: los tres documentos cuestionados comparten el defecto, pero todavía no se pudo cotejar contra el aparato sin orden judicial (§5.5, `docs/specs/case-5-el-tomo-trece.md:308-315`; catálogos ES/EN).
- [ ] `NO CONTRADECIR` — El clímax E5 exige `requiredUpdateStage: { maquina_escribir: 2 }`; el icono no debe sugerir que la comparación física ya se hizo antes de que la corte autorice usar el bien (§18.6, `docs/specs/case-5-el-tomo-trece.md:3601-3604`; `src/case/case5/Private/climax_stage5.ts:50-53`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En D3 bodega, el narrador presenta una máquina negra con carro cromado, envuelta en una funda de hule; la imagen del objeto no puede tener otro color de cuerpo, otro tipo de carro ni un contexto que haga parecer que fue retirada del depósito (`src/case/case5/Private/bodega_masa_hotspots.ts:62`; EN: `bodega_masa_hotspots_en.ts:62`).
- [ ] `PINTAR` — La defensa identifica `Olivetti Lexikon 80` y el número cuarenta y uno del costado; la marca `41` debe estar en el mismo lugar y ser compatible con el detalle ampliado (`bodega_masa_hotspots.ts:63-64`; EN: `bodega_masa_hotspots_en.ts:63-64`).
- [ ] `NO CONTRADECIR` — Berrondo dice que no se puede escribir porque cualquier huella de uso altera un bien en depósito; el icono no debe mostrar papel insertado, una tecla pulsada, una hoja recién escrita ni una operación en curso (`bodega_masa_hotspots.ts:65-66`; EN: `bodega_masa_hotspots_en.ts:65-66`).
- [ ] `NO CONTRADECIR` — Berrondo declara que usa la máquina dos veces al mes para levantar actas y que antes la usaron once años de secretarias; esa historia no obliga a pintar una persona, manos o papel en el icono, pero sí prohíbe representarla como aparato nuevo o sin señales de uso (`bodega_masa_hotspots.ts:68-70`; EN: `bodega_masa_hotspots_en.ts:68-70`).
- [ ] `PINTAR` — Tras el peritaje ocular de D3-T1, la actualización visible del Acta fija la `s` minúscula torcida: nueve décimas de milímetro, media línea abajo y medio grado a la izquierda. La vista detallada debe poder sostener esas afirmaciones; el icono sólo necesita conservar la identidad del aparato (`src/case/case5/Private/trial_day3_success.ts:69-72`; EN: `trial_day3_success_en.ts:69-72`).
- [ ] `NO CONTRADECIR` — En D4, la documentoscopia encuentra el mismo defecto en la tarjeta de julio, la ficha de agosto y la nota del sobre, pero no pudo cotejar contra la máquina porque está en depósito y hace falta una orden; la prueba no debe comunicar por sí sola una autoría individual (`src/case/case5/Private/archivo_caldera_hotspots.ts:42-46`; EN: `archivo_caldera_hotspots_en.ts:42-46`; §24.C F10, `docs/specs/case-5-el-tomo-trece.md:4162`).
- [ ] `NO CONTRADECIR` — E5 presenta la prueba sólo con la etapa 2 y pide qué falta cotejar; después la corte ordena traer la máquina en un carro y dicta el texto del fragmento en cuatro renglones. Es una consecuencia posterior del clímax, no contenido que deba aparecer en el icono (`src/case/case5/Private/climax_stage5.ts:50-53`; EN: `climax_stage5_en.ts:50-53`; `climax_stage5_en.ts:22-27`).

### F5 Estilo

- [ ] Contrato §23.0 completo pegado en el prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* GBA/DS en alta definición; ; contorno carbón `#1A1A1A` nítido y continuo, más grueso en la silueta; colores primarios saturados; tema de televisión mexicana de los setenta/Chespirito, con papel, madera, polvo, archivo judicial, madera barnizada, latón envejecido y luz de tungsteno; prohibidos fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto en inglés salvo la variante EN exigida, y cualquier rosa o magenta en primer plano (§23.0, `docs/specs/case-5-el-tomo-trece.md:3972-3980`).
- [ ] `AUSENTE` — No usar fondo de bodega ni de tribunal, marco, etiqueta flotante, flechas, círculos, resaltado de la barra o magenta/rosa en primer plano; el icono debe conservar transparencia y lectura de objeto aislado (§23.0, §23.5, `docs/specs/case-5-el-tomo-trece.md:4086-4090`).

### F6 Localización

- [ ] `NO CONTRADECIR` — Los catálogos ES y EN apuntan al mismo `assets/examine_maquina.webp`; la composición física del icono y del `detailedView` no se duplica por idioma (`EvidenceCatalogCase5EsB.ts:49-58`; `EvidenceCatalogCase5EnB.ts:49-58`; §23.3, `docs/specs/case-5-el-tomo-trece.md:4064-4069`).
- [ ] `NO CONTRADECIR` — La variante compartida conserva `41`, el modelo Olivetti, el carro cromado, la cinta gastada y la geometría de la `s`; sólo cambian las cadenas del catálogo y del guion (`EvidenceCatalogCase5EsB.ts:49-58`; `EvidenceCatalogCase5EnB.ts:49-58`).
- [ ] `AUSENTE` — No añadir texto inglés dentro del icono; §23.0 sólo permite variantes EN cuando §23.3 las exige, y `maquina_escribir` usa una imagen compartida sin texto localizado salvo la marca numérica `41` (§23.0, §23.3, §23.5).

## Consistencia (regenerar juntos)

- `examine_maquina` — Comparte el mismo aparato, número `41`, cinta bicolor gastada, carro cromado y defecto visible de la barra `s`; regenerar juntos, este activo no es fuente de verdad del otro (§23.3, `docs/specs/case-5-el-tomo-trece.md:4059`).
- `examine_maquina_en` si se materializa como variante — Gemelo localizado de la vista detallada, con la misma composición y geometría; el icono compartido no es fuente de verdad del texto del catálogo. Regenerar juntos según §23.3, sin inventar una variante EN del icono.
- `bg_bodega_masa` — Comparte la máquina negra en el fondo de la bodega y la relación con el huacal, los cajones y la funda de hule; el fondo fija la escena, no el detalle del aparato. Regenerar juntos; este activo no es fuente de verdad del otro (§23.1, §14.1, `bodega_masa_hotspots.ts:62-72`).
- `huacal_9` — Comparte el depósito físico y la condición de bien sellado/inventariado; la máquina no debe aparecer fuera del huacal antes de la orden judicial. Regenerar juntos; este activo no es fuente de verdad del otro (§5.3, §23.3, §24.C F1–F2).
- `inventario_1971` — Comparte la identidad probatoria de la partida 41 de 1971; el inventario fija la referencia documental, no el diseño físico del aparato. Regenerar juntos; este activo no es fuente de verdad del otro (§5.2, §5.3; `EvidenceCatalogCase5EsB.ts:17-22`).
- `fichero_cedulario` — Comparte el huacal 9 y la evidencia de que el cedulario y la máquina permanecen como bienes inventariados; no trasladar cajones ni tarjetas al icono. Regenerar juntos; este activo no es fuente de verdad del otro (§24.C F1–F2; `progress.ts:19-21`).
- `nota_mecanografiada`, `recibo_renta`, `acuse_notificacion` y `examine_ficha_domicilio` — Comparten la cadena de documentos donde aparece la `s` caída; son documentos comparados, no partes de la máquina. Regenerar juntos para conservar el contrato del defecto; ninguno es fuente de verdad del icono (§24.C F10, `docs/specs/case-5-el-tomo-trece.md:4162`; §23.3, `docs/specs/case-5-el-tomo-trece.md:4068`).

## Conflictos abiertos

- El catálogo llama al defecto de la segunda etapa un dictamen de documentoscopia y el guion de D4 dice que los tres documentos tienen la misma `s` vencida, pero ambos insisten en que todavía no hubo cotejo físico contra la máquina porque está en depósito (`EvidenceCatalogCase5EsB.ts:53-54`; `archivo_caldera_hotspots.ts:42-46`; §5.5). No resolver aquí: el icono debe conservar la máquina como fuente de muestra pendiente, no afirmar una comparación ya realizada.
- En el clímax, el guion ordena traer la máquina al tribunal y luego dictar el fragmento, mientras la descripción del activo y el `detailedView` la mantienen en el depósito judicial hasta esa orden (`docs/specs/case-5-el-tomo-trece.md:297,4059`; `climax_stage5_en.ts:22-27`). No es una contradicción del icono sino un cambio de estado posterior; documentarlo para que ninguna regeneración muestre el estado del clímax en la evidencia obtenida en D3.
- El contrato de §23.3 describe `examine_maquina.webp` como dos vistas, pero los catálogos ES/EN usan el mismo `imageAsset` y no declaran una variante EN separada (`docs/specs/case-5-el-tomo-trece.md:4059`; `EvidenceCatalogCase5EsB.ts:57`; `EvidenceCatalogCase5EnB.ts:57`). Mantener una composición compartida; cualquier decisión de duplicar o no el archivo debe resolverse en el spec/pipeline, no en esta hoja.

## Hallazgos de auditoría 2026-09-19

- ~~No se inspeccionó ninguna imagen por protocolo…~~ — sustituido por la pasada visual de la regeneración Lote C (abajo). El `detailedView` se audita en `examine_maquina.md`.

## Hallazgos de auditoría 2026-09-19 (regeneración Lote C)

RAW auditado: icono 1×1 magenta compuesto en `tools/raw/case5/case5_evidence_icons_raw.png` celda col 5, fila 2 (6×4). Recorte del aparato.

**Veredicto: CUMPLE** para el icono (F1/F2/F5/F6). El defecto de la barra `s` pertenece a `examine_maquina`, no a esta celda.

### Cumple

- Máquina de escribir negra centrada, carro cromado, `41` a plantilla blanca en el costado, platina vacía (F1/F2, `bodega_masa_hotspots.ts:62-64`).
- Fondo magenta, sin bodega, sin huacal, sin papel, sin flechas, sin nombre Olivetti (F1 AUSENTE, F2).
- Cel-shading, contorno carbón, un solo icono ES/EN (F5/F6).

### Defectos confirmados

Ninguno bloqueante en el icono. La cinta bicolor no se lee a esta escala (MENOR, igual que en la lámina).

### Correcciones de auditoría

- Primera inspección visual del icono regenerado; no había ✓ previos que retirar.

### Recomendación

Ninguna para el icono. La barra `s` se corrige en `examine_maquina`, no aquí.
