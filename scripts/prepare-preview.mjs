// Post-build preview adjustments. Runs after `npm run build` in the preview
// workflow only. Works exclusively on dist/ — it never reads or writes
// src/, public/ or any path given from outside. Any failure exits non-zero
// so the workflow stops before rsync.
import {
  existsSync,
  readFileSync,
  readdirSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const distDir = fileURLToPath(new URL("../dist/", import.meta.url));

function fail(message) {
  console.error(`prepare-preview: ERROR: ${message}`);
  process.exit(1);
}

// Recursive HTML collection: every generated page must carry the preview
// markers, not just the home page. Recursion is bounded by the build output
// itself (dist/ contains only files Astro just generated).
function collectHtmlFiles(dir) {
  const found = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...collectHtmlFiles(full));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      found.push(full);
    }
  }
  return found;
}

if (!existsSync(distDir)) {
  fail(`dist/ not found at ${distDir} — run "npm run build" first.`);
}

// 1. Preview blocks all crawlers at the server level, regardless of meta.
writeFileSync(
  join(distDir, "robots.txt"),
  "User-agent: *\nDisallow: /\n",
  "utf8",
);
console.log(
  "prepare-preview: wrote dist/robots.txt (User-agent: * / Disallow: /)",
);

// 2. Preview must not advertise any sitemap (Astro emits them at dist root).
let removedSitemaps = 0;
for (const entry of readdirSync(distDir)) {
  if (/^sitemap(-.*)?\.xml$/.test(entry)) {
    unlinkSync(join(distDir, entry));
    removedSitemaps += 1;
    console.log(`prepare-preview: removed dist/${entry}`);
  }
}
if (removedSitemaps === 0) {
  console.log("prepare-preview: no sitemap files found (nothing to remove)");
}

// 3. Entry page must exist.
const indexPath = join(distDir, "index.html");
if (!existsSync(indexPath)) {
  fail("dist/index.html is missing — build output is incomplete.");
}

// 4. Every HTML page must carry: noindex robots meta, the machine-readable
// environment marker and the preview banner hook.
const htmlFiles = collectHtmlFiles(distDir);
if (htmlFiles.length === 0) {
  fail("dist/ contains no HTML files — build output is incomplete.");
}
for (const file of htmlFiles) {
  const name = relative(distDir, file);
  const html = readFileSync(file, "utf8");
  if (!html.includes("noindex")) {
    fail(
      `dist/${name} has no "noindex" — check BaseLayout PUBLIC_SITE_ENV wiring.`,
    );
  }
  if (!html.includes('data-site-env="preview"')) {
    fail(
      `dist/${name} has no data-site-env="preview" marker — build ran without PUBLIC_SITE_ENV=preview?`,
    );
  }
  if (!html.includes("data-preview-banner")) {
    fail(
      `dist/${name} has no preview banner marker — check PreviewBanner render in BaseLayout.`,
    );
  }
}

console.log(
  `prepare-preview: verified ${htmlFiles.length} HTML file(s); dist/ is ready for preview deploy.`,
);
