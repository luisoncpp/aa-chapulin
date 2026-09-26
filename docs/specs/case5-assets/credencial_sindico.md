# credencial_sindico — hoja de hechos

Clase: `icon`. Espec: §23.0, §23.3, §23.5, §4.1, §4.2 y §24. Guion: D2 despacho de Berrondo, clímax E2, y las referencias de D3-T3/D4-T1 que distinguen la credencial del gafete. Catálogos: `EvidenceCatalogCase5EsB.ts` y `EvidenceCatalogCase5EnB.ts`. El icono acompaña a `examine_credencial.webp` y `examine_credencial_en.webp`; este documento cubre el objeto del Acta y sus gemelas de examen.

## Mapa semántico

- Credencial de síndico de Fulgencio Berrondo, expedida por el Juzgado Séptimo para la quiebra 114/1971; no es el gafete de visita del Archivo Judicial.
- Objeto físico: credencial de cartulina, con una fotografía en blanco y negro de un hombre mayor de traje oscuro y lentes de media luna, sello seco del Juzgado Séptimo y tres renglones de autorización.
- Las autorizaciones que definen la identidad del objeto son vigencia hasta el cierre del concurso, ausencia de límite de horario y acceso al depósito de bienes de la masa.
- El icono es un objeto centrado sobre fondo transparente, con contorno carbón, sin escena, personaje completo, despacho, depósito, huacal ni ruta espacial.
- La placa de examen es la fuente de los detalles legibles: frente con los tres renglones y reverso con la firma del juez expedidor en 1971. El icono no necesita reproducir todo ese texto en tamaño de Acta, pero no puede representar otra credencial.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Una credencial de cartulina de síndico, centrada y reconocible como el objeto del Acta, no un gafete metálico de visitante (§23.5, líneas 4086-4090; `src/state/Private/EvidenceCatalogCase5EsB.ts:10-15`; `src/state/Private/EvidenceCatalogCase5EnB.ts:10-15`).
- [ ] `PINTAR` — La identidad visual compartida con la placa: fotografía en blanco y negro de un hombre mayor de traje oscuro y lentes de media luna (§23.3, línea 4053; catálogo ES/EN, bloques de `credencial_sindico`).
- [ ] `PINTAR` — Sello seco en relieve del Juzgado Séptimo, al menos como marca visible del documento (§23.3, línea 4053; §10.1, línea 1518).
- [ ] `PINTAR` — Formato de credencial certificada de cartulina, con frente y reverso como identidad de la prueba; el icono puede sintetizar las dos vistas para el tamaño de Acta, pero no cambiar el documento por una escena (§10.1, línea 1518; catálogo ES/EN).
- [ ] `AUSENTE` — No mostrar el gafete de visita de latón, una fotografía del despacho, el huacal, el sótano, el pasillo 7, una ruta, flechas, personajes adicionales ni el marco de la vitrina: el icono debe ser sólo la prueba centrada (§23.5, líneas 4086-4090; `src/case/case5/Private/despacho_berrondo_hotspots.ts:14-22`; `src/case/case5/Private/climax_stage2.ts:17-25`).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — Si el tamaño permite texto legible en la variante ES, los tres renglones son: «Vigente hasta la conclusión del concurso», «Sin límite de horario» y «Acceso al depósito de bienes de la masa» (§23.3, línea 4053; `src/state/Private/EvidenceCatalogCase5EsB.ts:10-15`; `src/case/case5/Private/climax_stage2.ts:19-21`).
- [ ] `TEXTO EXACTO` — La variante EN de la identidad del objeto usa: «Valid until conclusion of the bankruptcy», «No hour limit» y «Access to the estate goods deposit»; debe coincidir con el catálogo inglés y la lectura del clímax EN (`src/state/Private/EvidenceCatalogCase5EnB.ts:10-15`; `src/case/case5/Private/climax_stage2_en.ts:19-22`).
- [ ] `NO CONTRADECIR` — El icono no debe inventar texto legible adicional, fechas de entrada/salida, número de gafete, firma distinta ni una explicación de la deducción. Los renglones completos pertenecen al `detailedView`, que la corte lee uno por uno (§10.1, línea 1518; §18.2, líneas 3344-3351; §23.3, línea 4053).
- [ ] `AUSENTE` — No imprimir flechas, círculos, realces de color, pie explicativo ni texto en inglés dentro de la variante ES (§23.0, líneas 3974-3980; §23.5, líneas 4086-4090).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La credencial corresponde a Fulgencio Berrondo, síndico de la quiebra 114/1971, y su reverso lleva la firma del juez que la expidió en 1971 (§10.1, línea 1518; §23.3, línea 4053; catálogos ES/EN).
- [ ] `NO CONTRADECIR` — «Vigente hasta la conclusión del concurso» significa vigencia mientras el concurso siga abierto; no convertirla en autorización diaria o temporal (§4.1, P5, línea 197; catálogos ES/EN).
- [ ] `NO CONTRADECIR` — «Sin límite de horario» autoriza la permanencia del síndico en el depósito a cualquier hora, pero no demuestra por sí sola que Berrondo se quedara, saliera o subiera el 4 de diciembre (§4.1, P5, línea 197; §24.C, F3; §18.2, líneas 3344-3360).
- [ ] `NO CONTRADECIR` — La credencial habilita el depósito de bienes de la masa; el gafete devuelto a las 16:50 habilita las salas de lectura del primer piso. No mezclar sus funciones (`src/case/case5/Private/trial_day4_t1.ts:71-78`; `src/case/case5/Private/climax_stage2.ts:19-25`; §4.1, P5).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En D2 Berrondo entrega una copia certificada que tenía preparada desde hace años; el icono debe ser una prueba separable y reproducible, no la credencial única fijada dentro de la vitrina (`src/case/case5/Private/despacho_berrondo_hotspots.ts:14-22`; EN: `despacho_berrondo_hotspots_en.ts:14-22`).
- [ ] `NO CONTRADECIR` — El activo entregado en D2 es la credencial que luego se presenta en E2 como permiso del síndico; no debe parecer un documento de otra persona o de otra quiebra (`src/case/case5/Private/despacho_berrondo_hotspots.ts:20-22`; `src/case/case5/Private/climax_stage2.ts:9-25`; EN equivalentes).
- [ ] `NO CONTRADECIR` — E2 sólo acredita que el hombre podía permanecer en el sótano después de devolver el gafete; no acredita que efectivamente permaneciera, saliera o llegara al pasillo 7. El icono no puede contener una ruta o una presencia física añadida (§18.2, líneas 3344-3360; `src/case/case5/Private/climax_stage2.ts:26-34`).
- [ ] `NO CONTRADECIR` — D3-T3 y D4-T1 separan la credencial expedida por un juez y conservada por el síndico del gafete de visita devuelto en ventanilla; la miniatura debe sostener esa separación (`src/case/case5/Private/trial_day3_t3.ts:42-46`; `src/case/case5/Private/trial_day4_t1.ts:71-78`; equivalentes EN).

