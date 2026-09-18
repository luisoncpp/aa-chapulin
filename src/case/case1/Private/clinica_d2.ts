// @Architecture(descriptionShort="Case 1 day 2 clinic revisit with a woken Alma Negra", type="data", icon="layers")
/**
 * Caso 1, Día 2 — Clínica, segunda visita (`clinica_d2`). Spec §11.3.
 * Locación nueva, no mutación de `clinica`
 * ([[docs/lessons-learned/location-cast-rotation.md]]). El cambio de pista es
 * lo que le dice al jugador que la víctima despertó.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE1_CLINICA_D2: InvestigationScene = {
  title: 'Clínica Municipal - Cuarto 6 (2º día)',
  name: 'Clínica (2º día)',
  bg: 'assets/bg_clinica.webp',
  bgm: 'investigation_core',
  speaker: 'NARRADOR',
  idlePose: 'almanegra_vendado',
  intro: [
    { speaker: 'NARRADOR', text: '30 de agosto, 12:00 PM. Clínica municipal, cuarto 6. La cama está vacía. El hombre enorme está sentado en una silla de ruedas, vendado hasta las cejas.', bg: 'assets/bg_clinica.webp', furniture: 'none', bgm: 'investigation_core' },
    { speaker: 'ALMA NEGRA', text: '¡Por mil demonios! ¿Quién anda ahí?', pose: 'almanegra_shock' },
    { speaker: 'DEFENSA', text: 'Calma, calma. Don Ramón, defensor.', pose: 'donramon_sweat' },
    { speaker: 'ALMA NEGRA', text: '¿Defensor de quién, grumete?', pose: 'almanegra_vendado' },
    { speaker: 'CHAPULIN', text: '¡De mí!', pose: 'chapulin_idle' },
    { speaker: 'ALMA NEGRA', text: '...¿Y usted qué es?', pose: 'almanegra_shock' },
    { speaker: 'CHAPULIN', text: '¡El Chapulín Colorado!', pose: 'chapulin_point' },
    { speaker: 'ALMA NEGRA', text: 'Ah. Pues perdóneme, pero yo lo hacía más alto.', pose: 'almanegra_vendado' },
    { speaker: 'CHAPULIN', text: '¡Se aprovechan de mi nobleza!', pose: 'chapulin_panic' },
    { speaker: 'DEFENSA', text: '(Despertó anoche. Y despertó hablando. Esto le cambia el juicio a mi cliente... para bien o para mal, todavía no sé.)', pose: 'donramon_idle', addProfile: 'perfil_almanegra' }
  ],
  hotspots: [
    {
      id: 'hotspot_silla_ruedas',
      label: 'Silla de ruedas',
      x: 34, y: 46, w: 30, h: 34,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Una silla de ruedas de hospital, con los mangos cromados y una manta doblada en el respaldo.' },
        { speaker: 'DEFENSA', text: '(Si el juez lo admite, va a declarar desde aquí. Y aquí no hay quien lo baje de su versión.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'hotspot_buro',
      label: 'Buró del cuarto',
      x: 70, y: 52, w: 18, h: 22,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Sobre el buró: un vaso de agua, un parche de repuesto y una libreta con las tapas manchadas de café.' },
        { speaker: 'DEFENSA', text: '(Una libreta. Todavía no la toco: primero que me cuente él para qué sirve.)', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'recuerda_noche',
      label: '¿Qué recuerda de esa noche?',
      dialogue: [
        { speaker: 'ALMA NEGRA', text: 'Poco, grumete. Iba yo en mi ronda. Oí el cristal reventar en la sala dos y me fui para allá como bala de cañón.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: '¿Y qué vio?', pose: 'donramon_idle' },
        { speaker: 'ALMA NEGRA', text: 'Nada. Estaba oscuro. Llegué hasta la vitrina rota, no distinguí a nadie y me volví hacia la puerta para pedir ayuda. De ahí, a la lona.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: '¿"A la lona"?', pose: 'donramon_sweat' },
        { speaker: 'ALMA NEGRA', text: 'Al suelo, licenciado. Uno fue marino, no poeta.', pose: 'almanegra_vendado' },
        { speaker: 'CHAPULIN', text: '(Don Ramón, si no vio nada, tampoco me vio a mí.)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(Eso mismo estaba pensando, joven. Un testigo que no vio nada es lo mejor que le ha pasado a esta defensa.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'oyo_algo',
      label: '¿Oyó algo?',
      dialogue: [
        { speaker: 'ALMA NEGRA', text: 'Sí. Y eso sí no se me olvida ni en cien años.', pose: 'almanegra_shock' },
        { speaker: 'ALMA NEGRA', text: 'Cuando me dieron, oí dinero.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: '¿Dinero?', pose: 'donramon_shock' },
        { speaker: 'ALMA NEGRA', text: 'Monedas, grumete. Monedas cayendo al piso, rodando, brincando. Un montón de monedas.', pose: 'almanegra_vendado' },
        { speaker: 'ALMA NEGRA', text: 'Yo pensé, ya en el suelo: "qué raro, si aquí no hay caja".', pose: 'almanegra_vendado' },
        { speaker: 'CHAPULIN', text: '¡Chanfle!', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: '(El arma se le reventó en la mano. Por eso hubo monedas en el piso... y por eso las tuvo que juntar. Eso le costó tiempo.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'ronda_almanegra',
      label: '¿Su ronda es siempre la misma?',
      dialogue: [
        { speaker: 'ALMA NEGRA', text: 'Siempre. Cada noche igualita. Un barco sin rutina es un barco hundido.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: '¿Y cómo se acuerda?', pose: 'donramon_idle' },
        { speaker: 'ALMA NEGRA', text: 'Está escrita. Aquí la traigo, me la trajo la señora curadora.', pose: 'almanegra_vendado' },
        { speaker: 'NARRADOR', text: 'Alma Negra saca del buró una libreta con las tapas manchadas de café.' },
        { speaker: 'DEFENSA', text: '"Veinte cuarenta y cinco: bodega de proa. Veintiuna cero cero: bodega de popa."', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '...¿"Bodega de proa"?', pose: 'donramon_sweat' },
        { speaker: 'ALMA NEGRA', text: 'La sala uno, grumete. Y la sala dos es la bodega de popa. Yo así me entiendo.', pose: 'almanegra_vendado' },
        { speaker: 'CHAPULIN', text: '¡Ah, o sea que usted le puso nombres de barco al museo!', pose: 'chapulin_idle' },
        { speaker: 'ALMA NEGRA', text: 'Uno le pone nombres de barco a todo. A mi cuarto le digo "el camarote" y a mi señora "la almiranta".', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: '¿Y dónde guarda usted esta libreta cuando trabaja?', pose: 'donramon_idle' },
        { speaker: 'ALMA NEGRA', text: 'Colgada de un clavo en la caseta. Para no perderla.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: '(Colgada de un clavo. En la caseta de la entrada. Donde pasa todo el que compra un boleto.)', pose: 'donramon_shock' }
      ]
    },
    {
      id: 'puede_declarar',
      label: '¿Puede usted declarar hoy?',
      unlockedByTalk: 'ronda_almanegra',
      dialogue: [
        { speaker: 'DEFENSA', text: 'Don Alma Negra, se lo pregunto de frente: ¿aguanta usted una tarde de juicio?', pose: 'donramon_idle' },
        { speaker: 'ALMA NEGRA', text: 'El médico ya firmó el alta para que declare hoy. Dice que no me quite la venda y que no me emocione.', pose: 'almanegra_vendado' },
        { speaker: 'ALMA NEGRA', text: 'Grumete, yo aguanté tres días amarrado a un palo mayor con viruela. Aguanto a un juez.', pose: 'almanegra_vendado' },
        { speaker: 'CHAPULIN', text: '¡Ése es el espíritu!', pose: 'chapulin_point' },
        { speaker: 'ALMA NEGRA', text: 'Y otra cosa, licenciado: yo no vengo a hundir a nadie. Vengo a decir lo que oí.', pose: 'almanegra_vendado' },
        { speaker: 'ALMA NEGRA', text: 'Si eso le sirve al muchacho colorado, qué bueno. Y si no, pues ni modo.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: '(Un testigo que no quiere ganar nada. Qué descanso.)', pose: 'donramon_idle' },
        { speaker: 'ALMA NEGRA', text: 'Llévese también mi libreta, licenciado. Si el juez quiere mi palabra, que tenga mis rumbos y mis horas.', pose: 'almanegra_vendado' },
        { speaker: 'NARRADOR', text: 'Alma Negra entrega la libreta de rondas.', addEvidence: 'bitacora_ronda' },
        { speaker: 'NARRADOR', text: 'El botón de JUICIO se ilumina.', sfx: 'realization' }
      ]
    }
  ]
};
