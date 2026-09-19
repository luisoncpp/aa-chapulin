# genoveva_shock — hoja de hechos

Clase: `sprite`. Espec: §23.0 y §23.2.C. Guion: juicio del día 4, presentación de Genoveva y resolución de `libro_peritos` / `fichero_cedulario`.

Activo compartido por ES/EN: no existe `genoveva_shock_en`. El sprite no contiene texto localizado; la misma imagen se usa en ambos idiomas. Es la pose de ruptura momentánea de Genoveva, derivada del candado `genoveva_idle`.

## Mapa semántico

- Persona: Genoveva Peñaloza Suárez, 38 años, encargada de la ventanilla de peritos y auxiliares de la justicia, testigo D4-T1. Es exacta y no hostil; su única pérdida de compostura ocurre al descubrir el encabezado real de su libro (§3.2, §6.1, §17.2; `src/state/Private/ProfileCatalogCase5Es.ts:74-81`; `src/state/Private/ProfileCatalogCase5En.ts:74-81`).
- Identidad compartida: porte rígido, chongo bajo castaño oscuro muy apretado, anteojos rectangulares negros, cara ovalada, labios finos con lápiz coral, blusa blanca cerrada con broche de camafeo, suéter gris ratón sobre los hombros, reloj pequeño en la muñeca izquierda y lápiz detrás de la oreja derecha (§23.2.C).
- Objeto inseparable: carpeta de hule negro apretada contra el pecho con el brazo izquierdo en la silueta base; en shock empieza a escurrirse (§23.2.C).
- Estado dramático: descubre que la segunda columna no dice “hora de salida”, sino “Hora de devolución de gafete”; queda en silencio y admite que llevaba trece años usando el nombre equivocado (§17.2; `trial_day4_success.ts:55-66`; `trial_day4_success_en.ts:55-66`).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Misma silueta de Genoveva: busto hasta la cintura, de frente, hombros cuadrados, con la identidad visual completa de §23.2.C (`docs/specs/case-5-el-tomo-trece.md:3997-4033`).
- [ ] `PINTAR` — Ojos enormes detrás de los anteojos rectangulares negros (§23.2.C, fila `genoveva_shock`).
- [ ] `PINTAR` — Boca pequeña abierta, expresando sorpresa contenida, no grito ni berrinche (§23.2.C; `src/case/case5/Private/trial_day4_success.ts:60-61`).
- [ ] `PINTAR` — El lápiz cae desde detrás de la oreja derecha (§23.2.C; identidad del lápiz en §23.2.C).
- [ ] `PINTAR` — La carpeta de hule negro se escurre del brazo izquierdo y queda dibujada a medio resbalar (§23.2.C).
- [ ] `PINTAR` — Mantener cabello, blusa, broche de camafeo, suéter gris, reloj, carpeta y silueta de la misma persona; sólo cambia el estado emocional (§23.2.C).
- [ ] `AUSENTE` — Gota de sudor, mano subiendo a los anteojos, carpeta apenas bajada y gesto de recitar: pertenecen a `genoveva_sweat` o `genoveva_reglamento`, no a esta pose (§23.2.C).
- [ ] `AUSENTE` — Hostilidad, risa, lágrimas, cabello suelto, papeles volando o descomposición corporal; el spec la define como una pérdida única y breve de compostura (§3.2; §23.2.C).

### F2 Texto en imagen

- [ ] `AUSENTE` — No imprimir nombre, encabezados, cifras, rótulos, español, inglés ni texto de reglamento en el sprite. El encabezado del libro se lee en diálogo y la evidencia `libro_peritos` (`trial_day4_success.ts:57-65`; `trial_day4_success_en.ts:57-65`; spec §23.3).

### F3 Cifras/fechas/horas

