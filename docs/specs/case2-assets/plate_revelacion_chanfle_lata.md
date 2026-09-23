# plate_revelacion_chanfle_lata — hoja de hechos
Clase: plate (ilustración narrativa propuesta para pantalla completa). Espec: §1, §4, §9, sin §23.x. Guion: §9, «El Gran Clímax: ¿Dónde se Oculta el Chanfle de Oro?» / «Elección de Prueba Clímax 1: El Oro»; `src/case/case2/Private/climax.ts`.

## Descripción de la imagen

Una ilustración amplia del instante en que la tapa de la lata de grasa de zapatos acaba de ceder sobre la mesa de la defensa. En primer plano, la lata negra del Chómpiras aparece abierta. Dentro yace la estatuilla prehispánica de oro macizo: una figura en plena patada a una pelota, con la pelota junto al pie que golpea. La pieza completa debe caber en la lata cerrada; al abrirla se reconoce la acción sin hacer flotar la pelota ni ponerla en una mano. Polvo dorado brillante cae desde la junta y el resplandor cálido del Chanfle ilumina el lado de la defensa. Detrás debe reconocerse el panelado nítido de `bg_defense`, sin el escudo ni las cortinas del ángulo de la fiscalía. Mesa, lata y pared comparten una cámara apenas elevada: se ve el frente de la lata y sólo una elipse poco profunda de su abertura. No añadir rótulos, diálogo, flechas ni círculos. La misma ilustración sirve para español e inglés.

## Hechos a verificar

### F1 Contenido
- [ ] `PINTAR` — La lata grande de betún negro identificada como la lata del Chómpiras (§4, prueba 13).
- [ ] `PINTAR` — La tapa cedida y abierta, con el Chanfle de Oro visible dentro de la lata (§9, clímax, líneas de guion 521–523; `climax.ts`, línea 16).
- [ ] `PINTAR` — El Chanfle como estatuilla prehispánica de oro macizo con esmeraldas (§1; §4, pruebas 2 y 13).
- [ ] `PINTAR` — La figura de la estatuilla patea una pelota; la pelota queda junto al pie que ejecuta la patada (§1; §4, prueba 2, actualizados por corrección del usuario el 2026-09-22).
- [ ] `AUSENTE` — La pelota en la mano de la figura (§4, prueba 2).
- [ ] `PINTAR` — Polvo dorado brillante en la junta de la lata (§4, prueba 13; §9, clímax, líneas 521–523).
- [ ] `PINTAR` — Un resplandor dorado que ilumina la sala del tribunal (§9, clímax, línea 523; `climax.ts`, línea 16).
- [ ] `PINTAR` — La lata abierta reposa sobre la mesa de la defensa, con el panelado de `bg_defense` detrás; la mesa, la lata y la pared respetan un único punto de vista ligeramente elevado (§9, dirección de la placa tras «Revelación del oro», corrección del usuario del 2026-09-22).
- [ ] `AUSENTE` — El escudo y las cortinas del ángulo de la fiscalía (§9, dirección de la placa tras «Revelación del oro», corrección del usuario del 2026-09-22).
- [ ] `NO CONTRADECIR` — El Chanfle pesa 5 kg y la lata llena pesa aproximadamente 5.3 kg (§4, pruebas 2 y 13). No hace falta imprimir esas cifras.
- [ ] `NO CONTRADECIR` — La estatuilla completa, incluida la pelota, pudo ocultarse bajo la tapa sellada (§3, cronología, 9:35 PM; §9, clímax, líneas 519–523). Debe guardar una escala que quepa en la lata cerrada.
- [ ] `AUSENTE` — Betún visible cubriendo o tapando la estatuilla en el instante de la revelación: Peterete vació el betún antes de meter el oro y reselló la tapa con betún negro (§9, clímax, línea 521).

