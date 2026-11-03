// biz-field: lightweight 2D canvas particle field for service-page heroes.
// Gold/violet dust drifting slowly; points near the cursor glow and link
// into a small constellation. Transform-free, one rAF loop, paused offscreen
// and on hidden tabs; reduced-motion renders one static frame.
export function initBizField(canvas) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(pointer: fine)").matches;

  let width = 0;
  let height = 0;
  let raf = null;
  let visible = true;
  const DPR = Math.min(window.devicePixelRatio || 1, 1.75);
  const mouse = { x: -9999, y: -9999 };

  const GOLD = [242, 169, 75];
  const VIOLET = [167, 139, 250];
  const CYAN = [127, 195, 240];
  const pick = (r) => (r < 0.62 ? GOLD : r < 0.85 ? VIOLET : CYAN);

  let points = [];

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = width * DPR;
    canvas.height = height * DPR;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    const count = Math.min(90, Math.floor((width * height) / 16000));
    points = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.16,
      vy: (Math.random() - 0.5) * 0.16,
      r: 1 + Math.random() * 2.2,
      c: pick(Math.random()),
      phase: Math.random() * Math.PI * 2 + i,
    }));
  }

  function draw(t) {
    ctx.clearRect(0, 0, width, height);
    for (const p of points) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      if (p.y > height + 10) p.y = -10;
      const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
      const near = Math.max(0, 1 - dm / 220);
      const pulse = 0.5 + Math.sin(t / 900 + p.phase) * 0.25;
      const alpha = 0.25 + pulse * 0.3 + near * 0.45;
      const radius = p.r + near * 2.2;
      ctx.beginPath();
      ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.c[0]},${p.c[1]},${p.c[2]},${alpha.toFixed(3)})`;
      ctx.fill();
    }
    // constellation links near the cursor
    if (fine) {
      for (let i = 0; i < points.length; i += 1) {
        const a = points[i];
        if (Math.hypot(a.x - mouse.x, a.y - mouse.y) > 220) continue;
        for (let j = i + 1; j < points.length; j += 1) {
          const b = points[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            const db = Math.hypot(b.x - mouse.x, b.y - mouse.y);
            if (db > 220) continue;
            const strength = (1 - d / 120) * 0.35;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${GOLD[0]},${GOLD[1]},${GOLD[2]},${strength.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    }
  }

  function loop(t) {
    if (!visible) {
      raf = null;
      return;
    }
    draw(t);
    raf = requestAnimationFrame(loop);
  }

  function start() {
    if (raf === null && visible && !reduced) raf = requestAnimationFrame(loop);
  }
  function stop() {
    if (raf !== null) {
      cancelAnimationFrame(raf);
      raf = null;
    }
  }

  const host = canvas.parentElement;
  host.addEventListener("pointermove", (event) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
  });
  host.addEventListener("pointerleave", () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });
  window.addEventListener("resize", () => {
    resize();
    if (reduced) draw(0);
  });
  const io = new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    },
    { threshold: 0.02 },
  );
  io.observe(host);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else start();
  });

  resize();
  if (reduced) {
    draw(0);
  } else {
    start();
  }
}

// Spotlight cards: a soft lane-colored glow follows the cursor inside each
// [data-spot] element (CSS vars --sx/--sy). Transform-free, cheap.
export function initSpotlight() {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  document.querySelectorAll("[data-spot]").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--sx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--sy", `${event.clientY - rect.top}px`);
    });
  });
}

// Magnetic buttons: [data-magnetic] elements lean toward the cursor.
export function initMagnetic() {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll("[data-magnetic]").forEach((el) => {
    el.addEventListener("mousemove", (event) => {
      const rect = el.getBoundingClientRect();
      const dx = (event.clientX - rect.left) / rect.width - 0.5;
      const dy = (event.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `translate(${(dx * 10).toFixed(1)}px, ${(dy * 6).toFixed(1)}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  });
}

// Scroll-activated process steps: [data-step] elements get .is-on as they
// pass 65% of the viewport — the process line "charges" downward.
export function initSteps() {
  const steps = document.querySelectorAll("[data-step]");
  if (!steps.length || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-on");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 },
  );
  steps.forEach((step) => io.observe(step));
}

export function initBiz(root = document) {
  root.querySelectorAll("canvas[data-biz-field]").forEach(initBizField);
  initSpotlight();
  initMagnetic();
  initSteps();
}
