// @Architecture(descriptionShort="Binds investigation hotspot regions and hover tooltips", type="util", icon="layout")
/**
 * Hotspot DOM binding for [[./InvestigationController.ts]].
 */

import type { GameFlags, Hotspot } from '../../types/index.js';

export interface HotspotBindConfig {
  container: HTMLElement;
  tooltipEl: HTMLElement;
  isExamineActive: () => boolean;
  onClick: (hotspot: Hotspot) => void;
}

/** A hotspot without a predicate is always available. */
export function visibleHotspots(hotspots: Hotspot[], flags: GameFlags): Hotspot[] {
  return hotspots.filter(/*isAvailable*/ (h) => !h.condition || h.condition(flags));
}

export function renderHotspots(hotspots: Hotspot[], config: HotspotBindConfig): void {
  config.container.innerHTML = '';
  hotspots.forEach((h) => {
    config.container.appendChild(createHotspotElement(h, config));
  });
}

function createHotspotElement(h: Hotspot, config: HotspotBindConfig): HTMLDivElement {
  const spot = document.createElement('div');
  spot.className = 'hotspot-area';
  spot.style.left = `${h.x}%`;
  spot.style.top = `${h.y}%`;
  spot.style.width = `${h.w}%`;
  spot.style.height = `${h.h}%`;
  // Percents of #game-screen after #scene-bg cover-crop, not of the JPEG.
  spot.title = h.label;
  spot.addEventListener('mouseenter', () => {
    if (!config.isExamineActive()) return;
    config.tooltipEl.textContent = `🔍 ${h.label}`;
    config.tooltipEl.classList.remove('hidden');
  });
  spot.addEventListener('mouseleave', () => {
    config.tooltipEl.classList.add('hidden');
  });
  spot.addEventListener('click', (e) => {
    e.stopPropagation();
    config.onClick(h);
  });
  return spot;
}
