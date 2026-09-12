# Caso 0: El Primer Juicio de Don Ramón — Tutorial

*Turnabout Rookie*

**Especificación implementada.** El guion, assets, pruebas y ruta `case-0` descritos aquí están integrados; la validación manual de duración, curva de salud y ajuste visual de zonas queda como auditoría de aceptación.

> **Documento completo.** Cubre las secciones 1–16: objetivo pedagógico, sinopsis, reparto, cronología, Acta, guion íntegro del juicio (tres testimonios y clímax de dos etapas), epílogo, cobertura de mecánicas, progresión, assets, migración técnica y validación. Es el único caso **sin investigación**: se juega íntegramente en el tribunal, como los casos introductorios de Ace Attorney. **Requiere un refactor del motor** para admitir más de dos testimonios por jornada (§15.2).

Contiene spoilers completos. La comunicación con el usuario debe limitarse al estado y alcance del trabajo, salvo que pida conocer la trama.

## 1. Objetivo y reglas de diseño

Episodio de 35 a 45 minutos, un solo día, un solo modo. Es el primer contacto del jugador con el juego: enseña **todas** las mecánicas implementadas y no introduce ninguna que los casos 1–4 no usen.

La complejidad objetivo es la de un caso introductorio de Ace Attorney: un solo testigo mentiroso al que se le derrumba la historia por capas, hasta que deja de ser testigo y pasa a ser investigado en el mismo estrado. Tres rondas de contrainterrogatorio y un clímax breve.

**El número de testimonios no es una restricción del motor, pero hoy el motor cuesta cambiarlo.** `TrialScript` en [[src/types/Private/script.ts]] declara los campos `testimony1` y `testimony2`, y la unión literal `'testimony1' | 'testimony2'` está repetida en [[src/engine/Private/TrialController.ts]], en el salto de [[src/engine/Private/TrialOutcome.ts]], en el snapshot de [[src/state/Private/SaveManager.ts]] y en [[src/engine/Private/VisualWarmup.ts]]. Este caso adopta tres testimonios y paga el refactor a `testimonies: Testimony[]` descrito en §15.2. La vía multijornada **no** es alternativa: `AdjournmentDefinition` exige `nextLocation`, `unlockLocations` y `requiredEvidence`, y `adjournToInvestigation` salta a modo investigación, que este caso no tiene.

**Un testimonio se cierra con una sola contradicción.** `advanceAfterContradiction` avanza al siguiente testimonio en cuanto una presentación acierta, sin importar cuántas declaraciones lleven `contradiction`. Por eso cada testimonio de este guion tiene **una** contradicción resolutoria y, si necesita un segundo golpe, lo coloca en su `followUp`. No se escriben contradicciones alternativas que el motor nunca alcanzaría.

Reglas obligatorias:

- **Solo juicio.** No hay escenas de investigación, ni hotspots, ni movimiento entre locaciones, ni `adjournment`. El caso arranca en modo `TRIAL`. Las escenas de sala de espera (pre-juicio y receso) son diálogos puros con fondo `bg_waiting_room` integrados al flujo de juicio.
- **Cada mecánica se enseña una vez, con una acción del jugador, antes de volver a exigirla.** La secuencia canónica está en §13 y define el orden de los testimonios.
- **La enseñanza es diegética.** El Chapulín Colorado acompaña a Don Ramón como asesor y explica qué botón sirve para qué. Las láminas de instrucción pura (`MODO TUTORIAL`) se imprimen con `instant: true`, sin chirridos de máquina de escribir (ver [[docs/lessons-learned/examine-prompt-no-chirp.md]]).
- **La primera presentación errónea no se castiga en serio.** El primer fallo descuenta un punto y el Chapulín explica por qué; a partir de ahí la penalización es la normal. El riesgo de Game Over está medido en §14 y es lo primero que se valida jugando.
- **Lo robado es un cartapacio de fuelle, no un segundo maletín.** Un portafolio rígido no cabe dentro de otro, y el jugador ve las dos láminas. El cartapacio se vacía, se pliega y se mete entre los tomos del maletín de muestras; además explica el fajo de papeles del hallazgo, sostiene el broche que el anexo del parte describe y justifica el "se sentía ligerito" de la presión 3 de T3. El `EvidenceId` sigue siendo `maletin_cobranza`.
- **No hay víctima muerta.** El cobrador sobrevive con amnesia del episodio. El tono es de vecindad y la apuesta emocional es la renta de Don Ramón y el changarro del acusado, no un cadáver.
- **La víctima amnésica es el motivo declarado de que exista un único testigo.** No se usa como comodín para ocultar hechos que la corte ya tiene.
- **No se exige refutar una afirmación verdadera.** Cada presentación contradice una frase concreta y falsa, citada en el guion.
- **Ninguna prueba se obtiene por adivinanza.** Las nueve piezas del Acta están en poder de la corte antes de la primera declaración o se entregan en línea de diálogo con `[ENTREGAR]`.
- **Nada de pericias mágicas.** No hay huellas dactilares, ni hora de muerte al minuto, ni análisis que identifiquen a una persona. Lo que se compara es tizne, calcos y horas escritas.
- **El culpable es un personaje de un solo episodio.** No se gasta ni se adelanta el villano de ningún caso posterior.
- **El epílogo enlaza con el Caso 1** sin resolverlo: un titular de periódico sobre el Museo de las Curiosidades.

## 2. Sinopsis y verdad del autor

El 12 de julio, en una vecindad del Distrito Federal, el cobrador de rentas **Don Nazario Cuenca** es golpeado por la espalda dentro de la vivienda 4 y despojado de su cartapacio de cobranza. Sobrevive, pero no recuerda nada del día. El inquilino de la vivienda 4, **Toribio Pantoja**, paletero de veinte años, es detenido a los diez minutos de encontrar el cuerpo: debía dos meses de renta y estaba parado junto a la víctima cuando llegó la policía.

La verdad: **Casimiro Lengua**, que se presenta como vendedor de enciclopedias a domicilio, llevaba semanas usando su maletín de muestras para reconocer puertas con chapa vencida. Entró a la vivienda 4 —cuya chapa está rota desde marzo— a buscar la lata de ahorros del paletero. La sacó de abajo del catre y la dejó sobre la mesa. Don Nazario lo sorprendió al entrar a cobrar. Casimiro lo golpeó por detrás con la plancha de carbón que estaba en la repisa, tomó el cartapacio de cobranza, devolvió la plancha a su sitio y se sentó a esperar en el patio.

Se echó el dinero de la cobranza a la bolsa y **se quedó con el cartapacio y su lista de rentas**: para un hombre que vive de reconocer puertas, esa lista dice quién pagó, quién debe y en qué casa hay efectivo. Es la razón por la que no lo tiró y por la que el alguacil lo encuentra al día siguiente entre sus tomos de muestra.

Cuando Toribio volvió de la hielería y gritó, Casimiro apareció "corriendo" y declaró haberlo visto salir con el cartapacio. Su cálculo es que la corte fije el golpe a la una en punto, cinco minutos antes de que empiece la coartada verificable del acusado.

Sus tres errores materiales: describió el cartapacio al agente veinticinco minutos antes de la hora en que después dirá que se lo encontró; la plancha quedó acomodada con el asa hacia la pared y con tizne fresco en el mango; y la lata de ahorros quedó sobre la mesa, con el mismo tizne en la tapa.

## 3. Reparto

| Personaje | Función | Representación |
| --- | --- | --- |
| Don Ramón | Defensa. Es su primer juicio: no sabe los nombres de los trámites y lo compensa con calle. La renta atrasada aquí es de **14 meses**, cifra que el Caso 1 hereda. | Familia `donramon`. Poses existentes. |
| **El Chapulín Colorado** | Asesor de la defensa y **voz del tutorial**. Explica los controles y valida los aciertos. No aporta pruebas ni resuelve deducciones. | Familia `chapulin`: `chapulin_idle`, `chapulin_point`, `chapulin_slam`, `chapulin_panic`. |
| **Super Sam** | Fiscal. Aquí no es un rival astuto: es un rival apresurado. Su tesis es "el que debe renta y está junto al golpeado, lo dio". Abandona cada teoría refutada al instante y con escándalo. En el testimonio 3 se vuelve, por conveniencia presupuestal, el primer aliado de la defensa. | Familia `supersam`. |
| **El Juez** | Explicita las reglas del juicio para el jugador: qué es presionar, qué cuesta una presentación temeraria, qué se considera acreditado. | Familia `judge`. |
| **Toribio Pantoja** | Acusado. Paletero. Cuenta su día completo desde el principio; su problema es que nadie de la vecindad puede confirmarlo. Nuevo. | Nueva familia `toribio`: `toribio_idle`, `toribio_nervioso`, `toribio_llorando`, `toribio_aliviado`. Flaco, overol de mezclilla remendado, gorra de paletero, delantal blanco manchado. |
| **Casimiro Lengua, "el Lenguas"** | Testigo estrella y culpable. Vendedor de enciclopedias sin empresa. Habla con verbosidad de catálogo, cita tomos y define palabras que nadie preguntó. Su tic: consulta la hora dos veces por frase. Nuevo. | Nueva familia `casimiro`: `casimiro_amable`, `casimiro_catalogo`, `casimiro_sweat`, `casimiro_panic`, `casimiro_breakdown`. Traje café brilloso, corbata de moño, maletín de muestras de cartón, reloj de pulsera en cada brazo. |
| **Don Nazario Cuenca** | Víctima. Cobrador de rentas, sobrevive con amnesia del episodio; **no declara**. Aparece solo en fotografías periciales. | Foto pericial nueva. Sin sprite de sala. |

