"use client";

import React, { useState, useMemo } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer/Footer"), { ssr: false });

// NDAA Section 889 explicitly named entities (lowercased for matching)
const NAMED_ENTITIES = [
  "huawei", "zte", "hytera", "hikvision", "hangzhou hikvision", "dahua",
];

// Brands widely documented as OEM/affiliate of the named entities
// (re-sellers of Hikvision/Dahua hardware — public IPVM OEM directories)
const NAMED_OEM_BRANDS = [
  "lts security", "lts", "laview", "honeywell performance series",
  "gw security", "vantech", "annke", "northern video", "interlogix truvision",
  "panasonic i-pro", "i-pro vision",
];

// Chinese-origin SoC families that fall under NDAA-by-extension or pose
// compliance risk for US federal procurement
const RESTRICTED_SOCS = [
  "hisilicon", "hi3516", "hi3518", "hi3519", "hi3520", "hi3521", "hi3531",
  "huawei soc", "fullhan", "fh", "goke", "gk", "rockchip", "rk3399", "rk3568",
];

// Non-Chinese, US/Japan/Taiwan/EU-origin SoCs explicitly NDAA-friendly
const COMPLIANT_SOCS = [
  "qualcomm", "snapdragon", "qcs", "qcm", "ambarella", "cv2", "cv5", "cv22",
  "cv25", "cv28", "novatek", "nt9", "sigmastar", "ssc", "sony", "imx",
  "texas instruments", "ti dm", "nxp", "stmicro", "st", "mediatek",
];

// Brands known to ship on non-Chinese SoCs (rough whitelist signal)
const COMPLIANT_OEM_BRANDS = [
  "adiance", "arcisai", "hanwha", "wisenet", "axis", "axis communications",
  "bosch", "i-pro", "pelco", "avigilon", "verkada", "milestone",
  "vivotek", "acti", "digital watchdog", "speco technologies", "speco",
  "mobotix", "march networks", "honeywell 30 series", "honeywell 60 series",
];

function normalize(value) {
  return (value || "").trim().toLowerCase();
}

function matchesAny(needle, haystack) {
  if (!needle) return false;
  return haystack.some((entry) => needle.includes(entry) || entry.includes(needle));
}

