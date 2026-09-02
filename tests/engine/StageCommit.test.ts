// @Architecture(descriptionShort="Regression tests for decoded stage cuts", type="test", icon="layers")
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  presentDialogueVisuals,
  whenStagingIdle
} from '../../src/engine/Private/StageCommit.js';
import { VisualEffects } from '../../src/engine/Private/VisualEffects.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('decoded stage cuts', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('keeps the previous pose and height until the next sprite has decoded', async () => {
    const { Image: NativeImage } = globalThis;
    const dom = setupDomHarness();
    VisualEffects.setPose(dom.charSpriteEl, 'donramon_idle');
    VisualEffects.updateStagingForLine(
      dom,
      { speaker: 'DEFENSA', pose: 'donramon_idle', text: 'A' },
      /*isTrialMode=*/ false
    );
    const priorHeight = dom.gameScreen.style.getPropertyValue('--char-height');

    let release!: () => void;
    const gate = new Promise<void>((resolve) => {
      release = resolve;
    });
    vi.stubGlobal(
      'Image',
      class GatedImage {
        complete = false;
        decode() {
          return gate;
        }
        set src(_url: string) {}
      }
    );

    presentDialogueVisuals(
      dom,
      { speaker: 'CHAPATIN', pose: 'chapatin_enojado', text: 'B' },
      /*isTrialMode=*/ false
    );
    expect(dom.charSpriteEl.src).toContain('donramon_idle');
    expect(dom.gameScreen.style.getPropertyValue('--char-height')).toBe(priorHeight);

    release();
    await whenStagingIdle();
    globalThis.Image = NativeImage;
    expect(dom.charSpriteEl.src).toContain('chapatin_enojado');
    expect(parseFloat(dom.gameScreen.style.getPropertyValue('--char-height'))).toBeLessThan(62);
  });

  it('drops a stale cut when a newer line is already pending', async () => {
    const { Image: NativeImage } = globalThis;
    const dom = setupDomHarness();
    VisualEffects.setPose(dom.charSpriteEl, 'donramon_idle');

    let release!: () => void;
    const gate = new Promise<void>((resolve) => {
      release = resolve;
    });
    vi.stubGlobal(
      'Image',
      class GatedImage {
        complete = false;
        decode() {
          return gate;
        }
        set src(_url: string) {}
      }
    );

    presentDialogueVisuals(
      dom,
      { speaker: 'DEFENSA', pose: 'donramon_point', text: 'Uno' },
      /*isTrialMode=*/ false
    );
    presentDialogueVisuals(
      dom,
      { speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'Dos' },
      /*isTrialMode=*/ false
    );
    release();
    await whenStagingIdle();
    globalThis.Image = NativeImage;
    expect(dom.charSpriteEl.src).toContain('chapulin_idle');
    expect(dom.charSpriteEl.src).not.toContain('donramon_point');
  });
});
