# Índice de regeneración — activos de Case 5, auditorías 2026-09-18/19

Índice de los hallazgos de las auditorías visuales del 2026-09-18/19 (skill `asset-audit`, un recorte por sustantivo y prueba de nombrar) sobre los 33 activos de Case 5 con imagen: 8 fondos (`bg_`), 16 vistas de detalle (`examine_`) y 9 láminas de juicio (`plate_`). Cada entrada resume los defectos confirmados en la hoja del asset (fuente de verdad; este índice no la sustituye) y agrupa la regeneración por los conjuntos de consistencia («Regenerar juntos») de esas hojas.

Estado global: **sólo 1 de 33 cumple** (`bg_archivo_caldera`). El patrón dominante en `examine_`/`plate_` es triple: (1) gemelos ES/EN que no comparten composición (§23.3:4064), (2) texto impreso que el spec reserva al diálogo o que inventa contenido (rótulos de lámina, nombres, fechas), y (3) cifras/fechas que contradicen el canon (viv. 4 vs 72, fechas B/C invertidas, 1974/1975/1977 en un presente de 1982).

## Tabla global (orden de prioridad)

| # | Asset | Veredicto | Bloqueante principal | Lote |
|---|-------|-----------|----------------------|------|
| 1 | `bg_archivo_pasillo7` | no cumple | mueble de consulta, cartelito pericial y legajo abierto ausentes | A |
| 2 | `plate_foto_pericial` | no cumple | silueta de pie brazos en alto; cuerpo boca abajo cabeza-estante ausente | A |
| 3 | `examine_estante_consulta` | no cumple | tomo rotulado «13» junto al hueco (el 13 nunca se publicó) | A |
| 4 | `examine_tomo_caido` | no cumple (EN) | EN: rótulos forenses inventados y otra composición | A |
| 5 | `plate_tomo_trece` | no cumple | el hueco queda en la posición 12, no en la 13 | A |
| 6 | `bg_fiscalia` | no cumple | calculadora y cronómetro ausentes; ventana prohibida; bolsa llena | B |
| 7 | `bg_bodega_masa` | no cumple | apilado de huacales contradice «doce en pares + dos en piso» | C |
| 8 | `examine_huacal9` | no cumple | sin tiras encabalgadas (~250); EN no es gemelo; sin duplicación 4-XII | C |
| 9 | `plate_huacal_sellos` | no cumple | manual con rótulos; sin mano firmando ni tiras cruzando la junta | C |
| 10 | `examine_maquina` | no cumple | «abanico de barras de tipos» malformado; barra `s` torcida ausente | C |
| 11 | `bg_penal_efectos` | no cumple | etiqueta 214-J en blanco | D |
| 12 | `examine_efectos` | no cumple | ES sin libreta; cinco puntos inventados; gemelos distintos | D |
| 13 | `bg_despacho_berrondo` | no cumple | vitrina fuera del rect de `hotspot_vitrina`; legajos son bolsas | E |
| 14 | `examine_credencial` | no cumple | reverso atribuye la firma al secretario, no al juez (rompe clímax) | E |
| 15 | `plate_masa_concursal` | no cumple | mano con llave ausente; huacal abierto; rótulos; «EXP. 73/1974» | E |
| 16 | `plate_anatomia_ficha` | no cumple | seis rótulos legibles; un panel vacío en vez de seis campos con llaves | E |
| 17 | `bg_correspondencia` | no cumple (leve) | ventilador de aspas ausente (medio) | F |
| 18 | `examine_acuse` | no cumple | ES sin el nombre del interno; EN inventa nombre y deja español | F |
| 19 | `bg_archivo_vestibulo` | no cumple (leve) | lámparas colgantes ausentes (medio); estilo pendiente | G |
| 20 | `examine_libro_visitas` | no cumple (EN) | EN en español; fecha 1974; no compone gemelo | G |
| 21 | `examine_plano_archivo` | no cumple | gemelos distintos; UI «EXAMINE» horneada; EN rotula en español | G |
| 22 | `plate_dos_accesos` | no cumple | rótulos y personajes prohibidos; sin ventanilla ni sótano | G |
| 23 | `examine_termografo` | no cumple | eje de un solo día (sin días 3–5); EN es otro documento | H |
| 24 | `plate_curva_enfriamiento` | no cumple (leve) | leyenda pre-impresa con la conclusión del NARRADOR (medio) | H |
| 25 | `examine_ficha_domicilio` | no cumple | ES es ficha de perfil prohibida; sin los seis campos del clímax | I |
| 26 | `examine_esquina_tarjeta` | no cumple | `viv. 4` en vez de `viv. 72`; sin la `s` caída (rompe E5) | I |
| 27 | `examine_nota_renta` | no cumple | texto no exacto; sobre cerrado; «dwelling 4»; «Truly yours» | I |
| 28 | `plate_cuatro_renglones` | no cumple (ES) | ES sin `s` caídas (una invertida); sin escalera; gemelos distintos | I |
| 29 | `examine_expediente_serie` | no cumple | fechas B/C invertidas; paneles B/C/E sustituidos | J |
| 30 | `plate_cinco_papeles` | no cumple | las cinco fechas incorrectas; ninguno de los cinco papeles es el pedido | J |
| 31 | `examine_inventario` | no cumple | 17 MAY 1971 y 58 partidas (canon: 14 OCT 1971 y 47) | K |
| 32 | `examine_libro_peritos` | no cumple | libro equivocado; horas de asientos erróneas; «1974» | K |
| 33 | `bg_archivo_caldera` | **cumple** | — (2 menores opcionales) | H (opcional) |