La derrota de Casimiro no requiere sprite adicional más allá de `casimiro_breakdown`: se le caen los tomos del maletín, se le desacomoda el moño y por primera vez deja de mirar los relojes.

## 4. Cronología del 12 de julio

Las horas de autor no son hechos judiciales. La columna derecha dice qué puede sostener el jugador con el Acta.

| Hora | Hecho real | Fuente y alcance |
| --- | --- | --- |
| 12:40 | Casimiro entra a la vecindad con su maletín de muestras y toca puertas. Nadie le compra. | Su propia declaración. Nadie discute que estuvo ahí. |
| 12:55 | Toribio sale a la hielería de la esquina por una barra para su carrito. Deja la vivienda 4 sin llave: la chapa está rota desde marzo. | `parte_detencion` asienta la chapa vencida. |
| 13:00 | Don Nazario inicia su ronda de cobranza en la vecindad. | Lista de rentas dentro de `maletin_cobranza`. |
| 13:05 a 13:55 | Toribio espera en la hielería a que partan el bloque. El hielero le sella el recibo a la entrada y a la salida. | `recibo_hielo`: **dos** sellos con hora. Es la coartada verificable. |
| 13:15 | Casimiro entra a la vivienda 4, saca la lata de ahorros de abajo del catre y la pone sobre la mesa. | `lata_ahorros`, hallada sobre la mesa. Su significado se acredita en el clímax. |
| 13:20 | Don Nazario entra a cobrar y lo sorprende. Casimiro lo golpea por detrás con la plancha de carbón, toma el cartapacio y **devuelve la plancha a la repisa**. | `informe_lesiones` y `plancha_carbon`. La hora exacta no se acredita nunca; solo el intervalo. |
| 13:30 | Casimiro vacía el cartapacio, lo pliega y lo mete entre los tomos de su maletín de muestras. Luego se sienta en el patio. | Se descubre en el receso del juicio. |
| 14:00 | Pasa el camión del hielo y toca dos veces el claxon. Es el sonido con el que la vecindad marca la hora. | `foto_patio` y dicho del hielero citado en el parte. |
| 14:05 | Toribio regresa con la barra, encuentra a Don Nazario en el suelo y grita. | Su relato desde el inicio. |
| 14:10 | Casimiro llega "corriendo" al patio y dice haber llamado a la policía. | Su declaración. |
| 14:15 | Detención de Toribio. Inventario: barra de hielo, 40 centavos, recibo de hielería. **Sin el cartapacio.** En el mismo acto, Casimiro le describe al agente el cartapacio: color, broche y que lo llevaba en la mano izquierda. | `parte_detencion`. Es la pieza que hunde el testimonio 3. |
| 14:40 | La patrulla se retira con el detenido. | `parte_detencion`. |
| 16:00 | Don Nazario despierta en la clínica sin recuerdo del episodio. | `informe_lesiones`. |

**Ventana forense única:** el `informe_lesiones` fija el golpe entre las **13:00 y las 14:00**, con su margen. No se afina más en ningún momento. La conclusión útil es que la ventana coincide casi entera con los dos sellos del recibo; nunca que un laboratorio haya certificado las 13:20.

## 5. Acta del Juicio

Nueve entradas. Las siete de origen "Corte" están en el Acta antes de la primera declaración, para que el tutorial pueda abrir el Acta en el minuto tres.

| ID | Obtención | Descripción inicial permitida | Función |
| --- | --- | --- | --- |
| `insignia_abogado` | Inicio | Insignia abollada de Don Ramón. Primera vez que la usa. | Constante. Se presenta una vez, en el tutorial de la apertura, y nunca más. |
| `parte_detencion` | Inicio | Parte del 12 de julio: detención a las 14:15 en el patio. Inventario del detenido: barra de hielo, 40 centavos, recibo de hielería. Chapa de la vivienda 4 vencida desde marzo. Cartapacio de cobranza no localizado. **Anexo: descripción del cartapacio aportada por el testigo Lengua a las 14:15.** | Se presenta dos veces, en T1 y en T3, contra declaraciones distintas. Un solo `[ACTUALIZAR]`, en T3. |
| `informe_lesiones` | Inicio | Don Nazario Cuenca: golpe único en la región occipital, objeto pesado de base plana. Ventana del golpe entre 13:00 y 14:00. Amnesia del episodio; sin aptitud para declarar. | `updates[]` en orden fijo: (1) en el `followUp` de T1, el golpe vino **desde atrás y arriba**; (2) al cierre de T3, el calco de la lesión es compatible con una base plana, borde recto y unos seis kilos. **Ni la ficha, ni los `updates`, ni la lámina, ni el pie de lámina nombran o dibujan la plancha**: identificar el objeto es la deducción de la etapa 1 del clímax, y el informe está en el Acta desde la apertura. Contador lineal: un tercer `[ACTUALIZAR]` se descartaría (ver [[docs/lessons-learned/investigation-gating-and-evidence-stages.md]]). |
| `recibo_hielo` | Inicio | Recibo de la Hielería La Nevada. Dos sellos de hora: entrada 13:05, salida 13:55. Firma del hielero. | Coartada. `detailedView`: la lámina permite ver que son dos sellos distintos y no uno repetido. |
| `foto_patio` | Inicio | Fotografía del patio de la vecindad tomada a las 14:30 desde la puerta de la vivienda 4. Se ve el lavadero, el tendedero y, al fondo, la escuela de la acera de enfrente. | `detailedView`: **en el campanario hay andamios y el hueco de la campana está vacío**. Objetivo de Present & Point en T2. |
| `plancha_carbon` | Inicio | Plancha de carbón recogida de la repisa de la vivienda 4. Tizne fresco en el mango. Guardada con el asa hacia la pared. | Objetivo de Present & Point en el clímax, etapa 1. `detailedView` con dos vistas: la repisa como se encontró y el mango. |
| `lata_ahorros` | Inicio | Lata de dulces con los ahorros del acusado: 40 pesos completos. Hallada **sobre la mesa** de la vivienda 4. | Ficha inicial deliberadamente anodina: el dinero está intacto y eso parece descartar robo. Un `[ACTUALIZAR]` al cierre de la etapa 1 del clímax añade el tizne en la tapa. Prueba final. |
| `maletin_cobranza` | Receso, tras T2 | Cartapacio de fuelle de Don Nazario, plegado y sin el dinero de la cobranza, hallado entre los tomos de muestra del testigo. Conserva la lista de rentas de la vecindad, con un separador por vivienda. | `[ENTREGAR]` en el receso. Detona T3; no se presenta. El `EvidenceId` sigue siendo `maletin_cobranza` por compatibilidad de assets y saves. |
| `tarjeta_enciclopedias` | Receso, tras T2 | Tarjeta de presentación del testigo: "Enciclopedias El Saber Universal, S.A.". La sociedad está disuelta desde 1971. Sin hoja de ruta, sin pedidos, tres tomos de muestra con el lomo roto. | `followUp` de T3. |

Las descripciones iniciales no dicen "prueba definitiva" ni nombran la solución de un señalamiento (ver [[docs/lessons-learned/climax-stage-prompt-spoils-answer.md]]). La lámina de `foto_patio` muestra el andamio; la ficha corta no lo menciona, para que el hallazgo ocurra en el examen y no en la lista. La ficha de `lata_ahorros` no insinúa que la mesa sea el dato raro: eso lo dice Toribio en el clímax.

## 6. Convenciones de guion

- `[ENTREGAR id]` equivale a `addEvidence` en una línea de diálogo.
- `[ACTUALIZAR id]` equivale a `updateEvidence` con un texto siguiente definido.
- `MODO TUTORIAL:` marca lámina de instrucción con `instant: true`.
- Presionar es gratuito y siempre produce contenido: ninguna contradicción exige presionar una paráfrasis para habilitarse.
- Presentar una prueba incorrecta o señalar una zona incorrecta cuesta un punto, muestra la pregunta otra vez y **no revela la respuesta**.
- Cada testimonio tiene **una** contradicción resolutoria y a lo sumo un `followUp`. El `followUp` y la contradicción encolan diálogos distintos y nunca comparten el mismo arreglo (ver [[docs/lessons-learned/contradiction-followup-plays-twice.md]]).
- El clímax usa `stages`. La última `successDialogue` completa la demostración antes del `verdict` (ver [[docs/lessons-learned/climax-final-stage-success-then-verdict.md]]).
- La primera línea de diálogo del clímax fija `bgm` explícitamente porque sobrescribe el `suspense` del motor (ver [[docs/lessons-learned/climax-bgm-line-override.md]]).

## 7. Pre-juicio y Apertura (13 de julio)

### 7.1 Pre-juicio: Sala de espera del tribunal (09:45)

