import { legacyBlogMetadata, LegacyBlogSchemas } from "@/seo/legacyBlogMeta";
import { JsonLd } from "@/seo/JsonLd";
import ClientPage from "./ClientPage";

const SLUG = "bis-er-01-certified-cctv-camera-companies-india";

export const metadata = legacyBlogMetadata(SLUG);

const CERTIFIED_COMPANIES_LIST = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "BIS ER-01 / STQC ER Certified CCTV Camera Companies in India (2026)",
  description:
    "Companies with verified ER-01 security certification for CCTV cameras in India, via BIS registration or the STQC IoT System Certification Scheme.",
  url: `https://www.adiance.com/blog/${SLUG}`,
  itemListOrder: "https://schema.org/ItemListUnordered",
  numberOfItems: 8,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Organization",
        name: "Adiance Technologies Private Limited (ArcisAI)",
        url: "https://www.adiance.com",
        description:
          "BIS registration R-72003735 for CCTV cameras covering the Adiance and ArcisAI brands, verifiable on the BIS CRS portal. OEM/ODM manufacturer in Ahmedabad combining BIS ER compliance with NDAA Section 889 and an STQC-certified cloud VMS.",
        address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressRegion: "Gujarat", addressCountry: "IN" },
      },
    },
    { "@type": "ListItem", position: 2, item: { "@type": "Organization", name: "Prama India Private Limited", description: "Multiple STQC IoTSCS ER certificates for network cameras (official STQC registry)." } },
    { "@type": "ListItem", position: 3, item: { "@type": "Organization", name: "Aditya Infotech Limited (CP PLUS)", description: "STQC IoTSCS ER certificates for PTZ and non-PTZ network cameras; also announced BIS ER 01:2024 certification." } },
    { "@type": "ListItem", position: 4, item: { "@type": "Organization", name: "Samriddhi Automation Private Limited (Sparsh)", description: "Among the first companies on the STQC IoTSCS ER registry for network cameras." } },
    { "@type": "ListItem", position: 5, item: { "@type": "Organization", name: "Matrix Comsec Private Limited", description: "STQC IoTSCS ER certificates covering bullet, dome, ruggedized, and PTZ network cameras." } },
    { "@type": "ListItem", position: 6, item: { "@type": "Organization", name: "Honeywell International India Private Limited", description: "STQC IoTSCS ER certificates for network cameras." } },
    { "@type": "ListItem", position: 7, item: { "@type": "Organization", name: "Vicon Security Tech Private Limited", description: "STQC IoTSCS ER-certified network cameras." } },
    { "@type": "ListItem", position: 8, item: { "@type": "Organization", name: "EQUUS Digital Solution Private Limited", description: "STQC IoTSCS ER certificate for network cameras." } },
  ],
};

export default function Page() {
  return (
    <>
      <LegacyBlogSchemas slug={SLUG} />
      <JsonLd data={CERTIFIED_COMPANIES_LIST} />
      <ClientPage />
    </>
  );
}
