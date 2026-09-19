# plate_dos_accesos — hoja de hechos

Clase: `plate`. Espec: §23.0 y §23.4. Guion directo: §7.3/L1, §10.2 (`hotspot_plano`), `src/case/case5/Private/archivo_vestibulo_hotspots.ts:44-48` y `archivo_vestibulo_hotspots_en.ts:44-48`. Variante localizada: no existe ni se exige; ES y EN comparten `assets/plate_dos_accesos.webp` porque la lámina no contiene texto.

## Mapa semántico y alcance

- Lámina explicativa didáctica del plano del Archivo Judicial, mostrada a pantalla completa durante la investigación del D1 en el vestíbulo.
- Corte axonométrico del Archivo en tres niveles: patio/planta baja, primer piso y sótano.
- Dos accesos operativos destacados en rojo: la puerta pública hacia el vestíbulo/mostrador y la ventanilla de peritos hacia el patio de maniobras.
- Escalera de servicio trazada con línea de puntos desde el patio, por el sótano, hasta el extremo del pasillo 7, sin pasar por mostradores.
- Hueco contiguo del montacargas de carga, con descansos en sótano, patio y primer piso.
- La lámina explica la topología; no es el `detailedView` del plano ni debe convertirse en un documento con rótulos.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Corte axonométrico del Archivo Judicial en tres niveles, con separación visual clara entre patio/planta baja, primer piso y sótano (§23.4, línea 4076; §4.1, líneas 158–186).
- [ ] `PINTAR` — Exactamente dos puertas/accesos operativos resaltados en rojo: la puerta pública y la ventanilla de peritos y auxiliares (§23.4, línea 4076; §4.1 P1, líneas 191–194; §10.2, líneas 686–688).
- [ ] `PINTAR` — La puerta pública se conecta con el vestíbulo y el mostrador del libro de visitas; la ventanilla profesional se abre hacia el patio de maniobras (§10.2, líneas 686–688; `archivo_vestibulo_hotspots.ts:44-45`; `archivo_vestibulo_hotspots_en.ts:44-45`).
- [ ] `PINTAR` — Escalera de servicio representada como línea de puntos, conectando patio, sótano y extremo del pasillo 7 (§23.4, línea 4076; §4.1 P2, líneas 193–195; `archivo_vestibulo_hotspots.ts:46`; `archivo_vestibulo_hotspots_en.ts:46`).
- [ ] `PINTAR` — La ruta de la escalera evita todos los mostradores y permite llegar del sótano al pasillo 7 sin pasar por el acceso público (§4.1 P2, líneas 193–195; §10.2, líneas 688–694).
- [ ] `PINTAR` — Hueco contiguo del montacargas de carga, diferenciado de la escalera, con sus tres descansos: sótano, patio y primer piso (§23.4, línea 4076; §4.1 P8, líneas 199–200; §24.B, líneas 4129–4145).
- [ ] `NO CONTRADECIR` — La geometría debe conservar la relación del primer piso: reja del pasillo 7, extremo del pasillo y puerta de servicio conectada a la escalera; no implicar que la reja permite ver la mesa de consulta (§4.1 P3, líneas 195–195; §23.1, líneas 3987–3988).

### F2 Texto en imagen

- [ ] `AUSENTE` — No incluir rótulos, leyendas, nombres de salas, flechas explicativas, números, texto del narrador ni marcas de idioma; §23.4 define esta placa como `Sin rótulos` y la narración explica la imagen (§23.4, línea 4076; §7.2, reglas 3–6).
- [ ] `AUSENTE` — No imprimir «dos puertas», «libro propio», «sin mostrador», tiempos de trayecto, nombres de personajes ni conclusiones sobre la policía; todo eso pertenece al diálogo o a las pruebas (§10.2, líneas 685–689; §7.3/L1).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — Deben existir tres niveles y tres descansos del montacargas: sótano, patio y primer piso; la cifra no tiene que aparecer escrita (§4.1 P8, líneas 199–200; §24.B, líneas 4131–4145).
- [ ] `NO CONTRADECIR` — Cada trayecto entre niveles extremos del montacargas tarda noventa segundos; no imprimir el tiempo ni dibujar una ruta que lo vuelva imposible (§4.1 P8, líneas 199–200; §24.B, líneas 4131–4147).
- [ ] `NO CONTRADECIR` — La escalera sótano–primer piso tarda diez minutos y no es el medio del circuito del crimen; la placa debe distinguirla del montacargas (§24.B, líneas 4131–4147; invariantes I12 e I26, líneas 4187–4188).
- [ ] `AUSENTE` — No mostrar la tercera puerta de carbón como acceso operativo: Nicanor la describe como tapiada desde 1958 (§10.2, líneas 670–673). Si se representa por continuidad del plano físico, debe quedar sellada y no ser una de las dos puertas rojas.

