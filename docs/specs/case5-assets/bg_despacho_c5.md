# bg_despacho_c5 — hoja de hechos

Clase: `bg`. Espec: §12.1 y §23.0. Guion directo: `src/case/case5/Private/vecindad.ts:13-18`, `vecindad_hotspots.ts:23-34`; variantes EN equivalentes en `vecindad_en.ts` y `vecindad_hotspots_en.ts`.

## Mapa semántico y alcance

Variante especial para el 7 de diciembre, 8:30 AM: el mismo despacho del Señor Barriga que pinta `assets/bg_despacho.webp`, pero con la superficie del escritorio preparada para el hotspot `hotspot_sobre`. El cambio autorizado se limita al contenido de la mesa; puerta, caja fuerte, librero, premios, ventana, sillón, alfombra, placa y demás arquitectura deben conservarse.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — La misma oficina del fondo reutilizado, con el escritorio grande en primer plano derecho y la puerta de madera a la izquierda (`assets/bg_despacho.webp`; `vecindad.ts:13-18`).
- [ ] `PINTAR` — Sobre la superficie del escritorio, dentro del área de `hotspot_sobre` (`x:62, y:40, w:24, h:22`): un sobre de manila amarillo abierto, media cuartilla mecanografiada al lado y una copia de recibo separada y reconocible (`vecindad_hotspots.ts:23-34`).
- [ ] `AUSENTE` — Recipiente con papeles arrugados, teléfono y bolígrafo del fondo compartido en la zona del hotspot; no deben competir con el sobre y sus documentos (defecto observado en `assets/bg_despacho.webp`).
- [ ] `NO CONTRADECIR` — El sobre corresponde al pago de diecisiete mensualidades de Ramón Valdés; la cuartilla es mecanografiada, en tercera persona y con fórmula de oficio; la copia es el recibo de Barriga (`vecindad_hotspots.ts:27-34`).
- [ ] `AUSENTE` — Personajes horneados, UI, flechas, círculos o realces de hotspot.

### F2 Texto en imagen

- [ ] `AUSENTE` — Texto legible nuevo, membretes o marcas inventadas; las líneas completas pertenecen a `examine_nota_renta.webp` y al diálogo, no al fondo (§23.0, §23.3).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — No imprimir las cifras «17», «72» ni fechas sobre los papeles del fondo; son datos narrados en el hotspot (`vecindad_hotspots.ts:27-34`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — El área visual del hotspot debe contener los tres objetos que el narrador enumera: sobre abierto, media cuartilla mecanografiada y copia del recibo (`vecindad_hotspots.ts:23-34`).
- [ ] `NO CONTRADECIR` — ES y EN deben apuntar al mismo WebP; sólo cambia el diálogo (`vecindad.ts:13-18`, `vecindad_en.ts:13-18`).

### F5 Estilo

- [ ] Contrato §23.0: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA / Nintendo DS) en alta definición, contorno oscuro carbón `#1A1A1A`, colores primarios saturados, tema de televisión mexicana de los años setenta, sin fotorrealismo, render 3D, acuarela, anime moderno, marcas de agua, texto en inglés no exigido ni rosa/magenta en primer plano.
- [ ] `NO CONTRADECIR` — La nueva imagen debe conservar el estilo, iluminación nocturna y perspectiva del fondo reutilizado; no rediseñar la oficina.

### F6 Localización

- [ ] `NO CONTRADECIR` — ES y EN usan exactamente `assets/bg_despacho_c5.webp`; no crear variante gráfica `_en`.

## Consistencia (regenerar juntos)

- `vecindad_c5` / `vecindad_c5_en` — comparten el mismo fondo y hotspot. Regenerar juntos; ninguno es fuente de verdad del otro.
- `bg_despacho.webp` — fuente visual de la oficina reutilizada, no fuente de verdad para los objetos sobre la mesa en esta variante.
- `nota_mecanografiada` y `recibo_renta` — comparten identidad de los papeles; las láminas detalladas son la fuente de lectura fina, no del encuadre del fondo.

## Conflictos abiertos

- ~~§23.1 declara `bg_despacho.webp` como fondo reutilizado sin cambios, pero el hotspot de §12.1 exige objetos distintos sobre el escritorio.~~ [x] RESUELTO POR DECISIÓN DEL AUTOR (2026-09-19): `bg_despacho_c5.webp` conserva la oficina y cambia sólo la superficie del escritorio.

## Hallazgos de auditoría 2026-09-19

**Veredicto: CUMPLE** en contenido, hotspot, exclusiones y localización. Se inspeccionó `assets/bg_despacho_c5.webp` (1536×1024) con recortes ampliados del escritorio y de la composición completa.

### Cumple

- F1 — El recorte del escritorio muestra exactamente un sobre de manila abierto, una media cuartilla mecanografiada y una copia de recibo separada; los tres se nombran sin contexto y quedan juntos dentro del área visual de `hotspot_sobre`.
- F1 — La puerta, caja fuerte, librero, premios, ventana, sillón, alfombra, placa y demás oficina permanecen reconocibles como el despacho compartido; el cambio queda limitado a la superficie de la mesa.
- F1/AUSENTE — No aparecen el recipiente con papeles arrugados, el teléfono ni el bolígrafo del fondo compartido en la zona del hotspot.
- F2 — Los tres papeles tienen marcas tipográficas indistintas, sin palabras, nombres, cifras ni fechas nuevas legibles; los rótulos antiguos de la oficina son elementos preservados del fondo base.
- F4 — La cámara mantiene la misma perspectiva y los objetos requeridos caen en `x:62–86, y:40–62` del viewport 960×540, coincidiendo con `hotspot_sobre`.
- F6 — ES y EN consumen el mismo `assets/bg_despacho_c5.webp`.

### Defectos confirmados

- Ninguno en la pasada final.

### Correcciones de auditoría

- ~~La primera edición hacía legible «RECIBO DE RENTA» en el papel pequeño~~ — [x] CORREGIDO POR REGENERACIÓN (2026-09-19): el texto nuevo fue reducido a marcas tipográficas indistintas y se conservó la forma de recibo.

### Recomendación

- Mantener `bg_despacho_c5.webp` exclusivo del Caso 5; no volver a sustituirlo por `bg_despacho.webp`, porque el fondo compartido no pinta los tres objetos del hotspot.
