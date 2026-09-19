# profile_perfil_genoveva — hoja de hechos
Clase: `profile`. Espec: §6.1 y §23.5. Guion: alta en juicio del día 2; actualización durante D4-T1 tras la contradicción de `libro_peritos`.

## Mapa semántico

- Persona: Genoveva Peñaloza, encargada de la ventanilla de peritos y auxiliares del Archivo Judicial.
- Identidad visual compartida: busto recortado de `genoveva_idle`; el perfil no inventa otra pose, vestuario ni estado emocional.
- Rasgos de identidad: mujer de treinta y ocho años, porte rígido, chongo bajo castaño oscuro, anteojos rectangulares negros, blusa blanca abotonada hasta arriba, camafeo, suéter gris sobre los hombros, reloj pequeño, lápiz detrás de la oreja y carpeta de hule negro contra el pecho.
- Función narrativa: lleva el segundo libro del edificio, registra solicitudes y devoluciones de gafetes, y responde según el reglamento sin vigilar la puerta del patio.
- Medio: icono cuadrado del Acta de Personajes, sin texto ni marco, sobre un color plano propio de Genoveva.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Busto reconocible de Genoveva Peñaloza, recortado de la pose `genoveva_idle` correspondiente: de frente, hasta la cintura, hombros cuadrados, carpeta contra el pecho, expresión neutra y atenta, barbilla ligeramente levantada (§23.2, `genoveva_idle`; §23.5).
- [ ] `PINTAR` — Mujer de treinta y ocho años, estatura media y porte rígido; cabello castaño oscuro en chongo bajo muy apretado, sin pelos sueltos (§23.2, identidad de Srta. Genoveva).
- [ ] `PINTAR` — Anteojos rectangulares de pasta negra, cara ovalada, labios finos con lápiz coral discreto y sin maquillaje adicional (§23.2, identidad de Srta. Genoveva).
- [ ] `PINTAR` — Blusa blanca de cuello camisero abotonada hasta arriba, broche de camafeo y suéter de punto gris ratón sobre los hombros, abrochado sólo en el primer botón (§23.2, identidad de Srta. Genoveva).
- [ ] `PINTAR` — Reloj pequeño en la muñeca izquierda, lápiz detrás de la oreja derecha y carpeta de hule negro apretada contra el pecho con el brazo izquierdo (§23.2, identidad de Srta. Genoveva).
- [ ] `NO CONTRADECIR` — La imagen debe acompañar a la encargada de la ventanilla de peritos y auxiliares que lleva el segundo libro del edificio y contesta sólo lo preguntado; esas relaciones se expresan en el catálogo, no requieren texto pintado (§6.1; `src/state/Private/ProfileCatalogCase5Es.ts:74-82`; EN `ProfileCatalogCase5En.ts:74-82`).

### F2 Texto en imagen

- [ ] `AUSENTE` — No debe haber nombre, rol, encabezados del libro, reglas, etiquetas, marco ni ningún otro texto dentro del icono; §23.5 exige busto sobre color plano, sin texto y sin marco.

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La ficha se incorpora durante el juicio del día 2 cuando la defensa recibe `libro_peritos`; la imagen no debe imprimir esa secuencia ni una fecha (`src/case/case5/Private/trial_day2.ts:36-38`; EN `trial_day2_en.ts:36-38`).
- [ ] `NO CONTRADECIR` — La actualización de la ficha ocurre en D4-T1 después de que Genoveva lee el encabezado exacto «Hora de devolución de gafete»; es texto de actualización, no un cambio visual obligatorio del busto (§6.1; `docs/specs/case-5-el-tomo-trece.md:3198-3221`; `src/case/case5/Private/trial_day4_t1.ts` y `_en.ts`).
- [ ] `NO CONTRADECIR` — «Trece años» describe su antigüedad declarada en estrado, no la edad de la persona ni un número que deba aparecer en el retrato (§17.2; `docs/specs/case-5-el-tomo-trece.md:3111-3115`; `src/case/case5/Private/trial_day4_success.ts:46-50`; EN `_en.ts:46-50`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — El catálogo ES y EN debe resolver `perfil_genoveva` al mismo archivo `assets/profile_perfil_genoveva.webp`; el perfil es un icono común y no una variante localizada (§23.5; `src/state/Private/ProfileCatalogCase5Es.ts:74-82`; `ProfileCatalogCase5En.ts:74-82`).
- [ ] `NO CONTRADECIR` — La ficha aparece en el Acta de Personajes durante el juicio del día 2 junto con `libro_peritos`, como registro de la mujer de la ventanilla; la línea explícitamente la añade en ES y EN (`src/case/case5/Private/trial_day2.ts:36`; EN `trial_day2_en.ts:36`).
- [ ] `NO CONTRADECIR` — En D4-T1, Genoveva es llamada como encargada de la ventanilla y se presenta con `genoveva_idle`; la pose del perfil debe conservar esa identidad visual (`docs/specs/case-5-el-tomo-trece.md:3111-3115`; `src/case/case5/Private/trial_day4_success.ts:46-49`; EN `_en.ts:46-49`).
- [ ] `NO CONTRADECIR` — La ficha se actualiza después de la contradicción de `libro_peritos`, cuando la corte fija que el segundo encabezado es «Hora de devolución de gafete» y que el libro registra quién pidió y quién devolvió un gafete (§6.1; `docs/specs/case-5-el-tomo-trece.md:3198-3221`; `src/case/case5/Private/trial_day4_t1.ts` y `_en.ts`).
- [ ] `NO CONTRADECIR` — La actualización también deja visible que un síndico con credencial puede permanecer en el depósito aunque haya devuelto el gafete; el retrato no debe añadir una credencial, un gafete o una escena de patio como si fueran parte del icono (`docs/specs/case-5-el-tomo-trece.md:3216-3221`).
- [ ] `NO CONTRADECIR` — Durante un contrainterrogatorio la tarjeta de persona no ofrece botón de presentar; las ranuras de señalamiento de persona son sólo las dos definidas por §6.2 (§6.2; `docs/flows/character-record-flow.md`).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA / Nintendo DS) en alta definición; ; contorno oscuro nítido y continuo en carbón `#1A1A1A`, más grueso en la silueta exterior que en los detalles internos; anatomía facial expresiva y exagerada, al borde de la caricatura; colores primarios saturados; televisión mexicana de los años setenta, universo Chespirito / El Chapulín Colorado, melodrama de tribunal tratado en serio por el sistema y absurdo en los personajes, con registro de papel, madera, polvo, latón envejecido y luz de tungsteno; prohibidos fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, estética de cómic americano de superhéroes, marcas de agua, texto en inglés salvo variantes EN exigidas y cualquier tono rosa o magenta en primer plano por el pipeline sobre `#FF00FF` (§23.0).
- [ ] `PINTAR` — Lienzo final de 256 × 256, busto sobre un color plano distinto por persona, sin magenta, sin texto y sin marco (§23.5).

