/**
 * Procedural MIDI Synthesizer & Soundtrack Sequencer
 * Composes dynamic 16-bit Ace Attorney & Chapulin Colorado soundtracks in real time.
 */

class MidiMusicComposer {
    constructor(soundEngine) {
        this.se = soundEngine;
        this.currentTrack = null;
        this.queuedTrack = null;
        this.isPlaying = false;
        this.step = 0;
        this.timer = null;
        this.bpm = 120;
    }

    // Helper: Convert MIDI note number to frequency in Hz
    midiToFreq(midi) {
        if (!midi || midi <= 0) return 0;
        return 440 * Math.pow(2, (midi - 69) / 12);
    }

    // Play an instrument note on a specific channel
    playNote(midi, durationSec, type = 'square', gainLevel = 0.18, filterFreq = 2800) {
        if (!this.se.initialized || !this.se.ctx || !this.isPlaying || !midi || this.se.isMuted) return;
        const ctx = this.se.ctx;
        const t = ctx.currentTime;
        const freq = this.midiToFreq(midi);

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, t);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(filterFreq, t);

        // Linear ADSR Envelope
        gain.gain.setValueAtTime(0.0001, t);
        gain.gain.linearRampToValueAtTime(gainLevel, t + 0.02);
        gain.gain.linearRampToValueAtTime(gainLevel * 0.7, t + durationSec * 0.4);
        gain.gain.linearRampToValueAtTime(0.0001, t + durationSec);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.se.bgmGain);

        osc.start(t);
        osc.stop(t + durationSec + 0.05);
    }

    // Play drum hits (Kick, Snare, Hi-Hat)
    playDrum(type) {
        if (!this.se.initialized || !this.se.ctx || !this.isPlaying || this.se.isMuted) return;
        const ctx = this.se.ctx;
        const t = ctx.currentTime;

        if (type === 'K') { // Kick
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(140, t);
            osc.frequency.linearRampToValueAtTime(35, t + 0.12);

            gain.gain.setValueAtTime(0.4, t);
            gain.gain.linearRampToValueAtTime(0.001, t + 0.12);

            osc.connect(gain);
            gain.connect(this.se.bgmGain);
            osc.start(t);
            osc.stop(t + 0.13);
        } else if (type === 'S') { // Snare
            const bufferSize = Math.floor(ctx.sampleRate * 0.12);
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1);

            const noise = ctx.createBufferSource();
            noise.buffer = buffer;
            const filter = ctx.createBiquadFilter();
            filter.type = 'highpass';
            filter.frequency.setValueAtTime(1100, t);

            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.25, t);
            gain.gain.linearRampToValueAtTime(0.001, t + 0.12);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(this.se.bgmGain);
            noise.start(t);
        } else if (type === 'H') { // Hi-Hat
            const bufferSize = Math.floor(ctx.sampleRate * 0.04);
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1);

            const noise = ctx.createBufferSource();
            noise.buffer = buffer;
            const filter = ctx.createBiquadFilter();
            filter.type = 'highpass';
            filter.frequency.setValueAtTime(6000, t);

            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.1, t);
            gain.gain.linearRampToValueAtTime(0.001, t + 0.04);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(this.se.bgmGain);
            noise.start(t);
        }
    }

    // --- TRACK DEFINITIONS ---
    getTracks() {
        return {
            // 1. TRIAL THEME - Courtroom begins
            trial: {
                bpm: 124,
                length: 32,
                bass: [
                    45, 0, 45, 0, 45, 0, 48, 50,  45, 0, 45, 0, 43, 0, 40, 43,
                    45, 0, 45, 0, 45, 0, 48, 50,  52, 0, 50, 0, 48, 0, 47, 43
                ],
                lead: [
                    69, 0, 72, 0, 76, 74, 72, 74,  69, 0, 0, 0, 67, 0, 64, 67,
                    69, 0, 72, 0, 77, 76, 74, 76,  79, 0, 76, 0, 72, 0, 74, 0
                ],
                chords: [
                    57, 0, 60, 0, 64, 0, 62, 0,  57, 0, 0, 0, 55, 0, 52, 0,
                    57, 0, 60, 0, 65, 0, 64, 0,  67, 0, 64, 0, 60, 0, 62, 0
                ],
                drums: [
                    'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H',
                    'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'K', 'S', 'S'
                ]
            },

            // 2. CROSS-EXAMINATION - MODERATO (118 BPM)
            cross_exam_moderato: {
                bpm: 118,
                length: 32,
                bass: [
                    38, 0, 38, 41, 43, 0, 41, 38,  36, 0, 36, 39, 41, 0, 39, 36,
                    38, 0, 38, 41, 43, 0, 41, 38,  45, 43, 41, 39, 38, 0, 36, 0
                ],
                lead: [
                    62, 0, 65, 0, 69, 0, 67, 65,  60, 0, 63, 0, 67, 0, 65, 63,
                    62, 0, 65, 0, 69, 70, 69, 65,  72, 0, 70, 0, 69, 0, 65, 67
                ],
                chords: [
                    50, 0, 53, 0, 57, 0, 55, 0,  48, 0, 51, 0, 55, 0, 53, 0,
                    50, 0, 53, 0, 57, 0, 55, 0,  60, 0, 58, 0, 57, 0, 53, 0
                ],
                drums: [
                    'K', 'H', 'S', 'H', 'K', 'K', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'K', 'S', 'H',
                    'K', 'H', 'S', 'H', 'K', 'K', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'S'
                ]
            },

            // 3. CROSS-EXAMINATION - ALLEGRO (144 BPM)
            cross_exam_allegro: {
                bpm: 144,
                length: 32,
                bass: [
                    41, 41, 44, 41, 46, 41, 44, 41,  39, 39, 42, 39, 44, 39, 42, 39,
                    41, 41, 44, 41, 48, 46, 44, 41,  49, 48, 46, 44, 42, 41, 39, 37
                ],
                lead: [
                    65, 68, 72, 70, 68, 65, 68, 70,  63, 66, 70, 68, 66, 63, 66, 68,
                    65, 68, 72, 73, 72, 68, 70, 72,  75, 73, 72, 70, 68, 67, 65, 67
                ],
                chords: [
                    53, 0, 56, 0, 60, 0, 58, 0,  51, 0, 54, 0, 58, 0, 56, 0,
                    53, 0, 56, 0, 61, 0, 60, 0,  63, 0, 61, 0, 60, 0, 58, 0
                ],
                drums: [
                    'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H',
                    'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'K', 'S', 'S'
                ]
            },

            // 4. OBJECTION! - TURNABOUT THEME ("¡No Contaban con mi Astucia!")
            objection: {
                bpm: 148,
                length: 32,
                bass: [
                    43, 0, 43, 46, 48, 0, 48, 51,  50, 0, 50, 48, 46, 0, 45, 43,
                    43, 0, 43, 46, 48, 0, 48, 51,  53, 0, 51, 0, 50, 48, 50, 53
                ],
                lead: [
                    67, 0, 70, 72, 75, 0, 72, 75,  79, 0, 77, 75, 74, 0, 72, 70,
                    67, 0, 70, 72, 75, 77, 79, 82,  84, 0, 82, 0, 79, 77, 79, 84
                ],
                chords: [
                    55, 58, 62, 0, 60, 63, 67, 0,  62, 65, 69, 0, 58, 62, 65, 0,
                    55, 58, 62, 0, 60, 63, 67, 0,  65, 68, 72, 0, 67, 70, 74, 0
                ],
                drums: [
                    'K', 'H', 'S', 'H', 'K', 'K', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'K',
                    'K', 'H', 'S', 'H', 'K', 'K', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'S', 'K', 'S'
                ]
            },

            // 5. PURSUIT - CORNERED ("¡Que No Panda el Cúnico!")
            pursuit: {
                bpm: 156,
                length: 32,
                bass: [
                    48, 48, 51, 48, 53, 48, 55, 48,  56, 56, 55, 53, 51, 48, 50, 51,
                    48, 48, 51, 48, 53, 48, 55, 48,  58, 58, 56, 55, 53, 51, 53, 55
                ],
                lead: [
                    72, 0, 75, 77, 79, 0, 82, 84,  84, 82, 79, 77, 75, 72, 74, 75,
                    72, 0, 75, 77, 79, 82, 84, 87,  89, 0, 87, 84, 82, 79, 82, 84
                ],
                chords: [
                    60, 63, 67, 0, 65, 68, 72, 0,  68, 71, 75, 0, 63, 67, 70, 0,
                    60, 63, 67, 0, 65, 68, 72, 0,  70, 74, 77, 0, 67, 71, 74, 0
                ],
                drums: [
                    'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'K', 'S', 'S',
                    'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'K', 'S', 'S'
                ]
            },

            // 6. INVESTIGATION - MUSEUM (112 BPM)
            investigation: {
                bpm: 112,
                length: 32,
                bass: [
                    41, 0, 48, 0, 45, 0, 48, 0,  43, 0, 50, 0, 47, 0, 50, 0,
                    41, 0, 48, 0, 45, 0, 48, 0,  46, 0, 53, 0, 50, 0, 48, 45
                ],
                lead: [
                    65, 0, 69, 0, 72, 71, 69, 67,  67, 0, 71, 0, 74, 73, 71, 69,
                    65, 0, 69, 0, 72, 74, 76, 77,  77, 0, 74, 0, 72, 0, 69, 0
                ],
                chords: [
                    53, 0, 57, 0, 60, 0, 0, 0,  55, 0, 59, 0, 62, 0, 0, 0,
                    53, 0, 57, 0, 60, 0, 0, 0,  58, 0, 62, 0, 65, 0, 0, 0
                ],
                drums: [
                    'K', 'H', 'S', 'H', '0', 'H', 'S', 'H', 'K', 'H', 'S', 'H', '0', 'H', 'S', 'H',
                    'K', 'H', 'S', 'H', '0', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', '0'
                ]
            },

            // 7. SUSPENSE - TELL THE TRUTH (96 BPM)
            suspense: {
                bpm: 96,
                length: 16,
                bass: [
                    36, 0, 36, 0, 39, 0, 38, 0,  35, 0, 35, 0, 38, 0, 37, 0
                ],
                lead: [
                    60, 0, 63, 0, 66, 65, 63, 62,  59, 0, 62, 0, 65, 64, 62, 60
                ],
                chords: [
                    48, 51, 54, 0, 48, 51, 54, 0,  47, 50, 53, 0, 47, 50, 53, 0
                ],
                drums: [
                    'K', '0', 'H', '0', 'S', '0', 'H', '0', 'K', '0', 'H', '0', 'S', '0', 'H', '0'
                ]
            },

            // 8. VICTORY THEME ("¡Síganme los Buenos!" 136 BPM)
            victory: {
                bpm: 136,
                length: 32,
                bass: [
                    48, 0, 52, 0, 55, 0, 52, 0,  53, 0, 57, 0, 60, 0, 57, 0,
                    55, 0, 59, 0, 62, 0, 59, 0,  48, 52, 55, 60, 64, 60, 55, 48
                ],
                lead: [
                    72, 0, 76, 0, 79, 0, 84, 0,  81, 0, 77, 0, 81, 0, 84, 0,
                    86, 0, 83, 0, 79, 0, 83, 0,  84, 0, 88, 0, 91, 0, 84, 0
                ],
                chords: [
                    60, 64, 67, 0, 60, 64, 67, 0,  65, 69, 72, 0, 65, 69, 72, 0,
                    67, 71, 74, 0, 67, 71, 74, 0,  60, 64, 67, 72, 72, 0, 0, 0
                ],
                drums: [
                    'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H',
                    'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'K', 'S', 'S'
                ]
            }
        };
    }

    // Play a track by name
    playTrack(trackName) {
        this.queuedTrack = trackName;
        const tracks = this.getTracks();
        if (!tracks[trackName]) return;

        if (this.currentTrack === trackName && this.isPlaying) return;

        this.stop();
        this.currentTrack = trackName;
        this.isPlaying = true;
        this.step = 0;

        const track = tracks[trackName];
        this.bpm = track.bpm || 120;
        const stepTimeMs = (60000 / this.bpm) / 4; // 16th note step

        this.timer = setInterval(() => {
            if (!this.isPlaying) return;

            const idx = this.step % track.length;
            const noteDuration = (60 / this.bpm) * 0.45;

            // Play Bass
            if (track.bass && track.bass[idx]) {
                this.playNote(track.bass[idx], noteDuration * 1.5, 'triangle', 0.35, 900);
            }

            // Play Lead
            if (track.lead && track.lead[idx]) {
                this.playNote(track.lead[idx], noteDuration * 1.8, 'square', 0.22, 3600);
            }

            // Play Chords
            if (track.chords && track.chords[idx]) {
                this.playNote(track.chords[idx], noteDuration * 1.2, 'sawtooth', 0.14, 2000);
            }

            // Play Drums
            if (track.drums && track.drums[idx]) {
                this.playDrum(track.drums[idx]);
            }

            this.step++;
        }, stepTimeMs);
    }

    resumePlayback() {
        if (this.queuedTrack && (!this.isPlaying || !this.timer)) {
            this.playTrack(this.queuedTrack);
        }
    }

    stop() {
        this.isPlaying = false;
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        this.currentTrack = null;
    }
}

window.midiComposer = new MidiMusicComposer(window.soundEngine);