### F4 Contrato en pantalla

- [ ] `PINTAR` — La lámina se muestra con `bg: assets/plate_dos_accesos.webp` y `furniture: 'none'`; las tres líneas del narrador dependen de que la composición haga legibles la puerta pública, la ventanilla profesional y la ruta de servicio (`archivo_vestibulo_hotspots.ts:44-46`; `archivo_vestibulo_hotspots_en.ts:44-46`).
- [ ] `NO CONTRADECIR` — En español, la narración dice que la puerta pública da al vestíbulo y al mostrador del libro de visitas, que la ventanilla da al patio y que la escalera une patio, sótano y pasillo 7 sin pasar por mostradores (`archivo_vestibulo_hotspots.ts:44-46`).
- [ ] `NO CONTRADECIR` — En inglés, la misma composición sostiene `public door`, `expert window`, `service yard`, `basement`, `hallway 7` y la ausencia de paso por el mostrador (`archivo_vestibulo_hotspots_en.ts:44-46`). No se genera una variante EN ni se traducen textos inexistentes.
- [ ] `NO CONTRADECIR` — Las dos líneas posteriores concluyen que desde el sótano se puede subir al pasillo 7 sin que nadie vea la cara; el trazado debe dejar esa ruta topológicamente posible (`archivo_vestibulo_hotspots.ts:47-48`; `archivo_vestibulo_hotspots_en.ts:47-48`).
- [ ] `NO CONTRADECIR` — La presentación del plano en D1-T3 usa la escalera para refutar que sólo había una ruta vigilada; la placa no debe sugerir que el acceso público es la única entrada al edificio (D1-T3; §17.1; §10.2, líneas 672–680).
- [ ] `NO CONTRADECIR` — El segundo libro pertenece a la ventanilla profesional y no debe aparecer dibujado ni explicado dentro de la imagen; la lámina sólo debe dejar visible la separación espacial (§7.3/L1; §4.1 P1, líneas 191–194).

### F5 Estilo y prohibidos

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA/Nintendo DS) en alta definición; cel-shading de colores planos con terminador de sombra duro, dos tonos por superficie y ; contorno oscuro nítido y continuo en carbón `#1A1A1A`, más grueso en la silueta exterior; anatomía caricaturesca y colores primarios saturados (§23.0, líneas 3974–3978).
- [ ] Contrato §23.0 completo en el prompt: televisión mexicana de los años setenta, universo Chespirito/El Chapulín Colorado, melodrama judicial tratado con seriedad y registro de papel, madera, polvo, archivo judicial, listones, madera barnizada, latón envejecido y luz de tungsteno (§23.0, líneas 3978–3979).
- [ ] `PINTAR` — Tratamiento de ilustración didáctica plana, con fondo crema de papel y trazo de manual escolar mexicano de los setenta; no tratamiento de fotografía pericial (§23.4, líneas 4072–4077).
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, estética de cómic americano, marcas de agua, texto en inglés dentro de la imagen y cualquier rosa o magenta en primer plano (§23.0, líneas 3974–3980).
- [ ] `AUSENTE` — Personajes, cuerpos, tomo caído, mesa de consulta detallada o marcas de escena del crimen; la placa explica la topología, no representa la escena del pasillo 7 (§7.3/L1; §23.1, líneas 3987–3988).

### F6 Localización

- [ ] `NO CONTRADECIR` — ES y EN usan exactamente el mismo archivo y composición: misma axonometría, niveles, dos accesos rojos, escalera punteada, hueco del montacargas y tres descansos; no existe `plate_dos_accesos_en` (§23.3, línea 4064; §23.4, línea 4076; `archivo_vestibulo_hotspots_en.ts:44-46`).
- [ ] `AUSENTE` — No aplicar la regla de la ese caída ni introducir ninguna cadena localizada: la placa no tiene texto legible y la variante EN sólo cambia el diálogo (§23.3, líneas 4058–4064; §23.4, línea 4076).

## Consistencia (regenerar juntos)

