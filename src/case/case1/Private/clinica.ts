// @Architecture(descriptionShort="Case 1 day 1 clinic visit closing the investigation", type="data", icon="layers")
/**
 * Caso 1, Día 1 — Clínica municipal (`clinica`). Spec §9.3.
 * `hotspot_expediente` entrega `informe_medico`, la última prueba requerida del
 * día, y encola en la misma cola el bloque de cierre de jornada.
 * La víctima está pintada en el fondo porque Examinar oculta sprites.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE1_CLINICA: InvestigationScene = {
  title: 'Clínica Municipal - Cuarto 6',
  name: 'Clínica',
  bg: 'assets/bg_clinica_cuarto6.webp',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  idlePose: null,
  intro: [
    { speaker: 'NARRADOR', text: '22 de agosto, 12:00 PM. Clínica municipal, cuarto 6.', bg: 'assets/bg_clinica_cuarto6.webp', furniture: 'none', bgm: 'detention_center' },
    { speaker: 'NARRADOR', text: 'En la cama hay un hombre enorme, con parche en el ojo y la cabeza vendada. No se mueve.' },
    { speaker: 'DEFENSA', text: 'Con que éste es Alma Negra. Parece que lo bajaron de un galeón.', pose: 'donramon_idle' },
    { speaker: 'DEFENSA', text: '(Un metro noventa y dos. Con las botas, más. Y a mi cliente le calculo un metro sesenta parado de puntitas.)', pose: 'donramon_shock' }
  ],
  hotspots: [
    {
      id: 'hotspot_expediente',
      label: 'Expediente a los pies de la cama',
      x: 28, y: 72, w: 34, h: 19,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Una carpeta de cartón atada con listón.' },
        { speaker: 'DEFENSA', text: '"Golpe único en la región occipital. Objeto pesado, denso, sin aristas."', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: 'Sin aristas. O sea que no fue el filo de nada. Ni un fierro, ni una esquina, ni un candelabro.', pose: 'donramon_shock' },
        { speaker: 'DEFENSA', text: '"Pronóstico reservado. Sin aptitud para declarar."', pose: 'donramon_sweat' },
        { speaker: 'DEFENSA', text: '(Un solo golpe. El pobre hombre no alcanzó ni a voltear.)', pose: 'donramon_idle', addEvidence: 'informe_medico' },
        { speaker: 'NARRADOR', text: 'El botón de JUICIO se ilumina.', sfx: 'realization' },
        { speaker: 'DEFENSA', text: '(Ocho pruebas, cero coartada y un cliente que llegó cinco minutos tarde a su propia inocencia.)', pose: 'donramon_sweat' },
        { speaker: 'DEFENSA', text: '(Pues vámonos. Que no panda el cúnico, dijo el otro.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'hotspot_vendaje',
      label: 'Vendaje de la nuca',
      x: 70, y: 24, w: 17, h: 23,
      dialogue: [
        { speaker: 'NARRADOR', text: 'La venda deja ver el borde de la herida: un hundimiento ancho, sin cortes.' },
        { speaker: 'DEFENSA', text: '(Ancho y hundido. Como si le hubieran dejado caer encima un costal.)', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(Con el chipote de vinil ese, lo más que le sacas a un cráneo es un chiflido.)', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'hotspot_silla',
      label: 'Silla junto a la cama',
      x: 3, y: 33, w: 22, h: 45,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Una silla, un rosario y una bolsa del mandado con un tejido a medias.' },
        { speaker: 'DEFENSA', text: 'Doña Florinda se pasa las tardes aquí.', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(Le grita a medio mundo y se viene a tejer junto a su velador. Uno nunca sabe con la gente.)', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: []
};
