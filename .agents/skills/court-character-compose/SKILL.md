---
name: court-character-compose
description: Componer personajes (abogados, fiscal, testigos, público) sobre un fondo de corte ya aprobado, como bg_gallery.webp, sin repintarlo. Se generan recortes RGBA aislados, se escalan con la geometría del mueble que los tapa, se pegan sobre una copia del fondo limpio y se restaura el mueble píxel a píxel. Usar cuando el usuario pida añadir, mover o cambiar personajes en una lámina de corte, o crear una variante "con personajes" de un fondo.
---

# Componer personajes en la corte

Receta extraída de `assets/bg_gallery_characters.webp` (Don Ramón y el Chapulín tras la mesa de defensa, Super Sam tras la de fiscalía). Costó seis iteraciones; cada regla de abajo corrige un fallo que el usuario tuvo que señalar. El script de referencia es `tools/compose_gallery_characters.py` y la bitácora está en `docs/specs/common/bg_gallery.md` (§ Variante con personajes).

## Reglas duras

1. **Nunca repintar el fondo.** Cada edición con el generador degrada toda la imagen. El generador sólo produce **recortes RGBA aislados**; el fondo se toca únicamente con código.
2. **Resultado = copia del fondo limpio + figuras + mueble restaurado desde el limpio.** Fuera de las columnas del mueble no debe cambiar ni un píxel. Guardar como WebP **sin pérdida** (`lossless=True, method=6`).
3. **No sobrescribir** nada sin respaldo: el archivo anterior va a `tools/masters/<nombre>_<motivo>_<fecha>.webp`.
4. Documentar cada recomposición en la hoja del fondo (`docs/specs/common/<fondo>.md`).

## 1. Recortes

- **Cuerpo entero, de pie.** Un recorte de medio cuerpo termina en un corte plano que acaba asomando sobre el canto. Con cuerpo entero, el mueble tapa las piernas y no hay borde que esconder.
- **Pose Ace Attorney:** perfil lateral, mirando a la mesa contraria a través del pasillo. La defensa (izquierda) mira a la derecha y la fiscalía (derecha) mira a la izquierda. Nada de frente a cámara ni de espaldas hacia el juez.
- Identidad desde `assets/<personaje>_idle.webp` (y el recorte anterior aprobado, si lo hay). Fondo transparente; se valida con `getchannel('A').getbbox()` y con las esquinas en alfa 0.
- **Mirar la dirección antes de voltear.** No hace falta voltear si ya mira bien, y voltear invierte letras y símbolos (el `$` de Super Sam).
- Hay recortes ya aprobados en `tools/masters/bg_gallery_characters_{donramon,chapulin,supersam}_standing.png`. Reutilizarlos antes de generar otros.

## 2. Escala y posición: salen del mueble, no del ojo

La cubierta de una mesa o baranda mide **0.95 m** (la cadera de un adulto). En la columna `x` donde está el personaje:

```
ppm    = altura_mueble_px(x) / 0.95          # píxeles por metro a esa profundidad
pies_y = canto_trasero_y(x) + altura_mueble_px(x)
alto   = estatura_m * ppm                    # la bbox del recorte, antenas incluidas
```

Así la cadera cae en la cubierta, el tamaño coincide con el del público y nadie parece sentado. Estaturas usadas: Don Ramón 1.78, Chapulín 1.78 con antenas, Super Sam 1.88.

La altura del mueble se interpola linealmente entre la esquina trasera cercana a cámara y la lejana. Para la galería: mesa de defensa con esquina (193, 483.5) y altura 132 px, esquina lejana (347, 428) y altura 102 px; fiscalía en espejo (1183, 487) → (1029, 429). Para un mueble nuevo (estrado, podio, baranda) se miden estos cuatro datos (ver §5) y se crea otro `Desk`.

- **Orden de dibujo:** primero el más lejano. En la mesa de defensa, más cerca de cámara quiere decir `x` menor.
- **El recorte entero debe quedar dentro de las columnas del mueble** (`x_min..x_max`). Si se sale, asoman las piernas junto al mueble.

## 3. Máscara del mueble: recta ajustada con antialias

Se restaura desde el limpio todo lo que queda por debajo del **borde superior de la línea de tinta** del canto trasero. Lo que falló:

| Intento | Síntoma |
|---|---|
| Polígono trazado a mano "un poco por fuera del canto" | Franja de pared entre la figura y el canto |
| Umbral fijo de oscuridad por columna | La pared encima del canto también es oscura (marrón o burdeos, suma RGB de 70 a 110) y se restauraban hasta 4 px de pared: el mismo hueco |
| Tomar el píxel más oscuro por columna | Picos de 1 px donde la tinta es más gruesa |

Lo que funciona (`back_edge` en el script): por columna, se busca el píxel más oscuro junto al dorado y se sube sólo mientras la suma RGB siga a menos de 30 del mínimo. Luego se ajusta **una recta** con `np.polyfit`, se descartan los residuos de más de 1 px y se ajusta otra vez. La máscara es `clip(y - recta(x) + 0.5, 0, 1)`: la fila que cruza la recta queda mezclada.

## 4. Verificación obligatoria

- Contar píxeles cambiados fuera de las columnas de los muebles: tiene que dar **0**.
- Ampliar ×8 con `Image.NEAREST` cada canto con figura, por ejemplo `crop((205,420,345,490))`. Buscar franjas de pared, picos, tela que atraviesa el canto o esquinas donde asoma una capa.
- Ver la imagen completa: las cabezas deben tener el tamaño de las del público y las cinturas deben quedar en la cubierta.
- `python verify_assets.py`.
- Si la variante va a usarse en el juego, pasar después el skill `asset-audit`.

## 5. Medir un mueble nuevo

El canto trasero suele tener un filo dorado. Se detecta su primera fila por columna y luego se miran los píxeles de encima:

```python
gold = (r > 170) & (g > 120) & (b < 110) & (r - b > 90)
for x in range(x0, x1, 15):
    ys = [y for y in range(y_lo, y_hi) if gold[y, x]]
```

Hay que limitar `x` e `y` al mueble, porque también son doradas las borlas de las cortinas, la baranda de la galería y los apliques. Donde la detección salte (el canto corto lejano es fino), se sigue la recta de los puntos buenos. La altura del mueble en cada esquina va de la fila del canto hasta la base visible de esa arista vertical.
