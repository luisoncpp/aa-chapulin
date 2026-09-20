# Índice de regeneración — activos de Case 5, auditorías 2026-09-18/19

Índice de los hallazgos de las auditorías visuales del 2026-09-18/19 (skill `asset-audit`, un recorte por sustantivo y prueba de nombrar) sobre los 33 activos de Case 5 con imagen: 8 fondos (`bg_`), 16 vistas de detalle (`examine_`) y 9 láminas de juicio (`plate_`). Cada entrada resume el **veredicto más reciente** de la hoja del asset (fuente de verdad; este índice no la sustituye) y agrupa la regeneración por los conjuntos de consistencia («Regenerar juntos») de esas hojas.

Estado global (actualizado 2026-09-20): **31 de 33 cumplen en hoja**; **2 pendientes** (`bg_archivo_vestibulo`, `plate_curva_enfriamiento`). `bg_correspondencia` fue reemplazado, reprocesado a WebP y recalibrado con su hotspot sobre el recorte final 960×540. `plate_tomo_trece` y `plate_dos_accesos` fueron regenerados, reprocesados a WebP y re-auditados con veredicto cumple; la comparación visual final de Astra no encontró contradicciones materiales. La mayoría de lotes A–K tienen RAW en `tools/raw/case5/`; los WebP de `assets/` no se reprocesaron salvo donde la hoja cita exportación explícita (p. ej. `examine_estante_consulta.webp`). El patrón residual dominante en lo que ya cumple: defectos MENOR/MEDIO no bloqueantes (numeración de cartoncitos, piso de madera vs losa, `s` caída parcial fuera del alcance Espanto, matiz F5 pendiente de revisor).

## Tabla global (orden de prioridad)

