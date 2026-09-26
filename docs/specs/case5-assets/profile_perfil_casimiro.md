# profile_perfil_casimiro — hoja de hechos

Clase: `profile`. Espec: §6.1, §23.0, §23.2 (sprite reutilizado) y §23.5; Libro de hechos §24. Guion directo ES/EN: `src/case/case5/Private/celda.ts:49`, `celda_en.ts:49`, `trial_day1_success.ts:118-119`, `trial_day1_success_en.ts:118-119`, `trial_day2.ts:42-44`, `trial_day2_en.ts:42-44`, `trial_day3_success_sam.ts:25`, `trial_day3_success_sam_en.ts:25`.

## Mapa semántico y alcance

Casimiro Lengua, víctima del homicidio del pasillo 7 y culpable del Caso 0. El perfil se entrega desde la celda junto con las fichas de Don Ramón y El Chapulín; después se actualiza cuando el expediente aparece abierto en la página 214 y cuando se establece que ofreció entregar un fichero el 8 de noviembre. El retrato debe ser un busto recortado de `casimiro_amable`, no una pose nueva, una escena del Archivo, una imagen del expediente ni una ilustración del cadáver.

Identidad narrativa compartida: fue sentenciado en julio por el asalto al cobrador Nazario Cuenca; esa condena permanece firme. Pidió declarar en el Archivo durante una diligencia de su apelación y pidió que estuviera Don Ramón, el abogado que lo venció. Su tic de consultar la hora pertenece al relato y sus dos relojes al epílogo, no al retrato (§3.2; §10.1; §6.1; `ProfileCatalogCase5Es.ts:31-39`; `ProfileCatalogCase5En.ts:31-39`).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Busto de Casimiro Lengua recortado de la pose reutilizada `casimiro_amable`; conservar exactamente su identidad, rostro, cabello, ropa, proporciones, expresión y anclaje, sin inventar una pose de perfil independiente (§23.5; §23.2, lista de sprites reutilizados).
- [ ] `PINTAR` — Formato de icono de persona: recorte cuadrado de busto sobre un color plano distinto por persona, sin marco y sin elementos de la escena (§23.5).
- [ ] `PINTAR` — Estado sereno y reconocible de `casimiro_amable`; el retrato no debe anticipar angustia, pánico o ruptura. §23.2 prohíbe usar `casimiro_sweat`, `casimiro_panic` y `casimiro_breakdown` en este episodio porque el relato muestra a Casimiro tranquilo (§23.2; §23.5; §10.1).
- [ ] `AUSENTE` — Celda, pasillo 7, estante, mesa, cuerpo, tomo caído, expediente, tarjeta, relojes, reja, actuario y cualquier otro fondo u objeto narrativo; el icono sólo representa a la persona (§23.5; `celda.ts:49`).
- [ ] `AUSENTE` — Don Ramón, El Chapulín u otros personajes; no convertir el retrato en una escena de entrega de fichas (`celda.ts:48-50`; `celda_en.ts:48-50`).

### F2 Texto en imagen

- [ ] `AUSENTE` — Texto, nombre, cargo, fechas, números, etiquetas, expediente, tarjeta o marcas tipográficas dentro de la imagen. La ficha muestra nombre, rol y descripción desde el catálogo de interfaz, no desde el bitmap (§23.5; `ProfileCatalogCase5Es.ts:31-39`; `ProfileCatalogCase5En.ts:31-39`).
- [ ] `NO CONTRADECIR` — El perfil puede acompañar referencias a la página 214, al 8 de noviembre, a Nazario Cuenca y a la condena de julio, pero esas cifras y palabras no se imprimen en el retrato (§6.1; `trial_day1_success.ts:113-118`; `trial_day3_success_sam.ts:25`).

### F3 Cifras/fechas/horas

