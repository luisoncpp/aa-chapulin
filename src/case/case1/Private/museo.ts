// @Architecture(descriptionShort="Case 1 day 1 museum gallery 2 crime scene", type="data", icon="layers")
/**
 * Caso 1, Día 1 — Museo de las Curiosidades, sala 2 (`museo_sala2`). Spec §9.2.
 * El acusado está detenido: sus líneas llegan por radio y se estampan con
 * `donramon_idle` para no mover la cámara.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE1_MUSEO: InvestigationScene = {
  title: 'Museo de las Curiosidades - Sala 2',
  name: 'Museo (Sala 2)',
  bg: 'assets/bg_museo_sala2.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'florinda_idle',
  intro: [
    { speaker: 'NARRADOR', text: '22 de agosto, 11:00 AM. Museo de las Curiosidades, sala 2. La cinta de la policía sigue puesta.', bg: 'assets/bg_museo_sala2.webp', furniture: 'none', bgm: 'investigation' },
    { speaker: 'FLORINDA', text: '¡Ay, mi museo! ¡Mi pobre museo!', pose: 'florinda_crying' },
    { speaker: 'DEFENSA', text: 'Doña Florinda, buenas...', pose: 'donramon_idle' },
    { speaker: 'FLORINDA', text: '¡USTED! ¿Usted qué hace aquí?', pose: 'florinda_angry' },
    { speaker: 'DEFENSA', text: 'Soy el abogado del acusado.', pose: 'donramon_sweat' },
    { speaker: 'FLORINDA', text: '¡Chusma, chusma! ¡Vámonos, profesor, no vaya a ser contagioso!', pose: 'florinda_angry' },
    { speaker: 'JIRAFALES', text: 'Doña Florinda, por favor. Toda persona tiene derecho a una defensa. Eso está en los libros.', pose: 'jirafales_idle' },
    { speaker: 'JIRAFALES', text: 'Y además es un vecino, Doña Florinda. Buenos días, Don Ramón.', pose: 'jirafales_smoking' },
    { speaker: 'DEFENSA', text: '¡Profesor Jirafales! ¿Usted por aquí?', pose: 'donramon_idle' },
    { speaker: 'JIRAFALES', text: 'Anoche di aquí la charla de las ocho: "La Chicharra Paralizadora: mito y metalurgia".', pose: 'jirafales_smoking' },
    { speaker: 'DEFENSA', text: '(Que no saque lo de la renta, que no saque lo de la renta...) ¿Y a qué hora terminó, profesor?', pose: 'donramon_sweat' },
    { speaker: 'JIRAFALES', text: 'A las ocho treinta con cuatro segundos. Traigo minutario.', pose: 'jirafales_idle', addProfile: 'perfil_florinda' },
    { speaker: 'DEFENSA', text: '(Sigue igual que siempre: le pone hora hasta a los segundos. De algo me va a servir.)', pose: 'donramon_idle', addProfile: 'perfil_jirafales' }
  ],
  hotspots: [
    {
      id: 'hotspot_vitrina',
      label: 'Vitrina reventada',
      x: 42, y: 28, w: 29, h: 43,
      dialogue: [
        { speaker: 'NARRADOR', text: 'La vitrina de la Chicharra, reventada. El pedestal de madera queda a la altura de la cintura de un hombre.' },
        { speaker: 'DEFENSA', text: 'Está hecha añicos. Y el cristal... el cristal quedó regado por todo el piso.', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: '¡Se lo llevaron todo! ¡Ese insecto colorado me dejó el museo en la ruina!', pose: 'florinda_crying' },
        { speaker: 'DEFENSA', text: '(Hay algo raro en cómo cayó ese vidrio, pero ahorita no sabría decir qué. Me la llevo al Acta y la miro con calma.)', pose: 'donramon_idle', addEvidence: 'vitrina_rota' }
      ]
    },
    {
      id: 'hotspot_rejilla',
      label: 'Rejilla del ducto',
      x: 72, y: 55, w: 11, h: 17,
      dialogue: [
        { speaker: 'NARRADOR', text: 'En el muro, arriba del zoclo, una rejilla metálica pequeña.' },
        { speaker: 'DEFENSA', text: 'Dieciocho por veinticuatro. Por ahí no pasa ni un gato.', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: 'Cuatro tornillos, y la pintura de los cuatro está entera. Nadie los ha aflojado desde que pintaron el muro.', pose: 'donramon_shock' },
        { speaker: 'FLORINDA', text: 'Esa rejilla da al patio de carga. Lleva ahí desde que el museo era fábrica de botones.', pose: 'florinda_idle' },
        { speaker: 'DEFENSA', text: 'La esquina inferior de la malla tiene el alambre cortado, doblado hacia arriba y vuelto a acomodar.', pose: 'donramon_shock' },
        { speaker: 'DEFENSA', text: 'Y en el labio interior faltan dos rayitas paralelas de polvo. Hay algo atorado entre los rombos.', pose: 'donramon_idle' },
        { speaker: 'NARRADOR', text: 'Don Ramón extrae con una pinza un hilo de casimir crema con raya y lo guarda en un sobre de papel encerado.', sfx: 'whoosh' },
        { speaker: 'DEFENSA', text: '(Sin marcas de palanca y sin tornillos tocados. No sé todavía qué significan esas rayas ni el hilo, pero vinieron del lado de adentro.)', pose: 'donramon_idle', addEvidence: 'rejilla_ducto' }
      ]
    },
    {
      id: 'hotspot_cedula',
      label: 'Cédula de la pieza robada',
      x: 38, y: 47, w: 12, h: 13,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Junto al pedestal vacío sigue la cédula de la pieza, con su fotografía.' },
        { speaker: 'DEFENSA', text: '"Chicharra Paralizadora de Oro. Oro macizo, un kilo doscientos. Filigrana de canto vivo."', pose: 'donramon_idle' },
        { speaker: 'JIRAFALES', text: 'Y no es un adorno, licenciado. Va montada sobre una base de resonancia.', pose: 'jirafales_smoking' },
        { speaker: 'DEFENSA', text: '¿Y eso qué quiere decir?', pose: 'donramon_idle' },
        { speaker: 'JIRAFALES', text: 'Que si usted la separa de la base, suena. Y el que la oye se queda tieso como un minuto. Por eso la pusieron bajo cristal y no bajo llave.', pose: 'jirafales_idle' },
        { speaker: 'DEFENSA', text: '¿Un minuto entero?', pose: 'donramon_shock' },
        { speaker: 'JIRAFALES', text: 'Sesenta segundos, licenciado. Los conté yo mismo en 1968 y todavía me acuerdo del techo.', pose: 'jirafales_smoking', addEvidence: 'chicharra_oro' }
      ]
    },
    {
      id: 'hotspot_jaula',
      label: 'Jaula del perico histórico',
      x: 0, y: 58, w: 28, h: 31,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Una jaula de latón volcada en el piso. Adentro, un perico disecado con cara de sorpresa permanente.' },
        { speaker: 'DEFENSA', text: 'Volcada hacia adentro desde el acceso del pasillo a la sala dos. Las plumas se regaron tierra adentro.', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: '¡Es Aristóteles! ¡Doscientos años de historia y ese grillo lo tiró de un empujón!', pose: 'florinda_angry' },
        { speaker: 'DEFENSA', text: '(Si la tiró al entrar desde el pasillo, eso cuadra con los giros que me contó.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'hotspot_ventana',
      label: 'Ventana del callejón',
      x: 8, y: 0, w: 18, h: 20,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Un ventanuco alto y angosto, con el vidrio opaco de tanto polvo.' },
        { speaker: 'DEFENSA', text: 'Por aquí dice el testigo que vio todo.', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(Está a dos metros veinte del piso del callejón, mide cuarenta centímetros y el vidrio está esmerilado. Para ver algo hay que treparse... y saber a qué treparse.)', pose: 'donramon_shock' },
        { speaker: 'JIRAFALES', text: 'Hay un tambo de basura debajo, del lado del callejón. Lo vi al salir anoche.', pose: 'jirafales_idle' },
        { speaker: 'DEFENSA', text: '(Un tambo. Ya. Entonces sí se puede ver. Lástima: se me cayó la primera objeción del caso.)', pose: 'donramon_sweat' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'cierre_museo',
      label: '¿A qué hora cerró usted el museo?',
      dialogue: [
        { speaker: 'FLORINDA', text: 'A las ocho cuarenta. Con mi llave, que es la única que existe, y con el profesor de testigo.', pose: 'florinda_idle' },
        { speaker: 'JIRAFALES', text: 'Ocho cuarenta con once segundos. Minutario.', pose: 'jirafales_smoking' },
        { speaker: 'FLORINDA', text: 'Adentro sólo quedaba Alma Negra. Mi pobre velador.', pose: 'florinda_crying' },
        { speaker: 'DEFENSA', text: '¿Y la puerta de carga?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'Ésa nunca la uso. Lleva años con la chapa vencida, pero como da al patio y el patio está bardado...', pose: 'florinda_idle' },
        { speaker: 'DEFENSA', text: '(Bardado. Con una barda que cualquiera brinca y una chapa que lleva años sin servir.)', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'que_vio_florinda',
      label: '¿Qué vio usted cuando llegó?',
      dialogue: [
        { speaker: 'FLORINDA', text: 'Me habló un vecino a las nueve y cuatro. Corrí, abrí la puerta grande con mi llave y...', pose: 'florinda_crying' },
        { speaker: 'FLORINDA', text: 'Ahí estaba mi Alma Negra, tirado como un fardo. Y encima de él ese insecto colorado, con el chipote todavía en la mano.', pose: 'florinda_angry' },
        { speaker: 'DEFENSA', text: '¿Encima de él, o de pie junto a él?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: '¡Es lo mismo!', pose: 'florinda_angry' },
        { speaker: 'DEFENSA', text: '(No es lo mismo, doña Florinda. Pero eso se lo pregunto esta tarde y con el juez de testigo.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'conferencia_jirafales',
      label: 'Su conferencia de anoche (Profesor Jirafales)',
      dialogue: [
        { speaker: 'JIRAFALES', text: 'Cuarenta asistentes, todos con boleto. Terminé a las ocho treinta, firmé dos ejemplares y me quedé platicando con doña Florinda hasta el cierre.', pose: 'jirafales_idle' },
        { speaker: 'DEFENSA', text: '¿Alguien se quedó adentro?', pose: 'donramon_idle' },
        { speaker: 'JIRAFALES', text: 'Nadie. Doña Florinda cuenta a la gente que sale como yo cuento a mis alumnos: dos veces.', pose: 'jirafales_smoking' },
        { speaker: 'DEFENSA', text: '¿Y el velador?', pose: 'donramon_idle' },
        { speaker: 'JIRAFALES', text: 'Ah, Alma Negra. Hombre puntualísimo. Me enseñó su libretita muy orgulloso: hace la misma ronda todas las noches, a la misma hora, escrita con su puño.', pose: 'jirafales_idle' },
        { speaker: 'DEFENSA', text: '¿Escrita?', pose: 'donramon_shock' },
        { speaker: 'JIRAFALES', text: 'Escrita y colgada de un clavo en su caseta, para no fallar. Yo le dije que un hombre de orden es un hombre invencible.', pose: 'jirafales_smoking' },
        { speaker: 'DEFENSA', text: '(Invencible. Sí. Y con el horario a la vista de cualquiera que compre un boleto.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'cree_jirafales',
      label: '¿Usted cree que lo hizo el Chapulín? (Profesor Jirafales)',
      condition: (flags) =>
        Boolean(flags.talk_conferencia_jirafales) &&
        Boolean(flags.examined_hotspot_vitrina) &&
        Boolean(flags.examined_hotspot_rejilla) &&
        Boolean(flags.examined_hotspot_cedula),
      dialogue: [
        { speaker: 'JIRAFALES', text: 'Yo no creo nada, licenciado. Yo nada más sé a qué hora pasaron las cosas.', pose: 'jirafales_idle' },
        { speaker: 'FLORINDA', text: '¡Pues yo sí creo! ¡Y creo que ese grillo se va a pudrir en la cárcel!', pose: 'florinda_angry' },
        { speaker: 'NARRADOR', text: 'Del bolsillo del saco de Don Ramón sale una vocecita de lata: es el radio de dos pesos con el que el Chapulín "dirige la investigación" desde su celda.', sfx: 'whoosh' },
        { speaker: 'CHAPULIN', text: '¡Que no panda el cúnico, doña Florinda! Ya verá que el ladrón cae solito: camarón que se duerme... a hierro muere.', pose: 'donramon_idle' },
        { speaker: 'JIRAFALES', text: '¡¡¡TA-TA-TA-TA-TAAAAAA!!! ¡Joven! ¡Ésos son DOS refranes y ninguno de los dos dice eso!', pose: 'jirafales_angry' },
        { speaker: 'CHAPULIN', text: 'Por eso, profesor. Uno solo no me alcanzaba.', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(Ya se me metió a la investigación por el bolsillo. Con permisito, dijo Monchito.)', pose: 'donramon_sweat' },
        { speaker: 'JIRAFALES', text: 'Licenciado, si de veras quiere ayudar a su cliente, vaya a la clínica. Alma Negra sigue sin despertar.', pose: 'jirafales_idle', unlockLocation: 'clinica' }
      ]
    }
  ]
};
