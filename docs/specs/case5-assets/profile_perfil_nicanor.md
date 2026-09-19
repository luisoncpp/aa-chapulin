# profile_perfil_nicanor — hoja de hechos

Clase: `profile`. Espec: §6.1, §23.0, §23.2.B, §23.3 y §23.5; Libro de hechos §24. Guion directo ES/EN: `src/case/case5/Private/archivo_vestibulo.ts:10-31`, `archivo_vestibulo_en.ts:10-31`, `trial_day1_t1.ts`, `trial_day1_t1_en.ts`, `trial_day1_t3.ts`, `trial_day1_t3_en.ts`, `trial_day1_success.ts:119-119,166-167`, `trial_day1_success_en.ts:119-119,166-167`, `climax_stage3.ts:18-23` y `climax_stage3_en.ts:18-23`. Variante localizada: no existe; ES y EN usan `assets/profile_perfil_nicanor.webp`.

## Mapa semántico y alcance

- Persona: Nicanor Tolentino, «el Conserje» del Archivo Judicial; conserje honesto, orgulloso y equivocado que encuentra el cuerpo.
- Identidad visual compartida: recorte de busto de la pose `nicanor_idle`, que es el candado de identidad de la familia de sprites de Nicanor.
- Rasgos fijados por §23.2.B: hombre de 64 años, bajo, encorvado y muy delgado; cara redonda y curtida, bigote blanco corto, cejas pobladas, orejas grandes, calvo en la coronilla y con pelo blanco en las sienes.
- Vestuario compartido: overol de mezclilla azul desteñido sobre camisa de franela a cuadros, franela amarilla en el bolsillo del pecho, manojo grande de llaves al cinturón y zapatos de trabajo.
- Medio: icono cuadrado de Acta de Personajes, 256 × 256, busto sobre color plano individual, sin texto ni marco; no es una escena, un sprite de cuerpo entero ni una placa con datos.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Busto reconocible de Nicanor Tolentino con la misma cara, edad aparente, calvicie, pelo blanco en sienes y bigote blanco corto de `nicanor_idle` (§23.2.B; §23.5).
- [ ] `PINTAR` — Recorte hasta la cintura de la pose `nicanor_idle`: ligeramente encorvado, ambas manos apoyadas en el palo de la escoba y el mentón casi encima; expresión atenta y tranquila (§23.2.B).
- [ ] `PINTAR` — Overol de mezclilla azul desteñido, camisa de franela a cuadros, franela amarilla colgando del bolsillo del pecho, manojo grande de llaves al cinturón y zapatos de trabajo (§23.2.B).
- [ ] `PINTAR` — Escoba de vara visible como parte de la pose base; no sustituirla por una escoba diagonal de `nicanor_escoba` ni por la escoba al hombro de `nicanor_sweat` (§23.2.B).
- [ ] `AUSENTE` — Motas de polvo, torso girado, ceja de protesta, sudor, mano levantada hacia la cabeza o cualquier gesto de barrer/angustia perteneciente a las otras poses (§23.2.B).
- [ ] `AUSENTE` — Fondo del vestíbulo, mostrador, pasillo 7, cadáver, estante, libros, documentos, texto de escena, personajes adicionales o elementos de la habitación; el perfil sólo conserva el busto del personaje (§23.5; §10.2; §11.4).

### F2 Texto en imagen

- [ ] `AUSENTE` — Nombre, rol, etiquetas, horas, números de expediente, rótulos en la ropa y cualquier otro texto legible dentro del icono (§23.5).
- [ ] `NO CONTRADECIR` — «Nicanor Tolentino», «conserje», «treinta y un años», 17:35, el Tomo XI, las veintitrés piezas y el hueco del trece son datos de catálogo o diálogo; no deben convertirse en inscripciones del retrato (§6.1; `ProfileCatalogCase5Es.ts:64-72`; `ProfileCatalogCase5En.ts:64-72`; `trial_day1_t3.ts:23-64`; EN `_en.ts:23-64`).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — El perfil se entrega en el vestíbulo el 6 de diciembre a las 10:15 AM, cuando Nicanor dice que es el conserje y que encontró al cuerpo; la imagen no imprime esa fecha u hora (§10.2; `archivo_vestibulo.ts:17-25`; EN `archivo_vestibulo_en.ts:17-25`).
- [ ] `NO CONTRADECIR` — El catálogo dice «treinta y un años de servicio» y el testimonio posterior precisa «treinta y un años, cuatro meses»; ambas cifras describen antigüedad laboral, no la edad visual del personaje ni texto que deba aparecer en el icono (§6.1; `ProfileCatalogCase5Es.ts:69-71`; `ProfileCatalogCase5En.ts:69-71`; `trial_day1_success.ts:166`; EN `trial_day1_success_en.ts:166`).
- [ ] `NO CONTRADECIR` — El hallazgo ocurre a las 17:35, al subir a cerrar el pasillo, y la actualización sólo se desbloquea después de la revelación del estante completo; esos estados pertenecen al Acta y al guion, no a una variación visual del busto (§6.1; §10.2; `archivo_vestibulo_talks.ts:10-32`; `trial_day1_success.ts:112-119`; EN equivalentes).

