# Caso 4: El Juicio del Botija — Crimen en el Gran Hotel

*Turnabout at the Grand Hotel*

**Revisión narrativa 2. Especificación objetivo, pendiente de implementación.** Sustituye el diseño narrativo anterior. El juego existente todavía ejecuta otra versión: este documento no certifica que sus guiones, imágenes, pruebas o rutas estén migrados.

> **Documento completo, pendiente de implementación y de dos validaciones visuales.** Cubre las secciones 1–18: diseño, cronología, pruebas, tres investigaciones, tres juicios, clímax, epílogo, progresión, assets, matriz de información, duración y migración técnica. Antes de implementar hay que dibujar el cierre de cadena en sus tres estados y la geometría del anillo (§15). El presupuesto de duración de §17 no está medido.

Contiene spoilers completos. La comunicación con el usuario debe limitarse al estado del trabajo y su alcance, salvo que pida conocer la trama.

## 1. Objetivo y reglas de diseño

Episodio de aproximadamente dos horas, con tres investigaciones y tres juicios. Se conservan el hotel, Botija, el reparto y las mecánicas de examen del Acta y señalamiento. Se reescriben las deducciones, los testimonios y su distribución. El presupuesto de duración aparece en §17; requiere comprobación jugando.

La primera impresión es un homicidio dentro de una habitación cerrada con cadena. El primer turnabout demuestra en juicio que Botija fue encerrado con alguien que ya había muerto. El segundo demuestra que un encargo de equipaje que el acusado contó desde el comienzo formaba parte del traslado del cadáver.

La complejidad procede de interpretar de nuevo hechos conocidos. No procede de ocultar información que los protagonistas ya tienen. Las fichas describen observaciones; las conclusiones se verbalizan después de la acción del jugador. Una sospecha anticipada del jugador es válida. Un monólogo que resuelve por él la siguiente pregunta es un defecto.

Reglas obligatorias:

- No tratar dinero dentro de una cartera robada como prueba contra el robo.
- No calcular una hora por hielo derretido ni deducir temperatura de una fotografía.
- No identificar personas por la suma de pesos del montacargas.
- No afirmar un minuto de muerte, de manipulación del cierre o de disparo que ninguna prueba acredita.
- No exigir que el jugador refute una afirmación verdadera. Cada presentación tiene una declaración concreta y falsa que contradice.
- No convertir móvil, acceso u oportunidad en prueba suficiente de autoría.
- No obligar a presentar todos los objetos. Cada prueba sí debe cumplir una función y cada pista sospechosa debe resolverse.
- No repetir el uso de refranes como trampa final del Caso 3. Hay dos bromas de refranes, ajenas a la solución.
- No presentar datos nuevos indispensables durante la confesión final.
- No mantener a Botija acusado simplemente porque la defensa aún no identificó a otro culpable. Cada jornada explicita la hipótesis de la fiscalía y su sustento pendiente.

## 2. Sinopsis y verdad del autor

La noche del 24 de octubre, durante la gala del Gran Hotel Buena Vista, un estruendo sacude las tuberías del ala oeste. A las 23:20, el Sargento y los empleados fuerzan la cadena de la Suite 304. Encuentran muerto al huésped registrado como Sr. Gómez, en realidad El Cuajinais. Tiene una herida de bala y junto a él hay un revólver. Botija se esconde en el cesto de ropa con la billetera de la víctima.

Botija trabaja como fontanero. Esa noche, por falta de personal, aceptó también dos encargos remunerados: llevar una botella de la cava a la 204 y trasladar un baúl de la 204 a la 304. Cuenta ambos trabajos desde el comienzo. Discute con Cuajinais porque este pretende reclutarlo otra vez para sus negocios delictivos; teme que la Chimoltrufia crea que aceptó.

Rufino Rufián, supuesto Conde de Montemayor y huésped de la 204, robó con Cuajinais el Collar de Cleopatra. La víctima le exige su parte por telegrama. Rufino la invita a su habitación, altera el vino antes de servirlo y la envenena. El instrumento está oculto en su anillo: un accesorio de ficción cuya estructura será visible y examinable antes del clímax. No se explica cómo fabricar ese instrumento ni un efecto pirotécnico real.

Rufino utiliza el encargo de equipaje para que Botija lleve el cadáver sin saberlo. Recibe el baúl cerrado en la 304, prepara allí la escena y dispara sobre el cuerpo para simular una muerte por bala. La almohada amortigua el tiro, sin volverlo completamente silencioso. El arma permanece en la habitación; se elimina su caída por un conducto de cenizas.

Después convoca expresamente a Botija para revisar el baño de la 304. Deja preparado un efecto de fogueo retardado en la 204 y acciona desde el corredor un lazo instalado antes en el cierre, cuando el fontanero ya trabaja dentro. Rufino llega a la mesa de baccarat antes del estruendo. Su presencia a las 23:15 es real.

El ruido provoca el descubrimiento. Botija sale del baño, reconoce el cadáver, recoge la billetera para comprobar su identidad y se esconde por miedo a sus antecedentes. El plan no requiere que se esconda: su presencia dentro basta para hacerlo parecer responsable. La cartera agrava la apariencia de culpabilidad, pero no fue plantada por Rufino.

El primer montaje incrimina por disparo. Si la investigación descubre el veneno, Rufino pretende señalar al mismo empleado que transportó la bebida. Su error material es no advertir que un fragmento del instrumento quedó retenido en el cierre, y que ese cierre sale de la habitación en el bolso de una invitada antes de que la víctima beba. Al final del segundo juicio admite haber ocultado el cuerpo, pero niega el envenenamiento. La tercera jornada debe distinguir esos dos actos.

## 3. Reparto y continuidad visual

| Personaje | Función y evolución | Representación que se conserva |
| --- | --- | --- |
| Don Ramón, Lic. Monchito | Defiende un relato incómodo sin exigir que su cliente parezca impecable. Convierte el encargo verdadero en la vía para reconstruir el crimen. | Delgado, bigote ralo, traje raído, gorrito azul e insignia abollada. Familia donramon. Renta de 16 meses, mencionada con moderación. |
| El Chapulín Colorado | Formula preguntas laterales sobre usos, recorridos y apariencias. Apoyo emocional y dos refranes mezclados; ninguna trampa lingüística final. | Mallas rojas, corazón CH, antenitas amarillas. Poses idle, point, slam y panic. No inventar chapulin_thinking. |
| Super Sam | Fiscal con prejuicios de clase y obsesión económica. Abandona teorías refutadas y formula alternativas apoyadas en hechos. | Sombrero y traje estadounidense, dólares, calculadora. Familia supersam. |
| El Sargento, Refugio Pazguato | Investigador aliado y honesto. Distingue observaciones de inferencias, conserva las pruebas y solicita los exámenes que el jugador justifica. | Alto, espigado, cuello largo, bigote de herradura y kepis torcido. Speaker SARGENTO, sprites pazguato. |
| Gordon Botija Pompa y Pompa | Acusado. Cuenta sus trabajos, su discusión y su ocultamiento desde el inicio. La vergüenza por el pasado no se usa para esconder media cronología. | Muy corpulento, barba negra completa, gorra celeste/gris, ropa negra y tenis blancos. Familia botija. |
| La Chimoltrufia | Esposa y camarera en jefe. Participa al inicio, conoce los registros laborales y acompaña a Botija antes del juicio final. | Delgada, cuello largo, pecas, chimuela, coleta desaliñada sin rulos, vestido y delantal. Poses idle, confundida y shock. |
| Don Cecilio Buenavista | Gerente. Su información fiable es documental. Su miopía afecta las identificaciones visuales de manera consistente. | Anciano distinguido, lentes gruesos, traje de tres piezas. Familia cecilio. |
| Maruja | Huésped de la 303 con una deuda de juego. Presencia entregas y la apertura del vino. Su reserva se explica por esa deuda, no por un homicidio oculto. | Cabello pelirrojo cobrizo voluminoso, vestido verde, estola y abanico. Familia maruja. |
| El Chómpiras | Botones y operador del montacargas. Es competente en ese trabajo. Ayuda a seguir un envío registrado y acompaña su inspección. | Bombín abollado, saco raído, camiseta a rayas beige, bigotito. Sprites chompiras_idle, chompiras_nervous y chompiras_relieved. |
| Rufino Rufián | Huésped, participante de la reunión y después investigado. Admite hechos públicos; cambia de defensa cuando las pruebas lo obligan. | Frac, monóculo y bigote fino real. Anillo de cabeza giratoria, presente desde su primera aparición. No añadir un bigote postizo al final. |
| El Cuajinais | Víctima y antiguo socio de Rufino. Su extorsión explica la reunión y el móvil. | Traje de lana marrón, cicatriz en mejilla izquierda, fotografías periciales. |
| El Juez | Exige distinguir posibilidad, corroboración y prueba de una afirmación. Autoriza investigación de ambos implicados al cambiar los hechos. | Familia judge del juego. |

En investigación se usan poses de pie. Los golpes de mesa corresponden al tribunal. La derrota de Rufino no exige nuevos sprites: se desprende el monóculo, pierde la compostura y deja de hablar como aristócrata. El Sargento conserva su empleo para futuros episodios.

## 4. Espacio, accesos y cronología única

### 4.1 Plano canónico

La 304 tiene una sala de estar y un baño separado por puerta interior. Botija entra y pasa al baño por el recibidor sin atravesar la zona donde yace el cuerpo, parcialmente oculta por un biombo. El plano y la inspección de la escena deben permitir entenderlo antes de que se utilice como explicación.

El montacargas desemboca en corredores de servicio, nunca dentro de las habitaciones. Las personas lo operan desde fuera y usan las escaleras. La cabina transporta solo equipaje; esta regla figura en un cartel y se demuestra durante la investigación. Las únicas entradas transitables a la 304 son puerta y ventanas. Las ventanas están atrancadas y no ofrecen una ruta de escape. Las tuberías transmiten sonido.

El cierre de cadena tiene un perno deslizante. La lámina de examen muestra la placa desmontada y el recorrido de un lazo preparado desde dentro, no una mano que mágicamente ata un mecanismo a través de una rendija. Queda un fragmento roto en un borde de la placa; otro tramo se recupera en el pasillo. Nunca afirmar que Rufino recuperó todo el hilo.

La reconstrucción visual del cierre tendrá un esquema de tres estados: preparación interior con puerta abierta; puerta emparejada y lazo accesible desde el pasillo; cadena enganchada tras la tracción. La pieza deberá poder dibujarse con la misma geometría en los tres estados. Si el dibujo no permite ese recorrido, se corrige el mecanismo antes de generar el asset o implementar el puzle.

### 4.2 Cronología del 24 de octubre

Las horas de autor no se convierten automáticamente en hechos judiciales.

| Hora | Hecho real | Fuente y alcance para el jugador |
| --- | --- | --- |
| 20:30 | Cuajinais se registra en la 304. | Libro de recepción. |
| 20:40 | Envía desde el hotel el telegrama dirigido a Rufino. Se entrega y se archiva copia. | Registro y acuse. No existe taquilla ni llave secreta. |
| 21:15 | Cecilio autoriza sacar la botella V58-17. Rufino está en recepción. | Libro de cava. El examen visual del lacre no certifica que no exista una perforación diminuta. |
| 21:20 | Botija recoge la botella. Cecilio sigue con Rufino, que lleva su anillo. | Entrega registrada y testimonio del gerente. |
| 21:20 a 21:25 | Maruja acompaña a Rufino hasta la 204. Botija lleva allí la botella. | Maruja presencia la entrega, el anillo permanece con Rufino y este firma la recepción. |
| 21:26 en adelante | Botija vuelve al servicio con Chómpiras. No vuelve a tocar esa botella ni recibe el anillo. | Chómpiras y registro de tareas. Maruja sale a buscar a Cuajinais por su deuda. |
| 21:30 a 21:35 | Rufino altera el vino en privado. | Hora de autor; no se presenta como minuto certificado. |
| Alrededor de 21:40 | Maruja llega con Cuajinais. Él extrae el cierre, se lo regala como recuerdo y bebe. Ella se retira con el cierre en el bolso. | Testimonio referido a una ronda registrada. El cierre sale de la habitación antes del primer sorbo y no vuelve a manos de Rufino. No cubre el periodo previo de Rufino a solas. |
| Alrededor de 21:45 | Cuajinais muere. Rufino toma de su chaqueta la llave de la 304. | La autopsia no certifica este minuto. |
| 22:10 | Rufino encierra el cuerpo en el baúl B-17, coloca una faja de equipaje numerada y solicita el porte. | No hay testigo del embalaje; sí de la entrega cerrada. |
| 22:20 | Botija despacha B-17 desde planta 2 a planta 3, carga aproximada de 100 kg. | Bitácora sin pasajeros, etiqueta y orden de porte. |
| 22:23 | Rufino recibe B-17 en la 304 y firma. Botija comprueba que la faja sigue entera antes de irse. | Recibo y relato de Botija, corroborado por Chómpiras desde el acceso de servicio. |
| 22:25 a 22:35 | Rufino descarga el cuerpo, lleva copa y botella, dispara sobre el cadáver y prepara el lazo del cierre. | Peritajes y admisión parcial posterior. No fijar el minuto del tiro real. |
| 22:40 | B-17 llega a la azotea, unos 20 kg. Chómpiras lo registra para almacenamiento. | Mismo número de equipaje. La diferencia sugiere descarga, no identifica su contenido. |
| 22:45 | Rufino entrega a Cecilio una orden manuscrita: revisar el baño de la 304 a las 23:05, asignado a Botija. | Original firmado y recepción personal. No se atribuye una voz por una extensión telefónica. |
| Antes de 23:05 | Rufino deja dispuesto un efecto retardado de la gala en el radiador de la 204. | Restos y ensayo posterior de su funcionamiento. No se enseña a fabricarlo ni se deduce una hora exacta por la mecha. |
| 23:05 | Botija abre con su llave maestra, deja la puerta emparejada y empieza la reparación en el baño. | Orden y observación de Maruja. |
| Entre 23:05 y 23:10 | Rufino cierra desde el pasillo con el lazo preparado y va al salón de juego. | Reconstrucción de intervalo; no hay observación del minuto exacto. |
| 23:10 a 23:25 | Rufino juega a la vista de los presentes. | Registro de rondas y testigos. Coartada verdadera. |
| 23:15 | Suena el efecto en la tubería. | Testigos y efecto recuperado. Margen de funcionamiento compatible con llegada previa al salón. |
| 23:20 | Se fuerza la cadena; se encuentra a Botija y el cadáver. | Acta y testigos. |
| 23:30 | El Sargento fotografía y precinta escena y objetos. | Registro de custodia. |

