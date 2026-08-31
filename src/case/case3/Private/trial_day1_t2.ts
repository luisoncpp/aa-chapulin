// @Architecture(descriptionShort="Case 3 day-1 Chimoltrufia testimony and adjournment", type="data", icon="layers")
/**
 * Case 3 Trial Day 1 — Testimony 2 (La Chimoltrufia).
 */

import type { Testimony } from '../../../types/index.js';
import { CASE3_T2_SUCCESS } from './trial_day1_t2_success.js';

export const CASE3_TESTIMONY_2: Testimony = {
  title: 'Testimonio: El pasillo durante el Grito',
  witness: 'La Chimoltrufia',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'stmt2_1',
      speaker: 'CHIMOLTRUFIA',
      pose: 'chimoltrufia_idle',
      text: 'Yo estaba grabando los horóscopos en la Cabina C, ¡como digo una cosa, digo otra!',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'CHIMOLTRUFIA', text: 'Los horóscopos los grabo yo solita porque nadie me quiere ayudar. Ah, y salieron muy bonitos: dije que a los Piscis les iba a ir espantoso, y mire nomás.', pose: 'chimoltrufia_idle' }
      ]
    },
    {
      id: 'stmt2_2',
      speaker: 'CHIMOLTRUFIA',
      pose: 'chimoltrufia_idle',
      text: 'A las 11:03 oí el grito del señor Barriga por la bocinita del pasillo.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'CHIMOLTRUFIA', text: '¡Por la bocinita del pasillo! ¡Como digo una cosa, digo otra!', pose: 'chimoltrufia_confundida' }
      ]
    },
    {
      id: 'stmt2_3',
      speaker: 'CHIMOLTRUFIA',
      pose: 'chimoltrufia_idle',
      text: 'Y por ese pasillo no pasó nadie en toda la noche, más que el doctorcito, que se fue echando pestes a las 10:40.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿Nadie más pasó por ese pasillo en toda la noche?', pose: 'donramon_idle' },
        { speaker: 'CHIMOLTRUFIA', text: 'Bueno, pasar-pasar nadie... pero como a las diez cincuenta oí rechinar las ruedas del carrito de los discos. Ha de haber sido el conserje llevando discos, ¡bien cargadito que iba!', pose: 'chimoltrufia_confundida' },
        { speaker: 'DEFENSA', text: '(Ahí está. A las 10:50 alguien empujaba algo pesado por ese pasillo... y el doctor ya se había ido a las 10:40.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'stmt2_3b',
      speaker: 'CHIMOLTRUFIA',
      pose: 'chimoltrufia_confundida',
      text: 'Como a las diez cincuenta oí el carrito de los discos. Ha de haber sido el conserje, ¡bien cargadito que iba!',
      unlockedBy: 'stmt2_3',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'CHIMOLTRUFIA', text: '¡Bien cargadito, le digo! ¡Ay, qué la canción!', pose: 'chimoltrufia_shock' }
      ],
      contradiction: { evidence: ['marcas_carrito'], successDialogue: CASE3_T2_SUCCESS }
    },
    {
      id: 'stmt2_4',
      speaker: 'CHIMOLTRUFIA',
      pose: 'chimoltrufia_idle',
      text: 'Por eso yo digo que fue él... aunque también digo que quién sabe.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'CHIMOLTRUFIA', text: '¡Como digo una cosa, digo otra!', pose: 'chimoltrufia_confundida' }
      ]
    }
  ]
};
