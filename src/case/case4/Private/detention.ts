// @Architecture(descriptionShort="Case 4 day 1 detention visit with Botija talks", type="data", icon="layers")
/**
 * Case 4 Day 1 — Centro de Detención (`detention`).
 * Spec §7.1: Botija cuenta encargos, billetera y puerta desde el inicio.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_DETENTION: InvestigationScene = {
  title: 'Centro de Detención - Sala de Visitas',
  name: 'Centro de Detención',
  bg: 'assets/bg_detention.webp',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  idlePose: 'botija_nervioso',
  intro: [
    { speaker: 'NARRADOR', text: '25 de octubre, 9:00 de la mañana. Centro de Detención de la ciudad.' },
    { speaker: 'CHIMOLTRUFIA', text: '¡Díganle que hable! Desde anoche nomás me repite que no me preocupe. Y como digo una cosa digo otra: ¡eso es lo que más me preocupa!', pose: 'chimoltrufia_confundida' },
    { speaker: 'BOTIJA', text: 'No quería que me vieras aquí otra vez, vieja.', pose: 'botija_llorando' },
    { speaker: 'CHIMOLTRUFIA', text: '¡Pues ya me viste viéndote! Y no sé qué me duele más, si verte o que no me hables.', pose: 'chimoltrufia_shock' },
    { speaker: 'DEFENSA', text: 'Con permisito, dijo Monchito. Don Ramón, defensor de oficio y de necesidad.', pose: 'donramon_idle' },
    { speaker: 'CHIMOLTRUFIA', text: '¿Y usted cuánto cobra?', pose: 'chimoltrufia_confundida' },
    { speaker: 'DEFENSA', text: 'Señora, yo llevo dieciséis meses sin pagarle la renta a mi casero. Cobrarle a usted sería una falta de respeto a mi profesión.', pose: 'donramon_sweat' },
    { speaker: 'CHAPULIN', text: '¡Y que no panda el cúnico! Nosotros venimos a escucharlo todo, hasta lo que no quiera contar.', pose: 'chapulin_idle' },
    { speaker: 'BOTIJA', text: '¿Y usted es de la policía?', pose: 'botija_nervioso' },
    { speaker: 'CHAPULIN', text: 'Soy el Chapulín Colorado.', pose: 'chapulin_idle' },
    { speaker: 'BOTIJA', text: 'Ah. Entonces sí estoy perdido.', pose: 'botija_llorando' },
    { speaker: 'CHAPULIN', text: '¡Se aprovechan de mi nobleza!', pose: 'chapulin_panic' },
    { speaker: 'DEFENSA', text: 'Empieza por el principio, Botija. Y no me lo adornes: a mí se me defiende mejor lo feo que lo bonito.', pose: 'donramon_idle' },
    { speaker: 'BOTIJA', text: 'Pues acomódense, porque esa noche me trajeron corriendo por todo el hotel. Y a mí correr no me luce.', pose: 'botija_nervioso' }
  ],
  hotspots: [
    {
      id: 'botija_spot',
      label: 'Gordon Botija',
      x: 20, y: 10, w: 60, h: 65,
      dialogue: [
        { speaker: 'BOTIJA', text: '¡Yo cuento todo desde el principio, Don Ramón! ¡Los encargos, la discusión y el escondite!', pose: 'botija_llorando' }
      ]
    },
    {
      id: 'phone_spot',
      label: 'Cristal de Visitas',
      x: 88, y: 15, w: 10, h: 45,
      dialogue: [
        { speaker: 'DEFENSA', text: 'Ni un recado del fiscal. Debe estar contando monedas.', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'encargos_gala',
      label: 'Los encargos de la gala',
      dialogue: [
        { speaker: 'BOTIJA', text: 'Esa noche, por falta de personal, acepté dos encargos pagados: llevar una botella cerrada de la cava a la 204 y trasladar un baúl cerrado de la 204 a la 304.', pose: 'botija_nervioso' },
        { speaker: 'BOTIJA', text: 'Recibí instrucciones del hotel y propinas por suplir al personal. El huésped de la 204 recibió la botella y el equipaje delante de mí.', pose: 'botija_nervioso' },
        { speaker: 'BOTIJA', text: 'No vi qué había dentro del baúl. Iba cerrado. Y a las 23:05 revisé el baño de la 304.', pose: 'botija_llorando' }
      ]
    },
    {
      id: 'cuajinais_billetera',
      label: 'Cuajinais y la billetera',
      dialogue: [
        { speaker: 'BOTIJA', text: 'Al salir del baño después del estruendo reconocí al hombre: era el Cuajinais. Había discutido con él por la tarde porque quería reclutarme otra vez para sus negocios.', pose: 'botija_nervioso' },
        { speaker: 'BOTIJA', text: 'Le dije que no delante de todo el pasillo. Me dio miedo que la Chimoltrufia creyera que había aceptado.', pose: 'botija_llorando' },
        { speaker: 'BOTIJA', text: 'Miré su credencial para comprobar su identidad, guardé la cartera al asustarme y me escondí en el cesto.', pose: 'botija_llorando', addEvidence: 'billetera_cuajinais' },
        { speaker: 'SARGENTO', text: 'El inventario de la cartera lo levanto yo: credencial del Sr. Gómez y $200. Queda asentado quién la tenía y dónde.', pose: 'pazguato_saludo' }
      ]
    },
    {
      id: 'puerta_dejaste',
      label: 'La puerta que dejaste',
      condition: (flags) => Boolean(flags.talk_encargos_gala) && Boolean(flags.talk_cuajinais_billetera),
      dialogue: [
        { speaker: 'BOTIJA', text: 'Abrí con mi llave maestra, dejé la puerta emparejada y entré al baño. No accioné la cadena.', pose: 'botija_nervioso' },
        { speaker: 'BOTIJA', text: 'La sala estaba en penumbra detrás del biombo. Mientras corría el agua oí un golpe leve de puerta, pero no vi a nadie.', pose: 'botija_nervioso', unlockLocation: 'hotel_lobby' },
        { speaker: 'DEFENSA', text: 'El dinero seguía adentro. Eso no prueba nada: un ladrón nervioso también sabe no gastar.', pose: 'donramon_idle' },
        { speaker: 'BOTIJA', text: 'Ya sé cómo se ve.', pose: 'botija_llorando' },
        { speaker: 'DEFENSA', text: 'Por eso necesito saber cómo pasó, no cómo te gustaría que sonara.', pose: 'donramon_idle' },
        { speaker: 'BOTIJA', text: 'Me dio miedo. Pensé que si me hallaban junto al Cuajinais iban a creer que andábamos juntos otra vez.', pose: 'botija_nervioso' },
        { speaker: 'DEFENSA', text: '¿Y se te ocurrió meterte en el cesto de la ropa sucia?', pose: 'donramon_sweat' },
        { speaker: 'BOTIJA', text: 'Meterme se me ocurrió rapidísimo. Lo que no se me ocurrió fue cómo salir.', pose: 'botija_llorando' },
        { speaker: 'CHAPULIN', text: '¡Yo también me habría escondido! Mis antenitas de vinil detectan la presencia de los enemigos... pero mis piernas opinan por su cuenta.', pose: 'chapulin_idle' },
        { speaker: 'CHIMOLTRUFIA', text: 'A mí me hubieras dicho, Botija.', pose: 'chimoltrufia_confundida' },
        { speaker: 'BOTIJA', text: 'Me daba más miedo que tú también lo creyeras.', pose: 'botija_llorando' },
        { speaker: 'CHIMOLTRUFIA', text: 'Pues fíjate que sí lo pensé. Y como digo una cosa digo otra: lo pensé llorando.', pose: 'chimoltrufia_shock' },
        { speaker: 'CHAPULIN', text: 'Bueno, ya lo dijeron los dos. De ahí podemos empezar.', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(Un hombre que le tiene más miedo a su mujer que a la horca. Ése no me está mintiendo.)', pose: 'donramon_idle' }
      ]
    }
  ]
};
