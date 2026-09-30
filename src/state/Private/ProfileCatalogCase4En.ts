// @Architecture(descriptionShort="English character record entries for Case 4", type="catalog", icon="database")
/** Character Record — Case 4, Act 4 milestones. */

import type { ProfileCatalogMap } from '../../types/index.js';

export const CASE4_PROFILES_EN: ProfileCatalogMap = {
  perfil_chimoltrufia: {
    id: 'perfil_chimoltrufia', name: 'La Chimoltrufia', role: 'Botija’s wife',
    icon: 'assets/chimoltrufia_idle.webp',
    desc: 'Botija’s wife. She came to the Detention Center worried about her husband.',
    updates: ['Botija’s wife, worried about her husband. She has worked at the hotel for fourteen years and knows the front desk files.']
  },
  perfil_botija: {
    id: 'perfil_botija', name: 'Gordon Botija', role: 'Murder defendant',
    icon: 'assets/botija_idle.webp',
    desc: 'Plumber at the Gran Hotel Buena Vista, accused of murder. He has been in custody since the previous night.',
    updates: [
      'Plumber at the Gran Hotel Buena Vista, accused of murder and in custody since the previous night. He recognized the dead man as Cuajinais, an old acquaintance; he took the wallet and hid for fear they would link them again.',
      'Plumber at the Gran Hotel Buena Vista, accused of murder and in custody since the previous night. He recognized Cuajinais as an old acquaintance, took the wallet, and hid for fear they would link them. He says he turned down Cuajinais’s offer to work together again; several people heard their argument.'
    ]
  },
  perfil_donramon: {
    id: 'perfil_donramon', name: 'Don Ramón', role: 'Defense attorney',
    icon: 'assets/profile_perfil_donramon.webp',
    desc: 'Botija’s defense attorney. He comes to the Detention Center to hear Botija’s account.'
  },
  perfil_chapulin: {
    id: 'perfil_chapulin', name: 'Chapulín Colorado', role: 'Co-counsel',
    icon: 'assets/profile_perfil_chapulin.webp',
    desc: 'Chapulín Colorado. He accompanies Don Ramón and helps hear Botija’s account.'
  },
  perfil_cecilio: {
    id: 'perfil_cecilio', name: 'Don Cecilio Buenavista', role: 'Front desk attendant',
    icon: 'assets/cecilio_idle.webp',
    desc: 'Cecilio Buenavista, the person who welcomes guests at the Gran Hotel Buena Vista.',
    updates: [
      'Owner and manager of the Gran Hotel Buena Vista, with thirty-one years behind the front desk.',
      'Owner and manager of the Gran Hotel Buena Vista, with thirty-one years behind the front desk. His eyesight is poor: at two meters, he can make out colors but not people.'
    ]
  },
  perfil_rufino: {
    id: 'perfil_rufino', name: 'Rufino Rufián', role: 'Guest in Suite 204',
    icon: 'assets/rufino_monocle.webp',
    desc: 'Guest in Suite 204. He introduces himself as the Count of Montemayor.',
    updates: [
      'A guest in Suite 204 who introduces himself as the Count of Montemayor. He explains that the head of his ring turns to protect its design and that he uses it to seal correspondence.',
      'A guest in Suite 204 who introduces himself as the Count of Montemayor. He explained that he uses his ring to seal correspondence. He admits Cuajinais visited him and that he received Cuajinais’s signature; he also confirms receiving trunk B-17.'
    ]
  },
  perfil_sargento: {
    id: 'perfil_sargento', name: 'The Sergeant', role: 'Police officer in charge of the scene',
    icon: 'assets/profile_perfil_sargento.webp',
    desc: 'Sergeant Refugio Pazguato, the officer in charge of the scene. He numbers objects and asks that he be notified before anything is moved.',
  },
  perfil_maruja: {
    id: 'perfil_maruja', name: 'Maruja', role: 'Guest at the Buena Vista',
    icon: 'assets/maruja_idle.webp',
    desc: 'Guest at the Buena Vista. There, they call her the Siren of the Hotel.',
    updates: ['She kept the cork Cuajinais gave her when he opened the bottle, before he drank, and handed it to the Sergeant.']
  },
  perfil_cuajinais: {
    id: 'perfil_cuajinais', name: 'El Cuajinais', role: 'Guest found dead in Suite 304',
    icon: 'assets/profile_perfil_cuajinais.webp',
    desc: 'Guest found dead in Suite 304. Botija says he knew him from before.',
    updates: [
      'A guest found dead in Suite 304; Botija says he knew him from before. The examination establishes that he died before the gunshot wound, without identifying who killed him or how.',
      'A guest found dead in Suite 304 and an old acquaintance of Botija. The examination establishes that he died before the gunshot wound. Maruja saw him alive in Suite 204 that night, before he drank from the bottle.',
      'A guest found dead in Suite 304 and an old acquaintance of Botija. The examination establishes that he died before the gunshot wound; Maruja saw him alive before he drank from the bottle. The telegram establishes that he demanded a share of the Cleopatra Necklace from Rufino and threatened to go to the police.'
    ]
  },
  perfil_supersam: {
    id: 'perfil_supersam', name: 'Super Sam', role: 'Prosecutor',
    icon: 'assets/profile_perfil_supersam.webp',
    desc: 'Prosecutor. He argues that Botija is responsible for the death and cites his presence in Suite 304 as part of the case.',
  },
  perfil_chompiras: {
    id: 'perfil_chompiras', name: 'El Chómpiras', role: 'Bellhop and freight-elevator operator',
    icon: 'assets/profile_perfil_chompiras.webp',
    desc: 'Bellhop and freight-elevator operator at the Gran Hotel Buena Vista. He keeps a record of luggage passing through the lift.',
  },
  perfil_juez: {
    id: 'perfil_juez', name: 'The Judge', role: 'Court Judge',
    icon: 'assets/judge_neutral.webp',
    desc: 'Court judge. He insists on distinguishing a possibility, what the evidence corroborates, and what has actually been proven.'
  }
};
