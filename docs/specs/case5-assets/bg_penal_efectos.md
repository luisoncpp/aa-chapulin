# bg_penal_efectos — hoja de hechos

Clase: `bg`. Espec: §23.0, §23.1 (`bg_penal_efectos.webp`). Guion: §14.3; `penal_efectos.ts`, `penal_efectos_en.ts`, `penal_efectos_hotspots.ts`, `penal_efectos_hotspots_en.ts`.

El activo es un fondo compartido por las variantes española e inglesa. Representa la bodega de efectos personales del Penal del Distrito el 8 de diciembre de 1982 a las 2:40 PM, durante la entrega de la caja 214-J de Casimiro; la escena se muestra sin personajes pintados y con los personajes del guion superpuestos.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Cuarto largo del Penal del Distrito con estantería metálica industrial de piso a techo, llena de cajas de cartón numeradas con plantilla, todas iguales (§23.1, línea 3992; §14.3, líneas 2313–2314).
- [ ] `PINTAR` — En primer plano, sobre una mesa de trabajo de acero, una caja abierta con la tapa al lado y la etiqueta visible (§23.1, línea 3992).
- [ ] `PINTAR` — Alrededor de la caja abierta: un flexo de cuello de ganso, un libro de registro y un sello (§23.1, línea 3992).
- [ ] `PINTAR` — Piso de concreto pintado de gris (§23.1, línea 3992).
- [ ] `PINTAR` — Al fondo, reja de seguridad con un candado (§23.1, línea 3992).
- [ ] `PINTAR` — Luz fluorescente dura y fría, sin calidez (§23.1, línea 3992).
- [ ] `NO CONTRADECIR` — La caja abierta es la 214-J y pertenece a Casimiro Lengua; la etiqueta es la identidad visible de la caja inspeccionada (§14.3, líneas 2313–2315; `penal_efectos_hotspots.ts:9–10`).
- [ ] `AUSENTE` — Personajes pintados, incluido el Sargento, Don Ramón, el Chapulín o cualquier custodio; el Sargento aparece mediante `pazguato_*` en el guion (`penal_efectos.ts:13–17`; §23.1, línea 3992).
- [ ] `AUSENTE` — Relojes, moño, libreta o papel carbón como objetos identificables dentro de la caja en el plano general; esos efectos se revelan en el hotspot y en `examine_efectos`, no en la dirección detallada del fondo (§14.3, líneas 2323–2333; §23.3, línea 4062).

### F2 Texto en imagen

- [ ] `PINTAR` — Numeración de plantilla en las cajas y etiqueta visible de la caja 214-J, necesaria para que el diálogo pueda señalar el número y el nombre de Casimiro (§14.3, líneas 2313–2317; `penal_efectos.ts:17–21`).
- [ ] `NO CONTRADECIR` — No inventar texto legible en el libro de registro, sello, otras cajas, reja ni carteles; §23.1 cierra la dirección con “Sin personajes, sin texto legible” (§23.1, línea 3992).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — El estado narrado es 8 de diciembre, 2:40 PM; la hora pertenece al diálogo de introducción y no debe convertirse en un reloj o rótulo del fondo (`penal_efectos.ts:17`; `penal_efectos_en.ts:17`; §24.A, línea 4118).
- [ ] `NO CONTRADECIR` — La narración habla de trescientas cajas numeradas en un estante metálico; no exigir que el fondo permita contarlas una por una (§14.3, líneas 2313–2314; `penal_efectos_en.ts:17–18`).
- [ ] `NO CONTRADECIR` — La caja se identifica como 214-J por el número relacionado con la página del expediente, pero la imagen no debe añadir la página 214 ni otros números argumentales fuera de la caja (§14.3, líneas 2314–2320).
- [ ] `NO CONTRADECIR` — Los dos relojes están parados a la misma hora y el oficio lleva fecha 8 de noviembre, pero esos datos pertenecen al contenido de la caja y a la lámina de efectos, no al background general (§14.3, líneas 2326–2333; §23.3, línea 4062).

### F4 Contrato en pantalla