**Ventana forense única:** el informe complementario del día 1 fija un intervalo amplio de muerte entre 20:30 y 22:00, incluido el margen de su estimación. No se afina en el día 2. El relato de Maruja aporta después una observación de la víctima con vida alrededor de 21:40. La conclusión relevante es que la muerte precede al porte de 22:20 y a la entrada de 23:05; nunca es que un laboratorio haya identificado las 21:45 exactas.

Esta precisión es un dato pericial del mundo narrativo, no una lección de medicina. El texto debe explicar en lenguaje llano que la herida carece de reacción vital: el cuerpo ya había muerto cuando recibió el disparo. No usar ausencia de quemadura como demostración aislada de muerte previa.

### 4.3 Custodia y posibilidades reales

La llave ordinaria de la 304 queda en la mesita tras el montaje. Botija usa la maestra, no esa llave. La cerradura ordinaria está abierta al forzar la cadena. Se registra todo en informe_policial.

La botella abierta y la copa se recogen en la escena a las 23:30 y quedan precintadas; se abren solo para exámenes registrados. El cierre extraído tiene otra cadena: Maruja lo guardó como recuerdo antes del primer sorbo, lo entrega al Sargento durante el día 1 y se inventaría como anexo de informe_policial, con hora y firma. Esa cadena tiene un hueco declarado: el cierre pasa unas quince horas en el bolso de la testigo antes de llegar al archivo policial. Lo que garantiza es que no volvió a la 204 ni a manos del detenido. La posibilidad restante, la de quien lo guardó, la cierra el fragmento retenido en el canal; ningún análisis fecha por sí solo un orificio. Rufino no manipula evidencia en juicio. Después de su admisión del día 2, el juez ordena su custodia, el registro de la 204 y la incautación de sus efectos personales. El anillo queda separado de botella y muestras. No se le deja volver libremente al hotel para destruirlo.

No se descarta a un personaje por no pertenecer a la lista de testigos. El caso investiga intervenciones acreditadas. La ausencia de evidencia de un cómplice no se convierte en una afirmación de imposibilidad universal.

## 5. Acta del Juicio y estados de información

Son 18 entradas, incluida la insignia. Dos IDs nuevos propuestos son orden_servicios y toxicologia_vino. Los nombres visibles pueden ser más cortos que sus títulos periciales. La tabla fija contenido y función, no textos que deban copiarse enteros en una ficha pequeña.

| ID | Obtención | Descripción inicial permitida | Evolución y función |
| --- | --- | --- | --- |
| insignia_abogado | Inicio | Insignia abollada del Lic. Monchito. | Constante; no requiere presentación. |
| informe_policial | D1, 304 | Hallazgo a las 23:20 después del estruendo de las 23:15; herida de bala, arma, llave en mesita y Botija dentro. Causa inicial pendiente de examen complementario. | Tres entradas en `updates[]`: D1 anexa el cierre entregado por Maruja con hora y firma; D1 en juicio separa la hora del ruido de la hora de muerte; D2 añade la comparación del arma con el proyectil y la almohada, y el padrón que registra el revólver a nombre del difunto. El contador es lineal: un cuarto `[ACTUALIZAR]` se descartaría sin efecto. |
| foto_crimen | D1, 304 | Imagen de las 23:30 con cuerpo, almohada perforada, traje desgarrado, copa, botella y llave. | D1 muestra objeto que amortiguó el tiro; D2 permite comparar el retal. La cubeta es ambientación. |
| candado_cadena | D1, terraza al final | Placa con perno, fibras retenidas y tramo recuperado del corredor; esquema de recorrido. | Present & Point D1. Permite cierre exterior preparado, no atribuye autor. |
| plano_hotel | D1, recepción | Baño y sala de la 304, corredores, paradas externas del montacargas y ramal 204–304. | Present & Point D2; excluye un acceso humano por tuberías. |
| billetera_cuajinais | D1, detención | Cartera con credencial del Sr. Gómez y $200, recogida por Botija según su relato. Inventariada por policía. | Identidad y apariencia incriminatoria. Sin llave oculta ni argumento de inocencia por dinero intacto. |
| orden_servicios | D1, recepción | Libro del turno: botella V58-17 a la 204, porte B-17 a la 304 y mantenimiento de 23:05. Incluye horas de entrega y recepción. | Tres entradas en `updates[]`, en este orden fijo: D1 anexa el folio manuscrito original de Rufino; D2 incorpora los recibos del porte; D3 adjunta la certificación de entrega del vino ante Maruja. Ninguna es condicional. |
| informe_forense | D1, juicio | Ampliación solicitada: herida sin reacción vital; ventana 20:30–22:00; causa en análisis. | Presentación del primer giro. La ventana no cambia después. |
| residuos_manos | D2, sótano | Muestras compatibles con hollín y trabajo de caldera; no apoyan la imputación inicial de residuos de disparo. | Debilita indicio, sin declarar imposible tocar o disparar un arma. Se incorpora a discusión del peritaje. |
| casquillo_fogueo | D2, 204 | Conjunto asegurado de efecto sonoro sin proyectil, con dispositivo retardado perteneciente al material de gala. | Presentación D2. Ficha describe prueba de funcionamiento y límites, no instrucciones de armado. |
| registro_montacargas | D2, terraza | Varias filas de equipaje; número B-17, 2→3 con 100 kg, 3→azotea con 20 kg. Cabina sin pasajeros. | Señalar fila D2 y relacionar con recibos. No escribir “cadáver” ni nombres como sumandos. |
| baul_etiquetas | D2, azotea | B-17, faja rota, retal enganchado compatible con el desgarro de la foto. Talón de faja numerada firmado por Botija y Chómpiras en la entrega, y recibos. | Apoya hipótesis de traslado. La confirmación se produce con respuesta de Rufino a su recepción documentada. |
| toxicologia_vino | Final D2, delegación | Mismo agente tóxico en víctima y vino de la copa; vía de ingestión compatible. No identifica al administrador. | Fija nueva causa. D3 añade el hallazgo del agente en el interior del cierre y el examen separado del anillo, sin decir por qué marca entró ni anunciar encaje. |
| copa_vino | Final D2, delegación | Fragmentos asegurados junto al cuerpo y muestra analizada. | Vincula vino servido y tóxico; no identifica por sí sola a quien lo sirvió. |
| botella_vino | D3, cava | V58-17, abierta; el cierre no viaja con ella: llega del anexo policial con su propia custodia. Vista ampliada del cierre con dos marcas de trazo distinto, pendientes de análisis. La ficha no dice cuál es cuál: eso se mira en la lámina. | Clímax: señalar el canal. La numeración vincula el ejemplar con la cadena de entrega y la custodia del cierre con el momento anterior al sorbo. |
| boleta_baccarat | D3, recepción | Registro de rondas que confirma a Rufino entre 23:10 y 23:25. | Introducción D3: coartada verdadera del ruido, no del envenenamiento. Sin receso oculto. |
| nota_amenaza | D3, recepción | Copia y acuse del telegrama entregado a Rufino: pago del Collar de Cleopatra o denuncia. | Contradice ausencia de deuda. Se actualiza con acta de recuperación del collar del maletín incautado. |
| sello_lacre | Final D3, delegación | Anillo de Rufino, cabeza giratoria, cavidad, conducto y extremo metálico truncado. Vistas y análisis independientes. | Última prueba: encaje físico específico y residuos. La cera ordinaria no lo incrimina. |

Las descripciones iniciales no usan “prueba definitiva”, “demuestra que el asesino” ni identifican la solución de un señalamiento. Los resultados de laboratorio explican qué observar; no dicen qué inventario seleccionar después.

Los nuevos estados se aplican con updateEvidence. Las actualizaciones de un objeto ya obtenido no pueden cerrar por sí solas un día porque el motor comprueba posesión, no el estadio de cada ficha. Los IDs de cierre son distintos y se fijan en §14.

## 6. Convenciones de guion y acciones

Los bloques de diálogo siguientes fijan las líneas dramáticas, testimonios, presiones, preguntas y cierres. Los temas resumidos en tablas fijan sus hechos obligatorios y su función; al convertirlos a guion no se pueden introducir nuevas pistas o soluciones sin actualizar la matriz de información.

- [ENTREGAR id] equivale a addEvidence en una línea de diálogo.
- [ACTUALIZAR id] equivale a updateEvidence con un siguiente texto definido.
- [ABRIR ubicación] equivale a unlockLocation al completar el tema obligatorio.
- Presionar es gratuito. Ninguna prueba ya válida exige presionar una paráfrasis para habilitar la misma contradicción.
- Señalar una zona incorrecta o presentar una prueba incorrecta cuesta un punto y permite reintentar con la pregunta visible. No se revela la respuesta al fallar.
- Una contradicción admite un followUp. Para aceptar pruebas en órdenes diferentes se usan dos declaraciones con rutas expresas, no una bifurcación inexistente según el ítem elegido.
- La última línea de éxito de D1-T2 y D2-T2 precede al aplazamiento. No adelantar modo ni borrar el resultado de la deducción.
- El clímax usa stages. La última successDialogue completa la demostración antes del veredicto.

Se emplean los sprites existentes del reparto. Las indicaciones [pausa] significan un cambio de línea y una reacción breve; no introducir esperas obligatorias largas.


## 7. Día 1: investigación — el encierro

### 7.1 Detención, 25 de octubre, 09:00

Ubicación detention. Música detention_center. Botija es residente; Chimoltrufia aparece en la entrada con Don Ramón y Chapulín.

~~~dialogue
CHIMOLTRUFIA: ¡Díganle que hable! Desde anoche nomás me dice que no se preocupe. ¡Y eso es lo que más me preocupa!
BOTIJA: No quería que me vieras aquí otra vez.
DEFENSA: Entonces ayúdanos a que sea la última. Empieza por el principio, aunque no te haga quedar bonito.
CHAPULIN: ¡Que no panda el cúnico! Nosotros venimos a escucharte.
BOTIJA: Pues van a tener que sentarse. Esa noche me mandaron por todo el hotel.
~~~

Temas en este orden; los dos primeros están disponibles, el tercero exige haber oído ambos.

| Tema | Conversación obligatoria |
| --- | --- |
| “Los encargos de la gala” | Botija llevó una botella cerrada a la 204, un baúl cerrado a la 304 y revisó el baño de la 304 a las 23:05. Recibió instrucciones del hotel y propinas por suplir al personal. Rufino recibió botella y equipaje. No vio qué había dentro del baúl. |
| “Cuajinais y la billetera” | Reconoció al hombre al salir del baño después del estruendo. Miró su credencial, guardó la cartera al asustarse y se escondió. Había discutido con él por la tarde. El Sargento aporta el inventario de la cartera, no el detenido un objeto que conservara tras el arresto. [ENTREGAR billetera_cuajinais]. |
| “La puerta que dejaste” | Abrió con la maestra, dejó la puerta emparejada y entró al baño. No accionó la cadena. La sala estaba en penumbra detrás del biombo. Recuerda un golpe leve de puerta mientras corría el agua, pero no vio a nadie. [ABRIR hotel_lobby]. |

~~~dialogue
DEFENSA: El dinero seguía dentro. Eso no prueba que no la robaras.
BOTIJA: Ya sé cómo se ve.
DEFENSA: Por eso necesito saber cómo pasó, no cómo te gustaría que sonara.
BOTIJA: Me dio miedo. Pensé que si me encontraban cerca del Cuajinais iban a creer que andábamos juntos otra vez.
CHIMOLTRUFIA: A mí me hubieras dicho.
BOTIJA: Me daba más miedo que tú también lo creyeras.
CHAPULIN: Pues ya lo dijiste. Ahora podemos empezar por ahí.
~~~