Fondo `bg_waiting_room`. Cada línea estampa la locación (`bg: bg_waiting_room; furniture: none`) para aislarla de las cámaras de sala (ver [[docs/lessons-learned/trial-waiting-room-epilogue-staging.md]]). Enseña: avance de diálogo, ambientación y la relación entre Don Ramón, Toribio y el Chapulín antes de entrar al tribunal.

~~~dialogue
NARRADOR: 13 de julio, 09:45. Sala de espera del tribunal. [bg: bg_waiting_room; furniture: none; bgm: suspense]
MODO TUTORIAL: Haz clic o presiona ESPACIO para avanzar el diálogo.
TORIBIO: ¡Licenciado! ¡Licenciado Don Ramón! ¡Por su madrecita santa, dígame la verdad! ¿Me van a mandar a las Islas Marías? [bg: bg_waiting_room; furniture: none; pose: toribio_llorando]
DEFENSA: ¡Cálmate, Toribio, cálmate! ¡No te me achicopales antes de tiempo! Con el Licenciado Don Ramón en la defensa estás en las mejores manos... [bg: bg_waiting_room; furniture: none; pose: donramon_idle]
DEFENSA: (Aunque la verdad es que me tiemblan las corvas... Primera vez que piso este juzgado de corbata y no porque me citó el casero.) [bg: bg_waiting_room; furniture: none; pose: donramon_sweat]
TORIBIO: ¡Es que yo soy inocente, licenciado! Yo nomás salí a la hielería por mi barra para las paletas. Cuando regresé a mi cuarto, ¡don Nazario ya estaba tirado como fardo! [bg: bg_waiting_room; furniture: none; pose: toribio_nervioso]
DEFENSA: Te creo, muchacho, te creo. Pero allá adentro hay un fiscal güero que cobra por palabra y que dice que en once minutos te refunde en el bote. [bg: bg_waiting_room; furniture: none; pose: donramon_idle]
TORIBIO: ¡Ay, mamacita linda! ¡¿Y ahora quién podrá defenderme?! [bg: bg_waiting_room; furniture: none; pose: toribio_llorando]
CHAPULIN: ¡YOOOOO! [bg: bg_waiting_room; furniture: none; pose: chapulin_idle; sfx: whoosh]
TORIBIO: ¡¿El Chapulín Colorado?! [bg: bg_waiting_room; furniture: none; pose: toribio_nervioso]
CHAPULIN: ¡No contaban con mi astucia! ¡Que no panda el cúnico! Mis antenitas de vinil detectaron una sobredosis de pánico procesal en este pasillo. [bg: bg_waiting_room; furniture: none; pose: chapulin_idle]
DEFENSA: ¡Chapulín! ¡Menos mal que llegas! Oye... ¿tú de veras sabes de juicios y leyes? [bg: bg_waiting_room; furniture: none; pose: donramon_shock]
CHAPULIN: ¡Claro que sí! He leído la Constitución... bueno, hojeé la portada en un puesto de periódicos, ¡pero tengo un sentido de la justicia incorruptible! [bg: bg_waiting_room; furniture: none; pose: chapulin_point]
CHAPULIN: Además, vengo como tu asesor legal. Tú eres el abogado de banqueta y yo soy el cerebro táctico de la operación. [bg: bg_waiting_room; furniture: none; pose: chapulin_idle]
DEFENSA: Pues más te vale que ese cerebro funcione rápido, porque como pierda este juicio, me quedo sin cliente y con catorce meses de renta encima. [bg: bg_waiting_room; furniture: none; pose: donramon_sweat]
CHAPULIN: ¡Tranquilo, Don Ramón! La clave de un juicio es simple: el testigo del fiscal va a soltar su versión. Tú debes escuchar cada frase con calma. [bg: bg_waiting_room; furniture: none; pose: chapulin_idle]
CHAPULIN: Si algo no te cuadra, ¡le exiges que aclare! Y si de plano descubres que está mintiendo con descaro, ¡le zampas una prueba en la cara! [bg: bg_waiting_room; furniture: none; pose: chapulin_point]
TORIBIO: ¡Oiga, licenciado! Acuérdese de revisar su saco... No se le vaya a olvidar la placa esa que le dieron, no sea que no lo dejen pasar los guardias. [bg: bg_waiting_room; furniture: none; pose: toribio_nervioso]
DEFENSA: ¡Ah, la insignia! La traigo bien guardada en el bolsillo... un poquito abollada de cuando se me cayó al drenaje, pero charolea bonito. [bg: bg_waiting_room; furniture: none; pose: donramon_idle]
CHAPULIN: ¡Tenla lista! El señor juez siempre pide acreditar la personalidad jurídica antes de dar el primer martillazo. [bg: bg_waiting_room; furniture: none; pose: chapulin_point]
NARRADOR: Se escucha el timbre de la sala de audiencias. [bg: bg_waiting_room; furniture: none; sfx: bell]
ALGUACIL: ¡Atención en el pasillo! Causa penal número cero: El pueblo contra Toribio Pantoja. Pasen a la sala las partes. [bg: bg_waiting_room; furniture: none]
TORIBIO: ¡Ya nos llaman! ¡Se me están congelando las corvas más que mis paletas de limón! [bg: bg_waiting_room; furniture: none; pose: toribio_nervioso]
DEFENSA: Respira hondo, Toribio. Entra tú primero... (A ver si abriendo la puerta despacito no se nota cómo me tiemblan las rodillas). [bg: bg_waiting_room; furniture: none; pose: donramon_idle]
CHAPULIN: ¡Síganme los buenos! ¡A la victoria de la justicia! [bg: bg_waiting_room; furniture: none; pose: chapulin_point]
~~~

### 7.2 Apertura en la sala de audiencias (10:00)

Fondo `bg_courtroom`. Enseña: apertura del Acta, `openingPresent` y examen a detalle.

~~~dialogue
JUEZ: ¡Silencio en la sala! Se abre la audiencia por el asalto al cobrador Nazario Cuenca. [sfx: gavel; bgm: trial]
SUPER SAM: Your Honor, este caso lo resolví en once minutos. ELEVEN! Un muchacho que debía dos meses de renta, un cobrador en el suelo y un cartapacio de cobranza que voló. Time is money.
JUEZ: ¿La defensa está lista? ...¿La defensa está presente?
DEFENSA: ¡Aquí, aquí! Perdón, señor juez, es que la puerta de la sala pesa más que mi cliente.
CHAPULIN: ¡No contaban con mi asesoría legal! [pose: chapulin_idle]
DEFENSA: (Catorce meses de renta atrasada, Don Ramón. Si ganas esto, comes.)
JUEZ: Antes de comenzar, la corte debe verificar que quien ocupa el estrado de la defensa es un litigante autorizado.
CHAPULIN: ¡Eso quiere decir que te pide tu credencial! La prueba que te identifica está en el ACTA DEL JUICIO.
MODO TUTORIAL: En esta apertura, el ACTA DEL JUICIO se abrirá sola. Cuando se abra, selecciona la insignia y pulsa el botón ¡Presentar Prueba!
~~~

`openingPresent`: `insignia_abogado`. Pregunta visible: "¿Qué acredita a la defensa ante esta corte?".

~~~dialogue
DEFENSA: ¡Mi insignia! Está un poquito abollada, señor juez, pero yo también.
JUEZ: Queda acreditada la defensa. [sfx: gavel]
CHAPULIN: ¡Muy bien! La corte abrió el Acta automáticamente. Seleccionaste la insignia y pulsaste el botón ¡Presentar Prueba!
CHAPULIN: Durante el interrogatorio, pulsa 📜 PRESENTAR para abrir el Acta. Allí elige una prueba y pulsa el botón ¡Presentar Prueba!
CHAPULIN: El corazón amarillo del botón ACTA DEL JUICIO abre el Acta.
CHAPULIN: Una prueba equivocada apaga uno de los cinco signos de exclamación verdes de la barra de arriba.
DEFENSA: ¿Y si se me acaba?
CHAPULIN: Si se apagan todos, pierdes el juicio y tienes que empezarlo de nuevo.
SUPER SAM: ¡Objection to the tutorial! ¡Esto lleva cuatro minutos y nadie ha facturado nada!
JUEZ: La fiscalía expondrá su teoría. Después escucharemos al único testigo del caso.
SUPER SAM: Sencillo, Your Honor. El acusado vive en la vivienda 4. El cobrador fue golpeado en la vivienda 4. El acusado estaba en la vivienda 4 cuando llegó la policía. Three for three! [sfx: desk_slam]
DEFENSA: ¡PROTESTO! ¡Con permisito, dijo Monchito! [sfx: desk_slam; cutin: objection_protesto]
DEFENSA: Mi cliente estaba ahí porque ahí vive, señor fiscal. Con ese razonamiento usted acusaría a la repisa.
JUEZ: La corte también quiere saber por qué la víctima no declara.
SUPER SAM: Amnesia, Your Honor. Del golpe. Muy inconveniente para mi presupuesto.
JUEZ: Entonces el peso de este juicio lo carga un solo testigo. La corte le recuerda a la defensa que **presionar** una declaración no cuesta nada, y que **presentar** una prueba sí. Úselas en consecuencia.
CHAPULIN: Y una más, Don Ramón: antes de presentar la Foto del Patio, selecciónala en el ACTA y pulsa EXAMINAR DETALLE para verla de cerca.
MODO TUTORIAL: Hazlo antes de presentar la foto: la vista ampliada te ayudará a encontrar el detalle correcto.
~~~

