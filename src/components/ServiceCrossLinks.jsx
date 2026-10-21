// Small, plain "which program fits you" block that links the OEM, ODM,
// white-label and JDM pages to each other, so a visitor (and a crawler)
// can tell the programs apart and move between them. Text only, no claims.
const LINKS = {
  oem: {
    href: "/oem-services",
    label: "OEM manufacturing",
    text: "Adiance builds a camera to your specification and you sell it under your brand.",
  },
  odm: {
    href: "/odm-services",
    label: "ODM camera design",
    text: "Adiance designs the hardware and firmware, and you choose the design to brand.",
  },
  whiteLabel: {
    href: "/white-label-cctv-camera-manufacturer",
    label: "White-label cameras",
    text: "Start from an existing Adiance camera and put your own brand, firmware and app on it.",
  },
  jdm: {
    href: "/jdm-services",
    label: "JDM co-engineering",
    text: "Your R&D team and Adiance engineers design a product together.",
  },
};

export default function ServiceCrossLinks({ current }) {
  const items = Object.entries(LINKS).filter(([key]) => key !== current);
  return (
    <section
      aria-label="Related manufacturing programs"
      style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px" }}
    >
      <h2 style={{ fontSize: "1.4rem", marginBottom: 12 }}>
        Not sure which program fits your product?
      </h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
        {items.map(([key, item]) => (
          <li key={key}>
            <a href={item.href} style={{ fontWeight: 600 }}>
              {item.label}
            </a>
            <span> &mdash; {item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
