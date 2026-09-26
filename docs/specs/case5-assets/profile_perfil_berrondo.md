# profile_perfil_berrondo — hoja de hechos

Clase: `profile`. Espec: §6.1, §23.0, §23.2 y §23.5; Libro de hechos §24. Guion ES/EN: apertura D1 (`docs/specs/case-5-el-tomo-trece.md:885-895`), actualización D2-T2, actualización D3-T3 y resolución de D4 (`trial_day2_t2.ts` / `_en.ts`, `trial_day3_t3.ts` / `_en.ts`, `trial_day4_success.ts` / `_en.ts`). Catálogos: `src/state/Private/ProfileCatalogCase5Es.ts:52-63` y `ProfileCatalogCase5En.ts:52-63`.

## Mapa semántico

- Persona: Lic. Fulgencio Berrondo, acusador coadyuvante y abogado de la sindicatura; es el hombre que acompaña a la fiscalía y después resulta ser el investigado del clímax.
- Identidad visual: busto recortado de `berrondo_idle`, no una pose nueva ni una escena del Archivo, del despacho o del huacal (§23.2; §23.5).
- Candados compartidos de personaje: setenta y un años, alto, delgado y muy erguido; cara larga afeitada, cabello blanco hacia atrás, lentes de media luna dorados, traje negro de tres piezas, corbata gris perla, leontina de oro y tomo bajo el brazo cuando tiene las manos libres (§23.2).
- Función de Acta: la ficha se entrega en la apertura del día 1 y recibe tres actualizaciones: el cedulario y la venta legal de copias; la orden judicial de inspeccionar el huacal; y la firma del acuse de una diligencia que dijo desconocer (§6.1).
- Medio: icono cuadrado de Acta de Personajes, 256 × 256, sin texto ni marco, sobre un color plano propio (§23.5).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Busto reconocible de Fulgencio Berrondo, recortado de `berrondo_idle`; conservar la identidad del sprite maestro y no sustituirlo por Jirafales, Don Cecilio u otro abogado anciano (§23.2; §23.5).
- [ ] `PINTAR` — Conservar lentes de media luna con cordoncillo, leontina de oro, traje negro de tres piezas, cabello blanco peinado hacia atrás y tomo bajo el brazo en el recorte correspondiente (§23.2).
- [ ] `NO CONTRADECIR` — La expresión debe seguir siendo la cortesía neutra, boca cerrada y mirada por encima de los lentes de `berrondo_idle`; la ficha inicial no debe anticipar sudor, pánico o ruptura (§23.2).
- [ ] `AUSENTE` — Despacho, mesa, libros, huacal, cedulario, máquina de escribir, credencial, gafete, papeles, fiscalía, otros personajes y cualquier fondo de escena; el perfil sólo representa a la persona (§23.5).

### F2 Texto en imagen

