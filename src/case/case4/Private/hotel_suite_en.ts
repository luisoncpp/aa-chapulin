// @Architecture(descriptionShort="English Case 4 day-1 Suite 304 scene", type="data", icon="layers")
/** Case 4 Day 1 — Suite 304 (`hotel_suite`), 11:00, English. */

import type { InvestigationScene } from '../../../types/index.js';
import { SUITE304_HOTSPOTS_EN } from './hotel_suite_hotspots_en.js';

export const CASE4_HOTEL_SUITE_EN: InvestigationScene = {
  title: 'Presidential Suite 304',
  name: 'Suite 304',
  bg: 'assets/bg_hotel_suite.webp',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'October 25, 11:00 AM. Presidential Suite 304.' },
    { speaker: 'SARGENTO', text: 'At your service, counselor! Sergeant Refugio Pazguato, of the police... for now.', pose: 'pazguato_saludo' },
    { speaker: 'DEFENSA', text: 'For now?', pose: 'donramon_idle' },
    { speaker: 'SARGENTO', text: 'Prosecutor Super Sam docks my pay every time I let a defense through. That makes two.', pose: 'pazguato_sweat' },
    { speaker: 'CHAPULIN', text: 'Then why are you letting us through?', pose: 'chapulin_idle' },
    { speaker: 'SARGENTO', text: 'Because I have looked murderers in the face for twenty years, and that heavy fellow has not got the face. He has the face of a man whose feet hurt.', pose: 'pazguato_decidido' },
    { speaker: 'SARGENTO', text: 'One thing, though: in here every object has its number. Move one, tell me.', pose: 'pazguato_saludo' },
    { speaker: 'DEFENSA', text: 'And that notebook?', pose: 'donramon_idle' },
    { speaker: 'SARGENTO', text: 'My list of the things I must not lose.', pose: 'pazguato_idle' },
    { speaker: 'CHAPULIN', text: 'And where do you write down losing the list?', pose: 'chapulin_idle' },
    { speaker: 'SARGENTO', text: '...Do not complicate procedure, Chapulín.', pose: 'pazguato_sweat' },
    { speaker: 'DEFENSA', text: 'Let us take what you saw, Sergeant. What you think happened we discuss in a while.', pose: 'donramon_idle' }
  ],
  hotspots: SUITE304_HOTSPOTS_EN,
  talkOptions: [
    {
      id: 'solicitar_cotejo',
      label: 'Request the comparison',
      condition: (flags) => Boolean(flags.examined_hotspot_cuerpo) && Boolean(flags.examined_hotspot_almohada),
      dialogue: [
        { speaker: 'DEFENSA', text: 'I want this pillow compared with the wound. Both having a hole is not enough for me.', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'I am requesting it in writing right now. The first report left before those exams finished.', pose: 'pazguato_saludo', unlockLocation: 'hotel_terraza' },
        { speaker: 'DEFENSA', text: 'And will they not dock another paycheck for that?', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: 'They will. But a sloppy report gets docked from my conscience, and no paycheck covers that.', pose: 'pazguato_decidido' },
        { speaker: 'CHAPULIN', text: 'Better to ask now than to...!', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'One proverb a day is enough, Chapulín.', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: 'I was going to say “be wrong later”.', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'Ah. Then yes.', pose: 'donramon_idle' }
      ]
    }
  ]
};
