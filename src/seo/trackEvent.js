// Push a conversion / interaction event to the GTM dataLayer.
//
// Always creates window.dataLayer if it doesn't exist yet. GTM only loads
// after cookie consent (see the gtm-loader script in app/layout.js); events
// pushed before that are kept in the array and GTM processes them when it
// loads later in the same page view.
//
// Tracking must never break a form, so every error is swallowed.
//
// NOTE: a dataLayer event only reaches GA4 if GTM has a matching
// "Custom Event" trigger + GA4 event tag. See the SEO fix notes for the
// event names that need a GTM tag.
export function trackEvent(event, params = {}) {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  } catch (e) {
    /* ignore */
  }
}
