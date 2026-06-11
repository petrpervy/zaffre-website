"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const WORD = "ZAFFRE";

function seeded(index: number) {
  const x = Math.sin(index * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

/** Rasterize the word to a 2D canvas, then sample opaque pixels into 3D targets. */
function sampleWord(word: string) {
  const W = 900,
    H = 240;
  const cv = document.createElement("canvas");
  cv.width = W;
  cv.height = H;
  const ctx = cv.getContext("2d")!;
  ctx.fillStyle = "#fff";
  ctx.font = "900 180px Arial, Helvetica, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(word, W / 2, H / 2 + 8);
  const data = ctx.getImageData(0, 0, W, H).data;
  const targets: number[] = [];
  const stride = 2;
  const s = 9 / W;
  for (let y = 0; y < H; y += stride) {
    for (let x = 0; x < W; x += stride) {
      if (data[(y * W + x) * 4 + 3] > 130) {
        targets.push(
          (x - W / 2) * s,
          -(y - H / 2) * s,
          (seeded(targets.length + 1) - 0.5) * 0.35,
        );
      }
    }
  }
  return new Float32Array(targets);
}

function Word({ active }: { active: React.MutableRefObject<boolean> }) {
  const ref = useRef<THREE.Points>(null);
  const { pointer, viewport } = useThree();
  const reduce = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  const { positions, targets, colors, count } = useMemo(() => {
    const targets = sampleWord(WORD);
    const count = targets.length / 3;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const gold = new THREE.Color("#f3c24e");
    const blue = new THREE.Color("#5b8cff");
    const c = new THREE.Color();
    for (let i = 0; i < count; i++) {
      const r = 6 + seeded(i * 3 + 1) * 4;
      const a = seeded(i * 3 + 2) * Math.PI * 2;
      const b = Math.acos(2 * seeded(i * 3 + 3) - 1);
      positions[i * 3] = r * Math.sin(b) * Math.cos(a);
      positions[i * 3 + 1] = r * Math.sin(b) * Math.sin(a);
      positions[i * 3 + 2] = r * Math.cos(b);
      c.copy(gold).lerp(blue, (targets[i * 3] / 4.5 + 1) / 2);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, targets, colors, count };
  }, []);

  useFrame((state, dt) => {
    const pts = ref.current;
    if (!pts) return;
    const arr = pts.geometry.attributes.position.array as Float32Array;
    const t = state.clock.elapsedTime;
    const ease = 1 - Math.pow(0.0015, dt);
    const mx = pointer.x * viewport.width * 0.5;
    const my = pointer.y * viewport.height * 0.5;

    for (let i = 0; i < count; i++) {
      const ix = i * 3,
        iy = ix + 1,
        iz = ix + 2;
      const sw = reduce ? 0 : 1;
      const hx = targets[ix] + sw * Math.sin(t * 0.9 + targets[iy] * 3) * 0.02;
      const hy = targets[iy] + sw * Math.cos(t * 0.8 + targets[ix] * 3) * 0.02;
      const hz = targets[iz] + sw * Math.sin(t * 0.7 + i) * 0.05;
      let x = arr[ix] + (hx - arr[ix]) * ease;
      let y = arr[iy] + (hy - arr[iy]) * ease;
      let z = arr[iz] + (hz - arr[iz]) * ease;
      const dx = x - mx,
        dy = y - my;
      const d2 = dx * dx + dy * dy;
      if (active.current && d2 < 1.1) {
        const d = Math.sqrt(d2) + 0.0001;
        const f = (1.1 - d2) * 1.2;
        x += (dx / d) * f;
        y += (dy / d) * f;
        z += (seeded(i + Math.floor(t * 24)) - 0.5) * f;
      }
      arr[ix] = x;
      arr[iy] = y;
      arr[iz] = z;
    }
    pts.geometry.attributes.position.needsUpdate = true;
    state.camera.position.x += (pointer.x * 0.4 - state.camera.position.x) * 0.04;
    state.camera.position.y += (pointer.y * 0.3 - state.camera.position.y) * 0.04;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        vertexColors
        transparent
        opacity={0.95}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ParticleScene() {
  const active = useRef(false);
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true }}
      onPointerMove={() => {
        active.current = true;
      }}
    >
      <color attach="background" args={["#08080c"]} />
      <Word active={active} />
      <EffectComposer>
        <Bloom
          intensity={1.4}
          luminanceThreshold={0.06}
          luminanceSmoothing={0.9}
          mipmapBlur
          radius={0.8}
        />
      </EffectComposer>
    </Canvas>
  );
}
