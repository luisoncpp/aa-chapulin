// @Architecture(descriptionShort="Case 3 court record items in Spanish and English", type="catalog", icon="database")
/**
 * Case 3 evidence entries merged into [[./EvidenceCatalog.ts]] when caseId is case3.
 */

import type { EvidenceId, EvidenceItem } from '../../types/index.js';

function ev(
  id: EvidenceId,
  text: { name: string; desc: string; updatedDesc?: string; updates?: string[] }
): EvidenceItem {
  return {
    id,
    name: text.name,
    icon: `assets/${id}.png`,
    desc: text.desc,
    updatedDesc: text.updatedDesc,
    updates: text.updates
  };
}

// @Section(Spanish Case 3 Evidence)
export const CASE3_EVIDENCE_ES: Record<string, EvidenceItem> = {
  insignia_abogado: ev('insignia_abogado', {
    name: 'Insignia de Abogado',
    desc: 'La chapa del Licenciado Monchito. Sigue abollada, y ahora también empeñada dos veces.'
  }),
  informe_barriga: ev('informe_barriga', {
    name: 'Informe Médico de Barriga',
    desc: 'Contusión en la sien derecha con una marca octagonal. En el cabello y el cuello hay fibras rojas de lana. Coma profundo.'
  }),
  lentes_barriga: ev('lentes_barriga', {
    name: 'Lentes Rotos de Barriga',
    desc: 'Armazón hallado junto a la víctima. Le falta el cristal derecho y en la Cabina B no hay ni una esquirla de vidrio.',
    updates: [
      'El cristal apareció bajo el escritorio del despacho, sobre el tapete de lana roja.'
    ]
  }),
  microfono_oro: ev('microfono_oro', {
    name: 'Micrófono de Oro',
    desc: 'Trofeo de bronce macizo de 4 kg con base octagonal. Hallado sobre la mesa de la consola (el sargento lo movió antes de fotografiarlo). Arma del delito.',
    updates: [
      'Su pedestal de terciopelo está vacío en el despacho; es el premio por los 25 años al aire de Aniceto Rebollar.',
      'Estuvo empeñado desde junio y fue desempeñado el 3 de septiembre pagando $12,000 en efectivo.'
    ]
  }),
  bolsa_papel: ev('bolsa_papel', {
    name: 'Bolsa de Papel del Doctor',
    desc: 'La bolsa que el acusado suelta al arrodillarse. Dentro: una ampolleta vacía de cardiotónico y una jeringa recién usada.'
  }),
  microfono_cabina: ev('microfono_cabina', {
    name: 'Micrófono de la Cabina B',
    desc: 'El micrófono de la cabina tiene el cable enrollado y desconectado; el operador lo desconecta al terminar cada sesión.',
    updates: [
      'La bitácora confirma que esa noche nada salió al aire desde la Cabina B.'
    ]
  }),
  cinta_salud: ev('cinta_salud', {
    name: 'Cinta "La Salud es Primero"',
    desc: 'La sección grabada por el acusado en la Cabina B de 9:30 a 9:50 PM. Aparentemente sin valor para el caso.'
  }),
  marcas_carrito: ev('marcas_carrito', {
    name: 'Marcas del Carrito de Discos',
    desc: 'Dos rayas paralelas de grasa negra en la alfombra del pasillo, del despacho a la Cabina B. En una rueda quedó atorado un hilo de casimir café del saco del Señor Barriga.'
  }),
  ventana_cabina: ev('ventana_cabina', {
    name: 'Cuña de la Ventana',
    desc: 'Cuña de madera y nota de mantenimiento: el ventilador central lleva descompuesto desde agosto, así que las tres cabinas graban con la ventana abierta. Adentro se oyen las bocinas de la plaza.'
  }),
  libro_verde: ev('libro_verde', {
    name: 'Libro Verde del Fondo',
    desc: 'Libro de cuentas del Fondo de la Kermés. Le arrancaron la hoja del 12 de septiembre; sus cenizas estaban en el cenicero del despacho.',
    updates: [
      'El calcado a lápiz de la hoja siguiente revela: "Faltan $40,000. Los retiros los firmó el tesorero. Se lo diré al aire."'
    ]
  }),
  bitacora_transmision: ev('bitacora_transmision', {
    name: 'Bitácora de Transmisión',
    desc: 'Registro de la noche. 23:03 — CORTE DE ESTACIÓN (CARTUCHO 3) — AUTOMÁTICO. Además: 21:30-21:50 Cabina B (Dr. Chapatín), 21:30-22:00 Cabina A ("El Casero Cascarrabias") y 22:00-23:00 Cabina C (horóscopos, Chimoltrufia).'
  }),
  receta_nono: ev('receta_nono', {
    name: 'Libreta de bolsillo del doctor',
    desc: 'Libreta que lleva en el saco. Asiento del 15 de septiembre, 10:50 PM, escrito en el callejón: cardiotónico a un paciente con iniciales. Cobro: nada.'
  }),
  programa_kermes: ev('programa_kermes', {
    name: 'Libreto de la Kermés',
    desc: 'Minutario del Profesor Jirafales. 9:40 PM: aviso de niño extraviado ("cachetes muy grandes") — se anunció una sola vez en toda la noche.'
  }),
  ataduras_bodega: ev('ataduras_bodega', {
    name: 'Ataduras de la Bodega',
    desc: 'El pañuelo de seda y el cable de micrófono que ataron a Aniceto. El nudo de la mordaza quedó al frente, del lado izquierdo; las muñecas no tienen marca alguna y el polvo del piso no muestra forcejeo.'
  }),
  cartucho_corte: ev('cartucho_corte', {
    name: 'Cartucho de Corte de Estación',
    desc: 'Cartucho rotulado "IDENTIFICACIÓN XEVC", rescatado de la basura por el Sargento.',
    updates: [
      'Contiene el grito de las 11:03. Debajo de la voz se alcanza a oír el aviso del niño extraviado.'
    ]
  }),
  cinta_sketch: ev('cinta_sketch', {
    name: 'Cinta "El Casero Cascarrabias"',
    desc: 'Sketch semanal de XEVC: un personaje que imita la voz del Señor Barriga y cierra siempre con "¡Tenía que ser el Chavo del Ocho!". Se graba en la Cabina A.'
  }),
  boleta_empeno: ev('boleta_empeno', {
    name: 'Boleta de Empeño',
    desc: 'Del Monte de Piedad: un micrófono de bronce empeñado en junio y desempeñado el 3 de septiembre por $12,000 en efectivo. Firma del titular: A. Rebollar.'
  })
};

