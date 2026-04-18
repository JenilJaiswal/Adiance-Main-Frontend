import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../../../components/Header/Header'
import OEM_Hero from './OEM_Hero.jsx/OEM_Hero'
import Services_Details from '../../../N_Component/Services_Details/Services_Details';
import detailsData from '../../../N_Component/Services_Details/detailsData.json';
import OEM_CCTV from './OEM_CCTV/OEM_CCTV';
import OEM_Robotic_Arm from './OEM_Robotic_Arm/OEM_Robotic_Arm';
import OEM_PCB from './OEM_PCB/OEM_PCB';
import CTASection from '../../../N_Component/CTASection';
import Services_MakeInIndia from '../../../N_Component/Services_MakeInIndia/Services_MakeInIndia';
import Footer from '../../../components/Footer/Footer';
import Services_Diagram from '../../../N_Component/Services_Diagram/Services_Diagram';
import Services_Benefits from '../../../N_Component/Services_Benefits/Services_Benefits'
import Services_GlobalPresence from '../../../N_Component/Services_GlobalPresence/Services_GlobalPresence';
import FAQ_Section from '../../../N_Component/FAQ_Section/FAQ_Section';
import faqsData from '../../../N_Component/FAQ_Section/faqData.json';
import makeInIndiaData from '../../../N_Component/Services_MakeInIndia/makeInIndiaData.json'
import diagramData from '../../../N_Component/Services_Diagram/diagramData.json'
import benefitesData from '../../../N_Component/Services_Benefits/benefitsData.json'
import Clients from '../../../N_Component/Clients';
import Services_Banner_Comp from '../../../N_Component/Services_Banner_Comp/Services_Banner_Comp';
import bannerData from '../../../N_Component/Services_Banner_Comp/bannerData.json'
import globalPresenceData from '../../../N_Component/Services_GlobalPresence/globalPresenceData.json'
const OEM = () => {
  const containerStyle = {
    overflowX: 'hidden'
  };

  return (
    <div className='OEM_Container' style={containerStyle}>
      <Helmet>
        <title>OEM Manufacturer for CCTV, Robotics & PCB | OEM Company In India</title>
        <meta name="description" content="Looking for an OEM manufacturer in India? We deliver custom OEM manufacturing services for CCTV cameras, robotic arms and PCBs with full engineering support." />
        <link rel="canonical" href="https://www.adiance.com/oem-services" />
        <meta property="og:title" content="OEM Manufacturer for CCTV, Robotics & PCB | OEM Company In India" />
        <meta property="og:description" content="Looking for an OEM manufacturer in India? We deliver custom OEM manufacturing services for CCTV cameras, robotic arms and PCBs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.adiance.com/oem-services" />
        <meta property="og:site_name" content="Adiance Technologies" />
        <meta property="og:image" content="https://www.adiance.com/images/Logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adiancetech" />
      </Helmet>
      <Header />
      <OEM_Hero />
      <Services_Details {...detailsData.oem} />
      <Clients showTitle={false} />
      <Services_Banner_Comp {...bannerData.oem} />
      <OEM_CCTV />
      <OEM_Robotic_Arm />
      <OEM_PCB />
      <CTASection title='Looking for a Custom OEM Solution Provider to Build Your Next Product?' />
      <Services_MakeInIndia {...makeInIndiaData.oem} />
      <Services_Diagram {...diagramData.oemGathering} />
      <Services_Benefits {...benefitesData.oem} />
      <CTASection title='Still Wondering How OEM Manufacturing Services Can Work For You?' />
      <Services_GlobalPresence {...globalPresenceData.oem} />
      <FAQ_Section faqsList={faqsData.oem} />
      <Footer />
    </div>
  )
}

export default OEM