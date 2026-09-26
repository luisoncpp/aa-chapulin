# nicanor_escoba — hoja de hechos

Clase: `sprite`. Espec: §23.0, §23.2.B. Guion: introducción e investigación del vestíbulo D1, apertura y Testimonio 1, recuerdo/Testimonio 3 de Nicanor, y veredicto; las variantes ES/EN usan el mismo archivo de sprite.

## Mapa semántico

- Personaje: Nicanor Tolentino, conserje del Archivo Judicial, hombre de 64 años, bajo, encorvado y muy delgado; su identidad se fija por el bigote blanco corto, calvicie en la coronilla con pelo blanco en las sienes, overol azul desteñido, camisa de franela a cuadros, franela amarilla, llaves al cinturón y escoba (§6.1; §23.2.B).
- Estado: pose de Nicanor cuando se queja o está ocupado: está barriendo, no sudando ni reaccionando con pánico (§23.2.B).
- Objeto visible: escoba de vara, diagonal, con polvo estilizado alrededor del cepillo; la escoba es parte de la identidad de Nicanor y acompaña sus usos de limpieza y protesta (§23.2.B).
- Variantes: no existe `nicanor_escoba_en`; ES y EN cambian únicamente el diálogo que acompaña al mismo sprite (`src/case/case5/Private/archivo_vestibulo.ts:20,27`; `archivo_vestibulo_en.ts:20,27`).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Misma silueta, escala y transparencia que `nicanor_idle`; busto hasta la cintura de un hombre bajo, encorvado y muy delgado (§23.2.B).
- [ ] `PINTAR` — Cara redonda y curtida, bigote blanco corto y recortado, cejas pobladas, orejas grandes, calvo en la coronilla con pelo blanco en las sienes (§23.2.B).
- [ ] `PINTAR` — Overol de mezclilla azul desteñido sobre camisa de franela a cuadros, franela amarilla colgando del bolsillo del pecho, manojo grande de llaves al cinturón y zapatos de trabajo (§23.2.B).
- [ ] `PINTAR` — Torso girado en acción de barrer; escoba de vara en diagonal y motas de polvo estilizadas alrededor del cepillo (§23.2.B, tabla de poses).
- [ ] `PINTAR` — Una ceja levantada y boca en gesto de protesta afable: la pose debe leer como queja ocupada y cómica, no como amenaza o pánico (§23.2.B).
- [ ] `PINTAR` — La escoba permanece en la mano derecha salvo donde el spec indique otra cosa; en esta pose debe conservarse como el objeto de trabajo visible (§23.2.B).
- [ ] `AUSENTE` — Dos gotas de sudor, cejas caídas hacia adentro, mano quitándose una gorra imaginaria o escoba apoyada en el hombro; esos rasgos pertenecen a `nicanor_sweat` (§23.2.B).
- [ ] `AUSENTE` — Postura de `nicanor_idle` con ambas manos apoyadas y mentón sobre el palo como pose principal; `nicanor_escoba` debe mostrar el barrido diagonal (§23.2.B).
- [ ] `AUSENTE` — Entorno del Archivo, mostrador, piso, muebles, personajes ajenos o cualquier fondo horneado en la transparencia; el sprite se compone sobre vestíbulo, estrado o sala de juicio en sus activos respectivos (§23.2.B; `src/case/case5/Private/archivo_vestibulo.ts:18-20`).

### F2 Texto en imagen