### F5 Estilo

- [ ] `PINTAR` — Repetir completo el contrato obligatorio de §23.0 en el prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* de linaje GBA/Nintendo DS; cel-shading plano con terminador duro y dos tonos por superficie; contorno continuo carbón `#1A1A1A`; registro mexicano de los años setenta/Chespirito; papel, madera, polvo, latón envejecido y luz de tungsteno (§23.0, líneas 3974-3979).
- [ ] `PINTAR` — Aplicar el estilo de icono de Acta ya establecido: objeto centrado, fondo transparente y contorno carbón (§23.5, líneas 4086-4089).
- [ ] `AUSENTE` — Prohibidos fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto inglés en ES y cualquier rosa o magenta en primer plano (§23.0, líneas 3978-3980).

### F6 Localización

- [ ] `PINTAR` — `credencial_sindico` tiene variante de examen EN (`examine_credencial_en.webp`), por lo que el icono y su identidad física deben permanecer iguales entre idiomas; sólo el texto legible de la placa cambia (§23.3, líneas 4064-4066; catálogos ES/EN).
- [ ] `TEXTO EXACTO` — ES y EN deben coincidir con sus respectivos catálogos y lecturas de E2; no usar texto inglés en el icono ES ni alterar la cartulina, sello, fotografía, firma o composición física (`EvidenceCatalogCase5EsB.ts:10-15`; `EvidenceCatalogCase5EnB.ts:10-15`; clímax ES/EN).
- [ ] `NO CONTRADECIR` — La regla de conservar una `s` minúscula caída aplica a las láminas traducidas que sostienen el cotejo tipográfico; no obliga a añadir artificialmente ese defecto al icono de esta credencial (§23.3, líneas 4068-4068).

## Consistencia (regenerar juntos)

- `examine_credencial.webp` — comparte la identidad física, fotografía, sello, cartulina y tres autorizaciones. Regenerar juntos; este activo no es fuente de verdad del otro.
- `examine_credencial_en.webp` — gemela localizada de la placa; comparte composición, reverso, firma de 1971 y marcas físicas, cambiando sólo el texto legible. Regenerar juntos; este activo no es fuente de verdad del otro.
- `bg_despacho_berrondo.webp` — comparte el contexto de la vitrina y la credencial enmarcada; el fondo fija la existencia del marco, mientras el icono fija la identidad del objeto entregado (§23.1, línea 3989; `src/case/case5/Private/despacho_berrondo_hotspots.ts:14-22`). Regenerar juntos; este activo no es fuente de verdad del otro.
- `berrondo_idle` y demás poses de Berrondo — comparten la identidad del hombre de setenta y un años, incluyendo lentes de media luna dorados y traje negro; la fotografía de la credencial debe ser compatible, sin convertirse en sprite (§23.2, líneas 3997-4008). Regenerar juntos; este activo no es fuente de verdad del otro.
- `examine_libro_peritos` — comparte la distinción semántica entre credencial permanente del síndico y gafete de visita con horas de entrada/devolución; no debe intercambiar sus columnas, horas ni apariencia (§4.1, P4-P5, líneas 196-197; §23.3, líneas 4049-4053). Regenerar juntos; este activo no es fuente de verdad del otro.

## Conflictos abiertos

- El texto español del catálogo fija «Vigente hasta la conclusión del concurso», mientras el catálogo inglés dice «Valid until the proceeding concludes» y el clímax inglés lee «Valid until conclusion of the bankruptcy» (`EvidenceCatalogCase5EnB.ts:12`; `climax_stage2_en.ts:19`). No resolver aquí: conservar ES según §23.3 y mantener registrada la discrepancia de formulación EN para la decisión de canonización.
- §10.1 explica que Berrondo entrega una copia certificada preparada desde hace años, mientras el uso de E2 trata la credencial como la autoridad que podía permitirle permanecer. No es una contradicción gráfica: la prueba muestra autorización, no conducta efectiva (§10.1, línea 1518; §18.2, líneas 3344-3360).

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen por protocolo de `asset-facts`; no se confirma ningún defecto visual de la generación actual.
- La hoja se deriva únicamente del spec, catálogos y guiones ES/EN. No se ejecutaron tests, lint, auditorías ni procesamiento de assets.
