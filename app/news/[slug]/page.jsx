import { notFound } from "next/navigation";
import { buildMetadata } from "@/seo/pageMetadata";
import { JsonLd, BreadcrumbJsonLd } from "@/seo/JsonLd";
import ClientPage from "./ClientPage";

const SITE = "https://www.adiance.com";
const BACKEND =
  process.env.NEXT_PUBLIC_BACKEND_URL || "https://backend.adiance.com";

function titleFromSlug(slug) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

/** Flatten the CMS rich-text shape into plain text. */
function richText(value) {
  if (!value) return "";
  if (typeof value === "string") return value.replace(/\s+/g, " ").trim();
  const nodes = Array.isArray(value) ? value : [value];
  return nodes
    .map((node) =>
      Array.isArray(node?.children)
        ? node.children.map((child) => clean(child?.text)).join("")
        : clean(node?.text),
    )
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function summarise(text, max = 155) {
  if (!text) return "";
  if (text.length <= max) return text;
  return `${text.slice(0, max).replace(/\s+\S*$/, "")}…`;
}

function imageFor(image) {
  const raw = clean(image);
  if (!raw) return `${SITE}/images/Logo.webp`;
  if (/^https?:\/\//i.test(raw)) return raw;
  return `${BACKEND}/images/${raw.replace(/^\/?(images\/)?/, "")}`;
}

async function fetchNews(slug) {
  if (!slug) return null;
  try {
    const res = await fetch(
      `${BACKEND}/api/news/urlWords/${encodeURIComponent(slug)}`,
      { next: { revalidate: 300 } }
    );
    if (!res.ok) return null;
    const json = await res.json();
    return json?.status === "success" && json?.data ? json.data : null;
  } catch {
    return null;
  }
}

/**
 * Like fetchNews, but distinguishes a definitively-missing article (→ 404) from
 * a transient backend error (→ render the client shell as a fallback). This stops
 * unknown slugs serving a 200 empty shell (soft-404) without 404-ing a real
 * article just because the API blipped.
 */
async function resolveNews(slug) {
  if (!slug) return { state: "notfound", item: null };
  try {
    const res = await fetch(
      `${BACKEND}/api/news/urlWords/${encodeURIComponent(slug)}`,
      { next: { revalidate: 300 } }
    );
    if (res.status === 404) return { state: "notfound", item: null };
    if (!res.ok) return { state: "error", item: null };
    const json = await res.json();
    if (json?.status === "success" && json?.data) {
      return { state: "ok", item: json.data };
    }
    return { state: "notfound", item: null };
  } catch {
    return { state: "error", item: null };
  }
}

export async function generateMetadata({ params }) {
  const slug = params?.slug || "";
  const item = await fetchNews(slug);

  const title =
    clean(item?.metaTitle) ||
    clean(item?.title) ||
    (slug ? `${titleFromSlug(slug)} | Adiance News` : "News | Adiance Technologies");

  const published = item?.publishedAt || item?.createdAt || undefined;
  const modified = item?.updatedAt || published;

  // Build against the article's own path, not "/news" — keying off the index
  // route made every article inherit the news index description and keywords.
  return buildMetadata(`/news/${slug}`, {
    title,
    description:
      clean(item?.metaDescription) ||
      summarise(richText(item?.brief)) ||
      undefined,
    canonical: `/news/${slug}`,
    ogImage: imageFor(item?.image),
    // Any slug renders this route, so an unknown article would otherwise be a
    // soft 404 serving fabricated NewsArticle markup. Keep it out of the index.
    noindex: !item,
    ogType: "article",
    publishedTime: published,
    modifiedTime: modified,
  });
}

export default async function Page({ params }) {
  const slug = params?.slug || "";
  const { state, item } = await resolveNews(slug);
  // Deleted / unpublished / invalid slug → real HTTP 404 via app/not-found.jsx,
  // not a 200 empty shell. A transient backend error falls through and renders
  // the client shell.
  if (state === "notfound") notFound();

  const headline = clean(item?.title) || clean(item?.metaTitle) || titleFromSlug(slug);
  const url = `${SITE}/news/${slug}`;

  // Only emit NewsArticle markup for an article that actually exists.
  const articleSchema = item
    ? {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline,
        description:
          clean(item?.metaDescription) ||
          summarise(richText(item?.brief)) ||
          undefined,
        image: imageFor(item?.image),
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: { "@type": "Organization", name: "Adiance Technologies" },
        publisher: {
          "@type": "Organization",
          name: "Adiance Technologies",
          url: SITE,
          logo: { "@type": "ImageObject", url: `${SITE}/images/Logo.webp` },
        },
        datePublished: item?.publishedAt || item?.createdAt || undefined,
        dateModified:
          item?.updatedAt || item?.publishedAt || item?.createdAt || undefined,
        ...(clean(item?.category)
          ? { articleSection: clean(item.category) }
          : {}),
        inLanguage: "en-US",
      }
    : null;

  return (
    <>
      {articleSchema ? <JsonLd data={articleSchema} /> : null}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "News", url: "/news" },
          { name: headline, url: `/news/${slug}` },
        ]}
      />
      <ClientPage />
    </>
  );
}
