import React from 'react'
import Clients from '../Components/Clients'
import Innovation from './Component/Innovation'
import Services from './Component/Services'
import Certificates from '../Components/Certificates'
import Industries from './Component/Industries'
import Achievements from './Component/Achievements'
import CTASection from './Component/CTASection'
import Testimonials from './Component/Testimonials'
import Blog_View from './Component/Blog_View'
import FAQ_Section from '../Components/FAQ_Section/FAQ_Section'
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