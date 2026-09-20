// @Architecture(descriptionShort="Tests courthouse bell firing on trial button unlock", type="test", icon="panel")
import { describe, expect, it, vi } from 'vitest';
import { SoundEngine } from '../../src/audio/index.js';
import { getCaseScript } from '../../src/case/index.js';
import { updateTrialButtonProgress } from '../../src/engine/Private/InvestigationTrialButton.js';

function makeButton(): HTMLButtonElement {
  const btn = document.createElement('button');
  btn.disabled = true;
  btn.classList.add('disabled');
  return btn;
}

describe('Trial launch bell', () => {
  it('rings once when the trial button becomes available, not on later checks', () => {
    const btn = makeButton();
    const notificationEl = document.createElement('div');
    const soundEngine = { playSFX: vi.fn() } as unknown as SoundEngine;

    updateTrialButtonProgress(btn, /*isReady=*/false, { notificationEl, soundEngine });
    expect(soundEngine.playSFX).not.toHaveBeenCalled();

    updateTrialButtonProgress(btn, /*isReady=*/true, { notificationEl, soundEngine });
    expect(soundEngine.playSFX).toHaveBeenCalledWith('bell');

    updateTrialButtonProgress(btn, /*isReady=*/true, { notificationEl, soundEngine });
    expect(soundEngine.playSFX).toHaveBeenCalledTimes(1);
  });

  it('keeps Case 5 free of narrated courthouse bell lines', () => {
    for (const lang of ['es', 'en'] as const) {
      const script = getCaseScript(lang, 'case5');
      const lines = Object.values(script.investigation).flatMap((scene) => [
        ...(scene.talkOptions || []).flatMap((talk) => talk.dialogue),
        ...(scene.hotspots || []).flatMap((hotspot) => hotspot.dialogue || [])
      ]);
      expect(lines.filter((line) => line.sfx === 'bell')).toHaveLength(0);
    }
  });
});
