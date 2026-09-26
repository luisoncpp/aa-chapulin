# profile_perfil_supersam — hoja de hechos

Clase: `profile`. Espec: §6.1 y §23.5. Guion: alta en la apertura de D1 (`trial_day1_success.ts`, `trial_day1_success_en.ts`) y actualización en D3-T2 después de la declaración voluntaria de Super Sam (`trial_day3_success_sam.ts`, `trial_day3_success_sam_en.ts`). Catálogos: `src/state/Private/ProfileCatalogCase5Es.ts:42-50` y `src/state/Private/ProfileCatalogCase5En.ts:42-50`.

Activo compartido por ES/EN: `assets/profile_perfil_supersam.webp`; no existe variante localizada. Es un icono de 256 × 256, sin texto ni marco, recortado del busto de la pose `supersam_idle` correspondiente. Esta hoja cubre el mismo diseño visual para ambas fichas; sólo cambia el texto del catálogo.

## Mapa semántico

- Persona: Super Sam / Sam Sullivan, agente del ministerio público y fiscal del episodio; obsesionado con el tiempo y el dinero, con el lema «Time is money!» (`docs/specs/case-5-el-tomo-trece.md:135`; `docs/specs/case-5-el-tomo-trece.md:2540-2541`).
- Identidad visual obligatoria: el perfil debe ser un recorte del busto `supersam_idle`, no una pose nueva, una escena de fiscalía ni una ilustración de cuerpo completo (§23.5; `docs/specs/case-5-el-tomo-trece.md:2236,2242`; `trial_day1_success.ts:148`; `trial_day1_success_en.ts:148`).
- Estado de la ficha inicial: fiscal activo, acompañado por Berrondo en la mesa de la fiscalía; desde agosto carga una bolsa de lona vacía, pero ese objeto pertenece al relato y a la escena de fiscalía, no al bitmap del perfil (§6.1; `docs/specs/case-5-el-tomo-trece.md:884-885`; `ProfileCatalogCase5Es.ts:42-50`; `ProfileCatalogCase5En.ts:42-50`).
- Estado de la actualización: en D3-T2 declara contra sí mismo voluntariamente y el juez ordena asentar su admisión; la actualización modifica `updates[]`, no la imagen (§6.1; `trial_day3_success_sam.ts:24-26`; `trial_day3_success_sam_en.ts:24-26`).
- Alias y rol: Super Sam, Sam Sullivan, fiscal, agente del ministerio público, prosecutor. El perfil no debe convertirlo en acusado, culpable o personaje distinto; durante D3-T2 deja temporalmente la fiscalía para declarar, pero sigue siendo el mismo retrato (§1.1; `docs/specs/case-5-el-tomo-trece.md:2531-2541`; `docs/specs/case-5-el-tomo-trece.md:2546-2556`).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Icono cuadrado de 256 × 256, recorte de busto de `supersam_idle`, centrado como entrada del Acta de Personajes (§23.5).
- [ ] `PINTAR` — La misma identidad facial, corporal, de ropa y de anclaje que `supersam_idle`; el perfil es una derivación recortada, no una pose alternativa (`docs/specs/case-5-el-tomo-trece.md:2236,2242`; `trial_day1_success.ts:148`; `trial_day1_success_en.ts:148`; §23.5).
- [ ] `PINTAR` — Super Sam debe conservar su diseño de fiscal del episodio y resultar reconocible como la persona que ocupa la mesa de la fiscalía y luego declara desde el estrado; el cambio de posición narrativa no cambia el diseño visual (`docs/specs/case-5-el-tomo-trece.md:884-885,2531-2541,2546-2556`).
- [ ] `NO CONTRADECIR` — La expresión puede conservar la neutralidad de `supersam_idle`; no debe convertirse en el sudor, pánico o gesto de acusación de `supersam_sweat` o `supersam_point`. Las confesiones y el remordimiento son texto de diálogo/actualización, no cambios del icono (`docs/specs/case-5-el-tomo-trece.md:2546-2556,2599-2605,2612-2626`; `ProfileCatalogCase5Es.ts:48-50`; `ProfileCatalogCase5En.ts:48-50`).
- [ ] `AUSENTE` — Bolsa de lona, oficina de fiscalía, mesa del juicio, estrado, documentos, sobre, monedas, reloj, texto, marco, otros personajes o cualquier fondo de escena. El icono sólo contiene el busto recortado (§23.5; `docs/specs/case-5-el-tomo-trece.md:2240-2241,2253-2266`).