---

## Lote A — Pasillo 7 (crimen descubierto)

**Regenerar juntos:** `bg_archivo_pasillo7`, `bg_archivo_pasillo7_d4` (nuevo, sin imagen aún), `plate_foto_pericial`, `examine_estante_consulta`, `examine_tomo_caido` + icono `tomo_caido`, `expediente_casimiro`, `plate_tomo_trece`.

| Asset | Regeneración clave (ver hoja para la lista completa) |
|---|---|
| `bg_archivo_pasillo7` | 1. Mueble de consulta distinto: 24 ranuras, cartoncitos ilegibles, 22 lomos verdes, ranura 13 vacía, ranura 11 media piel vino. 2. Cartelito de perito junto al tomo. 3. Legajo abierto atado con listón sobre la mesa. 4. Puerta metálica gris entreabierta, reja al fondo, rejilla caliente, tubería vista. 5. Tomo lomo arriba, silueta cabeza hacia el estante. Mantener silla volcada (defecto previo retirado por revisión). |
| `plate_foto_pericial` | Regeneración del 2026-09-18 conserva 7 bloqueantes: quitar título «CASE 5 – PLACA DIDÁCTICA»; pintar el cuerpo (no silueta) boca abajo cabeza-estante/pies-mesa; añadir estante de 24 ranuras con hueco 13 y lomo distinto en 11, legajo abierto, lámpara encendida, mancha y cartelito; foto B/N con grano grueso sin marco con manillas; quitar placa «EXPEDIENTE No. 1977-05-14». |
| `examine_estante_consulta` | Eliminar el tomo rotulado «13» a la derecha del hueco (numeración 1–12, hueco en 13, luego 14–24; hoy imprime 13, 14, 16… sin el 15). ES y EN comparten esta imagen: sin variante `_en`. |
| `examine_tomo_caido` | ES cumple parcialmente (mancha sobre el lomo, tomo de canto). Regenerar EN como gemelo literal de ES: misma composición (mesa de madera, sello ovalado medio borrado), texto del sello `DONATION FROM THE SYNDIC OF BANKRUPTCY 114/1971 · 14-X-1971` y tejuelo `XI`; eliminar todos los rótulos `$23.0 FORENSIC PLATE`, `EVIDENCE ITEM`, `LEGEND`, `NOTES`. |
| `plate_tomo_trece` | Mover el hueco a la posición 13 (hoy 11 lomos a la izquierda → posición 12); titular del recorte ilegible (gótica con glifos legibles). |