| # | Asset | Veredicto | Bloqueante principal | Lote |
|---|-------|-----------|----------------------|------|
| 1 | `plate_tomo_trece` | **cumple** (regeneración final) | 12 lomos + hueco 13 + 11 lomos; publicidad ilegible; Astra sin drift material | A |
| 2 | `bg_correspondencia` | **cumple** (reemplazo 2026-09-20) | ventilador de mesa incorporado; hotspot recalibrado | F |
| 3 | `bg_archivo_vestibulo` | no cumple (leve) | dos lámparas colgantes con tulipa opalina y reflejo en el piso ausentes | G |
| 4 | `plate_dos_accesos` | **cumple** (regeneración final) | ventanilla roja reconocible; tres niveles y montacargas confirmados por Astra | G |
| 5 | `plate_curva_enfriamiento` | no cumple (leve) | leyenda pre-impresa con la conclusión del NARRADOR; título, atrezzo y franja de mesa | H |
| 6 | `bg_archivo_pasillo7` | **cumple** (RAW Lote A v3) | residual MEDIO: cartoncitos duplicados/saltados; piso losa gris (canon: madera) | A |
| 7 | `plate_foto_pericial` | **cumple** | — (master 1280×720 alineado con investigación) | A |
| 8 | `examine_estante_consulta` | **cumple** (RAW 20:48 → WebP) | residual MENOR: polvo del zócalo débil | A |
| 9 | `examine_tomo_caido` | **cumple** (regen Lote A RAW 15:29) | residual: tinta del sello demasiado nítida; mancha salpica a la tapa junto al tejuelo | A |
| 10 | `bg_fiscalia` | **cumple** (RAW Lote B pasada 2) | residual MENOR: escudo no descolorido | B |
| 11 | `bg_bodega_masa` | **cumple** (Lote C RAW) | residual: serie 1–14 no única; 3 cierres; pico en viga | C |
| 12 | `examine_huacal9` | **cumple** (Lote C RAW) | residual: 2.ª tira no medio tapada; EN `SÁT` | C |
| 13 | `plate_huacal_sellos` | **cumple** (Lote C RAW) | menor: tapa leída como tablones | C |
| 14 | `examine_maquina` | **cumple** (Lote C RAW, intento extra E5) | residual MENOR: varias `s` extra en el abanico | C |
| 15 | `bg_penal_efectos` | **cumple** (RAW Lote D) | — (runtime WebP aún no reprocesado) | D |
| 16 | `examine_efectos` | **cumple** (RAW Lote D) | MENOR: punto 5 poco torcido; F5 grano de madera en ES | D |
| 17 | `bg_despacho_berrondo` | **cumple** (regen Lote E) | vitrina en hotspot; matiz F5 pictórico pendiente de revisor | E |
| 18 | `examine_credencial` | **cumple** (regen Lote E) | residual MEDIO: lentes de aro, no media luna; coma extra en renglón 1 ES | E |
| 19 | `plate_masa_concursal` | **cumple** (regen Lote E) | — | E |
| 20 | `plate_anatomia_ficha` | **cumple** (regen Lote E) | — | E |
| 21 | `examine_acuse` | **cumple** (regen Lote F) | 3 MENOR: fechador espaciado; cantoneras vs fondo; bokeh F5 | F |
| 22 | `examine_libro_visitas` | **cumple** (regen Lote G) | estilo F5 sujeto a revisor | G |
| 23 | `examine_plano_archivo` | **cumple** (regen Lote G P3) | — | G |
| 24 | `examine_termografo` | **cumple** (Lote H RAW, pasada grafito 18:40) | — | H |
| 25 | `examine_ficha_domicilio` | **cumple** (Lote I, Espanto-lock) | residual MENOR: ES `dos` en línea base | I |
| 26 | `examine_esquina_tarjeta` | **cumple** (Lote I, Espanto-lock) | — | I |
| 27 | `examine_nota_renta` | **cumple** (Lote I, parche `s` 2026-09-20) | residual MEDIO: cuatro renglones vs tres | I |
| 28 | `plate_cuatro_renglones` | **cumple** (Lote I, pasada Espanto-lock) | — | I |
| 29 | `examine_expediente_serie` | **cumple** (Lote J, Espanto-lock) | MENOR: otras `s` en línea base; punto en pestaña `24 OCT.` | J |
| 30 | `plate_cinco_papeles` | **cumple** (Lote J, pasada dirigida) | — | J |
| 31 | `examine_inventario` | **cumple** (Lote K RAW) | MENOR: grapado | K |
| 32 | `examine_libro_peritos` | **cumple** (Lote K RAW) | — | K |
| 33 | `bg_archivo_caldera` | **cumple** | — (2 menores opcionales) | H (opcional) |

---

## Lote A — Pasillo 7 (crimen descubierto)

**Regenerar juntos:** `bg_archivo_pasillo7`, `bg_archivo_pasillo7_d4`, `plate_foto_pericial`, `examine_estante_consulta`, `examine_tomo_caido` + icono `tomo_caido`, `expediente_casimiro`, `plate_tomo_trece`.

| Asset | Regeneración clave (ver hoja para la lista completa) |
|---|---|
| `bg_archivo_pasillo7` | **Cumple** (RAW v3, 21:18): mueble de consulta, cartelito pericial, legajo abierto, silueta boca abajo, tomo lomo arriba, puerta/reja/rejilla/tubería. Residual: corregir cartoncitos 1–24 sin duplicados (hoy `17,17,19,19…`, falta 18); piso a madera barnizada. |
| `plate_foto_pericial` | **Cumple** (master 1280×720): cuerpo boca abajo cabeza-estante, estante 24 ranuras hueco 13 lomo vino 11, legajo, lámpara, tomo con mancha, B/N sin rótulos. Conservar. |
| `examine_estante_consulta` | **Cumple** (RAW 20:48 → `assets/examine_estante_consulta.webp`): banda 1–24, hueco 13, lomo vino 11. Residual MENOR: polvo del zócalo. |
| `examine_tomo_caido` | **Cumple** (RAW 15:29): gemelos idénticos, tomo de canto, mancha en lomo, sello ovalado exacto, sin rótulos forenses EN. Residual: ensuciar tinta del sello; reducir salpicadura en tapa. |
| `plate_tomo_trece` | **Cumple** (regeneración final): **12 lomos a la izquierda + hueco 13 + 11 a la derecha**; titular convertido en mancha ilegible. Astra confirmó consistencia visual con el conjunto. |

