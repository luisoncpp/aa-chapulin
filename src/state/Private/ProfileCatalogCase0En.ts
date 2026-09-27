// @Architecture(descriptionShort="English character record entries for Case 0", type="catalog", icon="database")
/** Character Record — Case 0 (English). Spec §5.1. */

import type { ProfileCatalogMap } from '../../types/index.js';

export const CASE0_PROFILES_EN: ProfileCatalogMap = {
  perfil_donramon: {
    id: 'perfil_donramon', name: 'Don Ramón', role: 'Defense attorney',
    icon: 'assets/profile_perfil_donramon.webp',
    desc: 'A sidewalk lawyer in his first trial. He owes fourteen months of rent.'
  },
  perfil_chapulin: {
    id: 'perfil_chapulin', name: 'El Chapulín Colorado', role: 'Defense advisor',
    icon: 'assets/profile_perfil_chapulin.webp',
    desc: 'Joins Don Ramón as his legal advisor. Explains how to listen to testimony, press witnesses, and present evidence.'
  },
  perfil_supersam: {
    id: 'perfil_supersam', name: 'Super Sam', role: 'Prosecutor',
    icon: 'assets/profile_perfil_supersam.webp',
    desc: 'The prosecutor in this case. He believes Toribio’s rent debt and presence beside the collector are enough to accuse him.',
    updates: ['The prosecution withdrew its charge against Toribio after the evidence failed to support it.']
  },
  perfil_toribio: {
    id: 'perfil_toribio', name: 'Toribio Pantoja', role: 'Defendant; paleta seller',
    icon: 'assets/toribio_idle.webp',
    desc: 'A twenty-year-old paleta seller accused of assaulting Mr. Nazario. He owed two months’ rent and was found beside the victim.',
    updates: [
      'The ice-shop receipt records his arrival at 1:05 and departure at 1:55, supporting his alibi for one o’clock.',
      'The court found him not guilty.'
    ]
  },
  perfil_casimiro: {
    id: 'perfil_casimiro', name: 'Casimiro Lengua', role: 'Prosecution witness',
    icon: 'assets/profile_perfil_casimiro.webp',
    desc: 'He identifies himself as an authorized distributor for The Universal Knowledge Encyclopedias.',
    updates: [
      'His business credentials were discredited: the company was dissolved, with no verifiable orders or route.',
      'The court ordered his arrest for assaulting Mr. Nazario and taking the collection file.'
    ]
  },
  perfil_nazario: {
    id: 'perfil_nazario', name: 'Don Nazario Cuenca', role: 'Rent collector; victim',
    icon: 'assets/foto_nazario.webp',
    desc: 'He survived an assault in house 4. He has amnesia about the incident and cannot testify.',
    updates: ['The report and testimony establish that he was struck from behind and above inside house 4.']
  }
};
