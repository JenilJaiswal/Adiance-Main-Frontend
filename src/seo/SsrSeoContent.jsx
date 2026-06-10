/**
 * Server-rendered SEO body. Emits visible-to-crawler H1/H2/p/a content for
 * every route so the raw HTML carries:
 *   - exactly one <h1> (matches the page <title>)
 *   - H2 intro section
 *   - 300+ words of body copy
 *   - related-link anchor block
 *
 * For SEO landing routes that have a matching entry in seoLandingData.json
 * we use the hero / intro / features / FAQ / related-links data verbatim.
 * For other routes we fall back to the title + description from the page
 * metadata catalog and emit a curated set of internal links so AI crawlers
 * always see a contentful page.
 *
 * The block is wrapped in a CSS-hidden container (visually invisible) so it
 * doesn't conflict with the existing client-rendered UI. Crawlers (including
 * AI crawlers that don't execute JS) still see the markup in the raw HTML.
 */

import landingData from "../data/seoLandingData.json";
import { CATALOG } from "./pageMetadata";

const SITE = "https://www.adiance.com";

const HIDDEN_STYLE = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0,0,0,0)",
  whiteSpace: "nowrap",
  border: "0",
};

const DEFAULT_RELATED = [
  { title: "NDAA Compliant CCTV Camera Manufacturer", url: "/ndaa-compliant-cctv-camera-manufacturer" },
  { title: "White Label CCTV Camera Manufacturer", url: "/white-label-cctv-camera-manufacturer" },
  { title: "OEM CCTV Camera Manufacturer USA", url: "/oem-cctv-camera-manufacturer-usa" },
  { title: "Non-Chinese CCTV Camera Manufacturer", url: "/non-chinese-cctv-camera-manufacturer" },
  { title: "Edge AI Camera Manufacturer", url: "/edge-ai-camera-manufacturer" },
  { title: "ANPR Camera Manufacturer", url: "/anpr-camera-manufacturer" },
  { title: "Thermal Cameras", url: "/thermal-camera" },
  { title: "4K Cameras", url: "/4kcamera" },
  { title: "Product Portfolio", url: "/product-portfolio" },
  { title: "About Adiance", url: "/about" },
  { title: "Contact / Get a Quote", url: "/contact" },
  { title: "Blog", url: "/blog" },
];

const DEFAULT_BODY = [
  "Adiance Technologies is an NDAA-compliant OEM and ODM CCTV camera manufacturer headquartered in Ahmedabad, India. We design, engineer, and assemble surveillance cameras on non-Chinese system-on-chip platforms — Qualcomm, Ambarella, and Novatek — for US Federal, UK, EU, GCC, and global enterprise procurement. Adiance was founded in 2003 and operates a fully owned manufacturing facility with in-house PCB design, SMT assembly, firmware engineering, mechanical design, lens calibration, and QA. The non-Chinese SoC supply chain is fully auditable and documented for US Federal and critical-infrastructure procurement audits.",
  "Our product portfolio spans edge-AI cameras with on-device ANPR, LPR, face recognition, intrusion detection, object detection, and people counting; 4K bullet, dome, and PTZ cameras; 4G cellular cameras for off-grid and remote-site surveillance; WiFi PTZ cameras; thermal cameras for perimeter and industrial sites; ANPR / LPR cameras with region-trained models for the USA, EU, GCC, and India; the Cloud XVR 8 / 16-channel hybrid recorder VM-72XVR816; the Ambicam Cloud VMS with multi-site streaming, AI events, and remote management; and a white-label mobile app for iOS and Android. Specialty ranges include the value-tier Eco Series, mid-tier R-Series, and high-end H-Series IP cameras, as well as the Qualcomm-powered S-Series edge-AI flagship range.",
  "Adiance offers full OEM, ODM, and JDM manufacturing for global security brands, system integrators, telecoms, ISPs, and government departments. Minimum order quantities start at 100 units per SKU and scale to 50,000+ units per quarter. Customers receive cameras with their own branding on the housing, packaging, firmware splash screen, mobile app on the App Store and Play Store, and white-label Ambicam Cloud VMS deployed on a private domain — launching a private-label CCTV brand without owning a factory. Engineering support includes custom firmware, SDK and API integration, VMS compatibility for Milestone, Genetec, Network Optix, ExacqVision, Digifort, and Luxriot, and ongoing post-launch updates.",
  "Compliance coverage includes NDAA Section 889, GDPR-readiness, STQC testing, BIS-ER certification, CE, FCC, RoHS, and ONVIF Profiles S, G, and T. Adiance is positioned as a non-Chinese, NDAA-compliant alternative to Hikvision, Dahua, and other China-headquartered surveillance vendors. The company targets US federal, state, and local government procurement, US, Canadian, UK, and EU enterprise integrators and CCTV brands, GCC and Middle Eastern smart-city and critical-infrastructure projects, ASEAN and ANZ distributors looking for a China + 1 supply chain, the Indian government and enterprise via STQC and BIS-ER certified channels, and global private-label and white-label brands wanting to launch their own CCTV line without owning a factory.",
  "Adiance ships to 50+ countries with country-tailored compliance documentation and region-trained AI models. Notable target markets include the United States, Canada, the United Kingdom, Germany, France, Italy, Spain, the Netherlands, Sweden, Poland, the Czech Republic, Ireland, the UAE, Saudi Arabia, Qatar, Bahrain, Kuwait, Oman, Israel, Turkey, Egypt, Morocco, South Africa, Nigeria, Kenya, Ghana, Japan, South Korea, Singapore, Malaysia, Thailand, Indonesia, the Philippines, Vietnam, Taiwan, Australia, New Zealand, India, Brazil, Argentina, Colombia, Chile, Peru, Mexico, and Venezuela.",
];

