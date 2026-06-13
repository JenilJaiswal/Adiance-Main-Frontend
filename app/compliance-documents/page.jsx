import { buildMetadata } from "@/seo/pageMetadata";
import { JsonLd } from "@/seo/JsonLd";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/compliance-documents");

const ITEMLIST = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Adiance Technologies Compliance Documentation",
  description: "Verifiable compliance documents covering NDAA Section 889, BIS ER, STQC, ONVIF, CE, FCC, RoHS and ISO certifications.",
  itemListElement: [
    { "@type": "ListItem", position: 1, item: { "@type": "DigitalDocument", name: "BIS Registration Certificate (R-72003735)" }},
    { "@type": "ListItem", position: 2, item: { "@type": "DigitalDocument", name: "NDAA Section 889 Attestation Letter" }},
    { "@type": "ListItem", position: 3, item: { "@type": "DigitalDocument", name: "ONVIF Profile S/G/T Conformance Statement" }},
    { "@type": "ListItem", position: 4, item: { "@type": "DigitalDocument", name: "CE Declaration of Conformity" }},
    { "@type": "ListItem", position: 5, item: { "@type": "DigitalDocument", name: "FCC Part 15B Certification" }},
    { "@type": "ListItem", position: 6, item: { "@type": "DigitalDocument", name: "RoHS Compliance Statement" }},
    { "@type": "ListItem", position: 7, item: { "@type": "DigitalDocument", name: "ISO 9001:2015 Quality Management Certificate" }},
    { "@type": "ListItem", position: 8, item: { "@type": "DigitalDocument", name: "STQC Certification — ArcisAI Cloud VMS" }},
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={ITEMLIST} />
      <ClientPage />
    </>
  );
}
