import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Header from '../../../N_Component/Header/Header'
import Services_Hero from '../../../N_Component/Services_Hero/Services_Hero'
import Services_Details from '../../../N_Component/Services_Details/Services_Details'
import heroData from '../../../N_Component/Services_Hero/heroData.json'
import detailsData from '../../../N_Component/Services_Details/detailsData.json'
import Services_Solution from '../../../N_Component/Services_Solution/Services_Solution'
import solutionData from '../../../N_Component/Services_Solution/solutionData.json'
import Services_Manufacturing from '../../../N_Component/Services_Manufacturing/Services_Manufacturing'
import manufacturingData from '../../../N_Component/Services_Manufacturing/manufacturingData.json'
import Services_MakeInIndia from '../../../N_Component/Services_MakeInIndia/Services_MakeInIndia'
import makeInIndiaData from '../../../N_Component/Services_MakeInIndia/makeInIndiaData.json'
import Services_Diagram from '../../../N_Component/Services_Diagram/Services_Diagram'
import diagramData from '../../../N_Component/Services_Diagram/diagramData.json'
import Services_Benefits from '../../../N_Component/Services_Benefits/Services_Benefits'
import benefitesData from '../../../N_Component/Services_Benefits/benefitsData.json'
import CTASection from '../../../N_Component/CTASection'
import FAQ_Section from '../../../N_Component/FAQ_Section/FAQ_Section'
import faqsData from '../../../N_Component/FAQ_Section/faqData.json'
import Footer from '../../../N_Component/Footer/Footer'
import Clients from '../../../N_Component/Clients'

const ODM = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>ODM Manufacturer for CCTV, PCB and Robotic - ODM Company In India</title>
        <meta 
          name="description" 
          content="Looking for a white-label ODM service provider in India? We deliver EMS ODM solutions for CCTV cameras, PCBs and robotics manufactured under your branding." 
        />
      </Helmet>
      <div>
        <Header />
        <Services_Hero {...heroData.odm} />
        <Services_Details {...detailsData.odm} />
        <Clients showTitle={false} />
        <Services_Solution {...solutionData.odm} />
        <Services_Manufacturing {...manufacturingData.odmCCTV} />
        <Services_Manufacturing {...manufacturingData.odmRoboticArm} />
        <Services_Manufacturing {...manufacturingData.odmPCB} />
        <Services_MakeInIndia {...makeInIndiaData.odm} />
        <Services_Diagram {...diagramData.odmGathering} />
        <Services_Benefits {...benefitesData.odm} />
        <CTASection title='Ready to Build Your Brand with White-Label Products?' />
        <FAQ_Section faqsList={faqsData.odm} />
        <Footer />
      </div>
    </>
  )
}

export default ODM