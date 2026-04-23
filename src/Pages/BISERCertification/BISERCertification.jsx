import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import BISHeroSection from '../Home/BISHeroSection/BISHeroSection';
import BISValueSection from './Components/BISValueSection';
import BISOEMSection from './Components/BISOEMSection';
import BISBusinessSection from './Components/BISBusinessSection';
import BISGatewaySection from './Components/BISGatewaySection';
import CTASection from '../../N_Component/CTASection';
import Footer from '../../components/Footer/Footer';

const BISERCertification = () => {
  const location = useLocation();
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Helmet>
        <title>BIS-ER Certified by STQC | Ready for Your Brand | Adiance</title>
        <meta
          name="description"
          content="Adiance is BIS-ER certified by STQC Certification. Launch fully compliant CCTV and surveillance products in India under your own brand."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="BIS-ER Certified by STQC | Ready for Your Brand | Adiance" />
        <meta property="og:description" content="Adiance is BIS-ER certified by STQC Certification. Launch fully compliant CCTV and surveillance products in India under your own brand." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Adiance Technologies" />
      </Helmet>

      <Header />
      <BISHeroSection />
      <BISValueSection />
      <BISOEMSection />
      <BISBusinessSection />
      <BISGatewaySection />
      <CTASection
        title="Build Your Brand. Enter the Market with Confidence."
        description="Launch compliant, certified surveillance products—backed by expert manufacturing and certification support."
        buttonText="Start Your OEM Journey"
        buttonLink="/contact"
      />
      <Footer />
    </div>
  );
};

export default BISERCertification;
