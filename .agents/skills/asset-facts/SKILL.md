---
name: asset-facts
description: Collect the fact sheet of a single case asset (docs/specs/case-*.md §23.x and the guion) WITHOUT looking at any image — the spec is the source of truth. Produces one asset fact sheet under docs/specs/case5-assets with the facts to check, the on-screen narration contract, and the regenerate-together consistency set derived from the descriptions alone. Also documents required-but-missing assets in docs/specs/case5-assets/new-assets.md. Use when the user asks to collect facts for, or prepare the regeneration of, a generated asset, or before writing any asset generation prompt. To compare an existing image against the finished hoja, use the `asset-audit` skill instead.
---

# Fact sheet de un activo generado

Protocolo para pasar de "esta imagen se ve mal" a una **lista verificable de hechos** por activo. Existe porque una auditoría visual sin contrato previo caza lo que la lente de esa pasada ve y pierde el resto ([[docs/lessons-learned/case-spec-fact-ledger.md]]); y porque varios activos pintan la misma sala u objeto y driftan entre sí si no se regeneran del mismo contrato (el caso de `bg_archivo_pasillo7` vs `plate_foto_pericial` vs `examine_estante_consulta`).

Regla raíz: **la fuente de verdad es el spec, nunca la imagen.** Este skill no lee imágenes. El conjunto de consistencia indica *qué activos se regeneran juntos*; no convierte a los otros activos en fuente de verdad de éste.

## Paso 0 — Contexto

1. Leer [[docs/live/glossary.md]], [[docs/GUIDELINES.md]] y [[docs/architecture/asset-pipeline.md]].
2. Leer del spec del caso: §23 completo (dirección de arte, §23.0 es contrato de todo prompt), la sección de prueba/locación que usa el activo, y el Libro de hechos (§24 o equivalente).

## Paso 1 — Identificar el activo y construir su mapa semántico

Entrada: id de archivo sin extensión (p. ej. `plate_foto_pericial`, `examine_libro_visitas_en`, `nicanor_idle`). Normalizar: quitar sufijo `_en` para hallar el activo base; las variantes se auditan juntas. Clases: `bg`, `sprite`, `examine`, `plate`, `icon`, `profile`, `cutin`, `music`.

Localizar primero el nombre de archivo y el id de prueba/perfil asociado. Anotar §23.x, las líneas de catálogo y las líneas de guion que lo estampan. De esas entradas sacar un mapa corto de identidades que el activo pinta:

- lugar y momento, incluido el estado de trama;
- objetos y personas visibles;
- partes internas de cada objeto, como ranuras, lomos, sellos o manchas;
- alias usados por el spec o el guion, como `estante de consulta`, `estante de veinticuatro ranuras`, `el estante` o `ese mueble`;
- cifras y relaciones espaciales que distinguen la escena.

Ese mapa dirige las búsquedas siguientes. El nombre del archivo sólo abre la investigación; no define su alcance.

## Paso 2 — Seguir referencias indirectas hasta cerrar cada identidad

Buscar en el spec y en el guion cada término del mapa, sus alias y sus cifras distintivas. Leer el bloque completo alrededor de cada resultado. Una mención indirecta cuenta cuando describe el mismo lugar, objeto, persona, momento o estado que aparece en el activo, aunque no nombre el archivo ni el id de evidencia.

Recorrer, como mínimo, estas vistas del spec:

1. premisa y reconstrucción del crimen;
2. reglas espaciales o plano;
3. cronología;
4. tabla de pruebas y perfiles;
5. investigación, testimonios, presiones, láminas y clímax;
6. dirección de arte y `detailedView`;
7. Libro de hechos e invariantes.

Para un objeto compuesto, repetir el recorrido por cada parte que ya apareció. Ejemplo: si una foto contiene un estante, buscar también `ranura`, `lomo`, `tomo`, los números de ranura y las descripciones `completo`, `vacío` o `distinto`. Así, `plate_foto_pericial` hereda del mismo estante no sólo "24 ranuras", sino cualquier cantidad, material, color, posición o ausencia que el spec fije para ese momento.

Detener la expansión cuando una mención sólo aporte historia no visible y no pueda cambiar la aceptación del activo. No convertir asociaciones temáticas en requisitos gráficos.

