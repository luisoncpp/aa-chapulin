# nota_mecanografiada — hoja de hechos

Clase: `icon` / prueba del Acta con `detailedView`. Espec: §23.0, §23.3, §5.1, §9.1, §13.2 y §24.C. Guion: D2 vecindad, D2-T1 declaración 3 y contradicción resolutoria. La hoja cubre el icono `assets/nota_mecanografiada.webp` y la vista ampliada `assets/examine_nota_renta.webp` / `_en.webp`.

## Mapa semántico y alcance

Es la nota mecanografiada que llegó dentro del sobre amarillo dejado bajo la puerta del Señor Barriga el 29 de noviembre. El icono debe representar la misma media cuartilla de papel cebolla que amplía la vista de examen; no es el recibo, el sobre completo ni una ficha mecanografiada del museo. La identidad probatoria descansa en tres rasgos que el diálogo lee: está hecha a máquina, habla en tercera persona sobre el deudor y usa la fórmula «se ruega» / “Please issue”. La vista ampliada además fija el defecto de la `s` minúscula caída.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — El icono representa una media cuartilla mecanografiada de papel cebolla, con tres renglones y fórmula administrativa; debe ser reconocible como la nota que venía en el sobre amarillo (§5.1, línea 284; `src/state/Private/EvidenceCatalogCase5EsA.ts:77-82`; EN: `EvidenceCatalogCase5EnA.ts:77-82`).
- [ ] `PINTAR` — La `detailedView` muestra la media cuartilla fotografiada de plano con luz rasante, cinta bicolor gastada y una marca circular de liga en una esquina (§23.3, línea 4051; §9.1, líneas 1348-1360).
- [ ] `PINTAR` — La nota aparece junto al sobre de manila abierto y sin timbres; el sobre es contexto de la prueba, no parte del papel ni un sobre postal (§23.3, línea 4051; `src/case/case5/Private/vecindad_hotspots.ts:24-35`; EN: `vecindad_hotspots_en.ts:24-36`).
- [ ] `PINTAR` — El documento conserva apariencia formal, impersonal y en tercera persona: el pago está «a cargo del C. Ramón Valdés» y solicita expedir y conservar el recibo (§9.1, líneas 1348-1356; §13.2, líneas 1802-1807).
- [ ] `AUSENTE` — Firma, membrete y fecha (§23.3, línea 4051; catálogos ES/EN, `EvidenceCatalogCase5EsA.ts:77-82`, `EvidenceCatalogCase5EnA.ts:77-82`).
- [ ] `AUSENTE` — Flechas, círculos de señalamiento, realces de respuesta, sellos postales, timbres, recibo completo, billetes, máquina de escribir o identidad visual de Berrondo; ninguno forma parte del contrato de esta prueba (§23.0; §23.3, línea 4051; §24.C F13, línea 4165).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — La variante ES debe permitir leer: «Adjunto el pago de diecisiete mensualidades vencidas a cargo del C. Ramón Valdés, inquilino de la vivienda 72.» (`src/case/case5/Private/vecindad_hotspots.ts:28-35`; `trial_day2_t1.ts:60-70`).
- [ ] `TEXTO EXACTO` — La variante ES debe permitir leer: «Se ruega expedir el recibo correspondiente y conservarlo. No se requiere respuesta.» (`src/case/case5/Private/vecindad_hotspots.ts:28-35`; `trial_day2_t1.ts:60-70`).
- [ ] `PINTAR` — Todas las `s` minúsculas impresas aparecen media línea por debajo del renglón y medio grado inclinadas a la izquierda; es un defecto de la máquina, no un realce didáctico (§23.3, línea 4051; §16.2, líneas 3019-3021).
- [ ] `AUSENTE` — No imprimir «la ese caída», el diagnóstico de la barra de tipos, la identidad de la Olivetti ni la conclusión de que la nota no la escribió el inquilino; esas afirmaciones pertenecen al diálogo y a la comparación posterior (§13.2, líneas 1832-1849; §16.2, líneas 3019-3021).
- [ ] `TEXTO EXACTO` — La variante EN debe conservar el contenido equivalente: “Enclosed is payment for seventeen overdue months charged to C. Ramon Valdes, tenant of dwelling 72.” y “Please issue the corresponding receipt and retain it. No reply required.” (`src/case/case5/Private/vecindad_hotspots_en.ts:28-36`; `trial_day2_t1_en.ts:60-70`).
- [ ] `PINTAR` — La variante EN conserva la misma composición, defecto mecánico, marca circular, ausencia de firma/membrete/fecha y sobre abierto; sólo cambia el texto legible (§23.3, línea 4064; `EvidenceCatalogCase5EnA.ts:77-82`). Debe quedar visible al menos una `s` minúscula para sostener el defecto tipográfico.

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — El documento acompaña el pago de diecisiete mensualidades y el dinero asciende a $4,250, pero la cifra monetaria pertenece al relato y al recibo; no debe aparecer como sello o anotación inventada en la nota (§13.1, líneas 1324-1328, 1373-1382; §24.C F13, línea 4165).
- [ ] `NO CONTRADECIR` — La fecha narrativa es 29 de noviembre, pero la nota no lleva fecha impresa (§4.3, línea 251; §23.3, línea 4051; §24.C F13, línea 4165).
- [ ] `NO CONTRADECIR` — Fue dejada bajo la puerta antes de que Barriga la encontrara a las nueve de la mañana; la nota no tiene hora visible y no prueba quién la dejó (§13.1, líneas 1364-1371; §24.C F13, línea 4165).
- [ ] `NO CONTRADECIR` — La redacción atribuye el pago al cargo del inquilino en tercera persona; no convertir la nota en prueba de pago personal de Don Ramón ni en atribución directa a Berrondo (§13.2, líneas 1832-1849; §24.C F13, línea 4165).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En la investigación D2, el jugador ve el sobre de manila abierto y la media cuartilla a su lado; Barriga dice que conserva el sobre, el papel y la copia del recibo (`vecindad_hotspots.ts:24-36`; EN: `vecindad_hotspots_en.ts:24-36`).
- [ ] `PINTAR` — La defensa lee que el pago está «a cargo del C. Ramón Valdés» y pide expedir/conservar el recibo; luego identifica que el texto está mecanografiado, en tercera persona y usa «se ruega» (§9.1, líneas 1348-1356; `vecindad_hotspots.ts:28-35`). La imagen no puede parecer manuscrita ni informal.
- [ ] `PINTAR` — En D2-T1 declaración 3, Barriga lee la nota a la corte y el juez reacciona específicamente a «se ruega» (`trial_day2_t1.ts:59-70`; EN: `trial_day2_t1_en.ts:59-70`).
- [ ] `PINTAR` — La contradicción resolutoria usa la nota para mostrar que Don Ramón no pudo redactarla: no tiene máquina ni mesa, y sus recados llegan en envolturas de torta y con faltas (§13.2, líneas 1832-1849; `trial_day2_success.ts:73-86`; EN: `trial_day2_success_en.ts:73-86`).
- [ ] `NO CONTRADECIR` — La prueba sólo excluye a Don Ramón como redactor; no identifica por sí sola al autor, no demuestra quién entregó el sobre y no prueba que Berrondo ordenara el pago (§13.2, líneas 1848-1849; §24.C F13, línea 4165).
- [ ] `PINTAR` — La nota comparte la `s` caída con la tarjeta de julio y la ficha del museo; el defecto debe ser nítido y repetible, sin flecha o círculo explicativo (§16.2, líneas 3019-3021; §23.3, línea 4055).
- [ ] `NO CONTRADECIR` — La prueba no debe introducir la macro de barras de tipos, el número 41 de la Olivetti ni una conclusión sobre quién pulsó las teclas; esos hechos pertenecen a `examine_maquina` y al clímax E5 (§18.6, líneas 3644-3650; §23.3, líneas 4051 y 4059; §24.C F10, línea 4162).

