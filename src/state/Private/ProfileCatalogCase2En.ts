// @Architecture(descriptionShort="English character record entries for Case 2", type="catalog", icon="database")
/** Character Record — Case 2, Act 1 milestones. */

import type { ProfileCatalogMap } from '../../types/index.js';

export const CASE2_PROFILES_EN: ProfileCatalogMap = {
  perfil_donramon: {
    id: 'perfil_donramon', name: 'Don Ramón', role: 'Defense attorney',
    icon: 'assets/profile_perfil_donramon.webp',
    desc: 'Defense attorney for El Chómpiras. He is fourteen months behind on rent and works with Chapulín Colorado.'
  },
  perfil_chapulin: {
    id: 'perfil_chapulin', name: 'Chapulín Colorado', role: 'Co-counsel',
    icon: 'assets/profile_perfil_chapulin.webp',
    desc: 'Hero and co-counsel for El Chómpiras. His vinyl antennae detect clues, but do not explain by themselves what made them vibrate.'
  },
  perfil_chompiras: {
    id: 'perfil_chompiras', name: 'El Chómpiras', role: 'Defendant',
    icon: 'assets/profile_perfil_chompiras.webp',
    desc: 'Aquiles Esquivel Madrazo, known as El Chómpiras. He is accused of stealing the Golden Chanfle.',
    updates: [
      'Aquiles Esquivel Madrazo, known as El Chómpiras, is accused of stealing the Golden Chanfle. The residue in the vent matches the sedative essence; the evidence indicates he was deeply asleep during part of the theft.'
    ]
  },
  perfil_florinda: {
    id: 'perfil_florinda', name: 'Doña Florinda', role: 'Restaurant manager',
    icon: 'assets/profile_perfil_florinda.webp',
    desc: 'Owner of the restaurant beside the hacienda.',
  },
  perfil_peterete: {
    id: 'perfil_peterete', name: 'El Peterete', role: 'Chief of security',
    icon: 'assets/peterete_smug.webp',
    desc: 'Chief of security and certified appraiser for the hacienda. He takes part in the vault inspection.',
    updates: [
      'Chief of security and certified appraiser who took part in the vault inspection. He claims Chómpiras forced the safe during the blackout and that the theft took place at 10:00 PM; the report contradicts damage from a crowbar.',
      'Chief of security and certified appraiser. He claims Chómpiras forced the safe during the blackout and that the theft took place at 10:00 PM; the report contradicts crowbar damage. The citation and postal ledger contradict his claim that he was at the post office at 9:30 PM.',
      'Chief of security and certified appraiser. His account of the theft is contradicted by the report and postal record. The blueprint shows a dumbwaiter between the vault and the alley, against his claim that there was no way outside.',
      'Chief of security and certified appraiser. His account of the vault, timing, and mail was contradicted by the reports and blueprint. The mold reproduces the master key.'
    ]
  },
  perfil_jirafales: {
    id: 'perfil_jirafales', name: 'Professor Jirafales', role: 'Professor and guest',
    icon: 'assets/profile_perfil_jirafales.webp',
    desc: 'Professor and guest at Doña Florinda’s restaurant on the night of the theft. He takes an interest in architecture and precision.',
    updates: [
      'Professor and guest at Doña Florinda’s restaurant, interested in architecture and precision. His blueprint shows the ventilation duct and a dumbwaiter connecting the vault to the alley.'
    ]
  },
  perfil_jaimito: {
    id: 'perfil_jaimito', name: 'Don Jaimito', role: 'Mail carrier',
    icon: 'assets/jaimito_idle.webp',
    desc: 'Mail carrier from Tangamandapio. His mail cart was in the alley behind the hacienda.',
    updates: [
      'Mail carrier from Tangamandapio whose cart was in the alley behind the hacienda. His official stamp never leaves him; the 9:30 PM postal entry bears an irregular hand stamp.'
    ]
  },
  perfil_clotilde: {
    id: 'perfil_clotilde', name: 'Doña Clotilde', role: 'Neighbor and amateur botanist',
    icon: 'assets/clotilde_idle.webp',
    desc: 'A neighbor with an interest in botany. She prepares an essence of roses and valerian.',
    updates: [
      'A neighbor interested in botany who makes rose and valerian essence. An elegant customer bought three bottles the afternoon before the theft; Clotilde remembers his hat and scarf, but does not name him.'
    ]
  },
  perfil_supersam: {
    id: 'perfil_supersam', name: 'Super Sam', role: 'Prosecutor',
    icon: 'assets/profile_perfil_supersam.webp',
    desc: 'Prosecutor on the case. He demands a quick verdict against El Chómpiras and claims he was caught with the crime tool.'
  }
};
