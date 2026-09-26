# bg_archivo_caldera — hoja de hechos

Clase: `bg`. Espec: §23.0, §23.1 (`bg_archivo_caldera.webp`). Guion: §16.2, §17.1; variantes ES/EN de `src/case/case5/Private/archivo_caldera*.ts`.

El activo es un fondo compartido por las variantes española e inglesa. Representa el sótano del Archivo Judicial el 9 de diciembre a las 7:20 AM, ya enfriado, con la caldera y los dos secadores apagados. La caldera, el termógrafo y la bitácora están pintados dentro del fondo para que los hotspots de Examinar sólo activen diálogo y entreguen la prueba.

## Mapa semántico y alcance

Cuarto de máquinas estrecho del sótano, pegado al muro del pasillo 7. Las identidades visibles son la caldera central, dos secadores industriales con sus ruedas y ducto, el termógrafo de pared con su cable hacia la sonda remota del pasillo 7, la bitácora colgada, el tubo remendado y el suelo húmedo. El estado es posterior a dos días sin calefacción extraordinaria: fogón apagado, cuarto frío, sin personajes integrados.

Alias seguidos: `sala de calderas`, `caldera`, `secadores`, `ducto`, `termógrafo`, `tambor`, `tira`, `sonda`, `bitácora`, `pasillo 7`, `tubo reventado`.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Cuarto de máquinas estrecho del Archivo Judicial, visualmente ya enfriado tras dos días sin calefacción extraordinaria (§23.1, `docs/specs/case-5-el-tomo-trece.md:3993`; §16.2, `archivo_caldera.ts:17-18`).
- [ ] `PINTAR` — Al centro, caldera de hierro remachado con manómetros de latón y puertecilla de fogón; tuberías gruesas suben por el muro y se pierden en el techo (§23.1, línea 3993).
- [ ] `PINTAR` — A ambos lados, dos secadores industriales sobre ruedas, fuera de servicio, apuntando a un ducto abierto en el muro (§23.1, línea 3993; `archivo_caldera_hotspots.ts:15-20`).
- [ ] `PINTAR` — El ducto asciende hacia el pasillo 7; la sala de calderas comparte muro con ese pasillo (§4.1 P7, `docs/specs/case-5-el-tomo-trece.md:199`; `archivo_caldera_hotspots.ts:15-18`).
- [ ] `PINTAR` — En el muro derecho, termógrafo atornillado: caja de madera con tapa de vidrio, tambor de reloj, tira de papel cuadriculado y plumilla; la línea de tinta sube y se aplana (§23.1, línea 3993; `archivo_caldera_hotspots.ts:29`).
- [ ] `PINTAR` — Cable visible que asciende por el muro hasta la sonda remota del primer piso/pasillo 7; las lecturas pertenecen al aire de la escena del pasillo, no al sótano (§23.1, línea 3993; §4.1 P7; `archivo_caldera_hotspots.ts:30`).
- [ ] `PINTAR` — Junto al termógrafo, un clavo con la bitácora colgada de un cordel (§23.1, línea 3993; catálogo ES `EvidenceCatalogCase5EsB.ts:71-76`, catálogo EN `EvidenceCatalogCase5EnB.ts:71-76`).
- [ ] `PINTAR` — Suelo húmedo con mancha oscura bajo un tubo remendado con tela y alambre; fogón apagado y luz de un foco blanco (§23.1, línea 3993).
- [ ] `AUSENTE` — Personajes, cuerpos, escena del crimen, estante de consulta, huacal, máquina de escribir y cualquier mobiliario inventado; Sargento y Chómpiras entran como sprites separados (`archivo_caldera.ts:17-22`; `archivo_caldera_en.ts:17-22`).

### F2 Texto en imagen

