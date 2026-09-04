# El gate del juicio sólo mira el inventario, no las locaciones visitadas

`GameStateManager.checkTrialReadiness()` es puro conteo de pruebas:

```ts
const hasRequiredClues = this.requiredEvidence.every(/*owned*/ (id) => this.hasEvidence(id));
```

No existe ningún registro de "locaciones visitadas" que participe en la decisión. En cuanto la última prueba de `requiredEvidence` entra al acta, `#btn-inv-trial` se enciende — sin importar dónde esté parado el jugador ni cuántas escenas le falten.

## La consecuencia contraintuitiva

**El orden de las locaciones no gatea nada. Lo único que gatea es dónde caen las pruebas requeridas.**

Es fácil escribir un día de investigación donde todas las pruebas se juntan en la locación 2 y la locación 3 es "sólo diálogo" (una revelación, un plante, un peritaje). Se lee perfecto en el documento de diseño y se rompe en el juego: el jugador ve el botón encendido, entra al juicio, y el guión del juicio cita escenas que nunca vio.

Los diálogos sin prueba física son justamente los más valiosos y los más frágiles: son donde viven los plantes que el clímax necesita.

## La regla

**La última locación de cada día debe entregar al menos una prueba de `requiredEvidence`.**

Los Casos 1 y 2 la cumplen por accidente feliz, no por diseño explícito — de ahí que sea fácil no notarla al escribir un caso nuevo:

| Día | Última locación | Prueba que la ancla |
|---|---|---|
| Caso 2, día 1 | `restaurante` | 2 de las 6 de `CASE2_DAY1_EVIDENCE` |
| Caso 2, día 2 | `casa_clotilde` | 2 de las 6 de `CASE2_DAY2_EVIDENCE` (`molde_cera` anclado al diálogo de Clotilde) |

### El corolario intra-escena (Hotspots vs Diálogos)

No basta con que la última locación entregue pruebas: **dentro de esa locación, la prueba final debe entregarse en el diálogo clave, no en un hotspot libre.**

Si una escena final tiene 2 hotspots que entregan prueba física (`hotspot_frasco` y `hotspot_basura`) y un diálogo con la revelación importante (`about_peterete_visit`, "Sobre el comprador misterioso") sin prueba, el jugador puede examinar los dos hotspots, completar el inventario y ver `#btn-inv-trial` encenderse antes de abrir el menú de hablar.

La solución sin tocar el motor es atar la entrega de la prueba final al diálogo narrativo:
- `about_peterete_visit`: Clotilde revela que el comprador rondó las veladoras y la defensa encuentra `molde_cera`.
- `hotspot_basura`: queda como observación de ambientación.

Así, es físicamente imposible alcanzar las 6 pruebas sin haber escuchado la revelación de Clotilde.

## Cómo arreglarlo sin tocar el motor

Dos maniobras, ambas más baratas que añadir un flag al gate:

1. **Mover una prueba** a la locación final (en el Caso 3, el libreto de Jirafales pasó de la clínica del día 2 a la plaza del día 1 — que además es donde el personaje ya está parado).
2. **Reordenar las locaciones** para que la escena sin prueba quede en medio (en el Caso 3, el día 3 visita el Centro de Detención antes que la Delegación, porque el peritaje del doctor no produce prueba y la Delegación produce dos).

La segunda suele mejorar el ritmo además de arreglar el gate: la escena de puro diálogo funciona mejor como puente entre dos hallazgos que como cierre.

## Cómo detectarlo antes de implementar

Un test de guión lo atrapa sin ejecutar el juego: para cada día, cruzar `requiredEvidence` contra los `addEvidence` de la última locación de la cadena de `unlockLocation` y exigir intersección no vacía. Es más barato que descubrirlo jugando, porque el síntoma —un plante que el jugador no vio— sólo aparece dos horas después, en el clímax.

Ver también [[investigation-dialogue-completion-lifecycle]] y [[climax-court-record-reopening]].

