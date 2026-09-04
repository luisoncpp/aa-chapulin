# Los intros de investigación deben gobernarse por flags, no por un set de locaciones visitadas

Cuando se modela el comportamiento estilo Ace Attorney de "no repetir el diálogo de entrada al volver a una locación", la tentación inmediata es agregar una lista `visitedLocations: LocationId[]`.

## La trampa de la lista booleana

En Ace Attorney, una locación no se visita una sola vez en el sentido narrativo:
- El jugador entra por primera vez y ve la presentación de la escena o el personaje.
- Si sale y regresa sin novedades, la escena no repite el diálogo: muestra el cuarto, el personaje de pie y los controles activos.
- Pero si ocurre un **evento clave** (se descubre una pista en otra locación, se interroga a un testigo, se fija un flag de progreso), al regresar a esa misma locación se dispara un **nuevo diálogo de entrada** (por ejemplo, el abogado regresa con una nueva hipótesis o encuentra a alguien distinto).

Si el motor sólo conoce un booleano `visitedLocations.includes(loc)`, queda atrapado: para soportar nuevos diálogos tendría que "desvisitar" locaciones artificialmente, lo que destruye el historial, o crear un subsistema paralelo para re-visitas.

## El patrón efectivo: resolución de intro por flags

En lugar de registrar qué locación se visitó, el motor registra qué **evento de intro** ya se reprodujo en `gameState.flags` (`flags.intro_<id>`):

1. **Intros simples:** El ID por defecto es `${caseId}_d${trialDay}_${location}`. Al reproducirse se marca en `flags` y no vuelve a salir.
2. **Intros condicionales:** El guión puede definir `SceneIntro[]` con `condition(flags)`. Al entrar a la locación, el motor busca el primer intro cuya condición se cumpla y que no haya sido reproducido todavía.
3. **Re-visitas:** Si no hay ningún intro pendiente aplicable, el motor no reproduce diálogo, limpia el cuadro de texto, restaura la pose del personaje en escena y deja los controles de investigación listos.

## Ventajas

- **Persistencia automática:** `flags` ya se serializa y se guarda en `SaveData` (`localStorage`). No requiere migrar el esquema de guardado.
- **Transición de días limpia:** Al cambiar de día de juicio o de caso, las claves por defecto cambian de forma natural (`_d2_`, etc.) sin necesidad de resetear tablas externas.
- **Extensibilidad:** Añadir escenas de re-visita después de eventos en casos futuros sólo requiere declarar el intro condicional en el guión, sin tocar el controlador de investigación.

Ver también [[trial-gating-is-inventory-only]] e [[investigation-dialogue-completion-lifecycle]].