- `examine_plano_archivo` y `examine_plano_archivo_en` — comparten la misma topología de dos accesos, escalera, hueco del montacargas y tres descansos. La lámina es sin rótulos; el `detailedView` exige rótulos en ES/EN. **Regenerar juntos, este activo no es fuente de verdad del otro** (§7.3/L1; §23.3; §23.4).
- `bg_archivo_vestibulo` — comparte el plano físico clavado junto al mostrador, la puerta pública, el contexto del libro de visitas y el lenguaje material del Archivo. El fondo no es fuente de verdad de esta axonometría ni debe aportar texto legible. **Regenerar juntos, este activo no es fuente de verdad del otro** (§23.1, línea 3986; §10.2, líneas 666–679).
- `bg_archivo_pasillo7` — comparte la puerta de servicio, el extremo del pasillo 7 y el primer piso; el fondo es la escena del crimen y no debe transferir cuerpo, tomo, mesa o props al corte didáctico. **Regenerar juntos, este activo no es fuente de verdad del otro** (§23.1, líneas 3987–3988; §4.1 P2–P3).
- `bg_archivo_caldera` — comparte el sótano y la relación espacial de la sala de calderas con el pasillo 7; el fondo fija una habitación y no sustituye el trazado completo de la placa. **Regenerar juntos, este activo no es fuente de verdad del otro** (§23.1, línea 3993; §4.1 P7).
- `examine_libro_visitas` y `examine_libro_peritos` — comparten la distinción entre acceso público y acceso profesional, pero sus libros no deben aparecer en la placa. **Regenerar juntos para comprobar separación de identidades, este activo no es fuente de verdad del otro** (§4.1 P1 y P4; §10.2, líneas 685–688).

## Conflictos abiertos

- §4.1 P1 dice que el segundo libro sólo se revela en el juicio, mientras §10.2/L1 hace que la narración de investigación diga que la ventanilla profesional «lleva su propio libro» (`docs/specs/case-5-el-tomo-trece.md:193-194,686-689`; `archivo_vestibulo_hotspots.ts:44-45`). Esta hoja conserva ambas referencias: la imagen no debe imprimir el libro ni resolver la discrepancia narrativa.
- §10.2 habla de «dos puertas», pero el diálogo inmediatamente anterior cuenta una tercera puerta de carbón tapiada desde 1958 (`docs/specs/case-5-el-tomo-trece.md:670-673`; `archivo_vestibulo_hotspots.ts:35-36`). El contrato de §23.4 exige dos puertas rojas; no se decide aquí si el acceso histórico sellado se dibuja aparte.
- §23.4 fija las láminas didácticas en `1280 × 720`, mientras la arquitectura de la tubería de Case 5 indica que las placas didácticas exportan a `960 × 540` (`docs/specs/case-5-el-tomo-trece.md:4041-4043,4074-4077`; `docs/architecture/asset-pipeline.md:76-78`). Esta hoja conserva la resolución explícita del spec y deja pendiente decidir cuál contrato de exportación/runtime prevalece.

## Hallazgos de auditoría 2026-09-19

- Veredicto: **NO CUMPLE** — en contenido (F1/F3), en exclusiones/texto (F2), en localización (F6) y con drift de estilo (F5). Se inspeccionó `assets/plate_dos_accesos.webp` (960 × 540) con conversión a PNG y recortes ampliados por zona (panel izquierdo, TV, ambas puertas rojas, escalera/montacargas, planta baja, leyenda y sello).

### Cumple

- ✓ `AUSENTE` F2/F5 — No hay texto en inglés dentro de la imagen; todo el texto impreso es español (recortes c1, c7, c8).
- ✓ `AUSENTE` F5 — Sin marcas de agua ni rosa/magenta en primer plano; paleta sepia/roja sobre crema.
- ✓ F1 (parcial) — Existe un corte axonométrico de tres niveles apilados y una escalera de servicio con trazado discontinuo; la imagen sí es una lámina arquitectónica, no la escena del pasillo 7 (recorte full + c5).

### Defectos confirmados

