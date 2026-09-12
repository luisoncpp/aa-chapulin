// @Architecture(descriptionShort="Case 2 day-2 intro and Peterete postal alibi testimony", type="data", icon="layers")
/**
 * Case 2 Trial Day 2 — Reopening and Testimony 1 (postal alibi).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';

export const CASE2_DAY2_INTRO: DialogueLine[] = [
  { bg: 'assets/bg_waiting_room.webp', furniture: 'none', speaker: 'NARRADOR', text: '30 de agosto, 3:00 PM. Tribunal Superior - Sala de Espera.', bgm: 'trial' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Se reanuda la sesión en el caso del Chanfle de Oro.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'Time is money! Your Honor, la fiscalía ha comprobado que el señor Peterete tiene una coartada de hierro a la hora del corte de luz.', sfx: 'desk_slam' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Estaba en la oficina postal con el cartero despachando encomiendas. ¡El acusado sigue siendo el único sospechoso viable!' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_slam', text: '¡La defensa exige que el señor Peterete vuelva al banquillo de los testigos!', sfx: 'desk_slam' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Concedido. La corte llama de nuevo al estrado al señor Peterete.' },
  { bg: 'assets/bg_witness.webp', speaker: 'PETERETE', pose: 'peterete_smug', text: 'Otra vez aquí. ¿También quiere mi nombre y mi ocupación, señoría? Son los mismos de ayer.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_thinking', text: 'Sigue usted bajo juramento, testigo. Eso también es lo mismo de ayer.' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'Con permisito, dijo Monchito. Hoy vengo a preguntarle por su coartada, no por sus títulos.' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_slam', text: '¡Y que sea rápido! Time is money, y llevamos dos días sin facturar un veredicto.', sfx: 'desk_slam' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Testigo, declare ante esta corte dónde estuvo a las 9:15 PM.', sfx: 'gavel' }
];

const T3_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: '¡Señor Peterete, su coartada es más falsa que un billete de tres dólares de Super Sam!', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'Hey! ¡Mis dólares son 100% auténticos!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: '¡Esta Multa de Tránsito y el Registro Postal demuestran que a las 9:30 PM el carrito estaba abandonado y no había cartero para recibirle nada!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'DEFENSA', text: '¡Usted mismo estampó un sello falso en el registro para fabricarse una coartada!', pose: 'donramon_point' },
  { speaker: 'PETERETE', text: '¡G-grrrk! ¡Maldito cartero holgazán!', pose: 'peterete_sweat' },
  { speaker: 'SUPER SAM', text: 'Your Honor... la fiscalía retira la coartada postal. Pero el acusado sigue siendo el único que estuvo dentro de la bóveda.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'Testigo, no se baje del estrado. Esta corte todavía no ha terminado con usted.', pose: 'judge_thinking' },
  { speaker: 'PETERETE', text: '¿Otra vez? Señoría, ya declaré dos veces. Mi nombre no ha cambiado en las últimas tres horas.', pose: 'peterete_sweat' },
  { speaker: 'DEFENSA', text: 'Su nombre no. Su historia sí, y van dos.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'Testifique ahora sobre la bóveda: explique a esta corte cómo salió de ahí el Chanfle de Oro.', pose: 'judge_gavel', sfx: 'gavel' }
];

export const CASE2_TESTIMONY_3: Testimony = {
  title: 'Testimonio: Mi Coartada en la Oficina Postal',
  witness: 'El Peterete',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'stmt3_1',
      speaker: 'PETERETE',
      pose: 'peterete_smug',
      text: 'Qué pérdida de tiempo tan lamentable. A las 9:15 PM yo estaba en la estafeta de correos entregando paquetes urgentes.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿Qué contenían esos paquetes tan urgentes?', pose: 'donramon_idle' },
        { speaker: 'PETERETE', text: 'Muestras de telas finas, nada de la incumbencia de este tribunal.', pose: 'peterete_thinking' }
      ]
    },
    {
      id: 'stmt3_2',
      speaker: 'PETERETE',
      pose: 'peterete_smug',
      text: 'El cartero Jaimito recibió mis envíos y estampó el sello oficial de las 9:30 PM en el libro de registro.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'PETERETE', text: 'El sello no miente, Licenciado. Pregúntele al cartero... si lo encuentra despierto.', pose: 'peterete_smug' }
      ],
      contradiction: { evidence: ['multa_transito', 'registro_postal'], successDialogue: T3_SUCCESS }
    },
    {
      id: 'stmt3_3',
      speaker: 'PETERETE',
      pose: 'peterete_smug',
      text: 'Estuve allí hasta las 9:45 PM conversando amenamente sobre la historia de Tangamandapio.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'PETERETE', text: 'Un pueblo fascinante. El cartero no deja de hablar de él... cuando no está roncando.', pose: 'peterete_thinking' }
      ],
      contradiction: { evidence: ['multa_transito', 'registro_postal'], successDialogue: T3_SUCCESS }
    },
    {
      id: 'stmt3_4',
      speaker: 'PETERETE',
      pose: 'peterete_smug',
      text: 'Por ende, me fue físicamente imposible estar cerca del generador o del ducto de aire.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'PETERETE', text: 'La física, Licenciado. Algo que un defensor de vecindad suele ignorar.', pose: 'peterete_smug' }
      ]
    }
  ]
};
