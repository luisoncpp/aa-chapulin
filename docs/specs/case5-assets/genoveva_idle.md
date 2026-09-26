# genoveva_idle — hoja de hechos

Clase: `sprite`. Espec: §23.0 y §23.2.C. Guion: señalamiento de persona D4, testimonio D4-T1 §17.2 y sus presiones, contradicción de `libro_peritos` y `fichero_cedulario` en D4.

Activo compartido por ES/EN: no existe `genoveva_idle_en`. La pose no contiene texto localizado; la misma imagen se usa en ambos idiomas. Es el **candado de identidad** de la Srta. Genoveva Peñaloza y la pose de compostura que precede a `genoveva_reglamento`, `genoveva_sweat` y `genoveva_shock`.

## Mapa semántico

- Persona: Genoveva Peñaloza Suárez, encargada de la ventanilla de peritos y auxiliares de la justicia, testigo D4-T1. Es exacta, no hostil, y contesta sólo lo que se le pregunta (spec §3.2, §6.1, §17.2; `src/state/Private/ProfileCatalogCase5Es.ts:74-81`; `src/state/Private/ProfileCatalogCase5En.ts:74-81`).
- Identidad visual compartida: mujer de 38 años, estatura media y porte rígido; cabello castaño oscuro en chongo bajo muy apretado; anteojos rectangulares de pasta negra; cara ovalada; labios finos con lápiz coral discreto; blusa blanca de cuello camisero abotonada hasta arriba con broche de camafeo; suéter gris ratón sobre los hombros, abrochado sólo en el primer botón; reloj pequeño en la muñeca izquierda y lápiz detrás de la oreja derecha (spec §23.2.C).
- Objeto inseparable: carpeta de hule negro apretada contra el pecho con el brazo izquierdo. Es su soporte visual de registro y la diferencia estructural frente a las otras poses (spec §23.2.C).
- Estado de esta pose: neutral, atenta y perfectamente compuesta; barbilla ligeramente levantada, hombros cuadrados y manos sin el gesto de recitar, sudar o perder la compostura (spec §23.2.C; §17.2).
- Función narrativa: la pose acompaña sus respuestas sobrias sobre el libro de peritos, gafetes, credenciales y vales; las revelaciones emocionales del encabezado incorrecto pertenecen a las otras poses (spec §23.2.C; `trial_day4_success.ts:54-72,86-94`).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Busto hasta la cintura, de frente y con hombros cuadrados (spec §23.2.C, fila `genoveva_idle`).
- [ ] `PINTAR` — Expresión neutra y atenta, barbilla ligeramente levantada; no convertirla en hostil, burlona o angustiada (spec §23.2.C; spec §3.2; `src/case/case5/Private/trial_day4_t1.ts:24-26,42-44`).
- [ ] `PINTAR` — Mujer de 38 años, estatura media y porte rígido, con cara ovalada y labios finos (spec §23.2.C).
- [ ] `PINTAR` — Cabello castaño oscuro recogido en un chongo bajo muy apretado, sin cabellos sueltos (spec §23.2.C).
- [ ] `PINTAR` — Anteojos rectangulares de pasta negra (spec §23.2.C).
- [ ] `PINTAR` — Blusa blanca de cuello camisero abotonada hasta arriba, broche de camafeo, y suéter de punto gris ratón sobre los hombros, abrochado sólo en el primer botón (spec §23.2.C).
- [ ] `PINTAR` — Reloj de pulsera pequeño en la muñeca izquierda y lápiz detrás de la oreja derecha (spec §23.2.C).
- [ ] `PINTAR` — Carpeta de hule negro apretada contra el pecho con el brazo izquierdo (spec §23.2.C).
- [ ] `AUSENTE` — Gota de sudor, mano subiendo a los anteojos, carpeta bajada, ojos enormes, boca abierta pequeña, lápiz cayéndose o carpeta a medio resbalar; son cambios exclusivos de `genoveva_sweat` y `genoveva_shock` (spec §23.2.C).
- [ ] `AUSENTE` — Dedo índice apoyado en la carpeta, mentón exageradamente alto o reflejos rectangulares blancos en los anteojos; esos detalles pertenecen a `genoveva_reglamento` (spec §23.2.C).

### F2 Texto en imagen

