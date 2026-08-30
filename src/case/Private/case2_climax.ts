// @Architecture(descriptionShort="Case 2 climax, culprit breakdown, verdict, and epilogue", type="data", icon="layers")
/**
 * Case 2 Final Climax, Verdict, and Waiting-Room Epilogue.
 */

import type { DialogueLine } from '../../types/index.js';
import { assembleCase2Climax } from './case2_climax_shared.js';

const GOLD_REVEAL: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: "¡Aquí está el Chanfle de Oro, oculto dentro de la 'Lata de Grasa de Zapatos' del Chómpiras!", pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'What?! ¡¿Una simple lata de betún para calzado?!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: '¡Pesa más de 5 KILOS y de su junta brota polvo dorado! Peterete vació el betún, metió la estatuilla y reselló la tapa.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'CHAPULIN', text: '¡Y mis Antenitas de Vinil lo confirman — vibran justo hacia esta lata! ¡Ábranla y verán el brillo del oro!', pose: 'chapulin_slam', sfx: 'chipote' },
  { speaker: 'NARRADOR', text: '*¡¡¡CLAAANG-BRILLOOOO!!!* (La tapa cede y el resplandor del Chanfle de Oro ilumina la sala)', sfx: 'realization' },
  { speaker: 'PETERETE', text: '¡G-grrrk! ¡E-esa es la lata del Chómpiras! ¡Esto solo demuestra que él escondió el oro en su propia lata! ¡Yo no tengo nada que ver!', pose: 'peterete_sweat' },
  { speaker: 'SUPER SAM', text: '¡Exactly! ¡El acusado tenía la lata y la palanca! ¡Sigue siendo el único culpable posible!', pose: 'supersam_point' },
  { speaker: 'DEFENSA', text: '(¡Rayos! Tienen razón, el oro en la lata del Chómpiras no incrimina al Peterete... a menos que demuestre que el Chómpiras no pudo haberlo hecho.)', pose: 'donramon_idle' }
];

const CHOMPIRAS_ASLEEP: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡TOMA ESO! ¡El Chómpiras no pudo haber guardado el oro porque estaba profundamente dormido!', sfx: 'whoosh', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: "Alguien bombeó esta 'Esencia de Valeriana' por el ducto. ¡Un sedante tan potente que lo dejó inconsciente por 30 minutos!", pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'PETERETE', text: '¡P-pero la caja fuerte se abrió con llave! ¡Yo devolví la llave maestra a custodia a las 8:30 PM! ¡Nadie más tenía cómo abrirla!', pose: 'peterete_panic' }
];

const VERDICT_LINES: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO! ¡Usted no necesitaba la llave original, porque fabricó un DUPLICADO!', sfx: 'whoosh', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: "¡Encontramos este 'Molde de Cera' en la basura de Doña Clotilde! ¡Tiene la huella exacta de la llave maestra!", pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'PETERETE', text: '¡Bah! Doña Clotilde dijo que fue un hombre misterioso con bufanda y sombrero. ¡Podría ser cualquiera!', pose: 'peterete_smug' },
  { speaker: 'DEFENSA', text: '¡No se haga el tonto! Doña Clotilde dijo que el hombre fue a comprar la esencia la tarde del 28 de agosto.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Y según las reglas del hotel, ¡la única persona que portaba la llave maestra original esa tarde era el JEFE DE SEGURIDAD!', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: '¡Usted compró la valeriana, copió su propia llave, durmió al Chómpiras, abrió la caja y metió el oro en la lata!', pose: 'donramon_point' },
  { speaker: 'PETERETE', text: '¡¡¡NOOOOOOOOOOOO!!! ¡¡¡MI PLAN PERFECTO DE CINCO MILLONES DE DÓLARES ARRUINADO POR UN LIMPIABOTAS Y UN DEFENSOR DEL NECAXA!!!', pose: 'peterete_breakdown', sfx: 'damage' },
  { speaker: 'NARRADOR', text: '(El Peterete se abofetea con su fedora hasta caer desplomado en el estrado).' },
  { speaker: 'SUPER SAM', text: 'OH NOOO! ¡My fees! ¡My bonus! ¡Time is money and I lost my dollars!', pose: 'supersam_breakdown' },
  { speaker: 'JUEZ', text: '¡Silencio y orden! Habiendo aparecido la prueba reina, demostrado el método y confesado el verdadero culpable, ¡este juzgado emite su veredicto definitivo!', pose: 'judge_gavel', sfx: 'gavel' },
  { cutin: 'objection_culpable', speaker: 'JUEZ', text: '¡Declaro al acusado, Aquiles Esquivel Madrazo... INOCENTE!', sfx: 'whoosh', bgm: 'victory', pose: 'judge_gavel' }
];

export const CASE2_CLIMAX = assembleCase2Climax({
  dialogue: [
    { speaker: 'SUPER SAM', text: 'Stop right there! ¡Si el señor Peterete es el ladrón, exijo que la defensa presente en este instante el Chanfle de Oro!', pose: 'supersam_point', sfx: 'desk_slam' },
    { speaker: 'JUEZ', text: 'Es la regla de oro del tribunal: para condenar al autor intelectual, debemos ubicar el cuerpo del delito. ¿Tiene la defensa esa prueba decisiva?', pose: 'judge_thinking' },
    { speaker: 'DEFENSA', text: '(Es el momento decisivo. El oro no está en los bolsillos de Peterete... pero estuvo en el carrito todo este tiempo...)', pose: 'donramon_idle' },
    { speaker: 'CHAPULIN', text: '¡Monchito! ¡Mis antenitas de vinil me dicen que el culpable disfrazó el tesoro a la vista de todos!', pose: 'chapulin_point' }
  ],
  goldReveal: GOLD_REVEAL,
  chompirasAsleep: CHOMPIRAS_ASLEEP,
  verdict: VERDICT_LINES,
  epilogue: [
    { speaker: 'NARRADOR', text: '(Más tarde, en la sala de espera del tribunal...)' },
    { speaker: 'CHOMPIRAS', text: '¡Ay, Don Ramón, Chapulín! ¡No sé cómo agradecerles! ¡Ya me veía 20 años comiendo sopa de piedras!', pose: 'chompiras_relieved' },
    { speaker: 'CHAPULIN', text: '¡No hay de qué, Chómpiras! ¡La nobleza y la astucia siempre vencen al mal! ¡Síganme los buenos!', pose: 'chapulin_point' },
    { speaker: 'FLORINDA', text: 'Debo admitir, Don Ramón... que por una vez en su vida no se comportó como la chusma habitual.', pose: 'florinda_idle' },
    { speaker: 'JIRAFALES', text: 'Ha sido una cátedra de deducción aristotélica, Don Ramón. Admirable.', pose: 'jirafales_idle' },
    { speaker: 'DEFENSA', text: '¡Je, je! ¡No hay de queso nomás de papa! Y ahora que demostré mi talento legal...', pose: 'donramon_idle' },
    { speaker: 'NARRADOR', text: '(De pronto, pasos pesados en el pasillo... ¡es el Señor Barriga con su portafolio!)', sfx: 'realization' },
    { speaker: 'DEFENSA', text: '¡¡¡CHANFLE!!! ¡¡¡EL SEÑOR BARRIGA VIENE POR LOS 14 MESES DE RENTA!!!', pose: 'donramon_panic' },
    { speaker: 'CHAPULIN', text: '¡Toma, Monchito! ¡Tómate una Pastilla de Chiquitolina y escóndete en mi bolsillo!', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: '¡Con permisito, dijo Monchitooooo!', pose: 'donramon_point' }
  ]
});
