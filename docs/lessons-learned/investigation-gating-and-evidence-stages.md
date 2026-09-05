# Gating de investigación y estados de ficha: tres trampas del motor

Tres hechos del motor que no se ven leyendo un guion de caso y que invalidan diseños que parecen correctos sobre el papel. Descubiertos auditando el spec del Caso 4 contra el código, antes de implementarlo.

## 1. El botón de juicio no se recalcula al terminar el intro de una escena

`InvestigationController.checkInvestigationProgress()` solo se invoca al completar un **hotspot** ([[src/engine/Private/InvestigationController.ts]], fin de `dialogue` de hotspot) o un **tema de conversación** (fin de `dialogue` de `TalkOption`). El `onComplete` del intro de escena únicamente restaura la pose. El otro disparador es la carga de partida ([[src/engine/Private/EnginePersistence.ts]]).

Consecuencia: si la última prueba requerida de una jornada se entrega con `addEvidence` en el intro de la escena final, el jugador queda mirando una escena sin nada que pulsar y con el botón de juicio deshabilitado. No es un bloqueo permanente —cualquier otra acción lo recalcula— pero sí parece uno.

**Regla:** ninguna prueba de `requiredEvidence` se entrega en un intro. La última escena obligatoria de cada jornada necesita al menos un tema que cierre la entrega.

## 2. `unlockedByTalk` + `unlockedByHotspot` juntos son OR, no AND

En `isTalkOptionUnlocked` ([[src/engine/Private/TalkOptionUnlock.ts]]), cuando un `TalkOption` declara los dos campos, basta cumplir **uno** para que el tema aparezca. Es contraintuitivo: la lectura natural de dos requisitos declarados es la conjunción.

**Regla:** un requisito, `unlockedByTalk` o `unlockedByHotspot`. Dos o más requisitos, el predicado `condition(flags)` sobre las banderas `talk_<id>` y `examined_<id>` que escribe [[src/state/Private/GameStateManager.ts]].

## 3. El estadio de una ficha es un contador lineal, no un mapa de estados

`advanceEvidenceStage` incrementa un entero y `resolveEvidenceDescription` indexa `updates[stage-1]` ([[src/state/Private/EvidenceProgress.ts]]). No existe "actualizar a la versión X": cada `updateEvidence` avanza una posición, y una vez alcanzado `updates.length` los siguientes se descartan **en silencio**, sin error ni aviso.

Dos consecuencias para el diseño narrativo:

- Una actualización **opcional** (recompensa por preguntar algo que no todos preguntan) desplaza los textos de todas las actualizaciones posteriores. Dos jugadores acaban viendo descripciones distintas en el mismo punto de la historia. Si una ficha evoluciona, su calendario de actualizaciones debe ser determinista.
- El número de `[ACTUALIZAR]` que recibe una ficha a lo largo del caso tiene que coincidir con el número de entradas de su `updates[]`. Contarlos es parte de revisar un spec, no de implementarlo.

Relacionado: [[docs/lessons-learned/court-record-description-updates.md]], [[docs/lessons-learned/trial-gating-is-inventory-only.md]].
