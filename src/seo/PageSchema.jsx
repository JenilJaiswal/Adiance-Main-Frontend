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
 * Server component. Drops BreadcrumbList + WebPage JSON-LD into the page.
 * If `landingSlug` is supplied and matches an entry in seoLandingData.json,
 * a FAQPage block is also emitted.
 *
 * The matching VISIBLE breadcrumb nav (checklist row 59, 2026-09-10) is
 * rendered by <Header> instead of here. Every page mounts <PageSchema> after
 * <ClientPage>, so rendering the visible trail here put it after the Footer;
 * <Header> is the position this codebase already established for it. Both
 * still read the same buildBreadcrumbs() below, so the schema and the visible
 * trail cannot drift apart.
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