- [ ] `AUSENTE` — Texto legible, rótulos explicativos, marcas de agua y texto en inglés no exigido; §23.1 termina en «Sin personajes, sin texto legible» y §23.0 prohíbe texto en inglés salvo variantes EN exigidas.
- [ ] `NO CONTRADECIR` — La tira cuadriculada, la bitácora y la marca de la sonda deben poder reconocerse como objetos funcionales, pero sus palabras, fechas y cifras pertenecen al `detailedView` `examine_termografo`, no al fondo (§16.2, línea 3013; catálogos ES/EN).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La escena se muestra el 9 de diciembre a las 7:20 AM; la fecha y hora son narración, no texto que deba aparecer en el fondo (§16.2, `archivo_caldera.ts:17`; `archivo_caldera_en.ts:17`).
- [ ] `NO CONTRADECIR` — La caldera y los secadores funcionaron desde el 3 de diciembre y fueron apagados el 7, dos días antes de la visita del 9; no pintar un reloj ni una fecha (§16.2, `archivo_caldera_hotspots.ts:17-18`; §24.D I45, `docs/specs/case-5-el-tomo-trece.md:4220`).
- [ ] `NO CONTRADECIR` — El termógrafo se instaló en 1964 por la humedad y gira una vez por semana; la tira del 4 de diciembre se archivó el domingo 5 (§16.2, `archivo_caldera_hotspots.ts:30-34`; §16.2, línea 3013).
- [ ] `NO CONTRADECIR` — La medición relevante sube de 19 °C a 31 °C y permanece en 31 °C hasta el 5; el contraste con la tabla forense de 20 °C se verifica en la lámina y el `detailedView`, no exige números legibles en el fondo (§16.2, líneas 3004-3009 y 3013; §17.1, líneas 3062-3076).

### F4 Contrato en pantalla

- [ ] `PINTAR` — La entrada de la escena estampa `bg_archivo_caldera.webp` con `furniture: none`; el fondo debe contener la caldera, los secadores, el termógrafo y la bitácora (`archivo_caldera.ts:9-24`; variante EN equivalente).
- [ ] `PINTAR` — El primer hotspot examina la caldera y los secadores ya apagados, sus ruedas, el ducto ascendente y la conexión con el pasillo 7 (`archivo_caldera_hotspots.ts:11-20`; variante EN equivalente).
- [ ] `PINTAR` — El segundo hotspot sólo aparece tras examinar la caldera y describe el tambor, la tira cuadriculada, la plumilla y el cable de la sonda (`archivo_caldera_hotspots.ts:24-31`; variante EN equivalente).
- [ ] `NO CONTRADECIR` — El termógrafo debe admitir la lectura narrativa de una línea que sube del 3 al 5 y queda sostenida; la prueba entregada es `bitacora_caldera` (`archivo_caldera_hotspots.ts:32-38`; §16.2, líneas 3004-3010).
- [ ] `NO CONTRADECIR` — La conversación posterior usa la bitácora y la tira para corregir la temperatura del forense: 31 °C sostenidos en el pasillo 7 frente a 20 °C en la tabla (§17.1, líneas 3059-3076). El fondo no debe sugerir que el termógrafo mide el sótano.
- [ ] `NO CONTRADECIR` — La misma visita comunica que la documentoscopia comparó tres documentos, pero no pudo obtener muestra de la Olivetti por estar en depósito judicial; ese argumento no requiere añadir documentos ni máquina al fondo (`archivo_caldera_hotspots.ts:39-50`; variante EN equivalente).

### F5 Estilo y prohibidos

- [ ] Repetir el contrato §23.0 completo en cualquier prompt: ilustración 2D HD estilo *Capcom Ace Attorney* de linaje GBA/DS; cel-shading plano con terminador duro; contorno continuo carbón `#1A1A1A`; caricatura expresiva; colores primarios saturados (§23.0, líneas 3974-3978).
- [ ] Mantener el registro de archivo judicial de papel, madera, polvo, latón envejecido y luz de tungsteno; aquí la dirección específica exige luz de foco blanco y ambiente frío tras el enfriamiento (§23.0, líneas 3978-3979; §23.1, línea 3993).
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto en inglés no exigido y cualquier rosa/magenta en primer plano (§23.0, líneas 3978-3980).
- [ ] `NO CONTRADECIR` — Dimensiones 1536 × 1024 y recorte `cover` a 960 × 540 (§23.1, líneas 3982-3984).

### F6 Localización

- [ ] `PINTAR` — ES y EN comparten `assets/bg_archivo_caldera.webp`; ambos módulos apuntan al mismo archivo (`archivo_caldera.ts:12,17`; `archivo_caldera_en.ts:12,17`). No crear `bg_archivo_caldera_en.webp`.
- [ ] `NO CONTRADECIR` — Composición, maquinaria, estado apagado, cableado, manchas y geometría son idénticos entre idiomas; sólo cambia la prosa de `archivo_caldera_hotspots.ts` y `_en.ts`.
- [ ] `NO CONTRADECIR` — No imprimir texto localizado en el fondo. Los números y palabras legibles de la bitácora/tira sólo pertenecen a `examine_termografo.webp` y `examine_termografo_en.webp` (catálogos ES/EN; §23.3, línea 4061).

