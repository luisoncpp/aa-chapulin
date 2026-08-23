// @Architecture(descriptionShort="Unit tests for visual effects, animations, and overlays", type="test", icon="layers")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { VisualEffects } from '../../src/engine/Private/VisualEffects.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('VisualEffects Subsystem', () => {
  let dom: DomElements;

  beforeEach(() => {
    vi.useFakeTimers();
    dom = setupDomHarness();
  });

  it('updates character sprite pose and visibility', () => {
    VisualEffects.setPose(dom.charSpriteEl, 'chapulin_point');
    expect(dom.charSpriteEl.src).toContain('assets/chapulin_point.png');
    expect(dom.charSpriteEl.classList.contains('hidden')).toBe(false);

    VisualEffects.hideCharacter(dom.charSpriteEl);
    expect(dom.charSpriteEl.classList.contains('hidden')).toBe(true);

    // Empty pose does not alter src
    const prevSrc = dom.charSpriteEl.src;
    VisualEffects.setPose(dom.charSpriteEl, '' as any);
    expect(dom.charSpriteEl.src).toBe(prevSrc);
  });

  it('triggers screen shake animation and removes it after duration', () => {
    VisualEffects.shakeScreen(dom.gameScreen, /*durationMs=*/ 300);
    expect(dom.gameScreen.classList.contains('screen-shake')).toBe(true);

    vi.advanceTimersByTime(300);
    expect(dom.gameScreen.classList.contains('screen-shake')).toBe(false);
  });

  it('triggers screen flash fade in and fade out', () => {
    VisualEffects.flashScreen(dom.flashEl);
    expect(dom.flashEl.classList.contains('hidden')).toBe(false);
    expect(dom.flashEl.style.opacity).toBe('0.9');

    vi.advanceTimersByTime(120);
    expect(dom.flashEl.style.opacity).toBe('0');

    vi.advanceTimersByTime(200);
    expect(dom.flashEl.classList.contains('hidden')).toBe(true);
  });

  it('displays dramatic cut-in overlay and auto-hides after duration', () => {
    VisualEffects.showCutin(dom, 'objection_protesto');
    expect(dom.cutinImgEl.src).toContain('assets/objection_protesto.png');
    expect(dom.cutinOverlayEl.classList.contains('hidden')).toBe(false);
    expect(dom.cutinOverlayEl.classList.contains('cutin-animate')).toBe(true);

    vi.advanceTimersByTime(1100);
    expect(dom.cutinOverlayEl.classList.contains('hidden')).toBe(true);
    expect(dom.cutinOverlayEl.classList.contains('cutin-animate')).toBe(false);
  });

  it('generates 80 confetti particle elements on victory celebration', () => {
    expect(dom.confettiContainerEl.children).toHaveLength(0);

    VisualEffects.triggerConfetti(dom.confettiContainerEl);
    expect(dom.confettiContainerEl.classList.contains('hidden')).toBe(false);
    expect(dom.confettiContainerEl.children).toHaveLength(80);

    const firstPiece = dom.confettiContainerEl.children[0] as HTMLElement;
    expect(firstPiece.className).toBe('confetti-piece');
    expect(firstPiece.style.left).toBeDefined();
    expect(firstPiece.style.backgroundColor).toBeDefined();
  });

  it('displays slide-in notification toast and hides after timeout', () => {
    VisualEffects.showNotification(dom.gameNotificationEl, '¡Prueba encontrada!');
    expect(dom.gameNotificationEl.textContent).toBe('¡Prueba encontrada!');
    expect(dom.gameNotificationEl.classList.contains('hidden')).toBe(false);
    expect(dom.gameNotificationEl.classList.contains('notif-slide')).toBe(true);

    vi.advanceTimersByTime(2800);
    expect(dom.gameNotificationEl.classList.contains('hidden')).toBe(true);
    expect(dom.gameNotificationEl.classList.contains('notif-slide')).toBe(false);
  });
});