- [ ] `AUSENTE` — El sprite no contiene texto, rótulos, placas ni marcas legibles; las palabras de Nicanor existen sólo en las líneas de diálogo (§23.0; §23.2.B).
- [ ] `NO CONTRADECIR` — La escoba, las llaves y la franela amarilla son detalles de identidad, no superficies para imprimir palabras o números (§23.2.B).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — Los 64 años de edad, 31 años de servicio, el hallazgo de las 17:35 y los horarios de encerado son hechos de identidad o narración, no texto que deba aparecer en el sprite (§6.1; §10.2; §11.1; `src/case/case5/Private/trial_day1_t1.ts:43`).
- [ ] `NO CONTRADECIR` — La fecha del 6 de diciembre, la humedad del tubo del 3 de diciembre, los veinte policías y el confeti pertenecen a situaciones narradas; no deben convertirse en marcas, fondos ni accesorios adicionales del sprite (§10.2; `src/case/case5/Private/trial_day1_success.ts:167`; `climax_verdict.ts:27`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En la introducción del vestíbulo acompaña «acabo de encerar» y la advertencia de caminar por la orilla y no tocar el pasillo 7; debe parecer que está trabajando y quejándose del piso/humedad (`archivo_vestibulo.ts:20,27`; EN `archivo_vestibulo_en.ts:20,27`; §10.2, `docs/specs/case-5-el-tomo-trece.md:627-640`).
- [ ] `PINTAR` — En el hotspot del plano acompaña la explicación de que Genoveva tiene su propia puerta; la escoba no debe convertir la pose en una señal de que Nicanor controla la ventanilla profesional (`archivo_vestibulo_hotspots.ts:42`; EN `archivo_vestibulo_hotspots_en.ts:42`; §10.2, `docs/specs/case-5-el-tomo-trece.md:666-689`).
- [ ] `PINTAR` — En la conversación que desbloquea el pasillo 7 acompaña la retirada de la cinta y la advertencia de no recargarse en el estante enderezado; el estante y el pasillo pertenecen al fondo correspondiente, no al sprite (`archivo_vestibulo_talks.ts:30`; EN `archivo_vestibulo_talks_en.ts:30`; §10.2, `docs/specs/case-5-el-tomo-trece.md:719-729`).
- [ ] `PINTAR` — En la apertura del juicio acompaña que Nicanor encera el piso y protesta por los veinte policías que lo pisaron; la pose debe seguir siendo una queja afable, no una reacción de cadáver/humedad (`trial_day1_success.ts:167`; EN `trial_day1_success_en.ts:167`; §11.1, `docs/specs/case-5-el-tomo-trece.md:900-912`).
- [ ] `PINTAR` — En la presión de Testimonio 1 acompaña que encera de cuatro a cinco mirando la puerta; la escoba y el torso deben seguir comunicando limpieza mientras permite leer la vigilancia de la puerta (`trial_day1_t1.ts:43`; EN `trial_day1_t1_en.ts:43`; §11.1, `docs/specs/case-5-el-tomo-trece.md:932-940`).
- [ ] `PINTAR` — En el recuerdo/Testimonio 3 Nicanor vuelve con su escoba y dice que fue por ella; la pose debe hacer comprensible que la escoba es su apoyo habitual, aunque el Juez le pida dejarla después (`trial_day1_success.ts:84`; EN `trial_day1_success_en.ts:84`; §11.4, `docs/specs/case-5-el-tomo-trece.md:1158-1163`).
- [ ] `PINTAR` — En el mismo testimonio acompaña la frase de que en el Archivo hay libros para apuntar los libros; la pose es una salida cómica de conserje, no una acción de escribir o manipular libros (`trial_day1_success.ts:107`; EN `trial_day1_success_en.ts:107`; §11.4, `docs/specs/case-5-el-tomo-trece.md:1233-1254`).
- [ ] `PINTAR` — En el veredicto, acompaña la pregunta sobre quién barrerá el confeti; conservar la misma identidad y escoba, sin añadir confeti a la transparencia del sprite (`climax_verdict.ts:27`; `climax_verdict_en.ts:27`; `docs/specs/case-5-el-tomo-trece.md:3725-3734`).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA/Nintendo DS) en alta definición; , ; contorno oscuro nítido y continuo en carbón `#1A1A1A`, más grueso en la silueta exterior; anatomía expresiva y exagerada; colores primarios saturados; televisión mexicana de los años setenta, universo Chespirito/El Chapulín, melodrama judicial tratado en serio, y registro de papel, madera, polvo, latón envejecido y luz de tungsteno; sin fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto en inglés salvo variantes exigidas, ni rosa/magenta en primer plano (§23.0).
- [ ] `NO CONTRADECIR` — Mantener contorno, paleta, anatomía y expresividad compatibles con `nicanor_idle` y `nicanor_sweat`; `nicanor_idle` es el candado de identidad, no una fuente para borrar el gesto de barrido (§23.2.B).

