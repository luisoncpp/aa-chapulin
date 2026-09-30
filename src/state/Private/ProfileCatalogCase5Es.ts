// @Architecture(descriptionShort="Spanish character record entries for Case 5", type="catalog", icon="database")
/**
 * Acta de Personajes — Caso 5 (español). Spec §6.1.
 * Consumed through [[./ProfileCatalog.ts]].
 */

import type { ProfileCatalogMap } from '../../types/index.js';

export const CASE5_PROFILES_ES: ProfileCatalogMap = {
  perfil_donramon: {
    id: 'perfil_donramon',
    name: 'Don Ramón',
    role: 'Acusado',
    icon: 'assets/profile_perfil_donramon.webp',
    desc: 'Acusado por la muerte de Casimiro Lengua. Abogado de banqueta y viejo conocido de esta corte; nunca antes había comparecido esposado.',
    updates: [
      'Acusado por la muerte de Casimiro, a quien años atrás venció en el juicio por el asalto a Nazario Cuenca. Aun así, fue el único abogado al que su antiguo adversario pidió tener junto a él en la apelación.'
    ]
  },
  perfil_chapulin: {
    id: 'perfil_chapulin',
    name: 'El Chapulín Colorado',
    role: 'Defensor titular',
    icon: 'assets/profile_perfil_chapulin.webp',
    desc: 'Defensor titular, por designación del propio acusado. No tiene título, tiene antenitas. Litiga con la insignia prestada de su cliente.',
  },
  perfil_casimiro: {
    id: 'perfil_casimiro',
    name: 'Casimiro Lengua',
    role: 'Víctima',
    icon: 'assets/profile_perfil_casimiro.webp',
    desc: 'Víctima del caso, sentenciado en julio por el asalto a Nazario Cuenca.',
    updates: [
      'Antes de morir, Casimiro seguía ligado a una empresa disuelta once años atrás. Su pasado como vendedor lo llevó de nuevo al Archivo Judicial.',
      'Víctima del caso, sentenciado en julio por el asalto a Nazario. Al apelar aquella condena, pidió tener presente a Don Ramón, el abogado que lo había vencido; ahora confiaba en su antiguo adversario.'
    ]
  },
  perfil_supersam: {
    id: 'perfil_supersam',
    name: 'Super Sam',
    role: 'Fiscal',
    icon: 'assets/profile_perfil_supersam.webp',
    desc: 'Fiscal acostumbrado a cerrar casos con rapidez y a cobrar por caso cerrado.',
    updates: [
      'Desde agosto conserva una bolsa como recordatorio del caso que cerró en cinco minutos. El recordatorio lo acompaña fuera de la fiscalía.',
      'Fiscal que cobra por caso cerrado; durante once años firmó cientos de oficios sin leerlos. Su rutina por pieza ya no parece una simple manía de oficina.',
      'Ahora rellena la misma bolsa con algodón y la carga para recordar el peso que le falta. Admite que el gesto le ayuda a no olvidar.'
    ]
  },
  perfil_berrondo: {
    id: 'perfil_berrondo',
    name: 'Fulgencio Berrondo',
    role: 'Acusador coadyuvante',
    icon: 'assets/profile_perfil_berrondo.webp',
    desc: 'Acusador coadyuvante y abogado colegiado desde 1955. Se ofreció a auxiliar a la fiscalía sin cobrar honorarios.',
    updates: [
      'Como síndico, mantiene a su cargo la única quiebra que aún está abierta. Esa responsabilidad enlaza su carrera con la víctima y con el Archivo Judicial.',
      'Acusador coadyuvante, abogado desde 1955 y síndico de la quiebra de El Saber Universal. Compró su cedulario al liquidarse la empresa y vende copias; para Berrondo, es parte del oficio.'
    ]
  },
  perfil_nicanor: {
    id: 'perfil_nicanor',
    name: 'Nicanor Tolentino',
    role: 'Conserje',
    icon: 'assets/profile_perfil_nicanor.webp',
    desc: 'Conserje del Archivo Judicial desde hace treinta y un años; encontró a la víctima.',
  },
  perfil_genoveva: {
    id: 'perfil_genoveva',
    name: 'Genoveva Peñaloza',
    role: 'Encargada de ventanilla',
    icon: 'assets/profile_perfil_genoveva.webp',
    desc: 'Empleada de la ventanilla judicial; lleva el registro de peritos y auxiliares.',
  },
  perfil_sargento: {
    id: 'perfil_sargento',
    name: 'El Sargento',
    role: 'Policía judicial',
    icon: 'assets/profile_perfil_sargento.webp',
    desc: 'Policía judicial metódico. Tras equivocarse al documentar otra escena, ahora procura dejar que las pruebas hablen antes de tocarlas.'
  },
  perfil_barriga: {
    id: 'perfil_barriga',
    name: 'Señor Barriga',
    role: 'Casero',
    icon: 'assets/profile_perfil_barriga.webp',
    desc: 'Casero de Don Ramón desde hace diecisiete años. Su relación de larga data lo convierte en una de las personas que mejor conoce la vida diaria del acusado.'
  },
  perfil_chompiras: {
    id: 'perfil_chompiras',
    name: 'El Chómpiras',
    role: 'Cargador',
    icon: 'assets/profile_perfil_chompiras.webp',
    desc: 'Cargador del Archivo desde septiembre, absuelto meses atrás del robo del Chanfle de Oro. Es su primer empleo formal y no quiere perder esta oportunidad.'
  }
};
