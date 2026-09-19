# acuse_notificacion — hoja de hechos
Clase: `icon` + `examine`. Espec: §5.2, §12.2, §23.0, §23.3 y §23.5. Guion: `correspondencia`, D3-T3; variantes ES/EN.

## Mapa semántico

- **Objeto y medio:** icono de Acta para un acuse de recibo; su `detailedView` es la lámina `examine_acuse.webp` a 1280 × 720, mostrada a 640 × 360.
- **Lugar y momento:** asiento del libro de acuses de la oficina de correspondencia del juzgado; entrega del oficio el 29 de noviembre, relativo a la diligencia del 4 de diciembre a las 17:00.
- **Identidades visibles o argumentales:** oficio 4471; diligencia de cotejo documental; interno C. Lengua; sindicatura de la quiebra 114/1971; rúbrica azul en el margen derecho; fechador morado `29 NOV`.
- **Relación dramática:** la rúbrica prueba que Berrondo recibió el aviso y contradice su declaración de que nadie le notificó.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Asiento de un libro de acuses fotografiado de plano, no una escena de la oficina ni una hoja aislada sin contexto (§23.3; §12.2).
- [ ] `PINTAR` — Renglón mecanografiado correspondiente al oficio 4471 y a la diligencia de cotejo documental del Archivo Judicial (§23.3; `correspondencia.ts:35-39`; EN `correspondencia_en.ts:35-39`).
- [ ] `PINTAR` — Margen derecho con una rúbrica manuscrita muy pequeña, enérgica, de tinta azul, con dos rayas bajo el trazo (§23.3; §12.2; `EvidenceCatalogCase5EsA.ts:84-89`).
- [ ] `PINTAR` — Fechador de hule morado con la fecha `29 NOV` (§23.3; §12.2; catálogo ES/EN).
- [ ] `AUSENTE` — No añadir personas, manos, despacho, ventanilla, fondo de archivo ni flechas, círculos o realces que señalen la contradicción; la prueba debe ser un asiento documental plano (§23.0; §12.2; §15.4).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — `Oficio 4471` y el dato de que la diligencia fue promovida por el interno `C. Lengua`; el nombre debe poder identificarse si se sigue §5.2, §12.2 y el diálogo de D3-T3 (`docs/specs/case-5-el-tomo-trece.md:285,1430-1432,2813-2815`; `correspondencia.ts:37-39`).
- [ ] `TEXTO EXACTO` — Destino: `Sindicatura de la quiebra 114/1971` (§5.2; `correspondencia.ts:38`; EN `correspondencia_en.ts:38`).
- [ ] `TEXTO EXACTO` — Fechador `29 NOV` en ES; la variante EN conserva la misma fecha física y usa el formato visible del catálogo `NOV 29` si se localiza la fecha como texto (`EvidenceCatalogCase5EnA.ts:84-89`; §23.3).
- [ ] `TEXTO EXACTO` — La variante EN traduce el texto legible del asiento y conserva composición, defecto físico, fecha y marcas; no introduce texto español salvo nombres propios o identificadores requeridos (§23.3; `correspondencia_en.ts:37-44`; `trial_day3_success_berrondo_en.ts:10-19`).
- [ ] `AUSENTE` — No imprimir un nombre distinto, una fecha distinta, una hora distinta, ni texto explicativo que diga que la rúbrica es de Berrondo: esa atribución se demuestra en el diálogo (§15.4; `trial_day3_success_berrondo.ts:10-19`).

### F3 Cifras/fechas/horas

