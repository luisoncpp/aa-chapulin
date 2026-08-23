// @Architecture(descriptionShort="Unit tests for application entrypoint bootstrap logic", type="test", icon="app-window")
import { describe, expect, it, beforeEach } from 'vitest';
import { setupDomHarness } from './fakes/DomHarness.js';

describe('Application Entrypoint Bootstrap', () => {
  beforeEach(() => {
    setupDomHarness();
  });

  it('bootstraps game engine when document is ready', async () => {
    await import('../src/main.js');
    expect(window.gameEngine).toBeDefined();

    // Dispatch DOMContentLoaded
    document.dispatchEvent(new Event('DOMContentLoaded'));
    expect(window.gameEngine).toBeDefined();
  });
});
