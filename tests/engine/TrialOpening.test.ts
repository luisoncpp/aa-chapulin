import { describe, expect, it, vi } from 'vitest';
import { setupDomHarness } from '../fakes/DomHarness.js';
import { adjournmentDays, climaxLines, trialLines } from '../case/ScriptWalk.js';
import type { CaseScript, DialogueLine, TrialDay } from '../../src/types/index.js';

const paintedShots: unknown[] = [];
vi.mock('../../src/engine/Private/SceneFade.js', () => ({
  fadeToGalleryShot: (_flash: unknown, options: { onCovered: () => unknown }) => options.onCovered()
}));
vi.mock('../../src/engine/Private/StageCommit.js', () => ({
  presentDialogueVisuals: (_dom: unknown, shot: unknown) => { paintedShots.push(shot); }
}));

import {
  fadeAcrossGallery, getTrialGalleryBackground, splitTrialIntroAtGallery
} from '../../src/engine/Private/TrialOpening.js';
import { getActiveTrial } from '../../src/engine/Private/TrialDayRouter.js';
import {
  CASE_SCRIPT_CASE0_EN, CASE_SCRIPT_CASE0_ES, CASE_SCRIPT_CASE1_EN, CASE_SCRIPT_CASE1_ES,
  CASE_SCRIPT_CASE2_EN, CASE_SCRIPT_CASE2_ES, CASE_SCRIPT_CASE3_EN, CASE_SCRIPT_CASE3_ES,
  CASE_SCRIPT_CASE4_EN, CASE_SCRIPT_CASE4_ES, CASE_SCRIPT_CASE5_EN, CASE_SCRIPT_CASE5_ES
} from '../../src/case/index.js';

const DECLARED_PLATE = 'assets/fixture_gallery_plate.webp';

function fixtureScript(id: CaseScript['id'], day2Plate?: string): CaseScript {
  const base = CASE_SCRIPT_CASE1_ES;
  const day2 = { ...base.adjournment!.trial, galleryBg: day2Plate };
  const trial = { ...base.trial, galleryBg: undefined };
  return { ...base, id, trial, adjournment: { ...base.adjournment!, trial: day2 } };
}

function paintedGallery(script: CaseScript, trialDay: TrialDay): unknown {
  paintedShots.length = 0;
  fadeAcrossGallery(setupDomHarness(), () => {}, { script, trialDay });
  expect(paintedShots).toHaveLength(1);
  return paintedShots[0];
}

const ALL_SCRIPTS = [
  CASE_SCRIPT_CASE0_ES, CASE_SCRIPT_CASE0_EN, CASE_SCRIPT_CASE1_ES, CASE_SCRIPT_CASE1_EN,
  CASE_SCRIPT_CASE2_ES, CASE_SCRIPT_CASE2_EN, CASE_SCRIPT_CASE3_ES, CASE_SCRIPT_CASE3_EN,
  CASE_SCRIPT_CASE4_ES, CASE_SCRIPT_CASE4_EN, CASE_SCRIPT_CASE5_ES, CASE_SCRIPT_CASE5_EN
];

function trialDays(script: CaseScript): TrialDay[] {
  return [1, ...[...adjournmentDays(script)].map((_, index) => index + 2)] as TrialDay[];
}

function galleryPlatesStamped(script: CaseScript, trialDay: TrialDay): Set<string> {
  const lines: DialogueLine[] = [...trialLines(getActiveTrial(script, trialDay))];
  if (trialDay === trialDays(script).at(-1)) lines.push(...climaxLines(script.trial.climax));
  return new Set(lines.map((line) => line.bg ?? '').filter((bg) => bg.includes('bg_gallery')));
}

describe('TrialOpening', () => {
  it('paints the gallery plate the trial day declares and a shared fallback otherwise', () => {
    vi.useFakeTimers();
    const declaring = fixtureScript('case1', DECLARED_PLATE);
    const other = fixtureScript('case2');
    expect(paintedGallery(declaring, 2)).toEqual(expect.objectContaining({ bg: DECLARED_PLATE, furniture: 'none' }));
    const fallback = paintedGallery(declaring, 1);
    expect(fallback).not.toEqual(expect.objectContaining({ bg: DECLARED_PLATE }));
    expect(paintedGallery(other, 1)).toEqual(fallback);
    expect(paintedGallery(other, 2)).toEqual(fallback);
    vi.useRealTimers();
  });

  it('opens each lobby-split trial day on a gallery plate its own courtroom narration uses', () => {
    for (const script of ALL_SCRIPTS) {
      for (const trialDay of trialDays(script)) {
        if (!splitTrialIntroAtGallery(script, trialDay)) continue;
        const stamped = galleryPlatesStamped(script, trialDay);
        if (stamped.size === 0) continue;
        const opening = getTrialGalleryBackground(script, trialDay);
        expect([...stamped], `${script.id} day ${trialDay}`).toContain(opening);
      }
    }
  });

  it('opens each trial day on the same plate in Spanish and English', () => {
    for (let index = 0; index < ALL_SCRIPTS.length; index += 2) {
      const [es, en] = [ALL_SCRIPTS[index], ALL_SCRIPTS[index + 1]];
      for (const trialDay of trialDays(es)) {
        expect(getTrialGalleryBackground(en, trialDay), `${es.id} day ${trialDay}`)
          .toBe(getTrialGalleryBackground(es, trialDay));
      }
    }
  });
});
