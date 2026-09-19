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
    desc: 'The defendant. A street-corner lawyer. Seventeen months of back rent that someone paid without telling him. Fifth time in this courthouse, first time in handcuffs.',
    updates: [
      'He was alone with the victim for twelve minutes, with no witness who saw the table.',
      'The corrected window includes him. His defense just put him inside it.'
    ]
  },
  perfil_chapulin: {
    id: 'perfil_chapulin',
    name: 'El Chapulín Colorado',
    role: 'Lead defense',
    icon: 'assets/profile_perfil_chapulin.webp',
    desc: 'Lead defense counsel, appointed by the defendant himself. No law degree, has antennae. Litigates with his client’s borrowed badge.',
    updates: [
      'He has won three trial days in a row and still has not shown that anyone was in that corridor.'
    ]
  },
  perfil_casimiro: {
    id: 'perfil_casimiro',
    name: 'Casimiro Lengua',
    role: 'The victim',
    icon: 'assets/profile_perfil_casimiro.webp',
    desc: 'The victim. Sentenced in July for assaulting collector Nazario Cuenca; that conviction is not in dispute. Asked to testify at the Archive and asked for his own opposing counsel to be present.',
    updates: [
      'They found him with his file open at page 214.',
      'He offered to hand over a card file on November 8. The prosecution answered eighteen days later.'
    ]
  },
  perfil_supersam: {
    id: 'perfil_supersam',
    name: 'Super Sam',
    role: 'Prosecutor',
    icon: 'assets/profile_perfil_supersam.webp',
    desc: 'Prosecutor. Paid by the closed case. Has carried an empty canvas bag since August and nobody has asked why.',
    updates: [
      'He testified against himself without anyone asking him to.'
    ]
  },
  perfil_berrondo: {
    id: 'perfil_berrondo',
    name: 'Fulgencio Berrondo',
    role: 'Assisting accuser',
    icon: 'assets/profile_perfil_berrondo.webp',
    desc: 'Assisting accuser. Licensed attorney since 1955. Syndic of a 1971 bankruptcy that still has not closed. Offered to assist the prosecution without charging fees.',
    updates: [
      'He runs a card file of eleven thousand four hundred cards and sells copies. Not a crime.',
      'Concedes selling is not a crime; the court orders inspection of his crate anyway.',
      'He signed the acknowledgment for a diligence he himself said he did not know.'
    ]
  },
  perfil_nicanor: {
    id: 'perfil_nicanor',
    name: 'Nicanor Tolentino',
    role: 'Janitor',
    icon: 'assets/profile_perfil_nicanor.webp',
    desc: 'Janitor of the Judicial Archive. Thirty-one years of service. Found the body at 5:35 PM while going up to close the corridor.',
    updates: [
      'He dusts Volume XI on Mondays. On the Saturday of the crime he saw the shelf complete.'
    ]
  },
  perfil_genoveva: {
    id: 'perfil_genoveva',
    name: 'Genoveva Peñaloza',
    role: 'Badge window clerk',
    icon: 'assets/profile_perfil_genoveva.webp',
    desc: 'Clerk at the experts and auxiliaries window. Keeps the building’s second logbook. Answers what she is asked and nothing more.',
    updates: [
      'She writes the time when they return the badge. She cannot see the courtyard door and the rules do not require her to.'
    ]
  },
  perfil_sargento: {
    id: 'perfil_sargento',
    name: 'El Sargento',
    role: 'Judicial police',
    icon: 'assets/profile_perfil_sargento.webp',
    desc: 'Judicial police. Ordered the analyses, moved nothing, and logged everything. Says he learned in September.'
  },
  perfil_barriga: {
    id: 'perfil_barriga',
    name: 'Señor Barriga',
    role: 'Landlord',
    icon: 'assets/profile_perfil_barriga.webp',
    desc: 'The defendant’s landlord. Seventeen years collecting from him. Received seventeen months in cash on November 29 and issued a receipt.'
  },
  perfil_chompiras: {
    id: 'perfil_chompiras',
    name: 'El Chómpiras',
    role: 'Porter',
    icon: 'assets/profile_perfil_chompiras.webp',
    desc: 'Archive porter. Acquitted in August of stealing the Golden Chanfle. First steady job he has had and he does not intend to lose it.',
    updates: [
      'He has helped unseal Crate 9 since September and has seen it open six or seven times.'
    ]
  }
};
