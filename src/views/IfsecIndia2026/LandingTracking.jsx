"use client";

import { useEffect } from "react";

/**
 * Click tracking for the IFSEC India 2026 landing page.
 *
 * One small listener watches the page. Any link or button that has a
 * data-track="..." attribute sends that name to the GTM dataLayer.
 *
 * These are CLICK events only. They are never sent as `generate_lead`.
 * A lead is only counted when the enquiry form really succeeds
 * (see EnquiryForm.jsx).
 */
const ALLOWED = new Set([
  "ifsec26_meeting_cta_click",
  "ifsec26_whatsapp_click",
  "ifsec26_email_click",
  "ifsec26_service_page_click",
  "ifsec26_official_site_click",
]);

export default function LandingTracking() {
  useEffect(() => {
    const onClick = (event) => {
      const el = event.target instanceof Element
        ? event.target.closest("[data-track]")
        : null;
      if (!el) return;
      const name = el.getAttribute("data-track");
      if (!ALLOWED.has(name)) return;
      try {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: name,
          link_text: (el.textContent || "").trim().slice(0, 80),
          link_url: el.getAttribute("href") || undefined,
          cta_location: el.getAttribute("data-location") || undefined,
          page_name: "ifsec_india_2026",
        });
      } catch (e) {
        /* tracking must never break the page */
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
