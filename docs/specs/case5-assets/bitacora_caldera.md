# bitacora_caldera — hoja de hechos

Clase: `icon` / prueba del Acta. Espec: §23.0, §5.4, §9.2, §16.2, §17.1, §23.3, §23.5 y §24.D I45. Guion directo: investigación D4 `archivo_caldera`, entrega desde `hotspot_termografo`, `openingPresent` del día 4 y corrección posterior del informe forense. Catálogos: `src/state/Private/EvidenceCatalogCase5EsB.ts` y `src/state/Private/EvidenceCatalogCase5EnB.ts`. El icono compartido es `assets/bitacora_caldera.webp`; su vista detallada localizada es `assets/examine_termografo.webp` / `assets/examine_termografo_en.webp`.

## Mapa semántico y alcance

- Lugar y momento: sala de calderas del sótano del Archivo Judicial, investigación de la madrugada del 9 de diciembre; la prueba se entrega al examinar el termógrafo (`docs/specs/case-5-el-tomo-trece.md:2969-3013`; `src/case/case5/Private/archivo_caldera.ts:9-25`).
- Objeto: una bitácora de mantenimiento del Archivo acompañada por la tira semanal archivada del termógrafo. El icono identifica esa prueba documental; no es el fondo `bg_archivo_caldera` ni la vista ampliada de 960×540 (`docs/specs/case-5-el-tomo-trece.md:3013,4061,4088`; catálogos ES/EN).
- Hechos visibles que la vista detallada debe sostener: tubo reventado el 3 de diciembre en el muro del pasillo 7; caldera y dos secadores al máximo; registrador en el sótano y sonda remota en el pasillo 7; tira de 19 °C a 31 °C, plana a 31 °C hasta el domingo 5, con punto pericial a las 18:40 del día 4 (`docs/specs/case-5-el-tomo-trece.md:3013,4061`). El icono sólo necesita conservar esa identidad sin intentar imprimir todos los datos.
- Función narrativa: demuestra que el forense trabajó con una tabla de sala a 20 °C mientras el pasillo registró 31 °C; abre el giro 4 y permite rectificar el intervalo a 16:35–17:05 (`docs/specs/case-5-el-tomo-trece.md:3059-3072`; `src/case/case5/Private/trial_day4_success.ts:8-23`; equivalente EN).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Un objeto documental compuesto, centrado y recortado sobre fondo transparente: bitácora de mantenimiento con una tira de termógrafo adjunta o integrada como parte reconocible de la misma prueba (`docs/specs/case-5-el-tomo-trece.md:305,3013,4088`; catálogos ES/EN).
- [ ] `PINTAR` — La silueta debe leerse como registro de mantenimiento/termógrafo, no como una caldera completa, un fondo de sala, una gráfica didáctica ni el informe forense (`docs/specs/case-5-el-tomo-trece.md:3013,3070-3072,4088`; `src/state/Private/EvidenceCatalogCase5Helpers.ts:12-22`).
- [ ] `NO CONTRADECIR` — El icono representa el mismo objeto cuya vista detallada muestra la bitácora y la tira semanal; no cambiarlo por una tira aislada sin bitácora ni por el termógrafo del sótano sin la relación con el pasillo 7 (§5.4; §16.2; §23.3; catálogos ES/EN).
- [ ] `AUSENTE` — Personajes, la sala de calderas completa, flechas, círculos, halos, realces de respuesta, el cuerpo, el pasillo 7, el informe forense y cualquier texto editorial que explique la contradicción (`docs/specs/case-5-el-tomo-trece.md:3974-3980,4088`; §17.1).

### F2 Texto en imagen

- [ ] `NO CONTRADECIR` — El contrato del icono de Acta sólo exige objeto centrado, transparencia y contorno; no exige cadenas legibles dentro del icono (§23.5; `src/state/Private/EvidenceCatalogCase5Helpers.ts:12-22`).
- [ ] `AUSENTE` — No imprimir como solución `31 °C`, `20 °C`, `16:35–17:05`, «once grados», «veinticinco minutos» ni la conclusión de que el informe estaba mal; esos datos se leen en la vista detallada y el juicio (`docs/specs/case-5-el-tomo-trece.md:3013,3059-3072`; `src/case/case5/Private/trial_day4_success.ts:9-23`).
- [ ] `NO CONTRADECIR` — Si el diseño deja marcas legibles, no pueden contradecir la identidad de bitácora del 3 de diciembre, termógrafo semanal o sonda del pasillo 7; no introducir texto inglés en el icono compartido (§23.0, §23.5; catálogos ES/EN).