- **MAYOR — CONTRADICE (F2, §23.4 línea 4076):** la placa está llena de rótulos prohibidos: título «ARCHIVO JUDICIAL – 3 NIVELES», subtítulo «PAPEL, MADERA Y POLVO», párrafo narrativo «Registro oficial de causas penales…», letreros «SERVICIO DE ENLACE», «ATENCIÓN DE EXPEDIENTES / SOLO CON ORDEN JUDICIAL», «ESCALERAS DE SERVICIO», «ELEVADOR DE CARGA», numeración de pisos «3/2/1», «ESCALA 1:100» con regla numerada 0–5 m, caja «LEYENDA DEL PLANO» con cinco entradas y placa del sello «INSTALACIÓN JUDICIAL…». §23.4 define esta lámina como `Sin rótulos`; la narración debe explicar la imagen. Rompe la identidad del activo (recortes c1, c3, c4, c5, c6, c7, c8); afecta `archivo_vestibulo_hotspots.ts:44-48`.
- **MAYOR — CONTRADICE (F2/F5):** fuga de meta-texto del arte en la imagen: pie «TELEVISIÓN MEXICANA DE LOS AÑOS SETENTA — CHEPIRITO / EL CHAPULÍN COLORADO —» y banda roja «EN VIVO» reproducen instrucciones del prompt como si fueran contenido (recortes c1, c2). Ningún rótulo de la placa debe nombrar el universo ni la época.
- **MAYOR — CONTRADICE (F5 `AUSENTE`, §23.0/§23.1):** personajes presentes: un juez de toga dentro de un panel de TV con cámara, y un empleado de bigote escribiendo en un escritorio de planta baja. La placa explica la topología y no debe contener personajes ni escenas (recortes c2, c6).
- **MAYOR — CONTRADICE (F1, §10.2 líneas 686–688; `archivo_vestibulo_hotspots.ts:44-45`):** los dos accesos rojos no son la puerta pública + la ventanilla de peritos: son dos puertas idénticas de arco, y una está rotulada «SERVICIO DE ENLACE». No existe ventanilla alguna hacia un patio de maniobras, ni vestíbulo/mostrador del libro de visitas conectado a la puerta pública. La dependencia de hotspot (public door / expert window) queda sin sustento visual.
- **MAYOR — CONTRADICE (F1/F3, §4.1 líneas 158–200; §24.B):** los tres niveles dibujados son pisos numerados 1–2–3 con escritorios y archiveros; no hay sótano ni patio de maniobras. La topología exigida (patio / planta baja / primer piso / sótano) y la ruta sótano→pasillo 7 sin pasar por mostradores no son legibles; el diálogo de investigación (`archivo_vestibulo_hotspots.ts:46-48`, EN `:44-48`) y la refutación de D1-T3 se rompen con esta composición.
- **MEDIO — CONTRADICE (F3, §24.B líneas 4131–4147):** el trazado discontinuo amarillo fusiona escalera y montacargas en una sola «RUTA PUNTUAL DE SERVICIO (ESCALERAS Y ELEVADOR)» (leyenda, recorte c7; recorrido, recorte c5). La hoja exige escalera y hueco del montacargas como elementos diferenciados, con tres descansos (sótano, patio, primer piso); los descansos no son verificables y la escalera debe distinguirse del montacargas (invariantes I12/I26).
- **MEDIO — DRIFT (F5, §23.0 líneas 3974–3978):** el acabado es pictórico con sombreado suave, textura de pincel y degradados en el papel crema y los interiores, no cel-shading de colores planos con terminador duro y dos tonos por superficie. Desviación de estilo registrada; la aceptación final queda al revisor.

### Correcciones de auditoría

- ~~«No se inspeccionó ninguna imagen, por protocolo. No se confirma ningún defecto visual de la versión actual; esta sección queda como lista de aceptación derivada del spec y de los guiones ES/EN.»~~ — Sustituido por la auditoría real de `assets/plate_dos_accesos.webp` (2026-09-19), con recortes c1–c8; los archivos temporales fueron eliminados al cierre.

### Recomendación (si se regenera)

1. Regenerar la placa como corte axonométrico `Sin rótulos`: cero texto, cero números, cero letreros, sin leyenda, sin escala, sin sello; fondo crema de papel y trazo de manual escolar mexicano setentero (§23.4, línea 4076).
2. Tres niveles correctos: patio de maniobras / planta baja, primer piso (pasillo 7 con su reja en el extremo) y sótano, claramente separados; sin numerar los pisos.
3. Exactamente dos accesos en rojo: la puerta pública hacia vestíbulo/mostrador del libro de visitas y la ventanilla de peritos abierta al patio de maniobras; nada más en rojo.
4. Escalera de servicio como línea de puntos propia, conectando patio → sótano → extremo del pasillo 7 sin cruzar mostradores, visualmente distinta del hueco del montacargas.
5. Hueco contiguo del montacargas de carga separado de la escalera, con descansos legibles en sótano, patio y primer piso.
6. Eliminar todo personaje (juez en TV, empleado en mostrador), paneles tipo transmisión y cualquier fuga de prompt/meta-texto.
7. Aplicar §23.0 estricto: cel-shading plano, terminador de sombra duro, dos tonos por superficie, contorno carbón `#1A1A1A`;  ni textura pictórica.
8. Regenerar junto con `examine_plano_archivo` (ES/EN) y los fondos del conjunto de consistencia, sin tomar esta imagen como fuente de verdad de aquéllos.
