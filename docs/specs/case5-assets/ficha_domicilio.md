# ficha_domicilio — hoja de hechos

Clase: `icon`. Espec: §5.4, §23.0 y §23.5; identidad detallada vinculada en §23.3. Guion: clímax E4, `climax_choices` y `climax_stage4` (ES/EN). Variante de idioma: icono compartido `assets/ficha_domicilio.webp`; el texto localizado pertenece a `examine_ficha_domicilio.webp` / `examine_ficha_domicilio_en.webp`.

## Mapa semántico

- Tarjeta física del cedulario correspondiente a la vecindad de Don Ramón: calle del Espanto 8, vivienda/apartment 72.
- Tarjeta de cartulina crema, apaisada, con seis campos en dos columnas y una esquina inferior derecha ausente.
- La tarjeta fue levantada en 1969 y actualizada en agosto de 1982; el icono debe comunicar una tarjeta de domicilio archivada, no una ficha de perfil.
- La esquina faltante y su borde recto y limpio son la identidad compartida con `esquina_tarjeta` / `examine_esquina_tarjeta`.
- Como icono de Acta, el encuadre es un recorte centrado del objeto sobre transparencia; no incluye la sala, personajes ni la escena completa del clímax.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Un único objeto: tarjeta del cedulario de cartulina crema, en formato apaisado, centrada y suficientemente grande para reconocer sus seis campos (§5.4, línea 306; §23.5).
- [ ] `PINTAR` — La tarjeta muestra una división de dos columnas: cinco campos a la izquierda y el domicilio a la derecha; el último campo izquierdo es el estado de la puerta (§5.4, línea 306; catálogo ES `EvidenceCatalogCase5EsB.ts:78-83`; EN `EvidenceCatalogCase5EnB.ts:78-83`).
- [ ] `PINTAR` — Falta la esquina inferior derecha de la tarjeta; el corte es recto y limpio y debe corresponder al fragmento de `esquina_tarjeta` (§5.4, línea 306; catálogo ES/EN, líneas 80-83; §23.3, línea 4060).
- [ ] `PINTAR` — La tarjeta conserva sus marcas de antigüedad: `1969` y `VIII` manuscritos en el ángulo superior (§23.3, línea 4060; §18.5, líneas 3558-3560).
- [ ] `NO CONTRADECIR` — La imagen representa una tarjeta concreta del cedulario, no una tarjeta de identidad, ficha de personaje, tarjeta del museo ni expediente judicial (§5.4, línea 306; §18.5, líneas 3548-3565).
- [ ] `NO CONTRADECIR` — El icono no debe intentar mostrar la lectura completa campo por campo; esa legibilidad pertenece al `detailedView` asociado (§23.3, línea 4060; catálogo ES/EN, líneas 80-83).

### F2 Texto en imagen

- [ ] `NO CONTRADECIR` — El icono no necesita texto legible: el catálogo remite la lectura al `detailedView`, y §23.5 exige un objeto centrado con transparencia, no una placa documental (§23.3, línea 4060; §23.5).
- [ ] `NO CONTRADECIR` — Si se sugieren líneas mecanografiadas, no inventar nombres, membretes, sellos, números de expediente ni texto distinto del contrato del `detailedView` (§5.4, línea 306; §23.3, línea 4060).
- [ ] `NO CONTRADECIR` — La `s` minúscula caída es un defecto verificable de las vistas detalladas cuestionadas; el icono puede sugerir mecanografía, pero no sustituye la prueba de ese defecto (§23.3, líneas 4060 y 4068; §24.D I24/I31).

### F3 Cifras, fechas y relaciones

