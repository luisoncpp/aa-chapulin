// @Architecture(descriptionShort="Public facade assembling bilingual Case 5 scripts", type="facade", icon="layers")
/**
 * Case 5: El Tomo Trece — El Último Juicio de Don Ramón.
 * Four investigation days and four trial days; `adjournment.next` chains thrice.
 */

import type { CaseScript } from '../../types/index.js';
import { assembleCase5 } from './Private/assemble.js';
import { CASE5_PARTS_EN } from './Private/parts_en.js';
import { CASE5_PARTS_ES } from './Private/parts_es.js';

export const CASE_SCRIPT_CASE5_ES: CaseScript = assembleCase5(CASE5_PARTS_ES);
export const CASE_SCRIPT_CASE5_EN: CaseScript = assembleCase5(CASE5_PARTS_EN);