La explicación de la discusión queda planteada y Botija confirma que rechazó un trabajo; su conversación con Chimoltrufia tendrá desarrollo, no una nueva coartada secreta.

### 7.2 Recepción, 10:00

Ubicación hotel_lobby. Música investigation. Cecilio reside; Rufino está terminando un trámite al entrar la defensa. Así se establece su presencia sin presentarlo como villano.

~~~dialogue
CECILIO: Su recibo, señor conde. Y esta vez he contado las cifras con los anteojos puestos.
RUFINO: Una precaución que su hotel debería convertir en costumbre.
DEFENSA: Buscamos los trabajos que hizo Botija durante la gala.
RUFINO: A mí me llevó una botella y me ayudó con un baúl. Deje constancia de que trabajó puntualmente.
CHAPULIN: ¿Ese anillo también sirve para firmar?
RUFINO: Para sellar correspondencia. La cabeza gira para proteger el relieve.
NARRADOR: Rufino vuelve la cabeza del anillo hacia la palma y recoge el recibo.
RUFINO: Estaré a disposición del tribunal.
~~~

Su observación sobre el anillo describe una característica visible. No hay primer plano amenazante, música de culpable ni mención de venenos.

Hotspots: libro de servicios, plano en mostrador, programa de la gala. El programa muestra la existencia de efectos sonoros escénicos gestionados por el hotel; no anuncia dónde se usaron ni señala al usuario de uno.

Temas:

- “Las tres órdenes”: el jugador lee las filas de vino, porte y mantenimiento. Cecilio distingue el libro de turno de los originales firmados, archivados por folio. Entrega orden_servicios al completar la lectura. Explica que el portero de servicio registra recepción de equipaje. El acceso a los originales no se niega: se pueden solicitar los folios concretos cuando haga falta cotejar firmas.
- “Por dónde se llega a la 304”: entregar plano_hotel. Puerta exterior, biombo, acceso al baño y corredores de servicio. El montacargas no constituye un acceso directo a suites.
- “Quién solicitó el trabajo”: tema obligatorio. Cecilio saca del archivo el folio original del mantenimiento y lo anexa: papel de la 204, letra y firma de Rufino, entregado en mano a las 22:45, con el nombre de Botija escrito por el propio solicitante y la hora 23:05. [ACTUALIZAR orden_servicios]. Nadie lo trata como sospecha: quien paga una suite pide servicios y eso no demuestra homicidio.
- “El ruido”: Cecilio oyó un gran estampido y subió. La hora viene del reloj del salón, no de un diagnóstico.

Tras plano, libro y folio se abre hotel_suite. El anexo del folio se produce siempre aquí y nunca como recompensa opcional: el estadio de una ficha es un contador lineal (`EvidenceProgress.advanceEvidenceStage`), así que una actualización condicional desplazaría los textos de las jornadas siguientes y la última se descartaría en silencio. Ningún documento se retiene con excusas de archivo; tenerlo desde el día 1 no adelanta ninguna deducción.

Broma breve al despedirse:

~~~dialogue
CECILIO: Les ruego darse prisa. Tengo a los huéspedes esperando una explicación.
CHAPULIN: Vísteme despacio, que no por mucho madrugar tengo prisa...
DEFENSA: Chapulín, ni siquiera nos estamos vistiendo.
CHAPULIN: No, espéreme: no por mucho vestirse amanece más temprano... Bueno, la idea es esa.
~~~

### 7.3 Suite 304, 11:00

Ubicación hotel_suite. Música suspense. Sargento residente.

~~~dialogue
SARGENTO: Antes de que entren: cada objeto tiene su número. Si mueven uno, me avisan.
DEFENSA: ¿Y esto?
SARGENTO: Mi lista de cosas que no debo perder.
CHAPULIN: ¿Y dónde apunta si pierde la lista?
SARGENTO: No me complique el procedimiento, Chapulín.
DEFENSA: Vamos por lo que vio, Sargento. Lo que cree que pasó lo discutimos después.
~~~

Hotspots y resultados:

| Hotspot | Observación e interacción |
| --- | --- |
| Cuerpo y mesita | Posición del cadáver en foto, llave ordinaria, copa rota y botella abierta. El cierre no está en la habitación; el inventario lo hace constar sin explicar todavía por qué. [ENTREGAR informe_policial] y [ENTREGAR foto_crimen]. La hora 23:30 corresponde a la fotografía. |
| Almohada | Orificio, tela ennegrecida y plumas. El jugador solicita cotejo con herida y proyectil. La consulta es obligatoria para acceder al tema de cierre de escena. No decir aún “tiro post mortem”. |
| Recibidor y baño | Se muestra la línea de paso. Desde el baño no se ve la zona del cadáver. El biombo no tapa una puerta secreta. |
| Cierre arrancado | Fragmento de fibra en placa y tramo recogido del pasillo. Sargento explica que llevará la pieza a la terraza para que Maruja confirme cómo se encontró. |
| Radiador | Ramal hacia la 204 y olor de combustión que justifica seguir las tuberías al día siguiente. No se permite diagnosticar autor o clase exacta de efecto solo por olor. |
| Cesto | Ropa con tizne compatible con el trabajo. Humor breve sobre la incomodidad de esconderse, sin burlarse de la posibilidad de condena. |
| Cubeta | Agua y botella de mineral. Es servicio ordinario de la habitación. No se llama pista, no se mide el tiempo. |

Tema final “Solicitar el cotejo”: se desbloquea tras examinar cuerpo y almohada. El Sargento remite la pregunta al forense y avisa que la ampliación puede llegar durante la audiencia. Se abre hotel_terraza después de dejar asentada la solicitud.

~~~dialogue
DEFENSA: Quiero comparar esta almohada con la herida. No me basta con que ambas tengan un agujero.
SARGENTO: Lo pediré por escrito. El primer parte salió antes de que terminaran esos exámenes.
CHAPULIN: Más vale preguntar ahora que...
DEFENSA: Con un refrán por mañana tenemos, Chapulín.
CHAPULIN: Iba a decir “equivocarnos después”.
DEFENSA: Ah. Pues sí.
~~~

Esta última réplica no cuenta como una tercera mezcla ni participa en ningún puzle.

### 7.4 Terraza, 12:00

Ubicación hotel_terraza. Música investigation. Maruja residente, Sargento presente al final.

~~~dialogue
MARUJA: Si vienen por el ruido, les contestaré. Si vienen a preguntarme cuánto perdí en las mesas, eso no tiene relación.
DEFENSA: Yo todavía no había preguntado nada.
MARUJA: Así ahorramos tiempo.
CHAPULIN: El fiscal estaría encantado con usted.
NARRADOR: Al abrir el bolso para buscar el abanico, algo suena como un puñado de dados.
MARUJA: Corchos. De cada cena que valió la pena. No pienso disculparme por eso.
CHAPULIN: Yo guardo tapitas de refresco, pero nadie me invita a cenar.
~~~

La colección es un rasgo de la testigo, presentado como broma. No lleva música de pista ni primer plano.

Temas: vio entrar a Botija antes del estruendo; después oyó la puerta forzada; había estado en la 204 por un asunto de juego. Se reserva el detalle íntimo de la deuda, no niega la visita ni inventa un romance. No reconoce calibres por el oído. Si se pregunta por ruidos anteriores, menciona un golpe apagado durante la fiesta sin asegurar su causa.

Tema obligatorio “El recuerdo de esa noche”, disponible tras el tema de la visita a la 204. Maruja comprende que uno de esos corchos pertenece al servicio que se está investigando y lo entrega. La escena no anuncia su importancia futura.

~~~dialogue
MARUJA: Antes de que sigan... este es de anoche. Me lo dio el señor Gómez cuando abrió la botella.
DEFENSA: ¿Se lo dio él?
MARUJA: Lo sacó, me lo puso en la mano y después se sirvió. Yo me fui con él en el bolso.
SARGENTO: Entonces salió de esa habitación antes que usted y antes de que él bebiera.
NARRADOR: El Sargento lo embolsa, lo numera y anota la hora de entrega.
SARGENTO: Queda como anexo de mi informe. Con mi firma y la suya.
CHAPULIN: ¿Y eso para qué sirve?
SARGENTO: Para que dentro de un mes nadie discuta dónde estuvo.
[ACTUALIZAR informe_policial]
~~~

Nadie examina todavía el cierre ni menciona una perforación. La única afirmación que queda asentada es de custodia: dónde estuvo y desde cuándo.

El tema final requiere haber preguntado por entrada, ruido y visita, y haber entregado el cierre. El Sargento registra cómo se encontró la placa, entrega candado_cadena y habilita el juicio. Maruja no se lleva nada de la escena del crimen: el cierre lo recibió en la 204 la noche anterior, antes de que existiera una investigación, y lo entrega en cuanto entiende de qué botella se trata.

Al examinar la placa, la ficha muestra trayectoria y fibras. Los protagonistas no explican la solución completa antes de la presentación.

## 8. Día 1: juicio — la muerte anterior

### 8.1 Apertura, 25 de octubre, 15:00

~~~dialogue
JUEZ: Se abre la audiencia por la muerte del huésped de la Suite 304.
SUPER SAM: Un muerto, un arma y un hombre encerrado con ambos. Time is money, Your Honor. Empecemos por ahí.
DEFENSA: Empecemos también por cómo entró ese hombre. Fue enviado a trabajar.
SUPER SAM: Una orden de trabajo explica el acceso. No explica el cadáver.
JUEZ: Ambas observaciones son pertinentes. Escucharemos primero cómo se encontró la puerta.
~~~

### 8.2 D1-T1, Cecilio: “La única persona dentro”

~~~dialogue
d1_t1_1 CECILIO: Tras el estruendo fui a la 304 con el Sargento.
d1_t1_2 CECILIO: La cerradura de llave estaba abierta, pero la cadena impedía entrar.
d1_t1_3 CECILIO: Ese perno solo puede deslizarlo alguien situado dentro de la habitación.
d1_t1_4 CECILIO: Puesto que Botija era el único vivo que encontramos dentro, tuvo que ser él quien echó la cadena.
~~~

Presiones:

- 1: Cecilio distingue lo oído de lo visto. No identifica al tirador.
- 2: se aclara que la hoja quedó detenida por la cadena, no por un mueble ni por una segunda cerradura.
- 3: describe la placa y admite que su conclusión depende de que nadie hubiera preparado el mecanismo antes. La declaración original sigue siendo atacable; no hace falta desbloquear una copia.
- 4: Super Sam sostiene que el hallazgo merece explicación, pero reconoce que el testigo no vio la mano que accionó el cierre.

Contradicción válida sobre 3 o 4: candado_cadena. PointTarget puerta_lazo.

Pregunta: “¿Qué recorrido permite accionar este cierre desde el corredor después de prepararlo?”

~~~dialogue
DEFENSA: ¡PROTESTO! La posición de la cadena nos dice cómo estaba cuando llegaron. No quién la dejó así.
CECILIO: Pero el perno está en la cara interior.
DEFENSA: Y aquí hay un hilo que pasa por él y continúa hacia el canto de la puerta.
CHAPULIN: El trozo del pasillo y el de la placa pertenecen al mismo recorrido.
DEFENSA: Con la puerta abierta se prepara el lazo. Después se puede tirar desde fuera. El fragmento atrapado muestra por qué no desapareció todo.
JUEZ: Entonces alguien pudo intervenir después de entrar el acusado.
DEFENSA: Sí. Eso es lo que demuestra esta pieza. Todavía no sabemos quién.
SUPER SAM: Ni demuestra que Botija no pudiera haberla echado él.
DEFENSA: Correcto. Por eso todavía nos falta revisar el supuesto homicidio.
~~~

Fallo del señalamiento:

~~~dialogue
JUEZ: Ese punto no muestra una conexión con el corredor. Examine el recorrido completo.
DEFENSA: Tendré que comprobarlo desde el otro lado de la placa.
~~~

No se identifica la zona correcta ni se inventa una técnica alternativa al fallar.

### 8.3 D1-T2, Sargento: “La secuencia que asenté”

El testimonio se pronuncia antes de recibir la ampliación. Sus afirmaciones de causalidad quedan identificadas como la reconstrucción inicial del parte, no como peritajes que el policía sabe falsos.

~~~dialogue
d1_t2_1 SARGENTO: A las 23:15 oímos el estruendo. A las 23:20 abrimos la habitación.
d1_t2_2 SARGENTO: La víctima tenía una herida en el pecho y encontramos un revólver junto al cuerpo.
d1_t2_3 SARGENTO: Mi reconstrucción inicial fue que esa bala causó la muerte al sonar el estruendo.
d1_t2_4 SARGENTO: Esa fue la secuencia con la que relacioné a Botija con el homicidio.
~~~

