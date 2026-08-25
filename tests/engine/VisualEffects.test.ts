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

  it('stacks slam palms above the bench and keeps standing poses behind it', () => {
    const slamLine = { text: '¡Protesto!', speaker: 'DEFENSA', pose: 'chapulin_slam' } as const;
    VisualEffects.updateStagingForLine(dom, slamLine, /*isTrialMode=*/ true);
    expect(dom.gameScreen.dataset.stageFrame).toBe('bench-slam');
    expect(dom.gameScreen.style.getPropertyValue('--char-layer')).toBe('4');

    const standLine = { text: 'Su Señoría...', speaker: 'DEFENSA', pose: 'chapulin_idle' } as const;
    VisualEffects.updateStagingForLine(dom, standLine, /*isTrialMode=*/ true);
    expect(dom.gameScreen.dataset.stageFrame).toBe('bench-stand');
    expect(dom.gameScreen.style.getPropertyValue('--char-layer')).toBe('2');
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

  it('stages podium and bench furniture overlays correctly', () => {
    // Set podium
    VisualEffects.setFurniture(dom.courtFurnitureSpriteEl, dom.courtFurnitureContainerEl, 'podium');
    expect(dom.courtFurnitureSpriteEl.src).toContain('assets/court_podium.png');
    expect(dom.courtFurnitureContainerEl.classList.contains('hidden')).toBe(false);
    expect(dom.courtFurnitureContainerEl.dataset.furniture).toBe('podium');

    // Set bench
    VisualEffects.setFurniture(dom.courtFurnitureSpriteEl, dom.courtFurnitureContainerEl, 'bench');
    expect(dom.courtFurnitureSpriteEl.src).toContain('assets/court_bench.png');
    expect(dom.courtFurnitureContainerEl.classList.contains('hidden')).toBe(false);
    expect(dom.courtFurnitureContainerEl.dataset.furniture).toBe('bench');

    // Hide furniture
    VisualEffects.hideFurniture(dom.courtFurnitureContainerEl);
    expect(dom.courtFurnitureContainerEl.classList.contains('hidden')).toBe(true);
    expect(dom.courtFurnitureContainerEl.dataset.furniture).toBe('none');
  });

  it('updates furniture dynamically according to line and scene context', () => {
    // Investigation mode -> no furniture
    VisualEffects.updateStagingForLine(dom, { text: 'Intro' }, /*isTrialMode=*/ false);
    expect(dom.courtFurnitureContainerEl.classList.contains('hidden')).toBe(true);
    expect(dom.gameScreen.dataset.stageFrame).toBe('plain');

    // Trial mode with witness background -> podium
    VisualEffects.updateStagingForLine(
      dom,
      { text: 'Testigo habla', bg: 'assets/bg_witness.jpg', speaker: 'TRIPASECA' },
      /*isTrialMode=*/ true
    );
    expect(dom.courtFurnitureSpriteEl.src).toContain('assets/court_podium.png');
    expect(dom.courtFurnitureContainerEl.classList.contains('hidden')).toBe(false);
    expect(dom.gameScreen.dataset.stageFrame).toBe('podium');

    // Trial mode with defense speaking with pose -> bench
    VisualEffects.updateStagingForLine(
      dom,
      { text: 'Objecion!', speaker: 'DEFENSA', pose: 'chapulin_slam' },
      /*isTrialMode=*/ true
    );
    expect(dom.courtFurnitureSpriteEl.src).toContain('assets/court_bench.png');
    expect(dom.courtFurnitureContainerEl.classList.contains('hidden')).toBe(false);
    expect(dom.gameScreen.dataset.stageFrame).toBe('bench-slam');

    // Explicit furniture override
    VisualEffects.updateStagingForLine(
      dom,
      { text: 'Custom line', furniture: 'none' },
      /*isTrialMode=*/ true
    );
    expect(dom.courtFurnitureContainerEl.classList.contains('hidden')).toBe(true);
  });

  it('automatically switches courtroom background and furniture for each speaker in trial mode', () => {
    // Start with witness background
    dom.bgEl.style.backgroundImage = "url('assets/bg_witness.jpg')";

    // 1. Defense protests with pose -> switches to defense background and bench
    VisualEffects.updateStagingForLine(
      dom,
      { speaker: 'DEFENSA', pose: 'chapulin_point', text: '¡Su testimonio se desmorona!' },
      /*isTrialMode=*/ true
    );
    expect(dom.bgEl.style.backgroundImage).toContain('assets/bg_defense.jpg');
    expect(dom.courtFurnitureSpriteEl.src).toContain('assets/court_bench.png');
    expect(dom.courtFurnitureContainerEl.classList.contains('hidden')).toBe(false);
    expect(dom.gameScreen.dataset.stageFrame).toBe('bench-stand');

    // 2. Prosecution talks -> switches to courtroom/prosecution background and hides furniture
    VisualEffects.updateStagingForLine(
      dom,
      { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'What?!' },
      /*isTrialMode=*/ true
    );
    expect(dom.bgEl.style.backgroundImage).toContain('assets/bg_courtroom.jpg');
    expect(dom.courtFurnitureContainerEl.classList.contains('hidden')).toBe(true);
    expect(dom.gameScreen.dataset.stageFrame).toBe('plain');

    // 3. Judge talks -> switches to judge background and hides furniture
    VisualEffects.updateStagingForLine(
      dom,
      { speaker: 'JUEZ', pose: 'judge_thinking', text: '¡Vaya sonido!' },
      /*isTrialMode=*/ true
    );
    expect(dom.bgEl.style.backgroundImage).toContain('assets/bg_judge.jpg');
    expect(dom.courtFurnitureContainerEl.classList.contains('hidden')).toBe(true);
    expect(dom.gameScreen.dataset.stageFrame).toBe('plain');

    // 4. Witness talks -> switches back to witness background and shows podium
    VisualEffects.updateStagingForLine(
      dom,
      { speaker: 'TRIPASECA', pose: 'tripaseca_sweat', text: '¡Glup!' },
      /*isTrialMode=*/ true
    );
    expect(dom.bgEl.style.backgroundImage).toContain('assets/bg_witness.jpg');
    expect(dom.courtFurnitureSpriteEl.src).toContain('assets/court_podium.png');
    expect(dom.courtFurnitureContainerEl.classList.contains('hidden')).toBe(false);
    expect(dom.gameScreen.dataset.stageFrame).toBe('podium');

    // 5. Defense speaks with NO explicit pose -> defaults to donramon_idle and shows bench
    VisualEffects.updateStagingForLine(
      dom,
      { speaker: 'DEFENSA', text: '¡La defensa no descansará!' },
      /*isTrialMode=*/ true
    );
    expect(dom.bgEl.style.backgroundImage).toContain('assets/bg_defense.jpg');
    expect(dom.courtFurnitureSpriteEl.src).toContain('assets/court_bench.png');
    expect(dom.courtFurnitureContainerEl.classList.contains('hidden')).toBe(false);
    expect(dom.gameScreen.dataset.stageFrame).toBe('bench-stand');
  });

  it('resolves effective pose for trial defense and defendant correctly', () => {
    expect(VisualEffects.resolveEffectivePose({ text: 'A', speaker: 'DEFENSA' }, /*isTrialMode=*/ true)).toBe('donramon_idle');
    expect(VisualEffects.resolveEffectivePose({ text: 'A', speaker: 'DON RAMON' }, /*isTrialMode=*/ true)).toBe('donramon_idle');
    expect(VisualEffects.resolveEffectivePose({ text: 'A', speaker: 'CHAPULIN' }, /*isTrialMode=*/ true)).toBe('chapulin_idle');
    expect(VisualEffects.resolveEffectivePose({ text: 'A', speaker: 'JUEZ' }, /*isTrialMode=*/ true)).toBe(null);
    expect(VisualEffects.resolveEffectivePose({ text: 'A', speaker: 'DEFENSA' }, /*isTrialMode=*/ false)).toBe(null);
    expect(VisualEffects.resolveEffectivePose({ text: 'A', speaker: 'DEFENSA', pose: 'donramon_slam' }, /*isTrialMode=*/ true)).toBe('donramon_slam');
  });
});
