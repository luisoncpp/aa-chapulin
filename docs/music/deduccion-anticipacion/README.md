# A un paso de la verdad

Segunda composición para la futura Deducción final, añadida el 2 de octubre de 2026. Se puede escuchar en el reproductor de la pantalla inicial como **Deducción final — A un paso de la verdad**, con el identificador `deduccion_anticipacion`.

El usuario pidió más tensión y anticipación después de escuchar la primera versión de "Todo encaja", que después se recompuso. Esta propuesta sostiene un pedal de La bajo armonías de Re menor, reserva los ascensos para el desarrollo y termina cada bloque con una pregunta armónica pendiente. El bucle conserva esa espera hasta que la futura mecánica dispare su conclusión.

## Composición

128 BPM, 4/4, 32 compases, 60 segundos por vuelta. La melodía y el arreglo son originales. Las referencias de Revisualization conservadas en [[docs/specs/deduccion-final.md]] aportan el papel de las figuras rápidas y el pulso de avance.

| Tiempo | Arreglo |
| --- | --- |
| 0–15 s | Motor de piano eléctrico y pedal de La. Entra una pregunta de sintetizador de pulso; Re menor sobre La demora la llegada. |
| 15–30 s | El motivo sube por secuencias sobre Sol menor, Si bemol y Mi semidisminuido. La séptima corta el ascenso antes de resolver. |
| 30–45 s | Piano eléctrico y melodía ganan registro. Un bajo cromático prepara la mayor tensión, seguida de suspensión y dominante. |
| 45–60 s | Se retiran caja y cuerdas durante dos compases. Regresan la pregunta y el motor; La séptima con novena menor desemboca en la dominante y vuelve a Re menor sobre La. |

El bajo triangular mantiene ataques cortos con `HOLD`. El piano eléctrico ocupa el registro medio; la voz de pulso plantea frases con pausas. Las cuerdas sostienen acordes discretos. Los acentos crecen durante las tres primeras secciones y retroceden en la cuarta, sin aumentar indefinidamente durante la lectura.

## Integración y comprobación

La fuente editable es [[src/audio/Private/tracks/AnticipationTrack.ts]]. Usa las cuatro voces y la batería del motor existente. El catálogo y los títulos de ambos idiomas la incluyen. Puede seleccionarse con `bgm: 'deduccion_anticipacion'`; la mecánica de deducción y su cierre musical siguen pendientes de implementación.

Las pruebas compartidas de deducción comprueban disponibilidad, duración de lectura, notas, acordes, sostenidos, acentos y batería. La revisión emocional corresponde a la escucha del usuario.

## Escucha y validación

[Escuchar el bucle de un minuto](./a-un-paso-de-la-verdad-loop.wav). WAV estéreo, 44.1 kHz, PCM de 16 bits, renderizado con los instrumentos y la mezcla del juego. El archivo sirve de muestra; el juego continúa sintetizando la pista.

[[tools/music/render_tracker.html]] permite regenerar la muestra después de `npm run build`, sirviendo el repositorio por HTTP y abriendo `/tools/music/render_tracker.html?track=deduccion_anticipacion`. Cada segmento incluye 32 pasos previos para conservar los sostenidos y las colas. [[./verificacion-audio.json]] registra el render: pico −11.04 dBFS, RMS −27.78 dBFS, cero muestras saturadas o no finitas. La tercera sección alcanza −26.68 dBFS y la cuarta retrocede a −28.81 dBFS.

Compilación y 770 pruebas aprobadas. El validador de la skill aprobó los 512 pasos; [[./validacion-ataques.json]] representa los ataques, sustituyendo `HOLD` por silencio para ese validador antiguo. La reproducción se comprobó en el catálogo de la pantalla inicial. No se añadió un flujo: la canción usa el reproductor y el campo `bgm` existentes.

`fallow audit --gate all` señaló tres grupos de patrones repetidos en esta partitura. Son repeticiones deliberadas del pedal, los acordes sostenidos y la batería, mantenidas como filas de compases editables. La auditoría también señaló complejidad y duplicación en cambios previos ajenos a esta canción; no se modificaron esos archivos.