El tutorial de examen a detalle es opcional aquí y no bloquea: si el jugador no lo usa, T2 lo vuelve obligatorio con una pregunta concreta.

## 8. Testimonio 1, Casimiro: "Lo que vi desde el patio"

Enseña: navegación de declaraciones, Presionar, Presentar con penalización, y `followUp`.

~~~dialogue
JUEZ: Testigo, diga su nombre y su ocupación.
CASIMIRO: Casimiro Lengua, para servirle: distribuidor autorizado de Enciclopedias El Saber Universal. Del latín *encyclopaedia*, "instrucción en círculo". [pose: casimiro_catalogo]
JUEZ: Su testimonio, por favor. Únicamente lo que percibió.
~~~

~~~dialogue
c0_t1_1 CASIMIRO: Ese mediodía yo hacía mi ronda de ventas en la vecindad, tomo por tomo, puerta por puerta.
c0_t1_2 CASIMIRO: A la una en punto oí un golpe seco y un grito dentro de la vivienda 4.
c0_t1_3 CASIMIRO: Me asomé desde el patio y vi salir corriendo al acusado con el cartapacio del cobrador en la mano.
c0_t1_4 CASIMIRO: Corrí a la tienda de la esquina, llamé a la policía y regresé a cuidar al pobre señor. Once minutos, si me permite la precisión.
~~~

Presiones:

- **1:** enumera las puertas que tocó y admite que nadie le compró nada. Menciona de paso que la vivienda 4 "tenía la chapa muy floja, cosa que un servidor nota profesionalmente". El Chapulín remarca que presionar salió gratis. Este dato se cobra en el clímax.
- **2:** distingue el golpe del grito y sostiene la hora. Todavía no se le pregunta cómo la sabe.
- **3:** rectifica a la baja: "salir corriendo, sí; el cartapacio... lo vi de reojo". La declaración original **sigue siendo la atacable**; no se desbloquea una copia.
- **4:** confirma que él hizo la llamada y que la policía llegó a las 14:15. Super Sam celebra la puntualidad del testigo sin notar el problema.

**Contradicción sobre 3:** `parte_detencion`. Pregunta visible: "¿Qué traía el acusado encima cuando lo detuvieron?".

~~~dialogue
DEFENSA: ¡PROTESTO! ¡Ese cartapacio no aparece en ninguna parte de este expediente! [sfx: desk_slam; cutin: objection_protesto]
DEFENSA: El parte de la detención dice qué traía mi cliente a las 14:15: una barra de hielo, cuarenta centavos y un recibo de hielería.
DEFENSA: Del cartapacio de cobranza, señor juez, nada. Ni en sus manos, ni en su vivienda, ni en la vecindad completa.
CASIMIRO: Bueno... uno dice "con el cartapacio" por decir. Es una figura retórica. Sinécdoque, si me permite. Del latín *charta*, por cierto. [pose: casimiro_sweat]
CHAPULIN: ¡Chanfle! ¿Y el grito también fue una sinécdoque?
JUEZ: ¡Cáspita! Testigo, la corte no le pidió literatura.
SUPER SAM: ¡Irrelevante! ¡El muchacho tuvo cuarenta minutos para esconder ese cartapacio donde quisiera! [sfx: desk_slam]
JUEZ: La corte concede que un objeto no localizado no acredita nada por sí solo. Pero entonces esa hora se vuelve decisiva. Defensa, ¿tiene algo sobre la una en punto?
~~~

**FollowUp sobre 2:** `recibo_hielo`. Pregunta visible: "¿Dónde estaba el acusado a la una de la tarde?".

~~~dialogue
DEFENSA: ¡Aquí, señor juez! El recibo de la hielería trae **dos** sellos de hora: entró a las 13:05 y salió a las 13:55.
TORIBIO: Es que el bloque no cabía, licenciado. Lo tuvieron que partir. Yo me esperé porque sin hielo no hay paleta, y sin paleta no hay renta. [pose: toribio_nervioso]
DEFENSA: Cincuenta minutos formado, con sello de entrada, sello de salida y la firma del hielero.
CASIMIRO: Dos cuadras se recorren corriendo, licenciado. Tomo tercero, "atletismo". [pose: casimiro_sweat]
DEFENSA: Corriendo, de ida y de vuelta, con un bloque de seis kilos y sin que el hielero lo viera salir. Usted vende enciclopedias, no milagros.
[ACTUALIZAR informe_lesiones]
DEFENSA: Y hay otra cosa, señor juez: el informe ampliado dice que el golpe vino de atrás y de arriba.
CHAPULIN: ¡De atrás! ¡Como los cobradores de mi casero!
DEFENSA: Mi cliente mide metro sesenta y tres. Don Nazario, metro ochenta.
JUEZ: ¡Cáspita! ¿Está diciendo que el acusado no pudo dar ese golpe?
DEFENSA: Estoy diciendo que quien lo dio estaba parado más alto o lo tomó desprevenido por la espalda. Y a la una en punto mi cliente estaba formado por hielo.
SUPER SAM: ...Grrr. ¡Entonces el testigo se equivocó de reloj! ¡Ajuste la hora y el caso sigue igual! [sfx: desk_slam]
JUEZ: Se le concede a la fiscalía. Testigo, va a explicar a esta corte **cómo** sabe que era la una en punto.
CHAPULIN: Ahí está el detalle, Don Ramón. Nos acaban de regalar el segundo testimonio.
~~~

**Primer turnabout.** La coartada del acusado queda acreditada para la una en punto; la ventana del golpe sigue abierta hasta las 14:00, así que el caso no se cae todavía.

## 9. Testimonio 2, Casimiro: "Cómo sé que era la una"

Enseña: examen a detalle obligatorio y **Present & Point**.

~~~dialogue
c0_t2_1 CASIMIRO: Un servidor no se equivoca de hora. Traigo dos relojes, uno por brazo, y los sincronizo cada mañana.
c0_t2_2 CASIMIRO: Pero además lo oí: a la una en punto sonó la campana de la escuela de enfrente. Una campanada, una hora.
c0_t2_3 CASIMIRO: Y justo con esa campanada vino el golpe. Por eso lo tengo grabado.
c0_t2_4 CASIMIRO: Desde donde yo estaba, en el patio, se oye todo. Es un patio con muy buena acústica.
~~~

Presiones:

- **1:** presume de sus relojes y admite que los sincroniza "con la campana", lo que vuelve circular su propia verificación.
- **2:** insiste en la campana y describe la escuela para la corte. Aquí queda claro que la escuela aparece al fondo de `foto_patio`.
- **3:** repite la simultaneidad. Super Sam la adopta como su nueva tesis.
- **4:** describe el patio, el lavadero y el tendedero. Sostiene que desde ahí no pudo confundirse.

**Contradicción sobre 2 o 3:** `foto_patio`, con `pointTarget`. Ambas declaraciones afirman que sonó la campana de la escuela, así que presentar la foto desde cualquiera de las dos debe iniciar la misma secuencia de examen a detalle y señalamiento.

Pregunta visible del señalamiento: "Señala en la imagen: ¿qué hay en la escuela de enfrente el día 12 de julio?". Zona correcta: `campanario_vacio`. Zonas incorrectas: `lavadero`, `tendedero`, `puerta_4`, `carrito_paletas`.

~~~dialogue
DEFENSA: ¡PROTESTO! ¡Esa campana no sonó, ni ese día ni el anterior! [sfx: desk_slam; cutin: objection_protesto]
~~~

Fallo del señalamiento:

~~~dialogue
JUEZ: Ese punto no dice nada sobre una campanada, licenciado.
SUPER SAM: ¡Un peso menos de credibilidad para la defensa! ¡Y van! [sfx: desk_slam]
CHAPULIN: Calma, Don Ramón. Vuelve a mirar la foto: la escuela está al fondo, y lo que le falta es lo que importa.
~~~

Éxito:

~~~dialogue
DEFENSA: ¡El campanario, señor juez! ¡Está lleno de andamios y el hueco de la campana está vacío!
DEFENSA: Se la bajaron en junio para resoldarla. La escuela está de vacaciones y la campana está en el taller.
CHAPULIN: ¡Nadie contaba con que la campana también se fuera de vacaciones!
CASIMIRO: Entonces... entonces habrá sido otro sonido parecido. Un sonido de naturaleza campanil. [pose: casimiro_panic]
DEFENSA: Sí: dos claxonazos del camión del hielo, que pasa por esa esquina todos los días **a las dos de la tarde**.
TORIBIO: ¡Es cierto! Yo venía atrás del camión, licenciado. Llegué, abrí mi puerta y ahí estaba el señor Nazario en el suelo. Y grité.
DEFENSA: A las dos y cinco. Ese es el grito que este testigo oyó, señor juez. Y lo movió una hora para atrás para que cayera fuera del recibo de la hielería.
CASIMIRO: ¡Yo no moví nada! ¡Yo estaba vendiendo! [pose: casimiro_panic]
[pausa]
JUEZ: ¡Cáspita! ¡Esta corte ya no tiene ningún testigo del momento del asalto!
SUPER SAM: ¡Un momento! ¡UN MOMENTO! [sfx: desk_slam; cutin: objection_un_momento]
SUPER SAM: Si este señor no oyó el golpe a la una... ¿cómo sabía que el cobrador traía un cartapacio de cobranza? ¡Eso no lo publiqué yo! ¡Eso no salió en el periódico!
DEFENSA: (Señor fiscal, es lo primero útil que dice usted en toda la mañana.)
JUEZ: Se decreta un receso de veinte minutos. El alguacil revisará el maletín de muestras del testigo. [sfx: gavel]
CASIMIRO: ¡Mi maletín es propiedad de la empresa! ¡Tomo octavo, "inviolabilidad"! [pose: casimiro_panic]
~~~

