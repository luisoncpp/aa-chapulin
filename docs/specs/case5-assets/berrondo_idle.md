# berrondo_idle — hoja de hechos

Clase: `sprite`. Espec: §23.0 y §23.2.A. Guion: apertura D1, despacho de Berrondo §12.3, testimonio D2-T2 §13.3, testimonio D3-T3 §15.4, D4 y clímax §18.

Activo compartido por ES/EN: no existe `berrondo_idle_en`. La pose no contiene texto localizado; la misma hoja se usa en ambos idiomas. Es el **candado de identidad** y la hoja maestra de la que derivan las otras cuatro poses de Berrondo.

## Mapa semántico

- Persona: Lic. Fulgencio Berrondo, abogado y síndico de 71 años; acusado coadyuvante durante D1–D2 y posteriormente investigado. Su perfil ES/EN lo identifica como abogado colegiado desde 1955 y síndico de una quiebra de 1971 aún abierta (spec §3.2, §23.2.A; `src/state/Private/ProfileCatalogCase5Es.ts:52-57`; `src/state/Private/ProfileCatalogCase5En.ts:52-57`).
- Identidad visual compartida: hombre alto, delgado y muy erguido; cara larga afeitada, pómulos marcados, arrugas verticales, nariz recta, labios finos, cabello blanco peinado hacia atrás con raya alta a la izquierda y sin calva, cejas blancas pobladas, lentes de media luna dorados con cordoncillo negro, traje negro de tres piezas antiguo, camisa blanca de cuello duro, corbata gris perla de nudo pequeño y leontina de oro (spec §23.2.A).
- Objeto inseparable: tomo encuadernado en media piel bajo el brazo izquierdo cuando las manos están libres. El conjunto `leontina + lentes de media luna + tomo` evita confundirlo con Jirafales, Chapatín o Barriga (spec §23.2.A).
- Estado de esta pose: compostura intacta, cortesía neutra y control del lenguaje; no es la pose de definición, sudor, pánico ni ruptura (spec §22, §23.2.A; §18.7).
- Situaciones: mesa de la fiscalía, estrado y despacho de Berrondo; aparece tanto en conversación cordial como en declaraciones y reacciones silenciosas (spec §23.2.A; `despacho_berrondo.ts:16-27`; `despacho_berrondo_en.ts:16-27`; `trial_day2_t2.ts:25-105`; `trial_day3_t3.ts:23-117`).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Busto hasta la cintura, vista de tres cuartos (spec §23.2.A, fila `berrondo_idle`).
- [ ] `PINTAR` — Espalda recta y manos cruzadas al frente a la altura del cinturón (spec §23.2.A).
- [ ] `PINTAR` — Tomo de media piel bajo el brazo izquierdo (spec §23.2.A).
- [ ] `PINTAR` — Expresión de cortesía neutra: boca cerrada en línea recta y mirada por encima de los lentes; no sonríe (spec §23.2.A).
- [ ] `PINTAR` — Identidad completa: 71 años, delgado, alto, erguido, cara larga afeitada, pómulos y arrugas verticales, nariz recta, labios finos, cabello blanco hacia atrás con raya alta a la izquierda y sin calva, cejas blancas pobladas, lentes de media luna dorados con cordoncillo negro (spec §23.2.A).
- [ ] `PINTAR` — Traje negro de tres piezas de corte anticuado, solapa de pico, chaleco cruzado, camisa blanca de cuello duro, corbata gris perla de nudo pequeño y leontina de oro cruzando el chaleco del ojal al bolsillo (spec §23.2.A).
- [ ] `AUSENTE` — Bigote, pipa, sombrero o bata; corresponden a otros personajes y rompen el candado de identidad (spec §23.2.A).
- [ ] `AUSENTE` — Sudor, lentes torcidos, hombros adelantados, mano abierta sobre la mesa, tomo retirado, leontina rota, chaleco abierto, cabello despeinado, papeles volando o saliva; esos cambios pertenecen a `berrondo_sweat`, `berrondo_panic` o `berrondo_breakdown` (spec §23.2.A).

### F2 Texto en imagen

- [ ] `AUSENTE` — No imprimir texto ni marcas legibles en el sprite; la identidad se verifica por silueta, vestuario y objeto, mientras el diálogo se localiza en los guiones ES/EN (`despacho_berrondo.ts:20-27`; `despacho_berrondo_en.ts:20-27`).

### F3 Cifras/fechas/horas

