// @Architecture(descriptionShort="Case 5 day 3 prosecutor office talk chain and unlocks", type="data", icon="layers")
/**
 * Caso 5, Día 3 — conversaciones con Super Sam. Spec §14.2.
 */

import type { TalkOption } from '../../../types/index.js';

export const CASE5_FISCALIA_C5_TALKS: TalkOption[] = [
  {
    id: 'pedir_oficio',
    label: 'Deme el oficio de la diligencia',
    dialogue: [
      { speaker: 'SUPER SAM', text: 'Oficio 4471, del veintiséis de noviembre. Mío, firmado por mí, ordenado por mí.', pose: 'supersam_sweat' },
      { speaker: 'DEFENSA', text: '«Diligencia de cotejo documental. Archivo Judicial. Cuatro de diciembre, 17:00.»', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '«Y al calce, la lista de distribución: c.c.p. Actuaría adscrita. c.c.p. Dirección del Archivo. c.c.p. Sindicatura de la quiebra 114/1971.»', pose: 'chapulin_point' },
      { speaker: 'SUPER SAM', text: 'Es un trámite, counselor. Se notifica a quien tiene interés jurídico. Lo hace la máquina, no el hombre.', pose: 'supersam_sweat' },
      { speaker: 'DEFENSA', text: 'Señor fiscal, ¿usted sabía que ese oficio salía de aquí con esa lista?', pose: 'chapulin_point' },
      { speaker: 'SUPER SAM', text: '...Yo firmo ciento cuarenta oficios a la semana.', pose: 'supersam_sweat' },
      { speaker: 'SUPER SAM', text: 'Y hasta anteayer creía que eso era eficiencia.', pose: 'supersam_sweat', addEvidence: 'oficio_diligencia' }
    ]
  },
  {
    id: 'por_que_tardo',
    label: '¿Por qué tardó dieciocho días?',
    unlockedByTalk: 'pedir_oficio',
    condition: (flags) => Boolean(flags.examined_hotspot_bolsa),
    dialogue: [
      { speaker: 'SUPER SAM', text: '...¿Cómo dice?', pose: 'supersam_sweat' },
      { speaker: 'DEFENSA', text: 'El señor Lengua le escribió el ocho de noviembre. Usted ordenó la diligencia el veintiséis.', pose: 'chapulin_point' },
      { speaker: 'DEFENSA', text: 'Dieciocho días, señor fiscal. Usted, que cobra por minuto.', pose: 'chapulin_idle' },
      { speaker: 'SUPER SAM', text: 'Era un preso ofreciendo un fichero a cambio de menos condena, counselor. Eso me llega todas las semanas.', pose: 'supersam_sweat' },
      { speaker: 'SUPER SAM', text: 'Presos que ofrecen mapas del tesoro. Presos que ofrecen nombres. Presos que ofrecen a su madre.', pose: 'supersam_sweat' },
      { speaker: 'DEFENSA', text: '¿Y qué hizo usted con éste?', pose: 'chapulin_idle' },
      { speaker: 'SUPER SAM', text: 'Lo puse en un cajón.', pose: 'supersam_sweat' },
      { speaker: 'SUPER SAM', text: 'Y el veintiséis lo saqué porque estaba limpiando el cajón.', pose: 'supersam_sweat' },
      { speaker: 'NARRADOR', text: 'Super Sam se queda callado un momento largo, con la mano sobre la calculadora.' },
      { speaker: 'SUPER SAM', text: 'Counselor. Vaya usted al penal y pida los efectos de ese hombre.', pose: 'supersam_sweat' },
      { speaker: 'DEFENSA', text: '¿Y por qué me lo dice usted?', pose: 'chapulin_idle' },
      { speaker: 'SUPER SAM', text: 'Porque yo no los pedí.', pose: 'supersam_sweat' },
      { speaker: 'SUPER SAM', text: 'Time is money, counselor. Y hay días en que a uno le sale carísimo.', pose: 'supersam_sweat', unlockLocation: 'penal_efectos' }
    ]
  }
];
