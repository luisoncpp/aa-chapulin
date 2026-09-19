# profile_perfil_sargento — hoja de hechos

Clase: `profile`. Espec: §6.1 y §23.5. Guion: D1 pasillo 7 (`archivo_pasillo7.ts` / `archivo_pasillo7_en.ts`). Catálogos: `src/state/Private/ProfileCatalogCase5Es.ts:84-90` y `src/state/Private/ProfileCatalogCase5En.ts:84-90`.

Activo compartido por ES/EN: `assets/profile_perfil_sargento.webp`; no existe variante localizada. Es un icono de persona de 256 × 256, sin texto ni marco, recortado del busto de `pazguato_idle` correspondiente. Esta hoja cubre el mismo diseño visual para ambas fichas; sólo cambia el texto del catálogo.

## Mapa semántico

- Persona: El Sargento, cuyo nombre completo es Refugio Pazguato; policía investigador aliado del Caso 5 (`docs/specs/case-5-el-tomo-trece.md:139`, `4113-4127`).
- Identidad visual compartida: busto recortado de `pazguato_idle`; el perfil no inventa una pose, uniforme ni escenario distintos (§23.2, §23.5).
- Función narrativa: conserva la placa y la facultad de pedir análisis; en este caso no contamina la escena, fotografía, mide, pide análisis y asienta lo ocurrido (§3, §6.1; `archivo_pasillo7.ts:25-27`, `_en.ts:25-27`).
- Estado de aparición: la ficha se entrega en el Pasillo 7 durante la investigación del 6 de diciembre, después de que el Sargento declara que no movió nada y que el expediente no le gusta (§6.1; `archivo_pasillo7.ts:26-27`, `_en.ts:26-27`).
- Medio: icono cuadrado del Acta de Personajes, con fondo plano individual, sin texto ni marco (§23.5).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Busto reconocible de El Sargento/Refugio Pazguato, recortado de la pose `pazguato_idle` correspondiente (§23.2, §23.5).
- [ ] `PINTAR` — Conservar la identidad del sprite reutilizado `pazguato_idle`: rostro, uniforme, placa, escala y anclaje de personaje; no convertirlo en Nicanor, un custodio u otro policía (§23.2; `docs/live/glossary.md:44`).
- [ ] `NO CONTRADECIR` — La persona representada es policía judicial e investigador aliado, no sospechoso: la ficha acompaña las afirmaciones de que pidió los análisis, no movió nada y lo asentó todo (§3; §6.1; `ProfileCatalogCase5Es.ts:84-90`).
- [ ] `AUSENTE` — Pasillo 7, silueta de gis, estante, tomo, mesa, termógrafo, expedientes, documentos, otros personajes y elementos de interfaz; el icono sólo contiene el busto sobre fondo plano (§23.5; §10.3).

### F2 Texto en imagen

- [ ] `AUSENTE` — No imprimir nombre, rol, placa rotulada, fechas, lema, etiquetas, marco ni ningún otro texto dentro del icono (§23.5).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La ficha se entrega en la investigación D1 del 6 de diciembre, en Pasillo 7, no durante la ventana del crimen del 4 de diciembre (§6.1; §10.3; `archivo_pasillo7.ts:17-27`, `_en.ts:17-27`). La imagen no debe imprimir fecha ni escenario.
- [ ] `NO CONTRADECIR` — El Sargento estuvo ausente durante la ventana del crimen; entra por peritos a las 17:52, después del hallazgo, devuelve el gafete a las 22:15 y luego investiga la escena (§24.A, agente A11). Esa cronología pertenece al contrato narrativo, no exige una pose nocturna ni un reloj visible.
- [ ] `NO CONTRADECIR` — «Dice que aprendió en septiembre» es descripción de catálogo, no una instrucción para pintar una fecha, documento o flashback (§6.1; `ProfileCatalogCase5Es.ts:89`, `ProfileCatalogCase5En.ts:89`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — El diálogo de Pasillo 7 entrega exactamente `perfil_sargento` después de la frase «Aquí no moví nada...» / “Here I moved nothing...” y de la confesión de que el expediente no le gusta (`docs/specs/case-5-el-tomo-trece.md:752-754`; `archivo_pasillo7.ts:26-27`, `_en.ts:26-27`).
- [ ] `PINTAR` — El catálogo debe asociar la entrada `perfil_sargento` con `assets/profile_perfil_sargento.webp` en ES y EN (`ProfileCatalogCase5Es.ts:84-90`; `ProfileCatalogCase5En.ts:84-90`).
- [ ] `NO CONTRADECIR` — El icono acompaña a un aliado que conserva la placa y puede pedir análisis; no debe expresar culpabilidad, corrupción o contaminación de la escena (§3; §6.1; `archivo_pasillo7.ts:25-27`).
- [ ] `NO CONTRADECIR` — El Sargento puede aparecer después con las poses reutilizadas `pazguato_idle`, `pazguato_saludo`, `pazguato_sweat` y `pazguato_decidido`; esas poses son continuidad narrativa, no variantes del icono (§23.2; `archivo_pasillo7_hotspots.ts:17-22,49-52`; `archivo_caldera_hotspots.ts:30-38`).
- [ ] `NO CONTRADECIR` — Durante un contrainterrogatorio la tarjeta de persona no ofrece botón de presentar; el perfil sirve para identificar al Sargento y no abre un señalamiento libre (§6; §6.2; `docs/flows/character-record-flow.md`).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA / Nintendo DS) en alta definición; cel-shading de colores planos con terminador de sombra duro, dos tonos por superficie y ; contorno oscuro nítido y continuo en carbón `#1A1A1A`, más grueso en la silueta exterior; anatomía facial expresiva y exagerada; colores primarios saturados; televisión mexicana de los años setenta, universo Chespirito / El Chapulín Colorado, melodrama de tribunal tratado en serio por el sistema y absurdo en los personajes, con registro de papel, madera, polvo, latón envejecido y luz de tungsteno; prohibidos fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, estética de cómic americano de superhéroes, marcas de agua, texto en inglés salvo variantes EN exigidas y cualquier tono rosa o magenta en primer plano por el pipeline sobre `#FF00FF` (§23.0).
- [ ] `PINTAR` — Lienzo final de 256 × 256, busto sobre un color plano distinto por persona, sin marco y nunca magenta (§23.5).