Presionar 1 aclara la diferencia entre ruido y apertura. Presionar 2 revisa el arma y la almohada. Presionar 3 o 4 entrega una sola ampliación recibida por la secretaría de la corte; repetir la presión permite releerla y no crea una nueva revelación.

~~~dialogue
SARGENTO: La secretaría acaba de recibir la ampliación que solicitamos esta mañana.
JUEZ: Incorpórese a las dos partes antes de continuar.
NARRADOR: La ficha distingue la reacción de los tejidos, el intervalo de muerte y los análisis aún pendientes.
[ENTREGAR informe_forense]
SARGENTO: Ese fue mi parte inicial. Ahora hay que cotejarlo con lo que encontró el forense.
~~~

La ficha explica “sin reacción vital” en lenguaje corriente. No reproduce antes de jugar la exclamación que define el giro.

Contradicción sobre 3 o 4: informe_forense.

~~~dialogue
DEFENSA: ¡PROTESTO! Esa secuencia no puede sostenerse con la ampliación.
SUPER SAM: Explíquelo.
DEFENSA: La herida no presenta reacción vital. El cuerpo ya había muerto cuando recibió esa bala.
JUEZ: ¿Está diciendo que dispararon contra un cadáver?
DEFENSA: Sí. Y el intervalo del informe termina a las diez de la noche, incluido su margen. Botija entró a trabajar a las once y cinco.
[ACTUALIZAR informe_policial]
BOTIJA: ¿Entonces... cuando yo entré...?
DEFENSA: Ya estaba muerto.
[pausa; música objection]
SUPER SAM: Eso cambia la causa del caso. Pero el disparo sí existió.
JUEZ: ¿Qué objeto de la escena permite explicar que hubiera otro tiro menos perceptible?
~~~

FollowUp: foto_crimen. Pregunta visible: “¿Qué objeto pudo amortiguar el disparo real?” Se acepta informe_policial también si su ficha ya incluye la inspección explícita de la almohada; ambas pruebas conducen al mismo resultado y no requieren bifurcación.

~~~dialogue
DEFENSA: La almohada perforada. El arma se apoyó contra ella.
SARGENTO: Pedimos la comparación precisamente por ese orificio. Incorporaré el resultado balístico cuando termine.
DEFENSA: No digo que fuera silencioso. Digo que todavía no podemos confundir ese tiro con el estruendo que oyó todo el hotel.
JUEZ: Queda descartado que la bala causara la muerte a las 23:15.
SUPER SAM: La fiscalía retira esa reconstrucción. Pero el acusado estuvo antes con una bebida destinada al huésped y discutió con él.
DEFENSA: Una discusión tampoco identifica una causa de muerte.
SUPER SAM: De acuerdo. Por eso pido toxicología y reconstrucción del servicio, no que ignoremos la autopsia.
JUEZ: Se amplía la investigación. La hora del ruido deja de ser la hora del homicidio.
~~~

**Turnabout 1 completo.** El aplazamiento ocurre después de la reacción de Botija y la reformulación de la investigación. No se identifica el veneno hasta el resultado del segundo día. Nadie afirma aún que el cadáver vino de otra habitación.


## 9. Día 2: investigación — los servicios del hotel

### 9.1 Sótano, 26 de octubre, 09:00

Ubicación hotel_sotano. Música suspense. Sargento residente.

~~~dialogue
SARGENTO: La comparación del arma ya está. El proyectil procede del revólver de la habitación.
DEFENSA: Bien. Ya sabemos qué hizo el agujero. Nos falta saber qué hizo el ruido.
SARGENTO: También llegaron los análisis de las manos. El hollín coincide con el trabajo de caldera; no respalda lo que supusimos al detenerlo.
[ENTREGAR residuos_manos]
[ACTUALIZAR informe_policial]
CHAPULIN: ¿Y el conducto que sube?
SARGENTO: Pueden seguirlo en el plano. El hotel autorizó revisar el ramal bajo la 304.
~~~

Hotspots:

- Conducto: comparar con plano_hotel; marca la 204 como siguiente revisión. No genera una explicación completa de un artefacto aún no encontrado.
- Inventario de la gala: registro de material de efectos sonoros, con un conjunto pendiente de devolución. Acceso de personal y huéspedes encargados de la gala; no exclusividad inventada de Rufino. Se adjunta al informe.
- Banco de mantenimiento: fichas de trabajo que corroboran que Botija estuvo ocupado con Chómpiras después de entregar la botella. Su contenido se conserva para el juicio final.
- Cenizas: carbón ordinario. El revólver no aparece aquí.

Tema “Seguir el ramal” se abre después de examinar conducto e inventario. [ABRIR hotel_suite204].

### 9.2 Suite 204, 10:00

Ubicación hotel_suite204. Rufino residente durante visita autorizada y supervisada por el Sargento.

~~~dialogue
RUFINO: Antes de que conviertan mis aposentos en taller: el señor Gómez estuvo aquí. No voy a negar una visita que registró medio hotel.
DEFENSA: Botija dice que le entregó el vino en esta puerta.
RUFINO: Y me pidió que firmara. Lo hice.
CHAPULIN: ¿Y el baúl?
RUFINO: Se lo presté a mi invitado. Tenía cosas que llevar a su habitación.
DEFENSA: Empecemos por esa visita.
~~~

Temas:

- “La reunión”: Rufino habla de un negocio y afirma que Cuajinais se marchó vivo. No admite extorsión. La defensa registra su versión sin acusarlo aún.
- “La botella”: la recibió cerrada, la dejó en la mesa y su invitado la abrió. Maruja estuvo presente al abrirla. El periodo entre entrega y apertura todavía requiere reconstrucción.
- “El baúl”: reconoce propiedad B-17 y que firmó salida y recepción. Explica que ayudó a acomodar cosas del invitado. Esta explicación quedará expuesta a contraste.
- “Objetos de su reserva”: el anillo gira para proteger el relieve. La pregunta recuerda un rasgo ya visto; no habilita incautación arbitraria antes de que exista motivo.

Hotspots:

- Radiador: el jugador encuentra restos de un efecto, llama al Sargento y presencia su registro. [ENTREGAR casquillo_fogueo]. Se remite a un ensayo seguro documentado por peritos; los personajes no manipulan un artefacto desconocido.
- Mesa: espacio donde se sirvió vino, marcas ordinarias de copas; no una mancha que identifique químicamente al muerto por inspección visual.
- Armario: maletín cerrado. Rufino dice que contiene valores. Se registra su existencia sin anunciar “aquí está el collar”. Su apertura posterior requiere el motivo investigado y la orden que se dictará al terminar D2.
- Recibo de equipaje: número B-17 y destinos. Preguntar por ese número habilita el tema con el operador.

~~~dialogue
DEFENSA: ¿No le preocupa que hayan encontrado un efecto en su radiador?
RUFINO: Me preocupa que alguien haya usado mi habitación. Hubo personal entrando y saliendo toda la noche.
SARGENTO: Voy a registrar también esos accesos.
DEFENSA: Hágalo. No basta con encontrarlo en una habitación para saber quién lo dejó.
~~~

[ABRIR hotel_terraza_d2] después de registrar efecto y recibo. La sospecha sobre las actividades de la 204 es legítima; la autoría sigue abierta.

### 9.3 Terraza con Chómpiras, 11:00

Ubicación hotel_terraza_d2. Maruja ya completó sus temas del día 1. Música investigation.

~~~dialogue
CHOMPIRAS: ¿Van a revisar el montacargas? Si me suben el sueldo según lo que carga, hoy sí me alcanza.
DEFENSA: Buscamos un envío con este número.
CHOMPIRAS: Entonces no hay pierde. Los huéspedes cambian de nombre; las maletas llevan su etiqueta.
CHAPULIN: ¿Y tú subes dentro?
CHOMPIRAS: ¡No! La cabina es para carga. Uno manda el bulto y sube por la escalera.
~~~

El jugador examina una lámina con varias filas. B-17 aparece dos veces con cargas diferentes; otros números y recorridos son envíos normales. Las marcas impresas permiten seguir una etiqueta sin depender del color.

Temas progresivos:

1. “Cómo funciona”: operador externo, llamada manual y registro de carga; no pasajeros ocultos en la masa medida.
2. “Seguir B-17”: disponible después de examinar el número. El jugador obtiene registro_montacargas. Chómpiras confirma el baúl de Rufino y la intervención de Botija. No suma 100 y 20 ni dice qué llevaba.
3. “Recepción en la 304”: entrega cerrada a Rufino y faja numerada entera. Chómpiras acompaña a Botija por el acceso de servicio y firma como testigo del porte. [ACTUALIZAR orden_servicios].
4. “Dónde terminó”: ambos consultan el destino azotea y deciden inspeccionarlo. [ABRIR hotel_azotea].

Si se pregunta por la diferencia de peso:

~~~dialogue
CHOMPIRAS: Algo descargaron. Yo apunté lo que marcaba la báscula, no lo que había dentro.
DEFENSA: Entonces tendremos que mirar el baúl.
CHAPULIN: ¿Lo guardaron o se perdió?
CHOMPIRAS: Se guardó. Para eso apunto los números, aunque luego nadie me crea.
~~~

### 9.4 Azotea, 12:00

Ubicación hotel_azotea. Chómpiras y Sargento acompañan la inspección. El baúl está donde el registro indica. No se encuentra barriendo por casualidad.

Hotspots:

- Etiqueta B-17: cotejo con bitácora y recibo; confirma el mismo objeto.
- Faja rota: el número coincide con el talón firmado de entrega. Su rotura demuestra apertura posterior a esa entrega, no identifica por sí sola el contenido.
- Forro: retal marrón enganchado; el jugador puede consultar la fotografía del traje en el Acta. La ficha ofrece ambas formas a escala comparable, sin llamarlo prueba de un cadáver.
- Compartimiento principal: dimensiones compatibles con la hipótesis que el jugador podrá formular. No se añade un pasaje secreto dentro del baúl.
- Motor: confirma procedimiento y prohibición de pasajeros, sin una nueva avería que altere convenientemente los pesos.

~~~dialogue
SARGENTO: Fotografiaré el forro antes de recoger nada.
DEFENSA: Incluya ese retal.
CHOMPIRAS: ¿Por un pedacito de tela?
DEFENSA: Primero conservamos lo que hay. Después veremos qué significa.
[ENTREGAR baul_etiquetas]
~~~

El retal se compara con el desgarro de la ropa custodiada. El informe registra correspondencia de bordes y tejido, no la frase “Botija transportó el cadáver”. Puede indicar contacto de esa prenda con el interior; admite que la prenda pudo estar separada del cuerpo. Esta limitación importa en juicio.

Tema final “Cotejar el porte” exige etiqueta, faja y forro. El Sargento organiza los resultados para la delegación. [ABRIR delegacion].

### 9.5 Delegación, 14:00

Ubicación delegacion. Sargento residente. Es la escena final obligatoria del día.

Se revisa el relato inicial de Botija, no se inventa una visita del detenido a otra localización. El jugador comprueba que las firmas y destinos coinciden con lo que dijo desde el principio. La confirmación pericial del funcionamiento del efecto se añade a casquillo_fogueo y su ensayo no identifica al usuario.

La escena tiene dos temas: “Cotejar firmas y destinos”, que cierra la revisión del porte, y “El resultado del laboratorio”, obligatorio y disponible tras el anterior, que contiene el diálogo siguiente y las dos entregas. **Ninguna prueba requerida se entrega en el intro de una escena**: el motor solo recalcula la disponibilidad del juicio al terminar un hotspot o un tema (`InvestigationController.checkInvestigationProgress`), de modo que un identificador entregado en la entrada dejaría el botón del juicio deshabilitado hasta la siguiente acción.

~~~dialogue
SARGENTO: Tenemos la toxicología. El agente encontrado en la víctima aparece también en el vino de esta copa.
[ENTREGAR copa_vino]
DEFENSA: ¿El análisis identifica quién lo puso?
SARGENTO: No. Identifica lo que había y la vía compatible de ingestión.
CHAPULIN: ¿Y la hora?
SARGENTO: Sigue siendo el intervalo del primer informe. No se ha vuelto un reloj más preciso.
DEFENSA: Entonces toca reconstruir quién tuvo la botella.
[ENTREGAR toxicologia_vino]
~~~

La entrega final requiere haber completado la lectura del porte y oído el alcance del análisis. El juicio se habilita al cerrarse ese tema, no al cerrarse el intro.

## 10. Día 2: juicio — lo que llevó Botija

### 10.1 Apertura, 26 de octubre, 16:00

~~~dialogue
SUPER SAM: La toxicología identifica una intoxicación. El acusado llevó el vino y había discutido con la víctima. Esa es la hipótesis que la fiscalía va a contrastar hoy.
DEFENSA: Entre la entrega y el servicio hubo otras personas y otro lugar.
JUEZ: Escucharemos a quien vio abrir la botella. También debemos aclarar por qué la sala oyó un disparo a una hora distinta de la muerte.
~~~

### 10.2 D2-T1, Maruja: “La copa y el estruendo”

