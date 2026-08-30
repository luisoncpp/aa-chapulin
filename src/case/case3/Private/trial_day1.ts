// @Architecture(descriptionShort="Case 3 day-1 courtroom intro and Pazguato testimony", type="data", icon="layers")
/**
 * Case 3 Trial Day 1 — Opening and Testimony 1 (Sargento Pazguato).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE3_T1_SUCCESS } from './trial_day1_success.js';

export const CASE3_TRIAL_INTRO: DialogueLine[] = [
  { bg: 'assets/bg_judge.jpg', speaker: 'JUEZ', pose: 'judge_gavel', text: '¡Silencio en la sala! Se abre el juicio contra el Doctor Chapatín.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.jpg', speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'Time is money, Your Honor! ¡Dos mil testigos oyeron a la víctima gritar el nombre del acusado!', sfx: 'desk_slam' },
  { bg: 'assets/bg_courtroom.jpg', speaker: 'SUPER SAM', pose: 'supersam_point', text: '¡Y noventa segundos después lo hallaron encima del cuerpo! ¡Pido veredicto antes de mi hora de la comida!' },
  { bg: 'assets/bg_defense.jpg', speaker: 'DEFENSA', pose: 'donramon_slam', text: '¡PROTESTO! ¡Con permisito, dijo Monchito!', sfx: 'desk_slam' },
  { bg: 'assets/bg_defense.jpg', speaker: 'DEFENSA', pose: 'donramon_point', text: 'La defensa sostiene que en esa cabina no se cometió ningún crimen.' },
  { bg: 'assets/bg_judge.jpg', speaker: 'JUEZ', pose: 'judge_shock', text: '¿Cómo que no...? ¡Si ahí estaba la víctima!' },
  { bg: 'assets/bg_defense.jpg', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'Ahí estaba la víctima, señor Juez. Que no es lo mismo.' }
];

export const CASE3_TESTIMONY_1: Testimony = {
  title: 'Testimonio: El hallazgo en la Cabina B',
  witness: 'Sargento Refugio Pazguato',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'stmt1_1',
      speaker: 'PAZGUATO',
      pose: 'pazguato_idle',
      text: 'A las 11:03 el grito de la víctima salió al aire y lo oímos hasta en la Plaza.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿Usted estaba en la plaza cuando sonó el grito?', pose: 'donramon_idle' },
        { speaker: 'PAZGUATO', text: '¡A sus órdenes! Sí, mi Licenciado. Corrí enseguida al edificio.', pose: 'pazguato_saludo' }
      ]
    },
    {
      id: 'stmt1_2',
      speaker: 'PAZGUATO',
      pose: 'pazguato_idle',
      text: 'Subí volando con el joven Ñoño y hallamos al doctor arrodillado sobre el señor Barriga.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿Qué más halló en esa cabina además del doctor y la víctima?', pose: 'donramon_idle' },
        { speaker: 'PAZGUATO', text: '¡Ah! Y también había otra cosa tirada en el suelo...', pose: 'pazguato_sweat' }
      ]
    },
    {
      id: 'stmt1_2b',
      speaker: 'PAZGUATO',
      pose: 'pazguato_sweat',
      text: '¡Ah! Y también estaba tirada la bolsa de papel del doctor. Adentro traía una ampolleta vacía de cardiotónico y una jeringa recién usada.',
      unlockedBy: 'stmt1_2',
      pressText: [
        { speaker: 'DEFENSA', text: '¿Recién usada? Sargento, eso significa que el doctor inyectó a alguien poco antes de subir.', pose: 'donramon_idle', addEvidence: 'bolsa_papel' },
        { speaker: 'SUPER SAM', text: 'O que pensaba inyectar a la víctima. Time is money, don\'t waste it!', pose: 'supersam_point' }
      ]
    },
    {
      id: 'stmt1_3',
      speaker: 'PAZGUATO',
      pose: 'pazguato_idle',
      text: 'El arma, o sea el trofeo, estaba ahí mismito, tal y como lo dejó el criminal.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿Tal y como lo dejó el criminal? ¿Usted no movió nada?', pose: 'donramon_idle' },
        { speaker: 'PAZGUATO', text: 'Bueno... es que para la foto se veía mejor acomodadito, y yo lo cambié de lugar antes de...', pose: 'pazguato_sweat' },
        { speaker: 'SUPER SAM', text: 'YOUR SALARY IS CUT! ¡Otra quincena!', pose: 'supersam_slam', sfx: 'desk_slam' },
        { speaker: 'PAZGUATO', text: 'Con esta van cuatro, mi fiscal. A este paso yo le voy a deber a usted.', pose: 'pazguato_sweat' }
      ],
      contradiction: { evidence: ['lentes_barriga', 'informe_medico'], successDialogue: CASE3_T1_SUCCESS }
    },
    {
      id: 'stmt1_4',
      speaker: 'PAZGUATO',
      pose: 'pazguato_idle',
      text: 'En todo el segundo piso no había nadie más... nomás don Aniceto, amarrado en la bodega.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'PAZGUATO', text: 'Pobre don Aniceto. Al que le hicieron eso no le tembló la mano.', pose: 'pazguato_sweat' }
      ]
    }
  ]
};
