// NeuralWeb — WebGL neural network hero for "OPERATOR'S UNIVERSE".
//
// An organic, non-uniform network (golden-orange dominant) where the DOM
// interface is *bound* to the 3D simulation: lane hubs, gateway/child
// plates, the DD signature and the third-level labels are all positioned
// every frame by projecting the corresponding 3D bodies to screen space —
// so the interface can never drift away from the web, at any viewport or
// camera zoom. Hovering a lane opens a terminal-style panel that types its
// summary right under the lane title; clicking a child plate dives deeper:
// the camera closes in and the child's own stack unfolds (depth 2), while
// upper levels blur away proportionally to the dive depth.
//
// Reduced motion / mobile / no-JS keep complete static presentations.
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import * as THREE from "three";
import "./neural-field.css";
import "./neural-web.css";

const ACCENT_TOKENS = {
  business: "var(--dd-lane-business)",
  learning: "var(--dd-lane-learning)",
  ai: "var(--dd-lane-ai)",
};

function accentVar(accent) {
  return ACCENT_TOKENS[accent] ?? "var(--dd-color-action)";
}

/* ------- layout of semantic nodes (% of the hero box, xy plane) ------- */

const DD_POS = { x: 72, y: 40 };

const LANE_LAYOUT = {
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

const WEB_QUERY = "(min-width: 48rem) and (pointer: fine)";

const GOLD = new THREE.Color("#f2a94b");
const GOLD_LIGHT = new THREE.Color("#ffd28a");
const GOLD_DEEP = new THREE.Color("#c97b2d");
const VIOLET = new THREE.Color("#a78bfa");
const CYAN = new THREE.Color("#7fc3f0");
const WARM_WHITE = new THREE.Color("#fff3e0");

function pickWebColor(rng) {
  const r = rng();
  if (r < 0.55) return GOLD.clone().lerp(GOLD_LIGHT, rng());
  if (r < 0.72) return GOLD_DEEP.clone().lerp(GOLD, rng());
  if (r < 0.87) return VIOLET.clone();
  return CYAN.clone();
}

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

function glowTexture() {
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

export default function NeuralWeb({
  lanes,
  dd,
  ddPhoto,
  media,
  statusLabels,
  copy,
}) {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);
  const leaveTimerRef = useRef(null);
  const videoRef = useRef(null);

  const [hydrated, setHydrated] = useState(false);
  const [engine, setEngine] = useState(null); // null | "webgl" | "static"
  const [pinnedLane, setPinnedLane] = useState(null);
  const [hoverLane, setHoverLane] = useState(null);
  const [focusedChild, setFocusedChild] = useState(null);
  const [grandPreview, setGrandPreview] = useState(null);
  const [interacted, setInteracted] = useState(false);

  const reduceMotion = useReducedMotion();
  const activeLane = hoverLane ?? pinnedLane;
  const activeLaneRef = useRef(null);
  activeLaneRef.current = activeLane;
  const focusedChildRef = useRef(null);
  focusedChildRef.current = focusedChild;

  const depth = focusedChild ? 2 : activeLane ? 1 : 0;

  const hasMedia = Boolean(media && (media.webm || media.hevc || media.poster));

  useEffect(() => {
    setHydrated(true);
    rootRef.current?.setAttribute("data-hydrated", "true");
  }, []);

  useEffect(() => {
    if (hasMedia && videoRef.current) videoRef.current.play().catch(() => {});
  }, [hasMedia]);

  useEffect(() => () => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
  }, []);

  // Find a child node (and its lane) by id across the topology.
  function findChild(childId) {
    for (const lane of lanes) {
      for (const gateway of lane.gateways) {
        const child = gateway.children.find((item) => item.id === childId);
        if (child) return { lane, gateway, child };
      }
    }
    return null;
  }

  const focusedInfo = focusedChild ? findChild(focusedChild) : null;

  /* ---------------- terminal typing under the lane title ---------------- */

  const typedRef = useRef(null); // {id, timer}

  useEffect(() => {
    if (typedRef.current?.timer) {
      clearInterval(typedRef.current.timer);
      typedRef.current = null;
    }
    if (!activeLane) return undefined;
    const lane = lanes.find((item) => item.id === activeLane);
    const host = rootRef.current?.querySelector(
      `[data-term-body="${activeLane}"]`,
    );
    if (!lane || !host) return undefined;
    const text = `${lane.summary} [${statusLabels[lane.status] ?? lane.status}]`;
    if (reduceMotion || engine !== "webgl") {
      host.textContent = text;
      return undefined;
    }
    host.textContent = "";
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      host.textContent = text.slice(0, i);
      if (i >= text.length) clearInterval(timer);
    }, 13);
    typedRef.current = { id: activeLane, timer };
    return () => clearInterval(timer);
  }, [activeLane, engine, reduceMotion, lanes, statusLabels]);

  /* ------------------------- WebGL engine ------------------------- */

  useEffect(() => {
    if (reduceMotion || !window.matchMedia(WEB_QUERY).matches) {
      setEngine("static");
      return undefined;
    }
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      setEngine("static");
      return undefined;
    }
    setEngine("webgl");
    rootRef.current?.classList.add("neural--webgl");

    const rng = mulberry32(20260805);
    const host = canvas.parentElement;
    const rect = () => host.getBoundingClientRect();
    let { width, height } = rect();

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(width, height, false);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0c0913, 0.02);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 200);
    camera.position.set(0, 0, 44);

    const halfH = Math.tan(THREE.MathUtils.degToRad(25)) * 44;
    const halfW = () => halfH * camera.aspect;
    const toWorld = (px, py, z = 0) =>
      new THREE.Vector3(
        ((px - 50) / 50) * halfW(),
        ((50 - py) / 50) * halfH,
        z,
      );

    const tex = glowTexture();

    /* ---- bodies ---- */
    const bodies = new Map();
    const addBody = (id, kind, base, extra = {}) => {
      const body = {
        id, kind, base: base.clone(), cur: base.clone(),
        vel: new THREE.Vector3(), phase: rng() * Math.PI * 2, ...extra,
      };
      bodies.set(id, body);
      return body;
    };

    addBody("dd", "dd", toWorld(DD_POS.x, DD_POS.y, -1));

    lanes.forEach((lane, li) => {
      const layout = LANE_LAYOUT[lane.id];
      addBody(lane.id, "lane", toWorld(layout.x, layout.y, li - 1), {
        laneId: lane.id, depth: layout.scale, depthOpacity: layout.opacity,
      });
      lane.gateways.forEach((gateway) => {
        const gPos = layout.gateways[gateway.id];
        if (!gPos) return;
        addBody(gateway.id, "gateway", toWorld(gPos.x, gPos.y, 0.5), {
          laneId: lane.id,
        });
        gateway.children.forEach((child, ci) => {
          const cPos = gPos.children[child.id];
          if (!cPos) return;
          const childBase = toWorld(cPos.x, cPos.y, 0.8);
          addBody(child.id, "child", childBase, {
            laneId: lane.id, gatewayId: gateway.id,
          });
          // third level: the child's own stack, fanning below it in a wide
          // arc — away from the lane hub, plates never touching
          (child.children ?? []).forEach((grand, gi) => {
            const n = child.children.length;
            const angle =
              (-165 + (gi * 150) / Math.max(n - 1, 1)) * (Math.PI / 180);
            const radius = 10 + (gi % 2) * 2.4;
            addBody(grand.id, "grand", childBase.clone().add(
              new THREE.Vector3(
                Math.cos(angle) * radius * 1.25,
                Math.sin(angle) * radius * 0.9,
                0.4,
              ),
            ), {
              laneId: lane.id, gatewayId: gateway.id, childId: child.id,
              offset: new THREE.Vector3(
                Math.cos(angle) * radius * 1.25,
                Math.sin(angle) * radius * 0.9,
                0.4,
              ),
            });
          });
        });
      });
    });

    const bgIds = [];
    const clusterCenters = Array.from({ length: 5 }, () => ({
      x: 8 + rng() * 88, y: 4 + rng() * 92, spread: 8 + rng() * 14,
    }));
    for (let i = 0; i < 160; i += 1) {
      let px; let py;
      if (rng() < 0.62) {
        const c = clusterCenters[Math.floor(rng() * clusterCenters.length)];
        const angle = rng() * Math.PI * 2;
        const radius = Math.abs(rng() + rng() - 1) * c.spread;
        px = c.x + Math.cos(angle) * radius;
        py = c.y + Math.sin(angle) * radius * 0.75;
      } else {
        px = rng() * 104 - 2;
        py = rng() * 100;
      }
      const id = `n${i}`;
      bgIds.push(id);
      addBody(id, "neuron", toWorld(px, py, -12 + rng() * 16));
    }

    /* ---- edges ---- */
    const edges = [];
    const addEdge = (a, b, kind, laneId = null, childId = null) => {
      const ba = bodies.get(a);
      const bb = bodies.get(b);
      if (!ba || !bb) return;
      const dist = ba.base.distanceTo(bb.base);
      const bend = (rng() - 0.5) * dist * (0.35 + rng() * 0.5);
      const lift = (rng() - 0.5) * dist * 0.3;
      edges.push({
        a, b, kind, laneId, childId,
        ctrl: new THREE.Vector3(
          (ba.base.x + bb.base.x) / 2 - (bb.base.y - ba.base.y) * 0.001 * bend * 10,
          (ba.base.y + bb.base.y) / 2 + (bb.base.x - ba.base.x) * 0.001 * bend * 10,
          (ba.base.z + bb.base.z) / 2 + lift,
        ),
        wobblePhase: rng() * Math.PI * 2,
        wobbleAmp: 0.15 + rng() * 0.5,
        color: kind === "web" ? pickWebColor(rng) : GOLD.clone(),
        brightness: kind === "web" ? 0.12 + rng() * 0.3 : 0.9,
      });
    };

    lanes.forEach((lane) => addEdge("dd", lane.id, "system", lane.id));
    lanes.forEach((lane) => {
      lane.gateways.forEach((gateway) => {
        addEdge(lane.id, gateway.id, "branch", lane.id);
        gateway.children.forEach((child) => {
          addEdge(gateway.id, child.id, "branch", lane.id);
          (child.children ?? []).forEach((grand) => {
            addEdge(child.id, grand.id, "deep", lane.id, child.id);
          });
        });
      });
    });

    bgIds.forEach((id) => {
      const me = bodies.get(id);
      const nearest = bgIds
        .filter((other) => other !== id)
        .map((other) => ({
          other,
          d: me.base.distanceTo(bodies.get(other).base),
        }))
        .sort((p, q) => p.d - q.d)
        .slice(0, 3);
      const count = 1 + Math.floor(rng() * 2.4);
      nearest.slice(0, count).forEach(({ other, d }) => {
        if (d < 9 && rng() < 0.8) addEdge(id, other, "web");
      });
    });

    /* ---- GPU buffers ---- */
    const SEG = 14;
    const lineVerts = edges.length * SEG * 2;
    const linePos = new Float32Array(lineVerts * 3);
    const lineCol = new Float32Array(lineVerts * 3);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePos, 3));
    lineGeo.setAttribute("color", new THREE.BufferAttribute(lineCol, 3));
    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const lineSegments = new THREE.LineSegments(lineGeo, lineMat);
    lineSegments.frustumCulled = false;
    scene.add(lineSegments);

    const allIds = [...bodies.keys()];
    const pointPos = new Float32Array(allIds.length * 3);
    const pointSize = new Float32Array(allIds.length);
    const pointCol = new Float32Array(allIds.length * 3);
    allIds.forEach((id, i) => {
      const body = bodies.get(id);
      const sizeMap = { lane: 26, dd: 20, gateway: 13, child: 8, grand: 4.5 };
      pointSize[i] = (sizeMap[body.kind] ?? 3) * (0.8 + rng() * 0.5);
      const col =
        body.kind === "lane" || body.kind === "dd"
          ? GOLD_LIGHT
          : body.kind === "gateway"
            ? GOLD
            : body.kind === "child"
              ? WARM_WHITE
              : body.kind === "grand"
                ? GOLD_LIGHT
                : pickWebColor(rng);
      pointCol[i * 3] = col.r;
      pointCol[i * 3 + 1] = col.g;
      pointCol[i * 3 + 2] = col.b;
    });
    const pointGeo = new THREE.BufferGeometry();
    pointGeo.setAttribute("position", new THREE.BufferAttribute(pointPos, 3));
    pointGeo.setAttribute("aSize", new THREE.BufferAttribute(pointSize, 1));
    pointGeo.setAttribute("aColor", new THREE.BufferAttribute(pointCol, 3));
    const pointMat = new THREE.ShaderMaterial({
      uniforms: { uTex: { value: tex } },
      vertexShader: `
        attribute float aSize;
        attribute vec3 aColor;
        varying vec3 vColor;
        void main() {
          vColor = aColor;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (140.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        uniform sampler2D uTex;
        varying vec3 vColor;
        void main() {
          vec4 t = texture2D(uTex, gl_PointCoord);
          gl_FragColor = vec4(vColor, 1.0) * t;
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const points = new THREE.Points(pointGeo, pointMat);
    points.frustumCulled = false;
    scene.add(points);

    const pulses = [];
    const pulseMat = new THREE.SpriteMaterial({
      map: tex,
      color: GOLD_LIGHT,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    for (let i = 0; i < 14; i += 1) {
      const sprite = new THREE.Sprite(pulseMat.clone());
      sprite.scale.setScalar(1.2 + rng());
      scene.add(sprite);
      pulses.push({
        sprite,
        edge: Math.floor(rng() * edges.length),
        t: rng(),
        speed: 0.04 + rng() * 0.1,
      });
    }

    /* ---- loop state ---- */
    const springs = {};
    lanes.forEach((lane) => {
      springs[lane.id] = { e: 0, v: 0 };
    });
    const deepSpring = { e: 0, v: 0 };
    const mouse = { world: new THREE.Vector3(999, 999, 0), has: false };
    const ndc = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    const camTarget = new THREE.Vector3(0, 0, 44);
    const lookTarget = new THREE.Vector3(0, 0, 0);
    const lookCur = new THREE.Vector3(0, 0, 0);
    const clock = new THREE.Clock();
    let rafId = null;
    let visible = true;

    // DOM overlay binding: every [data-oid] element follows its 3D body.
    const overlay = new Map();
    host.parentElement
      .querySelectorAll("[data-oid]")
      .forEach((el) => overlay.set(el.getAttribute("data-oid"), el));

    function curvePoint(edge, t, out) {
      const a = bodies.get(edge.a).cur;
      const b = bodies.get(edge.b).cur;
      const wob =
        Math.sin(clock.elapsedTime * 0.5 + edge.wobblePhase) * edge.wobbleAmp;
      const it = 1 - t;
      out.set(
        it * it * a.x + 2 * it * t * edge.ctrl.x + t * t * b.x,
        it * it * a.y + 2 * it * t * (edge.ctrl.y + wob) + t * t * b.y,
        it * it * a.z + 2 * it * t * edge.ctrl.z + t * t * b.z,
      );
      return out;
    }

    const tmp = new THREE.Vector3();
    const proj = new THREE.Vector3();

    function placeOverlay(id, body, opacity, scale = 1) {
      const el = overlay.get(id);
      if (!el) return;
      if (!el.dataset.bound) {
        // from the %-rendered SSR position to projection-driven pixels
        el.style.left = "0px";
        el.style.top = "0px";
        el.dataset.bound = "1";
      }
      proj.copy(body.cur).project(camera);
      let x = ((proj.x + 1) / 2) * width;
      let y = ((1 - proj.y) / 2) * height;
      x = Math.min(Math.max(x, 90), width - 110);
      y = Math.min(Math.max(y, 42), height - 40);
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -50%) scale(${scale.toFixed(3)})`;
      el.style.opacity = opacity.toFixed(2);
    }

    function tick() {
      if (!visible) {
        rafId = null;
        return;
      }
      const dt = Math.min(0.05, clock.getDelta());
      const t = clock.elapsedTime;

      const active = activeLaneRef.current;
      const focused = focusedChildRef.current;

      lanes.forEach((lane) => {
        const s = springs[lane.id];
        const target = active === lane.id ? 1 : 0;
        s.v += (target - s.e) * 34 * dt;
        s.v *= Math.exp(-7.5 * dt);
        s.e += s.v * dt;
      });
      const deepTarget = focused ? 1 : 0;
      deepSpring.v += (deepTarget - deepSpring.e) * 34 * dt;
      deepSpring.v *= Math.exp(-7.5 * dt);
      deepSpring.e += deepSpring.v * dt;

      bodies.forEach((body) => {
        let tx = body.base.x;
        let ty = body.base.y;
        let tz = body.base.z;
        if (body.kind === "gateway" || body.kind === "child") {
          const parent = bodies.get(
            body.kind === "gateway" ? body.laneId : body.gatewayId,
          );
          const e = springs[body.laneId].e;
          tx = parent.cur.x + (body.base.x - parent.cur.x) * e;
          ty = parent.cur.y + (body.base.y - parent.cur.y) * e;
          tz = parent.cur.z + (body.base.z - parent.cur.z) * e;
        } else if (body.kind === "grand") {
          const parent = bodies.get(body.childId);
          const e = body.childId === focused ? deepSpring.e : 0;
          tx = parent.cur.x + body.offset.x * e;
          ty = parent.cur.y + body.offset.y * e;
          tz = parent.cur.z + body.offset.z * e;
        }
        const amp =
          body.kind === "neuron" ? 0.9 : body.kind === "lane" ? 0.22 : 0.3;
        tx += Math.sin(t * 0.24 + body.phase) * amp;
        ty += Math.cos(t * 0.19 + body.phase * 1.7) * amp * 0.8;
        tz += Math.sin(t * 0.15 + body.phase * 0.6) * amp * 0.5;

        body.vel.x += (tx - body.cur.x) * 12 * dt;
        body.vel.y += (ty - body.cur.y) * 12 * dt;
        body.vel.z += (tz - body.cur.z) * 12 * dt;
        if (mouse.has) {
          const dx = body.cur.x - mouse.world.x;
          const dy = body.cur.y - mouse.world.y;
          const dist = Math.hypot(dx, dy);
          // nodes barely yield to the pointer; lines keep bending nicely
          const R = 5;
          if (dist < R && dist > 0.001) {
            const force = (1 - dist / R) * 6;
            body.vel.x += (dx / dist) * force * dt;
            body.vel.y += (dy / dist) * force * dt;
          }
        }
        body.vel.multiplyScalar(Math.exp(-7 * dt));
        body.cur.addScaledVector(body.vel, dt);
      });

      // camera: depth 1 glides close to the lane, depth 2 dives onto the child
      if (focused) {
        const fw = bodies.get(focused).cur;
        camTarget.set(fw.x * 0.45, fw.y * 0.45, 27);
        lookTarget.set(fw.x * 0.72, fw.y * 0.72, 0);
      } else if (active && LANE_LAYOUT[active]) {
        const lw = bodies.get(active).cur;
        camTarget.set(lw.x * 0.3, lw.y * 0.3, 31.5);
        lookTarget.set(lw.x * 0.62, lw.y * 0.62, 0);
      } else {
        camTarget.set(0, 0, 44);
        lookTarget.set(0, 0, 0);
      }
      const k = 1 - Math.exp(-2 * dt);
      camera.position.lerp(camTarget, k);
      lookCur.lerp(lookTarget, k);
      camera.lookAt(lookCur);

      // points
      allIds.forEach((id, i) => {
        const body = bodies.get(id);
        pointPos[i * 3] = body.cur.x;
        pointPos[i * 3 + 1] = body.cur.y;
        pointPos[i * 3 + 2] = body.cur.z;
        if (body.kind === "gateway" || body.kind === "child") {
          const e = springs[body.laneId].e;
          const base = body.kind === "gateway" ? GOLD : WARM_WHITE;
          pointCol[i * 3] = base.r * e;
          pointCol[i * 3 + 1] = base.g * e;
          pointCol[i * 3 + 2] = base.b * e;
        } else if (body.kind === "grand") {
          const e = body.childId === focused ? deepSpring.e : 0;
          pointCol[i * 3] = GOLD_LIGHT.r * e;
          pointCol[i * 3 + 1] = GOLD_LIGHT.g * e;
          pointCol[i * 3 + 2] = GOLD_LIGHT.b * e;
        }
      });
      pointGeo.attributes.position.needsUpdate = true;
      pointGeo.attributes.aColor.needsUpdate = true;

      // lines
      const deepFade = focused ? 0.35 : 1;
      let v = 0;
      edges.forEach((edge) => {
        let bright;
        if (edge.kind === "web") {
          bright =
            edge.brightness *
            (0.75 + Math.sin(t * 0.6 + edge.wobblePhase) * 0.25) *
            deepFade;
        } else if (edge.kind === "system") {
          bright = (0.25 + springs[edge.laneId].e * 0.65) * deepFade;
        } else if (edge.kind === "branch") {
          bright = edge.brightness * springs[edge.laneId].e;
        } else {
          bright =
            edge.brightness *
            (edge.childId === focused ? deepSpring.e : 0);
        }
        for (let s = 0; s < SEG; s += 1) {
          curvePoint(edge, s / SEG, tmp);
          linePos[v * 3] = tmp.x;
          linePos[v * 3 + 1] = tmp.y;
          linePos[v * 3 + 2] = tmp.z;
          lineCol[v * 3] = edge.color.r * bright;
          lineCol[v * 3 + 1] = edge.color.g * bright;
          lineCol[v * 3 + 2] = edge.color.b * bright;
          v += 1;
          curvePoint(edge, (s + 1) / SEG, tmp);
          linePos[v * 3] = tmp.x;
          linePos[v * 3 + 1] = tmp.y;
          linePos[v * 3 + 2] = tmp.z;
          lineCol[v * 3] = edge.color.r * bright;
          lineCol[v * 3 + 1] = edge.color.g * bright;
          lineCol[v * 3 + 2] = edge.color.b * bright;
          v += 1;
        }
      });
      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.attributes.color.needsUpdate = true;

      // pulses
      pulses.forEach((pulse) => {
        pulse.t += pulse.speed * dt * 8;
        if (pulse.t >= 1) {
          pulse.t = 0;
          pulse.edge = Math.floor(Math.random() * edges.length);
        }
        const edge = edges[pulse.edge];
        curvePoint(edge, pulse.t, tmp);
        pulse.sprite.position.copy(tmp);
        const fade = Math.sin(pulse.t * Math.PI);
        pulse.sprite.material.opacity =
          (edge.kind === "web" ? 0.5 : 0.9) * fade;
      });

      // DOM overlay follows the 3D bodies — bound at any zoom/viewport
      bodies.forEach((body) => {
        if (!overlay.has(body.id)) return;
        if (body.kind === "lane") {
          const e = springs[body.laneId].e;
          const dim = active !== null && active !== body.laneId;
          const deepDim = focused ? 0.3 : 1;
          const scale = body.depth * (1 + 0.1 * e);
          placeOverlay(
            body.id,
            body,
            (dim ? 0.35 : 1) * body.depthOpacity * deepDim,
            scale,
          );
        } else if (body.kind === "gateway" || body.kind === "child") {
          const e = springs[body.laneId].e;
          const focusFade =
            focused && body.id !== focused ? 0.45 : 1;
          placeOverlay(body.id, body, e * focusFade, 0.7 + 0.3 * e);
        } else if (body.kind === "grand") {
          const e = body.childId === focused ? deepSpring.e : 0;
          placeOverlay(body.id, body, e, 0.8 + 0.2 * e);
        } else if (body.kind === "dd") {
          placeOverlay(body.id, body, focused ? 0.4 : 1, 1);
        }
      });

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(tick);
    }

    function start() {
      if (rafId === null && visible) {
        clock.getDelta();
        rafId = requestAnimationFrame(tick);
      }
    }
    function stop() {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }

    const onMove = (event) => {
      const r = rect();
      if (
        event.clientX < r.left ||
        event.clientX > r.right ||
        event.clientY < r.top ||
        event.clientY > r.bottom
      ) {
        mouse.has = false;
        return;
      }
      mouse.has = true;
      ndc.set(
        ((event.clientX - r.left) / r.width) * 2 - 1,
        -((event.clientY - r.top) / r.height) * 2 + 1,
      );
      raycaster.setFromCamera(ndc, camera);
      const origin = raycaster.ray.origin;
      const dir = raycaster.ray.direction;
      const tt = -origin.z / dir.z;
      mouse.world.set(origin.x + dir.x * tt, origin.y + dir.y * tt, 0);
    };
    const onResize = () => {
      ({ width, height } = rect());
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { threshold: 0.02 },
    );
    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    observer.observe(host);
    start();

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      rootRef.current?.classList.remove("neural--webgl");
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
          mats.forEach((mat) => {
            if (mat.map) mat.map.dispose();
            mat.dispose();
          });
        }
      });
      renderer.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion, lanes]);

  /* ---------------- interaction state ---------------- */

  function markInteracted() {
    if (!interacted) setInteracted(true);
  }

  function cancelLeave() {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
  }

  // Open branches stay open: collapse happens only by choosing another
  // lane, clicking the active lane again, or Escape — never by simply
  // moving the pointer away ("non-collapsing field" of the branch).
  function enterLane(lane) {
    markInteracted();
    cancelLeave();
    // already inside this branch — do nothing (no duplicate panels/retyping)
    if (activeLaneRef.current === lane.id) return;
    // hovering another lane always transfers control — a pin must never
    // make a different lane feel "broken"
    if (pinnedLane && pinnedLane !== lane.id) setPinnedLane(null);
    setFocusedChild(null);
    setGrandPreview(null);
    setHoverLane(lane.id);
  }

  // Click on empty space = one step back up the neural path.
  function stepBack() {
    markInteracted();
    setGrandPreview(null);
    if (focusedChild) {
      setFocusedChild(null);
      return;
    }
    if (pinnedLane) {
      setPinnedLane(null);
      setHoverLane(null);
      return;
    }
    setHoverLane(null);
  }

  function togglePin(lane) {
    markInteracted();
    setFocusedChild(null);
    setGrandPreview(null);
    setPinnedLane((current) => (current === lane.id ? null : lane.id));
    setHoverLane(lane.id);
  }

  function toggleFocusChild(child) {
    markInteracted();
    cancelLeave();
    setGrandPreview(null);
    setFocusedChild((current) => (current === child.id ? null : child.id));
  }

  // Dim/blur the hero copy while any branch is open so it never fights
  // the nodes for attention.
  useEffect(() => {
    const heroEl = rootRef.current?.closest(".home-hero");
    if (!heroEl) return undefined;
    heroEl.setAttribute("data-neural-depth", String(depth));
    return () => heroEl.removeAttribute("data-neural-depth");
  }, [depth]);

  // Escape steps back from anywhere — window-level so it works regardless
  // of where the focus currently rests.
  useEffect(() => {
    const onKey = (event) => {
      if (event.key !== "Escape") return;
      if (focusedChildRef.current) {
        const refocus = focusedChildRef.current;
        setFocusedChild(null);
        rootRef.current?.querySelector(`[data-pill="${refocus}"]`)?.focus();
        return;
      }
      if (activeLaneRef.current) {
        const refocus = activeLaneRef.current;
        setPinnedLane(null);
        setHoverLane(null);
        rootRef.current?.querySelector(`#neural-lane-${refocus}`)?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function onRootKeyDown(event) {
    // kept for semantic completeness; window listener does the work
    if (event.key === "Escape") event.stopPropagation();
  }

  const instant = reduceMotion ? 0.01 : undefined;

  function laneTransformStatic(layout, isActive) {
    const focusShiftX = isActive ? (62 - layout.x) * 4 : 0;
    const focusShiftY = isActive ? (44 - layout.y) * 3 : 0;
    const scale = isActive ? layout.scale * 1.1 : layout.scale;
    return `translate(-50%, -50%) translate(${focusShiftX.toFixed(1)}px, ${focusShiftY.toFixed(1)}px) scale(${scale})`;
  }

  const isWebgl = engine === "webgl";

  return (
    <div
      className={`neural${interacted ? " neural--interacted" : ""}`}
      ref={rootRef}
      onKeyDown={onRootKeyDown}
      data-active-lane={activeLane ?? undefined}
      data-depth={depth}
      data-engine={engine ?? undefined}
    >
      <p className="neural__sr" id="neural-help">
        Интерактивная карта портала. Три линии: для бизнеса, для обучения и
        для AI-практиков. Tab — переход между линиями, Enter — закрепить
        линию и раскрыть её шлюзы и узлы, Enter на узле — углубиться в его
        состав, Escape — шаг назад. Та же структура доступна списком ниже.
      </p>

      {/* ---------- desktop scene (hydrated only) ---------- */}
      <div
        className="neural__desktop neural-web"
        aria-hidden={hydrated ? undefined : true}
      >
        <canvas
          ref={canvasRef}
          className="neural-web__canvas"
          aria-hidden="true"
        />

        {/* click catcher on empty space: one step back up the branch */}
        <div
          className="neural-catcher"
          aria-hidden="true"
          onClick={stepBack}
        />

        {/* operator signature: DD centered between the three lanes */}
        <div
          className="neural-dd"
          data-oid="dd"
          style={{ left: `${DD_POS.x}%`, top: `${DD_POS.y}%` }}
        >
          {hasMedia ? (
            <video
              ref={videoRef}
              className="neural-dd__media"
              muted
              playsInline
              loop
              preload="none"
              poster={media.poster ?? undefined}
              aria-label={media.alt}
            >
              {media.webm && <source src={media.webm} type="video/webm" />}
              {media.hevc && (
                <source src={media.hevc} type='video/mp4; codecs="hvc1"' />
              )}
            </video>
          ) : ddPhoto ? (
            <img
              className="neural-dd__photo"
              src={ddPhoto}
              alt={dd.name}
              width={112}
              height={112}
            />
          ) : (
            <span className="neural-dd__monogram" aria-hidden="true">
              {dd.monogram}
            </span>
          )}
          <span className="neural-dd__label">
            {dd.role} / {dd.name}
          </span>
        </div>

        {/* lane hubs with terminal panels */}
        {lanes.map((lane) => {
          const layout = LANE_LAYOUT[lane.id];
          const isActive = activeLane === lane.id;
          const isDim = activeLane !== null && !isActive;
          const panelLeft = layout.x > 62;
          return (
            <div
              key={lane.id}
              data-oid={lane.id}
              className={`neural-lane ${layout.drift}${isActive ? " is-active" : ""}${isDim ? " is-dim" : ""}`}
              style={{
                left: `${layout.x}%`,
                top: `${layout.y}%`,
                ...(isWebgl
                  ? {}
                  : {
                      opacity: isDim ? layout.opacity * 0.35 : layout.opacity,
                      transform: laneTransformStatic(layout, isActive),
                    }),
                zIndex: isActive ? 6 : 2,
                "--lane-accent": accentVar(lane.accent),
              }}
            >
              <button
                type="button"
                id={`neural-lane-${lane.id}`}
                className="neural-lane__button"
                aria-expanded={isActive}
                aria-describedby="neural-help"
                onMouseEnter={() => enterLane(lane)}
                onFocus={() => enterLane(lane)}
                onClick={() => togglePin(lane)}
              >
                <span className="neural-lane__index">{lane.index}</span>
                <span className="neural-lane__label">{lane.label}</span>
                <span className="neural-lane__status">
                  {statusLabels[lane.status] ?? lane.status}
                </span>
              </button>
              <div
                className={`neural-term${panelLeft ? " neural-term--left" : ""}`}
                data-open={isActive}
                role="status"
              >
                <p className="neural-term__head">
                  SYS://ЛИНИЯ-{lane.index}
                </p>
                <p className="neural-term__body">
                  <span data-term-body={lane.id} />
                  <span className="neural-term__caret" aria-hidden="true" />
                </p>
                <p className="neural-term__foot">
                  <a href={lane.href} tabIndex={isActive ? 0 : -1}>
                    Открыть раздел →
                  </a>
                </p>
              </div>
            </div>
          );
        })}

        {/* gateways + child plates: bound to the web in webgl mode */}
        {lanes.flatMap((lane) => {
          const layout = LANE_LAYOUT[lane.id];
          return lane.gateways.flatMap((gateway) => {
            const gPos = layout.gateways[gateway.id];
            if (!gPos) return [];
            const pills = [
              <div
                key={gateway.id}
                data-oid={gateway.id}
                data-lane={lane.id}
                className="neural-node neural-node--gateway"
                style={{
                  left: `${gPos.x}%`,
                  top: `${gPos.y}%`,
                  opacity: isWebgl ? 0 : activeLane === lane.id ? 1 : 0,
                  "--lane-accent": accentVar(lane.accent),
                }}
              >
                <button
                  type="button"
                  className="neural-node__button"
                  tabIndex={activeLane === lane.id ? 0 : -1}
                >
                  <span className="neural-node__tag">Шлюз</span>
                  {gateway.label}
                </button>
              </div>,
            ];
            gateway.children.forEach((child) => {
              const cPos = gPos.children[child.id];
              if (!cPos) return;
              pills.push(
                <div
                  key={child.id}
                  data-oid={child.id}
                  data-lane={lane.id}
                  className={`neural-node neural-node--child${
                    focusedChild === child.id ? " is-focused" : ""
                  }`}
                  style={{
                    left: `${cPos.x}%`,
                    top: `${cPos.y}%`,
                    opacity: isWebgl ? 0 : activeLane === lane.id ? 1 : 0,
                    "--lane-accent": accentVar(lane.accent),
                  }}
                >
                  <button
                    type="button"
                    data-pill={child.id}
                    className="neural-node__button"
                    tabIndex={activeLane === lane.id ? 0 : -1}
                    aria-expanded={
                      focusedChild === child.id ? true : undefined
                    }
                    onClick={() => toggleFocusChild(child)}
                  >
                    <span className="neural-node__tag">Узел</span>
                    <span className="neural-node__dot" aria-hidden="true" />
                    {child.label}
                  </button>
                  {focusedChild === child.id && (
                    <div className="neural-term neural-term--child" data-open="true">
                      <p className="neural-term__head">
                        SYS://УЗЕЛ-{child.label}
                      </p>
                      <p className="neural-term__body">
                        {grandPreview
                          ? `${grandPreview.label}: ${grandPreview.summary}`
                          : child.summary}
                      </p>
                      {child.children?.length > 0 && (
                        <p className="neural-term__list">
                          {child.children.map((grand) => grand.label).join(" · ")}
                        </p>
                      )}
                      <p className="neural-term__foot">
                        {child.href ? (
                          <a href={child.href}>Открыть страницу →</a>
                        ) : (
                          <span>
                            {statusLabels[child.status] ?? child.status}
                          </span>
                        )}
                      </p>
                    </div>
                  )}
                </div>,
              );
              // third-level plates: same size as child nodes, with tips
              (child.children ?? []).forEach((grand) => {
                pills.push(
                  <div
                    key={grand.id}
                    data-oid={grand.id}
                    data-lane={lane.id}
                    className={`neural-node neural-node--grand${
                      focusedChild === child.id ? " is-live" : ""
                    }`}
                    style={{
                      "--lane-accent": accentVar(lane.accent),
                      opacity: 0,
                    }}
                  >
                    {grand.href ? (
                      <a
                        className="neural-node__button"
                        href={grand.href}
                        tabIndex={focusedChild === child.id ? 0 : -1}
                        onMouseEnter={() =>
                          setGrandPreview({
                            label: grand.label,
                            summary: grand.summary,
                          })
                        }
                        onMouseLeave={() => setGrandPreview(null)}
                        onFocus={() =>
                          setGrandPreview({
                            label: grand.label,
                            summary: grand.summary,
                          })
                        }
                        onBlur={() => setGrandPreview(null)}
                      >
                        <span className="neural-node__tag">Сервис</span>
                        {grand.label}
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="neural-node__button"
                        tabIndex={focusedChild === child.id ? 0 : -1}
                        onMouseEnter={() =>
                          setGrandPreview({
                            label: grand.label,
                            summary: grand.summary,
                          })
                        }
                        onMouseLeave={() => setGrandPreview(null)}
                        onFocus={() =>
                          setGrandPreview({
                            label: grand.label,
                            summary: grand.summary,
                          })
                        }
                        onBlur={() => setGrandPreview(null)}
                      >
                        <span className="neural-node__tag">Сервис</span>
                        {grand.label}
                      </button>
                    )}
                  </div>,
                );
              });
            });
            return pills;
          });
        })}
      </div>

      {/* ---------- mobile composition (< 48rem, native details) ---------- */}
      <nav className="neural-mobile" aria-label="Карта портала">
        <p className="neural-mobile__dd">
          <span className="neural-mobile__dd-mono">{dd.monogram}</span>
          <span className="neural-mobile__dd-label">
            {dd.role} / {dd.name}
          </span>
        </p>
        <ul className="neural-mobile__lanes">
          {lanes.map((lane) => (
            <li key={lane.id}>
              <details
                className="neural-mobile__lane"
                style={{ "--lane-accent": accentVar(lane.accent) }}
              >
                <summary>
                  <span className="neural-mobile__lane-index">{lane.index}</span>
                  <span className="neural-mobile__lane-label">{lane.label}</span>
                  <span className="neural-mobile__lane-status">
                    {statusLabels[lane.status] ?? lane.status}
                  </span>
                </summary>
                <div className="neural-mobile__lane-body">
                  <p>{lane.summary}</p>
                  {lane.gateways.map((gateway) => (
                    <details className="neural-mobile__gateway" key={gateway.id}>
                      <summary>{gateway.label}</summary>
                      <ul>
                        {gateway.children.map((child) => (
                          <li key={child.id}>
                            {child.href ? (
                              <a href={child.href}>{child.label}</a>
                            ) : (
                              <span className="neural-mobile__child-label">
                                {child.label}
                              </span>
                            )}
                            <span className="neural-mobile__child-status">
                              {statusLabels[child.status] ?? child.status}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                  <a className="neural-mobile__more" href={lane.href}>
                    {copy.mobileMore}
                  </a>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </nav>

      {/* ---------- no-JS fallback (desktop, before hydration) ---------- */}
      <nav className="neural-fallback" aria-label="Карта портала списком">
        <ul>
          {lanes.map((lane) => (
            <li key={lane.id}>
              <a href={lane.href}>{lane.label}</a> — {lane.summary}{" "}
              <span className="neural-fallback__status">
                {statusLabels[lane.status] ?? lane.status}
              </span>
              <ul>
                {lane.gateways.map((gateway) => (
                  <li key={gateway.id}>
                    {gateway.label}
                    <ul>
                      {gateway.children.map((child) => (
                        <li key={child.id}>
                          {child.href ? (
                            <a href={child.href}>{child.label}</a>
                          ) : (
                            child.label
                          )}{" "}
                          — {child.summary}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
