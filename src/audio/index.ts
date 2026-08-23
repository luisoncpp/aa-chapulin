// @Architecture(descriptionShort="Public facade exporting procedural sound engine and composer", type="facade", icon="bolt")
/**
 * Audio Subsystem Public Interface
 * Exposes [[./Private/SoundEngine.ts|SoundEngine]] and [[./Private/MidiMusicComposer.ts|MidiMusicComposer]].
 */

import { MidiMusicComposer } from './Private/MidiMusicComposer.js';
import { SoundEngine } from './Private/SoundEngine.js';

export { SoundEngine } from './Private/SoundEngine.js';
export { MidiMusicComposer } from './Private/MidiMusicComposer.js';

// @Section(Singleton Engine Instances)
export const soundEngine = new SoundEngine();
export const midiComposer = new MidiMusicComposer(soundEngine);
