# La pose en escena en re-visitas y fin de diálogos debe gobernarse por `idlePose` de la trama, no inferirse del último diálogo

Cuando se implementa el retorno a una locación previamente visitada (o el fin de un diálogo de examen o conversación), el motor necesita saber qué sprite de personaje mostrar de pie en la escena.

## La trampa de inferir la pose del último diálogo

La tentación inicial fue registrar la última pose reproducida en la locación (`locationCharPoses[location]`), o buscar la última pose en las líneas de la introducción (`inferSceneDefaultPose`).

Esto causa anomalías visuales graves:
1. **El abogado o ayudante en escena:** Muy frecuentemente, la última línea de un diálogo de examen, de conversación o de introducción la pronuncia Don Ramón (la defensa) o El Chapulín. Al terminar el diálogo o al salir y regresar a la locación, el sprite en pantalla correspondía a Don Ramón o Chapulín, haciendo que el personaje del jugador pareciera estar de pie al fondo de la habitación.
2. **Poses emocionales congeladas:** Si el último parlamento del testigo fue una reacción cómica o exagerada (`florinda_angry`, `chapatin_bolsa`, `clotilde_flustered`), esa pose permanecía congelada en la escena al regresar en lugar de su pose neutra de descanso.
3. **Escenas de crimen vacías:** En lugares sin testigo (como `bodega_radio` en el Caso 3 Día 3), cualquier línea hablada por la defensa dejaba un sprite en una escena que debía estar completamente vacía.

## El patrón efectivo: parámetro explícito `idlePose`

La presencia y postura del personaje disponible para hablar en cada locación es una propiedad semántica del **estado resuelto de la trama** que no puede deducirse automáticamente del texto de los diálogos:

1. **Parámetro `idlePose` en la locación:** Cada `InvestigationScene` declara explícitamente `idlePose?: PoseName | null` (por ejemplo, `'florinda_idle'`, `'jirafales_idle'`, o `null` para escenas vacías).
2. **Intros condicionales:** Si una locación tiene transiciones de trama gobernadas por flags (`SceneIntro[]`), cada intro condicional puede sobreescribir `idlePose` para reflejar el cambio de testigo.
3. **Restauración consistente:** Al terminar cualquier secuencia de diálogo (intro, hotspot o charla) o al entrar a una locación ya visitada, el motor ejecuta `restoreSceneIdlePose()` que evalúa `resolveSceneIdlePose(scene, state)` y aplica `VisualEffects.setPose` o `VisualEffects.hideCharacter` si es `null`.
4. **Desacoplamiento de la reproducción de líneas:** `DialogueFlow` reproduce las poses habladas durante el texto, pero no sobreescribe permanentemente la pose de reposo de la locación.

Ver también [[investigation-scene-intro-lifecycle]] y [[investigation-dialogue-completion-lifecycle]].
