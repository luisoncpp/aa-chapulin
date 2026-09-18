// @Architecture(descriptionShort="Case 5 climax stage 2 — credencial síndico", type="data", icon="layers")
/**
 * Case 5 climax — Etapa 2 ¿CON QUÉ AUTORIDAD? (spec §18.2).
 */

import type { ClimaxStage } from '../../../types/index.js';

export const CASE5_CLIMAX_STAGE2: ClimaxStage = {
  presentTarget: ['credencial_sindico'],
  prompt: '¿Qué le permitía seguir dentro del edificio después de entregar el gafete?',
  failDialogue: [
    { speaker: 'JUEZ', text: 'Eso no habilita a nadie a estar en ninguna parte, licenciado.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'Esta corte le preguntó por un permiso, no por un indicio.', pose: 'judge_neutral' },
    { speaker: 'SECRETARIO', text: 'Y le hace notar la representación social que a la defensa le queda menos crédito que hace un momento.', sfx: 'damage' }
  ],
  successDialogue: [
    { speaker: 'DEFENSA', text: '¡La credencial de síndico, señor juez! ¡La que el propio testigo me regaló en su despacho el martes!', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'DEFENSA', text: 'Léala la corte, renglón por renglón, que son tres.', pose: 'chapulin_point' },
    { speaker: 'JUEZ', text: '«Vigente hasta la conclusión del concurso.»', pose: 'judge_neutral' },
    { speaker: 'JUEZ', text: '«Sin límite de horario.»', pose: 'judge_shock' },
    { speaker: 'JUEZ', text: '«Acceso al depósito de bienes de la masa.»', pose: 'judge_shock' },
    { speaker: 'DEFENSA', text: 'Sin límite de horario, señor juez. Lo firmó un juez de este mismo edificio en 1971.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'Ese gafete de latón que devolvió a las cuatro cincuenta no era su permiso para estar adentro.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'Era su permiso para estar arriba.', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'NARRADOR', text: 'Murmullo largo en la galería.', sfx: 'realization' },
    { speaker: 'BERRONDO', text: 'Es correcto, licenciado, y lo declaré ayer.', pose: 'berrondo_sweat' },
    { speaker: 'BERRONDO', text: 'Yo podía quedarme en ese sótano hasta la madrugada si quería. Y no me quedé.', pose: 'berrondo_idle' },
    { speaker: 'DEFENSA', text: '¿Y quién lo vio irse?', pose: 'chapulin_point' },
    { speaker: 'BERRONDO', text: 'Nadie, licenciado. Ya lo dijimos: el portón no tiene garita.', pose: 'berrondo_idle' },
    { speaker: 'BERRONDO', text: 'Pero esa moneda cae de los dos lados. Que nadie me viera salir tampoco prueba que me quedara.', pose: 'berrondo_idle' },
    { speaker: 'JUEZ', text: '...La corte tiene que concederlo. Otra vez.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'Licenciado Chapulín: usted ha demostrado que ese hombre pudo quedarse en el sótano.', pose: 'judge_neutral' },
    { speaker: 'JUEZ', text: 'Y el sótano no es el pasillo siete.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'Demuéstreme que subió.', sfx: 'gavel', pose: 'judge_gavel' },
    { speaker: 'DEFENSA', text: '(Aquí es. Aquí es donde se acaba todo.)', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: '(Piensa, Chapulín. ¿Qué cosa de ese pasillo nadie ha podido explicar en cuatro días?)', pose: 'chapulin_idle' }
  ]
};
