import os
import shutil
from PIL import Image
import numpy as np

ARTIFACT_DIR = r"C:\Users\luiso\.gemini\antigravity\brain\d6601f43-c0ae-494d-bbf8-ca413b3a64ed"
DEST_DIR = r"c:\Proyectos\ace-attorney-gemini\assets"
os.makedirs(DEST_DIR, exist_ok=True)

artifact_files = os.listdir(ARTIFACT_DIR)

def find_latest(pattern):
    matching = [f for f in artifact_files if f.startswith(pattern) and f.endswith(('.jpg', '.png'))]
    if not matching:
        return None
    matching.sort()
    return os.path.join(ARTIFACT_DIR, matching[-1])

def chroma_key_pink(img):
    """Convert bright pink/magenta background to transparent alpha."""
    img = img.convert("RGBA")
    data = np.array(img)
    
    r, g, b, a = data[:, :, 0], data[:, :, 1], data[:, :, 2], data[:, :, 3]
    
    # Magenta/Pink mask: R > 160, G < 110, B > 160, and |R - B| < 75
    is_pink = (r > 160) & (g < 110) & (b > 160) & (np.abs(r.astype(int) - b.astype(int)) < 75)
    
    data[:, :, 3] = np.where(is_pink, 0, 255)
    return Image.fromarray(data, mode="RGBA")

def crop_grid(img_path, rows=2, cols=2, key_pink=True):
    img = Image.open(img_path)
    if key_pink:
        img = chroma_key_pink(img)
    
    w, h = img.size
    cell_w, cell_h = w // cols, h // rows
    
    cells = []
    for r in range(rows):
        for c in range(cols):
            box = (c * cell_w, r * cell_h, (c + 1) * cell_w, (r + 1) * cell_h)
            cell_img = img.crop(box)
            cells.append(cell_img)
    return cells

def save_image(img, filename):
    out_path = os.path.join(DEST_DIR, filename)
    img.save(out_path)
    print(f"Saved: {filename} ({img.size})")

def process_all():
    print("Processing assets...")
    
    # 1. Chapulin sprites
    chap_file = find_latest("chapulin_sprites")
    if chap_file:
        cells = crop_grid(chap_file, 2, 2, key_pink=True)
        save_image(cells[0], "chapulin_idle.png")
        save_image(cells[1], "chapulin_slam.png")
        save_image(cells[2], "chapulin_point.png")
        save_image(cells[3], "chapulin_panic.png")
    
    # 2. Super Sam sprites
    sam_file = find_latest("supersam_sprites")
    if sam_file:
        cells = crop_grid(sam_file, 2, 2, key_pink=True)
        save_image(cells[0], "supersam_idle.png")
        save_image(cells[1], "supersam_slam.png")
        save_image(cells[2], "supersam_point.png")
        save_image(cells[3], "supersam_breakdown.png")
        
    # 3. Tripaseca sprites
    trip_file = find_latest("tripaseca_sprites")
    if trip_file:
        cells = crop_grid(trip_file, 2, 2, key_pink=True)
        save_image(cells[0], "tripaseca_smug.png")
        save_image(cells[1], "tripaseca_sweat.png")
        save_image(cells[2], "tripaseca_panic.png")
        save_image(cells[3], "tripaseca_breakdown.png")
        
    # 4. Judge sprites
    judge_file = find_latest("judge_sprites")
    if judge_file:
        cells = crop_grid(judge_file, 2, 2, key_pink=True)
        save_image(cells[0], "judge_neutral.png")
        save_image(cells[1], "judge_gavel.png")
        save_image(cells[2], "judge_shock.png")
        save_image(cells[3], "judge_thinking.png")
        
    # 5. Witness Florinda sprites
    flor_file = find_latest("witness_florinda_sprites")
    if flor_file:
        cells = crop_grid(flor_file, 2, 2, key_pink=True)
        save_image(cells[0], "florinda_idle.png")
        save_image(cells[1], "florinda_angry.png")
        save_image(cells[2], "florinda_crying.png")
        save_image(cells[3], "florinda_shock.png")
        
    # 6. Objection cut-ins
    cutin_file = find_latest("ui_objection_cutins")
    if cutin_file:
        cells = crop_grid(cutin_file, 2, 2, key_pink=True)
        save_image(cells[0], "objection_protesto.png")
        save_image(cells[1], "objection_un_momento.png")
        save_image(cells[2], "objection_toma_eso.png")
        save_image(cells[3], "objection_culpable.png")
        
    # 7. Evidence items
    ev_file = find_latest("evidence_icons")
    if ev_file:
        img = Image.open(ev_file)
        w, h = img.size
        cw, ch = w // 4, h // 3
        items = [
            (0, 0, "chipote_chillon.png"),
            (1, 0, "pastillas_chiquitolina.png"),
            (2, 0, "antenitas_vinil.png"),
            (3, 0, "chicharra_oro.png"),
            (0, 1, "informe_medico.png"),
            (1, 1, "foto_crimen.png"),
            (2, 1, "bolsa_dolares.png"),
            (3, 1, "insignia_abogado.png")
        ]
        img_keyed = chroma_key_pink(img)
        for col, row, name in items:
            crop_box = (col * cw, row * ch, (col + 1) * cw, (row + 1) * ch)
            sub = img_keyed.crop(crop_box)
            save_image(sub, name)

    # 8. UI Elements
    ui_file = find_latest("ui_elements")
    if ui_file:
        img = Image.open(ui_file)
        img_keyed = chroma_key_pink(img)
        w, h = img.size
        
        box_crop = img_keyed.crop((0, 0, w, int(h * 0.26)))
        save_image(box_crop, "dialogue_box.png")
        
        badge_crop = img_keyed.crop((0, int(h * 0.25), int(w * 0.35), int(h * 0.48)))
        save_image(badge_crop, "badge_button.png")
        
        health_crop = img_keyed.crop((int(w * 0.35), int(h * 0.28), w, int(h * 0.46)))
        save_image(health_crop, "health_bar.png")
        
        press_crop = img_keyed.crop((0, int(h * 0.48), int(w * 0.38), int(h * 0.75)))
        save_image(press_crop, "btn_press.png")
        
        present_crop = img_keyed.crop((int(w * 0.38), int(h * 0.48), int(w * 0.68), int(h * 0.75)))
        save_image(present_crop, "btn_present.png")
        
        mag_crop = img_keyed.crop((int(w * 0.68), int(h * 0.48), w, int(h * 0.75)))
        save_image(mag_crop, "btn_magnifier.png")
        
    # 9. Backgrounds
    bg_witness = find_latest("court_witness_stand")
    if bg_witness:
        shutil.copy(bg_witness, os.path.join(DEST_DIR, "bg_witness.jpg"))
        
    bg_judge = find_latest("court_judge_view")
    if bg_judge:
        shutil.copy(bg_judge, os.path.join(DEST_DIR, "bg_judge.jpg"))
        
    bg_museum = find_latest("museum_crime_scene")
    if bg_museum:
        shutil.copy(bg_museum, os.path.join(DEST_DIR, "bg_museum.jpg"))
        
    bg_detention = find_latest("detention_center_room")
    if bg_detention:
        shutil.copy(bg_detention, os.path.join(DEST_DIR, "bg_detention.jpg"))
        
    bg_court = find_latest("courtroom_scenes")
    if bg_court:
        shutil.copy(bg_court, os.path.join(DEST_DIR, "bg_courtroom.jpg"))

    print("All assets processed successfully!")

if __name__ == "__main__":
    process_all()
