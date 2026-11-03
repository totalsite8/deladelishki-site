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
import { Canvas } from "@react-three/fiber";
import { DD_POS, LANE_LAYOUT } from "./neural-layout.js";
import NeuralScene from "./NeuralScene.jsx";
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


const WEB_QUERY = "(min-width: 48rem) and (pointer: fine)";


export default function NeuralWeb({
  lanes,
  dd,
  ddPhoto,
  media,
  statusLabels,
  copy,
}) {
  const rootRef = useRef(null);
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
  /* ------------------------- WebGL engine (R3F) ------------------------- */

  // Engine choice: R3F Canvas only for desktop + fine pointer + full motion
  // + actual WebGL support; everyone else gets the static/mobile/fallback
  // presentations. The Canvas mounts post-hydration only (engine starts as
  // null), so SSR never touches WebGL.
  useEffect(() => {
    if (reduceMotion || !window.matchMedia(WEB_QUERY).matches) {
      setEngine('static');
      return;
    }
    const probe = document.createElement('canvas');
    const gl = probe.getContext('webgl2') || probe.getContext('webgl');
    setEngine(gl ? 'webgl' : 'static');
    if (gl) rootRef.current?.classList.add('neural--webgl');
    return () => rootRef.current?.classList.remove('neural--webgl');
  }, [reduceMotion]);

  // Pause rendering offscreen / on hidden tabs (frameloop control).
  const [inView, setInView] = useState(true);
  useEffect(() => {
    if (!rootRef.current) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.02 },
    );
    io.observe(rootRef.current);
    const onVis = () => setInView(!document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

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
        {engine === "webgl" && (
          <div className="neural-web__gl">
            <Canvas
              dpr={[1, 2]}
              performance={{ min: 0.5 }}
              frameloop={inView ? "always" : "never"}
              camera={{ fov: 50, position: [0, 0, 44], near: 0.1, far: 200 }}
              style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
              gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
              aria-hidden="true"
            >
              <NeuralScene
                lanes={lanes}
                activeLaneRef={activeLaneRef}
                focusedChildRef={focusedChildRef}
                overlayRoot={rootRef}
              />
            </Canvas>
          </div>
        )}

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
                  <p className="neural-mobile__sys">
                    SYS://ЛИНИЯ-{lane.index}
                  </p>
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