### F5 Estilo

- [ ] Contrato §23.0 completo en cualquier prompt de regeneración: ilustración 2D HD de linaje *Capcom Ace Attorney* GBA/NDS; cel-shading de colores planos con terminador duro y dos tonos por superficie; contorno carbón `#1A1A1A`; registro mexicano setentero/Chespirito; papel, madera, polvo, archivo judicial y luz de tungsteno; prohibidos fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua y texto inglés salvo la variante EN (§23.0).
- [ ] `AUSENTE` — No introducir rosa o magenta en primer plano: `#FF00FF` queda reservado para cromatización (§23.0; [[docs/specs/artistic-direction.md]] §5).
- [ ] `AUSENTE` — No añadir indicadores didácticos sobre la `s`, la identidad del autor o el argumento; la vista debe permanecer como lámina pericial neutral (§23.0; §23.3, línea 4051).

### F6 Localización

- [ ] `PINTAR` — Generar ES y EN como gemelas de composición: misma media cuartilla, luz rasante, papel cebolla, tres renglones, cinta bicolor, marca circular, sobre abierto sin timbres, defecto de la `s` y ausencias físicas (§23.3, líneas 4051 y 4064).
- [ ] `TEXTO EXACTO` — ES conserva «se ruega» y «No se requiere respuesta»; EN conserva “Please issue the corresponding receipt and retain it. No reply required.” (`vecindad_hotspots.ts:28-35`; `vecindad_hotspots_en.ts:28-36`).
- [ ] `PINTAR` — La traducción EN debe retener una `s` minúscula visible para que el defecto siga siendo comprobable; no cambiar marcas físicas, composición ni contexto (§23.3, línea 4064; §16.2, líneas 3019-3021).

