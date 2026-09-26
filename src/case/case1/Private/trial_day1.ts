// @Architecture(descriptionShort="Case 1 day 1 opening and Doña Florinda's testimony", type="data", icon="layers")
/**
 * Caso 1, Día 1 — Apertura (§10.1) y Testimonio 1, Doña Florinda (§10.2).
 * Sin `openingPresent`: la insignia sólo se presenta en el tutorial (Caso 0).
 * La pregunta de la jornada, dictada por el Juez: ¿con qué golpearon al velador?
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE1_CALL_TRIPASECA_D1 } from './witness_calls.js';

export const CASE1_TRIAL_INTRO: DialogueLine[] = [
  { bg: 'assets/bg_waiting_room.webp', furniture: 'none', speaker: 'NARRADOR', text: '29 de agosto, 2:00 PM. Tribunal Superior - Sala de Espera.', bgm: 'trial' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: '¡Silencio en la sala! Se abre la audiencia por el robo de la Chicharra Paralizadora de Oro y las lesiones al velador Alma Negra.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_case1_slam', text: 'Your Honor, este caso lo cerré en cinco minutos. FIVE! Un museo cerrado con llave, un velador en el suelo, y adentro un señor vestido de grillo con el chipote en la mano.', sfx: 'desk_slam' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Time is money, y este juicio ya me está costando dinero.' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_slam', text: '¡PROTESTO! ¡Con permisito, dijo Monchito!', sfx: 'desk_slam', cutin: 'objection_protesto' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_point', text: 'Mi cliente estaba adentro porque entró a ayudar, señor juez. Si eso es delito, aquí la mitad de la sala tendría que estar esposada.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Queda asentado, licenciado. Fiscalía, exponga su teoría.' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_idle', text: '(Fiscal Super Sam. Cobra por caso cerrado. Dos veces lo he tenido enfrente y las dos traía su bolsa de dólares al hombro. Hoy subió al estrado sin ella. Lo apunto, aunque sea por chismoso.)', addProfile: 'perfil_supersam' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Simple, Your Honor. El acusado golpeó al velador, reventó la vitrina y se llevó la chicharra. Three steps, one criminal.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_thinking', text: 'Entonces esta corte quiere una respuesta clara a una sola pregunta antes que a ninguna otra: ¿con qué se golpeó a ese hombre?' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_case1_slam', text: '¡Con el chipote que traía en la mano! ¡La curadora lo vio!', sfx: 'desk_slam' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'La fiscalía llama al estrado a la señora Florinda Corcuera viuda de Matalascallando, curadora del museo.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Testigo, diga su nombre y su ocupación.' },
  { bg: 'assets/bg_witness.webp', speaker: 'FLORINDA', pose: 'florinda_angry', text: 'Florinda Corcuera viuda de Matalascallando, curadora del Museo de las Curiosidades. Y que conste que yo no quería venir a un lugar con tanta chusma.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'La corte le agradece la observación y le pide su testimonio. Únicamente lo que percibió.', sfx: 'gavel' }
];

const CASE1_D1_T1_SUCCESS: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'desk_slam', cutin: 'objection_protesto', pose: 'donramon_slam', bgm: 'objection' },
  { speaker: 'DEFENSA', text: 'Señor juez, la señora llegó a las nueve y cinco. La policía detuvo a mi cliente a las nueve con siete.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Dos minutos. Y en el informe de detención está, renglón por renglón, todo lo que traía encima: un chipote, una caja de pastillas, unas antenitas y tres pesos.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'De un kilo doscientos de oro macizo que cabe en las dos manos... nada.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'FLORINDA', text: 'Pues... pues la escondió.', pose: 'florinda_shock' },
  { speaker: 'DEFENSA', text: '¿Dónde, señora? El mismo informe dice que revisaron el museo pieza por pieza esa noche. Cuatrocientas doce piezas y ni rastro.', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: '¡Tuvo dos minutos! ¡En dos minutos yo cierro un caso!', pose: 'supersam_case1_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'En dos minutos usted cierra un caso, señor fiscal. Yo no dudo de su velocidad: dudo de la de mi cliente.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'La corte concede que un objeto no localizado no acredita por sí solo la inocencia.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Pero también concede que la fiscalía no ha puesto esa chicharra en las manos de nadie. Por hoy, el robo queda en el aire.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SUPER SAM', text: '¡Da igual! ¡Aunque no se haya llevado nada, GOLPEÓ al velador! ¡La testigo lo vio con el arma en la mano!', pose: 'supersam_point' },
  { speaker: 'DEFENSA', text: 'Usted vio a un hombre de pie junto al cuerpo, señora, pero ya admitió que no presenció la agresión. Y de ahí a "él lo golpeó" hay un brinco que dio la fiscalía, no usted.', pose: 'donramon_idle', updateProfile: 'perfil_florinda' },
  { speaker: 'JUEZ', text: 'Es verdad. La testigo no presenció el golpe. Para probar la agresión, la corte necesita al testigo que sí vio los hechos.', pose: 'judge_thinking' },
  ...CASE1_CALL_TRIPASECA_D1
];

export const CASE1_TESTIMONY_1: Testimony = {
  title: 'Testimonio: Cómo encontré mi museo',
  witness: 'Doña Florinda',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'c1_d1t1_1',
      speaker: 'FLORINDA',
      pose: 'florinda_idle',
      text: 'Yo cerré mi museo a las ocho cuarenta, con mi llave, que es la única que existe.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO! ¿La única llave?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'FLORINDA', text: 'La única, licenciado. La traigo colgada del cuello desde 1962.', pose: 'florinda_idle' },
        { speaker: 'DEFENSA', text: '¿Y la puerta de carga?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'Ésa ni llave tiene. La chapa se venció en marzo y nunca la arreglaron, pero da al patio y el patio está bardado.', pose: 'florinda_idle' },
        { speaker: 'JUEZ', text: '¿La corte entiende que había una puerta que cualquiera podía abrir?', pose: 'judge_shock' },
        { speaker: 'FLORINDA', text: '¡Una puerta que da a un patio con barda, señor juez! ¡No es lo mismo!', pose: 'florinda_angry' },
        { speaker: 'DEFENSA', text: '(Una barda de dos metros. Para un hombre normal es un problema. Para un hombre con prisa, un escalón.)', pose: 'donramon_idle' },
        { speaker: 'SUPER SAM', text: '¡Irrelevante! ¡El acusado estaba ADENTRO! ¡Cómo entró es un detalle de arquitectura!', pose: 'supersam_case1_slam', sfx: 'desk_slam' },
        { speaker: 'JUEZ', text: 'La corte anota el detalle de arquitectura. Continúe, defensa.', pose: 'judge_neutral' }
      ]
    },
    {
      id: 'c1_d1t1_2',
      speaker: 'FLORINDA',
      pose: 'florinda_crying',
      text: 'A las nueve y cuatro me habló un vecino y salí corriendo como alma que lleva el diablo.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO! ¿Qué vecino le habló?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'FLORINDA', text: 'Pues... un señor. No dio su nombre.', pose: 'florinda_idle' },
        { speaker: 'DEFENSA', text: '¿Un señor sin nombre le habló a su casa?', pose: 'donramon_shock' },
        { speaker: 'FLORINDA', text: 'Dijo "señora, están robando su museo" y colgó. Yo ni pregunté, ¿usted qué hubiera hecho?', pose: 'florinda_crying' },
        { speaker: 'DEFENSA', text: '(Alguien se tomó la molestia de avisarle a la de la llave. Qué considerado.)', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: '¡Lo sospeché desde un principio!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'Usted no ha sospechado nada, joven, lleva toda la mañana dormido en el banquillo.', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: '¡Sospechaba dormido! ¡Todos mis movimientos están fríamente calculados!', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c1_d1t1_3',
      speaker: 'FLORINDA',
      pose: 'florinda_angry',
      text: 'Abrí la puerta grande y ahí estaba mi velador tirado, y ese insecto colorado parado junto a él con el chipote en la mano.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO! Señora, sea precisa: ¿parado junto a él, o encima de él?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'FLORINDA', text: 'Parado junto a él. De pie, derechito, viendo hacia la puerta.', pose: 'florinda_idle' },
        { speaker: 'DEFENSA', text: '¿Y el velador?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'Boca abajo. Con la cabeza hacia la puerta y los pies hacia la vitrina.', pose: 'florinda_crying' },
        { speaker: 'DEFENSA', text: '(Cayó hacia la puerta. O sea que cuando le pegaron le estaba dando la espalda a la vitrina. Me lo guardo.)', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: 'Una última cosa, señora, y se la pregunto con todo respeto: ¿usted vio el golpe?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: '...No. Cuando yo llegué ya estaba en el suelo.', pose: 'florinda_idle' },
        { speaker: 'JUEZ', text: '¡Cáspita! Que quede asentado: la testigo no presenció la agresión.', sfx: 'gavel', pose: 'judge_shock' },
        { speaker: 'SUPER SAM', text: '¡Objection! ¡No hace falta ver caer el árbol para saber quién traía el hacha!', pose: 'supersam_case1_slam', sfx: 'desk_slam' },
        { speaker: 'DEFENSA', text: 'Salvo que el hacha sea de juguete, señor fiscal.', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'c1_d1t1_4',
      speaker: 'FLORINDA',
      pose: 'florinda_crying',
      text: 'Y la vitrina hecha añicos y mi chicharra de oro ya no estaba. Se la llevó él. ¿Quién más?',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO! ¿Cómo era la chicharra, señora?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'FLORINDA', text: '¡Preciosa! Oro macizo, un kilo doscientos, con la filigrana de canto vivo. Cabe en las dos manos.', pose: 'florinda_idle' },
        { speaker: 'DEFENSA', text: 'Un kilo doscientos de oro. Eso no se esconde en una bolsa del pantalón.', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: '¡Pues por eso se la llevó él!', pose: 'florinda_angry' },
        { speaker: 'DEFENSA', text: '(Está diciendo "él" porque no había nadie más a quién decírselo. No está mintiendo: está rellenando un hueco.)', pose: 'donramon_idle' }
      ],
      contradiction: {
        evidence: ['parte_detencion'],
        successDialogue: CASE1_D1_T1_SUCCESS
      }
    }
  ]
};
