"""Standard MIDI format 1 export, no third-party MIDI dependency."""
import struct
from score import BPM, VOICES

PPQ = 480


def vlq(number):
    out = [number & 127]
    while number >> 7:
        number >>= 7
        out.insert(0, (number & 127) | 128)
    return bytes(out)


def meta(kind, payload):
    return bytes([255, kind]) + vlq(len(payload)) + payload


def chunk(events, end_tick):
    last = 0
    out = bytearray()
    for tick, priority, payload in sorted(events, key=lambda e: (e[0], e[1])):
        out.extend(vlq(tick - last))
        out.extend(payload)
        last = tick
    out.extend(vlq(max(end_tick - last, 0)))
    out.extend(b'\xff\x2f\x00')
    return b'MTrk' + struct.pack('>I', len(out)) + out


def note_track(events, voice):
    settings = VOICES[voice]
    channel = settings['channel']
    data = [(0, 0, meta(3, voice.encode('ascii')))]
    if settings['program'] is not None:
        data.append((0, 1, bytes([192 + channel, settings['program']])))
    data += [(0, 1, bytes([176 + channel, 10, round((settings['pan'] + 1) * 63.5)])),
             (0, 1, bytes([176 + channel, 7, 88 if voice != 'pad' else 60]))]
    for event in events:
        if event['voice'] != voice:
            continue
        start = round(event['step'] * PPQ / 4)
        end = round((event['step'] + event['duration']) * PPQ / 4)
        note = event['note']
        data.append((start, 3, bytes([144 + channel, note, event['velocity']])))
        data.append((end, 2, bytes([128 + channel, note, 0])))
    return data


def export_midi(path, score, markers):
    events, steps = score
    end_tick = round(steps * PPQ / 4)
    conductor = [(0, 0, meta(3, b'Todo encaja - original composition')),
                 (0, 1, meta(81, round(60000000 / BPM).to_bytes(3, 'big'))),
                 (0, 1, meta(88, bytes([4, 2, 24, 8]))),
                 (0, 1, meta(89, bytes([1, 1])))]
    conductor.extend((round(step * PPQ / 4), 2, meta(6, name.encode('utf-8')))
                     for step, name in markers)
    chunks = [chunk(conductor, end_tick)]
    chunks.extend(chunk(note_track(events, voice), end_tick) for voice in VOICES)
    header = b'MThd' + struct.pack('>IHHH', 6, 1, len(chunks), PPQ)
    path.write_bytes(header + b''.join(chunks))
