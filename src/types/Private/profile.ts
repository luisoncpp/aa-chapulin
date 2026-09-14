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
  | 'perfil_jirafales';

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
