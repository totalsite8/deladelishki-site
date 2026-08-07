// One-off generator: four abstract artworks for the home gateway rows.
// Style follows the hero neural web: dark canvas, golden-orange dominant
// lines and nodes, violet/cyan minority, coordinate grid. Rendered as SVG,
// rasterized to WebP by sharp. Run: node scripts/gen-gateway-art.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const W = 1200;
const H = 800;
const OUT = fileURLToPath(new URL("../src/assets/home/", import.meta.url));
mkdirSync(OUT, { recursive: true });

function mulberry32(seed) {
  let a = seed;
  return function rng() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const GOLD = "#f2a94b";
const GOLD_LIGHT = "#ffd28a";
const VIOLET = "#a78bfa";
const CYAN = "#7fc3f0";

function base(rng, glowX, glowY, glowColor) {
  const grid = [];
  for (let x = 0; x <= W; x += 64) {
    grid.push(
      `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="rgba(167,139,250,0.05)" stroke-width="1"/>`,
    );
  }
  for (let y = 0; y <= H; y += 64) {
    grid.push(
      `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="rgba(167,139,250,0.05)" stroke-width="1"/>`,
    );
  }
  // ambient signal dots
  const dots = [];
  for (let i = 0; i < 26; i += 1) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 1.5 + rng() * 3;
    const c = rng() < 0.7 ? GOLD : rng() < 0.5 ? VIOLET : CYAN;
    dots.push(
      `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${r.toFixed(1)}" fill="${c}" opacity="${(0.15 + rng() * 0.4).toFixed(2)}"/>`,
    );
  }
  return `
  <defs>
    <radialGradient id="glow" cx="${glowX}%" cy="${glowY}%" r="70%">
      <stop offset="0%" stop-color="${glowColor}" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#0c0913" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${GOLD_DEEP_SAFE}"/>
      <stop offset="55%" stop-color="${GOLD}"/>
      <stop offset="100%" stop-color="${GOLD_LIGHT}"/>
    </linearGradient>
    <filter id="soft" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="3"/>
    </filter>
  </defs>
  <rect width="${W}" height="${H}" fill="#0c0913"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${grid.join("")}
  ${dots.join("")}
  `;
}

const GOLD_DEEP_SAFE = "#c97b2d";

function curve(rng, x1, y1, x2, y2, color, width_, opacity) {
  const mx = (x1 + x2) / 2 + (rng() - 0.5) * 160;
  const my = (y1 + y2) / 2 + (rng() - 0.5) * 160;
  return `<path d="M ${x1} ${y1} Q ${mx.toFixed(0)} ${my.toFixed(0)} ${x2} ${y2}" stroke="${color}" stroke-width="${width_}" fill="none" opacity="${opacity}" stroke-linecap="round"/>`;
}

function motifServices(rng) {
  // layered structure panels linked by gold lines
  const parts = [];
  const panels = [
    [120, 180, 300, 170],
    [520, 120, 340, 200],
    [380, 420, 320, 180],
    [760, 380, 300, 190],
  ];
  panels.forEach(([x, y, w, h], i) => {
    parts.push(
      `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="rgba(22,16,31,0.85)" stroke="${GOLD}" stroke-opacity="0.55" stroke-width="1.5"/>`,
    );
    parts.push(
      `<rect x="${x}" y="${y}" width="${w}" height="26" rx="6" fill="${GOLD}" fill-opacity="0.14"/>`,
    );
    for (let r = 0; r < 3; r += 1) {
      const lw = (0.4 + rng() * 0.5) * (w - 40);
      parts.push(
        `<rect x="${x + 20}" y="${y + 48 + r * 34}" width="${lw.toFixed(0)}" height="8" rx="4" fill="${VIOLET}" fill-opacity="0.35"/>`,
      );
    }
    if (i > 0) {
      const [px, py, pw, ph] = panels[i - 1];
      parts.push(
        curve(rng, px + pw / 2, py + ph / 2, x + w / 2, y + h / 2, "url(#gold)", 2.5, 0.8),
      );
    }
  });
  return parts.join("");
}

