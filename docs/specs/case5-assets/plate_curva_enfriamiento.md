# plate_curva_enfriamiento — hoja de hechos

Clase: `plate`. Espec: §23.0 y §23.4 (`plate_curva_enfriamiento.webp`). Guion directo: lámina explicativa L7 del juicio del día 4 / GIRO 4. Activo compartido por ES y EN; no existe variante `_en`.

## Mapa semántico y alcance

- Es una **lámina explicativa didáctica** a pantalla completa, no una fotografía pericial ni un `detailedView` interactivo (§7.1–§7.2; §23.4).
- Explica el contraste entre el modelo forense de una sala a **20 °C** y la temperatura real del pasillo 7, **31 °C**, causada por la caldera y los dos secadores (§17.1; `trial_day4_success.ts:9-18`; equivalente EN).
- La curva inferior representa el modelo usado por el perito; la superior representa el enfriamiento más lento del pasillo 7 (§17.1; `trial_day4_success.ts:16-18`).
- La medición común es la tomada a las **18:40**; la relación visual entre los puntos permite narrar que la curva de 31 °C desplaza la muerte **veinticinco minutos antes** (§17.1; `trial_day4_success.ts:18`; equivalente EN).
- El activo no representa la sala, el termógrafo físico ni la tira original: es una abstracción sobre fondo crema con trazo de manual escolar mexicano de los setenta (§23.4; `examine_termografo.md`).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Lámina didáctica plana sobre fondo crema de papel, con dos curvas descendentes superpuestas sobre ejes de horas y grados (§23.4; §23.4 L7).
- [ ] `PINTAR` — Curva inferior asociada a un termómetro rotulado **20 °C**, correspondiente a la tabla usada por el perito (§23.4 L7; §17.1; `trial_day4_success.ts:16`).
- [ ] `PINTAR` — Curva superior asociada a un termómetro rotulado **31 °C**, correspondiente al pasillo 7 esa tarde (§23.4 L7; §17.1; `trial_day4_success.ts:17`).
- [ ] `PINTAR` — Una línea horizontal de temperatura cruza ambas curvas (§23.4 L7).
- [ ] `PINTAR` — La línea horizontal marca dos puntos separados sobre el eje temporal, uno por cada curva (§23.4 L7); la separación debe permitir la explicación posterior de veinticinco minutos (§17.1; `trial_day4_success.ts:18`).
- [ ] `AUSENTE` — Personas, sala de calderas, pasillo, cuerpo, termógrafo físico, tira de papel, mesa, flechas, círculos o realces de color; la lámina explica y no señala una respuesta ni entrega una prueba (§7.2 reglas 3–4; §23.4; §23.0).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — Las dos referencias de temperatura deben poder leerse como **20 °C** y **31 °C**, junto a sus termómetros/curvas (§23.4 L7).
- [ ] `NO CONTRADECIR` — Los ejes deben comunicar horas y grados; no añadir una leyenda narrativa, una conclusión jurídica o texto editorial no pedido (§23.4; `trial_day4_success.ts:15-18`).
- [ ] `AUSENTE` — No imprimir dentro de la placa «18:40», «25 minutos antes», `16:35–17:05`, «tabla de una sala» ni la frase «la hora deja de decidir nada»; esas relaciones las dice el diálogo (`NARRADOR` y `DEFENSA`) y el texto posterior (§17.1; `trial_day4_success.ts:14-23`; §24 F6).

### F3 Cifras, fechas y horas

