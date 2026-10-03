# Deducción final

Especificación funcional de una secuencia de razonamiento para **El Chapulín Colorado: Ace Attorney**.

Estado: demo independiente y primera integración terminada en el clímax del Caso 3. Actualización: 2 de octubre de 2026. Ejecutar `npm run demo:deduction` y abrir `http://127.0.0.1:4173/deduccion-final-demo.html`; para revisar la integración del Caso 3, abrir `/?case=3&trial=3&deduction`. Arquitectura: [[docs/architecture/final-deduction.md]].

## 1. Intención

El jugador debe sentir que está a punto de entenderlo todo, con la mente trabajando a toda velocidad. Tiene los hechos, pero todavía necesita encontrar la conexión decisiva. Cada elección correcta hace avanzar su razonamiento hasta una conclusión que permite a la defensa actuar con determinación.

La emoción sigue este recorrido:

**Concentración → impulso → conexión entre pistas → certeza creciente → "¡Ya lo tengo!"**

El usuario confirmó expresamente que esta interpretación captura la sensación de su referencia. Es el criterio principal para evaluar la mecánica. La tensión nace de una verdad que se está ordenando, con urgencia controlada y claridad creciente. La música y la imagen deben sostener ese proceso mientras el jugador piensa a su propio ritmo.

La secuencia tiene dos partes inseparables: el jugador construye una deducción y la presentación hace visible ese pensamiento. El resultado debe sentirse ganado por las conexiones que realizó.

## 2. Referencias y alcance de lo observado

### Video

