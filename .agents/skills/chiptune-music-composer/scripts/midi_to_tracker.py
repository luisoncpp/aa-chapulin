#!/usr/bin/env python3
"""
MIDI to Step Tracker Converter
Converts Standard MIDI files (.mid) or generates TypeScript TrackCatalog definitions.
"""

import sys
import os
import struct

def parse_varlen(data, offset):
    val = 0
    while True:
        b = data[offset]
        offset += 1
        val = (val << 7) | (b & 0x7F)
        if not (b & 0x80):
            break
    return val, offset

def parse_midi_file(filepath):
    """Simple standard MIDI file parser without external dependencies."""
    with open(filepath, 'rb') as f:
        data = f.read()

    if data[:4] != b'MThd':
        raise ValueError("Not a valid Standard MIDI file (missing MThd header)")

    length, fmt, num_tracks, division = struct.unpack('>IHHH', data[4:14])
    offset = 14

    tracks_events = []
    for _ in range(num_tracks):
        if data[offset:offset+4] != b'MTrk':
            break
        trk_len = struct.unpack('>I', data[offset+4:offset+8])[0]
        offset += 8
        trk_data = data[offset:offset+trk_len]
        offset += trk_len

        events = []
        trk_off = 0
        current_time = 0
        running_status = None

        while trk_off < len(trk_data):
            delta, trk_off = parse_varlen(trk_data, trk_off)
            current_time += delta
            if trk_off >= len(trk_data):
                break
            status_byte = trk_data[trk_off]

            if status_byte & 0x80:
                trk_off += 1
                running_status = status_byte
            else:
                status_byte = running_status

            msg_type = status_byte & 0xF0
            channel = status_byte & 0x0F

            if msg_type in (0x80, 0x90):  # Note Off / Note On
                note = trk_data[trk_off]
                vel = trk_data[trk_off+1]
                trk_off += 2
                is_on = (msg_type == 0x90) and (vel > 0)
                events.append((current_time, 'note_on' if is_on else 'note_off', channel, note, vel))
            elif msg_type in (0xA0, 0xB0, 0xE0):
                trk_off += 2
            elif msg_type in (0xC0, 0xD0):
                trk_off += 1
            elif status_byte == 0xFF:  # Meta event
                meta_type = trk_data[trk_off]
                trk_off += 1
                meta_len, trk_off = parse_varlen(trk_data, trk_off)
                trk_off += meta_len
            elif status_byte in (0xF0, 0xF7):
                sysex_len, trk_off = parse_varlen(trk_data, trk_off)
                trk_off += sysex_len

        tracks_events.append(events)

    return division, tracks_events

def convert_to_step_arrays(division, tracks_events, total_steps=128):
    """Quantize notes into 16th-note step arrays for bass, lead, chords, and drums."""
    ticks_per_step = division / 4  # 16th note = 1/4 quarter note
    
    bass = [0] * total_steps
    lead = [0] * total_steps
    chords = [0] * total_steps
    drums = ['0'] * total_steps

    all_notes = []
    for trk in tracks_events:
        for time_tick, event_type, channel, note, vel in trk:
            if event_type == 'note_on':
                step_idx = int(round(time_tick / ticks_per_step))
                if step_idx < total_steps:
                    all_notes.append((step_idx, channel, note))

    # Sort notes by pitch and assign to channels
    for step_idx, channel, note in all_notes:
        if channel == 9:  # MIDI Channel 10 (drums)
            if note in (35, 36):
                drums[step_idx] = 'K'
            elif note in (38, 40):
                drums[step_idx] = 'S'
            elif note in (42, 44, 46):
                drums[step_idx] = 'H'
        elif note < 50:
            if bass[step_idx] == 0:
                bass[step_idx] = note
        elif note < 65:
            if chords[step_idx] == 0:
                chords[step_idx] = note
        else:
            if lead[step_idx] == 0:
                lead[step_idx] = note

    return {
        "length": total_steps,
        "bass": bass,
        "lead": lead,
        "chords": chords,
        "drums": drums
    }

def main():
    if len(sys.argv) < 2:
        print("Usage: python midi_to_tracker.py <input.mid> [total_steps=128]")
        sys.exit(1)

    mid_file = sys.argv[1]
    total_steps = int(sys.argv[2]) if len(sys.argv) > 2 else 128

    if not os.path.exists(mid_file):
        print(f"Error: File not found: {mid_file}")
        sys.exit(1)

    try:
        division, tracks = parse_midi_file(mid_file)
        track_data = convert_to_step_arrays(division, tracks, total_steps)
        print(f"Successfully converted {mid_file} ({total_steps} steps):")
        print(f"  Bass events: {len([x for x in track_data['bass'] if x > 0])}")
        print(f"  Lead events: {len([x for x in track_data['lead'] if x > 0])}")
        print(f"  Chords events: {len([x for x in track_data['chords'] if x > 0])}")
        print(f"  Drum hits: {len([x for x in track_data['drums'] if x != '0'])}")
    except Exception as e:
        print(f"Error parsing MIDI: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
