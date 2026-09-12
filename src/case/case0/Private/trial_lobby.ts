// @Architecture(descriptionShort="Case 0 lobby scenes before and during trial", type="data", icon="layers")
import type { DialogueLine } from '../../../types/index.js';

const WAITING_ROOM = 'assets/bg_waiting_room.webp';
const JUDGE = 'assets/bg_judge.webp';

export const CASE0_LOBBY_INTRO: DialogueLine[] = [
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'NARRADOR', text: '13 de julio, 09:45. Sala de espera del tribunal.', bgm: 'suspense' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'TORIBIO', pose: 'toribio_llorando', text: '¡Licenciado! ¡Licenciado Don Ramón! ¡Por su madrecita santa, dígame la verdad! ¿Me van a mandar a las Islas Marías?' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_idle', text: '¡Cálmate, Toribio, cálmate! ¡No te me achicopales antes de tiempo! Con el Licenciado Don Ramón en la defensa estás en las mejores manos...' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_sweat', text: '(Aunque la verdad es que me tiemblan las corvas... Primera vez que piso este juzgado de corbata y no porque me citó el casero.)' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'TORIBIO', pose: 'toribio_nervioso', text: '¡Es que yo soy inocente, licenciado! Yo nomás salí a la hielería por mi barra para las paletas. Cuando regresé a mi cuarto, ¡don Nazario ya estaba tirado como fardo!' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'Te creo, muchacho, te creo. Pero allá adentro hay un fiscal güero que cobra por palabra y que dice que en once minutos te refunde en el bote.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'TORIBIO', pose: 'toribio_llorando', text: '¡Ay, mamacita linda! ¡¿Y ahora quién podrá defenderme?!' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_idle', text: '¡YOOOOO!', sfx: 'whoosh' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'TORIBIO', pose: 'toribio_nervioso', text: '¡¿El Chapulín Colorado?!' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_idle', text: '¡No contaban con mi astucia! ¡Que no panda el cúnico! Mis antenitas de vinil detectaron una sobredosis de pánico procesal en este pasillo.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_shock', text: '¡Chapulín! ¡Menos mal que llegas! Oye... ¿tú de veras sabes de juicios y leyes?' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_point', text: '¡Claro que sí! He leído la Constitución... bueno, hojeé la portada en un puesto de periódicos, ¡pero tengo un sentido de la justicia incorruptible!' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'Además, vengo como tu asesor legal. Tú eres el abogado de banqueta y yo soy el cerebro táctico de la operación.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_sweat', text: 'Pues más te vale que ese cerebro funcione rápido, porque como pierda este juicio, me quedo sin cliente y con catorce meses de renta encima.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_idle', text: '¡Tranquilo, Don Ramón! La clave de un juicio es simple: el testigo del fiscal va a soltar su versión. Tú debes escuchar cada frase con calma.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_point', text: 'Si algo no te cuadra, ¡le exiges que aclare! Y si de plano descubres que está mintiendo con descaro, ¡le zampas una prueba en la cara!' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'TORIBIO', pose: 'toribio_nervioso', text: '¡Oiga, licenciado! Acuérdese de revisar su saco... No se le vaya a olvidar la placa esa que le dieron, no sea que no lo dejen pasar los guardias.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_idle', text: '¡Ah, la insignia! La traigo bien guardada en el bolsillo... un poquito abollada de cuando se me cayó al drenaje, pero charolea bonito.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_point', text: '¡Tenla lista! El señor juez siempre pide acreditar la personalidad jurídica antes de dar el primer martillazo.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'NARRADOR', text: 'Se escucha el timbre de la sala de audiencias.', sfx: 'bell' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'ALGUACIL', text: '¡Atención en el pasillo! Causa penal número cero: El pueblo contra Toribio Pantoja. Pasen a la sala las partes.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'TORIBIO', pose: 'toribio_nervioso', text: '¡Ya nos llaman! ¡Se me están congelando las corvas más que mis paletas de limón!' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'Respira hondo, Toribio. Entra tú primero... (A ver si abriendo la puerta despacito no se nota cómo me tiemblan las rodillas).' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_point', text: '¡Síganme los buenos! ¡A la victoria de la justicia!' }
];

