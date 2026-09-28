import os
import sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

print("=== SEARCHING FOR ALL MENTIONS OF BAG / BOLSA ACROSS ALL CASES ===")

for root, dirs, files in os.walk("src"):
    for f in sorted(files):
        if f.endswith(".ts"):
            p = os.path.join(root, f)
            try:
                with open(p, "r", encoding="utf-8", errors="ignore") as file:
                    txt = file.read()
                    if any(k in txt.lower() for k in ["dejé mi bolsa", "dejé la bolsa", "olvidé la bolsa", "left my bag", "left the bag", "sin mi bolsa", "without my bag", "olvidé", "dejé"]):
                        if "sam" in txt.lower() or "super" in txt.lower():
                            print(f"\nMatch in {p}:")
                            for i, l in enumerate(txt.splitlines(), 1):
                                if any(k in l.lower() for k in ["dejé", "olvid", "left", "bolsa", "bag", "lobby", "espera"]):
                                    print(f"  {i}: {l.strip()}")
            except Exception as e:
                pass
