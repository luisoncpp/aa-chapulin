import os
import glob

# Let's inspect where sprites are mapped in TypeScript
for root, dirs, files in os.walk("src"):
    for f in files:
        if "Sprite" in f or "character" in f.lower() or "pose" in f.lower():
            print(os.path.join(root, f))
