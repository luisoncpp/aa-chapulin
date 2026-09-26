# Auditar un spec largo: bitácora de lentes, simulación y pruebas de relaciones

**Fecha:** 2026-09-17 · Caso 5 (~4,100 líneas, diez+ pasadas previas que siempre hallaban errores nuevos)

## Qué es contra-intuitivo

Diez pasadas sobre el Caso 5 hallaron, cada una, defectos que las anteriores no vieron — y las últimas dos (dos agentes distintos, mismas reglas) produjeron **13 hallazgos sin un solo solapamiento**. La lectura obvia —"el documento es incalculable"— era falsa: las clases de defecto estaban determinadas por el método de cada pasada, no por la calidad del texto. Cuatro mecanismos concretos:

1. **La lente selecciona la clase de defecto, y nadie llevaba registro de qué lentes ya corrieron.** Cada pasada creía re-auditar el documento cuando en realidad estrenaba lente. Sin bitácora, "otra auditoría" es teatro: no se sabe qué cubre ni qué repite.
2. **Los defectos supervivientes exigen simular, no leer.** El hueco del actuario (entra 17:22, el cuerpo se descubre 17:35, nadie pregunta qué hace él entre medias) sólo aparece preguntándose "¿qué hace esta persona ahora?". La declaración de Genoveva que ya contenía el dato que su contradicción "revela" es perfecta línea por línea; sólo se rompe al simular la acción de presentar la prueba contra la declaración. Un paseo lineal no las encuentra.
3. **Las pruebas de cadenas se esquivan con paráfrasis.** Una ronda previa prohibió `'esa máquina no ha salido...'` y el error sobrevivió como `"no *había* salido"` — otra conjugación, mismo exceso probatorio. La prueba congelaba la cadena, no la verdad. Igual con los arreglos: corregir el guion sin actualizar la tabla de ranuras de §5 **creó** la deriva que la siguiente pasada encontró. El conteo de defectos no baja; se traslada.
4. **Las secciones que declaran estar cerradas anclan al revisor.** "No quedan puntos abiertos" en §24.E suprimió la pregunta "¿qué *falta* en esta lista?" — y los dos mayores huecos (conducta del actuario, presupuesto pre-crimen) estaban exactamente en lo que la lista no enumeraba.

## El protocolo que sí convergió

1. **Bitácora de lentes** al frente del spec: una línea por pasada con su lente (conteos → calendario → espacial → justicia → ledger → contrato de motor → relaciones entre vistas → simulación de agentes). Repetir lente ≈ rendimiento cero; estrenarla es donde están los hallazgos.
2. **Al menos una pasada de simulación**: recorrer minuto a minuto la conducta de cada agente (incluidos los *esperados y ausentes*) y ejecutar cada presentación contra la declaración que la recibe.
3. **Desconfiar de las secciones que declaran cierre**: auditar la *cobertura* del ledger (¿qué persona, tramo o conducta falta en la lista?), no sólo su exactitud.
4. **Convertir cada defecto en invariante + prueba relacional**: parsear el documento y verificar correspondencias (ranura de §5 ↔ rol real en el guion; declaración ↔ dato que su contradicción revela; hora de llegada ↔ hora del hallazgo; presupuesto ↔ todo tramo de la reconstrucción). Las pruebas de `toContain` se esquivan; las de relación, no.
5. **Criterio de parada explícito**: una pasada con lente nueva que rinde cero. Sin criterio, "diez pasadas" no significa nada.

## Para el próximo caso

Escribir la bitácora de lentes y el esqueleto de pruebas relacionales **antes** de la primera revisión, no después: la primera pasada con lente y test definidos rinde más que la quinta sin ellos.

## Relacionados

- [[docs/lessons-learned/case-spec-fact-ledger.md]] — la lente determina el rendimiento; el ledger con columnas por riesgo
- [[docs/lessons-learned/ledger-columns-follow-case-risk.md]] — reutilizar el método, no las columnas
- El protocolo ya no se audita con pruebas documento-contra-documento ([[tests/spec/]] se eliminó por eso): la evidencia vive en las suites de contrato de caso, [[tests/case/ScriptIntegrity.test.ts]] y [[tests/state/CatalogIntegrity.test.ts]]