### F6 Localización

- [ ] `NO CONTRADECIR` — No generar una variante `_en`: ES y EN usan exactamente el mismo `nicanor_escoba`; sólo cambia el diálogo (`archivo_vestibulo*.ts`, `archivo_vestibulo_hotspots*.ts`, `archivo_vestibulo_talks*.ts`, `trial_day1_success*.ts`, `trial_day1_t1*.ts`, `climax_verdict*.ts`).
- [ ] `NO CONTRADECIR` — Mantener idénticos entre idiomas composición, escala, silueta, vestuario, escoba, polvo y gesto; no introducir letras ni palabras en la imagen (§23.0, §23.2.B).

## Consistencia (regenerar juntos)

- `nicanor_idle` — comparte identidad, escala, silueta, vestuario, llaves y escoba; es el candado de identidad. Regenerar juntos; este activo no es fuente de verdad del gesto del otro.
- `nicanor_sweat` — comparte personaje, vestuario y escoba, pero reserva el sudor, la escoba al hombro y la reacción al cadáver/humedad para ese estado. Regenerar juntos; este activo no es fuente de verdad de la emoción de éste.
- `perfil_nicanor` — comparte la identidad de Nicanor y sus rasgos distintivos; el perfil puede recortar/representar al personaje, pero no es fuente de verdad de la pose de barrido. Regenerar juntos; este activo no es fuente de verdad del otro.
- `bg_archivo_vestibulo` — comparte el contexto de trabajo, encerado y vestíbulo; el fondo fija la sala y la enceradora, pero no debe hornear al sprite ni la escoba de Nicanor. Regenerar juntos para staging; este activo no es fuente de verdad del sprite.
- Fondos de juicio (`bg_courtroom`, `bg_judge`, `bg_witness`) — son escenarios donde aparece el sprite en apertura/testimonios; comparten escala y transparencia, pero no deben incorporarse al personaje. Regenerar juntos para staging; este activo no es fuente de verdad de esos fondos.
- Gemelos ES/EN del guion — comparten exactamente el mismo archivo visual; sólo cambia el diálogo. Regenerar juntos como contrato de localización; no existe un sprite localizado.

## Conflictos abiertos

- El diálogo usa la pose para varias funciones —barrer, quejarse, explicar accesos, protestar por el piso, volver con la escoba y rematar el confeti— mientras §23.2.B la resume como «cuando se queja o se ocupa». No es conflicto visual: conservar la pose de barrido con protesta afable; no añadir estados emocionales de `nicanor_sweat`.
- En §23.2.B la identidad general dice que Nicanor siempre lleva la escoba en la mano derecha, mientras `nicanor_idle` especifica ambas manos apoyadas en el palo y `nicanor_sweat` la escoba en el hombro. La tabla de poses resuelve el uso por pose: para `nicanor_escoba`, la escoba debe estar diagonal en la acción de barrer; no alterar la identidad ni trasladar la instrucción del hombro desde `nicanor_sweat`.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen por protocolo. No se confirma ni se descarta ningún defecto visual del archivo actual.
- La hoja queda como contrato previo de aceptación: identidad de Nicanor, acción de barrer, escoba diagonal, polvo estilizado, transparencia sin texto, separación de `nicanor_idle`/`nicanor_sweat` y consistencia ES/EN.
