# Presencia no es legibilidad

Auditar un activo con un checklist de presencia/ausencia deja pasar los objetos **malformados**: aparecen donde deben, con el material y el color correctos, pero no se leen como lo que el spec nombra. Caso real (`bg_archivo_pasillo7`, 2026-09-19): el hecho «silla volcada hacia atrás» se marcó ✓ porque había un objeto de madera volcado junto a la mesa; el recorte de detalle mostró un enredo de tablas sin asiento, sin respaldo y con uniones imposibles — nadie lo nombra «silla». El diálogo del hotspot referenciaba esa silla; el cumplimiento falso escondía un defecto que rompe el contrato en pantalla.

## Qué aprendí

- **Presencia ≠ legibilidad.** Que el píxel exista en la zona correcta no verifica el hecho; el hecho dice «pinta una silla volcada», y sólo se verifica si la imagen *se lee* como una silla volcada.
- **La pasada única sobre la imagen completa aprueba por presencia.** Cada sustantivo de F1 exige su propio recorte ampliado; la lente de una pasada ve lo que busca y firma el resto.
- **Prueba de nombrar.** Mirar el recorte sin el contexto de la hoja y nombrarlo. Si la respuesta honesta no es el sustantivo del spec con su estado y pose, es defecto de forma (`MALFORMADO`), aunque esté pintado.
- **Los cumplidos exigen el mismo rigor que los defectos.** Un ✓ sin recorte propio es presunción; en esta auditoría los defectos mayores (mueble, cartelito, legajo) se detectaron porque se buscaban, y la silla pasó porque se dio por vista.
- **Tipar los hallazgos** (`AUSENTE|CONTRADICE|MALFORMADO|DRIFT`) obliga a decidir si el objeto falta, está mal, está roto o drifta del conjunto de consistencia; la forma malformada no entra en ninguna de las tres primeras categorías por defecto y se pierde si la taxonomía no la nombra.
- **Retirar hallazgos por decisión del revisor citando el literal del spec**, no borrándolos: la hoja debe conservar por qué un hallazgo ya no bloquea (ejemplo: el estilo pictórico aceptado contra un §23.0 literal de cel-shading).

## Aplica a

- Auditorías de assets generados contra hojas de hechos (skill `asset-audit`, F1/F4).
- Cualquier checklist visual con casillas de presencia: contenido, props, poses, composición.
- Revisión de sprites (un objeto en la mano que no se lee como el objeto) y de fondos compartidos entre activos.