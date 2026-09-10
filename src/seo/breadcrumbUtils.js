/**
 * Shared breadcrumb-building logic used by BOTH the BreadcrumbList JSON-LD
 * (PageSchema.jsx) and the visible breadcrumb nav (Breadcrumbs.jsx), so the
 * two can never drift apart — checklist row 59 (2026-09-10): the site had a
 * BreadcrumbList schema with no matching visible UI; this file is the single
 * source of truth both now read from.
 */

const SITE = "https://www.adiance.com";

export function prettifySegment(seg) {
  return seg
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\bCctv\b/g, "CCTV")
    .replace(/\bOem\b/g, "OEM")
    .replace(/\bOdm\b/g, "ODM")
    .replace(/\bJdm\b/g, "JDM")
    .replace(/\bAi\b/g, "AI")
    .replace(/\bNdaa\b/g, "NDAA")
    .replace(/\bGdpr\b/g, "GDPR")
    .replace(/\bAnpr\b/g, "ANPR")
    .replace(/\bLpr\b/g, "LPR")
    .replace(/\bPtz\b/g, "PTZ")
    .replace(/\bUsa\b/g, "USA")
    .replace(/\bUk\b/g, "UK")
    .replace(/\bUae\b/g, "UAE")
    .replace(/\bSoc\b/g, "SoC");
}

/** Returns [{name, url}] from Home down to the current page, url relative (e.g. "/about"). */
export function buildBreadcrumbs(path) {
  const items = [{ name: "Home", url: "/" }];
  if (path === "/" || !path) return items;

  const segments = path.split("/").filter(Boolean);
  let url = "";
  segments.forEach((seg) => {
    url += "/" + seg;
    items.push({ name: prettifySegment(seg), url });
  });
  return items;
}

export { SITE };
