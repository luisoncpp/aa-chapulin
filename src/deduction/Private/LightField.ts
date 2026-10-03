// @Architecture(descriptionShort="Radial light and moving perspective streaks for forward momentum")
import * as THREE from 'three';
export class LightField {
  public readonly group = new THREE.Group();
  private readonly streaks = new THREE.Group();
  private time = 0;
  constructor() {
    const material = new THREE.LineBasicMaterial({ color: 0x76baf7, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending });
    for (let i = 0; i < 120; i++) {
      const angle = i * 2.399963, radius = 5 + (i % 9) * 2.2;
      const x = Math.cos(angle) * radius, y = Math.sin(angle) * radius;
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(x, y, 0), new THREE.Vector3(x, y, -3 - i % 7)
      ]), material);
      line.position.z = -((i * 13.7) % 160); this.streaks.add(line);
    }
    const canvas = document.createElement('canvas'); canvas.width = canvas.height = 256;
    const ctx = canvas.getContext('2d')!, gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    gradient.addColorStop(0, '#ffffff'); gradient.addColorStop(0.08, '#ffffff');
    gradient.addColorStop(0.2, '#d4f4ff'); gradient.addColorStop(0.48, '#4589bc99'); gradient.addColorStop(1, '#1d477000');
    ctx.fillStyle = gradient; ctx.fillRect(0, 0, 256, 256);
    const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
    const light = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    light.position.set(0, 1.2, -112); light.scale.set(45, 45, 1); this.group.add(this.streaks, light);
  }
  public animate(dt: number, fast: boolean): void {
    this.time += dt * (fast ? 45 : 15);
    this.streaks.children.forEach((line, i) => { line.position.z = 12 - ((i * 13.7 - this.time + 100000) % 165); });
  }
}
