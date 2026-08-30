// @Architecture(descriptionShort="Unit tests for application entrypoint bootstrap logic", type="test", icon="app-window")
import { afterEach, describe, expect, it, vi } from 'vitest';
import { setupDomHarness } from './fakes/DomHarness.js';

describe('Application Entrypoint Bootstrap', () => {
  afterEach(() => {
    vi.resetModules();
    delete (window as { gameEngine?: unknown }).gameEngine;
    Object.defineProperty(document, 'readyState', {
      configurable: true,
      get: () => 'complete'
    });
  });

  it('bootstraps game engine when document is already ready', async () => {
    Object.defineProperty(document, 'readyState', {
      configurable: true,
      get: () => 'complete'
    });
    setupDomHarness();
    await import('../src/main.js');
    expect(window.gameEngine).toBeDefined();
  });

  it('defers bootstrap until DOMContentLoaded while the document is loading', async () => {
    Object.defineProperty(document, 'readyState', {
      configurable: true,
      get: () => 'loading'
    });
    setupDomHarness();
    await import('../src/main.js');
    expect(window.gameEngine).toBeUndefined();
    document.dispatchEvent(new Event('DOMContentLoaded'));
    expect(window.gameEngine).toBeDefined();
  });
});
