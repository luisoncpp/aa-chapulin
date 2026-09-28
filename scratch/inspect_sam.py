import os
import glob
import re

case5_dir = "src/case/case5"
files = []
for root, dirs, filenames in os.walk(case5_dir):
    for f in filenames:
        if f.endswith(".ts"):
            files.append(os.path.join(root, f))

file_matches = {}
for path in sorted(files):
    try:
        with open(path, "r", encoding="utf-8", errors="ignore") as file:
            content = file.read()
            if "SUPER SAM" in content or "supersam" in content or "sam" in content.lower():
                matches = re.findall(r"supersam_[a-zA-Z0-9_]+", content)
                speakers = re.findall(r"speaker:\s*'([^']+)'", content)
                sam_speakers = [s for s in speakers if "SAM" in s.upper()]
                if matches or sam_speakers:
                    file_matches[path] = {
                        "poses": set(matches),
                        "has_sam_speaker": len(sam_speakers) > 0
                    }
    except Exception as e:
        print(f"Error {path}: {e}")

for path, data in file_matches.items():
    print(f"{path}: sam_speaker={data['has_sam_speaker']}, poses={data['poses']}")

