# bg_correspondencia — hoja de hechos

Clase: `bg`. Espec: §23.0, §23.1 y §23.3. Guion: §12.2; `src/case/case5/Private/correspondencia.ts`; `src/case/case5/Private/correspondencia_en.ts`.

## Mapa semántico

- Lugar y momento: oficina pequeña y atiborrada de correspondencia del Juzgado Séptimo, durante la investigación del Día 2, 7 de diciembre a las 10:00 AM (`docs/specs/case-5-el-tomo-trece.md:1404-1410`; `src/case/case5/Private/correspondencia.ts:17`).
- Elemento dominante: ventanilla de madera barnizada de 70 cm, con arco de latón y repisa gastada por los codos (`docs/specs/case-5-el-tomo-trece.md:3988`; `src/case/case5/Private/correspondencia.ts:18`).
- Fondo de trabajo: casilleros de madera de pared a pared, con etiquetas manuscritas y sobres rebosantes; fajos de oficios atados con hilo en el suelo (`docs/specs/case-5-el-tomo-trece.md:3988`).
- Lado derecho: fechador de hule sobre almohadilla de tinta morada y libro abierto, empastado en tela azul, con firmas garabateadas al margen (`docs/specs/case-5-el-tomo-trece.md:3988`; `src/case/case5/Private/correspondencia.ts:35`).
- Atrezzo secundario: calendario de pared de barbería con una señorita de los setenta y hojas dobladas; ventilador de aspas apagado sobre un archivero (`docs/specs/case-5-el-tomo-trece.md:3988`).
- Estado y encuadre: sin personajes en el fondo; luz fluorescente verdosa; el motor estampa `furniture: 'none'` y coloca los sprites de la Chimoltrufia sólo en el escenario de diálogo (`src/case/case5/Private/correspondencia.ts:15-27`).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Composición de oficina pequeña, saturada de correspondencia, con la ventanilla ocupando casi todo el cuadro (`docs/specs/case-5-el-tomo-trece.md:3988`).
- [ ] `PINTAR` — Ventanilla de madera barnizada de setenta centímetros, arco de latón y repisa visiblemente gastada por los codos (`docs/specs/case-5-el-tomo-trece.md:3988`; `src/case/case5/Private/correspondencia.ts:18`).
- [ ] `PINTAR` — Casilleros de madera de pared a pared, cargados de sobres y con etiquetas manuscritas (`docs/specs/case-5-el-tomo-trece.md:3988`).
- [ ] `PINTAR` — Fajos de oficios atados con hilo sobre el suelo (`docs/specs/case-5-el-tomo-trece.md:3988`).
- [ ] `PINTAR` — A la derecha, fechador de hule sobre almohadilla de tinta morada (`docs/specs/case-5-el-tomo-trece.md:3988`).
- [ ] `PINTAR` — Libro abierto empastado en tela azul, con firmas garabateadas al margen (`docs/specs/case-5-el-tomo-trece.md:3988`; `src/case/case5/Private/correspondencia.ts:35`).
- [ ] `PINTAR` — Calendario de pared de barbería con señorita de los setenta y hojas dobladas (`docs/specs/case-5-el-tomo-trece.md:3988`).
- [ ] `PINTAR` — Ventilador de aspas apagado encima de un archivero (`docs/specs/case-5-el-tomo-trece.md:3988`).
- [ ] `PINTAR` — Luz fluorescente verdosa, sin personajes dentro del fondo (`docs/specs/case-5-el-tomo-trece.md:3988`).

### F2 Texto en imagen

- [ ] `AUSENTE` — No debe haber texto legible en el fondo (`docs/specs/case-5-el-tomo-trece.md:3988`). Las etiquetas de los casilleros y las firmas del libro pueden existir como marcas manuscritas indistintas, pero no deben revelar palabras, nombres, fechas ni el contenido del oficio.
- [ ] `AUSENTE` — No imprimir en el fondo el texto del oficio 4471, el nombre de C. Lengua, “29 NOV” ni la rúbrica azul: esos detalles pertenecen al `detailedView` de `acuse_notificacion` (`docs/specs/case-5-el-tomo-trece.md:1438-1441`, `docs/specs/case-5-el-tomo-trece.md:4052`).

### F3 Cifras/fechas/horas

