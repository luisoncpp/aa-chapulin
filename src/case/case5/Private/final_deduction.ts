// @Architecture(descriptionShort="Bilingual Case 5 reasoning toward Genoveva's consultation records")
import type { DeductionSequence, Localized } from '../../../deduction/index.js';
const t = (es: string, en: string): Localized => ({ es, en });

export const CASE5_FINAL_DEDUCTION: DeductionSequence = {
  id: 'case5-genoveva-records-v1', defender: 'chapulin',
  author: t('El Chapulín Colorado', 'El Chapulín Colorado'),
  entry: t('La hora del gafete no demuestra que Berrondo saliera. Pero poder quedarse tampoco lo coloca junto a Casimiro. Tengo que volver al montaje contra Don Ramón. ¿Qué dejaron en la escena para señalarlo?',
    'The badge time does not prove Berrondo left. But being able to stay does not place him beside Casimiro either. I have to return to the setup against Don Ramón. What did they leave at the scene to point at him?'),
  conclusion: t('GENOVEVA TIENE\nLA EVIDENCIA', 'GENOVEVA HAS\nTHE EVIDENCE'),
  continuation: t('Genoveva archiva los vales. Su carpeta puede comprobar si Berrondo consultó el cedulario antes del crimen. Hay que pedírsela a la corte.',
    'Genoveva files the vouchers. Her folder can establish whether Berrondo consulted the card index before the crime. We must ask the court for it.'),
  records: [
    { id: 'esquina_tarjeta', kind: 'evidence', name: t('Esquina de tarjeta', 'Card corner'),
      description: t('El fragmento colocado en la mano de Casimiro lleva el domicilio de Don Ramón.',
        'The fragment placed in Casimiro\'s hand carries Don Ramón\'s address.') },
    { id: 'oficio_diligencia', kind: 'evidence', name: t('Oficio de la diligencia', 'Proceeding notice'),
      description: t('El oficio 4471 nombra a Ramón Valdés como citado y ordena enviar una copia a la Sindicatura.',
        'Notice 4471 names Ramón Valdés as a summoned participant and orders a copy sent to the Receiver\'s Office.') },
    { id: 'acuse_notificacion', kind: 'evidence', name: t('Acuse de notificación', 'Notification receipt'),
      description: t('Berrondo firmó la recepción del aviso el veintinueve de noviembre, cinco días antes del crimen.',
        'Berrondo signed for the notice on November twenty-ninth, five days before the crime.') },
    { id: 'fichero_cedulario', kind: 'evidence', name: t('Cedulario de suscriptores', 'Subscriber card index'),
      description: t('Conserva las fichas de domicilio en el huacal nueve. Todavía no hemos identificado la tarjeta de la que salió el fragmento.',
        'It holds the address cards in crate nine. We have not yet identified the card the fragment came from.') },
    { id: 'perfil_genoveva', kind: 'person', name: t('Srta. Genoveva Peñaloza', 'Ms. Genoveva Penaloza'),
      description: t('La encargada de la ventanilla archiva los vales de consulta de la bodega. Cada papeleta registra fecha, solicitante y bien consultado.',
        'The window clerk files the deposit consultation vouchers. Each slip records the date, requester and item consulted.') }
  ],
  steps: [
    {
      id: 'planted-trace',
      premise: t('El tomo ensangrentado explica el golpe. La esquina de cartulina apareció colocada en la mano de Casimiro, con unas líneas mecanografiadas.',
        'The bloodstained volume explains the blow. The card corner was placed in Casimiro\'s hand, bearing a few typed lines.'),
      question: t('¿Qué fue plantado en la escena para incriminar a Don Ramón?',
        'What was planted at the scene to frame Don Ramón?'),
      options: [
        { id: 'tomo', label: t('El tomo ensangrentado', 'The bloodstained volume'),
          rejection: t('Fue el arma. Pero hay otros Tomos XI y el libro no identifica a Don Ramón. El señuelo debe señalarlo a él.',
            'It was the weapon. But there are other copies of Volume XI, and the book does not identify Don Ramón. The lure must point specifically at him.') },
        { id: 'esquina', label: t('La esquina de tarjeta con su domicilio', 'The card corner with his address') },
        { id: 'recibo', label: t('El recibo de renta', 'The rent receipt'),
          rejection: t('El pago forma parte del montaje, pero el recibo apareció en el bolsillo de Don Ramón al detenerlo. No fue lo que pusieron en la mano de Casimiro.',
            'The payment is part of the setup, but the receipt was in Don Ramón\'s pocket when he was arrested. It was not placed in Casimiro\'s hand.') }
      ],
      correctId: 'esquina',
      connection: t('La esquina lleva su domicilio. Alguien quiso convertir una dirección en una acusación. Falta comprobar de dónde salió esa cartulina.',
        'The corner carries his address. Someone tried to turn an address into an accusation. We still have to establish where that card came from.'),
      memory: { recordId: 'esquina_tarjeta', aspect: t('El fragmento señala a Don Ramón por su domicilio.', 'The fragment points to Don Ramón through his address.') }
    },
    {
      id: 'advance-notice',
      premise: t('Berrondo negó haber recibido el aviso hasta que le mostramos su rúbrica. Ahora dice que firmó sin prestar atención. ¿Qué información tenía a su alcance?',
        'Berrondo denied receiving the notice until we showed him his signature. Now he says he signed without paying attention. What information was available to him?'),
      question: t('¿Cómo podía saber antes del sábado que Don Ramón acudiría al Archivo?',
        'How could he know before Saturday that Don Ramón would come to the Archive?'),
      options: [
        { id: 'visitas', label: t('Por el libro de visitas del sábado', 'From Saturday\'s visitor book'),
          rejection: t('Ese asiento se escribió cuando Don Ramón llegó. Buscamos un aviso anterior al sábado.',
            'That entry was written when Don Ramón arrived. We need a notice from before Saturday.') },
        { id: 'renta', label: t('Porque pagar su renta demuestra que conocía la cita', 'Because paying his rent proves he knew of the appointment'),
          rejection: t('El dinero no fija cómo supo de la cita. El documento debe nombrar al citado y llegar a la Sindicatura.',
            'The money does not establish how he learned of the appointment. The document must name the participant and reach the Receiver\'s Office.') },
        { id: 'oficio', label: t('Por el oficio 4471 y el acuse que firmó el lunes', 'From notice 4471 and the receipt he signed on Monday') }
      ],
      correctId: 'oficio',
      connection: t('El oficio nombra a Ramón Valdés y ordena la copia para la Sindicatura. El acuse firmado acredita que el aviso llegó el lunes. Eso prueba qué podía saber Berrondo, no que lo leyera ni que preparara el fragmento.',
        'The notice names Ramón Valdés and orders a copy for the Receiver\'s Office. The signed receipt establishes that it arrived on Monday. That proves what Berrondo could know, not that he read it or prepared the fragment.'),
      memory: { recordId: 'oficio_diligencia', aspect: t('Don Ramón estaba citado por nombre en el aviso recibido cinco días antes.', 'Don Ramón was named in the notice received five days earlier.') }
    },
    {
      id: 'test-preparation',
      premise: t('Tener el aviso no demuestra qué hizo después. Necesito una hipótesis que deje un rastro comprobable, sin dar por probado el montaje.',
        'Having the notice does not prove what he did afterward. I need a hypothesis that leaves a trace we can check, without treating the setup as proven.'),
      question: t('Si preparó el señuelo antes del crimen, ¿qué podemos investigar?',
        'If he prepared the lure before the crime, what can we investigate?'),
      options: [
        { id: 'confesion', label: t('Dar el montaje por confesado al firmar el acuse', 'Treat his receipt signature as a confession to the setup'),
          rejection: t('Firmar un acuse sólo acredita recepción. No es una confesión.', 'Signing a receipt establishes delivery. It is not a confession.') },
        { id: 'consulta', label: t('Si buscó antes una ficha con el domicilio de Don Ramón', 'Whether he previously looked for a card with Don Ramón\'s address') },
        { id: 'antenas', label: t('Si las antenitas reconocen al asesino', 'Whether the antennae recognize the killer'),
          rejection: t('Las antenitas no identifican al asesino. Necesito un paso que pueda comprobar con documentos.',
            'The antennae do not identify the killer. I need a step that documents can establish.') }
      ],
      correctId: 'consulta',
      connection: t('Si pensó usar una tarjeta, pudo comprobar antes si la de Don Ramón seguía archivada. Por ahora es una hipótesis. Hay que buscar una consulta anterior al sábado.',
        'If he intended to use a card, he could have checked whether Don Ramón\'s was still filed. For now it is a hypothesis. We must look for a consultation before Saturday.'),
      memory: { recordId: 'acuse_notificacion', aspect: t('El lunes recibió el aviso. ¿Dejó después algún registro de consulta?', 'He received the notice on Monday. Did he then leave a consultation record?') }
    },
    {
      id: 'where-to-look',
      premise: t('El señuelo usa un domicilio mecanografiado. En la bodega hay un bien que conserva las direcciones de los suscriptores.',
        'The lure uses a typed address. An item in the deposit preserves the subscribers\' addresses.'),
      question: t('¿Qué habría consultado para buscar una ficha de Don Ramón?',
        'What would he have consulted to look for Don Ramón\'s card?'),
      options: [
        { id: 'cedulario', label: t('El cedulario del huacal nueve', 'The card index in crate nine') },
        { id: 'relevo', label: t('La hoja de relevo de los custodios', 'The guards\' relief sheet'),
          rejection: t('La hoja registra turnos y horas. No guarda domicilios.', 'The sheet records shifts and times. It does not hold addresses.') },
        { id: 'inventario', label: t('El inventario de 1971', 'The 1971 inventory'),
          rejection: t('El inventario enumera los bienes, incluido el cedulario. Los domicilios están en las tarjetas del propio fichero.',
            'The inventory lists the items, including the card index. The addresses are on the cards in the index itself.') }
      ],
      correctId: 'cedulario',
      connection: t('El cedulario es donde pudo buscarla. Aún no sabemos qué tarjeta miró ni si arrancó algo. Lo que sí podemos pedir es un registro de consulta de ese bien.',
        'The card index is where he could have searched. We still do not know which card he saw or whether he tore anything. What we can request is a consultation record for that item.'),
      memory: { recordId: 'fichero_cedulario', aspect: t('Las fichas de domicilio permanecen en el huacal nueve.', 'The address cards remain in crate nine.') }
    },
    {
      id: 'record-holder',
      premise: t('No basta con tener acceso al huacal. Necesitamos saber si quedó asentada una consulta. Alguien explicó que archiva papeletas con fecha, solicitante y bien consultado.',
        'Access to the crate is not enough. We need to know whether a consultation was recorded. Someone explained that she files slips with the date, requester and item consulted.'),
      question: t('¿Quién tiene la evidencia que puede comprobar esa consulta?',
        'Who holds the evidence that can establish that consultation?'),
      options: [
        { id: 'nicanor', label: t('Nicanor, con el libro de visitas', 'Nicanor, with the visitor book'),
          rejection: t('Ese libro registra al público. No dice qué bien consultó un síndico en la bodega.',
            'That book records public visitors. It does not say which item a receiver consulted in the deposit.') },
        { id: 'berrondo', label: t('Berrondo, con su credencial de síndico', 'Berrondo, with his receiver\'s credential'),
          rejection: t('La credencial acredita permiso. No registra las consultas que hizo.',
            'The credential establishes permission. It does not record his consultations.') },
        { id: 'genoveva', label: t('Genoveva, con su carpeta de vales', 'Genoveva, with her voucher folder') }
      ],
      correctId: 'genoveva',
      connection: t('Genoveva conserva los vales. Si Berrondo consultó el cedulario el lunes y lo registró, la papeleta estará en su carpeta. Ella tiene la evidencia que necesitamos pedir.',
        'Genoveva keeps the vouchers. If Berrondo consulted the index on Monday and recorded it, the slip will be in her folder. She holds the evidence we need to request.'),
      memory: { recordId: 'perfil_genoveva', aspect: t('Genoveva registra y archiva las consultas. Su carpeta puede confirmar la hipótesis.', 'Genoveva records and files consultations. Her folder can confirm the hypothesis.') }
    }
  ]
};
