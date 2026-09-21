# profile_perfil_donramon — hoja de hechos

Clase: `profile`/icono de persona. Espec: §6.1 y §23.5. Guion: alta en la celda D1 (`celda.ts`, `celda_en.ts`), actualización D1-T2 y giro 4 (`trial_day1_success.ts`, `trial_day1_success_en.ts`, `trial_day4_success.ts`, `trial_day4_success_en.ts`). Catálogos: `src/state/Private/ProfileCatalogCase5Es.ts:10-19` y `src/state/Private/ProfileCatalogCase5En.ts:10-19`.

Activo compartido por ES/EN: `assets/profile_perfil_donramon.webp`; no existe variante localizada. Es un icono de 256 × 256, sin texto ni marco, recortado del busto de la pose `donramon_idle` correspondiente. Esta hoja cubre el mismo diseño visual para ambas fichas; sólo cambia el texto del catálogo.

## Mapa semántico

- Persona: Don Ramón, acusado de homicidio calificado de Casimiro Lengua; abogado de banqueta que ahora asesora desde el banquillo mientras el Chapulín litiga (`docs/specs/case-5-el-tomo-trece.md:45,133-134` y §10.1).
- Identidad visual heredada: el perfil debe ser un recorte del `donramon_idle` existente, no una pose nueva ni una ilustración de cuerpo completo (§23.5; `celda.ts:10-24`, `celda_en.ts:10-24`).
- Estado de la aparición: está esposado y detenido; en la celda se ve con el mismo saco de siempre y sin sombrero. La imagen de perfil no debe añadir sombrero ni cambiar el saco (`docs/specs/case-5-el-tomo-trece.md:508`; `celda.ts:16-24`; `celda_en.ts:16-24`).
- Función de Acta: la ficha se entrega en D1 junto con `perfil_chapulin` y `perfil_casimiro`; después recibe dos actualizaciones, la primera por los doce minutos a solas con la víctima y la segunda porque la ventana forense corregida incluye al acusado (§6.1; `celda.ts:44-49`; `celda_en.ts:44-49`).
- Alias y rol: Don Ramón, Lic. Monchito, el acusado, abogado de banqueta, cliente de la defensa. El icono no debe convertirlo en el defensor titular: ese papel corresponde al Chapulín (§3; §6.1; `ProfileCatalogCase5Es.ts:10-15`; `ProfileCatalogCase5En.ts:10-15`).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Icono cuadrado de 256 × 256, recorte de busto de `donramon_idle`, centrado como entrada del Acta de Personajes (§23.5).
- [ ] `PINTAR` — La misma identidad facial, corporal, de ropa y de anclaje que `donramon_idle`; el perfil es una derivación recortada, no una pose alternativa (§23.5; `celda.ts:10-24`; `celda_en.ts:10-24`).
- [ ] `PINTAR` — El saco de siempre y la apariencia de Don Ramón sentado/detenido en la celda; no introducir sombrero, pues el guion fija que no lo trae (`docs/specs/case-5-el-tomo-trece.md:508`; `celda.ts:16-24`; `celda_en.ts:16-24`).
- [ ] `NO CONTRADECIR` — La expresión puede conservar la neutralidad de `donramon_idle`, pero no debe convertirse en la angustia extrema de `donramon_shock` ni en el sudor de `donramon_sweat`; las actualizaciones son texto de ficha, no cambios de icono (§23.2 existente; `celda.ts:24-46`; `celda_en.ts:24-46`).
- [ ] `AUSENTE` — Chapulín, esposas dibujadas como objeto separado, cristal de visitas, celda, insignia, documentos, texto, marco o cualquier fondo de escena. El icono sólo contiene el busto recortado (§23.5).

### F2 Texto en imagen

- [ ] `AUSENTE` — No imprimir nombre, rol, domicilio, cifras, esposas, logotipos ni texto localizado. §23.5 exige icono sin texto y sin marco; la descripción y las actualizaciones viven en el catálogo.

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La ficha inicial debe corresponder a: «El acusado. Abogado de banqueta. Diecisiete meses de renta atrasada que alguien le pagó sin decírselo» / “The defendant. A street-corner lawyer. Seventeen months of back rent that someone paid without telling him.” (§6.1; `ProfileCatalogCase5Es.ts:10-19`; `ProfileCatalogCase5En.ts:10-19`). Ninguna cifra se imprime en la imagen.
- [ ] `NO CONTRADECIR` — Las actualizaciones narrativas son doce minutos a solas con la víctima, sin testigo que viera la mesa, y la ventana corregida que incluye al acusado (§6.1; `ProfileCatalogCase5Es.ts:16-19`; `ProfileCatalogCase5En.ts:16-19`). No representar visualmente culpabilidad ni una hora concreta.
- [ ] `NO CONTRADECIR` — La casa canónica de Don Ramón es la 72, no la vivienda 4; ese dato pertenece a documentos y diálogo y no debe aparecer en el perfil (bitácora §0.0, lente 22; §18.5).

### F4 Contrato en pantalla

