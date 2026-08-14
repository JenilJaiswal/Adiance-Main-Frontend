import { buildMetadata } from "@/seo/pageMetadata";
import { JsonLd, BreadcrumbJsonLd } from "@/seo/JsonLd";
import ClientPage from "./ClientPage";

const SITE = "https://www.adiance.com";
const BACKEND =
  process.env.NEXT_PUBLIC_BACKEND_URL || "https://backend.adiance.com";

function titleFromSlug(slug) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Flatten the CMS rich-text shape — [{ type, children: [{ text }] }] — into
 * plain text so it can be used in a meta description or FAQ answer.
 */
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

function ogImageFor(mainImage) {
  const raw = clean(mainImage);
  if (!raw) return `${SITE}/images/Logo.webp`;
  if (/^https?:\/\//i.test(raw)) return raw;
  return `${BACKEND}/images/${raw.replace(/^\/?(images\/)?/, "")}`;
}

async function fetchBlog(slug) {
  if (!slug) return null;
  try {
    const res = await fetch(
      `${BACKEND}/api/blogs/urlWords/${encodeURIComponent(slug)}`,
      { next: { revalidate: 300 } }
    );
    if (!res.ok) return null;
    const json = await res.json();
    if (json?.status === "success" && json?.data?.metadata?.urlWords) {
      return json.data;
    }
    return null;
  } catch {
    return null;
  }
}

/** Post-specific description, never the /blog index copy. */
function descriptionFor(blog) {
  return (
    clean(blog?.content?.metaDescription) ||
    clean(blog?.metadata?.metaDescription) ||
    summarise(richText(blog?.content?.brief)) ||
    undefined
  );
}

export async function generateMetadata({ params }) {
  const slug = params?.urlTitle || "";
  const blog = await fetchBlog(slug);

  const cmsTitle =
    clean(blog?.content?.metaTitle) || clean(blog?.metadata?.metaTitle);
  const fallbackTitle = slug
    ? `${titleFromSlug(slug)} | Adiance Blog`
    : "Adiance Blog";

  const title = cmsTitle || clean(blog?.content?.title) || fallbackTitle;
  const tags = Array.isArray(blog?.content?.tags) ? blog.content.tags : [];
  const published = blog?.createdAt || undefined;
  const modified = blog?.updatedAt || blog?.createdAt || undefined;

  // Build against the post's own path, not "/blog" — keying off the index
  // route made every post inherit the blog index description and keywords.
  return buildMetadata(`/blog/${slug}`, {
    title,
    description: descriptionFor(blog),
    canonical: `/blog/${slug}`,
    ogImage: ogImageFor(blog?.content?.mainImage),
    keywords: tags.length ? tags.join(", ") : undefined,
    ogType: "article",
    publishedTime: published,
    modifiedTime: modified,
    authors: [clean(blog?.content?.blogAuthor) || "Adiance Technologies"],
  });
}

/** FAQPage JSON-LD from the post's own FAQ block, when it has one. */
function faqSchema(blog) {
  const items = blog?.content?.faqs?.items;
  if (!Array.isArray(items)) return null;
  const mainEntity = items
    .map((item) => ({
      question: clean(item?.question),
      answer: richText(item?.answer),
    }))
    .filter((entry) => entry.question && entry.answer)
    .map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: { "@type": "Answer", text: entry.answer },
    }));
  if (!mainEntity.length) return null;
  return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity };
}

export default async function Page({ params }) {
  const slug = params?.urlTitle || "";
  const blog = await fetchBlog(slug);

  const cmsTitle =
    clean(blog?.content?.metaTitle) ||
    clean(blog?.metadata?.metaTitle) ||
    clean(blog?.content?.title);
  const headline = cmsTitle || titleFromSlug(slug);
  const url = `${SITE}/blog/${slug}`;
  const ogImage = ogImageFor(blog?.content?.mainImage);
  const author = clean(blog?.content?.blogAuthor) || "Adiance Technologies";
  const datePublished = blog?.createdAt || undefined;
  const dateModified = blog?.updatedAt || blog?.createdAt || undefined;
  const tags = Array.isArray(blog?.content?.tags) ? blog.content.tags : [];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description: descriptionFor(blog),
    image: ogImage,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Person", name: author },
    publisher: {
      "@type": "Organization",
      name: "Adiance Technologies",
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/images/Logo.webp` },
    },
    datePublished,
    dateModified,
    ...(tags.length ? { keywords: tags.join(", ") } : {}),
    inLanguage: "en-US",
  };

  const faq = faqSchema(blog);

  return (
    <>
      <JsonLd data={articleSchema} />
      {faq ? <JsonLd data={faq} /> : null}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: headline, url: `/blog/${slug}` },
        ]}
      />
      <ClientPage />
    </>
  );
}
