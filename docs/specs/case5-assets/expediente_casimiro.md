# expediente_casimiro — hoja de hechos

Clase: `icon`. Espec: §23.0, §23.5, §5.2, §7.2, §7.3, §10.1, §11.4 y §24.C/§24.D. Guion: celda D1, investigación D1 pasillo 7 (`hotspot_mesa`), D1-T3 `followUp` y éxito de D1-T3. Catálogos cubiertos: `EvidenceCatalogCase5EsA.ts` y `EvidenceCatalogCase5EnA.ts`.

## Mapa semántico

- Expediente de apelación de Casimiro Lengua, la víctima y condenado del Caso 0; no es el expediente penal del acusado ni la tarjeta de domicilio de Don Ramón.
- En la escena se encuentra abierto sobre la mesa de consulta, en la página 214.
- En esa página hay una tarjeta de presentación pegada con engrudo: fue decomisada a Casimiro en julio y pertenece a «Enciclopedias El Saber Universal, Sociedad Anónima».
- Al pie de la tarjeta aparece, escrito de puño y letra del secretario, que la sociedad estaba disuelta desde 1971.
- El Court Record recibe un icono centrado del expediente; la aceptación del activo depende de que su identidad permita reconocer el expediente abierto, su página 214 y la tarjeta pegada cuando el guion lo muestra o lo presenta.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — El icono representa un expediente/legajo de apelación judicial, no una carpeta genérica de oficina, un libro de visitas ni la tarjeta aislada (`EvidenceCatalogCase5EsA.ts:69-73`; EN `EvidenceCatalogCase5EnA.ts:69-73`).
- [ ] `PINTAR` — La identidad compartida del objeto incluye el expediente abierto sobre una mesa de consulta, con la página 214 expuesta y una tarjeta de presentación adherida a esa página (§5.2; §7.3; §10.1, líneas 558-560; `archivo_pasillo7_hotspots.ts:70-77`; EN equivalente).
- [ ] `PINTAR` — La tarjeta adherida es la prueba decomisada a Casimiro en julio, de «Enciclopedias El Saber Universal, S.A.»; no sustituirla por la esquina rota encontrada después en la mano de la víctima (§10.1, líneas 558-560; `archivo_pasillo7_hotspots.ts:73-75`; `trial_day1_success.ts:113-118`; EN equivalente).
- [ ] `PINTAR` — El expediente debe conservar el carácter de apelación de Casimiro: él pidió declarar en el Archivo y la diligencia debía esperar al actuario (§5.2; §10.1, líneas 562-564; `celda_talks.ts:19-24`; EN equivalente).
- [ ] `AUSENTE` — No añadir al icono el cuerpo, la silueta de gis, el tomo caído, la mano cerrada, la mesa completa, la escena del pasillo ni el fondo del Archivo; esos elementos pertenecen al fondo y a otras pruebas (§23.1, línea 3987; §11.4, líneas 762-823; `archivo_pasillo7_hotspots.ts:59-77`).
- [ ] `AUSENTE` — No convertir esta prueba en `esquina_tarjeta`, `examine_esquina_tarjeta` o `ficha_domicilio`: esas pruebas representan el fragmento y la tarjeta del cedulario, no el expediente de apelación (`EvidenceCatalogCase5EsA.ts:25-30,69-73`; §23.3, líneas 4047 y 4060).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — Si el encuadre del icono permite texto, la identidad canónica de la tarjeta adherida es `Enciclopedias El Saber Universal, Sociedad Anónima` en ES y `Universal Knowledge Encyclopedias, Inc.` en EN (`archivo_pasillo7_hotspots.ts:74`; EN `archivo_pasillo7_hotspots_en.ts:74`; `trial_day1_success.ts:115`; EN equivalente).
- [ ] `TEXTO EXACTO` — Si se muestra la anotación inferior de la tarjeta, debe decir `sociedad disuelta desde 1971` en ES y `company dissolved since 1971` en EN (`trial_day1_success.ts:116`; EN `trial_day1_success_en.ts:116`; §11.4, líneas 1264-1268).
- [ ] `NO CONTRADECIR` — La cifra `214` identifica la página abierta; no inventar número de expediente, fecha de apelación, sello, membrete o texto adicional no fijado por el spec (§5.2; §7.3; `EvidenceCatalogCase5EsA.ts:71`; EN `EvidenceCatalogCase5EnA.ts:71`).
- [ ] `AUSENTE` — No imprimir flechas, círculos, realces, la pregunta visible del `followUp`, explicaciones de culpabilidad ni la conclusión de que alguien plantó la tarjeta; el guion aporta esas inferencias en diálogo (§23.0; §11.4, líneas 1257-1269; §24.D I16).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La tarjeta fue decomisada en julio y la sociedad estaba disuelta desde 1971; el presente del caso es diciembre de 1982 (§10.1, líneas 558-560; §11.4, líneas 1266-1268; §24.D I4).
- [ ] `NO CONTRADECIR` — La escena fija el expediente abierto en la página 214; no imprimir una hora ni trasladar la hora de la fotografía de las 19:05 al icono (§5.2; §11.4, líneas 817-820; §11.1, líneas 903-908).
- [ ] `NO CONTRADECIR` — La fotografía de las 19:05 muestra que nadie pasó esa hoja y que seguía abierta; eso es una afirmación narrativa posterior, no una fecha que deba aparecer en el icono (`archivo_pasillo7_hotspots.ts:72`; `trial_day1_success.ts:117`; §24.C F7).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En la celda D1, Casimiro abre su expediente en la página 214 y señala una tarjeta pegada al papel; el activo no puede sugerir que la tarjeta estaba suelta o que era el fragmento de la mano (`celda_talks.ts:19`; EN `celda_talks_en.ts:19`).
- [ ] `PINTAR` — En `hotspot_mesa`, la defensa identifica el objeto como la apelación de Casimiro, repite la página 214, identifica la tarjeta pegada con engrudo y lee la compañía; después el Sargento confirma la disolución de 1971 (`archivo_pasillo7_hotspots.ts:70-77`; EN `archivo_pasillo7_hotspots_en.ts:70-77`).
- [ ] `PINTAR` — El `followUp` de D1-T3 responde «¿Qué estaba haciendo la víctima cuando la golpearon?» con el expediente abierto y la tarjeta adherida en la página 214; la prueba debe sostener esa respuesta visible (§11.4, líneas 1257-1269; `trial_day1_success.ts:110-118`; EN equivalente).
- [ ] `NO CONTRADECIR` — La defensa afirma que Nicanor vio el estante completo y el expediente abierto en esa página el sábado; no mostrar una página distinta, el expediente cerrado ni una hoja pasada (`trial_day1_success.ts:117`; EN `trial_day1_success_en.ts:117`; §24.D I14).
- [ ] `NO CONTRADECIR` — El expediente prueba qué estaba haciendo Casimiro y qué documento había dejado abierto; por sí solo no prueba quién colocó la esquina rota, quién escribió la tarjeta ni quién lo mató (§24.C F9-F10; §24.D I16).
- [ ] `PINTAR` — La entrega ocurre sólo después de examinar cuerpo, tomo y estante; el icono entra en el Acta como cierre de la investigación del pasillo 7 (`archivo_pasillo7_hotspots.ts:59-77`; `progress.ts:11`).

