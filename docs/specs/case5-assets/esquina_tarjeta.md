# esquina_tarjeta — hoja de hechos

Clase: `icon` con `detailedView`. Espec: §23.0, §23.3, §23.5 y §10.1. Guion: celda D1, D1-T2 `followUp`, clímax E4/E5. Variantes de detalle: `examine_esquina_tarjeta.webp` y `examine_esquina_tarjeta_en.webp`.

## Mapa semántico

- Fragmento de una tarjeta original del cedulario, encontrado en la mano derecha cerrada de Casimiro Lengua el 4 de diciembre de 1982.
- Es la esquina inferior derecha faltante de la tarjeta de domicilio de Don Ramón; conserva cuatro renglones cortos del domicilio de la calle del Espanto y el defecto de la `s` minúscula.
- El Court Record debe mostrar un icono del mismo fragmento; al abrirlo, el catálogo ES/EN muestra la macro pericial correspondiente.
- El fragmento demuestra primero que el papel fue colocado liso en la mano y después debe encajar físicamente con `examine_ficha_domicilio`.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — El icono representa únicamente el fragmento de cartulina crema, no una escena del Archivo, una mano completa ni la tarjeta completa; el catálogo lo identifica como fragmento hallado en la mano derecha de la víctima (catálogo ES `EvidenceCatalogCase5EsA.ts:25-30`; catálogo EN `EvidenceCatalogCase5EnA.ts:25-30`).
- [ ] `PINTAR` — El fragmento tiene material de cartulina crema, mecanografiado, y corresponde a la esquina inferior derecha faltante de la ficha de domicilio (§10.1, línea 107; §23.3, línea 4047; `EvidenceCatalogCase5EsB.ts:78-83`).
- [ ] `PINTAR` — La vista detallada es una macro sobre fondo gris neutro, con regla testigo de 5 cm, fragmento de 3.1 × 2.4 cm y borde roto recto y limpio (§23.3, línea 4047; catálogo ES `EvidenceCatalogCase5EsA.ts:29-30`).
- [ ] `PINTAR` — El texto visible de la placa detallada ocupa cuatro renglones cortos, nunca uno solo: `...cindad de` / `la calle del` / `Espanto 8,` / `viv. 72.` (§10.1, línea 617; §23.3, línea 4047).
- [ ] `PINTAR` — La geometría del borde debe permitir que la pieza encaje con la esquina inferior derecha ausente de `examine_ficha_domicilio` en E4 (`climax_stage4.ts:40-45`; EN `climax_stage4_en.ts:40-45`).
- [ ] `AUSENTE` — No añadir mano, sobre, pinzas, mesa, tarjeta completa, fondo de archivo, arrugas, pliegues o manchas de sudor a la macro; esos elementos pertenecen a la narración o a la comparación posterior (`celda_talks.ts:74-82`; `climax_stage4.ts:41-45`; §23.3, línea 4047).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — En ES, la placa detallada conserva exactamente `...cindad de` / `la calle del` / `Espanto 8,` / `viv. 72.` (§10.1, línea 617; §23.3, línea 4047; `celda_talks.ts:76`).
- [ ] `PINTAR` — La única `s` del fragmento, la de `Espanto`, queda media línea por debajo de su renglón (§23.3, línea 4047; §24.D I24/I31).
- [ ] `AUSENTE` — No imprimir la explicación de que el corte fue deliberado, la palabra «s» como etiqueta, flechas, círculos, realces ni una respuesta de examen; la defensa explica esos hechos en el guion (§10.1, línea 617; §23.0; §23.3, línea 4047).
- [ ] `TEXTO EXACTO` — En EN, conservar el domicilio visible como `"...city of Calle del Espanto 8, apt. 72."`, manteniendo al menos una `s` minúscula visible y su caída tipográfica (`EvidenceCatalogCase5EnA.ts:25-30`; `celda_talks_en.ts:74-82`; §23.3, línea 4068).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La regla testigo representa 5 cm y el fragmento mide 3.1 × 2.4 cm en la descripción canónica (§23.3, línea 4047; catálogo ES `EvidenceCatalogCase5EsA.ts:29-30`).
- [ ] `NO CONTRADECIR` — El domicilio es calle del Espanto número 8, vivienda/apartamento 72; no usar el antiguo número 4, corregido por la pasada de canon de 2026-09-18 (§10.1, línea 617; §24.D I24; §24, línea 4255).
- [ ] `NO CONTRADECIR` — El fragmento fue colocado en la mano a las 17:02 y se utiliza en E4; ninguna hora debe imprimirse en el icono ni en la macro (§4.2, línea 224; §24.C F9; §23.3, línea 4047).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En la celda, la fotografía se presenta como una mano cerrada sobre un pedazo de cartulina; el diálogo lo identifica como esquina rota con letras de máquina y lee el domicilio incompleto (`celda_talks.ts:74-82`; EN `celda_talks_en.ts:74-82`).
- [ ] `PINTAR` — D1-T2 usa `esquina_tarjeta` como `followUp` para la pregunta «¿Cómo llegó ese papel a la mano de la víctima?» (`trial_day1_t2.ts:118-124`; EN `trial_day1_t2_en.ts:118-124`).
- [ ] `PINTAR` — La placa debe sostener que el papel está liso, sin arrugas, con borde recto y limpio; la defensa concluye que alguien abrió la mano, puso el cartón y la cerró otra vez (`trial_day1_success.ts:65-78`; EN equivalente; §24.C F9).
- [ ] `PINTAR` — En E4, el fragmento debe empatar con la tarjeta completa y completar los cuatro renglones del domicilio; el encaje es una afirmación visible del secretario (`climax_stage4.ts:40-45`; EN `climax_stage4_en.ts:40-45`).
- [ ] `NO CONTRADECIR` — El fragmento fue arrancado de una tarjeta del cedulario bajo custodia de Berrondo y plantado en la mano; por sí solo no identifica al mecanógrafo ni al homicida (§24.C F9-F10; `climax_stage4.ts:47-59`).
- [ ] `PINTAR` — En E5, el secretario vuelve a mecanografiar los cuatro renglones y todas las `s` quedan media línea por debajo; el defecto debe seguir siendo legible en la pieza (`climax_stage5.ts:26-31`; EN `climax_stage5_en.ts:26-31`).

