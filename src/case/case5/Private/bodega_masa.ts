// @Architecture(descriptionShort="Case 5 day 3 judicial goods warehouse investigation scene", type="data", icon="layers")
/**
 * Caso 5, Día 3 — Bodega de bienes, huacal 9 (`bodega_masa`). Spec §14.1.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_BODEGA_MASA_HOTSPOTS } from './bodega_masa_hotspots.js';
import { CASE5_BODEGA_MASA_INTRO } from './bodega_masa_intro.js';

export const CASE5_BODEGA_MASA: InvestigationScene = {
  title: 'Bodega de Bienes en Depósito',
  name: 'Bodega de bienes',
  bg: 'assets/bg_bodega_masa.webp',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  idlePose: 'chompiras_idle',
  intro: CASE5_BODEGA_MASA_INTRO,
  hotspots: CASE5_BODEGA_MASA_HOTSPOTS,
  talkOptions: []
};
