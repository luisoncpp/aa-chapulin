// @Architecture(descriptionShort="English Case 5 day 3 judicial goods warehouse investigation scene", type="data", icon="layers")
/**
 * Case 5, Day 3 — Judicial goods warehouse, crate 9 (`bodega_masa`). Spec §14.1. English.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_BODEGA_MASA_HOTSPOTS_EN } from './bodega_masa_hotspots_en.js';
import { CASE5_BODEGA_MASA_INTRO_EN } from './bodega_masa_intro_en.js';

export const CASE5_BODEGA_MASA_EN: InvestigationScene = {
  title: 'Judicial Property Warehouse',
  name: 'Goods warehouse',
  bg: 'assets/bg_bodega_masa.webp',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  idlePose: 'chompiras_idle',
  intro: CASE5_BODEGA_MASA_INTRO_EN,
  hotspots: CASE5_BODEGA_MASA_HOTSPOTS_EN,
  talkOptions: []
};
