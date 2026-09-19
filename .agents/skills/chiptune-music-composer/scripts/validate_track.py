#!/usr/bin/env python3
"""
Track Validator for Procedural Chiptune Music
Validates track definition JSON/TS objects for syntax, length alignment, polyphonic chords, and anti-fatigue metrics.
"""

import sys
import json
from typing import Dict, Any, List

VALID_DRUM_CHARS = {'K', 'S', 'H', 'O', 'C', 'P', '0'}

def validate_single_track(name: str, track: Dict[str, Any]) -> List[str]:
    errors = []
    warnings = []
    
    bpm = track.get('bpm')
    length = track.get('length')
    
    if not isinstance(bpm, (int, float)) or bpm <= 20 or bpm >= 300:
        errors.append(f"Invalid bpm: {bpm} (expected number 20-300)")
    
    if not isinstance(length, int) or length <= 0:
        errors.append(f"Invalid length: {length} (expected positive integer)")
        return errors
        
    if length < 64:
        warnings.append(f"⚠️ Ear Fatigue Warning: Track length is only {length} steps (recommend at least 64-128 steps)")

    duration_sec = (60.0 / bpm) * (length / 4.0) if bpm else 0
    
    channels = ['bass', 'lead', 'chords', 'drums']
    for ch in channels:
        arr = track.get(ch)
        if arr is None:
            errors.append(f"Missing channel: '{ch}'")
            continue
        if not isinstance(arr, list):
            errors.append(f"Channel '{ch}' must be an array")
            continue
        if len(arr) != length:
            errors.append(f"Channel '{ch}' length mismatch: got {len(arr)}, expected {length}")
            
        if ch == 'drums':
            for i, d in enumerate(arr):
                if not isinstance(d, str):
                    errors.append(f"Drum hit at step {i} must be a string, got {type(d)}")
                    break
                invalid_chars = [c for c in d if c not in VALID_DRUM_CHARS]
                if invalid_chars:
                    errors.append(f"Invalid drum symbol '{d}' in '{ch}': unexpected characters {set(invalid_chars)}")
                    break
        else:
            for i, entry in enumerate(arr):
                if isinstance(entry, list):
                    for note in entry:
                        if not isinstance(note, int) or note < 0 or note > 127:
                            errors.append(f"Invalid chord note {note} at step {i} in '{ch}' (expected 0-127)")
                            break
                elif not isinstance(entry, int) or entry < 0 or entry > 127:
                    errors.append(f"Invalid MIDI note {entry} at step {i} in '{ch}' (expected integer 0-127)")
                    break

    print(f"[{'PASS' if not errors else 'FAIL'}] Track '{name}': {bpm} BPM, {length} steps ({duration_sec:.1f}s loop)")
    for w in warnings:
        print(f"   {w}")
    for e in errors:
        print(f"   ❌ Error: {e}")
        
    return errors

def main():
    if len(sys.argv) < 2:
        print("Usage: python validate_track.py <track_json_file_or_string>")
        print("Running self-test with a sample 128-step polyphonic Courtroom track...")
        test_track = {
            "bpm": 115,
            "length": 128,
            "bass": [36, 0, 43, 0, 48, 0, 43, 36] * 16,
            "lead": [60, 0, 63, 0, 67, 0, 0, 0] * 16,
            "chords": [[48, 51, 55], 0, [48, 51, 55], 0, [48, 51, 55], 0, 0, 0] * 16,
            "drums": ['KC', 'H', 'S', 'H', 'K', 'KH', 'S', 'O'] * 16
        }
        errs = validate_single_track("sample_polyphonic_courtroom", test_track)
        sys.exit(0 if not errs else 1)
        
    target = sys.argv[1]
    with open(target, 'r', encoding='utf-8') as f:
        content = f.read()
        try:
            data = json.loads(content)
        except json.JSONDecodeError as ex:
            print(f"❌ JSON parse error in {target}: {ex}")
            sys.exit(1)
            
    total_errors = 0
    if "bpm" in data and "length" in data:
        errs = validate_single_track("main", data)
        total_errors += len(errs)
    else:
        for track_name, track_def in data.items():
            errs = validate_single_track(track_name, track_def)
            total_errors += len(errs)
            
    sys.exit(0 if total_errors == 0 else 1)

if __name__ == "__main__":
    main()
