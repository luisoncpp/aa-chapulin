// @Architecture(descriptionShort="Case 3 day 2 precinct visit with transmission log", type="data", icon="layers")
/**
 * Case 3 Day 2 — Delegación de Policía (`delegacion`).
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE3_DELEGACION: InvestigationScene = {
  title: 'Delegación de Policía',
  name: 'Delegación',
  bg: 'assets/bg_delegacion.jpg',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: '17 de septiembre, 5:00 PM. Delegación de Policía, escritorio del fondo, el que le tocó al sargento.' },
    { speaker: 'SARGENTO', text: 'Pásele, Licenciado. ¿Gusta? Es torta de frijoles. Ya nomás como de frijoles porque el fiscal me dejó la quincena en catorce pesos.', pose: 'pazguato_sweat' },
    { speaker: 'DEFENSA', text: 'No, gracias, sargento. ¿Qué recogió usted de la cabina de control?', pose: 'donramon_idle' },
    { speaker: 'SARGENTO', text: 'Aquí traigo la bitácora de transmisión, mi Licenciado. Ahí apunta la consola todo lo que sale al aire, solita.', pose: 'pazguato_decidido', addEvidence: 'bitacora_transmision' },
    { speaker: 'DEFENSA', text: '...Sargento. Aquí dice que a las 23:03 salió al aire un CORTE DE ESTACIÓN AUTOMÁTICO. Cartucho tres.', pose: 'donramon_shock' },
    { speaker: 'SARGENTO', text: 'Sí, ¿verdad? Yo también le entendí re\' poquito.', pose: 'pazguato_sweat' },
    { speaker: 'CHAPULIN', text: '¡Monchito! ¡Eso quiere decir que a las 11:03 la consola no estaba transmitiendo a nadie... estaba tocando una grabación!', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: '¡CHANFLE! ¡El grito que oyó toda la plaza estaba enlatado!', pose: 'donramon_panic', sfx: 'realization', updateEvidence: 'microfono_cabina' }
  ],
  hotspots: [
    {
      id: 'hotspot_archivo',
      label: 'Archivero de Pruebas',
      x: 68, y: 18, w: 24, h: 48,
      dialogue: [
        { speaker: 'SARGENTO', text: 'Ahí guardo lo que no me descuenta el fiscal. Por ahora, puro papel.', pose: 'pazguato_idle' }
      ]
    },
    {
      id: 'hotspot_torta',
      label: 'Torta de Frijoles',
      x: 36, y: 42, w: 20, h: 20,
      dialogue: [
        { speaker: 'DEFENSA', text: '(Mejor no. Ya sé dónde guardó el informe médico.)', pose: 'donramon_sweat' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_cartucho',
      label: '¿Dónde está el cartucho tres?',
      dialogue: [
        { speaker: 'SARGENTO', text: 'Es que... yo me llevé el carrete más gordo del estante de la Cabina A. Pensé que era el bueno. Era un carrete de boleros. Los cartuchos se me quedaron... en algún lado de la estación.', pose: 'pazguato_sweat' },
        { speaker: 'DEFENSA', text: '(El cartucho 3 sigue perdido. Y la cinta del sketch de los jueves sigue en el estante de la Cabina A.)', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: 'Si me dan chance, yo lo busco. Aunque tenga que meter las manitas en la basura.', pose: 'pazguato_decidido' }
      ]
    }
  ]
};
