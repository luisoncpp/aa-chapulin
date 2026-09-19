# bg_fiscalia — hoja de hechos

Clase: `bg`. Espec: §23.0, §23.1 (`bg_fiscalia.webp`). Guion: §14.2, investigación del Día 3 (`fiscalia_c5`). Variantes: una sola imagen compartida por ES/EN; ambos scripts referencian `assets/bg_fiscalia.webp`.

Fuente de verdad: el spec y el contrato textual del guion. Esta hoja no inspecciona la imagen actual.

## Mapa semántico

- Lugar y momento: despacho pequeño del agente del ministerio público Sam Sullivan, Fiscalía, 8 de diciembre a las 11:20 AM; investigación del Día 3 (§14.2; `src/case/case5/Private/fiscalia_c5.ts:18`).
- Elementos visibles: escritorio metálico gris con cubierta de linóleo; calculadora de manivela; cronómetro de bolsillo sobre un pisapapeles; dos montañas de oficios iguales; archivero de cuatro gavetas con un cajón entreabierto; escudo nacional descolorido; reloj de oficina; silla en el rincón derecho con bolsa de lona cruda doblada, vacía y sellada en tinta verde (§23.1; `fiscalia_c5.ts:19`).
- Identidad de la bolsa: es la bolsa de Super Sam, con sello de la fiscalía; el hotspot la describe doblada sobre una silla, vacía y limpia (§14.2; `fiscalia_c5_hotspots.ts:10-25`).
- Estado de trama: la bolsa lleva el residuo narrativo del servicio de cierre de agosto, pero el fondo sólo debe pintar su estado físico actual; no debe convertir la fecha o la explicación en texto de imagen (§14.2; §21, origen de la bolsa; `fiscalia_c5_talks.ts:26-45`).
- Medio y encuadre: fondo nuevo de 1536 × 1024, recortado con `cover` a 960 × 540 (§23.1; `docs/architecture/asset-pipeline.md:78`).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Oficina oficial pequeña, austera y sin ventana (§23.1).
- [ ] `PINTAR` — Escritorio metálico gris con cubierta de linóleo (§23.1).
- [ ] `PINTAR` — Calculadora de manivela sobre o junto al escritorio; es el objeto que la narración menciona al entrar y sobre el que Super Sam deja la mano al recordar el expediente (`fiscalia_c5.ts:19`; `fiscalia_c5_talks.ts:36`).
- [ ] `PINTAR` — Cronómetro de bolsillo descansando sobre un pisapapeles (§23.1; `fiscalia_c5.ts:19`).
- [ ] `PINTAR` — Dos montañas de oficios perfectamente iguales sobre el escritorio (§23.1). Deben leerse como pilas repetidas, no como papeles dispersos o mobiliario adicional.
- [ ] `PINTAR` — Archivero de cuatro gavetas detrás del escritorio, con exactamente un cajón entreabierto (§23.1).
- [ ] `PINTAR` — Escudo nacional descolorido en la pared y reloj de oficina (§23.1).
- [ ] `PINTAR` — En el rincón derecho, una silla con la bolsa de lona cruda doblada encima; la bolsa está vacía, limpia y tiene un sello de la fiscalía en tinta verde (§23.1; `fiscalia_c5_hotspots.ts:14`).
- [ ] `PINTAR` — Iluminación de una sola lámpara de escritorio; el resto de la habitación queda en penumbra (§23.1).
- [ ] `AUSENTE` — Personajes, porque el fondo se usa con `furniture: 'none'` y los personajes se superponen mediante sprites (§14.2; `fiscalia_c5.ts:18`; `fiscalia_c5_en.ts:18`).
- [ ] `AUSENTE` — Ventanas, segunda lámpara dominante, mobiliario inventado o una bolsa llena (§23.1; §14.2).

### F2 Texto en imagen

