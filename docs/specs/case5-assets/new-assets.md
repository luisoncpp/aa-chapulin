# Case 5 — activos nuevos necesarios

Registro de activos que el guion o el catálogo necesitan y que §23 no declara (o que un activo existente no puede servir). Alimentado por el skill [[.agents/skills/asset-facts/SKILL.md|asset-facts]] (Paso 4). Resolver cada entrada es trabajo del spec: aquí sólo se documenta el hueco con su evidencia.

Formato de entrada: fecha · activo propuesto · evidencia (`archivo:línea`) · sección de guion que lo necesita · estado de trama que exige el cambio.

---

## 2026-09-18 · `bg_archivo_pasillo7_d4.webp` (pasillo 7 antes del crimen)

- **Evidencia:** el relato de §10.1 (`docs/specs/case-5-el-tomo-trece.md:550-565`, implementado en `src/case/case5/Private/celda_talks.ts:12-28` y su variante `_en`) estampa `bg_archivo_pasillo7` para el recuerdo del **4 de diciembre, 16:44** — dieciocho minutos **antes** del homicidio, que §24.A fija a las 17:02. Pero el contrato de arte de ese fondo (§23.1) pinta la **escena del crimen ya descubierta**: silueta de gis, tomo caído junto al cuerpo, cartelito de perito y silla volcada.
- **Estado de trama que lo exige:** en el recuerdo, Casimiro está **vivo**, sentado en la mesa de consulta con Don Ramón y dos custodios; no hay cadáver, silueta, tomo en el piso ni marcaje pericial (el hallazgo es a las 17:35, A4).
- **Propuesta:** segundo fondo con el mismo contrato espacial de §23.1 (mismo piso de madera, estanterías, mesa de roble con lámpara verde, estante de 24 ranuras, puerta metálica y reja) pero **estado del 4 de diciembre por la tarde**: sin silueta, sin tomo caído, sin cartelito, silla en su sitio. Regenerar junto con el lote de consistencia del pasillo 7 (`bg_archivo_pasillo7`, `plate_foto_pericial`, `examine_estante_consulta`, `examine_tomo_caido`, icono `tomo_caido`) para que sala y props compartan un solo diseño. El cambio de bg en el guion (`celda_talks.ts` y `celda_talks_en.ts`) es de una línea por bloque `[RELATO]`.
- **Riesgo si no se crea:** el jugador ve una conversación entre vivos superpuesta a la escena de su muerte; además la fiscalía podría explotarlo como contradicción visual en D1-T1.
