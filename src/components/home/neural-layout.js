// Shared layout + palette for the neural hero (DOM overlay in NeuralWeb.jsx
// and the R3F engine in NeuralScene.jsx read the same coordinates).
import * as THREE from "three";

export const DD_POS = { x: 72, y: 40 };

export const LANE_LAYOUT = {
  business: {
    x: 46, y: 12, scale: 1, opacity: 1, drift: "neural-drift-a",
    gateways: {
      uslugi: {
        x: 46, y: 40,
        children: {
          razrabotka: { x: 32, y: 52 },
          dizain: { x: 40, y: 62 },
          marketing: { x: 52, y: 64 },
          ai: { x: 60, y: 54 },
          fotosyomka: { x: 30, y: 36 },
          obuchenie: { x: 24, y: 44 },
        },
      },
    },
  },
  learning: {
    x: 72, y: 62, scale: 0.88, opacity: 0.8, drift: "neural-drift-b",
    gateways: {
      znaniya: {
        x: 90, y: 70,
        children: {
          blog: { x: 70, y: 86 },
          kursy: { x: 82, y: 86 },
          "baza-promptov": { x: 94, y: 78 },
        },
      },
    },
  },
  ai: {
    x: 82, y: 10, scale: 0.94, opacity: 0.9, drift: "neural-drift-c",
    gateways: {
      instrumenty: {
        x: 74, y: 28,
        children: {
          "navyki-agentov": { x: 64, y: 38 },
          "poleznye-servisy": { x: 62, y: 14 },
        },
      },
      produkty: {
        x: 90, y: 26,
        children: {
          prilozheniya: { x: 92, y: 42 },
        },
      },
    },
  },
};

export const GOLD = new THREE.Color("#f2a94b");
export const GOLD_LIGHT = new THREE.Color("#ffd28a");
export const GOLD_DEEP = new THREE.Color("#c97b2d");
export const VIOLET = new THREE.Color("#a78bfa");
export const CYAN = new THREE.Color("#7fc3f0");
export const WARM_WHITE = new THREE.Color("#fff3e0");

export function pickWebColor(rng) {
  const r = rng();
  if (r < 0.55) return GOLD.clone().lerp(GOLD_LIGHT, rng());
  if (r < 0.72) return GOLD_DEEP.clone().lerp(GOLD, rng());
  if (r < 0.87) return VIOLET.clone();
  return CYAN.clone();
}

export function mulberry32(seed) {
  let a = seed;
  return function rng() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function glowTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createRadialGradient(
    size / 2, size / 2, 0,
    size / 2, size / 2, size / 2,
  );
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.35, "rgba(255,255,255,0.5)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}