### F2 Texto en imagen
- [ ] No añadir texto, etiquetas ni cifras legibles. El spec sólo fija un logotipo del Chómpiras en la lata, pero no define su diseño ni texto exacto (§4, prueba 13); no inventar letras para completarlo.

### F3 Cifras/fechas/horas
- [ ] `NO CONTRADECIR` — 5 kg para el Chanfle; aproximadamente 5.3 kg para la lata llena (§4, pruebas 2 y 13). No deben aparecer como texto en la imagen.

### F4 Contrato en pantalla
- [ ] `PINTAR` — La lata contiene el Chanfle cuando la tapa cede; la imagen acompaña la exclamación narrativa y la luz dorada de la sala (`src/case/case2/Private/climax.ts`, línea 16; `src/case/case2/Private/climax_en.ts`, línea 16).
- [ ] `NO CONTRADECIR` — Peterete responde inmediatamente que es la lata del Chómpiras y que eso no lo incrimina (`src/case/case2/Private/climax.ts`, líneas 17–19; versión inglesa en `climax_en.ts`, líneas 17–19). La imagen no debe mostrar quién escondió la estatuilla ni adelantar la explicación posterior.
- [ ] `NO CONTRADECIR` — Las antenitas detectan una pista importante, pero no identifican qué activó la vibración (`src/state/Private/EvidenceCatalog.ts`, entrada `antenitas_vinil`). La ilustración representa la apertura, no una identificación previa hecha por las antenitas.

### F5 Estilo
- [ ] Antes de generar, fijar el tratamiento gráfico y formato final de la placa. El spec del Caso 2 no contiene §23.0 ni una guía de dirección de arte para esta ilustración.
- [ ] No usar fotorealismo, magenta en primer plano ni recursos de énfasis añadidos como flechas o círculos; no están pedidos por el guion.
- [ ] Conservar el panelado y los contornos limpios de `bg_defense` a la resolución final de 960 × 540; el fondo no debe perder nitidez por generaciones sucesivas (§9, dirección de la placa tras «Revelación del oro», corrección del usuario del 2026-09-22).

### F6 Localización
- [ ] Una sola placa compartida entre español e inglés: no lleva texto que localizar. La secuencia aparece en ambas versiones del clímax (`climax.ts` y `climax_en.ts`, línea 16).

## Consistencia (regenerar juntos)
- `chanfle_oro` — comparte la identidad de la estatuilla de oro con esmeraldas y la pose de patear la pelota. El icono corregido muestra la pelota junto al pie; esta placa no es fuente de verdad del icono.
- `lata_grasa` — comparte la lata negra del Chómpiras y el polvo dorado de su junta. Regenerar juntos si cambia su diseño; esta placa no es fuente de verdad del icono.
- `bg_defense` y `court_bench` — comparten el lado y la mesa de la defensa. Regenerar juntos si ese espacio se rediseña; esta placa no es fuente de verdad del fondo ni del mueble.

## Conflictos abiertos
- El spec del Caso 2 termina en §11 y no define §23.x, §23.0, ni la apariencia exacta del Chanfle o del logotipo del Chómpiras. La composición de esta hoja se limita a lo afirmado por la narración; el acabado gráfico queda pendiente de la guía visual del proyecto.
- El guion pide que la tapa ceda y la lata revele el oro, pero no fija la bisagra ni la posición exacta de la tapa. La corrección del usuario sí fija el lado de la defensa y una cámara apenas elevada.

## Hallazgos de auditoría 2026-09-22 — pasada 1

**Veredicto:** no cumple por consistencia de identidad.

**Cumple:** los recortes de estatuilla, lata, tapa, junta y tribunal de `tools/raw/case2/plate_revelacion_chanfle_lata_v1.png` muestran el oro con esmeraldas dentro de la lata abierta, polvo dorado y luz en la sala (F1, F4). El recorte de la lata confirma que no hay texto ni cifras añadidas (F2, F3, F6), y el interior visible no muestra betún que tape el oro (F1 AUSENTE).

