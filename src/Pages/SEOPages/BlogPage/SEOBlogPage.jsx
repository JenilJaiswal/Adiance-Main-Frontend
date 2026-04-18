import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import CTASection from '../../../N_Component/CTASection';
import blogData from '../../../data/seoBlogData.json';
import './SEOBlogPage.css';

const SEOBlogPage = ({ type = 'blog' }) => {
  const { pathname } = useLocation();

  // Determine slug based on path type
  let slug;
  if (type === 'case-study') {
    slug = pathname.replace('/case-study/', '').replace(/\/$/, '');
  } else {
    slug = pathname.replace('/blog/', '').replace(/\/$/, '');
  }

  const page = type === 'case-study'
    ? blogData['case-study']?.[slug]
    : blogData['blog']?.[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!page) {
    return (
      <div>
        <Header />
        <div style={{ padding: '120px 20px', textAlign: 'center' }}>
          <h1>Article not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  const canonicalUrl = `https://www.adiance.com${pathname}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": type === 'case-study' ? "Article" : "BlogPosting",
    "headline": page.seo.title,
    "description": page.seo.description,
    "url": canonicalUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Adiance",
      "url": "https://www.adiance.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.adiance.com/logo.svg"
      }
    },
    "datePublished": page.hero.publishDate
  };

  return (
    <div className="seo-blog-container">
      <Helmet>
        <title>{page.seo.title}</title>
        <meta name="description" content={page.seo.description} />
        <meta name="keywords" content={page.seo.keywords} />
        <meta property="og:title" content={page.seo.title} />
        <meta property="og:description" content={page.seo.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={page.seo.title} />
        <meta name="twitter:description" content={page.seo.description} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="sb-hero">
        <div className="sb-hero-inner">
          <div className="sb-hero-meta">
            <span className="sb-category">{page.hero.category}</span>
            {page.hero.readTime && (
              <>
                <span className="sb-meta-dot">·</span>
                <span className="sb-read-time">{page.hero.readTime}</span>
              </>
            )}
            {page.hero.publishDate && (
              <>
                <span className="sb-meta-dot">·</span>
                <span className="sb-publish-date">{page.hero.publishDate}</span>
              </>
            )}
          </div>
          <h1 className="sb-hero-title">{page.hero.title}</h1>
          <p className="sb-hero-subtitle">{page.hero.subtitle}</p>
        </div>
      </section>

      {/* Case Study Stats (if case study) */}
      {type === 'case-study' && page.results && (
        <section className="sb-case-results">
          {page.results.map((r, i) => (
            <div key={i} className="sb-case-result-item">
              <span className="sb-case-result-metric">{r.metric}</span>
              <span className="sb-case-result-label">{r.label}</span>
            </div>
          ))}
        </section>
      )}

      {/* Case Study Client Info */}
      {type === 'case-study' && page.client && (
        <section className="sb-client-info">
          <div className="sb-client-inner">
            <div className="sb-client-detail">
              <span className="sb-client-key">Industry</span>
              <span className="sb-client-val">{page.client.industry}</span>
            </div>
            <div className="sb-client-detail">
              <span className="sb-client-key">Region</span>
              <span className="sb-client-val">{page.client.region}</span>
            </div>
            <div className="sb-client-detail">
              <span className="sb-client-key">Challenge</span>
              <span className="sb-client-val">{page.client.challenge}</span>
            </div>
          </div>
        </section>
      )}

      {/* Article Body */}
      <div className="sb-layout">
        <article className="sb-article">
          {page.sections.map((section, i) => (
            <div key={i} className="sb-section">
              <h2 className="sb-section-heading">{section.heading}</h2>
              <p className="sb-section-content">{section.content}</p>
            </div>
          ))}

          {/* Key Takeaways */}
          {page.keyTakeaways && (
            <div className="sb-takeaways">
              <h3 className="sb-takeaways-title">Key Takeaways</h3>
              <ul className="sb-takeaways-list">
                {page.keyTakeaways.map((t, i) => (
                  <li key={i} className="sb-takeaway-item">
                    <span className="sb-takeaway-check">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>

        {/* Sidebar */}
        <aside className="sb-sidebar">
          <div className="sb-sidebar-card">
            <h3 className="sb-sidebar-title">Talk to an Expert</h3>
            <p className="sb-sidebar-desc">
              Get a personalized OEM quote for your camera project. Our team typically responds within 2 hours.
            </p>
            <a href="/contact" className="sb-sidebar-cta">Get a Free Quote</a>
          </div>

          <div className="sb-sidebar-card sb-sidebar-links">
            <h3 className="sb-sidebar-title">Related Pages</h3>
            <ul className="sb-related-list">
              <li><a href="/non-chinese-soc-camera-manufacturer">Non-Chinese SoC Cameras</a></li>
              <li><a href="/ndaa-compliant-cctv-camera-manufacturer">NDAA Compliant Cameras</a></li>
              <li><a href="/white-label-cctv-camera-manufacturer">White Label OEM Cameras</a></li>
              <li><a href="/oem-white-label-platform">OEM Platform Overview</a></li>
              <li><a href="/start-your-own-cctv-brand">Start Your CCTV Brand</a></li>
            </ul>
          </div>
        </aside>
      </div>

      {/* CTA Banner */}
      <CTASection
        title={page.ctaTitle || 'Ready to Start Your OEM Camera Project with Adiance?'}
        buttonText="Get a Free Quote"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default SEOBlogPage;