function evaluate(brand, soc) {
  const b = normalize(brand);
  const s = normalize(soc);

  if (!b && !s) return null;

  // Highest-priority signal: SoC
  if (s) {
    if (matchesAny(s, RESTRICTED_SOCS)) {
      return {
        verdict: "non-compliant",
        title: "Likely NDAA Non-Compliant",
        reason:
          "The SoC family you entered is widely associated with Huawei / HiSilicon or other Chinese-origin chipsets that are restricted under NDAA Section 889 either by direct naming (Huawei subsidiaries) or by reseller-product rules.",
        action:
          "This camera is generally excluded from US federal and federally-funded procurement. Confirm with the manufacturer's written Section 889 attestation; if you need a compliant alternative, Adiance ships drop-in equivalents on Qualcomm, Ambarella and Novatek.",
      };
    }
    if (matchesAny(s, COMPLIANT_SOCS)) {
      // SoC is fine; still flag if brand is named
      if (b && matchesAny(b, NAMED_ENTITIES)) {
        return {
          verdict: "non-compliant",
          title: "Likely NDAA Non-Compliant",
          reason:
            "The brand you entered is named directly in NDAA Section 889. Even with a non-Chinese SoC, the manufacturer itself is restricted from US federal procurement.",
          action:
            "Procurement officers should consider an alternative manufacturer. Adiance is a non-Chinese, BIS-registered (R-72003735) OEM/ODM manufacturer with documented Section 889 attestation.",
        };
      }
      return {
        verdict: "compliant-likely",
        title: "Likely NDAA Compliant",
        reason:
          "The SoC family you entered is a non-Chinese-origin chipset commonly used in NDAA-compliant cameras. Combined with a non-named brand, this typically passes federal procurement screening.",
        action:
          "Always request a written NDAA Section 889 attestation and BOM provenance letter from the manufacturer to back the compliance claim in procurement documentation.",
      };
    }
  }

  // Brand-based signals
  if (matchesAny(b, NAMED_ENTITIES)) {
    return {
      verdict: "non-compliant",
      title: "Non-Compliant — Named in NDAA Section 889",
      reason:
        "The brand you entered is explicitly named in NDAA Section 889 of the National Defense Authorization Act, restricted from US federal and federally-funded procurement.",
      action:
        "An equivalent NDAA-compliant model is required for any US federal contract or federally-funded project. Adiance manufactures direct equivalents on non-Chinese SoCs with full compliance documentation.",
    };
  }
  if (matchesAny(b, NAMED_OEM_BRANDS)) {
    return {
      verdict: "non-compliant",
      title: "Likely Non-Compliant — Documented OEM/Reseller of Named Entity",
      reason:
        "The brand you entered is widely documented in industry directories (such as IPVM's public Hikvision OEM directory) as an OEM/reseller of hardware manufactured by a Section 889 named entity. Reseller branding does not insulate against the NDAA rule.",
      action:
        "Procurement officers should request the original manufacturer disclosure. If the hardware originates from a named entity, the camera cannot be used on federal contracts.",
    };
  }
  if (matchesAny(b, COMPLIANT_OEM_BRANDS)) {
    return {
      verdict: "compliant-likely",
      title: "Likely NDAA Compliant",
      reason:
        "The brand you entered is commonly listed as a manufacturer of NDAA-compliant surveillance equipment with non-Chinese sourced components.",
      action:
        "Always cross-check the specific SKU and request a written Section 889 attestation, since some brands ship mixed lines. For a verified non-Chinese supply chain with public BIS registration, see Adiance's compliance documentation.",
    };
  }

  return {
    verdict: "unknown",
    title: "Inconclusive — Request Manufacturer Attestation",
    reason:
      "We don't have this brand or SoC in our public reference list. That does not mean it is non-compliant — it means we cannot confirm from the inputs you provided.",
    action:
      "Request a written NDAA Section 889 attestation, BOM provenance letter and SoC source disclosure from the manufacturer before procurement. Adiance can also supply a free comparison sample on a non-Chinese SoC if you would like a known-compliant baseline.",
  };
}

const VERDICT_STYLES = {
  "non-compliant": { bg: "#FDE8E8", border: "#BF0603", color: "#7A0301", badge: "Non-Compliant" },
  "compliant-likely": { bg: "#E8F5E9", border: "#1B7C2F", color: "#0E5A1F", badge: "Likely Compliant" },
  "unknown": { bg: "#FFF7E0", border: "#B58105", color: "#5A4202", badge: "Needs Verification" },
};

