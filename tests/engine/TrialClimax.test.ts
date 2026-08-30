// @Architecture(descriptionShort="Tests climax verdict then waiting-room epilogue staging", type="test", icon="dialog")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { COURTROOM_CELEBRATION_MS, SCENE_FADE_MS } from '../../src/engine/Private/SceneFade.js';
import { queueClimaxVictory } from '../../src/engine/Private/TrialClimax.js';
import { UI_ES } from '../../src/i18n/index.js';
import type { DialogueLine } from '../../src/types/index.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('TrialClimax waiting-room epilogue', () => {
  let dom: DomElements;
  let queued: DialogueLine[][];
  let pending: Array<(() => void) | undefined>;

  beforeEach(() => {
    vi.useFakeTimers();
    dom = setupDomHarness();
    queued = [];
    pending = [];
    dom.bgEl.style.backgroundImage = "url('assets/bg_courtroom.jpg')";
    dom.locationBannerEl.textContent = UI_ES.locationCourtroom;
  });

  it('celebrates the not-guilty verdict in court before fading to the waiting room', () => {
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
    expect(dom.confettiContainerEl.children.length).toBe(80);
    expect(dom.bgEl.style.backgroundImage).toContain('bg_courtroom.jpg');
    expect(dom.locationBannerEl.textContent).toBe(UI_ES.locationCourtroom);
    expect(queued).toHaveLength(1);

    vi.advanceTimersByTime(COURTROOM_CELEBRATION_MS);
    expect(dom.bgEl.style.backgroundImage).toContain('bg_courtroom.jpg');
    expect(dom.confettiContainerEl.children.length).toBe(80);
    expect(dom.flashEl.classList.contains('hidden')).toBe(false);
    expect(dom.flashEl.style.opacity).toBe('1');

    vi.advanceTimersByTime(5000);
    expect(dom.bgEl.style.backgroundImage).toContain('bg_waiting_room.jpg');
    expect(dom.locationBannerEl.textContent).toBe(UI_ES.locationWaitingRoom);
    expect(queued).toHaveLength(2);
    expect(queued[1].some((line) => line.speaker === 'CHOMPIRAS')).toBe(true);
    expect(queued[1].every((line) => line.bg === 'assets/bg_waiting_room.jpg')).toBe(true);
    expect(queued[1].every((line) => line.furniture === 'none')).toBe(true);
    expect(dom.flashEl.classList.contains('hidden')).toBe(true);
    expect(dom.confettiContainerEl.children.length).toBe(0);
  });

  it('fades to the case-complete plate after the waiting-room epilogue', () => {
    const climax = getCaseScript('es', 'case2').trial.climax;
    queueClimaxVictory(climax, {
      dom,
      onQueueDialogue: (dialogue, onComplete) => {
        queued.push(dialogue);
        pending.push(onComplete);
      }
    });
    pending[0]!();
    vi.advanceTimersByTime(COURTROOM_CELEBRATION_MS + SCENE_FADE_MS * 2);
    expect(queued).toHaveLength(2);
    pending[1]!();
    expect(dom.caseCompleteOverlayEl.classList.contains('hidden')).toBe(true);
    vi.advanceTimersByTime(SCENE_FADE_MS);
    expect(dom.caseCompleteOverlayEl.classList.contains('hidden')).toBe(false);
    expect(dom.caseCompleteTitleEl.textContent).toBe(UI_ES.caseCompleteTitle);
    expect(dom.dialogueBoxEl.classList.contains('hidden')).toBe(true);
  });

  it('treats Case 1 as a single present stage and Case 2 as three with choices', () => {
    const case1 = getCaseScript('es', 'case1').trial.climax;
    expect(case1.stages).toBeUndefined();
    expect(case1.choices).toBeUndefined();
    const case2 = getCaseScript('es', 'case2').trial.climax;
    expect(case2.stages).toHaveLength(3);
    expect(case2.choices).toHaveLength(2);
    expect(case2.stages?.[2].successDialogue).not.toBe(case2.verdict);
    expect(case2.stages?.[2].successDialogue.some((l) => l.text.includes('Molde de Cera'))).toBe(true);
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
    vi.advanceTimersByTime(COURTROOM_CELEBRATION_MS + SCENE_FADE_MS);
    expect(dom.caseCompleteOverlayEl.classList.contains('hidden')).toBe(false);
    expect(dom.caseCompleteTitleEl.textContent).toBe(UI_ES.caseCompleteTitle);
  });
});