[Phoenix Wright: Ace Attorney — Spirit of Justice, Turnabout Revolution](https://www.youtube.com/watch?v=DcHcv8AkTWo&t=46476s), del canal Santosx07. Tramo solicitado y revisado: **12:54:36–12:57:10**, duración de 2 minutos y 34 segundos.

Se revisaron imágenes del reproductor y se leyó el texto en pantalla. No se escuchó el audio del navegador. Las observaciones visuales son directas; la descripción de intención musical procede de las partituras, del MIDI y de la interpretación confirmada por el usuario.

| Momento aproximado | Observación conservada |
| --- | --- |
| 12:54:36–12:54:40 | Apollo aparece concentrado en el tribunal; la escena entra en su razonamiento. |
| 12:54:43–12:54:53 | Fondo azul en perspectiva, líneas de velocidad, luz blanca y camino rojo hacia un punto de fuga brillante. El pensamiento aparece en un cuadro de texto. |
| 12:54:58 | Tres alternativas con pequeños retratos o iconos. La enfocada aparece blanca con resplandor rojo; las otras, rojas. Entre las opciones está el Orbe del Fundador. |
| 12:55:03–12:55:13 | La idea elegida aparece ampliada en el espacio y el recorrido continúa. Apollo conecta el orbe con la revolución. |
| 12:55:23–12:55:43 | Una pregunta abre nuevas ramas. Se observa una respuesta que obliga a reconsiderar y volver a elegir. La conexión posterior utiliza que Inga desconocía el nombre de la fundadora. |
| 12:55:48–12:55:58 | Ilustración de la fundadora flotando sobre el recorrido, con borde luminoso e inclinación. El texto relaciona quiénes conocen su nombre. |
| 12:56:08–12:56:23 | Otra bifurcación examina la obsesión de Ga'ran por el orbe. Una respuesta equivocada devuelve a la pregunta. |
| 12:56:33–12:56:48 | Retrato de Ga'ran y una imagen de Amara canalizando. Apollo conecta la incapacidad de Ga'ran con la necesidad de mantener viva a Amara para sustituirla. |
| 12:56:58 | Última pregunta sobre la consecuencia de que Ga'ran no pueda canalizar espíritus. |
| 12:57:08–12:57:10 | Destello y fondo blanco. Letras negras enormes muestran "GA'RAN HAS NO CLAIM TO THE THRONE". |

La grabación incluye respuestas erróneas; su duración no fija la duración ideal del fangame. El retrato estático de Phoenix, el logotipo y la segunda pantalla pequeña pertenecen a la composición del video y no forman parte de la mecánica propuesta.

### Música

El usuario identificó el MIDI y las cuatro capturas de partitura como referencias de la misma canción. La partitura se titula **Revisualization — Synaptic Resonance**, acredita a **Noriyuki Iwadare** y al arreglista **Yan Chun Chan**.

Referencias conservadas en el repositorio:

- [MIDI de referencia](../references/deduccion-final/revisualization-reference.mid).
- [Partitura, captura 1](../references/deduccion-final/partitura-01.png).
- [Partitura, captura 2](../references/deduccion-final/partitura-02.png).
- [Partitura, captura 3](../references/deduccion-final/partitura-03.png).
- [Partitura, captura 4](../references/deduccion-final/partitura-04.png).

Datos comprobados del MIDI: 127 BPM, compás 4/4, unos 103,23 segundos, 96 ticks por negra y 1091 ataques de nota. Tiene una pista de metadatos y una pista musical que reúne las notas en un canal. El programa General MIDI declarado es 21, contado desde cero; esa asignación no acredita los timbres de la grabación original.

La partitura marca 128 BPM y separa batería, piano, piano eléctrico, Sweep Synthesizer, Saw Synthesizer y bajo eléctrico. Las imágenes son extractos de resolución limitada. Sirven para observar funciones instrumentales y cambios de textura; no se ha validado una equivalencia nota por nota con el MIDI ni una transcripción completa.

Lo relevante para esta especificación es el pulso constante, las figuras rápidas de semicorcheas, el movimiento ascendente y descendente, el acompañamiento repetido y los cambios hacia figuras de acordes y síncopas. La referencia se conserva como material de estudio. El tema definitivo del fangame se definirá al producir la música.

## 3. Cuándo aparece

La **Deducción final** ocupa un bloque de razonamiento cerca del desenlace de un juicio. Se activa cuando ya existen suficientes hechos para conectar varias ideas y falta formular una conclusión o una estrategia decisiva.

Son adecuados los bloques que contienen dos o más preguntas encadenadas y en los que la respuesta anterior explica por qué se plantea la siguiente. Una secuencia habitual tendrá **dos a cuatro preguntas**; hasta cinco si cada una aporta una conexión necesaria. No se añaden preguntas para alargar la animación.

También puede aparecer antes de la última presentación: la conclusión puede indicar qué prueba hace falta o cómo conseguir una demostración. Terminarla no implica automáticamente resolver el caso.

La activación debe ser una decisión de autor por bloque. Una pregunta de opción múltiple aislada no se convierte automáticamente en Deducción final. Los diálogos, las presentaciones de pruebas y los señalamientos conservan sus funciones narrativas.

## 4. Perspectiva narrativa

La escena representa el pensamiento del personaje que conduce la defensa en ese momento. Don Ramón será el referente habitual; cuando el Chapulín ejerza como defensor, el pensamiento será suyo. Cada bloque identifica expresamente a quién pertenece.

Los errores son hipótesis descartadas en su cabeza. El juez y la fiscalía no escuchan esas respuestas. Las conexiones internas no incorporan por sí mismas pruebas al Acta, no actualizan perfiles y no hacen confesar a un testigo.

La voz conserva el carácter del defensor. Don Ramón puede razonar con su lenguaje cotidiano; el Chapulín puede vacilar y después comprender. Las bromas deben ser breves y situarse en las pausas. El razonamiento decisivo tiene espacio para funcionar sin un latiguillo obligatorio.

Los pensamientos se reconocen por el nombre de su autor y por un tratamiento coherente de texto interior. Las preguntas y las opciones usan lenguaje claro de interfaz, legible en español e inglés. El último resultado puede ser una afirmación sobre los hechos o una estrategia, según lo que realmente se haya establecido.

## 5. Recorrido de una sesión

1. **Entrada desde el tribunal.** Una línea breve plantea lo que aún no encaja. Al avanzar, la cámara se acerca a la frente de Don Ramón o del Chapulín, según quién conduzca la defensa. El cuadro de diálogo se desvanece durante el acercamiento; después el primer plano se funde con el espacio de pensamiento y comienza la premisa. La música de deducción empieza una sola vez. Movimiento reducido omite el zoom.
2. **Premisa.** El defensor recuerda uno o dos hechos necesarios. Puede mostrarse una prueba, una persona o una imagen ya conocida.
3. **Bifurcación.** Una pregunta fija ocupa la zona de lectura y el camino se divide en dos, tres o cuatro alternativas. El jugador puede pensar y consultar el Acta sin límite de tiempo.
4. **Elección.** Un clic o toque sobre una alternativa la elige directamente. Pasar el puntero o mover el foco con flechas solo permite previsualizar; Enter o Espacio elige la opción enfocada. El sistema acepta una sola respuesta por interacción.
5. **Conexión acertada.** La luz toma esa rama; las demás salen de escena. La idea elegida se amplía brevemente, se explica su consecuencia y el recorrido vuelve a un solo camino.
6. **Siguiente conexión.** La nueva pregunta nace de lo anterior. Los avances ya aceptados se conservan.
7. **Conclusión.** Al completar el bloque, los caminos convergen y se muestra una afirmación grande, breve y legible. La música produce una llegada clara.
8. **Regreso al tribunal.** El jugador avanza para continuar. La defensa expresa o pone en práctica lo deducido. El guion decide si sigue una presentación, una trampa, una réplica, una confesión o el veredicto.

El número de preguntas no aparece como un contador de aciertos. El progreso se percibe en el movimiento y en las ideas conectadas. No se muestran preguntas futuras ni fragmentos de su respuesta antes de llegar a ellas.

## 6. Presentación visual

### Espacio de pensamiento

La imagen ocupa el escenario 16:9 del juego. Es un espacio abstracto profundo: azul oscuro en los bordes, luz fría en el punto de fuga y un recorrido rojo cálido que avanza hacia él. La identidad retro del fangame se mantiene en los contornos definidos, la tipografía y los marcos.

Una luz blanca recorre el camino. Las líneas de profundidad y las partículas escasas refuerzan el impulso. Durante la lectura continúa un movimiento ambiental suave; el jugador no tiene que alcanzar un objeto móvil ni seguirlo con el puntero.

La cámara mira hacia delante y permanece estable al presentar preguntas. En las conexiones aceptadas puede acercarse y tomar una curva suave. No hay control libre de cámara, giros de horizonte ni sacudidas continuas.

### Uso de Three.js

**El demo usa Three.js para representar la profundidad, el recorrido, la luz, las bifurcaciones y las opciones.** El resto del fangame conserva su presentación 2D. El avance y la elección de un camino representan acciones del pensamiento.

Los pensamientos y las ventanas de consulta se presentan en HTML. Las opciones se dibujan como planos con texto dentro del render 3D; sus controles HTML mantienen semántica, teclado y zonas de pulsación alineadas, sin duplicar las etiquetas visibles. Las zonas de elección permanecen estables, aunque el espacio avance. Sin 3D, esas mismas opciones se muestran en HTML. El demo muestra el recuerdo en una capa de lectura separada de las opciones.

La capacidad de resolver la secuencia nunca depende del renderizador. Sin WebGL, ante un fallo de carga o al perder el contexto gráfico, se conserva la misma pregunta y se continúa con un fondo 2D y las mismas opciones. La documentación actual de [WebGLRenderer](https://threejs.org/docs/pages/WebGLRenderer.html) indica que utiliza WebGL 2; la alternativa 2D forma parte de los requisitos funcionales.

### Bifurcaciones y respuestas

| Elemento | Comportamiento |
| --- | --- |
| Pregunta | Visible durante toda la elección; nunca desaparece al consultar el Acta. |
| Dos opciones | Dos ramas claras y dos zonas de respuesta. |
| Tres opciones | Tres ramas, con una disposición que deja legibles todas las etiquetas. |
| Cuatro opciones | Cuatro respuestas con espacio suficiente; puede usarse una disposición 2×2 sobre la escena. La profundidad se adapta a esta distribución. |
| Opción sin foco | Superficie oscura o roja, texto claro y borde definido. |
| Opción enfocada | Mayor luminosidad, marco blanco y un indicador visible. Se destaca también sin depender del color. |
| Opción confirmada | Respuesta bloqueada mientras se resuelve; una única rama recibe la luz. |
| Conexión aceptada | La frase se amplía y después da paso al pensamiento que explica su consecuencia. |

El orden de las opciones lo define el guion y permanece estable al reintentar, guardar, cargar o cambiar de idioma. La posición central, el brillo y los iconos no revelan cuál es la correcta. El foco inicial puede recaer en la primera opción por orden de lectura, sin relación con su validez.

Las etiquetas son completas y legibles. No se recortan con puntos suspensivos ni se reducen hasta resultar diminutas. Primero se permite envolver el texto y reorganizar la disposición; si la pregunta sigue siendo demasiado extensa, se revisa su redacción en ambos idiomas.

### Pruebas e imágenes de recuerdo

Un paso puede mostrar un icono del Acta, un retrato o una imagen ya presentada. El movimiento de entrada puede incluir una inclinación breve, pero la imagen queda quieta cuando contiene información que debe leerse.

Los documentos mantienen su proporción. Si una deducción depende de un detalle, se muestra un acercamiento legible o una vista ampliable. Un retrato decorativo no sustituye la prueba que sostiene la respuesta.

El autor indica qué aspecto se está recordando. La imagen no resalta de antemano la respuesta correcta ni enseña un hecho futuro. Si falta un recurso decorativo, se muestra su nombre o una representación sencilla. Si falta una imagen indispensable, debe detectarse al validar el contenido y repararse antes de publicar ese bloque.

## 7. Respuesta correcta

Confirmar la respuesta correcta inicia una transición breve por la rama elegida. Las otras ramas se apagan o se alejan. La cámara y la luz vuelven a un trayecto común, y el defensor formula qué acaba de comprender.

La confirmación tiene tres funciones: reconocer la elección, explicar la relación lógica y preparar la pregunta siguiente. Un mero sonido de acierto seguido de otra pregunta no cumple el contrato.

La frase aceptada puede aparecer grande durante el recorrido. Debe ser una idea concreta y breve. El pensamiento posterior puede aportar el matiz necesario, especialmente cuando una prueba acredita una parte del razonamiento pero todavía no demuestra culpabilidad.

El progreso se registra una sola vez. Una tecla mantenida o dos clics rápidos no pueden saltar una pregunta, repetir el sonido de conexión ni ejecutar dos veces la continuación.

## 8. Respuesta incorrecta

**Propuesta de regla: los errores dentro de Deducción final no restan salud.** Representan una hipótesis mental, anterior a la acusación pública. Esta decisión es específica de la nueva mecánica; al adaptar un bloque se revisará expresamente su guion de fallo.

Al elegir una opción incorrecta:

1. El recorrido se frena suavemente o la rama pierde su luz.
2. Las opciones y el recuerdo desaparecen mientras el defensor formula una objeción breve a su propia hipótesis, normalmente una o dos líneas.
3. Al avanzar la devolución desde la caja de diálogo, la escena vuelve a la misma bifurcación, conservando todas las conexiones anteriores.
4. La pregunta y sus opciones vuelven a estar disponibles.

La devolución debe explicar por qué ese camino no resuelve la pregunta. Ejemplo genérico: "Eso explica cómo entró. Todavía me falta explicar cuándo pudo hacerlo". No basta con "respuesta incorrecta" y tampoco se dicta la opción correcta.

Cada distractor puede necesitar su propia devolución. Una respuesta sobre el lugar y otra sobre el motivo no tienen por qué recibir la misma réplica. No hay regaño del juez, daño, veredicto de culpabilidad ni reinicio del juicio dentro del pensamiento.

La música mantiene su posición y su pulso. La animación de fallo no se vuelve más larga al repetirlo. Al reintentar reaparecen todas las opciones, sin descarte automático acumulativo. El jugador puede volver a considerar una idea.

Las presentaciones equivocadas realizadas posteriormente ante el tribunal siguen las reglas de penalización de ese tramo del caso.

## 9. Conclusión y vuelta al tribunal

La conclusión es el momento de llegada. La luz alcanza el punto de fuga, las ideas convergen y la escena pasa a una superficie clara o a un contraste limpio que permita leer una frase dominante.

La frase expresa una sola idea, preferentemente en dos o tres líneas. Se adapta la composición antes de reducir la letra. Puede usar mayúsculas si resulta legible. La aparición tiene un golpe visual y musical único; después queda estable hasta que el jugador avance.

Ejemplos de función, todavía sin constituir guion definitivo:

- Una conclusión fáctica: una acción ocurrió antes del momento que sostenía la acusación.
- Una conclusión de atribución: una combinación de acceso y horario señala a una persona.
- Una conclusión estratégica: para obtener la demostración que falta, hay que provocar una reacción concreta del testigo.

La frase no puede anunciar una confesión que aún no sucedió ni presentar una hipótesis como hecho probado. En un caso de trampa verbal, la llegada puede ser "TENGO QUE HACER QUE LO CORRIJA"; la reacción real del testigo pertenece al tribunal.

El jugador no recibe todavía confeti, un corte de INOCENTE ni una declaración de caso terminado. Primero se realiza el regreso y después continúa el desenlace del caso. Las imágenes, muebles y personajes del tribunal reaparecen con la composición que corresponda a la siguiente línea.

La continuación se ejecuta una sola vez. En una secuencia intermedia se vuelve a pedir la siguiente prueba; en una secuencia previa a una trampa se desarrolla la trampa; el veredicto conserva su propio momento.

## 10. Música y sonido

### Función dramática

La música expresa actividad mental sostenida, urgencia controlada y confianza que crece. Debe permitir leer y pensar durante varios minutos. La tensión conserva dirección hacia una llegada.

La referencia sugiere un centro de **128 BPM en 4/4**. Se propone ese pulso como punto inicial del tema del fangame, sujeto a la escucha del arreglo final. El análisis disponible no autoriza a afirmar que ya se haya oído su balance o su sonido real.

La propuesta vigente es la segunda versión de [Todo encaja](../music/deduccion-final/README.md), del 2 de octubre de 2026: un bucle de 60 segundos en el catálogo y el reproductor del juego como `deduccion_final`. Reemplaza a la primera versión, que el usuario descartó por falta de tensión. El demo ya utiliza esta pista; su balance sigue pendiente de revisión por escucha.

Funciones de las voces:

| Voz | Función perceptiva |
| --- | --- |
| Bajo | Apoyar el avance con un patrón firme y reconocible. |
| Piano o piano eléctrico | Figuras cortas y rápidas que evocan conexiones mentales; alternar recorridos y pequeños espacios para respirar. |
| Voz chiptune o sintetizador | Dar identidad retro y sostener el motivo reconocible. |
| Acordes | Mantener la tensión armónica y aportar cambios de color entre frases. |
| Percusión | Subdivisión estable y contenida, con variaciones breves en los cambios de sección. |

Estas son funciones musicales, no una obligación de sumar seis capas a la vez. La mezcla debe dejar claros el texto y las señales de interacción. La sensación de avance puede mantenerse con un pulso sobrio mientras la melodía descansa.

### Desarrollo y repetición

El bucle debe tener frases contrastantes y una vuelta natural. Una estructura inicial viable es **32 compases, alrededor de 60 segundos a 128 BPM**, con cuatro bloques de ocho compases: establecimiento, variación, regreso transformado y transición hacia el comienzo.

El jugador puede permanecer en una pregunta todo el tiempo que necesite. La música vuelve a empezar sin un silencio evidente ni un aumento indefinido de intensidad. Las variaciones evitan que una misma célula breve martillee durante toda la lectura.

La pista comienza con la primera premisa, una vez completado el zoom de entrada al pensamiento, y sigue entre preguntas, respuestas acertadas, errores y consultas al Acta. Completar instantáneamente el diálogo previo al zoom no la inicia ni la deja preparada para arrancar al desbloquear el audio. Cada cambio de pantalla no la reinicia. La sensación de progreso puede reforzarse con una acentuación discreta al conectar una idea, sin exigir música adaptativa para que la mecánica funcione.

### Eventos sonoros

- Enfocar una opción: sonido breve y discreto, si se usa; limitarlo al cambio real de foco.
- Confirmar: una señal corta, seguida del resultado correspondiente.
- Conexión correcta: señal de realización y movimiento, integrada con la música.
- Hipótesis descartada: señal suave de interrupción o un pequeño descenso, sin efecto de daño.
- Conclusión: la pista se detiene al aparecer la frase sobre el fondo claro, con un único acento de realización. La pausa se mantiene hasta que el jugador vuelve al tribunal.
- Regreso: transición al tema indicado por la escena siguiente.

La llegada musical ocurre cuando aparece la conclusión, aunque el jugador tarde en resolver las preguntas. El tema de espera debe permitir esa salida desde cualquier punto, sin obligar a esperar al final de un compás ni cortar la lectura.

Silenciar el audio no altera el flujo. Las señales visuales y el texto transmiten todos los resultados. Abrir un menú no crea una segunda reproducción. Al abandonar la sesión, su música deja de sonar y la siguiente escena asume el control.

## 11. Ritmo e interacción

El avance del pensamiento depende del jugador. Las animaciones tienen duración; la lectura y las respuestas, no. No hay cronómetro, puntuación por velocidad ni acción de ritmo.

Objetivos iniciales para ajustar durante la prueba visual:

| Transición | Duración orientativa |
| --- | --- |
| Entrada al pensamiento | 0,6–1 segundo. |
| Aparición de las opciones | 0,2–0,4 segundos. |
| Recorrido por una conexión | 0,5–0,9 segundos. |
| Retorno visual tras un error | 0,3–0,6 segundos, además de la lectura de su devolución. |
| Aparición de la conclusión | 0,8–1,2 segundos, seguida de espera indefinida. |

Son presupuestos de sensación, no tiempos que limiten la respuesta. Una sesión de dos a cuatro preguntas debería poder jugarse con fluidez en uno o varios minutos, según lectura y reintentos.

Controles requeridos:

- Ratón o toque: elegir cada opción con un solo clic, sin que un movimiento de cámara desplace los blancos de pulsación.
- Teclado: recorrer opciones, mostrar foco visible y confirmar con Enter o Espacio. El orden coincide con el orden de lectura.
- Durante pensamientos: clic en la caja completa, Enter o Espacio. La primera acción completa el texto si está apareciendo; la siguiente avanza. Una flecha pequeña en la esquina indica que la línea terminó, como en los diálogos normales. No hay botón de avance con texto superpuesto.
- Durante preguntas: Enter o Espacio se dirige a la opción enfocada y no al avance general del juicio.
- Durante conclusión: una acción nueva continúa. La pulsación que resolvió la última pregunta no puede cerrar también la conclusión.
- Escape: permite cerrar una ventana de consulta. No cancela ni resuelve la deducción.

Las transiciones admiten acortarse con una acción nueva cuando sea posible. El resultado lógico ya aceptado se conserva aunque se omita su movimiento. No existe un botón para saltar todas las preguntas.

## 12. Consulta, menús e interrupciones

El Acta de pruebas y el Acta de Personajes siguen disponibles como consulta. No permiten presentar objetos durante una pregunta de deducción. Al cerrar la consulta reaparecen la misma pregunta, opciones y foco; las respuestas quedan suspendidas mientras la ventana está abierta.

También funcionan el historial, el guardado, la carga, el cambio de idioma y los controles de sonido. El demo mantiene Acta y Menú fuera del escenario; las utilidades restantes están dentro de Menú. Los controles de Presionar, Presentar y navegación de testimonio quedan fuera de esta escena.

El historial conserva los pensamientos leídos, la pregunta y la hipótesis confirmada. Registra las devoluciones de fallo como parte de la sesión, sin marcar anticipadamente las respuestas correctas de preguntas pendientes. Al cargar no duplica todo el historial de las conexiones completadas.

Abrir menús suspende la interacción de fondo y detiene el movimiento distractor. La música puede continuar bajo una consulta. Al ocultarse la pestaña se pausa la presentación; al volver no se resuelven preguntas ni se reproduce de golpe el tiempo transcurrido. Si el navegador ha suspendido el audio, se recupera respetando las preferencias de sonido del jugador.

## 13. Guardado e idioma

Una partida debe poder guardarse en esta mecánica sin perder conexiones aceptadas ni respuestas pendientes. Se conserva la identidad de la secuencia, el paso, las conexiones completadas y el estado lógico de lectura, devolución o conclusión.

Reglas de restauración:

- En una pregunta se vuelve a la misma bifurcación.
- Durante una devolución se recupera su contenido; al terminar se repite la misma pregunta.
- Durante un pensamiento se recupera la línea pendiente con el texto completo, sin ejecutar de nuevo efectos narrativos.
- En una transición correcta se normaliza al comienzo del pensamiento posterior a la respuesta aceptada.
- En la conclusión se vuelve a mostrar la frase y se espera una nueva acción.
- Si el regreso al tribunal ya se completó, se recupera la continuación del tribunal. No reaparece la deducción.

La restauración reconstruye el estado narrativo; no necesita recuperar partículas, posiciones exactas de cámara ni milisegundos de la animación. La música puede reanudarse de forma coherente o empezar desde una entrada apropiada, sin volver a la primera pregunta.

Cambiar entre español e inglés conserva el paso, la hipótesis seleccionada y el progreso. Solo cambia la presentación localizada. Preguntas, opciones, pensamientos, conclusiones y descripciones de imágenes tienen ambas versiones. Una línea en curso se muestra completa en el nuevo idioma.

La validación exige la misma estructura lógica e identidad de opciones en ambos idiomas. No se acepta que una traducción haga correcta otra respuesta o revele antes la conclusión.

## 14. Accesibilidad y robustez

La mecánica es resoluble por teclado, con música silenciada, con movimiento reducido y con la presentación 2D alternativa.

Con movimiento reducido se usa un fondo estático de profundidad, conexiones que aparecen por fundido breve y pruebas quietas. Se eliminan viajes de cámara, rotaciones, líneas de velocidad y destellos expansivos. La conclusión conserva tamaño y contraste mediante una transición suave.

Las opciones son controles identificables, con pregunta asociada y foco visible. El lector de pantalla recibe la pregunta y los resultados, sin anuncios continuos de partículas o movimiento. El fondo 3D es decorativo para la accesibilidad.

Texto normal y etiquetas deben alcanzar un contraste mínimo de 4,5:1. La letra grande de la conclusión requiere al menos 3:1. Se comprueba el contraste contra la superficie de lectura; los destellos del fondo no atraviesan esa superficie.

Los controles deben ser fáciles de pulsar también tras el escalado del escenario. Se revisan etiquetas largas, cuatro opciones, nombres de personajes y conclusiones extensas en ambos idiomas. La legibilidad no depende de que el jugador amplíe el navegador.

Un fallo gráfico cambia la presentación y conserva el estado. Un recurso visual decorativo ausente no bloquea una respuesta. Una interrupción de audio tampoco. Reiniciar o cargar otra partida termina la sesión anterior y evita que una animación tardía avance el caso que acaba de abrirse.

## 15. Requisitos del contenido

Cada secuencia debe declarar, con independencia del formato técnico que se elija después:

| Contenido | Contrato |
| --- | --- |
| Identidad y punto de entrada | Un bloque concreto del caso, activado después de hechos suficientes. |
| Autor del pensamiento | El personaje que está realizando la deducción. |
| Entrada | Qué sigue sin encajar y por qué importa ahora. |
| Pasos ordenados | Cada paso utiliza la conexión anterior o un hecho ya disponible. |
| Pregunta | Qué relación debe descubrir el jugador. |
| Opciones | Dos a cuatro hipótesis, una correcta, con identificadores estables. |
| Devoluciones | Motivo por el que cada distractor no resuelve la pregunta. |
| Pensamiento de conexión | Qué se entiende después de acertar y qué queda por resolver. |
| Apoyo visual | Referencia conocida y aspecto relevante, si hace falta. |
| Conclusión | Una idea que la cadena realmente sostiene. |
| Continuación | Qué hace o dice la defensa al regresar al tribunal. |
| Localización | Versiones española e inglesa con la misma lógica. |

Una pregunta debe tener una respuesta distinguible con lo que el jugador sabe. Los distractores pueden sonar plausibles, pero su fallo se explica por un hecho o por una relación lógica. Una diferencia de redacción caprichosa no constituye un puzle.

La secuencia puede conectar conocimientos obtenidos en investigación. Al regresar al tribunal, el guion mantiene la distinción entre lo que sabe el jugador y lo que la defensa puede acreditar ante la corte. Una intuición privada no equivale a una prueba admitida.

No se permite introducir durante el pensamiento una prueba desconocida que resuelva por sí sola la pregunta, obligar a adivinar un dato de autor ni repetir una conclusión ya explicada íntegramente antes de entrar.

## 16. Aplicación posible a los casos existentes

Esta tabla identifica candidatos; no cambia sus guiones ni convierte automáticamente sus elecciones.

| Caso | Situación actual observada en el código | Encaje propuesto |
| --- | --- | --- |
| Caso 2 | Dos elecciones al final de las presentaciones del clímax: dato relevante de un testimonio y portador de la llave en el horario indicado. | Candidato a una cadena breve de dos conexiones, con regreso al tribunal para formular la acusación. |
| Caso 3 | El clímax termina preguntando cómo probar que la voz de la cinta es la de Aniceto. | Integrado: dos conexiones privadas resuelven qué probar y cómo provocar la corrección. El diálogo público conserva la negativa del testigo, el sketch, la demostración de voz y la confesión. |
| Caso 5 | Una elección de cuatro opciones entre las etapas 3 y 4 del clímax. También hay una elección dentro de una cadena anterior de comprobaciones. | Revisar el encaje de cada bloque por separado. La mecánica admite regreso a una presentación, pero una sola pregunta no justifica por sí misma una secuencia nueva. |
| Caso 0 | Una elección entre dos etapas del clímax. | Mantener su función de aprendizaje salvo que una revisión narrativa justifique otra experiencia. |
| Casos 1 y 4 | Sus clímax revisados no contienen una cadena final de elecciones equivalente. | No añadir preguntas solo para utilizar la mecánica. |

La integración del Caso 3 separa los errores privados de las consecuencias públicas: elegir una hipótesis incorrecta no cobra salud y explica por qué no basta. La conclusión prepara el plan sin contar la demostración; las líneas públicas existentes siguen resolviendo la voz y el caso ante el tribunal.

Cada adaptación futura mantendrá sincronizadas la especificación del caso, el guion español y su espejo inglés. Este documento define la funcionalidad común; los hechos y revelaciones de cada caso siguen teniendo su propia fuente de verdad.

## 17. Ejemplo funcional de una cadena

Ejemplo orientativo basado en la función del Caso 3, pendiente de una adaptación del guion:

1. La defensa entra pensando que el método ya está explicado, pero aún falta una demostración concreta.
2. Primera pregunta: qué necesita demostrarse. Una respuesta correcta conecta la voz de la grabación con la voz del testigo. Un distractor que pida una confesión recibe una devolución que explica que no puede depender de su voluntad.
3. Se recuerda el material de audio y un rasgo ya conocido del personaje. La imagen aporta contexto sin producir todavía una demostración nueva.
4. Segunda pregunta: cómo conseguir que reaccione. La respuesta conecta su necesidad de corregir una frase con una intervención deliberadamente equivocada.
5. El recorrido converge. La conclusión expresa que la defensa tiene una forma de provocar esa corrección.
6. Regreso al tribunal. El defensor pone en marcha el plan; el testigo todavía puede reaccionar y la escena conserva su sorpresa, su humor y su consecuencia probatoria.

La cadena tiene dos pasos porque son dos relaciones necesarias. No se añaden tres preguntas de repaso para alcanzar una longitud uniforme.

## 18. Criterios de aceptación

La primera implementación y cada bloque adaptado deben permitir comprobar estos resultados:

1. La entrada se entiende como pensamiento del defensor y el recorrido visual comunica avance hacia una conexión.
2. Todas las opciones se leen completas; el foco inicial, la posición y los iconos no delatan la respuesta correcta.
3. Un acierto explica su consecuencia antes de abrir la pregunta siguiente.
4. Un error conserva la salud y el progreso anterior, recibe una devolución pertinente y permite reintentar la misma pregunta.
5. Esperar varios minutos no fuerza una elección, no aumenta indefinidamente la intensidad y no reinicia el tema en cada interacción.
6. La conclusión permanece hasta una nueva acción y dice únicamente lo que la cadena permite sostener.
7. Volver al tribunal ejecuta la continuación una sola vez, con la siguiente interacción y la música que le corresponde.
8. Consultar el Acta o el historial conserva la pregunta y bloquea las respuestas de fondo.
9. Guardar y cargar en una pregunta, devolución, conexión o conclusión no pierde progreso ni duplica consecuencias.
10. Cambiar de idioma conserva la lógica y el estado, incluida una respuesta ya aceptada.
11. Teclas mantenidas y clics repetidos no saltan pasos ni cierran la conclusión antes de leerla.
12. Movimiento reducido, ausencia de WebGL y audio silenciado permiten completar exactamente las mismas deducciones.
13. Terminar, reiniciar o cargar otra partida elimina la actividad de la sesión anterior.
14. La prueba conjunta de imagen, texto y música produce la sensación acordada: pensar con impulso, conectar las pistas y llegar a una certeza que habilita la siguiente acción.

Los puntos 1 y 14 requieren revisión visual y escucha reales del resultado futuro. No se consideran verificados por leer la partitura, mirar el código o ejecutar pruebas automáticas.

## 19. Decisiones propuestas y trabajo posterior

Quedan implementadas: perspectiva mental privada, preguntas sin límite de tiempo, errores sin pérdida de salud, consulta del Acta existente, fondo tridimensional con Three.js, controles integrados al diálogo del juego, alternativa 2D, guardado dentro del snapshot de juicio y localización bilingüe. La primera integración usa dos conexiones al cierre del Caso 3. La composición se describe en [Todo encaja](../music/deduccion-final/README.md).

El módulo y el demo ficticio ya están implementados. La selección del primer caso, su guion definitivo, la revisión por escucha y la integración con el motor y los guardados del juego siguen pendientes. Ningún caso activa la mecánica. La composición utilizada por el demo está descrita en [Todo encaja](../music/deduccion-final/README.md).

Referencias internas utilizadas para comprobar el contexto actual: [[docs/architecture/case-scripting.md]], [[docs/architecture/audio-system.md]], [[docs/specs/artistic-direction.md]], [[docs/flows/save-load-flow.md]], [[src/engine/Private/TrialChoice.ts]], [[src/case/case2/Private/climax_choices.ts]], [[src/case/case3/Private/climax_choices.ts]] y [[src/case/case5/Private/climax_choices.ts]].
