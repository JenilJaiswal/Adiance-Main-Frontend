import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import Header from '../../../components/Header/Header'
import Services_Hero from '../../../N_Component/Services_Hero/Services_Hero'
import heroData from '../../../N_Component/Services_Hero/heroData.json';
import Services_Details from '../../../N_Component/Services_Details/Services_Details';
import detailsData from '../../../N_Component/Services_Details/detailsData.json'
import Services_Solution from '../../../N_Component/Services_Solution/Services_Solution';
import solutionData from '../../../N_Component/Services_Solution/solutionData.json'
import Clients from '../../../N_Component/Clients';
import Services_Manufacturing from '../../../N_Component/Services_Manufacturing/Services_Manufacturing';
import manufacturingData from '../../../N_Component/Services_Manufacturing/manufacturingData.json'
import Services_MakeInIndia from '../../../N_Component/Services_MakeInIndia/Services_MakeInIndia';
import makeInIndiaData from '../../../N_Component/Services_MakeInIndia/makeInIndiaData.json'
import Services_Diagram from '../../../N_Component/Services_Diagram/Services_Diagram'
import diagramData from '../../../N_Component/Services_Diagram/diagramData.json'
import CTASection from '../../../N_Component/CTASection';
import Services_Benefits from '../../../N_Component/Services_Benefits/Services_Benefits';
import benefitesData from '../../../N_Component/Services_Benefits/benefitsData.json'
import FAQ_Section from '../../../N_Component/FAQ_Section/FAQ_Section';
import faqsData from '../../../N_Component/FAQ_Section/faqData.json'
import Footer from '../../../components/Footer/Footer';
import Services_GlobalPresence from '../../../N_Component/Services_GlobalPresence/Services_GlobalPresence'
import globalPresenceData from '../../../N_Component/Services_GlobalPresence/globalPresenceData.json'

const JDM = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>JDM Manufacturer for CCTV, Robotics & PCB | Joint Development</title>
        <meta name="description" content="Adiance Technologies offers joint development manufacturing for CCTV, robotics and PCB - co-creating products with shared engineering, R&D and scalable manufacturing." />
      </Helmet>
      <Header />
      <Services_Hero {...heroData.jdm}  />
      <Services_Details {...detailsData.jdm} />
      <Clients showTitle={false} />
      <Services_Solution {...solutionData.jdm} />
      <Services_Manufacturing {...manufacturingData.jdmCCTV} />
      <Services_Manufacturing {...manufacturingData.jdmRoboticArm} />
      <Services_Manufacturing {...manufacturingData.jdmPCB} />
      <CTASection title='Looking to Co-Develop Your Next Hardware Innovation?' />
      <Services_MakeInIndia {...makeInIndiaData.jdm}/>
      <Services_Diagram {...diagramData.jdmGathering} />
      <Services_Benefits {...benefitesData.jdm} />
      <CTASection title='Ready to Start Your Joint Development Journey?' />
      <Services_GlobalPresence {...globalPresenceData.jdm} />
      <FAQ_Section faqsList={faqsData.jdm} />
      <Footer />
    </div>
  )
}

export default JDM