// @Architecture(descriptionShort="English Case 5 scene and trial part table", type="data", icon="layers")
/**
 * English Case 5 scene and trial part table.
 */

import type { Case5Parts } from './assemble.js';
import { CASE5_CLIMAX_EN } from './climax_en.js';
import { CASE5_ARCHIVO_CALDERA_EN } from './archivo_caldera_en.js';
import { CASE5_ARCHIVO_PASILLO7_EN } from './archivo_pasillo7_en.js';
import { CASE5_ARCHIVO_VESTIBULO_EN } from './archivo_vestibulo_en.js';
import { CASE5_BODEGA_MASA_EN } from './bodega_masa_en.js';
import { CASE5_CELDA_EN } from './celda_en.js';
import { CASE5_CELDA_D4_EN } from './celda_d4_en.js';
import { CASE5_CORRESPONDENCIA_EN } from './correspondencia_en.js';
import { CASE5_DELEGACION_C5_EN } from './delegacion_c5_en.js';
import { CASE5_DESPACHO_BERRONDO_EN } from './despacho_berrondo_en.js';
import { CASE5_FISCALIA_C5_EN } from './fiscalia_c5_en.js';
import { CASE5_PENAL_EFECTOS_EN } from './penal_efectos_en.js';
import {
  CASE5_DAY1_OPENING_PRESENT_EN, CASE5_TESTIMONY_1_EN, CASE5_TESTIMONY_2_EN,
  CASE5_TESTIMONY_3_EN, CASE5_TRIAL_INTRO_FULL_EN
} from './trial_day1_en.js';
import {
  CASE5_DAY2_INTRO_FULL_EN, CASE5_DAY2_OPENING_PRESENT_EN, CASE5_TESTIMONY_4_EN,
  CASE5_TESTIMONY_5_EN
} from './trial_day2_en.js';
import {
  CASE5_DAY3_INTRO_FULL_EN, CASE5_DAY3_OPENING_PRESENT_EN, CASE5_TESTIMONY_6_EN,
  CASE5_TESTIMONY_7_EN, CASE5_TESTIMONY_8_EN
} from './trial_day3_en.js';
import {
  CASE5_DAY4_INTRO_FULL_EN, CASE5_DAY4_OPENING_PRESENT_EN, CASE5_TESTIMONY_9_EN
} from './trial_day4_en.js';
import { CASE5_VECINDAD_EN } from './vecindad_en.js';
import type { DialogueLine } from '../../../types/index.js';

const CASE5_PRESS_HINT_EN: DialogueLine[] = [{
  speaker: 'DON RAMÓN',
  text: 'Chapulin! We need to squeeze this witness, not just listen!',
  pose: 'donramon_point'
}];

export const CASE5_PARTS_EN: Case5Parts = {
  scenes: {
    celda_c5: CASE5_CELDA_EN,
    archivo_vestibulo: CASE5_ARCHIVO_VESTIBULO_EN,
    archivo_pasillo7: CASE5_ARCHIVO_PASILLO7_EN,
    vecindad_c5: CASE5_VECINDAD_EN,
    correspondencia: CASE5_CORRESPONDENCIA_EN,
    despacho_berrondo: CASE5_DESPACHO_BERRONDO_EN,
    delegacion_c5: CASE5_DELEGACION_C5_EN,
    bodega_masa: CASE5_BODEGA_MASA_EN,
    fiscalia_c5: CASE5_FISCALIA_C5_EN,
    penal_efectos: CASE5_PENAL_EFECTOS_EN,
    celda_c5_d4: CASE5_CELDA_D4_EN,
    archivo_caldera: CASE5_ARCHIVO_CALDERA_EN
  },
  intro: CASE5_TRIAL_INTRO_FULL_EN,
  pressHint: CASE5_PRESS_HINT_EN,
  day1Opening: CASE5_DAY1_OPENING_PRESENT_EN,
  t1: CASE5_TESTIMONY_1_EN,
  t2: CASE5_TESTIMONY_2_EN,
  t3: CASE5_TESTIMONY_3_EN,
  day2Intro: CASE5_DAY2_INTRO_FULL_EN,
  day2Opening: CASE5_DAY2_OPENING_PRESENT_EN,
  t4: CASE5_TESTIMONY_4_EN,
  t5: CASE5_TESTIMONY_5_EN,
  day3Intro: CASE5_DAY3_INTRO_FULL_EN,
  day3Opening: CASE5_DAY3_OPENING_PRESENT_EN,
  t6: CASE5_TESTIMONY_6_EN,
  t7: CASE5_TESTIMONY_7_EN,
  t8: CASE5_TESTIMONY_8_EN,
  day4Intro: CASE5_DAY4_INTRO_FULL_EN,
  day4Opening: CASE5_DAY4_OPENING_PRESENT_EN,
  t9: CASE5_TESTIMONY_9_EN,
  climax: CASE5_CLIMAX_EN
};