Antes de escribir, hacer una pasada de cierre por cada identidad:

- ¿Cuántos hay y cuáles faltan o sobran?
- ¿Qué aspecto, material, color, texto o marca los distingue?
- ¿Dónde están y cómo se orientan entre sí?
- ¿Qué estado tienen en el momento representado?
- ¿Qué debe estar ausente?
- ¿Qué dice el diálogo mientras se ve el activo y qué afirmaciones posteriores dependen de haberlo visto así?
- ¿Qué debe poder leerse en la forma de cada objeto (partes, pose, ensamble de sus piezas) para que se reconozca como lo que el spec nombra? Registrar la prueba de lectura junto al hecho: una «silla volcada hacia atrás» necesita asiento, respaldo y patas en ángulos coherentes, no cualquier madero cruzado ([[docs/lessons-learned/presence-is-not-legibility.md]]).

## Paso 3 — Extraer y tipar los hechos

Cada hecho lleva una modalidad. Esto evita pedir texto o detalles que el spec sólo usa como contexto:

| Modalidad | Uso |
|---|---|
| `PINTAR` | Debe ser visible en el activo. |
| `NO CONTRADECIR` | Fija identidad, momento o geometría, pero no obliga a imprimir el dato. |
| `AUSENTE` | Algo que no debe aparecer en ese estado de trama. |
| `TEXTO EXACTO` | Cadena o marca que sí debe poder leerse. |

No convertir una hora narrada en un sello visible si §23 no lo pide. Tampoco interpretar "sin texto" como "sin números diegéticos" cuando otra sección exige cartoncitos numerados, una regla testigo o un marcador pericial. Registrar la diferencia y citar ambas fuentes.

Traducir los hechos al medio del activo. Una foto en blanco y negro conserva materiales, siluetas y contraste, pero no puede verificar un matiz verde o vino. Un icono recortado no hereda la habitación completa. Registrar el color o el contexto como identidad compartida en Consistencia y convertirlo en un criterio visible sólo cuando el encuadre y el medio permitan comprobarlo.

| # | Categoría | De dónde sale | Qué caza |
|---|---|---|---|
| F1 | Contenido obligatorio | §23.x + referencias directas e indirectas del mismo lugar/objeto/persona/estado | Elementos que la imagen debe contener, uno por línea verificable |
| F2 | Texto en la imagen | Cadenas exactas, marcas y numeración diegética de todas las vistas del mismo objeto | Texto pedido con su cadena exacta; numeración o marcas exigidas; y la prohibición de texto no pedido |
| F3 | Cifras, fechas, horas | El §23.x verificado contra el Libro de hechos (§24) | Toda cifra pintada se valida contra el libro, no contra el guion ([[docs/lessons-learned/visual-log-times-follow-canonical-timeline.md]]) |
| F4 | Contrato en pantalla | Usos directos del archivo, bloque contiguo que permanece en pantalla y búsquedas semánticas del mismo lugar/objeto en `src/case/case*/Private/*.ts` (es **y** `_en`) | Cada línea mostrada con el activo y cada afirmación posterior que depende de esa vista son hechos que la imagen no puede contradecir |
| F5 | Estilo y prohibidos | §23.0 (bloque completo, obligatorio en todo prompt) | Cel-shading AA, contorno carbón, sin fotorealismo, sin magenta en primer plano, sin flechas/círculos/realces salvo que el spec los pida |
| F6 | Localización | Reglas de §23.3 | Qué variantes `_en` existen, cuáles placas son compartidas, y la regla del defecto tipográfico (toda línea traducida conservar la `s` caída visible) |

Cada hecho se registra con modalidad y referencia (`§` o `archivo:línea`). Un hecho sin referencia no entra a la hoja. Si el requisito nace de una cadena indirecta, citar el eslabón que identifica el objeto en el activo y el que fija el detalle.

## Paso 4 — Conjunto de consistencia (se regeneran juntos)

Derivarlo **sólo de las descripciones**, no de las imágenes. Preguntar por cada entrada: ¿este activo y ese pinta el mismo espacio, objeto, persona o texto?

