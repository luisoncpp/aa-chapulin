// @Architecture(descriptionShort="Unit tests for application entrypoint bootstrap logic", type="test", icon="app-window")
import { afterEach, describe, expect, it, vi } from 'vitest';
import { setupDomHarness } from './fakes/DomHarness.js';

/**
 * Both cases import the whole engine module graph cold; under a fully loaded
 * suite that import alone can exceed vitest's 5s default, so they carry their own.
 */
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
  }, /*timeoutMs=*/20000);

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
  }, /*timeoutMs=*/20000);
});
