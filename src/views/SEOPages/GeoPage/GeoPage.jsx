"use client";

import React, { useEffect } from 'react';
import { useLocation } from '@/compat/react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Clients from '../../../N_Component/Clients';
import CTASection from '../../../N_Component/CTASection';
import FAQ_Section from '../../../N_Component/FAQ_Section/FAQ_Section';
import geoData from '../../../data/geoPageData.json';
import './GeoPage.css';

const GeoPage = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace('/', '').replace(/\/$/, '');

  const country = geoData.countries[slug];
  const template = geoData._template;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!country) {
    return (
      <div>
        <Header />
        <div style={{ padding: '120px 20px', textAlign: 'center' }}>
          <h1>Page not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  const features = template.features;
  const stats = template.stats;
  const benefits = template.benefits;
  const faqs = country.faqOverride || template.faq;

  const faqsList = {
    title: `Frequently Asked Questions`,
    qa: faqs.map(f => ({ question: f.question, answer: f.answer }))
  };

  const canonicalUrl = `https://www.adiance.com/${slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": country.seo.title,
    "description": country.seo.description,
    "url": canonicalUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Adiance",
      "url": "https://www.adiance.com"
    }
  };

  return (
    <div className="geo-page-container">
      <Helmet>
        <title>{country.seo.title}</title>
        <meta name="description" content={country.seo.description} />
        <meta name="keywords" content={country.seo.keywords} />
        <meta property="og:title" content={country.seo.title} />
        <meta property="og:description" content={country.seo.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={country.seo.title} />
        <meta name="twitter:description" content={country.seo.description} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="geo-hero">
        <div className="geo-hero-overlay" />
        <div className="geo-hero-content">
          <div className="geo-hero-badge">{country.region}</div>
          <h1
            className="geo-hero-title"
            dangerouslySetInnerHTML={{ __html: country.hero.title }}
          />
          <p className="geo-hero-subtitle">{country.hero.subtitle}</p>
          <a href="/contact" className="geo-hero-cta">
            {country.hero.ctaText}
          </a>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="geo-stats">
        {stats.map((stat, i) => (
          <div key={i} className="geo-stat-item">
            <span className="geo-stat-value">{stat.value}</span>
            <span className="geo-stat-label">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Intro Section */}
      <section className="geo-intro">
        <div className="geo-intro-inner">
          <div className="geo-intro-text">
            <h2 className="geo-intro-title">{country.intro.title}</h2>
            <p className="geo-intro-desc">{country.intro.description}</p>
            <a href="/contact" className="geo-intro-cta">Partner with Adiance</a>
          </div>
          <div className="geo-intro-benefits">
            <ul className="geo-benefits-list">
              {benefits.map((b, i) => (
                <li key={i} className="geo-benefit-item">
                  <span className="geo-benefit-check">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Country Market Sections (optional per-country depth) */}
      {Array.isArray(country.marketSections) && country.marketSections.length > 0 && (
        <section className="geo-intro" style={{ paddingTop: 0 }}>
          <div className="geo-intro-inner" style={{ display: 'block' }}>
            {country.marketSections.map((sec, i) => (
              <div key={i} style={{ marginBottom: '32px' }}>
                <h2 className="geo-intro-title">{sec.title}</h2>
                {sec.paragraphs.map((p, j) => (
                  <p key={j} className="geo-intro-desc" style={{ marginBottom: '14px' }}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Local compliance & logistics (optional per-country) */}
      {country.localInfo && (
        <section className="geo-features" style={{ paddingTop: 0 }}>
          <div className="geo-features-inner">
            <h2 className="geo-section-title">
              {country.country} <span className="geo-accent">Compliance & Logistics</span>
            </h2>
            <div className="geo-features-grid">
              {country.localInfo.map((item, i) => (
                <div key={i} className="geo-feature-card">
                  <div className="geo-feature-icon">{item.icon}</div>
                  <h3 className="geo-feature-title">{item.title}</h3>
                  <p className="geo-feature-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Grid */}
      <section className="geo-features">
        <div className="geo-features-inner">
          <h2 className="geo-section-title">
            Why Adiance for <span className="geo-accent">{country.country}</span>
          </h2>
          <p className="geo-section-subtitle">
            Six reasons leading {country.country} security brands choose Adiance as their OEM partner
          </p>
          <div className="geo-features-grid">
            {features.map((feature, i) => (
              <div key={i} className="geo-feature-card">
                <div className="geo-feature-icon">{feature.icon}</div>
                <h3 className="geo-feature-title">{feature.title}</h3>
                <p className="geo-feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <Clients showTitle={true} />

      {/* CTA */}
      <CTASection
        title={`Ready to Launch Your CCTV Brand in ${country.country}?`}
        description={`Join 500+ OEM partners across 30 countries. Get a custom quote for ${country.country} market cameras.`}
        buttonText="Get a Free Quote"
        buttonLink="/contact"
      />

      {/* FAQ */}
      <FAQ_Section faqsList={faqsList} />

      <Footer />
    </div>
  );
};

export default GeoPage;
