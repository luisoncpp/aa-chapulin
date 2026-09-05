// @Architecture(descriptionShort="English Case 4 day-3 Rufino cornered testimony", type="data", icon="layers")
/**
 * Case 4 Trial Day 3 — Testimony 6 (English).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';

const T6_BAUL_EN: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION! Inside your travel trunk found on the roof were wool fibers from Cuajinais\'s suit and coal dust from the freight elevator!', sfx: 'desk_slam', bgm: 'pursuit', pose: 'donramon_slam' },
  { speaker: 'RUFINO', text: 'Th-That trunk... that trunk could have been stolen by any barefoot bellhop!', pose: 'rufino_panic' },
  { speaker: 'DEFENSA', text: 'And to complete the picture, we present the wine glass found beside the corpse!', pose: 'donramon_point' }
];

const T6_COPA_EN: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'This glass proves Cuajinais ingested cyanide from the Chateau Buena Vista 1958 served by the fake count!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
  { speaker: 'RUFINO', text: 'Nonsense! Nobody in this courtroom can scientifically prove how cyanide entered that bottle if the cork was sealed with my wax intact!', pose: 'rufino_panic', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Silence in the court! Counselor Monchito: the witness challenges this tribunal. Does the defense hold material proof showing how the poison was injected without breaking the cork?', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'DEFENSA', text: 'The defense holds the decisive proof that will destroy the fake count\'s alibi!', cutin: 'objection_protesto', sfx: 'desk_slam', pose: 'donramon_slam' }
];

export const CASE4_TESTIMONY_6_EN: Testimony = {
  title: 'Testimony: I Never Went to the Third Floor or Touched the Deceased',
  witness: 'Rufino Rufián',
  bgm: 'cross_exam_presto',
  statements: [
    {
      id: 'd3_t2_1',
      speaker: 'RUFINO',
      pose: 'rufino_sweat',
      text: 'It is absurd to suggest I carried a corpse through the hallways without being seen by concierges.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Nobody said you carried the corpse in your arms through the hallways in plain sight.', pose: 'donramon_idle' },
        { speaker: 'RUFINO', text: 'Any transfer between rooms would have alerted the bellboys. Nobody saw me transporting any bundle.', pose: 'rufino_smug' },
        { speaker: 'DEFENSA', text: 'Of course nobody saw you... because you used the interior service freight shaft direct between suites.', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'd3_t2_2',
      speaker: 'RUFINO',
      pose: 'rufino_sweat',
      text: 'I never set foot in Suite 304 all night on October 24th.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'You maintain you never set foot in Suite 304 all night on October 24th?', pose: 'donramon_idle' },
        { speaker: 'RUFINO', text: 'Never. The noble guest floor ends on the second level; the third level is reserved for passing tenants without lineage.', pose: 'rufino_monocle' },
        { speaker: 'SUPER SAM', text: 'The witness had no reason to go to the third floor!', pose: 'supersam_point' }
      ]
    },
    {
      id: 'd3_t2_3',
      speaker: 'RUFINO',
      pose: 'rufino_panic',
      text: 'The deceased was never in my presence nor had contact with my travel belongings.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Do you categorically swear the deceased was never in your presence nor had contact with your travel belongings?', pose: 'donramon_idle' },
        { speaker: 'RUFINO', text: 'Never in my life! My imported English leather belongings remained secured in my private Suite 204 quarters, without any contact with low-class street thugs.', pose: 'rufino_panic' },
        { speaker: 'DEFENSA', text: '(Very sure of his English leather luggage... Let\'s see if his trunk agrees.)', pose: 'donramon_idle' }
      ],
      contradiction: {
        evidence: ['baul_etiquetas'],
        successDialogue: T6_BAUL_EN,
        followUp: { evidence: ['copa_vino'], successDialogue: T6_COPA_EN }
      }
    },
    {
      id: 'd3_t2_4',
      speaker: 'RUFINO',
      pose: 'rufino_sweat',
      text: 'And the poisoned wine from my private reserve never left my cellar with the seal altered.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'And about the wine bottle from your reserve... how do you explain an exclusive bottle of yours at the crime scene?', pose: 'donramon_idle' },
        { speaker: 'RUFINO', text: 'It could have been stolen from the cellar by any unfaithful employee. But I insist: my bottles\' wax seal is inviolable without breaking the crown wax.', pose: 'rufino_sweat' },
        { speaker: 'DEFENSA', text: '(Inviolable to blows... but permeable to a medical needle.)', pose: 'donramon_idle' }
      ]
    }
  ]
};