### F4 Contrato en pantalla

- [ ] `PINTAR` — La entrada `perfil_nicanor` usa `assets/profile_perfil_nicanor.webp` tanto en ES como en EN y se añade cuando Nicanor se identifica y dice que encontró al muerto (`ProfileCatalogCase5Es.ts:64-72`; `ProfileCatalogCase5En.ts:64-72`; `archivo_vestibulo.ts:24-25`; `archivo_vestibulo_en.ts:24-25`).
- [ ] `NO CONTRADECIR` — El icono debe acompañar a un conserje que habla de humedad, de los secadores y de no tocar el pasillo siete; la tarjeta no debe mostrar cadáver, humedad, calor, herramientas adicionales ni el fondo del Archivo (§10.2; `archivo_vestibulo.ts:25-31`; EN `archivo_vestibulo_en.ts:25-31`).
- [ ] `NO CONTRADECIR` — La misma identidad visual acompaña las afirmaciones de Nicanor sobre catorce visitantes, el libro público, las entradas profesionales, las puertas separadas y el montacargas; esos hechos se expresan en diálogo y no exigen accesorios o texto dentro del retrato (`archivo_vestibulo_hotspots.ts:13-60`; EN `archivo_vestibulo_hotspots_en.ts:13-60`).
- [ ] `NO CONTRADECIR` — En D1-T1 el sprite base sostiene las declaraciones sobre horarios, catorce firmas, la salida de Valdés y la media hora anterior al hallazgo; la acción de encerar y la reacción al ruido de la caldera se reservan a `nicanor_escoba` y `nicanor_sweat` (`trial_day1_t1.ts:34-93`; EN `trial_day1_t1_en.ts:34-94`).
- [ ] `NO CONTRADECIR` — En D1-T3 el testimonio fija 17:35, el tomo cerrado boca abajo, el Tomo XI, el estante completo, el hueco del trece y la escalera alternativa; el perfil no debe sugerir que Nicanor está en el pasillo ni que sostiene el tomo (`trial_day1_t3.ts:23-80`; EN `trial_day1_t3_en.ts:23-80`).
- [ ] `NO CONTRADECIR` — La actualización del perfil ocurre al cobrar el `followUp` de `expediente_casimiro`, después de que la defensa usa que Nicanor vio el estante completo y el expediente abierto; es una línea del Acta, no una nueva pose ni un cambio de imagen (`trial_day1_success.ts:112-119`; `trial_day1_success_en.ts:112-119`; §6.1).
- [ ] `NO CONTRADECIR` — En el clímax, Nicanor vuelve como testigo cuando confirma que el estante estaba derecho y completo; el retrato conserva su identidad y no absorbe la pose de reacción del diálogo (`climax_stage3.ts:18-23`; `climax_stage3_en.ts:18-23`).
- [ ] `NO CONTRADECIR` — El icono de persona no se presenta como evidencia y no habilita por sí mismo una acusación: §6.2 limita los señalamientos de persona a `perfil_casimiro` en la apertura del día 2 y `perfil_berrondo` en la etapa 1 del clímax (§6.2; `docs/flows/character-record-flow.md`).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA/Nintendo DS) en alta definición; , ; contorno oscuro nítido y continuo en carbón `#1A1A1A`, más grueso en la silueta exterior; anatomía facial expresiva y exagerada al borde de la caricatura; colores primarios saturados; registro de televisión mexicana de los años setenta, universo Chespirito / El Chapulín Colorado, melodrama de tribunal tratado en serio y absurdo en los personajes, con papel, madera, polvo, latón envejecido y luz de tungsteno; prohibidos fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, estética de cómic americano, marcas de agua, texto en inglés salvo variantes EN exigidas y cualquier rosa o magenta en primer plano (§23.0).
- [ ] `PINTAR` — Lienzo final de 256 × 256, recorte de busto de `nicanor_idle`, sobre un color plano distinto por persona, nunca magenta; sin marco (§23.5).
- [ ] `AUSENTE` — Fondo detallado, transparencia con elementos de escenario, magenta de chroma en primer plano, texto o marco decorativo (§23.0; §23.5).

### F6 Localización

