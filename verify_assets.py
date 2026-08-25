# @Architecture(descriptionShort="Validates script asset references and pixel cleanliness quality", type="validator", icon="wrench")
"""
Static Asset Integrity Validator
Verifies character poses, cut-in placards, and background references in case scripts,
and enforces pixel-level cleanliness quality gates across all assets.
"""

import os
import sys
import re
from PIL import Image
import numpy as np
from scipy import ndimage

# @Section(Asset Reference Regex Scanner)
sources = []
for root, _, files in os.walk('src/case'):
    for f in files:
        if f.endswith('.ts'):
            with open(os.path.join(root, f), 'r', encoding='utf-8') as src:
                sources.append(src.read())

if os.path.exists('js/case_script.js'):
    with open('js/case_script.js', 'r', encoding='utf-8') as f:
        sources.append(f.read())

script_content = "\n".join(sources)

poses = set(re.findall(r'pose:\s*["\']([^"\']+)["\']', script_content))
cutins = set(re.findall(r'cutin:\s*["\']([^"\']+)["\']', script_content))
bgs = set(re.findall(r'assets/([^"\']+\.(?:jpg|png))', script_content))

print(f"Referenced poses ({len(poses)}): {poses}")
print(f"Referenced cutins ({len(cutins)}): {cutins}")
print(f"Referenced bgs ({len(bgs)}): {bgs}")

# @Section(Physical Asset Validation)
existing_assets = set(os.listdir('assets'))
missing_assets = []
for p in poses:
    filename = f'{p}.png'
    if filename not in existing_assets:
        missing_assets.append(filename)

for c in cutins:
    filename = f'{c}.png'
    if filename not in existing_assets:
        missing_assets.append(filename)

for b in bgs:
    if b not in existing_assets:
        missing_assets.append(b)

furniture_assets = ['court_podium.png', 'court_bench.png']
for f in furniture_assets:
    if f not in existing_assets:
        missing_assets.append(f)

if missing_assets:
    print(f'ERROR: Missing referenced assets: {missing_assets}')
    sys.exit(1)
else:
    print('All referenced assets and furniture exist on disk.')

# @Section(Sprite Cleanliness Quality Check)
cleanliness_errors = []
for filename in sorted(existing_assets):
    if not filename.endswith('.png'):
        continue
    filepath = os.path.join('assets', filename)
    img = Image.open(filepath)
    arr = np.array(img)
    if arr.ndim < 3 or arr.shape[2] < 4:
        continue

    alpha = arr[:, :, 3]
    fg = alpha > 0
    if not np.any(fg):
        cleanliness_errors.append(f'{filename} is completely transparent / empty!')
        continue

    eroded = ndimage.binary_erosion(fg, structure=np.ones((3, 3)))
    perimeter = fg & ~eroded

    r = arr[perimeter, 0].astype(int)
    g = arr[perimeter, 1].astype(int)
    b = arr[perimeter, 2].astype(int)
    purplish = (r > g + 15) & (b > g + 15) & (r > 35) & (b > 35)

    if np.sum(purplish) > 0:
        cleanliness_errors.append(f'{filename} has {np.sum(purplish)} purple fringe pixels')

    # Check for unkeyed solid magenta holes in foreground
    rf, gf, bf = arr[fg, 0], arr[fg, 1], arr[fg, 2]
    dist_fg = np.sqrt((rf.astype(float) - 255.0) ** 2 + gf.astype(float) ** 2 + (bf.astype(float) - 255.0) ** 2)
    solid_magenta = np.sum((dist_fg < 100) | ((rf > 200) & (bf > 200) & (gf < 60)))
    if solid_magenta > 0:
        cleanliness_errors.append(f'{filename} has {solid_magenta} unkeyed solid magenta pixels')

if cleanliness_errors:
    print('Quality issues found:')
    for err in cleanliness_errors:
        print(f'  - {err}')
    sys.exit(1)
else:
    print('All sprite assets passed pixel cleanliness verification (0 unkeyed magenta, 0 purple fringe)!')

print('Asset check finished successfully!')
