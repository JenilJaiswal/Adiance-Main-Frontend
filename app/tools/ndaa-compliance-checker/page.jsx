import { buildMetadata } from "@/seo/pageMetadata";
import { JsonLd } from "@/seo/JsonLd";
import ClientChecker from "./ClientChecker";

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
  mainEntity: [
    {
      "@type": "Question",
      name: "What is NDAA Section 889?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 889 of the John S. McCain National Defense Authorization Act for Fiscal Year 2019 prohibits US federal agencies and their contractors from procuring or using certain telecommunications and video surveillance equipment from specific manufacturers named in the Act, due to national security concerns.",
      },
    },
    {
      "@type": "Question",
      name: "Which manufacturers are named in NDAA Section 889?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The statute names five companies and their subsidiaries and affiliates: Huawei Technologies Company, ZTE Corporation, Hytera Communications Corporation, Hangzhou Hikvision Digital Technology Company and Dahua Technology Company.",
      },
    },
    {
      "@type": "Question",
      name: "What about cameras that use HiSilicon SoCs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HiSilicon is a subsidiary of Huawei. Cameras built on HiSilicon chipsets — even if sold under a different brand — are widely considered non-compliant with NDAA Section 889 and excluded from US federal and federally-funded procurement.",
      },
    },
    {
      "@type": "Question",
      name: "Who must comply with NDAA Section 889?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "US federal agencies, federal contractors, sub-contractors at any tier on federal contracts, organisations receiving federal grants, and entities operating in federally-funded facilities — including most public schools, hospitals, airports and critical infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "What if my current cameras are non-compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non-compliant cameras must typically be replaced before a federal contract can be performed or federal funds disbursed. Adiance manufactures NDAA-compliant cameras with documentation and model-mapping support for migration projects.",
      },
    },
  ],
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
