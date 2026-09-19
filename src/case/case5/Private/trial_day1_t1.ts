// @Architecture(descriptionShort="Case 5 day-1 Nicanor testimony one", type="data", icon="layers")
/**
 * Case 5 Trial Day 1 — Testimony 1, Nicanor Tolentino (spec §11.2).
 */

import type { ContradictionRule, DialogueLine, Testimony } from '../../../types/index.js';
import { CASE5_D1_T1_FORENSE_SUCCESS, CASE5_D1_T1_LIBRO_SUCCESS } from './trial_day1_success.js';

const MOMENTO: DialogueLine = {
  speaker: 'DEFENSA',
  text: '¡UN MOMENTO!',
  cutin: 'objection_un_momento',
  sfx: 'whoosh',
  pose: 'chapulin_point'
};

/** Declaraciones 3 y 4 sostienen la misma contradicción horaria: comparten la regla. */
const CASE5_D1_T1_CONTRADICTION: ContradictionRule = {
  evidence: ['informe_forense_c5'],
  successDialogue: CASE5_D1_T1_FORENSE_SUCCESS,
  followUp: {
    evidence: ['libro_visitas'],
    prompt: '¿A quién no le exige firma ese libro?',
    successDialogue: CASE5_D1_T1_LIBRO_SUCCESS
  }
};

export const CASE5_TESTIMONY_1: Testimony = {
  title: 'Testimonio: Nadie más entró esa tarde',
  witness: 'Nicanor Tolentino',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'c5_d1t1_1',
      speaker: 'NICANOR',
      pose: 'nicanor_idle',
      text: 'Yo abro a las ocho y cierro a las siete, y en medio no me muevo del mostrador más que para encerar.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Y cuándo encera usted?', pose: 'chapulin_point' },
        { speaker: 'NICANOR', text: 'Los sábados de cuatro a cinco, joven. Digo, licenciado. Los sábados, porque no hay público.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: '¡El cuatro de diciembre fue sábado!', pose: 'chapulin_panic' },
        { speaker: 'NICANOR', text: 'Y encere de cuatro a cinco, sin quitarle la vista a la puerta. Se encera de espaldas, pero se encera mirando.', pose: 'nicanor_escoba' },
        { speaker: 'JUEZ', text: '¿Se puede encerar mirando la puerta?', pose: 'judge_thinking' },
        { speaker: 'NICANOR', text: 'Señor juez, con todo respeto: yo puedo encerar dormido.', pose: 'nicanor_idle' },
        { speaker: 'SUPER SAM', text: '¡Ahí lo tiene, Your Honor! ¡Un testigo con treinta y un años de experiencia en encerar!', pose: 'supersam_point' },
        { speaker: 'DEFENSA', text: '(No se está burlando de él. Lo está usando de muro.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d1t1_2',
      speaker: 'NICANOR',
      pose: 'nicanor_idle',
      text: 'El cuatro de diciembre firmaron catorce personas. La última fue el licenciado Valdés, a las cuatro cuarenta.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Catorce personas. ¿Quiénes?', pose: 'chapulin_point' },
        { speaker: 'NICANOR', text: 'Nueve pasantes, dos actuarios, una señora que venía por un acta de nacimiento de 1931, un perito de valuación en la mañana y su licenciado.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: '¿Y todos salieron?', pose: 'chapulin_idle' },
        { speaker: 'NICANOR', text: 'Todos, con su hora. El libro lo puede contar usted mismo si sabe contar.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: '¡Sé contar hasta veinticuatro!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: '(...y ahí es donde me atoré esta mañana.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d1t1_3',
      speaker: 'NICANOR',
      pose: 'nicanor_idle',
      text: 'A las cinco menos dos bajó, firmó su salida, y la hora se la puse yo con mi pluma.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Usted vio al licenciado bajar?', pose: 'chapulin_point' },
        { speaker: 'NICANOR', text: 'Lo vi bajar la escalera, cruzar el vestíbulo y firmar. Le pregunté si había encontrado lo que buscaba.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: '¿Y qué contestó?', pose: 'chapulin_idle' },
        { speaker: 'NICANOR', text: 'Dijo: «Ojalá que no.» Yo no le entendí y no pregunté.', pose: 'nicanor_sweat' },
        { speaker: 'DON RAMÓN', text: '(No le entendí yo tampoco, don Nicanor. Todavía.)', pose: 'donramon_sweat' },
        { speaker: 'SUPER SAM', text: '¡«Ojalá que no»! ¡Your Honor, que conste en actas la frase de un hombre que acababa de cometer un homicidio!', pose: 'supersam_slam', sfx: 'desk_slam' },
        { speaker: 'DEFENSA', text: '¡PROTESTO! ¡Eso es interpretar, no es declarar!', sfx: 'desk_slam', cutin: 'objection_protesto', pose: 'chapulin_slam' },
        { speaker: 'JUEZ', text: 'Concedido. Consta la frase, no la interpretación.', pose: 'judge_neutral' }
      ],
      contradiction: CASE5_D1_T1_CONTRADICTION
    },
    {
      id: 'c5_d1t1_4',
      speaker: 'NICANOR',
      pose: 'nicanor_idle',
      text: 'Después de él no entró nadie y no salió nadie. A las cinco treinta y cinco subí a cerrar y ahí estaba el pobre señor.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Media hora larga, don Nicanor. ¿Qué hizo usted en esa media hora?', pose: 'chapulin_point' },
        { speaker: 'NICANOR', text: 'Terminé de encerar, guardé la enceradora, me tomé un café y subí.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: '¿Oyó algo arriba?', pose: 'chapulin_idle' },
        { speaker: 'NICANOR', text: 'Con la caldera y los dos secadores puestos al máximo, licenciado, ahí arriba no se oye ni el juicio final.', pose: 'nicanor_sweat' },
        { speaker: 'DEFENSA', text: '(Otra vez los secadores. Y otra vez nadie se detiene.)', pose: 'chapulin_idle' }
      ],
      contradiction: CASE5_D1_T1_CONTRADICTION
    }
  ]
};
