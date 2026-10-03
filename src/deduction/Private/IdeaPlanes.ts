// @Architecture(descriptionShort="Renders readable hypotheses as actual textured Three.js planes")
import * as THREE from 'three';
import { choiceLayout } from './ChoiceLayout.js';
import type { PresentationState } from './Surface.js';

export class IdeaPlanes {
  public readonly group = new THREE.Group();
  private key = '';
  private targets: THREE.Vector3[] = [];
  private elapsed = 0;
  private entryKey = '';
  constructor(private readonly camera: THREE.PerspectiveCamera) {}

  public update(state: PresentationState, aspect: number): void {
    const visible = ['question', 'travel'].includes(state.phase);
    this.group.visible = visible;
    if (!visible) { this.key = ''; this.entryKey = ''; return; }
    const key = JSON.stringify([state.labels, state.focus, aspect, state.phase]);
    if (this.key === key) return;
    const entryKey = JSON.stringify([state.labels, state.phase, aspect]);
    if (entryKey !== this.entryKey) this.elapsed = 0;
    this.entryKey = entryKey;
    this.disposePlanes(); this.key = key;
    const layout = choiceLayout(state.count, aspect < 1.2);
    state.labels.forEach((label, i) => {
      const placement = layout[i], focused = state.focus === i;
      const texture = ideaTexture(label, focused);
      const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthTest: false });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);
      const point = this.project(placement.x, placement.y);
      const left = this.project(placement.x - placement.width / 2, placement.y);
      const top = this.project(placement.x, placement.y - placement.height / 2);
      mesh.scale.set(point.distanceTo(left) * 2, point.distanceTo(top) * 2, 1);
      mesh.quaternion.copy(this.camera.quaternion);
      mesh.position.copy(point); mesh.renderOrder = 10;
      this.targets.push(point); this.group.add(mesh);
    });
  }

  private project(x: number, y: number): THREE.Vector3 {
    const point = new THREE.Vector3(x * 2 - 1, 1 - y * 2, 0.5).unproject(this.camera);
    const direction = point.sub(this.camera.position).normalize();
    return this.camera.position.clone().addScaledVector(direction, 23 / -direction.z);
  }

  public animate(dt: number, state: PresentationState): void {
    this.elapsed += dt;
    const entering = state.reduced ? 1 : Math.min(1, this.elapsed / 0.6);
    const ease = 1 - Math.pow(1 - entering, 4);
    this.group.children.forEach((object, i) => {
      const mesh = object as THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
      mesh.position.copy(this.targets[i]);
      if (!state.reduced && entering < 1) {
        mesh.position.lerp(new THREE.Vector3(0, 1.5, -65), (1 - ease)); mesh.material.opacity = 0.2 + ease * 0.8;
      } else mesh.material.opacity = 1;
      if (state.phase === 'travel') {
        mesh.material.opacity = i === state.selected ? 1 : Math.max(0, 1 - this.elapsed * 4);
        if (i === state.selected && !state.reduced) mesh.position.z += Math.min(this.elapsed * 7, 12);
      }
    });
  }

  private disposePlanes(): void {
    for (const object of [...this.group.children]) {
      const mesh = object as THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
      mesh.geometry.dispose(); mesh.material.map?.dispose(); mesh.material.dispose(); this.group.remove(mesh);
    }
    this.targets = [];
  }
  public dispose(): void { this.disposePlanes(); }
}

function ideaTexture(label: string, focused: boolean): THREE.CanvasTexture {
  const canvas = document.createElement('canvas'); canvas.width = 768; canvas.height = 200;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = focused ? '#fff4ed' : '#981e37'; ctx.fillRect(8, 10, 752, 180);
  ctx.strokeStyle = focused ? '#ffffff' : '#fb6e86'; ctx.lineWidth = focused ? 9 : 4;
  ctx.strokeRect(8, 10, 752, 180);
  ctx.fillStyle = focused ? '#381c32' : '#ffffff'; ctx.font = '64px VT323, ui-monospace, monospace';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  const lines = wrapLabel(ctx, label);
  lines.forEach((line, i) => ctx.fillText(line, 384, 100 + (i - (lines.length - 1) / 2) * 64));
  if (focused) { ctx.beginPath(); ctx.moveTo(25, 85); ctx.lineTo(40, 100); ctx.lineTo(25, 115); ctx.stroke(); }
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; return texture;
}

function wrapLabel(ctx: CanvasRenderingContext2D, label: string): string[] {
  const lines = [''];
  for (const word of label.split(' ')) {
    const last = lines.length - 1, candidate = `${lines[last]} ${word}`.trim();
    if (ctx.measureText(candidate).width > 680 && lines[last]) lines.push(word);
    else lines[last] = candidate;
  }
  return lines;
}