- [ ] `NO CONTRADECIR` — ES y EN usan exactamente el mismo archivo `assets/profile_perfil_nicanor.webp`; no crear `profile_perfil_nicanor_en.webp` (§23.3; `ProfileCatalogCase5Es.ts:68`; `ProfileCatalogCase5En.ts:68`).
- [ ] `PINTAR` — Composición, geometría, edad aparente, rasgos, vestuario, llaves, escoba, expresión y color plano son idénticos en ambos idiomas; sólo cambia el texto del catálogo y el diálogo que acompaña al icono (§23.3; §23.5).
- [ ] `TEXTO EXACTO` — ES: `name: Nicanor Tolentino`; `role: Conserje`; descripción: `Conserje del Archivo Judicial. Treinta y un años de servicio. Encontró el cuerpo a las 17:35, subiendo a cerrar el pasillo.`; actualización: `Sacude el Tomo XI los lunes. El sábado del crimen vio el estante completo.` (`src/state/Private/ProfileCatalogCase5Es.ts:64-72`).
- [ ] `TEXTO EXACTO` — EN: `name: Nicanor Tolentino`; `role: Janitor`; descripción: `Janitor of the Judicial Archive. Thirty-one years of service. Found the body at 5:35 PM while going up to close the corridor.`; actualización: `He dusts Volume XI on Mondays. On the Saturday of the crime he saw the shelf complete.` (`src/state/Private/ProfileCatalogCase5En.ts:64-72`).
- [ ] `NO CONTRADECIR` — La regla de la ese caída y las variantes EN de láminas/documentos no aplica al retrato: el icono no contiene texto localizado (§23.3; §23.5).

## Consistencia (regenerar juntos)

- `nicanor_idle` — comparte la identidad completa y es la fuente de recorte prescrita para el perfil: cara, pelo, bigote, overol, franela, llaves, escoba, proporción y expresión base. **Regenerar juntos; este activo no es fuente de verdad del otro.**
- `nicanor_escoba` y `nicanor_sweat` — comparten la misma silueta, vestuario, rasgos y anclaje; sólo cambian acción y expresión. **Regenerar juntos; este activo no es fuente de verdad de los otros.**
- `bg_archivo_vestibulo` — comparte la primera escena de Nicanor y el registro visual del Archivo, pero el fondo no debe hornear al personaje. **Regenerar juntos; este activo no es fuente de verdad del otro.**
- `bg_archivo_pasillo7` y `bg_archivo_pasillo7_d4` — comparten el edificio y las consecuencias narrativas de lo que Nicanor vio, pero no deben incluir ni definir el retrato. **Regenerar juntos por coherencia de época y paleta; este activo no es fuente de verdad de los otros.**
- `profile_perfil_casimiro`, `profile_perfil_berrondo`, `profile_perfil_genoveva`, `profile_perfil_sargento`, `profile_perfil_barriga`, `profile_perfil_chompiras`, `profile_perfil_donramon`, `profile_perfil_chapulin` y `profile_perfil_supersam` — comparten el sistema de diez iconos: 256 × 256, busto, color plano individual, sin texto ni marco. **Regenerar juntos; este activo no es fuente de verdad de los otros.**

## Conflictos abiertos

- La identidad visual de §23.2.B fija a Nicanor en 64 años, mientras §6.1, el catálogo y los diálogos repiten «treinta y un años» de servicio y el testimonio precisa «treinta y un años, cuatro meses». La lectura coherente es que la cifra es antigüedad laboral, no edad; esta hoja no la resuelve ni la pinta como texto (`docs/specs/case-5-el-tomo-trece.md:140,343,4014-4022`; `ProfileCatalogCase5Es.ts:69-71`; `ProfileCatalogCase5En.ts:69-71`; `trial_day1_success.ts:166`; EN `trial_day1_success_en.ts:166`).
- §23.5 llama a los diez perfiles «iconos de persona nuevos», aunque el sistema de perfiles reutiliza archivos de identidad de poses existentes y `profile_perfil_nicanor` debe derivarse de `nicanor_idle`. La hoja conserva la regla de recorte y no decide si «nuevo» significa archivo nuevo o familia visual nueva (§23.5; §23.2.B).
- La actualización ES dice «el estante completo» y la EN dice «the shelf complete», una traducción deliberadamente literal; ambas fijan el mismo hecho narrativo y no requieren texto dentro de la imagen (§6.1; `ProfileCatalogCase5Es.ts:70-72`; `ProfileCatalogCase5En.ts:70-72`).

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, por instrucción del protocolo. No se confirma ni se descarta ningún defecto visual del archivo actual.
- Hoja derivada únicamente de §6.1, §23.0, §23.2.B, §23.3, §23.5, el Libro de hechos y las referencias ES/EN citadas.
