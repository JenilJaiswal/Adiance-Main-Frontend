/**
 * Auto-emit BreadcrumbList + WebPage JSON-LD for any path. Server-only.
 *
 * Usage in app/<route>/page.jsx:
 *
 *   import { PageSchema } from "@/seo/PageSchema";
 *   ...
 *   <PageSchema path="/about" title="About Us" />
 *
 * For SEO landing pages with FAQ data in seoLandingData.json:
 *
 *   <PageSchema path="/alternative-to-hikvision" landingSlug="alternative-to-hikvision" />
 */

import { JsonLd } from "./JsonLd";
import { CATALOG } from "./pageMetadata";
import landingData from "../data/seoLandingData.json";

const SITE = "https://www.adiance.com";

function prettifySegment(seg) {
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

function buildBreadcrumbs(path) {
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

function breadcrumbSchema(path) {
  const items = buildBreadcrumbs(path);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : `${SITE}${it.url}`,
    })),
  };
}

function webPageSchema(path, title, description) {
  const cfg = CATALOG[path] || {};
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title || cfg.title,
    description: description || cfg.description,
    url: `${SITE}${path}`,
    inLanguage: "en-US",
    isPartOf: { "@type": "WebSite", url: SITE, name: "Adiance Technologies" },
    publisher: {
      "@type": "Organization",
      name: "Adiance Technologies",
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/images/Logo.webp` },
    },
  };
}

function faqSchemaFromLanding(slug) {
  const data = landingData[slug];
  if (!data?.faq?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/**
 * Server component. Drops BreadcrumbList + WebPage JSON-LD into the page.
 * If `landingSlug` is supplied and matches an entry in seoLandingData.json,
 * a FAQPage block is also emitted.
 */
export function PageSchema({ path, title, description, landingSlug }) {
  if (!path) return null;
  const faq = landingSlug ? faqSchemaFromLanding(landingSlug) : null;
  return (
    <>
      <JsonLd data={webPageSchema(path, title, description)} />
      <JsonLd data={breadcrumbSchema(path)} />
      {faq ? <JsonLd data={faq} /> : null}
    </>
  );
}