- [ ] `PINTAR` — La introducción estampa este fondo con `furniture: none` y `bgm: suspense`, situándolo en la bodega de efectos personales del Penal del Distrito (`penal_efectos.ts:9–17`; English: `penal_efectos_en.ts:9–17`).
- [ ] `PINTAR` — La composición debe permitir que la caja abierta del primer plano sea el objetivo de `hotspot_caja` (`penal_efectos_hotspots.ts:9–10`; English: `penal_efectos_hotspots_en.ts:9–10`).
- [ ] `NO CONTRADECIR` — Al activar el hotspot, la caja contiene dos relojes de pulsera parados, un moño de corbata, una libreta de pasta negra y un papel carbón doblado en cuatro (`penal_efectos_hotspots.ts:10`; English: `penal_efectos_hotspots_en.ts:10`). El fondo no debe mostrar una caja cerrada, vacía o con otros contenidos.
- [ ] `NO CONTRADECIR` — La libreta se describe como letra pequeña y apretada, con márgenes y subrayados; el contenido ampliado y los cinco puntos se leen en el diálogo y en `examine_efectos`, no requieren texto legible en el fondo (`penal_efectos_hotspots.ts:17–23`; §23.3, línea 4062).
- [ ] `NO CONTRADECIR` — La copia al carbón es el oficio dirigido al ministerio público el 8 de noviembre; no pintar un documento distinto ni una carta fechada en otra fecha (`penal_efectos_hotspots.ts:14–15`; §5.3, línea 299).
- [ ] `NO CONTRADECIR` — La escena entrega `efectos_casimiro` y cierra la jornada; el fondo debe conservar la identidad de la caja y de la bodega cuando el hotspot añade la prueba (`penal_efectos_hotspots.ts:34`; §14.3, líneas 2348–2352).
- [ ] `NO CONTRADECIR` — La afirmación de que Casimiro fue asesinado a doce metros de la máquina guardada en el sótano es contexto narrativo, no una exigencia de pintar la máquina, una medición o una ruta en este fondo (`penal_efectos_hotspots.ts:34`; §2.3, líneas 121–123).

### F5 Estilo y prohibidos

- [ ] Repetir el contrato §23.0 completo en cualquier prompt de regeneración: ilustración 2D HD estilo *Capcom Ace Attorney* GBA/DS; cel-shading plano con terminador duro; contorno carbón `#1A1A1A`; colores primarios saturados; tema Chespirito/televisión mexicana setentera con papel, madera, polvo, latón envejecido y luz de tungsteno (§23.0, líneas 3974–3980).
- [ ] Prohibir fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto inglés no exigido y rosa/magenta en primer plano (§23.0, líneas 3978–3980).
- [ ] `NO CONTRADECIR` — Dimensiones de generación 1536 × 1024, con recorte `cover` a 960 × 540 (§23.1, líneas 3982–3984; arquitectura del pipeline, sección “Case 5”).

### F6 Localización

- [ ] `PINTAR` — Usar el mismo `bg_penal_efectos.webp` en ES y EN; ambos módulos apuntan al mismo archivo (`penal_efectos.ts:12`; `penal_efectos_en.ts:12`). No crear `bg_penal_efectos_en.webp`.
- [ ] `NO CONTRADECIR` — La composición, la geometría, la caja, las marcas físicas y la iluminación permanecen iguales entre idiomas; sólo se localiza el diálogo (`penal_efectos.ts:17–21`; `penal_efectos_en.ts:17–21`; §23.3, líneas 4064–4066).
- [ ] `NO CONTRADECIR` — No imprimir texto inglés en el fondo compartido; la localización de los textos legibles de la prueba pertenece a `examine_efectos_en.webp`, no a este background (§23.0, línea 3980; §23.3, líneas 4062–4068).

## Consistencia (regenerar juntos)

- `examine_efectos` / `examine_efectos_en` — comparte la caja 214-J y los efectos entregados: libreta negra, oficio al carbón, dos relojes parados y la identidad de Casimiro. Regenerar juntos, este activo no es fuente de verdad del otro (§14.3, líneas 2323–2352; §23.3, línea 4062).
- `efectos_casimiro` — comparte la composición conceptual de los efectos y la identidad del objeto entregado; los catálogos apuntan a `examine_efectos.webp` y `_en.webp`. Regenerar juntos, este activo no es fuente de verdad del otro (`EvidenceCatalogCase5EsB.ts:64–69`; `EvidenceCatalogCase5EnB.ts:64–69`).
- `penal_efectos` / `penal_efectos_en` — gemelos de idioma del mismo background, con composición idéntica y sin variante `_en` (§23.3, líneas 4064–4066; `penal_efectos.ts:12`; `penal_efectos_en.ts:12`). Regenerar juntos, este activo no es fuente de verdad del otro.
- `bg_bodega_masa` — comparte el universo de depósitos del Archivo, cajas/almacenamiento y la ruta de investigación del día 3, pero no comparte habitación ni composición; la máquina está en el sótano del Archivo y los efectos en el penal (§14, líneas 2090–2092; §14.3, líneas 2306–2314). Regenerar juntos para mantener clara la separación entre ambas bodegas, este activo no es fuente de verdad del otro.

## Conflictos abiertos

