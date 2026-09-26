# berrondo_leontina — hoja de hechos

Clase: `sprite/object support shot` (opcional, celda 1×1). Espec: §23.0 y §23.2.A. Guion: clímax, ruptura y veredicto §18.7; variantes ES/EN equivalentes.

Activo compartido por ES/EN: no contiene texto ni localización. Es un plano de apoyo del veredicto, separado de las cinco poses de Berrondo; puede sustituirse por una lámina si no se produce.

## Mapa semántico

- Objeto: leontina de oro de Berrondo, el rasgo visible que lo identifica durante el episodio y que cruza su chaleco en las poses de personaje (spec §23.2.A; §18.7).
- Estado: la leontina está rota y ha caído del chaleco durante la ruptura final; Berrondo no la recoge y después se queda mirándola en el piso (spec §18.7; `src/case/case5/Private/climax_breakdown.ts:12,41`; `climax_breakdown_en.ts:12,41`).
- Encuadre: sólo el objeto sobre un piso de granito en damero; no es un busto, una pose ni una escena completa (spec §23.2.A).
- Identidad espacial: el damero pertenece al suelo de la sala de juicio; el plano no debe añadir mesa, personaje, fiscalía, texto ni utilería ajena al cierre (spec §23.2.A; §18.7).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Una sola leontina de oro rota, caída y extendida sobre el suelo (spec §23.2.A; §18.7).
- [ ] `PINTAR` — Piso de granito en damero gris y crema, visible como la superficie donde quedó la leontina (spec §23.2.A).
- [ ] `PINTAR` — La rotura debe ser legible como daño del objeto, no como una cadena intacta simplemente apoyada (spec §23.2.A; `climax_breakdown.ts:12`).
- [ ] `AUSENTE` — Berrondo, su cuerpo, manos, chaleco, tomo, mesa, juez, fiscal, banquillo, papeles volando, saliva u otra utilería; la hoja pide sólo el objeto (spec §23.2.A; §18.7).
- [ ] `AUSENTE` — Segunda leontina, cadena intacta adicional o composición de personaje; este activo no reemplaza `berrondo_breakdown` (spec §23.2.A).

### F2 Texto en imagen

- [ ] `AUSENTE` — No incluir texto, rótulos, numeración, marcas de agua ni letras; la leontina no tiene una variante localizada y el contrato sólo pide el objeto y el suelo (spec §23.0, §23.2.A).

### F3 Cifras/fechas/horas

- [ ] `NO CONTRADECIR` — El plano ocurre después de la ruptura del clímax y antes/durante el cierre del veredicto; no debe mostrar una leontina todavía puesta en el chaleco ni un estado anterior de compostura (spec §18.7; `climax_breakdown.ts:12,41`; `climax_breakdown_en.ts:12,41`).
- [ ] `NO CONTRADECIR` — La caída no prueba por sí sola ninguna hora, identidad penal ni deducción; sólo materializa la acción narrada de que Berrondo la deja en el piso (spec §18.7).

### F4 Contrato en pantalla