**Segundo turnabout.** El receso transcurre en la sala de espera (`bg_waiting_room`) como escena de diálogo dentro del modo juicio, sin salto al modo investigación ni cambio de modo de juego (ver [[docs/lessons-learned/mode-fade-and-case-complete.md]] y [[docs/lessons-learned/trial-waiting-room-epilogue-staging.md]]).

## 10. Receso y entrega de pruebas

### 10.1 Receso en la sala de espera (11:30)

Fondo `bg_waiting_room`. Cada línea estampa la locación (`bg: bg_waiting_room; furniture: none`) para aislarla de las cámaras de sala (ver [[docs/lessons-learned/trial-waiting-room-epilogue-staging.md]]). Enseña: recapitulación a mitad del juicio, consolidación de la teoría del caso y la función de guardado manual (`MODO TUTORIAL`).

~~~dialogue
NARRADOR: 11:30. Sala de espera del tribunal. [bg: bg_waiting_room; furniture: none; bgm: suspense]
TORIBIO: ¡Licenciado Don Ramón! ¡Estuvo colosal! ¡Le dio hasta por debajo de la lengua al señor de las enciclopedias! [bg: bg_waiting_room; furniture: none; pose: toribio_aliviado]
TORIBIO: ¡Cuando le demostró que la campana no tenía badajo ni campana ni nada, casi se le caen los dos relojes de la impresión! [bg: bg_waiting_room; furniture: none; pose: toribio_aliviado]
DEFENSA: ¡Uff! No cantes victoria todavía, chamaco... Mira cómo me sudan las manos. Si no fuera por la foto del patio, el señor juez ya te tenía con un pie en el penal. [bg: bg_waiting_room; furniture: none; pose: donramon_sweat]
CHAPULIN: ¡Todos mis movimientos estuvieron fríamente calculados! Bueno, casi todos, porque al principio yo también pensé que la campana sonaba bonito. [bg: bg_waiting_room; furniture: none; pose: chapulin_idle]
CHAPULIN: Pero fíjense bien: logramos desmontar la hora del testigo, pero todavía no sabemos qué hacía ese hombre en la vecindad ni por qué se puso tan nervioso con su maletín de muestras. [bg: bg_waiting_room; furniture: none; pose: chapulin_point]
DEFENSA: ¡Eso es lo mero bueno! Ese tipo no vende enciclopedias, Chapulín. Yo conozco a los vendedores de a pie: te engatusan con un cuento, te ofrecen abonos chiquitos y te sonríen aunque les eches al perro. [bg: bg_waiting_room; furniture: none; pose: donramon_idle]
DEFENSA: Este señor no... este señor andaba midiendo chapas. Lo dijo él solito: "la vivienda 4 tenía la chapa floja". [bg: bg_waiting_room; furniture: none; pose: donramon_point]
TORIBIO: ¡Es verdad! Hace tres días lo vi merodeando por mi ventana. Me dijo que andaba ofreciendo el tomo de "Cerrajería moderna". ¡Y yo de tarugo casi le pido que me compusiera el cerrojo! [bg: bg_waiting_room; furniture: none; pose: toribio_nervioso]
CHAPULIN: ¡Mis antenitas de vinil nunca fallan! Ese sujeto andaba buscando una presa fácil. Si el alguacil encuentra algo sospechoso en ese portafolio de muestras, la fiscalía tendrá que cambiar de blanco. [bg: bg_waiting_room; furniture: none; pose: chapulin_idle]
DEFENSA: Ojalá... porque ese fiscal gringo ya me tiene harto con su "time is money". A mí el único money que me interesa es el de mis honorarios para pagar la renta al casero. [bg: bg_waiting_room; furniture: none; pose: donramon_idle]
TORIBIO: Si salgo libre de aquí, licenciado, le juro que le surto paletas de grosella y de limón todos los domingos por un año entero. [bg: bg_waiting_room; furniture: none; pose: toribio_aliviado]
DEFENSA: (Grosella no paga los catorce meses de renta, pero por lo menos no me voy a morir de calor este verano...) [bg: bg_waiting_room; furniture: none; pose: donramon_idle]
CHAPULIN: ¡Oye, Don Ramón! Antes de que se nos acaben los veinte minutos del receso... ¿ya te aseguraste de tener todo en orden? [bg: bg_waiting_room; furniture: none; pose: chapulin_point]
DEFENSA: ¿Mis apuntes del caso? Sí, los tengo aquí anotados en la envoltura de una torta de jamón. [bg: bg_waiting_room; furniture: none; pose: donramon_idle]
CHAPULIN: ¡No hablo de tortas! Hablo de registrar tus avances para no tener que empezar de cero si te entra la chiripiorca. [bg: bg_waiting_room; furniture: none; pose: chapulin_panic]
MODO TUTORIAL: Puedes guardar tu partida en cualquier momento pulsando el botón 💾 GUARDAR en la barra superior. Si deseas retomar el juicio más adelante o asegurar tu progreso antes de una decisión difícil, pulsa 📂 CARGAR desde la pantalla principal.
DEFENSA: ¡Mira qué chulada! Si la vida real tuviera botón de guardar, no se me habrían acumulado catorce meses de deuda. [bg: bg_waiting_room; furniture: none; pose: donramon_idle]
NARRADOR: El timbre del tribunal suena dos veces. Los veinte minutos de receso han concluido. [bg: bg_waiting_room; furniture: none; sfx: bell]
CHAPULIN: ¡Se acabó el recreo! Ahora sí viene lo bueno: el alguacil ya debe tener abierto ese maletín de cartón. [bg: bg_waiting_room; furniture: none; pose: chapulin_point]
DEFENSA: Vamos para adentro, Toribio. Agárrate fuerte, que a ese vendedor de enciclopedias le vamos a leer la cartilla completa. [bg: bg_waiting_room; furniture: none; pose: donramon_idle]
~~~

### 10.2 Reanudación en la sala y entrega de pruebas

Fondo `bg_courtroom`. Transición tras el receso y entrada de las dos nuevas piezas del Acta.

~~~dialogue
NARRADOR: Veinte minutos después. De vuelta en la sala, el alguacil deposita sobre el estrado el maletín de muestras del testigo. [bgm: suspense]
JUEZ: Que conste en acta lo que se encontró dentro.
NARRADOR: Entre los tomos del lomo roto, plegado y sin un centavo, un cartapacio de fuelle lleno de papeles: la lista de rentas de la vecindad, separador por separador.
[ENTREGAR maletin_cobranza]
[ENTREGAR tarjeta_enciclopedias]
SUPER SAM: Your Honor... la fiscalía solicita autorización para tomarle declaración a este testigo en calidad de investigado. Y solicita que el tiempo del receso se le cargue a la defensa.
JUEZ: Autorizada la primera. Denegada la segunda.
JUEZ: Señor Lengua, va a explicar a esta corte cómo llegó ese cartapacio a su maletín de muestras. Y le advierto que ahora cada palabra suya se asienta en su contra.
CHAPULIN: ¡Y ahora sí, Don Ramón, el testigo va a testificar de su propio caso!
DEFENSA: (Tres testimonios en un día. Y yo que venía nomás por la renta.)
~~~

## 11. Testimonio 3, Casimiro: "Cómo llegó ese cartapacio a mi maletín"

Enseña: una segunda ronda completa de contrainterrogatorio contra un testigo que ya perdió credibilidad, y un `followUp` que no depende de una lámina sino de un documento.

~~~dialogue
c0_t3_1 CASIMIRO: Yo no robé nada, señor juez. Ese cartapacio me lo encontré tirado en el callejón de la vecindad.
c0_t3_2 CASIMIRO: Lo levanté a las tres menos veinte, cuando la patrulla ya se había llevado al muchacho.
c0_t3_3 CASIMIRO: Y jamás lo abrí. Lo iba a entregar en la delegación en cuanto terminara mi jornada.
c0_t3_4 CASIMIRO: Porque ese día yo trabajé como cualquier otro: mi ronda completa, puerta por puerta, tomo por tomo.
~~~

Presiones:

- **1:** describe el callejón con lujo de detalle y se ofrece a dibujarlo. Nadie más vio ahí un cartapacio.
- **2:** sostiene la hora y vuelve a mirar sus dos relojes. El Chapulín señala que es la tercera hora exacta que da hoy.
- **3:** se le escapa que "de todos modos ya venía vacío, se sentía ligerito". El Juez le hace notar que acaba de decir que jamás lo abrió. Casimiro alega peritaje sensorial.
- **4:** enumera de nuevo su ronda. Insiste en que es un profesional del ramo editorial con veinte años de trayectoria.

