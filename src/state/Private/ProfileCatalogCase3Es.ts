// @Architecture(descriptionShort="Spanish character record entries for Case 3", type="catalog", icon="database")
/** Acta de Personajes — Caso 3, hitos del Acto 3. */

import type { ProfileCatalogMap } from '../../types/index.js';

export const CASE3_PROFILES_ES: ProfileCatalogMap = {
  perfil_donramon: {
    id: 'perfil_donramon', name: 'Don Ramón', role: 'Abogado defensor',
    icon: 'assets/profile_perfil_donramon.webp',
    desc: 'Abogado defensor del Doctor Chapatín. Debe quince meses de renta al Señor Barriga.'
  },
  perfil_chapulin: {
    id: 'perfil_chapulin', name: 'El Chapulín Colorado', role: 'Co-defensor',
    icon: 'assets/profile_perfil_chapulin.webp',
    desc: 'Co-defensor. Héroe de antenitas y refranes que rara vez llegan enteros.'
  },
  perfil_chapatin: {
    id: 'perfil_chapatin', name: 'Doctor Chapatín', role: 'Acusado',
    icon: 'assets/chapatin_idle.webp',
    desc: 'Acusado de atacar al Señor Barriga. Médico anciano y gruñón. Lleva una bolsa de papel que usa como arma.',
    updates: [
      'Acusado de atacar al Señor Barriga, médico anciano y gruñón que lleva una bolsa de papel como arma. Se niega a revelar dónde estuvo después de salir de la cabina e invoca el secreto profesional.',
      'Acusado de atacar al Señor Barriga, médico anciano y gruñón que lleva una bolsa de papel como arma. Invocó el secreto profesional sobre su paradero; el registro de su clínica y la declaración de un paciente establecen que estuvo atendiéndolo en el callejón a las 10:50 PM.'
    ]
  },
  perfil_sargento: {
    id: 'perfil_sargento', name: 'El Sargento', role: 'Policía Preventiva',
    icon: 'assets/profile_perfil_sargento.webp',
    desc: 'Policía Preventiva, grado de sargento. Participó en el hallazgo del Doctor Chapatín junto a la víctima.',
    updates: [
      'Policía preventiva de grado sargento, presente cuando encontraron al Doctor Chapatín junto a la víctima. Admite que movió el trofeo antes de fotografiar la escena.'
    ]
  },
  perfil_chimoltrufia: {
    id: 'perfil_chimoltrufia', name: 'La Chimoltrufia', role: 'Locutora de XEVC',
    icon: 'assets/chimoltrufia_idle.webp',
    desc: 'Locutora —o ayudante, o encargada del café— de la sección de horóscopos de XEVC.',
    updates: [
      'Locutora —o ayudante, o encargada del café— de la sección de horóscopos de XEVC. Estaba en la Cabina C y oyó pasar el carrito de discos por el pasillo; creyó que era el conserje.'
    ]
  },
  perfil_florinda: {
    id: 'perfil_florinda', name: 'Doña Florinda', role: 'Encargada del puesto de la kermés',
    icon: 'assets/profile_perfil_florinda.webp',
    desc: 'Presidenta del comité vecinal y encargada del puesto de la kermés.',
    updates: [
      'Presidenta del comité vecinal y encargada del puesto de la kermés. Confirma que el Señor Barriga estaba vivo en la plaza a las 9:40 PM, buscando a Quico.'
    ]
  },
  perfil_jirafales: {
    id: 'perfil_jirafales', name: 'Profesor Jirafales', role: 'Maestro de ceremonias',
    icon: 'assets/profile_perfil_jirafales.webp',
    desc: 'Maestro de ceremonias del Grito. Su libreto conserva el minutario de la noche.'
  },
  perfil_aniceto: {
    id: 'perfil_aniceto', name: 'Don Aniceto Rebollar', role: 'Locutor titular de XEVC',
    icon: 'assets/aniceto_idle.webp',
    desc: 'Locutor titular de XEVC. Lleva veinticinco años al aire y habla con una dicción impecable.',
    updates: [
      'Locutor titular de XEVC con veinticinco años al aire y dicción impecable. Declaró que lo encontraron atado y amordazado en la bodega; la corte lo trata como una segunda víctima.'
    ]
  },
  perfil_nono: {
    id: 'perfil_nono', name: 'Ñoño', role: 'Operador de consola',
    icon: 'assets/nono_idle.webp',
    desc: 'Operador de consola de XEVC e hijo del Señor Barriga. Dice que estuvo en la consola durante el Grito.',
    updates: [
      'Operador de consola de XEVC e hijo del Señor Barriga. Dijo que estaba en la consola durante el Grito; después reveló que tiene un problema del corazón y que el Doctor Chapatín lo atiende en secreto.'
    ]
  },
  perfil_supersam: {
    id: 'perfil_supersam', name: 'Super Sam', role: 'Fiscal acusador',
    icon: 'assets/profile_perfil_supersam.webp',
    desc: 'Fiscal acusador. Quiere cerrar el caso antes de la hora de comer.',
  },
  perfil_barriga: {
    id: 'perfil_barriga', name: 'Señor Barriga', role: 'Víctima',
    icon: 'assets/profile_perfil_barriga.webp',
    desc: 'Casero, dueño de XEVC y víctima del ataque. Sigue en coma.',
    updates: [
      'Casero, dueño de XEVC y víctima del ataque. Había descubierto un faltante de $40,000 y se lo contó a una persona de confianza en su despacho.'
    ]
  },
  perfil_juez: {
    id: 'perfil_juez', name: 'El Juez', role: 'Juez de la Corte',
    icon: 'assets/judge_neutral.webp',
    desc: 'Juez de la Corte. Bondadoso, influenciable y aficionado a los programas de radio de XEVC.'
  }
};
