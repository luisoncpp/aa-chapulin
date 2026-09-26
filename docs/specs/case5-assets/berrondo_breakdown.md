# berrondo_breakdown — hoja de hechos

Clase: `sprite`. Espec: §23.0 y §23.2.A. Guion directo: clímax §18.7, con el veredicto inmediato §19.1. Referencias ES/EN: `src/case/case5/Private/climax_breakdown.ts:9-42` y `climax_breakdown_en.ts:9-42`.

Activo compartido por ES/EN: no existe `berrondo_breakdown_en`. Es una hoja transparente sin texto localizado; ES y EN usan la misma imagen y sólo cambia el diálogo. `berrondo_idle` es la hoja maestra de identidad de la familia.

## Mapa semántico y alcance

- Persona: Lic. Fulgencio Berrondo, abogado y síndico de 71 años, culpable único del homicidio. Su identidad narrativa incluye la sindicatura de 1971, el cedulario de 11,400 tarjetas, la venta legal de copias y 27 años de ejercicio sin sanciones formales previas (`docs/specs/case-5-el-tomo-trece.md:99-103,136`; `ProfileCatalogCase5Es.ts:52-61`; `ProfileCatalogCase5En.ts:52-61`).
- Candado de identidad: hombre alto, delgado y erguido de 71 años; cara larga afeitada, pómulos marcados, arrugas verticales, nariz recta, labios finos, cabello blanco hacia atrás con raya alta a la izquierda, cejas blancas pobladas, lentes de media luna dorados con cordoncillo negro, traje negro de tres piezas, camisa blanca, corbata gris perla y leontina de oro (§23.2.A).
- Estado representado: ruptura final del lenguaje durante §18.7, después de que la comparación de la máquina de escribir cierra la cadena probatoria. No es pánico contenido: es el momento en que Berrondo admite, explica y finalmente no puede encontrar la palabra (`docs/specs/case-5-el-tomo-trece.md:3654-3662,3667-3703`).
- Progresión visible: se levanta de la mesa de la fiscalía; la leontina cae y queda en el piso; después se sienta y no la recoge. La leontina es un objeto de continuidad, no una segunda persona ni un fondo horneado (§23.2.A; `climax_breakdown.ts:12,41`; `climax_breakdown_en.ts:12,41`).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Sprite de personaje de pie, con transparencia, mostrando a Berrondo en ruptura; no busto sereno de mesa ni pose de `berrondo_panic` (§23.2.A, fila `berrondo_breakdown`).
- [ ] `PINTAR` — La leontina de oro está rota y colgando del chaleco; el quiebre se vuelve visible al levantarse y luego la cadena debe poder quedar asociada al objeto que mira en el piso (§23.2.A; `docs/specs/case-5-el-tomo-trece.md:3671-3674,3702`).
- [ ] `PINTAR` — Chaleco desabotonado, primera apertura clara de la compostura formal (§23.2.A).
- [ ] `PINTAR` — Cabello blanco despeinado hacia adelante por primera vez; conservar cabello blanco, lentes y rasgos de Berrondo, no transformarlo en otro personaje (§23.2.A; `berrondo_idle` como candado de identidad).
- [ ] `PINTAR` — Boca abierta, vacía y sin gesto de grito; ojos muy abiertos y fijos; una mano extendida al frente sin agarrar nada. La expresión comunica que no encuentra la palabra (§23.2.A).
- [ ] `AUSENTE` — Papeles volando, saliva, objeto arrojado o berrinche corporal. Aunque el diálogo tenga exclamaciones, la ruptura es del lenguaje, no una explosión visual (§23.2.A).
- [ ] `AUSENTE` — Bigote, pipa, sombrero o bata; son rasgos de otros personajes y rompen el candado de identidad (§23.2.A).
- [ ] `AUSENTE` — El tomo de media piel bajo el brazo: en esta pose las manos están libres y la continuidad lo retira; no sustituirlo por la leontina caída (§23.2.A; comparación con `berrondo_idle`, `berrondo_panic`).
- [ ] `AUSENTE` — Mesa de fiscalía, juez, secretario, leontina ya apoyada en el piso, papeles o fondo de sala horneados en el canal transparente; el staging los aporta el motor (`climax_breakdown.ts:12,24,41`).

### F2 Texto en imagen

