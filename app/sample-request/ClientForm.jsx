"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer/Footer"), { ssr: false });

const CAMERA_OPTIONS = [
  "Edge AI Bullet (S-Series)",
  "Edge AI Dome (S-Series)",
  "4K ANPR Bullet",
  "4G/LTE Bullet",
  "PTZ — 36x Zoom",
  "Thermal Bullet",
  "I'm not sure — recommend one",
];

const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL || "https://backend.adiance.com";

export default function ClientForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    cameraInterest: CAMERA_OPTIONS[0],
    notes: "",
  });
  const [status, setStatus] = useState({ phase: "idle", msg: "" });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.company || !form.email || !form.country) {
      setStatus({ phase: "error", msg: "Please fill in all required fields." });
      return;
    }
    setStatus({ phase: "loading", msg: "" });
    try {
      const payload = {
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        location: form.country,
        enquiryFor: "Sample Request",
        businessType: "Sample Request",
        camerasFor: form.cameraInterest,
        customerType: "New Customer",
        message: form.notes,
        source: "Adiance Website — Sample Request",
        businessUnit: "Adiance Technologies Pvt Ltd",
      };
      const res = await fetch(`${BACKEND}/api/crm-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus({ phase: "success", msg: "" });
    } catch (err) {
      setStatus({ phase: "error", msg: "Something went wrong. Email sales@adiance.com directly." });
    }
  };

  if (status.phase === "success") {
    return (
      <div style={{ background: "#FAFAFA", minHeight: "100vh" }}>
        <Header />
        <main style={{ maxWidth: 720, margin: "0 auto", padding: "60px 20px 80px", textAlign: "center", color: "#222" }}>
          <div style={{ fontSize: 60, marginBottom: 16 }}>✓</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 12px", color: "#1A1A1A" }}>Sample request received</h1>
          <p style={{ fontSize: 17, color: "#444", lineHeight: 1.6, marginBottom: 18 }}>
            Thank you, {form.name}. Our sales team will email you within 24 hours to confirm shipping details and your sample SKU. Expected delivery to {form.country}: 7-10 business days.
          </p>
          <p style={{ fontSize: 15, color: "#666", marginBottom: 28 }}>
            Reference: sample-{Date.now().toString(36)}
          </p>
          <a href="/" style={{ background: "#BF0603", color: "#FFF", padding: "12px 24px", borderRadius: 8, fontWeight: 600, textDecoration: "none" }}>Back to home</a>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ background: "#FAFAFA", minHeight: "100vh" }}>
      <Header />
      <main style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 80px", color: "#222" }}>
        <nav style={{ fontSize: 13, color: "#666", marginBottom: 18 }}>
          <a href="/" style={{ color: "#666" }}>Home</a> &rsaquo; Request a Sample
        </nav>

        <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.2, margin: "8px 0 12px", color: "#1A1A1A" }}>
          Request a Free Sample
        </h1>
        <p style={{ fontSize: 17, color: "#444", lineHeight: 1.6, marginBottom: 8 }}>
          One Adiance camera shipped to your address for evaluation. No purchase commitment.
        </p>
        <div style={{ display: "flex", gap: 18, fontSize: 14, color: "#555", marginBottom: 28, flexWrap: "wrap" }}>
          <span>✓ NDAA Section 889 compliant</span>
          <span>✓ BIS Reg. R-72003735</span>
          <span>✓ 7-10 business days delivery</span>
        </div>

        <form onSubmit={handleSubmit} style={{ background: "#FFF", border: "1px solid #E5E5E5", borderRadius: 12, padding: 28, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            <Field label="Your name *" name="name" value={form.name} onChange={handleChange} required />
            <Field label="Company *" name="company" value={form.company} onChange={handleChange} required />
            <Field label="Work email *" name="email" type="email" value={form.email} onChange={handleChange} required />
            <Field label="Phone (with country code)" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 555 123 4567" />
            <Field label="Shipping country *" name="country" value={form.country} onChange={handleChange} required placeholder="e.g. USA, UK, UAE" wide />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", fontSize: 14, fontWeight: 600, marginBottom: 6 }}>Which camera type interests you most?</label>
            <select name="cameraInterest" value={form.cameraInterest} onChange={handleChange} style={inputStyle}>
              {CAMERA_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 14, fontWeight: 600, marginBottom: 6 }}>Notes <span style={{ color: "#888", fontWeight: 400 }}>(optional)</span></label>
            <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} placeholder="Use case, project, target launch date — anything that helps us recommend the right sample SKU." style={{ ...inputStyle, fontFamily: "inherit", resize: "vertical" }} />
          </div>
          {status.phase === "error" && <div style={{ color: "#BF0603", marginBottom: 14, fontSize: 14 }}>{status.msg}</div>}
          <button type="submit" disabled={status.phase === "loading"} style={{
            background: "#BF0603", color: "#FFF", border: 0, padding: "13px 28px",
            borderRadius: 8, fontSize: 16, fontWeight: 700, cursor: "pointer",
            opacity: status.phase === "loading" ? 0.7 : 1,
          }}>
            {status.phase === "loading" ? "Sending..." : "Request my sample"}
          </button>
          <p style={{ fontSize: 12, color: "#888", marginTop: 14, marginBottom: 0 }}>
            By submitting, you agree to be contacted about your sample. No newsletter signup; you can unsubscribe anytime.
          </p>
        </form>

        <p style={{ marginTop: 24, textAlign: "center", color: "#666", fontSize: 14 }}>
          Need pricing or volume quote instead? <a href="/contact" style={{ color: "#BF0603" }}>Get a full quote &rarr;</a>
        </p>
      </main>
      <Footer />
    </div>
  );
}

const inputStyle = {
  width: "100%", padding: "11px 14px", border: "1px solid #CCC",
  borderRadius: 8, fontSize: 15, background: "#FFF",
};

function Field({ label, wide, ...props }) {
  return (
    <div style={{ gridColumn: wide ? "1 / -1" : "auto" }}>
      <label style={{ display: "block", fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{label}</label>
      <input style={inputStyle} {...props} />
    </div>
  );
}