**Dependencias:** el mueble de 24 ranuras y el hueco 13 deben coincidir en `bg_archivo_pasillo7`, `bg_archivo_pasillo7_d4`, `plate_foto_pericial`, `examine_estante_consulta` y `plate_tomo_trece`. El relato del 4 de diciembre apunta a `bg_archivo_pasillo7_d4` en ES/EN.

## Lote B — Fiscalía (despacho de Super Sam)

**Regenerar juntos:** `bg_fiscalia` solo.

| Asset | Regeneración clave |
|---|---|
| `bg_fiscalia` | **Cumple** (RAW pasada 2): pared izquierda ciega, calculadora de manivela, cronómetro en pisapapeles, bolsa de lona vacía con sello verde, dos montañas iguales, archivero 4 gavetas (una entreabierta), reloj de oficina, escudo nacional sin corona. Residual opcional: descolorir el escudo. RAW: `tools/raw/case5/bg_fiscalia.jpg`. |

## Lote C — Bodega del sótano (huacales y Olivetti)

**Regenerar juntos:** `bg_bodega_masa`, `plate_huacal_sellos`, `examine_huacal9`/`_en`, `fichero_cedulario`, `examine_maquina`/`_en`, `maquina_escribir`.

| Asset | Regeneración clave |
|---|---|
| `bg_bodega_masa` | **Cumple** (RAW Lote C): apilado 14 huacales, etiquetas manuscritas, marca `41`, pata de cabra en viga, 4 cierres en huacal 9. Residual MEDIO/MENOR no narrativo. |
| `plate_huacal_sellos` | **Cumple:** lámina muda de tres viñetas, tiras encabalgadas, viñeta 3 con tira nueva. |
| `examine_huacal9` | **Cumple:** ~250 tiras, `SAT 4-XII`/`SÁB 4-XII`, gemelos idénticos. Residual: 2.ª tira no medio tapada. |
| `examine_maquina` | **Cumple** (intento extra E5): abanico de barras, barra `s` torcida a la izquierda, sin LEXIKON 80, sin fondo de escena. Residual: varias `s` extra en el arco inferior. |

## Lote D — Penal (efectos de Casimiro)

**Regenerar juntos:** `bg_penal_efectos`, `examine_efectos`/`_en`, `efectos_casimiro`.

**Estado RAW 2026-09-19:** hojas **cumplen**. WebP de `assets/` sin reprocesar.

| Asset | Regeneración clave |
|---|---|
| `bg_penal_efectos` | **Cumple** (RAW): `214-J`, `LENGUA, CASIMIRO`, numeración uniforme, iluminación fría. |
| `examine_efectos` | **Cumple** (RAW): libreta negra, cinco puntos, oficio 8 NOV, `pendiente`/`pending`, gemelos idénticos. MENOR: punto 5 poco torcido; grano de madera ES. |

## Lote E — Despacho de Berrondo

**Regenerar juntos:** `bg_despacho_berrondo`, `examine_credencial`/`_en`, `plate_masa_concursal`, `plate_anatomia_ficha`.

| Asset | Regeneración clave |
|---|---|
| `bg_despacho_berrondo` | **Cumple** (RAW): vitrina en hotspot, tres legajos con lomo, fachada en foto de grupo, samovar retirado. Matiz F5 pendiente de revisor. |
| `examine_credencial` | **Cumple** (RAW): firma del juez, sello seco, cadena EN del clímax, gemelas. Residual: lentes de aro (no media luna); coma extra ES renglón 1. |
| `plate_masa_concursal` | **Cumple** (RAW): lámina muda, llave sobre huacal cerrado, acreedores, fondo crema. |
| `plate_anatomia_ficha` | **Cumple** (RAW): seis campos vacíos con `}`, puerta como sexto, sin rótulos. |

