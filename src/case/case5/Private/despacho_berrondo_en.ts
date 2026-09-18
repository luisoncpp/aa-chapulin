// @Architecture(descriptionShort="English Case 5 day 2 Lic Berrondo office scene", type="data", icon="layers")
/**
 * Case 5, Day 2 — Attorney Fulgencio Berrondo's office (`despacho_berrondo`). Spec §12.3.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_BERRONDO_HOTSPOTS_EN } from './despacho_berrondo_hotspots_en.js';
import { CASE5_BERRONDO_TALKS_EN } from './despacho_berrondo_talks_en.js';

export const CASE5_DESPACHO_BERRONDO_EN: InvestigationScene = {
  title: 'Office of Attorney Fulgencio Berrondo',
  name: 'Berrondo Office',
  bg: 'assets/bg_despacho_berrondo.webp',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  idlePose: 'berrondo_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'December 7, 11:30 AM. Donceles 14, second floor. Office of Attorney Fulgencio Berrondo.', bg: 'assets/bg_despacho_berrondo.webp', furniture: 'none', bgm: 'suspense' },
    { speaker: 'NARRADOR', text: 'Four walls of leather-bound books from floor to ceiling, sorted by volume and by year.' },
    { speaker: 'BERRONDO', text: 'Come in, counselor. I was expecting you.', pose: 'berrondo_idle' },
    { speaker: 'DEFENSA', text: 'Me?!', pose: 'chapulin_panic' },
    { speaker: 'BERRONDO', text: 'Yesterday in court you stared at my lorgnette for forty seconds. A lawyer who stares at a lorgnette for forty seconds is coming.', pose: 'berrondo_idle' },
    { speaker: 'BERRONDO', text: 'Sit down. Coffee? It is from Coatepec.', pose: 'berrondo_idle' },
    { speaker: 'DEFENSA', text: '(This man is on the other side and he is offering me coffee.)', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'Attorney, you are helping the prosecutor who wants to lock up my client.', pose: 'chapulin_point' },
    { speaker: 'BERRONDO', text: 'I am assisting the public ministry, which is different and worse paid: I charge nothing.', pose: 'berrondo_idle' },
    { speaker: 'BERRONDO', text: 'And if your client is innocent, counselor, I will be the first to apologize in writing. With a copy to the bar.', pose: 'berrondo_idle' },
    { speaker: 'DEFENSA', text: '(He is not acting. That is the problem: he is not acting.)', pose: 'chapulin_idle' }
  ],
  hotspots: CASE5_BERRONDO_HOTSPOTS_EN,
  talkOptions: CASE5_BERRONDO_TALKS_EN
};
