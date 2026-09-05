// @Architecture(descriptionShort="Case 4 day-3 Rufino cornered testimony", type="data", icon="layers")
/**
 * Case 4 Trial Day 3 — Testimony 6 (Rufino acorralado).
 */

import type { Testimony } from '../../../types/index.js';
import { CASE4_D3_T2_BAUL_SUCCESS, CASE4_D3_T2_COPA_FOLLOWUP } from './trial_day3_success.js';

export const CASE4_TESTIMONY_6: Testimony = {
  title: 'Testimonio: Yo Jamás Subí al Tercer Piso ni Toqué al Occiso',
  witness: 'Rufino Rufián',
  bgm: 'cross_exam_presto',
  statements: [
    {
      id: 'd3_t2_1',
      speaker: 'RUFINO',
      pose: 'rufino_sweat',
      text: 'Es absurdo sugerir que yo cargué un cadáver por los pasillos sin ser visto por los conserjes.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Nadie ha dicho que usted cargara el cadáver en brazos por los pasillos a la vista de los conserjes.', pose: 'donramon_idle' },
        { speaker: 'RUFINO', text: 'Cualquier traslado entre habitaciones habría alertado a los botones. Nadie me vio transportar ningún bulto.', pose: 'rufino_smug' },
        { speaker: 'DEFENSA', text: 'Claro que nadie lo vio... porque usó el tiro interior del montacargas de servicio directo entre suites.', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'd3_t2_2',
      speaker: 'RUFINO',
      pose: 'rufino_sweat',
      text: 'Jamás pisé la Suite 304 en toda la noche del 24 de octubre.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿Sostiene que jamás pisó la Suite 304 en toda la noche del 24 de octubre?', pose: 'donramon_idle' },
        { speaker: 'RUFINO', text: 'Jamás. La planta noble de huéspedes de honor termina en el segundo piso; el tercer nivel está reservado a inquilinos de paso sin linaje.', pose: 'rufino_monocle' },
        { speaker: 'SUPER SAM', text: '¡El testigo no tenía motivo alguno para subir al piso tres!', pose: 'supersam_point' }
      ]
    },
    {
      id: 'd3_t2_3',
      speaker: 'RUFINO',
      pose: 'rufino_panic',
      text: 'El difunto jamás estuvo en mi presencia ni tuvo contacto con mis pertenencias de viaje.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿Asegura categóricamente que el difunto jamás estuvo en su presencia ni tuvo contacto con sus pertenencias de viaje?', pose: 'donramon_idle' },
        { speaker: 'RUFINO', text: '¡Jamás en la vida! Mis pertenencias de cuero inglés importado permanecieron resguardadas en mis aposentos privados de la 204, sin contacto alguno con maleantes callejeros de poca monta.', pose: 'rufino_panic' },
        { speaker: 'DEFENSA', text: '(Muy seguro de su equipaje de cuero inglés... Veamos si su baúl dice lo mismo.)', pose: 'donramon_idle' }
      ],
      contradiction: {
        evidence: ['baul_etiquetas'],
        successDialogue: CASE4_D3_T2_BAUL_SUCCESS,
        followUp: { evidence: ['copa_vino'], successDialogue: CASE4_D3_T2_COPA_FOLLOWUP }
      }
    },
    {
      id: 'd3_t2_4',
      speaker: 'RUFINO',
      pose: 'rufino_sweat',
      text: 'Y el vino envenenado de mi reserva privada jamás salió de mi bodega con el sello alterado.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Y sobre la botella de vino de su reserva... ¿cómo explica que una botella exclusiva suya estuviera en la escena?', pose: 'donramon_idle' },
        { speaker: 'RUFINO', text: 'Pudo haber sido sustraída de la cava por cualquier empleado infiel. Pero insisto: el lacre de mis botellas es inviolable sin quebrar la cera de la corona.', pose: 'rufino_sweat' },
        { speaker: 'DEFENSA', text: '(Inviolable a golpes... pero permeable a una aguja médica.)', pose: 'donramon_idle' }
      ]
    }
  ]
};