**Dependencias:** el mueble de 24 ranuras debe fijarse igual en `bg_archivo_pasillo7`, `plate_foto_pericial` y `examine_estante_consulta`; el tomo comparte lomo-arriba y mancha entre fondo, foto pericial y `examine_tomo_caido`. El re-apuntado del relato del 4 de diciembre (`celda_talks.ts:12-28` y `_en`) al nuevo `bg_archivo_pasillo7_d4` sigue pendiente en el guion (`new-assets.md`).

## Lote B — Fiscalía (despacho de Super Sam)

**Regenerar juntos:** `bg_fiscalia` solo (composición única ES/EN; ningún otro fondo pinta la bolsa — su identidad de «bolsa vacía» la comparte sólo con el diálogo de `trial_day3_success_berrondo.ts:55` y `climax_epilogue.ts:73`).

1. Eliminar la ventana con cortina y el aplique de latón: pared izquierda ciega en penumbra, única luz la lámpara de escritorio.
2. Pintar la calculadora de manivela (manivela lateral legible) y el cronómetro de bolsillo sobre un pisapapeles, despejados de pilas.
3. Sustituir el saco atado por bolsa de lona cruda doblada, plana y vacía sobre la silla, con sello circular en tinta verde, dentro del rect del hotspot (x:72, y:52, w:22, h:34).
4. Igualar las dos montañas de oficios; retirar la tercera pila del archivero y los papeles sueltos del escritorio.
5. Entreabrir exactamente un cajón del archivero, con los cuatro frentes de gaveta legibles.
6. Añadir reloj de oficina en la pared del escudo; ajustar el escudo a escudo nacional descolorido (sin corona real).

## Lote C — Bodega del sótano (huacales y Olivetti)

**Regenerar juntos:** `bg_bodega_masa`, `plate_huacal_sellos`, `examine_huacal9`/`_en`, `fichero_cedulario`, `examine_maquina`/`_en`, `maquina_escribir`.

| Asset | Regeneración clave |
|---|---|
| `bg_bodega_masa` | 1. Re-apilar: seis pilas de dos y dos en el suelo (14 en total, serie 1–14 única, 9 aparte y gran formato; hoy 3 columnas de 3 + 1, con el 7 duplicado). 2. Etiqueta manuscrita ilegible en las 9 caras de los cajones (hoy en blanco). 3. Marca blanca `41` a plantilla en el costado de la máquina; carro cromado distinguible. 4. Pata de cabra en clavo sobre viga (hoy gancho en S en muro). 5. Cuatro cierres de palanca en el huacal 9 (hoy 2). |
| `plate_huacal_sellos` | Lámina muda de tres viñetas: eliminar todo el texto de manual (título, rótulos «PREPARAR…», leyendas, NOTA, placa ARCHIVO JUDICIAL); viñeta 2 con mano firmando la tira; tiras encabalgadas cruzando la junta de la tapa; viñeta 3 con tira nueva pegada encima de las anteriores (hoy lacre). |
| `examine_huacal9` | Regenerar ambos gemelos con la misma composición: ~250 tiras encabalgadas como escamas amarilleando hacia abajo; tira superior blanca y limpia (más reciente); segunda tira repitiendo `SAT 4-XII` con rúbrica manuscrita (EN hoy muestra 15-IX-1976 y 23-VII-1974); sin lacre, medallón ni candelero; alejarse del fotorrealismo (§23.0). |
| `examine_maquina` | Abanico de barras de tipos legible como barras (hoy cubos con letras dispersas y «broca»); incluir la barra de la `s` minúscula torcida a la izquierda, razón de ser de la lámina (clímax E5); eliminar el fondo de escena (documentos, mueble, diploma, lámpara). |

