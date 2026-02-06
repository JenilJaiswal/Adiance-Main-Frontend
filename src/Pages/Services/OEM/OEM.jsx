import React from 'react'
import Header from '../../../N_Component/Header/Header'
import OEM_Hero from './OEM_Hero.jsx/OEM_Hero'
import About_OEM from './About_OEM/About_OEM';
import OEM_Manufacturing from './OEM_Manufacturing/OEM_Manufacturing';
import OEM_CCTV from './OEM_CCTV/OEM_CCTV';
import OEM_Robotic_Arm from './OEM_Robotic_Arm/OEM_Robotic_Arm';
import OEM_PCB from './OEM_PCB/OEM_PCB';
import CTASection from '../../Home/Home_Mid/Component/CTASection';
import OEM_MakeInIndia from './OEM_MakeInIndia/OEM_MakeInIndia';
import Footer from '../../../N_Component/Footer/Footer';
import OEM_Gathering from './OEM_Gathering/OEM_Gathering';
import OEM_Benefits from './OEM_Benefits/OEM_Benefits';

const OEM = () => {
  const containerStyle = {
    overflowX: 'hidden'
  };

  return (
    <div className='OEM_Container' style={containerStyle}>
        <Header />
        <OEM_Hero />
        <About_OEM />
        <OEM_Manufacturing />
        <OEM_CCTV />
        <OEM_Robotic_Arm />
        <OEM_PCB />
        <CTASection title='Looking for a Custom OEM Solution Provider to Build Your Next Product?'/>
        <OEM_MakeInIndia />
        <OEM_Gathering />
        <OEM_Benefits />
        <CTASection title='Still Wondering How OEM Manufacturing Services Can Work For You?' />
        <Footer />
    </div>
  )
}

export default OEM