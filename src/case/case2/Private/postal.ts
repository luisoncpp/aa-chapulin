// @Architecture(descriptionShort="Case 2 postal alley scene with Jaimito and the mail cart", type="data", icon="layers")
/**
 * Case 2 Day 2 — Back alley post office and Don Jaimito.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE2_POSTAL: InvestigationScene = {
  title: 'Oficina Postal y Callejón Trasero',
  name: 'Callejón Postal',
  bg: 'assets/bg_postal.webp',
  bgm: 'callejon_postal',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: '30 de Agosto, 9:00 AM. Callejón Trasero y Puesto Postal.' },
    { speaker: 'JAIMITO', text: 'Buenos días... Vengo a entregar estas cartas, pero es que quiero evitar la fatiga...', pose: 'jaimito_tired' },
    { speaker: 'DEFENSA', text: 'Don Jaimito, perdone la molestia, pero la noche del robo usted estacionó su carrito de correos en este callejón, justo debajo del montaplatos de la hacienda.', pose: 'donramon_idle' },
    { speaker: 'JAIMITO', text: '¡Ah, sí! Es que en mi pueblo natal, Tangamandapio, los carritos se dejan a la sombra de los árboles de guayaba...', pose: 'jaimito_idle' },
    { speaker: 'CHAPULIN', text: 'Don Jaimito, ¿recuerda si el señor Peterete le entregó algún paquete la noche del 28 a las 9:30 PM?', pose: 'chapulin_idle' },
    { speaker: 'JAIMITO', text: '¿A las 9:30 PM? ¡Imposible! A esa hora yo estaba durmiendo una siesta reparadora en la banca del parque para evitar la fatiga. Hasta me pusieron una multa por dejar el carrito abandonado.', pose: 'jaimito_tired' }
  ],
  hotspots: [
    {
      id: 'hotspot_multa',
      label: 'Multa de Tránsito',
      x: 2, y: 40, w: 11, h: 22,
      dialogue: [
        { speaker: 'JAIMITO', text: 'Sí, mire. Aquí dice: "9:30 PM. Vehículo postal abandonado sin cartero a la vista."', pose: 'jaimito_tired', addEvidence: 'multa_transito' }
      ]
    },
    {
      id: 'hotspot_registro',
      label: 'Registro Postal',
      x: 13, y: 30, w: 16, h: 28,
      dialogue: [
        { speaker: 'DEFENSA', text: 'Esta entrada de las 9:30 PM está estampada con un sello manual irregular... no con el sello mecánico oficial que usted lleva encima.', pose: 'donramon_point', addEvidence: 'registro_postal' },
        { speaker: 'JAIMITO', text: '¡Yo no sellé nada! El sello oficial nunca se me separa, para evitar la fatiga de buscarlo.', pose: 'jaimito_proud' }
      ]
    },
    {
      id: 'hotspot_saca_postal',
      label: 'Saca de Correo',
      x: 28, y: 55, w: 22, h: 20,
      dialogue: [
        { speaker: 'DEFENSA', text: '¡Caray! Esta lata de grasa para zapatos pesa más de 5 kilos... ¡y de la tapa cae un polvillo amarillo resplandeciente!', pose: 'donramon_shock', sfx: 'realization', addEvidence: 'lata_grasa' },
        { speaker: 'CHAPULIN', text: '¡Mis antenitas de vinil están detectando la presencia del enemigo! Digo... ¡detectan algo muy sospechoso en esta lata!', pose: 'chapulin_point', addEvidence: 'antenitas_vinil', unlockLocation: 'casa_clotilde' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_siesta',
      label: '¿Dónde estaba a las 9:30 PM?',
      dialogue: [
        { speaker: 'JAIMITO', text: 'En la banca del parque, evitando la fatiga. El carrito se quedó solitito en el callejón. La policía no lo revisó; sólo aseguraron la bóveda.', pose: 'jaimito_tired' }
      ]
    }
  ]
};