- [ ] `NO CONTRADECIR` — La escena se presenta el 7 de diciembre a las 10:00 AM (`docs/specs/case-5-el-tomo-trece.md:1410`; `src/case/case5/Private/correspondencia.ts:17`). La fecha y hora no deben convertirse en texto visible del fondo.
- [ ] `NO CONTRADECIR` — La ventanilla mide setenta centímetros y por ella pasan cuatro mil oficios al mes (`src/case/case5/Private/correspondencia.ts:18`, `src/case/case5/Private/correspondencia_en.ts:18`). Son datos de narración, no rótulos que deban pintarse.
- [ ] `NO CONTRADECIR` — La diligencia mencionada por el diálogo es del 4 de diciembre a las 17:00; la notificación se consulta en el libro durante la interacción, no en la escenografía (`src/case/case5/Private/correspondencia.ts:22`, `src/case/case5/Private/correspondencia.ts:37-44`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — El fondo debe permanecer como la oficina de correspondencia mientras se muestra la introducción y el diálogo de la Chimoltrufia; el guion estampa explícitamente `bg_correspondencia` y `furniture: none` (`src/case/case5/Private/correspondencia.ts:17`; `src/case/case5/Private/correspondencia_en.ts:17`).
- [ ] `PINTAR` — La ventanilla debe hacer creíble la línea de que por ella pasan cuatro mil oficios al mes (`src/case/case5/Private/correspondencia.ts:18-23`; `src/case/case5/Private/correspondencia_en.ts:18-23`).
- [ ] `PINTAR` — El libro azul debe ser reconocible como el objeto del único hotspot `hotspot_libro_acuses`, situado en el lado derecho del encuadre (`src/case/case5/Private/correspondencia.ts:31-35`).
- [ ] `PINTAR` — La composición debe admitir que el jugador examine el libro y luego reciba `acuse_notificacion`; la escena sólo describe firmas marginales y el hallazgo, mientras la prueba contiene los datos legibles (`src/case/case5/Private/correspondencia.ts:35-44`; `src/state/Private/EvidenceCatalogCase5EsA.ts:84-90`).
- [ ] `NO CONTRADECIR` — La conversación posterior identifica al visitante como un señor mayor elegante de traje negro con cadenita de reloj y conduce al despacho de Berrondo; el fondo no debe incluir una persona, retrato identificable o letrero que anticipe esa revelación (`src/case/case5/Private/correspondencia_talks.ts:8-29`; `src/case/case5/Private/correspondencia_talks_en.ts:8-29`).
- [ ] `NO CONTRADECIR` — F18 se aprende aquí sólo para el jugador: cambio de custodios a las 17:00 y llegada de Balbuena nunca antes de las 17:15. No debe aparecer como texto o cartel de la habitación (`docs/specs/case-5-el-tomo-trece.md:4170`).

### F5 Estilo

- [ ] Contrato §23.0 completo pegado en el prompt de regeneración: ilustración 2D HD estilo *Capcom Ace Attorney* de linaje GBA/Nintendo DS; cel-shading de colores planos con terminador duro, dos tonos por superficie y ; contorno continuo carbón `#1A1A1A`, más grueso en silueta exterior; anatomía expresiva; paleta primaria saturada; televisión mexicana setentera / Chespirito; registro de papel, madera, polvo, archivo judicial, listones, madera barnizada, latón envejecido y luz de tungsteno (`docs/specs/case-5-el-tomo-trece.md:3974-3980`).
- [ ] `AUSENTE` — Prohibidos: fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano de superhéroes, marcas de agua, texto en inglés salvo variantes EN exigidas y cualquier rosa o magenta en primer plano (`docs/specs/case-5-el-tomo-trece.md:3978-3980`).

### F6 Localización

- [ ] `COMPARTIDO` — No existe `bg_correspondencia_en.webp`: las escenas española e inglesa apuntan al mismo `assets/bg_correspondencia.webp` (`src/case/case5/Private/correspondencia.ts:12`; `src/case/case5/Private/correspondencia_en.ts:12`).
- [ ] `COMPARTIDO` — La composición, objetos, medidas, fechas físicas y marcas deben ser idénticos en ambos idiomas. El texto legible está prohibido en este fondo, así que no se crea una variante EN ni se traduce la escenografía (`docs/specs/case-5-el-tomo-trece.md:3988`; `src/case/case5/Private/correspondencia_en.ts:17-44`).
- [ ] `NO CONTRADECIR` — Las variantes EN traducen el diálogo y el nombre del hotspot (`Receipt Ledger`), pero no cambian la imagen (`src/case/case5/Private/correspondencia_en.ts:31-44`).

## Consistencia (regenerar juntos)

- `examine_acuse` / `acuse_notificacion` — comparte el libro azul, el asiento marginal, el fechador morado y la función narrativa de entregar la notificación. Regenerar juntos, este activo no es fuente de verdad del otro; el `detailedView` es el que fija el texto legible, la rúbrica azul y “29 NOV” (`docs/specs/case-5-el-tomo-trece.md:1438-1441`; `docs/specs/case-5-el-tomo-trece.md:4052`).
- `correspondencia.ts` ↔ `correspondencia_en.ts` — gemelos de idioma del mismo fondo compartido. Regenerar juntos sólo para verificar que ambos apuntan al mismo WebP; este activo no es fuente de verdad del guion localizado (`src/case/case5/Private/correspondencia.ts:12-18`; `src/case/case5/Private/correspondencia_en.ts:12-18`).

## Conflictos abiertos

- No se detectó una discrepancia textual que requiera resolver en el spec. La frase “sin texto legible” para el fondo coexiste coherentemente con etiquetas y firmas indistintas en la escenografía y con texto legible reservado para `examine_acuse` (`docs/specs/case-5-el-tomo-trece.md:3988`, `docs/specs/case-5-el-tomo-trece.md:4052`).
- No se registran activos nuevos: `bg_correspondencia.webp` está declarado en §23.1 y utilizado por las variantes ES/EN.

## Hallazgos de auditoría 2026-09-19

- ~~No se inspeccionó ninguna imagen, conforme al protocolo `asset-facts`; por tanto, no se confirma ningún defecto visual de la generación actual.~~ [x] SUPERADO POR REVISIÓN (2026-09-19): pasada posterior del protocolo `asset-audit` con conversión PNG y recortes ampliados por sustantivo; los hallazgos de esa inspección son los de abajo.

**Veredicto:** No cumple en contenido (F1): el ventilador de aspas exigido encima del archivero no aparece. Cumple en estilo (F5), exclusión de texto con un matiz (F2), cifras (F3), contrato en pantalla (F4) y localización (F6). Sin personajes ni magenta en primer plano.

**Cumple:**

- F1 — Composición de oficina atiborrada con la ventanilla dominando el cuadro: ✓ (recorte 01).
- F1 — Ventanilla de madera barnizada con arco de latón remachado y repisa con barniz descascarado por el uso: ✓, se nombra sin ayuda de la hoja (recorte 01).
- F1 — Casilleros de madera cargados de sobres rebosantes con etiquetas manuscritas: ✓ como objeto (recortes 02, 03, 10); el matiz de «pared a pared» queda como defecto MENOR abajo.
- F1 — Fajos de oficios atados con cordel sobre el suelo, a la izquierda: ✓ (recorte 04).
- F1 — Fechador de hule con perilla sobre almohadilla de tinta morada, a la derecha: ✓ (recorte 05).
- F1 — Libro abierto empastado en tela azul con asientos y firmas garabateadas: ✓ (recorte 06); ocupa el interior de la zona del hotspot `hotspot_libro_acuses` (x 65–96 %, y 67–89 %).
- F1 — Calendario de pared tipo barbería con señorita setentera y hojas dobladas en el borde inferior: ✓ (recorte 07); el matiz de sus dígitos queda como defecto MENOR abajo.
- F1 — Luz fluorescente verdosa encendida y ausencia de personajes: ✓ (recortes 09 y full).
- F2 — Etiquetas de casilleros y gavetas del archivero son rayajes ilegibles; las entradas del libro son garabatos indistintos sin palabras, nombres ni fechas: ✓ (recortes 06, 10, 11).
- F2/F3 — No aparece «29 NOV», el oficio 4471, C. Lengua ni rúbrica azul; no hay fecha/hora de la escena ni dato de la diligencia impresos en la escenografía: ✓ (recortes 06, 07, 12).
- F4 — El libro azul es reconocible como el objeto del único hotspot y está al lado derecho del encuadre (`src/case/case5/Private/correspondencia.ts:31-35`): ✓ (recorte 06).
- F4 — La saturación de correspondencia hace creíble el «cuatro mil oficios al mes» (`src/case/case5/Private/correspondencia.ts:18`): ✓.
- F4 — No hay persona, retrato del señor mayor elegante ni letrero que anticipe la revelación de `quien_firmo_acuse` (`src/case/case5/Private/correspondencia_talks.ts:8-29`): ✓; la señorita del calendario es un pin-up genérico, no un retrato del visitante.
- F4 — Nada en el fondo imprime F18 (relevo de custodios a las 17:00, Balbuena): ✓.
- F5 — Cel-shading plano con terminador duro, contorno carbón continuo, paleta cálida de madera/latón/papel, sin degradados suaves, sin fotorrealismo ni marcas de agua ni texto en inglés: ✓ (recortes 01, 05, 06).
- F6 — No existe `bg_correspondencia_en.webp`; ambos gemelos apuntan a `assets/bg_correspondencia.webp` (`src/case/case5/Private/correspondencia.ts:12`; `src/case/case5/Private/correspondencia_en.ts:12`) y la escenografía no contiene texto que «resuelva» la traducción: ✓.

**Defectos confirmados:**

- `AUSENTE` / MEDIO / F1 — El «ventilador de aspas encima de un archivero, apagado» no existe: el tope del archivero lleva sólo una pila de legajos oscuros (recortes 08, 11). En su lugar se pintó un ventilador de techo colgante sobre los casilleros, elemento que la hoja no pide (recorte 09). Rompe el literal `docs/specs/case-5-el-tomo-trece.md:3988` sin romper diálogo directo (`src/case/case5/Private/correspondencia.ts:17`).
- `CONTRADICE` / MENOR / F1 — Los casilleros no van «de pared a pared»: la hilada arranca en el muro izquierdo pero se detiene hacia el 75 % del fondo, dejando muro liso con el calendario y el archivero a la derecha (recorte completo y 03). Literal `docs/specs/case-5-el-tomo-trece.md:3988`.
- `CONTRADICE` / MENOR / F2 — El calendario lleva una retícula con dígitos impresos semilegibles (se distinguen «29», «30», «24», etc.; recorte 12). La hoja sólo tolera marcas manuscritas indistintas (etiquetas y firmas), y ningún texto legible en el fondo. Los dígitos son genéricos: no nombran mes, no marcan el 4 ni componen «29 NOV», por lo que no sube a F3. Literal `docs/specs/case-5-el-tomo-trece.md:3988`.

**Correcciones de auditoría:**

- El ✓ implícito de la pasada `asset-facts` («sin defectos visuales confirmados») se retira por revisión con recortes; trazas arriba.
- Ningún ✓ de esta pasada fue desmentido por su recorte; el matiz de «pared a pared» y los dígitos del calendario se registran como defectos MENOR, no como retiro de cumplidos (el objeto casillero y el objeto calendario se nombran correctamente).

**Recomendación** (regeneración, en orden del conjunto de consistencia):

1. Añadir en el tope del archivero de la derecha un ventilador de aspas de mesa, apagado, estático; retirar el ventilador de techo colgante o dejarlo fuera de cuadro para no duplicar el motivo.
2. Continuar la hilera de casilleros hasta la esquina derecha (pared a pared) o desplazar calendario y archivero de modo que la retícula de madera cierre contra el muro.
3. Sustituir los dígitos impresos de la retícula del calendario por trazos indistintos (rayitas como las etiquetas de los casilleros), sin números legibles ni nombre de mes.
4. Mantener sin cambios ventanilla, arco de latón, fechador, almohadilla morada, libro azul, fajos del suelo y luz fluorescente: son conformes y anclan el hotspot.

## Reemplazo visual 2026-09-20

El fondo fue sustituido por la imagen adjunta y reprocesado mediante `process_case5_assets.py` a `assets/bg_correspondencia.webp` (1536×1024). La nueva composición conserva la ventanilla, el arco, los fajos, el fechador morado, el libro azul y la iluminación; incorpora el ventilador de mesa apagado sobre el archivero y no introduce texto narrativo legible. El hotspot compartido ES/EN se recalibró sobre el recorte `cover` 960×540 a `x: 65, y: 67, w: 31, h: 22`.