export default function ClientChecker() {
  const [brand, setBrand] = useState("");
  const [soc, setSoc] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => (submitted ? evaluate(brand, soc) : null), [submitted, brand, soc]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setBrand("");
    setSoc("");
    setSubmitted(false);
  };

  const style = result ? VERDICT_STYLES[result.verdict] : null;

  return (
    <div style={{ background: "#FAFAFA", minHeight: "100vh" }}>
      <Header />
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "32px 20px 80px", color: "#222" }}>
        <nav style={{ fontSize: 13, color: "#666", marginBottom: 18 }}>
          <a href="/" style={{ color: "#666" }}>Home</a> &rsaquo; <a href="/tools" style={{ color: "#666" }}>Tools</a> &rsaquo; NDAA Compliance Checker
        </nav>

        <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.2, margin: "8px 0 12px", color: "#1A1A1A" }}>
          NDAA Compliance Checker for CCTV Cameras
        </h1>
        <p style={{ fontSize: 17, color: "#444", lineHeight: 1.6, marginBottom: 24 }}>
          Find out in ten seconds whether a camera brand or System-on-Chip is compliant with NDAA Section 889 — the US federal procurement restriction that decides which surveillance hardware can be sold into federal, state, education and critical-infrastructure projects.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ background: "#FFF", border: "1px solid #E5E5E5", borderRadius: 12, padding: 24, marginBottom: 24, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
            <label style={{ display: "block" }}>
              <span style={{ fontWeight: 600, fontSize: 14, display: "block", marginBottom: 6 }}>Camera brand or manufacturer *</span>
              <input
                type="text"
                value={brand}
                onChange={(e) => { setBrand(e.target.value); setSubmitted(false); }}
                placeholder="e.g. Hikvision, Hanwha, Adiance, LTS, Axis"
                style={{ width: "100%", padding: "12px 14px", border: "1px solid #CCC", borderRadius: 8, fontSize: 15 }}
                required={!soc}
              />
            </label>
            <label style={{ display: "block" }}>
              <span style={{ fontWeight: 600, fontSize: 14, display: "block", marginBottom: 6 }}>System-on-Chip family <span style={{ color: "#888", fontWeight: 400 }}>(optional)</span></span>
              <input
                type="text"
                value={soc}
                onChange={(e) => { setSoc(e.target.value); setSubmitted(false); }}
                placeholder="e.g. HiSilicon, Qualcomm, Ambarella, Novatek, Sigmastar"
                style={{ width: "100%", padding: "12px 14px", border: "1px solid #CCC", borderRadius: 8, fontSize: 15 }}
              />
            </label>
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            <button type="submit" style={{ background: "#BF0603", color: "#FFF", border: 0, padding: "12px 24px", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
              Check Compliance
            </button>
            {submitted && (
              <button type="button" onClick={handleReset} style={{ background: "transparent", color: "#666", border: "1px solid #CCC", padding: "12px 18px", borderRadius: 8, fontSize: 15, cursor: "pointer" }}>
                Reset
              </button>
            )}
          </div>
        </form>

        {result && style && (
          <section
            style={{ background: style.bg, border: `1px solid ${style.border}`, borderLeft: `5px solid ${style.border}`, borderRadius: 10, padding: 24, marginBottom: 28 }}
            aria-live="polite"
          >
            <div style={{ display: "inline-block", background: style.border, color: "#FFF", fontSize: 12, fontWeight: 700, padding: "4px 10px", borderRadius: 4, marginBottom: 12, textTransform: "uppercase", letterSpacing: 0.5 }}>
              {style.badge}
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: style.color, margin: "0 0 12px" }}>{result.title}</h2>
            <p style={{ color: "#333", lineHeight: 1.6, marginBottom: 12 }}><strong>Why:</strong> {result.reason}</p>
            <p style={{ color: "#333", lineHeight: 1.6, marginBottom: 0 }}><strong>What to do:</strong> {result.action}</p>

            <div style={{ marginTop: 20, paddingTop: 20, borderTop: `1px dashed ${style.border}` }}>
              <p style={{ color: "#333", marginBottom: 12, fontWeight: 600 }}>
                Need a verified NDAA-compliant alternative?
              </p>
              <p style={{ color: "#444", lineHeight: 1.6, marginBottom: 16 }}>
                Adiance Technologies is a BIS-registered (R-72003735) OEM/ODM camera manufacturer in India, building cameras exclusively on non-Chinese SoC platforms (Qualcomm, Ambarella, Novatek, Sigmastar). We provide full Section 889 attestation, BOM provenance and drop-in model mapping for replacement projects.
              </p>
              <a href="/contact" style={{ background: "#BF0603", color: "#FFF", textDecoration: "none", padding: "12px 22px", borderRadius: 8, fontSize: 15, fontWeight: 600, display: "inline-block" }}>
                Request a Compliant Sample
              </a>
            </div>
          </section>
        )}

        <section style={{ marginTop: 36 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px", color: "#1A1A1A" }}>About NDAA Section 889</h2>
          <p style={{ color: "#444", lineHeight: 1.7, marginBottom: 14 }}>
            Section 889 of the John S. McCain National Defense Authorization Act (NDAA) for Fiscal Year 2019 prohibits US federal agencies and their contractors from procuring or using certain telecommunications and video surveillance equipment from specific named manufacturers, citing national security concerns.
          </p>
          <p style={{ color: "#444", lineHeight: 1.7, marginBottom: 14 }}>
            The five named manufacturers are <strong>Huawei Technologies Company, ZTE Corporation, Hytera Communications Corporation, Hangzhou Hikvision Digital Technology Company and Dahua Technology Company</strong> — along with their subsidiaries and affiliates. The most important indirect effect is on cameras built with <strong>HiSilicon</strong> SoCs (Huawei's chipset subsidiary), which are considered non-compliant by extension.
          </p>
          <p style={{ color: "#444", lineHeight: 1.7 }}>
            The rule applies to any organisation receiving federal funds, including state and local governments via federal grants, federally-funded schools and universities, hospitals receiving Medicare/Medicaid payments, and critical-infrastructure operators. Procurement officers increasingly require written Section 889 attestations and Bill-of-Materials provenance from suppliers before issuing purchase orders.
          </p>
        </section>

        <section style={{ marginTop: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 14px", color: "#1A1A1A" }}>Frequently Asked Questions</h2>
          {[
            { q: "What if my camera uses a HiSilicon SoC?", a: "HiSilicon is a subsidiary of Huawei. Cameras using HiSilicon chipsets are widely considered non-compliant with NDAA Section 889 — regardless of which brand sells them." },
            { q: "Are Hikvision OEM brands compliant?", a: "No. The NDAA rule applies to the underlying manufacturer, not the reseller brand. Hikvision and Dahua have many documented OEM partners; cameras from those partners that ship Hikvision/Dahua hardware are non-compliant." },
            { q: "What about Indian or Taiwanese manufacturers?", a: "Manufacturers based outside the named entities — including Indian, Taiwanese, Korean, Japanese and European companies — can produce NDAA-compliant cameras, provided they do not use components from the named entities. Always request written attestation." },
            { q: "How do I prove compliance for procurement?", a: "Request: (1) a signed NDAA Section 889 attestation letter, (2) Bill-of-Materials with SoC and major component provenance, (3) factory ISO certification, and (4) for higher-assurance procurement, a third-party audit report." },
            { q: "What if I already have non-compliant cameras installed?", a: "Federal contracts typically require replacement before contract performance or fund disbursement. Adiance offers drop-in model mapping for migration — same form factor, ONVIF profile and resolution, compliant SoC." },
          ].map((f, i) => (
            <details key={i} style={{ border: "1px solid #E5E5E5", borderRadius: 8, padding: "12px 16px", marginBottom: 10, background: "#FFF" }}>
              <summary style={{ fontWeight: 600, cursor: "pointer", color: "#1A1A1A" }}>{f.q}</summary>
              <p style={{ color: "#444", lineHeight: 1.6, marginTop: 8, marginBottom: 0 }}>{f.a}</p>
            </details>
          ))}
        </section>

        <section style={{ marginTop: 32, background: "#FFF", border: "1px solid #E5E5E5", borderRadius: 12, padding: 24 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px", color: "#1A1A1A" }}>About This Tool</h2>
          <p style={{ color: "#444", lineHeight: 1.7, marginBottom: 10 }}>
            This checker is provided by <a href="/" style={{ color: "#BF0603" }}>Adiance Technologies</a> as a free public reference based on publicly available NDAA Section 889 text, FAR clauses 52.204-24 to 52.204-26, and industry-published OEM and SoC directories. It is informational and does not constitute legal advice or a substitute for written procurement attestation.
          </p>
          <p style={{ color: "#444", lineHeight: 1.7, marginBottom: 0 }}>
            Adiance is a BIS-registered (R-72003735) OEM/ODM camera manufacturer in Ahmedabad, India, building Section 889-compliant cameras on non-Chinese SoC platforms — and the company is publicly listed under the BIS CRS register (verify on <a href="https://www.crsbis.in" rel="nofollow" style={{ color: "#BF0603" }}>crsbis.in</a>).
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
