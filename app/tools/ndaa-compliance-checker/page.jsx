import { buildMetadata } from "@/seo/pageMetadata";
import { JsonLd } from "@/seo/JsonLd";
import ClientChecker from "./ClientChecker";
import { FAQ_ITEMS } from "./faq";

export const metadata = buildMetadata("/tools/ndaa-compliance-checker");

const SOFTWARE_APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NDAA Compliance Checker for CCTV Cameras",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free interactive tool to verify whether a surveillance camera brand or System-on-Chip is compliant with NDAA Section 889, the US federal procurement restriction on certain Chinese-manufactured telecommunications and video surveillance equipment.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://www.adiance.com/tools/ndaa-compliance-checker",
  provider: {
    "@type": "Organization",
    name: "Adiance Technologies",
    url: "https://www.adiance.com",
  },
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to check if your CCTV camera is NDAA compliant",
  description:
    "Verify whether a surveillance camera brand or chipset is restricted under NDAA Section 889.",
  step: [
    { "@type": "HowToStep", name: "Identify the camera brand", text: "Note the brand name on the camera housing, packaging or invoice — including the actual manufacturer if it differs from the reseller brand." },
    { "@type": "HowToStep", name: "Identify the System-on-Chip (SoC)", text: "Find the chipset family from the camera datasheet or spec sheet. Common families include HiSilicon, Ambarella, Qualcomm, Novatek, Sigmastar, Goke, Fullhan and others." },
    { "@type": "HowToStep", name: "Run the checker", text: "Enter the brand and (optionally) the SoC into the checker. The tool returns a verdict against NDAA Section 889." },
    { "@type": "HowToStep", name: "Verify with documentation", text: "For procurement, also request a written NDAA Section 889 compliance statement and BOM provenance from the manufacturer." },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function Page() {
  return (
    <>
      <JsonLd data={SOFTWARE_APP_SCHEMA} />
      <JsonLd data={HOWTO_SCHEMA} />
      <JsonLd data={FAQ_SCHEMA} />
      <ClientChecker />
    </>
  );
}
