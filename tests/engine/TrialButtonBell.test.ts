// @Architecture(descriptionShort="Tests courthouse bell firing on trial button unlock", type="test", icon="panel")
import { describe, expect, it, vi } from 'vitest';
import { SoundEngine } from '../../src/audio/index.js';
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
});
