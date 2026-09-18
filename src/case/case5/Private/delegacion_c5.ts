// @Architecture(descriptionShort="Case 5 day 2 police station investigation scene", type="data", icon="layers")
/**
 * Caso 5, Día 2 — Delegación de policía (`delegacion_c5`). Spec §12.4.
 * Cierra la jornada entregando `expediente_serie`.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_DELEGACION_C5_TALKS } from './delegacion_c5_talks.js';

export const CASE5_DELEGACION_C5: InvestigationScene = {
  title: 'Delegación de Policía',
  name: 'Delegación',
  bg: 'assets/bg_delegacion.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: '7 de diciembre, 3:00 PM. Delegación. Sobre el escritorio del Sargento hay cinco legajos atados con listón y un café frío.', bg: 'assets/bg_delegacion.webp', furniture: 'none', bgm: 'investigation' },
    { speaker: 'SARGENTO', text: '¡A sus órdenes, mi Licenciado! No dormí.', pose: 'pazguato_saludo' },
    { speaker: 'DEFENSA', text: 'Sargento, tiene usted cara de martes.', pose: 'chapulin_idle' },
    { speaker: 'SARGENTO', text: 'Es que anoche me puse a hacer una cosa que no me pidió nadie, y cuando uno hace eso a mi edad, amanece así.', pose: 'pazguato_decidido' }
  ],
  hotspots: [
    {
      id: 'hotspot_legajos',
      label: 'Legajos sobre el escritorio',
      x: 84, y: 50, w: 16, h: 26,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Cinco legajos atados con listón rojo, fechados de julio a octubre, apilados junto al café frío.' },
        { speaker: 'DEFENSA', text: '(El Sargento ya los tiene listos. Solo falta que me los enseñe.)', pose: 'chapulin_idle' }
      ]
    }
  ],
  talkOptions: CASE5_DELEGACION_C5_TALKS
};