**Contradicción sobre 2:** `parte_detencion`. Pregunta visible: "¿A qué hora describió el testigo ese cartapacio?".

~~~dialogue
DEFENSA: ¡PROTESTO! ¡Usted describió ese cartapacio veinticinco minutos antes de encontrarlo! [sfx: desk_slam; cutin: objection_protesto]
DEFENSA: Aquí está, en el anexo del parte: a las 14:15, usted le dijo al agente de qué color era, cómo era el broche y en cuál mano lo llevaba.
DEFENSA: Y usted acaba de declarar que lo levantó del callejón a las 14:40.
CASIMIRO: ...Eso lo asentó mal el agente. Los agentes escriben con muchas faltas. [pose: casimiro_sweat]
SUPER SAM: ¡Ese agente es MI agente y escribe como los ángeles! ¡Le pago por palabra! [sfx: desk_slam]
CHAPULIN: ¡Nadie contaba con la caligrafía!
JUEZ: ¡Cáspita! Testigo, o vio ese cartapacio antes, o lo describió sin verlo. Escoja.
CASIMIRO: Lo... lo deduje. Un cobrador siempre trae cartapacio. Es inferencia lógica. Tomo cuarto. [pose: casimiro_panic]
DEFENSA: También dedujo el color, el broche y la mano izquierda.
[ACTUALIZAR parte_detencion]
DEFENSA: Ese cartapacio lo vio de cerca, señor juez. A la una y veinte de la tarde, dentro de la vivienda 4.
SUPER SAM: ¡Un momento, counselor! ¡Que se defienda con su trabajo! ¡Si el señor estuvo vendiendo toda la tarde, alguien le habrá comprado algo!
~~~

**FollowUp sobre 4:** `tarjeta_enciclopedias`. Pregunta visible: "¿Qué dice el oficio del testigo sobre su presencia en la vecindad?".

~~~dialogue
DEFENSA: ¡Este señor no vende enciclopedias! [sfx: desk_slam]
DEFENSA: "Enciclopedias El Saber Universal, sociedad anónima". Disuelta desde 1971, señor juez. No existe.
DEFENSA: Sin hoja de ruta. Sin un solo pedido. Tres tomos de muestra con el lomo roto de tanto cargarlos.
CHAPULIN: ¡Y usted que se acordaba del tomo octavo!
CASIMIRO: ¡Uno se prepara! ¡Uno estudia el producto! [pose: casimiro_panic]
DEFENSA: Usted no toca puertas para vender, señor Lengua. Las toca para saber cuáles se abren solas.
DEFENSA: Y por eso no tiró el cartapacio, señor juez. El dinero se lo echó a la bolsa; los papeles se los quedó. Esa lista dice quién pagó, quién debe y en qué casa hay efectivo. Ése es el único catálogo que este señor sabe leer. [sfx: desk_slam]
DEFENSA: Y de la vivienda 4 usted mismo dijo, cuando lo presioné esta mañana, que tenía "la chapa muy floja, cosa que un servidor nota profesionalmente".
JUEZ: La corte ordena que se le tome declaración en calidad de investigado y que permanezca en el estrado. [sfx: gavel]
[ACTUALIZAR informe_lesiones]
NARRADOR: La secretaría incorpora el peritaje complementario: el calco de la lesión corresponde a un objeto de base plana, borde recto y unos seis kilos.
SUPER SAM: Your Honor, la fiscalía mantiene la acusación contra el paletero hasta que alguien me diga con qué golpearon al cobrador. ¡Un ladrón de latas no es un asaltante!
JUEZ: Defensa, esta corte necesita dos cosas: el arma y la razón por la que ese hombre entró a la vivienda 4.
~~~

**Tercer turnabout.** El testigo queda dentro de la vivienda a la hora del golpe y sin oficio que lo explique. Falta el arma y el motivo: eso es el clímax.

## 12. Clímax: el arma y la lata

Entrada al clímax. La primera línea fija `bgm`.

~~~dialogue
DEFENSA: Voy a demostrar dos cosas, señor juez: con qué golpearon a Don Nazario, y qué fue a buscar este señor a la casa de un paletero. [bgm: suspense]
~~~

### 12.1 Etapa 1: con qué se golpeó al cobrador

`presentTarget`: `plancha_carbon`. `requiredUpdateStage`: `{ informe_lesiones: 2 }`, satisfecho por la penúltima línea de §11, que no es condicional. `prompt`: "¿Qué objeto de la vivienda 4 explica esa lesión?". `pointTarget` sobre la lámina de la plancha: zona correcta `mango_tizne`; zonas incorrectas `base`, `carbon`, `repisa`, `pared`. Pregunta visible antes de hacer clic: "Señala en la imagen el detalle que delata a quien la usó."

~~~dialogue
DEFENSA: ¡TOMA ESO! [sfx: desk_slam; cutin: objection_toma_eso]
DEFENSA: La plancha de carbón de la repisa. Base plana, borde recto, seis kilos. El calco encaja con ella.
DEFENSA: ¡Aquí! ¡El mango! ¡Tizne fresco justo donde se agarra, y la plancha guardada con el asa hacia la pared!
CHAPULIN: ¡Nadie guarda una plancha al revés... más que quien nunca la ha usado para planchar!
TORIBIO: Yo la pongo con el asa para afuera, licenciado. Siempre. Es lo único que heredé de mi mamá. [pose: toribio_llorando]
DEFENSA: Y quien la usó ese día la devolvió a su lugar, señor juez. Con calma. Acomodándola.
JUEZ: ¿Y eso qué significa para esta corte?
~~~

**Choice prompt** (`choices`): "¿Qué demuestra que la plancha volviera a la repisa?".

| id | Opción | Resultado |
| --- | --- | --- |
| `arma` | Que la plancha fue el arma del asalto. | Fallo: eso ya lo dijo el calco de la lesión. |
| `calma` | Que quien golpeó tuvo tiempo y calma para acomodarla. | **Correcta.** |
| `huellas` | Que el culpable quiso borrar sus huellas. | Fallo: nadie limpió nada; el tizne sigue ahí. |
| `orden` | Que el acusado es una persona ordenada. | Fallo: es simpático, no es prueba. |

~~~dialogue
DEFENSA: Que quien lo hizo no salió corriendo, señor juez. Se quedó.
DEFENSA: Mi cliente llegó a las dos y cinco y gritó. El que golpeó a Don Nazario tuvo cuarenta minutos para acomodar una plancha y sentarse en el patio a esperar a que alguien más encontrara el cuerpo.
[ACTUALIZAR lata_ahorros]
NARRADOR: El peritaje añade una línea sobre la lata de ahorros: la tapa presenta el mismo tizne que el mango de la plancha.
CASIMIRO: ¡Eso no prueba nada! ¡Ese muchacho no tenía nada que robar! ¡Su lata seguía llena! [pose: casimiro_panic]
SUPER SAM: Precisely! ¡Cuarenta pesos intactos! ¡Ahí no hubo robo, Your Honor, ahí hubo pleito de vecinos!
DEFENSA: ...Señor fiscal, acaba usted de decir la última cosa que me faltaba.
~~~

### 12.2 Etapa 2: qué fue a buscar

`presentTarget`: `lata_ahorros`. `requiredUpdateStage`: `{ lata_ahorros: 1 }`, satisfecho arriba. `prompt`: "¿Qué objeto de esa casa no estaba donde debía estar?".

~~~dialogue
DEFENSA: ¡PROTESTO! ¡La lata está llena, señor juez, pero no está en su lugar! [sfx: desk_slam; cutin: objection_protesto]
DEFENSA: La policía la encontró **sobre la mesa**. Dígale a la corte dónde la guarda usted, Toribio.
TORIBIO: Debajo del catre, licenciado. Envuelta en un trapo. Desde que entré a vivir ahí. [pose: toribio_nervioso]
DEFENSA: Alguien la sacó de abajo del catre y la puso sobre la mesa. Y la tapa tiene el mismo tizne que el mango de la plancha.
CHAPULIN: ¡La misma mano en las dos cosas!
DEFENSA: Ese hombre entró por la lata, señor juez. Estaba con ella en las manos cuando el cobrador abrió la puerta.
DEFENSA: Y no se llevó los cuarenta pesos porque a las 13:20 ya tenía en el suelo a un señor de metro ochenta y un cartapacio de cobranza a los pies. Cambió de negocio a media faena.
CASIMIRO: ¡ERA UN VIEJO CON UN MALETÍN LLENO! [sfx: desk_slam; pose: casimiro_breakdown]
CASIMIRO: ¡Y ese muchacho no tenía nada! ¡Nada! ¡Una lata con cuarenta pesos y la plancha de su mamá!
NARRADOR: Los tomos se le caen del maletín. Por primera vez, el testigo no mira sus relojes.
[pausa]
SUPER SAM: ...Your Honor. La fiscalía retira la acusación contra Toribio Pantoja. Y factura este juicio como *asalto*, no como *robo de vivienda*, que paga distinto.
JUEZ: La corte tomará nota de su sensibilidad, señor fiscal. [sfx: gavel]
~~~

### 12.3 Veredicto

