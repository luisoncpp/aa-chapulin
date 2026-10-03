import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import { resolvePointClick } from '../../src/engine/Private/PresentPoint.js';
import { SaveManager, type SaveData } from '../../src/state/index.js';
import { advanceUntil, makeSession } from '../fakes/SaveLoadHarness.js';

describe('resuming trial interactions and scene transitions', () => {
  beforeEach(() => { vi.useFakeTimers(); localStorage.clear(); });
  afterEach(() => { vi.clearAllTimers(); vi.useRealTimers(); });

  it('restores a point overlay and continues the owning contradiction', () => {
    const session = makeSession(localStorage);
    session.engine.startGame('case0');
    session.engine.queueDialogue([]);
    session.trial.startTestimony(1);
    session.trial.currentStatementIdx = session.trial.currentTestimony!.statements.findIndex(stmt => stmt.contradiction);
    const rule = session.trial.currentStatement()!.contradiction!;
    session.state.markEvidenceExamined(rule.requiresExamine!);
    session.trial.handlePresentEvidence(rule.evidence![0]);
    session.engine.saveGame();
    const loaded = makeSession(localStorage);
    loaded.engine.loadGame();
    expect(loaded.dom.presentPointOverlayEl!.classList.contains('hidden')).toBe(false);
    const [left, top, right, bottom] = rule.pointTarget!.zones.find(zone => zone.isCorrect)!.bounds;
    resolvePointClick((left + right) / 2, (top + bottom) / 2);
    advanceUntil(loaded, () => !loaded.dom.trialNavEl.classList.contains('hidden'));
    expect(loaded.trial.getTestimonyIndex()).toBe(2);
  }, 15000);

  it('resumes climax success dialogue before opening its choice', () => {
    const session = makeSession(localStorage);
    session.engine.startGame('case0');
    session.engine.queueDialogue([]);
    session.trial.startClimax();
    advanceUntil(session, () => !session.dom.courtRecordModalEl.classList.contains('hidden'));
    const climax = getCaseScript('es', 'case0').trial.climax;
    session.trial.handlePresentEvidence(climax.stages![0].presentTarget![0]);
    const [left, top, right, bottom] = climax.stages![0].pointTarget!.zones.find(zone => zone.isCorrect)!.bounds;
    resolvePointClick((left + right) / 2, (top + bottom) / 2);
    session.engine.saveGame();
    const loaded = makeSession(localStorage);
    loaded.engine.loadGame();
    expect(loaded.dom.choicePromptModalEl.classList.contains('hidden')).toBe(true);
    advanceUntil(loaded, () => !loaded.dom.choicePromptModalEl.classList.contains('hidden'));
    loaded.trial.handleSelectChoice(climax.choices![0].correctId);
    advanceUntil(loaded, () => !loaded.dom.courtRecordModalEl.classList.contains('hidden'));
    expect(loaded.trial.climaxStageIdx).toBe(1);
  });

  it('invalidates the old trial fade when loading a testimony save', () => {
    const session = makeSession(localStorage);
    session.engine.startGame('case0');
    session.engine.queueDialogue([]);
    session.trial.startTestimony(1);
    const statement = session.trial.currentStatement();
    session.engine.saveGame();
    session.trial.startTrial();
    session.engine.loadGame();
    vi.advanceTimersByTime(6000);
    expect(session.trial.currentStatement()?.id).toBe(statement?.id);
    expect(session.dom.dialogueTextEl.textContent).toBe(statement?.text);
  });

  it('restores the first climax question without replaying its opening', () => {
    const session = makeSession(localStorage);
    session.engine.startGame('case0');
    session.engine.queueDialogue([]);
    session.trial.startClimax();
    advanceUntil(session, () => !session.dom.courtRecordModalEl.classList.contains('hidden'));
    session.engine.saveGame();
    const loaded = makeSession(localStorage);
    loaded.engine.loadGame();
    expect(loaded.dom.courtRecordModalEl.classList.contains('hidden')).toBe(false);
    expect(loaded.trial.getPresentPrompt()).toBe(session.trial.getPresentPrompt());
  });

  it('rejects a broken dialogue checkpoint without changing runtime progress', () => {
    const session = makeSession(localStorage);
    session.engine.startGame('case0');
    const data = { ...session.state.exportState(), dialogue: { current: { text: 'broken' } } };
    SaveManager.saveToSlot(0, data as SaveData, localStorage);
    const inventory = [...session.state.inventory];
    expect(session.engine.loadGame()).toBe(false);
    expect(session.state.inventory).toEqual(inventory);
  });
});
