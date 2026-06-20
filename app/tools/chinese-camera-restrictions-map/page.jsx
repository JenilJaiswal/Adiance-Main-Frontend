import { buildMetadata } from "@/seo/pageMetadata";
import { JsonLd } from "@/seo/JsonLd";
import ClientMap from "./ClientMap";
import { RESTRICTIONS } from "./data";

export const metadata = buildMetadata("/tools/chinese-camera-restrictions-map");

const ITEMLIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Countries with active restrictions on Chinese-manufactured surveillance cameras (2026)",
  description:
    "Verified list of countries that have implemented federal, sector or procurement-level restrictions on Chinese-manufactured CCTV and surveillance equipment.",
  numberOfItems: RESTRICTIONS.filter(r => r.status !== "watch").length,
  itemListOrder: "https://schema.org/ItemListUnordered",
  itemListElement: RESTRICTIONS.filter(r => r.status !== "watch").map((r, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Country",
      name: r.country,
      description: `${r.regulation} (${r.year}) — ${r.scope}`,
    },
  })),
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Which countries have banned Chinese surveillance cameras?",
      acceptedAnswer: { "@type": "Answer", text: "As of 2026, the United States, United Kingdom, Australia, Canada, Japan, New Zealand, Lithuania, Latvia and Estonia have all implemented federal-level restrictions on Chinese-manufactured surveillance cameras, with additional countries restricting Chinese cameras for specific sectors or government procurement." } },
    { "@type": "Question", name: "What was the first country to ban Chinese surveillance cameras?",
      acceptedAnswer: { "@type": "Answer", text: "Japan's METI began restricting Chinese surveillance equipment from government procurement in 2018. The United States NDAA Section 889 followed in 2019. Japan's action is widely considered the first formal Western restriction." } },
    { "@type": "Question", name: "Are these restrictions expanding?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. The trend has accelerated since 2022 with the UK Cabinet Office guidance, Australia's federal sweep, and Baltic-state restrictions. The Netherlands, Germany, France and Italy have active debates underway. The trajectory is toward expansion, not retreat." } },
    { "@type": "Question", name: "What does this mean for buyers?",
      acceptedAnswer: { "@type": "Answer", text: "Buyers and resellers operating in any market trending toward restriction should already be transitioning to compliant supply chains. Adiance manufactures NDAA-compliant cameras on non-Chinese SoC platforms (Qualcomm, Ambarella, Novatek, Sigmastar) with BIS registration R-72003735 verifiable on crsbis.in." } },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={ITEMLIST_SCHEMA} />
      <JsonLd data={FAQ_SCHEMA} />
      <ClientMap />
    </>
  );
}
