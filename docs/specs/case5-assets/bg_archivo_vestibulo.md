# bg_archivo_vestibulo — hoja de hechos

Clase: `bg`. Espec: §23.0, §23.1, §10.2 y §24. Guion directo: `src/case/case5/Private/archivo_vestibulo.ts:10-24` y `archivo_vestibulo_en.ts:10-34`; hotspots y conversaciones en `archivo_vestibulo_hotspots.ts`, `archivo_vestibulo_hotspots_en.ts`, `archivo_vestibulo_talks.ts` y `archivo_vestibulo_talks_en.ts`. Variante EN: no existe ni se exige; ES/EN comparten `assets/bg_archivo_vestibulo.webp`.

## Mapa semántico y alcance

Vestíbulo público del Archivo Judicial del Distrito, en la mañana del lunes 6 de diciembre de 1982, tres días después de que reventó un tubo y empezaron a funcionar la caldera y dos secadores. Es la sala de acceso público: el mostrador y su libro de visitas están en primer plano narrativo; el acceso profesional se explica mediante el plano y la lámina `plate_dos_accesos`, no mediante texto legible pintado en este fondo.

Alias seguidos: `vestíbulo`, `Archivo Judicial`, `mostrador`, `libro de visitas`, `plano`, `ventanilla de peritos`, `dos puertas`, `escalera principal`, `carrito de expedientes`, `enceradora`. El fondo no es el pasillo 7 ni la escena del crimen y no debe mostrar personajes.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Vestíbulo público de un edificio de gobierno mexicano de los años treinta reconvertido en archivo (§23.1).
- [ ] `PINTAR` — Piso de granito pulido en damero gris y crema, encerado hasta el espejo; debe recibir el reflejo alargado de dos lámparas colgantes con tulipa opalina (§23.1).
- [ ] `PINTAR` — A la derecha, mostrador de madera oscura de dos metros con reja de latón torneado hasta media altura (§23.1).
- [ ] `PINTAR` — Sobre el mostrador: libro grande abierto, pluma atada a un cordel, timbre de recepción y tintero (§23.1; §10.2, guion `docs/specs/case-5-el-tomo-trece.md:651-654`). El libro es el libro público de visitas, no el libro profesional de Genoveva.
- [ ] `PINTAR` — Detrás del mostrador, muro de casilleros de madera numerados; los números pueden ser marcas diegéticas sin volverse texto legible de primer plano (§23.1).
- [ ] `PINTAR` — A la izquierda, plano amarillento de protección civil clavado con cuatro tachuelas, con salidas marcadas en rojo; debajo, extintor de cobre (§23.1; §10.2, `docs/specs/case-5-el-tomo-trece.md:669-679`).
- [ ] `PINTAR` — Al fondo al centro, arranque de escalera principal de piedra con barandal de hierro forjado (§23.1). No confundirla con la escalera de servicio: ésta se revela por el plano y conecta patio, sótano y extremo del pasillo 7 sin pasar por mostradores (§4.1 P2; §10.2, `docs/specs/case-5-el-tomo-trece.md:684-688`).
- [ ] `PINTAR` — En primer plano izquierdo, carrito de metal con legajos atados con listón rojo (§23.1; §10.2, `docs/specs/case-5-el-tomo-trece.md:697-704`).
- [ ] `PINTAR` — Junto al zoclo, enceradora eléctrica de los años cincuenta con el cable enrollado (§23.1; el diálogo de Nicanor fija que acaba de encerar, `docs/specs/case-5-el-tomo-trece.md:627-640`).
- [ ] `PINTAR` — Luz de mañana entrando por un ventanal alto, con polvo suspendido (§23.1). La atmósfera debe admitir papel viejo, cera de piso y ropa secándose, sin convertir esas frases en objetos o texto obligatorio (§10.2, `docs/specs/case-5-el-tomo-trece.md:627-640`).
- [ ] `AUSENTE` — Personajes, cadáver, cinta policial, pasillo 7, estantes del pasillo, tomo caído, silueta de gis, escena del crimen, policías o mobiliario no declarado (§23.1; §10.2).

