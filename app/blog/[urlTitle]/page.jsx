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

export async function generateMetadata({ params }) {
  const slug = params?.urlTitle || "";
  const blog = await fetchBlog(slug);

  const cmsTitle =
    clean(blog?.content?.metaTitle) || clean(blog?.metadata?.metaTitle);
  const cmsDesc =
    clean(blog?.content?.metaDescription) ||
    clean(blog?.metadata?.metaDescription);
  const fallbackTitle = slug
    ? `${titleFromSlug(slug)} | Adiance Blog`
    : "Adiance Blog";

  const title = cmsTitle || clean(blog?.content?.title) || fallbackTitle;
  const description = cmsDesc || undefined;
  const ogImage = ogImageFor(blog?.content?.mainImage);

  return buildMetadata("/blog", {
    title,
    description,
    canonical: `/blog/${slug}`,
    ogImage,
  });
}

export default async function Page({ params }) {
  const slug = params?.urlTitle || "";
  const blog = await fetchBlog(slug);

  const cmsTitle =
    clean(blog?.content?.metaTitle) ||
    clean(blog?.metadata?.metaTitle) ||
    clean(blog?.content?.title);
  const cmsDesc =
    clean(blog?.content?.metaDescription) ||
    clean(blog?.metadata?.metaDescription);
  const headline = cmsTitle || titleFromSlug(slug);
  const url = `${SITE}/blog/${slug}`;
  const ogImage = ogImageFor(blog?.content?.mainImage);
  const author = clean(blog?.content?.blogAuthor) || "Adiance Technologies";
  const datePublished = blog?.createdAt || undefined;
  const dateModified = blog?.updatedAt || blog?.createdAt || undefined;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description: cmsDesc || undefined,
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
    inLanguage: "en-US",
  };

  return (
    <>
      <JsonLd data={articleSchema} />
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
