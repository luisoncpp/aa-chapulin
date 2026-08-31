// @Architecture(descriptionShort="Case 3 day-2 testimony 1 GIRO 1 success dialogue", type="data", icon="layers")
/**
 * Case 3 Trial Day 2 — Testimony 3 success (Ñoño / grito enlatado).
 */

import type { DialogueLine } from '../../../types/index.js';

export const CASE3_T3_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO! ¡Ese grito NO entró por ningún micrófono!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: '¡La bitácora de la propia consola lo dice con todas sus letras: 23:03, CORTE DE ESTACIÓN, CARTUCHO 3, AUTOMÁTICO!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'JUEZ', text: '¡¿Automático?! ¡¿Quiere decir que la máquina lo disparó sola?!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Sola, señor Juez. Y por si quedara duda: el micrófono de la Cabina B tenía el cable enrollado y desconectado desde las diez para las diez de la noche. ¡De esa cabina no salió al aire ni un suspiro!', pose: 'donramon_point' },
  { speaker: 'NARRADOR', text: '(La sala estalla. El Juez golpea el mazo cuatro veces y nadie lo oye.)', sfx: 'gavel' },
  { speaker: 'CHAPULIN', text: '¡Lo sospeché desde un principio! ¡El grito que oyeron dos mil personas era una GRABACIÓN!', sfx: 'desk_slam', pose: 'chapulin_slam' },
  { speaker: 'SUPER SAM', text: '¡¿A canned scream?! But... but that means...', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'Significa dos cosas, señor fiscal. Una: nadie sabe a qué hora atacaron realmente al Señor Barriga. Y dos, la fea...', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: '¡Alguien grabó un grito de auxilio con la voz de la víctima ANTES de que la víctima lo necesitara! ¡Esto no fue un pleito, señor Juez: esto se ensayó!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'JUEZ', text: '¡Premeditación! ¡Alguien planeó esto con horas de anticipación!', pose: 'judge_shock' },
  { speaker: 'SUPER SAM', text: '¡Y ese alguien tuvo una cabina de grabación toda la noche a su disposición! ¡EL ACUSADO! ¡Llamo a declarar a la otra víctima, don Aniceto Rebollar!', pose: 'supersam_point' }
];
