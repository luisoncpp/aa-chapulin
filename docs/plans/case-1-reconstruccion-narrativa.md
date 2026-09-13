# Caso 1: reconstrucción narrativa

> SPOILERS COMPLETOS. Documento reservado para desarrollo. No resumir sus revelaciones en la conversación con el usuario salvo que lo pida de forma explícita.

Estado: **propuesta**. Reescribe [[docs/specs/case-1-turnabout-red-grasshopper.md]], que hoy tiene 67 líneas frente a las 650–1200 de los demás. Depende de [[docs/plans/arco-general-el-tomo-trece.md]]. Al aprobarse, este plan se convierte en spec y el spec actual se sustituye, conservando nombre de archivo y `caseId`.

## 1. Diagnóstico

El Caso 1 no es flojo de escritura: es **viejo**. Se escribió antes de que existieran las presiones que desbloquean declaraciones (Caso 3), las descripciones de prueba en varias etapas (Caso 3), el examen detallado del Acta y el señalamiento sobre lámina (Caso 4). Tiene una sola jornada, tres contradicciones encadenadas en línea recta y ningún giro: la hipótesis de la fiscalía del minuto uno es la que se refuta hasta el final.

Queda por debajo del Caso 0 en densidad, y el Caso 0 es el tutorial. En orden de juego es el episodio **segundo**, así que debe enseñar el juego completo sin la carga de los casos 3 y 4.

Objetivo de duración: **70–85 minutos**, dos investigaciones y dos juicios. Por encima del Caso 0 (~40) y por debajo del Caso 2 (~60–75). Comprobar jugando.

## 2. Lo que se conserva intacto

Obligatorio por continuidad con el epílogo del Caso 0, que ya estampa el titular del robo:

- El Museo de las Curiosidades, la **Chicharra Paralizadora de Oro**, Doña Florinda como curadora y Alma Negra como guardia agredido.
- **El Chapulín Colorado como acusado** y Don Ramón como defensa. Es el caso que contesta el "¿Y ése quién lo va a defender?" del Caso 0.
- **El Tripaseca como testigo estrella y culpable único**, con la Chicharra en el saco al final.
- Las cuatro pruebas icónicas: Chipote Chillón, Pastillas de Chiquitolina, Antenitas de Vinil, Foto del Sospechoso con el emblema invertido.
- Las tres deducciones actuales: el arma no es el chipote; la entrada fue por el ducto tras encoger; la foto es un reflejo en el espejo veneciano.
- Renta de **14 meses** (cifra heredada del Caso 0 y compartida con el Caso 2).

Se conservan los `EvidenceId` actuales; verificar los literales en [[src/state/Private/EvidenceCatalog.ts]] antes de escribir el catálogo nuevo.

## 3. Lo que cambia

El soborno a Super Sam ya está escrito en el spec vigente ("bribed Super Sam") y jamás se desarrolla. La reconstrucción lo convierte en el eje:

**La bolsa de monedas que fracturó el cráneo de Alma Negra es el soborno.** No es un arma que el culpable escogiera: es lo que le acababan de pagar, y era lo más pesado que traía encima. El dinero de la fiscalía es el arma del delito.

De ahí salen las dos mitades del episodio:

- **Día 1 — qué golpeó al guardia.** Termina con el arma identificada como un saco denso de moneda metálica, y con el fiscal negándose a decir dónde estaba su bolsa esa noche. El juez aplaza.
- **Día 2 — por dónde entró y por dónde salió.** Termina con la Chicharra en el saco del testigo y con **por qué** ese hombre conocía las medidas del ducto.

## 4. Verdad del autor reconstruida

El Tripaseca no estudió el museo: **lo compró**. Pagó por una ficha que traía la medida de la rejilla del ducto de la sala 2, la ronda escrita de Alma Negra, la noche en que no se cambia el rollo de la cámara, y un extra que el vendedor llama "servicio de cierre": un fiscal que factura por caso cerrado y que esa noche estaría a cinco minutos del museo.

Cronología del 21 de agosto (las horas de autor no son hechos judiciales):

| Hora | Hecho real | Alcance para el jugador |
| --- | --- | --- |
| 20:30 | Super Sam recibe su parte y la deja en el callejón de carga. Cobra por llegar rápido, no por dejar entrar a nadie: no sabe qué se va a robar. | Nunca se acredita en este caso. Es la deuda del Caso 5. |
| 20:45 | Las Antenitas de Vinil del Chapulín detectan enemigo. Sale hacia el museo. | Su propio relato, desde el principio. |
| 20:50 | Tripaseca toma Pastillas de Chiquitolina, entra por el ducto y rompe la vitrina **desde adentro**. El vidrio cae hacia afuera. | `rejilla_ducto` y peritaje del vidrio. |
| 20:55 | Alma Negra lo sorprende al recuperar su tamaño. Tripaseca lo golpea por detrás y **desde arriba** con la bolsa de moneda. | `informe_medico`, dos etapas. |
| 21:00 | Sale por el pasillo del espejo veneciano hacia el patio de carga. La cámara fotografía el reflejo: el emblema se lee "HC". | `foto_sospechoso`, señalamiento. |
| 21:05 | El Chapulín llega, tropieza con la jaula del perico histórico y queda dentro de la escena. Super Sam lo detiene en menos de cinco minutos. | `parte_detencion`. |
| 21:40 | La ficha del museo queda en la guantera de la camioneta. Nadie registra el vehículo esa noche. | Hallazgo del día 2. |

