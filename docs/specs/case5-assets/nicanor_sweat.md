# nicanor_sweat — hoja de hechos

Clase: `sprite`. Espec: §23.0 y §23.2.B. Guion directo: vestíbulo D1, conversación «¿Cómo encontró el cuerpo?», D1-T1, y el relevo del testimonio; variantes EN equivalentes. Variantes ES/EN: no hay archivo `_en`; el mismo sprite debe servir para ambos idiomas.

## Mapa semántico y alcance

Nicanor Tolentino, «el Conserje», es el conserje del Archivo Judicial: honesto, orgulloso y equivocado, con treinta y un años de servicio. `nicanor_sweat` representa su incomodidad cómica al hablar del cadáver o de la humedad, no miedo culpable ni una ruptura dramática. El candado visual es el mismo de `nicanor_idle`: hombre bajo, encorvado y muy delgado; cara redonda curtida; bigote blanco corto; cejas pobladas; orejas grandes; coronilla calva con pelo blanco en las sienes; overol azul desteñido sobre franela a cuadros; franela amarilla en el bolsillo; manojo grande de llaves al cinturón y zapatos de trabajo (§23.2.B).

Alias seguidos: Nicanor, don Nicanor, conserje, conserje del Archivo Judicial, escoba, humedad, cadáver, pasillo siete, estante completo y Tomo XI. El perfil ES/EN fija además que encuentra el cuerpo a las 17:35 al subir a cerrar el pasillo y que sacude el Tomo XI los lunes (`docs/specs/case-5-el-tomo-trece.md:343`; `src/state/Private/ProfileCatalogCase5Es.ts:64-72`; `ProfileCatalogCase5En.ts:64-72`).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Busto hasta la cintura, con la misma silueta e identidad de Nicanor: bajo, encorvado, muy delgado, cara redonda curtida, bigote blanco corto y recortado, cejas pobladas, orejas grandes, coronilla calva con pelo blanco en las sienes (§23.2.B).
- [ ] `PINTAR` — Mantener el overol de mezclilla azul desteñido sobre camisa de franela a cuadros, la franela amarilla en el bolsillo del pecho, el manojo grande de llaves al cinturón y los zapatos de trabajo (§23.2.B).
- [ ] `PINTAR` — Cejas caídas hacia adentro: incomodidad y tensión cómica al hablar del cadáver o la humedad, sin convertirlo en sospechoso ni en culpable (§23.2.B; §1.2; §3.3).
- [ ] `PINTAR` — Dos gotas de sudor cómicas, no una sola gota sobria ni una tormenta de sudor; son parte explícita de esta pose (§23.2.B).
- [ ] `PINTAR` — Mano izquierda quitándose una gorra imaginaria de la cabeza calva (§23.2.B).
- [ ] `PINTAR` — Escoba apoyada en el hombro en el estado descrito por §23.2.B; registrar el conflicto de la secuencia de relevo en «Conflictos abiertos» (§23.2.B; `docs/specs/case-5-el-tomo-trece.md:1003-1018`).
- [ ] `NO CONTRADECIR` — Nicanor es un testigo honesto, respetado por el episodio y equivocado en sus inferencias; el sudor no debe sugerir mentira, miedo culpable o conocimiento oculto (§1.2; §3.3; §22; §24.A A4).

### F2 Texto en imagen

- [ ] `AUSENTE` — No incluir texto, rótulos, bocadillos, marcas de agua ni letras dentro del sprite. Ninguna variante lingüística exige texto pintado (§23.0; §23.2.B).

### F3 Cifras/fechas/horas

