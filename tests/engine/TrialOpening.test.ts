import { describe, expect, it, vi } from 'vitest';
import { setupDomHarness } from '../fakes/DomHarness.js';

const paintedShots: unknown[] = [];
vi.mock('../../src/engine/Private/SceneFade.js', () => ({
  fadeToGalleryShot: (_flash: unknown, options: { onCovered: () => unknown }) => options.onCovered()
}));
vi.mock('../../src/engine/Private/StageCommit.js', () => ({
  presentDialogueVisuals: (_dom: unknown, shot: unknown) => { paintedShots.push(shot); }
}));

import { fadeAcrossGallery } from '../../src/engine/Private/TrialOpening.js';

describe('TrialOpening', () => {
  it('uses the no-bag gallery only for Case 1 day 1', () => {
    vi.useFakeTimers();
    for (const [caseId, trialDay, expected] of [
      ['case1', 1, 'assets/bg_gallery_characters_sam_no_bag.webp'],
      ['case1', 2, 'assets/bg_gallery_characters.webp'],
      ['case2', 1, 'assets/bg_gallery_characters.webp']
    ] as const) {
      paintedShots.length = 0;
      fadeAcrossGallery(setupDomHarness(), () => {}, { caseId, trialDay });
      expect(paintedShots).toEqual([expect.objectContaining({ bg: expected, furniture: 'none' })]);
    }
    vi.useRealTimers();
  });
});