### F5 Estilo

- [ ] `PINTAR` — Repetir completo el contrato de §23.0 en el prompt: ilustración 2D HD de linaje Capcom Ace Attorney GBA/NDS; cel-shading de dos tonos planos con terminador duro; contorno carbón `#1A1A1A`; registro mexicano setentero/Chespirito; papel, madera y polvo; prohibidos fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua y texto inglés salvo la variante EN (§23.0).
- [ ] `AUSENTE` — No introducir rosa ni magenta en primer plano; `#FF00FF` queda reservado al cromatizado del pipeline (§23.0; `docs/architecture/asset-pipeline.md`, sección de Case 5).

### F6 Localización

- [ ] `PINTAR` — ES y EN son gemelas de composición: mismo fondo gris, escala, cartulina, dimensiones, borde, cuatro renglones y defecto de la `s`; sólo cambia el texto legible (§23.3, reglas de variantes y localización).
- [ ] `PINTAR` — La placa EN mantiene el defecto tipográfico y al menos una `s` minúscula visible; si la traducción lo elimina, se reescribe la traducción y no la lámina (§23.3, línea 4068; §24.D I31).
- [ ] `NO CONTRADECIR` — El icono base es común al catálogo ES/EN (`esquina_tarjeta`), mientras que el `detailedView.imageAsset` sí cambia a `examine_esquina_tarjeta_en.webp` en EN (`EvidenceCatalogCase5EsA.ts:25-30`; `EvidenceCatalogCase5EnA.ts:25-30`).

## Consistencia (regenerar juntos)

- `examine_ficha_domicilio` — comparte la tarjeta, el borde de la esquina inferior derecha, material, escala, domicilio, cuatro renglones y caída de la `s`. Regenerar juntos; este activo no es fuente de verdad del otro.
- `examine_nota_renta` — comparte la firma tipográfica de la `s` minúscula caída en documentos mecanografiados. Regenerar juntos; este activo no es fuente de verdad del otro.
- `examine_expediente_serie` — comparte la caída de la `s` en la tarjeta de julio y la estética de documentación pericial. Regenerar juntos; este activo no es fuente de verdad del otro.
- `examine_maquina` — comparte el defecto mecánico que explica la `s` caída; la máquina no autoriza a inventar detalles del fragmento. Regenerar juntos; este activo no es fuente de verdad del otro.
- `esquina_tarjeta` / `examine_esquina_tarjeta_en` — gemelas de idioma del mismo Court Record: composición y marcas físicas idénticas, texto localizado sólo donde la placa lo permite. Regenerar juntas; ninguna variante es fuente de verdad de la otra.

## Conflictos abiertos

- §23.3 y la descripción de la macro fijan 3.1 × 2.4 cm, pero el `followUp` dice «Tres centímetros por dos y medio» (`trial_day1_success.ts:67`; EN equivalente). No resolver aquí; la medida de la lámina sigue siendo la del spec.
- §23.5 exige el icono nuevo `esquina_tarjeta`, pero no especifica una composición separada para `assets/esquina_tarjeta.webp`; el catálogo lo obtiene por defecto desde ese nombre y usa la macro como `detailedView` (`EvidenceCatalogCase5Helpers.ts:8-20`; `EvidenceCatalogCase5EsA.ts:25-30`). No inventar un contrato de icono distinto: mantener la identidad del fragmento y dejar la decisión de encuadre al spec/pipeline.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen por protocolo. No se confirma ningún defecto visual de la generación actual.
- El spec registra como corregido el domicilio de Don Ramón de vivienda 4 a vivienda 72; cualquier regeneración debe imprimir `viv. 72.` en ES y `apt. 72.` en EN (§24, línea 4255; §23.3, líneas 4047 y 4068).