- [ ] `NO CONTRADECIR` — `1969` es el año de levantamiento y `VIII` corresponde a la actualización de agosto de 1982; no usar la fecha del crimen como fecha de la tarjeta (§5.4, línea 306; §18.5, líneas 3558-3560; §24.D I10).
- [ ] `NO CONTRADECIR` — El domicilio canónico es vivienda/apartment 72, no vivienda 4; la corrección de identidad del domicilio se aplica en ES y EN (§0, tabla de pasadas, lente 22; §18.5, línea 3548; `climax_choices_en.ts:50`).
- [ ] `NO CONTRADECIR` — La tarjeta registra catorce meses de atraso, no los diecisiete meses del sobre de renta; esa diferencia sólo debe verse al abrir el detalle (§18.5, líneas 3551-3556 y 3566-3568).

### F4 Contrato en pantalla

- [ ] `PINTAR` — El icono se añade al Acta cuando el secretario encuentra la tarjeta tras recorrer durante cuarenta segundos el cajón «Donceles a Espanto» (§18.4, `climax_choices.ts:45-54`; EN `climax_choices_en.ts:45-54`).
- [ ] `PINTAR` — La prueba se presenta exclusivamente como respuesta a la etapa E4, cuya pregunta pide qué había en el cedulario que tocaba directamente al juicio (`climax_stage4.ts:9-19`; EN `climax_stage4_en.ts:9-19`).
- [ ] `NO CONTRADECIR` — Al presentar el icono, el `detailedView` debe sostener la lectura de domicilio, ingreso, objetos de valor, puntualidad, observaciones y estado de la puerta (§18.5, líneas 3548-3560; §23.3, línea 4060).
- [ ] `NO CONTRADECIR` — El detalle de la esquina faltante permite cotejar el fragmento hallado en la mano de la víctima y completar los cuatro renglones del domicilio; el icono sólo debe preservar esa misma geometría (§18.5, líneas 3570-3575; §24.C F9).
- [ ] `NO CONTRADECIR` — La tarjeta prueba la procedencia del fragmento y el acceso al cedulario bajo custodia de Berrondo, pero por sí sola no identifica al mecanógrafo ni al homicida (§18.5, líneas 3577-3580; §24.D I16).
- [ ] `AUSENTE` — No incluir flechas, círculos, realces, etiquetas de respuesta, personajes, manos, sobre encerado, pinzas, mesa del secretario ni fondo de tribunal; esos elementos pertenecen al cotejo narrado, no al icono (§23.0; §23.5; §18.5, líneas 3571-3575).

### F5 Estilo y prohibidos

- [ ] Repetir completo en el prompt de regeneración el contrato §23.0: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA/Nintendo DS) en alta definición; cel-shading de colores planos con terminador duro, dos tonos por superficie y ; contorno continuo carbón `#1A1A1A`, más grueso en la silueta; anatomía sólo cuando corresponda al objeto; colores primarios saturados (§23.0, líneas 3974-3979).
- [ ] Repetir el tema §23.0: televisión mexicana de los años setenta, universo Chespirito / El Chapulín Colorado, melodrama judicial tratado en serio, con papel, madera, polvo, archivo judicial, listón, madera barnizada, latón envejecido y luz de tungsteno cuando el encuadre lo permita (§23.0).
- [ ] Prohibir fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano de superhéroes, marcas de agua, texto en inglés dentro de la imagen salvo variantes EN exigidas, y cualquier rosa o magenta en primer plano (§23.0).
- [ ] `PINTAR` — Estilo de icono de Acta: objeto centrado, fondo transparente y contorno carbón; el resultado no es la placa de examen de 960×540 ni una fotografía pericial (§23.5; arquitectura `docs/architecture/asset-pipeline.md`, regla de identidad icono/detailedView).

### F6 Localización

- [ ] `PINTAR` — El icono `ficha_domicilio.webp` es compartido por ES y EN: la localización se realiza en `examine_ficha_domicilio.webp` / `_en.webp`, no creando un icono textual distinto (§23.3, líneas 4064-4068; catálogo ES/EN, líneas 78-83).
- [ ] `NO CONTRADECIR` — La composición, cartulina, fechas, esquina faltante y defecto físico deben coincidir con ambas variantes del `detailedView`; sólo cambia el texto legible de la placa (§23.3, líneas 4060 y 4064).
- [ ] `NO CONTRADECIR` — El icono compartido no debe contener texto dependiente del idioma; si aparece alguna marca, `1969` y `VIII` permanecen iguales en ambas variantes (§23.3, línea 4060).

