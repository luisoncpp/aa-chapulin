/**
 * Procedural Web Audio API Sound Synthesizer & SFX Engine
 * Robust retro 16-bit / Game Boy Advance Capcom sound synthesizer with auto-unlock.
 */

class SoundEngine {
    constructor() {
        this.ctx = null;
        this.masterGain = null;
        this.sfxGain = null;
        this.bgmGain = null;
        this.initialized = false;
        this.isMuted = false;
    }

    init() {
        if (this.initialized && this.ctx) {
            this.resume();
            return;
        }

        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
            
            // Master Gain
            this.masterGain = this.ctx.createGain();
            this.masterGain.gain.setValueAtTime(0.85, this.ctx.currentTime);
            this.masterGain.connect(this.ctx.destination);

            // BGM Gain
            this.bgmGain = this.ctx.createGain();
            this.bgmGain.gain.setValueAtTime(0.65, this.ctx.currentTime);
            this.bgmGain.connect(this.masterGain);

            // SFX Gain
            this.sfxGain = this.ctx.createGain();
            this.sfxGain.gain.setValueAtTime(0.85, this.ctx.currentTime);
            this.sfxGain.connect(this.masterGain);

            this.initialized = true;
            this.resume();
            console.log("SoundEngine initialized successfully. Sample rate:", this.ctx.sampleRate);
        } catch (e) {
            console.warn("AudioContext init error:", e);
        }
    }

    resume() {
        if (this.ctx) {
            if (this.ctx.state === 'suspended') {
                this.ctx.resume().then(() => {
                    console.log("AudioContext resumed:", this.ctx.state);
                });
            }
        }
    }

    ensureActive() {
        if (!this.initialized) {
            this.init();
        } else {
            this.resume();
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.masterGain && this.ctx) {
            this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.85, this.ctx.currentTime);
        }
        return this.isMuted;
    }

    // --- SFX GENERATORS ---

    // 1. Text Typewriter Blip (Classic Ace Attorney typewriter chirp)
    playTextBlip(pitchOffset = 0) {
        if (!this.initialized || !this.ctx || this.isMuted) return;
        this.resume();

        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(540 + pitchOffset * 25 + Math.random() * 30, t);
        osc.frequency.linearRampToValueAtTime(360, t + 0.04);

        gain.gain.setValueAtTime(0.18, t);
        gain.gain.linearRampToValueAtTime(0.001, t + 0.04);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(t);
        osc.stop(t + 0.045);
    }

    // 2. Gavel Bang (Heavy judicial wooden strike with resonant impact)
    playGavel() {
        if (!this.initialized || !this.ctx || this.isMuted) return;
        this.resume();
        const t = this.ctx.currentTime;

        // Low frequency thud
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(160, t);
        osc.frequency.linearRampToValueAtTime(30, t + 0.35);

        oscGain.gain.setValueAtTime(0.95, t);
        oscGain.gain.linearRampToValueAtTime(0.001, t + 0.35);

        osc.connect(oscGain);
        oscGain.connect(this.sfxGain);
        osc.start(t);
        osc.stop(t + 0.36);

        // Wood crack noise
        const bufferSize = Math.floor(this.ctx.sampleRate * 0.1);
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
        }

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        const noiseFilter = this.ctx.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.setValueAtTime(950, t);
        noiseFilter.Q.setValueAtTime(3, t);

        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(0.85, t);
        noiseGain.gain.linearRampToValueAtTime(0.001, t + 0.1);

        noise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(this.sfxGain);

        noise.start(t);
    }

    // 3. Desk Slam (Dramatic palm slam onto defense/prosecutor bench)
    playDeskSlam() {
        if (!this.initialized || !this.ctx || this.isMuted) return;
        this.resume();
        const t = this.ctx.currentTime;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(120, t);
        osc.frequency.linearRampToValueAtTime(25, t + 0.3);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(500, t);

        gain.gain.setValueAtTime(0.95, t);
        gain.gain.linearRampToValueAtTime(0.001, t + 0.3);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(t);
        osc.stop(t + 0.32);
    }

    // 4. "¡PROTESTO!" / Objection Whip Whoosh
    playObjectionWhoosh() {
        if (!this.initialized || !this.ctx || this.isMuted) return;
        this.resume();
        const t = this.ctx.currentTime;

        const bufferSize = Math.floor(this.ctx.sampleRate * 0.25);
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1);
        }

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(350, t);
        filter.frequency.linearRampToValueAtTime(4500, t + 0.18);
        filter.Q.setValueAtTime(4, t);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.05, t);
        gain.gain.linearRampToValueAtTime(0.9, t + 0.1);
        gain.gain.linearRampToValueAtTime(0.001, t + 0.25);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.sfxGain);

        noise.start(t);

        // Climax chord hit
        setTimeout(() => {
            this.playChord([440, 554.37, 659.25, 880], 0.35, 'sawtooth');
        }, 110);
    }

    // 5. Realization / Ding (Lightbulb moment / contradiction found)
    playRealization() {
        if (!this.initialized || !this.ctx || this.isMuted) return;
        this.resume();
        const t = this.ctx.currentTime;
        const freqs = [880, 1174.66, 1760, 2349.32];

        freqs.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, t + idx * 0.04);

            gain.gain.setValueAtTime(0.35, t + idx * 0.04);
            gain.gain.linearRampToValueAtTime(0.001, t + idx * 0.04 + 0.45);

            osc.connect(gain);
            gain.connect(this.sfxGain);
            osc.start(t + idx * 0.04);
            osc.stop(t + idx * 0.04 + 0.46);
        });
    }

    // 6. Shock / Damage Hit (Courtroom penalty damage)
    playDamage() {
        if (!this.initialized || !this.ctx || this.isMuted) return;
        this.resume();
        const t = this.ctx.currentTime;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(300, t);
        osc.frequency.linearRampToValueAtTime(60, t + 0.4);

        gain.gain.setValueAtTime(0.95, t);
        gain.gain.linearRampToValueAtTime(0.001, t + 0.4);

        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(t);
        osc.stop(t + 0.42);
    }

    // 7. Chipote Chillón Squeak (Classic comedy squeak!)
    playChipoteSqueak() {
        if (!this.initialized || !this.ctx || this.isMuted) return;
        this.resume();
        const t = this.ctx.currentTime;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';

        osc.frequency.setValueAtTime(680, t);
        osc.frequency.linearRampToValueAtTime(1550, t + 0.08);
        osc.frequency.linearRampToValueAtTime(480, t + 0.22);

        gain.gain.setValueAtTime(0.6, t);
        gain.gain.linearRampToValueAtTime(0.001, t + 0.22);

        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(t);
        osc.stop(t + 0.23);
    }

    // 8. Chicharra Paralizadora (Antique bicycle horn buzzer sound)
    playChicharra() {
        if (!this.initialized || !this.ctx || this.isMuted) return;
        this.resume();
        const t = this.ctx.currentTime;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';

        osc.frequency.setValueAtTime(466.16, t); // Bb4
        osc.frequency.setValueAtTime(466.16, t + 0.14);
        osc.frequency.setValueAtTime(349.23, t + 0.15); // F4

        gain.gain.setValueAtTime(0.55, t);
        gain.gain.linearRampToValueAtTime(0.001, t + 0.45);

        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(t);
        osc.stop(t + 0.46);
    }

    // Helper: Play Chord
    playChord(notes, duration = 0.3, wave = 'sawtooth') {
        if (!this.initialized || !this.ctx || this.isMuted) return;
        const t = this.ctx.currentTime;
        notes.forEach(freq => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = wave;
            osc.frequency.setValueAtTime(freq, t);

            gain.gain.setValueAtTime(0.2, t);
            gain.gain.linearRampToValueAtTime(0.001, t + duration);

            osc.connect(gain);
            gain.connect(this.sfxGain);
            osc.start(t);
            osc.stop(t + duration);
        });
    }
}

window.soundEngine = new SoundEngine();