- [ ] `NO CONTRADECIR` — La edad canónica es 71; la fecha de colegiación es 1955 y la sindicatura es de 1971, pero ninguna cifra debe imprimirse en la hoja (spec §3.2, §23.2.A; `ProfileCatalogCase5Es.ts:52-57`; `ProfileCatalogCase5En.ts:52-57`).
- [ ] `NO CONTRADECIR` — Idle expresa compostura sostenida; no adelantar visualmente las grietas de D3-T3/D4 ni la ruptura del clímax, aunque el mismo personaje sea usado en esas escenas para líneas serenas (spec §22, §23.2.A; §15.4; §18.7).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En D1, Berrondo se presenta como abogado, coadyuvante sin honorarios y auxiliar de la fiscalía con esta pose; debe verse cortés y no sospechoso (`docs/specs/case-5-el-tomo-trece.md:887-893`).
- [ ] `PINTAR` — En el despacho del 7 de diciembre a las 11:30, ofrece café, habla de su leontina y promete disculparse si el cliente es inocente; idle sostiene la lectura de un adversario sincero y sereno (`docs/specs/case-5-el-tomo-trece.md:1488-1497`; `src/case/case5/Private/despacho_berrondo.ts:18-27`; `despacho_berrondo_en.ts:18-27`).
- [ ] `PINTAR` — En D2-T2, la pose acompaña sus afirmaciones serenas sobre la quiebra, el cedulario, las visitas de los jueves, la venta lícita de copias y su coartada de 16:05–16:50 (`src/case/case5/Private/trial_day2_t2.ts:25-105`; `trial_day2_t2_en.ts:25-105`).
- [ ] `PINTAR` — En D3-T3, idle acompaña la declaración de que entró a las 16:05, revisó el huacal 9, devolvió el gafete a las 16:50, nunca subió al primer piso y nadie le avisó; la primera mentira demostrada debe seguir siendo verbal, no anticipada por la imagen (`src/case/case5/Private/trial_day3_t3.ts:23-117`; `trial_day3_t3_en.ts:23-117`; spec §20, §24.D I42-I43).
- [ ] `PINTAR` — En clímax, una línea muda `......` puede usar idle como pausa contenida antes de que el guion cambie a `berrondo_panic` o `berrondo_breakdown`; no representar la ruptura antes de tiempo (`docs/specs/case-5-el-tomo-trece.md:3287-3310`, `3667-3702`).
- [ ] `NO CONTRADECIR` — Aunque el personaje esté en la mesa de fiscalía, estrado o despacho, la hoja sigue siendo busto hasta cintura y tres cuartos; no convertirla en cuerpo entero ni en pose de pie. La única pose de pie es `berrondo_breakdown` (spec §23.2.A).

### F5 Estilo

- [ ] Contrato §23.0 completo pegado en el prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA / Nintendo DS) en alta definición; cel-shading de colores planos con terminador duro, dos tonos por superficie y ; contorno oscuro continuo carbón `#1A1A1A`, más grueso en la silueta; anatomía facial expresiva y exagerada; colores primarios saturados; tema de televisión mexicana de los setenta / Chespirito / Chapulín Colorado, tratado como melodrama judicial serio con papel, madera, polvo, latón envejecido y luz de tungsteno; prohibidos fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano de superhéroes, marcas de agua, texto en inglés dentro de la imagen salvo variantes EN exigidas y cualquier rosa o magenta en primer plano por el pipeline sobre `#FF00FF` (spec §23.0).
- [ ] `NO CONTRADECIR` — Mantener la expresividad de Ace Attorney sin volverlo un anciano caricaturesco genérico: el riesgo explícito es colapsar contra Jirafales, Chapatín o Barriga (spec §23.2.A).

### F6 Localización

- [ ] ES y EN usan exactamente la misma imagen `berrondo_idle`; sólo se traducen las líneas de diálogo y la ficha de perfil (`despacho_berrondo.ts:13-16`; `despacho_berrondo_en.ts:13-16`; `ProfileCatalogCase5Es.ts:52-57`; `ProfileCatalogCase5En.ts:52-57`).
- [ ] No introducir texto localizado, letras, placas, etiquetas ni marcas de idioma en la hoja. La regla de conservar una `s` minúscula caída sólo aplica a láminas/documentos cuestionados, no a este sprite (spec §23.3, §23.3 regla de localización).

## Consistencia (regenerar juntos)

- `berrondo_definicion`, `berrondo_sweat`, `berrondo_panic`, `berrondo_breakdown` — comparten identidad facial, edad, traje, lentes, leontina y silueta base. `berrondo_idle` es la hoja maestra; regenerar juntos, este activo no es fuente de verdad del otro (spec §23.2.A).
- `profile_perfil_berrondo.webp` / `perfil_berrondo` — comparte el candado de identidad y representa al mismo personaje en el Acta de Personajes. Regenerar juntos, este activo no es fuente de verdad del otro (spec §3.2, §23.2.A; `ProfileCatalogCase5Es.ts:52-57`; `ProfileCatalogCase5En.ts:52-57`).
- `despacho_berrondo` / `bg_despacho_berrondo.webp` — comparte el uso de idle en la visita del 7 de diciembre y la leontina como rasgo visible del personaje. Regenerar juntos, este activo no es fuente de verdad del otro (spec §12.3, §23.1, §23.2.A).
- `berrondo_idle` ES↔EN — gemelos de idioma del mismo sprite, sin variante visual. Mantener composición idéntica; sólo cambia el texto del guion. Regenerar juntos, este activo no es fuente de verdad del otro.
- `berrondo_leontina` opcional — comparte la leontina de oro como objeto de continuidad, pero no debe alterar el diseño del personaje. Regenerar juntos si se produce; este activo no es fuente de verdad del otro (spec §23.2.A).

## Conflictos abiertos

- No se detectó una discrepancia que obligue a resolver el spec para esta pose. §23.2.A llama a Berrondo «setenta y un años» y el guion usa la misma edad en la coartada de D3-T3; §24.D I42 fija la sindicatura desde 1971, coherente con la ficha y con la frase «mi primera sindicatura».
- `berrondo_idle` se usa en líneas serenas posteriores a la entrada de la investigación y durante pausas del clímax. Esto no es conflicto: el spec reserva los cambios de estado visual a `berrondo_sweat`, `berrondo_panic` y `berrondo_breakdown`; aceptar que la pose idle no comunica por sí sola inocencia ni ausencia de sospecha (spec §23.2.A; §18.1–§18.7).

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, conforme al protocolo `asset-facts`; por tanto, no se confirma ningún defecto visual de la hoja actual.
- Hoja preparada únicamente desde el spec, los catálogos de perfil ES/EN y las referencias de guion ES/EN. No se ejecutaron tests, lint, auditorías, procesamiento ni verificación de assets.
