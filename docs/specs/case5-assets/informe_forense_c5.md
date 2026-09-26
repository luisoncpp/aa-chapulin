# informe_forense_c5 — hoja de hechos

Clase: `icon`. Espec: §23.0, §5.1, §5.5, §23.5 y §24.D F6. Guion directo: entrega en la investigación del pasillo 7, contradicción D1-T1 y dos actualizaciones durante D1-T2 y D4. Activo único compartido por ES y EN: `assets/informe_forense_c5.webp`.

## Mapa semántico y alcance

- Es el icono del **Informe Forense** propio del Caso 5, asociado a Casimiro Lengua y al golpe único en la región occipital (§5.1, §23.5; `EvidenceCatalogCase5EsA.ts:32-42`; `EvidenceCatalogCase5EnA.ts:32-42`).
- El soporte visual es un icono de Acta, no una fotografía del cadáver, una vista del pasillo 7, una lámina de examen ni un `detailedView`; §5.1 no asigna `detailedView` a esta prueba y §23.5 sólo fija el contrato general de iconos.
- Sus hechos probatorios tienen tres estados: descripción inicial con intervalo **17:00–17:30**; ampliación sobre un canto recto de cuatro centímetros aplicado de arriba abajo y por detrás, sin arco; y rectificación a **16:35–17:05** usando el coeficiente de una sala a **31 °C** (§5.1, §5.5, §24.D F6).
- El informe no identifica el arma como libro. El Tomo XI y la comparación con el gesto de cerrar un libro son deducciones posteriores; el icono no debe adelantar esa solución (§5.6; `trial_day1_success.ts:77-78`; equivalente EN).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Un objeto documental único y centrado que se lea como informe/peritaje forense, sobre fondo transparente, con el estilo de icono de Acta ya establecido (§23.5; catálogo ES/EN).
- [ ] `PINTAR` — La silueta del documento debe poder representar la identidad del informe sin convertirse en una escena: no dibujar el pasillo, el cuerpo, el estante, el Tomo XI ni la esquina de tarjeta (§5.1; §5.6; §23.5).
- [ ] `PINTAR` — Mantener el informe como prueba propia del Caso 5 y usar el nombre de archivo `informe_forense_c5.webp`; no reutilizar `informe_forense.webp`, que pertenece al Caso 4 (§5.1; §5.0 colisión de nombres; §23.5).
- [ ] `AUSENTE` — No incluir personajes, una sala completa, flechas, círculos, realces de respuesta, una fotografía forense ni elementos que conviertan el icono en `examine_termografo` o `plate_curva_enfriamiento` (§23.0; §23.5; §7.2 reglas 3–4).

### F2 Texto en la imagen

- [ ] `NO CONTRADECIR` — No se exige ninguna cadena legible dentro del icono; no imprimir el nombre de Casimiro, intervalos, temperaturas, encabezados ni texto en inglés o español no pedido (§23.5; catálogos ES/EN).
- [ ] `AUSENTE` — No dibujar un rótulo legible que nombre un libro, el Tomo XI o el arma: la descripción inicial y el icono no deben resolver la identidad del objeto usado en el golpe (§5.6; §10.1; `trial_day1_success.ts:77-78`).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La prueba inicial representa un intervalo de muerte de **17:00–17:30**, con temperatura tomada a las **18:40**; esas cifras pertenecen al estado narrativo del Acta y no necesitan aparecer en el icono (§2.2 cronología; §5.1; §24.D F6; catálogos ES/EN).
- [ ] `NO CONTRADECIR` — La etapa 1 añade que el golpe fue de arriba abajo y por detrás, con el objeto sostenido a dos manos y cerrado sobre la nuca, sin arco de golpe (§5.5; `trial_day1_success.ts:77-78`; equivalente EN).
- [ ] `NO CONTRADECIR` — La etapa 2 corrige el intervalo a **16:35–17:05** al aplicar una sala a **31 °C**, frente al modelo normal de **20 °C**; el icono no debe sugerir una tercera ventana ni que la hora atribuye autoría (§5.5; §17.1; §24.D F6; `trial_day4_success.ts:21-23`; equivalente EN).

### F4 Contrato en pantalla

- [ ] `PINTAR` — El icono se entrega al terminar el hotspot del cuerpo en el pasillo 7, después de que se establecen el golpe único, la medición a las 18:40 y la ventana de cinco a cinco y media (`archivo_pasillo7_hotspots.ts:3-22`; variante EN equivalente).
- [ ] `NO CONTRADECIR` — En D1-T1 el jugador presenta esta prueba para sostener la contradicción de la ventana **17:00–17:30** con la salida observada de Don Ramón a las 16:58; la prueba también es válida contra las declaraciones 3 y 4, que comparten la misma regla (`trial_day1_t1.ts:17-22`; §10.2; equivalente EN).
- [ ] `NO CONTRADECIR` — Tras el `followUp` de D1-T2, la actualización visible acompaña la afirmación de que el golpe entró de arriba abajo y por detrás, sin arco, y que el objeto se cerró sobre la nuca (`trial_day1_success.ts:74-78`; equivalente EN).
- [ ] `NO CONTRADECIR` — En D4, `openingPresent` usa `bitacora_caldera` para demostrar que el forense trabajó con 20 °C frente a los 31 °C del pasillo; después se actualiza este informe a 16:35–17:05 (`trial_day4.ts:20-28`; `trial_day4_success.ts:8-23`; equivalentes EN).
- [ ] `NO CONTRADECIR` — La corrección incluye a Don Ramón y a Berrondo dentro de la ventana y hace que la hora deje de decidir la autoría; el icono no debe sugerir que el informe señala por sí solo al culpable (§24.D F6; `trial_day4_success.ts:23-34`).

