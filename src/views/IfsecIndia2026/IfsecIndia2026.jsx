import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EnquiryForm from "./EnquiryForm";
import LandingTracking from "./LandingTracking";
import "./IfsecIndia2026.css";

/**
 * Adiance at IFSEC India 2026 — business landing page (server component).
 * Copy follows the approved landing-page brief. Only the form and the click
 * tracker are client components.
 *
 * Facts used everywhere on this page (keep them identical):
 *   IFSEC India 2026 · 3–5 December 2026 · Booth E10 · Hall 5GF
 *   Bharat Mandapam, New Delhi
 */

const WHATSAPP_URL =
  "https://wa.me/919687779999?text=" +
  encodeURIComponent(
    "Hello Adiance, I would like to meet your team at IFSEC India 2026 (Booth E10, Hall 5GF)."
  );
const MAIL_URL =
  "mailto:contact@adiance.com?subject=" +
  encodeURIComponent("Meeting request: Adiance at IFSEC India 2026");
const OFFICIAL_SITE = "https://www.ifsecindia.com/";

export const IFSEC26_FAQ = [
  {
    q: "What is IFSEC India 2026?",
    a: "IFSEC India 2026 is a commercial security and surveillance exhibition and conference bringing together manufacturers, technology providers, system integrators, distributors and security professionals.",
  },
  {
    q: "When and where is IFSEC India 2026?",
    a: "IFSEC India 2026 will take place from 3–5 December 2026 at Bharat Mandapam, New Delhi, across Halls 4GF and 5GF.",
  },
  {
    q: "Which companies are participating in IFSEC India 2026?",
    a: "IFSEC India brings together companies across commercial security, video surveillance, CCTV, access control, biometrics, fire safety and integrated security technologies. Visitors can consult the official IFSEC exhibitor directory for participating company information.",
    official: true,
  },
  {
    q: "Is Adiance participating in IFSEC India 2026?",
    a: "Yes. Adiance will participate in IFSEC India 2026 to connect with businesses interested in CCTV OEM/ODM manufacturing, surveillance camera development and electronics manufacturing.",
  },
  {
    q: "Where can I meet Adiance at IFSEC India 2026?",
    a: "You can meet the Adiance team at Booth E10, Hall 5GF, Bharat Mandapam, New Delhi.",
  },
  {
    q: "What does Adiance offer?",
    a: "Adiance offers CCTV OEM and ODM manufacturing, surveillance camera development, PCB design, SMT assembly, hardware and firmware customization and private-label manufacturing solutions.",
  },
  {
    q: "Can I discuss private-label CCTV manufacturing with Adiance?",
    a: "Yes. CCTV brands, distributors and businesses can meet Adiance to discuss private-label and white-label manufacturing requirements, product customization and potential partnerships.",
  },
  {
    q: "Does Adiance support customized CCTV camera development?",
    a: "Adiance supports customized surveillance product development, including relevant hardware, PCB and firmware requirements. Specific capabilities depend on the product and project.",
  },
  {
    q: "Who should meet Adiance at IFSEC India 2026?",
    a: "CCTV brands, OEM/ODM buyers, security system integrators, distributors, technology startups and international surveillance businesses can connect with Adiance.",
  },
  {
    q: "How can I schedule a meeting with Adiance?",
    a: "Contact Adiance through its website, email or WhatsApp to discuss your business requirements and arrange a meeting.",
  },
];