// @Section(English Case 3 Evidence)
export const CASE3_EVIDENCE_EN: Record<string, EvidenceItem> = {
  insignia_abogado: ev('insignia_abogado', {
    name: "Attorney's Badge",
    desc: 'The badge of Licenciado Monchito. Still dented, and now pawned twice over.'
  }),
  informe_barriga: ev('informe_barriga', {
    name: "Barriga's Medical Report",
    desc: 'Contusion on the right temple with an octagonal mark. Red wool fibers in the hair and neck. Deep coma.'
  }),
  lentes_barriga: ev('lentes_barriga', {
    name: "Barriga's Broken Glasses",
    desc: 'Frames found near the victim. Missing the right lens; not a single shard of glass in Cabin B.',
    updates: [
      'The lens appeared under the office desk, on the red wool carpet.'
    ]
  }),
  microfono_oro: ev('microfono_oro', {
    name: 'Golden Microphone Trophy',
    desc: '4 kg solid bronze trophy with octagonal base. Found on the console table (the sergeant moved it before photographing it). Murder weapon.',
    updates: [
      'Its velvet pedestal is empty in the office; prize for Aniceto Rebollar\'s 25 years on air.',
      'Pawned since June and redeemed on September 3 paying $12,000 in cash.'
    ]
  }),
  bolsa_papel: ev('bolsa_papel', {
    name: "Doctor's Paper Bag",
    desc: 'Bag the defendant dropped when kneeling. Inside: an empty cardiotonic ampoule and a freshly used syringe.'
  }),
  microfono_cabina: ev('microfono_cabina', {
    name: 'Cabin B Microphone',
    desc: 'Cabin microphone cable is coiled and unplugged; the operator disconnects it after each session.',
    updates: [
      'The transmission log confirms nothing went on air from Cabin B that night.'
    ]
  }),
  cinta_salud: ev('cinta_salud', {
    name: '"Health First" Tape',
    desc: 'Section recorded by the defendant in Cabin B from 9:30 to 9:50 PM. Apparently worthless to the case.'
  }),
  marcas_carrito: ev('marcas_carrito', {
    name: 'Record Cart Tracks',
    desc: 'Two parallel black grease lines on the hallway carpet from the office to Cabin B. A brown cashmere thread from Barriga\'s coat stuck in a wheel.'
  }),
  ventana_cabina: ev('ventana_cabina', {
    name: 'Window Wedge',
    desc: 'Wooden wedge and maintenance note: central fan broken since August, so all three cabins record with the window open. The plaza speakers bleed inside.'
  }),
  libro_verde: ev('libro_verde', {
    name: 'Green Ledger',
    desc: 'Kermés fund account book. September 12 page torn out; ashes in the office ashtray.',
    updates: [
      'Pencil rubbing of the next page reveals: "Missing $40,000. Withdrawals signed by treasurer. I will announce it on air."'
    ]
  }),
  bitacora_transmision: ev('bitacora_transmision', {
    name: 'Transmission Log',
    desc: 'Night log. 23:03 — STATION ID (CARTRIDGE 3) — AUTOMATIC. Plus: 21:30-21:50 Cabin B (Dr. Chapatín), 21:30-22:00 Cabin A ("El Casero Cascarrabias") and 22:00-23:00 Cabin C (horoscopes, Chimoltrufia).'
  }),
  receta_nono: ev('receta_nono', {
    name: "Doctor's Pocket Notebook",
    desc: 'Notebook he carries in his jacket. September 15, 10:50 PM entry, written in the alley: cardiotonic for a patient logged only by initials. Charge: nothing.'
  }),
  programa_kermes: ev('programa_kermes', {
    name: 'Kermés Program',
    desc: 'Professor Jirafales\'s minute-by-minute script. 9:40 PM: missing child announcement ("very chubby cheeks") — announced only once all night.'
  }),
  ataduras_bodega: ev('ataduras_bodega', {
    name: 'Cellar Bindings',
    desc: 'Silk handkerchief and microphone cable used on Aniceto. Gag knot tied in front on the left; wrists show no marks and the floor dust shows no struggle.'
  }),
  cartucho_corte: ev('cartucho_corte', {
    name: 'Station ID Cartridge',
    desc: 'Cartridge labeled "XEVC IDENTIFICATION", rescued from the trash by the Sergeant.',
    updates: [
      'Contains the 11:03 scream. Under the voice the missing-child announcement can be heard.'
    ]
  }),
  cinta_sketch: ev('cinta_sketch', {
    name: '"The Grumpy Landlord" Tape',
    desc: 'Weekly XEVC sketch: a character imitating Barriga\'s voice, always ending with "It had to be El Chavo del Ocho!" Recorded in Cabin A.'
  }),
  boleta_empeno: ev('boleta_empeno', {
    name: 'Pawn Ticket',
    desc: 'From the pawn shop: bronze microphone pawned in June, redeemed September 3 for $12,000 cash. Holder signature: A. Rebollar.'
  })
};
