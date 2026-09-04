// @Architecture(descriptionShort="Case 4 day-2 courtroom intro and residue testimony", type="data", icon="layers")
/**
 * Case 4 Trial Day 2 — Opening and Testimony 3 (Super Sam y El Sargento).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE4_D2_T1_FORENSE_FOLLOWUP, CASE4_D2_T1_RESIDUOS_SUCCESS } from './trial_day2_success.js';

export const CASE4_DAY2_INTRO: DialogueLine[] = [
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Se reanuda la audiencia. La fiscalía basa su acusación en que los restos de pólvora en las manos del encausado lo señalan como el autor material del tiro de las 11:15 PM.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Yes, Your Honor! Gunpowder residue on both hands! ¡Gordon Botija detonó el arma homicida a las 11:15 de la noche!' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_slam', text: '¡PROTESTO! ¡Yo le voy al Necaxa y a la verdad científica!', cutin: 'objection_protesto', sfx: 'desk_slam', bgm: 'objection' }
];

export const CASE4_TESTIMONY_3: Testimony = {
  title: 'Testimonio: Las Manos Tiznadas de Botija',
  witness: 'Super Sam y El Sargento',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'd2_t1_1',
      speaker: 'SUPER SAM',
      pose: 'supersam_point',
      text: 'Las evidencias físicas son indiscutibles: el acusado estaba dentro de la habitación del crimen.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¡Un momento, señor Fiscal! El señor Botija no estaba en esa suite por gusto propio ni para delinquir. ¡Acudió por órdenes de Don Cecilio para purgar la tubería de vapor del radiador!', pose: 'donramon_idle' },
        { speaker: 'SUPER SAM', text: 'Objection! Time is money! ¡Las órdenes laborales no son salvoconducto para asesinar clientes! ¡Estar presente en el cuarto en el segundo del crimen es el 99% de la culpabilidad!', pose: 'supersam_slam', sfx: 'desk_slam' },
        { speaker: 'JUEZ', text: 'Es verdad que Botija tenía orden de mantenimiento, pero la fiscalía sostiene que aprovechó el momento para jalar el gatillo.', pose: 'judge_thinking' }
      ]
    },
    {
      id: 'd2_t1_2',
      speaker: 'SUPER SAM',
      pose: 'supersam_point',
      text: 'El polvo negro en sus palmas y mangas es pólvora balística producida por accionar un arma de fuego.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿Y bajo qué criterio científico afirma la fiscalía que ese tizne negro en las manos de Botija es pólvora balística?', pose: 'donramon_sweat' },
        { speaker: 'SUPER SAM', text: 'Simple logic, defense! Polvo negro adherido a la piel y mangas tras un tiro de bala. ¿Qué otra cosa va a ser? ¡En Nueva York no perdemos el tiempo con microscopios cuando el indicio salta a la vista!', pose: 'supersam_point' },
        { speaker: 'SARGENTO', text: 'Bueno, mi Licenciado... Don Sam me ordenó redactar la carátula basándome en una simple inspección ocular a ojo de buen cubero...', pose: 'pazguato_sweat' }
      ],
      contradiction: {
        evidence: ['residuos_manos'],
        successDialogue: CASE4_D2_T1_RESIDUOS_SUCCESS,
        followUp: { evidence: ['informe_forense'], successDialogue: CASE4_D2_T1_FORENSE_FOLLOWUP }
      }
    },
    {
      id: 'd2_t1_3',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'El impacto en el pecho de la víctima provocó la muerte instantánea al momento de oírse la detonación.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Sargento Pazguato, ¿está la policía completamente segura de que el disparo en el pecho fue lo que acabó con la vida de Cuajinais?', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: 'Bueno... El señor Gómez tenía el agujero en la camisa y la sangre seca. Al oír el trallazo a las 11:15 PM y encontrarlo tieso, dimos por hecho que el plomo lo fulminó... pero el laboratorio central tardó en enviar los análisis químicos de los tejidos...', pose: 'pazguato_sweat' },
        { speaker: 'SUPER SAM', text: '¡Irrelevant! ¡Un balazo en el corazón mata a cualquiera! ¡No intente desviar la atención con tratados de anatomía!', pose: 'supersam_slam', sfx: 'desk_slam' }
      ]
    },
    {
      id: 'd2_t1_4',
      speaker: 'SUPER SAM',
      pose: 'supersam_point',
      text: 'A las 11:15 PM se consumó el asesinato; cualquier otra teoría es una pérdida intolerable de dólares.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Fiscal Sam, condenar a un inocente por ahorrarse diez minutos de juicio sería una monstruosidad judicial.', pose: 'donramon_slam', sfx: 'desk_slam' },
        { speaker: 'SUPER SAM', text: 'Time is money, defense! ¡Las pruebas circunstanciales son aplastantes! ¡Cadáver reciente, cuarto cerrado, manos negras y estruendo de bala a las 11:15 PM! ¡Pido veredicto inmediato antes de que caigan mis acciones en bolsa!', pose: 'supersam_point' }
      ]
    }
  ]
};