- [ ] `NO CONTRADECIR` — La condena de Casimiro es de julio y no se revisa; el perfil no debe sugerir absolución, manipulación de la condena ni inocencia (§3.2; §6.1; `trial_day2_success.ts:153-158`).
- [ ] `NO CONTRADECIR` — La diligencia ocurre en el Archivo y fue solicitada por Casimiro; pidió que estuviera el abogado que lo venció (§6.1; `trial_day2_success.ts:156-162`; variante EN `trial_day2_success_en.ts:156-162`).
- [ ] `NO CONTRADECIR` — Página 214 y ofrecimiento del fichero del 8 de noviembre son estados de la ficha del Acta, no texto ni accesorios que deban aparecer en el busto (`ProfileCatalogCase5Es.ts:37-39`; `ProfileCatalogCase5En.ts:37-39`).
- [ ] `NO CONTRADECIR` — El tic de mirar la hora y los dos relojes pertenecen a momentos narrativos distintos; no añadir relojes al retrato (§3.2; §10.1; §24; `trial_day3_success_sam.ts:25`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En la celda, la ficha aparece como una de las tres primeras entradas del Acta de Personajes: víctima, persona identificable y no un testigo vivo disponible para declarar (`celda.ts:45-50`; `celda_en.ts:45-50`; §6.1).
- [ ] `PINTAR` — Tras presentar `expediente_casimiro` en D1-T3, el perfil se actualiza inmediatamente cuando el juez pregunta qué hacía Casimiro allí; la imagen debe seguir siendo la misma identidad serena, sin convertirse en el expediente o la tarjeta (`trial_day1_success.ts:113-119`; `trial_day1_success_en.ts:113-119`; §6.1).
- [ ] `PINTAR` — En la apertura del día 2, `profileTarget: ['perfil_casimiro']` responde a «¿Quién era el hombre que murió en el pasillo 7?» / “Who was the man who died in hallway 7?”; el perfil debe sostener la identificación de Casimiro como víctima y la posterior explicación de su presencia en el Archivo (`trial_day2.ts:41-44`; `trial_day2_en.ts:41-44`; §6.2).
- [ ] `PINTAR` — En D3-T2, el perfil recibe otra actualización cuando el juez deja asentado que recibir una notificación legal no es delito; no representar culpabilidad por recibir el oficio ni alterar la condición de víctima del homicidio (`trial_day3_success_sam.ts:24-26`; `trial_day3_success_sam_en.ts:24-26`).
- [ ] `NO CONTRADECIR` — La tarjeta de persona no ofrece botón de presentar durante un contrainterrogatorio; este asset sirve para lectura/identificación en el Acta, no para acusar a Casimiro antes de la pregunta del juez (§6, §6.2).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA/Nintendo DS) en alta definición;  y ; contorno continuo carbón `#1A1A1A`, más grueso en la silueta exterior; anatomía expresiva y exagerada; colores primarios saturados (§23.0).
- [ ] Aplicar el registro del episodio — televisión mexicana de los años setenta, papel, madera, polvo, latón envejecido y luz de tungsteno — sólo como tratamiento visual compatible con el busto; no añadir fondo, utilería ni textura fotográfica (§23.0).
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano de superhéroes, marcas de agua, texto en inglés y cualquier tono rosa o magenta en primer plano (§23.0).
- [ ] `NO CONTRADECIR` — El recorte debe conservar la misma escala, geometría y anclaje del `casimiro_amable` del que procede; no usar una pose angustiada que adelante el final (§23.2; §23.5).

### F6 Localización

- [ ] ES y EN usan el mismo archivo `assets/profile_perfil_casimiro.webp`; no crear `profile_perfil_casimiro_en.webp` (`ProfileCatalogCase5Es.ts:31-39`; `ProfileCatalogCase5En.ts:31-39`).
- [ ] Composición, recorte, color de fondo, identidad, expresión y anclaje son idénticos entre idiomas. Sólo se localizan el nombre, rol, descripción y actualizaciones en la interfaz del catálogo (`ProfileCatalogCase5Es.ts:31-39`; `ProfileCatalogCase5En.ts:31-39`).
- [ ] La regla de la ese caída de §23.3 no aplica: el perfil no contiene texto ni documentos; no añadir letras para localizarlo (§23.3, §23.5).

## Consistencia (regenerar juntos)

- `casimiro_amable` — fuente visual directa del busto; comparte identidad y estado sereno. Regenerar/recortar juntos; este activo no es fuente de verdad del otro (§23.2; §23.5).
- `casimiro_catalogo` — comparte identidad y continuidad de personaje, aunque cambia la pose de relato. Regenerar juntos; este activo no es fuente de verdad del otro (§23.2; §10.1).
- `perfil_donramon` y `perfil_chapulin` — aparecen en la misma entrega de fichas de la celda y comparten formato de Acta, 256×256, fondo plano, sin marco y sin texto. Regenerar juntos para coherencia de familia; estos activos no son fuente de verdad de éste (§23.5; `celda.ts:45-50`).
- `perfil_casimiro` ES↔EN — gemelos de idioma del mismo archivo; sólo cambia el catálogo visible. Regenerar juntos; este activo no es fuente de verdad del otro.
- `expediente_casimiro`, `examine_expediente_serie` y `esquina_tarjeta` — comparten hechos narrativos posteriores sobre la página 214, la tarjeta y la identidad de Casimiro, pero no deben aparecer dentro del icono. Regenerar juntos para continuidad semántica; estos activos no son fuente de verdad de éste (§6.1; §23.3; §10.1).

## Conflictos abiertos

- §6.1 describe a Don Ramón como si fuera la **sexta** vez que pisa el juzgado (`docs/specs/case-5-el-tomo-trece.md:338`), mientras los catálogos ES/EN dicen **quinta** vez (`ProfileCatalogCase5Es.ts:15`, `ProfileCatalogCase5En.ts:15`). No afecta al retrato de Casimiro, pero queda registrado porque las tres fichas se entregan juntas en la celda y la discrepancia pertenece al mismo catálogo narrativo.
- La descripción de §6.1 y el catálogo coinciden en que Casimiro pidió declarar en el Archivo y que su condena no se discute; el guion añade que la diligencia era de su apelación y que pidió a Don Ramón (`trial_day2.ts:153-158`). Es ampliación de contrato en pantalla, no un conflicto visual.
- El perfil inicial dice «pidió declarar» / “asked to testify”, mientras la apertura del día 2 pregunta por el hombre muerto y responde con la diligencia de apelación. No pintar ninguna de esas acciones en el busto: son estados narrativos del catálogo y del diálogo (§6.1; §6.2).

## Hallazgos de auditoría 2026-09-19

- No realizada por protocolo: no se abrió ni inspeccionó ninguna imagen. Por tanto, no se confirma ningún defecto visual del archivo actual.
- Hoja construida sólo desde el spec, §6.1/§6.2/§23, catálogos de perfil ES/EN y guion ES/EN. No se ejecutaron tests, lint, auditorías, procesamiento ni verificación de assets.