- [ ] `NO CONTRADECIR` — La pose acompaña el descubrimiento de que Genoveva llevaba **trece años** llamando “hora de salida” a la columna (`trial_day4_success.ts:60-62`; `trial_day4_success_en.ts:60-62`). El número no se pinta en el sprite.
- [ ] `NO CONTRADECIR` — Los datos 4 de diciembre, 16:05, 16:50 y las dos columnas del libro son hechos del documento y del diálogo, no requisitos de texto visible dentro de la pose (§24.A, §24.C; `trial_day4_success.ts:55-65`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — Tras el silencio de la sala, Genoveva aparece con shock cuando procesa el encabezado “Hora de devolución de gafete”; después repite “Trece años” con la misma pose (`docs/specs/case-5-el-tomo-trece.md:3204-3211`; `src/case/case5/Private/trial_day4_success.ts:55-62`; versión EN: líneas 55-62).
- [ ] `NO CONTRADECIR` — La pose debe comunicar sorpresa ante una corrección administrativa, no una confesión de mentira: el libro registra quién pidió y quién devolvió un gafete, no quién permanecía dentro (§24.C, F3; §24.D, I1 e I17).
- [ ] `NO CONTRADECIR` — El cambio de pose ocurre después de `genoveva_sweat`, que acompaña la lectura del encabezado; no anticiparlo en respuestas neutrales ni en la presentación de la testigo (`trial_day4_success.ts:48-58`; `trial_day4_t1.ts:24-111`).
- [ ] `PINTAR` — La misma pose también acompaña la lectura de “Cajón: Donceles a Espanto”, donde el dato del vale vuelve la atención de la galería hacia Berrondo (`docs/specs/case-5-el-tomo-trece.md:3243-3249`; `src/case/case5/Private/trial_day4_success.ts:91-95`; versión EN: líneas 91-95).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* de linaje GBA/Nintendo DS;  y ; contorno carbón `#1A1A1A` continuo y más grueso en la silueta; anatomía facial exagerada; colores primarios saturados; tema Chespirito de los setenta con papel, madera, polvo, latón envejecido y luz de tungsteno; prohibidos fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto en inglés salvo variantes exigidas y cualquier rosa o magenta en primer plano (§23.0).
- [ ] `NO CONTRADECIR` — La expresividad puede ser extrema en ojos y boca, pero la pose sigue siendo una variación de la empleada rígida identificada por chongo, anteojos, camafeo, reloj, lápiz y carpeta (§23.2.C).

### F6 Localización

- [ ] ES y EN usan exactamente el mismo `genoveva_shock`; sólo cambia el diálogo (`trial_day4_success.ts:55-65`; `trial_day4_success_en.ts:55-65`).
- [ ] No crear una variante `_en` ni cambiar composición, accesorios o expresión por idioma. Las cadenas “Hora de devolución de gafete” / “Time badge returned” viven en el diálogo y en la lámina/documento, no en el sprite.

## Consistencia (regenerar juntos)

- `genoveva_idle`, `genoveva_reglamento`, `genoveva_sweat` — comparten rostro, edad, chongo, anteojos, ropa, reloj, lápiz, carpeta y silueta. `genoveva_idle` es el candado de identidad; regenerar juntos, este activo no es fuente de verdad del otro (§23.2.C).
- `profile_perfil_genoveva.webp` / `perfil_genoveva` — comparte identidad y ocupación de encargada de ventanilla; regenerar juntos, este activo no es fuente de verdad del otro (§6.1; catálogos ES/EN: `ProfileCatalogCase5Es.ts:74-81`, `ProfileCatalogCase5En.ts:74-81`).
- `libro_peritos` / `examine_libro_peritos.webp` — comparte el encabezado y los hechos que disparan el shock; regenerar juntos como continuidad narrativa, pero el documento es la fuente de verdad de sus textos, no el sprite (§5.2; §23.3; `trial_day4_success.ts:55-65`).
- `fichero_cedulario` / `examine_fichero_cedulario.webp` — comparte el vale y la lectura de “Cajón: Donceles a Espanto”; regenerar juntos como continuidad del segundo uso, pero este sprite no es fuente de verdad del documento (§5.3; §17.2; `trial_day4_success.ts:90-95`).
- `genoveva_shock` ES↔EN — gemelos de idioma del mismo sprite, sin variante visual; regenerar juntos, este activo no es fuente de verdad del otro.

## Conflictos abiertos

- §23.2.C define `genoveva_shock` específicamente para descubrir el encabezado de la columna, y §17.2/§23.2.C describen ese momento como su único quiebre. Sin embargo, el guion reutiliza la misma pose al leer “Cajón: Donceles a Espanto” (`docs/specs/case-5-el-tomo-trece.md:3209-3211,3248`; `trial_day4_success.ts:60-61,94`; versión EN: líneas 60-61,94). No resolver aquí: la hoja conserva ambos usos y deja al spec/script decidir si el segundo uso debe ser shock o `genoveva_sweat`/`genoveva_idle`.
- El testimonio dice inicialmente “hora de salida”, mientras la contradicción establece que el encabezado exacto es “Hora de devolución de gafete” (§17.2; `docs/specs/case-5-el-tomo-trece.md:3126-3128,3204-3215`). Es una contradicción deliberada del guion y no autoriza texto dentro del sprite.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, conforme al protocolo `asset-facts`; por tanto, no se confirma ningún defecto visual del activo actual.
- Hoja derivada únicamente del spec §23/§24, el guion ES/EN del día 4 y los catálogos ES/EN de Genoveva. No se ejecutaron tests, lint, auditorías, procesamiento ni verificación de assets.