## Consistencia (regenerar juntos)

- `examine_termografo` / `examine_termografo_en` — comparte el termógrafo, la tira semanal, la bitácora del 3 de diciembre y la nota de la sonda remota. Regenerar juntos; este activo no es fuente de verdad del otro.
- `bitacora_caldera` — comparte la identidad del conjunto de prueba que el hotspot entrega y que el catálogo representa como bitácora más tira del termógrafo. Regenerar juntos; este activo no es fuente de verdad del icono.
- `bg_archivo_pasillo7` — comparte el muro, el ducto, la sonda remota y el vínculo térmico con el pasillo 7; es un estado espacial distinto del primer piso. Regenerar juntos para conservar orientación y continuidad, este activo no es fuente de verdad del otro.
- `plate_curva_enfriamiento` — comparte los datos de 31 °C del pasillo 7 frente a 20 °C de la tabla forense, pero la lámina es una explicación abstracta y no una vista de la sala. Regenerar juntos si cambian las curvas o cifras; este activo no es fuente de verdad de la lámina.

## Conflictos abiertos

- §23.1 describe la línea de tinta del termógrafo como una línea que «sube y se aplana» (`docs/specs/case-5-el-tomo-trece.md:3993`), mientras §16.2 dice que la tira desenrollada muestra una línea que «sube y baja como una sierra» (`docs/specs/case-5-el-tomo-trece.md:3004`). El `detailedView` la fija como subida de 19 °C a 31 °C y plana en 31 °C hasta el 5 (`docs/specs/case-5-el-tomo-trece.md:3013`), y el diálogo dice que del 3 al 5 sube y se queda (`archivo_caldera_hotspots.ts:33-35`). No resolver aquí; la aceptación de la forma de la línea debe quedar unificada en el spec.
- §23.0 pide un registro general de luz de tungsteno, mientras §23.1 exige para esta sala «luz de un foco blanco» y ambiente ya enfriado (`docs/specs/case-5-el-tomo-trece.md:3979`; `:3993`). Tratarlo como una tensión de iluminación de escena, no inventar una segunda fuente de luz.

## Hallazgos de auditoría 2026-09-19

**Veredicto: CUMPLE** en contenido (F1), texto (F2), cifras (F3), contrato en pantalla (F4), estilo (F5) y localización (F6). Dos defectos confirmados, ambos `MENOR` (lectura parcial); no rompen ningún hotspot ni la identidad del activo. No se requiere regeneración.

### Cumple