- [ ] `NO CONTRADECIR` — La pose acompaña el hallazgo del cuerpo a las 17:35 y el cierre habitual del pasillo; no convertir las gotas en una marca de otra hora ni imprimir «17:35» en el sprite (`docs/specs/case-5-el-tomo-trece.md:343,712-716`; §24.A A4).
- [ ] `NO CONTRADECIR` — La humedad y la caldera con dos secadores al máximo comienzan el 3 de diciembre; «cuatro días» es sólo el total de calefacción de §17.1, no una cifra que deba aparecer en la imagen (`docs/specs/case-5-el-tomo-trece.md:639-640`; §24.D I45).
- [ ] `NO CONTRADECIR` — El testimonio sitúa su subida a las 17:35, después del crimen de las 17:02; la pose no debe sugerir que presenció el homicidio ni que estuvo en el pasillo durante la ventana del crimen (§24.A A3-A4; §24.B; `docs/specs/case-5-el-tomo-trece.md:712-715`).
- [ ] `NO CONTRADECIR` — «Treinta y un años, cuatro meses» describe el servicio de Nicanor y vive en el diálogo/perfil, no en la imagen (`docs/specs/case-5-el-tomo-trece.md:910`; `src/case/case5/Private/trial_day1_success.ts:166`; `trial_day1_success_en.ts:166`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En el vestíbulo, Nicanor usa esta pose al presentarse como quien encontró el cuerpo y al decir que la caldera y los dos secadores están al máximo desde el 3 de diciembre; las gotas deben comunicar calor/humedad e incomodidad, no autoría (`src/case/case5/Private/archivo_vestibulo.ts:25,30`; `archivo_vestibulo_en.ts:25,30`; `docs/specs/case-5-el-tomo-trece.md:634,640`).
- [ ] `PINTAR` — En «¿Cómo encontró el cuerpo?», la pose acompaña «vi los zapatos primero» y «nunca había barrido un muerto»; la emoción es reacción al cadáver y al recuerdo del hallazgo (`src/case/case5/Private/archivo_vestibulo_talks.ts:14,16`; `archivo_vestibulo_talks_en.ts:14,16`; `docs/specs/case-5-el-tomo-trece.md:712-716`).
- [ ] `PINTAR` — En D1-T1, la pose acompaña la frase incomprensible «Ojalá que no» y la explicación de que con la caldera y los secadores no se oía nada arriba; debe seguir siendo la incomodidad de un testigo confundido (`src/case/case5/Private/trial_day1_t1.ts:75,93`; `trial_day1_t1_en.ts:75,93`; `docs/specs/case-5-el-tomo-trece.md:960,973`).
- [ ] `PINTAR` — En el relevo del testimonio, el Juez le pide dejar la escoba y Nicanor responde que sin ella no sabe dónde poner las manos; la pose debe sostener la continuidad del gag de la escoba, pero su presencia física queda abierta por el conflicto documentado abajo (`src/case/case5/Private/trial_day1_success.ts:84-87`; `trial_day1_success_en.ts:84-87`; `docs/specs/case-5-el-tomo-trece.md:1003-1018`).
- [ ] `PINTAR` — En D1-T3, la pose acompaña la admisión de que el estante estaba completo aunque hubiera un tomo en el suelo y la revelación del hueco del Tomo Trece; no debe convertir la sorpresa en pánico ni borrar la escoba de las otras poses por contaminación de estado (`src/case/case5/Private/trial_day1_t3.ts:60,85`; `trial_day1_t3_en.ts:60,85`; `docs/specs/case-5-el-tomo-trece.md:1207,1230`).
- [ ] `AUSENTE` — No dibujar una pose de barrido diagonal, polvo alrededor del cepillo, escoba en la mano derecha como en `nicanor_idle`, ni una expresión tranquila de `nicanor_idle`; tampoco añadir lágrimas, boca de pánico o gesto de culpabilidad. Esos cambios pertenecen a otros estados del personaje (§23.2.B; `nicanor_idle`, `nicanor_escoba`).

### F5 Estilo y prohibidos

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA / Nintendo DS) en alta definición; cel-shading de colores planos con terminador de sombra duro, dos tonos por superficie y ; contorno oscuro nítido y continuo en carbón `#1A1A1A`, más grueso en la silueta exterior que en los detalles internos; anatomía facial expresiva y exagerada, al borde de la caricatura; colores primarios saturados.
- [ ] Contrato §23.0 completo en el prompt: televisión mexicana de los años setenta, universo Chespirito / El Chapulín Colorado; melodrama de tribunal tratado en serio por el sistema y absurdo en los personajes; registro de papel, madera y polvo, con archivo judicial, expedientes atados con listón, madera barnizada, latón envejecido y luz de tungsteno.
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, estética de cómic americano de superhéroes, marcas de agua, texto en inglés y cualquier tono rosa o magenta en primer plano (§23.0; `docs/architecture/asset-pipeline.md`).
- [ ] `NO CONTRADECIR` — No rejuvenecerlo, alisarle la coronilla, quitarle el bigote blanco, sustituir el overol por uniforme institucional ni convertirlo en un conserje genérico; la identidad de §23.2.B es el candado del personaje.