### F2 Texto en imagen

- [ ] `AUSENTE` — Texto legible en el fondo: la dirección de arte exige «sin texto legible» (§23.1). No imprimir nombres, horas, entradas del libro, rótulos de casilleros, leyendas del plano ni marcas de expediente.
- [ ] `NO CONTRADECIR` — El libro abierto, los casilleros numerados y el plano con salidas rojas son objetos diegéticos obligatorios, pero sus cadenas exactas pertenecen a `examine_libro_visitas`, `examine_plano_archivo` y `plate_dos_accesos`; no borrarlos para cumplir la prohibición de prosa (§23.1; §23.3, `docs/specs/case-5-el-tomo-trece.md:4048-4050,4076`; §10.2, `:664,685-688`).
- [ ] `NO CONTRADECIR` — La lámina `plate_dos_accesos` no menciona el segundo libro y reserva ese giro para juicio; el fondo puede mostrar el plano y el libro público, pero no debe añadir un rótulo que revele el libro profesional (§7.2/L1, `docs/specs/case-5-el-tomo-trece.md:379`; §10.2, `:682-689`).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — El estado temporal es 6 de diciembre, 10:15 AM, durante la primera visita de investigación (`src/case/case5/Private/archivo_vestibulo.ts:18`; variante EN `archivo_vestibulo_en.ts:18`; §10.2, `docs/specs/case-5-el-tomo-trece.md:627`). La fecha y la hora se narran, no se imprimen en el fondo.
- [ ] `NO CONTRADECIR` — El libro que aparece en el mostrador es el registro público de visitas: la hoja del 4 de diciembre tiene catorce firmas y la última entrada de R. Valdés es 16:40/16:58 (§23.5; §10.2, `docs/specs/case-5-el-tomo-trece.md:652-664`; §24, cronología `:218,222`). Esos datos deben quedar para el `detailedView`, no aparecer como escritura legible aquí.
- [ ] `NO CONTRADECIR` — El plano representa dos accesos funcionales y la escalera de servicio; la puerta de carbón, si se alude a ella, está tapiada desde 1958 (§10.2, `docs/specs/case-5-el-tomo-trece.md:670-688`). No añadir una tercera entrada operativa ni hacer que el mostrador controle la ventanilla profesional.

### F4 Contrato en pantalla

