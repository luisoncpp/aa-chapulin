// @Architecture(descriptionShort="Tests climax verdict then waiting-room epilogue staging", type="test", icon="dialog")
import { describe, expect, it, beforeEach } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { queueClimaxVictory } from '../../src/engine/Private/TrialClimax.js';
import { UI_ES } from '../../src/i18n/index.js';
import type { DialogueLine } from '../../src/types/index.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('TrialClimax waiting-room epilogue', () => {
  let dom: DomElements;
  let queued: DialogueLine[][];
  let pending: Array<(() => void) | undefined>;

  beforeEach(() => {
    dom = setupDomHarness();
    queued = [];
    pending = [];
    dom.bgEl.style.backgroundImage = "url('assets/bg_courtroom.jpg')";
    dom.locationBannerEl.textContent = UI_ES.locationCourtroom;
  });

  it('plays Case 2 epilogue in the waiting room after the courtroom verdict', () => {
    const climax = getCaseScript('es', 'case2').trial.climax;
    queueClimaxVictory(climax, {
      dom,
      onQueueDialogue: (dialogue, onComplete) => {
        queued.push(dialogue);
        pending.push(onComplete);
      }
    });

    expect(queued).toHaveLength(1);
    expect(queued[0].some((line) => line.text.includes('INOCENTE'))).toBe(true);
    expect(queued[0].some((line) => line.speaker === 'CHOMPIRAS')).toBe(false);
    expect(dom.bgEl.style.backgroundImage).toContain('bg_courtroom.jpg');
    expect(dom.confettiContainerEl.children.length).toBe(0);

    pending[0]!();
    expect(queued).toHaveLength(2);
    expect(dom.bgEl.style.backgroundImage).toContain('bg_waiting_room.jpg');
    expect(dom.locationBannerEl.textContent).toBe(UI_ES.locationWaitingRoom);
    expect(queued[1].some((line) => line.speaker === 'CHOMPIRAS')).toBe(true);
    expect(queued[1].every((line) => line.bg === 'assets/bg_waiting_room.jpg')).toBe(true);
    expect(queued[1].every((line) => line.furniture === 'none')).toBe(true);
    expect(dom.confettiContainerEl.children.length).toBe(0);

    pending[1]!();
    expect(dom.confettiContainerEl.children.length).toBe(80);
  });

  it('fires confetti after Case 1 verdict when there is no epilogue', () => {
    const climax = getCaseScript('es', 'case1').trial.climax;
    expect(climax.epilogue).toBeUndefined();
    queueClimaxVictory(climax, {
      dom,
      onQueueDialogue: (dialogue, onComplete) => {
        queued.push(dialogue);
        pending.push(onComplete);
      }
    });
    pending[0]!();
    expect(queued).toHaveLength(1);
    expect(dom.confettiContainerEl.children.length).toBe(80);
  });
});
