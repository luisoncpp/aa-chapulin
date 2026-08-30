// @Architecture(descriptionShort="Case 3 day 2 clinic scene with Ñoño and kermés libretto", type="data", icon="layers")
/**
 * Case 3 Day 2 — Clínica del Doctor Chapatín (`clinica_chapatin`).
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE3_CLINICA: InvestigationScene = {
  title: 'Clínica del Doctor Chapatín',
  name: 'Clínica Chapatín',
  bg: 'assets/bg_clinica.jpg',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: '17 de septiembre, 12:00 PM. Clínica del Doctor Chapatín — la más cercana al edificio, y por eso trasladaron aquí a la víctima.' },
    { speaker: 'NONO', text: 'Mi papi sigue dormido... Dicen que a lo mejor despierta, y a lo mejor no.', pose: 'nono_nervioso' },
    { speaker: 'DEFENSA', text: 'Joven Ñoño, ¿usted estuvo toda la noche en la consola?', pose: 'donramon_idle' },
    { speaker: 'NONO', text: '¡Sí! ¡Toda! ¡Todita! ¡No me moví ni un segundito!', pose: 'nono_nervioso' },
    { speaker: 'CHAPULIN', text: '(Monchito, ese muchacho dijo "todita" y le sudaron hasta los cachetes.)', pose: 'chapulin_thinking' },
    { speaker: 'JIRAFALES', text: 'Licenciado, tenga usted mi libreto de la kermés. Ahí está minuto por minuto lo que se anunció por las bocinas.', pose: 'jirafales_idle', addEvidence: 'programa_kermes' },
    { speaker: 'DEFENSA', text: '¿Minuto por minuto, profesor?', pose: 'donramon_idle' },
    { speaker: 'JIRAFALES', text: '¡¡¡TA-TA-TA-TA-TAAAAAA!!! ¡Un maestro de ceremonias sin minutario es un charlatán con micrófono!', pose: 'jirafales_angry' }
  ],
  hotspots: [
    {
      id: 'hotspot_libreta',
      label: 'Libreta de Consultas',
      x: 48, y: 36, w: 24, h: 28,
      dialogue: [
        { speaker: 'CHAPULIN', text: '¡Diez cincuenta de la noche! ¡El doctor estaba curando a alguien mientras chirriaba el carrito!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'Y no le cobró. Por eso el viejo prefiere la cárcel: no está tapando a un cómplice, está tapando a un paciente.', pose: 'donramon_point', sfx: 'realization', addEvidence: 'receta_nono' },
        { speaker: 'NONO', text: '¡No diga nada, por favor! ¡Si mi papi se entera de lo de mi corazón se muere del susto!', pose: 'nono_llorando' },
        { speaker: 'DEFENSA', text: 'Su papá está en coma, muchacho. Del susto ya no se muere. De un veredicto injusto, mi cliente sí.', pose: 'donramon_idle', unlockLocation: 'delegacion' }
      ]
    },
    {
      id: 'hotspot_camilla',
      label: 'Camilla del Paciente',
      x: 12, y: 28, w: 28, h: 40,
      dialogue: [
        { speaker: 'FLORINDA', text: 'Pobre Señor Barriga... Y pensar que anoche todavía nos ayudaba a buscar a Quico.', pose: 'florinda_idle' },
        { speaker: 'DEFENSA', text: '(Sigue en coma. Cada hora cuenta.)', pose: 'donramon_sweat' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_nono_console',
      label: 'Sobre la consola esa noche',
      dialogue: [
        { speaker: 'NONO', text: 'Yo... yo no me moví. De veras. Bueno, casi. ¡No diga que dije casi!', pose: 'nono_nervioso' },
        { speaker: 'CHAPULIN', text: '¡Mis antenitas de vinil vibran re\' feo!', pose: 'chapulin_panic' }
      ]
    }
  ]
};