- **F1** — Cuarto de máquinas estrecho y frío tras dos días sin calefacción: paleta apagada, fogón sin fuego, única luz de foco blanco colgante (F1.1).
- **F1** — Caldera central de hierro remachado con remaches legibles, dos manómetros de latón, tres llaves de latón y puertecilla de fogón arqueada entreabierta con interior oscuro y frío; tuberías gruesas salen por arriba y se pierden en el techo (F1.2).
- **F1** — Dos secadores industriales sobre carritos de ruedas, fuera de servicio, junto al muro izquierdo (F1.3).
- **F1** — Vano/ducto abierto enmarcado en el muro izquierdo al que apunta el secador trasero (F1.4, con matiz en Defectos).
- **F1** — Termógrafo de pared en el muro derecho: caja de madera con tapa de vidrio, tira de papel cuadriculado con línea de tinta, tambor de reloj (dial con índices, sin números) (F1.5).
- **F1** — Cable/conduit que asciende desde la parte superior del termógrafo hasta una caja de empalme y sale de cuadro hacia arriba (F1.6).
- **F1** — Bitácora con hojas colgada de un clavo por cordel, junto al termógrafo; coincide con la identidad del conjunto que entrega `bitacora_caldera` (`EvidenceCatalogCase5EsB.ts:71-76`, `EvidenceCatalogCase5EnB.ts:71-76`) (F1.7).
- **F1** — Suelo húmedo con mancha oscura y brillo bajo el tramo remendado (banda de óxido/tonelaje) del tubo del muro derecho; fogón apagado y foco blanco presentes (F1.8).
- **F1/AUSENTE** — Sin personajes, cuerpos, estanterías, huacal, máquina de escribir ni mobiliario inventado en ningún cuadrante (verificado por recortes de esquinas y pasada completa) (F1.9).
- **F2** — Sin texto legible, sin rótulos, sin marcas de agua, sin inglés: manómetros y dial sólo traen índices; la bitácora muestra garabatos ilegibles; la tira es cuadrícula pura. Tira, bitácora y línea se reconocen como objetos funcionales sin imprimir cifras (F2.1, F2.2).
- **F3** — Sin fecha ni hora impresas; el dial del termógrafo es el tambor exigido por F1 y no un reloj de pared narrativo; sin números legibles en el fondo (F3.1–F3.4).
- **F4** — Zonas de ambos hotspots pintadas: caldera+secadores cubren `x:16–64` (`archivo_caldera_hotspots.ts:13`) y el termógrafo cae dentro de `x:70–98, y:16–68` (`archivo_caldera_hotspots.ts:26`). La línea de tinta sube y remata en meseta, compatible con la lectura «del 3 al 5 sube y se queda» (`archivo_caldera_hotspots.ts:32-37`); el fondo no sugiere que el termógrafo mida el sótano (el cable asciende y sale de cuadro); sin documentos ni Olivetti añadidos (F4.1–F4.6).
- **F5** — 1536 × 1024 confirmado; cel-shading plano con terminador duro, contorno carbón, sin fotorealismo ni degradados suaves; sin rosa/magenta en primer plano (el remendo del tubo es óxido anaranjado, no magenta) (F5.1–F5.4).
- **F6** — Asset único: `assets/bg_archivo_caldera.webp` referido por `archivo_caldera.ts:12,17` y `archivo_caldera_en.ts:12,17`; no existe `bg_archivo_caldera_en.webp` en `assets/`; sin texto localizado que «resuelva» la traducción (F6.1–F6.3).

### Defectos confirmados

1. `AUSENTE` / MENOR — F1.4/F4.2: el vano del muro izquierdo se lee como tragaluz o registro recuado, no como «un ducto que sube por el muro» hacia el pasillo 7; además sólo el secador trasero apunta hacia él (el frontal apunta a la caldera). Rompe parcialmente la lectura de `src/case/case5/Private/archivo_caldera_hotspots.ts:15-16` («un ducto que sube por el muro… sube derechito al pasillo siete»), sin bloquear el hotspot: la oscuridad del vano deja la ascensión sin desmentir.
2. `AUSENTE` / MENOR — F1.5/F4.3: la plumilla del termógrafo no es visible en ningún recorte; la línea de tinta aparece sin brazo escritor. La describe `src/case/case5/Private/archivo_caldera_hotspots.ts:29` («una plumilla que raya una línea continua») mientras se mira este fondo; a la escala del fondo el elemento debía al menos insinuarse.

### Nota ligada a conflicto abierto

- La línea de tinta pintada sube con una sierra intermedia (pico y valle) y remata en meseta con leve declive. Satisface a medias ambos literales en tensión: la meseta final apoya «sube y se aplana» (§23.1, `docs/specs/case-5-el-tomo-trece.md:3993`) y el pico-valle apoya «sube y baja como una sierra» (§16.2, `:3004`). Conforme a esta hoja, no se resuelve aquí; se registra como `MENOR` a la espera de la unificación del spec (ver «Conflictos abiertos»).

### Correcciones de auditoría

- ~~«No se realizó auditoría visual ni se inspeccionó ninguna imagen…» (sección de 2026-09-19 previa)~~ — `[x] RETIRADO POR REVISIÓN (2026-09-19)`: se ejecutó la auditoría visual completa según `asset-audit` (conversión a PNG, un recorte ampliado por sustantivo F1, zonas de exclusión y verificación F2–F6). Los conflictos abiertos de la hoja no cambian; los dos defectos nuevos son de lectura parcial y no afectan los ✓ de contenido.

### Recomendación

Cumple; no requiere regeneración. Si se regenera por lotes con el conjunto de consistencia (`examine_termografo`, `bg_archivo_pasillo7`), incorporar en el prompt: (1) hacer que el vano del muro izquierdo se lea como ducto metálico que asciende por el muro hacia el techo (codo visible hacia arriba) con los dos secadores orientados hacia él; (2) insinuar la plumilla/apoyo del brazo escritor sobre la tira del termógrafo; (3) al unificarse el spec sobre la forma de la línea de tinta, ajustar la tira a la forma canónica elegida.
