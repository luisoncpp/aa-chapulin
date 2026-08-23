// @Architecture(descriptionShort="Global test environment setup registering FakeAudioContext", type="setup", icon="bolt")
import { FakeAudioContext } from './fakes/FakeAudioContext.js';

if (typeof window !== 'undefined') {
  (window as any).AudioContext = FakeAudioContext;
  (window as any).webkitAudioContext = FakeAudioContext;
}