- [ ] `NO CONTRADECIR` — La entrega del acuse ocurrió el 29 de noviembre; el acto notificado era el 4 de diciembre a las 17:00 (`docs/specs/case-5-el-tomo-trece.md:285,1430-1431`; `correspondencia.ts:36-38`; EN equivalente).
- [ ] `NO CONTRADECIR` — El oficio es el número 4471 y la sindicatura es la quiebra `114/1971` (§5.2; §24.A; `correspondencia.ts:37-38`).
- [ ] `NO CONTRADECIR` — La rúbrica no debe convertirse en una firma grande, legible o nominal: su tamaño muy pequeño y sus dos rayas bajo el trazo son parte del contrato visual (§23.3; §12.2).
- [ ] `NO CONTRADECIR` — Las fechas y horas narradas no obligan a convertir cada dato en un rótulo adicional; sólo `29 NOV` es un texto físico exigido por §23.3. La hora de 17:00 pertenece al renglón del oficio y al diálogo, no exige un segundo sello (§23.3; `correspondencia.ts:37-38`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — Al examinar el libro en D2, el jugador debe poder leer el oficio 4471, el nombre de C. Lengua y el destino en la sindicatura; la escena entrega el `acuse_notificacion` al terminar la lectura (`correspondencia.ts:31-44`; EN `correspondencia_en.ts:31-44`).
- [ ] `PINTAR` — La composición debe sostener la línea «aquí al margen hay una rúbrica» y la conclusión de que alguien recibió el aviso y firmó de recibido (`correspondencia.ts:44`; EN `correspondencia_en.ts:44`).
- [ ] `PINTAR` — En D3-T3, la presentación debe permitir que la defensa cite el acuse del 29 de noviembre, el oficio 4471, el nombre de C. Lengua y la rúbrica; Berrondo reconoce que es suya y que lo firmó (`trial_day3_t3.ts:122-124`; `trial_day3_success_berrondo.ts:8-19`; EN equivalentes).
- [ ] `NO CONTRADECIR` — La imagen no puede mostrar una segunda firma, un nombre de firmante impreso o una marca que permita atribuir la rúbrica antes de la pregunta del juez; la atribución se cobra en pantalla cuando Berrondo responde «Es mía» (`trial_day3_success_berrondo.ts:15-19`; EN `trial_day3_success_berrondo_en.ts:15-19`).
- [ ] `NO CONTRADECIR` — La hoja demuestra que Berrondo fue notificado el 29 de noviembre; no debe sugerir que el acuse prueba por sí solo quién llevó físicamente el documento o que la rúbrica contiene el nombre completo (`trial_day3_success_berrondo.ts:25-30`; §24.C I39).

### F5 Estilo

- [ ] Contrato §23.0 completo pegado en el prompt de regeneración: ilustración 2D estilo Capcom Ace Attorney/GBA-Nintendo DS en alta definición; ; contorno carbón `#1A1A1A`, más grueso en la silueta; expresividad caricaturesca cuando haya elementos dibujados; registro mexicano setentero/Chespirito; papel, madera, polvo, archivo judicial, legajos, madera barnizada, latón envejecido y luz de tungsteno; prohibidos fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, inglés salvo la variante EN y rosa/magenta en primer plano (§23.0).
- [ ] `AUSENTE` — Sin fondo magenta en el primer plano, sin marcas de agua y sin adornos periciales no pedidos (§23.0; arquitectura de asset pipeline).

### F6 Localización

- [ ] Existe pareja `examine_acuse.webp` / `examine_acuse_en.webp`; la base cubre ambas variantes (§23.3).
- [ ] `PINTAR` — ES conserva `29 NOV`; EN mantiene la misma fecha física y traduce el contenido legible conforme al catálogo inglés, sin cambiar la composición ni las marcas azules/moradas (`EvidenceCatalogCase5EnA.ts:84-89`; §23.3).
- [ ] `NO CONTRADECIR` — Los identificadores `4471`, `C. Lengua` y `114/1971` permanecen estables entre idiomas; el diálogo EN conserva el argumento de que el documento incluía día, hora, lugar y nombre (`correspondencia_en.ts:37-44`; `trial_day3_success_berrondo_en.ts:10-19`).

## Consistencia (regenerar juntos)

- `examine_acuse` ↔ `examine_acuse_en` — gemelos de idioma del mismo asiento; composición, rúbrica, fechador y marcas físicas idénticos, cambia sólo el texto legible. Regenerar juntos; este activo no es fuente de verdad del otro (§23.3).
- `bg_correspondencia` — comparte el libro azul, el margen de firmas, el fechador morado y la oficina donde se obtiene la prueba. Regenerar juntos; este activo no es fuente de verdad del otro (`docs/specs/case-5-el-tomo-trece.md:3988`; `bg_correspondencia.md:61`).
- `oficio_diligencia` — comparte la identidad documental del oficio 4471, la diligencia del 4 de diciembre a las 17:00 y la designación del actuario; el acuse debe ser reconocible como recepción de ese mismo oficio. Regenerar juntos; este activo no es fuente de verdad del otro (§5.2; §24.A; §23.3).
- `examine_libro_peritos` — comparte la diligencia del 4 de diciembre y la cadena temporal de acceso profesional, pero no es la misma hoja ni la misma firma. Regenerar juntos sólo para evitar fechas o instituciones incompatibles; este activo no es fuente de verdad del otro (§23.3; §24.B).

## Conflictos abiertos

- §5.2 dice que el asiento transcribe el asunto completo **con el nombre del interno**; §12.2 y los diálogos ES/EN leen explícitamente `C. Lengua`; ambos catálogos describen el icono con el nombre del interno (`docs/specs/case-5-el-tomo-trece.md:285,1430-1432`; `EvidenceCatalogCase5EsA.ts:84-89`; `EvidenceCatalogCase5EnA.ts:84-89`).
- En contraste, el contrato específico de `detailedView` dice «Sin nombre impreso: sólo la rúbrica» (`docs/specs/case-5-el-tomo-trece.md:1441`). No resolver aquí: la aceptación de la lámina necesita una decisión del spec sobre si el nombre debe ser legible en el renglón o quedar ausente y sólo ser narrado.
- El catálogo EN caption localiza la fecha como `NOV 29`, mientras §23.3 y el catálogo ES fijan el fechador físico como `29 NOV` (`EvidenceCatalogCase5EnA.ts:88-89`; `docs/specs/case-5-el-tomo-trece.md:4052`). No resolver aquí; mantener la marca física según la decisión canónica del spec.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, por instrucción del protocolo. No se confirman defectos visuales del asset actual.
- La hoja queda preparada como contrato de aceptación; los dos conflictos textuales anteriores requieren resolución en el spec antes de fijar un prompt final de regeneración.