### F2 Texto en imagen

- [ ] `AUSENTE` — No imprimir nombre, rol, lema, cifras, fechas, bolsa, sello, logotipo ni texto localizado. §23.5 exige icono sin texto y sin marco; la descripción y las actualizaciones viven en el catálogo.
- [ ] `NO CONTRADECIR` — El perfil puede acompañar las menciones de «Time is money!», la bolsa vacía y la autodeclaración, pero ninguna de esas frases debe aparecer dentro del bitmap (`docs/specs/case-5-el-tomo-trece.md:135,2241-2263,2546-2556`; `ProfileCatalogCase5Es.ts:47-50`; `ProfileCatalogCase5En.ts:47-50`).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La ficha inicial afirma que lleva una bolsa de lona vacía desde agosto; no imprimir agosto ni dibujar la bolsa como accesorio (§6.1; `ProfileCatalogCase5Es.ts:47`; `ProfileCatalogCase5En.ts:47`; `docs/specs/case-5-el-tomo-trece.md:2253-2263`).
- [ ] `NO CONTRADECIR` — La actualización afirma que declaró contra sí mismo sin que nadie se lo pidiera; es un hecho de D3-T2, no una expresión o postura que el retrato deba representar (§6.1; `trial_day3_success_sam.ts:24`; `trial_day3_success_sam_en.ts:24`).
- [ ] `NO CONTRADECIR` — El testimonio contiene fechas y cantidades —8 de noviembre, 18 días, 26 de noviembre, 4 de diciembre, 17:00, 480 pesos, 10.000 pesos, 6 kilos y 400 gramos—, además de cinco minutos y seis cientos oficios; todas son narración, no texto ni accesorios del perfil (`docs/specs/case-5-el-tomo-trece.md:2546-2556,2564-2638`; `trial_day3_t2.ts:24-127`; `trial_day3_t2_en.ts:24-127`).
- [ ] `NO CONTRADECIR` — No representar culpabilidad por sí solo: el spec declara que Super Sam es honesto y que su autodestrucción es voluntaria; el retrato identifica al fiscal, no prueba que haya cometido el homicidio (§1.1; `docs/specs/case-5-el-tomo-trece.md:77,2269,2531-2541`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — La ficha se entrega en la apertura de D1, justo antes de que el narrador describa al segundo hombre sentado a la derecha de Super Sam; el icono debe identificar a Super Sam y no al hombre que lo acompaña (`docs/specs/case-5-el-tomo-trece.md:880-885`; `trial_day1_success.ts:145-148`; `trial_day1_success_en.ts:145-148`).
- [ ] `NO CONTRADECIR` — La entrega del perfil antecede a la identificación de Berrondo (`perfil_berrondo`); no incluir el traje negro de tres piezas, la leontina de oro ni rasgos de Berrondo en este recorte (`docs/specs/case-5-el-tomo-trece.md:884-890`; `trial_day1_success.ts:148-153`; `trial_day1_success_en.ts:148-153`).
- [ ] `PINTAR` — En D3-T2, la actualización se dispara cuando el juez ordena asentar que Super Sam firmó seiscientos oficios al mes y no leyó sus calces durante once años; el bitmap permanece igual y el dato nuevo vive en `updates[]` (`docs/specs/case-5-el-tomo-trece.md:2658-2663`; `trial_day3_success_sam.ts:21-25`; `trial_day3_success_sam_en.ts:21-25`).
- [ ] `NO CONTRADECIR` — La declaración es voluntaria: el juez designa al secretario como ministerio público mientras Sam declara, pero eso no crea una segunda persona ni exige cambiar el perfil (`docs/specs/case-5-el-tomo-trece.md:2531-2541`; `docs/specs/case-5-el-tomo-trece.md:2546-2556`).
- [ ] `NO CONTRADECIR` — La ficha de persona sirve para lectura e identificación en el Acta; durante un contrainterrogatorio no ofrece botón de presentar, y no autoriza señalar a Super Sam como culpable (§6; §6.2; `docs/flows/character-record-flow.md`).

### F5 Estilo

- [ ] Contrato §23.0 completo pegado en el prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA / Nintendo DS) en alta definición; cel-shading de colores planos con terminador de sombra duro, dos tonos por superficie y ; contorno oscuro nítido y continuo en carbón `#1A1A1A`, más grueso en la silueta exterior; anatomía facial expresiva y exagerada; colores primarios saturados; televisión mexicana de los años setenta, universo Chespirito / El Chapulín Colorado, melodrama judicial tratado en serio y registro de papel, madera, polvo, archivo judicial, madera barnizada, latón envejecido y luz de tungsteno; prohibidos fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano de superhéroes, marcas de agua, texto en inglés salvo variantes EN exigidas y cualquier rosa o magenta en primer plano por el pipeline sobre `#FF00FF` (§23.0).
- [ ] `PINTAR` — Fondo plano distinto por persona, nunca magenta; sin marco y con el recorte de busto limpio (§23.5).
- [ ] `AUSENTE` — Flechas, círculos, realces, fondo de la fiscalía, mesa del juicio, bolsa, documentos o elementos de interfaz horneados en el icono (§23.5; `docs/specs/case-5-el-tomo-trece.md:2240-2241,2253-2266`).

