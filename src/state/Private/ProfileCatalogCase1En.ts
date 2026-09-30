// @Architecture(descriptionShort="English character record entries for Case 1", type="catalog", icon="database")
/**
 * Character Record — Case 1 (English). Spec §6.4 and §21.
 * Consumed through [[./ProfileCatalog.ts]].
 */

import type { ProfileCatalogMap } from '../../types/index.js';

export const CASE1_PROFILES_EN: ProfileCatalogMap = {
  perfil_chapulin: {
    id: 'perfil_chapulin',
    name: 'El Chapulín Colorado',
    role: 'The defendant',
    icon: 'assets/profile_perfil_chapulin.webp',
    desc: 'The defendant. Professional hero. Arrested at 9:07 PM beside the night watchman, his Chipote Chillón in his hand. Says he arrived late.',
    updates: [
      'The defendant is a professional hero arrested at 9:07 PM beside the watchman, his Chipote Chillón in hand. He says he arrived late. He is 1.62 m (5’4”); the watchman is 6’3” in boots. To strike him from above, he would have had to be standing on something.'
    ]
  },
  perfil_donramon: {
    id: 'perfil_donramon',
    name: 'Don Ramón',
    role: 'Defense attorney',
    icon: 'assets/profile_perfil_donramon.webp',
    desc: 'Defense attorney. Fourteen months of unpaid rent. First time defending someone who can jump over buildings.'
  },
  perfil_supersam: {
    id: 'perfil_supersam',
    name: 'Super Sam',
    role: 'Prosecutor',
    icon: 'assets/profile_perfil_supersam.webp',
    desc: 'Prosecutor. Paid by the closed case. Closed this one in five minutes. Today he took the floor without his dollar bag on his shoulder.',
  },
  perfil_tripaseca: {
    id: 'perfil_tripaseca',
    name: 'El Tripaseca',
    role: 'Star witness',
    icon: 'assets/profile_perfil_tripaseca.webp',
    desc: 'Star witness. A trader: buys cheap and sells whatever will sell. Says he was walking through the loading alley around nine.',
    updates: [
      'The star witness is a trader who buys cheap and sells whatever will sell. He says he was walking through the loading alley around nine. His account places the defendant on the display case pedestal, though he has not explained how he knew about it.',
      'The star witness is a trader who buys cheap and sells whatever will sell. He says he was walking through the loading alley around nine. His account places the defendant on a pedestal that cannot be seen from the alley; he also knows the loading door latch has been broken since March.'
    ]
  },
  perfil_florinda: {
    id: 'perfil_florinda',
    name: 'Doña Florinda',
    role: 'Museum curator',
    icon: 'assets/profile_perfil_florinda.webp',
    desc: 'Curator of the Museum of Curiosities. Holder of the only key to the front door. Locked up at 8:40 PM with Professor Jirafales as witness.',
    updates: [
      'Curator of the Museum of Curiosities and holder of the only front-door key; she locked up at 8:40 PM with Professor Jirafales as a witness. She arrived at 9:05 PM and saw the defendant standing beside the watchman, but did not witness the assault.'
    ]
  },
  perfil_jirafales: {
    id: 'perfil_jirafales',
    name: 'Professor Jirafales',
    role: 'Guest lecturer',
    icon: 'assets/profile_perfil_jirafales.webp',
    desc: "Guest lecturer and an old acquaintance from Don Ramón's neighborhood. Gave the 8:00 PM talk about the Chicharra. Keeps a stopwatch record of everything he does."
  },
  perfil_almanegra: {
    id: 'perfil_almanegra',
    name: 'Alma Negra',
    role: 'Night watchman / victim',
    icon: 'assets/profile_perfil_almanegra.webp',
    desc: 'Museum night watchman. The victim. Woke up on the second day. Occipital fracture. Talks like a pirate because, he says, he was one.',
    updates: [
      'The museum night watchman and the victim. He woke on the second day, has an occipital fracture, and speaks like a pirate because he says he used to be one. His round is written in a notebook hanging from a nail, in plain sight of any visitor.'
    ]
  }
};