## Lote F — Correspondencia

**Regenerar juntos:** `bg_correspondencia` + `examine_acuse`/`_en`.

| Asset | Regeneración clave |
|---|---|
| `bg_correspondencia` | **Cumple** (reemplazo 2026-09-20): ventilador de mesa apagado sobre el archivero, sin ventilador de techo; ventanilla, fechador, libro azul y fajos conservados. Hotspot recalibrado a `x: 65, y: 67, w: 31, h: 22`. |
| `examine_acuse` | **Cumple** (RAW): gemelos con `C. Lengua`, diligencia 4 dic, sindicatura 114/1971, rúbrica dos rayas, fechador `29 NOV`/`NOV 29`. 3 MENOR no bloqueantes. Si se retoca el fondo, alinear cantoneras del libro con `bg_correspondencia`. |

## Lote G — Vestíbulo del Archivo

**Regenerar juntos:** `bg_archivo_vestibulo`, `examine_libro_visitas`/`_en`, `examine_plano_archivo`/`_en`, `plate_dos_accesos`.

| Asset | Regeneración clave |
|---|---|
| `bg_archivo_vestibulo` | **No cumple (leve):** añadir dos lámparas colgantes con tulipa opalina y reflejo en el damero. Opcional: cable de enceradora enrollado, extintor de cobre, numeración en casilleros, cordel en la pluma; decisión F5. |
| `examine_libro_visitas` | **Cumple** (RAW): gemelo EN, sello violeta, trece asientos, sin fecha 1974. |
| `examine_plano_archivo` | **Cumple** (RAW P3): montacargas 3 descansos, 4 rótulos únicos, reja sin vista a la mesa. |
| `plate_dos_accesos` | **Cumple** (regeneración final): lámina muda, topología, escalera sótano→pasillo 7 y ventanilla del patio reconocible; Astra no encontró contradicción material. RAW: `tools/raw/case5/plate_dos_accesos.jpg`. |

## Lote H — Térmicos (caldera, termógrafo, curva de enfriamiento)

**Regenerar juntos si cambian las curvas o cifras:** `examine_termografo`/`_en`, `plate_curva_enfriamiento`, con `bg_archivo_caldera` (opcional).

| Asset | Regeneración clave |
|---|---|
| `bg_archivo_caldera` | **Cumple.** Ajustes opcionales: ducto ascendente, plumilla del termógrafo. |
| `examine_termografo` | **Cumple** (RAW, pasada grafito): eje semanal 3–5 DIC, meseta, punto a lápiz sobre tick 18 del día 4 (18:40), gemelo EN, asiento con «muro poniente» y «dos secadores». |
| `plate_curva_enfriamiento` | **No cumple (leve):** eliminar caja de leyenda («La línea horizontal…»), título/subtítulo, franja de mesa y atrezzo (lámpara, reloj de arena, tinteros, placas). Mantener: dos curvas, 20 °C/31 °C, línea horizontal con dos puntos separados. Solo esta placa; no tocar termógrafo ni caldera. |

## Lote I — Domicilio 72 y la `s` caída

**Regenerar juntos:** `examine_ficha_domicilio`/`_en`, `examine_esquina_tarjeta`/`_en`, `examine_nota_renta`/`_en`, `plate_cuatro_renglones`/`_en`.