## Lote D — Penal (efectos de Casimiro)

**Regenerar juntos:** `bg_penal_efectos`, `examine_efectos`/`_en`, `efectos_casimiro` (los catálogos apuntan a `examine_efectos.webp`).

| Asset | Regeneración clave |
|---|---|
| `bg_penal_efectos` | 1. Estampar «214-J» y «LENGUA, CASIMIRO» en la etiqueta visible de la caja abierta. 2. Numeración de plantilla uniforme en las cajas del estante (no contables una por una). 3. Mantener composición, exclusiones e iluminación fría. |
| `examine_efectos` | Regenerar ambos gemelos con la misma composición: libreta negra presente (ES hoy la sustituye por un tablero «IDENTIDAD…CONCLUSIÓN»); los cinco puntos con la cadena probatoria exigida (tarjeta decomisada en julio → ficha del museo en agosto → el mismo aparato → tecleo 1962–1971 → el deseo de salvarse); oficio dirigido al ministerio público del 8 de noviembre; sello con `8 NOV`; anotación manuscrita `pendiente`; relojes de pulsera; sin conclusión judicial impresa; corregir «beink» en EN. |

## Lote E — Despacho de Berrondo

**Regenerar juntos:** `bg_despacho_berrondo` (composición única ES/EN), `examine_credencial`/`_en`, `plate_masa_concursal`, `plate_anatomia_ficha`. Los sprites `berrondo_*` comparten identidad de vestuario/escala pero nunca se hornean en los fondos.

| Asset | Regeneración clave |
|---|---|
| `bg_despacho_berrondo` | 1. Vitrina (tres legajos + credencial) dentro del rect `hotspot_vitrina` x:0–28 %, y:28–70 %, o cambio del rect en spec (`despacho_berrondo_hotspots.ts:12` y `_en:13`). 2. Tres legajos encuadernados con lomo, sin moños ni bolsa. 3. Render §23.0 o retiro del hallazgo de estilo por el revisor. 4. Fondo de la foto de grupo = fachada de edificio. 5. Retirar o declarar el samovar. |
| `examine_credencial` | Reverso ES: la firma la hace el **juez expedidor** (hoy «SECRETARIO DE ACUERDOS»; rompe el clímax `climax_stage2.ts:22`). EN: cadena exacta del clímax («Valid until conclusion of the bankruptcy.» / «No hour limit.»); eliminar el español residual («SÍNDICO», «CREDENCIAL CERTIFICADA»…); lentes de media luna en la foto (hoy redondos); sello seco como relieve sin lacre ni palabra «SELLO SECO»; gemelos con una sola geometría y texto traducido. |
| `plate_masa_concursal` | Lámina muda: añadir la mano con llave sobre el huacal (`despacho_berrondo_talks.ts:25`); huacal cerrado y sellado (hoy abierto con bienes asomando); acreedores alrededor del huacal; eliminar todo rótulo («LA EMPRESA SE DERRUMBA»…, «EXP. 73/1974» — el expediente real es 114/1971); quitar el atrezzo de juzgado horneado en el borde; fondo crema con trazo de manual escolar, no carátula de episodio. |
| `plate_anatomia_ficha` | Tarjeta de cedulario ampliada con **exactamente seis campos vacíos señalados por llaves tipográficas** (hoy un panel único con una llave); eliminar los seis rótulos legibles («PAPEL», «EXPEDIENTE», «LISTÓN»…, inválidos también para el gemelo EN compartido) y la pila de papeles atada. |

## Lote F — Correspondencia

**Regenerar juntos:** `bg_correspondencia` + `examine_acuse`/`_en` (comparten la identidad del libro azul; como la lámina también falla, ambos entran al lote).

