import { HOMEPAGE_FAQ_ITEMS } from "@/seo/JsonLd";

// Visible homepage FAQ. Built from the same list as the FAQPage JSON-LD, so the
// structured data always matches the text on the page. Plain <details>, no JS.
export default function HomeFaq() {
  return (
    <section
      aria-label="Frequently asked questions"
      style={{ maxWidth: 900, margin: "0 auto", padding: "40px 16px" }}
    >
      <h2 style={{ fontSize: "1.6rem", marginBottom: 16 }}>Frequently asked questions</h2>
      {HOMEPAGE_FAQ_ITEMS.map((item) => (
        <details key={item.q} style={{ borderBottom: "1px solid #ddd", padding: "12px 0" }}>
          <summary style={{ fontWeight: 600, cursor: "pointer" }}>{item.q}</summary>
          <p style={{ margin: "8px 0 0", lineHeight: 1.6 }}>{item.a}</p>
        </details>
      ))}
    </section>
  );
}
