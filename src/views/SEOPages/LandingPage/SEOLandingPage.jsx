"use client";

import React, { useEffect } from 'react';
import { useLocation } from '@/compat/react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Clients from '../../../N_Component/Clients';
import CTASection from '../../../N_Component/CTASection';
import FAQ_Section from '../../../N_Component/FAQ_Section/FAQ_Section';
import landingData from '../../../data/seoLandingData.json';
import './SEOLandingPage.css';

const SEOLandingPage = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace('/', '').replace(/\/$/, '');

  const page = landingData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!page) {
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

  const faqsList = page.faq
    ? {
        title: 'Frequently Asked Questions',
        qa: page.faq.map(f => ({ question: f.question, answer: f.answer }))
      }
    : null;

  const canonicalUrl = `https://www.adiance.com/${slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": page.seo.title,
    "description": page.seo.description,
    "url": canonicalUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Adiance",
      "url": "https://www.adiance.com"
    }
  };

  return (
    <div className="seo-landing-container">
      <Helmet>
        <title>{page.seo.title}</title>
        <meta name="description" content={page.seo.description} />
        <meta name="keywords" content={page.seo.keywords} />
        <meta property="og:title" content={page.seo.title} />
        <meta property="og:description" content={page.seo.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={page.seo.title} />
        <meta name="twitter:description" content={page.seo.description} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="sl-hero">
        <div className="sl-hero-bg-pattern" />
        <div className="sl-hero-content">
          <h1
            className="sl-hero-title"
            dangerouslySetInnerHTML={{ __html: page.hero.title }}
          />
          <p className="sl-hero-subtitle">{page.hero.subtitle}</p>
          <a href="/contact" className="sl-hero-cta">
            {page.hero.ctaText}
          </a>
        </div>
      </section>

      {/* Stats Strip */}
      {page.stats && (
        <section className="sl-stats">
          {page.stats.map((stat, i) => (
            <div key={i} className="sl-stat-item">
              <span className="sl-stat-value">{stat.value}</span>
              <span className="sl-stat-label">{stat.label}</span>
            </div>
          ))}
        </section>
      )}

      {/* Intro */}
      {page.intro && (
        <section className="sl-intro">
          <div className="sl-intro-inner">
            <h2 className="sl-intro-title">{page.intro.title}</h2>
            <p className="sl-intro-desc">{page.intro.description}</p>
          </div>
        </section>
      )}

      {/* Features / Key Capabilities */}
      {page.features && (
        <section className="sl-features">
          <div className="sl-features-inner">
            <h2 className="sl-section-title">Key Capabilities</h2>
            <div className="sl-features-grid">
              {page.features.map((feature, i) => (
                <div key={i} className="sl-feature-card">
                  <div className="sl-feature-icon">{feature.icon}</div>
                  <h3 className="sl-feature-title">{feature.title}</h3>
                  <p className="sl-feature-desc">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Applications / Use Cases */}
      {page.applications && (
        <section className="sl-applications">
          <div className="sl-section-inner">
            <h2 className="sl-section-title-left">{page.applications.heading}</h2>
            <div className="sl-cards-grid">
              {page.applications.cards.map((card, i) => (
                <div key={i} className="sl-app-card">
                  <div className="sl-app-icon">{card.icon}</div>
                  <h3 className="sl-app-title">{card.title}</h3>
                  <p className="sl-app-desc">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Cards */}
      {page.whyCards && (
        <section className="sl-why">
          <div className="sl-section-inner">
            <h2 className="sl-section-title-left">{page.whyCards.heading}</h2>
            <div className="sl-cards-grid">
              {page.whyCards.cards.map((card, i) => (
                <div key={i} className="sl-why-card">
                  <div className="sl-why-icon">{card.icon}</div>
                  <h3 className="sl-why-title">{card.title}</h3>
                  <p className="sl-why-desc">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Market Context */}
      {page.marketContext && (
        <section className="sl-market-context">
          <div className="sl-section-inner">
            <h2 className="sl-section-title-left">{page.marketContext.heading}</h2>
            <div className="sl-market-paragraphs">
              {page.marketContext.paragraphs.map((p, i) => (
                <p key={i} className="sl-market-para">{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Comparison Table */}
      {page.comparisonTable && (
        <section className="sl-comparison">
          <div className="sl-section-inner">
            <h2 className="sl-section-title-left">{page.comparisonTable.heading}</h2>
            <div className="sl-table-wrap">
              <table className="sl-table">
                <thead>
                  <tr>
                    {page.comparisonTable.columns.map((col, i) => (
                      <th key={i}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {page.comparisonTable.rows.map((row, i) => (
                    <tr key={i}>
                      <td><strong>{row.feature}</strong></td>
                      <td>{row.col1}</td>
                      <td className="sl-table-highlight">{row.col2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Product Showcase */}
      {page.productShowcase && (
        <section className="sl-products">
          <div className="sl-section-inner">
            <h2 className="sl-section-title-left">{page.productShowcase.heading}</h2>
            <div className="sl-products-grid">
              {page.productShowcase.products.map((product, i) => (
                <div key={i} className="sl-product-card">
                  {product.badge && <span className="sl-product-badge">{product.badge}</span>}
                  <h3 className="sl-product-title">{product.title}</h3>
                  <p className="sl-product-desc">{product.description}</p>
                  {product.features && product.features.length > 0 && (
                    <ul className="sl-product-features">
                      {product.features.map((f, j) => (
                        <li key={j}>{f}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Region Grid */}
      {page.regionGrid && (
        <section className="sl-regions">
          <div className="sl-section-inner">
            <h2 className="sl-section-title-left">{page.regionGrid.heading}</h2>
            <div className="sl-regions-grid">
              {page.regionGrid.regions.map((region, i) => (
                <div key={i} className="sl-region-card">
                  <div className="sl-region-icon">{region.icon}</div>
                  <h3 className="sl-region-title">{region.name}</h3>
                  <p className="sl-region-desc">{region.description}</p>
                  {region.countries && region.countries.length > 0 && (
                    <ul className="sl-region-countries">
                      {region.countries.map((c, j) => (
                        <li key={j}><a href={c.url}>{c.name}</a></li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Clients */}
      <Clients showTitle={true} />

      {/* CTA */}
      <CTASection
        title={`Ready to Get Started with ${page.hero.title.replace(/<br\/>/g, ' ').replace(/<[^>]*>/g, '')}?`}
        buttonText={page.hero.ctaText}
        buttonLink="/contact"
      />

      {/* Related Links */}
      {page.relatedLinks && page.relatedLinks.length > 0 && (
        <section className="sl-related">
          <div className="sl-section-inner">
            <h2 className="sl-section-title-left">Related Resources</h2>
            <div className="sl-related-grid">
              {page.relatedLinks.map((link, i) => (
                <a key={i} href={link.url} className="sl-related-card">
                  <h4 className="sl-related-title">{link.title}</h4>
                  <p className="sl-related-desc">{link.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqsList && <FAQ_Section faqsList={faqsList} />}

      <Footer />
    </div>
  );
};

export default SEOLandingPage;
