/**
 * Audio Subsystem Public Interface
 */

import { MidiMusicComposer } from './Private/MidiMusicComposer.js';
import { SoundEngine } from './Private/SoundEngine.js';

export { SoundEngine } from './Private/SoundEngine.js';
export { MidiMusicComposer } from './Private/MidiMusicComposer.js';

export const soundEngine = new SoundEngine();
export const midiComposer = new MidiMusicComposer(soundEngine);
