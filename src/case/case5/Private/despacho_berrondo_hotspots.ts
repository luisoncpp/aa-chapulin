// @Architecture(descriptionShort="Case 5 day 2 Berrondo office vitrina and portrait hotspots", type="data", icon="layers")
/**
 * Caso 5, Día 2 — puntos de interés del despacho del Lic. Berrondo. Spec §12.3.
 */

import type { Hotspot } from '../../../types/index.js';

export const CASE5_BERRONDO_HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot_vitrina',
    label: 'Vitrina de la sindicatura',
    x: 0, y: 28, w: 28, h: 42,
    dialogue: [
      { speaker: 'NARRADOR', text: 'Una vitrina de caoba con tres legajos exhibidos como si fueran trofeos, y un marco con una credencial.' },
      { speaker: 'DEFENSA', text: '«Fulgencio Berrondo. Síndico. Quiebra 114/1971.»', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'Enciclopedias El Saber Universal, Sociedad Anónima. Mi primera sindicatura y la última que me queda abierta.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '¿Once años abierta?', pose: 'chapulin_panic' },
      { speaker: 'BERRONDO', text: 'Once años, casi nueve meses. Hay acreedores que murieron esperando y herederos que no aparecen.', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: 'Un concurso no se cierra cuando uno quiere, licenciado. Se cierra cuando ya no queda nadie a quien deberle.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '¿Y esa credencial sirve para algo todavía?', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'Sirve para todo. Tenga, llévese una copia certificada; la tengo hecha desde hace años porque me la piden mucho.', pose: 'berrondo_idle', addEvidence: 'credencial_sindico' },
      { speaker: 'DEFENSA', text: '(Me la dio él. Me la dio él sin que se la pidiera.)', pose: 'chapulin_idle' }
    ]
  },
  {
    id: 'hotspot_retrato',
    label: 'Retrato de la editorial',
    x: 0, y: 4, w: 16, h: 28,
    dialogue: [
      { speaker: 'NARRADOR', text: 'Una fotografía enmarcada: cincuenta hombres de traje frente a un edificio, con una banda que dice «EL SABER UNIVERSAL · 1969».' },
      { speaker: 'DEFENSA', text: '¿Ésta es la empresa?', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'Ciento diez distribuidores, licenciado. Ahí están cincuenta. Los otros andaban en la calle, que era su oficio.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '¿Y usted cuál es?', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: 'Yo no estoy. Yo llegué en el setenta y uno, cuando ya no había a quién retratar.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '(Cincuenta caras. ¿Estará aquí el señor Lengua?)', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'Si busca usted al occiso, no pierda el tiempo. Yo tampoco lo encontré y lo intenté anoche dos horas.', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: 'Ciento diez hombres, licenciado, y para mí no eran hombres: eran una partida del pasivo.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '(Y lo dice sin que le tiemble la voz. Como quien dice que llovió.)', pose: 'chapulin_idle' }
    ]
  }
];