### F6 Localización

- [ ] `PINTAR` — El archivo de imagen es común a ES y EN: el icono no contiene texto localizado (§23.5; `ProfileCatalogCase5Es.ts:78`; `ProfileCatalogCase5En.ts:78`).
- [ ] `TEXTO EXACTO` — En ES, la ficha usa `name: Genoveva Peñaloza`, `role: Encargada de ventanilla`, descripción: `Encargada de la ventanilla de peritos y auxiliares. Lleva el segundo libro del edificio. Contesta lo que se le pregunta y nada más.`, y actualización: `Escribe la hora cuando le devuelven el gafete. No ve la puerta del patio y el reglamento no la obliga.` (`src/state/Private/ProfileCatalogCase5Es.ts:74-82`).
- [ ] `TEXTO EXACTO` — En EN, la ficha usa `name: Genoveva Peñaloza`, `role: Badge window clerk`, descripción: `Clerk at the experts and auxiliaries window. Keeps the building’s second logbook. Answers what she is asked and nothing more.`, y actualización: `She writes the time when they return the badge. She cannot see the courtyard door and the rules do not require her to.` (`src/state/Private/ProfileCatalogCase5En.ts:74-82`).

## Consistencia (regenerar juntos)

- `genoveva_idle` — comparte identidad, rostro, ropa, carpeta, anteojos, reloj y lápiz; el perfil debe ser un recorte de esta pose maestra. **Regenerar juntos; este activo no es fuente de verdad del otro.**
- `genoveva_reglamento`, `genoveva_sweat`, `genoveva_shock` — comparten la misma persona, silueta y vestuario; el perfil conserva el estado neutro de `genoveva_idle`. **Regenerar juntos; este activo no es fuente de verdad de los otros.**
- `libro_peritos` y `examine_libro_peritos` — comparten el segundo libro y la revelación del encabezado «Hora de devolución de gafete»; el perfil no debe mostrar el libro ni convertir su texto en parte del retrato. **Regenerar juntos; este activo no es fuente de verdad de los otros.**
- `profile_perfil_nicanor`, `profile_perfil_berrondo`, `profile_perfil_casimiro` y las demás fichas de §6.1 — comparten el sistema de iconos: 256 × 256, busto, color plano individual, sin texto ni marco. **Regenerar juntos; este activo no es fuente de verdad de los otros.**

## Conflictos abiertos

- §23.5 llama “diez nuevos” a los iconos de persona y no enumera individualmente los fondos planos de cada ficha; §6.1 fija diez perfiles, pero no asigna un color concreto a Genoveva. Esta hoja conserva la regla de color plano distinto por persona y no inventa un color específico (§6.1; §23.5).
- La ficha se da de alta en el juicio del día 2, mientras que el catálogo la describe como personaje de la ventanilla y su testimonio ocurre en D4-T1. No es una contradicción visual: es la separación entre momento de incorporación al Acta y momento de comparecencia (`src/case/case5/Private/trial_day2.ts:36`; §6.1; §17.2).

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, por instrucción del protocolo. No se confirma ni se descarta ningún defecto visual del archivo actual.
- Hoja derivada únicamente de §6.1, §6.2, §17.2, §23.0, §23.2, §23.5, el Libro de hechos y las referencias ES/EN citadas.