**Defectos confirmados:**
- `MAYOR · DRIFT · Consistencia/F1` — la estatuilla generada está sentada y no tiene la esfera dorada sostenida en la mano que distingue al Chanfle del icono `chanfle_oro`; el jugador debe reconocer el mismo objeto cuando se abre la lata (§4, prueba 2; `src/case/case2/Private/climax.ts:16`).
- `MEDIO · DRIFT · Consistencia/F4` — el tribunal generado usa columnas claras y un estrado con escudo circular; el fondo compartido `bg_courtroom` muestra pared de madera, cortinas granate y una balanza central. El cambio de sala distrae de la continuidad del momento (`src/case/case2/Private/trial_day2.ts:11`; `climax.ts:16`).

**Recomendación:** editar la estatuilla con `chanfle_oro` como candado de identidad y acercar la arquitectura a `bg_courtroom`, sin perder la lectura de la pieza dentro de la lata.

## Hallazgos de auditoría 2026-09-22 — pasada 2

**Veredicto:** cumple en contenido, exclusiones, consistencia y localización. El estilo 2D de esta placa queda aceptado por revisión ante la ausencia de §23.0 en el spec del Caso 2.

**Cumple:** los recortes separados del WebP final `assets/plate_revelacion_chanfle_lata.webp` muestran una sola estatuilla de oro con esmeraldas, de pie y con la esfera alzada, todavía dentro de una sola lata negra abierta (F1, F4, Consistencia con `chanfle_oro` y `lata_grasa`). El recorte de tapa y junta muestra el resellado negro y el polvo dorado sin betún que oculte la pieza (F1, AUSENTE). El recorte del tribunal conserva los paneles de madera, cortinas granate y balanza central de `bg_courtroom`, iluminados por el oro (F1, F4, Consistencia). El recorte del frente de la lata muestra un emblema sin letras; no aparecen rótulos, cifras, marcas de agua ni elementos para traducir (F2, F3, F6). La imagen final mide 960 × 540 píxeles.

**Defectos confirmados:** ninguno en esta pasada.

**Correcciones de auditoría:** ~~La estatuilla sentada de la pasada 1 omitía la esfera~~; la placa final conserva la pose y esfera del icono `chanfle_oro`. ~~El fondo genérico de la pasada 1 no correspondía al tribunal compartido~~; la placa final usa sus rasgos visibles. Se conservan los hallazgos anteriores como traza de la corrección.

**Recomendación:** usar este WebP en la línea de apertura de la lata del clímax de Día 2 en español e inglés.

## Hallazgos de auditoría 2026-09-22 — pasada 3

**Veredicto:** no cumple tras la corrección canónica del usuario. La aprobación de la pasada 2 queda invalidada para la pose de la estatuilla.

**Cumple:** la lata abierta, el polvo, las esmeraldas, la luz y el tribunal siguen cumpliendo los hechos anteriores (F1, F2, F4, F6).

**Defectos confirmados:**
- `MAYOR · CONTRADICE · F1` — la estatuilla de la placa sostiene una pelota en la mano en vez de patearla (corrección del usuario, 2026-09-22; `src/case/case2/Private/climax.ts:16`).
- `MAYOR · DRIFT · Consistencia/F1` — el icono `assets/chanfle_oro.webp` también muestra la pelota en la mano; el mismo objeto debe corregirse junto con la placa (corrección del usuario, 2026-09-22; §4, prueba 2).
- `MEDIO · CONTRADICE · F1` — la figura erguida sobresale tanto de la lata que no cabe bajo la tapa mostrada; el crimen requiere que cupiera en la lata cerrada (§3, 9:35 PM; §9, líneas 519–523).

**Correcciones de auditoría:** ~~Veredicto «cumple» de la pasada 2~~; la corrección del usuario fija una pose distinta y revela el problema de escala. Los hechos de fondo y lata que sí pasaron se conservan.

