// @Architecture(descriptionShort="Case 4 day-2 courtroom intro and residue testimony", type="data", icon="layers")
/**
 * Case 4 Trial Day 2 — Opening and Testimony 3 (Super Sam y El Sargento).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE4_D2_T1_FORENSE_SUCCESS, CASE4_D2_T1_RESIDUOS_SUCCESS } from './trial_day2_success.js';

export const CASE4_DAY2_INTRO: DialogueLine[] = [
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Se reanuda la audiencia. La fiscalía basa su acusación en que los restos de pólvora en las manos del encausado lo señalan como el autor material del tiro de las 11:15 PM.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Yes, Your Honor! Gunpowder residue on both hands! ¡Gordon Botija detonó el arma homicida a las 11:15 de la noche!' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_slam', text: '¡PROTESTO! ¡Yo le voy al Necaxa y a la verdad científica!', cutin: 'objection_protesto', sfx: 'desk_slam' }
];

export const CASE4_TESTIMONY_3: Testimony = {
  title: 'Testimonio: Las Manos Tiznadas de Botija',
  witness: 'El Sargento',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'd2_t1_1',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'El acusado Gordon Botija fue hallado dentro de la suite con las manos y prendas impregnadas de residuos negros de pólvora.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Sargento Pazguato, ¿hace mención ese pliego de por qué mi cliente estaba en esa suite? ¡El señor Botija no acudió por gusto, sino por orden estricta de Don Cecilio para purgar la tubería de vapor del radiador!', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'Bueeeno... sí, mi Licenciado, él cargaba su llave inglesa de trabajo... pero don Sam me ordenó recalcar que ser sorprendido adentro en el segundo del estruendo basta y sobra para sentenciarlo.', pose: 'pazguato_sweat' },
        { speaker: 'SUPER SAM', text: 'Objection! Time is money! ¡Las órdenes laborales de fontanería no son salvoconducto para liquidar huéspedes! ¡Estar en el cuarto en el segundo del crimen es el 99% de la culpabilidad!', pose: 'supersam_slam', sfx: 'desk_slam' },
        { speaker: 'JUEZ', text: 'Es un hecho que el acusado tenía orden de mantenimiento, pero la fiscalía sostiene que aprovechó la ocasión para jalar el gatillo.', pose: 'judge_thinking' }
      ]
    },
    {
      id: 'd2_t1_2',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'Esos residuos demuestran de manera indiscutible que Botija accionó el arma homicida a las 11:15 PM.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Sargento, ¿bajo qué criterio científico asentó usted en el informe oficial que ese tizne en las palmas y mangas de Botija es pólvora balística?', pose: 'donramon_sweat' },
        { speaker: 'SARGENTO', text: '¡Ay, mi Licenciado! La puritita verdad es que don Sam me presionó para redactar la carátula basándome en una simple inspección ocular a ojo de buen cubero... ¡sin esperar los peritajes del laboratorio central!', pose: 'pazguato_sweat' },
        { speaker: 'SUPER SAM', text: 'Simple logic, defense! Time is money! Polvo negro adherido a la piel y mangas tras un tiro de bala. ¿Qué otra cosa va a ser? ¡En Wall Street no perdemos preciosos dólares con microscopios cuando el indicio salta a la vista!', pose: 'supersam_point' },
        { speaker: 'DEFENSA', text: '(¡Aquí está la grieta! Un peritaje ocular sin base científica.)', pose: 'donramon_point' }
      ],
      contradiction: {
        evidence: ['residuos_manos'],
        successDialogue: CASE4_D2_T1_RESIDUOS_SUCCESS,
        followUp: {
          evidence: ['informe_forense'],
          prompt: '¿Qué prueba demuestra la causa y hora real del deceso?',
          successDialogue: CASE4_D2_T1_FORENSE_SUCCESS
        }
      }
    },
    {
      id: 'd2_t1_3',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'El impacto de bala en el pecho provocó la muerte instantánea al momento de oírse la detonación.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Sargento Pazguato, ¿está la policía facultada para asegurar que el proyectil en el pecho fue lo que fulminó instantáneamente al señor Gómez a las 11:15 PM?', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'Bueno... El señor Gómez tenía el agujero en la camisa y sangre coagulada. Al oír el trallazo a las 11:15 PM y hallarlo tieso, don Sam me obligó a asentar la muerte instantánea en el acta... ¡pero el laboratorio forense central aún no remitía el análisis patológico de los tejidos!', pose: 'pazguato_sweat' },
        { speaker: 'SUPER SAM', text: '¡Irrelevant! Time is money! ¡Un balazo en el corazón mata a cualquiera en un microsegundo! ¡No intente desviar la atención del jurado con tratados médicos!', pose: 'supersam_slam', sfx: 'desk_slam' }
      ],
      contradiction: {
        evidence: ['informe_forense'],
        successDialogue: CASE4_D2_T1_FORENSE_SUCCESS
      }
    },
    {
      id: 'd2_t1_4',
      speaker: 'SARGENTO',
      pose: 'pazguato_sweat',
      text: 'Por lo tanto, la muerte ocurrió a las 11:15 PM y cualquier otra teoría es una pérdida intolerable de tiempo.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Sargento, ¿se atreve usted a sostener bajo juramento que el homicidio ocurrió a las 11:15 PM sólo por la urgencia del Fiscal de cerrar el expediente?', pose: 'donramon_slam', sfx: 'desk_slam' },
        { speaker: 'SARGENTO', text: '¡Ay, Madrecita santa! Yo sólo leí lo que don Sam redactó con su pluma dorada... ¡me advirtió que si demoraba el trámite me descontaba la quincena y el aguinaldo!', pose: 'pazguato_sweat' },
        { speaker: 'SUPER SAM', text: 'Time is money, defense! ¡Las pruebas circunstanciales son aplastantes! ¡Cadáver reciente, cuarto cerrado, manos negras y estruendo de bala a las 11:15 PM! ¡Pido veredicto de culpabilidad inmediato antes del toque de campana de Wall Street!', pose: 'supersam_point' }
      ]
    }
  ]
};
