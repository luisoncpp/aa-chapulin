// @Architecture(descriptionShort="English Case 5 climax stage 2 — trustee credential", type="data", icon="layers")
/**
 * Case 5 climax EN — Stage 2 BY WHAT AUTHORITY? (spec §18.2).
 */

import type { ClimaxStage } from '../../../types/index.js';

export const CASE5_CLIMAX_STAGE2_EN: ClimaxStage = {
  presentTarget: ['credencial_sindico'],
  prompt: 'What let him remain inside the building after he turned in his badge?',
  failDialogue: [
    { speaker: 'JUEZ', text: 'That does not authorize anyone to be anywhere, counselor.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'This court asked you for a permit, not a clue.', pose: 'judge_neutral' },
    { speaker: 'SECRETARIO', text: 'And the prosecution notes the defense has less credit than a moment ago.', sfx: 'damage' }
  ],
  successDialogue: [
    { speaker: 'DEFENSA', text: 'The trustee credential, Your Honor! The one the witness himself gave me in his office on Tuesday!', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'DEFENSA', text: 'Have the court read it, line by line. There are three.', pose: 'chapulin_point' },
    { speaker: 'JUEZ', text: '"Valid until conclusion of the bankruptcy."', pose: 'judge_neutral' },
    { speaker: 'JUEZ', text: '"No hour limit."', pose: 'judge_shock' },
    { speaker: 'JUEZ', text: '"Access to the estate goods deposit."', pose: 'judge_shock' },
    { speaker: 'DEFENSA', text: 'No hour limit, Your Honor. A judge in this same building signed it in 1971.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'That brass badge he returned at four fifty was not his permit to be inside.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'It was his permit to be upstairs.', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'NARRADOR', text: 'A long murmur runs through the gallery.', sfx: 'realization' },
    { speaker: 'BERRONDO', text: 'That is correct, counselor, and I said so yesterday.', pose: 'berrondo_sweat' },
    { speaker: 'BERRONDO', text: 'I could have stayed in that basement until dawn if I wanted. And I did not stay.', pose: 'berrondo_idle' },
    { speaker: 'DEFENSA', text: 'And who saw you leave?', pose: 'chapulin_point' },
    { speaker: 'BERRONDO', text: 'Nobody, counselor. We already said it: the gate has no guard booth.', pose: 'berrondo_idle' },
    { speaker: 'BERRONDO', text: 'But the coin falls both ways. That nobody saw me leave does not prove I stayed.', pose: 'berrondo_idle' },
    { speaker: 'JUEZ', text: '...The court has to grant that. Again.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'Counselor Chapulin: you have shown this man could have stayed in the basement.', pose: 'judge_neutral' },
    { speaker: 'JUEZ', text: 'And the basement is not hallway seven.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'Prove to me he went up.', sfx: 'gavel', pose: 'judge_gavel' },
    { speaker: 'DEFENSA', text: '(This is it. This is where it all ends.)', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: '(Think, Chapulin. What thing in that hallway has nobody been able to explain in four days?)', pose: 'chapulin_idle' }
  ]
};