export const CASE0_T2_RECESS_AND_RESUMPTION: DialogueLine[] = [
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'NARRADOR', text: '11:30. Sala de espera del tribunal.', bgm: 'suspense' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'TORIBIO', pose: 'toribio_aliviado', text: '¡Licenciado Don Ramón! ¡Estuvo colosal! ¡Le dio hasta por debajo de la lengua al señor de las enciclopedias!' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'TORIBIO', pose: 'toribio_aliviado', text: '¡Cuando le demostró que la campana no tenía badajo ni campana ni nada, casi se le caen los dos relojes de la impresión!' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_sweat', text: '¡Uff! No cantes victoria todavía, chamaco... Mira cómo me sudan las manos. Si no fuera por la foto del patio, el señor juez ya te tenía con un pie en el penal.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_idle', text: '¡Todos mis movimientos estuvieron fríamente calculados! Bueno, casi todos, porque al principio yo también pensé que la campana sonaba bonito.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_point', text: 'Pero fíjense bien: logramos desmontar la hora del testigo, pero todavía no sabemos qué hacía ese hombre en la vecindad ni por qué se puso tan nervioso con su maletín de muestras.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_idle', text: '¡Eso es lo mero bueno! Ese tipo no vende enciclopedias, Chapulín. Yo conozco a los vendedores de a pie: te engatusan con un cuento, te ofrecen abonos chiquitos y te sonríen aunque les eches al perro.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_point', text: 'Este señor no... este señor andaba midiendo chapas. Lo dijo él solito: "la vivienda 4 tenía la chapa floja".' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'TORIBIO', pose: 'toribio_nervioso', text: '¡Es verdad! Hace tres días lo vi merodeando por mi ventana. Me dijo que andaba ofreciendo el tomo de "Cerrajería moderna". ¡Y yo de tarugo casi le pido que me compusiera el cerrojo!' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_idle', text: '¡Mis antenitas de vinil nunca fallan! Ese sujeto andaba buscando una presa fácil. Si el alguacil encuentra algo sospechoso en ese portafolio de muestras, la fiscalía tendrá que cambiar de blanco.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'Ojalá... porque ese fiscal gringo ya me tiene harto con su "time is money". A mí el único money que me interesa es el de mis honorarios para pagar la renta al casero.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'TORIBIO', pose: 'toribio_aliviado', text: 'Si salgo libre de aquí, licenciado, le juro que le surto paletas de grosella y de limón todos los domingos por un año entero.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_idle', text: '(Grosella no paga los catorce meses de renta, pero por lo menos no me voy a morir de calor este verano...)' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_point', text: '¡Oye, Don Ramón! Antes de que se nos acaben los veinte minutos del receso... ¿ya te aseguraste de tener todo en orden?' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_idle', text: '¿Mis apuntes del caso? Sí, los tengo aquí anotados en la envoltura de una torta de jamón.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_panic', text: '¡No hablo de tortas! Hablo de registrar tus avances para no tener que empezar de cero si te entra la chiripiorca.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'MODO TUTORIAL', text: 'Puedes guardar tu partida en cualquier momento pulsando el botón 💾 GUARDAR en la barra superior. Si deseas retomar el juicio más adelante o asegurar tu progreso antes de una decisión difícil, pulsa 📂 CARGAR desde la pantalla principal.', instant: true },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_idle', text: '¡Mira qué chulada! Si la vida real tuviera botón de guardar, no se me habrían acumulado catorce meses de deuda.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'NARRADOR', text: 'El timbre del tribunal suena dos veces. Los veinte minutos de receso han concluido.', sfx: 'bell' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_point', text: '¡Se acabó el recreo! Ahora sí viene lo bueno: el alguacil ya debe tener abierto ese maletín de cartón.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'Vamos para adentro, Toribio. Agárrate fuerte, que a ese vendedor de enciclopedias le vamos a leer la cartilla completa.' },
  { bg: JUDGE, furniture: 'none', speaker: 'NARRADOR', text: 'Veinte minutos después. De vuelta en la sala, el alguacil deposita sobre el estrado el maletín de muestras del testigo.', bgm: 'suspense' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Que conste en acta lo que se encontró dentro.' },
  { speaker: 'NARRADOR', text: 'Entre los tomos del lomo roto, plegado y sin un centavo, un cartapacio de fuelle lleno de papeles: la lista de rentas de la vecindad, separador por separador.', addEvidence: 'maletin_cobranza' },
  { speaker: 'NARRADOR', text: 'El alguacil entrega a la defensa la tarjeta de Enciclopedias El Saber Universal.', addEvidence: 'tarjeta_enciclopedias' },
  { speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'Your Honor... la fiscalía solicita autorización para tomarle declaración a este testigo en calidad de investigado. Y solicita que el tiempo del receso se le cargue a la defensa.', sfx: 'desk_slam' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Autorizada la primera. Denegada la segunda.' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Señor Lengua, va a explicar a esta corte cómo llegó ese cartapacio a su maletín de muestras. Y le advierto que ahora cada palabra suya se asienta en su contra.' },
  { speaker: 'CHAPULIN', pose: 'chapulin_point', text: '¡Y ahora sí, Don Ramón, el testigo va a testificar de su propio caso!' },
  { speaker: 'DEFENSA', pose: 'donramon_idle', text: '(Tres testimonios en un día. Y yo que venía nomás por la renta.)' }
];
