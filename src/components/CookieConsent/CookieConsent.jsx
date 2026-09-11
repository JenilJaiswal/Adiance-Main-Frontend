"use client";

import { useEffect, useState } from "react";
import "./CookieConsent.css";

// Kept in sync with the two inline loader scripts in app/layout.js
// (gtm-loader, fb-pixel-loader) — all three must use this exact key/value
// pair or the gate silently stops working.
const CONSENT_KEY = "adiance_cookie_consent";
const CONSENT_GRANTED_EVENT = "adiance:consent-granted";
const OPEN_PREFERENCES_EVENT = "adiance:open-cookie-preferences";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored = null;
    try {
      stored = localStorage.getItem(CONSENT_KEY);
    } catch (e) {
      // Storage blocked (private mode, locked-down browser settings) — fail
      // open to showing the banner every visit rather than silently assuming
      // consent either way.
    }
    if (!stored) {
      setVisible(true);
    }

    const openPreferences = () => setVisible(true);
    window.addEventListener(OPEN_PREFERENCES_EVENT, openPreferences);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, openPreferences);
  }, []);

  const choose = (value) => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch (e) {
      // If storage is blocked the choice can't persist across visits, but it
      // still applies for the rest of this page load via the event below.
    }
    setVisible(false);
    if (value === "granted") {
      window.dispatchEvent(new Event(CONSENT_GRANTED_EVENT));
    }
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <p className="cookie-consent-text">
        We use cookies and similar technologies — including Google Tag Manager and the Meta (Facebook) Pixel — to
        understand site traffic and improve your experience. These only load if you accept. See our{" "}
        <a href="/privacy-policy">Privacy Policy</a> for details.
      </p>
      <div className="cookie-consent-actions">
        <button
          type="button"
          className="cookie-consent-btn cookie-consent-decline"
          onClick={() => choose("denied")}
        >
          Decline
        </button>
        <button
          type="button"
          className="cookie-consent-btn cookie-consent-accept"
          onClick={() => choose("granted")}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
