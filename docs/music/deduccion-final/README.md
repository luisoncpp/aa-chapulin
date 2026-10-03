# Todo encaja (versión 2)

Música de la [Deducción final](../../specs/deduccion-final.md), compuesta el 2 de octubre de 2026. Sustituye a la primera versión, que el usuario descartó porque le faltaban tensión y sensación de que algo se acerca. En el reproductor de la pantalla inicial aparece como **Deducción final — Todo encaja** (`deduccion_final`).

## Qué se tomó de la referencia

El MIDI de *Revisualization — Synaptic Resonance* ([referencias](../../references/deduccion-final/)) no construye la tensión con la melodía. La construye con tres recursos, y esta pieza los usa todos:

1. **Bajo pedal.** La tónica suena en corcheas durante compases enteros; la armonía cambia por encima sin que el bajo ceda.
2. **Arpegio que sube.** Una célula de semicorcheas escala dos octavas en dos compases y luego cae.
3. **Escalera de acordes.** Acordes en ritmo 3-3-3-3-4 que suben un grado por compás sobre el pedal, hasta un corte en seco.

Las notas, la tonalidad y la armonía son originales.

## Forma

128 BPM, 4/4, 32 compases, 60 segundos por vuelta. Si menor con el Sol# dórico.

| Compases | Qué pasa |
| --- | --- |
| 1–8 | Pedal de Si en octavas. El piano sube dos octavas, cae y cierra sobre La y luego Sol, sin dejar que el bajo se mueva. |
| 9–16 | El pedal se desplaza: Sol, Mi, Sol, Fa#. El piano deja huecos y el pulso responde en ellos. Corte de batería antes del regreso. |
| 17–24 | Vuelve la subida con tríadas de sierra, charles en semicorcheas y una línea larga de pulso. El último compás sube hasta Mi6. |
| 25–30 | La escalera: Si menor, Do# menor/Si, Re/Si, Mi/Si, La/Si, Fa#/Si, en golpes 3-3-3-3-4. El piano dobla la nota superior, el pulso sube nota a nota y la caja se va densificando. |
| 31–32 | Fa#7 martillado en corcheas con redoble de caja, Fa#7(b9) con toms y un cuarto de compás de silencio. El bucle vuelve con platillo sobre Si menor. |

La llegada de la escalera a la dominante y el silencio que la sigue son el "algo se acerca". La vuelta al principio funciona como llegada y el razonamiento sigue.

## Instrumentos

| Canal | Instrumento | Papel |
| --- | --- | --- |
| `bass` | `chip_bass` | Pedal en octavas; en la escalera golpea con los acordes. |
| `lead` | `piano` | Célula que sube y cae; en la escalera dobla la nota superior una octava arriba. |
| `chords` | `chip_pad` | Pulso de sierra en corcheas (el papel del *saw synthesizer* de la referencia) y acordes de la escalera. |
| `counter` | `pulse_lead_12` | Respuestas en la sección B, línea larga en A' y ascenso nota a nota en la escalera. |

La pista lleva `reverb: 1`: toda la mezcla pasa por la reverb del motor a su nivel completo, como `truth` y los careos. Se baja en `compose.py`.

## Editar y comprobar

El archivo [[src/audio/Private/tracks/DeductionTrack.ts]] se genera. Las frases están en [compose.py](../../../tools/music/deduccion_final/compose.py):

```powershell
python tools/music/deduccion_final/compose.py
npm run build
```

Render con los instrumentos del motor (servidor `chapulin-dev`): `http://localhost:4173/tools/music/render_tracker?track=deduccion_final`, sin `.html` porque `serve` quita la extensión y pierde el parámetro. Medición del 2 de octubre, con reverb: pico −8,0 dBFS, RMS −27,0 dBFS, ninguna muestra saturada, cada bloque de 32 pasos se calcula en menos de un segundo.

`validacion-ataques.json` es la proyección para el validador de la skill. Ese validador no conoce los toms `T` y `M`, que el motor sí admite; sin ellos, pasa. Los semitonos que quedan entre piano y acompañamiento son intencionales: el Fa# como séptima mayor sobre el pedal de Sol y la novena menor del corte final.

La primera versión (partitura, MIDI, WAV y generadores) está en [version-gpt/](version-gpt/). Ya no la usa nada y se puede borrar.
