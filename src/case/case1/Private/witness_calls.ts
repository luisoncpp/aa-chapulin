// @Architecture(descriptionShort="Case 1 witness call blocks that precede each testimony", type="data", icon="layers")
/**
 * Llamados al estrado (spec §7). Ningún testimonio arranca en seco: el bloque
 * termina siempre en una línea del JUEZ ordenando declarar, y se encola como
 * cola de la `successDialogue` que lo precede.
 */

import type { DialogueLine } from '../../../types/index.js';

/** Cierra el `followUp` de D1-T1 y abre el primer testimonio del Tripaseca. */
export const CASE1_CALL_TRIPASECA_D1: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'La testigo puede retirarse. Fiscalía, llame a su siguiente testigo.', pose: 'judge_neutral', bgm: 'trial' },
  { speaker: 'SUPER SAM', text: '¡Con gusto, Your Honor! La fiscalía llama al único hombre que vio todo con sus propios ojos: el señor conocido como El Tripaseca.', pose: 'supersam_point' },
  { speaker: 'JUEZ', text: 'Testigo, diga su nombre y su ocupación.', pose: 'judge_neutral' },
  { speaker: 'TRIPASECA', text: 'Comerciante, señor juez. Comerciante honrado: compro barato y vendo lo que se deje.', pose: 'tripaseca_smug' },
  { speaker: 'JUEZ', text: 'La corte le pidió también su nombre.', pose: 'judge_thinking' },
  { speaker: 'TRIPASECA', text: 'Ya se me hacía. El Tripaseca, para servirle. De cariño, ¿eh? Yo no escojo cómo me dicen.', pose: 'tripaseca_smug', addProfile: 'perfil_tripaseca' },
  { speaker: 'JUEZ', text: 'Queda bajo protesta de decir verdad. Su testimonio, por favor.', sfx: 'gavel', pose: 'judge_gavel' }
];

/** Cierra la apertura del día 2 y sienta a Alma Negra en el estrado. */
export const CASE1_CALL_ALMA_NEGRA: DialogueLine[] = [
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', text: 'A Alma Negra, señor juez. El velador. La víctima.', pose: 'donramon_point' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', text: '¡Objection! ¡Ese hombre estaba en coma hace treinta y seis horas!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', text: 'Y anoche despertó, señor fiscal. El médico firmó el alta para declarar esta mañana.', pose: 'donramon_idle' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', text: 'La corte admite al testigo. Que lo pasen.', sfx: 'gavel', pose: 'judge_gavel' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'NARRADOR', text: 'Entra una silla de ruedas empujada por el alguacil. En ella, un hombre enorme, vendado de la cabeza, con parche en el ojo.', sfx: 'whoosh' },
  { bg: 'assets/bg_witness.webp', speaker: 'ALMA NEGRA', text: '¡Por mil demonios! ¡Qué alto está este barco!', pose: 'almanegra_shock' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', text: 'Testigo, diga su nombre y su ocupación.', pose: 'judge_neutral' },
  { bg: 'assets/bg_witness.webp', speaker: 'ALMA NEGRA', text: 'Alma Negra. Velador del Museo de las Curiosidades. Antes marino. Muy antes, pirata, pero eso ya prescribió.', pose: 'almanegra_vendado' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', text: '...La corte prefiere no ahondar. Su testimonio, por favor.', sfx: 'gavel', pose: 'judge_gavel' }
];

/** Cierra el `followUp` de D2-T1 y vuelve a llamar al Tripaseca. */
export const CASE1_CALL_TRIPASECA_D2_T2: DialogueLine[] = [
  { speaker: 'SUPER SAM', text: '¡Con gusto, Your Honor! ¡La fiscalía vuelve a llamar al estrado al testigo Tripaseca!', pose: 'supersam_point', bgm: 'trial' },
  { speaker: 'TRIPASECA', text: 'Si yo no me he bajado, señor fiscal.', pose: 'tripaseca_smug' },
  { speaker: 'SUPER SAM', text: '¡Entonces considérese llamado desde donde está! ¡Time is money!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Señor Tripaseca, sigue usted bajo protesta de decir verdad. Proceda.', sfx: 'gavel', pose: 'judge_gavel' }
];

/** Cierra el `followUp` de D2-T2 y abre el último contrainterrogatorio. */
export const CASE1_CALL_TRIPASECA_D2_T3: DialogueLine[] = [
  { speaker: 'SUPER SAM', text: '¡La fiscalía llama al estrado, por tercera vez, al mismo testigo! ¡Tres testimonios y cero gastos de traslado, Your Honor!', pose: 'supersam_point', bgm: 'trial' },
  { speaker: 'TRIPASECA', text: 'Yo aquí sigo, señor fiscal. Ya hasta me acomodé.', pose: 'tripaseca_smug' },
  { speaker: 'JUEZ', text: 'Señor Tripaseca, sigue usted bajo protesta de decir verdad. Usted dijo que el ladrón corrió hacia la puerta grande.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Declare sobre la huida, y declare sobre esa fotografía.', sfx: 'gavel', pose: 'judge_gavel' }
];
