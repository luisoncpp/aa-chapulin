import os
import re

with open('js/case_script.js', 'r', encoding='utf-8') as f:
    script_content = f.read()

poses = re.findall(r'pose:\s*["\']([^"\']+)["\']', script_content)
cutins = re.findall(r'cutin:\s*["\']([^"\']+)["\']', script_content)
bgs = re.findall(r'assets/([^"\']+\.(?:jpg|png))', script_content)

print('Referenced poses:', set(poses))
print('Referenced cutins:', set(cutins))
print('Referenced bgs:', set(bgs))

existing_assets = set(os.listdir('assets'))
for p in set(poses):
    filename = f'{p}.png'
    if filename not in existing_assets:
        print(f'WARNING: Missing pose asset: {filename}')

for c in set(cutins):
    filename = f'{c}.png'
    if filename not in existing_assets:
        print(f'WARNING: Missing cutin asset: {filename}')

for b in set(bgs):
    if b not in existing_assets:
        print(f'WARNING: Missing bg asset: {b}')

print("Check finished!")