- [ ] `AUSENTE` — No imprimir nombre, cargo, fechas, cifras, rúbrica, letrero, etiquetas, marco ni texto localizado. El nombre, rol, descripción y actualizaciones viven en el catálogo (§23.5; `ProfileCatalogCase5Es.ts:52-63`; `ProfileCatalogCase5En.ts:52-63`).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La ficha inicial debe poder acompañar a un abogado colegiado desde 1955, síndico de una quiebra de 1971 todavía abierta y auxiliar de la fiscalía sin honorarios (§6.1; catálogos ES/EN:52-57). Ninguna cifra se imprime en el bitmap.
- [ ] `NO CONTRADECIR` — La actualización de D2 registra 11,400 tarjetas y venta de copias; la imagen no debe sugerir que vender copias sea delito ni que el perfil sea una prueba directa de homicidio (§6.1; catálogos ES/EN:58-60; `trial_day2_t2.ts:39-70`; `_en.ts:39-70`).
- [ ] `NO CONTRADECIR` — El presente canónico es 1982: 1955 implica veintisiete años de ejercicio y la sindicatura empieza en 1971; Berrondo tiene setenta y un años (§24.D I4, I42; `trial_day3_t3.ts:30`, `:63`; `_en.ts:30`, `:63`).
- [ ] `NO CONTRADECIR` — La actualización final sobre el acuse se refiere a una diligencia que Berrondo dijo desconocer; no debe convertir el perfil en una imagen del acuse, del huacal ni de la entrada al edificio (§6.1; catálogos ES/EN:60-62; `trial_day3_t3.ts:106-120`; `_en.ts:106-120`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — ES y EN consumen el mismo archivo `assets/profile_perfil_berrondo.webp`; no crear variante localizada. El catálogo ES usa `Acusador coadyuvante` y el EN `Assisting accuser` (`ProfileCatalogCase5Es.ts:52-57`; `ProfileCatalogCase5En.ts:52-57`).
- [ ] `NO CONTRADECIR` — En la apertura, la ficha se entrega después de que Berrondo se presenta como abogado, coadyuvante sin honorarios y síndico; el retrato debe identificarlo, no mostrarlo ya como culpable (`docs/specs/case-5-el-tomo-trece.md:885-895`).
- [ ] `NO CONTRADECIR` — En D2-T2, el perfil recibe la actualización sobre administrar el cedulario y vender copias; el testimonio lo presenta como conducta lícita, con visitas al sótano los jueves y revisión, conteo, cotejo y firma (`trial_day2_t2.ts:39-70`; `trial_day2_t2_en.ts:39-70`).
- [ ] `NO CONTRADECIR` — En D3-T3, Berrondo distingue credencial y gafete, declara haber bajado al huacal 9, devuelto el gafete a las 16:50 y niega haber subido al primer piso; el icono no debe añadir esos objetos ni resolver la contradicción visualmente (`trial_day3_t3.ts:36-95`; `_en.ts:36-95`).
- [ ] `NO CONTRADECIR` — La tercera actualización se activa por la afirmación de que nadie le avisó de la diligencia; el perfil continúa siendo el mismo retrato y no una pose de `berrondo_sweat` o `berrondo_panic` (`trial_day3_t3.ts:104-120`; `_en.ts:104-120`).
- [ ] `NO CONTRADECIR` — La ficha es identificable en el Acta; no autoriza presentar a Berrondo fuera de los dos señalamientos definidos por §6.2. El señalamiento del clímax es la etapa 1, no una propiedad gráfica del icono (§6.2; §24.D I7, I52).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA / Nintendo DS) en alta definición;  y ; contorno continuo carbón `#1A1A1A`, más grueso en la silueta exterior; anatomía facial expresiva y exagerada; colores primarios saturados; televisión mexicana de los años setenta, universo Chespirito / El Chapulín Colorado, melodrama judicial tratado en serio y registro de papel, madera, polvo, latón envejecido y luz de tungsteno; prohibidos fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano de superhéroes, marcas de agua, texto en inglés salvo variantes EN exigidas y cualquier rosa o magenta en primer plano por el pipeline sobre `#FF00FF` (§23.0).
- [ ] `PINTAR` — Lienzo final de 256 × 256, busto recortado sobre un color plano distinto por persona, sin marco y nunca magenta (§23.5).
- [ ] `AUSENTE` — Bigote, pipa, sombrero, bata, flechas, círculos, realces, papeles volando, saliva, fondo judicial o utilería incrustada; §23.2 identifica esos rasgos como colisiones con otros personajes o como estados posteriores de Berrondo.

### F6 Localización

- [ ] `PINTAR` — ES y EN usan exactamente `assets/profile_perfil_berrondo.webp`; no crear `profile_perfil_berrondo_en.webp` (§23.5; `ProfileCatalogCase5Es.ts:56`; `ProfileCatalogCase5En.ts:56`).
- [ ] `AUSENTE` — La imagen no contiene texto, por lo que no hay traducción tipográfica ni aplicación de la ese caída de §23.3. Sólo se localizan `role`, `desc` y `updates` en la interfaz (`ProfileCatalogCase5Es.ts:52-63`; `ProfileCatalogCase5En.ts:52-63`).
- [ ] `TEXTO EXACTO` — ES: `Fulgencio Berrondo`; `Acusador coadyuvante`; `Acusador coadyuvante. Abogado colegiado desde 1955. Síndico de una quiebra de 1971 que todavía no se cierra. Se ofreció a auxiliar a la fiscalía sin cobrar honorarios.` EN: `Fulgencio Berrondo`; `Assisting accuser`; `Assisting accuser. Licensed attorney since 1955. Syndic of a 1971 bankruptcy that still has not closed. Offered to assist the prosecution without charging fees.` (`ProfileCatalogCase5Es.ts:52-57`; `ProfileCatalogCase5En.ts:52-57`).
- [ ] `TEXTO EXACTO` — Actualizaciones ES: `Administra un cedulario de once mil cuatrocientas tarjetas y vende copias. No es delito.` / `Concede que vender no es delito; la corte ordena inspeccionar su huacal de todos modos.` / `Firmó el acuse de una diligencia que él mismo dijo desconocer.` EN: `He runs a card file of eleven thousand four hundred cards and sells copies. Not a crime.` / `Concedes selling is not a crime; the court orders inspection of his crate anyway.` / `He signed the acknowledgment for a diligence he himself said he did not know.` (`ProfileCatalogCase5Es.ts:58-63`; `ProfileCatalogCase5En.ts:58-63`).

