// @Architecture(descriptionShort="Case 1 day 1 detention centre visit with El Chapulín", type="data", icon="layers")
/**
 * Caso 1, Día 1 — Centro de Detención (`detention`). Spec §9.1.
 * El tercer tema desbloquea `museo_sala2` y exige los dos anteriores, que son
 * los que entregan las cuatro pruebas de la detención.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE1_DETENTION: InvestigationScene = {
  title: 'Centro de Detención - Sala de Visitas',
  name: 'Centro de Detención',
  bg: 'assets/bg_detention.webp',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  idlePose: 'chapulin_idle',
  intro: [
    { speaker: 'NARRADOR', text: '29 de agosto, 9:00 AM. Centro de Detención de la Ciudad.', bg: 'assets/bg_detention.webp', furniture: 'none', bgm: 'detention_center' },
    { speaker: 'DEFENSA', text: 'Buenos días. Soy Don Ramón, defensor de oficio... y de banqueta, según quién pregunte.', pose: 'donramon_idle' },
    { speaker: 'CHAPULIN', text: '¡No contaban con mi astucia!', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'Joven, está usted preso.', pose: 'donramon_sweat' },
    { speaker: 'CHAPULIN', text: 'Sí, pero no contaban con ella.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: '(Catorce meses de renta atrasada y me toca defender a un señor vestido de grillo. Yo le voy al Necaxa y hasta eso me sale mejor.)', pose: 'donramon_sweat' },
    { speaker: 'CHAPULIN', text: 'Licenciado, antes de que empiece: yo no me robé nada. Llegué tarde. Otra vez.', pose: 'chapulin_panic' },
    { speaker: 'DEFENSA', text: 'Empecemos por ahí. Cuénteme la noche completa, desde el principio, sin saltarse nada.', pose: 'donramon_idle', addProfile: 'perfil_chapulin' },
    { speaker: 'DEFENSA', text: '(Ya me anoté a los dos en el Acta. A él porque es mi cliente; a mí porque si me distraigo, se me olvida de qué lado estoy.)', pose: 'donramon_idle', addProfile: 'perfil_donramon' },
    { speaker: 'MODO TUTORIAL', text: 'El corazón amarillo del ACTA DEL JUICIO ahora tiene dos pestañas: PRUEBAS y PERSONAS. En la pestaña de PERSONAS se guarda todo lo que sabes de cada quien, y se actualiza sola conforme avanza el caso.', instant: true }
  ],
  hotspots: [
    {
      id: 'hotspot_chapulin',
      label: 'El Chapulín Colorado',
      x: 22, y: 12, w: 56, h: 66,
      dialogue: [
        { speaker: 'CHAPULIN', text: '¡Todos mis movimientos están fríamente calculados! ...Menos la hora de llegada.', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'hotspot_cristal',
      label: 'Cristal de visitas',
      x: 86, y: 16, w: 12, h: 44,
      dialogue: [
        { speaker: 'DEFENSA', text: '(Vidrio rayado, bocina que no sirve y un letrero de "prohibido fumar" con una quemadura encima.)', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'noche_21',
      label: '¿Qué pasó la noche del 28?',
      dialogue: [
        { speaker: 'CHAPULIN', text: 'A las ocho cuarenta y cinco me vibraron las antenitas de vinil. Vibran cuando hay un enemigo cerca; nunca fallan.', pose: 'chapulin_idle' },
        { speaker: 'CHAPULIN', text: 'Salí volando para el museo. Bueno, volando no. Corriendo. Con escalas.', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: '¿Cuántas escalas?', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: 'Dos. Un semáforo y una señora a la que se le cayó el mandado.', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(Quince minutos entre heroísmo, semáforo y mandado.)', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: 'Llegué a las nueve en punto. La puerta de carga estaba abierta. La empujé, entré y tuve que doblar por el pasillo.', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: '¿Abierta o forzada?', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: 'Abierta, licenciado. Como cuando uno empuja una puerta y la puerta dice "pásele".', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '¿Y en el patio? ¿Nadie?', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: 'Oscuro, licenciado. Una camioneta tapada con lona. Yo iba para adentro, doblando hacia las salas. No me puse a saludar muebles.', pose: 'chapulin_idle' },
        { speaker: 'CHAPULIN', text: 'Adentro volví a girar y me tropecé con una jaula; se me vino encima un perico disecado, y cuando me levanté ya tenía al velador a mis pies y al fiscal en la nuca.', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: '¿Y el chipote?', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: 'Lo traía colgado del cinturón. Para correr necesito las manos, licenciado.', pose: 'chapulin_idle', addEvidence: 'antenitas_vinil' },
        { speaker: 'CHAPULIN', text: 'Cuando me cayó la jaula, el chipote salió volando. Lo recogí del piso antes de levantarme.', pose: 'chapulin_panic', addEvidence: 'chipote_chillon' }
      ]
    },
    {
      id: 'pertenencias',
      label: '¿Qué traía usted encima cuando lo detuvieron?',
      dialogue: [
        { speaker: 'CHAPULIN', text: 'Todo mi equipo reglamentario: el chipote chillón, las antenitas de vinil y una caja de pastillas de chiquitolina. Sellada, eso sí.', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: '¿Sellada?', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: 'Sellada de fábrica. Doce pastillas, doce. Es que la caja anterior se me acabó en junio, por una gotera.', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'No pregunté.', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: 'Es que fue una gotera muy injusta.', pose: 'chapulin_panic' },
        { speaker: 'NARRADOR', text: 'El alguacil entrega a Don Ramón una copia del informe de detención.', sfx: 'whoosh' },
        { speaker: 'DEFENSA', text: '(Detenido a las nueve con siete. Chipote, pastillas, antenitas y tres pesos. De la chicharra de oro... nada.)', pose: 'donramon_idle', addEvidence: 'pastillas_chiquitolina' },
        { speaker: 'DEFENSA', text: '(Revisaron el museo pieza por pieza y tampoco apareció. Y los vehículos del predio: "sin registrar". Sin registrar, dice.)', pose: 'donramon_shock', addEvidence: 'parte_detencion' }
      ]
    },
    {
      id: 'por_que_museo',
      label: '¿Por qué se metió usted al museo?',
      condition: (flags) => Boolean(flags.talk_noche_21) && Boolean(flags.talk_pertenencias),
      dialogue: [
        { speaker: 'CHAPULIN', text: 'Porque las antenitas no se equivocan, licenciado. Si vibran, hay un malandrín. Y si hay un malandrín, ahí voy yo.', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'Le vibraron a las ocho cuarenta y cinco. El robo, según la fiscalía, fue a las nueve menos cinco.', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: '¡Exacto! ¡Mis antenitas detectaron al ladrón diez minutos antes de que robara!', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'Eso, o lo detectaron a usted.', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: '¡Chanfle!', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: '(Aunque... si el ladrón ya andaba cerca del museo a las ocho cuarenta y cinco, y el museo cerró a las ocho cuarenta, ese señor estaba afuera esperando algo.)', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: '¡Vaya al museo, licenciado! ¡Síganme los buenos!', pose: 'chapulin_point', unlockLocation: 'museo_sala2' },
        { speaker: 'DEFENSA', text: 'Usted no puede seguirme, está preso.', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: 'Sígame usted a mí, entonces. Yo me quedo aquí dirigiendo.', pose: 'chapulin_idle' }
      ]
    }
  ]
};
