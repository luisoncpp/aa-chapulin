// @Architecture(descriptionShort="Bilingual Case 4 reasoning toward the pierced and patched cork")
import type { DeductionSequence, Localized } from '../../../deduction/index.js';
const t = (es: string, en: string): Localized => ({ es, en });

/** Spec §12.4: private reasoning between D3-T2 and the climax. Never names the ring or the channel. */
export const CASE4_FINAL_DEDUCTION: DeductionSequence = {
  id: 'case4-sealed-bottle-v1', defender: 'donramon',
  author: t('Don Ramón', 'Don Ramón'),
  entry: t('Ya tenemos el móvil. Pero Super Sam tiene razón en una cosa: un móvil no es un método. Antes de hablar de la botella, tengo que ordenar esa noche.',
    'We have the motive now. But Super Sam is right about one thing: a motive is not a method. Before I talk about the bottle, I have to put that night in order.'),
  conclusion: t('El cierre se atravesó y se tapó.', 'The cork was pierced and patched.'),
  continuation: t('Ahora hay que mostrarle a la corte por dónde.', 'Now I have to show the court where.'),
  records: [
    { id: 'nota_amenaza', kind: 'evidence', name: t('Telegrama de Cuajinais', "Cuajinais's Telegram"),
      description: t('Rufino firmó el acuse a las 20:50: pago del collar o denuncia.',
        'Rufino signed the receipt at 20:50: payment for the necklace or a police report.') },
    { id: 'perfil_rufino', kind: 'person', name: t('Rufino Rufián', 'Rufino Rufián'),
      description: t('Admitió que estuvo solo con la botella cerrada entre la entrega y la llegada de su invitado.',
        'He admitted he was alone with the sealed bottle between the delivery and his guest\'s arrival.') },
    { id: 'orden_servicios', kind: 'evidence', name: t('Libro de Servicios', 'Service Logbook'),
      description: t('El folio manuscrito de Rufino pide al fontanero Botija, por su nombre, a las 23:05.',
        'Rufino\'s handwritten slip asks for the plumber Botija, by name, at 23:05.') },
    { id: 'botella_vino', kind: 'evidence', name: t('Botella V58-17', 'Bottle V58-17'),
      description: t('Se abrió delante de Maruja con el lacre puesto. Bajo aumento, el lacre muestra un punto de cera refundida, no una rotura.',
        'It was opened in front of Maruja with the wax seal in place. Under magnification the seal shows a dot of remelted wax, not a break.') }
  ],
  steps: [
    {
      id: 'warning',
      premise: t('Rufino jura que no esperaba la visita del señor Gómez. Pero el telegrama le llegó en mano, con acuse.',
        'Rufino swears he did not expect Mr. Gómez\'s visit. But the telegram reached him by hand, with a receipt.'),
      question: t('¿Desde cuándo sabía Rufino que Gómez iba a buscarlo?', 'Since when did Rufino know Gómez was coming for him?'),
      options: [
        { id: 'entrada', label: t('Desde que lo vio entrar en la 204', 'Since he saw him walk into 204'),
          rejection: t('Eso es lo que declaró, y el acuse lo acaba de desmentir.', 'That is what he testified, and the receipt just disproved it.') },
        { id: 'acuse', label: t('Desde las 20:50, cuando firmó el acuse del telegrama', 'Since 20:50, when he signed for the telegram') },
        { id: 'gala', label: t('Desde que empezó la gala', 'Since the gala began'),
          rejection: t('La gala no anuncia a nadie. Lo que lo avisó tiene hora y firma.', 'The gala announces no one. What warned him has a time and a signature.') }
      ],
      correctId: 'acuse',
      connection: t('A las 20:50 ya sabía que venían a cobrarle. Veinticinco minutos después pidió una botella a la cava.',
        'At 20:50 he already knew someone was coming to collect. Twenty-five minutes later he ordered a bottle from the cellar.'),
      memory: { recordId: 'nota_amenaza', aspect: t('El aviso llegó antes de pedir el vino.', 'The warning arrived before he ordered the wine.') }
    },
    {
      id: 'alone',
      premise: t('La botella pasó por varias manos esa noche. Sólo una persona se quedó con ella cerrada y sin nadie mirando.',
        'The bottle passed through several hands that night. Only one person kept it sealed with no one watching.'),
      question: t('¿Quién estuvo a solas con la botella cerrada?', 'Who was alone with the sealed bottle?'),
      options: [
        { id: 'botija', label: t('Botija, que la llevó desde la cava', 'Botija, who carried it from the cellar'),
          rejection: t('La llevó unos minutos por el pasillo y la entregó cerrada en la puerta de la 204, delante de Maruja.',
            'He carried it a few minutes down the hall and handed it over sealed at the door of 204, in front of Maruja.') },
        { id: 'maruja', label: t('Maruja, que presenció la entrega', 'Maruja, who witnessed the delivery'),
          rejection: t('Ella vio la entrega y salió a buscar al señor Gómez. No se quedó con la botella.',
            'She saw the delivery and left to find Mr. Gómez. She did not stay with the bottle.') },
        { id: 'rufino', label: t('Rufino, entre la entrega y la llegada de su invitado', 'Rufino, between the delivery and his guest\'s arrival') },
        { id: 'cecilio', label: t('Don Cecilio, que autorizó la salida', 'Don Cecilio, who authorized its release'),
          rejection: t('Firmó la salida en la recepción. La botella nunca subió con él.', 'He signed it out at the front desk. The bottle never went upstairs with him.') }
      ],
      correctId: 'rufino',
      connection: t('Él mismo lo dijo en el estrado: estuvo solo con la botella cerrada. Lo contó como quien no ve el problema.',
        'He said it himself on the stand: he was alone with the sealed bottle. He told it like a man who does not see the problem.'),
      memory: { recordId: 'perfil_rufino', aspect: t('Solo con la botella cerrada, por su propia admisión.', 'Alone with the sealed bottle, by his own admission.') }
    },
    {
      id: 'scapegoat',
      premise: t('Cuando el señor Gómez ya estaba muerto, alguien tenía que aparecer dentro de la 304.',
        'With Mr. Gómez already dead, someone had to be found inside 304.'),
      question: t('¿Por qué estaba Botija dentro de esa habitación?', 'Why was Botija inside that room?'),
      options: [
        { id: 'turno', label: t('Le tocaba por turno', 'It was his turn on the shift'),
          rejection: t('El hotel no eligió a nadie. El nombre venía escrito en la solicitud.', 'The hotel chose no one. The name was written on the request.') },
        { id: 'pedido', label: t('Rufino lo pidió por su nombre', 'Rufino asked for him by name') },
        { id: 'azar', label: t('Pasaba por ahí', 'He happened to be passing by'),
          rejection: t('Entró con su llave maestra a la hora exacta de una orden escrita. Eso no es casualidad.',
            'He went in with his master key at the exact time of a written order. That is no coincidence.') }
      ],
      correctId: 'pedido',
      connection: t('Rufino escribió el nombre de Botija de su puño y letra. Escogió al hombre con expediente para que lo encontraran ahí.',
        'Rufino wrote Botija\'s name in his own hand. He picked the man with a record so he would be found there.'),
      memory: { recordId: 'orden_servicios', aspect: t('El folio manuscrito designa a Botija.', 'The handwritten slip names Botija.') }
    },
    {
      id: 'seal-intact',
      premise: t('Maruja vio abrir esa botella. El lacre estaba puesto. Nadie lo discute, ni siquiera la fiscalía.',
        'Maruja saw that bottle opened. The wax seal was in place. No one disputes it, not even the prosecution.'),
      question: t('¿Cómo pudo meter algo en la botella sin romper el lacre?', 'How could he get something into the bottle without breaking the seal?'),
      options: [
        { id: 'abrio', label: t('La abrió y la volvió a cerrar', 'He opened it and closed it again'),
          rejection: t('El lacre no está roto. Si la hubiera abierto, el sello lo diría.', 'The seal is not broken. If he had opened it, the seal would show it.') },
        { id: 'cambio', label: t('Cambió la botella por otra', 'He swapped the bottle for another'),
          rejection: t('Esa noche no circuló otra botella del mismo lote, y la numeración coincide con el recibo.',
            'No other bottle from that lot was out that night, and the number matches the receipt.') },
        { id: 'atraveso', label: t('No lo rompió: lo atravesó', 'He did not break it: he went through it') }
      ],
      correctId: 'atraveso',
      connection: t('Si el lacre sigue entero, el tóxico no entró por arriba quitando nada. Entró a través del cierre.',
        'If the seal is still whole, the poison did not get in by removing anything. It went in through the cork.'),
      memory: { recordId: 'botella_vino', aspect: t('Abierta con el lacre puesto.', 'Opened with the seal in place.') }
    },
    {
      id: 'patched',
      premise: t('Un agujero en el lacre se habría visto al servir. Pero nadie vio nada esa noche.',
        'A hole in the seal would have shown when the wine was served. But no one saw anything that night.'),
      question: t('¿Por qué nadie vio el agujero?', 'Why did no one see the hole?'),
      options: [
        { id: 'oscuro', label: t('La habitación estaba a oscuras', 'The room was dark'),
          rejection: t('Maruja vio el lacre puesto. Había luz para eso.', 'Maruja saw the seal in place. There was light enough for that.') },
        { id: 'cera', label: t('Lo tapó con un punto de cera', 'He covered it with a dot of wax') },
        { id: 'pequeno', label: t('Era tan pequeño que no se ve', 'It was too small to see'),
          rejection: t('Pequeño sí, pero bajo aumento el lacre no muestra un agujero. Muestra algo encima.',
            'Small, yes, but under magnification the seal does not show a hole. It shows something on top of it.') }
      ],
      correctId: 'cera',
      connection: t('Bajo aumento hay un punto de cera refundida sobre el sello, no una rotura. Alguien tapó por dónde entró.',
        'Under magnification there is a dot of remelted wax on the seal, not a break. Someone covered the way in.'),
      memory: { recordId: 'botella_vino', aspect: t('Un punto de cera refundida sobre el sello.', 'A dot of remelted wax on the seal.') }
    }
  ]
};
