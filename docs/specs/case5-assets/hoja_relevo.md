# hoja_relevo — hoja de hechos

Clase: `icon`. Espec: §23.0, §5.1 y §23.5. Guion directo: §10.1, §11.3; `src/case/case5/Private/celda_talks.ts:63-66`, `celda_talks_en.ts:63-66`, `trial_day1_t2.ts:104-124`, `trial_day1_t2_en.ts:104-124`, `trial_day1_success.ts:48-62` y `trial_day1_success_en.ts:48-62`. Catálogo: `src/state/Private/EvidenceCatalogCase5EsA.ts:20-23` y `EvidenceCatalogCase5EnA.ts:20-23`. No existe variante `_en` del icono.

## Mapa semántico y alcance

- Icono de prueba del Acta: una hoja de relevo de custodia del Archivo Judicial correspondiente al 4 de diciembre.
- Documento material: registro de la reja del pasillo 7, con cuatro firmas y cuatro horas: Rangel y Nieto salen a las 17:00; Cadena y Solís entran a las 17:15.
- Argumento que debe conservar: hay una brecha de quince minutos sin ningún custodio asentado en la reja.
- Es una pieza documental centrada sobre fondo transparente, no una vista del Archivo, no una lámina de examen y no una reconstrucción del movimiento físico de los custodios.
- El texto ES y EN del catálogo describe el mismo documento; las horas y los nombres son identidad probatoria compartida, no una invitación a inventar datos adicionales.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Hoja/documento de relevo de custodia reconocible como prueba individual del Archivo Judicial, centrada y aislada para el estilo de iconos del Acta (§5.1, línea 270; §23.5, líneas 4086-4090).
- [ ] `PINTAR` — Cuatro firmas o marcas de firma distribuidas en el documento: Rangel, Nieto, Cadena y Solís (§5.1, línea 270; `EvidenceCatalogCase5EsA.ts:20-23`; `EvidenceCatalogCase5EnA.ts:20-23`).
- [ ] `PINTAR` — La composición debe distinguir dos pares: turno saliente Rangel/Nieto y turno entrante Cadena/Solís (§4.2, líneas 217, 223 y 231; §5.1, línea 270).
- [ ] `NO CONTRADECIR` — El registro corresponde a la reja del pasillo 7, no a una entrada pública, al libro de visitas o al libro de peritos (§4.2, líneas 217, 223 y 231; §24.A, líneas 4124-4127).
- [ ] `NO CONTRADECIR` — La hoja acredita la ausencia de custodios asentados durante el intervalo, pero no debe convertir el icono en una escena con personajes, una vista de la reja o una prueba de quién cometió el crimen (§5.1, línea 270; §24.A, línea 4125).

### F2 Texto en imagen

