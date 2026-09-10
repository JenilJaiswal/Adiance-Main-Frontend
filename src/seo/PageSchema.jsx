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
import { buildBreadcrumbs } from "./breadcrumbUtils";
import { Breadcrumbs } from "./Breadcrumbs";

const SITE = "https://www.adiance.com";

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
 * Server component. Drops BreadcrumbList + WebPage JSON-LD into the page,
 * AND (checklist row 59, 2026-09-10) renders the matching visible breadcrumb
 * nav via <Breadcrumbs> — so every one of the ~150 existing call sites for
 * <PageSchema> picks up the visible trail automatically, with no per-page
 * changes needed. Pass hideBreadcrumbs to suppress the visible nav on a page
 * that already has its own (e.g. if a future page builds a custom one).
 * If `landingSlug` is supplied and matches an entry in seoLandingData.json,
 * a FAQPage block is also emitted.
 */
export function PageSchema({ path, title, description, landingSlug, hideBreadcrumbs = false }) {
  if (!path) return null;
  const faq = landingSlug ? faqSchemaFromLanding(landingSlug) : null;
  return (
    <>
      <JsonLd data={webPageSchema(path, title, description)} />
      <JsonLd data={breadcrumbSchema(path)} />
      {faq ? <JsonLd data={faq} /> : null}
      {!hideBreadcrumbs ? <Breadcrumbs path={path} /> : null}
    </>
  );
}
