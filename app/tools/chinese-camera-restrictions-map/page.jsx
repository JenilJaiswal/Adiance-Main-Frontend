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

// The FAQPage JSON-LD that used to sit here described questions that are not
// shown on this page, and its answers make dated legal statements about
// specific countries. Structured data must match visible content, so it was
// removed. Re-add it only together with a visible FAQ that a legal reviewer
// has approved.

export default function Page() {
  return (
    <>
      <JsonLd data={ITEMLIST_SCHEMA} />
      <ClientMap />
    </>
  );
}
