import os
import re

print("=== SEARCHING DOCS/SPECS FOR SUPERSAM SPRITES ===")
for root, dirs, files in os.walk("docs"):
    for f in files:
        if f.endswith(".md"):
            p = os.path.join(root, f)
            with open(p, "r", encoding="utf-8", errors="ignore") as fp:
                txt = fp.read()
                if "supersam" in txt:
                    print(f"\n--- {p} ---")
                    for line in txt.splitlines():
                        if any(k in line.lower() for k in ["supersam", "bagless", "bolsa", "crossed", "watch", "thinking", "case1_idle", "case1_slam"]):
                            print(" ", line[:120])
