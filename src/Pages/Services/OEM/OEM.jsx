import Header from '../../../N_Component/Header/Header'
import OEM_Hero from './OEM_Hero.jsx/OEM_Hero'
import Services_Details from '../../../N_Component/Services_Details/Services_Details';
import detailsData from '../../../N_Component/Services_Details/detailsData.json';
import OEM_Manufacturing from './OEM_Manufacturing/OEM_Manufacturing';
import OEM_CCTV from './OEM_CCTV/OEM_CCTV';
import OEM_Robotic_Arm from './OEM_Robotic_Arm/OEM_Robotic_Arm';
import OEM_PCB from './OEM_PCB/OEM_PCB';
import CTASection from '../../../N_Component/CTASection';
import Services_MakeInIndia from '../../../N_Component/Services_MakeInIndia/Services_MakeInIndia';
import Footer from '../../../N_Component/Footer/Footer';
import Services_Diagram from '../../../N_Component/Services_Diagram/Services_Diagram';
import Services_Benefits from '../../../N_Component/Services_Benefits/Services_Benefits'
import OEM_GlobalPresence from './OEM_GlobalPresence/OEM_GlobalPresence';
import FAQ_Section from '../../../N_Component/FAQ_Section/FAQ_Section';
import faqsData from '../../../N_Component/FAQ_Section/faqData.json';
import makeInIndiaData from '../../../N_Component/Services_MakeInIndia/makeInIndiaData.json'
import diagramData from '../../../N_Component/Services_Diagram/diagramData.json'
import benefitesData from '../../../N_Component/Services_Benefits/benefitsData.json'
import Clients from '../../../N_Component/Clients';
const OEM = () => {
  const containerStyle = {
    overflowX: 'hidden'
  };

  return (
    <div className='OEM_Container' style={containerStyle}>
      <Header />
      <OEM_Hero />
      <Services_Details {...detailsData.oem} />
      <Clients showTitle={false} />
      <OEM_Manufacturing />
      <OEM_CCTV />
      <OEM_Robotic_Arm />
      <OEM_PCB />
      <CTASection title='Looking for a Custom OEM Solution Provider to Build Your Next Product?' />
      <Services_MakeInIndia {...makeInIndiaData.oem} />
      <Services_Diagram {...diagramData.oemGathering} />
      <Services_Benefits {...benefitesData.oem} />
      <CTASection title='Still Wondering How OEM Manufacturing Services Can Work For You?' />
      {/* <OEM_GlobalPresence /> */}
      <FAQ_Section faqsList={faqsData.oem} />
      <Footer />
    </div>
  )
}

export default OEM