- [ ] `PINTAR` — La ficha se incorpora al Acta cuando el diálogo de la celda entrega el perfil del acusado después de la insignia; la línea inmediata la presenta como una de las tres fichas del Acta (§10.1; `celda.ts:44-49`; `celda_en.ts:44-49`).
- [ ] `PINTAR` — El catálogo debe leer inicialmente «El acusado» / “The defendant”, no “Defensa” ni “Abogado defensor”; el Chapulín es quien recibe el rol de defensor titular (§3; §6.1; `ProfileCatalogCase5Es.ts:10-15`; `ProfileCatalogCase5En.ts:10-15`).
- [ ] `NO CONTRADECIR` — En D1-T2, la actualización convierte la oportunidad de los doce minutos en un hecho registrado del perfil, pero no autoriza cambiar la imagen a una pose acusatoria (`trial_day1_success.ts:79`; `trial_day1_success_en.ts:79`).
- [ ] `NO CONTRADECIR` — En el giro 4, la actualización registra que la ventana forense corregida incluye a Don Ramón; el perfil sigue siendo el mismo icono y la imagen no debe dibujar una gráfica, ventana horaria ni culpabilidad (`trial_day4_success.ts:32`; `trial_day4_success_en.ts:32`).
- [ ] `NO CONTRADECIR` — El perfil sirve para identificar a la persona, no para demostrar por sí solo que mató a Casimiro, que escribió la tarjeta o que recibió personalmente el dinero (§2.1-§2.2; §6.2; §24.C F9/F13).

### F5 Estilo

- [ ] Contrato §23.0 completo pegado en el prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA / Nintendo DS) en alta definición; cel-shading de colores planos con terminador de sombra duro, dos tonos por superficie y ; contorno oscuro nítido y continuo en carbón `#1A1A1A`, más grueso en la silueta exterior; anatomía facial expresiva y exagerada; colores primarios saturados; tema de televisión mexicana de los años setenta, universo Chespirito / El Chapulín Colorado, melodrama judicial tratado en serio y registro de papel, madera, polvo, archivo judicial, madera barnizada, latón envejecido y luz de tungsteno; prohibidos fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano de superhéroes, marcas de agua, texto en inglés salvo variantes EN exigidas y cualquier rosa o magenta en primer plano por el pipeline sobre `#FF00FF` (§23.0).
- [ ] `PINTAR` — Fondo plano distinto por persona, nunca magenta; sin marco y con el recorte de busto limpio (§23.5).
- [ ] `AUSENTE` — Flechas, círculos, realces, fondo de la celda, cristales, rejas o elementos de interfaz horneados en el icono (§23.5; §10.1).

### F6 Localización

- [ ] `PINTAR` — ES y EN usan exactamente `assets/profile_perfil_donramon.webp`; no crear `profile_perfil_donramon_en.webp` (§23.5; `ProfileCatalogCase5Es.ts:14`; `ProfileCatalogCase5En.ts:14`).
- [ ] `AUSENTE` — No añadir texto para localizar la imagen. La variante ES/EN sólo cambia `name`, `role`, `desc` y `updates` en los catálogos (`ProfileCatalogCase5Es.ts:10-19`; `ProfileCatalogCase5En.ts:10-19`).
- [ ] `NO CONTRADECIR` — La regla de la ese caída tipográfica de §23.3 aplica a láminas y documentos con texto legible, no a este icono sin texto.

## Consistencia (regenerar juntos)

- `donramon_idle` — fuente visual obligatoria del recorte: comparte cara, saco, ausencia de sombrero, pose base y anclaje. Regenerar juntos; este activo no es fuente de verdad del otro (§23.5; `celda.ts:16-24`; `celda_en.ts:16-24`).
- `donramon_sweat` y `donramon_shock` — comparten la identidad del personaje, pero no deben transferir sus expresiones al icono. Regenerar juntos para evitar drift de cara y vestuario; este activo no es fuente de verdad de los otros (`celda.ts:24-46`; `celda_en.ts:24-46`).
- `profile_perfil_chapulin` y `profile_perfil_casimiro` — gemelos de formato del Acta: 256 × 256, busto, fondo plano por persona, sin texto ni marco. Regenerar juntos; este activo no es fuente de verdad de los otros (§6.1; §23.5).
- `perfil_donramon` ES↔EN — gemelos de idioma del mismo icono. Composición, recorte, fondo y colores idénticos; sólo cambia el catálogo. Regenerar juntos; este activo no es fuente de verdad del otro.
- `insignia_abogado` — comparte la escena de alta en la celda y la identidad del cliente, pero es un objeto separado del Acta; no debe aparecer dentro del perfil (§10.1; `celda.ts:43-49`; `celda_en.ts:43-49`). Regenerar juntos; este activo no es fuente de verdad del otro.

## Conflictos abiertos

- §6.1 y el catálogo ES dicen que Don Ramón está en su sexta comparecencia ante este juzgado (`docs/specs/case-5-el-tomo-trece.md:338`; `ProfileCatalogCase5Es.ts:15`), pero el catálogo EN dice “Fifth time in this courthouse” (`ProfileCatalogCase5En.ts:15`). La fuente de verdad es el spec: conservar «sexta» en la ficha EN cuando se corrija el catálogo; esta hoja no edita el catálogo.
- El guion de §10.1 dice que Don Ramón ha defendido a cinco personas y que lleva cinco juicios (`docs/specs/case-5-el-tomo-trece.md:513-525`; `celda.ts:35-46`; `celda_en.ts:35-46`), mientras §6.1 cuenta seis visitas a este juzgado. Son métricas distintas —juicios frente a comparecencias—, pero la imagen no puede resolverlas ni debe imprimir ninguna cifra.
- El guion fija que Don Ramón está sentado tras el cristal y sin sombrero, mientras §23.5 sólo especifica recorte de la pose `donramon_idle`; la hoja conserva ambos requisitos y deja al sprite idle como fuente visual del recorte, sin inventar una nueva postura de perfil (§10.1; §23.5).

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, conforme al protocolo `asset-facts`; por tanto, no se confirma ningún defecto visual del icono actual.
- Hoja derivada únicamente del spec, los catálogos de perfil ES/EN y las referencias de guion ES/EN. No se ejecutaron tests, lint, auditorías, procesamiento ni verificación de assets.
