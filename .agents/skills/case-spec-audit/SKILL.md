---
name: case-spec-audit
description: Audit or re-audit a case spec (docs/specs/case-*.md) using the lens-log protocol: declare the lens before auditing, run read lenses / simulation passes / relational passes without repeating, convert every defect into an invariant plus a structural test, and stop only when a new lens yields zero. Use when the user asks to review, re-review, audit, or check a case spec, or after generating or fixing a case spec.
---

# Auditoría de specs de caso

Protocolo para auditar `docs/specs/case-*.md`. Existe porque diez pasadas sobre un mismo spec hallaron cada una errores distintos y ninguna convergió. La causa y el remedio están documentados en:

- [[docs/lessons-learned/case-spec-fact-ledger.md]] — el rendimiento de una pasada sigue la lente, no la calidad del documento
- [[docs/lessons-learned/ledger-columns-follow-case-risk.md]] — el ledger se construye con columnas del riesgo real del misterio
- [[docs/lessons-learned/spec-audit-lens-log.md]] — bitácora de lentes, simulación y pruebas de relaciones

## Paso 0 — Contexto obligatorio antes de tocar el spec

1. Leer [[docs/live/glossary.md]], [[docs/GUIDELINES.md]] y el spec completo del caso (nada de auditar por muestras: los defectos viven en las secciones que nadie leyó).
2. Leer las tres lecciones de arriba y el test de consistencia del caso si existe (`tests/spec/Case*Spec*.test.ts`).
3. Identificar qué vistas duplican hechos: cronología, tabla de pruebas (§5), guion, tabla de descarte, auditoría de cabos sueltos, Libro de hechos (§24), briefs de arte. Cada vista duplicada es una superficie de deriva.

## Paso 1 — Declarar la lente ANTES de auditar

El spec lleva una **bitácora de auditoría** (§0.0). Añade una fila con la lente de esta pasada y la fecha. Reglas duras:

- **Repetir una lente no cuenta como auditoría.** Si la bitácora ya tiene la lente que ibas a correr, elige otra.
- Si el spec no tiene bitácora, créala con el histórico reconstruible y la regla de parada.

Menú de lentes, en el orden en que suelen correrse:

| Lente | Qué caza |
|---|---|
| 1. Conteos y referencias cruzadas | Totales de pruebas/testimonios/locaciones que no cuadran con el guion; refs §X inexistentes |
| 2. Calendario y cronología | Días de la semana imposibles, años transcurridos incompatibles (p. ej. "nueve" vs "once" para el mismo lapso) |
| 3. Física del crimen | Cronología cuerpo a cuerpo: espera, tamaños, medios de transporte, presupuesto temporal de cada tramo |
| 4. Justicia de fallos | Zonas señuelo que responden bien la pregunta; líneas de fallo falsas para alguna respuesta errónea disponible |
| 5. Ledger y columnas | El Libro de hechos existe, tiene columnas para los riesgos de ESTE misterio, y cada persona esperada o ausente tiene hora y conducta |
| 6. Contrato de motor | Bloques del guion mapeados a campos reales del motor (`introDialogue`, `requiredUpdateStage`, `unlockedBy`); ver contra el fuente, no contra la memoria |
| 7. **Relaciones entre vistas** | Ranura declarada ↔ rol real en el guion; declaración ↔ dato que su propia contradicción revela; hora de llegada ↔ hora del hallazgo |
| 8. **Simulación** | Minuto a minuto la conducta de cada agente (incluidos esperados y ausentes) y cada presentación ejecutada contra la declaración que la recibe |

Las lentes 7 y 8 son las que rinden después de la quinta pasada. Las lentes 1–4 ya convertidas en pruebas no vuelven a correr salvo que el guion cambie.

## Paso 2 — Ejecutar la pasada

- **Lentes de lectura (1–6):** verificar en contra del guion y del código, nunca de memoria. Un dato restatado en dos vistas se busca en ambas.
- **Pasada de simulación (8):** para cada persona con motivo de estar en la escena, pregunta "¿qué hace esta persona en el minuto X?" aunque el guion no lo mencione. Para cada contradicción, ejecuta mentalmente: el jugador presenta la prueba → ¿qué revela exactamente el diálogo de éxito → y esa revelación sigue siendo revelación si el testigo ya la dijo antes?
- **Pasada de cobertura del ledger:** no confiar en secciones que declaran "no quedan puntos abiertos". Auditar qué falta en la lista, no sólo si la lista es cierta.
- Registrar cada hallazgo con referencia de línea y el invariante que lo mataría.

## Paso 3 — Pensar el radio de explosión antes de arreglar

Para cada arreglo, antes de editarlo:

1. Listar todos los sitios que restaten el hecho corregido (grep del dato viejo, no confiar en la lista mental) y corregirlos todos — el grep suele encontrar más de lo esperado.
2. Verificar que el arreglo no rompe: pruebas congeladas (las que exigen cadenas concretas), conteos de invariables (p. ej. número de `[ACTUALIZAR-PERFIL]`), declaraciones testimoniales que fijan horas o cantidades.
3. Preferir el arreglo que conserva timestamps/declaraciones ya fijadas por testimonios en el guion aunque haya que cambiar el medio (p. ej. montacargas en vez de escalera) al arreglo que re-escribe la cronología.
4. Ante dos arreglos equivalentes, elegir el que permite convertir el defecto en invariante estructural.

## Paso 4 — Convertir cada hallazgo en invariante + prueba relacional

- Añadir el invariante al Libro de hechos (§24.D o equivalente) con el error que evita.
- Añadir una **prueba relacional** al test de consistencia del caso: parsear el documento y verificar correspondencias (tabla ↔ guion, declaración ↔ revelación, hora ↔ hora, presupuesto ↔ tramo). 
- Prohibido "arreglar" con un `not.toContain` de la cadena exacta: la paráfrasis la esquiva. Si lo que falla es una relación, la prueba verifica la relación; si es un valor, el valor en su vista fuente y las vistas derivadas marcadas como tales.
- Mantener el conjunto: correr el test del spec, la suite completa y el typecheck después de cada lote de arreglos.

## Paso 5 — Cierre

- La pasada termina cuando su lente agotó su rendimiento; se registra el resultado en la bitácora (§0.0).
- **Criterio de parada:** una pasada con lente nueva que rinde cero hallazgos. Reportar eso, no "el spec está bien".
- Si quedan hallazgos sin aplicar, listarlos con severidad y proponer el lote de arreglos; no aplicarlos sin confirmación si cambian hechos narrativos aprobados.