| Asset | Regeneración clave |
|---|---|
| `bg_correspondencia` | 1. Ventilador de aspas de mesa apagado sobre el archivero (hoy pila de legajos); retirar el ventilador de techo. 2. Casilleros pared a pared. 3. Calendario sin dígitos legibles. 4. No tocar ventanilla, fechador, libro azul ni fajos. |
| `examine_acuse` | Regenerar los gemelos con la misma composición (vista de plano del asiento del libro, no hoja suelta): renglón mecanografiado completo con `C. Lengua`, diligencia de cotejo, Archivo Judicial, 4 de diciembre y sindicatura 114/1971; EN traducido (hoy mezcla español y además inventa «José de Jesús Martínez López»); rúbrica pequeña y enérgica con dos rayas; sin banda «EXAMINE» ni sello institucional en ES. |

## Lote G — Vestíbulo del Archivo

**Regenerar juntos:** `bg_archivo_vestibulo`, `examine_libro_visitas`/`_en`, `examine_plano_archivo`/`_en`, `plate_dos_accesos`.

| Asset | Regeneración clave |
|---|---|
| `bg_archivo_vestibulo` | 1. Dos lámparas colgantes con tulipa opalina y reflejo alargado en el damero. 2. Cable de la enceradora enrollado; extintor de cobre; numeración diegética en casilleros; pluma con cordel. 3. Decisión del revisor sobre F5 (pictórico con degradados vs §23.0) o regenerar con cel-shading. |
| `examine_libro_visitas` | Regenerar EN como gemelo literal de ES (hoja suelta sobre tabla con esquineras, misma retícula y sellos violetas): traducir los trece asuntos (hoy en español), sin fecha impresa (EN hoy imprime «4 de diciembre de 1974»; el canon es 1982). |
| `examine_plano_archivo` | Regenerar ambos gemelos con la misma lámina (tachuelas en las cuatro esquinas, sin marco ni props): quitar la UI «EXAMINE / Case 5» horneada; EN localiza los cuatro rótulos (hoy nivela en español y falta el montacargas); sólo dos accesos activos (puerta pública al vestíbulo + ventanilla al patio; hoy entrada pública en el sótano); salidas marcadas con rutas en rojo. |
| `plate_dos_accesos` | Lámina sin rótulos y sin personajes: eliminar título, subtítulo, párrafo narrativo, letreros, escala, leyenda y sello; eliminar el juez en TV y el empleado de bigote; quitar la fuga de meta-texto («CHEPIRITO…», banda «EN VIVO»); los dos accesos rojos = puerta pública + ventanilla de peritos (hoy dos arcos idénticos con «SERVICIO DE ENLACE»); topología patio / planta baja / primer piso / sótano con la ruta sótano→pasillo 7 legible (hoy pisos 1–2–3 sin sótano). |

## Lote H — Térmicos (caldera, termógrafo, curva de enfriamiento)

**Regenerar juntos si cambian las curvas o cifras:** `examine_termografo`/`_en`, `plate_curva_enfriamiento`, con `bg_archivo_caldera` (que **cumple** y sólo recibe ajustes opcionales) y por el muro/ducto con el Lote A.

| Asset | Regeneración clave |
|---|---|
| `bg_archivo_caldera` (opcional) | 1. Vano del muro izquierdo legible como ducto metálico ascendente hacia el pasillo 7, ambos secadores orientados a él. 2. Insinuar la plumilla del termógrafo. 3. Forma de la línea de tinta según la unificación del spec (ver «Decisiones pendientes»). |
| `examine_termografo` | ES: tira **semanal** con los días 3–5 de diciembre en el eje (hoy 0–24 h de un solo día) para poder representar el punto pericial a las 18:40 del día 4; punto a lápiz (no tinta con flecha); sin rótulo «PUNTO LÁPIZ PERITO»; asiento completo con «muro poniente» y «dos secadores». EN: regenerar como gemelo de ES (hoy es otro documento con fechas 14–20/04/77 y «Location: basement»). |
| `plate_curva_enfriamiento` | Eliminar la caja de leyenda que pre-imprime la conclusión del NARRADOR («La línea horizontal…») y la frase enfatizada en rojo; quitar la franja de mesa y el atrezo (lámpara, reloj de arena, tinteros); quitar título, subtítulo y rótulos de atrezo («EXPEDIENTE No. 1974-32»…). Sólo legibles las cifras 20 °C / 31 °C junto a sus termómetros. Las curvas y los dos puntos separados en el eje ya cumplen. |