~~~dialogue
d2_t1_1 MARUJA: Vi a Botija entregar la botella en la puerta de la 204; Rufino firmó el recibo.
d2_t1_2 MARUJA: Volví después con Gómez. Él mismo sacó el cierre y se sirvió una copa.
d2_t1_3 MARUJA: Más tarde, el estruendo nació dentro de la 304; estaba junto a la pared y lo sentí allí.
d2_t1_4 MARUJA: Por eso tenía que haber alguien dentro de esa habitación accionando un arma a las 23:15.
~~~

Presiones:

- 1: Maruja acompañó a Rufino desde recepción, vio el anillo en su mano y observó la entrega. Botija se retiró sin entrar; no hubo préstamo del anillo ni otra entrega de objetos.
- 2: salió a buscar a Cuajinais porque necesitaba hablar de una deuda de juego. Reconoce que dejó a Rufino solo con la botella entre ambas visitas. Cuajinais insistió en abrirla personalmente y le regaló el cierre, que ella guardó antes de que él bebiera y entregó al Sargento al día siguiente. El asunto de su deuda queda explicado aquí; no se promete otro misterio personal.
- 3: vibró sobre todo el radiador. Aclara que no vio humo ni un tirador dentro de la 304.
- 4: el hecho observado fue el ruido, y la presencia de un tirador es su inferencia. Sigue siendo esa inferencia la declaración atacable; no se sustituye por “no vi a nadie”, que sería verdadero.

Se admite cualquiera de estas rutas, expresadas como contradicciones independientes:

| Declaración | Presentación | Señalamiento | FollowUp |
| --- | --- | --- | --- |
| d2_t1_3 | plano_hotel | ramal_204_304: “¿Qué conexión permite que un ruido de otra habitación llegue hasta la 304?” | casquillo_fogueo: “¿Qué objeto acredita que se produjo allí un efecto sin proyectil?” |
| d2_t1_4 | casquillo_fogueo | Ninguno en la primera presentación. | plano_hotel con ramal_204_304: “¿Cómo llegó ese sonido hasta la habitación señalada por la testigo?” |

No aceptar un ítem incorrecto solo por pertenecer al día. No exigir la primera ruta si el jugador eligió la otra deducción válida.

~~~dialogue
DEFENSA: ¡PROTESTO! Usted oyó el efecto aquí arriba, pero el objeto que lo produjo estaba conectado al ramal inferior.
MARUJA: ¿Un piso más abajo?
SARGENTO: En la 204. El conjunto no dispara un proyectil y funciona con retardo. El ensayo está registrado.
DEFENSA: Por eso no hacía falta un tirador en la 304 a esa hora.
JUEZ: La coartada del momento del ruido no descarta una intervención anterior.
SUPER SAM: De acuerdo. Eso explica la alarma. No identifica quién alteró el vino antes de servirlo.
DEFENSA: Tampoco convierte al repartidor en el único que pudo hacerlo. La testigo dejó al huésped solo con la botella.
MARUJA: Sí. Ese intervalo yo no lo vi.
~~~

Tras la refutación, la fiscalía preserva lo verdadero del testimonio: Cuajinais abrió y bebió. No se desacredita a Maruja por equivocarse sobre la transmisión del sonido.

### 10.3 D2-T2, Chómpiras: “Un porte de equipaje”

~~~dialogue
d2_t2_1 CHOMPIRAS: Registré B-17 saliendo de la planta 2 y después entrando en el almacén de la azotea.
d2_t2_2 CHOMPIRAS: Botija hizo el porte hasta la 304 y Rufino lo recibió allí.
d2_t2_3 CHOMPIRAS: Vi salir y llegar un baúl cerrado. Ese envío contenía únicamente equipaje, no a una persona.
d2_t2_4 CHOMPIRAS: La faja seguía entera al recibirlo Rufino. Yo firmé el talón junto a Botija.
~~~

Presiones:

- 1: exige precisar la parada intermedia; no inventa un trayecto directo 2→azotea. Ambas filas están disponibles desde la investigación.
- 2: identifica al receptor por observación cercana y recibo. No apela a su estatura o categoría social.
- 3: Chómpiras admite que no vio el interior; comprobó ausencia de pasajeros visibles y cierre externo. Su conclusión sobre el contenido excede esa observación.
- 4: confirma número y faja. La faja se rompe después de que Rufino recibe el envío. Botija no dispone de un intervalo oculto dentro de la cabina.

Contradicción sobre 3: registro_montacargas, con señalamiento fila_B17_descarga.

Pregunta: “¿Qué trayecto obliga a investigar una descarga antes de llegar al almacén?”

~~~dialogue
DEFENSA: ¡UN MOMENTO! Hay dos cargas distintas para el mismo baúl.
CHOMPIRAS: Cien kilos al subir al tercero. Veinte cuando llegó a la azotea.
DEFENSA: Eso indica una descarga de unos ochenta kilos en la planta 3.
SUPER SAM: Ochenta kilos de cualquier cosa. No puede ponerle nombre a un peso.
DEFENSA: Tiene razón. Necesitamos relacionar el interior con la víctima.
JUEZ: Presente ese vínculo.
~~~

FollowUp: baul_etiquetas. Su ficha contiene el cotejo con foto_crimen.

~~~dialogue
DEFENSA: Este retal estaba enganchado en el forro. Sus bordes corresponden al desgarro del traje de Cuajinais.
SARGENTO: La comparación está documentada. Demuestra contacto de la prenda con ese interior.
SUPER SAM: También pudo guardar ropa en el baúl.
DEFENSA: Sí. Pero tenemos una víctima que ya había muerto, un porte posterior, ese contacto, una descarga y un receptor identificado.
CHAPULIN: Y el lugar donde se descargó es el mismo donde encontraron el cuerpo.
DEFENSA: La defensa propone que B-17 llevó el cadáver. Pido al receptor que explique qué sacó de él.
JUEZ: Señor Rufino, su recepción y la apertura posterior están documentadas. Responda.
RUFINO: Yo... no quería que el hotel se viera envuelto en aquello.
SUPER SAM: ¿En qué?
RUFINO: Lo encontré muerto en mi habitación. Me asusté. Lo puse dentro y pedí que subieran el baúl.
[pausa; música suspense]
BOTIJA: ¿Yo lo llevé?
RUFINO: Usted llevó un baúl. No tenía por qué saber lo demás.
BOTIJA: Don Ramón...
DEFENSA: Tu encargo era real. Lo que no te dijeron fue qué estabas llevando.
[cutin: objection_toma_eso; música objection]
~~~

**Turnabout 2.** La inferencia del jugador precede a la admisión. Los kilos no demostraron por sí solos la identidad; la respuesta confirma el traslado y el papel del acusado. Esta admisión intermedia no identifica aún al envenenador.

~~~dialogue
JUEZ: La escena de la 304 se preparó después del traslado.
RUFINO: ¡Pero yo no lo envenené! La botella la trajo ese hombre. Cuando comprendí lo que ocurría, pensé que me acusarían a mí.
SUPER SAM: Usted admite ocultar el cadáver. La fiscalía investigará también su intervención.
DEFENSA: Y nosotros examinaremos esa botella, desde su salida de la cava hasta el momento en que se abrió.
JUEZ: Ordénese el registro de la 204 y la custodia de los objetos relacionados. El señor Rufino queda a disposición del tribunal.
SARGENTO: Registraré por separado sus efectos personales y las muestras del vino.
~~~

El Sargento incauta el anillo entre los efectos personales y documenta su estado esa tarde. El maletín de la 204 queda sellado para examen. Rufino no vuelve a limpiar su habitación durante la noche. Las acusaciones de montaje y de homicidio se distinguen; no se considera que admitir una implique automáticamente la otra.


## 11. Día 3: investigación — quién alteró el vino

La pregunta de la jornada no es quién odiaba a la víctima. Es en qué momento pudo entrar el tóxico en una botella que llegó cerrada y se abrió delante de una testigo. El jugador reúne primero la respuesta material y después el móvil.

### 11.1 Cava, 27 de octubre, 09:00

Ubicación hotel_cava. Música suspense. Sargento residente. Cecilio abre el libro de la cava y se retira: sus hechos ya están en el Acta y no se le pide repetirlos.

~~~dialogue
SARGENTO: Traje todo lo que tenemos de esa botella. Incluido el cierre que nos entregó la señorita Maruja.
DEFENSA: ¿Desde cuándo lo tiene usted?
SARGENTO: Desde el mediodía siguiente al hallazgo. Con hora, folio y las dos firmas.
DEFENSA: Entonces ese pedazo de corcho estuvo fuera del hotel desde antes de que el hombre bebiera.
SARGENTO: Estuvo en un bolso y luego en mi archivo. Nadie más lo tocó.
CHAPULIN: ¿Y qué le vamos a preguntar a un corcho?
DEFENSA: Por dónde entró lo que mató al señor Gómez.
~~~

Hotspots y resultados:

| Hotspot | Observación e interacción |
| --- | --- |
| Libro de cava | Salida de V58-17 a las 21:15, autorización de Cecilio y numeración del ejemplar. El folio va cerrado con un sello de lacre estampado por el huésped que pidió la botella, con un escudo nobiliario. Coincide con el recibo de entrega y con la botella custodiada. No existe una segunda botella del mismo lote en circulación esa noche. |
| Botella precintada | Ejemplar abierto recogido en la 304. [ENTREGAR botella_vino]. El Acta incorpora sus vistas ampliadas, incluida la del cierre conservado aparte. |
| Cierre conservado | Vista a escala: la huella ancha del sacacorchos y, separado de ella, un canal fino que atraviesa el corcho de extremo a extremo. Cerca del borde exterior hay retenida una inclusión metálica diminuta. |
| Lacre del cuello | Restos del sello original. Bajo aumento, un punto de cera refundida sobre el sello, no una rotura. Se describe lo que se ve; no se nombra qué lo produjo. |
| Estantería | Ambientación y una broma breve sobre precios. Ninguna pista escondida en las cajas. |

~~~dialogue
CHAPULIN: Tiene dos agujeros.
SARGENTO: Uno es del sacacorchos. El otro no sé de qué es.
DEFENSA: Yo tampoco. Anótelo como está y que lo analicen por dentro.
SARGENTO: ¿También lo que quedó atrapado en el borde?
DEFENSA: También. Sin decirnos todavía a qué se parece.
~~~

Nadie menciona un anillo, una aguja ni un instrumento concreto. La observación queda abierta y el jugador puede sospechar antes que los personajes.

Tema final “Pedir el análisis del canal”: exige haber examinado libro, botella y cierre. El Sargento cursa la solicitud y avisa de que el resultado llegará a la delegación por la tarde. [ABRIR hotel_lobby_d3].

### 11.2 Recepción, 10:30

Ubicación hotel_lobby_d3. Música investigation. La Chimoltrufia sustituye a Cecilio en el mostrador. La sustitución es legítima: los hechos de Cecilio ya están asentados en orden_servicios, plano_hotel y su testimonio del día 1; no queda ninguna información obtenible solo de él.

~~~dialogue
CHIMOLTRUFIA: Me pusieron en el mostrador porque no hay quien atienda y porque yo sí sé dónde está cada papel.
DEFENSA: ¿Y Don Cecilio?
CHIMOLTRUFIA: Contestando a los periodistas. Con los anteojos puestos, eso sí.
DEFENSA: Necesitamos folios originales, no el libro de turno.
CHIMOLTRUFIA: Pues eso es lo único bueno de llevar catorce años aquí. Dígame cuáles.
~~~

Temas:

| Tema | Conversación obligatoria |
| --- | --- |
| “Los folios de esa noche” | Tema obligatorio, requisito del último tema de la escena. Chimoltrufia localiza la certificación de entrega del vino firmada ante Maruja y la adjunta. [ACTUALIZAR orden_servicios]. De paso confirma sobre el folio manuscrito que ya está en el Acta desde el día 1 que fue el propio huésped quien lo entregó en mano, no una llamada ni un recado. |
| “El salón de juego” | Rondas firmadas por los jugadores entre 23:10 y 23:25. [ENTREGAR boleta_baccarat]. Don Ramón acepta en voz alta que esa coartada es verdadera y que el ruido no fue obra de quien estaba en la mesa. |
| “El telegrama de esa noche” | Copia de archivo y acuse de recepción firmado a las 20:50. Texto: reclamación de una parte del Collar de Cleopatra y amenaza de acudir a la policía. [ENTREGAR nota_amenaza]. |
| “Lo que dicen en el hotel” | Disponible tras los otros tres temas, mediante `condition(flags)`, para que el jugador no llegue al juicio final sin la boleta ni el telegrama. Chimoltrufia cuenta que el personal ya condenó a su marido por su expediente. Prepara la escena de la detención. [ABRIR detention_d3]. |

~~~dialogue
DEFENSA: Esta boleta confirma que el señor Rufián estaba jugando cuando sonó el estruendo.
CHAPULIN: ¿Entonces perdimos?
DEFENSA: No. Perdimos una idea que nunca tuvimos. Nosotros ya sabemos que a esa hora el muerto llevaba horas muerto.
CHIMOLTRUFIA: ¿Y de qué le sirve a mi Botija?
DEFENSA: De que ya nadie tiene que estar dentro de esa habitación a las once y cuarto. Ni él.
~~~