## Consistencia (regenerar juntos)

- `berrondo_idle` — fuente visual obligatoria del recorte; comparte cara, traje, leontina, lentes, tomo, escala y anclaje. **Regenerar juntos; este activo no es fuente de verdad del otro** (§23.2; §23.5).
- `berrondo_definicion`, `berrondo_sweat`, `berrondo_panic`, `berrondo_breakdown` — comparten la identidad del personaje, pero sus gestos no deben contaminar el perfil: el icono conserva la neutralidad de `berrondo_idle`. **Regenerar juntos; este activo no es fuente de verdad de los otros** (§23.2).
- `profile_perfil_berrondo` ES↔EN — gemelos de idioma del mismo archivo; composición, recorte y fondo idénticos, sólo cambia el catálogo. **Regenerar juntos; este activo no es fuente de verdad del otro** (§23.5).
- `profile_perfil_donramon`, `profile_perfil_chapulin`, `profile_perfil_casimiro` y los otros perfiles de §6.1 — comparten la familia de iconos: 256 × 256, busto, color plano individual, sin texto ni marco. **Regenerar juntos; este activo no es fuente de verdad de los otros** (§23.5).
- `bg_despacho_berrondo`, `bg_bodega_masa`, `credencial_sindico`, `huacal_9`, `acuse_notificacion` y `examine_acuse` — comparten hechos narrativos sobre el despacho, la sindicatura, el huacal, el acceso y la firma, pero no deben aparecer dentro del perfil. **Regenerar juntos; este activo no es fuente de verdad de los otros** (§23.1, §23.3; §24.C F1-F3, F8, F17-F18).

## Conflictos abiertos

- §6.1 resume la quiebra como de 1971 y el catálogo coincide, mientras el testimonio precisa «desde el 9 de marzo de ese año» (`trial_day2_t2.ts:28`; `_en.ts:28`). La imagen no imprime la fecha; esta hoja conserva ambas precisiones sin resolverlas en el asset.
- §6.1 dice que Berrondo es abogado colegiado desde 1955; el guion añade que tiene veintisiete años diciendo a sus clientes que declaren y que tiene setenta y un años (`trial_day3_t3.ts:30,63`; `_en.ts:30,63`). El Libro de hechos fija la aritmética de 1982 (§24.D I4, I42), pero el icono no puede resolver ninguna duración.
- El catálogo inicial presenta la ayuda a la fiscalía sin honorarios, mientras D3-T3 lo presenta como investigado por orden de la corte y todavía insiste en que sus actos son legales (`ProfileCatalogCase5Es.ts:57`; `trial_day3_t3.ts:23-32,73-79`). Es una progresión narrativa del mismo personaje, no un cambio de identidad visual.
- La descripción de §23.2 exige el tomo bajo el brazo en las poses con manos libres, pero `berrondo_panic` y `berrondo_breakdown` lo pierden como parte de sus estados de ruptura. Este perfil debe derivarse de `berrondo_idle`, no de esas poses posteriores (§23.2).

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, conforme al protocolo `asset-facts`; por tanto, no se confirma ni se descarta ningún defecto visual del archivo actual.
- Hoja derivada únicamente de §6.1, §23.0, §23.2, §23.5, §24, los catálogos ES/EN y las referencias de guion ES/EN citadas. No se ejecutaron tests, lint, auditorías, procesamiento ni verificación de assets.
