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
      'He is 5’4”. The watchman is 6’3” in boots. To strike him from above, he would have had to be standing on something.'
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
    updates: [
      'He refused to say where his canvas bag was on the night of the 21st, and he asked for the recess himself.'
    ]
  },
  perfil_tripaseca: {
    id: 'perfil_tripaseca',
    name: 'El Tripaseca',
    role: 'Star witness',
    icon: 'assets/profile_perfil_tripaseca.webp',
    desc: 'Star witness. A trader: buys cheap and sells whatever will sell. Says he was walking through the loading alley around nine.',
    updates: [
      "He described the sound of the blow as 'a sackful of iron hitting the floor'.",
      'He claimed he saw the defendant standing on the display case pedestal. Nobody asked him how he knew there was a pedestal.',
      'He knows the loading door latch has been broken since March.'
    ]
  },
  perfil_florinda: {
    id: 'perfil_florinda',
    name: 'Doña Florinda',
    role: 'Museum curator',
    icon: 'assets/profile_perfil_florinda.webp',
    desc: 'Curator of the Museum of Curiosities. Holder of the only key to the front door. Locked up at 8:40 PM with Professor Jirafales as witness.',
    updates: [
      'She arrived at 9:05 PM and saw the defendant standing beside the watchman. That is all she saw.'
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
      'His round is written down in a notebook that hangs from a nail, in plain sight of any visitor.'
    ]
  }
};
