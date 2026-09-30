// @Architecture(descriptionShort="English character record entries for Case 3", type="catalog", icon="database")
/** Character Record — Case 3, Act 3 milestones. */

import type { ProfileCatalogMap } from '../../types/index.js';

export const CASE3_PROFILES_EN: ProfileCatalogMap = {
  perfil_donramon: {
    id: 'perfil_donramon', name: 'Don Ramón', role: 'Defense attorney',
    icon: 'assets/profile_perfil_donramon.webp',
    desc: 'Defense attorney for Doctor Chapatín. He owes Señor Barriga fifteen months of rent.'
  },
  perfil_chapulin: {
    id: 'perfil_chapulin', name: 'Chapulín Colorado', role: 'Co-counsel',
    icon: 'assets/profile_perfil_chapulin.webp',
    desc: 'Co-counsel. A hero with little antennae and proverbs that rarely come out whole.'
  },
  perfil_chapatin: {
    id: 'perfil_chapatin', name: 'Doctor Chapatín', role: 'Defendant',
    icon: 'assets/chapatin_idle.webp',
    desc: 'Accused of attacking Señor Barriga. An elderly, grouchy doctor who carries a paper bag and uses it as a weapon.',
    updates: [
      'Accused of attacking Señor Barriga, an elderly, grouchy doctor who carries a paper bag as a weapon. He refuses to reveal where he went after leaving the booth and invokes professional secrecy.',
      'Accused of attacking Señor Barriga, an elderly, grouchy doctor who carries a paper bag as a weapon. He invoked professional secrecy about his whereabouts; his clinic log and a patient’s testimony establish that he was treating that patient in the alley at 10:50 PM.'
    ]
  },
  perfil_sargento: {
    id: 'perfil_sargento', name: 'The Sergeant', role: 'Preventive Police',
    icon: 'assets/profile_perfil_sargento.webp',
    desc: 'Preventive Police, rank of sergeant. He was present when Doctor Chapatín was found beside the victim.',
    updates: [
      'A preventive police sergeant who was present when Doctor Chapatín was found beside the victim. He admits moving the trophy before photographing the scene.'
    ]
  },
  perfil_chimoltrufia: {
    id: 'perfil_chimoltrufia', name: 'La Chimoltrufia', role: 'XEVC announcer',
    icon: 'assets/chimoltrufia_idle.webp',
    desc: 'XEVC horoscope announcer — or assistant, or coffee maker.',
    updates: [
      'XEVC horoscope announcer — or assistant, or coffee maker. She was in Cabina C and heard the record cart pass through the hall; she thought it was the janitor.'
    ]
  },
  perfil_florinda: {
    id: 'perfil_florinda', name: 'Doña Florinda', role: 'Fair-stall manager',
    icon: 'assets/profile_perfil_florinda.webp',
    desc: 'Neighborhood committee president and manager of the fair stall.',
    updates: [
      'Neighborhood committee president and manager of the fair stall. She confirms Señor Barriga was alive in the plaza at 9:40 PM, looking for Quico.'
    ]
  },
  perfil_jirafales: {
    id: 'perfil_jirafales', name: 'Professor Jirafales', role: 'Master of ceremonies',
    icon: 'assets/profile_perfil_jirafales.webp',
    desc: 'Master of ceremonies for El Grito. His script preserves a minute-by-minute rundown of the night.'
  },
  perfil_aniceto: {
    id: 'perfil_aniceto', name: 'Don Aniceto Rebollar', role: 'XEVC senior announcer',
    icon: 'assets/aniceto_idle.webp',
    desc: 'XEVC senior announcer. He has been on air for twenty-five years and speaks with impeccable diction.',
    updates: [
      'XEVC senior announcer with twenty-five years on air and impeccable diction. He testified that he was found tied and gagged in the storeroom; the court treats him as a second victim.'
    ]
  },
  perfil_nono: {
    id: 'perfil_nono', name: 'Ñoño', role: 'Console operator',
    icon: 'assets/nono_idle.webp',
    desc: 'XEVC console operator and Señor Barriga’s son. He says he was at the console during El Grito.',
    updates: [
      'XEVC console operator and Señor Barriga’s son. He said he was at the console during El Grito; later he revealed his heart condition and that Doctor Chapatín treats him in secret.'
    ]
  },
  perfil_supersam: {
    id: 'perfil_supersam', name: 'Super Sam', role: 'Prosecutor',
    icon: 'assets/profile_perfil_supersam.webp',
    desc: 'Prosecutor. He wants to close the case before lunch.',
  },
  perfil_barriga: {
    id: 'perfil_barriga', name: 'Señor Barriga', role: 'Victim',
    icon: 'assets/profile_perfil_barriga.webp',
    desc: 'Landlord, owner of XEVC, and victim of the attack. He remains in a coma.',
    updates: [
      'Landlord, owner of XEVC, and victim of the attack. He had discovered $40,000 missing and told a trusted person in his office.'
    ]
  },
  perfil_juez: {
    id: 'perfil_juez', name: 'The Judge', role: 'Court Judge',
    icon: 'assets/judge_neutral.webp',
    desc: 'Court judge. Kind, impressionable, and a fan of XEVC radio programs.'
  }
};
