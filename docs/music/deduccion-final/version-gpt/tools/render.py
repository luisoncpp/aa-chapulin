"""Render the original standalone cue; never changes the game's audio catalog."""
import json
from pathlib import Path
from collections import Counter
import numpy as np
import soundfile as sf
from score import BPM, HARMONY, LOOP_STEPS, VOICES, build_arrival, build_loop
from synth import RATE, STEP_SEC, mix_linear, mix_stems, render_stems
from midi_export import export_midi

OUT = Path(__file__).resolve().parents[3] / 'docs/music/deduccion-final'
MARKERS = [(0, 'A - Buscar conexiones'), (128, 'B - Reconsiderar'),
           (256, "A' - Ganar claridad"), (384, 'C - Todo converge')]


def check_events(events, steps):
    active = {}
    for event in sorted(events, key=lambda item: item['step']):
        assert event['voice'] in VOICES
        assert 0 <= event['note'] <= 127
        assert 1 <= event['velocity'] <= 127
        assert event['duration'] > 0
        assert 0 <= event['step'] < steps
        assert event['step'] + event['duration'] <= steps
        key = (event['voice'], event['note'])
        assert active.get(key, -1) <= event['step'], f'Overlapping MIDI note: {event}'
        active[key] = event['step'] + event['duration']


def onset_projection(events):
    """Legacy skill validator projection: onsets only; event JSON keeps durations."""
    projection = {'bpm': BPM, 'length': LOOP_STEPS}
    projection.update({voice: [0] * LOOP_STEPS for voice in ['bass', 'lead', 'chords']})
    projection['drums'] = ['0'] * LOOP_STEPS
    mapping = {'bass': 'bass', 'piano': 'lead', 'pad': 'chords'}
    for event in events:
        step, voice, note = int(event['step']), event['voice'], event['note']
        if voice == 'drums':
            symbol = {36: 'K', 38: 'S', 42: 'H', 49: 'C'}[note]
            projection['drums'][step] = projection['drums'][step].replace('0', '') + symbol
        elif voice in mapping:
            channel = mapping[voice]
            old = projection[channel][step]
            projection[channel][step] = ([note] if old == 0 else old + [note]) if channel == 'chords' else note
    return projection


def export_scores(loop, arrival):
    combined = loop + [dict(event, step=event['step'] + LOOP_STEPS) for event in arrival]
    markers = MARKERS + [(512, 'Preparar la revelacion'), (528, 'Ya lo tengo')]
    export_midi(OUT / 'todo-encaja.mid', (combined, 576), markers)
    export_midi(OUT / 'todo-encaja-loop.mid', (loop, LOOP_STEPS), MARKERS)
    export_midi(OUT / 'todo-encaja-revelacion.mid', (arrival, 64),
                [(0, 'Preparar la revelacion'), (16, 'Ya lo tengo')])
    data = {'title': 'Todo encaja', 'bpm': BPM, 'meter': '4/4', 'voices': VOICES,
            'loop': {'steps': LOOP_STEPS, 'harmony': HARMONY, 'events': loop},
            'arrival': {'steps': 64, 'harmony': ['B7', 'Eadd9', 'Amaj7', 'Eadd9'], 'events': arrival}}
    (OUT / 'partitura.json').write_text(json.dumps(data, indent=2), encoding='utf-8')
    projection = onset_projection(loop)
    (OUT / 'validacion-ataques.json').write_text(json.dumps(projection), encoding='utf-8')


def preview_mix(loop_mix, loop_stems, arrival_mix):
    count = len(loop_mix)
    preview = np.zeros((count + len(arrival_mix), 2))
    preview[:count] = loop_mix
    preview[count:] = arrival_mix
    # Preserve the last notes' releases across the change into the ending.
    tail = mix_linear(loop_stems)[count:]
    preview[count:count + len(tail)] += tail
    fade = round(.015 * RATE)
    preview[:fade] *= np.linspace(0, 1, fade)[:, None]
    return preview


def audio_metrics(signal):
    rms = np.sqrt(np.mean(signal ** 2))
    jumps = np.abs(np.diff(signal, axis=0))
    return {'seconds': round(len(signal) / RATE, 4),
            'peak_dbfs': round(20 * np.log10(np.max(np.abs(signal)) + 1e-12), 3),
            'rms_dbfs': round(20 * np.log10(rms + 1e-12), 3),
            'dc': signal.mean(axis=0).tolist(),
            'max_sample_delta': float(np.max(jumps)),
            'nonfinite_samples': int(np.count_nonzero(~np.isfinite(signal)))}


def export_audio(signals):
    ceiling = 10 ** (-1.5 / 20)
    peak = max(np.max(np.abs(signal)) for signal in signals.values())
    gain = ceiling / peak
    report = {'sample_rate': RATE, 'format': 'Stereo WAV PCM_16', 'master_gain': float(gain)}
    for name, signal in signals.items():
        signal *= gain
        assert np.isfinite(signal).all() and np.max(np.abs(signal)) < 1
        sf.write(OUT / f'todo-encaja-{name}.wav', signal, RATE, subtype='PCM_16')
        report[name] = audio_metrics(signal)
    loop = signals['loop']
    seam = np.abs(loop[0] - loop[-1])
    report['loop_seam_delta'] = seam.tolist()
    report['loop_boundary_reference_p99_delta'] = np.quantile(np.abs(np.diff(loop, axis=0)), .99, axis=0).tolist()
    report['loop_sections_rms_dbfs'] = [round(20 * np.log10(np.sqrt(np.mean(section ** 2))), 2)
                                          for section in np.array_split(loop, 4)]
    (OUT / 'verificacion-audio.json').write_text(json.dumps(report, indent=2), encoding='utf-8')
    print(json.dumps(report, indent=2))


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    loop, arrival = build_loop(), build_arrival()
    check_events(loop, LOOP_STEPS)
    check_events(arrival, 64)
    export_scores(loop, arrival)
    print('Events by instrument:', dict(Counter(event['voice'] for event in loop)), flush=True)
    stems = render_stems(loop, LOOP_STEPS)
    loop_mix, _ = mix_stems(stems, LOOP_STEPS)
    arrival_mix = mix_linear(render_stems(arrival, 64))
    preview = preview_mix(loop_mix, stems, arrival_mix)
    export_audio({'escucha': preview, 'loop': loop_mix, 'revelacion': arrival_mix})


if __name__ == '__main__':
    main()
