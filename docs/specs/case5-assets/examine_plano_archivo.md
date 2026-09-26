# examine_plano_archivo — hoja de hechos

Clase: `examine`. Espec: §23.0, §23.3. Guion: §4.1, §7.3/L1, §10.2 (`hotspot_plano`), D1-T3 y D3-T1. Catálogo: `plano_archivo` en `EvidenceCatalogCase5EsA.ts` y `EvidenceCatalogCase5EnA.ts`. Variantes localizadas: `examine_plano_archivo.webp` y `examine_plano_archivo_en.webp`, cubiertas juntas.

## Mapa semántico y alcance

- Lámina detallada del plano de protección civil del Archivo Judicial, entregada en el vestíbulo y clavada junto al mostrador.
- Tres niveles relevantes: planta baja, primer piso y sótano.
- Dos accesos activos: la puerta pública hacia el vestíbulo y la ventanilla de peritos y auxiliares hacia el patio de maniobras.
- Núcleo vertical: la escalera de servicio y el hueco contiguo del montacargas conectan patio, sótano y primer piso; los descansos del montacargas son sótano, patio y primer piso.
- La deducción que depende de la lámina es que alguien puede llegar del sótano al extremo del pasillo 7 sin pasar por el mostrador ni por el libro público.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Plano amarillento de protección civil, visto de frente como una lámina de archivo, con marcas de tachuela en las cuatro esquinas (§23.3; §10.2, líneas 666–679).
- [ ] `PINTAR` — Planta baja, primer piso y sótano separados en tres recuadros legibles como niveles distintos; las salidas aparecen marcadas en rojo (§23.3; §4.1, líneas 158–186).
- [ ] `PINTAR` — La escalera de servicio atraviesa los tres niveles y termina en el patio, el sótano y el extremo del pasillo 7 (§23.3; §4.1 P2, líneas 189–200; §10.2, líneas 684–689).
- [ ] `PINTAR` — El hueco contiguo del montacargas atraviesa los tres niveles y muestra sus tres descansos: sótano, patio y primer piso (§23.3; §4.1 P8, líneas 199–200; §24.B, líneas 4129–4145).
- [ ] `PINTAR` — La puerta pública conecta con el vestíbulo y el mostrador del libro de visitas; la ventanilla de peritos y auxiliares conecta con el patio de maniobras sin pasar por el mostrador (§10.2, líneas 686–688; `archivo_vestibulo_hotspots.ts:44-46`).
- [ ] `NO CONTRADECIR` — El plano puede mostrar el edificio completo, pero no debe convertir el libro público en un censo del personal ni sugerir que la entrada profesional pasa por el mostrador; el segundo acceso tiene su propio libro (§4.1 P1, líneas 191–194; §10.2, líneas 673–677; catálogos ES/EN).
- [ ] `NO CONTRADECIR` — La reja del pasillo 7 queda separada de la mesa de consulta por los estantes; el plano no debe implicar visibilidad directa entre ambos puntos (§4.1 P3, líneas 195–195).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — La leyenda conserva cuatro rótulos legibles: `ACCESO PÚBLICO`, `PERITOS Y AUXILIARES`, `PATIO DE MANIOBRAS` y `MONTACARGAS` (§23.3, línea 4050).
- [ ] `AUSENTE` — El resto de la leyenda, nombres de salas, números, flechas explicativas y cualquier texto inventado permanecen ilegibles o no se añaden; el spec sólo exige esos cuatro rótulos (§23.3, línea 4050; §23.0, líneas 3974–3980).
- [ ] `AUSENTE` — No imprimir el texto del diálogo, conclusiones sobre el culpable, tiempos de trayecto ni nombres de personajes dentro del plano; esas afirmaciones viven en el guion (§10.2, líneas 684–694; D1-T3; D3-T1).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — El montacargas tiene descansos en tres niveles y cada trayecto entre niveles extremos tarda noventa segundos; el tiempo no tiene que imprimirse en la lámina (§4.1 P8, líneas 199–200; §24.B, líneas 4131–4145).
- [ ] `NO CONTRADECIR` — La escalera conecta patio, sótano y pasillo 7, pero el recorrido sótano–primer piso por escalera tarda diez minutos y no se usa para el circuito del crimen (§24.B, líneas 4131–4147; invariantes I12 e I26, líneas 4187–4188).
- [ ] `NO CONTRADECIR` — La puerta de carbón puede aparecer sólo como acceso histórico sellado: Nicanor dice que lleva tapiada desde 1958; no debe presentarse como tercer acceso operativo (§10.2, líneas 670–673).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En la investigación, el narrador presenta la lámina como un plano amarillento clavado con tachuelas junto al mostrador; la imagen debe sostener la lectura de dos puertas y tres niveles (`archivo_vestibulo_hotspots.ts:44-46`; `archivo_vestibulo_hotspots_en.ts:44-46`).
- [ ] `PINTAR` — La línea siguiente explica que la puerta pública llega al vestíbulo y al mostrador del libro de visitas, la ventanilla profesional da al patio, y la escalera de servicio evita todos los mostradores (`archivo_vestibulo_hotspots.ts:44-46`; `archivo_vestibulo_hotspots_en.ts:44-46`).
- [ ] `NO CONTRADECIR` — El comentario de la defensa concluye que desde el sótano se puede subir al pasillo 7 sin que nadie vea la cara; el trazado debe dejar esa ruta topológicamente posible (`archivo_vestibulo_hotspots.ts:47-48`; `archivo_vestibulo_hotspots_en.ts:47-48`).
- [ ] `NO CONTRADECIR` — En D1-T3 la prueba contradice la idea de que sólo había una ruta: la defensa usa la escalera para explicar que no basta vigilar el acceso público (`trial_day1_t3.ts:88-96`; `trial_day1_t3_en.ts:88-96`).
- [ ] `NO CONTRADECIR` — D3-T1 y el clímax citan los tres descansos, el mando propio de Berrondo y los noventa segundos por trayecto; el dibujo no puede eliminar el hueco del montacargas ni convertirlo en una escalera (`docs/specs/case-5-el-tomo-trece.md:3885`; `docs/specs/case-5-el-tomo-trece.md:3434`).
- [ ] `NO CONTRADECIR` — El objeto de Acta describe dos accesos, la escalera y los descansos del montacargas en sótano, patio y primer piso, tanto en español como en inglés (`EvidenceCatalogCase5EsA.ts:62-67`; `EvidenceCatalogCase5EnA.ts:62-67`).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA/Nintendo DS) en alta definición; cel-shading de colores planos con terminador duro, dos tonos por superficie y ; contorno carbón `#1A1A1A` nítido y continuo, más grueso en la silueta exterior; caricatura expresiva y colores primarios saturados (§23.0, líneas 3974–3978).
- [ ] Contrato §23.0 completo en el prompt: televisión mexicana de los años setenta / universo Chespirito, melodrama judicial tratado con seriedad y registro de papel, madera, polvo, archivo judicial, listones, madera barnizada, latón envejecido y luz de tungsteno (§23.0, líneas 3978–3979).
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano de superhéroes, marcas de agua, texto en inglés salvo la variante EN, y cualquier rosa o magenta en primer plano (§23.0, línea 3980).

