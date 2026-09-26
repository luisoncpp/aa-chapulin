# genoveva_sweat — hoja de hechos

Clase: `sprite`. Espec: §23.2.C. Guion: §17.2, §18.4 / clímax del día 4, y sus variantes bilingües en `src/case/case5/Private/trial_day4_success.ts` y `trial_day4_success_en.ts`.

## Mapa semántico

- Personaje: Srta. Genoveva Peñaloza, mujer de 38 años, encargada de la ventanilla de peritos y auxiliares de la justicia.
- Momento: estrado del día 4, cuando algo contradice o desborda el reglamento que ella aplica literalmente.
- Identidad compartida: porte rígido; cabello castaño oscuro en chongo bajo muy apretado; anteojos rectangulares de pasta negra; cara ovalada; labios finos con lápiz coral discreto; blusa blanca abotonada hasta arriba con broche de camafeo; suéter gris ratón sobre los hombros, abrochado sólo en el primer botón; reloj pequeño en la muñeca izquierda; lápiz detrás de la oreja derecha; carpeta de hule negro contra el pecho con el brazo izquierdo (§23.2.C).
- Cambio de pose: una gota de sudor en la sien; cejas subiendo por el centro; mano derecha hacia los anteojos sin tocarlos; carpeta descendida unos centímetros (§23.2.C).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Busto hasta la cintura, de frente, con hombros cuadrados y la misma silueta de `genoveva_idle` (§23.2.C, identidad y `genoveva_idle`).
- [ ] `PINTAR` — Mujer de 38 años con el conjunto de identidad completo: chongo bajo apretado sin pelos sueltos, anteojos rectangulares negros, blusa blanca cerrada, broche de camafeo, suéter gris ratón sobre los hombros, reloj izquierdo, lápiz detrás de la oreja derecha y carpeta de hule negro en el brazo izquierdo (§23.2.C).
- [ ] `PINTAR` — Una sola gota de sudor en la sien; no una acumulación de gotas ni una reacción cómica (§23.2.C, uso “cuando algo se sale del reglamento”; §23.0, tratamiento de tribunal serio).
- [ ] `PINTAR` — Cejas elevándose por el centro y expresión de incomodidad contenida, no pérdida total de compostura: `genoveva_shock` es la pose reservada para ese único momento (§23.2.C, `genoveva_sweat` y `genoveva_shock`).
- [ ] `PINTAR` — Mano derecha levantándose hacia los anteojos, sin llegar a tocarlos (§23.2.C).
- [ ] `PINTAR` — Carpeta bajada unos centímetros respecto de la posición de identidad, pero todavía sostenida contra el pecho por el brazo izquierdo (§23.2.C).
- [ ] `AUSENTE` — No usar la carpeta resbalándose, ojos enormes, boca abierta pequeña ni lápiz cayéndose: esos rasgos pertenecen a `genoveva_shock` (§23.2.C).
- [ ] `AUSENTE` — No convertirla en una testigo hostil o histérica; Genoveva es exacta, no hostil, y el guion no se ríe de ella (§3.3 / reparto de testigos; §22, tabla de tono de personajes).

### F2 Texto en imagen

- [ ] `NO CONTRADECIR` — El sprite no tiene texto solicitado ni debe imprimir nombres, reglamentos, fechas, encabezados o etiquetas; las frases que acompañan la pose son diálogo de la interfaz (§23.0; §17.2).
- [ ] `NO CONTRADECIR` — La carpeta, el broche, el reloj y los anteojos son objetos de identidad visual, no superficies con texto legible exigido (§23.2.C).

### F3 Cifras/fechas/horas

- [ ] `NO CONTRADECIR` — La pose ocurre en el juicio del día 4; no convertir “trece años” de servicio ni las horas 16:05/16:50 en texto o números pintados (§17.2; §24.A, A5).
- [ ] `NO CONTRADECIR` — La reacción se relaciona con la columna cuyo encabezado exacto es «Hora de devolución de gafete», con trece años llamándola «hora de salida», pero esos datos pertenecen al diálogo y al libro presentado, no al sprite (§17.2, resolución de `libro_peritos`; §24.A, A5).

### F4 Contrato en pantalla

