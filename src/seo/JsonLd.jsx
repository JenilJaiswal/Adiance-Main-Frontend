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

export const HOMEPAGE_FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is NDAA compliance for security cameras?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "NDAA Section 889 prohibits US federal agencies from purchasing telecommunications and surveillance equipment from named Chinese manufacturers including Hikvision and Dahua. Adiance cameras are NDAA compliant, manufactured in India with non-Chinese chipsets, and approved for US Federal procurement.",
      },
    },
    {
      "@type": "Question",
      name: "Does Adiance offer white-label camera manufacturing?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Adiance provides full white-label and private-label CCTV camera manufacturing. We handle hardware design, firmware, mobile app, packaging, and branding so you can launch your own camera brand without owning a factory.",
      },
    },
    {
      "@type": "Question",
      name: "What SoC chipsets does Adiance use in its cameras?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Adiance uses non-Chinese SoC platforms including Qualcomm, Ambarella, Novatek, and Sigmastar. This ensures NDAA compliance for US government and enterprise deployments.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Adiance headquartered?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Adiance Technologies is headquartered in Ahmedabad, Gujarat, India. Adiance operates manufacturing and R&D facilities in India. VMukti Solutions is an Adiance group company focused on cloud video and broadcasting.",
      },
    },
    {
      "@type": "Question",
      name: "Does Adiance offer AI-powered surveillance cameras?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Adiance offers edge-AI cameras with on-device analytics including ANPR / LPR, face recognition, intrusion detection, people counting, and object detection — all processed on the camera with no cloud dependency.",
      },
    },
    {
      "@type": "Question",
      name: "Which regions does Adiance serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Adiance serves global markets including the United States, Canada, Europe, Middle East, Southeast Asia, and India. Our cameras are deployed in 50+ countries through OEM and distribution partners.",
      },
    },
  ],
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