function motifKnowledge(rng) {
  // flowing text lines like an open publication, with a node spine
  const parts = [];
  const spineX = 220;
  parts.push(
    `<line x1="${spineX}" y1="90" x2="${spineX}" y2="${H - 90}" stroke="url(#gold)" stroke-width="2" opacity="0.7"/>`,
  );
  for (let i = 0; i < 8; i += 1) {
    const y = 110 + i * 78;
    const len = 420 + rng() * 420;
    parts.push(
      `<circle cx="${spineX}" cy="${y}" r="7" fill="${GOLD_LIGHT}"/>`,
    );
    parts.push(
      curve(rng, spineX + 8, y, spineX + 60, y, GOLD, 1.5, 0.6),
      `<rect x="${spineX + 70}" y="${y - 9}" width="${len.toFixed(0)}" height="18" rx="4" fill="${i % 3 === 0 ? GOLD : VIOLET}" fill-opacity="${i % 3 === 0 ? 0.32 : 0.2}"/>`,
    );
  }
  return parts.join("");
}

function motifTools(rng) {
  // hexagon tool-nodes with radial links
  const parts = [];
  const cx = W / 2;
  const cy = H / 2;
  const ring = [230, 330];
  const nodes = [];
  ring.forEach((radius, ri) => {
    const count = ri === 0 ? 5 : 8;
    for (let i = 0; i < count; i += 1) {
      const a = (i / count) * Math.PI * 2 + ri * 0.4;
      nodes.push([cx + Math.cos(a) * radius, cy + Math.sin(a) * radius * 0.72]);
    }
  });
  nodes.forEach(([x, y], i) => {
    if (i > 0) {
      const [px, py] = nodes[i - 1];
      parts.push(curve(rng, px, py, x, y, i % 3 === 0 ? CYAN : GOLD, 1.6, 0.55));
    }
    parts.push(curve(rng, cx, cy, x, y, GOLD, 1, 0.3));
  });
  parts.push(
    `<polygon points="${hex(cx, cy, 58)}" fill="rgba(22,16,31,0.9)" stroke="${GOLD_LIGHT}" stroke-width="2"/>`,
  );
  nodes.forEach(([x, y], i) => {
    parts.push(
      `<polygon points="${hex(x, y, 26 + (i % 3) * 6)}" fill="rgba(22,16,31,0.9)" stroke="${i % 4 === 0 ? CYAN : GOLD}" stroke-width="1.5" opacity="0.95"/>`,
    );
  });
  return parts.join("");
}

function hex(cx, cy, r) {
  const pts = [];
  for (let i = 0; i < 6; i += 1) {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    pts.push(`${(cx + Math.cos(a) * r).toFixed(1)},${(cy + Math.sin(a) * r).toFixed(1)}`);
  }
  return pts.join(" ");
}

function motifProducts(rng) {
  // stacking product boxes / app tiles
  const parts = [];
  const boxes = [
    [420, 300, 150],
    [590, 300, 150],
    [760, 300, 150],
    [505, 470, 150],
    [675, 470, 150],
    [590, 140, 150],
  ];
  boxes.forEach(([x, y, s], i) => {
    parts.push(
      `<rect x="${x}" y="${y}" width="${s}" height="${s}" rx="14" fill="rgba(22,16,31,0.9)" stroke="${i === 5 ? GOLD_LIGHT : GOLD}" stroke-opacity="${i === 5 ? 0.95 : 0.5}" stroke-width="1.8"/>`,
    );
    parts.push(
      `<circle cx="${x + s / 2}" cy="${y + s / 2}" r="${(s / 6).toFixed(0)}" fill="none" stroke="${i % 2 ? VIOLET : GOLD}" stroke-width="2" opacity="0.7"/>`,
    );
    if (i > 0) {
      const [px, py, ps] = boxes[i - 1];
      parts.push(
        curve(rng, px + ps / 2, py + ps / 2, x + s / 2, y + s / 2, "url(#gold)", 2, 0.7),
      );
    }
  });
  return parts.join("");
}

const artworks = [
  { file: "gw-services.webp", seed: 11, glow: [70, 35, GOLD], motif: motifServices },
  { file: "gw-knowledge.webp", seed: 23, glow: [30, 60, VIOLET], motif: motifKnowledge },
  { file: "gw-tools.webp", seed: 37, glow: [60, 45, CYAN], motif: motifTools },
  { file: "gw-products.webp", seed: 51, glow: [50, 40, GOLD], motif: motifProducts },
];

for (const art of artworks) {
  const rng = mulberry32(art.seed);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${base(rng, art.glow[0], art.glow[1], art.glow[2])}${art.motif(rng)}</svg>`;
  const out = `${OUT}${art.file}`;
  await sharp(Buffer.from(svg))
    .webp({ quality: 84 })
    .toFile(out);
  console.log("wrote", out);
}
