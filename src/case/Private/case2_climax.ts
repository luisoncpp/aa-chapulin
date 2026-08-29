// @Architecture(descriptionShort="Case 2 climax, culprit breakdown, verdict, and epilogue", type="data", icon="layers")
/**
 * Case 2 Final Climax, Verdict, and Waiting-Room Epilogue.
 */

import type { ClimaxDefinition } from '../../types/index.js';

const WAITING_ROOM_BG = 'assets/bg_waiting_room.jpg';

export const CASE2_CLIMAX: ClimaxDefinition = {
  dialogue: [
    { speaker: 'SUPER SAM', text: 'Stop right there! ¡Si el señor Peterete es el ladrón, exijo que la defensa presente en este instante el Chanfle de Oro!', pose: 'supersam_point', sfx: 'desk_slam' },
    { speaker: 'JUEZ', text: 'Es la regla de oro del tribunal: para condenar al autor intelectual, debemos ubicar el cuerpo del delito. ¿Tiene la defensa esa prueba decisiva?', pose: 'judge_thinking' },
    { speaker: 'DEFENSA', text: '(Es el momento decisivo. El oro no está en los bolsillos de Peterete... pero estuvo en el carrito todo este tiempo...)', pose: 'donramon_idle' },
    { speaker: 'CHAPULIN', text: '¡Monchito! ¡Mis antenitas de vinil me dicen que el culpable disfrazó el tesoro a la vista de todos!', pose: 'chapulin_point' }
  ],
  presentTarget: ['lata_grasa', 'antenitas_vinil'],
  verdict: [
    { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
    { speaker: 'DEFENSA', text: "¡Aquí está el Chanfle de Oro, oculto dentro de la 'Lata de Grasa de Zapatos' del Chómpiras!", pose: 'donramon_point' },
    { speaker: 'SUPER SAM', text: 'What?! ¡¿Una simple lata de betún para calzado?!', pose: 'supersam_slam', sfx: 'desk_slam' },
    { speaker: 'DEFENSA', text: '¡Pesa más de 5 KILOS y de su junta brota polvo dorado! Peterete vació el betún, metió la estatuilla y reselló la tapa.', pose: 'donramon_slam', sfx: 'desk_slam' },
    { speaker: 'CHAPULIN', text: '¡Y mis Antenitas de Vinil lo confirman — vibran justo hacia esta lata! ¡Ábranla y verán el brillo del oro!', pose: 'chapulin_slam', sfx: 'chipote' },
    { speaker: 'NARRADOR', text: '*¡¡¡CLAAANG-BRILLOOOO!!!* (La tapa cede y el resplandor del Chanfle de Oro ilumina la sala)', sfx: 'realization' },
    { speaker: 'PETERETE', text: '¡¡¡NOOOOOOOOOOOO!!! ¡¡¡MI PLAN PERFECTO DE CINCO MILLONES DE DÓLARES ARRUINADO POR UN LIMPIABOTAS Y UN DEFENSOR DEL NECAXA!!!', pose: 'peterete_breakdown', sfx: 'damage' },
    { speaker: 'NARRADOR', text: '(El Peterete se abofetea con su fedora hasta caer desplomado en el estrado).' },
    { speaker: 'SUPER SAM', text: 'OH NOOO! ¡My fees! ¡My bonus! ¡Time is money and I lost my dollars!', pose: 'supersam_breakdown' },
    { speaker: 'JUEZ', text: '¡Silencio y orden! Habiendo aparecido la prueba reina, ¡este juzgado emite su veredicto definitivo!', pose: 'judge_gavel', sfx: 'gavel' },
    { cutin: 'objection_culpable', speaker: 'JUEZ', text: '¡Declaro al acusado, Aquiles Esquivel Madrazo... INOCENTE!', sfx: 'whoosh', bgm: 'victory', pose: 'judge_gavel' }
  ],
  epilogue: {
    bg: WAITING_ROOM_BG,
    dialogue: [
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
  }
};
