// @Architecture(descriptionShort="Tests climax verdict then waiting-room epilogue staging", type="test", icon="dialog")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { CASE_SCRIPT, getCaseScript } from '../../src/case/index.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { COURTROOM_CELEBRATION_MS, SCENE_FADE_MS } from '../../src/engine/Private/SceneFade.js';
import { queueClimaxVictory } from '../../src/engine/Private/TrialClimax.js';
import { resolvePointClick } from '../../src/engine/Private/PresentPoint.js';
import { TrialController } from '../../src/engine/Private/TrialController.js';
import { UI_ES } from '../../src/i18n/index.js';
import { GameStateManager } from '../../src/state/index.js';
import type { CaseScript, DialogueLine } from '../../src/types/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
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
    dom.bgEl.style.backgroundImage = "url('assets/bg_courtroom.webp')";
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
    expect(dom.bgEl.style.backgroundImage).toContain('bg_courtroom.webp');
    expect(dom.confettiContainerEl.children.length).toBe(0);

    pending[0]!();
    expect(dom.confettiContainerEl.children.length).toBe(80);
    expect(dom.bgEl.style.backgroundImage).toContain('bg_courtroom.webp');
    expect(dom.locationBannerEl.textContent).toBe(UI_ES.locationCourtroom);
    expect(queued).toHaveLength(1);

    vi.advanceTimersByTime(COURTROOM_CELEBRATION_MS);
    expect(dom.bgEl.style.backgroundImage).toContain('bg_courtroom.webp');
    expect(dom.confettiContainerEl.children.length).toBe(80);
    expect(dom.flashEl.classList.contains('hidden')).toBe(false);
    expect(dom.flashEl.style.opacity).toBe('1');

    vi.advanceTimersByTime(5000);
    expect(dom.bgEl.style.backgroundImage).toContain('bg_waiting_room.webp');
    expect(dom.locationBannerEl.textContent).toBe(UI_ES.locationWaitingRoom);
    expect(queued).toHaveLength(2);
    expect(queued[1].some((line) => line.speaker === 'CHOMPIRAS')).toBe(true);
    expect(queued[1].every((line) => line.bg === 'assets/bg_waiting_room.webp')).toBe(true);
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

describe('TrialClimax staged finale without choices', () => {
  it('plays the final stage successDialogue then the verdict celebration', () => {
    const dom = setupDomHarness();
    const sound = new SoundEngine();
    sound.init(new FakeAudioContext() as unknown as AudioContext);
    const script = JSON.parse(JSON.stringify(CASE_SCRIPT)) as CaseScript;
    script.trial.climax = {
      dialogue: [{ speaker: 'JUEZ', text: 'Presente la prueba.' }],
      presentTarget: ['chipote_chillon'],
      stages: [
        { presentTarget: ['chipote_chillon'], successDialogue: [{ speaker: 'DEFENSA', text: 'Etapa uno.' }] },
        { presentTarget: ['informe_medico'], successDialogue: [{ speaker: 'DEFENSA', text: 'Breakdown del falso conde.' }] }
      ],
      verdict: [{ speaker: 'JUEZ', text: '¡INOCENTE!' }]
    };
    const queued: DialogueLine[][] = [];
    const controller = new TrialController({
      dom,
      state: new GameStateManager(),
      script,
      soundEngine: sound,
      midiComposer: new MidiMusicComposer(sound),
      onQueueDialogue: (dialogue, onComplete) => {
        queued.push(dialogue);
        if (onComplete) onComplete();
      },
      onRenderLine: () => {},
      onOpenCourtRecord: () => {}
    });
    controller.startClimax();
    controller.handlePresentEvidence('chipote_chillon');
    controller.handlePresentEvidence('informe_medico');
    expect(queued.some((d) => d.some((l) => l.text.includes('Breakdown')))).toBe(true);
    expect(queued.some((d) => d.some((l) => l.text.includes('INOCENTE')))).toBe(true);
    expect(dom.confettiContainerEl.children.length).toBe(80);
    expect(controller.isAwaitingEvidence()).toBe(false);
  });

  it('holds climax successDialogue until Present & Point hits the correct zone', () => {
    const dom = setupDomHarness();
    const sound = new SoundEngine();
    sound.init(new FakeAudioContext() as unknown as AudioContext);
    const script = JSON.parse(JSON.stringify(CASE_SCRIPT)) as CaseScript;
    script.trial.climax = {
      dialogue: [{ speaker: 'JUEZ', text: 'Presente la botella.' }],
      presentTarget: ['chipote_chillon'],
      stages: [
        {
          presentTarget: ['chipote_chillon'],
          successDialogue: [{ speaker: 'DEFENSA', text: 'El lacre está pinchado.' }],
          pointTarget: {
            targetEvidenceId: 'chipote_chillon',
            promptQuestion: 'Señale el pinchazo.',
            imageAsset: 'assets/examine_botella.webp',
            zones: [
              { id: 'seal', bounds: [40, 0, 60, 30], isCorrect: true, failureDialogue: [] },
              { id: 'rest', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: [{ text: 'No es ahí.' }] }
            ]
          }
        },
        { presentTarget: ['informe_medico'], successDialogue: [{ speaker: 'DEFENSA', text: 'El sello.' }] }
      ],
      verdict: [{ speaker: 'JUEZ', text: '¡INOCENTE!' }]
    };
    const queued: DialogueLine[][] = [];
    const controller = new TrialController({
      dom,
      state: new GameStateManager(),
      script,
      soundEngine: sound,
      midiComposer: new MidiMusicComposer(sound),
      onQueueDialogue: (dialogue, onComplete) => {
        queued.push(dialogue);
        if (onComplete) onComplete();
      },
      onRenderLine: () => {},
      onOpenCourtRecord: () => {}
    });
    controller.startClimax();
    controller.handlePresentEvidence('chipote_chillon');
    expect(queued.some((d) => d.some((l) => l.text.includes('pinchado')))).toBe(false);
    expect(dom.presentPointOverlayEl?.classList.contains('hidden')).toBe(false);
    resolvePointClick(50, 10);
    expect(queued.some((d) => d.some((l) => l.text.includes('pinchado')))).toBe(true);
  });
});

