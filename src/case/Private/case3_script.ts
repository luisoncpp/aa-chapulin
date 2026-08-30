// @Architecture(descriptionShort="Minimal Case 3 script shell until dialogue modules land", type="data", icon="layers")
/**
 * Structural Case 3 script metadata (dialogue modules added by case scripting agent).
 */

import type { CaseScript, EvidenceId, LocationId } from '../../types/index.js';

const CASE3_REQUIRED_DAY1: EvidenceId[] = [
  'lentes_barriga', 'informe_medico', 'marcas_carrito', 'microfono_cabina', 'microfono_oro', 'cinta_salud'
];
const CASE3_REQUIRED_DAY2: EvidenceId[] = [
  'bitacora_transmision', 'receta_nono', 'libro_verde', 'programa_kermes'
];
const CASE3_REQUIRED_DAY3: EvidenceId[] = [
  'ataduras_bodega', 'cartucho_corte', 'cinta_sketch', 'boleta_empeno'
];
const CASE3_DEBUG: EvidenceId[] = [
  ...CASE3_REQUIRED_DAY1,
  ...CASE3_REQUIRED_DAY2,
  ...CASE3_REQUIRED_DAY3,
  'bolsa_papel', 'ventana_cabina'
];
const CASE3_UNLOCK: LocationId[] = ['centro_detencion', 'cabina_radio', 'plaza_kermes'];

const emptyTestimony = {
  title: 'Testimonio pendiente',
  witness: 'PENDIENTE',
  bgm: 'cross_exam_moderato' as const,
  statements: []
};

const emptyTrialDay = {
  intro: [] as import('../../types/index.js').DialogueLine[],
  testimony1: emptyTestimony,
  testimony2: { ...emptyTestimony, bgm: 'cross_exam_allegro' as const }
};

export const CASE_SCRIPT_CASE3_ES: CaseScript = {
  id: 'case3',
  startLocation: 'centro_detencion',
  requiredEvidence: CASE3_REQUIRED_DAY1,
  debugEvidence: CASE3_DEBUG,
  debugUnlockLocations: CASE3_UNLOCK,
  investigation: {},
  trial: {
    intro: [],
    testimony1: emptyTestimony,
    testimony2: { ...emptyTestimony, bgm: 'cross_exam_allegro' },
    climax: {
      dialogue: [],
      presentTarget: [],
      verdict: []
    }
  },
  adjournment: {
    nextLocation: 'despacho_barriga',
    unlockLocations: ['despacho_barriga', 'clinica_chapatin', 'delegacion'],
    requiredEvidence: CASE3_REQUIRED_DAY2,
    trial: emptyTrialDay,
    next: {
      nextLocation: 'bodega_radio',
      unlockLocations: ['bodega_radio', 'delegacion', 'centro_detencion'],
      requiredEvidence: CASE3_REQUIRED_DAY3,
      trial: emptyTrialDay
    }
  }
};

export const CASE_SCRIPT_CASE3_EN: CaseScript = { ...CASE_SCRIPT_CASE3_ES };