- [ ] `AUSENTE` — No imprimir nombre, rótulos, cifras, texto de reglamento, etiquetas de vales ni marcas de idioma en el sprite; el contenido se expresa en el diálogo ES/EN (`trial_day4_t1.ts:24-111`; `trial_day4_t1_en.ts:24-111`).

### F3 Cifras/fechas/horas

- [ ] `NO CONTRADECIR` — La identidad canónica fija 38 años; el guion de presentación fija trece años en la ventanilla. Ninguna cifra debe aparecer pintada en el sprite (spec §23.2.C; `docs/specs/case-5-el-tomo-trece.md:3113`; `trial_day4_success.ts:49`; `trial_day4_success_en.ts:49`).
- [ ] `NO CONTRADECIR` — Las horas 16:05 y 16:50, el cuatro de diciembre, el libro de peritos y los vales del 29 de noviembre son hechos narrados, no texto obligatorio dentro de la pose (`docs/specs/case-5-el-tomo-trece.md:3125-3129,3246-3248`; `trial_day4_t1.ts:42-43,66-68,101-111`).
- [ ] `NO CONTRADECIR` — La pose idle conserva la compostura hasta que el guion cambia explícitamente a `genoveva_sweat` o `genoveva_shock`; no anticipar que la testigo descubre el encabezado de «Hora de devolución de gafete» (spec §23.2.C; `trial_day4_success.ts:57-63`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En la presentación ante el estrado, idle muestra a la encargada de la ventanilla de peritos y auxiliares, con su nombre, ocupación y trece años de servicio; la imagen debe leer como una testigo profesional y contenida (`docs/specs/case-5-el-tomo-trece.md:3113-3114`; `trial_day4_success.ts:47-50`; `trial_day4_success_en.ts:47-50`).
- [ ] `PINTAR` — Durante las respuestas «No, señor», «Tampoco», «Jamás» y «Ninguna», idle sostiene precisión y neutralidad, no comicidad visual (`docs/specs/case-5-el-tomo-trece.md:3138-3154`; `trial_day4_t1.ts:30-32,48-50`).
- [ ] `PINTAR` — Idle acompaña la explicación de que el gafete es una placa de latón numerada con cordón para las salas de lectura del primer piso y que una credencial de síndico la expide y conserva un juez (`docs/specs/case-5-el-tomo-trece.md:3163-3167`; `trial_day4_t1.ts:66-76`; `trial_day4_t1_en.ts:66-76`).
- [ ] `PINTAR` — Idle acompaña que ella escribe la hora cuando le ponen el gafete en el mostrador, que puede ver a la persona sólo si espera el recibo y que después vuelve a su trabajo (`docs/specs/case-5-el-tomo-trece.md:3176-3180`; `trial_day4_t1.ts:83-93`; `trial_day4_t1_en.ts:83-93`).
- [ ] `PINTAR` — Idle acompaña la definición del vale: papeleta que firma quien mueve, abre o consulta un bien depositado, con fecha, nombre, número de huacal y rótulo exacto (`docs/specs/case-5-el-tomo-trece.md:3190-3194`; `trial_day4_t1.ts:101-111`; `trial_day4_t1_en.ts:101-111`).
- [ ] `PINTAR` — En la resolución de `libro_peritos`, idle puede acompañar el «...Sí la tiene» y el «Es lo que dice el papel», pero no debe representar el sudor o shock que el guion reserva para el descubrimiento del encabezado (`trial_day4_success.ts:54-72`; `trial_day4_success_en.ts:54-72`).
- [ ] `PINTAR` — En la resolución de `fichero_cedulario`, idle acompaña la lectura del vale de Berrondo y su rótulo exacto; el shock de «Cajón: Donceles a Espanto» pertenece a `genoveva_shock` (`trial_day4_success.ts:87-95`; `trial_day4_success_en.ts:87-95`).
- [ ] `NO CONTRADECIR` — La carpeta de hule negro de la identidad debe poder coexistir con la carpeta de vales que entrega al tribunal al final del testimonio; la escena exige que la testigo quede a disposición y que esa carpeta quede bajo resguardo, sin que idle anticipe la entrega ni la haga desaparecer (`docs/specs/case-5-el-tomo-trece.md:3243-3248`; `trial_day4_success.ts:89-106`).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* de linaje GBA/Nintendo DS en alta definición;  y ; contorno oscuro continuo carbón `#1A1A1A`, más grueso en la silueta exterior; anatomía facial expresiva y exagerada; colores primarios saturados; tema de televisión mexicana de los setenta / Chespirito / Chapulín Colorado, melodrama judicial serio con papel, madera, polvo, latón envejecido y luz de tungsteno; prohibidos fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano de superhéroes, marcas de agua, texto en inglés salvo variantes EN exigidas y cualquier rosa o magenta en primer plano por el pipeline sobre `#FF00FF` (spec §23.0).
- [ ] `NO CONTRADECIR` — Mantener la caricatura expresiva del linaje Ace Attorney sin convertirla en una empleada genérica: el candado es el chongo bajo apretado, anteojos rectangulares, camafeo, reloj, lápiz y carpeta negra (spec §23.2.C).

### F6 Localización

- [ ] ES y EN usan exactamente la misma imagen `genoveva_idle`; sólo cambian las líneas de diálogo y la ficha de perfil (`trial_day4_t1.ts:24-111`; `trial_day4_t1_en.ts:24-111`; `ProfileCatalogCase5Es.ts:74-81`; `ProfileCatalogCase5En.ts:74-81`).
- [ ] No introducir texto localizado, letras ni rótulos en la imagen. La regla de localización de cadenas legibles y de cualquier `s` caída aplica a láminas/documentos exigidos, no a este sprite (spec §23.3; `trial_day4_t1.ts:72,111`; `trial_day4_t1_en.ts:72,111`).

## Consistencia (regenerar juntos)

- `genoveva_reglamento`, `genoveva_sweat`, `genoveva_shock` — comparten rostro, edad, peinado, vestuario, accesorios, carpeta y silueta base. `genoveva_idle` es el candado de identidad; regenerar juntos, este activo no es fuente de verdad del otro (spec §23.2.C).
- `profile_perfil_genoveva.webp` / `perfil_genoveva` — comparte la identidad de Genoveva y la función de encargada de ventanilla. Regenerar juntos, este activo no es fuente de verdad del otro (spec §6.1; `ProfileCatalogCase5Es.ts:74-81`; `ProfileCatalogCase5En.ts:74-81`).
- `genoveva_idle` ES↔EN — gemelos de idioma del mismo sprite, sin variante visual. Mantener composición y accesorios idénticos; sólo cambia el texto del guion. Regenerar juntos, este activo no es fuente de verdad del otro.
- `libro_peritos` y la carpeta de vales — comparten la función narrativa de registro y las líneas que idle acompaña, pero no son fuente visual del sprite. Regenerar juntos sólo si se rehacen como conjunto de continuidad de escena; este activo no es fuente de verdad de los documentos (`docs/specs/case-5-el-tomo-trece.md:3125-3129,3190-3194,3243-3248`).

## Conflictos abiertos

- El testimonio inicial dice que el libro tiene «hora de entrada y hora de salida», mientras la contradicción resolutoria establece que la segunda columna dice exactamente «Hora de devolución de gafete» y que el libro no acredita quién permanecía dentro (`docs/specs/case-5-el-tomo-trece.md:3126-3128,3205-3221`; `trial_day4_success.ts:54-72`). Es una contradicción deliberada del guion, no un detalle que deba imprimirse en `genoveva_idle`; la pose debe permanecer neutral hasta el cambio explícito de sprite.
- El perfil dice que Genoveva «lleva el segundo libro del edificio», mientras el testimonio habla de un libro con vales y luego de una carpeta de papeletas. El spec no exige que esos documentos aparezcan como parte del sprite; tratarlos como utilería de escena, no como texto o accesorio adicional del candado (§6.1, §17.2; `ProfileCatalogCase5Es.ts:79-81`; `docs/specs/case-5-el-tomo-trece.md:3190-3194,3243-3248`).

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, conforme al protocolo `asset-facts`; por tanto, no se confirma ningún defecto visual de la hoja actual.
- Hoja preparada únicamente desde el spec, los catálogos de perfil ES/EN y los scripts ES/EN de D4. No se ejecutaron tests, lint, auditorías, procesamiento ni verificación de assets.
