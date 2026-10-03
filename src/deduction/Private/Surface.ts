// @Architecture(descriptionShort="Optional lazy WebGL surface with equivalent SVG fallback")
import type { Phase } from './Contract.js';
import type { ThreeScene } from './ThreeScene.js';
export interface PresentationState {
  count: number; selected: number; focus: number; phase: Phase; paused: boolean; reduced: boolean; labels: string[];
}

export class DeductionSurface {
  private scene: ThreeScene | null = null;
  private generation = 0;
  private disposed = false;
  private state: PresentationState;
  private readonly fallback: HTMLElement;
  constructor(private readonly host: HTMLElement, private readonly onMode: (mode: string) => void) {
    this.state = { count: 1, selected: -1, focus: 0, phase: 'entry', paused: false, reduced: false, labels: [] };
    this.fallback = document.createElement('div');
    this.fallback.className = 'fallback-space'; this.host.append(this.fallback); this.drawFallback();
  }

  public async setFlat(flat: boolean): Promise<void> {
    const generation = ++this.generation;
    this.scene?.dispose(); this.scene = null; this.host.dataset.renderer = '2d';
    this.onMode('2D');
    if (flat || this.disposed) return;
    try {
      const { ThreeScene } = await import('./ThreeScene.js');
      await document.fonts?.ready;
      if (this.disposed || generation !== this.generation) return;
      if (!document.createElement('canvas').getContext('webgl2')) return;
      const candidate = new ThreeScene(this.host, /*fallBackWithoutChangingLogic*/ () => { void this.setFlat(/*flat=*/true); });
      if (generation !== this.generation || this.disposed) { candidate.dispose(); return; }
      this.scene = candidate;
      this.scene.update(this.state); this.host.dataset.renderer = '3d'; this.onMode('3D');
    } catch { if (generation === this.generation) { this.scene?.dispose(); this.scene = null; this.host.dataset.renderer = '2d'; } }
  }

  public update(state: PresentationState): void {
    this.state = state;
    this.host.dataset.paused = String(state.paused || state.reduced);
    this.drawFallback(); this.scene?.update(state);
  }

  private drawFallback(): void {
    const count = ['question', 'rejected', 'travel'].includes(this.state.phase) ? this.state.count : 1;
    if (this.host.dataset.key === `${count}:${this.state.selected}`) return;
    this.host.dataset.key = `${count}:${this.state.selected}`;
    const paths = Array.from({ length: count }, (_, i) => {
      const x = count === 1 ? 480 : 180 + i * 600 / (count - 1);
      const selected = this.state.selected < 0 || this.state.selected === i;
      return `<path d="M480 540 Q480 370 ${x} 270 Q${x} 205 480 165" fill="none" stroke="${selected ? '#f0485d' : '#70243e'}" stroke-width="8"/>
        <path d="M480 540 Q480 370 ${x} 270 Q${x} 205 480 165" fill="none" stroke="#fff4e8" stroke-width="2" opacity="${selected ? 0.8 : 0.1}"/>`;
    }).join('');
    const rays = [0, 160, 320, 640, 800, 960].map(x => `<path d="M${x} 540 L480 165 M${x} 0 L480 165"/>`).join('');
    this.fallback.innerHTML = `<svg viewBox="0 0 960 540" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g stroke="#31577d" stroke-width="1" fill="none">${rays}</g>${paths}<circle cx="480" cy="165" r="9" fill="#dcf7ff"/></svg>`;
  }

  public dispose(): void { this.disposed = true; this.generation++; this.scene?.dispose(); this.fallback.remove(); }
}
