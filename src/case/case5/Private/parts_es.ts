// @Architecture(descriptionShort="Spanish Case 5 scene and trial part table", type="data", icon="layers")
/**
 * Spanish Case 5 parts. Climax is CASE5_CLIMAX (spec §18–§19).
 */

import { CASE5_ARCHIVO_CALDERA } from './archivo_caldera.js';
import { CASE5_ARCHIVO_PASILLO7 } from './archivo_pasillo7.js';
import { CASE5_ARCHIVO_VESTIBULO } from './archivo_vestibulo.js';
import { CASE5_BODEGA_MASA } from './bodega_masa.js';
import { CASE5_CELDA } from './celda.js';
import { CASE5_CELDA_D4 } from './celda_d4.js';
import { CASE5_CLIMAX } from './climax.js';
import { CASE5_CORRESPONDENCIA } from './correspondencia.js';
import { CASE5_DELEGACION_C5 } from './delegacion_c5.js';
import { CASE5_DESPACHO_BERRONDO } from './despacho_berrondo.js';
import { CASE5_FISCALIA_C5 } from './fiscalia_c5.js';
import { CASE5_PENAL_EFECTOS } from './penal_efectos.js';
import {
  CASE5_DAY1_OPENING_PRESENT, CASE5_TESTIMONY_1, CASE5_TESTIMONY_2, CASE5_TESTIMONY_3,
  CASE5_TRIAL_INTRO_FULL
} from './trial_day1.js';
import {
  CASE5_DAY2_INTRO_FULL, CASE5_DAY2_OPENING_PRESENT, CASE5_TESTIMONY_4, CASE5_TESTIMONY_5
} from './trial_day2.js';
import {
  CASE5_DAY3_INTRO_FULL, CASE5_DAY3_OPENING_PRESENT, CASE5_TESTIMONY_6, CASE5_TESTIMONY_7,
  CASE5_TESTIMONY_8
} from './trial_day3.js';
import {
  CASE5_DAY4_INTRO_FULL, CASE5_DAY4_OPENING_PRESENT, CASE5_TESTIMONY_9
} from './trial_day4.js';
import { CASE5_VECINDAD } from './vecindad.js';
import type { Case5Parts } from './assemble.js';

export const CASE5_PARTS_ES: Case5Parts = {
  scenes: {
    celda_c5: CASE5_CELDA,
    archivo_vestibulo: CASE5_ARCHIVO_VESTIBULO,
    archivo_pasillo7: CASE5_ARCHIVO_PASILLO7,
    vecindad_c5: CASE5_VECINDAD,
    correspondencia: CASE5_CORRESPONDENCIA,
    despacho_berrondo: CASE5_DESPACHO_BERRONDO,
    delegacion_c5: CASE5_DELEGACION_C5,
    bodega_masa: CASE5_BODEGA_MASA,
    fiscalia_c5: CASE5_FISCALIA_C5,
    penal_efectos: CASE5_PENAL_EFECTOS,
    celda_c5_d4: CASE5_CELDA_D4,
    archivo_caldera: CASE5_ARCHIVO_CALDERA
  },
  intro: CASE5_TRIAL_INTRO_FULL,
  day1Opening: CASE5_DAY1_OPENING_PRESENT,
  t1: CASE5_TESTIMONY_1,
  t2: CASE5_TESTIMONY_2,
  t3: CASE5_TESTIMONY_3,
  day2Intro: CASE5_DAY2_INTRO_FULL,
  day2Opening: CASE5_DAY2_OPENING_PRESENT,
  t4: CASE5_TESTIMONY_4,
  t5: CASE5_TESTIMONY_5,
  day3Intro: CASE5_DAY3_INTRO_FULL,
  day3Opening: CASE5_DAY3_OPENING_PRESENT,
  t6: CASE5_TESTIMONY_6,
  t7: CASE5_TESTIMONY_7,
  t8: CASE5_TESTIMONY_8,
  day4Intro: CASE5_DAY4_INTRO_FULL,
  day4Opening: CASE5_DAY4_OPENING_PRESENT,
  t9: CASE5_TESTIMONY_9,
  climax: CASE5_CLIMAX
};