~~~dialogue
JUEZ: Por lo escuchado hoy, este tribunal declara al acusado Toribio Pantoja... [sfx: gavel]
JUEZ: ¡INOCENTE! [cutin: objection_inocente; bgm: victory]
NARRADOR: Cae confeti sobre el estrado de la defensa.
TORIBIO: ¡Licenciado! ¡Licenciado, gané! ...¿ganamos? [pose: toribio_aliviado]
DEFENSA: Ganó usted. Yo nomás hablé.
CHAPULIN: ¡Y de aquí en adelante ya sabes cómo se hace, Don Ramón: se presiona gratis, se presenta con cuidado y se mira todo de cerquita!
JUEZ: Se ordena la detención de Casimiro Lengua y la devolución del cartapacio de cobranza. Se cierra la audiencia. [sfx: gavel]
~~~

El confeti va en la cámara del veredicto, antes de cualquier corte de locación (ver [[docs/lessons-learned/verdict-celebration-before-location-cut.md]]).

## 13. Epílogo

`epilogue.bg`: `bg_waiting_room_case0`. Esta variante exclusiva del Caso 0 muestra el periódico abierto sobre el banco izquierdo, fuera de la oclusión de personajes y diálogo. Cada línea estampa la locación, porque las cámaras de tribunal se disparan en cualquier línea sin `bg` (ver [[docs/lessons-learned/trial-waiting-room-epilogue-staging.md]]).

~~~dialogue
NARRADOR: Sala de espera del tribunal. [bg: bg_waiting_room_case0; bgm: epilogue]
TORIBIO: Licenciado, no tengo con qué pagarle. Nomás traigo esto. [bg: bg_waiting_room_case0]
DEFENSA: ¿Catorce paletas? [bg: bg_waiting_room_case0]
TORIBIO: Trece. Una se derritió en el juzgado. [bg: bg_waiting_room_case0]
DEFENSA: (Trece paletas y catorce meses de renta. Vamos empatados.) [bg: bg_waiting_room_case0]
CHAPULIN: ¡No te desanimes, Don Ramón! Todo abogado empieza con un cliente que le paga en especie. [bg: bg_waiting_room_case0]
DEFENSA: Y termina con un casero que le cobra en efectivo. [bg: bg_waiting_room_case0]
NARRADOR: Sobre el banco, un periódico abierto: "ROBAN LA CHICHARRA PARALIZADORA DE ORO DEL MUSEO DE LAS CURIOSIDADES". [bg: bg_waiting_room_case0]
CHAPULIN: ...Chanfle. [bg: bg_waiting_room_case0; pose: chapulin_idle]
DEFENSA: ¿Y ése quién lo va a defender? [bg: bg_waiting_room_case0]
CHAPULIN: Ahí está el detalle. [bg: bg_waiting_room_case0]
~~~

El epílogo **no** resuelve nada del Caso 1 ni nombra a Tripaseca.

## 14. Cobertura de mecánicas y curva de dificultad

Orden canónico de enseñanza. Cada fila indica la primera vez que el jugador ejecuta la acción y si es obligatoria.

| # | Mecánica | Primera aparición | Obligatoria |
| --- | --- | --- | --- |
| 1 | Avance de diálogo | §7.1 pre-juicio | Sí |
| 2 | Abrir el Acta del Juicio | §7.2 apertura | Sí |
| 3 | Presentar (`openingPresent`) | §7.2, `insignia_abogado` | Sí |
| 4 | Barra de credibilidad y penalización | §7.2 explicada; §8 primer costo real | Explicada |
| 5 | Examinar Detalle | §7.2 sugerido; §9 exigido vía `foto_patio` | Sí en §9 |
| 6 | Navegar declaraciones | §8 | Sí |
| 7 | Presionar | §8, declaración 1 | Sí (entrega el dato de la chapa) |
| 8 | Presentar contradicción | §8, declaración 3 | Sí |
| 9 | `followUp` | §8, declaración 2 | Sí |
| 10 | Cut-ins (`PROTESTO`, `UN MOMENTO`, `TOMA ESO`) | §7.2, §9, §11, §12 | Automáticas |
| 11 | Present & Point | §9, `foto_patio` | Sí |
| 12 | `updateEvidence` visible en el Acta | §8, §11 y §12.1 | Automática |
| 13 | Segunda ronda de contrainterrogatorio completa | §11 | Sí |
| 14 | Clímax por etapas | §12 | Sí |
| 15 | `requiredUpdateStage` | §12.1 y §12.2 | Sí |
| 16 | Choice prompt | §12.1 | Sí |
| 17 | Veredicto, cut-in de inocencia y epílogo | §12.3, §13 | Automáticos |
| 18 | Guardar y cargar | §10.1 receso con una lámina `MODO TUTORIAL` | No |
| 19 | Cambio de idioma | Botón del HUD, sin lámina propia | No |

No se enseñan mecánicas de investigación: el caso no tiene modo `INVESTIGATION`.

**Riesgo de Game Over, declarado.** Con tres testimonios hay 9 acciones falibles: 6 presentaciones (`insignia_abogado`, `parte_detencion` en T1, `recibo_hielo`, `parte_detencion` en T3, `tarjeta_enciclopedias`, `plancha_carbon`, `lata_ahorros` — siete si se cuenta la apertura), 2 señalamientos y 1 elección múltiple, contra 5 puntos de salud. Un principiante que falle dos veces por mecánica llega a 0, y `restartAfterGameOver` reinicia el juicio completo desde el `intro`, lo que en un tutorial de 40 minutos es un castigo desproporcionado.

Mitigación en este orden, decidida al validar:

1. Diálogo de coaching en cada fallo, que reencuadra la pregunta sin dar la respuesta (ya escrito para los señalamientos).
2. Si sigue habiendo Game Over frecuente, **restaurar un punto de salud al inicio de cada testimonio** en este caso. Es un cambio de motor pequeño, acotado a `startTestimony`, y debe quedar limitado a `case0` para no aflojar los casos 1–4.
3. Último recurso: reducir presentaciones obligatorias. No se añade salud inicial, porque el HUD de cinco signos de exclamación verdes es el mismo que verá en el Caso 1.

## 15. Progresión, assets y migración técnica

### 15.1 Progresión y prevención de bloqueos

- El Acta arranca con siete piezas. `maletin_cobranza` y `tarjeta_enciclopedias` entran por `[ENTREGAR]` en el receso de §10, después de que T2 se cierre.
- `informe_lesiones` debe alcanzar la etapa 2 antes de la etapa 1 del clímax. Se garantiza con dos `[ACTUALIZAR]` en líneas no condicionales: uno en el `followUp` de T1 y otro en el cierre de T3.
- `lata_ahorros` debe alcanzar la etapa 1 antes de la etapa 2 del clímax. El `[ACTUALIZAR]` va en el cierre de la etapa 1, que es obligatoria.
- `parte_detencion` recibe un único `[ACTUALIZAR]`, en T3. No se define un segundo.
- `maletin_cobranza` no se presenta nunca: existe para justificar T3 y para que el Acta muestre la lista de rentas. Un test debe permitir pruebas sin uso, pero el spec declara su función para que nadie la "arregle" añadiéndole una contradicción.
- Ninguna etapa del clímax admite dos pruebas alternativas: en un tutorial la respuesta es única y la pregunta está siempre visible en el HUD (ver [[docs/lessons-learned/climax-present-prompt-hud.md]]).
- Tras el último acierto del clímax `choiceIdx` vuelve a ser nulo; eso no es un nuevo prompt de presentación (ver [[docs/lessons-learned/climax-settled-choice-idx.md]]).
- No hay `adjournment`, ni `unlockLocation`, ni `requiredEvidence` de investigación que puedan bloquear el avance.

### 15.2 Refactor del motor: testimonios variables

Es el cambio de mayor alcance del caso y **no** es específico de él: habilita cualquier jornada con más de dos testimonios.

1. `TrialScript` y `TrialDayScript` en [[src/types/Private/script.ts]]: sustituir `testimony1` y `testimony2` por `testimonies: Testimony[]`. Los casos 1–4 pasan a `testimonies: [t1, t2]`; es una edición mecánica en cuatro casos y sus jornadas.
2. [[src/engine/Private/TrialController.ts]]: `testimonyKey: 'testimony1' | 'testimony2' | null` pasa a `testimonyIdx: number | null`, y `startTestimony(idx)` resuelve `getActiveTrial(script, trialDay).testimonies[idx]`.
3. [[src/engine/Private/TrialOutcome.ts]]: `advanceAfterContradiction` cambia la comparación literal por `idx + 1 < testimonies.length`; si quedan testimonios avanza, y si no, adjourna o entra al clímax. Es el punto exacto que hoy fija el tope de dos.
4. [[src/state/Private/SaveManager.ts]]: el snapshot guarda un índice. Los saves antiguos traen `'testimony1' | 'testimony2'`: se mapean a 0 y 1 al restaurar, y se conserva la lectura del campo viejo durante una versión.
5. [[src/engine/Private/VisualWarmup.ts]]: el precacheo recorre el arreglo en vez de nombrar dos campos.
6. Tests de regresión sobre los casos 1–4: el orden de testimonios, el aplazamiento del Caso 2 día 1 y la restauración de un save de cada caso deben seguir pasando sin cambios de comportamiento.

