// Generates one thin Astro page per service detail entry:
// src/pages/uslugi/<parent>/<slug>.astro -> ServiceDetail with the matching
// data object. Re-run after editing src/data/service-details/*.
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { serviceDetails } from "../src/data/service-details/index.js";

const pagesRoot = fileURLToPath(new URL("../src/pages/", import.meta.url));
let count = 0;

for (const detail of serviceDetails) {
  const dir = `${pagesRoot}uslugi/${detail.parent}/`;
  mkdirSync(dir, { recursive: true });
  const file = `${dir}${detail.slug}.astro`;
  const content = `---
import ServiceDetail from "../../../components/hub/ServiceDetail.astro";
import { findServiceDetail } from "../../../data/service-details/index.js";
---

<ServiceDetail detail={findServiceDetail("${detail.parent}", "${detail.slug}")} />
`;
  writeFileSync(file, content);
  count += 1;
}

console.log(`generated ${count} service detail pages`);
