// Real-mouse click test across viewports and lanes.
import { chromium } from "playwright";

const browser = await chromium.launch({
  headless: true,
  args: ["--use-angle=swiftshader"],
});

for (const vp of [
  { width: 1366, height: 768 },
  { width: 1920, height: 1080 },
]) {
  const page = await browser.newPage({ viewport: vp });
  const errors = [];
  page.on("pageerror", (err) => errors.push(String(err)));
  await page.goto("http://localhost:4321/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2200);

  for (const [lane, child] of [
    ["business", "razrabotka"],
    ["ai", "navyki-agentov"],
  ]) {
    const lb = await page.locator(`#neural-lane-${lane}`).boundingBox();
    await page.mouse.move(lb.x + lb.width / 2, lb.y + lb.height / 2, { steps: 5 });
    await page.waitForTimeout(1200);
    const pb = await page.locator(`[data-pill="${child}"]`).boundingBox();
    const hit = await page.evaluate(
      ([x, y]) => {
        const el = document.elementFromPoint(x, y);
        return el ? `${el.tagName}.${el.className}`.slice(0, 50) : "none";
      },
      [pb.x + pb.width / 2, pb.y + pb.height / 2],
    );
    await page.mouse.click(pb.x + pb.width / 2, pb.y + pb.height / 2);
    await page.waitForTimeout(900);
    const s = await page.evaluate(() => ({
      depth: document.querySelector(".neural")?.getAttribute("data-depth"),
      active: document.querySelector(".neural")?.getAttribute("data-active-lane"),
    }));
    console.log(`${vp.width}x${vp.height} ${lane}/${child}: hit=${hit} ->`, JSON.stringify(s));
    // step back for next iteration
    await page.evaluate(() => {
      document.querySelector(".neural-catcher")?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    await page.waitForTimeout(600);
    await page.evaluate(() => {
      document.querySelector(".neural-catcher")?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    await page.waitForTimeout(400);
  }
  console.log(`${vp.width} errors:`, errors.length ? errors : "none");
  await page.close();
}
await browser.close();
