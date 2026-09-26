// @Architecture(descriptionShort="Case 5 day 1 judicial archive vestibule scene", type="data", icon="layers")
/**
 * Caso 5, Día 1 — Archivo Judicial, vestíbulo (`archivo_vestibulo`). Spec §10.2.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_VESTIBULO_HOTSPOTS } from './archivo_vestibulo_hotspots.js';
import { CASE5_VESTIBULO_TALKS } from './archivo_vestibulo_talks.js';

export const CASE5_ARCHIVO_VESTIBULO: InvestigationScene = {
  title: 'Archivo Judicial - Vestíbulo',
  name: 'Archivo Judicial - Vestíbulo',
  bg: 'assets/bg_archivo_vestibulo.webp',
  bgm: 'archivo',
  speaker: 'NARRADOR',
  idlePose: 'nicanor_idle',
  intro: [
    { speaker: 'NARRADOR', text: '6 de diciembre, 10:15 AM. Archivo Judicial del Distrito, vestíbulo.', bg: 'assets/bg_archivo_vestibulo.webp', furniture: 'none', bgm: 'archivo' },
    { speaker: 'NARRADOR', text: 'Huele a papel viejo, a cera de piso y, desde hace tres días, a ropa secándose.' },
    { speaker: 'NICANOR', text: 'Pásele despacito, joven, que acabo de encerar.', pose: 'nicanor_escoba' },
    { speaker: 'DEFENSA', text: '¡Buenos días! Vengo de parte de la defensa del licenciado Valdés.', pose: 'chapulin_point' },
    { speaker: 'NICANOR', text: '...¿Usted es de la defensa?', pose: 'nicanor_idle' },
    { speaker: 'DEFENSA', text: '¡Soy la defensa!', pose: 'chapulin_idle' },
    { speaker: 'NICANOR', text: 'Ah. Pues yo soy el conserje y llevo treinta y un años. Aquí ya nada me sorprende, ni usted.', pose: 'nicanor_idle' },
    { speaker: 'NICANOR', text: 'Nicanor Tolentino, para servirle. Yo fui el que lo encontró.', pose: 'nicanor_sweat', addProfile: 'perfil_nicanor' },
    { speaker: 'DEFENSA', text: 'Don Nicanor, ¿le puedo preguntar cosas?', pose: 'chapulin_idle' },
    { speaker: 'NICANOR', text: 'Pregunte, pero camine por la orilla. Y no me toque nada del pasillo siete, que ahí se murió un cristiano y todavía huele a humedad.', pose: 'nicanor_escoba' },
    { speaker: 'DEFENSA', text: '¿A humedad?', pose: 'chapulin_idle' },
    { speaker: 'NICANOR', text: 'Se reventó un tubo el tres de diciembre. La humedad se come el papel, joven. La humedad y los ratones.', pose: 'nicanor_idle' },
    { speaker: 'NICANOR', text: 'Pusieron la caldera y dos secadores al máximo desde el tres de diciembre. Aquello es un horno.', pose: 'nicanor_sweat' },
    { speaker: 'DEFENSA', text: '(Un horno. Bueno. Por lo menos el muerto no se resfrió.)', pose: 'chapulin_idle' }
  ],
  hotspots: CASE5_VESTIBULO_HOTSPOTS,
  talkOptions: CASE5_VESTIBULO_TALKS
};
