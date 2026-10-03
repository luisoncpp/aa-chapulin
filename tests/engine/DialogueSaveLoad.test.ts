import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import { advanceUntil, makeSession } from '../fakes/SaveLoadHarness.js';
import { resolvePointClick } from '../../src/engine/Private/PresentPoint.js';

describe('resuming dialogue saves', () => {
  beforeEach(() => { vi.useFakeTimers(); localStorage.clear(); });
  afterEach(() => { vi.clearAllTimers(); vi.useRealTimers(); });

  it('resumes the Case 0 save tutorial in a fresh session and reaches testimony 3', () => {
    const session = makeSession(localStorage);
    session.engine.startGame('case0');
    session.engine.queueDialogue([]);
    session.trial.startTestimony(1);
    const statements = session.trial.currentTestimony!.statements;
    session.trial.currentStatementIdx = statements.findIndex((stmt) => stmt.contradiction);
    const rule = session.trial.currentStatement()!.contradiction!;
    if (rule.requiresExamine) session.state.markEvidenceExamined(rule.requiresExamine);
    session.trial.handlePresentEvidence(rule.evidence![0]);
    let target = rule.pointTarget;
    while (target) {
      const zone = target.zones.find((zone) => zone.isCorrect)!;
      const [left, top, right, bottom] = zone.bounds;
      resolvePointClick((left + right) / 2, (top + bottom) / 2);
      const nextTarget = target.next;
      if (nextTarget) advanceUntil(session, () => !session.dom.presentPointOverlayEl!.classList.contains('hidden'));
      target = nextTarget;
    }
    const tutorial = rule.successDialogue.find((line) => line.tutorialImage?.src.includes('save-load'))!;
    advanceUntil(session, () => session.dom.dialogueTextEl.textContent === tutorial.text);
    session.engine.saveGame();

    const loaded = makeSession(localStorage);
    expect(loaded.engine.loadGame()).toBe(true);
    vi.advanceTimersByTime(3000);
    expect(loaded.dom.dialogueTextEl.textContent).toBe(tutorial.text);
    expect(loaded.dom.trialNavEl.classList.contains('hidden')).toBe(true);
    advanceUntil(loaded, () => !loaded.dom.trialNavEl.classList.contains('hidden'));
    expect(loaded.trial.currentTestimony).toBe(getCaseScript('es', 'case0').trial.testimonies[2]);
  }, 15000);

  it('resumes contradiction success and advances to the next testimony', () => {
    const session = makeSession(localStorage);
    session.engine.startGame('case0');
    session.engine.queueDialogue([]);
    session.trial.startTestimony(0);
    const statements = session.trial.currentTestimony!.statements;
    session.trial.currentStatementIdx = statements.findIndex((stmt) => stmt.contradiction);
    const rule = session.trial.currentStatement()!.contradiction!;
    session.trial.handlePresentEvidence(rule.evidence![0]);
    vi.advanceTimersByTime(3000);
    const text = session.dom.dialogueTextEl.textContent;
    session.engine.saveGame();

    const loaded = makeSession(localStorage);
    loaded.engine.loadGame();
    vi.advanceTimersByTime(3000);
    expect(loaded.dom.dialogueTextEl.textContent).toBe(text);
    expect(loaded.dom.trialNavEl.classList.contains('hidden')).toBe(true);
    advanceUntil(loaded, () => loaded.trial.getPresentPrompt() === rule.followUp!.prompt);
    loaded.trial.handlePresentEvidence(rule.followUp!.evidence![0]);
    advanceUntil(loaded, () => !loaded.dom.trialNavEl.classList.contains('hidden'));
    expect(loaded.trial.getTestimonyIndex()).toBe(1);
  });

  it('restores an opening question without replaying the trial intro', () => {
    const session = makeSession(localStorage);
    session.engine.startGame('case0');
    advanceUntil(session, () => session.trial.isAwaitingEvidence());
    const prompt = session.trial.getPresentPrompt();
    session.engine.saveGame();
    const loaded = makeSession(localStorage);
    loaded.engine.loadGame();
    expect(loaded.trial.getPresentPrompt()).toBe(prompt);
    loaded.trial.handlePresentEvidence(getCaseScript('es', 'case0').trial.openingPresent!.evidence![0]);
    advanceUntil(loaded, () => !loaded.dom.trialNavEl.classList.contains('hidden'));
    expect(loaded.trial.getTestimonyIndex()).toBe(0);
  }, 15000);

  it('restores a follow-up question and keeps its answer routing', () => {
    const session = makeSession(localStorage);
    session.engine.startGame('case0');
    session.engine.queueDialogue([]);
    session.trial.startTestimony(0);
    session.trial.currentStatementIdx = session.trial.currentTestimony!.statements.findIndex(stmt => stmt.contradiction);
    const rule = session.trial.currentStatement()!.contradiction!;
    session.trial.handlePresentEvidence(rule.evidence![0]);
    advanceUntil(session, () => session.trial.getPresentPrompt() === rule.followUp!.prompt);
    session.engine.saveGame();
    const loaded = makeSession(localStorage);
    loaded.engine.loadGame();
    expect(loaded.trial.getPresentPrompt()).toBe(rule.followUp!.prompt);
    loaded.trial.handlePresentEvidence(rule.followUp!.evidence![0]);
    advanceUntil(loaded, () => !loaded.dom.trialNavEl.classList.contains('hidden'));
    expect(loaded.trial.getTestimonyIndex()).toBe(1);
  });

  it('resumes a press response and returns to the saved statement', () => {
    const session = makeSession(localStorage);
    session.engine.startGame('case0');
    session.engine.queueDialogue([]);
    session.trial.startTestimony(0);
    const statement = session.trial.currentStatement()!;
    session.trial.handlePressStatement();
    session.engine.saveGame();
    const loaded = makeSession(localStorage);
    loaded.engine.loadGame();
    advanceUntil(loaded, () => !loaded.dom.trialNavEl.classList.contains('hidden'));
    expect(loaded.trial.currentStatement()?.id).toBe(statement.id);
    expect(loaded.trial.getTrialSnapshot().pressedStatementIds).toContain(statement.id);
  });

  it('does not repeat an evidence update when restoring the displayed line', () => {
    const session = makeSession(localStorage);
    session.engine.startGame('case0');
    session.engine.queueDialogue([]);
    session.trial.startTestimony(2);
    session.trial.currentStatementIdx = session.trial.currentTestimony!.statements.findIndex(stmt => stmt.contradiction);
    const rule = session.trial.currentStatement()!.contradiction!;
    session.trial.handlePresentEvidence(rule.evidence![0]);
    const line = rule.successDialogue.find(line => line.updateEvidence)!;
    advanceUntil(session, () => session.dom.dialogueTextEl.textContent === line.text);
    const stage = session.state.getEvidenceUpdateStage(line.updateEvidence!);
    session.engine.saveGame();
    const loaded = makeSession(localStorage);
    loaded.engine.loadGame();
    expect(loaded.state.getEvidenceUpdateStage(line.updateEvidence!)).toBe(stage);
    expect(loaded.dom.recordNoticeEl.classList.contains('hidden')).toBe(true);
    vi.advanceTimersByTime(3000);
    loaded.engine.handleAdvance();
    expect(loaded.dom.recordNoticeEl.classList.contains('hidden')).toBe(false);
  });

  it('resumes an investigation intro that has already been marked as played', () => {
    const session = makeSession(localStorage);
    session.engine.startGame('case1');
    session.engine.handleAdvance();
    session.engine.handleAdvance();
    vi.advanceTimersByTime(3000);
    const text = session.dom.dialogueTextEl.textContent;
    session.engine.saveGame();
    const loaded = makeSession(localStorage);
    loaded.engine.loadGame();
    vi.advanceTimersByTime(3000);
    expect(loaded.dom.dialogueTextEl.textContent).toBe(text);
    expect(loaded.dom.investigationNavEl.classList.contains('hidden')).toBe(true);
    advanceUntil(loaded, () => !loaded.dom.investigationNavEl.classList.contains('hidden'));
  });
});