### F6 Localización

- [ ] `NO CONTRADECIR` — ES y EN conservan composición, geometría, tachuelas, recuadros, rutas, colores y los cuatro rótulos traducidos sólo donde corresponda; no se crea una variante con props o topología distinta (`EvidenceCatalogCase5EsA.ts:62-67`; `EvidenceCatalogCase5EnA.ts:62-67`; §23.3, línea 4064).
- [ ] `TEXTO EXACTO` — La versión ES usa `ACCESO PÚBLICO`, `PERITOS Y AUXILIARES`, `PATIO DE MANIOBRAS`, `MONTACARGAS` (§23.3, línea 4050). La versión EN debe localizar esos cuatro conceptos con la terminología del catálogo inglés —accesos, expertos/actuarios, patio de servicio y descansos del montacargas— manteniendo el mismo diseño y legibilidad; el spec no fija aquí las cadenas inglesas exactas (`EvidenceCatalogCase5EnA.ts:62-67`).
- [ ] `AUSENTE` — No aplicar la regla de la ese caída: esta lámina no es uno de los documentos cuestionados con texto mecanografiado; tampoco añadir texto inglés a la variante ES (§23.3, línea 4064; invariantes I30–I31, líneas 4192–4193).

## Consistencia (regenerar juntos)

- `plate_dos_accesos` — comparte exactamente la topología de los dos accesos, la escalera de servicio y el hueco del montacargas; regenerar juntos, este activo no es fuente de verdad del otro. La placa usa una vista axonométrica sin rótulos, mientras esta lámina exige cuatro rótulos legibles (§7.3/L1, §23.3, línea 4076).
- `bg_archivo_vestibulo` — comparte el objeto físico del plano clavado junto al mostrador y el lenguaje material del Archivo; regenerar juntos, este activo no es fuente de verdad del otro. El fondo no debe sustituir los rótulos exigidos por la lámina (§23.1, línea 3986; §10.2, líneas 666–679).
- `bg_archivo_pasillo7` — comparte el primer piso, la reja, el pasillo 7 y la orientación de la puerta de servicio; regenerar juntos, este activo no es fuente de verdad del otro. El fondo es la escena del crimen y no debe introducir cuerpos, tomo caído o marcas de escena en el plano (§23.1, línea 3987; §4.1, líneas 171–180).
- `bg_archivo_caldera` — comparte el sótano y la relación de la sala de calderas con el pasillo 7; regenerar juntos, este activo no es fuente de verdad del otro. El fondo fija una habitación, no el trazado esquemático completo (§23.1, línea 3993; §4.1 P7, líneas 198–199).
- `examine_plano_archivo` ES ↔ `examine_plano_archivo_en` — gemelos de idioma: misma lámina, rutas, proporciones, colores y tachuelas; sólo cambia el texto legible de los cuatro rótulos. Regenerar juntos; ninguno es fuente de verdad del otro (§23.3, línea 4064).

