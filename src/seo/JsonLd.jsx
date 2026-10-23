/**
 * Server-rendered JSON-LD helpers. Use these from `app/**page.jsx` so the
 * structured-data ships in raw HTML (visible to Google + AI crawlers).
 */

const SITE = "https://www.adiance.com";

export function JsonLd({ data }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }) {
  if (!items?.length) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : `${SITE}${it.url}`,
    })),
  };
  return <JsonLd data={data} />;
}

// One source for the homepage FAQ: the visible section (HomeFaq) and the
// FAQPage JSON-LD are both built from this list, so the markup always matches
// what a visitor can read on the page.
export const HOMEPAGE_FAQ_ITEMS = [
  {
    q: "What is NDAA compliance for security cameras?",
    a: "NDAA Section 889 prohibits US federal agencies from buying telecommunications and video surveillance equipment from named Chinese manufacturers, including Hikvision and Dahua. Adiance designs its cameras around Section 889 and builds them in India with non-Chinese chipsets. Documentation is confirmed per model, so ask us for the details for your model and project.",
  },
  {
    q: "Does Adiance offer white-label camera manufacturing?",
    a: "Yes. Adiance offers white-label and private-label CCTV camera programs. We handle hardware design, firmware, mobile app, packaging, and branding so you can launch your own camera brand without owning a factory.",
  },
  {
    q: "What SoC chipsets does Adiance use in its cameras?",
    a: "Adiance uses non-Chinese SoC platforms including Qualcomm, Ambarella, and Novatek. The chipset depends on the camera model.",
  },
  {
    q: "Where is Adiance headquartered?",
    a: "Adiance Technologies is headquartered in Ahmedabad, Gujarat, India. Adiance operates manufacturing and R&D facilities in India. VMukti Solutions is an Adiance group company focused on cloud video and broadcasting.",
  },
  {
    q: "Does Adiance offer AI-powered surveillance cameras?",
    a: "Yes. Adiance offers edge-AI cameras with on-device analytics such as ANPR / LPR, face recognition, intrusion detection, people counting, and object detection. The analytics available depend on the camera model.",
  },
  {
    q: "Which regions does Adiance serve?",
    a: "Adiance serves global markets including the United States, Canada, Europe, Middle East, Southeast Asia, and India. Our cameras are deployed in many countries through OEM and distribution partners.",
  },
];

export const HOMEPAGE_FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOMEPAGE_FAQ_ITEMS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export const HOMEPAGE_WEBPAGE = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name:
    "NDAA Compliant OEM Camera Manufacturer | White Label CCTV | Adiance",
  description:
    "Adiance is an NDAA-compliant OEM/ODM CCTV camera manufacturer in India. White-label cameras, edge-AI surveillance, NVRs, and cloud VMS.",
  url: SITE,
  inLanguage: "en-US",
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${SITE}/images/slider1.webp`,
  },
  publisher: {
    "@type": "Organization",
    name: "Adiance Technologies",
    url: SITE,
    logo: {
      "@type": "ImageObject",
      url: `${SITE}/images/Logo.webp`,
      width: 205,
      height: 40,
    },
  },
};
