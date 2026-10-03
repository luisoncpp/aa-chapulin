---
id: final_deduction
label: Deducción final
color: "#ca3546"
icon: bolt
facades:
  - index.ts
descriptionShort: Razonamiento privado con ramas y progreso restaurable
architectureDoc: docs/architecture/final-deduction.md
---

La sesión bilingüe posee hipótesis, foco e historial sin mutar el juicio ni su inventario. La demo le añade utilidades y guardados aislados; `GameDeductionView` conecta la misma sesión con el cuadro de diálogo y los guardados del juicio. Three.js se carga bajo demanda, y los controles semánticos de HTML siguen alineados con las placas del espacio.
