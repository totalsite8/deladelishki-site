// Aggregator for service detail content (one file per direction).
import { details as razrabotka } from "./razrabotka.js";
import { details as dizain } from "./dizain.js";
import { details as marketing } from "./marketing.js";
import { details as ai } from "./ai.js";
import { details as fotosyomka } from "./fotosyomka.js";
import { details as obuchenie } from "./obuchenie.js";

export const serviceDetails = [
  ...razrabotka,
  ...dizain,
  ...marketing,
  ...ai,
  ...fotosyomka,
  ...obuchenie,
];

export function findServiceDetail(parent, slug) {
  return serviceDetails.find(
    (item) => item.parent === parent && item.slug === slug,
  );
}

export function detailsForParent(parent) {
  return serviceDetails.filter((item) => item.parent === parent);
}

export default serviceDetails;
