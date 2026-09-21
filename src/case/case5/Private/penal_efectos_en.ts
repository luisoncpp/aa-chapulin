// @Architecture(descriptionShort="English Case 5 day 3 penal personal effects investigation scene", type="data", icon="layers")
/**
 * Case 5, Day 3 — District Penitentiary, effects warehouse (`penal_efectos`). Spec §14.3. English.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_PENAL_EFECTOS_HOTSPOTS_EN } from './penal_efectos_hotspots_en.js';

export const CASE5_PENAL_EFECTOS_EN: InvestigationScene = {
  title: 'District Penitentiary — Effects Warehouse',
  name: 'Penitentiary — effects',
  bg: 'assets/bg_penal_efectos.webp',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'December 8, 2:40 PM. District Penitentiary, personal effects warehouse.', bg: 'assets/bg_penal_efectos.webp', furniture: 'none', bgm: 'suspense' },
    { speaker: 'NARRADOR', text: 'Three hundred numbered cardboard boxes on a metal shelf. Box 214-J reads: LENGUA, CASIMIRO.' },
    { speaker: 'SARGENTO', text: 'Box 214-J, Counselor. And look at the number.', pose: 'pazguato_decidido' },
    { speaker: 'DEFENSA', text: '214.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'Like the file page he left open.', pose: 'chapulin_panic' },
    { speaker: 'SARGENTO', text: 'Coincidence, Counselor. I verified: they number them by intake order.', pose: 'pazguato_idle' },
    { speaker: 'DEFENSA', text: '...Right.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: '(Coincidence. But I remembered the page by the number, and that is why I came.)', pose: 'chapulin_idle' }
  ],
  hotspots: CASE5_PENAL_EFECTOS_HOTSPOTS_EN,
  talkOptions: []
};