/* Each card links to a service page that exists in this site's build. */
const CAPABILITIES = [
  {
    title: "CCTV OEM Manufacturing",
    text: "Manufacturing support for businesses that want to sell surveillance cameras under their own brand, with suitable branding, packaging and product requirements.",
    visual: "oem",
    alt: "Technical diagram of a camera body with a brand label, representing CCTV OEM manufacturing",
    href: "/oem-services",
    link: "Explore CCTV OEM manufacturing",
  },
  {
    title: "CCTV ODM Manufacturing",
    text: "Product development and customization opportunities for businesses looking for tailored surveillance camera hardware and engineering solutions.",
    visual: "odm",
    alt: "Technical diagram of a camera outline with design guide lines, representing CCTV ODM development",
    href: "/odm-services",
    link: "Explore CCTV ODM manufacturing",
  },
  {
    title: "PCB Design and Development",
    text: "Customized printed circuit board design and development for surveillance cameras and electronic devices.",
    visual: "pcb",
    alt: "Technical diagram of a printed circuit board layout with traces and pads",
    href: "/pcb-assembly-service",
    link: "See PCB design and assembly",
  },
  {
    title: "SMT Assembly and Electronics Manufacturing",
    text: "Electronics manufacturing and SMT assembly capabilities supporting the development and production of surveillance products.",
    visual: "smt",
    alt: "Technical diagram of an SMT nozzle placing a component on a circuit board",
    href: "/manufacturing",
    link: "View the manufacturing facility",
  },
  {
    title: "Hardware and Firmware Customization",
    text: "Discuss camera hardware, firmware, product features and integration requirements according to your business needs.",
    visual: "chip",
    alt: "Technical diagram of a processor chip with connection lines, representing hardware and firmware customization",
    href: "/product-engineering",
    link: "Explore product engineering",
  },
  {
    title: "White-Label Surveillance Solutions",
    text: "Explore opportunities to build your own surveillance product portfolio with customized branding and relevant hardware and software options.",
    visual: "label",
    alt: "Technical diagram of a product box with a brand label, representing white-label surveillance solutions",
    href: "/white-label-cctv-camera-manufacturer",
    link: "Explore white-label CCTV",
  },
];

const AUDIENCES = [
  {
    title: "CCTV Brands and Manufacturers",
    text: "Businesses looking to expand their product portfolio or explore additional manufacturing capabilities.",
  },
  {
    title: "CCTV OEM and ODM Buyers",
    text: "Companies seeking surveillance camera development and manufacturing partnerships.",
  },
  {
    title: "CCTV Distributors and Dealers",
    text: "Businesses interested in launching or expanding their own CCTV product brands.",
  },
  {
    title: "Security System Integrators",
    text: "System integration companies exploring camera hardware and surveillance technology partnerships.",
  },
  {
    title: "Technology Startups",
    text: "Businesses planning to develop and introduce new surveillance and security products.",
  },
  {
    title: "International Surveillance Companies",
    text: "Global businesses exploring Indian manufacturing, customized product development and supply-chain partnerships.",
  },
];

const VIS_RED = "#bf0603";
const VIS_SOFT = "#fdf1f0";