- [ ] `AUSENTE` — Texto legible, rótulos, fechas, nombres, números de expediente, marcas de agua, leyendas o texto explicativo (§23.1).
- [ ] `NO CONTRADECIR` — El sello de la bolsa es una marca diegética de identidad, pero no requiere una cadena legible; no convertirlo en una etiqueta tipográfica ni inventar una palabra visible (§23.1; `fiscalia_c5_hotspots.ts:14`).
- [ ] `NO CONTRADECIR` — Las pilas son oficios, pero sus contenidos y el número 4471 pertenecen al diálogo y al objeto entregado, no a texto legible del fondo (§14.2; `fiscalia_c5_talks.ts:7-20`).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — El momento de la escena es 8 de diciembre, 11:20 AM; no debe imprimirse en la imagen (§14.2; `fiscalia_c5.ts:18`; `fiscalia_c5_en.ts:18`).
- [ ] `NO CONTRADECIR` — El archivero tiene cuatro gavetas; es una cifra de conteo visual, no texto que deba aparecer (§23.1).
- [ ] `NO CONTRADECIR` — La bolsa se asocia narrativamente con agosto y con el cierre de un caso en cinco minutos; la imagen sólo fija que está vacía, limpia y sellada, sin fecharla ni dibujar un cronómetro con lectura narrativa (§14.2; `fiscalia_c5_hotspots.ts:14-25`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — La primera narración debe poder señalar, sin contradicción, la calculadora de manivela, el cronómetro y la bolsa doblada y vacía (`fiscalia_c5.ts:18-19`; `fiscalia_c5_en.ts:18-19`).
- [ ] `PINTAR` — El hotspot `hotspot_bolsa` está en `x:72, y:52, w:22, h:34`; la bolsa debe ocupar esa zona relativa en el rincón derecho sobre una silla y quedar claramente examinable (`fiscalia_c5_hotspots.ts:10-14`; `fiscalia_c5_hotspots_en.ts:10-14`).
- [ ] `NO CONTRADECIR` — La bolsa debe admitir las afirmaciones «sello de la fiscalía», «vacía», «limpia» y «desde agosto»/«since August» sin mostrar contenido dentro ni un estado de uso incompatible (`fiscalia_c5_hotspots.ts:14-25`; `fiscalia_c5_hotspots_en.ts:14-25`).
- [ ] `NO CONTRADECIR` — La calculadora debe quedar visible para la línea posterior en la que Super Sam mantiene la mano sobre ella; no taparla con un sprite, una pila de papeles o un recorte del fondo (`fiscalia_c5_talks.ts:36`; `fiscalia_c5_talks_en.ts:36`).
- [ ] `NO CONTRADECIR` — La composición debe soportar los sprites `supersam_idle`, `supersam_sweat`, `supersam_point` y Chapulín sin exigir que el fondo ya contenga personas (§14.2; `fiscalia_c5.ts:3-18`).
- [ ] `AUSENTE` — No incluir pruebas presentables, flechas, círculos, resaltes ni texto que permita al jugador presentar algo en esta escena: la regla de arco dice que no se puede presentar nada aquí (§14.2, regla de arco).

### F5 Estilo y prohibidos

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA / Nintendo DS) en alta definición; cel-shading de colores planos con terminador de sombra duro, dos tonos por superficie y ; contorno oscuro nítido y continuo en carbón `#1A1A1A`, más grueso en la silueta exterior que en los detalles internos; anatomía facial expresiva y exagerada, al borde de la caricatura; colores primarios saturados.
- [ ] Contrato §23.0 completo en el prompt: televisión mexicana de los años setenta, universo Chespirito / El Chapulín Colorado; melodrama de tribunal tratado en serio por el sistema y absurdo en los personajes; registro de papel, madera y polvo, con archivo judicial, expedientes atados con listón, madera barnizada, latón envejecido y luz de tungsteno.
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, estética de cómic americano de superhéroes, marcas de agua, texto en inglés dentro de la imagen y cualquier tono rosa o magenta en primer plano (§23.0; `docs/architecture/asset-pipeline.md:78`).
- [ ] `NO CONTRADECIR` — La penumbra debe venir de una sola lámpara de escritorio y conservar siluetas/materiales reconocibles; no convertir el despacho en una habitación negra ni en una oficina fluorescente (§23.1).

### F6 Localización

