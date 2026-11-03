// Full scene diagnostics via synthetic events (nodes never sit still).
import { chromium } from "playwright";

const browser = await chromium.launch({
  headless: true,
  args: ["--use-angle=swiftshader"],
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", (err) => errors.push(String(err)));
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});

await page.goto("http://localhost:4321/", { waitUntil: "networkidle" });
await page.waitForTimeout(2500);

const state = () =>
  page.evaluate(() => ({
    depth: document.querySelector(".neural")?.getAttribute("data-depth"),
    active: document.querySelector(".neural")?.getAttribute("data-active-lane"),
  }));

const hover = (sel) =>
  page.evaluate((s) => {
    document
      .querySelector(s)
      ?.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
  }, sel);

const click = (sel) =>
  page.evaluate((s) => {
    document
      .querySelector(s)
      ?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  }, sel);

console.log("engine:", await page.evaluate(() => document.querySelector(".neural")?.getAttribute("data-engine")));

for (const lane of ["business", "learning", "ai"]) {
  await hover(`#neural-lane-${lane}`);
  await page.waitForTimeout(1100);
  const s = await state();
  const probe = await page.evaluate((id) => {
    const el = document.querySelector(`[data-oid="${id}"]`);
    return el ? el.style.opacity : "missing";
  }, lane === "business" ? "razrabotka" : lane === "learning" ? "blog" : "navyki-agentov");
  console.log(`lane ${lane}:`, JSON.stringify(s), "child opacity:", probe);
}

// depth 2
await hover("#neural-lane-business");
await page.waitForTimeout(800);
await click('[data-pill="razrabotka"]');
await page.waitForTimeout(1400);
console.log("depth2:", JSON.stringify(await state()));
const grand = await page.evaluate(() => {
  const el = document.querySelector('[data-oid="razrabotka-1"]');
  const btn = el?.querySelector("button");
  const term = document.querySelector(".neural-term--child");
  return {
    grandOpacity: el?.style.opacity,
    grandBlur: btn ? getComputedStyle(btn).filter : "?",
    termOpacity: term ? getComputedStyle(term).opacity : "none",
    grandCount: document.querySelectorAll(".neural-node--grand.is-live").length,
  };
});
console.log("depth2 details:", JSON.stringify(grand));

// step back by clicking empty space (the catcher element)
const back1 = await page.evaluate(() => {
  document.querySelector(".neural-catcher")?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  return true;
});
await page.waitForTimeout(900);
console.log("empty click 1:", JSON.stringify(await state()), back1);
await page.evaluate(() => {
  document.querySelector(".neural-catcher")?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
});
await page.waitForTimeout(900);
console.log("empty click 2:", JSON.stringify(await state()));

// Escape path
await hover("#neural-lane-ai");
await page.waitForTimeout(700);
await page.keyboard.press("Escape");
await page.waitForTimeout(500);
console.log("Escape:", JSON.stringify(await state()));

console.log("JS errors:", errors.length ? errors : "none");

// viewport bounds + grand overlap audit
await hover("#neural-lane-ai");
await page.waitForTimeout(1100);
const bounds = await page.evaluate(() => {
  const out = [];
  document
    .querySelectorAll('[data-lane="ai"] .neural-node__button, #neural-lane-ai')
    .forEach((el) => {
      const r = el.getBoundingClientRect();
      out.push({
        el: el.textContent.trim().slice(0, 18),
        off: r.left < 0 || r.right > innerWidth || r.top < 0 || r.bottom > innerHeight,
        rect: [r.left | 0, r.top | 0, r.right | 0, r.bottom | 0],
      });
    });
  return out;
});
console.log("ai bounds:", JSON.stringify(bounds));

await hover("#neural-lane-business");
await page.waitForTimeout(800);
await click('[data-pill="razrabotka"]');
await page.waitForTimeout(1500);
const overlaps = await page.evaluate(() => {
  const rects = [...document.querySelectorAll(".neural-node--grand.is-live .neural-node__button")].map(
    (el) => el.getBoundingClientRect(),
  );
  const bad = [];
  for (let i = 0; i < rects.length; i += 1) {
    for (let j = i + 1; j < rects.length; j += 1) {
      const a = rects[i];
      const b = rects[j];
      if (a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top) {
        bad.push([i, j]);
      }
    }
  }
  return { count: rects.length, overlapping: bad };
});
console.log("grands overlap:", JSON.stringify(overlaps));
await browser.close();