/* Simple technical line diagrams. No stock or generated pictures. */
function Visual({ kind, label }) {
  const common = {
    viewBox: "0 0 320 200",
    role: "img",
    "aria-label": label,
    preserveAspectRatio: "xMidYMid slice",
  };
  const line = {
    fill: "none",
    stroke: VIS_RED,
    strokeWidth: 3,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  const bg = <rect width="320" height="200" fill={VIS_SOFT} />;

  if (kind === "chip") {
    return (
      <svg {...common}>
        {bg}
        <g {...line} strokeWidth="2.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <path d={`M${126 + i * 17} 70 V40 H${70 + i * 40} V16`} />
              <path d={`M${126 + i * 17} 130 V160 H${70 + i * 40} V184`} />
            </g>
          ))}
          <path d="M112 84 H72 V60 H24" />
          <path d="M112 100 H24" />
          <path d="M112 116 H72 V140 H24" />
          <path d="M208 84 H248 V60 H296" />
          <path d="M208 100 H296" />
          <path d="M208 116 H248 V140 H296" />
        </g>
        <rect x="112" y="68" width="96" height="64" rx="8" fill="#fff" stroke={VIS_RED} strokeWidth="3" />
        <rect x="132" y="84" width="56" height="32" rx="4" fill={VIS_RED} />
      </svg>
    );
  }
  if (kind === "label") {
    return (
      <svg {...common}>
        {bg}
        <path d="M90 70 L160 40 L230 70 L230 142 L160 172 L90 142 Z" fill="#fff" stroke={VIS_RED} strokeWidth="3" strokeLinejoin="round" />
        <path d="M90 70 L160 100 L230 70 M160 100 V172" {...line} />
        <rect x="196" y="104" width="62" height="34" rx="6" fill="#fff" stroke={VIS_RED} strokeWidth="3" />
        <path d="M208 121 H246" {...line} />
        <path d="M118 112 L142 123" {...line} />
      </svg>
    );
  }
  if (kind === "oem") {
    return (
      <svg {...common}>
        {bg}
        <path d="M90 70 L160 40 L230 70 L230 142 L160 172 L90 142 Z" fill="#fff" stroke={VIS_RED} strokeWidth="3" strokeLinejoin="round" />
        <path d="M90 70 L160 100 L230 70 M160 100 V172" {...line} />
        <path d="M118 112 L142 123 V143 L118 132 Z" fill={VIS_RED} />
      </svg>
    );
  }
  if (kind === "odm") {
    return (
      <svg {...common}>
        {bg}
        <g stroke="#d99a98" strokeWidth="1.5" strokeDasharray="5 5" fill="none">
          <path d="M40 40 V170 M280 40 V170 M40 56 H280 M40 156 H280" />
        </g>
        <rect x="76" y="76" width="120" height="58" rx="10" fill="#fff" stroke={VIS_RED} strokeWidth="3" />
        <path d="M196 90 L240 76 V134 L196 120 Z" fill="#fff" stroke={VIS_RED} strokeWidth="3" strokeLinejoin="round" />
        <circle cx="136" cy="105" r="16" fill="none" stroke={VIS_RED} strokeWidth="3" />
        <circle cx="136" cy="105" r="5" fill={VIS_RED} />
        <path d="M120 134 V156 M152 134 V156" {...line} />
      </svg>
    );
  }
  if (kind === "pcb") {
    return (
      <svg {...common}>
        {bg}
        <rect x="40" y="30" width="240" height="140" rx="10" fill="#fff" stroke={VIS_RED} strokeWidth="3" />
        <g {...line} strokeWidth="2.5">
          <path d="M60 60 H110 V90 H140" />
          <path d="M60 100 H100 V140 H150" />
          <path d="M260 60 H210 V90 H180" />
          <path d="M260 120 H220 V150 H170" />
          <path d="M160 50 V70" />
        </g>
        <rect x="140" y="78" width="40" height="40" rx="4" fill={VIS_RED} />
        {[[60, 60], [60, 100], [260, 60], [260, 120], [160, 50], [150, 140], [170, 150]].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="#fff" stroke={VIS_RED} strokeWidth="3" />
        ))}
      </svg>
    );
  }
  /* smt */
  return (
    <svg {...common}>
      {bg}
      <rect x="40" y="130" width="240" height="26" rx="6" fill="#fff" stroke={VIS_RED} strokeWidth="3" />
      <g fill={VIS_RED}>
        <rect x="70" y="116" width="26" height="14" rx="2" />
        <rect x="116" y="116" width="26" height="14" rx="2" />
        <rect x="222" y="116" width="26" height="14" rx="2" />
      </g>
      <path d="M180 24 V70" {...line} />
      <rect x="164" y="70" width="32" height="26" rx="4" fill="#fff" stroke={VIS_RED} strokeWidth="3" />
      <path d="M180 96 V104" {...line} />
      <rect x="167" y="104" width="26" height="14" rx="2" fill={VIS_RED} />
    </svg>
  );
}