### F6 Localización

- [ ] `NO CONTRADECIR` — ES y EN usan exactamente la misma imagen: misma silueta, ropa, escoba, dos gotas, mano izquierda y gesto; sólo cambia el diálogo (`archivo_vestibulo.ts` / `_en.ts`, `archivo_vestibulo_talks.ts` / `_en.ts`, `trial_day1_t1.ts` / `_en.ts`).
- [ ] `AUSENTE` — No localizar texto porque el sprite no contiene texto legible. Las diferencias «humedad» / «damp», «Ojalá que no» / «I hope not» y «nunca había barrido un muerto» / «never swept up a dead man» viven en el guion, no en la imagen (`archivo_vestibulo.ts:25-30`; `archivo_vestibulo_en.ts:25-30`).

## Consistencia (regenerar juntos)

- `nicanor_idle` — comparte el candado facial, ropa, llaves, escoba y silueta base; `nicanor_idle` es la pose de identidad, no fuente de verdad de ésta. **Regenerar juntos, este activo no es fuente de verdad del otro** (§23.2.B).
- `nicanor_escoba` — comparte persona, vestuario, escoba y proporciones; reserva para esa pose el barrido diagonal y las motas de polvo. **Regenerar juntos, este activo no es fuente de verdad del otro** (§23.2.B).
- `profile_perfil_nicanor.webp` / `perfil_nicanor` — comparte identidad y los hechos de servicio, hallazgo a las 17:35 y Tomo XI; el perfil no fija la expresión de sudor. **Regenerar juntos, este activo no es fuente de verdad del otro** (`docs/specs/case-5-el-tomo-trece.md:343`; `ProfileCatalogCase5Es.ts:64-72`; `ProfileCatalogCase5En.ts:64-72`).
- `bg_archivo_vestibulo.webp` — comparte el vestíbulo público, el mostrador y el contexto de la primera conversación donde se usa esta pose; el fondo no es fuente de verdad del diseño del sprite. **Regenerar juntos, este activo no es fuente de verdad del otro** (§23.1; §10.2).
- `nicanor_sweat` ES↔EN — gemelos de idioma del mismo sprite, sin variante visual. Mantener composición idéntica; sólo cambia el texto del guion. **Regenerar juntos, este activo no es fuente de verdad del otro**.

## Conflictos abiertos

- §23.2.B describe `nicanor_sweat` con la escoba apoyada en el hombro. En el relevo de D1-T1, el Juez ordena que Nicanor deje la escoba y él responde «sin ella no sé dónde poner las manos», pero el guion vuelve a estampar `nicanor_sweat` (`docs/specs/case-5-el-tomo-trece.md:1003-1018`; `src/case/case5/Private/trial_day1_success.ts:84-87`; `trial_day1_success_en.ts:84-87`). No resolver aquí si hace falta una variante sin escoba o si el motor conserva la escoba fuera de cuadro.
- El uso de la pose en D1-T3 conserva las dos gotas cómicas de §23.2.B durante una revelación importante del estante, mientras el resto del bloque alterna `nicanor_idle`; no hay contradicción textual, pero la aceptación debe evitar que la pose se lea como pánico o como culpabilidad (§23.2.B; `docs/specs/case-5-el-tomo-trece.md:1207-1230`).

## Hallazgos de auditoría 2026-09-19

- `MALFORMADO` — La celda inferior izquierda de `nicanor_sprites_raw.png` cortaba el cepillo de la escoba contra el borde de la hoja. Tras el chroma-key, el corte se convertía en el borde izquierdo del bbox y el WebP tenía margen de lienzo, así que un test de padding no lo cazaba. En el vestíbulo, la línea «Yo fui el que lo encontró» mostraba la escoba mutilada detrás del diálogo.
- Corrección: `nicanor_sweat` sale de `tools/raw/case5/nicanor_sweat_raw.png` (1×1), con la escoba completa junto al hombro derecho y el cepillo entero dentro del busto. El 2×2 ya no exporta esta pose.
- No se inspeccionó la hoja contra cada casilla F1 en esta pasada; el hallazgo y el arreglo cubren el recorte del cepillo, no un audit completo de identidad.
