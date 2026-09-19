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

- **Veredicto: NO CUMPLE** en contenido (F1) y en exclusiones; cumple texto (F2), cifras narrativas (F3), ausencia de marcadores de presentación (F4) y localización (F6). El estilo general (línea, color plano, contorno) es coherente con §23.0 en lo visible.

### Cumple

- F1 — Escritorio metálico gris con cubierta tipo linóleo, legible y con gavetas (§23.1).
- F1/F4 — Silla de madera en el rincón derecho con la bolsa encima; la bolsa cae en lo esencial dentro del rectángulo del hotspot `hotspot_bolsa` (x:72, y:52, w:22, h:34) y es claramente examinable (`fiscalia_c5_hotspots.ts:10-14`; `fiscalia_c5_hotspots_en.ts:10-14`), aunque su forma contradice el estado (defecto 4).
- F1/F5 — Lámpara de escritorio encendida con el resto de la habitación en penumbra cálida; parcial: la ventana aporta luz diurna (defecto 3).
- F2 — Sin texto legible, sin inglés, sin marcas de agua; las tarjetas del archivero están en blanco y el «manuscrito» de los papeles es garabato ilegible; el oficio 4471 y las fechas no aparecen pintados (§23.1; `fiscalia_c5_talks.ts:13`).
- F3 — La fecha/hora de la escena (8 de diciembre, 11:20 AM) no está impresa en la imagen (`fiscalia_c5.ts:18`; `fiscalia_c5_en.ts:18`).
- F4 — Sin personajes, sin flechas, círculos ni resaltes; no hay pruebas presentables pintadas (§14.2, regla de arco; `fiscalia_c5.ts:18`).
- F6 — Composición única compartida: `fiscalia_c5.ts:13,18` y `fiscalia_c5_en.ts:13,18` apuntan al mismo `assets/bg_fiscalia.webp`; no existe `bg_fiscalia_en.webp` en `assets/`; sin texto que «resuelva» la traducción.

### Defectos confirmados

1. `AUSENTE` — MAYOR — F1/F4 — Calculadora de manivela: no existe. El objeto de latón junto a la base de la lámpara es un tintero y la caja de madera junto a la pila derecha es un estuche con broche, sin manivela ni teclas. Rompe `src/case/case5/Private/fiscalia_c5.ts:19` (narración de entrada) y `src/case/case5/Private/fiscalia_c5_talks.ts:36` (la mano de Super Sam sobre la calculadora).
2. `AUSENTE` — MAYOR — F1 — Cronómetro de bolsillo sobre un pisapapeles: no hay ni reloj de bolsillo ni pisapapeles en ninguna zona del escritorio. Rompe `src/case/case5/Private/fiscalia_c5.ts:19`.
3. `CONTRADICE` — MAYOR — F1 (exclusión «ventanas») / F5 — Ventana con marco de madera y cortina atada en la pared izquierda; el despacho debe ser austero y **sin ventana**, y la penumbra debe venir sólo de la lámpara de escritorio (§23.1).
4. `CONTRADICE` — MAYOR — F1/F4, con carga `DRIFT` contra la identidad de la bolsa vacía compartida con `trial_day3_success_berrondo.ts:55` y `climax_epilogue.ts:73` — La bolsa es un saco abulgado atado con cordel (lectura honesta: «saco relleno»), no una bolsa de lona cruda **doblada** y **vacía**. Rompe `src/case/case5/Private/fiscalia_c5_hotspots.ts:14-18` y `fiscalia_c5_hotspots_en.ts:14-18` («doblada sobre una silla», «Está vacía»).
5. `AUSENTE` — MEDIO — F1/F2/F6 — Sello de la fiscalía en tinta verde: la bolsa no lleva marca alguna de sello. Rompe `src/case/case5/Private/fiscalia_c5_hotspots.ts:14` y `fiscalia_c5_hotspots_en.ts:14` («sello de la fiscalía» / «prosecutor seal»).
6. `AUSENTE` — MEDIO — F1 — Reloj de oficina: ausente en todas las paredes (§23.1).
7. `CONTRADICE` — MEDIO — F1/F3 — Archivero: ningún cajón está entreabierto (todos cerrados) y sólo se ven tres frentes de gaveta (la cuarta queda oculta tras el escritorio), de modo que «cuatro gavetas, exactamente un cajón entreabierto» no se cumple (§23.1).
8. `CONTRADICE` — MEDIO — F1 — Dos montañas de oficios «perfectamente iguales»: la pila izquierda mide menos de la mitad de la derecha; además hay una tercera pila atada sobre el archivero y papeles sueltos dispersos en el centro del escritorio, que la hoja excluye explícitamente («papeles dispersos o mobiliario adicional», §23.1).
9. `CONTRADICE` — MENOR — F1 (exclusión «segunda lámpara») / F5 — Aplique de latón de pared, apagado, en la pared derecha: segunda luminaria en un esquema de una sola lámpara (§23.1).
10. `MALFORMADO` — MENOR — F1 — Escudo descolorido: se lee como escudo institucional de la justicia (balanza entre laureles con corona real), no como escudo nacional; lectura parcial del hecho (§23.1).

### Correcciones de auditoría

- Se reemplaza la nota previa de esta misma fecha («No se realizó auditoría visual: por protocolo de `asset-facts`, la imagen no fue inspeccionada») por esta pasada completa del 2026-09-19; no había hallazgos previos que tachar ni ✓ anteriores que reclasificar (la hoja no tenía cumplidos marcados).

### Recomendación (regeneración)

1. Eliminar la ventana y la cortina; pared izquierda ciega (lambrín/yeso) en penumbra, sin aplique de pared.
2. Pintar la calculadora de manivela sobre el escritorio (cuerpo metálico con manivela lateral legible) y el cronómetro de bolsillo apoyado en un pisapapeles, ambos despejados de pilas y del borde, para la narración de entrada y la línea de la mano sobre la calculadora.
3. Sustituir el saco atado por una bolsa de lona cruda doblada, plana y vacía sobre el asiento de la silla, con un sello circular en tinta verde visible, manteniéndola dentro del rectángulo x:72, y:52, w:22, h:34.
4. Igualar las dos montañas de oficios (misma altura y mismo atado con listón), retirar la tercera pila del archivero y los papeles sueltos del centro.
5. Entreabrir exactamente un cajón del archivero y dejar los cuatro frentes de gaveta legibles por encima del escritorio.
6. Añadir un reloj de oficina en la pared del escudo.
7. Reajustar el emblema de pared a lectura de escudo nacional descolorido (sin corona real).