### F5 Estilo

- [ ] `PINTAR` — Repetir completo el contrato de §23.0 en el prompt: ilustración 2D HD de linaje Capcom Ace Attorney GBA/NDS; cel-shading de dos tonos planos con terminador duro; contorno carbón `#1A1A1A`; colores primarios saturados; televisión mexicana setentera/Chespirito; papel, madera, polvo, archivo judicial, listón, madera barnizada, latón envejecido y luz de tungsteno (§23.0, líneas 3974-3980).
- [ ] `PINTAR` — Aplicar el estilo de icono de Acta establecido: objeto centrado, fondo transparente y contorno carbón (§23.5, líneas 4086-4090).
- [ ] `AUSENTE` — Prohibidos fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, rosa/magenta en primer plano y texto inglés en la variante ES (§23.0, líneas 3978-3980).

### F6 Localización

- [ ] `PINTAR` — El icono base `expediente_casimiro` es compartido por los catálogos ES/EN; la composición, el objeto, la página y las marcas físicas no cambian (`EvidenceCatalogCase5EsA.ts:69-73`; `EvidenceCatalogCase5EnA.ts:69-73`).
- [ ] `PINTAR` — El catálogo EN conserva la misma identidad: `Casimiro's File`, victim’s appeal file, open at page 214, with a business card seized in July (`EvidenceCatalogCase5EnA.ts:69-73`).
- [ ] `NO CONTRADECIR` — No crear una variante `_en` de icono salvo que otro contrato la exija: §23.5 lista un único `expediente_casimiro`, y las variantes localizadas se reservan a las láminas cuyo texto legible sostiene un argumento (§23.5, líneas 4086-4090; §23.3, líneas 4064-4068).

