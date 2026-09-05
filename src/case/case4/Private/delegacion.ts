// @Architecture(descriptionShort="Case 4 day 2 precinct visit with forensic report", type="data", icon="layers")
/**
 * Case 4 Day 2 — Delegación de Policía (`delegacion`).
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_DELEGACION: InvestigationScene = {
  title: 'Delegación de Policía',
  name: 'Delegación',
  bg: 'assets/bg_delegacion.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: '26 de octubre, 3:30 PM. Delegación Central de Policía.' },
    { speaker: 'SARGENTO', text: '¡Mi Licenciado! ¡Acaba de salir del horno el protocolo de autopsia toxicológica de la capital!', pose: 'pazguato_saludo' },
    { speaker: 'DEFENSA', text: 'Desembucha, Sargento, que la corte sesiona en media hora.', pose: 'donramon_idle' },
    { speaker: 'SARGENTO', text: '¡Se va a caer para atrás! La herida de bala en el pecho no tiene quemadura cutánea ni coágulos en los pulmones... ¡El Cuajinais ya no respiraba cuando el proyectil le atravesó la ropa!', pose: 'pazguato_sweat', addEvidence: 'informe_forense' },
    { speaker: 'DEFENSA', text: '¡Chanfle! ¿Me estás diciendo que le dispararon a un fiambre?', pose: 'donramon_shock', sfx: 'realization' },
    { speaker: 'CHAPULIN', text: '¡No contaban con mi astucia! ¡Murió por veneno antes de las diez de la noche!', pose: 'chapulin_point' }
  ],
  hotspots: [
    {
      id: 'hotspot_archivo',
      label: 'Archivero de Pruebas',
      x: 8, y: 16, w: 18, h: 50,
      dialogue: [
        { speaker: 'SARGENTO', text: 'Aquí guardo lo que no me descuenta el fiscal. El informe forense ya está en su acta.', pose: 'pazguato_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_cyanide',
      label: '¿Causa real de la muerte?',
      dialogue: [
        { speaker: 'SARGENTO', text: 'Asfixia celular por cianuro de potasio entre las 9:30 y las 10:00 PM. El disparo de las 11:15 fue post-mortem.', pose: 'pazguato_decidido' },
        { speaker: 'DEFENSA', text: '(Giro 1... La falsa hora de muerte. En un rato lo destrozamos en el tribunal.)', pose: 'donramon_point' }
      ]
    }
  ]
};
