import { buildMetadata } from "./pageMetadata";
import { JsonLd, BreadcrumbJsonLd } from "./JsonLd";
import seoBlogData from "../data/seoBlogData.json";

const SITE = "https://www.adiance.com";
const DEFAULT_OG = `${SITE}/images/Logo.webp`;

function getEntry(slug) {
  return seoBlogData?.blog?.[slug] || null;
}

function toIsoDate(dateString) {
  if (!dateString) return undefined;
  const ts = Date.parse(dateString);
  return Number.isFinite(ts) ? new Date(ts).toISOString() : undefined;
}

export function legacyBlogMetadata(slug) {
  const entry = getEntry(slug);
  const seo = entry?.seo || {};
  const hero = entry?.hero || {};
  const path = `/blog/${slug}`;
  return buildMetadata(path, {
    title: seo.title || hero.title,
    description: seo.description || hero.subtitle,
    keywords: seo.keywords,
    canonical: path,
    ogImage: entry?.ogImage || DEFAULT_OG,
  });
}

export function LegacyBlogSchemas({ slug }) {
  const entry = getEntry(slug);
  if (!entry) return null;
  const seo = entry.seo || {};
  const hero = entry.hero || {};
  const url = `${SITE}/blog/${slug}`;
  const datePublished = toIsoDate(hero.publishDate);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: seo.title || hero.title,
    description: seo.description || hero.subtitle,
    image: entry.ogImage || DEFAULT_OG,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "Adiance Technologies" },
    publisher: {
      "@type": "Organization",
      name: "Adiance Technologies",
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/images/Logo.webp` },
    },
    datePublished,
    dateModified: datePublished,
    inLanguage: "en-US",
    articleSection: hero.category,
  };

  return (
    <>
      <JsonLd data={schema} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: seo.title || hero.title || slug, url: `/blog/${slug}` },
        ]}
      />
    </>
  );
}