## Lote I — Domicilio 72 y la `s` caída (documentos del Acta, sin fondo asociado)

**Regenerar juntos:** `examine_ficha_domicilio`/`_en`, `examine_esquina_tarjeta`/`_en`, `examine_nota_renta`/`_en`, `plate_cuatro_renglones`/`_en`. Comparten tres invariantes del canon (§24.C/lente 22): **vivienda 72** (nunca 4), la **`s` minúscula caída media línea por debajo** (nunca una `s` normal, y sólo en los renglones fijados), y el **borde rasgado recto y limpio** de la tarjeta.

| Asset | Regeneración clave |
|---|---|
| `examine_ficha_domicilio` | ES: la tarjeta de cedulario con los seis campos de §18.5 (domicilio «vecindad de la calle del Espanto ocho, vivienda setenta y dos», ingreso, objetos, puntualidad «catorce meses de atraso», observaciones «no insistir», puerta «chapa vencida. Se empuja.») — hoy es una ficha de perfil prohibida con `viv. 4`. EN: la misma ficha con el texto inglés del clímax (hoy es una carátula de expediente). Gemelos con una sola geometría; sin texturas fotorrealistas. |
| `examine_esquina_tarjeta` | Corregir `viv. 4` → `viv. 72` / `apt. 72` en ambas variantes (rompe el empareje de E4); imprimir el defecto tipográfico de la `s` caída (rompe E5); quitar la flecha magenta de EN (§23.0); borde roto recto; escala 3.1 × 2.4 cm; gemelos idénticas salvo texto. |
| `examine_nota_renta` | Texto exacto ES con «Adjunto el pago de diecisiete mensualidades vencidas a cargo del C. Ramón Valdés, inquilino de la vivienda 72.» y «Se ruega expedir el recibo…» (el juez reacciona a «se ruega»); sobre **abierto**; nota suelta sin alfiler; marca circular de liga en una esquina inferior; EN con «dwelling 72» y sin «Truly yours»; `s` caída verificable. |
| `plate_cuatro_renglones` | ES: renglones con las `s` minúsculas caídas media línea (hoy falta en 1–2, normal en 3, invertida en 4) y disposición en escalera como la EN; gemelos compartiendo encuadre (fondo crema plano, sin tablero con mazo ni placa). |

## Lote J — Los cinco documentos (día 2, sin fondo asociado)

**Regenerar juntos:** `examine_expediente_serie`/`_en`, `plate_cinco_papeles`. Comparten las cinco fechas canónicas: **12 JUL / 21 AGO / 28 AGO / 15 SEP / 24 OCT**.

| Asset | Regeneración clave |
|---|---|
| `examine_expediente_serie` | Fechas B = 28 ago y C = 21 ago (hoy invertidas; la imagen copió el error de los catálogos); panel B = la ficha de seis renglones canónicos (chapa vencida desde marzo, rejilla 18×24, velador con horas de bodega, pastillas de chiquitolina, rollo de cámara, servicio de cierre incluido 5 min); panel C = frasco de valeriana con etiqueta manuscrita + molde de cera; panel E = telegrama mecanografiado del 24 OCT (hoy acta con foto de collar, prohibido por el conflicto abierto); `s` caída en A y en el renglón 6 de B; sin rótulos explicativos por panel; año 1982 (hoy sellos de 1975); EN totalmente localizado. |
| `plate_cinco_papeles` | Los cinco papeles del GIRO 2 en orden y con las cinco fechas canónicas (hoy: 15 JUL/28 JUL/12 AGO/04 SEP/16 OCT y ninguno de los objetos es el pedido — pila atada, mazo, pila genérica, caja «ARCHIVO GENERAL», balanza). Primero: tarjeta de la sociedad disuelta desde 1971; segundo: frasco de valeriana + molde de cera; tercero: ficha de seis renglones; cuarto: gasto de $12,000 del micrófono; quinto: telegrama del collar. |