## Consistencia (regenerar juntos)

- `examine_ficha_domicilio` / `examine_ficha_domicilio_en` — comparte la tarjeta concreta, sus seis campos, las fechas `1969`/`VIII`, el corte inferior derecho y la identidad del domicilio. Regenerar juntos; este icono no es fuente de verdad del detalle.
- `esquina_tarjeta` / `examine_esquina_tarjeta` — comparte la esquina arrancada, cartulina crema, cuatro renglones, escala relativa, borde recto y limpio y el domicilio 72. Regenerar juntos; este activo no es fuente de verdad del fragmento.
- `plate_anatomia_ficha` — comparte la familia material y la anatomía de seis campos del cedulario. La placa usa campos vacíos y no fija las respuestas de esta tarjeta. Regenerar juntos; este activo no es fuente de verdad de la placa.
- `fichero_cedulario` — comparte la procedencia como tarjeta física dentro del cedulario de once mil cuatrocientas siete tarjetas ordenadas por calle. Regenerar juntos para impedir que el icono parezca una ficha aislada de otra colección; este activo no es fuente de verdad del fichero.
- `examine_maquina` / `examine_expediente_serie` / `examine_nota_renta` — comparten la familia de documentos mecanografiados y el defecto de la `s` caída, pero no deben imponer texto ni composición al icono. Regenerar juntos; este activo no es fuente de verdad de esos documentos.

## Conflictos abiertos

- El catálogo ES/EN describe el icono como tarjeta con seis campos y esquina faltante, mientras §23.3 fija la lectura detallada y todas las respuestas legibles en `examine_ficha_domicilio`; no se resuelve aquí qué cantidad mínima de líneas debe insinuarse en el recorte del icono (§23.3, línea 4060; catálogos, líneas 78-83).
- La lectura del domicilio usa palabras completas en §18.5 (`ocho`, `setenta y dos`), mientras el cotejo del fragmento muestra abreviaturas y cifras (`8`, `viv. 72.`); el icono compartido no imprime texto y deja ambas cadenas al `detailedView`/guion (§18.5, líneas 3550 y 3575; §23.3, línea 4060).
- El catálogo inglés fija `Address Card` y una descripción localizada, pero el icono es común a idiomas; se conserva la regla del spec de no duplicar el icono y no se crea una variante `_en` (§23.3, líneas 4064-4068; `EvidenceCatalogCase5EnB.ts:78-83`).

## Auditoría de imagen — 2026-09-19

- No se inspeccionó ninguna imagen, por instrucción del protocolo. No hay defectos visuales confirmados ni severidades que registrar.
- Esta hoja es un contrato derivado del spec y del guion; no certifica el estado actual de `assets/ficha_domicilio.webp`.

## Hallazgos de auditoría 2026-09-21, icono derivado

**Veredicto: CUMPLE la identidad y el encaje.** Inspección del icono final 128×128 y del recorte de tarjeta que lo genera.

- F1/F3/F4: tarjeta crema apaisada, 1969/VIII, cinco grupos izquierdos y resto del domicilio junto al corte inferior derecho. El hueco corresponde a la pieza de `esquina_tarjeta`.
- F2/F5/F6: objeto centrado sobre transparencia, sin objetos extra ni etiquetas añadidas. A tamaño de icono la mecanografía se lee como líneas; la lectura localizada pertenece a las placas ES/EN.
- Consistencia: extraído de la misma maestra que las dos placas detalladas, con idéntica máscara de esquina. El procesador vuelve a exportar este PNG después de la hoja de iconos para conservar esa identidad.

Sin defectos nuevos. Fuentes: [[tools/raw/case5/address_composition.md]].