- [ ] `PINTAR` — La escena se abre y permanece en `bg_archivo_vestibulo` durante la introducción: Archivo Judicial del Distrito, vestíbulo, 6 de diciembre, 10:15 AM, `furniture: none`, BGM `archivo` (`src/case/case5/Private/archivo_vestibulo.ts:10-24`; variante EN `archivo_vestibulo_en.ts:10-34`).
- [ ] `NO CONTRADECIR` — Mientras se ve el fondo, Nicanor acaba de encerar y el edificio huele a papel viejo, cera y ropa secándose; el tubo del 3 de diciembre provocó humedad y la caldera/dos secadores funcionan al máximo (§10.2, `docs/specs/case-5-el-tomo-trece.md:627-644`; ES/EN `archivo_vestibulo.ts:18-31`, `archivo_vestibulo_en.ts:18-31`). La imagen no necesita pintar ropa tendida, humedad visible, caldera ni secadores.
- [ ] `NO CONTRADECIR` — El libro se usa para establecer que sólo registra visitas: catorce firmas, la salida escrita por Nicanor, uniformados y personal sin firma (`archivo_vestibulo_hotspots.ts:13-27`; EN `archivo_vestibulo_hotspots_en.ts:13-27`; §10.2, `docs/specs/case-5-el-tomo-trece.md:648-664`). El mostrador y el libro deben quedar suficientemente identificables para que la interacción tenga sentido.
- [ ] `NO CONTRADECIR` — El plano se examina para descubrir dos accesos, la ventanilla de peritos y la escalera de servicio; después la escena vuelve al mismo fondo cuando Chapulín infiere que se puede subir del sótano al pasillo 7 sin ser visto (`archivo_vestibulo_hotspots.ts:28-48`; EN `archivo_vestibulo_hotspots_en.ts:28-48`; §10.2, `docs/specs/case-5-el-tomo-trece.md:666-695`).
- [ ] `NO CONTRADECIR` — El carrito debe sostener el diálogo de que Chómpiras sube los legajos y trabaja allí desde septiembre (`archivo_vestibulo_hotspots.ts:51-65`; EN `archivo_vestibulo_hotspots_en.ts:51-65`).
- [ ] `NO CONTRADECIR` — La conversación posterior distingue la puerta de Nicanor de la de Genoveva y desbloquea el pasillo 7; la frase «el estante está enderezado» pertenece al pasillo 7 y no autoriza a pintar un estante de consulta en este vestíbulo (`archivo_vestibulo_talks.ts:18-32`; EN `archivo_vestibulo_talks_en.ts:18-32`; §10.2, `docs/specs/case-5-el-tomo-trece.md:719-732`).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA/Nintendo DS) en alta definición; , ; contorno oscuro nítido y continuo en carbón `#1A1A1A`, más grueso en la silueta exterior; caricatura expresiva; colores primarios saturados.
- [ ] Aplicar el registro de Caso 5: papel, madera y polvo; expedientes con listón, madera barnizada, latón envejecido y luz de tungsteno (§23.0).
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto en inglés y cualquier rosa/magenta en primer plano (§23.0; `docs/specs/artistic-direction.md:5`, citado por el spec).
- [ ] `NO CONTRADECIR` — El formato de producción es fondo nuevo de 1536 × 1024 con recorte `cover` a 960 × 540 (§23.1; `docs/architecture/asset-pipeline.md`, sección «Case 5»).

### F6 Localización

- [ ] `NO CONTRADECIR` — ES y EN usan exactamente `assets/bg_archivo_vestibulo.webp`; no crear `bg_archivo_vestibulo_en.webp` (`archivo_vestibulo.ts:13,18`; `archivo_vestibulo_en.ts:13,18`).
- [ ] Composición, geometría, materiales, conteos y estado temporal son idénticos entre idiomas. Sólo se localizan los diálogos y las láminas/documentos que tienen texto legible; el fondo no contiene texto legible (§23.1; §23.3, `docs/specs/case-5-el-tomo-trece.md:4064`).

## Consistencia (regenerar juntos)

- `examine_libro_visitas` — comparte el libro grande abierto del mostrador; el fondo fija su presencia, posición general y función de registro público, mientras el detailed view es la fuente de verdad de las catorce líneas y sus horas. Regenerar juntos; este activo no es fuente de verdad del otro.
- `examine_plano_archivo` — comparte el plano amarillento clavado con cuatro tachuelas y sus cuatro esquinas marcadas; el detailed view es la fuente de verdad de los rótulos legibles y la geometría interna. Regenerar juntos; este activo no es fuente de verdad del otro.
- `plate_dos_accesos` — comparte el objeto conceptual del plano y la topología de dos accesos, ventanilla, escalera y montacargas; la lámina es la fuente de verdad de la vista axonométrica sin rótulos. Regenerar juntos; este activo no es fuente de verdad del otro.
- `bg_archivo_pasillo7` — comparte edificio, época, materiales de archivo, madera y polvo, pero no la sala ni el estado de trama; no trasladar estantes, cadáver, tomo, reja o puerta del pasillo al vestíbulo. Regenerar juntos sólo para mantener el lenguaje arquitectónico; este activo no es fuente de verdad del otro.
- `bg_archivo_pasillo7_d4` (si se materializa el activo propuesto en `new-assets.md`) — comparte únicamente la identidad del edificio y el registro material; no debe heredar ningún prop del pasillo al vestíbulo. Regenerar juntos sólo como consistencia de estilo; este activo no es fuente de verdad del otro.

