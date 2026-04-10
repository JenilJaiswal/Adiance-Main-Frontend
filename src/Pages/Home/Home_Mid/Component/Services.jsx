import React from 'react'

const Services = () => {
  const serviceItems = [
    {
      id: 1,
      title: "ODM CCTV Camera Manufacturing",
      description: (
        <p>Adiance acts as your dedicated security camera manufacturing partner, producing ready-to-market IP CCTV cameras under your brand name. We handle the full process - engineering, component sourcing, assembly, testing, certifications, packaging, and shipping - so you can launch products quickly without investing in your own factory.</p>
      ),
      imageUrl: "/N_Images/ODM-CCTV-Camera-Manufacturing.webp",
    },
    {
      id: 2,
      title: "OEM CCTV Camera Development",
      description: (
        <p>Our OEM capability allows you to create completely custom CCTV products tailored to your market. We design the hardware, PCB, firmware, enclosures, features, and performance parameters exactly as you require.</p>
      ),
      imageUrl: "/N_Images/OEM-CCTV-Camera-Development.webp",
    },
    {
      id: 3,
      title: "JDM CCTV Camera Development",
      description: (
        <p>In Joint development manufacturing (JDM), your engineering team and Adiance's R&D team collaborate to co-create your hardware with our intelligent system or our hardware with your system, delivering fully integrated video surveillance solutions from concept to production.</p>
      ),
      imageUrl: "/N_Images/SmartTech.webp",
    },
    {
      id: 4,
      title: "PCB Assembly Manufacturing",
      description: (
        <p>Adiance provides high-precision PCB & Turnkey assembly for CCTV cameras and robotics for industrial automation. We manage the complete PCB lifecycle—SMT assembly, component sourcing, quality inspection, firmware loading, and product testing.</p>
      ),
      imageUrl: "/N_Images/PCB-Assembly-Manufacturing.webp",
    },
    {
      id: 5,
      title: "Cloud Storage Solutions",
      description: (
        <p>Secure and scalable cloud storage for ArcisAI cameras, with flexible retention plans of 1, 3, 5, 7, and 30 days. Easily access and retrieve footage from multiple locations with fast, reliable, and safe storage.</p>
      ),
      imageUrl: "/N_Images/cloudAbout.webp",
    },
    {
      id: 6,
      title: "Customization In Hardware & Custom Engineering",
      description: (
        <p>Brands can customize part of the hardware - including enclosures, lenses, connectivity, firmware, SoC selection, and functional features. We will modify both the design and technical specification to match your brand identity and performance needs.</p>
      ),
      imageUrl: "/N_Images/customized.webp",
    },
  ];

  return (
    <div className="services-container">
      <div className="services-header">
        <h2 className="services-title">Powering Global CCTV Brands With Advanced CCTV Manufacturing Services</h2>
        <p className="services-description">
          We provide complete hardware design, development, and security cameras manufacturing services - covering OEM, ODM, JDM, PCB assembly, cloud storage and hardware customization. Every service is built to help brands launch, scale, and differentiate their CCTV products with confidence.
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