### F5 Estilo y prohibidos

- [ ] Repetir completo el contrato §23.0 en cualquier prompt: ilustración 2D HD estilo *Capcom Ace Attorney* de linaje GBA/DS; cel-shading plano con terminador duro; contorno continuo carbón `#1A1A1A`; caricatura expresiva; registro mexicano setentero/Chespirito; papel, madera, polvo y luz de tungsteno; sin fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, inglés no localizado ni rosa/magenta en primer plano (§23.0).
- [ ] `PINTAR` — Objeto centrado, recortado sobre transparencia, con contorno carbón y lectura inmediata como icono de Acta (§23.5).
- [ ] `AUSENTE` — No usar una composición de fondo, textura fotográfica de documento, magenta en primer plano, flechas, círculos o un tratamiento de lámina explicativa (§23.0; §23.5; §7.2 reglas 3–4).

### F6 Localización

- [ ] `PINTAR` — ES y EN reutilizan exactamente `assets/informe_forense_c5.webp`; el catálogo EN cambia nombre, descripción y `updates[]`, pero conserva el mismo icono (§23.5; `EvidenceCatalogCase5EsA.ts:32-42`; `EvidenceCatalogCase5EnA.ts:32-42`).
- [ ] `NO CONTRADECIR` — La composición y el objeto centrado permanecen idénticos entre idiomas; cualquier dato visual no legible no se localiza ni se sustituye por texto inglés (§23.0; §23.5).
- [ ] `TEXTO EXACTO` — Si una regeneración introduce texto legible por accidente, no aceptar inglés dentro de la variante compartida; el único texto autorizado por la dirección de arte sería el que §23.3 exige para variantes localizadas, y este icono no tiene esa exigencia (§23.0; §23.3; §23.5).

## Consistencia (regenerar juntos)

- `examine_termografo` / `examine_termografo_en` — comparten la medición de 18:40, la lectura real de 31 °C y el contraste con la tabla forense de 20 °C; el examen muestra la tira documental y este activo sólo identifica el informe. **Regenerar juntos si cambian las cifras o la corrección temporal; este activo no es fuente de verdad del otro** (§17.1; §23.3; catálogos ES/EN).
- `plate_curva_enfriamiento` — comparte el argumento de enfriamiento y la corrección de 17:00–17:30 a 16:35–17:05; la placa explica y este icono representa la prueba. **Regenerar juntos si cambia la ventana o el contraste 20 °C/31 °C; este activo no es fuente de verdad del otro** (§17.1; §23.4; §24.D F6).
- `bg_archivo_pasillo7` — comparte la escena del crimen, la toma de temperatura a las 18:40 y el estado térmico del pasillo; el fondo pinta el lugar y este icono no debe absorber sus objetos ni su composición. **Regenerar juntos si cambia el estado térmico o la identidad del lugar; este activo no es fuente de verdad del otro** (§23.1; §17.1; ficha de `bg_archivo_pasillo7`).
- `informe_forense_c5` en `EvidenceCatalogCase5EsA.ts` y `EvidenceCatalogCase5EnA.ts` — gemelos de idioma del contrato de evidencia, con la misma ruta de icono y dos etapas lineales. **Regenerar juntos, este activo no es fuente de verdad del catálogo ni el catálogo de la composición visual** (catálogos ES/EN; §5.5).

## Conflictos abiertos

- No se detecta una discrepancia que obligue a cambiar la composición del icono. El cambio de 17:00–17:30 a 16:35–17:05 es una actualización deliberada de la prueba, no un conflicto visual (§5.5; §17.1; §24.D F6).
- La descripción inicial y el diálogo posterior usan «objeto pesado» y después describen el modo de aplicación del golpe; ninguno pide dibujar el arma. La prohibición de nombrar o dibujar un libro en la descripción inicial debe mantenerse como límite de alcance, no resolverse añadiendo un objeto al icono (§5.1; §5.6; `trial_day1_t1.ts:62-65`; `trial_day1_success.ts:77-78`).

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, conforme al protocolo de `asset-facts` y a la solicitud; por tanto, no se confirma ningún defecto visual de la exportación actual.
- La hoja se preparó sólo desde el spec de Caso 5, los catálogos ES/EN de `informe_forense_c5` y los guiones ES/EN de la investigación, D1-T1, D1-T2 y D4. No se ejecutaron tests, lint, auditorías, procesamiento ni verificación de assets.