function Cta({ href, children, kind = "primary", track, where, ext }) {
  return (
    <a
      href={href}
      className={`ifsec26-btn ifsec26-btn--${kind}`}
      data-track={track}
      data-location={where}
      {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export default function IfsecIndia2026() {
  return (
    <>
      <Header />
      <LandingTracking />

      <main className="ifsec26" id="main">
        {/* ───────── 1. HERO ───────── */}
        <section className="ifsec26-hero" aria-labelledby="ifsec26-h1">
          <div className="ifsec26-wrap ifsec26-hero-grid">
            <div className="ifsec26-hero-copy">
              <span className="ifsec26-eyebrow">ADIANCE AT IFSEC INDIA 2026</span>
              <h1 id="ifsec26-h1">
                Meet Adiance at IFSEC India 2026
                <span className="ifsec26-h1-sub">
                  {" "}
                  – CCTV OEM &amp; ODM Manufacturing
                </span>
              </h1>
              <p className="ifsec26-sub">
                Explore CCTV OEM &amp; ODM Manufacturing, Surveillance Camera
                Development and Electronics Manufacturing.
              </p>
              <div className="ifsec26-hero-desc">
                <p>
                  <strong>Looking for a CCTV manufacturing partner in India?</strong>
                </p>
                <p>
                  Meet Adiance at IFSEC India 2026 and explore CCTV OEM and ODM
                  manufacturing, customized surveillance camera development, PCB
                  design, SMT assembly and private-label manufacturing
                  opportunities.
                </p>
                <p>
                  Connect with our team to discuss your product requirements,
                  manufacturing plans and potential business partnerships.
                </p>
              </div>

              <ul className="ifsec26-chips" aria-label="Event information">
                <li>
                  <strong>3–5 December 2026</strong>
                </li>
                <li>
                  <strong>Booth E10</strong>&nbsp;|&nbsp;Hall 5GF
                </li>
                <li>Bharat Mandapam, New Delhi</li>
              </ul>

              <div className="ifsec26-actions">
                <Cta
                  href="#meeting"
                  track="ifsec26_meeting_cta_click"
                  where="hero"
                >
                  Schedule a Meeting
                </Cta>
                <Cta href="#capabilities" kind="ghost">
                  Explore Manufacturing Capabilities
                </Cta>
              </div>
            </div>

            <aside className="ifsec26-hero-media" aria-label="Adiance booth at IFSEC India 2026">
              <div className="ifsec26-booth">
                <span className="ifsec26-booth-kicker">IFSEC INDIA 2026</span>
                <span className="ifsec26-booth-label">Meet Adiance at</span>
                <span className="ifsec26-booth-big">Booth E10</span>
                <span className="ifsec26-booth-hall">Hall 5GF</span>
                <hr />
                <span className="ifsec26-booth-line">3–5 December 2026</span>
                <span className="ifsec26-booth-line">Bharat Mandapam, New Delhi</span>
              </div>
            </aside>
          </div>
        </section>

        {/* ───────── 2. INTRODUCTION ───────── */}
        <section className="ifsec26-section" aria-labelledby="ifsec26-intro">
          <div className="ifsec26-wrap ifsec26-two">
            <div className="ifsec26-head" style={{ marginBottom: 0 }}>
              <h2 id="ifsec26-intro">
                IFSEC India 2026 – Connect with Security Industry Companies and
                Manufacturers
              </h2>
            </div>
            <div className="ifsec26-prose">
              <p>
                IFSEC India 2026 brings together manufacturers, technology
                providers, distributors, system integrators, security
                professionals and business decision-makers from the commercial
                security and surveillance industry.
              </p>
              <p>
                The exhibition provides an opportunity to explore video
                surveillance, CCTV cameras, AI-powered security technologies,
                access control, integrated security systems and other
                developments across the industry.
              </p>
              <p>
                For businesses looking to develop their own surveillance
                products or expand their CCTV product portfolio, connecting with
                the right manufacturing partner is an important part of the
                journey.
              </p>
              <p>
                Adiance will participate in IFSEC India 2026 to connect with
                CCTV brands, distributors, OEM/ODM buyers, system integrators
                and businesses interested in surveillance camera manufacturing.
              </p>
              <div className="ifsec26-actions">
                <Cta
                  href="#event"
                  track="ifsec26_meeting_cta_click"
                  where="intro"
                >
                  Meet Adiance at Booth E10
                </Cta>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── 3. COMPANY AND EXHIBITOR DISCOVERY ───────── */}
        <section
          className="ifsec26-section ifsec26-section--soft"
          aria-labelledby="ifsec26-discover"
        >
          <div className="ifsec26-wrap ifsec26-two">
            <div className="ifsec26-prose">
              <h2 id="ifsec26-discover">
                Looking for CCTV Manufacturers and Security Technology Companies
                at IFSEC India 2026?
              </h2>
              <p>
                Visitors attending IFSEC India 2026 may be looking for CCTV
                manufacturers, surveillance technology providers, product
                developers and manufacturing partners.
              </p>
              <p>
                Adiance is an Indian CCTV and surveillance technology
                manufacturing company offering OEM and ODM solutions for
                businesses looking to build or expand their own surveillance
                product portfolios.
              </p>
              <p>
                Looking for the full list of exhibitors? Please use the{" "}
                <a
                  href={OFFICIAL_SITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="ifsec26_official_site_click"
                  data-location="discover"
                >
                  official IFSEC India website
                </a>
                . This page only describes Adiance and does not list other
                companies.
              </p>
            </div>
            <div className="ifsec26-prose">
              <p>
                <strong>Meet Adiance to discuss:</strong>
              </p>
              <ul className="ifsec26-list" style={{ gridTemplateColumns: "1fr" }}>
                <li>CCTV OEM and ODM manufacturing.</li>
                <li>Private-label and white-label CCTV solutions.</li>
                <li>Customized surveillance camera development.</li>
                <li>PCB design and engineering.</li>
                <li>SMT assembly and electronics manufacturing.</li>
                <li>Hardware and firmware customization.</li>
                <li>Surveillance product development.</li>
                <li>
                  Manufacturing partnerships for domestic and international
                  markets.
                </li>
              </ul>
              <p>
                Whether you are an established CCTV brand or a business planning
                to introduce your own surveillance products, connect with
                Adiance to discuss your requirements.
              </p>
              <div className="ifsec26-actions">
                <Cta
                  href="#meeting"
                  track="ifsec26_meeting_cta_click"
                  where="discover"
                >
                  Discuss Your Manufacturing Requirements
                </Cta>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── 4. CAPABILITIES ───────── */}
        <section
          className="ifsec26-section"
          id="capabilities"
          aria-labelledby="ifsec26-cap"
        >
          <div className="ifsec26-wrap">
            <div className="ifsec26-head">
              <h2 id="ifsec26-cap">
                Explore Adiance CCTV OEM and ODM Manufacturing Capabilities
              </h2>
            </div>
            <div className="ifsec26-grid">
              {CAPABILITIES.map((c) => (
                <article className="ifsec26-card" key={c.title}>
                  <div className="ifsec26-card-media">
                    <Visual kind={c.visual} label={c.alt} />
                  </div>
                  <div className="ifsec26-card-body">
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                    <a
                      className="ifsec26-link"
                      href={c.href}
                      data-track="ifsec26_service_page_click"
                      data-location={c.title}
                    >
                      {c.link} &rarr;
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="ifsec26-actions ifsec26-cta-row">
              <Cta
                href="#meeting"
                track="ifsec26_meeting_cta_click"
                where="capabilities"
              >
                Contact Adiance
              </Cta>
              <Cta
                href={WHATSAPP_URL}
                kind="ghost"
                track="ifsec26_whatsapp_click"
                where="capabilities"
                ext
              >
                WhatsApp +91 968 777 9999
              </Cta>
            </div>
          </div>
        </section>

        {/* ───────── 5. WHY MEET ADIANCE ───────── */}
        <section
          className="ifsec26-section ifsec26-section--soft"
          aria-labelledby="ifsec26-why"
        >
          <div className="ifsec26-wrap">
            <div className="ifsec26-head">
              <h2 id="ifsec26-why">Why Meet Adiance at IFSEC India 2026?</h2>
              <p className="ifsec26-lead" style={{ fontWeight: 600, color: "#14171c" }}>
                Discuss Your Next Surveillance Manufacturing Project.
              </p>
              <p className="ifsec26-lead">
                Selecting a manufacturing partner requires more than comparing
                product specifications. Businesses need to understand
                engineering capabilities, customization possibilities,
                production processes and long-term partnership support.
              </p>
            </div>
            <p>
              <strong>Meet Adiance to discuss:</strong>
            </p>
            <ul className="ifsec26-list">
              <li>Your CCTV product development requirements.</li>
              <li>OEM and ODM manufacturing opportunities.</li>
              <li>Private-label CCTV camera development.</li>
              <li>PCB and electronics manufacturing.</li>
              <li>Product customization requirements.</li>
              <li>Manufacturing and supply-chain considerations.</li>
              <li>Applicable certification and compliance documentation.</li>
              <li>Domestic and international business opportunities.</li>
            </ul>
            <div className="ifsec26-actions">
              <Cta
                href="#meeting"
                track="ifsec26_meeting_cta_click"
                where="why"
              >
                Connect with Our Team
              </Cta>
            </div>
          </div>
        </section>

        {/* ───────── 6. WHO SHOULD CONNECT ───────── */}
        <section className="ifsec26-section" aria-labelledby="ifsec26-who">
          <div className="ifsec26-wrap">
            <div className="ifsec26-head">
              <h2 id="ifsec26-who">Meet Adiance at IFSEC If You Are Looking For:</h2>
            </div>
            <div className="ifsec26-grid">
              {AUDIENCES.map((a) => (
                <article className="ifsec26-card ifsec26-card--plain" key={a.title}>
                  <div className="ifsec26-card-body">
                    <h3>{a.title}</h3>
                    <p>{a.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="ifsec26-actions ifsec26-cta-row">
              <Cta
                href="#meeting"
                track="ifsec26_meeting_cta_click"
                where="audiences"
              >
                Let&apos;s Discuss a Partnership
              </Cta>
            </div>
          </div>
        </section>

        {/* ───────── 7. WHY ADIANCE ───────── */}
        <section
          className="ifsec26-section ifsec26-section--soft"
          aria-labelledby="ifsec26-ecosystem"
        >
          <div className="ifsec26-wrap ifsec26-two">
            <div className="ifsec26-prose">
              <h2 id="ifsec26-ecosystem">
                Indian Manufacturing. Engineering Expertise. Surveillance Product
                Development.
              </h2>
              <p>
                Adiance supports businesses with CCTV OEM and ODM manufacturing,
                hardware engineering, product customization and electronics
                manufacturing.
              </p>
              <p>
                Our team can discuss product-specific requirements, applicable
                compliance documentation and suitable manufacturing
                possibilities. You can also read about Adiance{" "}
                <a
                  href="/innovation"
                  data-track="ifsec26_service_page_click"
                  data-location="ecosystem-innovation"
                >
                  innovation in AI and surveillance technology
                </a>
                .
              </p>
              <div className="ifsec26-actions">
                <Cta
                  href="/manufacturing"
                  track="ifsec26_service_page_click"
                  where="ecosystem"
                >
                  Explore Adiance Manufacturing Services
                </Cta>
              </div>
            </div>
            <div className="ifsec26-prose">
              <p>
                <strong>Our manufacturing ecosystem includes:</strong>
              </p>
              <ul className="ifsec26-list" style={{ gridTemplateColumns: "1fr" }}>
                <li>CCTV camera hardware development.</li>
                <li>PCB design and engineering.</li>
                <li>SMT and PCB assembly.</li>
                <li>Firmware and product customization.</li>
                <li>White-label surveillance products.</li>
                <li>
                  NVR and video management ecosystem options, where applicable.
                </li>
                <li>Relevant surveillance product engineering.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ───────── 8. EVENT DETAILS ───────── */}
        <section className="ifsec26-section" id="event" aria-labelledby="ifsec26-event">
          <div className="ifsec26-wrap ifsec26-event">
            <div className="ifsec26-prose">
              <h2 id="ifsec26-event">Meet Adiance at Booth E10 – IFSEC India 2026</h2>
              <p>
                <strong>Planning your visit to IFSEC India 2026?</strong>
              </p>
              <p>
                Make time to meet Adiance and discuss CCTV OEM/ODM
                manufacturing, surveillance camera development, electronics
                manufacturing and business partnership opportunities.
              </p>
              <p className="ifsec26-note">
                IFSEC India is organised by its own organisers. For visitor
                registration and the official programme, please visit the{" "}
                <a
                  href={OFFICIAL_SITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="ifsec26_official_site_click"
                  data-location="event"
                >
                  official IFSEC India website
                </a>
                .
              </p>
              <div className="ifsec26-actions">
                <Cta
                  href="#meeting"
                  track="ifsec26_meeting_cta_click"
                  where="event"
                >
                  Schedule Your Meeting
                </Cta>
              </div>
            </div>
            <div className="ifsec26-panel">
              <dl>
                <div>
                  <dt>Event</dt>
                  <dd>IFSEC India 2026</dd>
                </div>
                <div>
                  <dt>Dates</dt>
                  <dd>3–5 December 2026</dd>
                </div>
                <div>
                  <dt>Venue</dt>
                  <dd>Bharat Mandapam, New Delhi</dd>
                </div>
                <div>
                  <dt>Hall</dt>
                  <dd>5GF</dd>
                </div>
                <div>
                  <dt>Booth</dt>
                  <dd>E10</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* ───────── 9. FAQ ───────── */}
        <section
          className="ifsec26-section ifsec26-section--soft"
          id="faq"
          aria-labelledby="ifsec26-faq"
        >
          <div className="ifsec26-wrap">
            <div className="ifsec26-head">
              <h2 id="ifsec26-faq">
                Frequently Asked Questions About IFSEC India 2026 and Adiance
              </h2>
            </div>
            <div className="ifsec26-faq">
              {IFSEC26_FAQ.map((f, i) => (
                <details key={f.q} open={i === 0 ? true : undefined}>
                  <summary>
                    <h3>
                      Q{i + 1}. {f.q}
                    </h3>
                  </summary>
                  <div>
                    <p>
                      {f.a}
                      {f.official ? (
                        <>
                          {" "}
                          <a
                            href={OFFICIAL_SITE}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-track="ifsec26_official_site_click"
                            data-location="faq"
                            style={{ color: "#bf0603", fontWeight: 600 }}
                          >
                            Open the official IFSEC India website
                          </a>
                          .
                        </>
                      ) : null}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── 10. FINAL CTA + FORM ───────── */}
        <section
          className="ifsec26-section ifsec26-final"
          id="meeting"
          aria-labelledby="ifsec26-final"
        >
          <div className="ifsec26-wrap ifsec26-final-grid">
            <div className="ifsec26-prose">
              <h2 id="ifsec26-final">
                Looking for a CCTV OEM/ODM Manufacturing Partner?
              </h2>
              <p className="ifsec26-lead">
                Let&apos;s discuss your next surveillance product development or
                manufacturing project.
              </p>
              <p>
                Meet Adiance at IFSEC India 2026 and explore opportunities for
                customized CCTV manufacturing, electronics development and
                long-term business partnerships.
              </p>
              <p>
                <strong>3–5 December 2026</strong>
                <br />
                <strong>Booth E10 | Hall 5GF</strong>
                <br />
                <strong>Bharat Mandapam, New Delhi</strong>
              </p>
              <div className="ifsec26-actions">
                <Cta
                  href="#ifsec26-form"
                  track="ifsec26_meeting_cta_click"
                  where="final"
                >
                  Schedule a Meeting with Adiance
                </Cta>
                <Cta
                  href={MAIL_URL}
                  kind="ghost"
                  track="ifsec26_email_click"
                  where="final"
                >
                  Contact Our Manufacturing Team
                </Cta>
              </div>
              <ul className="ifsec26-contact">
                <li>
                  Website:{" "}
                  <a href="https://www.adiance.com/">https://www.adiance.com/</a>
                </li>
                <li>
                  Email:{" "}
                  <a
                    href={MAIL_URL}
                    data-track="ifsec26_email_click"
                    data-location="contact-list"
                  >
                    contact@adiance.com
                  </a>
                </li>
                <li>
                  WhatsApp:{" "}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="ifsec26_whatsapp_click"
                    data-location="contact-list"
                  >
                    +91 968 777 9999
                  </a>
                </li>
              </ul>
            </div>

            <div className="ifsec26-formbox" id="ifsec26-form">
              <h3>Request a meeting at Booth E10</h3>
              <p>
                Tell us about your project. A short note is enough, and the
                Adiance team will get back to you.
              </p>
              <EnquiryForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Mobile-only sticky bar. Hidden on desktop by CSS. */}
      <div className="ifsec26 ifsec26-sticky-shell">
      <div className="ifsec26-spacer" aria-hidden="true" />
      <div className="ifsec26-sticky">
        <Cta
          href="#ifsec26-form"
          track="ifsec26_meeting_cta_click"
          where="sticky-bar"
        >
          Schedule a Meeting
        </Cta>
        <Cta
          href={WHATSAPP_URL}
          kind="ghost"
          track="ifsec26_whatsapp_click"
          where="sticky-bar"
          ext
        >
          WhatsApp
        </Cta>
      </div>
      </div>
    </>
  );
}