- [ ] `PINTAR` — Tras la línea «Se le cae la leontina del chaleco y no la recoge» / “The watch chain falls from his vest and he does not pick it up”, el objeto debe poder leerse como la leontina caída y rota (`src/case/case5/Private/climax_breakdown.ts:12`; `climax_breakdown_en.ts:12`).
- [ ] `PINTAR` — En el cierre, Berrondo se sienta y mira la leontina en el piso sin recogerla; el plano debe conservar la misma identidad del objeto y permitir la lectura de abandono (`src/case/case5/Private/climax_breakdown.ts:41`; `climax_breakdown_en.ts:41`).
- [ ] `NO CONTRADECIR` — Puede funcionar como plano de cierre del veredicto, pero es opcional y puede sustituirse por una lámina; no asumir que el guion actual ya lo estampa como `imageAsset` o referencia de catálogo (spec §23.2.A; búsqueda de referencias directas sin uso en `src/case/case5` y catálogos Case 5).
- [ ] `NO CONTRADECIR` — Aunque comparte escena emocional con `berrondo_breakdown`, no debe incluir su boca, ojos, cabello, chaleco desabotonado ni mano extendida; esos hechos pertenecen a la pose de personaje (spec §23.2.A).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA / Nintendo DS) en alta definición; cel-shading de colores planos con terminador de sombra duro, dos tonos por superficie y ; contorno oscuro continuo en carbón `#1A1A1A`, más grueso en la silueta exterior; anatomía expresiva cuando aplique; colores primarios saturados.
- [ ] Contrato §23.0 completo en el prompt: televisión mexicana de los años setenta, universo Chespirito / El Chapulín Colorado; melodrama judicial tratado en serio; registro de papel, madera, polvo, latón envejecido y luz de tungsteno.
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano de superhéroes, marcas de agua, texto en inglés y cualquier tono rosa o magenta en primer plano por el pipeline sobre `#FF00FF` (spec §23.0; `docs/architecture/asset-pipeline.md`).
- [ ] `NO CONTRADECIR` — El granito en damero debe leerse como superficie de juicio estilizada, no como fotografía macro ni como un fondo de habitación completo (spec §23.0, §23.2.A).

### F6 Localización

- [ ] ES y EN usan la misma imagen si el plano se produce; no existe `berrondo_leontina_en` ni texto que traducir (spec §23.0, §23.2.A; `climax_breakdown.ts:12,41`; `climax_breakdown_en.ts:12,41`).
- [ ] La diferencia ES/EN vive únicamente en la narración: «leontina» / “watch chain” y «piso» / “floor”; no pintar esas palabras en el activo (`climax_breakdown.ts:12,41`; `climax_breakdown_en.ts:12,41`).

## Consistencia (regenerar juntos)

- `berrondo_breakdown` — comparte la leontina rota como estado final de Berrondo; la pose muestra la ruptura corporal y este plano muestra sólo el objeto caído. Regenerar juntos, este activo no es fuente de verdad del otro (spec §23.2.A; §18.7).
- `berrondo_idle`, `berrondo_definicion`, `berrondo_sweat`, `berrondo_panic` — comparten el diseño de la leontina de oro antes de la rotura. Regenerar juntos para conservar material, escala y construcción; este activo no es fuente de verdad de las poses (spec §23.2.A).
- `bg_archivo_vestibulo` — aporta el lenguaje visual del granito en damero dentro del Caso 5, pero no es fuente de verdad de este encuadre ni debe heredarse su mobiliario (spec §23.1, §23.2.A).
- `climax_breakdown.ts` ↔ `climax_breakdown_en.ts` — gemelos de idioma del mismo plano opcional; sólo cambia el texto del guion. Regenerar juntos, este activo no es fuente de verdad del otro.

## Conflictos abiertos

- El asset es **opcional** en §23.2.A y el guion ES/EN sólo describe la caída y la mirada; no hay una referencia de runtime que lo estampe directamente ni un catálogo de evidencia que lo posea. La decisión de producirlo o sustituirlo por una lámina queda abierta; esta hoja no la resuelve (spec §23.2.A; `climax_breakdown.ts:12,41`; `climax_breakdown_en.ts:12,41`).
- §23.2.A describe «una leontina de oro rota», mientras la narración sólo dice que se cae del chaleco. La rotura es la fuente de verdad del asset opcional, pero no debe inventarse una geometría de daño más específica que la exigida (spec §23.2.A; §18.7).

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, conforme al protocolo `asset-facts`; por tanto, no se confirma ningún defecto visual del asset actual.
- Hoja preparada únicamente desde el spec, el guion ES/EN y la búsqueda de catálogos/referencias Case 5. No se ejecutaron tests, lint, auditorías, procesamiento ni verificación de assets.
