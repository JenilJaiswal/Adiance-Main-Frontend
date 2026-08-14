"use client";

import React from 'react'
import Header from '../../components/Header/Header'
import WhatWeDo from './WhatWeDo/WhatWeDo'
import Home_mid from './Home_Mid/Home_mid'
import Footer from '../../components/Footer/Footer'
import Home_Slider from './Home_Slider/Home_Slider';




const Home = () => {

    return (
        <div className="home-container">
            <Header />
            <Home_Slider />
            <WhatWeDo />
            <Home_mid />
            <Footer />
            
            <style jsx>{`
                .home-container {
                    overflow-x: hidden;
                    width: 100%;
                    max-width: 100vw;
                }
                
                /* Global overflow control */
                :global(html) {
                    overflow-x: hidden;
                }
                
                :global(body) {
                    overflow-x: hidden;
                    max-width: 100vw;
                }
            `}</style>
        </div>
    )
}

export default Home