## Consistencia (regenerar juntos)

- `nota_mecanografiada` ↔ `examine_nota_renta.webp` / `_en.webp` — el icono y la vista ampliada deben representar la misma media cuartilla, no dos documentos parecidos. Regenerar juntos; ninguno es fuente de verdad del otro.
- `examine_nota_renta` ES ↔ `_en` — gemelas localizadas: composición, papel, cinta, marca, sobre, ausencia de firma/membrete/fecha y `s` caída idénticos; sólo cambia el texto legible (§23.3, línea 4064). Regenerar juntas; ninguna variante es fuente de verdad de la otra.
- `examine_esquina_tarjeta` / `_en` — comparten la misma firma mecánica de la `s` minúscula caída en documentos mecanografiados. Regenerar juntos; este activo no es fuente de verdad del otro.
- `examine_expediente_serie` / `_en` — el panel A conserva otra muestra con la misma `s` caída; mantener la geometría del defecto sin importar el contenido de los otros paneles (§23.3, línea 4055). Regenerar juntos; este activo no es fuente de verdad del otro.
- `examine_ficha_domicilio` / `_en` — comparte la convención de todas las `s` caídas y el domicilio de vivienda 72; no importar sus seis campos ni su esquina faltante a esta nota. Regenerar juntos; este activo no es fuente de verdad del otro.
- `examine_maquina` — comparte el defecto de la barra de la `s`; la máquina explica el rasgo, pero esta prueba no debe mostrarla ni su número 41 (§23.3, líneas 4051 y 4059). Regenerar juntos; este activo no es fuente de verdad del otro.
- `recibo_renta` — aparece junto a la nota y es el `followUp` de la contradicción; comparte el pago y la fecha narrativa, no la composición visual. Regenerar juntos para conservar la separación entre nota, sobre y recibo; este activo no es fuente de verdad del otro.

## Conflictos abiertos

- §23.3 exige tres renglones, mientras el guion lee dos frases largas que deben repartirse tipográficamente en tres líneas (`docs/specs/case-5-el-tomo-trece.md:4051`; §13.1, líneas 1348-1356; `vecindad_hotspots.ts:28-35`). No inventar una tercera oración: resolver sólo el corte de línea o corregir el spec si se requiere otra transcripción.
- La dirección de arte exige «sin fecha», mientras el hecho narrativo fija el 29 de noviembre como día de entrega (§23.3:4051; §4.3:251; §24.C F13:4165). La fecha es contexto, no texto impreso.
- El catálogo ES/EN resume tres renglones y fórmula de oficio, pero no transcribe la nota (`EvidenceCatalogCase5EsA.ts:77-82`; `EvidenceCatalogCase5EnA.ts:77-82`). Las cadenas exactas válidas provienen de los diálogos de cada idioma; no ampliar el texto más allá de ellas.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen por protocolo. No se confirma ningún defecto visual de la generación actual; esta hoja contiene sólo hechos derivados del spec, catálogos y guiones ES/EN.
- La aceptación futura debe comprobar simultáneamente la identidad compartida del icono y la vista ampliada, las tres líneas, la `s` caída, la marca circular, el sobre abierto sin timbres y la ausencia de firma, membrete y fecha.
