// @Architecture(descriptionShort="Case 4 day 2 Suite 204 with Rufino Rufián", type="data", icon="layers")
/**
 * Case 4 Day 2 — Suite 204 (`hotel_suite204`).
 */

import type { InvestigationScene } from '../../../types/index.js';
import { SUITE204_HOTSPOTS } from './hotel_suite204_hotspots.js';

export const CASE4_HOTEL_SUITE204: InvestigationScene = {
  title: 'Suite 204 - Habitación de Rufino Rufián',
  name: 'Suite 204',
  bg: 'assets/bg_hotel_suite204.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'rufino_smug',
  intro: [
    { speaker: 'NARRADOR', text: '26 de octubre, 11:00 AM. Suite 204, situada directamente bajo la escena del crimen.' },
    { speaker: 'RUFINO', text: 'Vaya... ¿Quién franqueó el acceso a la plebe a mis aposentos nobiliarios?', pose: 'rufino_monocle' },
    { speaker: 'DEFENSA', text: 'Venimos a revisar las tuberías del edificio, caballero.', pose: 'donramon_idle' },
    { speaker: 'RUFINO', text: 'Lamento desilusionarlo, leguleyo. Mi velada de anoche a las 11:15 PM transcurrió en el salón de baccarat cosechando victorias frente a distinguidos diplomáticos.', pose: 'rufino_smug' },
    { speaker: 'CHAPULIN', text: '(Este señor habla como si trajera una patata caliente en el cogote...)', pose: 'chapulin_idle' }
  ],
  hotspots: SUITE204_HOTSPOTS,
  talkOptions: [
    {
      id: 'about_alibi',
      label: 'Su coartada de anoche',
      dialogue: [
        { speaker: 'RUFINO', text: 'De 10:30 a 11:30 PM estuve en el paño verde del baccarat. Testigos de honor, fichas de marfil y champán francés.', pose: 'rufino_smug' },
        { speaker: 'DEFENSA', text: '(Muy seguro de su coartada pública... Veamos qué dice la bitácora del montacargas.)', pose: 'donramon_idle' }
      ]
    }
  ]
};
