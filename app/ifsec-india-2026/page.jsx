import { buildMetadata } from "@/seo/pageMetadata";
import { JsonLd } from "@/seo/JsonLd";
import IfsecIndia2026 from "@/views/IfsecIndia2026/IfsecIndia2026";

const SITE = "https://www.adiance.com";
const PATH = "/ifsec-india-2026";
const URL = `${SITE}${PATH}`;
const OG_IMAGE = `${SITE}/images/ifsec-india-2026-og.png`;

const OG_TITLE = "Meet Adiance at IFSEC India 2026 | Booth E10, Hall 5GF";
const OG_DESCRIPTION =
  "Connect with Adiance at IFSEC India 2026 and explore CCTV OEM/ODM manufacturing, surveillance camera development and electronics manufacturing opportunities.";

const base = buildMetadata(PATH);

export const metadata = {
  ...base,
  openGraph: {
    ...base.openGraph,
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_TITLE }],
  },
  twitter: {
    ...base.twitter,
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

// Organization + WebPage + BreadcrumbList only. No Event schema: Adiance is an
// exhibitor at IFSEC India, not the organiser. FAQ stays visible on the page
// and is deliberately not marked up as FAQPage.
const GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      // Same @id and name as the site-wide Organization in app/layout.js, so
      // the two blocks merge into one entity instead of conflicting.
      name: "Adiance Technologies",
      alternateName: "Adiance",
      url: `${SITE}/`,
      logo: `${SITE}/images/Logo.webp`,
      email: "contact@adiance.com",
      telephone: "+91-9687779999",
    },
    {
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: "Adiance at IFSEC India 2026",
      description:
        "Meet Adiance at IFSEC India 2026, Booth E10, Hall 5GF, New Delhi. Explore CCTV OEM and ODM manufacturing, surveillance camera development, PCB design and electronics manufacturing.",
      about: { "@id": `${SITE}/#organization` },
      breadcrumb: { "@id": `${URL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "IFSEC India 2026", item: URL },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <IfsecIndia2026 />
      <JsonLd data={GRAPH} />
    </>
  );
}