La boleta entra al Acta como dato favorable a un tercero. Presentarla no es una trampa: delimita qué cubre esa coartada y qué no.

### 11.3 Detención, 12:00

Ubicación detention_d3. Música detention_center. Botija residente; Chimoltrufia lo acompaña. Escena de personaje: no aparece ninguna coartada nueva ni un dato ocultado hasta ahora.

~~~dialogue
BOTIJA: Ya me contaron. Que subí un baúl con un muerto adentro.
DEFENSA: Sí.
BOTIJA: Y yo firmé el recibo. Con mi nombre.
CHAPULIN: Firmaste un trabajo. Eso es lo que te dieron a firmar.
BOTIJA: Toda la vida quise un trabajo donde me pidieran firmar.
CHIMOLTRUFIA: Y lo tienes. Lo que pasa es que te lo usaron.
~~~

Temas:

| Tema | Conversación obligatoria |
| --- | --- |
| “Después de la botella” | Repasa sus tareas desde las 21:26: caldera con Chómpiras, dos avisos de planta y el porte de las 22:20. Coincide con las fichas del sótano y con el testimonio del botones. No estuvo solo en ningún tramo largo. |
| “El anillo” | Nunca lo tuvo en la mano ni se lo prestaron. Recuerda que el huésped giró la cabeza del anillo al firmar. Es un recuerdo, no una acusación. |
| “Lo que te da vergüenza” | Botija habla de su expediente, del miedo a que su mujer creyera que había vuelto al oficio y de por qué escondió la cartera. Chimoltrufia responde. Ninguna de las dos cosas cambia una prueba. |

~~~dialogue
CHIMOLTRUFIA: Yo nunca creí que hubieras matado a nadie.
BOTIJA: Pero sí creíste que había aceptado el trabajo del Cuajinais.
CHIMOLTRUFIA: Lo pensé dos días. Y me dio más coraje pensarlo que preguntártelo.
BOTIJA: Le dije que no. Le dije que no delante de todo el pasillo.
DEFENSA: Eso lo oyó gente. Y por eso el fiscal cree que discutieron por dinero.
BOTIJA: Discutimos porque no quise. Es la primera vez que me acusan de algo por decir que no.
~~~

[ABRIR delegacion_d3] al terminar los tres temas.

### 11.4 Delegación, 14:00

Ubicación delegacion_d3. Música suspense. Sargento residente. Es la escena final obligatoria del día y la única que entrega el último identificador exigido por el juicio.

Primero, en el tema “El maletín incautado”, el telegrama justifica abrir lo que se selló la tarde anterior:

~~~dialogue
SARGENTO: Con el telegrama, el juez autorizó abrir el maletín de la 204.
NARRADOR: Dentro, envuelto en un pañuelo de hotel, está el Collar de Cleopatra.
DEFENSA: Denunciado como robado hace once meses.
SARGENTO: Levanté acta y lo adjunté al expediente del telegrama.
[ACTUALIZAR nota_amenaza]
CHAPULIN: Entonces el muerto venía a cobrar.
DEFENSA: Venía a cobrar. Eso explica una reunión. Todavía no explica una copa.
~~~

Tema obligatorio “Quién tuvo cada cosa”. El Sargento lee la cadena de posesión ya documentada, sin testigos nuevos. Estos hechos deben quedar asentados antes del juicio, porque el clímax se apoya en ellos:

- 21:15–21:20, cava y recepción: Cecilio está con Rufino, que lleva el anillo puesto y sella con él la autorización de la cava.
- 21:20, entrega: Botija recoge la botella cerrada y sube. No recibe ningún otro objeto.
- 21:25, puerta de la 204: Maruja presencia la entrega y la firma de recepción. El anillo sigue en la mano de Rufino.
- 21:26, servicio: Botija se retira con Chómpiras y no vuelve a esa planta hasta el porte.
- 21:30–21:40: Maruja sale y deja a Rufino solo con la botella cerrada.
- 21:40: Cuajinais extrae el cierre, se lo da a Maruja y bebe. El cierre sale del hotel esa noche en el bolso de ella.
- Día 2, cierre de audiencia: el Sargento incauta los efectos personales de Rufino, incluido el anillo, y los guarda separados de las muestras.

Después, dentro del mismo tema obligatorio, llegan los resultados y el examen del anillo. La entrega de sello_lacre ocurre al cerrarse ese tema, nunca en el intro de la escena:

~~~dialogue
SARGENTO: El laboratorio encontró el mismo agente dentro del cierre, no en su superficie.
DEFENSA: ¿Metido en el corcho?
SARGENTO: Metido. Y lo que quedó retenido en el borde es metal, no corcho.
DEFENSA: El informe no dice por cuál de las dos marcas entró. Eso lo enseñaremos nosotros.
[ACTUALIZAR toxicologia_vino]
DEFENSA: Quiero que examinen por separado los efectos que incautó ayer.
SARGENTO: Ya los tengo aquí. Este es el anillo del señor Rufián.
NARRADOR: La cabeza gira sobre un eje. Debajo hay una cavidad, un conducto fino y una punta metálica cuyo extremo está partido.
[ENTREGAR sello_lacre]
SARGENTO: El informe describe la pieza y los residuos del conducto. No dice si esa punta encaja con nada.
DEFENSA: No tiene que decirlo. Eso lo vamos a comparar delante del juez.
~~~

Las fichas de sello_lacre y toxicologia_vino describen geometría, residuos y escalas. Ninguna afirma el encaje ni nombra al usuario. El jugador dispone desde aquí de las dos vistas que necesitará en el clímax.

Se habilita el juicio al terminar este diálogo.

## 12. Día 3: juicio — la coartada verdadera y la explicación falsa

### 12.1 Apertura, 27 de octubre, 16:00

~~~dialogue
JUEZ: Recapitulemos lo probado. La muerte se produjo por un tóxico en el vino, dentro de la ventana de la autopsia.
JUEZ: El disparo y el estruendo fueron un montaje posterior a la muerte, según la autopsia y el traslado ya acreditados.
SUPER SAM: Y sigue en pie una pregunta que la defensa no ha contestado: quién alteró esa botella. El acusado la llevó en las manos.
DEFENSA: También llevó un baúl sin saber qué había dentro. Que uno cargue una cosa no dice qué le hicieron a esa cosa.
JUEZ: La defensa reconoce que el señor Rufián estaba en el salón de juego a las 23:15.
DEFENSA: Lo reconoce. Esa coartada es verdadera y no la vamos a discutir. Solo cubre el ruido, y el ruido no mató a nadie.
SUPER SAM: Entonces la fiscalía mantiene su hipótesis: el vino salió alterado de las manos que lo transportaron.
JUEZ: Escucharemos al señor Rufián sobre su propia intervención.
~~~

La boleta se lee en el acta sin exigir presentación. No hay openingPresent en esta jornada: obligar a presentar una prueba que nadie contradice sería un trámite. La coartada se admite para acotar el terreno de la discusión.

### 12.2 D3-T1, Rufino: “Mi parte en esta desgracia”

~~~dialogue
d3_t1_1 RUFINO: Encontré al señor Gómez muerto en mi habitación y perdí el juicio por un momento.
d3_t1_2 RUFINO: Lo llevé arriba dentro de mi baúl, preparé la escena y disparé sobre un hombre que ya estaba muerto. Ayer admití lo primero; hoy admito lo demás, porque no pienso cargar con lo que no hice.
d3_t1_3 RUFINO: Pero la botella llegó de fuera. Yo la recibí cerrada, de manos de ese empleado.
d3_t1_4 RUFINO: Y no pedí que subiera él al baño. Yo solicité un fontanero; el hotel eligió a cuál mandaba.
~~~

Presiones:

- 1: no precisa la hora en que lo encontró. Su relato sigue siendo compatible con la ventana forense, así que la presión no produce una contradicción; sí deja claro que él sitúa la muerte antes del porte.
- 2: el revólver era del propio Gómez, que lo llevaba encima. El Sargento confirma que el padrón registra esa arma a nombre del difunto y que por eso quedó en la habitación. El cabo del arma se cierra aquí, con un dato documentado y no con una promesa de peritaje.
- 3: admite que estuvo solo con la botella cerrada entre la entrega y la llegada de su invitado. Lo dice como quien no ve el problema.
- 4: insiste en que la asignación del empleado fue decisión del hotel y que él ni siquiera conocía su nombre.

Contradicción sobre d3_t1_4: orden_servicios, con señalamiento sobre el folio manuscrito.

PointTarget orden_manuscrita. Pregunta: “¿Qué parte de esta solicitud elige a un empleado concreto?”

| Zona | Contenido | Correcta |
| --- | --- | --- |
| sello_recepcion | Sello del mostrador y hora de registro. | No |
| firma_rufino | Firma del solicitante. | No |
| nombre_empleado | “Que suba el fontanero Botija” escrito de puño y letra del solicitante. | Sí |
| hora_servicio | “23:05” en el cuerpo del texto. | No |

~~~dialogue
DEFENSA: ¡PROTESTO! El hotel no eligió a nadie. El nombre está escrito aquí, de su puño y letra.
RUFINO: Un hotel copia lo que dicta el huésped.
CECILIO: Ese papel me lo entregó usted en la mano. Yo solo lo archivé.
DEFENSA: Pidió a un hombre concreto, por su nombre, para que estuviera dentro de esa habitación a una hora concreta.
JUEZ: ¿Con qué finalidad?
DEFENSA: Con la de que lo encontraran ahí. Usted no improvisó un montaje: eligió a quién se lo colgaba.
RUFINO: Elegí al que estaba disponible.
SUPER SAM: Your Honor, elegir un empleado no es envenenar a un huésped. La fiscalía mantiene que el vino llegó alterado.
DEFENSA: Y por eso vamos a hablar de la botella. Pero que conste quién escribió ese nombre.
JUEZ: Consta.
~~~

Fallo del señalamiento:

~~~dialogue
JUEZ: Esa parte no designa a nadie. Busque dónde se elige a la persona que debía subir.
~~~

No hay followUp en este testimonio: la deducción termina en un hecho documental y la fiscalía conserva su hipótesis. La jornada todavía no ha identificado al envenenador.

### 12.3 D3-T2, Rufino: “Una reunión de negocios”

El juez ordena un segundo testimonio sobre su relación con la víctima. Es materia distinta de la anterior, no una repetición de posiciones ya derribadas.

~~~dialogue
d3_t2_1 RUFINO: Conocí al señor Gómez hace años, en asuntos de importación.
d3_t2_2 RUFINO: Aquella noche subió a proponerme una inversión y se marchó por su propio pie.
d3_t2_3 RUFINO: No le debía nada. No tenía ningún interés personal en su muerte.
d3_t2_4 RUFINO: Ni siquiera esperaba su visita. Supe que estaba en el hotel cuando lo vi entrar en mi habitación.
~~~

Presiones:

- 1: describe negocios vagos y evita el nombre real de la víctima. No aporta ni quita hechos.
- 2: ya está refutado que se marchara por su pie; lo reformula como “se marchó de mi vista”. La presión sirve para que el tribunal recuerde qué queda de ese relato.
- 3: repite que su fortuna es propia y que la palabra deuda le resulta ofensiva.
- 4: sostiene que nadie le anunció esa visita.

Contradicción sobre d3_t2_4: nota_amenaza, con señalamiento sobre el telegrama.

PointTarget telegrama_acuse. Pregunta: “¿Qué parte de este documento acredita que el destinatario lo tuvo en la mano?”

| Zona | Contenido | Correcta |
| --- | --- | --- |
| encabezado_hora | Depósito a las 20:40 desde el propio hotel. | No |
| linea_exigencia | “Mi parte del collar o hablo con la policía”. | No |
| firma_remitente | Firma del remitente. | No |
| acuse_recepcion | Recibo firmado por el destinatario a las 20:50. | Sí |

~~~dialogue
DEFENSA: ¡PROTESTO! Usted firmó el acuse cincuenta minutos antes de esa visita que no esperaba.
RUFINO: Firmo docenas de papeles al día.
DEFENSA: Este exige el pago de un collar robado bajo amenaza de denuncia. No se firma sin leerlo.
SARGENTO: Y el collar apareció ayer en el maletín que incautamos en su habitación. Levanté acta.
JUEZ: ¿Reconoce esa joya?
RUFINO: Reconozco que es mía.
DEFENSA: Está denunciada como robada hace once meses. El hombre que venía a cobrar su parte apareció muerto dentro de un baúl suyo.
[pausa; música objection]
SUPER SAM: Un móvil. Ahora sí tenemos un móvil.
SUPER SAM: Pero un móvil no es un método, Your Honor. El acusado siguió siendo quien tocó esa botella.
DEFENSA: De acuerdo. Entonces hablemos de la botella.
JUEZ: Que la defensa exponga cómo se alteró ese vino. Es lo último que queda por resolver en este proceso.
~~~

Al terminar el segundo testimonio no hay aplazamiento: la audiencia entra directamente en el clímax.