| Asset | Regeneración clave |
|---|---|
| `examine_ficha_domicilio` | **Cumple** (Espanto-lock): seis campos de §18.5, vivienda 72, gemelos idénticos. Residual MENOR: `dos` en línea base ES. |
| `examine_esquina_tarjeta` | **Cumple** (Espanto-lock): `viv./apt. 72`, `s` de `Espanto` media línea abajo, borde rasgado recto, sin flecha magenta EN. |
| `examine_nota_renta` | **Cumple tras parche 2026-09-20:** todas las `s` ES intramisyllabic (`diecisiete` ya no cae la `e`; `respuesta` cae las dos `s`). EN: las nueve `s` caen, incluido `Enclosed` e `issue` (`i` + dos `s` + `ue`). Residual MEDIO: cuatro renglones vs tres. |
| `plate_cuatro_renglones` | **Cumple** (Espanto-lock): `s` intramisyllabic, escalera, gemelos idénticos, fondo crema sin tablero. |

## Lote J — Los cinco documentos (día 2)

**Regenerar juntos:** `examine_expediente_serie`/`_en`, `plate_cinco_papeles`.

| Asset | Regeneración clave |
|---|---|
| `examine_expediente_serie` | **Cumple** (Espanto-lock): fechas B=28 AGO / C=21 AGO, paneles canónicos, `s` in-word en A (`Enciclopedias`) y B6 (`minutos`/`Closing`). MENOR: otras `s` en línea base; punto en `24 OCT.`. |
| `plate_cinco_papeles` | **Cumple** (pasada dirigida): cinco hitos GIRO 2 con fechas `12 JUL` / `21 AGO` / `28 AGO` / `15 SEP` / `24 OCT`. |

## Lote K — Acta suelta (inventario y libro de peritos)

**Regenerar juntos:** `examine_inventario`/`_en`, `examine_libro_peritos`/`_en`.

| Asset | Regeneración clave |
|---|---|
| `examine_inventario` | **Cumple** (RAW): 14 OCT 1971, 47 partidas, partidas 12/41/44 canónicas, gemelos idénticos. MENOR: grapado. |
| `examine_libro_peritos` | **Cumple** (RAW): libro delgado en hule negro, cuatro asientos con horas canónicas, sin «1974», gemelo EN. |

---

## Decisiones del spec pendientes antes de regenerar

Conflictos abiertos que condicionan los prompts; resolverlos en `docs/specs/case-5-el-tomo-trece.md` antes de ejecutar la regeneración afectada:

- **Lote A:** resuelto: `bg_archivo_pasillo7_d4.webp` existe y `celda_talks.ts`/`_en` lo usa para el relato del 4 de diciembre; `bg_archivo_pasillo7` queda reservado para la investigación posterior. Pendiente: alinear numeración del mueble y piso de madera entre fondo, placa pericial y `plate_tomo_trece`.
- **Lote A/J:** los catálogos (`EvidenceCatalogCase5EsB.ts`) cargaban fechas B/C invertidas; `examine_expediente_serie` ya cumple con fechas canónicas en RAW — verificar que el catálogo coincida para no repropagar el error.
- **Lote H:** forma de la línea del termógrafo — «sube y se aplana» (§23.1:3993) vs «sierra» (§16.2:3004); el RAW de `examine_termografo` usa meseta; `plate_curva_enfriamiento` sigue sin regenerar.
- **Lote C/D:** legibilidad binaria de la marca `41` y de la etiqueta `214-J` / `LENGUA, CASIMIRO` en el plano general (§23.1 las exige pero cierra con «sin texto legible»).
- **Lote E:** si la banda «EL SABER UNIVERSAL · 1969» de la foto de grupo debe ser legible, franja sin texto o texto narrado no verificable.
- **Lote B:** duración de la bolsa («cuatro meses» en el guion vs «más de tres meses» en el spec) — no es visual, pero debe cuadrar antes de tocar las escenas que comparten la identidad de la bolsa.
- **Lote I:** conflicto abierto de `examine_nota_renta` (cuatro renglones visuales vs tres de §23.3); no bloquea la corrección de la `s`, pero sí queda como residual de la hoja de hechos.
- **Transversal:** ejecutar `process_case5_assets.py` cuando se quiera alinear los WebP de `assets/` con los RAW que ya cumplen en hoja.
