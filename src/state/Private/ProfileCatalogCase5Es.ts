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
    desc: 'Acusado de asesinar a Casimiro Lengua. Abogado de banqueta. Es la sexta vez que pisa este juzgado y la primera que lo hace esposado.',
    updates: [
      'El acta registra diecisiete mensualidades de renta pagadas en efectivo; Ramón dice que él no pagó.',
      'Estuvo doce minutos a solas con la víctima, sin testigo que viera la mesa.',
      'La ventana corregida lo incluye. Su defensa acaba de meterlo en ella.'
    ]
  },
  perfil_chapulin: {
    id: 'perfil_chapulin',
    name: 'El Chapulín Colorado',
    role: 'Defensor titular',
    icon: 'assets/profile_perfil_chapulin.webp',
    desc: 'Defensor titular, por designación del propio acusado. No tiene título, tiene antenitas. Litiga con la insignia prestada de su cliente.',
    updates: [
      'Ganó tres jornadas seguidas y no ha demostrado todavía que alguien estuviera en ese pasillo.'
    ]
  },
  perfil_casimiro: {
    id: 'perfil_casimiro',
    name: 'Casimiro Lengua',
    role: 'Víctima',
    icon: 'assets/profile_perfil_casimiro.webp',
    desc: 'La víctima. Sentenciado en julio por el asalto al cobrador Nazario Cuenca; su condena no está en discusión.',
    updates: [
      'Lo encontraron con su expediente abierto en la página 214.',
      'Pidió declarar en una diligencia de su apelación y que estuviera presente el abogado que lo venció.',
      'Ofreció entregar un fichero el 8 de noviembre. La fiscalía le contestó dieciocho días después.'
    ]
  },
  perfil_supersam: {
    id: 'perfil_supersam',
    name: 'Super Sam',
    role: 'Fiscal',
    icon: 'assets/profile_perfil_supersam.webp',
    desc: 'Fiscal. Cobra por caso cerrado.',
    updates: [
      'Desde agosto carga una bolsa vacía para recordar por qué cerró aquel caso en cinco minutos.',
      'Firmó seiscientos oficios al mes durante once años sin leer la lista de distribución.',
      'Admitió que cobró un kilo de los seis que le robaron y rellena la bolsa con algodón para recordar lo que todavía le falta.'
    ]
  },
  perfil_berrondo: {
    id: 'perfil_berrondo',
    name: 'Fulgencio Berrondo',
    role: 'Acusador coadyuvante',
    icon: 'assets/profile_perfil_berrondo.webp',
    desc: 'Acusador coadyuvante. Abogado colegiado desde 1955. Se presentó ante la fiscalía como síndico de la víctima y ofreció auxiliarla sin cobrar honorarios.',
    updates: [
      'Su primera sindicatura, la quiebra 114/1971, es la única que sigue abierta, desde hace once años.',
      'Administra un cedulario de once mil cuatrocientas tarjetas y vende copias. No es delito.',
      'Concede que vender no es delito; la corte ordena inspeccionar su huacal de todos modos.',
      'Firmó el acuse de una diligencia que él mismo dijo desconocer.'
    ]
  },
  perfil_nicanor: {
    id: 'perfil_nicanor',
    name: 'Nicanor Tolentino',
    role: 'Conserje',
    icon: 'assets/profile_perfil_nicanor.webp',
    desc: 'Conserje del Archivo Judicial. Treinta y un años de servicio. Fue quien encontró a la víctima.',
    updates: [
      'Sacude el Tomo XI los lunes. El sábado del crimen vio el estante completo; el hallazgo fue a las 17:35, cuando subía a cerrar el pasillo.'
    ]
  },
  perfil_genoveva: {
    id: 'perfil_genoveva',
    name: 'Genoveva Peñaloza',
    role: 'Encargada de ventanilla',
    icon: 'assets/profile_perfil_genoveva.webp',
    desc: 'Empleada de la ventanilla judicial. Lleva el libro de peritos y auxiliares.',
    updates: [
      'Registra cuándo se devuelve cada gafete y archiva los vales de consulta. No ve la puerta del patio y el reglamento no la obliga.'
    ]
  },
  perfil_sargento: {
    id: 'perfil_sargento',
    name: 'El Sargento',
    role: 'Policía judicial',
    icon: 'assets/profile_perfil_sargento.webp',
    desc: 'Policía judicial. Pidió los análisis, no movió nada y lo asentó todo. Dice que aprendió en septiembre.'
  },
  perfil_barriga: {
    id: 'perfil_barriga',
    name: 'Señor Barriga',
    role: 'Casero',
    icon: 'assets/profile_perfil_barriga.webp',
    desc: 'Casero del acusado. Diecisiete años cobrándole.'
  },
  perfil_chompiras: {
    id: 'perfil_chompiras',
    name: 'El Chómpiras',
    role: 'Cargador',
    icon: 'assets/profile_perfil_chompiras.webp',
    desc: 'Cargador del Archivo. Absuelto en agosto del robo del Chanfle de Oro. Es lo primero que le han dado con seguro y con aguinaldo, y no piensa perderlo.',
    updates: [
      'Ayuda a destapar el huacal 9 desde septiembre y lo ha visto abierto seis o siete veces.'
    ]
  }
};
