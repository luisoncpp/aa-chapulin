---
name: asset-audit
description: Audit a generated asset image against its existing fact sheet (docs/specs/case5-assets/<asset>.md, produced by the asset-facts skill). Verifies each PINTAR fact per-crop with a naming test, classifies defects as AUSENTE/CONTRADICE/MALFORMADO/DRIFT with severity, and writes the "Hallazgos de auditoría" section of the hoja. Use when the user asks to audit, compare or verify an existing image (webp/png) against its hoja de hechos, or to review a regenerated asset.
---

# Auditoría visual de un activo contra su hoja de hechos

Protocolo para comparar una imagen generada contra su hoja de hechos. Existe porque una auditoría sin método aprueba por presencia: ve lo que busca, firma el resto y pierde los objetos malformados ([[docs/lessons-learned/presence-is-not-legibility.md]]).

Regla raíz: **la fuente de verdad es la hoja, nunca la imagen.** Si la imagen parece mejor que la hoja, no se relaja la hoja: se registra el hallazgo y el revisor decide (los hallazgos se retiran citando la decisión, no se borran). La hoja la produce el skill `asset-facts`; si no existe, ejecutarlo primero.

## Paso 0 — Preparar el material

1. Leer la hoja completa (`docs/specs/case5-assets/<asset>.md`, base sin `_en`; las variantes se auditan juntas) y localizar la imagen en `assets/`.
2. Convertir la imagen a un formato inspeccionable si hace falta (p. ej. `ffmpeg -i in.webp out.png`) y anotar dimensiones. Los recortes y conversiones son temporales: eliminarlos al cerrar.

## Paso 1 — Un recorte por sustantivo

Verificar cada entrada F1 por separado, sobre un recorte ampliado de su zona, nunca en una sola pasada sobre la imagen completa. La pasada única aprueba por presencia y pierde la forma. Recortar también las zonas de las exclusiones (`AUSENTE`) para confirmar que no hay nada oculto ahí.

## Paso 2 — Prueba de nombrar

Para cada objeto `PINTAR`, mirar el recorte sin el contexto de la hoja y nombrarlo. Si la respuesta honesta no es el sustantivo del spec con su estado y pose («silla volcada hacia atrás», «tomo con el lomo hacia arriba»), no es un ✓: es un defecto de forma. **Presencia no es legibilidad** ([[docs/lessons-learned/presence-is-not-legibility.md]]).

## Paso 3 — Verificar F2/F3/F4/F6

- **F2 Texto:** buscar texto legible no pedido, inglés, marcas de agua; confirmar que las marcas diegéticas exigidas existan sin volverse rotulación.
- **F3 Cifras:** contar lo contable (ranuras, lomos, tomos) contra la aritmética de la hoja; confirmar que fechas/horas narradas no estén impresas.
- **F4 Contrato en pantalla:** cada elemento que el diálogo referencia mientras se ve el fondo debe estar pintado y legible como tal; el estado de trama debe ser el canónico de la hoja.
- **F6 Localización:** gemelos de idioma comparten composición; no debe haber texto para «resolver» la traducción.

## Paso 4 — Estilo (F5)

Comparar contra el literal de §23.0 pegado en la hoja: marcar la desviación si la hay, pero **la aceptación del estilo es decisión del revisor**. Registrar el hallazgo con el literal citado; si el revisor lo acepta, retirarlo con la regla del Paso 7.

## Paso 5 — Drift contra el conjunto de consistencia

Recorrer las entradas de «Consistencia (regenerar juntos)» de la hoja: para cada rasgo compartido (geometría de sala, diseño de objeto, contajes), comprobar que la imagen no contradice lo que describen los otros assets. La hoja recuerda que los otros assets **no son fuente de verdad**: se contrasta contra lo que la hoja fija del rasgo, no contra la otra imagen.

## Paso 6 — Taxonomía y severidad

Cada defecto confirmado se registra con tipo y severidad:

| Tipo | Significado | Ejemplo real (`bg_archivo_pasillo7`, 2026-09-19) |
|---|---|---|
| `AUSENTE` | Lo que debía pintarse no aparece | cartelito pericial junto al tomo |
| `CONTRADICE` | Aparece, pero contrario al spec | puerta de madera cerrada en vez de metálica gris entreabierta |
| `MALFORMADO` | Aparece, pero no se lee como el objeto: geometría incoherente, piezas que no ensamblan | silla volcada que es un enredo de tablas sin asiento ni respaldo |
| `DRIFT` | Contradice el conjunto de consistencia | tomo con la tapa hacia arriba vs `examine_tomo_caido` |

Severidad: **MAYOR** rompe la dependencia de un diálogo/hotspot o la identidad del activo; **MEDIO** incumple §23.1 sin romper un diálogo directamente; **MENOR** es matiz, orientación o lectura parcial.

## Paso 7 — Los ✓ se defienden con el mismo rigor

Un cumplido marcado sin recorte propio es presunción, no verificación: re-examinarlo igual que un defecto. Si el recorte lo desmiente (p. ej. la «silla volcada» que no tiene forma de silla), el ✓ se convierte en defecto y la línea de «Cumple» se corrige dejando la traza.

## Paso 8 — Escribir los hallazgos

Reemplazar o añadir la sección `## Hallazgos de auditoría <fecha>` de la hoja con:

1. **Veredicto** en la primera línea: cumple / no cumple, y en qué eje (contenido, estilo, exclusiones).
2. **Cumple** — lista de coincidencias con referencia al hecho que satisfacen.
3. **Defectos confirmados** — uno por línea, con severidad y tipo, la referencia al hecho (`F1`–`F6`) y al `archivo:línea` cuyo diálogo/uso se rompe.
4. **Correcciones de auditoría** — si un hallazgo o un ✓ de una pasada anterior cambió, dejar la traza (`~~tachado~~` + nota), no borrarlo.
5. **Recomendación** — si no cumple: lista numerada de correcciones para el prompt de regeneración, en el orden del conjunto de consistencia.

**Retirar hallazgos citando la decisión, no borrándolos.** Si el revisor contradice un hallazgo (p. ej. acepta el estilo pictórico contra un §23.0 literal de cel-shading), marcarlo `[x] RETIRADO POR REVISIÓN (<fecha>)` con la referencia del literal y la decisión; así la hoja conserva por qué ya no bloquea.

## Paso 9 — Cerrar

Eliminar los archivos temporales de recorte/conversión y verificar que la hoja quedó coherente: el veredicto, los defectos y la recomendación deben contar la misma historia que los ✓ corregidos.