## 5. Estructura

### Día 1 — investigación (21 de agosto, noche)

1. **Centro de detención.** El Chapulín cuenta su noche completa desde el principio, incluidas las antenitas. No oculta nada; su problema es que llegó cinco minutos tarde a su propia inocencia.
2. **Sala 2 del museo.** Doña Florinda, vitrina rota, vidrio hacia afuera, jaula del perico volcada. Examen de la vitrina con lámina (`detailedView`).
3. **Clínica.** Alma Negra inconsciente. Se entrega `informe_medico`: golpe único occipital, objeto pesado, sin aristas.

### Día 1 — juicio: **T1, Tripaseca — "Cómo golpeó a ese pobre hombre"**

Llamado al estrado completo (nombre y ocupación: comerciante honrado que "compra barato y vende lo que se deje"), según el contrato de serie documentado en [[docs/architecture/case-scripting.md]].

- Contradicción principal: **Chipote Chillón**. Vinilo hueco, chilla. No fractura nada.
- Segunda contradicción, sobre una declaración que **sólo aparece al presionar** (`unlockedBy`): Tripaseca describe el sonido del golpe como "un costalazo de fierros". Presentar **`informe_medico`** actualizado (golpe desde atrás **y desde arriba**, objeto denso y flexible).
- Cierre del día: el juez pregunta qué objeto del museo pesa así. Ninguno. Super Sam interrumpe el interrogatorio, se niega a decir dónde estuvo su bolsa de dólares y pide el aplazamiento él mismo. Es la primera vez en la serie que el fiscal gana tiempo en lugar de exigirlo.

### Día 2 — investigación (22 de agosto)

1. **Patio de carga y camioneta.** Se obtienen `bolsa_dolares` (vacía, con tizne de lona y restos de moneda) y **`ficha_museo`**: una tarjeta mecanografiada con la medida de la rejilla, la ronda del guardia y la frase "servicio de cierre incluido", impresa en el reverso de una papelería de El Saber Universal, S.A.
2. **Cuarto de cámaras.** `foto_sospechoso` y la bitácora del rollo. Lámina examinable del pasillo del espejo.
3. **Clínica.** Alma Negra despierta: no vio a nadie, pero oyó **monedas** al caer. Entrega `bitacora_ronda`, su libreta de rondas, que resulta idéntica —palabra por palabra— a lo escrito en la ficha.

### Día 2 — juicio: **T2, Tripaseca — "Cómo entró el ladrón"**

- Contradicción: **Pastillas de Chiquitolina** + lámina de la rejilla. El vidrio cayó hacia afuera; la vitrina se rompió desde adentro; la rejilla no está forzada porque nadie de tamaño normal pasó por ahí.
- Señalamiento 1 (Present & Point): sobre la lámina de la vitrina, señalar **la rejilla del ducto**, no el cristal.

### Día 2 — juicio: **T3, Tripaseca — "Cómo huyó el ladrón"**

- Contradicción: **Foto del Sospechoso**. Señalamiento 2: el emblema del pecho. "HC" es "CH" al espejo; el sospechoso corría hacia el patio de carga, no hacia la puerta principal.
- `followUp`: si la foto es un reflejo, el fotografiado corría **hacia donde estaba estacionada una camioneta**. Presentar `bolsa_dolares`.

### Clímax — dos etapas

1. **¿Dónde está la Chicharra ahora?** Presentar **Antenitas de Vinil**. Vibran hacia el saco del testigo. Cut-in, ruptura de Tripaseca.
2. **¿Cómo sabía las medidas de un ducto que no aparece en ningún plano público?** Presentar **`ficha_museo`** contra `bitacora_ronda`. Tripaseca, ya derrumbado, contesta la frase que sostiene toda la serie: que él no estudió nada, que **eso se compra**, y que se lo vendió *el Tomo Trece*.

El juez pregunta qué es eso. Nadie en la sala lo sabe. Super Sam objeta que es irrelevante para el veredicto y **el juez le da la razón**. Veredicto: INOCENTE.

## 6. El residuo

Tres cosas salen del Caso 1 sin resolver, y las tres son deliberadas:

1. **El nombre.** Única vez en toda la serie que se pronuncia "el Tomo Trece" antes del Caso 5. Un jugador nuevo lo archiva como color local.
2. **La bolsa.** Se acredita que el arma fue un saco de moneda y que la bolsa de la fiscalía apareció vacía. **No** se acredita quién la dejó en el callejón. Super Sam no declara.
3. **La ficha.** Queda en autos como prueba de un tercero no identificado. El Caso 5 la recupera del archivo judicial.