- [ ] `PINTAR` — No generar `bg_fiscalia_en.webp`: ES y EN usan exactamente `assets/bg_fiscalia.webp` (`fiscalia_c5.ts:13,18`; `fiscalia_c5_en.ts:13,18`).
- [ ] `NO CONTRADECIR` — La composición, conteos, objetos, sello, colores y estado de la bolsa permanecen idénticos entre idiomas; no introducir texto para resolver traducciones (§23.1; scripts ES/EN de `fiscalia_c5`).
- [ ] `NO CONTRADECIR` — Las frases localizadas «sello de la fiscalía» / «prosecutor seal» son diálogo, no una instrucción para pintar una leyenda legible (`fiscalia_c5_hotspots.ts:14`; `fiscalia_c5_hotspots_en.ts:14`).

## Consistencia (regenerar juntos)

- `bg_fiscalia` ES ↔ `bg_fiscalia` EN — son gemelos de idioma con el mismo archivo final; regenerar una sola composición neutral y no crear una variante localizada. Este activo no es fuente de verdad de ningún otro.
- `bg_fiscalia` ↔ bolsa de lona visible en escenas posteriores — comparten la identidad narrativa de la bolsa vacía de Super Sam (§14.2; §15.3; `trial_day3_success_berrondo.ts:55`; `climax_epilogue.ts:73`). No existe en esas escenas otro fondo declarado con la bolsa pintada; sus apariciones son diálogo/sprite o un estado de escena distinto, por lo que este fondo no dicta su composición.

## Conflictos abiertos

- El guion fuente ES/EN todavía dice que Super Sam ha cargado la bolsa «cuatro meses» (`fiscalia_c5_hotspots.ts:21`; `fiscalia_c5_hotspots_en.ts:21`), mientras la pasada canónica del spec registra que esa duración fue corregida a «más de tres meses» (`docs/specs/case-5-el-tomo-trece.md:28`). §14.2 sólo fija «Desde agosto» (`docs/specs/case-5-el-tomo-trece.md:2256`) y el fondo no debe imprimir ninguna duración. Resolver la discrepancia pertenece al spec/guion, no a esta hoja ni al arte.

## Hallazgos de auditoría 2026-09-19

- **Veredicto: CUMPLE** en contenido (F1), exclusiones, texto (F2), cifras (F3), contrato en pantalla (F4), estilo (F5) y localización (F6), sobre el RAW regenerado `tools/raw/case5/bg_fiscalia.jpg` (1280×720, 16:9). Un menor opcional no bloquea: el escudo nacional es el correcto (águila, nopal, serpiente; sin corona) pero no está descolorido.

Fuente auditada: RAW Lote B, pasada 2 de regeneración (la pasada 1 de esta misma fecha inspeccionó la imagen previa y **no cumple**; ver Correcciones). Recortes por sustantivo y prueba de nombrar. No se ejecutó `process_case5_assets.py`.

### Cumple

