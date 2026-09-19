# plano_archivo — hoja de hechos

Clase: `icon` con `detailedView`. Espec: §23.0, §23.3, §23.5, §4.1 P1–P8, §10.2 y §24.B. Guion: D1 vestíbulo (`hotspot_plano`), D1-T3 contradicción, D3-T1 y clímax E3. Catálogos ES/EN: `src/state/Private/EvidenceCatalogCase5EsA.ts:62-68` y `src/state/Private/EvidenceCatalogCase5EnA.ts:62-68`. Icono compartido: `assets/plano_archivo.webp`; vistas detalladas: `assets/examine_plano_archivo.webp` y `assets/examine_plano_archivo_en.webp`.

## Mapa semántico y alcance

- Icono de Acta del plano de protección civil del Archivo Judicial, clavado junto al mostrador del vestíbulo.
- El icono identifica un objeto documental único y centrado; no es una reproducción legible del plano ni la placa didáctica `plate_dos_accesos`.
- La identidad que debe conservar la vista detallada es: dos accesos operativos, escalera de servicio, hueco contiguo del montacargas y descansos en sótano, patio y primer piso.
- La prueba permite refutar que la escalera de Nicanor sea la única ruta al pasillo 7; también sostiene el circuito del montacargas usado en la reconstrucción del crimen.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Objeto único reconocible como plano o lámina plegada de protección civil, centrado y aislado sobre fondo transparente; no una escena del Archivo (§23.5).
- [ ] `NO CONTRADECIR` — La identidad del documento es el plano del Archivo Judicial clavado junto al mostrador, con dos accesos, escalera de servicio y tres descansos del montacargas (§5.1, línea 276; `EvidenceCatalogCase5EsA.ts:62-68`; `EvidenceCatalogCase5EnA.ts:62-68`).
- [ ] `NO CONTRADECIR` — La vista detallada debe poder representar planta baja, primer piso y sótano en tres recuadros; salidas rojas; escalera de servicio y hueco contiguo del montacargas atravesando los tres niveles (§23.3, línea 4050).
- [ ] `NO CONTRADECIR` — La ruta de servicio conecta patio, sótano y extremo del pasillo 7 sin pasar por el mostrador; el montacargas tiene descansos en sótano, patio y primer piso (§10.2, líneas 686-689; §4.1 P2 y P8, líneas 193-200).
- [ ] `AUSENTE` — El icono no debe mostrar el vestíbulo completo, mostrador, libro de visitas, personajes, cuerpos, estante, tomo caído ni marcas de escena del crimen; esos elementos pertenecen a fondos, placas o vistas detalladas (§23.1, líneas 3986-3988; §23.5).

### F2 Texto en imagen

- [ ] `AUSENTE` — El icono no necesita texto legible, rótulos, nombres de salas, tiempos ni conclusiones narrativas; §23.5 sólo exige objeto centrado, fondo transparente y contorno carbón (§23.5, líneas 4086-4090).
- [ ] `NO CONTRADECIR` — Si el icono sugiere líneas de plano o marcas de salida, no debe introducir cadenas legibles que compitan con la vista detallada ni texto inglés en la versión compartida (§23.0; §23.5).
- [ ] `TEXTO EXACTO` — La vista detallada ES, no el icono, conserva legibles sólo `ACCESO PÚBLICO`, `PERITOS Y AUXILIARES`, `PATIO DE MANIOBRAS` y `MONTACARGAS` (§23.3, línea 4050).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — Hay tres niveles y tres descansos del montacargas: sótano, patio y primer piso; la cifra no tiene que aparecer en el icono (§4.1 P8, líneas 199-200; §24.B, líneas 4131-4145).
- [ ] `NO CONTRADECIR` — Cada trayecto extremo del montacargas tarda noventa segundos; el plano no debe convertirlo en escalera ni eliminar un descanso (§24.B, líneas 4131-4147; `docs/specs/case-5-el-tomo-trece.md:3885`).
- [ ] `NO CONTRADECIR` — La escalera sótano–primer piso tarda diez minutos y no es el medio del circuito del crimen; el icono y la vista detallada deben distinguirla del montacargas (§24.B, líneas 4131-4147; invariantes I12 e I26, líneas 4187-4188).
- [ ] `AUSENTE` — No imprimir 17:03–17:04:30, noventa segundos, diez minutos ni nombres de personas en el icono; esos datos se explican en la cronología y el guion (§4.2, línea 225; §24.B; §23.5).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En el vestíbulo, el plano se entrega tras la deducción «Dos puertas. Y la policía sólo miró una.»; el icono debe ser una prueba de Acta distinguible de la placa que aparece inmediatamente después (`src/case/case5/Private/archivo_vestibulo_hotspots.ts:43-46`; variante EN: `archivo_vestibulo_hotspots_en.ts:43-46`).
- [ ] `PINTAR` — La narración que acompaña la vista detallada explica que la puerta pública llega al vestíbulo y al mostrador, la ventanilla de peritos llega al patio y la escalera evita los mostradores (`archivo_vestibulo_hotspots.ts:44-46`; `archivo_vestibulo_hotspots_en.ts:44-46`).
- [ ] `NO CONTRADECIR` — La conclusión de la defensa exige una ruta desde el sótano al pasillo 7 sin que nadie vea la cara; la topología de la vista detallada debe hacerla posible (`archivo_vestibulo_hotspots.ts:47-48`; `archivo_vestibulo_hotspots_en.ts:47-48`).
- [ ] `NO CONTRADECIR` — D1-T3 presenta `plano_archivo` como la contradicción de la declaración 4 y abre un `followUp` con `expediente_casimiro`; la prueba no debe sugerir que sólo existe la escalera vigilada de Nicanor (`trial_day1_t3.ts:88-96`; `trial_day1_t3_en.ts:88-96`).
- [ ] `NO CONTRADECIR` — D3-T1 y el clímax E3 usan los tres descansos y el mando de Berrondo para hacer posible el circuito completo; el icono no debe identificar el montacargas como acceso público (§24.B; `docs/specs/case-5-el-tomo-trece.md:3885`).

