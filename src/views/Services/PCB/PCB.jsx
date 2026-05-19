"use client";

import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import Header from '../../../components/Header/Header'
import Services_Hero from '../../../N_Component/Services_Hero/Services_Hero'
import heroData from '../../../N_Component/Services_Hero/heroData.json'
import Services_Details from '../../../N_Component/Services_Details/Services_Details'
import detailsData from '../../../N_Component/Services_Details/detailsData.json'
import Clients from '../../../N_Component/Clients'
import Services_Banner_Comp from '../../../N_Component/Services_Banner_Comp/Services_Banner_Comp'
import bannerData from '../../../N_Component/Services_Banner_Comp/bannerData.json'
import PCB_Services_Grid from './Components/PCB_Services_Grid/PCB_Services_Grid'
import pcbServicesData from '../PCB/Components/PCB_Services_Grid/pcbServicesData.json'
import CTASection from '../../../N_Component/CTASection'
import Services_Diagram from '../../../N_Component/Services_Diagram/Services_Diagram'
import diagramData from '../../../N_Component/Services_Diagram/diagramData.json'
import PCB_Turnkey from './Components/PCB_Turnkey/PCB_Turnkey'
import pcbTurnkeyData from '../PCB/Components/PCB_Turnkey/pcbTurnkeyData.json'
import FAQ_Section from '../../../N_Component/FAQ_Section/FAQ_Section'
import faqsData from '../../../N_Component/FAQ_Section/faqData.json';
import Footer from '../../../components/Footer/Footer'
import Services_GlobalPresence from '../../../N_Component/Services_GlobalPresence/Services_GlobalPresence'
import globalPresenceData from '../../../N_Component/Services_GlobalPresence/globalPresenceData.json'

const PCB = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <Helmet>
          <title>Best PCB Assembly Services in India – Adiance Technologies</title>
          <meta name="description" content="Looking for a printed circuit board assembly service? We offer quality-tested PCB assembly services for CCTV and robotic arms with fast turnaround and full support." />
          <link rel="canonical" href="https://www.adiance.com/pcb-assembly-service" />
          <meta property="og:title" content="Best PCB Assembly Services in India – Adiance Technologies" />
          <meta property="og:description" content="Quality-tested PCB assembly services for CCTV and robotic arms with fast turnaround and full support." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.adiance.com/pcb-assembly-service" />
          <meta property="og:site_name" content="Adiance Technologies" />
          <meta property="og:image" content="https://www.adiance.com/images/Logo.webp" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@adiancetech" />
        </Helmet>
        <Header />
        <Services_Hero {...heroData.pcb} />
        <Services_Details  {...detailsData.pcb} />
        <Clients showTitle={false} />
        <Services_Banner_Comp {...bannerData.pcb} />
        <PCB_Services_Grid services={pcbServicesData.pcbServices} />
        <CTASection title='Printed Circuit Board Services Engineered <br /> for Vision and Motion Systems' />
        <Services_Diagram {...diagramData.pcbGathering} />
        <PCB_Turnkey {...pcbTurnkeyData.pcbTurnkey} />
        <CTASection title='Need Quality PCBs for Cameras or Robotics? Let’s Talk' />
        <Services_GlobalPresence {...globalPresenceData.pcb} />
        <FAQ_Section faqsList={faqsData.pcb} />
        <Footer />
    </div>
  )
}

export default PCB