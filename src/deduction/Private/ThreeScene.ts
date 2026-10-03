// @Architecture(descriptionShort="Animated thought journey with actual spatial hypothesis planes")
import * as THREE from 'three';
import { IdeaPlanes } from './IdeaPlanes.js';
import { LightField } from './LightField.js';
import type { PresentationState } from './Surface.js';
export class ThreeScene {
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.PerspectiveCamera(56, 16 / 9, 0.1, 220);
  private readonly renderer: THREE.WebGLRenderer;
  private readonly branches = new THREE.Group();
  private readonly field = new LightField();
  private readonly ideas = new IdeaPlanes(this.camera);
  private readonly light = new THREE.Mesh(new THREE.SphereGeometry(0.45, 16, 12), new THREE.MeshBasicMaterial({ color: 0xffffff }));
  private readonly observer: ResizeObserver;
  private frame = 0;
  private time = 0;
  private phaseTime = 0;
  private lastTime = 0;
  private state: PresentationState = { count: 1, selected: -1, focus: 0, phase: 'entry', paused: false, reduced: false, labels: [] };
  private count = 0;
  private paths: THREE.CatmullRomCurve3[] = [];
  private readonly origin = new THREE.Vector3(0, 1.4, 10);
  private disposed = false;
  constructor(private readonly host: HTMLElement, private readonly onFailure: () => void) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'low-power' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); this.renderer.setClearColor(0x163457);
    this.scene.fog = new THREE.FogExp2(0x234b76, 0.007);
    this.camera.position.copy(this.origin); this.camera.lookAt(0, -17, -112);
    this.scene.add(this.branches, this.field.group, this.ideas.group, this.light);
    this.renderer.domElement.addEventListener('webglcontextlost', this.contextLost); this.host.append(this.renderer.domElement);
    this.observer = new ResizeObserver(/*resizeStage*/ () => this.resize()); this.observer.observe(host);
    this.resize(); this.animate(0);
  }
  private contextLost = (event: Event): void => { event.preventDefault(); this.onFailure(); };
  private resize(): void {
    const { width, height } = this.host.getBoundingClientRect();
    if (!width || !height) return;
    this.camera.aspect = width / height; this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, /*updateStyle=*/false);
    this.ideas.update(this.state, this.camera.aspect); this.draw(0);
  }
  public update(state: PresentationState): void {
    if (state.phase !== this.state.phase) { this.phaseTime = 0; this.origin.copy(this.camera.position); }
    this.state = state;
    const count = ['question', 'rejected', 'travel'].includes(state.phase) ? state.count : 1;
    if (count !== this.count) this.buildBranches(count);
    this.ideas.update(state, this.camera.aspect);
    this.branches.children.forEach((object, i) => {
      const mesh = object as THREE.Mesh<THREE.TubeGeometry, THREE.MeshBasicMaterial>;
      const chosen = state.selected < 0 || state.selected === Math.floor(i / 3);
      mesh.material.opacity = chosen ? [1, 0.32, 0.08][i % 3] : 0.04;
      mesh.material.color.setHex(i % 3 === 0 ? 0xffe2cf : 0xf43544);
    });
    this.draw(0);
  }
  private buildBranches(count: number): void {
    this.clearBranches(); this.count = count; this.paths = [];
    for (let i = 0; i < count; i++) {
      const x = count === 1 ? 0 : (i - (count - 1) / 2) * 9;
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, -4.5, 18), new THREE.Vector3(x * 0.15, -2.4, -8),
        new THREE.Vector3(x * 0.8, -1, -27), new THREE.Vector3(x, 0, -55), new THREE.Vector3(0, 1.2, -112)
      ]);
      this.paths.push(curve);
      for (const radius of [0.14, 0.4, 0.9]) {
        this.branches.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 80, radius, 5, false),
          new THREE.MeshBasicMaterial({ color: radius < 0.2 ? 0xffe2cf : 0xf43544, transparent: true,
            depthWrite: radius < 0.2, opacity: radius < 0.2 ? 1 : 0.2,
            blending: radius < 0.2 ? THREE.NormalBlending : THREE.AdditiveBlending })));
      }
    }
  }
  private animate = (now: number): void => {
    if (this.disposed) return;
    const dt = Math.min((now - this.lastTime) / 1000, 0.04); this.lastTime = now;
    if (!this.state.paused) {
      if (!this.state.reduced) { this.time += dt; this.phaseTime += dt; this.field.animate(dt, this.state.phase === 'travel'); }
      this.draw(dt);
    }
    if (!this.disposed) this.frame = requestAnimationFrame(this.animate);
  };
  private draw(dt: number): void {
    const selected = Math.max(0, Math.min(this.paths.length - 1, this.state.selected));
    const path = this.paths[selected], travel = this.state.phase === 'travel';
    const progress = this.state.reduced ? 0.35 : travel ? Math.min(0.8, this.phaseTime * 0.7) : (this.time * 0.22) % 0.65;
    if (path) this.light.position.copy(path.getPointAt(progress));
    if (travel && !this.state.reduced) {
      const p = 1 - Math.pow(1 - Math.min(1, this.phaseTime / 1.1), 3);
      this.camera.position.set(this.origin.x + (selected - (this.count - 1) / 2) * 2 * p, this.origin.y, this.origin.z - 9 * p);
    } else if (this.state.phase !== 'question') this.camera.position.x *= 0.94;
    this.camera.lookAt(0, -17, -112); this.ideas.animate(dt, this.state);
    try { this.renderer.render(this.scene, this.camera); } catch { this.onFailure(); }
  }
  private clearBranches(): void {
    for (const object of [...this.branches.children]) {
      const mesh = object as THREE.Mesh; mesh.geometry.dispose(); (mesh.material as THREE.Material).dispose(); this.branches.remove(mesh);
    }
  }
  public dispose(): void {
    if (this.disposed) return;
    this.disposed = true; cancelAnimationFrame(this.frame); this.observer.disconnect(); this.ideas.dispose();
    this.renderer.domElement.removeEventListener('webglcontextlost', this.contextLost);
    const materials = new Set<THREE.Material>();
    this.scene.traverse(object => {
      const renderable = object as THREE.Mesh | THREE.Sprite;
      if (!renderable.material) return;
      if ('geometry' in renderable) renderable.geometry.dispose();
      for (const material of Array.isArray(renderable.material) ? renderable.material : [renderable.material]) materials.add(material);
    });
    materials.forEach(material => { if ('map' in material) (material.map as THREE.Texture | null)?.dispose(); material.dispose(); });
    this.renderer.dispose(); this.renderer.domElement.remove();
  }
}