### F6 Localización

- [ ] `PINTAR` — ES y EN usan exactamente `assets/profile_perfil_supersam.webp`; no crear `profile_perfil_supersam_en.webp` (§23.5; `ProfileCatalogCase5Es.ts:46`; `ProfileCatalogCase5En.ts:46`).
- [ ] `AUSENTE` — No añadir texto para localizar la imagen. La variante ES/EN sólo cambia `name`, `role`, `desc` y `updates` en los catálogos (`ProfileCatalogCase5Es.ts:42-50`; `ProfileCatalogCase5En.ts:42-50`).
- [ ] `NO CONTRADECIR` — El defecto tipográfico de la `s` caída de §23.3 aplica a láminas y documentos con texto legible, no a este icono sin texto; no añadir letras para satisfacerlo (§23.3; §23.5).
- [ ] `TEXTO EXACTO` — La ficha ES usa `name: Super Sam`, `role: Fiscal`, `desc: Fiscal. Cobra por caso cerrado. Lleva una bolsa de lona vacía desde agosto y nadie le ha preguntado por qué.` y la actualización `Declaró contra sí mismo sin que nadie se lo pidiera.` (`ProfileCatalogCase5Es.ts:42-50`). Estos textos se muestran en UI, no se imprimen en la imagen.
- [ ] `TEXTO EXACTO` — La ficha EN usa `name: Super Sam`, `role: Prosecutor`, `desc: Prosecutor. Paid by the closed case. Has carried an empty canvas bag since August and nobody has asked why.` y la actualización `He testified against himself without anyone asking him to.` (`ProfileCatalogCase5En.ts:42-50`). Estos textos se muestran en UI, no se imprimen en la imagen.

## Consistencia (regenerar juntos)

