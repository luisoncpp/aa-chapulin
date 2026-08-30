// @Architecture(descriptionShort="Case 3 day 1 XEVC Cabina B investigation scene", type="data", icon="layers")
/**
 * Case 3 Day 1 — XEVC Cabina B (`cabina_radio`).
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CABINA_HOTSPOTS } from './cabina_hotspots.js';

export const CASE3_CABINA: InvestigationScene = {
  title: 'Radiodifusora XEVC - Cabina B',
  name: 'Cabina B',
  bg: 'assets/bg_cabina.jpg',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: '16 de septiembre, 11:00 AM. Radiodifusora XEVC, segundo piso del Edificio Barriga.' },
    { speaker: 'PAZGUATO', text: '¡A sus órdenes, mi Licenciado! Sargento Refugio Pazguato, para servir a usted y a la justicia.', pose: 'pazguato_saludo' },
    { speaker: 'DEFENSA', text: '¿La fiscalía sabe que nos deja entrar?', pose: 'donramon_idle' },
    { speaker: 'PAZGUATO', text: 'Ay, no... Y no le diga al Súper Sam, porque ya van tres quincenas que me descuenta. Pero es que yo... yo creo que el doctorcito no fue.', pose: 'pazguato_sweat' },
    { speaker: 'CHAPULIN', text: '¡Ese es el espíritu! ¡Síganme los buenos!', pose: 'chapulin_idle' }
  ],
  hotspots: CABINA_HOTSPOTS,
  talkOptions: [
    {
      id: 'about_informe',
      label: 'El informe médico',
      dialogue: [
        { speaker: 'PAZGUATO', text: 'Aquí traigo el informe, mi Licenciado. Lo traía doblado en cuatro... adentro de una torta de frijoles. No se preocupe, le quité el frijol.', pose: 'pazguato_saludo', addEvidence: 'informe_medico' },
        { speaker: 'DEFENSA', text: '(Fibras rojas de lana en el cabello... Contusión con marca octagonal. Anotado.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'about_who_else',
      label: '¿Quién más estaba en el edificio?',
      dialogue: [
        { speaker: 'PAZGUATO', text: 'El joven Ñoño en la consola, la señora Chimoltrufia en la Cabina C, y don Aniceto... pobre don Aniceto, lo hallamos amarrado en la bodega. Al que le hicieron eso no le tembló la mano.', pose: 'pazguato_sweat', unlockLocation: 'plaza_kermes' },
        { speaker: 'CHAPULIN', text: '¡Hay que hablar con la gente de la plaza!', pose: 'chapulin_point' }
      ]
    }
  ]
};