- [ ] `PINTAR` — La pose acompaña la lectura del encabezado «Hora de devolución de gafete» después de que la defensa demuestra que la columna no es una hora de salida (`src/case/case5/Private/trial_day4_success.ts:59`; variante EN `trial_day4_success_en.ts:59`). La cara debe comunicar la primera grieta reglamentaria, sin anticipar el shock completo.
- [ ] `PINTAR` — La pose acompaña la admisión de que lleva trece años llamando «hora de salida» a una columna que dice otra cosa (`src/case/case5/Private/trial_day4_success.ts:63`; variante EN `trial_day4_success_en.ts:63`). Mantener sudor único y gesto contenido.
- [ ] `PINTAR` — La pose acompaña el «...Sí, señor» cuando admite que un síndico que devolvió el gafete aún puede permanecer dentro del edificio con su credencial (`src/case/case5/Private/trial_day4_success.ts:70`; variante EN `trial_day4_success_en.ts:70`). No añadir credenciales ni depósito como objetos nuevos al sprite.
- [ ] `PINTAR` — La pose acompaña el «...Hay uno» cuando el juez pide el vale del 29 de noviembre (`src/case/case5/Private/trial_day4_success.ts:93`; variante EN `trial_day4_success_en.ts:93`). El fajo de vales rosas aparece en la narración posterior, no debe pegarse al sprite (§17.2, líneas 3242–3246; `trial_day4_success.ts:90–92`).
- [ ] `NO CONTRADECIR` — La pose no afirma que Genoveva vea la puerta del patio o vigile físicamente el acceso: su ventanilla mira hacia dentro y la puerta queda a su espalda (§17.2, declaración 4; §24.A, A5).
- [ ] `NO CONTRADECIR` — La pose no afirma que registre salidas reales; Genoveva registra entrada y devolución de gafetes, no salidas por el patio (§24.A, A5; catálogo `src/state/Private/ProfileCatalogCase5Es.ts:74–81` y `ProfileCatalogCase5En.ts:74–81`).

### F5 Estilo

- [ ] Contrato §23.0 completo pegado en el prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* de linaje GBA/Nintendo DS en alta definición; ; contorno continuo carbón `#1A1A1A`, más grueso en la silueta; anatomía facial expresiva y exagerada; colores primarios saturados; televisión mexicana setentera / universo Chespirito; registro de papel, madera y polvo; prohibidos fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto inglés salvo variantes EN exigidas y rosa/magenta en primer plano (§23.0).
- [ ] `NO CONTRADECIR` — No usar una gota fotorealista, brillo de piel, reflejos fotográficos ni magenta de primer plano; los dos rectángulos blancos de reflejo en los anteojos pertenecen únicamente a `genoveva_reglamento` (§23.0; §23.2.C).

### F6 Localización

- [ ] `PINTAR` — `genoveva_sweat` es una pose compartida ES/EN; no existe variante `_en` en el contrato de §23.2.C. La composición y la expresión deben ser idénticas en ambos idiomas.
- [ ] `NO CONTRADECIR` — Las líneas ES y EN cambian sólo el texto de diálogo: «Hora de devolución de gafete» / “Time badge returned”, y «hora de salida» / “time of departure”; ninguna cadena debe entrar en el sprite (§17.2; `trial_day4_success.ts:59,63`; `trial_day4_success_en.ts:59,63`).
- [ ] `NO CONTRADECIR` — La localización EN debe respetar las reglas generales de §23.3, incluida la `s` minúscula caída cuando corresponda a texto mecanografiado; esta pose no contiene texto mecanografiado ni variante localizada (§23.3; §23.2.C).

## Consistencia (regenerar juntos)

- `genoveva_idle` — comparte identidad maestra, vestuario, carpeta, accesorios, silueta y busto hasta la cintura. Regenerar juntos; este activo no es fuente de verdad del otro.
- `genoveva_reglamento` — comparte la misma identidad y carpeta; el dedo, mentón, cejas, boca y reflejos rectangulares de los anteojos son exclusivos de esa pose. Regenerar juntos; este activo no es fuente de verdad del otro.
- `genoveva_shock` — comparte identidad y carpeta, pero conserva el único quiebre total de compostura: ojos enormes, boca pequeña, lápiz cayéndose y carpeta resbalando. Regenerar juntos; este activo no es fuente de verdad del otro.
- `profile_perfil_genoveva.webp` — comparte el candado de identidad de Genoveva; los catálogos ES/EN apuntan al mismo icono (`src/state/Private/ProfileCatalogCase5Es.ts:74–81`; `ProfileCatalogCase5En.ts:74–81`). Regenerar juntos; este activo no es fuente de verdad del otro.
- `trial_day4_success.ts` ↔ `trial_day4_success_en.ts` — gemelos de idioma del mismo uso de pose en cuatro beats. Mantener la misma imagen; sólo cambia el diálogo. Regenerar juntos; este activo no es fuente de verdad del otro.

## Conflictos abiertos

- §23.2.C exige “una gota de sudor en la sien” pero no fija izquierda o derecha; no resolver esa lateralidad desde la imagen. Debe conservarse una sola gota y la decisión de lado debe quedar coordinada con la hoja maestra de identidad si se especifica después.
- El guion inicial de §17.2 usa `genoveva_sweat` en la resolución del libro, mientras que el texto de §23.2.C describe la pose como reacción general a “algo fuera del reglamento”; no es una contradicción, pero el uso concreto queda limitado a los cuatro beats de §18.4 / éxito del día 4 enumerados en F4.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen por protocolo. No hay defectos visuales confirmados ni severidad que asignar.
- Hoja derivada únicamente del spec, guion ES/EN y catálogos de perfil; queda lista como contrato de aceptación para una regeneración posterior.
