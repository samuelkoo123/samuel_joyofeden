/**
 * Web Audio API Sacred Ambient Drone & Celestial Bell Synthesizer
 * Produces ethereal modal pads and gentle crystal chimes for spiritual contemplation
 */

class SacredSoundscape {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isPlaying = false;
  private droneOscillators: OscillatorNode[] = [];
  private filter: BiquadFilterNode | null = null;
  private lfo: OscillatorNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
  }

  public toggle(): boolean {
    this.initContext();
    if (this.ctx?.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public setVolume(vol: number) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(Math.max(0, Math.min(1, vol)), this.ctx.currentTime, 0.1);
    }
  }

  public start() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    if (this.isPlaying) return;

    const now = this.ctx.currentTime;

    // Filter for deep cathedral warmth
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(450, now);
    this.filter.Q.setValueAtTime(2.5, now);

    // LFO to slowly breathe warmth into the filter
    this.lfo = this.ctx.createOscillator();
    this.lfo.frequency.setValueAtTime(0.08, now); // ~12 second breath cycle
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(180, now);
    this.lfo.connect(lfoGain);
    lfoGain.connect(this.filter.frequency);
    this.lfo.start();

    // Sacred D major harmonic pad (D2, A2, D3, F#3, A3) tuned to contemplative 432Hz standard
    const freqs = [72.5, 108.7, 145.0, 182.7, 217.5, 290.0];

    this.droneOscillators = [];
    freqs.forEach((freq, idx) => {
      if (!this.ctx || !this.filter) return;
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      // subtle natural detune for shimmer
      osc.detune.setValueAtTime((idx - 2) * 3.5, now);

      const targetGain = 0.08 / (idx * 0.4 + 1);
      oscGain.gain.setValueAtTime(0.001, now);
      oscGain.gain.linearRampToValueAtTime(targetGain, now + 3);

      osc.connect(oscGain);
      oscGain.connect(this.filter);
      osc.start();
      this.droneOscillators.push(osc);
    });

    this.filter.connect(this.masterGain);
    this.isPlaying = true;
    this.playChime(580);
  }

  public stop() {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;

    this.droneOscillators.forEach((osc) => {
      try {
        osc.stop(now + 1.5);
      } catch {
        // already stopped
      }
    });
    this.droneOscillators = [];

    if (this.lfo) {
      try {
        this.lfo.stop(now + 1.5);
      } catch {
        // ignored
      }
      this.lfo = null;
    }

    this.isPlaying = false;
  }

  /**
   * Triggers a gentle celestial chime bell (e.g. when contemplating or changing artwork)
   */
  public playChime(freq = 654) {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    // Exponential bell decay
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.12, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 3.6);
  }
}

export const sacredAudio = new SacredSoundscape();
