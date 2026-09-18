// @Architecture(descriptionShort="Case 1 day 2 how-the-thief-entered testimony and pointing 1", type="data", icon="layers")
/**
 * Caso 1, Día 2 — Testimonio 2, El Tripaseca (§12.3) y Señalamiento 1.
 * Las cajas del señalamiento se midieron sobre `examine_vitrina_rota.webp`
 * ([[docs/lessons-learned/present-point-cover-crop.md]]): revisar al generar el arte.
 */

import type { DialogueLine, PointTargetContradiction, Testimony } from '../../../types/index.js';
import { CASE1_CALL_TRIPASECA_D2_T3 } from './witness_calls.js';

const VITRINA_POINT_TARGET: PointTargetContradiction = {
  targetEvidenceId: 'vitrina_rota',
  promptQuestion: 'Señala en la lámina: ¿qué demuestra que nadie le pegó a esta vitrina desde afuera?',
  imageAsset: 'assets/examine_vitrina_rota.webp',
  zones: [
    { id: 'cristal_afuera', bounds: [12, 58, 65, 98], isCorrect: true, failureDialogue: [] },
    { id: 'pedestal', bounds: [42, 42, 73, 84], isCorrect: false, failureDialogue: [
      { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Eso no le dice a esta corte de qué lado vino el golpe, licenciado.', sfx: 'damage' },
      { speaker: 'SUPER SAM', pose: 'supersam_point', text: '¡Un punto menos de credibilidad para la defensa! ¡Y van!' },
      { speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'Calma, Don Ramón. Acuérdese de lo que dijo el velador: dónde pisó el vidrio.' }
    ] },
    { id: 'rejilla', bounds: [72, 48, 81, 63], isCorrect: false, failureDialogue: [
      { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Eso no le dice a esta corte de qué lado vino el golpe, licenciado.', sfx: 'damage' },
      { speaker: 'SUPER SAM', pose: 'supersam_point', text: '¡Un punto menos de credibilidad para la defensa! ¡Y van!' },
      { speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'Calma, Don Ramón. Acuérdese de lo que dijo el velador: dónde pisó el vidrio.' }
    ] },
    { id: 'jaula_perico', bounds: [0, 52, 25, 92], isCorrect: false, failureDialogue: [
      { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Eso no le dice a esta corte de qué lado vino el golpe, licenciado.', sfx: 'damage' },
      { speaker: 'SUPER SAM', pose: 'supersam_point', text: '¡Un punto menos de credibilidad para la defensa! ¡Y van!' },
      { speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'Calma, Don Ramón. Acuérdese de lo que dijo el velador: dónde pisó el vidrio.' }
    ] },
    { id: 'regla_testigo', bounds: [22, 85, 54, 97], isCorrect: false, failureDialogue: [
      { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Ésa es la regla que dejó el perito, licenciado. Da la escala, no la dirección del golpe.', sfx: 'damage' },
      { speaker: 'SUPER SAM', pose: 'supersam_point', text: '¡Un punto menos de credibilidad para la defensa! ¡Y van!' },
      { speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'Calma, Don Ramón. Acuérdese de lo que dijo el velador: dónde pisó el vidrio.' }
    ] },
    { id: 'vitrina_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: [
      { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Eso no le dice a esta corte de qué lado vino el golpe, licenciado.', sfx: 'damage' },
      { speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'Calma, Don Ramón. Acuérdese de lo que dijo el velador: dónde pisó el vidrio.' }
    ] }
  ]
};

const CASE1_D2_T2_SUCCESS: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡AQUÍ, señor juez! ¡El vidrio está TODO del lado de afuera!', sfx: 'desk_slam', cutin: 'objection_toma_eso', pose: 'donramon_slam', bgm: 'objection' },
  { speaker: 'DEFENSA', text: 'En abanico, hacia la puerta, hasta seis metros. Por eso el velador pisó vidrio a dos pasos de entrar.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Y el marco está doblado hacia afuera, no hacia adentro.', pose: 'donramon_idle' },
  { speaker: 'TRIPASECA', text: '...¿Y eso qué?', pose: 'tripaseca_sweat' },
  { speaker: 'DEFENSA', text: 'Que un vidrio no se va del lado por donde le pegaron, señor Tripaseca. Usted mismo lo dijo hace un minuto: "eso lo sabe cualquiera".', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Esta vitrina se rompió desde adentro.', pose: 'donramon_slam', sfx: 'desk_slam', updateProfile: 'perfil_tripaseca' },
  { speaker: 'NARRADOR', text: 'La sala estalla.', sfx: 'realization', bgm: 'objection' },
  { speaker: 'JUEZ', text: '¡ORDEN! ¡ORDEN EN LA SALA!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: '¡¿Desde adentro?! ¡Es una vitrina de ochenta centímetros!', pose: 'judge_shock' },
  { speaker: 'SUPER SAM', text: '¡IMPOSSIBLE! ¡Ahí no cabe un hombre! ¡No cabe ni un niño!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'Estamos de acuerdo, señor fiscal. Ahí no cabe un hombre.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Entonces la defensa tendrá que explicarle a esta corte quién rompió una vitrina cerrada desde el lado de adentro.', pose: 'judge_neutral' }
];

const CASE1_D2_T2_FOLLOWUP: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'Nadie cabe, señor juez. Nadie... de este tamaño.', pose: 'donramon_point', bgm: 'pursuit' },
  { speaker: 'DEFENSA', text: 'Pastillas de Chiquitolina. Reducen a quien las toma al tamaño de un ratón durante quince minutos. Y reducen también lo que trae puesto y lo que trae en la mano.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: '¡¿Quince minutos?!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Quince. Ni uno más. Y cuando se acaban, uno vuelve a su tamaño donde esté.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Señor juez: el ladrón no rompió la vitrina. El ladrón creció dentro de la vitrina.', pose: 'donramon_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso' },
  { speaker: 'NARRADOR', text: 'Silencio. Después, el escándalo.', sfx: 'realization' },
  { speaker: 'SUPER SAM', text: '¡¡UN MOMENTO!! ¡¡UN MOMENTO!!', sfx: 'desk_slam', cutin: 'objection_un_momento', pose: 'supersam_slam' },
  { speaker: 'SUPER SAM', text: '¡Your Honor! ¡¿Y QUIÉN, en toda esta ciudad, carga pastillas que encogen a la gente?!', pose: 'supersam_point' },
  { speaker: 'SUPER SAM', text: '¡EL ACUSADO! ¡Vienen listadas en su propio informe de detención! ¡La defensa acaba de acusar a su propio cliente!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'CHAPULIN', text: '¡Chanfle! ¡Don Ramón, creo que nos ganamos solitos!', pose: 'chapulin_panic' },
  { speaker: 'DEFENSA', text: '(Calma. Calma, Don Ramón. Esto ya lo viste venir desde el patio, esta mañana.)', pose: 'donramon_sweat' },
  { speaker: 'DEFENSA', text: '...Señor fiscal, le agradezco que haya traído usted el informe de detención. Me ahorra el viaje.', pose: 'donramon_idle', updateEvidence: 'parte_detencion' },
  { speaker: 'DEFENSA', text: 'Porque el parte trae un anexo de laboratorio que la fiscalía no leyó.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'La caja de pastillas que traía mi cliente venía sellada de fábrica. Doce pastillas de doce. Con el precinto entero.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'Mi cliente no se tomó ninguna esa noche. Y nadie se encoge con una pastilla que sigue en la caja.', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: '...Grrr.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'Entonces alguien más consiguió esas pastillas.', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Alguien más, señor juez. Alguien que además sabía la medida exacta de una rejilla, la hora exacta de un velador y el mes exacto de una chapa vencida.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: '(Todavía no. Falta la foto.)', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'La corte quiere terminar con la última pieza.', pose: 'judge_neutral' },
  ...CASE1_CALL_TRIPASECA_D2_T3
];

export const CASE1_TESTIMONY_4: Testimony = {
  title: 'Testimonio: Cómo entró el ladrón',
  witness: 'El Tripaseca',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'c1_d2t2_1',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'Ya que el señor juez quiere saber cómo entró, yo se lo dije a la ley desde el principio: por la puerta de carga.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO! ¿Usted le dijo eso a la policía la noche del veintiocho?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'Se lo dije al señor fiscal en persona.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: 'Qué curioso: en el informe de detención no aparece una sola línea sobre la puerta de carga.', pose: 'donramon_idle' },
        { speaker: 'SUPER SAM', text: '¡Es que el caso ya estaba resuelto! ¡Uno no escribe lo que ya no hace falta!', pose: 'supersam_sweat' },
        { speaker: 'DEFENSA', text: 'Uno escribe todo, señor fiscal. Para eso le pagan.', pose: 'donramon_idle' },
        { speaker: 'JUEZ', text: 'La corte le pide a la fiscalía que se abstenga de decidir qué hace falta.', pose: 'judge_neutral' }
      ]
    },
    {
      id: 'c1_d2t2_2',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'Esa puerta tiene la chapa vencida desde marzo. Se empuja y ya. No hay que ser mago.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO! ¿Desde marzo, dijo usted?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'Desde marzo.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: '¿Y usted cómo sabe desde qué mes está vencida la chapa de la puerta de servicio de un museo?', pose: 'donramon_shock' },
        { speaker: 'TRIPASECA', text: '...Pos se ve. Se ve que está vieja.', pose: 'tripaseca_sweat' },
        { speaker: 'DEFENSA', text: '"Vieja" se ve. "Marzo" no se ve, señor Tripaseca. Marzo se sabe.', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'Se lo habré oído a alguien. Uno oye cosas.', pose: 'tripaseca_sweat' },
        { speaker: 'JUEZ', text: '¡Cáspita! Que quede asentado en el acta.', sfx: 'gavel', pose: 'judge_shock' },
        { speaker: 'SUPER SAM', text: '¡Objection! ¡El testigo camina por ese callejón todos los días!', pose: 'supersam_slam', sfx: 'desk_slam' },
        { speaker: 'DEFENSA', text: 'Ayer dijo que pasaba "por sus asuntos". Hoy pasa todos los días. Póngase de acuerdo con su testigo, señor fiscal.', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'c1_d2t2_3',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'La codiciada chicharra estaba adentro de la vitrina, pero él estaba afuera y un vidrio lo separaba... así que no se complicó: ¡pum!, le reventó el cristal de un garrotazo.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO! Descríbame el garrotazo a la vitrina.', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'Pues así, de arriba, ¡pum! Y el vidrio para adentro.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: '¿Para adentro?', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: 'Pues claro. Uno le pega a un vidrio desde afuera y el vidrio se va para adentro. Eso lo sabe cualquiera.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: '(Eso lo sabe cualquiera. Y tiene toda la razón.)', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: '(¡Don Ramón! ¡El velador dijo que pisó vidrio a dos pasos de la puerta!)', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: '(Ya lo sé, joven. Ya lo sé. Ahora vamos a verlo en la lámina.)', pose: 'donramon_idle' }
      ],
      contradiction: {
        evidence: ['vitrina_rota'],
        pointTarget: VITRINA_POINT_TARGET,
        successDialogue: CASE1_D2_T2_SUCCESS,
        followUp: {
          evidence: ['pastillas_chiquitolina'],
          prompt: '¿Quién cabe dentro de esa vitrina?',
          successDialogue: CASE1_D2_T2_FOLLOWUP
        }
      }
    },
    {
      id: 'c1_d2t2_4',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'Agarró la chicharra y se echó a correr para el vestíbulo, a la puerta grande.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO! ¿Usted lo vio correr hacia el vestíbulo?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'Lo vi. Derechito a la puerta grande.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: 'Desde un tambo de basura, por un ventanuco de cuarenta centímetros.', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: 'Desde ahí mero. Y hay una foto que me da la razón, no se me olvide.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: '(No se me olvida. Es lo único en lo que he pensado desde que la vi esta mañana.)', pose: 'donramon_idle' }
      ]
    }
  ]
};
