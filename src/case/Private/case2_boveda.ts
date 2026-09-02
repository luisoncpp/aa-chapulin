// @Architecture(descriptionShort="Case 2 vault crime scene hotspots and witness banter", type="data", icon="layers")
/**
 * Case 2 Day 1 — Underground vault crime scene.
 */

import type { InvestigationScene } from '../../types/index.js';

export const CASE2_BOVEDA: InvestigationScene = {
  title: 'Gran Bóveda del Tesoro - Escena del Crimen',
  name: 'Bóveda Subterránea',
  bg: 'assets/bg_boveda.webp',
  bgm: 'investigation_core',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: '29 de Agosto, 11:30 AM. Bóveda Subterránea de la Hacienda.' },
    { speaker: 'FLORINDA', text: '¡Esto es inconcebible! ¡Tener a un ladrón de baja ralea merodeando por el vecindario del hotel! ¡Menos mal que el fiscal Super Sam lo apresó de inmediato!', pose: 'florinda_angry' },
    { speaker: 'PETERETE', text: 'Tranquilícese, mi distinguida dama. Como jefe de seguridad, he levantado un peritaje irrebatible. El criminal actuó en solitario a las 10:00 PM.', pose: 'peterete_smug' },
    { speaker: 'DEFENSA', text: '¡Con permisito, dijo Monchito! La defensa entra a inspeccionar la escena del crimen.', pose: 'donramon_idle' },
    { speaker: 'PETERETE', text: "Ja, adelante, 'abogado'. Aunque dudo que su intelecto pueda encontrar algo que la fiscalía haya pasado por alto.", pose: 'peterete_smug' }
  ],
  hotspots: [
    {
      id: 'hotspot_caja',
      label: 'Caja Fuerte Abierta',
      x: 16, y: 16, w: 36, h: 58,
      dialogue: [
        { speaker: 'DEFENSA', text: 'Miren esto... una caja blindada con cerradura de llave maestra y no tiene ni un solo golpe de palanca.', pose: 'donramon_idle', sfx: 'realization', addEvidence: 'informe_boveda' }
      ]
    },
    {
      id: 'hotspot_reloj',
      label: 'Reloj de Péndulo',
      x: 54, y: 8, w: 12, h: 44,
      dialogue: [
        { speaker: 'CHAPULIN', text: '¡Miren ese reloj! ¡Se quedó dormido antes de tiempo! Marca las 9:15 PM y no se mueve.', pose: 'chapulin_idle', addEvidence: 'reloj_pendulo' },
        { speaker: 'PETERETE', text: 'Pamplinas. Ese reloj es una antigüedad decorativa que no funciona desde el siglo pasado.', pose: 'peterete_smug', unlockLocation: 'restaurante' }
      ]
    },
    {
      id: 'hotspot_rejilla',
      label: 'Rejilla de Ventilación',
      x: 70, y: 30, w: 16, h: 28,
      dialogue: [
        { speaker: 'CHAPULIN', text: '¡Mmm! Huele a perfume de rosas con té de tila... ¡igualito al que prepara Doña Clotilde cuando se le mete un susto!', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'Tomaré una muestra con este pañuelo.', pose: 'donramon_idle', sfx: 'realization', addEvidence: 'aroma_dulce' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_alarm',
      label: '¿Quién descubrió al acusado?',
      dialogue: [
        { speaker: 'FLORINDA', text: '¡La alarma sonó a las 10:00 PM! El señor Peterete y yo bajamos y vimos a esa chusma con la palanca.', pose: 'florinda_angry' },
        { speaker: 'PETERETE', text: 'In fraganti. Caso cerrado, Licenciado.', pose: 'peterete_smug' }
      ]
    }
  ]
};
