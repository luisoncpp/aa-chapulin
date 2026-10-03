// @Architecture(descriptionShort="Checks tutorial image loading and stale illustration cleanup", type="test", icon="image")
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { TutorialPresentation } from '../../src/engine/Private/TutorialPresentation.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('TutorialPresentation illustrations', () => {
  const pending: Array<{ onload: (() => void) | null; onerror: (() => void) | null; src: string }> = [];
  const illustration = { src: 'assets/tutorials/examine-es.webp', alt: 'Botón de examen' };

  beforeEach(() => {
    pending.length = 0;
    vi.stubGlobal('Image', class {
      onload: (() => void) | null = null;
      onerror: (() => void) | null = null;
      src = '';
      constructor() { pending.push(this); }
    });
  });

  afterEach(() => vi.unstubAllGlobals());

  it('shows a loaded illustration inside the dialogue box with its alternate text', () => {
    const dom = setupDomHarness();
    const tutorial = new TutorialPresentation(dom);
    tutorial.render({ speaker: 'MODO TUTORIAL', text: 'Ayuda', tutorialImage: illustration }, 'case1');
    expect(dom.tutorialImageEl.classList.contains('hidden')).toBe(true);
    expect(dom.tutorialImageEl.hasAttribute('src')).toBe(false);
    pending[0].onload!();
    expect(dom.dialogueBoxEl.contains(dom.tutorialImageEl)).toBe(true);
    expect(dom.tutorialImageEl.classList.contains('hidden')).toBe(false);
    expect(dom.tutorialImageEl.getAttribute('src')).toBe(illustration.src);
    expect(dom.tutorialImageEl.alt).toBe(illustration.alt);
  });

  it('leaves failed illustrations hidden while the tutorial remains active', () => {
    const dom = setupDomHarness();
    const tutorial = new TutorialPresentation(dom);
    tutorial.render({ speaker: 'TUTORIAL MODE', text: 'Help', tutorialImage: illustration }, 'case0');
    dom.dialogueTextEl.textContent = 'Help';
    pending[0].onerror!();
    expect(dom.gameScreen.classList.contains('tutorial-visible')).toBe(true);
    expect(dom.dialogueTextEl.textContent).toBe('Help');
    expect(dom.tutorialImageEl.hasAttribute('src')).toBe(false);
    expect(dom.tutorialImageEl.classList.contains('hidden')).toBe(true);
  });

  it('ignores a previous image response when another tutorial is already loading', () => {
    const dom = setupDomHarness();
    const tutorial = new TutorialPresentation(dom);
    tutorial.render({ speaker: 'MODO TUTORIAL', text: 'Uno', tutorialImage: illustration }, 'case0');
    const staleLoad = pending[0].onload!;
    const next = { src: 'assets/tutorials/tabs-es.webp', alt: 'Pestañas' };
    tutorial.render({ speaker: 'MODO TUTORIAL', text: 'Dos', tutorialImage: next }, 'case1');
    staleLoad();
    expect(dom.tutorialImageEl.hasAttribute('src')).toBe(false);
    pending[1].onload!();
    expect(dom.tutorialImageEl.getAttribute('src')).toBe(next.src);
  });

  it.each(['ordinary line', 'text-only tutorial', 'clear'])('drops delayed images after %s', (transition) => {
    const dom = setupDomHarness();
    const tutorial = new TutorialPresentation(dom);
    tutorial.render({ speaker: 'MODO TUTORIAL', text: 'Uno', tutorialImage: illustration }, 'case0');
    const staleLoad = pending[0].onload!;
    if (transition === 'clear') tutorial.clear();
    else tutorial.render({ speaker: transition === 'ordinary line' ? 'JUEZ' : 'MODO TUTORIAL', text: 'Dos' }, 'case0');
    staleLoad();
    expect(dom.tutorialImageEl.hasAttribute('src')).toBe(false);
    expect(dom.tutorialImageEl.alt).toBe('');
    expect(dom.tutorialImageEl.classList.contains('hidden')).toBe(true);
  });
});
