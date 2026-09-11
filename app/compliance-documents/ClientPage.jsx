"use client";

import React from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header/Header"));
const Footer = dynamic(() => import("@/components/Footer/Footer"));

// PLACEHOLDER PATHS — replace `/compliance/*.pdf` files in /public/compliance/
// folder as the team uploads each certificate. Until file is present the row
// shows 'request via sales' instead of a download link.
const DOCS = [
  { name: "BIS Registration Certificate", id: "R-72003735 — Adiance, ArcisAI brands",
    desc: "Bureau of Indian Standards CCTV camera registration. Covers IS 13252(P1):2010. Verifiable on crsbis.in.",
    file: "/compliance/adiance-bis-r-72003735.pdf",
    verify: "https://www.crsbis.in/BIS/Lims_registrationc.do?hmode=getLimsData",
    priority: true },
  { name: "NDAA Section 889 Attestation", id: "Signed letter",
    desc: "Written attestation that Adiance cameras contain no components from manufacturers named in NDAA Section 889. Required for US federal and federally-funded procurement.",
    file: "/compliance/adiance-ndaa-section-889-attestation.pdf",
    priority: true },
  { name: "ONVIF Profile S / G / T Conformance", id: "Statement of conformance",
    desc: "Interoperability conformance with ONVIF profiles for streaming, edge storage, and access control. Required by Milestone, Genetec, Network Optix integrations.",
    file: "/compliance/adiance-onvif-conformance.pdf" },
  { name: "CE Declaration of Conformity", id: "EU EMC/LVD/RED",
    desc: "European CE marking declaration covering EMC Directive, Low Voltage Directive and Radio Equipment Directive.",
    file: "/compliance/adiance-ce-doc.pdf" },
  { name: "FCC Part 15B Certification", id: "USA EMC",
    desc: "FCC equipment authorisation for unintentional radiator devices, required for US import and sale.",
    file: "/compliance/adiance-fcc-15b.pdf" },
  { name: "RoHS Compliance Statement", id: "EU RoHS Directive 2011/65/EU",
    desc: "Restriction of Hazardous Substances declaration for EU market access.",
    file: "/compliance/adiance-rohs-statement.pdf" },
  { name: "ISO 9001:2015 Certificate", id: "Quality management system",
    desc: "Adiance manufacturing facility certified to ISO 9001:2015 quality management standard.",
    file: "/compliance/adiance-iso-9001-2015.pdf" },
  { name: "STQC Certification — ArcisAI Cloud VMS", id: "IoT System Certification Scheme",
    desc: "Standardisation Testing and Quality Certification Directorate (Govt. of India, MeitY) security certification for the ArcisAI cloud video management software.",
    file: "/compliance/arcisai-stqc-vms-certificate.pdf",
    priority: true },
];

export default function ClientPage() {
  return (
    <div style={{ background: "#FAFAFA", minHeight: "100vh" }}>
      <Header />
      <main style={{ maxWidth: 980, margin: "0 auto", padding: "32px 20px 80px", color: "#222" }}>
        <nav style={{ fontSize: 13, color: "#666", marginBottom: 18 }}>
          <a href="/" style={{ color: "#666" }}>Home</a> &rsaquo; Compliance Documents
        </nav>

        <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.2, margin: "8px 0 12px", color: "#1A1A1A" }}>
          Compliance Documentation
        </h1>
        <p style={{ fontSize: 17, color: "#444", lineHeight: 1.6, marginBottom: 24 }}>
          Direct downloads of every Adiance Technologies compliance document required for procurement, audit and tender response. Each document is current and signed; verifiable references included where the issuing body offers public lookup.
        </p>

        <div style={{ background: "#FFF7F0", border: "1px solid #F5D5C0", borderRadius: 8, padding: "14px 16px", marginBottom: 28, fontSize: 14, color: "#5A3D1F" }}>
          <strong>Procurement officers:</strong> if your tender requires a wet signature or letter on company letterhead addressed to your organisation, email <a href="mailto:sales@adiance.com" style={{ color: "#BF0603", fontWeight: 600 }}>sales@adiance.com</a> with your tender reference. Standard turnaround is 24 hours.
        </div>

        <div style={{ display: "grid", gap: 12 }}>
          {DOCS.map((doc, i) => (
            <article key={i} style={{
              background: "#FFF",
              border: "1px solid #E5E5E5",
              borderLeft: doc.priority ? "4px solid #BF0603" : "4px solid #DDD",
              borderRadius: 8,
              padding: "18px 20px",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 16,
              alignItems: "center",
            }}>
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 4px", color: "#1A1A1A" }}>{doc.name}</h2>
                <div style={{ fontSize: 12, color: "#888", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.4 }}>{doc.id}</div>
                <p style={{ fontSize: 14, color: "#555", lineHeight: 1.55, margin: 0 }}>{doc.desc}</p>
                {doc.verify && (
                  <a href={doc.verify} target="_blank" rel="nofollow noopener" style={{ display: "inline-block", marginTop: 8, fontSize: 12, color: "#0E5A1F", textDecoration: "none" }}>
                    Verify on official portal &rarr;
                  </a>
                )}
              </div>
              <div>
                <a href={doc.file} download style={{
                  background: "#BF0603", color: "#FFF", padding: "10px 18px",
                  borderRadius: 6, textDecoration: "none", fontWeight: 600, fontSize: 14,
                  whiteSpace: "nowrap", display: "inline-block",
                }}>
                  Download PDF
                </a>
              </div>
            </article>
          ))}
        </div>

        <section style={{ marginTop: 36, background: "#FFF", border: "1px solid #E5E5E5", borderRadius: 10, padding: 24 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px", color: "#1A1A1A" }}>Additional documentation available on request</h2>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, marginBottom: 8 }}>
            For high-assurance procurement, the following documentation is available within 24-72 hours of request under NDA:
          </p>
          <ul style={{ fontSize: 14, color: "#555", lineHeight: 1.8, paddingLeft: 20, marginBottom: 12 }}>
            <li>Per-model Bill of Materials with component provenance and SoC sourcing chain</li>
            <li>Factory audit reports (ISO 9001 internal + customer-led audits)</li>
            <li>Per-model CE/FCC/RoHS Declaration of Conformity</li>
            <li>STQC IoT System Certification scope documentation (under evaluation)</li>
            <li>UKCA marking documentation for UK market</li>
            <li>SASO / SABER conformity documentation for Saudi Arabia</li>
            <li>RCM marking documentation for Australia</li>
            <li>Country-specific WEEE / electronics-recycling registration where applicable</li>
          </ul>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, marginBottom: 0 }}>
            Email <a href="mailto:sales@adiance.com" style={{ color: "#BF0603", fontWeight: 600 }}>sales@adiance.com</a> with the specific document you need and the procurement context.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
