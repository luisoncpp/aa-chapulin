# efectos_casimiro — hoja de hechos

Clase: `icon` de Acta con `detailedView`. Espec: §5.3, §14.3, §15.1, §23.0, §23.3 y §24.C. Guion: `penal_efectos` / `hotspot_caja`, `trial_day3` y sus variantes inglesas. La hoja cubre el icono `assets/efectos_casimiro.webp` y la vista ampliada `assets/examine_efectos.webp` / `assets/examine_efectos_en.webp`.

La fuente de verdad es el spec, no una imagen existente. El icono debe identificar los efectos de Casimiro como una sola prueba del Acta; la vista ampliada debe mostrar los dos paneles documentales exigidos por §23.3. No se inspeccionó ninguna imagen.

## Mapa semántico

- **Lugar y momento:** efectos recuperados de la caja 214-J en la bodega de efectos del Penal del Distrito, el 8 de diciembre a las 2:40 PM (`§14.3`; `penal_efectos.ts:17-24`).
- **Identidad del icono:** los efectos de la víctima, reconocibles por la libreta de pasta negra y la copia al carbón del oficio; el catálogo añade dos relojes parados al lado (`§5.3`; `EvidenceCatalogCase5EsB.ts:64-71`, `EvidenceCatalogCase5EnB.ts:64-71`).
- **Vista ampliada:** dos paneles: libreta a la izquierda; copia al carbón morada a la derecha; dos relojes juntos al lado del material documental (`§23.3`, fila `examine_efectos`).
- **Cadena probatoria:** los cinco puntos de la libreta enlazan la tarjeta de julio, la ficha del museo de agosto, el defecto de la máquina y el período 1962–1971; la copia acredita el oficio del 8 de noviembre (`§14.3`; `§15.1`; `§24.C F10`).
- **No forma parte del activo:** la bodega completa, la caja 214-J como composición, la máquina de escribir, la conclusión de culpabilidad o cualquier flecha/círculo que resuelva el argumento (`§23.0`; `§23.3`).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — El icono del Acta es un recorte de objeto, sin habitación ni personajes, y debe representar la misma identidad que su `detailedView`; el catálogo ES/EN usa `assets/efectos_casimiro.webp` por defecto y la vista usa `examine_efectos.webp` / `_en.webp` (`EvidenceCatalogCase5Helpers.ts:8-22`; `EvidenceCatalogCase5EsB.ts:64-71`; `EvidenceCatalogCase5EnB.ts:64-71`).
- [ ] `PINTAR` — La vista ampliada tiene dos paneles: a la izquierda, la libreta de pasta negra abierta por los cinco puntos; a la derecha, la copia al carbón del oficio (`§23.3`, fila `examine_efectos`; `§14.3`).
- [ ] `PINTAR` — La libreta tiene letra menuda y regular/apretada, márgenes trazados a regla y cinco puntos numerados legibles; el punto cinco está más torcido que los otros cuatro (`§23.3`, fila `examine_efectos`; `§14.3`; `penal_efectos_hotspots.ts:23-29`).
- [ ] `PINTAR` — La copia es morada y traslúcida, como papel carbón, y lleva un sello de acuse de la fiscalía fechado `8 NOV`; encima aparece `pendiente` escrito a lápiz por otra mano (`§23.3`, fila `examine_efectos`).
- [ ] `PINTAR` — Al lado de los documentos aparecen dos relojes de pulsera parados, no uno solo ni relojes funcionando (`§14.3`; `§23.3`, fila `examine_efectos`; `EvidenceCatalogCase5EsB.ts:69-71`).
- [ ] `NO CONTRADECIR` — El moño de corbata pertenece al conjunto de efectos descrito en la caja, pero §23.3 no exige que aparezca en la vista ampliada; no usarlo para sustituir la libreta, la copia o los relojes (`§14.3`; `§23.3`; `penal_efectos_hotspots.ts:15`).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — Deben ser legibles los números y el contenido de los cinco puntos: tarjeta decomisada en julio con la `s` caída; ficha del museo de agosto con la `s` caída; mismo aparato; uso del aparato entre 1962 y 1971; y deseo de salvarse (`§14.3`; `trial_day3_success.ts:9-17`; `penal_efectos_hotspots.ts:25-29`).
- [ ] `TEXTO EXACTO` — La copia debe conservar el oficio dirigido al ministerio público, la oferta de entregar un fichero a cambio de estudiar la reducción de condena y la fecha del `8 de noviembre` / `8 NOV` (`§14.3`; `penal_efectos_hotspots.ts:19-21`).
- [ ] `TEXTO EXACTO` — La anotación superpuesta debe decir `pendiente`, manuscrita a lápiz; no sustituirla por `culpable`, `prueba` ni una conclusión narrativa (`§23.3`, fila `examine_efectos`).
- [ ] `AUSENTE` — No añadir flechas, círculos, realces, pies explicativos ni texto que señale cuál punto resuelve la apertura; la imagen muestra la prueba, el guion formula la deducción (`§23.0`; `§23.3`; `§15.1`).