- [ ] `TEXTO EXACTO` — Mantener las cifras **20 °C** y **31 °C** sin invertir las curvas (§23.4 L7; §24 F6).
- [ ] `NO CONTRADECIR` — La lectura común se toma a las 18:40 y la diferencia explicada es de veinticinco minutos; son datos narrativos que no necesitan imprimirse como etiquetas de la gráfica (§17.1; `trial_day4_success.ts:18`).
- [ ] `NO CONTRADECIR` — La corrección narrativa resultante es una ventana forense de **16:35–17:05**, frente a la ventana normal de **17:00–17:30**; la placa no debe dibujar una tercera ventana ni sugerir que la hora atribuye autoría (§17.1; §24 F6; `trial_day4_success.ts:21-23`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — L7 aparece después de presentar `bitacora_caldera` en el `openingPresent` del día 4; la defensa ya declaró que el pasillo registró 31 °C sostenidos y que el forense trabajó con una tabla de 20 °C (§17.1; `trial_day4.ts:26-29`; `trial_day4_success.ts:8-13`; equivalentes EN).
- [ ] `PINTAR` — Mientras la placa permanece en pantalla, el `NARRADOR` explica que la curva inferior es la de 20 °C y que la superior es la del pasillo 7 a 31 °C; la explicación física del enfriamiento la da antes la `DEFENSA` sobre la lámina de `examine_termografo` (§17.1; `trial_day4_success.ts:16-18`; equivalente EN).
- [ ] `NO CONTRADECIR` — La curva de 31 °C debe mostrar enfriamiento más lento, no más rápido, y la misma temperatura medida a las 18:40 debe quedar desplazada veinticinco minutos antes en esa curva (§17.1; `trial_day4_success.ts:17-18`; equivalente EN).
- [ ] `NO CONTRADECIR` — La placa no debe convertirse en una prueba, no debe entregar `addEvidence` y no debe funcionar como examen interactivo (§7.2 reglas 3–4; §17.1).
- [ ] `NO CONTRADECIR` — Al terminar L7, el guion vuelve al fondo de la sala de juicio y anuncia la corrección del intervalo a 16:35–17:05; la imagen no debe anticipar esa línea de diálogo (§17.1; `trial_day4_success.ts:19-23`).

### F5 Estilo y prohibidos

- [ ] Repetir completo el contrato §23.0 en cualquier prompt: ilustración 2D HD estilo *Capcom Ace Attorney* de linaje GBA/DS; cel-shading plano con terminador duro; contorno continuo carbón `#1A1A1A`; caricatura expresiva; registro mexicano setentero/Chespirito; papel, madera, polvo y luz de tungsteno; sin fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, inglés no localizado ni rosa/magenta en primer plano (§23.0).
- [ ] `PINTAR` — Usar el estilo específico de lámina explicativa: fondo crema de papel, ilustración plana y trazo de manual escolar mexicano de los setenta (§23.4).
- [ ] `AUSENTE` — No usar aspecto de fotografía pericial, textura fotográfica, flechas, círculos, halos ni realces de color (§23.0; §23.4; §7.2 regla 3).

### F6 Localización

- [ ] `PINTAR` — ES y EN usan el mismo `plate_curva_enfriamiento.webp`; las láminas explicativas no se duplican para inglés salvo que §23.4 exija texto legible localizado (§23.4; `trial_day4_success.ts` y `trial_day4_success_en.ts`).
- [ ] `NO CONTRADECIR` — Composición, curvas, puntos, ejes y cifras `20 °C`/`31 °C` permanecen idénticos en ambos idiomas; la narración ES/EN explica el mismo argumento (§23.4; scripts ES/EN).
- [ ] `AUSENTE` — No añadir texto en inglés dentro de la imagen sólo para acompañar el diálogo EN; tampoco introducir texto español adicional en la placa (§23.0; §23.4).

## Consistencia (regenerar juntos)

- `examine_termografo` / `examine_termografo_en` — comparte el contraste probatorio de 31 °C del pasillo 7 frente a 20 °C de la tabla forense, pero el examen muestra la tira original y esta placa muestra la explicación abstracta. **Regenerar juntos si cambian las cifras o el argumento; este activo no es fuente de verdad del otro** (§17.1; §23.3–§23.4).
- `bg_archivo_pasillo7` — comparte la identidad térmica del pasillo 7 y su estado de calor por los secadores; el fondo es una sala en escena del crimen y esta placa no debe copiar su composición. **Regenerar juntos si cambia el hecho de 31 °C o el estado térmico; este activo no es fuente de verdad del otro** (§4.1 P7; §23.1; ficha de `bg_archivo_pasillo7`).
- `bg_archivo_caldera` — comparte la caldera, los dos secadores y la causa de la lectura sostenida del pasillo 7; el fondo muestra maquinaria y esta placa sólo el modelo explicativo. **Regenerar juntos si cambia la causalidad térmica; este activo no es fuente de verdad del otro** (§16.2; §23.1; ficha de `bg_archivo_caldera`).
- `informe_forense_c5` — comparte la medición de las 18:40 y la corrección de la ventana a 16:35–17:05; el informe/progreso de evidencia no es fuente de verdad del dibujo de curvas. **Regenerar juntos si cambian las cifras o el argumento; este activo no es fuente de verdad del otro** (§17.1; §24 F6; catálogos ES/EN).

## Conflictos abiertos

- No se detecta una discrepancia interna que cambie la composición de esta placa. El spec fija de forma consistente dos curvas descendentes, 20 °C frente a 31 °C, una línea horizontal y dos puntos separados (§23.4 L7), y el guion fija la interpretación de la curva superior como enfriamiento más lento y veinticinco minutos de desplazamiento (§17.1; `trial_day4_success.ts:15-18`).
- La forma exacta de la tira del termógrafo físico tiene una discrepancia documentada entre «sube y se aplana» y «sube y baja como una sierra» en el activo relacionado `examine_termografo`; no trasladar esa ambigüedad a esta gráfica didáctica, cuya descripción propia no pide una sierra (ficha de `examine_termografo`; §23.4 L7).

## Hallazgos de auditoría 2026-09-19

**Veredicto: NO CUMPLE** en contenido (F1 exclusiones) y texto (F2 leyenda narrativa, F6 texto español adicional); estilo (F5) cumple en lo esencial con matices. Inspección real: `assets/plate_curva_enfriamiento.webp` convertido a PNG (960×540) y revisado a pantalla completa más 8 recortes ampliados (gráfica completa, curva superior + termómetros, curva inferior + eje, banda de la línea horizontal, caja de leyenda, título, esquinas y franja inferior).

### Cumple

- **F1** — Lámina didáctica plana con **dos curvas descendentes** sobre ejes de horas y grados: eje X «TIEMPO (horas)» 0–8, eje Y «TEMPERATURA (°C)» 10–40; los ejes comunican horas y grados (recortes c_lower20, c_lineband).
- **F1/F3** — Curva inferior azul con termómetro rotulado **20 °C** y curva superior roja con termómetro rotulado **31 °C**; cifras legibles y curvas **sin invertir** (la roja permanece arriba y se aplana cerca de 20 mientras la azul sigue bajando = enfriamiento más lento, coherente con F4) (recortes c_upper31, c_lower20).
- **F1** — Línea horizontal discontinua a 20 °C cruza ambas curvas y marca **dos puntos separados sobre el eje temporal** (azul en t=0, roja en t≈7.5); la separación existe y permite narrar el desplazamiento de veinticinco minutos (recorte c_lineband).
- **F2/F3** — Las cadenas prohibidas «18:40», «25 minutos antes», «16:35–17:05», «tabla de una sala» y «la hora deja de decidir nada» **no aparecen impresas** en ninguna zona (revisión de full + c_title + c_caption + c_bottom).
- **F2/F5** — Sin marcas de agua, sin texto en inglés, sin aspecto de fotografía pericial; fondo crema de papel, ilustración plana y contorno carbón; el resplandor de la lámpara se lee como luz de tungsteno permitida por §23.0.
- **F6** — Activo único compartido ES/EN; sin texto en inglés añadido; los rótulos de eje son los únicos necesarios para «comunicar horas y grados» (el texto adicional español se registra como defecto aparte).

### Defectos confirmados

1. **CONTRADICE / MEDIO** — F2 `NO CONTRADECIR` + F6 `AUSENTE`: caja de leyenda narrativa con icono de reloj que imprime la conclusión que corresponde decir al `NARRADOR`: «La línea horizontal (20 °C) cruza ambas curvas en tiempos distintos, mostrando enfriamiento a ritmos distintos.» Es una leyenda/conclusión explicativa no pedida (§23.4). Rompe el contrato de L7: `src/case/case5/Private/trial_day4_success.ts:15-18` — la explicación debe salir del diálogo, no estar pre-impresa en la placa.
2. **CONTRADICE / MEDIO** — F1 `AUSENTE` (mesa, por nombre) + F5 `AUSENTE`: franja inferior de escritorio/mesa de madera con panelado de pared, y atrezo editorial no pedido: lámpara de bronce, reloj de arena, pluma y tinteros, pila de libros y placa. Convierten la «abstracción sobre fondo crema» en un set de oficina (recortes c_bottom, c_corner_tl, c_corner_tr). `trial_day4_success.ts:15-18`.
3. **CONTRADICE / MEDIO** — F6 `AUSENTE` («tampoco introducir texto español adicional en la placa») + F2 `NO CONTRADECIR` (texto editorial no pedido): título «CURVAS DE ENFRIAMIENTO (DOS CASOS)», subtítulo «Registro de temperatura en función del tiempo», y rótulos de atrezo («EXPEDIENTE No. 1974-32», «ARCHIVO JUDICIAL», «SECRETARÍA DE ACTUARIOS», «CÓDIGO DE PROCEDIMIENTOS», «TOMO VII», «AÑO 1974»). El contrato sólo pide legibles las cifras 20 °C/31 °C junto a sus termómetros (recortes c_title, c_corner_tl, c_bottom). `trial_day4_success.ts:15-18`.
4. **CONTRADICE / MENOR** — F1/F5 `AUSENTE` (realces de color): la frase «tiempos distintos» va en rojo con negrita dentro de la leyenda, enfatizando la respuesta que la placa no debe señalar (§7.2 regla 3) (recorte c_caption).
5. **DRIFT / MENOR** — F1 (matiz de lectura): sobre la curva azul, la línea horizontal no la atraviesa sino que coincide con su punto inicial en t=0, por lo que «cruza ambas curvas» se lee de forma marginal en esa curva. No rompe diálogo ni la aritmética de los dos puntos separados (recorte c_lineband).

### Correcciones de auditoría

- ~~Sección «Hallazgos de auditoría 2026-09-19» anterior, que indicaba que no se inspeccionó ninguna imagen~~ — reemplazada por esta auditoría real (conversión ffmpeg del webp y 8 recortes nombrados sin contexto de la hoja, según el protocolo de auditoría visual del 2026-09-19).

### Recomendación (regenerar)

1. Mantener: fondo crema de papel, ejes rotulados «TEMPERATURA (°C)» y «TIEMPO (horas)», dos curvas descendentes (roja arriba con termómetro «31 °C», azul abajo con termómetro «20 °C»), línea horizontal discontinua a 20 °C que cruce ambas curvas marcando dos puntos separados en el eje temporal, y la curva roja visiblemente de enfriamiento más lento que la azul.
2. Eliminar por completo la caja de leyenda (icono de reloj y su frase): ninguna leyenda narrativa, conclusión o texto enfatizado en rojo/negrita dentro de la gráfica.
3. Eliminar el título, el subtítulo y todo el atrezo con rótulos (expediente, plumas, tinteros, libros, placa, escritorio/mesa y panelado): dejar sólo la abstracción didáctica plana sobre fondo crema, trazo de manual escolar mexicano setentero.
4. Mantener 20 °C y 31 °C como únicos rótulos junto a sus termómetros; no imprimir horas, minutos ni ventanas (ni «18:40», ni «25 minutos», ni «16:35–17:05»).
5. Consistencia: las cifras y el argumento no cambian, así que **no** regenerar juntos `examine_termografo`, `bg_archivo_pasillo7`, `bg_archivo_caldera` ni `informe_forense_c5`; regenerar sólo esta placa (activo único ES/EN).
