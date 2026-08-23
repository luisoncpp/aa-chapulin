/**
 * Web Audio API Sound Synthesizer & AudioContext Lifecycle Manager
 */

import type { SFXName } from '../../types/index.js';
import { CourtSfx } from './CourtSfx.js';
import { NoveltySfx } from './NoveltySfx.js';

export class SoundEngine {
  public ctx: AudioContext | null = null;
  public masterGain: GainNode | null = null;
  public sfxGain: GainNode | null = null;
  public bgmGain: GainNode | null = null;
  public initialized = false;
  public isMuted = false;

  public init(): void {
    if (this.initialized && this.ctx) {
      this.resume();
      return;
    }
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.setupGains();
      this.initialized = true;
      this.resume();
    } catch (e) {
      console.warn('AudioContext init error:', e);
    }
  }

  private setupGains(): void {
    if (!this.ctx) return;
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.85, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);

    this.bgmGain = this.ctx.createGain();
    this.bgmGain.gain.setValueAtTime(0.65, this.ctx.currentTime);
    this.bgmGain.connect(this.masterGain);

    this.sfxGain = this.ctx.createGain();
    this.sfxGain.gain.setValueAtTime(0.85, this.ctx.currentTime);
    this.sfxGain.connect(this.masterGain);
  }

  public resume(): void {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch((e) => console.warn('AudioContext resume error:', e));
    }
  }

  public ensureActive(): void {
    if (!this.initialized) {
      this.init();
      return;
    }
    this.resume();
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.85, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  public playSFX(sfxName: SFXName): void {
    if (!this.canPlay()) return;
    switch (sfxName) {
      case 'gavel': return this.playGavel();
      case 'desk_slam': return this.playDeskSlam();
      case 'whoosh': return this.playObjectionWhoosh();
      case 'realization': return this.playRealization();
      case 'damage': return this.playDamage();
      case 'chipote': return this.playChipoteSqueak();
      case 'chicharra': return this.playChicharra();
      default: return this.playTextBlip();
    }
  }

  private canPlay(): boolean {
    if (!this.initialized || !this.ctx || !this.sfxGain || this.isMuted) return false;
    this.resume();
    return true;
  }

  public playTextBlip(pitchOffset = 0): void {
    if (!this.canPlay()) return;
    NoveltySfx.playTextBlip(this.ctx!, this.sfxGain!, pitchOffset);
  }

  public playGavel(): void {
    if (!this.canPlay()) return;
    CourtSfx.playGavel(this.ctx!, this.sfxGain!);
  }

  public playDeskSlam(): void {
    if (!this.canPlay()) return;
    CourtSfx.playDeskSlam(this.ctx!, this.sfxGain!);
  }

  public playObjectionWhoosh(): void {
    if (!this.canPlay()) return;
    CourtSfx.playObjectionWhoosh(this.ctx!, this.sfxGain!, /*onClimaxHit*/ () => {
      NoveltySfx.playChord(this.ctx!, this.sfxGain!, {
        notes: [440, 554.37, 659.25, 880],
        durationSec: 0.35,
        wave: 'sawtooth'
      });
    });
  }

  public playRealization(): void {
    if (!this.canPlay()) return;
    NoveltySfx.playRealization(this.ctx!, this.sfxGain!);
  }

  public playDamage(): void {
    if (!this.canPlay()) return;
    CourtSfx.playDamage(this.ctx!, this.sfxGain!);
  }

  public playChipoteSqueak(): void {
    if (!this.canPlay()) return;
    NoveltySfx.playChipoteSqueak(this.ctx!, this.sfxGain!);
  }

  public playChicharra(): void {
    if (!this.canPlay()) return;
    NoveltySfx.playChicharra(this.ctx!, this.sfxGain!);
  }
}
