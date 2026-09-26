# libro_visitas — hoja de hechos

Clase: `icon` de Acta con `detailedView`. Espec: §23.0, §23.3, §23.5 y §10.2. Guion: investigación D1 del vestíbulo, D1-T1 y catálogo de pruebas de Case 5.

## Mapa semántico

- Objeto: libro grande de registro público del Archivo Judicial, no el libro profesional de peritos y auxiliares.
- Lugar y momento: mostrador del vestíbulo público, hoja del 4 de diciembre de 1982, durante la investigación del día 1.
- Identidad visible del `detailedView`: hoja rayada fotografiada de plano, catorce renglones manuscritos, nombre, asunto y dos columnas de hora; el asiento 14 es R. Valdés.
- Identidad del icono: el mismo libro de visitas del público, centrado sobre fondo transparente con el estilo de icono de Acta. El icono no sustituye la legibilidad del `detailedView`.
- Distinciones que no pueden perderse: sólo firman quienes vienen de visita; el personal del edificio y los uniformados no firman; existe un segundo libro para el acceso profesional.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — El icono representa el libro de visitas del público como objeto de prueba centrado, con fondo transparente y contorno carbón (§23.5, `docs/specs/case-5-el-tomo-trece.md:4086-4090`).
- [ ] `PINTAR` — El `detailedView` muestra una hoja rayada de libro grande fotografiada de plano, con catorce renglones manuscritos (§23.2, `docs/specs/case-5-el-tomo-trece.md:4048`; §10.2, `docs/specs/case-5-el-tomo-trece.md:664`).
- [ ] `PINTAR` — Cada renglón del `detailedView` tiene nombre, asunto y dos columnas de hora (§23.2, `docs/specs/case-5-el-tomo-trece.md:4048`).
- [ ] `PINTAR` — El asiento 14 es R. Valdés, con el asunto «diligencia sala 7», entrada 16:40 y salida 16:58 (§10.2, `docs/specs/case-5-el-tomo-trece.md:652-655,664`; §5.1, `docs/specs/case-5-el-tomo-trece.md:275`).
- [ ] `PINTAR` — Las tintas varían entre asientos; la hoja no debe parecer una composición de una sola escritura uniforme (§23.2, `docs/specs/case-5-el-tomo-trece.md:4048`).
- [ ] `PINTAR` — El objeto sigue siendo un registro de visitantes del público, no un censo de todas las personas que estuvieron dentro del edificio (§4.1 P1, `docs/specs/case-5-el-tomo-trece.md:193`; §10.2, `docs/specs/case-5-el-tomo-trece.md:657-660`).
- [ ] `AUSENTE` — Personajes, manos, mostrador, vestíbulo u otros elementos de la sala dentro del `detailedView`; es un documento recortado, no una vista del entorno (§23.2, `docs/specs/case-5-el-tomo-trece.md:4048`; la separación del segundo libro se fija en §4.2, `:206`).
- [ ] `AUSENTE` — El libro profesional de peritos y auxiliares, sus asientos o sus columnas; pertenece al acceso separado y no debe mezclarse con esta evidencia (§4.1 P1/P4, `docs/specs/case-5-el-tomo-trece.md:193,206`; §5.2, `:288`).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — Variante ES: el sello de goma al margen debe leerse «LIBRO DE VISITAS DEL PÚBLICO» (§10.2, `docs/specs/case-5-el-tomo-trece.md:664`).
- [ ] `TEXTO EXACTO` — Variante ES: el asiento 14 debe conservar «R. Valdés», «diligencia sala 7», «16:40» y «16:58» (§10.2, `docs/specs/case-5-el-tomo-trece.md:664`; catálogo ES, `src/state/Private/EvidenceCatalogCase5EsA.ts:55-60`).
- [ ] `TEXTO EXACTO` — El texto manuscrito restante debe presentar catorce nombres/asuntos y sus horas sin añadir nombres, cifras o anotaciones narrativas no fijadas por el spec (§23.2, `docs/specs/case-5-el-tomo-trece.md:4048`; §10.2, `:651-660`).
- [ ] `AUSENTE` — Anotaciones, flechas, círculos o realces editoriales (§10.2, `docs/specs/case-5-el-tomo-trece.md:664`; §23.0, `:3974-3980`).
- [ ] `TEXTO EXACTO` — Variante EN: todo texto legible que se traduzca debe coincidir con el catálogo inglés y conservar la misma composición, defectos mecánicos, fechas y marcas físicas (§23.3, `docs/specs/case-5-el-tomo-trece.md:4064`; catálogo EN, `src/state/Private/EvidenceCatalogCase5EnA.ts:55-60`).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La hoja es del 4 de diciembre de 1982; el caso usa la entrada de R. Valdés a las 16:40 y la salida a las 16:58 para el argumento de los dos minutos (§5.1, `docs/specs/case-5-el-tomo-trece.md:218,222,275`; §24, cronología, `:218,222`).
- [ ] `NO CONTRADECIR` — El total es exactamente catorce firmas; la última es la de R. Valdés (§10.2, `docs/specs/case-5-el-tomo-trece.md:652-655`; §11.2, `:994-1001`).
- [ ] `NO CONTRADECIR` — Las horas impresas no convierten el libro en un registro de policías, empleados o toda presencia en el Archivo: esos grupos no firman este libro (§10.2, `docs/specs/case-5-el-tomo-trece.md:656-660`; D1-T1, `src/case/case5/Private/trial_day1_success.ts:27-39`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En el hotspot del vestíbulo se muestra un libro de registro abierto sobre el mostrador; la interacción identifica la hoja del 4 de diciembre y las catorce firmas (`src/case/case5/Private/archivo_vestibulo_hotspots.ts:13-27`; versión EN `:13-27`).
- [ ] `NO CONTRADECIR` — La conversación establece que Nicanor escribe la hora de salida y que el libro es para personas de fuera que vienen a consultar (`src/case/case5/Private/archivo_vestibulo_hotspots.ts:17-26`; versión EN `:17-26`).
- [ ] `NO CONTRADECIR` — La entrega de la evidencia sostiene que el libro no dice quién estuvo en el edificio: policías, cartero, Nicanor y la empleada de la ventanilla pueden estar dentro sin figurar (`src/case/case5/Private/trial_day1_success.ts:27-39`; versión EN `src/case/case5/Private/trial_day1_success_en.ts:27-39`).
- [ ] `NO CONTRADECIR` — El follow-up de D1-T1 pregunta «¿A quién no le exige firma ese libro?» y usa esta evidencia para demostrar que la lista de visitantes está incompleta como censo (`src/case/case5/Private/trial_day1_t1.ts:16-25`; versión EN `src/case/case5/Private/trial_day1_t1_en.ts:16-25`; §11.2, `docs/specs/case-5-el-tomo-trece.md:999-1012`).
- [ ] `NO CONTRADECIR` — La existencia de un segundo libro separado para peritos y auxiliares se revela después en juicio; esta imagen no debe anticiparlo ni absorberlo (§4.1 P1, `docs/specs/case-5-el-tomo-trece.md:193`; D1-T3, `:1241-1250`).

### F5 Estilo y prohibidos

- [ ] Contrato §23.0 completo en cualquier prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* de linaje GBA/Nintendo DS; ; contorno carbón `#1A1A1A` continuo y más grueso en la silueta; anatomía expresiva caricaturesca cuando aplique; paleta primaria saturada; tema de televisión mexicana de los setenta / Chespirito con papel, madera, polvo, latón envejecido y luz de tungsteno cuando el contexto sea visible; prohibidos fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto en inglés salvo la variante EN y rosa/magenta en primer plano (§23.0, `docs/specs/case-5-el-tomo-trece.md:3974-3980`).
- [ ] `NO CONTRADECIR` — El icono conserva el lenguaje de Acta: objeto centrado, fondo transparente y contorno carbón (§23.5, `docs/specs/case-5-el-tomo-trece.md:4086-4090`).

### F6 Localización

- [ ] `PINTAR` — Existen dos variantes del `detailedView`: `examine_libro_visitas.webp` y `examine_libro_visitas_en.webp`; deben conservar encuadre, papel, catorce filas, sello, asiento 14, horas y marcas físicas, cambiando sólo el texto legible localizado (§23.3, `docs/specs/case-5-el-tomo-trece.md:4064`).
- [ ] `NO CONTRADECIR` — Ambas variantes apuntan al mismo id `libro_visitas`; el catálogo ES usa `assets/examine_libro_visitas.webp` y el EN `assets/examine_libro_visitas_en.webp` (`src/state/Private/EvidenceCatalogCase5EsA.ts:55-60`; `src/state/Private/EvidenceCatalogCase5EnA.ts:55-60`).
- [ ] `NO CONTRADECIR` — La variante EN debe conservar el argumento de «public visitors book», catorce firmas y la exclusión del personal del edificio, tal como lo fija el catálogo inglés (`src/state/Private/EvidenceCatalogCase5EnA.ts:55-60`).

## Consistencia (regenerar juntos)

- `examine_libro_visitas` ↔ `examine_libro_visitas_en` — gemelos de idioma: comparten encuadre, hoja rayada, catorce filas, dos columnas, asiento 14, horas, tintas y sello; sólo cambia el texto legible. Regenerar juntos; este activo no es fuente de verdad del otro.
- `libro_visitas` ↔ `examine_libro_visitas` / `_en` — icono de Acta y `detailedView` deben representar la misma identidad del libro público (§23.5, `docs/specs/case-5-el-tomo-trece.md:4086-4090`; catálogos ES/EN). Regenerar juntos; este activo no es fuente de verdad del otro.
- `bg_archivo_vestibulo` — comparte el libro grande abierto sobre el mostrador y su función de registro público (§23.1, `docs/specs/case-5-el-tomo-trece.md:3986`; §10.2, `:651-664`). El fondo fija presencia y posición general; el `detailedView` fija filas, horas y sello. Regenerar juntos; este activo no es fuente de verdad del otro.
- `examine_libro_peritos` — comparte el concepto de dos libros del Archivo, pero debe conservar la separación de identidad: libro pequeño profesional de dos columnas frente al libro grande público de catorce firmas (§4.1 P1/P4; §5.2; `docs/specs/case-5-el-tomo-trece.md:193,206,288`). Regenerar juntos para comprobar separación; este activo no es fuente de verdad del otro.
- `plate_dos_accesos` — comparte la relación narrativa entre la puerta pública, el mostrador y el segundo acceso, pero no debe pintar ninguno de los dos libros (§10.2, `docs/specs/case-5-el-tomo-trece.md:685-688`; §23.4, `:4076`). Regenerar juntos para comprobar separación; este activo no es fuente de verdad del otro.

## Conflictos abiertos

- La variante ES fija de forma exacta el sello «LIBRO DE VISITAS DEL PÚBLICO», pero §23.3 no especifica la cadena exacta del sello EN. El catálogo EN sólo da «Public visitors book» para nombre, descripción y caption (`docs/specs/case-5-el-tomo-trece.md:664,4064`; `src/state/Private/EvidenceCatalogCase5EnA.ts:55-60`). Resolver el texto antes de regenerar; no inventarlo en esta hoja.
- El spec común fija el asiento como `16:40 / 16:58`, mientras el catálogo EN lo presenta como `4:40 PM / 4:58 PM`; §23.3 dice conservar cifras y marcas físicas, pero también exige localizar el texto legible (`docs/specs/case-5-el-tomo-trece.md:664,4064`; catálogos ES/EN, `src/state/Private/EvidenceCatalogCase5EsA.ts:55-60`, `src/state/Private/EvidenceCatalogCase5EnA.ts:55-60`). Determinar si la variante EN imprime formato de 24 horas o de 12 horas.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, por instrucción del protocolo. No hay defectos visuales confirmados ni severidades asignadas.
- La aceptación queda limitada a la lista de hechos anterior y a la resolución de los dos conflictos de localización del spec.
