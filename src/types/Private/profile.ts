// @Architecture(descriptionShort="Type schemas for the Acta de Personajes character record", type="types", icon="cube")
/**
 * Character Record (Acta de Personajes) Type Definitions
 * Used by [[src/state/Private/ProfileCatalog.ts]] and [[src/engine/Private/ProfilePresent.ts]].
 */

// @Section(Profile Identifiers & Items)
export type ProfileId =
  | 'perfil_chapulin'
  | 'perfil_donramon'
  | 'perfil_supersam'
  | 'perfil_tripaseca'
  | 'perfil_florinda'
  | 'perfil_almanegra'
  | 'perfil_jirafales'
  | 'perfil_casimiro'
  | 'perfil_berrondo'
  | 'perfil_nicanor'
  | 'perfil_genoveva'
  | 'perfil_sargento'
  | 'perfil_barriga'
  | 'perfil_chompiras'
  | 'perfil_toribio'
  | 'perfil_nazario'
  | 'perfil_peterete'
  | 'perfil_jaimito'
  | 'perfil_clotilde'
  | 'perfil_chapatin'
  | 'perfil_chimoltrufia'
  | 'perfil_aniceto'
  | 'perfil_nono'
  | 'perfil_juez'
  | 'perfil_botija'
  | 'perfil_cecilio'
  | 'perfil_rufino'
  | 'perfil_maruja'
  | 'perfil_cuajinais';

export interface ProfileItem {
  id: ProfileId;
  name: string;
  /** Short line under the name: "Acusado", "Curadora del museo", "Testigo". */
  role: string;
  icon: string;
  desc: string;
  /** Ordered stages; linear saturating counter, same as EvidenceItem.updates. */
  updates?: string[];
}

export type ProfileCatalogMap = Partial<Record<ProfileId, ProfileItem>>;