function landingBody(slug) {
  const d = landingData[slug];
  if (!d) return null;
  const paragraphs = [];
  if (d.hero?.subtitle) paragraphs.push(d.hero.subtitle);
  if (d.intro?.description) paragraphs.push(d.intro.description);
  if (Array.isArray(d.marketContext?.paragraphs)) {
    paragraphs.push(...d.marketContext.paragraphs);
  }
  const features = Array.isArray(d.features) ? d.features : [];
  const faq = Array.isArray(d.faq) ? d.faq : [];
  const related = Array.isArray(d.relatedLinks) ? d.relatedLinks : [];
  return {
    h1: d.hero?.title || d.seo?.title,
    h2: d.intro?.title || "Overview",
    paragraphs,
    features,
    faq,
    related,
  };
}

function defaultBody(path) {
  const cfg = CATALOG[path] || {};
  const slug = path === "/" ? "" : path.replace(/^\//, "").split("/").pop();
  const h1 = cfg.title || "Adiance Technologies";
  const h2 = cfg.description ? "Overview" : "About Adiance Technologies";
  const paragraphs = [];
  if (cfg.description) paragraphs.push(cfg.description);
  paragraphs.push(...DEFAULT_BODY);
  return {
    h1,
    h2,
    paragraphs,
    features: [],
    faq: [],
    related: DEFAULT_RELATED.filter((l) => l.url !== path),
  };
}

export function SsrSeoContent({ path, landingSlug }) {
  if (!path) return null;
  const body = (landingSlug && landingBody(landingSlug)) || defaultBody(path);
  if (!body) return null;

  const breadcrumbs = (() => {
    const items = [{ name: "Home", url: "/" }];
    if (path === "/") return items;
    let url = "";
    for (const seg of path.split("/").filter(Boolean)) {
      url += "/" + seg;
      items.push({
        name: seg
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase()),
        url,
      });
    }
    return items;
  })();

  return (
    <section
      aria-hidden="true"
      data-ssr-seo="true"
      style={HIDDEN_STYLE}
      suppressHydrationWarning
    >
      <nav aria-label="Breadcrumb">
        <ol>
          {breadcrumbs.map((b, i) => (
            <li key={i}>
              <a href={b.url}>{b.name}</a>
            </li>
          ))}
        </ol>
      </nav>

      <h1>{body.h1}</h1>

      <h2>{body.h2}</h2>
      {body.paragraphs.map((p, i) => (
        <p key={`p${i}`}>{p}</p>
      ))}

      {body.features.length > 0 && (
        <>
          <h2>Key capabilities</h2>
          <ul>
            {body.features.slice(0, 12).map((f, i) => (
              <li key={`f${i}`}>
                <strong>{f.title}</strong>: {f.description}
              </li>
            ))}
          </ul>
        </>
      )}

      {body.faq.length > 0 && (
        <>
          <h2>Frequently asked questions</h2>
          <dl>
            {body.faq.map((f, i) => (
              <div key={`q${i}`}>
                <dt>
                  <h3>{f.question}</h3>
                </dt>
                <dd>{f.answer}</dd>
              </div>
            ))}
          </dl>
        </>
      )}

      <h2>Related Adiance pages</h2>
      <ul>
        {body.related.slice(0, 12).map((l, i) => (
          <li key={`r${i}`}>
            <a href={l.url.startsWith("http") ? l.url : `${SITE}${l.url}`}>
              {l.title}
            </a>
          </li>
        ))}
      </ul>

      <p>
        Contact Adiance Technologies: sales@adiance.com — +91-9687779999. Visit{" "}
        <a href="/contact">/contact</a> for an OEM/ODM quote or{" "}
        <a href="/about">/about</a> to learn more about our manufacturing
        capabilities.
      </p>
    </section>
  );
}