## 13. Clímax, veredicto y epílogo

El clímax usa dos stages con presentación y señalamiento. No usa choices: el motor ejecuta las elecciones después del último stage, y una pregunta de opción múltiple detrás de la comparación material bajaría el punto más alto de la escena. Cada prompt aparece en el HUD y sigue visible al abrir el Acta.

### 13.1 Entrada al clímax

~~~dialogue
SUPER SAM: Hechos, Your Honor. El vino salió cerrado de la cava, lo transportó el acusado y minutos después mató a un hombre.
SUPER SAM: El señor Rufián ocultó un cadáver por cobardía. Eso es un delito distinto. La copa la sirvió otro.
RUFINO: Yo recibí una botella sellada. La dejé sobre la mesa y no volví a tocarla hasta que mi invitado la abrió.
DEFENSA: Esa botella se abrió delante de una testigo, con el lacre puesto. Nadie discute eso.
JUEZ: Entonces, licenciado, el tribunal necesita saber cómo entra un tóxico en una botella cerrada.
DEFENSA: Está contestado desde ayer. Lo que pasa es que la respuesta estaba dentro de un corcho.
[música pursuit]
~~~

### 13.2 Stage 1: por dónde entró el tóxico

- presentTarget: botella_vino.
- prompt: “¿Qué muestra el cierre de la V58-17 que no pudo hacer un sacacorchos?”
- pointTarget cierre_canal, sobre la vista ampliada del cierre.

| Zona | Contenido | Correcta |
| --- | --- | --- |
| huella_sacacorchos | Perforación ancha y astillada del tirabuzón. | No |
| canal_fino | Canal recto y limpio que atraviesa el corcho de extremo a extremo, con una inclusión metálica retenida junto al borde exterior. | Sí |
| marca_lote | Numeración impresa del ejemplar. | No |
| borde_lacre | Restos de cera del sello. | No |

Fallo del señalamiento:

~~~dialogue
JUEZ: Ese rastro corresponde a la apertura ordinaria. Busque una vía que el tirabuzón no pudo abrir.
~~~

Éxito:

~~~dialogue
DEFENSA: ¡TOMA ESO! Un canal que atraviesa el corcho entero, y el laboratorio encontró el mismo tóxico dentro de él.
JUEZ: ¿Está diciendo que envenenaron el vino sin abrir la botella?
DEFENSA: A través del cierre, con algo fino y rígido. Después basta un punto de cera sobre el sello para que nadie vea la entrada.
SUPER SAM: ¿Y quién nos dice que ese agujero no se hizo después, para fabricar esta historia?
DEFENSA: La custodia. Ese corcho salió de la 204 en el bolso de la señorita Maruja antes de que la víctima bebiera.
MARUJA: Me lo regaló él mismo. Lo entregué al Sargento al día siguiente, en cuanto supe de qué botella se trataba.
SARGENTO: Desde ese mediodía está en mi archivo, con hora y dos firmas.
SUPER SAM: Entonces hubo quince horas en un bolso particular. Su cadena empieza tarde, counselor.
DEFENSA: Empieza tarde y lo admito. Lo que sí prueba es que el cierre no volvió a esa habitación ni pasó por las manos del acusado, que a esa hora ya estaba detenido.
JUEZ: Queda abierta una posibilidad sobre quien lo guardó.
DEFENSA: Queda. Y no la voy a cerrar con la palabra de nadie, sino con lo que se quedó atrapado dentro del canal.
JUEZ: El tribunal acepta el método y reserva la mano.
SUPER SAM: Y esa mano cargaba herramientas. Un fontanero lleva encima cosas finas y rígidas todo el día. Tuvo la botella cinco minutos.
BOTIJA: Yo la llevé pegada al pecho, señor.
SUPER SAM: Cinco minutos son cinco minutos, Your Honor.
DEFENSA: Entonces comparemos ese canal con lo que quedó dentro.
~~~

La acusación contra Botija sigue viva al terminar el stage 1, y además queda planteada en voz alta la única alternativa que el método no cierra: que la perforación la hiciera después quien guardó el cierre. El stage 2 la resuelve con la custodia del anillo, no con un argumento de confianza.

### 13.3 Stage 2: con qué se hizo

- presentTarget: sello_lacre.
- prompt: “¿Qué parte del anillo corresponde al fragmento retenido en el canal?”
- pointTarget anillo_fractura, sobre la lámina de comparación a escala.

| Zona | Contenido | Correcta |
| --- | --- | --- |
| cabeza_relieve | Cabeza giratoria con el escudo del falso condado. | No |
| cavidad_interior | Hueco bajo la cabeza, con residuos del conducto. | No |
| conducto | Canal interno que comunica la cavidad con la punta. | No |
| extremo_truncado | Punta metálica partida, con superficie de fractura reciente. | Sí |

Fallo del señalamiento:

~~~dialogue
JUEZ: Esa parte explica cómo funciona la pieza. El tribunal pidió qué parte falta en ella.
~~~

Éxito:

~~~dialogue
DEFENSA: ¡PROTESTO! A esta punta le falta un pedazo. Y el pedazo que falta se quedó dentro del corcho.
SARGENTO: Las dos superficies de rotura están fotografiadas a la misma escala. Coinciden borde con borde.
SARGENTO: Y la rotura es reciente. El perito dice que una punta así se parte al forzarla contra el vidrio del cuello.
DEFENSA: Por eso quedó dentro del corcho. Quien lo hizo no lo supo hasta hoy.
DEFENSA: El conducto conserva residuos del mismo agente que mató al señor Gómez.
SUPER SAM: ...Un anillo.
DEFENSA: Un anillo que sirve para sellar lacre. Por eso nadie se extraña de que tenga cera. Lo que no se explica con cera es una punta hueca.
JUEZ: ¿Y quién tenía esa pieza esa noche?
DEFENSA: A las nueve y cuarto selló con él la autorización de la cava. La cera sigue en el folio, con su escudo.
CECILIO: Ese sello lo estampó delante de mí. Por eso ese folio lleva lacre y no una firma más.
MARUJA: Y yo se lo vi puesto en la puerta de la 204, cuando firmó el recibo del vino.
DEFENSA: Botija nunca lo tuvo y nadie declara habérselo prestado esa noche.
SARGENTO: Yo se lo incauté ayer por la tarde, cuando el tribunal ordenó su custodia. No hubo una noche para deshacerse de él.
DEFENSA: Y ahí se cierra lo que quedó abierto hace un momento: quien guardó el cierre nunca tuvo este anillo, y la pieza que dejó ese fragmento lleva bajo custodia desde ayer.
JUEZ: El tribunal da por resuelta esa posibilidad.
DEFENSA: Señor Rufián: usted quedó solo con una botella cerrada, y el pedazo que le falta a su anillo estaba dentro de ese corcho.
[cutin: objection_toma_eso; música objection]
RUFINO: ...
NARRADOR: El monóculo se desprende y queda colgando de su cadena.
RUFINO: ¡Ese cierre debía irse a la basura! ¡Se lo dio a ella! ¡Se lo dio a ella delante de mí como si fuera un caramelo!
[pose rufino_breakdown; sfx desk_slam]
~~~

Esta es la última successDialogue del clímax y precede al veredicto sin ninguna pregunta intermedia.

Cecilio y Maruja están en la sala desde sus propios testimonios y sus dos líneas confirman hechos ya asentados: la cadena de posesión se leyó en delegacion_d3 y consta en orden_servicios. No es una procesión de testigos nuevos en la réplica final; si al implementar resultara pesado, esas confirmaciones las lee el Sargento del expediente.

### 13.4 Confesión y veredicto

La confesión aporta motivo y emoción. No aporta ningún hecho indispensable para la demostración: todo lo necesario ya está probado.

~~~dialogue
RUFINO: El collar lo planeé yo. Él solo abrió una vitrina y desde entonces se creyó mi socio.
RUFINO: Once meses cobrando. Y esa noche llegó a mi hotel a poner precio a mi apellido.
JUEZ: Su apellido es falso.
RUFINO: Por eso valía tanto.
DEFENSA: ¿Y el fontanero?
RUFINO: Un hombre con expediente, con llave maestra y con una discusión oída por medio pasillo. Lo escribí en un papel y el hotel me lo subió.
BOTIJA: Me eligió porque nadie me iba a creer.
RUFINO: Lo elegí porque era barato.
CHIMOLTRUFIA: ¡Míreme cuando diga eso!
JUEZ: Bastante he oído. Este tribunal dicta su fallo.
~~~

Veredicto:

~~~dialogue
JUEZ: Gordon Botija Pompa y Pompa, este tribunal lo declara NO CULPABLE.
[cutin: objection_inocente; música victory; confeti en la cámara del veredicto]
JUEZ: El acusado responderá en vía administrativa por haber tomado y no entregado la cartera del difunto. No por su muerte.
BOTIJA: Sí, señor. Eso sí lo hice.
JUEZ: Se ordena procesar a Rufino Rufián por homicidio, encubrimiento y receptación del Collar de Cleopatra.
JUEZ: El tribunal deja constancia del trabajo del sargento Refugio Pazguato, que solicitó los exámenes que corrigieron su propio parte.
SUPER SAM: Un fiscal eficiente reconoce sus pérdidas y cierra la posición, Your Honor. Time is money.
DEFENSA: Es lo más bonito que le he oído decir.
[fundido a negro antes del corte de ubicación]
~~~

El confeti pertenece a la cámara del veredicto. El paso a la sala de espera se hace con fundido a negro, no con un salto directo de fondo.

### 13.5 Epílogo

Sala de espera de la corte, 27 de octubre, 18:00. Cada línea estampa su fondo. Botija y la Chimoltrufia son el centro; el Sargento conserva su plaza en la policía.

~~~dialogue
NARRADOR: Sala de espera de la corte.
BOTIJA: Nunca había salido de un juzgado por mi propio pie.
CHIMOLTRUFIA: Pues acostúmbrate, porque de esta casa no te vuelves a ir ni a la esquina sin avisar.
SARGENTO: Don Cecilio me ofreció jefe de seguridad del hotel. Con uniforme de gala.
DEFENSA: ¿Y qué le contestó?
SARGENTO: Que en la policía me dejan pedir análisis. En el hotel solo me dejarían abrir puertas.
CHOMPIRAS: Yo le guardé el puesto al Botija. Y el montacargas ya tiene cartel nuevo: “solo equipaje”.
BOTIJA: Ese cartel ya estaba.
CHOMPIRAS: Ahora está en grande.
CHAPULIN: Yo lo sospeché desde un principio. Como dice el dicho: camarón que se duerme no lo dejes para mañana.
DEFENSA: ...Chapulín.
CHAPULIN: Espere: no dejes para mañana el camarón que se lo lleva la corriente... Bueno, la idea es esa.
CHIMOLTRUFIA: A mí me pareció bonito.
DEFENSA: A mí me parece que ya nos podemos ir.
BOTIJA: Don Ramón. Lo del pago...
DEFENSA: Arréglame la llave del lavadero y quedamos a mano. Lleva dieciséis meses goteando, igual que mi casero.
[fundido a negro; placa de caso completo]
~~~

Es la segunda y última mezcla de refranes del episodio. No participa en ninguna deducción.

## 14. Progresión y prevención de bloqueos

El motor comprueba **solo inventario** para habilitar cada juicio: `checkTrialReadiness` recorre `requiredEvidence` y verifica posesión, sin mirar ubicaciones visitadas ni temas oídos (`GameStateCaseRules.resolveRequiredEvidence`, `GameStateManager`). Por eso la última ubicación obligatoria de cada jornada debe entregar un identificador nuevo, y ninguna lista puede apoyarse en un `updateEvidence`.

| Jornada | Campo del script | requiredEvidence | Último identificador y dónde se entrega |
| --- | --- | --- | --- |
| D1 | `CaseScript.requiredEvidence` | informe_policial, foto_crimen, billetera_cuajinais, orden_servicios, plano_hotel, candado_cadena | candado_cadena, en hotel_terraza tras el tema final |
| D2 | `adjournment.requiredEvidence` | residuos_manos, casquillo_fogueo, registro_montacargas, baul_etiquetas, copa_vino, toxicologia_vino | toxicologia_vino, en delegacion tras oír el alcance del análisis |
| D3 | `adjournment.next.requiredEvidence` | botella_vino, boleta_baccarat, nota_amenaza, sello_lacre | sello_lacre, en delegacion_d3 tras la cadena de posesión |

Reglas de gating:

- informe_forense se entrega dentro del juicio del día 1; nunca aparece en una lista de requeridos.
- Las actualizaciones enriquecen fichas, no abren jornadas. Cada ficha declara en §5 tantas entradas de `updates[]` como `[ACTUALIZAR]` recibe, y en el mismo orden: informe_policial tres (D1 anexo, D1 juicio, D2 balística), orden_servicios tres (D1, D2, D3), nota_amenaza y toxicologia_vino una cada una en D3.
- Cada ubicación se abre con `unlockLocation` desde el tema obligatorio de la anterior: detention → hotel_lobby → hotel_suite → hotel_terraza; hotel_sotano → hotel_suite204 → hotel_terraza_d2 → hotel_azotea → delegacion; hotel_cava → hotel_lobby_d3 → detention_d3 → delegacion_d3.
- Un tema con un solo requisito usa `unlockedByTalk` o `unlockedByHotspot`. Los temas que exigen dos o tres requisitos usan el predicado `condition(flags)` sobre las banderas `talk_<id>` y `examined_<id>`: declarar los dos campos juntos NO es una conjunción, porque `isTalkOptionUnlocked` los evalúa como alternativa y basta cumplir uno. Ningún tema exige un orden que el jugador no pueda deducir del diálogo anterior.
- `ClimaxStage.requiredUpdateStage` existe y el Caso 3 lo usa, pero aquí no hace falta: las dos pruebas del clímax llegan completas desde la investigación del día 3.

Prevención de bloqueos por rotación de reparto:

- Un residente solo se sustituye cuando sus hechos ya están en el Acta o en un tema obligatorio cumplido. Cecilio agota los suyos en D1 (orden_servicios, plano_hotel, ruido) antes de que Chimoltrufia ocupe el mostrador en D3; Maruja agota los suyos en D1, incluido el cierre, antes de que Chómpiras ocupe la terraza en D2.
- La sustitución se hace siempre con una ubicación nueva de sufijo de día (hotel_terraza_d2, hotel_lobby_d3, detention_d3, delegacion_d3), nunca mutando el objeto de escena existente.
- Cecilio y Maruja siguen apareciendo en sala; los hechos que aportan en juicio ya están asentados como prueba antes de necesitarse.

## 15. Ubicaciones, residentes y assets

| Ubicación | Día | Fondo | Residente | Entrega principal |
| --- | --- | --- | --- | --- |
| detention | 1 | bg_detention | Botija | billetera_cuajinais |
| hotel_lobby | 1 | bg_hotel_lobby | Cecilio (Rufino de paso) | orden_servicios, plano_hotel |
| hotel_suite | 1 | bg_hotel_suite | Sargento | informe_policial, foto_crimen |
| hotel_terraza | 1 | bg_hotel_bar | Maruja (Sargento al final) | anexo del cierre, candado_cadena |
| hotel_sotano | 2 | bg_hotel_sotano | Sargento | residuos_manos |
| hotel_suite204 | 2 | bg_hotel_suite204 | Rufino, con el Sargento | casquillo_fogueo |
| hotel_terraza_d2 | 2 | bg_hotel_bar | Chómpiras | registro_montacargas |
| hotel_azotea | 2 | bg_hotel_azotea | Chómpiras y Sargento | baul_etiquetas |
| delegacion | 2 | bg_delegacion | Sargento | copa_vino, toxicologia_vino |
| hotel_cava | 3 | bg_hotel_cava | Sargento | botella_vino |
| hotel_lobby_d3 | 3 | bg_hotel_lobby | Chimoltrufia | boleta_baccarat, nota_amenaza |
| detention_d3 | 3 | bg_detention | Botija y Chimoltrufia | ninguna; escena de personaje |
| delegacion_d3 | 3 | bg_delegacion | Sargento | sello_lacre |

Los siete fondos del hotel y los de detención, delegación y tribunal ya existen. delegacion_d3 es una escena nueva sobre un fondo existente. No se requieren sprites nuevos: la derrota de Rufino se resuelve con rufino_breakdown y el monóculo caído se narra.

Láminas de examen (`detailedView`) nuevas o revisadas:

| Lámina | Prueba | Uso |
| --- | --- | --- |
| Cierre de cadena, tres estados | candado_cadena | Preparación interior, puerta emparejada con lazo accesible, cadena enganchada. La misma geometría en los tres dibujos. |
| Plano con baño, biombo y corredores | plano_hotel | Señalamiento ramal_204_304 y comprensión del recorrido interior de la 304. |
| Bitácora del montacargas | registro_montacargas | Filas con número, trayecto y carga; marcas impresas legibles sin depender del color. |
| Folio manuscrito de mantenimiento | orden_servicios | Señalamiento sobre el nombre escrito a mano. |
| Telegrama con acuse | nota_amenaza | Señalamiento sobre el recibo firmado. |
| Cierre extraído a escala | botella_vino | Huella del sacacorchos, canal fino e inclusión metálica. |
| Anillo y comparación de fractura | sello_lacre | Vistas del anillo abierto y de las dos superficies de rotura a la misma escala. |

Reglas de assets:

- Las coordenadas de `PointZone` son porcentajes `[minX, minY, maxX, maxY]` medidos sobre la lámina generada de 960×540. No se reutilizan las coordenadas de la versión anterior: cambian los dibujos.
- Un hotspot delimita un objeto, no una pared. Ninguno supera el 20% de la superficie de la escena salvo que el objeto pintado ocupe realmente eso, y ninguno baja del 8% de ancho para que siga siendo pulsable. La versión anterior del juego tiene la cava resuelta con un único hotspot de 90×72 —el 65% de la pantalla— y el armario de la 204 al 41%: son botones de continuar disfrazados de examinar, y enseñan al jugador que fuera de esa caja no hay nada que mirar. No reproducirlos.
- Una escena con un solo objeto que mirar no necesita modo examinar: si al medir los hotspots queda uno solo y enorme, el contenido va en un tema de conversación y la escena se ahorra el examen.
- La geometría del cierre debe poder dibujarse en los tres estados antes de implementar el puzle. Si el dibujo no sostiene el recorrido, se corrige el mecanismo, no la lámina.
- El anillo es ficción material: el jugador debe entender su forma por las vistas, no por una explicación técnica de funcionamiento aparecida al señalar.
- Ningún asset se genera en esta especificación. La validación visual del cierre y del anillo queda pendiente.

## 16. Matriz de información, alcance y cabos sueltos

Cada presentación ataca una afirmación concreta y falsa. La tercera columna es lo que la prueba **no** demuestra; el guion no puede excederla.

| Momento | Prueba | Afirmación refutada | Alcance |
| --- | --- | --- | --- |
| D1-T1 | candado_cadena | “Solo alguien dentro pudo echar la cadena” | Prueba una posibilidad de cierre exterior; no identifica autor |
| D1-T2 | informe_forense | “La bala causó la muerte al sonar el estruendo” | Fija muerte anterior; no dice quién ni con qué |
| D1-T2 (followUp) | foto_crimen | “Un disparo así se habría oído antes” | Explica amortiguación; no fija la hora del tiro |
| D2-T1 | plano_hotel + casquillo_fogueo | “El estruendo nació dentro de la 304” | Explica el ruido; no identifica quién montó el efecto |
| D2-T2 | registro_montacargas | “Ese envío contenía únicamente equipaje” | Obliga a investigar una descarga; no nombra el contenido |
| D2-T2 (followUp) | baul_etiquetas | “El baúl nunca tocó a la víctima” | Acredita contacto de la prenda; la identidad la confirma la admisión de Rufino |
| D3-T1 | orden_servicios | “El hotel eligió al empleado” | Acredita elección deliberada; no acredita envenenamiento |
| D3-T2 | nota_amenaza | “No esperaba esa visita y no le debía nada” | Acredita móvil y deuda; no acredita autoría |
| Clímax 1 | botella_vino | “Una botella sellada no pudo alterarse” | Acredita el método; la custodia excluye la 204 y al detenido, no a quien guardó el cierre; no identifica la mano |
| Clímax 2 | sello_lacre | “Cualquier herramienta fina explica ese canal” | Identifica el instrumento por encaje de fractura y residuos y cierra la posibilidad abierta en el stage 1; no excluye que existan otras herramientas finas ni fija el minuto de la perforación |

Acusación vigente al terminar cada jornada:

| Fin de | Hipótesis de la fiscalía | Qué le falta |
| --- | --- | --- |
| D1 | Botija mató por otro medio, aprovechando su acceso | Una causa de muerte |
| D2 | Botija alteró la botella que transportó | Cómo se altera una botella cerrada |
| D3 | Rufino envenenó, eligió al chivo expiatorio y montó la escena | Nada: método, instrumento, posesión y móvil quedan probados |

Cabos sueltos y dónde se cierran:

- Revólver: era de la víctima, registrado en el padrón; por eso quedó en la habitación (presión 2 de D3-T1).
- Billetera y los $200: Botija la tomó para identificar al muerto y se asienta como falta administrativa en el veredicto. Nunca se usa como prueba de inocencia.
- Deuda de juego de Maruja: explicada en su presión del día 2; no esconde otro misterio.
- Cierre del corcho: custodia desde antes del sorbo con su hueco de quince horas declarado en sala, análisis del canal y encaje en el clímax.
- Collar de Cleopatra: recuperado en delegacion_d3 y adjuntado a nota_amenaza; se nombra en el veredicto.
- Maletín de la 204: sellado al cerrar D2, abierto con el telegrama.
- Inventario de material de gala: explica el origen del efecto sin atribuirlo por exclusividad.
- residuos_manos: cierra la imputación por pólvora sin declarar imposible disparar.
- Llave ordinaria de la 304 en la mesita: parte del montaje; Botija entró con la maestra.
- Cubeta de hielo: servicio ordinario. No se mide ni se usa como reloj.

Conocimiento obligatorio antes del clímax: método del cierre observado en la cava, custodia y posesión del anillo leídas en la cadena de delegacion_d3 (§11.4), y las dos láminas accesibles desde el Acta. Las confirmaciones de Cecilio y Maruja en el clímax repiten esa cadena en voz alta; no la sustituyen. Es opcional preguntar por la diferencia de peso en D2 y por el anillo en la escena de la detención. El tema del pasado de Botija es obligatorio: cierra §11.3 y abre delegacion_d3.

## 17. Presupuesto de duración y validación

Las cifras son un presupuesto de diseño, no una medición. El texto de este documento fija la estructura y las líneas indispensables; el guion final será más extenso.

| Bloque | Minutos estimados |
| --- | --- |
| D1 investigación (4 escenas) | 20 |
| D1 juicio (2 testimonios) | 16 |
| D2 investigación (5 escenas) | 22 |
| D2 juicio (2 testimonios) | 18 |
| D3 investigación (4 escenas) | 18 |
| D3 juicio (2 testimonios) | 16 |
| Clímax, veredicto y epílogo | 12 |
| Total | 122 |

Banda esperada de 110 a 135 minutos según lectura y fallos. La validación es jugada, no calculada: una partida completa sin conocimiento previo, midiendo cada bloque y anotando dónde el jugador relee o se detiene. No se alarga con esperas, repeticiones de temas ni diálogo de relleno; si falta duración, se añade investigación con decisiones, no líneas.

## 18. Migración técnica, documentación y QA

El motor no necesita lógica nueva. Todos los esquemas de guion existen ya en `src/types/Private/script.ts`, pero sí hay que ampliar la unión cerrada `EvidenceId` de `src/types/Private/evidence.ts` con orden_servicios y toxicologia_vino, o nada compila:

- Dos testimonios por jornada y encadenamiento por `AdjournmentDefinition.next`.
- Una `ContradictionRule` con un `followUp` como máximo, y `PointTargetContradiction` en regla, followUp o stage.
- `ClimaxDefinition.stages` con `presentTarget`, `prompt`, `pointTarget` y `successDialogue`; `verdict` y `epilogue` aparte.
- `detailedView` muestra imágenes y tooltips; no ejecuta diálogo de descubrimiento.

Trabajo de implementación pendiente:

- Reescribir los guiones de `src/case/case4/Private/` en español y su par `_en`, incluida la escena nueva delegacion_d3 y su registro en el índice del caso.
- Ampliar `EvidenceId` en `src/types/Private/evidence.ts` y actualizar `EvidenceCatalogCase4Es.ts` y `EvidenceCatalogCase4En.ts` con las 18 fichas y sus arrays `updates[]` completos. Revisar colisiones de nombre de archivo de icono con casos anteriores.
- Actualizar `tests/case/Case4Trial.test.ts`, `tests/case/Case4Hotspots.test.ts` y `tests/engine/TrialFollowUp.test.ts`; añadir cobertura de las dos rutas de D2-T1, del gating por jornada y de los cuatro señalamientos nuevos.
- Regenerar las láminas de examen y medir de nuevo las zonas sobre el WebP producido.

Documentación a actualizar **cuando la implementación exista**, no antes: las filas de Chimoltrufia y Chómpiras en el glosario describen todavía la versión vigente del juego; `docs/flows/present-point-flow.md` y `docs/flows/evidence-examine-flow.md` deben recoger los nuevos señalamientos; `docs/architecture/case-scripting.md` solo cambia si aparece una escena o un campo nuevo.

Este documento sustituye el diseño narrativo anterior del Caso 4 y deja obsoleto el plan de reconstrucción `docs/plans/case-4-reconstruccion-narrativa-privada.md`, que se conserva como registro del diagnóstico.

Validaciones pendientes antes de implementar: el dibujo del cierre en tres estados y la geometría del anillo. La coherencia horaria de los §§11–13 se cotejó contra la cronología de §4.2 al redactarlos; cualquier ajuste posterior de horas debe repetir ese cotejo.
