"use client";

import React from 'react'

const Services = () => {
  const serviceItems = [
    {
      id: 1,
      title: "ArcisAI Cloud VMS — White-Label",
      description: (
        <p>STQC-certified cloud video management deployed on your domain with your branding. Multi-site streaming, AI event automation, role-based access, GDPR-ready retention. The complete SaaS layer your competitors charge $20K+ a year to license — yours to resell.</p>
      ),
      imageUrl: "/N_Images/cloudAbout.webp",
    },
    {
      id: 2,
      title: "Branded Mobile App (iOS + Android)",
      description: (
        <p>Published under your developer account on the App Store and Google Play with your logo, colors and feature set. Live view, playback, push alerts, cloud playback, shared access — every screen the end-customer sees is YOUR brand, not Adiance.</p>
      ),
      imageUrl: "/N_Images/SmartTech.webp",
    },
    {
      id: 3,
      title: "Arcis Bridge — Convert Any Legacy Camera",
      description: (
        <p>Plug-in device that connects ANY ONVIF IP camera — including your installed base from other brands — into your white-label ArcisAI cloud. Turn the cameras you installed years ago into recurring SaaS revenue overnight, without ripping anything out.</p>
      ),
      imageUrl: "/N_Images/Arcis-Bridge-Device.webp",
    },
    {
      id: 4,
      title: "ODM CCTV Camera Manufacturing",
      description: (
        <p>35+ models — dome, bullet, PTZ, 4K, thermal, ANPR, 4G, edge AI — manufactured on non-Chinese SoC platforms (Qualcomm, Ambarella, Novatek, Sigmastar). NDAA Section 889 compliant. BIS Reg. R-72003735. MOQ from 100 units. 8–12 weeks to branded production.</p>
      ),
      imageUrl: "/N_Images/ODM-CCTV-Camera-Manufacturing.webp",
    },
    {
      id: 5,
      title: "OEM Hardware + Edge AI Engineering",
      description: (
        <p>Full custom development — PCB, firmware, enclosure, lens calibration, AI model tuning. Region-trained ANPR/LPR for USA, EU, GCC and India plate formats. On-device face recognition, intrusion, object detection, people counting — processed locally for privacy compliance.</p>
      ),
      imageUrl: "/N_Images/OEM-CCTV-Camera-Development.webp",
    },
    {
      id: 6,
      title: "GenAI Video Intelligence Layer",
      description: (
        <p>Natural-language video search across deployed cameras — "find the silver sedan that entered the south gate after 8pm." Enterprise-class feature parity with Milestone and Genetec's newest releases, packaged for SMB resellers and at a fraction of the cost.</p>
      ),
      imageUrl: "/N_Images/customized.webp",
    },
  ];

  return (
    <div className="services-container">
      <div className="services-header">
        <h2 className="services-title">The Complete White-Label Surveillance Ecosystem — Under Your Brand</h2>
        <p className="services-description">
          Camera, NVR, cloud VMS, mobile app, edge AI, GenAI analytics and a bridge for your legacy fleet — every layer carries your brand. NDAA-compliant, BIS-registered (R-72003735), manufactured in India on a non-Chinese supply chain. The full stack global partners need to launch and scale.
        </p>
      </div>

      <div className="cards-grid">
        {serviceItems.map((item) => (
          <div key={item.id} className="service-card">
            <div className="card-image-container">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="card-image"
                loading="lazy"
                decoding="async"
                width="412"
                height="412"
              />
              <div className="card-overlay">
                <div className="card-content">
                  <div className="card-description">{item.description}</div>
                </div>
              </div>
              <div className="card-title-overlay">
                <h3 className="overlay-title">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .services-container {
          padding: 60px 20px;
          background-color: #ffffff;
          max-width: 1565px;
          margin: 0 auto;
        }

        .services-header {
          text-align: center;
          margin-bottom: 50px;
        }₹

        .services-title {
          font-family: "Roboto", sans-serif;
          font-weight: 600;
          font-size: 42px;
          color: #BF0603;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .services-description {
          font-family: "Roboto", sans-serif;
          font-weight: 400;
          font-size: 18px;
          color: #000000;
          line-height: 1.6;
          max-width: 900px;
          margin: 0 auto;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .service-card {
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: #ffffff;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .card-image-container {
          position: relative;
          height: 360px;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .service-card:hover .card-image {
          transform: scale(1.05);
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.7) 70%,
            rgba(0, 0, 0, 0.9) 100%
          );
          display: flex;
          align-items: flex-end;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover .card-overlay {
          opacity: 1;
        }

        .card-content {
          color: white;
          width: 100%;
        }

        .card-description {
          font-family: "Roboto", sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 1.4;
          opacity: 0.95;
        }

        .card-description p {
          margin: 0;
        }

        .card-title-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: #BF0603;
          padding: 15px 20px;
          transition: opacity 0.3s ease;
        }

        .service-card:hover .card-title-overlay {
          opacity: 0;
        }

        .overlay-title {
          font-family: "Roboto", sans-serif;
          font-weight: 600;
          font-size: 16px;
          color: white;
          margin: 0;
          line-height: 1.3;
          text-align: center;
        }

        /* Tablet Styles */
        @media screen and (max-width: 1024px) {
          .services-container {
            padding: 50px 15px;
          }

          .services-title {
            font-size: 36px;
          }

          .services-description {
            font-size: 16px;
          }

          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
            max-width: 800px;
            margin: 40px auto 0;
          }

          .card-image-container {
            height: 300px;
          }
        }

        /* Mobile Styles */
        @media screen and (max-width: 768px) {
          .services-container {
            padding: 40px 10px;
          }

          .services-title {
            font-size: 28px;
            margin-bottom: 15px;
          }

          .services-description {
            font-size: 15px;
          }

          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }

          .card-image-container {
            height: 350px;
          }

          .card-overlay {
            padding: 15px;
          }

          .card-description {
            font-size: 13px;
          }

          .card-title-overlay {
            padding: 12px 15px;
          }

          .overlay-title {
            font-size: 14px;
          }
        }

        /* Small Mobile Styles */
        @media screen and (max-width: 480px) {
          .services-container {
            padding: 30px 10px;
          }

          .services-title {
            font-size: 24px;
          }

          .services-description {
            font-size: 14px;
          }

          .cards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .card-image-container {
            height: 325px;
          }

          .card-overlay {
            padding: 12px;
          }

          .card-description {
            font-size: 12px;
          }

          .card-title-overlay {
            padding: 10px 12px;
          }

          .overlay-title {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  )
}

export default Services