- F1 — Oficina pequeña y austera: pared izquierda ciega de yeso y lambrín, sin ventana ni cortina (§23.1).
- F1 — Escritorio metálico gris con cubierta tipo linóleo, legible y con gavetas (§23.1).
- F1/F4 — Calculadora de manivela: máquina de sumar beige con teclado numérico y manivela/perilla lateral a la derecha, despejada de las pilas. Lectura honesta del recorte: «calculadora de manivela». Soporta `fiscalia_c5.ts:19` y `fiscalia_c5_talks.ts:36`.
- F1/F4 — Cronómetro de bolsillo de latón apoyado sobre un pisapapeles circular. Lectura honesta: «cronómetro de bolsillo sobre pisapapeles». Soporta `fiscalia_c5.ts:19`.
- F1 — Dos montañas de oficios perfectamente iguales, misma altura, cada una atada con listón en X; sin tercera pila ni papeles sueltos (§23.1).
- F1/F3 — Archivero oliva de **cuatro** frentes de gaveta visibles; el segundo cajón desde arriba está entreabierto; los otros tres cerrados; tapas de etiqueta en blanco; sin papeles encima (§23.1).
- F1 — Reloj de oficina analógico en la pared, junto al escudo (§23.1).
- F1 — Escudo nacional (águila sobre nopal devorando una serpiente, encina y laurel); sin corona real ni balanza (§23.1). El adjetivo «descolorido» queda como menor (defecto 1 de esta pasada).
- F1/F4 — Silla de madera en el rincón derecho; bolsa de lona cruda **doblada, plana y vacía** sobre el asiento, con sello circular en tinta verde (marca diegética, sin cadena legible). Dentro del rect `hotspot_bolsa` x:72, y:52, w:22, h:34; el saco cae hacia el centro-izquierda de esa caja. Lectura honesta: «bolsa de lona vacía doblada, sello verde». Soporta `fiscalia_c5_hotspots.ts:14-18` y `fiscalia_c5_hotspots_en.ts:14-18`.
- F1/F5 — Única luz: lámpara de escritorio encendida; el resto en penumbra de tungsteno; sin aplique de pared (§23.1).
- F1/F4 — Sin personajes, sin flechas ni resaltes; `furniture: none` (§14.2; `fiscalia_c5.ts:18`).
- F2 — Sin inglés, sin marcas de agua, sin oficio 4471 ni fechas impresas; garabato ilegible en los oficios; etiquetas del archivero en blanco. El sello es un círculo verde con emblema interior, no una leyenda tipográfica (§23.1; `fiscalia_c5_talks.ts:13`).
- F3 — 8 de diciembre, 11:20 AM no está impreso; el reloj no marca esa hora (`fiscalia_c5.ts:18`).
- F5 — Cel-shading Ace Attorney (GBA/DS), contorno carbón, dos tonos, no foto (§23.0).
- F6 — Composición única ES/EN; no existe `bg_fiscalia_en.webp` (`fiscalia_c5.ts:13,18`; `fiscalia_c5_en.ts:13,18`).

### Defectos confirmados

1. `CONTRADICE` — MENOR — F1 — Escudo nacional correcto en identidad, pero **no descolorido**: pintura saturada (marrón, verde, rojo) en vez de mural desteñido (§23.1). No rompe diálogo ni hotspot.

### Correcciones de auditoría

- Se reemplaza el veredicto **NO CUMPLE** de la pasada 1 (imagen previa a Lote B, esta misma fecha) por **CUMPLE** sobre el RAW regenerado. Los diez defectos de esa pasada se tachan porque el recorte de la pasada 2 los desmiente:
  - ~~1. Calculadora de manivela ausente (tintero / estuche)~~ — ahora máquina de sumar con manivela lateral.
  - ~~2. Cronómetro y pisapapeles ausentes~~ — cronómetro de bolsillo sobre pisapapeles.
  - ~~3. Ventana y cortina en la pared izquierda~~ — pared ciega en penumbra.
  - ~~4. Saco abulgado atado~~ — bolsa de lona doblada, plana y vacía.
  - ~~5. Sello verde ausente~~ — sello circular en tinta verde sobre el pliegue.
  - ~~6. Reloj de oficina ausente~~ — reloj analógico junto al escudo.
  - ~~7. Archivero: tres frentes, todos cerrados~~ — cuatro frentes, segundo cajón entreabierto.
  - ~~8. Pilas desiguales, tercera pila y papeles sueltos~~ — dos montañas iguales, sin tercera pila ni sueltos.
  - ~~9. Aplique de latón en la pared derecha~~ — sin segunda luminaria.
  - ~~10. Escudo de la justicia con corona real~~ — escudo nacional (águila/nopal/serpiente), sin corona. Queda el menor de saturación (defecto 1 de esta pasada).
- El ✓ de F1/F4 de la pasada 1 («silla con bolsa en el hotspot, aunque su forma contradice el estado») se corrige: la forma ahora coincide con «doblada y vacía».
- El ✓ parcial de F1/F5 de la pasada 1 («lámpara + penumbra, pero la ventana aporta luz diurna») se corrige: ya no hay ventana.

### Recomendación

Ninguna bloqueante. Opcional: desteñir el escudo nacional (grisáceo, mural gastado) si se vuelve a tocar el fondo; no regenerar sólo por eso.