## Conflictos abiertos

- §23.3 declara las láminas de examen en `1280 × 720`, mostradas a `640 × 360` (§23.3, líneas 4041–4043), mientras la arquitectura de la tubería de Case 5 fija los plates de examen a exportación `960 × 540` y exige volver a medir las zonas tras cada redraw (`docs/architecture/asset-pipeline.md`, sección “Case 5”). Esta hoja conserva la resolución explícita del spec y deja pendiente decidir cuál contrato de exportación/runtime prevalece.
- §4.1 P1 dice que el segundo libro sólo se revela en el juicio, pero §10.2/L1 muestra durante la investigación que la ventanilla profesional lleva su propio libro (`docs/specs/case-5-el-tomo-trece.md:193-194`; `docs/specs/case-5-el-tomo-trece.md:686-689`). El plano debe mostrar la puerta y la ruta sin imprimir una explicación adicional del libro; resolver la discrepancia narrativa corresponde al spec/guion.
- La frase de §10.2 dice “dos puertas”, pero Nicanor cuenta una tercera puerta de carbón tapiada desde 1958 (§10.2, líneas 670–673). La imagen debe mantener dos accesos operativos y no decidir si la puerta sellada merece representación gráfica más allá de no contradecirla.

## Hallazgos de auditoría 2026-09-19 (regeneración Lote G, pasada P3)

**Veredicto: CUMPLE** — P3, montacargas de tres descansos, dos accesos, cuatro rótulos únicos y gemelos ES/EN. RAW: `tools/raw/case5/examine_plano_archivo.jpg` y `examine_plano_archivo_en.jpg` (1280 × 720). `plate_dos_accesos` y `bg_archivo_vestibulo` no se tocaron. No se ejecutó `process_case5_assets.py`.

### Cumple

- F1-1: lámina amarillenta, **cuatro tachuelas** de latón, una por esquina; sin marco ni props de escritorio; sin `EXAMINE` / `Case 5`.
- F1 P3 (recorte reja): pasillo 7 = reja a la izquierda y **estantes que llenan el corredor**; la mesa de consulta está en un cuarto aparte, al otro lado del montacargas, sin línea de visión desde la reja (§4.1 P3, `docs/specs/case-5-el-tomo-trece.md:195`).
- F1-4 (recorte del núcleo): **un** hueco de montacargas en columna continua con jaula en sótano, patio/planta baja y primer piso; un solo rótulo `MONTACARGAS` / `FREIGHT ELEVATOR`.
- F1-3 / F4: escalera de servicio junto al hueco, ruta roja discontinua sótano → extremo del pasillo 7, sin cruzar el mostrador.
- F1-5: dos accesos operativos — puerta pública **roja** al vestíbulo/mostrador; ventanilla de peritos (marco rojo, pane oscuro, repisa de madera) al patio empedrado. Sótano sin puerta pública.
- F2-1: exactamente cuatro rótulos, una vez cada uno. ES: `ACCESO PÚBLICO`, `PERITOS Y AUXILIARES`, `PATIO DE MANIOBRAS`, `MONTACARGAS`. EN: `PUBLIC ACCESS`, `EXPERTS AND AUXILIARIES`, `SERVICE COURTYARD`, `FREIGHT ELEVATOR`.
- F6: misma axonometría, tachuelas, rutas y colores; EN sin español residual.
- F2-3 / F5: salas vacías; cel-shading Ace Attorney; aceptación de estilo = revisor.

### Defectos confirmados

- Ningún defecto MAYOR ni MEDIO. F5 (textura de papel ilustrada) queda a decisión del revisor.

### Correcciones de auditoría

- ~~MAYOR / CONTRADICE F1 P3 — mesa delante de la librería, a la vista de la reja~~ — retirado: estantes bloquean el pasillo; mesa en cuarto lateral.
- ~~MEDIO / AUSENTE F1-4 — montacargas sin descanso de patio alineado~~ — retirado: tres jaulas en la misma vertical.
- ~~MEDIO / CONTRADICE F2 — `MONTACARGAS` duplicado~~ — retirado: un solo rótulo.
- ~~MENOR / MALFORMADO — patio rotulado en un postigo~~ — retirado: `PATIO DE MANIOBRAS` / `SERVICE COURTYARD` sobre el empedrado.
- Recortes sobre los JPEG RAW 1280 × 720 (reja+estantes, mesa, columna del hueco, puerta pública, ventanilla, sótano, tachuelas).

### Recomendación

1. No regenerar salvo decisión de estilo F5. Al procesar WebP, volver a medir zonas Present & Point sobre el recorte 960 × 540.
