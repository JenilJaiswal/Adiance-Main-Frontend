"use client";

import { useEffect } from 'react';
const SITE_NAME = 'Adiance';
const BASE_URL = 'https://www.adiance.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.webp`;
function setMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr === 'property' ? 'property' : 'name', key); document.head.appendChild(el); }
  el.setAttribute('content', content);
}
function setCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) { link = document.createElement('link'); link.setAttribute('rel', 'canonical'); document.head.appendChild(link); }
  link.setAttribute('href', url);
}
function injectJsonLd(obj) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(obj);
  script.setAttribute('data-seo-injected', 'true');
  document.head.appendChild(script);
  return script;
}
export default function useSEO({ title = 'Global OEM & ODM CCTV Camera Manufacturer | Adiance', description = 'Adiance is a global OEM & ODM CCTV camera manufacturer.', canonicalUrl = `${BASE_URL}${typeof window !== 'undefined' ? window.location.pathname : '/'}`, ogImage = DEFAULT_OG_IMAGE, ogType = 'website', schemas = [], faqs = null, keywords = '', noindex = false } = {}) {
  useEffect(() => {
    document.title = title;
    setMeta('name', 'description', description);
    if (keywords) setMeta('name', 'keywords', keywords);
    setCanonical(canonicalUrl);
    // Add hreflang tags for international SEO
    const setHreflang = (lang, href) => {
      let link = document.querySelector(`link[hreflang="${lang}"]`);
      if (!link) { link = document.createElement("link"); link.setAttribute("rel", "alternate"); link.setAttribute("hreflang", lang); document.head.appendChild(link); }
      link.setAttribute("href", href);
    };
    setHreflang("en", canonicalUrl);
    setHreflang("x-default", canonicalUrl);
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:locale', 'en_US');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);
    setMeta('name', 'twitter:site', '@AdianceTech');
    // Clean up previously injected SEO scripts to prevent duplicates
    document.querySelectorAll('script[data-seo-injected]').forEach(s => s.parentNode.removeChild(s));
    const injected = [];
    schemas.forEach((schema) => { injected.push(injectJsonLd(schema)); });
    if (faqs && faqs.items && faqs.items.length > 0) {
      injected.push(injectJsonLd({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.items.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) }));
    }
    return () => { injected.forEach((s) => { if (s.parentNode) s.parentNode.removeChild(s); }); };
  }, [title, description, canonicalUrl, ogImage, ogType, schemas, faqs, keywords, noindex]);
}