- [ ] `NO CONTRADECIR` — El spec exige que el icono siga el estilo de Acta —objeto centrado, fondo transparente y contorno carbón— pero no exige que las cuatro firmas u horas sean legibles en el tamaño del icono (§23.5, líneas 4086-4090).
- [ ] `AUSENTE` — No añadir rótulos explicativos, flechas, círculos, realces, nombres de personajes ajenos, conclusiones judiciales ni texto narrativo; esas afirmaciones viven en la descripción del catálogo y en el juicio (§23.5, líneas 4086-4090; §11.3, líneas 1114-1128).
- [ ] `NO CONTRADECIR` — Si se incluyen marcas documentales legibles, deben corresponder sólo al registro de salida/entrada de estos cuatro custodios; no imprimir una hora intermedia que sugiera que alguien vigiló la reja entre las firmas (§4.2, líneas 223 y 231; §24.A, línea 4125).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — Fecha del documento: 4 de diciembre (§5.1, línea 270; `EvidenceCatalogCase5EsA.ts:22`; `EvidenceCatalogCase5EnA.ts:22`).
- [ ] `NO CONTRADECIR` — Rangel y Nieto firman su salida a las 17:00 / 5:00 PM (§4.2, línea 223; §11.3, líneas 1120-1122; `celda_talks.ts:64`; `celda_talks_en.ts:64`).
- [ ] `NO CONTRADECIR` — Cadena y Solís firman su entrada a las 17:15 / 5:15 PM (§4.2, línea 231; §11.3, líneas 1120-1124; `celda_talks.ts:65`; `celda_talks_en.ts:65`).
- [ ] `NO CONTRADECIR` — La consecuencia canónica es una brecha de quince minutos, entre las 17:00 y las 17:15, con la reja sin vigilancia asentada (§5.1, línea 270; §11.3, líneas 1123-1128; §24.A, línea 4125).
- [ ] `NO CONTRADECIR` — El intervalo cae dentro de la ventana de muerte fijada entre las 17:00 y las 17:30, pero la hoja no fija por sí sola la hora exacta de la muerte ni identifica al agresor (§4.2, líneas 223-224; §24.A, líneas 4117-4125; §24.D, I16 en `case-5-el-tomo-trece.md:4198`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En la celda del D1, el alguacil entrega la hoja engrapada aparte; la defensa la resume como cuatro firmas y cuatro horas antes de añadir `hoja_relevo` al Acta (`celda_talks.ts:63-66`; `celda_talks_en.ts:63-66`; §10.1, líneas 592-596).
- [ ] `PINTAR` — En el D1-T2, la declaración 6 remite expresamente a la hoja para responder a qué hora llegaron Cadena y Solís a la reja (`trial_day1_t2.ts:104-124`; `trial_day1_t2_en.ts:104-124`; §11.3, líneas 1103-1114).
- [ ] `NO CONTRADECIR` — La presentación debe sostener que Rangel/Nieto salen a las cinco y Cadena/Solís entran a las cinco y cuarto; el éxito verbaliza cuatro firmas, cuatro horas y quince minutos sin custodio (§11.3, líneas 1114-1128; `trial_day1_success.ts:48-62`; `trial_day1_success_en.ts:48-62`).
- [ ] `NO CONTRADECIR` — El Sargento dice que Rangel y Nieto entregaron a las cinco y que los entrantes fueron Cadena y Solís, pero admite que la hora de llegada está en la hoja; el icono no debe mostrar información distinta a ese documento (`trial_day1_t2.ts:111-114`; `trial_day1_t2_en.ts:111-114`).
- [ ] `NO CONTRADECIR` — La prueba abre una ventana material para el crimen, no una acusación contra los custodios ni una identificación del culpable; la corte sólo asienta que el pasillo estuvo abierto y sin vigilancia entre 17:00 y 17:15 (`trial_day1_success.ts:54-62`; `trial_day1_success_en.ts:54-62`; §24.A, línea 4125).

### F5 Estilo y prohibidos

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D HD estilo *Capcom Ace Attorney* de linaje GBA/Nintendo DS; cel-shading de colores planos con terminador duro, dos tonos por superficie y ; contorno continuo carbón `#1A1A1A`, más grueso en la silueta exterior; anatomía expresiva y caricaturesca; paleta primaria saturada (§23.0, líneas 3974-3978).
- [ ] Contrato §23.0 completo en el prompt: televisión mexicana de los años setenta / universo Chespirito, melodrama judicial tratado con seriedad y registro de papel, madera, polvo, archivo judicial, listones, madera barnizada, latón envejecido y luz de tungsteno (§23.0, líneas 3978-3979).
- [ ] `PINTAR` — Aplicar el estilo ya establecido de icono de Acta: objeto centrado, fondo transparente y contorno carbón (§23.5, líneas 4086-4089).
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano de superhéroes, marcas de agua y cualquier rosa o magenta en primer plano (§23.0, líneas 3978-3980).
- [ ] `AUSENTE` — Personajes, reja completa, pasillo, mesa, cuerpo, tomo, flechas, círculos o realces de color; el icono representa el documento, no la escena ni su conclusión (§23.5, líneas 4086-4090; §11.3, líneas 1123-1128).

### F6 Localización

- [ ] `NO CONTRADECIR` — No crear `hoja_relevo_en.webp`: §23.5 no exige variante localizada para iconos, y ambos catálogos usan el mismo `EvidenceId` y la misma ruta de icono (`EvidenceCatalogCase5EsA.ts:20-23`; `EvidenceCatalogCase5EnA.ts:20-23`).
- [ ] `NO CONTRADECIR` — La composición física, los cuatro nombres y las dos horas son compartidos entre idiomas; sólo cambia la descripción legible del catálogo: «SALIDA/ENTRADA» en ES frente a “OUT/IN” en EN (`EvidenceCatalogCase5EsA.ts:21-23`; `EvidenceCatalogCase5EnA.ts:21-23`).
- [ ] `AUSENTE` — No aplicar la regla de variantes EN de láminas de examen ni introducir texto inglés en el icono por defecto; §23.0 sólo permite texto inglés en variantes EN exigidas, y ésta no existe (§23.0, línea 3980; §23.3, líneas 4064-4068; §23.5, líneas 4086-4090).

## Consistencia (regenerar juntos)

- `EvidenceCatalogCase5EsA.ts` ↔ `EvidenceCatalogCase5EnA.ts` — comparten un único icono para el mismo documento; las descripciones bilingües fijan cuatro custodios, salida a las 17:00, entrada a las 17:15 y una brecha de quince minutos. **Regenerar juntos, este activo no es fuente de verdad del otro** (`EvidenceCatalogCase5EsA.ts:20-23`; `EvidenceCatalogCase5EnA.ts:20-23`).
- `celda_talks.ts` ↔ `celda_talks_en.ts` — las dos escenas entregan la misma prueba después de verbalizar cuatro firmas, las horas y el hueco de quince minutos. **Regenerar juntos para comprobar el mismo contrato narrativo, este activo no es fuente de verdad del guion** (`celda_talks.ts:63-66`; `celda_talks_en.ts:63-66`).
- `trial_day1_t2.ts` ↔ `trial_day1_t2_en.ts` y `trial_day1_success.ts` ↔ `trial_day1_success_en.ts` — ambas localizaciones presentan la hoja como la respuesta visible a la declaración 6 y argumentan la misma ventana sin custodio. **Regenerar junto con el icono para comprobar paridad ES/EN, este activo no es fuente de verdad del guion** (`trial_day1_t2.ts:104-124`; `trial_day1_t2_en.ts:104-124`; `trial_day1_success.ts:48-62`; `trial_day1_success_en.ts:48-62`).
- `bg_archivo_pasillo7` — comparte la identidad de la reja del pasillo 7 y la escena del crimen, pero el fondo no es una fuente de verdad para el documento ni debe transferir personajes o props al icono. **Regenerar juntos para comprobar identidad espacial, este activo no es fuente de verdad de éste** (§23.1, línea 3987; §4.2, líneas 223 y 231).

## Conflictos abiertos

- §23.5 exige un icono nuevo `hoja_relevo`, pero ambos catálogos todavía apuntan `icon` a `assets/bitacora_transmision.webp`, el marcador reutilizado del Caso 3 (`docs/specs/case-5-el-tomo-trece.md:4086-4090`; `src/state/Private/EvidenceCatalogCase5EsA.ts:20-23`; `src/state/Private/EvidenceCatalogCase5EnA.ts:20-23`). Esta hoja no corrige el catálogo ni el archivo: queda pendiente generar el icono y actualizar la integración en el flujo correspondiente.
- §4.2 describe que los dos custodios «bajan a firmar» a las 17:00, mientras el hecho probado de §24.A fija sólo que el par saliente deja la reja a las 17:00 y el entrante llega a las 17:15 (`docs/specs/case-5-el-tomo-trece.md:223,231,4125`). El icono conserva las horas registradas y la brecha, sin resolver si las firmas ocurrieron físicamente abajo o en otro punto del edificio.
- El catálogo ES usa `Solís` y el catálogo EN usa `Solis`, aunque §23.0 prohíbe texto inglés salvo variantes EN exigidas; como no existe variante del icono, no se decide aquí si la marca manuscrita debe llevar acento visible o tratarse como una firma no legible (`EvidenceCatalogCase5EsA.ts:22`; `EvidenceCatalogCase5EnA.ts:22`; §23.5, líneas 4086-4090).

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, conforme al protocolo `asset-facts`; por tanto, no se confirma ningún defecto visual de la generación actual. Esta hoja contiene únicamente hechos derivados del spec, catálogos y guiones ES/EN.