Si se decide **no** pagar este refactor, el caso se reduce a dos testimonios moviendo T3 al clímax como dos etapas más. Es el diseño anterior de este documento y pierde la ronda de contrainterrogatorio contra el testigo ya desacreditado, que es justamente la parte que da la sensación de caso introductorio de Ace Attorney.

### 15.3 Otros cambios de código

El motor tampoco puede hoy ejecutar un caso sin investigación:

1. `CaseId` en [[src/types/Private/state.ts]]: añadir `'case0'`. Es una unión cerrada y `SCRIPTS` en [[src/case/index.ts]] es un `Record<CaseId, …>` completo, así que el nuevo id obliga a registrar el guion en el mismo commit.
2. `EvidenceId` en [[src/types/Private/evidence.ts]]: añadir los ocho ids nuevos. Son distintos de los existentes a propósito, para no chocar con `assets/<id>.webp` de otros casos (ver [[docs/lessons-learned/shared-evidence-id-filenames.md]]).
3. Nuevo módulo profundo `src/case/case0/` con `index.ts` público y `Private/{trial.ts, trial_en.ts, climax.ts, climax_en.ts}`. `investigation: {}` (registro vacío) y `startLocation: 'courtroom'`.
4. `PoseName` en [[src/types/Private/script.ts]]: añadir las nueve poses nuevas.
5. Catálogo de pruebas: `EvidenceCatalogCase0Es.ts` y `EvidenceCatalogCase0En.ts`, ramificados en [[src/state/Private/EvidenceCatalog.ts]] igual que `case3`/`case4`.
6. **Arranque solo-juicio** en [[src/engine/Private/EngineLaunch.ts]]: `startGame` llama hoy a `investigation.startInvestigation(script.startLocation)` sin excepción. Hace falta una ruta que entre a `TRIAL` desde el splash. No sirve reutilizar `populateTrialEvidence` tal cual: adelanta **todas** las etapas de cada prueba (`while (this.updateEvidence(item))`), lo que arruinaría los `[ACTUALIZAR]` del guion. La ruta nueva debe otorgar el Acta inicial sin avanzar etapas y fijar `mode = 'TRIAL'`.
7. Botón de splash `btn-start-case0` en [[index.html]], entrada en [[src/engine/Private/DomElements.ts]] y `case=0` en [[src/engine/Private/EngineDebugBootstrap.ts]]. En el splash, el Caso 0 va **primero** y rotulado como tutorial.
8. Traducciones de HUD y del rótulo del botón en [[src/i18n/index.ts]]. El módulo `_en` se escribe completo: extender el objeto español filtra texto en castellano a través de tipos, tests y lint (ver [[docs/lessons-learned/en-scene-spread-inherits-spanish.md]]).
9. Guardado y carga: verificar que un save tomado en un caso sin investigación se restaura en `TRIAL` y no intenta volver a una locación de investigación.

### 15.4 Assets nuevos

| Asset | Tipo | Notas |
| --- | --- | --- |
| `toribio_idle`, `toribio_nervioso`, `toribio_llorando`, `toribio_aliviado` | Sprites | `toribio_idle` es el candado de identidad de la familia (ver [[docs/lessons-learned/supersam-pose-identity-lock.md]]). |
| `casimiro_amable`, `casimiro_catalogo`, `casimiro_sweat`, `casimiro_panic`, `casimiro_breakdown` | Sprites | `casimiro_amable` es el candado de identidad. Los dos relojes de pulsera deben verse en las cinco poses. |
| `parte_detencion`, `informe_lesiones`, `recibo_hielo`, `foto_patio`, `plancha_carbon`, `lata_ahorros`, `maletin_cobranza`, `tarjeta_enciclopedias` | Iconos del Acta | Rejilla de iconos; cuidar el recorte de filas (ver [[docs/lessons-learned/court-record-evidence-grid-rows.md]] y [[docs/lessons-learned/court-record-unlabeled-icon-grid.md]]). |
| `examine_recibo_hielo`, `examine_foto_patio`, `examine_plancha`, `examine_lata`, `examine_informe_lesiones` | Láminas 960×540 | El icono del Acta debe derivar de la lámina, no de una escena distinta; Spanish and English catalogs share the final injury plate and its embedded Nazario photo. |
| `point_foto_patio`, `point_plancha` | Láminas de señalamiento | Las zonas se miden **sobre la WebP generada**, nunca sobre la descripción del spec (ver [[docs/lessons-learned/present-point-cover-crop.md]] y [[docs/lessons-learned/examine-zones-are-native-buttons.md]]). |
| `maletin_cobranza`, `examine_maletin_cobranza` | Icono del Acta y lámina | Cartapacio de fuelle de 1972: cartón prensado o cuero gastado, cordón elástico, broche metálico y pestañas rotuladas a mano en tinta, una por vivienda. **Nada de nailon, cierre de cremallera ni pestañas de color.** El icono deriva de la lámina (ver [[docs/lessons-learned/court-record-icon-matches-examine.md]]), así que la lámina se dibuja primero. El Acta permite examinarlo en detalle aunque la prueba no se presente nunca. |
| `examine_informe_lesiones` | Lámina 960×540 | Cuatro paneles: foto pericial de Nazario, diagrama de la lesión occipital, **el calco medido a escala** (contorno rectangular de esquinas redondeadas, borde recto, cotas y estimación de ≈6 kg) y la impresión de base plana. **Ningún panel dibuja la plancha de carbón ni ningún objeto identificable**: la lámina se ve desde la apertura y dibujar el arma anula la etapa 1 del clímax (ver [[docs/lessons-learned/climax-stage-prompt-spoils-answer.md]]). |
| `foto_nazario` | Foto pericial | Se usa solo dentro de la lámina de `informe_lesiones`; preserve this identity when regenerating that plate. |

Fondos reutilizados: `bg_courtroom`, `bg_defense`, `bg_judge`, `bg_witness`, `bg_waiting_room` para otros casos. Caso 0 añade `bg_waiting_room_case0`, generado con el periódico abierto del epílogo.

Pipeline: `process_case0_assets.py`, siguiendo el patrón de `process_case4_assets.py`, y verificación en `verify_assets.py`.

Las horas de `recibo_hielo`, `foto_patio` y del anexo de `parte_detencion` deben cotejarse contra la cronología de §4 antes de generar la lámina (ver [[docs/lessons-learned/visual-log-times-follow-canonical-timeline.md]]).

### 15.5 Documentación obligatoria al implementar

- `docs/live/glossary.md`: entradas de Toribio Pantoja, Casimiro Lengua, Don Nazario Cuenca y los ocho ids de prueba.
- `docs/architecture/case-scripting.md`: `testimonies: Testimony[]` como forma canónica de una jornada, y que un `CaseScript` puede tener `investigation` vacío.
- `docs/architecture/game-engine.md`: la ruta de arranque solo-juicio y el avance por índice de testimonio.
- `docs/flows/trial-cross-examination-flow.md`: el avance de testimonio deja de ser un salto de dos posiciones.
- `docs/lessons-learned/`: entrada nueva si el arranque solo-juicio o el refactor de testimonios destapan supuestos del motor (`checkTrialReadiness`, `populateTrialEvidence`, restauración de saves antiguos).
- `src/case/case0/case0.group.md` con `descriptionShort`.

### 15.6 Tests

- `tests/case/Case0Trial.test.ts`: cada testimonio tiene exactamente una contradicción resolutoria; cada prueba exigida está en el Acta en ese momento; ningún `prompt` nombra su prueba objetivo.
- `tests/case/Case0Progression.test.ts`: `informe_lesiones` llega a la etapa 2 antes de la etapa 1 del clímax; `lata_ahorros` llega a la etapa 1 antes de la etapa 2; `parte_detencion` no recibe un segundo update.
- `tests/engine/TrialTestimonySequence.test.ts`: con tres testimonios, el acierto en T1 lleva a T2, el de T2 a T3 y el de T3 al clímax; con dos, el comportamiento de los casos 1–4 no cambia.
- `tests/state/SaveTestimonyMigration.test.ts`: un save con `testimonyKey: 'testimony2'` se restaura en el índice 1.
- `tests/engine/TrialOnlyLaunch.test.ts`: `startGame('case0')` deja `mode === 'TRIAL'`, otorga las siete pruebas iniciales y **no** adelanta etapas.
- `tests/state/Case0EvidenceCatalog.test.ts`: paridad es/en y existencia de `assets/<id>.webp`.
- `tests/assets/Case0Assets.test.ts`: sprites, iconos y láminas presentes.
- `tests/case/Case0Points.test.ts`: cada `pointTarget` tiene exactamente una zona correcta y sus `bounds` caen dentro de 0–100.

## 16. Validación

- Duración objetivo 35–45 minutos, **no medida**. Requiere una partida completa antes de cerrar el spec.
- Lo primero que se mide es la salud restante al llegar al clímax, con un jugador que no conozca el género. De ahí sale la decisión del punto 2 de §14.
- Las dos láminas de señalamiento se dibujan **antes** de fijar coordenadas.
- Un jugador que nunca haya visto un Ace Attorney debe terminar el caso sin ayuda externa. Si se bloquea, el arreglo es una lámina `MODO TUTORIAL` más explícita, no una prueba adicional.
- Un jugador que ya haya jugado los casos 1–4 debe poder terminar el Caso 0 sin encontrar una mecánica que no exista allá.