## Lote K — Acta suelta (inventario y libro de peritos)

**Regenerar juntos:** `examine_inventario`/`_en`, `examine_libro_peritos`/`_en` (independientes entre sí; sin fondo asociado).

| Asset | Regeneración clave |
|---|---|
| `examine_inventario` | Fecha 14 de octubre de 1971 (hoy 17 DE MAYO DE 1971) y `TOTAL DE PARTIDAS: 47` (hoy 58) — la contradicción de D3-T1 exige 47 comprobables; partida 12 = cedulario 11,400 tarjetas (hoy expediente judicial); partida 41 = máquina de escribir Olivetti Lexikon 80 (hoy «maquinilla»; EN además con «typeriter»); partida 44 = ejemplares de lujo sin vender, 210 (hoy fotografías judiciales); listado legible y ordenado (hoy líneas corruptas); gemelos con la misma composición (ninguno de los dos actuales es la forma canónica). |
| `examine_libro_peritos` | Libro pequeño, delgado, empastado en hule negro (hoy tomo de piel con hebillas); sin entorno de escritorio (documento recortado); los cuatro asientos con sus cargos y horas canónicas: ROSAS 9:10/9:40 AM, BERRONDO 4:05/4:50 PM (rompe la contradicción D2-T2 si se imprime mal), PAZGUATO 5:52 PM/10:15 PM; sin fecha «1974» ni «EXP. 17-12-74» (presente 1982); sin insignia «5 EXAMINE» ni título «REGISTRO DE INSIGNIAS»; EN gemelo de ES (hoy doble página distinta). |

---

## Decisiones del spec pendientes antes de regenerar

Conflictos abiertos que condicionan los prompts; resolverlos en `docs/specs/case-5-el-tomo-trece.md` antes de ejecutar la regeneración afectada:

- **Lote A:** el relato del 4 de diciembre (`celda_talks.ts:12-28` y `_en`) aún estampa `bg_archivo_pasillo7` (escena del crimen) — falta crear `bg_archivo_pasillo7_d4` y re-apuntar el guion.
- **Lote A/J:** los catálogos (`EvidenceCatalogCase5EsB.ts`) cargan las fechas B/C invertidas y el panel E como acta con foto; `examine_expediente_serie` las copió. Corregir el catálogo junto con la lámina o el error volverá a propagarse.
- **Lote H:** forma de la línea del termógrafo — «sube y se aplana» (§23.1:3993) vs «sierra» (§16.2:3004); el `detailedView` y el diálogo apoyan meseta.
- **Lote C/D:** legibilidad binaria de la marca `41` y de la etiqueta `214-J` / `LENGUA, CASIMIRO` en el plano general (§23.1 las exige pero cierra con «sin texto legible»).
- **Lote E:** si la banda «EL SABER UNIVERSAL · 1969» de la foto de grupo debe ser legible, franja sin texto o texto narrado no verificable.
- **Lote B:** duración de la bolsa («cuatro meses» en el guion vs «más de tres meses» en el spec) — no es visual, pero debe cuadrar antes de tocar las escenas que comparten la identidad de la bolsa.
- **Transversal `examine_`/`plate_`:** el patrón «rótulo de lámina impreso» (`EXAMINE`, «CASE 5 – PLACA DIDÁCTICA», títulos, leyendas) viola §23.3/§23.4 en 12 activos; conviene fijar en el spec una regla explícita de «láminas mudas salvo texto diegético exacto» para que el prompt de regeneración pueda citarla.
