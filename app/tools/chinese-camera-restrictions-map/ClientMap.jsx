"use client";

import React, { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { RESTRICTIONS, REGIONS, STATUS_TYPES } from "./data";

const Header = dynamic(() => import("@/components/Header/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer/Footer"), { ssr: false });

const statusMeta = Object.fromEntries(STATUS_TYPES.filter(s => s.id !== "all").map(s => [s.id, s]));

export default function ClientMap() {
  const [region, setRegion] = useState("all");
  const [status, setStatus] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return RESTRICTIONS.filter(r =>
      (region === "all" || r.region === region) &&
      (status === "all" || r.status === status) &&
      (!q || r.country.toLowerCase().includes(q) || r.regulation.toLowerCase().includes(q))
    );
  }, [region, status, query]);

  const stats = useMemo(() => ({
    total: RESTRICTIONS.length,
    federal: RESTRICTIONS.filter(r => r.status === "federal").length,
    active: RESTRICTIONS.filter(r => ["federal","sector","procure"].includes(r.status)).length,
    watch: RESTRICTIONS.filter(r => r.status === "watch").length,
  }), []);

  return (
    <div style={{ background: "#FAFAFA", minHeight: "100vh" }}>
      <Header />
      <main style={{ maxWidth: 1120, margin: "0 auto", padding: "32px 20px 80px", color: "#222" }}>
        <nav style={{ fontSize: 13, color: "#666", marginBottom: 18 }}>
          <a href="/" style={{ color: "#666" }}>Home</a> &rsaquo; <a href="/tools" style={{ color: "#666" }}>Tools</a> &rsaquo; Chinese Camera Restrictions Map
        </nav>

        <h1 style={{ fontSize: 38, fontWeight: 800, lineHeight: 1.2, margin: "8px 0 12px", color: "#1A1A1A" }}>
          Where Chinese Cameras Are Restricted — 2026 Live Map
        </h1>
        <p style={{ fontSize: 17, color: "#444", lineHeight: 1.6, marginBottom: 24 }}>
          A continuously-updated reference of every country with active restrictions on Chinese-manufactured surveillance cameras. Built and maintained by <a href="/" style={{ color: "#BF0603" }}>Adiance Technologies</a>, a BIS-registered (R-72003735) NDAA-compliant OEM/ODM camera manufacturer in India.
        </p>

        {/* Stats banner */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: 28 }}>
          {[
            { label: "Countries tracked", value: stats.total, accent: "#1A1A1A" },
            { label: "Active restrictions", value: stats.active, accent: "#BF0603" },
            { label: "Federal bans", value: stats.federal, accent: "#7A0301" },
            { label: "On watch list", value: stats.watch, accent: "#384B7A" },
          ].map((s, i) => (
            <div key={i} style={{ background: "#FFF", border: "1px solid #E5E5E5", borderRadius: 10, padding: "16px 18px" }}>
              <div style={{ fontSize: 30, fontWeight: 800, color: s.accent, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "#666", marginTop: 6, textTransform: "uppercase", letterSpacing: 0.4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ background: "#FFF", border: "1px solid #E5E5E5", borderRadius: 10, padding: 16, marginBottom: 20 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#666", display: "block", marginBottom: 4, textTransform: "uppercase" }}>Region</label>
              <select value={region} onChange={e => setRegion(e.target.value)} style={{ width: "100%", padding: "10px 12px", border: "1px solid #CCC", borderRadius: 6, fontSize: 14, background: "#FFF" }}>
                {REGIONS.map(r => <option key={r.id} value={r.id}>{r.label}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#666", display: "block", marginBottom: 4, textTransform: "uppercase" }}>Status</label>
              <select value={status} onChange={e => setStatus(e.target.value)} style={{ width: "100%", padding: "10px 12px", border: "1px solid #CCC", borderRadius: 6, fontSize: 14, background: "#FFF" }}>
                {STATUS_TYPES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#666", display: "block", marginBottom: 4, textTransform: "uppercase" }}>Search</label>
              <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Country or regulation"
                style={{ width: "100%", padding: "10px 12px", border: "1px solid #CCC", borderRadius: 6, fontSize: 14 }} />
            </div>
          </div>
          <div style={{ fontSize: 13, color: "#666", marginTop: 12 }}>
            Showing <strong style={{ color: "#1A1A1A" }}>{filtered.length}</strong> of {RESTRICTIONS.length}.
          </div>
        </div>

        {/* Results grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 14, marginBottom: 32 }}>
          {filtered.map((r, i) => {
            const m = statusMeta[r.status] || statusMeta.guidance;
            return (
              <article key={i} style={{ background: "#FFF", border: "1px solid #E5E5E5", borderLeft: `4px solid ${m.color}`, borderRadius: 8, padding: 18 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                  <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: "#1A1A1A" }}>{r.country}</h2>
                  <span style={{ background: m.bg, color: m.color, fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 4, textTransform: "uppercase", letterSpacing: 0.4 }}>{m.label}</span>
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 4 }}>{r.regulation}</div>
                <div style={{ fontSize: 12, color: "#888", marginBottom: 10 }}>Effective: {r.effective}</div>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.5, margin: "0 0 8px" }}><strong>Scope:</strong> {r.scope}</p>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.55, margin: "0 0 10px" }}>{r.detail}</p>
                {r.source && (
                  <a href={r.source} target="_blank" rel="nofollow noopener" style={{ fontSize: 12, color: "#BF0603", textDecoration: "none" }}>
                    Official source &rarr;
                  </a>
                )}
              </article>
            );
          })}
          {filtered.length === 0 && (
            <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px 20px", color: "#888" }}>
              No countries match the current filters.
            </div>
          )}
        </div>

        {/* The takeaway / CTA */}
        <section style={{ background: "#FFF7F0", borderTop: "3px solid #BF0603", borderRadius: 10, padding: "28px 24px", marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px", color: "#1A1A1A" }}>What this map means for your business</h2>
          <p style={{ color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            The trajectory is one-directional. Restrictions started with US federal NDAA in 2019. Within six years, every Five Eyes economy, both Baltics' close partners, and India have implemented restrictions. Active debates in the Netherlands, Germany, France and Italy point to continued expansion across the EU through 2026–2028.
          </p>
          <p style={{ color: "#444", lineHeight: 1.7, marginBottom: 18 }}>
            For distributors, integrators, telecoms and brands whose customers are based in any of the {stats.active} jurisdictions with active restrictions — or any of the {stats.watch} jurisdictions on watch — supply-chain compliance is no longer optional. Buyers and resellers shifting to non-Chinese supply now capture both the current restricted-procurement market and the future expansion as more jurisdictions follow.
          </p>
          <a href="/contact" style={{ background: "#BF0603", color: "#FFF", padding: "12px 24px", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none", display: "inline-block", marginRight: 12 }}>
            Request a Compliant Sample
          </a>
          <a href="/tools/ndaa-compliance-checker" style={{ background: "transparent", color: "#BF0603", padding: "12px 24px", border: "1px solid #BF0603", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none", display: "inline-block" }}>
            Check Your Current Camera &rarr;
          </a>
        </section>

        {/* Methodology */}
        <section style={{ background: "#FFF", border: "1px solid #E5E5E5", borderRadius: 10, padding: 24, marginBottom: 20 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#1A1A1A" }}>Methodology and updates</h2>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, marginBottom: 8 }}>
            This map is compiled from official government sources, parliamentary records and primary regulatory documents. Each country entry links to its official source where available. Status categories are normalized across jurisdictions for comparison.
          </p>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, marginBottom: 8 }}>
            <strong>Last updated:</strong> June 2026. Next scheduled update: October 2026.
          </p>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, marginBottom: 0 }}>
            Spotted a restriction we missed, or an entry that needs correcting? Email <a href="mailto:sales@adiance.com" style={{ color: "#BF0603" }}>sales@adiance.com</a> with the source and we will review and update.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