- [ ] `AUSENTE` — No imprimir palabras, números, rótulos, latín ni subtítulos en el sprite. Las frases «Homicidio», *homo* y *caedere* pertenecen al diálogo, no a la imagen (`climax_breakdown.ts:33-40`; `climax_breakdown_en.ts:33-40`).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La edad canónica es 71; la sindicatura comienza en 1971 y 1955 deja 27 años de ejercicio en 1982. Ninguna cifra debe imprimirse en la hoja (spec §3.2, §24.D I4 e I42; catálogos ES/EN).
- [ ] `NO CONTRADECIR` — La hoja acompaña la confesión emocional y la falta de vocabulario, pero no debe añadir una nueva prueba material ni alterar que vender copias del cedulario no es delito por sí mismo (`docs/specs/case-5-el-tomo-trece.md:3713-3718`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — Tras «Yo no heredé un archivo muerto», Berrondo se levanta y proclama que mantuvo vivo el archivo; la postura debe leer como ruptura pública, no como una simple pose de pánico (`docs/specs/case-5-el-tomo-trece.md:3670-3674`; `climax_breakdown.ts:9-13`).
- [ ] `PINTAR` — En las líneas sobre 11,400 familias, negar que visitó casas y gritar que Casimiro iba a decir su nombre, la imagen mantiene la misma ruptura abierta y vacía aunque el texto sea exclamativo (`docs/specs/case-5-el-tomo-trece.md:3674-3677`; `climax_breakdown.ts:13-16`).
- [ ] `PINTAR` — La pose debe admitir la transición posterior a `berrondo_panic` cuando Berrondo repite en voz baja que Casimiro iba a decir su nombre y que no lo recordaba; el breakdown no puede fijar lentes torcidos, hombros de mesa o una pose incompatible con esa pausa (`docs/specs/case-5-el-tomo-trece.md:3678-3681`; `climax_breakdown.ts:18-20`).
- [ ] `PINTAR` — Después de que Don Ramón identifica la manera de hablar de Berrondo, la misma pose acompaña el silencio `......`, la palabra «Homicidio», la etimología incompleta y el bloqueo en *caedere* (`docs/specs/case-5-el-tomo-trece.md:3682-3700`; `climax_breakdown.ts:29-40`).
- [ ] `PINTAR` — El narrador debe poder describir boca abierta y luego a Berrondo sentado mirando la leontina en el piso sin que el sprite ya muestre el objeto recogido o una boca cerrada de compostura (`docs/specs/case-5-el-tomo-trece.md:3695-3703`; `climax_breakdown.ts:35-42`).
- [ ] `NO CONTRADECIR` — La caída de la leontina ocurre cuando el narrador lo levanta; el sprite puede mostrarla rota y colgando, pero no debe afirmar por sí solo que ya está en el piso antes de esa línea (`docs/specs/case-5-el-tomo-trece.md:3671-3674`).

### F5 Estilo

- [ ] Contrato §23.0 completo pegado en el prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA / Nintendo DS) en alta definición; cel-shading de colores planos con terminador duro, dos tonos por superficie y ; contorno oscuro continuo carbón `#1A1A1A`, más grueso en la silueta; anatomía facial expresiva y exagerada; colores primarios saturados; tema de televisión mexicana de los setenta / Chespirito / Chapulín Colorado, melodrama judicial serio con papel, madera, polvo, latón envejecido y luz de tungsteno; prohibidos fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano de superhéroes, marcas de agua, texto en inglés salvo variantes exigidas y cualquier rosa o magenta en primer plano por el pipeline sobre `#FF00FF` (spec §23.0).
- [ ] `NO CONTRADECIR` — La expresividad debe servir a una derrota lingüística y conservar la silueta reconocible del anciano; no convertirlo en un villano genérico, un anciano llorando ni una pose de acción con papeles en el aire (§23.2.A; §22.2; §18.7).

### F6 Localización

- [ ] ES y EN usan exactamente la misma hoja transparente `berrondo_breakdown`; no generar `berrondo_breakdown_en` (§23.2.A; `climax_breakdown.ts:9-42`; `climax_breakdown_en.ts:9-42`).
- [ ] No introducir texto localizado en la imagen. Las diferencias ES/EN están en el diálogo, incluida la explicación latina y el remate «Matar» / «Kill» (`climax_breakdown.ts:33-40`; `climax_breakdown_en.ts:33-40`).
- [ ] Mantener idénticos entre idiomas encuadre, transparencia, escala, silueta, vestuario roto, cadena y grado de vacío expresivo; la regla de la `s` caída pertenece a las láminas documentales y no a este sprite (spec §23.3; I24/I31).

## Consistencia (regenerar juntos)

- `berrondo_idle` — comparte el candado de identidad: cara, cabello, lentes, traje, leontina y proporciones. Es la hoja maestra; regenerar juntos, este activo no es fuente de verdad del otro (§23.2.A).
- `berrondo_definicion`, `berrondo_sweat`, `berrondo_panic` — comparten la progresión de postura y vestuario. Breakdown debe ser el único que añade cadena rota, chaleco abierto y cabello hacia delante; regenerar juntos, este activo no es fuente de verdad del otro (§23.2.A).
- `berrondo_leontina` — comparte el diseño de la leontina rota; es el plano opcional 1×1 del objeto sobre granito y no una pose de personaje. Regenerar juntos, este activo no es fuente de verdad del otro (§23.2.A).
- `profile_perfil_berrondo` — comparte la identidad narrativa y el mismo personaje, pero el perfil no debe heredar la ruptura. Regenerar juntos, este activo no es fuente de verdad del otro (§3.2; catálogos ES/EN).
- `climax_stage5`, `climax_breakdown` y sus gemelos EN — comparten el staging que dispara la pose y el orden de transición pánico → breakdown → pánico → breakdown. Regenerar juntos, este activo no es fuente de verdad del guion ni de los otros activos (`climax_stage5.ts:47`; `climax_stage5_en.ts:47`; `climax_breakdown*.ts`).

## Conflictos abiertos

- La tabla de §23.2.A describe la pose como «de pie» con leontina rota y cabello despeinado, mientras el guion sólo hace explícita la caída de la leontina después de la primera línea de breakdown. Se conserva la lectura del spec: la hoja debe contener la leontina rota y colgando, pero la caída al piso es un hecho de staging posterior (`docs/specs/case-5-el-tomo-trece.md:3671-3674`; §23.2.A).
- No se detectó otra discrepancia de identidad, localización o cifras para este sprite. El conteo de 11,400 tarjetas, 27 años y la sindicatura de 1971 son hechos narrativos y no texto visual del activo.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, conforme al protocolo `asset-facts`; por tanto, no se confirma ningún defecto visual de la hoja actual.
- Hoja preparada únicamente desde el spec, los catálogos de perfil ES/EN y el guion ES/EN. No se ejecutaron tests, lint, auditorías, procesamiento ni verificación de assets.