## Conflictos abiertos

- No hay conflicto interno en el contrato del fondo. La narración distingue la escalera principal visible al fondo de la escalera de servicio revelada en el plano; no resolver esa relación pintando una segunda escalera en el fondo, porque §23.1 sólo exige el arranque de la escalera principal y §10.2 entrega la topología de servicio mediante `plate_dos_accesos`.
- La frase inglesa «two doors» y la réplica sobre una tercera puerta tapiada son diálogo, no texto de imagen; no deben convertirse en rótulos o puertas adicionales legibles en el background (`archivo_vestibulo_hotspots_en.ts:30-48`; §10.2, `docs/specs/case-5-el-tomo-trece.md:670-688`).

## Auditoría visual

- No realizada por protocolo: esta hoja se construyó sin abrir ni inspeccionar ninguna imagen. La aceptación posterior debe comprobar cada casilla contra el fondo regenerado y conservar la prohibición de usar la imagen como fuente de verdad.
- Auditoría realizada el 2026-09-19 contra `assets/bg_archivo_vestibulo.webp` (1536 × 1024); ver `## Hallazgos de auditoría 2026-09-19`.

## Hallazgos de auditoría 2026-09-19

**Veredicto: NO CUMPLE en el eje de contenido (F1)** — falta el rasgo de iluminación de las dos lámparas colgantes con tulipa opalina y su reflejo en el piso; el resto de F1 cumple. **Exclusiones, F2, F3, F4 y F6: cumplen.** **Estilo (F5): desviación registrada**, sujeta a decisión del revisor.

### Cumple

- F1: vestíbulo público de edificio gubernamental reconvertido en archivo, con materiales de época (madera, latón, piedra, granito).
- F1: piso de granito en damero gris y crema, encerado con brillo especular; la luz entra por un ventanal alto con polvo suspendido (F1 ventanal/pulido ✓; el reflejo exigido de lámparas NO, ver defectos).
- F1: mostrador de madera oscura a la derecha, proporción de ~2 m, con reja de latón torneado (balustres) hasta media altura.
- F1: sobre el mostrador, libro grande abierto, pluma sujeta a un cordel/cadena, timbre de recepción de latón y tintero; el libro se lee como registro público, no como el libro profesional.
- F1: a la izquierda, plano amarillento de protección civil clavado con cuatro tachuelas (contadas: 4) y salidas marcadas en rojo; debajo, extintor (color incorrecto, ver defectos).
- F1: al fondo al centro, arranque de escalera principal de piedra con barandal de hierro forjado; no se pintó ninguna segunda escalera (respeta el conflicto abierto).
- F1: en primer plano izquierdo, carrito de metal de dos pisos con legajos atados con listón rojo, con ruedas y geometría coherente.
- F1: enceradora eléctrica de los cincuenta junto al zoclo, con cepillo y mango legibles (estado del cable incorrecto, ver defectos).
- F2: sin texto legible en ninguna zona (plano con símbolos ilegibles, libro con renglones en blanco, etiqueta del extintor difusa); no hay rótulos que revelen el libro profesional ni rótulos de casilleros.
- F3: sin fechas ni horas impresas; las catorce firmas y el asiento de R. Valdés quedan para el `detailedView`; el plano no añade una tercera entrada operativa.
- F4: los tres objetivos de hotspot están pintados y legibles dentro de sus zonas — libro (≈x64-78%, y37-49% dentro de `hotspot_libro` x58/y26/w26/h24), plano (`hotspot_plano` x0/y0/w22/h36) y carrito (`hotspot_carrito` x0/y48/w22/h42) (`src/case/case5/Private/archivo_vestibulo_hotspots.ts:13-62`); mostrador y libro sostienen `hotspot_libro` (catorce firmas, R. Valdés) y el carrito sostiene el diálogo de Chómpiras.
- F4: no hay estante de consulta en el vestíbulo; «el estante está enderezado» queda en pasillo 7 (`archivo_vestibulo_talks.ts:30`).
- F5: formato 1536 × 1024; sin marcas de agua, sin texto en inglés, sin rosa/magenta en primer plano.
- F6: sólo existe `assets/bg_archivo_vestibulo.webp`; ES (`archivo_vestibulo.ts:13,18`) y EN (`archivo_vestibulo_en.ts:13,18`) apuntan al mismo archivo; no hay `bg_archivo_vestibulo_en.webp`.
- Exclusiones (AUSENTE): sin personajes, cadáver, cinta policial, estantes, tomo caído, silueta de gis ni mobiliario no declarado; verificado zona por zona en recortes.

