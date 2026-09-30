// @Architecture(descriptionShort="English character record entries for Case 5", type="catalog", icon="database")
/**
 * Character Record — Case 5 (English). Spec §6.1.
 * Consumed through [[./ProfileCatalog.ts]].
 */

import type { ProfileCatalogMap } from '../../types/index.js';

export const CASE5_PROFILES_EN: ProfileCatalogMap = {
  perfil_donramon: {
    id: 'perfil_donramon',
    name: 'Don Ramón',
    role: 'The defendant',
    icon: 'assets/profile_perfil_donramon.webp',
    desc: 'Accused in Casimiro Lengua’s death. A street-corner lawyer and familiar face to this court; he has never appeared here in handcuffs.',
    updates: [
      'Accused in Casimiro’s death, Ramon once defeated him in the case over the assault on Nazario Cuenca. Even so, he was the only lawyer his old adversary asked to have beside him at the appeal.'
    ]
  },
  perfil_chapulin: {
    id: 'perfil_chapulin',
    name: 'El Chapulín Colorado',
    role: 'Lead defense',
    icon: 'assets/profile_perfil_chapulin.webp',
    desc: 'Lead defense counsel, appointed by the defendant himself. No law degree, has antennae. Litigates with his client’s borrowed badge.',
  },
  perfil_casimiro: {
    id: 'perfil_casimiro',
    name: 'Casimiro Lengua',
    role: 'The victim',
    icon: 'assets/profile_perfil_casimiro.webp',
    desc: 'The victim, sentenced in July for assaulting Nazario Cuenca.',
    updates: [
      'Before his death, Casimiro was still tied to a company dissolved eleven years earlier. His past as a salesman brought him back to the Judicial Archive.',
      'The victim, sentenced in July for assaulting Nazario. As he appealed that conviction, he asked to have Ramon, the lawyer who beat him, present; he now trusted his old adversary.'
    ]
  },
  perfil_supersam: {
    id: 'perfil_supersam',
    name: 'Super Sam',
    role: 'Prosecutor',
    icon: 'assets/profile_perfil_supersam.webp',
    desc: 'A prosecutor accustomed to closing cases quickly and paid by the closed case.',
    updates: [
      'Since August, he has kept a bag to remember the case he closed in five minutes. The ritual follows him outside the prosecutor’s office.',
      'A prosecutor paid by the closed case; for eleven years, he signed hundreds of letters without reading them. His piecework routine no longer looks like a harmless office quirk.',
      'Now he fills that same bag with cotton and carries it to remember the weight that is missing. He admits the ritual helps him keep from forgetting.'
    ]
  },
  perfil_berrondo: {
    id: 'perfil_berrondo',
    name: 'Fulgencio Berrondo',
    role: 'Assisting accuser',
    icon: 'assets/profile_perfil_berrondo.webp',
    desc: 'Assisting accuser and licensed attorney since 1955. He offered to assist the prosecution without charging fees.',
    updates: [
      'As trustee, he is still responsible for the only bankruptcy that remains open. That duty links his career to the victim and the Judicial Archive.',
      'An assisting accuser, attorney since 1955, and trustee for El Saber Universal. He bought its card file when the company was liquidated and sells copies; to Berrondo, it is part of the work.'
    ]
  },
  perfil_nicanor: {
    id: 'perfil_nicanor',
    name: 'Nicanor Tolentino',
    role: 'Janitor',
    icon: 'assets/profile_perfil_nicanor.webp',
    desc: 'Janitor at the Judicial Archive for thirty-one years; he found the victim.',
  },
  perfil_genoveva: {
    id: 'perfil_genoveva',
    name: 'Genoveva Peñaloza',
    role: 'Badge window clerk',
    icon: 'assets/profile_perfil_genoveva.webp',
    desc: 'Courthouse window clerk in charge of the experts and auxiliaries logbook.',
  },
  perfil_sargento: {
    id: 'perfil_sargento',
    name: 'El Sargento',
    role: 'Judicial police',
    icon: 'assets/profile_perfil_sargento.webp',
    desc: 'A methodical judicial officer. After mishandling another scene, he now lets the evidence speak before he touches it.'
  },
  perfil_barriga: {
    id: 'perfil_barriga',
    name: 'Señor Barriga',
    role: 'Landlord',
    icon: 'assets/profile_perfil_barriga.webp',
    desc: 'Don Ramón’s landlord for seventeen years. Their long relationship makes him one of the few people who know the defendant’s daily life.'
  },
  perfil_chompiras: {
    id: 'perfil_chompiras',
    name: 'El Chómpiras',
    role: 'Porter',
    icon: 'assets/profile_perfil_chompiras.webp',
    desc: 'Archive porter since September, acquitted months ago of stealing the Golden Chanfle. This is his first steady job, and he does not want to lose the chance.'
  }
};
