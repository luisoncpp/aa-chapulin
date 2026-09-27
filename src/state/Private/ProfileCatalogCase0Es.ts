// @Architecture(descriptionShort="Spanish character record entries for Case 0", type="catalog", icon="database")
/** Acta de Personajes — Caso 0 (español). Spec §5.1. */

import type { ProfileCatalogMap } from '../../types/index.js';

export const CASE0_PROFILES_ES: ProfileCatalogMap = {
  perfil_donramon: {
    id: 'perfil_donramon', name: 'Don Ramón', role: 'Abogado defensor',
    icon: 'assets/profile_perfil_donramon.webp',
    desc: 'Abogado de banqueta en su primer juicio. Debe catorce meses de renta.'
  },
  perfil_chapulin: {
    id: 'perfil_chapulin', name: 'El Chapulín Colorado', role: 'Asesor de la defensa',
    icon: 'assets/profile_perfil_chapulin.webp',
    desc: 'Acompaña a Don Ramón como asesor legal. Explica cómo escuchar testimonios, presionar y presentar pruebas.'
  },
  perfil_supersam: {
    id: 'perfil_supersam', name: 'Super Sam', role: 'Fiscal',
    icon: 'assets/profile_perfil_supersam.webp',
    desc: 'Fiscal del caso. Cree que la deuda de renta y la presencia de Toribio junto al cobrador bastan para acusarlo.',
    updates: ['La fiscalía retiró la acusación contra Toribio al comprobarse que la evidencia no la sostenía.']
  },
  perfil_toribio: {
    id: 'perfil_toribio', name: 'Toribio Pantoja', role: 'Acusado; paletero',
    icon: 'assets/toribio_idle.webp',
    desc: 'Paletero de veinte años, acusado de agredir a Don Nazario. Debía dos meses de renta y lo encontraron junto a la víctima.',
    updates: [
      'El recibo de la hielería registra su entrada a las 13:05 y salida a las 13:55; respalda su coartada para la una.',
      'El tribunal lo declaró inocente.'
    ]
  },
  perfil_casimiro: {
    id: 'perfil_casimiro', name: 'Casimiro Lengua', role: 'Testigo de la fiscalía',
    icon: 'assets/profile_perfil_casimiro.webp',
    desc: 'Se presenta como distribuidor autorizado de Enciclopedias El Saber Universal.',
    updates: [
      'La credencial comercial quedó desacreditada: la sociedad está disuelta y no hay pedidos ni ruta comprobable.',
      'El tribunal ordenó detenerlo por agredir a Don Nazario y llevarse el cartapacio de cobranza.'
    ]
  },
  perfil_nazario: {
    id: 'perfil_nazario', name: 'Don Nazario Cuenca', role: 'Cobrador de rentas; víctima',
    icon: 'assets/foto_nazario.webp',
    desc: 'Sobrevivió a una agresión en la vivienda 4. Tiene amnesia del episodio y no puede declarar.',
    updates: ['El informe y el testimonio establecen que lo golpearon desde atrás y desde arriba dentro de la vivienda 4.']
  }
};