### F3 Cifras, fechas y estados

- [ ] `NO CONTRADECIR` — El tubo revienta el 3 de diciembre; la caldera y los dos secadores funcionan al máximo del 3 al 7 de diciembre (§4.2; §5.4; §24.D I45; catálogo ES/EN).
- [ ] `NO CONTRADECIR` — La tira semanal se archiva el domingo 5 y la sonda mide el aire del pasillo 7, aunque el registrador esté en el sótano (§4.1 P7; §16.2; §23.3).
- [ ] `NO CONTRADECIR` — La lectura probatoria es 31 °C sostenidos frente a la tabla forense de 20 °C; el icono no debe sugerir que ambas temperaturas pertenecen al mismo aparato o al sótano (§17.1; `src/case/case5/Private/archivo_caldera_hotspots.ts:24-38`).
- [ ] `NO CONTRADECIR` — El dato «cuatro días» describe la duración total de la calefacción extraordinaria en §17.1; no convertirlo en seis días ni adelantar una cronología distinta (§24.D I45; `src/case/case5/Private/trial_day4_success.ts:9-11`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — La investigación entrega `bitacora_caldera` al terminar `hotspot_termografo`, después de que el jugador oye que el tambor está abajo y la sonda está cableada al pasillo 7 (`src/case/case5/Private/archivo_caldera_hotspots.ts:24-38`; variante EN `archivo_caldera_hotspots_en.ts:24-38`).
- [ ] `NO CONTRADECIR` — La escena ya mostró una caldera apagada, dos secadores fuera de servicio y el cuarto enfriado el 9 de diciembre; el icono no debe hacer parecer que la caldera está encendida ahora (`src/case/case5/Private/archivo_caldera.ts:16-22`; `archivo_caldera_en.ts:16-22`).
- [ ] `NO CONTRADECIR` — La narración de investigación fija el ciclo semanal y la tira del sábado 4, retirada y archivada el domingo 5; el icono no debe sugerir un registro diario o una tira sin fecha (`src/case/case5/Private/archivo_caldera_hotspots.ts:24-38`; §23.3).
- [ ] `NO CONTRADECIR` — En el `openingPresent` del día 4, la prueba responde a «¿Con qué temperatura trabajó el forense?» / «What room temperature did the medical examiner assume?» con el contraste 31 °C frente a 20 °C; después la narración separa la placa de curvas y la actualización del informe (`docs/specs/case-5-el-tomo-trece.md:3059-3072`; `src/case/case5/Private/trial_day4.ts:26-30`; `trial_day4_en.ts:26-30`).
- [ ] `NO CONTRADECIR` — La misma investigación usa luego la prueba `maquina_escribir`; no añadir al icono los tres documentos, la Olivetti ni el defecto de la `s` (`src/case/case5/Private/archivo_caldera_hotspots.ts:39-50`; variante EN equivalente).

### F5 Estilo y prohibidos

- [ ] Repetir completo el contrato §23.0 en cualquier prompt: ilustración 2D HD estilo *Capcom Ace Attorney* de linaje GBA/Nintendo DS; cel-shading plano con terminador duro de dos tonos; contorno continuo carbón `#1A1A1A`; caricatura expresiva; registro mexicano setentero/Chespirito con papel, madera, polvo, latón envejecido y luz de tungsteno; sin fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, inglés no localizado ni rosa/magenta en primer plano (§23.0).
- [ ] `PINTAR` — Objeto centrado, reconocible como icono de Acta, con fondo transparente y contorno carbón; respetar el estilo ya establecido para `assets/<id>.webp` (§23.5).
- [ ] `AUSENTE` — No usar una composición de lámina explicativa, una fotografía pericial, fondo de sala, flechas, círculos, realces de color ni magenta de primer plano (§23.0, §23.4-§23.5).

### F6 Localización

- [ ] `GEMELOS DE IDIOMA` — El catálogo ES y el EN derivan el icono por defecto de `assets/bitacora_caldera.webp`; el icono es compartido y sólo el `detailedView` cambia a `examine_termografo.webp` / `_en.webp` (`src/state/Private/EvidenceCatalogCase5Helpers.ts:12-22`; `EvidenceCatalogCase5EsB.ts:71-76`; `EvidenceCatalogCase5EnB.ts:71-76`).
- [ ] `NO CONTRADECIR` — La composición, orientación, silueta y ausencia de texto deben ser idénticas en ambos idiomas; las cifras y cadenas localizadas pertenecen a la vista detallada, no a dos iconos distintos (§23.0, §23.3, §23.5).
- [ ] `NO CONTRADECIR` — El icono compartido no debe contener texto en inglés ni español añadido para resolver la presentación; si aparece una marca legible accidental, debe conservar la misma identidad en ambas variantes y no sustituir el contrato de la placa localizada (§23.0; §23.5).

## Consistencia (regenerar juntos)

- `examine_termografo` / `examine_termografo_en` — son las vistas detalladas de esta prueba: bitácora arriba, tira semanal abajo, sonda en pasillo 7, 19→31 °C, 31 °C sostenidos y punto de 18:40. Regenerar juntos con el icono si cambia la identidad del objeto; este activo no es fuente de verdad del otro (§23.3; catálogos ES/EN).
- `bg_archivo_caldera` — comparte la caldera, los dos secadores, el termógrafo mural, el cable hacia la sonda y la bitácora colgada. Regenerar juntos para conservar la identidad de la sala; este activo no es fuente de verdad del fondo (§23.1; `archivo_caldera.ts:9-18`).
- `plate_curva_enfriamiento` — comparte el argumento 31 °C del pasillo frente a 20 °C de la tabla forense, pero la placa explica curvas y el icono sólo identifica la evidencia. Regenerar juntos si cambian cifras o función probatoria; este activo no es fuente de verdad de la placa (§17.1; §23.4).
- `informe_forense_c5` — comparte la medición de las 18:40 y la corrección del intervalo a 16:35–17:05; el icono no debe atribuir autoría ni dibujar el informe. Regenerar juntos si cambia el alcance de la rectificación; este activo no es fuente de verdad del informe (§17.1; §24.D F6).
- `bitacora_caldera` en `EvidenceCatalogCase5EsB.ts` y `EvidenceCatalogCase5EnB.ts` — gemelos de catálogo que deben seguir apuntando al mismo icono, mientras sus vistas detalladas permanecen localizadas. Regenerar juntos; ninguno es fuente de verdad de la composición visual (`EvidenceCatalogCase5EsB.ts:71-76`; `EvidenceCatalogCase5EnB.ts:71-76`).

## Conflictos abiertos

- §23.1 describe en el fondo `bg_archivo_caldera` una línea de tinta que «sube y se aplana», mientras el relato de `hotspot_termografo` dice que la tira «sube y baja como una sierra»; §16.2, §23.3 y el juicio fijan para la vista detallada una subida de 19 °C a 31 °C que se mantiene plana hasta el día 5 (`docs/specs/case-5-el-tomo-trece.md:3993,3004-3006,3013,4061`; `archivo_caldera_hotspots.ts:33-35`). El icono debe conservar una identidad neutra de bitácora/termógrafo y no resolver esa forma en miniatura.
- El catálogo describe «caldera y dos secadores al máximo del 3 al 7», mientras la escena de investigación del 9 sólo muestra los aparatos apagados desde el martes y el cuarto enfriado (`EvidenceCatalogCase5EsB.ts:71-76`; `EvidenceCatalogCase5EnB.ts:71-76`; `archivo_caldera.ts:17-18`). Es un cambio de estado temporal, no una razón para pintar el icono con fuego o vapor; queda registrado para que el spec mantenga separadas la operación histórica y el estado de examen.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, conforme al protocolo `asset-facts` y a la solicitud; por tanto, no se confirma ningún defecto visual de la generación actual.
- La hoja se preparó sólo desde el spec de Caso 5, la dirección de arte de §23.0, los catálogos ES/EN de `bitacora_caldera` y los guiones ES/EN de `archivo_caldera` y del juicio del día 4. No se ejecutaron tests, lint, auditorías, procesamiento ni verificación de assets.