**Recomendación:** regenerar placa e icono con una figura compacta en acción de patear, pelota junto al pie, ambos dentro del volumen de la lata; volver a auditar sus recortes por separado.

## Hallazgos de auditoría 2026-09-22 — pasada 4

**Veredicto:** cumple en contenido, exclusiones, contrato en pantalla, localización y consistencia. El estilo 2D queda aceptado por revisión mientras el spec del Caso 2 no tenga §23.0.

**Cumple:** el recorte `figura_patada_v3` del WebP final muestra una persona dorada con esmeraldas en postura de patada, ambas manos vacías y la pelota junto al pie extendido (F1, F4). El recorte `pelota_pie_v3` permite nombrar la pelota y el pie que la golpea; el icono final `assets/chanfle_oro.webp` repite esa identidad (F1, Consistencia). El recorte `lata_cierre_v3` muestra toda la pieza, incluida la pelota, dentro del volumen que cubriría la tapa, con una sola lata negra y un emblema sin letras (F1, F2). El recorte `tapa_polvo_v3` confirma la tapa abierta, el resellado negro y el polvo dorado sin betún que tape la pieza (F1, AUSENTE). El recorte `tribunal_v3` conserva madera, cortinas granate y balanza central, bañados por el resplandor (F1, F4, Consistencia con `bg_courtroom`). No hay cifras, rótulos ni texto que localizar (F2, F3, F6). La placa final mide 960 × 540 píxeles y el icono 128 × 128.

**Defectos confirmados:** ninguno en esta pasada.

**Correcciones de auditoría:** ~~La pelota estaba en la mano en la pasada 3~~; ahora toca el pie que patea. ~~La figura sobresalía de la lata cerrada~~; ahora yace completa bajo el borde. ~~El icono seguía la pose incorrecta~~; el icono regenerado también muestra la patada. Los hallazgos anteriores permanecen como traza.

**Recomendación:** usar `assets/plate_revelacion_chanfle_lata.webp` en la línea de apertura de la lata del clímax del Día 2 para ambos idiomas. Conservar `tools/raw/case2/plate_revelacion_chanfle_lata_raw.png` y `tools/raw/case2/chanfle_oro_kick_raw.png` como fuentes de regeneración.

## Hallazgos de auditoría 2026-09-22 — pasada 5

**Veredicto:** cumple en ubicación, perspectiva, nitidez, contenido y localización. La aprobación de la pasada 4 queda reemplazada para el fondo y la cámara por la corrección del usuario.

**Cumple:** el recorte `wall` muestra el panelado nítido y la columna central de `bg_defense`, sin escudo ni cortinas de la fiscalía (F1, F5, Consistencia). El recorte `bench` muestra la lata apoyada sobre la mesa de la defensa; su borde y la abertura comparten una vista ligeramente elevada con la mesa (F1). Los recortes `tin`, `statue_ball` y `lid_seal` muestran una lata negra abierta, la figura dorada con esmeraldas, pelota ante el pie que patea, manos vacías, tapa abierta y polvo dorado en la junta; la pieza sigue contenida en la lata (F1, F4). El frente de la lata y los paneles tienen contornos limpios en el WebP final de 960 × 540 (F5). No hay texto ni cifras para localizar (F2, F3, F6).

**Defectos confirmados:** ninguno en esta pasada.

**Correcciones de auditoría:** ~~La pasada 4 aceptaba el fondo con escudo y cortinas de `bg_courtroom`~~; la nueva dirección exige el lado de la defensa. ~~La lata se veía casi desde arriba ante una pared frontal~~; la nueva abertura es más somera y deja ver el frente de la lata. Se conserva la pasada anterior como traza.

**Recomendación:** usar `assets/plate_revelacion_chanfle_lata.webp` en la revelación de ambos idiomas. `tools/raw/case2/plate_revelacion_chanfle_lata_raw.png` es la fuente vigente; `tools/raw/case2/plate_revelacion_chanfle_lata_v3.png` conserva la composición anterior.
