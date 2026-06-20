import { buildMetadata } from "@/seo/pageMetadata";
import { JsonLd, BreadcrumbJsonLd } from "@/seo/JsonLd";
import ClientPage from "./ClientPage";

const SITE = "https://www.adiance.com";

function titleFromSlug(slug) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function generateMetadata({ params }) {
  const slug = params?.slug || "";
  const title = slug
    ? `${titleFromSlug(slug)} | Adiance News`
    : "News | Adiance Technologies";
  return buildMetadata("/news", {
    title,
    canonical: `/news/${slug}`,
  });
}

export default function Page({ params }) {
  const slug = params?.slug || "";
  const titleText = titleFromSlug(slug);
  const url = `${SITE}/news/${slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: titleText,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    publisher: {
      "@type": "Organization",
      name: "Adiance Technologies",
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/images/Logo.webp` },
    },
    inLanguage: "en-US",
  };
  return (
    <>
      <JsonLd data={articleSchema} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "News", url: "/news" },
          { name: titleText, url: `/news/${slug}` },
        ]}
      />
      <ClientPage />
    </>
  );
}