## Consistencia (regenerar juntos)

- `bg_archivo_pasillo7` — comparte la mesa de consulta, el legajo abierto atado con listón y el momento del crimen; el fondo fija el espacio, no el detalle del expediente. Regenerar juntos; este activo no es fuente de verdad del otro (§23.1, línea 3987; `archivo_pasillo7_hotspots.ts:69-77`).
- `examine_esquina_tarjeta` — comparte la tarjeta de presentación decomisada en julio y la cadena de documentos, pero esta lámina es el fragmento de otro hallazgo; regenerar juntos para no confundir la tarjeta completa con la esquina plantada. Este activo no es fuente de verdad del otro (§23.3, línea 4047; §24.C F9-F10).
- `examine_ficha_domicilio` — comparte la familia documental y la tarjeta del cedulario, pero representa la tarjeta de domicilio de Don Ramón con esquina faltante, no el expediente de Casimiro. Regenerar juntos por continuidad de papel y tipografía; este activo no es fuente de verdad del otro (§23.3, línea 4060).
- `examine_expediente_serie` — comparte la tarjeta de julio como panel A y el nombre de la sociedad; el tablero de cinco paneles no sustituye al expediente abierto ni decide su composición. Regenerar juntos; este activo no es fuente de verdad del otro (§23.3, línea 4055; §24.C F11).
- `plate_foto_pericial` — comparte la mesa de consulta y el legajo abierto de la escena; la fotografía muestra el contexto, mientras este icono identifica el objeto del Acta. Regenerar juntos; este activo no es fuente de verdad del otro (§23.4, línea 4077; §11.1, líneas 903-908).
- `expediente_casimiro` ES ↔ catálogo EN — gemelos de idioma del mismo icono: misma composición, transparencia, escala y marcas físicas; sólo se localizan las etiquetas del catálogo si se muestran fuera de la imagen. Regenerar juntos; ninguna variante es fuente de verdad de la otra.

## Conflictos abiertos

- §23.5 sólo fija para el icono un objeto centrado sobre fondo transparente y no define si debe mostrarse cerrado, abierto en la página 214, o como legajo abierto con la tarjeta visible; el guion y los catálogos exigen el segundo/tercer estado para la identidad narrativa (`EvidenceCatalogCase5EsA.ts:69-73`; §11.4, líneas 1263-1268). No resolver aquí: conservar la identidad del expediente y dejar el encuadre exacto al contrato del pipeline.
- El catálogo describe una tarjeta de presentación pegada en la página, mientras el guion añade el adhesivo específico «engrudo» y la anotación manuscrita de la sociedad disuelta (`EvidenceCatalogCase5EsA.ts:71`; `archivo_pasillo7_hotspots.ts:73-75`; `trial_day1_success.ts:115-116`). No es una contradicción de hechos, pero el catálogo no basta para aceptar esos detalles visuales.

## Hallazgos de auditoría 2026-09-19

- ~~No se inspeccionó ninguna imagen por protocolo. No se confirma ningún defecto visual de la generación actual; esta hoja contiene únicamente hechos derivados del spec, catálogos y guiones ES/EN.~~ (Sustituido por la auditoría del icono regenerado en Lote A.)

## Hallazgos de auditoría 2026-09-19 (regeneración Lote A)

Auditoría del icono en `tools/raw/case5/case5_evidence_icons_raw.png` celda col 1, fila 1 (y fuente 1:1). Recorte `cell_expediente_casimiro`. **Veredicto: cumple.**

### Cumple

- ✓ Legajo/expediente **abierto** atado con listón, no carpeta cerrada (F1).
- ✓ Tarjeta de presentación pegada con engrudo en la página; cifra `214` en la hoja (F1/F3).
- ✓ En la fuente 1:1 se lee `Enciclopedias El Saber Universal, Sociedad Anónima` (F2). Fondo magenta. Sin cuerpo, silueta, tomo ni pasillo (F1 AUSENTE).

### Defectos confirmados

- [ ] **MENOR (F2)** — La anotación `sociedad disuelta desde 1971` no está al pie de la tarjeta (es TEXTO EXACTO sólo si el encuadre la muestra). El icono de Acta no la necesita para nombrar el expediente abierto.

### Recomendación

Ninguna bloqueante.
