import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mountDeduction } from '../../src/deduction/index.js';
import { demoSequence } from '../../src/demos/DeductionStory.js';

const audio = vi.hoisted(() => ({ sync: vi.fn(), dispose: vi.fn(), toggle: vi.fn(), visibility: vi.fn() }));
vi.mock('../../src/deduction/Private/Audio.js', () => ({ DeductionAudio: class {
  muted = false; unlock() {} focus() {} sync = audio.sync; dispose = audio.dispose; visibility = audio.visibility;
  toggle() { this.muted = !this.muted; audio.toggle(); return this.muted; }
} }));
vi.mock('../../src/deduction/Private/Surface.js', () => ({ DeductionSurface: class {
  update() {} async setFlat() {} dispose() {}
} }));

describe('deduction input and lifecycle', () => {
  let root: HTMLElement;
  let demo: ReturnType<typeof mountDeduction>;
  let continuation: ReturnType<typeof vi.fn>;
  const button = (action: string) => root.querySelector<HTMLButtonElement>(`[data-action="${action}"]`)!;
  const click = (action: string) => { vi.advanceTimersByTime(250); button(action).click(); };
  const toQuestion = () => { click('advance'); click('advance'); };
  const chooseCorrect = () => {
    vi.advanceTimersByTime(250);
    root.querySelector<HTMLButtonElement>(`[data-option="${demo.session.step.correctId}"]`)!.click();
  };

  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout', 'setInterval', 'clearInterval', 'performance'] });
    vi.clearAllMocks(); localStorage.clear();
    vi.spyOn(document, 'hidden', 'get').mockReturnValue(false);
    const media = new EventTarget(); Object.assign(media, { matches: true });
    vi.stubGlobal('matchMedia', () => media);
    vi.stubGlobal('ResizeObserver', class { observe() {} disconnect() {} });
    Object.defineProperty(HTMLDialogElement.prototype, 'showModal', { configurable: true, value: function () { this.open = true; } });
    Object.defineProperty(HTMLDialogElement.prototype, 'close', { configurable: true, value: function () {
      this.open = false; this.dispatchEvent(new Event('close'));
    } });
    root = document.createElement('main'); document.body.replaceChildren(root); continuation = vi.fn();
    demo = mountDeduction(root, demoSequence, continuation);
  });
  afterEach(() => { demo.dispose(); vi.restoreAllMocks(); vi.unstubAllGlobals(); vi.useRealTimers(); });

  it('previews on hover, confirms on one click and blocks repeated input', () => {
    toQuestion(); const before = demo.session.snapshot();
    const correct = root.querySelector<HTMLButtonElement>(`[data-option="${demo.session.step.correctId}"]`)!;
    correct.dispatchEvent(new Event('pointerover', { bubbles: true }));
    expect(demo.session.phase).toBe('question'); expect(demo.session.snapshot().accepted).toEqual(before.accepted);
    vi.advanceTimersByTime(250); correct.click(); correct.click();
    expect(demo.session.phase).toBe('travel'); expect(demo.session.snapshot().accepted).toHaveLength(1);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', repeat: true }));
    vi.advanceTimersByTime(130); expect(demo.session.phase).toBe('connection');
    expect(demo.session.snapshot().accepted).toHaveLength(1);
  });

  it('keeps the question and focus when consulting and ignores background answers', () => {
    toQuestion(); const before = demo.session.snapshot(); click('record');
    const dialog = root.querySelector('dialog')!;
    expect(dialog.open).toBe(true); expect(dialog.textContent).toContain(demo.session.localize(demo.session.step.question));
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    button('advance').click(); expect(demo.session.snapshot()).toEqual(before);
    click('close'); expect(demo.session.snapshot()).toEqual(before);
  });

  it('advances through the dialogue box without a label over the text', () => {
    const advance = button('advance');
    expect(root.querySelector('.reading')!.contains(advance)).toBe(true);
    expect(advance.textContent).toBe('');
    expect(advance.getAttribute('aria-label')).toBeTruthy();
    click('advance'); expect(demo.session.phase).toBe('premise');
  });

  it('blocks advances throughout the court zoom and enters the premise only after it', () => {
    const animation = { onfinish: null as (() => void) | null, cancel: vi.fn(), pause: vi.fn(), play: vi.fn() };
    root.querySelector<HTMLElement>('.court')!.animate = () => ({ ...animation }) as unknown as Animation;
    root.querySelector<HTMLElement>('.thought-space')!.animate = () => animation as unknown as Animation;
    const reduced = root.querySelector<HTMLInputElement>('[data-setting="motion"]')!;
    reduced.checked = false; reduced.dispatchEvent(new Event('change', { bubbles: true }));
    click('advance'); click('advance'); expect(demo.session.phase).toBe('entry');
    animation.onfinish!(); expect(demo.session.phase).toBe('premise');
    button('advance').click(); expect(demo.session.phase).toBe('premise');
  });

  it('uses the authored defender sprite for entry and return', () => {
    demo.dispose(); demo = mountDeduction(root, { ...demoSequence, defender: 'chapulin' }, continuation);
    expect(root.querySelector<HTMLImageElement>('.defender')!.src).toContain('chapulin_idle.webp');
    expect(demo.session.phase).toBe('entry');
  });

  it('isolates wrong-answer feedback and restores the same choices on retry', () => {
    toQuestion(); chooseCorrect(); vi.advanceTimersByTime(130); click('advance'); click('advance');
    const before = demo.session.snapshot();
    const wrong = demo.session.step.options.find(option => option.id !== demo.session.step.correctId)!;
    vi.advanceTimersByTime(250); root.querySelector<HTMLButtonElement>(`[data-option="${wrong.id}"]`)!.click();
    expect(demo.session.phase).toBe('rejected');
    expect(root.querySelector<HTMLElement>('.answers')!.hidden).toBe(true);
    expect(root.querySelector<HTMLElement>('.memory')!.hidden).toBe(true);
    expect(root.querySelector('.thought-text')!.textContent).toBe(demo.session.localize(wrong.rejection!));
    click('advance');
    expect(demo.session.phase).toBe('question');
    expect(demo.session.snapshot().accepted).toEqual(before.accepted);
    expect(root.querySelector<HTMLElement>('.answers')!.hidden).toBe(false);
    expect(root.querySelectorAll('[data-option]')).toHaveLength(demo.session.step.options.length);
  });

  it('pauses an accepted transition under a menu and drops stale callbacks after load', () => {
    toQuestion(); click('save'); root.querySelector<HTMLButtonElement>('[data-slot="0"]')!.click();
    chooseCorrect(); button('record').click(); vi.advanceTimersByTime(5000);
    expect(demo.session.phase).toBe('travel'); click('close'); vi.advanceTimersByTime(150);
    expect(demo.session.phase).toBe('connection');
    click('load'); root.querySelector<HTMLButtonElement>('[data-slot="0"]')!.click();
    const restored = demo.session.snapshot(); vi.advanceTimersByTime(5000);
    expect(demo.session.snapshot()).toEqual(restored); expect(demo.session.phase).toBe('question');
  });

  it('preserves accepted hypotheses across language changes and restore', () => {
    toQuestion(); chooseCorrect(); vi.advanceTimersByTime(130); const before = demo.session.snapshot();
    click('language'); expect(demo.session.snapshot()).toEqual({ ...before, language: 'en' });
    expect(root.querySelector('.thought-text')!.textContent).toBe(demo.session.step.connection.en);
    click('save'); root.querySelector<HTMLButtonElement>('[data-slot="2"]')!.click();
    click('sound'); click('advance'); click('load'); root.querySelector<HTMLButtonElement>('[data-slot="2"]')!.click();
    expect(demo.session.phase).toBe('connection'); expect(demo.session.language).toBe('en');
    expect(button('sound').getAttribute('aria-pressed')).toBe('false');
  });

  it('requires explicit overwrite and runs continuation only once', () => {
    click('save'); root.querySelector<HTMLButtonElement>('[data-slot="0"]')!.click();
    toQuestion(); click('save'); root.querySelector<HTMLButtonElement>('[data-slot="0"]')!.click();
    expect(root.querySelector('[data-action="overwrite-yes"]')).not.toBeNull();
    click('overwrite-no'); click('close'); click('load'); root.querySelector<HTMLButtonElement>('[data-slot="0"]')!.click();
    expect(demo.session.phase).toBe('entry'); toQuestion();
    while (demo.session.phase !== 'conclusion') {
      if (demo.session.phase === 'question') { chooseCorrect(); vi.advanceTimersByTime(130); }
      else click('advance');
    }
    vi.advanceTimersByTime(100000); expect(demo.session.phase).toBe('conclusion'); expect(continuation).not.toHaveBeenCalled();
    click('advance'); click('advance'); expect(continuation).toHaveBeenCalledTimes(1);
  });

  it('reveals text before advancing and removes timers/listeners on disposal', () => {
    const reduced = root.querySelector<HTMLInputElement>('[data-setting="motion"]')!;
    reduced.checked = false; reduced.dispatchEvent(new Event('change', { bubbles: true }));
    click('advance'); expect(demo.session.phase).toBe('premise');
    click('advance'); expect(demo.session.phase).toBe('premise');
    expect(root.querySelector('.thought-text')!.textContent).toBe(demo.session.text());
    demo.dispose(); const snapshot = demo.session.snapshot();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' })); vi.advanceTimersByTime(10000);
    expect(demo.session.snapshot()).toEqual(snapshot); expect(root.childElementCount).toBe(0);
  });
});
