# Case 5 — activos nuevos necesarios

Registro de activos que el guion o el catálogo necesitan y que §23 no declara (o que un activo existente no puede servir). Alimentado por el skill [[.agents/skills/asset-facts/SKILL.md|asset-facts]] (Paso 4). Resolver cada entrada es trabajo del spec: aquí sólo se documenta el hueco con su evidencia.

Formato de entrada: fecha · activo propuesto · evidencia (`archivo:línea`) · sección de guion que lo necesita · estado de trama que exige el cambio.

---

## 2026-09-18 · `bg_archivo_pasillo7_d4.webp` (pasillo 7 antes del crimen)

- **Evidencia:** el relato de §10.1 (`docs/specs/case-5-el-tomo-trece.md:550-565`, implementado en `src/case/case5/Private/celda_talks.ts:12-28` y su variante `_en`) necesita `bg_archivo_pasillo7_d4` para el recuerdo del **4 de diciembre, 16:44** — dieciocho minutos **antes** del homicidio, que §24.A fija a las 17:02. El fondo `bg_archivo_pasillo7` pinta la **escena del crimen ya descubierta**: silueta de gis, tomo caído junto al cuerpo, cartelito de perito y silla volcada.
- **Estado de trama que lo exige:** en el recuerdo, Casimiro está **vivo**, sentado en la mesa de consulta con Don Ramón y dos custodios; no hay cadáver, silueta, tomo en el piso ni marcaje pericial (el hallazgo es a las 17:35, A4).
- **Estado:** el fondo ya existe en `assets/bg_archivo_pasillo7_d4.webp` y el guion ES/EN lo usa para todo el bloque `[RELATO]`; conservar la separación entre el estado previo y la escena del crimen.
- **Riesgo si no se crea:** el jugador ve una conversación entre vivos superpuesta a la escena de su muerte; además la fiscalía podría explotarlo como contradicción visual en D1-T1.
