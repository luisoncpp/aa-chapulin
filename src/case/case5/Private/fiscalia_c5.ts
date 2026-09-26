// @Architecture(descriptionShort="Case 5 day 3 prosecutor office investigation scene", type="data", icon="layers")
/**
 * Caso 5, Día 3 — Despacho del agente del ministerio público (`fiscalia_c5`). Spec §14.2.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_FISCALIA_C5_HOTSPOTS } from './fiscalia_c5_hotspots.js';
import { CASE5_FISCALIA_C5_TALKS } from './fiscalia_c5_talks.js';

export const CASE5_FISCALIA_C5: InvestigationScene = {
  title: 'Despacho del Agente del Ministerio Público',
  name: 'Fiscalía',
  bg: 'assets/bg_fiscalia.webp',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  idlePose: 'supersam_sweat',
  intro: [
    { speaker: 'NARRADOR', text: '8 de diciembre, 11:20 AM. Despacho del agente del ministerio público Sam Sullivan.', bg: 'assets/bg_fiscalia.webp', furniture: 'none', bgm: 'detention_center' },
    { speaker: 'NARRADOR', text: 'Una calculadora de manivela, un cronómetro de bolsillo y, en un rincón, una bolsa de lona doblada y vacía.' },
    { speaker: 'SUPER SAM', text: 'Counselor.', pose: 'supersam_sweat' },
    { speaker: 'DEFENSA', text: 'Señor fiscal.', pose: 'chapulin_idle' },
    { speaker: 'SUPER SAM', text: 'Si viene a que retire la acusación, la respuesta es no. Si viene a que le dé una prueba, la respuesta es no.', pose: 'supersam_point' },
    { speaker: 'SUPER SAM', text: 'Si viene a preguntarme por qué tengo cara de no haber dormido, la respuesta también es no.', pose: 'supersam_sweat' },
    { speaker: 'DEFENSA', text: 'Vengo por el oficio de la diligencia.', pose: 'chapulin_point' },
    { speaker: 'SUPER SAM', text: '...Ah.', pose: 'supersam_sweat' },
    { speaker: 'SUPER SAM', text: 'Ése sí se lo doy.', pose: 'supersam_sweat' }
  ],
  hotspots: CASE5_FISCALIA_C5_HOTSPOTS,
  talkOptions: CASE5_FISCALIA_C5_TALKS
};