Ninguno de los tres bloquea el veredicto ni deja al jugador con sensación de caso a medias: el acusado sale libre, el culpable confiesa, el objeto aparece.

## 7. Acta del Juicio

Siete entradas conservadas (verificar ids) más tres nuevas:

| Prueba | Estado | Función |
| --- | --- | --- |
| `insignia_abogado` | conservada | Constante de serie. |
| `chipote_chillon` | conservada | T1. |
| `informe_medico` | conservada + `updates` (2 etapas) | T1 y su presión. **No nombra ni dibuja la bolsa**: identificarla es la deducción del día 2. |
| `pastillas_chiquitolina` | conservada | T2. |
| `foto_sospechoso` | conservada + `detailedView` | T3, señalamiento 2. |
| `antenitas_vinil` | conservada | Clímax etapa 1. |
| `chicharra_oro` | conservada | Objeto del delito. |
| `parte_detencion` | **nueva** | Detención a las 21:05, a cinco minutos del aviso. Inventario del detenido: sin la Chicharra. |
| `bolsa_dolares` | **nueva**, `detailedView` | Bolsa de lona de la fiscalía, hallada vacía en el patio de carga. Tizne y una moneda atorada en la costura. |
| `ficha_museo` | **nueva**, `detailedView` | Tarjeta con medidas y rondas, en papelería de una sociedad disuelta. Clímax etapa 2. |
| `bitacora_ronda` | **nueva** | Libreta de Alma Negra. Coincide palabra por palabra con la ficha. |
| `rejilla_ducto` | **nueva** | Rejilla de la sala 2, sin marcas de palanca. Señalamiento 1. |

Regla heredada de [[docs/lessons-learned/climax-stage-prompt-spoils-answer.md]]: ninguna descripción inicial nombra la solución de un señalamiento.

Regla heredada de [[docs/lessons-learned/investigation-gating-and-evidence-stages.md]]: `requiredEvidence` sólo mira inventario, así que la **última ubicación obligatoria de cada jornada** (clínica en ambos días) debe entregar un identificador nuevo.

## 8. Cobertura de mecánicas

| Mecánica | Dónde | Dificultad |
| --- | --- | --- |
| Presionar con recompensa | T1, T2, T3 | Baja |
| `unlockedBy` (declaración que sólo aparece al presionar) | T1 | **Primera vez fuera del Caso 3.** Una sola, señalizada por el juez. |
| `updates` de descripción | `informe_medico` (2 etapas) | Dos etapas, no tres: el contador es lineal y descarta la tercera. |
| `detailedView` | 3 pruebas | Media |
| Present & Point | 2 señalamientos | Baja; ya se enseñó en el Caso 0 |
| Aplazamiento (`adjournment.next`) | Día 1 → Día 2 | Primera vez en orden de juego |
| Clímax multietapa | 2 etapas | Baja |

## 9. Assets

Verificar contra [[process_assets.py]] antes de presupuestar; buena parte puede existir ya.

- **Fondos nuevos probables:** patio de carga con camioneta, pasillo del espejo veneciano, cuarto de cámaras, clínica. Museo y detención deberían existir.
- **Sprites:** Tripaseca, Florinda, Super Sam, Chapulín, Don Ramón y juez existen. Alma Negra necesita pose de clínica (`almanegra_vendado`) si hoy sólo existe como víctima fotográfica. Aplica [[docs/lessons-learned/barriga-injured-pose-lock.md]]: la pose vendada debe ser el candado de identidad de su propia hoja.
- **Láminas de examen (4):** vitrina con rejilla, emblema del pecho, bolsa vacía, ficha mecanografiada. Aplica [[docs/lessons-learned/present-point-cover-crop.md]]: las cajas se dibujan sobre el WebP generado, no sobre la suposición del spec.
- **Iconos de prueba nuevos (5).** Aplica [[docs/lessons-learned/court-record-evidence-grid-rows.md]].

## 10. Riesgos

- **Super Sam en los casos 2–4.** El Caso 1 lo deja bajo sospecha no probada. Ningún dato de los casos 2, 3 o 4 lo contradice; sólo cambia el tono con que se relee su mezquindad. Es una onda tonal aceptada, no una incompatibilidad. **No se toca ni una línea de esos episodios.**
- **El Chapulín acusado y a la vez fuente de pruebas.** Sus artefactos son suyos: cuidar que ninguna deducción dependa de un gadget que aparezca justo cuando hace falta. Antenitas y pastillas deben estar en el Acta desde el día 1.
- **Densidad.** Tres testimonios en dos días es el techo. Si al jugar se pasa de 85 minutos, se recorta la ubicación del cuarto de cámaras y su prueba se entrega en el patio de carga.