### Defectos confirmados

1. **AUSENTE / MEDIO / F1** — Las dos lámparas colgantes con tulipa opalina no aparecen en ninguna zona (techo verificado con recorte) y el piso no recibe su reflejo alargado: toda la luz proviene del ventanal. Literal: `docs/specs/case-5-el-tomo-trece.md:3986`. No rompe diálogo directo; incumple §23.1.
2. **CONTRADICE / MENOR / F1** — El cable de la enceradora aparece suelto, serpenteando por el piso, no «enrollado». Literal: `docs/specs/case-5-el-tomo-trece.md:3986`. Matiz de estado; ningún diálogo depende de él.
3. **CONTRADICE / MENOR / F1** — El extintor bajo el plano está pintado en rojo óxido con etiqueta clara, no se lee como «extintor de cobre». Literal: `docs/specs/case-5-el-tomo-trece.md:3986`. Matiz de material.
4. **AUSENTE / MENOR / F1** — Los casilleros de madera tienen placas y manijas pero ninguna numeración, ni siquiera como marca diegética pequeña. Literal: `docs/specs/case-5-el-tomo-trece.md:3986` («casilleros de madera numerados»); sin romper la prohibición de F2, que sigue mandando.
5. **CONTRADICE / MENOR / F1** — La pluma del mostrador está atada con una cadena de cuentas, no con un cordel; la función de sujeción sí se lee. Literal: `docs/specs/case-5-el-tomo-trece.md:3986` y `archivo_vestibulo_hotspots.ts:17` («una pluma atada a un cordel»). Matiz de material; el hotspot sigue siendo legible.
6. **DRIFT / MEDIO / F5 (estilo, decisión del revisor pendiente)** — El sombreado es pictorial con degradados suaves (haces de luz, muros, mármol) y la paleta es sepia desaturada, contra el literal §23.0 citado en la hoja: «… » y «colores primarios saturados». El contorno oscuro sí está presente. Conforme al protocolo, la aceptación del estilo es decisión del revisor.

### Correcciones de auditoría

- Se actualizó la nota de la sección «Auditoría visual» (que decía «no realizada por protocolo») para dejar constancia de que la auditoría se ejecutó el 2026-09-19. No había hallazgos previos que retirar; ningún ✓ de esta hoja fue desmentido por los recortes.

### Recomendación (para el prompt de regeneración)

1. Añadir dos lámparas colgantes con tulipa opalina y pintar su reflejo alargado sobre el damero, sin introducir texto ni degradados que contradigan §23.0.
2. Enrollar el cable de la enceradora junto al cuerpo del aparato.
3. Repintar el extintor en cobre metálico, sin etiqueta legible.
4. Añadir numeración diegética pequeña en los casilleros (marcas, no texto legible de primer plano).
5. Sustituir la cadena de la pluma por un cordel atado al mostrador o al libro.
6. Decisión del revisor sobre F5: o se regenera con cel-shading de dos tonos y contorno más grueso con paleta más saturada, o se retira el hallazgo 6 citando la decisión.