### F5 Estilo

- [ ] `PINTAR` — Repetir completo el contrato de §23.0 en cualquier prompt: ilustración 2D HD estilo *Capcom Ace Attorney* de linaje GBA/Nintendo DS; cel-shading plano con terminador duro y dos tonos por superficie; contorno carbón `#1A1A1A` continuo y más grueso en la silueta; colores primarios saturados; registro mexicano setentero/Chespirito con papel, madera, polvo, archivo judicial, latón envejecido y luz de tungsteno (§23.0, líneas 3974-3979).
- [ ] `PINTAR` — Aplicar el medio de icono de Acta: objeto centrado, fondo transparente y contorno carbón (§23.5, líneas 4086-4090).
- [ ] `AUSENTE` — Prohibidos fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto inglés no exigido y cualquier rosa o magenta en primer plano (§23.0, línea 3980).
- [ ] `AUSENTE` — No añadir flechas, círculos, realces, interfaz del Acta ni una miniatura de `plate_dos_accesos`; el icono sólo identifica el documento (§23.0; §23.5).

### F6 Localización

- [ ] `NO CONTRADECIR` — ES y EN usan el mismo `assets/plano_archivo.webp`; los catálogos localizan nombre, descripción y caption, no la composición física del icono (`EvidenceCatalogCase5EsA.ts:62-68`; `EvidenceCatalogCase5EnA.ts:62-68`).
- [ ] `NO CONTRADECIR` — La vista detallada sí cambia a `examine_plano_archivo.webp` / `_en.webp`; ambas conservan composición, topología, tachuelas y colores, y sólo localizan los cuatro rótulos exigidos (§23.3, líneas 4050 y 4064).
- [ ] `AUSENTE` — No crear `plano_archivo_en.webp`, no aplicar la regla de la ese caída y no introducir texto localizado legible dentro del icono (§23.3, línea 4064; §23.5).

## Consistencia (regenerar juntos)

- `examine_plano_archivo` y `examine_plano_archivo_en` — comparten la identidad del documento y la topología de dos accesos, escalera, hueco y tres descansos; regenerar juntos, este activo no es fuente de verdad del otro (§23.3, línea 4050; catálogos ES/EN).
- `plate_dos_accesos` — comparte la topología explicada durante la investigación, pero la placa es axonométrica sin rótulos y no define el encuadre del icono; regenerar juntos, este activo no es fuente de verdad del otro (§7.3/L1; §23.4).
- `bg_archivo_vestibulo` — comparte el objeto físico clavado junto al mostrador y el lenguaje material del Archivo; regenerar juntos, este activo no es fuente de verdad del otro (§23.1, línea 3986; §10.2, líneas 666-679).
- `bg_archivo_pasillo7` y `bg_archivo_caldera` — comparten los destinos del primer piso y sótano que la ruta del plano conecta; regenerar juntos, este activo no es fuente de verdad del otro (§23.1, líneas 3987 y 3993; §4.1 P2, P7 y P8).
- `examine_libro_visitas` y `examine_libro_peritos` — comparten la distinción entre acceso público y profesional, pero sus libros no deben aparecer en el icono ni en la placa; regenerar juntos para comprobar separación de identidades, este activo no es fuente de verdad del otro (§4.1 P1 y P4; §10.2, líneas 685-688).

## Conflictos abiertos

- §4.1 P1 dice que el segundo libro sólo se revela en el juicio, mientras §10.2/L1 y el guion de investigación dicen que la ventanilla profesional lleva su propio libro (`docs/specs/case-5-el-tomo-trece.md:193-194,686-689`; `archivo_vestibulo_hotspots.ts:44-45`). El icono no debe resolver la discrepancia ni dibujar el libro.
- §10.2 habla de dos puertas, pero Nicanor también cuenta una puerta de carbón tapiada desde 1958 (`docs/specs/case-5-el-tomo-trece.md:670-673`). La prueba debe conservar dos accesos operativos y no decidir aquí si el acceso histórico sellado aparece en la vista detallada.
- §23.3 fija las láminas detalladas en `1280 × 720`, mientras la arquitectura de la tubería de Case 5 fija los plates de examen a `960 × 540` (`docs/specs/case-5-el-tomo-trece.md:4041-4043`; `docs/architecture/asset-pipeline.md`, sección “Case 5”). Este conflicto afecta a `detailedView`, no cambia el contrato del icono; resolverlo fuera de esta hoja.
- El catálogo obtiene por defecto el icono desde `assets/plano_archivo.webp`, pero el §23.3 sólo describe explícitamente la composición de `examine_plano_archivo.webp` (`src/state/Private/EvidenceCatalogCase5Helpers.ts:8-20`; §23.3, línea 4050). No inventar un texto o encuadre de detalle para el icono: mantener el contrato genérico de §23.5 y dejar cualquier ajuste de composición al spec/pipeline.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen por protocolo. No se confirma ningún defecto visual de la generación actual; esta sección queda como lista de aceptación para una futura revisión.
- La hoja se derivó sólo del spec, Libro de hechos, catálogo ES/EN y guion ES/EN. No se ejecutaron tests, lint, auditorías ni procesamiento de assets, y no se modificaron otros archivos.
