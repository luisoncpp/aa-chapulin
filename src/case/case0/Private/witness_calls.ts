// @Architecture(descriptionShort="Case 0 calling-to-the-stand blocks before each testimony", type="data", icon="layers")
import type { DialogueLine } from '../../../types/index.js';

/** First call: the prosecution summons Casimiro, who states name and occupation. */
export const CASE0_WITNESS_CALL_T1: DialogueLine[] = [
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'La fiscalía llama al estrado a su único testigo: el señor Casimiro Lengua. Y que suba de prisa, Your Honor, que cada escalón me cuesta dinero.' },
  { speaker: 'CASIMIRO', pose: 'casimiro_amable', text: 'Voy subiendo, voy subiendo. Al estrado, del latín stratum: “lo que se extiende”.' },
  { speaker: 'DEFENSA', pose: 'donramon_sweat', text: '(Este señor le pone nota al pie hasta a los escalones. De aquí salgo con barba.)' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Testigo, diga su nombre y su ocupación.' },
  { speaker: 'CASIMIRO', pose: 'casimiro_catalogo', text: 'Casimiro Lengua, para servirle: distribuidor autorizado de Enciclopedias El Saber Universal. Del latín encyclopaedia, “instrucción en círculo”.' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Su testimonio, por favor. Únicamente lo que percibió.' }
];

/** Second round, same witness: a formal recall instead of a fresh identification. */
export const CASE0_WITNESS_RECALL_T2: DialogueLine[] = [
  { speaker: 'SUPER SAM', pose: 'supersam_slam', sfx: 'desk_slam', text: '¡La fiscalía vuelve a llamar al estrado al señor Lengua! Mismo testigo, mismo estrado, cero gastos de traslado. ¡Eso es eficiencia!' },
  { speaker: 'CASIMIRO', pose: 'casimiro_amable', text: 'Si un servidor no se ha bajado, señor fiscal.' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Entonces considérese llamado desde donde está. Time is money.' },
  { speaker: 'DEFENSA', pose: 'donramon_idle', text: '(Con permisito, dijo Monchito. El mismo señor, pero ahora me va a explicar esa hora.)' },
  { speaker: 'JUEZ', pose: 'judge_gavel', sfx: 'gavel', text: 'Señor Lengua, sigue usted bajo protesta de decir verdad. Proceda con su nuevo testimonio.' }
];

/** Third round: the witness is recalled in his new condition as a person under investigation. */
export const CASE0_WITNESS_RECALL_T3: DialogueLine[] = [
  { speaker: 'SUPER SAM', pose: 'supersam_slam', sfx: 'desk_slam', text: '¡La fiscalía llama al estrado... a su propio testigo! ¡Por tercera vez, Your Honor! A este paso voy a tener que facturarle al tribunal las horas extra.' },
  { speaker: 'CASIMIRO', pose: 'casimiro_sweat', text: 'Un servidor no se ha bajado del estrado, señor fiscal. Ni un renglón.' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Para el acta, y en su nueva calidad: repita su nombre y su ocupación.' },
  { speaker: 'CASIMIRO', pose: 'casimiro_panic', text: '¿Otra vez? ...Casimiro Lengua. Distribuidor autorizado de... de... de tomos surtidos.' },
  { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: '¡Chanfle! ¡Se le acabó el latín!' },
  { speaker: 'JUEZ', pose: 'judge_gavel', sfx: 'gavel', text: 'Señor Lengua, explique a esta corte cómo llegó ese cartapacio a su maletín de muestras. Y le advierto que ahora cada palabra suya se asienta en su contra.' }
];