### F6 Localización

- [ ] `PINTAR` — ES y EN usan exactamente `assets/profile_perfil_sargento.webp`; no crear `profile_perfil_sargento_en.webp` (§23.5; `ProfileCatalogCase5Es.ts:88`; `ProfileCatalogCase5En.ts:88`).
- [ ] `AUSENTE` — No añadir texto para localizar la imagen. La localización sólo cambia el catálogo (§23.5).
- [ ] `TEXTO EXACTO` — En ES, la ficha usa `name: El Sargento`, `role: Policía judicial` y `desc: Policía judicial. Pidió los análisis, no movió nada y lo asentó todo. Dice que aprendió en septiembre.` (`ProfileCatalogCase5Es.ts:84-90`).
- [ ] `TEXTO EXACTO` — En EN, la ficha usa `name: El Sargento`, `role: Judicial police` y `desc: Judicial police. Ordered the analyses, moved nothing, and logged everything. Says he learned in September.` (`ProfileCatalogCase5En.ts:84-90`).

## Consistencia (regenerar juntos)

- `pazguato_idle` — fuente visual obligatoria del recorte: comparte rostro, uniforme, placa, proporciones y pose base. **Regenerar juntos; este activo no es fuente de verdad del otro.** (§23.2, §23.5)
- `pazguato_saludo`, `pazguato_sweat`, `pazguato_decidido` — comparten la identidad del Sargento en las escenas de investigación y juicio; no deben transferir sus gestos ni accesorios de escena al icono. **Regenerar juntos; este activo no es fuente de verdad de los otros.** (§23.2; `archivo_pasillo7.ts:18-27`; `archivo_pasillo7_hotspots.ts:17-22,49-52`)
- `profile_perfil_nicanor`, `profile_perfil_genoveva` y las demás fichas del Caso 5 — comparten el sistema de iconos de persona: 256 × 256, busto, color plano individual, sin texto ni marco. **Regenerar juntos; este activo no es fuente de verdad de los otros.** (§6.1; §23.5)
- `perfil_sargento` ES↔EN — gemelos de idioma del mismo icono. Composición, recorte y fondo idénticos; sólo cambia el texto del catálogo. **Regenerar juntos; este activo no es fuente de verdad del otro.** (§23.5; `ProfileCatalogCase5Es.ts:84-90`; `ProfileCatalogCase5En.ts:84-90`)
- `bg_archivo_pasillo7` y sus hotspots — comparten el lugar y el momento narrativo de la entrega, pero no son fuente visual del icono: el perfil no debe absorber el fondo ni los objetos del pasillo. **Regenerar juntos; este activo no es fuente de verdad de los otros.** (§10.3; §23.1; `archivo_pasillo7.ts:17-27`)

## Conflictos abiertos

- No se encontró una discrepancia entre la entrada de §6.1, los catálogos ES/EN y el guion de Pasillo 7 para este perfil. La frase «aprendió en septiembre» funciona como texto de catálogo y el guion sólo fija que en septiembre movió un micrófono y recibió una reprimenda; la imagen no debe resolver ni ampliar esa relación (`ProfileCatalogCase5Es.ts:89`; `ProfileCatalogCase5En.ts:89`; `archivo_pasillo7.ts:25-27`).
- §23.5 llama “nuevos” a los diez iconos de persona del Caso 5, mientras la identidad visual de este perfil depende de los sprites reutilizados `pazguato_*` (§23.2, §23.5). No se decide aquí si “nuevo” significa archivo de perfil nuevo o familia de sprite nueva; sí queda fijado que el icono debe conservar la identidad del sprite reutilizado.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, conforme al protocolo `asset-facts`; por tanto, no se confirma ni se descarta ningún defecto visual del icono actual.
- Hoja derivada únicamente de §3, §6, §6.1, §6.2, §10.3, §23.0, §23.2, §23.5, §24.A, los catálogos de perfil ES/EN y las referencias de guion citadas.
- No se ejecutaron tests, lint, auditorías, procesamiento ni verificación de assets.
