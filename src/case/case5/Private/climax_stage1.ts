// @Architecture(descriptionShort="Case 5 climax stage 1 — profile Berrondo", type="data", icon="layers")
/**
 * Case 5 climax — Etapa 1 ¿QUIÉN? (spec §18.1).
 */

import type { ClimaxStage } from '../../../types/index.js';

export const CASE5_CLIMAX_STAGE1: ClimaxStage = {
  profileTarget: ['perfil_berrondo'],
  prompt: '¿A quién señalan las pruebas que esta corte ha admitido?',
  failDialogue: [
    { speaker: 'JUEZ', text: 'No, licenciado.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'Y esta corte le recuerda que no le preguntó de quién sospecha, sino a quién señalan las pruebas que usted mismo ha hecho admitir.', pose: 'judge_neutral' },
    { speaker: 'SECRETARIO', text: 'La representación social hace notar que la defensa está probando nombres.', sfx: 'damage' },
    { speaker: 'JUEZ', text: 'La corte le repite la pregunta, y le advierte que le quedan menos oportunidades que hace un minuto.', pose: 'judge_neutral' }
  ],
  successDialogue: [
    { speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'desk_slam', cutin: 'objection_protesto', pose: 'chapulin_slam', bgm: 'pursuit' },
    { speaker: 'DEFENSA', text: 'El hombre que estuvo en ese pasillo está sentado en la mesa de la fiscalía, señor juez.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'El licenciado Fulgencio Berrondo.', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'NARRADOR', text: 'La galería se levanta entera.', sfx: 'realization' },
    { speaker: 'BERRONDO', text: '......', pose: 'berrondo_idle', bg: 'assets/bg_courtroom.webp' },
    { speaker: 'SECRETARIO', text: '¡La representación social objeta! ¡El licenciado Berrondo auxilió a esta fiscalía durante tres días!' },
    { speaker: 'JUEZ', text: 'La corte comparte la objeción en principio. Defensa, fundamente o retire.', pose: 'judge_neutral' },
    { speaker: 'DEFENSA', text: 'Con cuatro cosas, señor juez. Cuatro cosas que dijo él, delante de usted, sin que nadie se las sacara.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'Primera. Firmó el veintinueve de noviembre un acuse que decía el día, la hora, el lugar y el nombre.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'Segunda. El veintinueve de noviembre, el mismo día, abrió con vale el cajón que va de Donceles a la calle del Espanto.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'Tercera. El cuatro de diciembre estuvo dentro de ese edificio en una hora que ahora cae dentro de la ventana del perito.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'Cuarta. Y ayer declaró bajo protesta que nadie le había avisado, cuando su propia rúbrica decía lo contrario.', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'BERRONDO', text: 'Señor juez, la cuarta la rectifiqué yo mismo y me disculpé.', pose: 'berrondo_sweat', bg: 'assets/bg_courtroom.webp' },
    { speaker: 'DEFENSA', text: 'Se disculpó cuando le enseñé la rúbrica, licenciado. No antes.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'Y es la primera vez en cuatro días que usted hace algo después y no antes.', pose: 'chapulin_point' },
    { speaker: 'BERRONDO', text: '......', pose: 'berrondo_sweat', bg: 'assets/bg_courtroom.webp' },
    { speaker: 'JUEZ', text: 'La corte permite a la defensa continuar.', sfx: 'gavel', pose: 'judge_gavel' },
    { speaker: 'JUEZ', text: 'Pero le advierto una cosa, licenciado: cuatro datos no son cuatro pruebas.', pose: 'judge_neutral' },
    { speaker: 'JUEZ', text: 'Este hombre entregó su gafete a las 16:50.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'Dígale a esta corte qué lo autorizaba a seguir dentro de ese edificio después de esa hora.', sfx: 'gavel', pose: 'judge_gavel' }
  ]
};
