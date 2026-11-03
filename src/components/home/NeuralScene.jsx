// NeuralScene — R3F engine of the hero neural web (2026 performance rules):
// - <Canvas dpr={[1, 2]} performance={{ min: 0.5 }}> lives in NeuralWeb;
// - every repeated node renders through drei <Instances>/<Instance> — no
//   per-node meshes, no .map() of <mesh>;
// - pointer hover mutates instance colors directly (no setState for paint);
// - all motion integrates over useFrame's delta, never per-frame constants;
// - DOM overlays (plates/terminals) live OUTSIDE the Canvas — the scene
//   only projects body positions onto them each frame.
import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Instances, Instance } from "@react-three/drei";
import * as THREE from "three";
import {
  DD_POS,
  LANE_LAYOUT,
  GOLD,
  GOLD_LIGHT,
  WARM_WHITE,
  pickWebColor,
  mulberry32,
  glowTexture,
} from "./neural-layout.js";

const SEG = 14;
const PULSES = 14;

function buildSim(lanes) {
  const rng = mulberry32(20260805);
  const bodies = new Map();
  const halfH = Math.tan(THREE.MathUtils.degToRad(25)) * 44;
  const toWorld = (px, py, pz, aspect) =>
    new THREE.Vector3(
      ((px - 50) / 50) * halfH * aspect,
      ((50 - py) / 50) * halfH,
      pz,
    );

  // bodies keep % coordinates; world bases recomputed when aspect changes
  const addBody = (id, kind, px, py, pz, extra = {}) => {
    const base = toWorld(px, py, pz, 1.6);
    bodies.set(id, {
      id, kind, px, py, pz, base, cur: base.clone(),
      vel: new THREE.Vector3(), phase: rng() * Math.PI * 2, ...extra,
    });
  };

  addBody("dd", "dd", DD_POS.x, DD_POS.y, -1);

  const semantic = []; // instance-driven nodes
  lanes.forEach((lane, li) => {
    const layout = LANE_LAYOUT[lane.id];
    addBody(lane.id, "lane", layout.x, layout.y, li - 1, {
      laneId: lane.id, depth: layout.scale, depthOpacity: layout.opacity,
    });
    semantic.push({ id: lane.id, kind: "lane", size: 1.0 });
    lane.gateways.forEach((gateway) => {
      const gPos = layout.gateways[gateway.id];
      if (!gPos) return;
      addBody(gateway.id, "gateway", gPos.x, gPos.y, 0.5, {
        laneId: lane.id,
      });
      semantic.push({ id: gateway.id, kind: "gateway", size: 0.55 });
      gateway.children.forEach((child) => {
        const cPos = gPos.children[child.id];
        if (!cPos) return;
        addBody(child.id, "child", cPos.x, cPos.y, 0.8, {
          laneId: lane.id, gatewayId: gateway.id,
        });
        semantic.push({ id: child.id, kind: "child", size: 0.38 });
        (child.children ?? []).forEach((grandData, gi) => {
          const n = child.children.length;
          const angle =
            (-165 + (gi * 150) / Math.max(n - 1, 1)) * (Math.PI / 180);
          const radius = 10 + (gi % 2) * 2.4;
          const offset = new THREE.Vector3(
            Math.cos(angle) * radius * 1.25,
            Math.sin(angle) * radius * 0.9,
            0.4,
          );
          const childBase = toWorld(cPos.x, cPos.y, 0.8, 1.6);
          const grandBody = {
            id: grandData.id, kind: "grand",
            px: cPos.x, py: cPos.y, pz: 0.8,
            base: childBase.clone().add(offset),
            laneId: lane.id, gatewayId: gateway.id, childId: child.id, offset,
          };
          grandBody.cur = grandBody.base.clone();
          grandBody.vel = new THREE.Vector3();
          grandBody.phase = rng() * Math.PI * 2;
          bodies.set(grandBody.id, grandBody);
          semantic.push({ id: grandData.id, kind: "grand", size: 0.26 });
        });
      });
    });
  });
  semantic.push({ id: "dd", kind: "dd", size: 0.8 });

  // background neurons (halo points only, non-interactive)
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
    addBody(`n${i}`, "neuron", px, py, -12 + rng() * 16);
  }

  const edges = [];
  const addEdge = (a, b, kind, laneId = null, childId = null) => {
    const ba = bodies.get(a);
    const bb = bodies.get(b);
    if (!ba || !bb) return;
    const dist = ba.base.distanceTo(bb.base);
    const bend = (rng() - 0.5) * dist * (0.35 + rng() * 0.5);
    const lift = (rng() - 0.5) * dist * 0.3;
    const ctrl = new THREE.Vector3(
      (ba.base.x + bb.base.x) / 2 - (bb.base.y - ba.base.y) * 0.001 * bend * 10,
      (ba.base.y + bb.base.y) / 2 + (bb.base.x - ba.base.x) * 0.001 * bend * 10,
      (ba.base.z + bb.base.z) / 2 + lift,
    );
    const mid = ba.base.clone().add(bb.base).multiplyScalar(0.5);
    edges.push({
      a, b, kind, laneId, childId,
      ctrl,
      ctrlOff: ctrl.clone().sub(mid),
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
  const bgIds = [...bodies.keys()].filter((id) => id.startsWith("n"));
  bgIds.forEach((id) => {
    const me = bodies.get(id);
    const nearest = bgIds
      .filter((other) => other !== id)
      .map((other) => ({ other, d: me.base.distanceTo(bodies.get(other).base) }))
      .sort((p, q) => p.d - q.d)
      .slice(0, 3);
    const count = 1 + Math.floor(rng() * 2.4);
    nearest.slice(0, count).forEach(({ other, d }) => {
      if (d < 9 && rng() < 0.8) addEdge(id, other, "web");
    });
  });

  const springs = {};
  lanes.forEach((lane) => {
    springs[lane.id] = { e: 0, v: 0 };
  });

  const pulses = Array.from({ length: PULSES }, () => ({
    edge: Math.floor(rng() * edges.length),
    t: rng(),
    speed: 0.04 + rng() * 0.1,
  }));

  return {
    bodies,
    edges,
    springs,
    deepSpring: { e: 0, v: 0 },
    pulses,
    semantic,
    mouse: { world: new THREE.Vector3(999, 999, 0), has: false },
    camTarget: new THREE.Vector3(0, 0, 44),
    lookTarget: new THREE.Vector3(),
    lookCur: new THREE.Vector3(),
    lineAcc: 0,
    t: 0,
    aspect: 1.6,
    // recompute world bases when the canvas aspect changes (resize)
    applyAspect(aspect) {
      this.aspect = aspect;
      bodies.forEach((b) => {
        const nb = toWorld(b.px, b.py, b.pz, aspect);
        if (b.offset) nb.add(b.offset);
        b.base.copy(nb);
      });
      edges.forEach((e) => {
        const a = bodies.get(e.a).base;
        const b = bodies.get(e.b).base;
        e.ctrl.set(
          (a.x + b.x) / 2 + e.ctrlOff.x,
          (a.y + b.y) / 2 + e.ctrlOff.y,
          (a.z + b.z) / 2 + e.ctrlOff.z,
        );
      });
    },
  };
}

export default function NeuralScene({
  lanes,
  activeLaneRef,
  focusedChildRef,
  overlayRoot,
}) {
  const camera = useThree((s) => s.camera);
  const size = useThree((s) => s.size);
  const gl = useThree((s) => s.gl);

  const sim = useMemo(() => buildSim(lanes), [lanes]);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const tmp = useMemo(() => new THREE.Vector3(), []);
  const tmpColor = useMemo(() => new THREE.Color(), []);
  const proj = useMemo(() => new THREE.Vector3(), []);

  const pointsRef = useRef(null);
  const pulsesRef = useRef(null);
  const linesRef = useRef(null);
  const instRef = useRef(null);
  const overlay = useRef(new Map());
  const hovered = useRef(-1);

  // halo points (soft glow dots) — one draw call
  const halo = useMemo(() => {
    const ids = [...sim.bodies.keys()];
    const pos = new Float32Array(ids.length * 3);
    const sizeAttr = new Float32Array(ids.length);
    const col = new Float32Array(ids.length * 3);
    const rng = mulberry32(7);
    ids.forEach((id, i) => {
      const body = sim.bodies.get(id);
      const sizeMap = { lane: 26, dd: 20, gateway: 13, child: 8, grand: 4.5 };
      sizeAttr[i] = (sizeMap[body.kind] ?? 3) * (0.8 + rng() * 0.5);
      const c =
        body.kind === "lane" || body.kind === "dd"
          ? GOLD_LIGHT
          : body.kind === "gateway"
            ? GOLD
            : body.kind === "child"
              ? WARM_WHITE
              : body.kind === "grand"
                ? GOLD_LIGHT
                : pickWebColor(rng);
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aSize", new THREE.BufferAttribute(sizeAttr, 1));
    geo.setAttribute("aColor", new THREE.BufferAttribute(col, 3));
    const mat = new THREE.ShaderMaterial({
      uniforms: { uTex: { value: glowTexture() } },
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
    return { ids, geo, mat };
  }, [sim]);

  const pulseGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(PULSES * 3), 3),
    );
    return geo;
  }, []);

  const pulseMat = useMemo(
    () =>
      new THREE.PointsMaterial({
        map: glowTexture(),
        color: GOLD_LIGHT,
        size: 1.6,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      }),
    [],
  );

  const lineGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(
        new Float32Array(sim.edges.length * SEG * 2 * 3),
        3,
      ).setUsage(THREE.DynamicDrawUsage),
    );
    geo.setAttribute(
      "color",
      new THREE.BufferAttribute(
        new Float32Array(sim.edges.length * SEG * 2 * 3),
        3,
      ).setUsage(THREE.DynamicDrawUsage),
    );
    return geo;
  }, [sim]);

  // base colors of instanced cores
  const instanceBase = useMemo(
    () =>
      sim.semantic.map((node) => {
        if (node.kind === "lane" || node.kind === "dd") return GOLD_LIGHT.clone();
        if (node.kind === "gateway") return GOLD.clone();
        if (node.kind === "child") return WARM_WHITE.clone();
        return GOLD_LIGHT.clone();
      }),
    [sim],
  );

  // DOM overlay registry (plates live outside the Canvas)
  useEffect(() => {
    overlay.current.clear();
    overlayRoot.current
      ?.querySelectorAll("[data-oid]")
      .forEach((el) => overlay.current.set(el.getAttribute("data-oid"), el));
  }, [overlayRoot, lanes]);

  function curvePoint(edge, t, out) {
    const a = sim.bodies.get(edge.a).cur;
    const b = sim.bodies.get(edge.b).cur;
    const wob = Math.sin(sim.t * 0.5 + edge.wobblePhase) * edge.wobbleAmp;
    const it = 1 - t;
    out.set(
      it * it * a.x + 2 * it * t * edge.ctrl.x + t * t * b.x,
      it * it * a.y + 2 * it * t * (edge.ctrl.y + wob) + t * t * b.y,
      it * it * a.z + 2 * it * t * edge.ctrl.z + t * t * b.z,
    );
    return out;
  }

  function placeOverlay(id, body, opacity, scale) {
    const el = overlay.current.get(id);
    if (!el) return;
    if (!el.dataset.bound) {
      el.style.left = "0px";
      el.style.top = "0px";
      el.dataset.bound = "1";
    }
    proj.copy(body.cur).project(camera);
    let x = ((proj.x + 1) / 2) * size.width;
    let y = ((1 - proj.y) / 2) * size.height;
    x = Math.min(Math.max(x, 90), size.width - 110);
    y = Math.min(Math.max(y, 42), size.height - 40);
    el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -50%) scale(${scale.toFixed(3)})`;
    el.style.opacity = opacity.toFixed(2);
  }

  function setInstanceGlow(index, on) {
    const mesh = instRef.current;
    if (!mesh) return;
    const body = sim.bodies.get(sim.semantic[index].id);
    const e = visibilityOf(body);
    const base = instanceBase[index];
    const boost = on ? 1.9 : 1;
    mesh.setColorAt(
      index,
      tmpColor.setRGB(base.r * e * boost, base.g * e * boost, base.b * e * boost),
    );
    mesh.instanceColor.needsUpdate = true;
  }

  function visibilityOf(body) {
    if (body.kind === "gateway" || body.kind === "child") {
      return sim.springs[body.laneId].e;
    }
    if (body.kind === "grand") {
      return body.childId === focusedChildRef.current ? sim.deepSpring.e : 0;
    }
    return 1;
  }

  useFrame((state, delta) => {
    const dt = Math.min(0.05, delta);
    sim.t += dt;
    const t = sim.t;
    const active = activeLaneRef.current;
    const focused = focusedChildRef.current;

    // keep the %-layout faithful when the canvas aspect changes
    const aspect = size.width / size.height;
    if (Math.abs(aspect - sim.aspect) > 0.01) sim.applyAspect(aspect);

    // expansion springs (delta-integrated)
    lanes.forEach((lane) => {
      const s = sim.springs[lane.id];
      const target = active === lane.id ? 1 : 0;
      s.v += (target - s.e) * 34 * dt;
      s.v *= Math.exp(-7.5 * dt);
      s.e += s.v * dt;
    });
    const deepTarget = focused ? 1 : 0;
    sim.deepSpring.v += (deepTarget - sim.deepSpring.e) * 34 * dt;
    sim.deepSpring.v *= Math.exp(-7.5 * dt);
    sim.deepSpring.e += sim.deepSpring.v * dt;

    // bodies: drift + spring home + soft pointer repulsion
    sim.bodies.forEach((body) => {
      let tx = body.base.x;
      let ty = body.base.y;
      let tz = body.base.z;
      if (body.kind === "gateway" || body.kind === "child") {
        const parent = sim.bodies.get(
          body.kind === "gateway" ? body.laneId : body.gatewayId,
        );
        const e = sim.springs[body.laneId].e;
        tx = parent.cur.x + (body.base.x - parent.cur.x) * e;
        ty = parent.cur.y + (body.base.y - parent.cur.y) * e;
        tz = parent.cur.z + (body.base.z - parent.cur.z) * e;
      } else if (body.kind === "grand") {
        const parent = sim.bodies.get(body.childId);
        const e = body.childId === focused ? sim.deepSpring.e : 0;
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
      if (sim.mouse.has) {
        const dx = body.cur.x - sim.mouse.world.x;
        const dy = body.cur.y - sim.mouse.world.y;
        const dist = Math.hypot(dx, dy);
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

    // camera: glide to the lane, dive onto the focused child
    if (focused && sim.bodies.get(focused)) {
      const fw = sim.bodies.get(focused).cur;
      sim.camTarget.set(fw.x * 0.45, fw.y * 0.45, 27);
      sim.lookTarget.set(fw.x * 0.72, fw.y * 0.72, 0);
    } else if (active && sim.bodies.get(active)) {
      const lw = sim.bodies.get(active).cur;
      sim.camTarget.set(lw.x * 0.3, lw.y * 0.3, 31.5);
      sim.lookTarget.set(lw.x * 0.62, lw.y * 0.62, 0);
    } else {
      sim.camTarget.set(0, 0, 44);
      sim.lookTarget.set(0, 0, 0);
    }
    const k = 1 - Math.exp(-2 * dt);
    camera.position.lerp(sim.camTarget, k);
    sim.lookCur.lerp(sim.lookTarget, k);
    camera.lookAt(sim.lookCur);

    // halo points
    const posAttr = halo.geo.attributes.position;
    const colAttr = halo.geo.attributes.aColor;
    halo.ids.forEach((id, i) => {
      const body = sim.bodies.get(id);
      posAttr.setXYZ(i, body.cur.x, body.cur.y, body.cur.z);
      const e = visibilityOf(body);
      if (body.kind === "gateway" || body.kind === "child" || body.kind === "grand") {
        const base = pickHaloBase(body.kind);
        colAttr.setXYZ(i, base.r * e, base.g * e, base.b * e);
      }
    });
    posAttr.needsUpdate = true;
    colAttr.needsUpdate = true;

    // instanced cores
    const mesh = instRef.current;
    if (mesh) {
      sim.semantic.forEach((node, i) => {
        const body = sim.bodies.get(node.id);
        const e = visibilityOf(body);
        dummy.position.copy(body.cur);
        dummy.scale.setScalar(Math.max(0.0001, node.size * e));
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
        if (i !== hovered.current) {
          const base = instanceBase[i];
          mesh.setColorAt(i, tmpColor.setRGB(base.r * e, base.g * e, base.b * e));
        }
      });
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    }

    // edges — rebuilt at ~30fps (visual wobble does not need 60)
    sim.lineAcc += dt;
    if (sim.lineAcc >= 1 / 30) {
      sim.lineAcc = 0;
      const pos = lineGeo.attributes.position;
      const col = lineGeo.attributes.color;
      const deepFade = focused ? 0.35 : 1;
      let v = 0;
      sim.edges.forEach((edge) => {
        let bright;
        if (edge.kind === "web") {
          bright =
            edge.brightness *
            (0.75 + Math.sin(t * 0.6 + edge.wobblePhase) * 0.25) *
            deepFade;
        } else if (edge.kind === "system") {
          bright = (0.25 + sim.springs[edge.laneId].e * 0.65) * deepFade;
        } else if (edge.kind === "branch") {
          bright = edge.brightness * sim.springs[edge.laneId].e;
        } else {
          bright =
            edge.brightness * (edge.childId === focused ? sim.deepSpring.e : 0);
        }
        for (let s = 0; s < SEG; s += 1) {
          curvePoint(edge, s / SEG, tmp);
          pos.setXYZ(v, tmp.x, tmp.y, tmp.z);
          col.setXYZ(v, edge.color.r * bright, edge.color.g * bright, edge.color.b * bright);
          v += 1;
          curvePoint(edge, (s + 1) / SEG, tmp);
          pos.setXYZ(v, tmp.x, tmp.y, tmp.z);
          col.setXYZ(v, edge.color.r * bright, edge.color.g * bright, edge.color.b * bright);
          v += 1;
        }
      });
      pos.needsUpdate = true;
      col.needsUpdate = true;
    }

    // pulses
    const pulsePos = pulseGeo.attributes.position;
    sim.pulses.forEach((pulse, i) => {
      pulse.t += pulse.speed * dt * 8;
      if (pulse.t >= 1) {
        pulse.t = 0;
        pulse.edge = Math.floor(Math.random() * sim.edges.length);
      }
      curvePoint(sim.edges[pulse.edge], pulse.t, tmp);
      pulsePos.setXYZ(i, tmp.x, tmp.y, tmp.z);
    });
    pulsePos.needsUpdate = true;

    // DOM overlay follows the 3D bodies
    sim.bodies.forEach((body) => {
      if (!overlay.current.has(body.id)) return;
      if (body.kind === "lane") {
        const e = sim.springs[body.laneId].e;
        const dim = active !== null && active !== body.laneId;
        const deepDim = focused ? 0.3 : 1;
        placeOverlay(
          body.id,
          body,
          (dim ? 0.35 : 1) * body.depthOpacity * deepDim,
          body.depth * (1 + 0.1 * e),
        );
      } else if (body.kind === "gateway" || body.kind === "child") {
        const e = sim.springs[body.laneId].e;
        const focusFade = focused && body.id !== focused ? 0.45 : 1;
        placeOverlay(body.id, body, e * focusFade, 0.7 + 0.3 * e);
      } else if (body.kind === "grand") {
        const e = body.childId === focused ? sim.deepSpring.e : 0;
        placeOverlay(body.id, body, e, 0.8 + 0.2 * e);
      } else if (body.kind === "dd") {
        placeOverlay(body.id, body, focused ? 0.4 : 1, 1);
      }
    });
  });

  function pickHaloBase(kind) {
    if (kind === "gateway") return GOLD;
    if (kind === "child") return WARM_WHITE;
    return GOLD_LIGHT;
  }

  // pointer -> world plane (z=0); direct DOM listener, no React state
  useEffect(() => {
    const el = gl.domElement;
    const onMove = (event) => {
      const r = el.getBoundingClientRect();
      const nx = ((event.clientX - r.left) / r.width) * 2 - 1;
      const ny = -((event.clientY - r.top) / r.height) * 2 + 1;
      tmp.set(nx, ny, 0.5).unproject(camera);
      const dir = tmp.sub(camera.position).normalize();
      const tt = -camera.position.z / dir.z;
      sim.mouse.world.set(
        camera.position.x + dir.x * tt,
        camera.position.y + dir.y * tt,
        0,
      );
      sim.mouse.has = true;
    };
    const onLeave = () => {
      sim.mouse.has = false;
    };
    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gl, camera, sim]);

  // initial instance matrices (no first-frame flash at the origin)
  useEffect(() => {
    const mesh = instRef.current;
    if (!mesh) return;
    sim.semantic.forEach((node, i) => {
      const body = sim.bodies.get(node.id);
      dummy.position.copy(body.cur);
      dummy.scale.setScalar(node.kind === "lane" || node.kind === "dd" ? node.size : 0.0001);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      mesh.setColorAt(i, tmpColor.copy(instanceBase[i]));
    });
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sim]);

  return (
    <>
      <fogExp2 attach="fog" args={["#0c0913", 0.02]} />
      <points geometry={halo.geo} material={halo.mat} frustumCulled={false} />
      <points geometry={pulseGeo} material={pulseMat} frustumCulled={false} />
      <lineSegments geometry={lineGeo} frustumCulled={false}>
        <lineBasicMaterial
          vertexColors
          transparent
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
      <Instances
        ref={instRef}
        limit={sim.semantic.length}
        frustumCulled={false}
        onPointerOver={(e) => {
          e.stopPropagation();
          hovered.current = e.instanceId;
          setInstanceGlow(e.instanceId, true);
        }}
        onPointerOut={() => {
          const id = hovered.current;
          hovered.current = -1;
          if (id >= 0) setInstanceGlow(id, false);
        }}
      >
        <sphereGeometry args={[0.5, 12, 12]} />
        <meshBasicMaterial toneMapped={false} />
        {sim.semantic.map((node) => (
          <Instance key={`${node.kind}-${node.id}`} />
        ))}
      </Instances>
    </>
  );
}
