"use client";

import React from 'react'
import Clients from '../../../N_Component/Clients'
import Innovation from './Component/Innovation'
import Services from './Component/Services'
import Certificates from '../Components/Certificates'
import Industries from './Component/Industries'
import Achievements from './Component/Achievements'
import CTASection from '../../../N_Component/CTASection'
import Testimonials from './Component/Testimonials'
import Blog_View from './Blog_View/Blog_View'
import FAQ_Section from '../../../N_Component/FAQ_Section/FAQ_Section'
import faqsData from '../../../components/faqsData'

const Home_mid = () => {
  return (
    <div>
        <Clients />
        <Innovation />
        <Certificates />
        <Services />
        <Industries />
        <Achievements />
        <Blog_View />
        <Testimonials />
        <CTASection />
        <FAQ_Section faqsList={faqsData.home} />
    </div>
  )
}

export default Home_mid