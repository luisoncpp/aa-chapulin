# Todo encaja

Primera composición original para la [Deducción final](../../specs/deduccion-final.md), creada el 1 de octubre de 2026. Su arreglo procedimental ya está incorporado al catálogo del juego como `deduccion_final` y se puede escuchar en el reproductor de la pantalla inicial bajo "Deducción final — Todo encaja". La mecánica y la revisión por escucha quedan pendientes.

La pieza busca la sensación que confirmó el usuario: pensamiento veloz, concentración, conexiones entre pistas y certeza creciente hasta "ya lo tengo". El piano dibuja figuras rápidas, el bajo mantiene el avance y una voz de pulso responde en algunos huecos. La segunda sección deja más espacio entre notas. El regreso amplía el registro antes de preparar una nueva vuelta.

Se estudió el MIDI y las capturas de **Revisualization — Synaptic Resonance**, de Noriyuki Iwadare, con arreglo de Yan Chun Chan. De esa referencia se toman el pulso y las funciones instrumentales. La melodía y el arreglo de esta propuesta son nuevos. No se escuchó el audio del video ni se comprobó una equivalencia nota por nota de las referencias.

## Escucha y archivos editables

| Archivo | Contenido |
| --- | --- |
| [Escucha completa](todo-encaja-escucha.wav) | Una vuelta seguida del cierre. 69,5 segundos. |
| [Bucle](todo-encaja-loop.wav) | 32 compases, exactamente 60 segundos, con las colas de las notas conservadas en la vuelta. |
| [Revelación](todo-encaja-revelacion.wav) | Cuatro compases y cola de sonido. 9,5 segundos. |
| [MIDI completo](todo-encaja.mid) | Bucle y cierre, con seis pistas instrumentales separadas y una pista de metadatos. |
| [MIDI del bucle](todo-encaja-loop.mid) | Solo los 32 compases repetibles. |
| [MIDI del cierre](todo-encaja-revelacion.mid) | Solo los cuatro compases de llegada. |
| [Partitura de eventos](partitura.json) | Notas, posiciones, duraciones, intensidades, voces y armonía. Fuente editable sin pérdida de duración. |

El audio es WAV estéreo de 44.100 Hz y 16 bits, renderizado con instrumentos sintetizados para esta maqueta. Los programas General MIDI del archivo editable permiten abrirlo en un secuenciador, pero su sonido dependerá del banco de instrumentos utilizado. El WAV fija la mezcla de esta propuesta.

## Forma y llegada

128 BPM, compás 4/4, centro tonal en Mi menor. Cada bloque dura quince segundos.

| Tiempo | Función |
| --- | --- |
| 0:00–0:15 | Motivo principal y avance continuo. |
| 0:15–0:30 | Figuras más espaciadas, acordes de piano eléctrico y respuestas del sintetizador. |
| 0:30–0:45 | Regreso del motivo con variaciones y registro más alto. |
| 0:45–1:00 | Convergencia, retorno de las figuras rápidas y dominante que conduce al inicio. |
| 1:00–1:09,5 en la escucha | Preparación y resolución separada. |

El cierre comienza con un compás de preparación sobre Si séptima. A los **1,875 segundos del archivo de revelación**, o **1:01,875 de la escucha completa**, aparece Mi mayor: el Sol sostenido aporta el cambio de tensión a claridad. Después el ritmo se retira y la frase descansa. Ese es el punto musical de "ya lo tengo".

El título, la tonalidad, las notas y esta resolución son decisiones de composición propuestas. No son requisitos previamente aprobados por el usuario. La interpretación emocional y el balance necesitan revisión mediante escucha real.

## Reproducción del render y verificación

### Arreglo para el juego

El juego conserva el bucle de 32 compases y usa piano para el motivo, piano eléctrico para el apoyo, bajo triangular y respuestas de pulso. El pad sostenido de la maqueta se omite para ajustarse a las cuatro voces melódicas del motor. Las duraciones se cuantizan a semicorcheas mediante `HOLD`; los acentos bajan el acompañamiento frente al piano. Por esos cambios y por los timbres del motor, el arreglo del reproductor tiene una mezcla distinta del WAV de seis voces.

La fuente de las notas sigue siendo `score.py`. Para regenerar [[src/audio/Private/tracks/DeductionTrack.ts]] se ejecuta `python tools/music/deduccion_final/export_tracker.py`. El exportador genera además `validacion-tracker.json`, con ataques y silencios en lugar de `HOLD` para el validador antiguo. Las pruebas del catálogo comprueban las duraciones sostenidas y los acentos reales.

La futura mecánica puede seleccionar `bgm: 'deduccion_final'` y conservarlo durante las preguntas. El cierre separado de la maqueta sigue disponible para diseñar la transición de conclusión; no se incluye en el bucle del catálogo.

Desde la raíz del repositorio:

```powershell
python tools/music/deduccion_final/render.py
python .agents/skills/chiptune-music-composer/scripts/validate_track.py docs/music/deduccion-final/validacion-ataques.json
```

El render usa Python, numpy, scipy y soundfile. La partitura escrita está en [score.py](../../../tools/music/deduccion_final/score.py); los timbres en [synth.py](../../../tools/music/deduccion_final/synth.py). El generador exporta las tres mezclas con una ganancia común y comprueba notas fuera de rango, duraciones y solapamientos de una misma nota en una misma voz.

La validación de la skill pasó con 512 pasos. `validacion-ataques.json` es una proyección de ataques para su validador antiguo, no una representación completa de las duraciones ni de las seis voces. `partitura.json` y los MIDI conservan esos datos.

El [informe de audio](verificacion-audio.json) registra duración, pico, nivel RMS, continuidad del bucle y ausencia de muestras no finitas. El pico máximo de las mezclas es −1,5 dBFS. Estas comprobaciones verifican los archivos; no sustituyen la escucha ni confirman por sí solas la emoción que produce la pieza.