### F3 Cifras, fechas y estados

- [ ] `NO CONTRADECIR` — El oficio corresponde al 8 de noviembre, no al 8 de diciembre; la vista del 8 de diciembre es el momento de entrega de los efectos (`§14.3`; `§15.1`; `§23.3`).
- [ ] `NO CONTRADECIR` — La libreta fue escrita en el penal el 8 de noviembre y contiene cinco puntos; no convertirla en una nota redactada durante la diligencia (`§15.1`; `§24.C F10`).
- [ ] `NO CONTRADECIR` — Ambos relojes están parados en la investigación; la frase posterior del epílogo de que daban bien la hora no cambia el estado de esta prueba (`§14.3`; tabla de consecuencias de §24.C).
- [ ] `NO CONTRADECIR` — `1962–1971` pertenece al punto cuatro de la libreta; no añadir una etiqueta externa que afirme que la máquina aparece en esta lámina (`§14.3`; `§24.C F10`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En `hotspot_caja`, el narrador enumera dos relojes parados, un moño, la libreta negra y el papel carbón doblado en cuatro; la vista no puede negar que esos son los efectos recuperados (`§14.3`; `penal_efectos_hotspots.ts:15`).
- [ ] `PINTAR` — El papel carbón debe poder reconocerse como copia del oficio que ofrece entregar un fichero a cambio de estudiar la reducción de condena, con fecha 8 de noviembre (`§14.3`; `penal_efectos_hotspots.ts:19-21`).
- [ ] `PINTAR` — La libreta debe sostener la lectura de los cinco puntos cuando `efectos_casimiro` se presenta en la apertura del día 3 (`§15.1`; `trial_day3_success.ts:9-17`).
- [ ] `NO CONTRADECIR` — La defensa presenta los efectos para responder qué iba a señalar Casimiro, pero la imagen no debe imprimir la conclusión judicial ni atribuir por sí sola el homicidio (`§15.1`; `trial_day3.ts:23-30`).
- [ ] `NO CONTRADECIR` — La libreta documenta el intento de Casimiro de ayudar a la defensa, pero su condena de julio sigue firme; el activo no puede convertirlo en absuelto o víctima inocente en sentido jurídico (`§15.1`).
- [ ] `NO CONTRADECIR` — El icono y la vista ampliada deben conservar una sola identidad de prueba; no crear un icono de la máquina, del oficio aislado o de los relojes (`§5.3`; `EvidenceCatalogCase5Helpers.ts:8-22`).

### F5 Estilo y prohibidos

- [ ] Contrato §23.0 completo en cualquier prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* GBA/DS en alta definición; ; contorno continuo carbón `#1A1A1A`, más grueso en la silueta; colores primarios saturados; registro de televisión mexicana de los setenta con papel, madera, polvo, archivo judicial, madera barnizada, latón envejecido y luz de tungsteno.
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto inglés salvo la variante EN exigida y cualquier tono rosa o magenta en primer plano (`§23.0`).
- [ ] `AUSENTE` — Flechas, círculos, realces de color o una puesta en escena de la caja completa; es una vista documental estilizada, no una infografía de la respuesta (`§23.3`).

### F6 Localización

- [ ] `PINTAR` — Existe `examine_efectos_en.webp`; ES y EN conservan composición, materiales, dos paneles, cinco puntos, punto cinco torcido, copia morada, sello/fecha, anotación y relojes parados (`§23.3`, lista de 14 variantes).
- [ ] `TEXTO EXACTO` — La variante EN conserva la cadena probatoria: five numbered points, the card seized in July, the museum card in August, the same device, typing from `1962 to 1971`, and the final statement about wanting to save himself (`penal_efectos_hotspots_en.ts:20-29`; `trial_day3_success_en.ts:9-17`).
- [ ] `TEXTO EXACTO` — La variante EN traduce la anotación visible como `pending` si la anotación se localiza; las marcas físicas y la fecha del oficio permanecen iguales (`§23.3`; `EvidenceCatalogCase5EnB.ts:64-71`).
- [ ] `NO CONTRADECIR` — La regla de conservar una `s` minúscula caída se aplica a las líneas traducidas cuestionadas; no inventar una `s` caída en `pending` ni eliminar el defecto de los puntos que lo describen (`§23.3`, regla de localización del defecto).

## Consistencia (regenerar juntos)

- `efectos_casimiro` ↔ `examine_efectos` / `examine_efectos_en` — misma prueba del Acta: libreta negra, copia al carbón y relojes al lado. Regenerar juntos; el icono no es fuente de verdad de la vista ampliada (`§5.3`; `§23.3`; catálogos ES/EN).
- `penal_efectos` / `hotspot_caja` — comparte caja 214-J, dos relojes, moño, libreta y papel carbón; la escena fija el origen y la vista fija los detalles legibles. Regenerar juntos; la escena no es fuente de verdad de la composición ampliada (`§14.3`; `penal_efectos_hotspots.ts:11-34`).
- `trial_day3` / `trial_day3_success` — comparte los cinco puntos, sus números, la fecha de escritura y la función de `openingPresent`; el diálogo fija el contrato narrativo, no el encuadre. Regenerar juntos; el guion no es fuente de verdad de materiales no descritos en §23.3 (`§15.1`; `trial_day3_success.ts:8-17`).
- `examine_maquina` — comparte la `s` minúscula caída y la cadena documental; la máquina es el aparato cotejado después. Regenerar juntos; ninguna lámina es fuente de verdad de la otra (`§23.3`; `§24.C F10`).
- `examine_esquina_tarjeta`, `examine_expediente_serie`, `examine_ficha_domicilio` y `examine_nota_renta` — comparten el defecto tipográfico y la continuidad documental; ninguno sustituye la libreta ni define sus cinco puntos (`§23.3`; regla de localización del defecto).
- `bg_penal_efectos` — comparte la bodega y el contexto de la caja abierta; el fondo no debe aportar texto legible ni reemplazar los efectos de la vista ampliada (`§23.1`; `§23.3`).

## Conflictos abiertos

- El catálogo define `efectos_casimiro` como **dos piezas** —libreta y copia al carbón—, mientras la escena enumera además moño y dos relojes, y el caption exige que los relojes aparezcan al lado. §23.3 exige pintar los relojes, pero no resuelve si el moño debe entrar en la lámina (`EvidenceCatalogCase5EsB.ts:64-71`; `penal_efectos_hotspots.ts:15`; `§23.3`).
- El guion describe el papel carbón doblado en cuatro, pero §23.3 exige una copia morada y traslúcida con sello `8 NOV` y anotación `pendiente`. Mantener el contrato visual de §23.3 y dejar la tensión de estado físico para resolución del spec (`penal_efectos_hotspots.ts:15,19-21`; `§23.3`).
- El español dice «tecleé nueve años en esa máquina» en el punto uno, mientras el inglés dice “I stared at it nine years”; ambos conservan la tarjeta de julio, la `s` caída y los cinco puntos, pero la equivalencia textual no es literal (`trial_day3_success.ts:12`; `trial_day3_success_en.ts:12`). No resolver aquí.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, conforme al protocolo `asset-facts`; no se confirma ni descarta ningún defecto visual del icono o de las variantes de la vista ampliada.
- La aceptación futura debe comprobar identidad compartida entre icono y `detailedView`, dos paneles, cinco puntos legibles, punto cinco torcido, `8 NOV`, `pendiente`/`pending`, dos relojes parados, ausencia de marcadores y localización EN coherente.
