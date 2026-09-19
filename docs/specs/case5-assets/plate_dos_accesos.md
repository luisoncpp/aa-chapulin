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

## Hallazgos de auditoría 2026-09-19 (regeneración Lote G)

**Veredicto: NO CUMPLE (leve)** — F2/F5/F6 y la topología patio / planta baja / primer piso / sótano cumplen; F1 deja la ventanilla de peritos **malformada** (se nombra chimenea). RAW: `tools/raw/case5/plate_dos_accesos.jpg` (1280 × 720). Sin variante EN. `bg_archivo_vestibulo` no se tocó.

### Cumple

- F2 / F6 `AUSENTE`: cero letras, números, leyenda, escala, sello, CHEPIRITO, EN VIVO o rótulos de piso (lámina muda compartida ES/EN).
- F5 `AUSENTE`: sin personajes, sin juez en TV, sin empleado, sin cadáver ni tomo caído.
- F1 axonométrico: sótano de ladrillo con caldera y huacales; planta baja con puerta pública **roja** a vestíbulo y mostrador largo; patio de maniobras empedrado anejo; primer piso con reja, estantes y mesa al fondo.
- F1 reja/mesa: los estantes del pasillo 7 se interponen entre la reja y la mesa del cuarto del extremo (recorte de la reja); no hay visibilidad directa.
- F1/F3 montacargas: hueco de carga distinto de la escalera, jaula con descansos en sótano, planta baja/patio y primer piso (recorte del núcleo).
- F1 escalera: línea de puntos + peldaños desde el sótano (entre cajas) subiendo junto al hueco hasta el extremo del primer piso, sin cruzar el mostrador (`archivo_vestibulo_hotspots.ts:46-48`).
- F1 puerta pública: doble hoja roja a la sala del mostrador (recorte).
- F5: ilustración didáctica en papel crema, cel-shading y contorno carbón; aceptación de estilo = revisor.

### Defectos confirmados

- **MEDIO / MALFORMADO** (F1 ventanilla, `plate_dos_accesos.md:19-20`; §10.2, `docs/specs/case-5-el-tomo-trece.md:686-688`; `archivo_vestibulo_hotspots.ts:44-45`): el segundo acceso rojo en el patio, visto sin el contexto de la hoja, se nombra **chimenea con ménsula**, no ventanilla/teller window (recorte del patio). El objeto está en el muro correcto y es el único rojo además de la puerta pública, pero falla la prueba de nombrar.

### Correcciones de auditoría

- ~~MAYOR F2 — placa llena de rótulos, leyenda, escala, sello~~ — retirado: lámina muda.
- ~~MAYOR F2/F5 — CHEPIRITO / EN VIVO~~ — retirado.
- ~~MAYOR F5 — juez en TV y empleado~~ — retirado.
- ~~MAYOR F1 — dos arcos idénticos «SERVICIO DE ENLACE», sin ventanilla ni vestíbulo~~ — retirado en parte: hay puerta pública + objeto rojo en el patio; la forma de la ventanilla sigue malformada (arriba).
- ~~MAYOR F1/F3 — pisos 1–2–3 sin sótano ni patio~~ — retirado.
- ~~MEDIO F3 — escalera y montacargas fusionados~~ — retirado: peldaños + línea de puntos aparte de la jaula.
- Recortes sobre el JPEG RAW 1280 × 720 (puerta pública, patio, reja, sótano, núcleo). No se ejecutó `process_case5_assets.py`.

### Recomendación (si se regenera)

1. Sustituir la chimenea del patio por una ventanilla de peritos: ventana pequeña con repisa de mostrador y marco rojo, sin hogar ni campana. Conservar el resto de la axonometría muda.
2. No reintroducir texto, personajes ni un tercer objeto rojo (la puerta del primer piso debe seguir en marrón).
3. Regenerar junto con `examine_plano_archivo` ES/EN para alinear la ventanilla y el descanso de patio del montacargas; este activo no es fuente de verdad de aquéllos.