- `supersam_idle` — comparte identidad, rostro, ropa, anclaje y expresión base; es la fuente visual obligatoria del recorte. Regenerar juntos; este activo no es fuente de verdad del otro (§23.5; `docs/specs/case-5-el-tomo-trece.md:2236,2242`).
- `supersam_sweat` y `supersam_point` — comparten identidad y vestuario del fiscal, pero sus expresiones no deben transferirse al icono. Regenerar juntos para evitar drift de cara y ropa; este activo no es fuente de verdad de los otros (`docs/specs/case-5-el-tomo-trece.md:2242-2248,2253-2266,2546-2638`).
- `bg_fiscalia` — comparte la bolsa de lona vacía y la identidad de Super Sam en la escena de investigación, pero el fondo y la bolsa no deben entrar en el retrato. Regenerar juntos; este activo no es fuente de verdad del otro (§23.1; `docs/specs/case-5-el-tomo-trece.md:3991,2234-2266`).
- `profile_perfil_donramon`, `profile_perfil_chapulin` y `profile_perfil_casimiro` — comparten el sistema de Acta: 256 × 256, busto, fondo plano individual, sin texto ni marco. Regenerar juntos; este activo no es fuente de verdad de los otros (§6.1; §23.5; `src/case/case5/Private/celda.ts`; `src/case/case5/Private/celda_en.ts`).
- `profile_perfil_supersam` ES↔EN — gemelos de idioma del mismo icono. Composición, recorte, fondo y colores idénticos; sólo cambia el catálogo. Regenerar juntos; este activo no es fuente de verdad del otro.
- `fiscalia_c5` / `bg_fiscalia` y `oficio_diligencia` — comparten el hilo visual de la oficina, la bolsa y el oficio que Super Sam firmó, pero ninguno de esos objetos debe aparecer en el icono. Regenerar juntos; este activo no es fuente de verdad de los otros (`docs/specs/case-5-el-tomo-trece.md:2240-2301,2641-2663`).

## Conflictos abiertos

- §6.1 dice que la ficha se actualiza en D3-T2 con «Declaró contra sí mismo sin que nadie se lo pidiera», mientras la escena y el testimonio sitúan la declaración voluntaria entre el cierre de D3-T1 y el inicio de D3-T2 (`docs/specs/case-5-el-tomo-trece.md:2531-2556`; `trial_day3_success_sam.ts:24`; `trial_day3_t2.ts:17-19`). La hoja conserva el contrato de ambos: el icono no cambia y la actualización queda asociada al asentamiento judicial.
- El catálogo ES dice `Fiscal` y el catálogo EN dice `Prosecutor`; el guion ES nombra a Sam Sullivan como «Agente del ministerio público» y el catálogo lo resume como fiscal (`ProfileCatalogCase5Es.ts:45-47`; `ProfileCatalogCase5En.ts:45-47`; `docs/specs/case-5-el-tomo-trece.md:2540`). Es una diferencia de etiqueta localizada, no una diferencia visual resoluble en el asset.
- El spec §23.5 habla de diez iconos de persona nuevos, aunque `profile_perfil_supersam` depende de la pose `supersam_idle` y los catálogos ya fijan el archivo físico. Esta hoja no decide si el icono debe contarse como nuevo o como recorte de un sprite existente (§23.5; `ProfileCatalogCase5Es.ts:46`; `ProfileCatalogCase5En.ts:46`).
- La apertura usa la marca `[ENTREGAR-PERFIL perfil_supersam]` antes de que el narrador describa a Berrondo, mientras el guion implementado expresa la misma operación con `addProfile: 'perfil_supersam'` dentro de la línea narrativa (`docs/specs/case-5-el-tomo-trece.md:884-885`; `trial_day1_success.ts:148`; `trial_day1_success_en.ts:148`). Es una diferencia de notación de guion, no un cambio de contenido visual.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, conforme al protocolo `asset-facts`; por tanto, no se confirma ningún defecto visual del icono actual.
- Hoja derivada únicamente de §6.1, §23.0, §23.3, §23.5, el Libro de hechos y las referencias de guion/catálogos ES/EN citadas. No se ejecutaron tests, lint, auditorías, procesamiento ni verificación de assets.