| Relación | Ejemplo | Por qué va en el lote |
|---|---|---|
| Misma sala | `bg_archivo_pasillo7` + `plate_foto_pericial` + `examine_estante_consulta` | El jugador los compara; piso, mesa, lámpara y libros deben ser una sola sala |
| Mismo objeto | icono `tomo_caido` + `examine_tomo_caido` + el tomo pintado en bg y foto | Color de tela, tejuelo, mancha: un solo diseño |
| Gemelos de idioma | `examine_libro_visitas` ↔ `_en` | Composición idéntica; sólo cambia el texto legible |
| Misma persona | poses de una hoja de sprites + `profile_perfil_*` recortado del idle | El idle es candado de identidad |
| Gemelos de estado de trama | pasillo 7 antes del crimen ↔ escena del crimen | Misma sala en dos estados; ver Paso 5 |

En la hoja, cada entrada lista: id, qué comparte, y la nota explícita **"regenerar juntos, este activo no es fuente de verdad del otro"**.

## Paso 5 — Detectar activos nuevos necesarios

Al reconstruir el contrato aparecen huecos. Cada hueco se registra en `docs/specs/case5-assets/new-assets.md` (crear el archivo si no existe) con: fecha, activo propuesto (nombre siguiendo las convenciones `_d2`/`_d3`/`_d4` de [[docs/lessons-learned/location-cast-rotation.md]]), evidencia con `archivo:línea`, y la sección de guion que lo necesita. Huecos a cazar:

1. **Un id usado en dos estados de trama incompatibles** (p. ej. un bg de escena del crimen estampado en un recuerdo anterior al crimen, §10.1).
2. Un activo referenciado por guion o catálogo pero ausente de las listas §23 (o viceversa).
3. Variante localizada exigida por §23.3 que no existe en `assets/`.
4. Prueba con `detailedView` sin placa, o icono de Acta faltante.
5. Activo reutilizado cuyo contenido pintado contradice su nuevo uso ([[docs/lessons-learned/reused-backgrounds-do-not-grow-props.md]]).

No resolver el hueco en el spec desde este skill: documentarlo y dejar la decisión al flujo normal.

## Paso 6 — Escribir la hoja

Destino: `docs/specs/case5-assets/<asset>.md` (base sin `_en`; cubre ambas variantes). Plantilla:

```markdown
# <asset> — hoja de hechos
Clase: <bg|sprite|examine|plate|icon|profile>. Espec: §23.x. Guion: <secciones>.

## Hechos a verificar
### F1 Contenido
- [ ] `PINTAR` — <hecho> (§23.x)
### F2 Texto en imagen
- [ ] `TEXTO EXACTO` — <cadena o marca> (§23.x)
### F3 Cifras/fechas/horas
- [ ] `NO CONTRADECIR` — <dato; aclarar si no debe imprimirse> (§24)
### F4 Contrato en pantalla
- [ ] `PINTAR|NO CONTRADECIR|AUSENTE` — <consecuencia visual de la línea> (archivo:línea)
### F5 Estilo
- [ ] Contrato §23.0 completo pegado en el prompt de regeneración
### F6 Localización
- [ ] <regla de la variante>

## Consistencia (regenerar juntos)
- <id> — comparte <qué>. No es fuente de verdad de éste.

## Conflictos abiertos
- <discrepancia entre vistas del spec, con refs; no resolver aquí>

## Hallazgos de auditoría <fecha>
- <defecto confirmado en la imagen actual, con severidad y tipo: `AUSENTE|CONTRADICE|MALFORMADO|DRIFT` (tipos y método definidos en el skill `asset-audit`)>
```

Cierre: la hoja queda como lista de verificación para la aceptación del activo regenerado. Si durante la extracción apareció un conflicto del spec (dos vistas que discrepan), listarlo en "Conflictos abiertos" y parar ahí: resolverlo es trabajo del spec, no del activo.

Antes de cerrar, verificar que cada sustantivo visible de F1 aparece en el mapa semántico y que cada entrada del mapa terminó en un hecho, una exclusión justificada o un conflicto abierto. Esta comprobación es la que evita perder referencias indirectas.

## Auditoría visual

Este skill no lee imágenes. La comparación de la imagen contra esta hoja es un protocolo aparte que **consume la hoja**: ver el skill `asset-audit` (`.agents/skills/asset-audit/SKILL.md`), que define el método por recortes, la prueba de nombrar y la taxonomía `AUSENTE|CONTRADICE|MALFORMADO|DRIFT`.
