import { afterEach, expect, it, vi } from 'vitest';
import { PerspectiveCamera } from 'three';
import { IdeaPlanes } from '../../src/deduction/Private/IdeaPlanes.js';
import type { PresentationState } from '../../src/deduction/Private/Surface.js';

afterEach(() => vi.restoreAllMocks());

it('hides spatial choices throughout feedback and brings them back on retry', () => {
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({
    fillRect() {}, strokeRect() {}, fillText() {}, beginPath() {}, moveTo() {}, lineTo() {}, stroke() {},
    measureText: (text: string) => ({ width: text.length * 20 })
  } as unknown as CanvasRenderingContext2D);
  const ideas = new IdeaPlanes(new PerspectiveCamera());
  const state: PresentationState = { phase: 'question', count: 2, labels: ['First idea', 'Second idea'],
    focus: 0, selected: -1, paused: false, reduced: true };
  ideas.update(state, 16 / 9);
  expect(ideas.group.visible).toBe(true);
  expect(ideas.group.children).toHaveLength(state.labels.length);
  ideas.update({ ...state, phase: 'rejected', selected: 0 }, 16 / 9);
  expect(ideas.group.visible).toBe(false);
  ideas.animate(1, { ...state, phase: 'rejected' });
  expect(ideas.group.visible).toBe(false);
  ideas.update(state, 16 / 9);
  expect(ideas.group.visible).toBe(true);
  expect(ideas.group.children).toHaveLength(state.labels.length);
  ideas.dispose();
});