- §23.1 pide una caja con “su etiqueta visible” y el guion exige que la etiqueta 214-J diga `LENGUA, CASIMIRO` (§14.3, líneas 2313–2317), pero la misma fila de §23.1 termina con “Sin personajes, sin texto legible” (línea 3992). Mantener la etiqueta como identidad visual sin inventar texto adicional; resolver en el spec si `214-J` / `LENGUA, CASIMIRO` deben ser legibles como criterio binario.
- La dirección detallada dice que todas las cajas son iguales (§23.1, línea 3992), mientras el guion destaca una caja abierta al frente y su etiqueta (§14.3, líneas 2313–2317). Esto parece una diferencia de estado/composición —cajas cerradas uniformes en el estante frente a la caja inspeccionada—, pero no debe resolverse en la hoja.

## Hallazgos de auditoría 2026-09-19

**Veredicto: NO CUMPLE en el eje contenido/texto (F2, con rotura de contrato F4). Cumple en exclusiones (AUSENTE), estilo (F5), localización (F6) y dimensiones.** Auditoría por recortes ampliados sobre `assets/bg_penal_efectos.webp` (1536×1024), un recorte por sustantivo F1 con prueba de nombrar.

### Cumple

- Cuarto largo con estantería metálica industrial de piso a techo, llena de cajas de cartón uniformes y cerradas, a ambos lados (F1, hecho 1).
- Caja de cartón abierta con la tapa volcada al lado, sobre una mesa de trabajo de acero remachada en primer plano; se nombra sin ambigüedad en el recorte (F1, hecho 2).
- Flexo de cuello de ganso (negro, sobre base), libro de registro de pasta dura cerrado y sello de madera con mango alrededor de la caja; los tres se nombran limpiamente (F1, hecho 3).
- Piso de concreto gris (F1, hecho 4) y reja de seguridad con candado en la pared del fondo (F1, hecho 5).
- Luz fluorescente fría en franja de techo, paleta fría sin calidez (F1, hecho 6).
- `AUSENTE` personajes: no hay Sargento, Don Ramón, Chapulín ni custodio pintados (F1).
- `AUSENTE` interiores identificables: el interior de la caja muestra sólo papeles genéricos no identificables como relojes, moño, libreta o papel carbón (F1 y F4, `penal_efectos_hotspots.ts:15`).
- F3: no hay reloj, ni 2:40 PM, ni página 214, ni fecha impresa en ninguna zona de la imagen; no se puede contar caja por caja (correcto).
- F2: no hay texto legible inventado en libro, sello, cajas, reja o paredes; sin marcas de agua ni inglés.
- F4: la caja abierta cae dentro de la zona del hotspot `hotspot_caja` (x8–42, y42–82 del recorte `cover` 960×540 ≈ fuente x123–645, y443–788), pintada en el fondo.
- F6: `penal_efectos.ts:12` y `penal_efectos_en.ts:12` apuntan al mismo archivo; no existe `bg_penal_efectos_en.webp`; sin texto para «resolver» la traducción.
- F5/dimensiones: 1536×1024, cel-shading con terminador duro y contorno oscuro, sin fotorrealismo ni 3D.

### Defectos confirmados

- `AUSENTE` / **MAYOR** / F2 + F4 (+ F1 «NO CONTRADECIR» etiqueta): la etiqueta de la caja inspeccionada está pintada pero totalmente en blanco — sin «214-J» ni «LENGUA, CASIMIRO». Rompe `src/case/case5/Private/penal_efectos.ts:18` y `penal_efectos_en.ts:18` («En la etiqueta de la 214-J dice: LENGUA, CASIMIRO»), la etiqueta del hotspot (`penal_efectos_hotspots.ts:12`) y la identidad visible de la caja exigida por `penal_efectos_hotspots.ts:9–10`.
- `AUSENTE` / MEDIO / F2: las cajas del estante no llevan numeración de plantilla; todas las tarjetas de etiqueta están en blanco (recorte 3×). Contradice la narración de «Trescientas cajas de cartón numeradas» (`penal_efectos.ts:18`) y §23.1 línea 3992.

### Correcciones de auditoría

- ~~No se realizó auditoría visual: por instrucción del protocolo, esta hoja se derivó únicamente del spec y del guion; no se inspeccionó ninguna imagen.~~ Reemplazado el mismo día por esta auditoría visual con recortes (primer registro placeholder, sin hallazgos que retirar).

### Recomendación (regeneración)

1. Estampar en la etiqueta visible de la caja abierta el número «214-J» y el nombre «LENGUA, CASIMIRO» como identidad visual (texto corto de plantilla, sin rotulación adicional).
2. Añadir numeración de plantilla breve (p. ej. «###-X») a las tarjetas de etiqueta de las cajas del estante, todas con el mismo formato, sin que sean contables una por una.
3. Mantener intactas la composición, las exclusiones, la iluminación fría y la ausencia de personajes; regenerar junto con `examine_efectos` para conservar la identidad compartida de la caja 214-J.
