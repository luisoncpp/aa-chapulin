# inventario_1971 — hoja de hechos

Clase: `icon` + `examine`. Espec: §5.2, §23.0, §23.3, §23.5, §24.D/F/I. Guion: D2 despacho (`despacho_berrondo_talks`), D3-T1 contradicción y el clímax E3/E5.

## Mapa semántico

- Documento: inventario de la masa concursal de Enciclopedias El Saber Universal, fechado el **14 de octubre de 1971**.
- Soporte: **dos folios mecanografiados en papel revolución**, grapados, con membrete del juzgado y una columna de partidas numeradas.
- Alcance: **cuarenta y siete partidas** del inventario de la masa concursal; no es una lista literal de todos los objetos que se ven dentro del huacal 9.
- Entradas que deben poder localizarse por su posición, sin flechas, círculos ni realces: partida 12, partida 41 y partida 44.
- Identidades enlazadas: el cedulario histórico, la Olivetti Lexikon 80 y los ejemplares de lujo sin vender; sus estados físicos posteriores pertenecen a otras vistas y no sustituyen el inventario histórico.
- Variante de idioma: `examine_inventario.webp` y `examine_inventario_en.webp`; el icono de Acta es el mismo objeto/documento, con `detailedView` localizada al inglés.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Dos folios mecanografiados, grapados, sobre papel revolución, con membrete del juzgado (§23.3, `docs/specs/case-5-el-tomo-trece.md:4054`; catálogo ES `EvidenceCatalogCase5EsB.ts:17-22`; catálogo EN `EvidenceCatalogCase5EnB.ts:17-22`).
- [ ] `PINTAR` — Columna de partidas numeradas legible como estructura del documento; no convertir el inventario en una lámina explicativa ni en una fotografía del huacal (§23.3, `docs/specs/case-5-el-tomo-trece.md:4054`).
- [ ] `PINTAR` — Las partidas 12, 41 y 44 deben distinguirse por su posición dentro de la columna, sin flechas, círculos, color de resaltado ni otra ayuda editorial (§23.3, `docs/specs/case-5-el-tomo-trece.md:4054`; catálogo ES/EN `EvidenceCatalogCase5*B.ts:21-22`).
- [ ] `NO CONTRADECIR` — La partida 12 corresponde al cedulario histórico de **11,400 tarjetas** (§5.2, `docs/specs/case-5-el-tomo-trece.md:287`; §24.D F1/I9, `docs/specs/case-5-el-tomo-trece.md:4153,4184`).
- [ ] `NO CONTRADECIR` — La partida 41 corresponde a una **máquina de escribir Olivetti Lexikon 80** (§5.2, `docs/specs/case-5-el-tomo-trece.md:287`; diálogo D2 `despacho_berrondo_talks.ts:90-92`; diálogo EN equivalente `despacho_berrondo_talks_en.ts:91-93`).
- [ ] `NO CONTRADECIR` — La partida 44 corresponde a **ejemplares de lujo sin vender, 210**; el guion aclara que son ejemplares sueltos, no 210 colecciones completas (§5.2, `docs/specs/case-5-el-tomo-trece.md:287`; D3-T1 `trial_day3_success.ts:35-47`; EN `trial_day3_success_en.ts:35-47`).
- [ ] `NO CONTRADECIR` — Las 47 partidas pertenecen al inventario de la masa concursal, no al contenido físico exhaustivo de los cajones del huacal 9 (§24.D I54, `docs/specs/case-5-el-tomo-trece.md:4229`; §5.3, `docs/specs/case-5-el-tomo-trece.md:296-299`).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — La fecha del inventario debe poder leerse como **14 de octubre de 1971** en ES y como **October 14, 1971** en EN, de forma coherente con los catálogos (§5.2, `docs/specs/case-5-el-tomo-trece.md:287`; `EvidenceCatalogCase5EsB.ts:18-19`; `EvidenceCatalogCase5EnB.ts:18-19`).
- [ ] `TEXTO EXACTO` — Deben ser legibles, sin alterar la identidad ni las cifras, las entradas equivalentes a: **12 — cedulario, 11,400 tarjetas**; **41 — máquina de escribir Olivetti Lexikon 80**; **44 — ejemplares de lujo sin vender, 210** (§23.3, `docs/specs/case-5-el-tomo-trece.md:4054`; §5.2, `docs/specs/case-5-el-tomo-trece.md:287`).
- [ ] `TEXTO EXACTO` — La variante EN traduce las cadenas legibles a **Item 12: card file, 11,400 cards**, **Item 41: Olivetti Lexikon 80 typewriter** y **Item 44: unsold luxury copies, 210**, manteniendo cifras, posiciones y composición (`EvidenceCatalogCase5EnB.ts:18-22`; §23.3, `docs/specs/case-5-el-tomo-trece.md:4064`).
- [ ] `AUSENTE` — No añadir flechas, círculos, realces ni una marca gráfica que señale la respuesta; la aceptación depende de que el jugador lea la posición de las partidas (§23.3, `docs/specs/case-5-el-tomo-trece.md:4054`).
- [ ] `AUSENTE` — No imprimir texto narrativo o probatorio no exigido, como «prueba del homicidio», «huacal 9», «culpable» o una explicación de la contradicción; el documento debe seguir pareciendo un inventario judicial (§23.0, `docs/specs/case-5-el-tomo-trece.md:3974-3980`; §23.3, `docs/specs/case-5-el-tomo-trece.md:4054`).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La fecha canónica del documento es 14-X-1971; no convertirla en la fecha del crimen (4-XII-1982), de la inspección o de la entrega del activo (§5.2, `docs/specs/case-5-el-tomo-trece.md:287`; §24.D I10, `docs/specs/case-5-el-tomo-trece.md:4185`).
- [ ] `NO CONTRADECIR` — **11,400** es el conteo histórico de originales del inventario de 1971; el fichero físico actual llega a **11,407** tras siete altas, mientras las once bajas permanecen archivadas. No sustituir una cifra por la otra (§24.D F1/I9, `docs/specs/case-5-el-tomo-trece.md:4153,4184`; fichero posterior §5.3, `docs/specs/case-5-el-tomo-trece.md:296`).
- [ ] `NO CONTRADECIR` — La partida 44 conserva el número **210**; el relato y D3 distinguen esos ejemplares sueltos de una colección completa (§2.2, `docs/specs/case-5-el-tomo-trece.md:113`; D3-T1 `trial_day3_success.ts:45-47`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — Al pedir ver el inventario, Berrondo saca un legajo delgado y lo deja abierto; la defensa lee «cuarenta y siete partidas», la partida 12 y la 41, y el activo se agrega al Acta después de esa explicación (`despacho_berrondo_talks.ts:83-97`; EN `despacho_berrondo_talks_en.ts:84-98`).
- [ ] `PINTAR` — La descripción detallada debe sostener la contradicción D3-T1: el testigo sólo ve «libros viejos y unos cajones», pero el inventario registra 47 partidas y permite leer 12, 41 y 44 (`trial_day3_t1.ts:49-69`; EN `trial_day3_t1_en.ts:49-69`).
- [ ] `NO CONTRADECIR` — El éxito D3-T1 lee en voz alta: 47 partidas; 12, cedulario de 11,400 tarjetas; 41, Olivetti Lexikon 80; 44, 210 ejemplares de lujo sin vender. El activo debe hacer posibles esas lecturas sin dibujar una solución o explicación adicional (`trial_day3_success.ts:26-47`; EN `trial_day3_success_en.ts:26-47`).
- [ ] `NO CONTRADECIR` — El mismo éxito distingue los 210 ejemplares sueltos de «210 colecciones completas»; el folio no debe forzar la interpretación errónea de la defensa (`trial_day3_success.ts:45-47`; EN `trial_day3_success_en.ts:45-47`).
- [ ] `NO CONTRADECIR` — La prueba se presenta como inventario de la masa concursal y no demuestra por sí sola qué ficha vendió Berrondo ni un homicidio (§24.D F1-F2, `docs/specs/case-5-el-tomo-trece.md:4153-4154`).

### F5 Estilo

- [ ] Contrato §23.0 completo pegado en el prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* de linaje GBA/Nintendo DS;  y ; contorno carbón nítido y continuo `#1A1A1A`, más grueso en la silueta; anatomía expresiva y caricaturesca; colores primarios saturados; televisión mexicana de los setenta / universo Chespirito; registro de papel, madera, polvo, archivo judicial, expedientes, madera barnizada, latón envejecido y luz de tungsteno; prohibidos fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto en inglés salvo la variante EN y cualquier rosa o magenta en primer plano (§23.0, `docs/specs/case-5-el-tomo-trece.md:3974-3980`).

### F6 Localización

- [ ] `PINTAR` — ES y EN conservan dos folios, grapado, membrete, columna numerada, posiciones relativas, cifras, fecha física y defectos del papel; sólo cambia el texto legible exigido por idioma (§23.3, `docs/specs/case-5-el-tomo-trece.md:4064`).
- [ ] `PINTAR` — El icono de Acta representa el mismo inventario en ambos idiomas; ES usa `assets/examine_inventario.webp` y EN `assets/examine_inventario_en.webp` (`EvidenceCatalogCase5EsB.ts:17-22`; `EvidenceCatalogCase5EnB.ts:17-22`).
- [ ] `NO CONTRADECIR` — No trasladar al inventario la regla de la `s` minúscula caída: esa regla afecta a las láminas mecanografiadas cuestionadas que §23.3 enumera, no a este documento salvo que una traducción del propio folio la exigiera explícitamente (§23.3, `docs/specs/case-5-el-tomo-trece.md:4068`).

## Consistencia (regenerar juntos)

- `examine_maquina` / `maquina_escribir` — comparte la identidad de la Olivetti Lexikon 80, su partida 41 y el cotejo posterior; regenerar juntos, este activo no es fuente de verdad del otro.
- `examine_huacal9` / `huacal_9` — comparte el contexto de la masa concursal, el depósito y la relación probatoria con la partida 44; regenerar juntos, este activo no es fuente de verdad del otro.
- `bg_bodega_masa` — comparte la máquina partida 41, los ejemplares de lujo y el depósito de bienes; regenerar juntos, este activo no es fuente de verdad del otro.
- `fichero_cedulario` — comparte el cedulario y la distinción entre 11,400 históricos y 11,407 físicos actuales; regenerar juntos, este activo no es fuente de verdad del otro.
- `plate_masa_concursal` — comparte el concepto de masa concursal y las 47 partidas como dato del inventario, pero no debe pintar el contenido físico exacto del huacal; regenerar juntos, este activo no es fuente de verdad del otro.
- `examine_inventario_en` — gemelo localizado: misma composición, soporte, posiciones, cifras y marcas físicas; cambia sólo el texto legible al inglés; regenerar juntos, este activo no es fuente de verdad del otro.

## Conflictos abiertos

- No queda una discrepancia de canon sin resolver para este activo. La diferencia entre **11,400** del inventario histórico y **11,407** del fichero físico actual está declarada como una distinción temporal y probatoria en §24.D F1/I9, no como una cifra que deba mezclarse dentro del folio de 1971 (`docs/specs/case-5-el-tomo-trece.md:4153,4184`).
- §24.D I54 fija explícitamente que las 47 partidas pertenecen al **inventario de la masa concursal** y no equivalen al contenido físico exhaustivo del huacal 9 (`docs/specs/case-5-el-tomo-trece.md:4229`). Se conserva como límite de aceptación, no como conflicto pendiente.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, por protocolo. No se confirma ni se descarta ningún defecto visual del archivo actual.
- La hoja se deriva únicamente del spec, los catálogos ES/EN y los guiones citados; no se ejecutaron tests, lint, auditorías ni procesamiento de assets.
