import React from 'react'

const Industries = () => {
  const industryItems = [
    {
      id: 1,
      title: "Retail",
      imageUrl: "/N_Images/r1.png",
      url: "#",
    },
    {
      id: 2,
      title: "Smart Cities",
      imageUrl: "/N_Images/sc1.png",
      url: "#",
    },
    {
      id: 3,
      title: "Banking",
      imageUrl: "/N_Images/b1.png",
      url: "#",
    },
    {
      id: 4,
      title: "Manufacturing",
      imageUrl: "/N_Images/adiance-factory-001.jpg",
      url: "#",
    },
    {
      id: 5,
      title: "Warehouse & Logistics",
      imageUrl: "/N_Images/Traffic Management.png",
      url: "#",
    },
    {
      id: 6,
      title: "Automotive",
      imageUrl: "/N_Images/trafic2.jpg",
      url: "#",
    },
    {
      id: 7,
      title: "Home Security",
      imageUrl: "/N_Images/SmartWifi.png",
      url: "#",
    },
    {
      id: 8,
      title: "Transportation",
      imageUrl: "/N_Images/our1.jpg",
      url: "#",
    },
    {
      id: 9,
      title: "Education",
      imageUrl: "/N_Images/Education.png",
      url: "#",
    },
    {
      id: 10,
      title: "Healthcare",
      imageUrl: "/N_Images/our2.jpg",
      url: "#",
    },
    {
      id: 11,
      title: "Hospitality",
      imageUrl: "/N_Images/ht1.png",
      url: "#",
    },
    {
      id: 12,
      title: "Construction",
      imageUrl: "/N_Images/Home_Construction.png",
      url: "#",
    },
  ];

  return (
    <div className="industries-container">
      <div className="industries-header">
        <h2 className="industries-title">
          Trusted CCTV & AI Video Surveillance Solutions Across Industries
        </h2>
        <p className="industries-description">
          As a leading AI cctv camera manufacturer in India, We delivers AI-powered and high-performance CCTV camera solutions - including S-series edge AI cameras, Eco-series security cameras, NVRs, STQC Cloud VMS, Arcis bridge device (ABD) and Robotic automation arms to strengthen security and operational efficiency across sectors.
        </p>
      </div>

      <div className="industry-cards-grid">
        {industryItems.map((item) => (
          <div key={item.id} className="industry-card">
            <div className="industry-card-image-container">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="card-image"
              />
              <div className="card-title-overlay">
                <h3 className="overlay-title">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .industries-container {
          padding: 60px 20px;
          background-color: #ffffff;
          max-width: 1400px;
          margin: 0 auto;
        }

        .industries-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .industries-title {
          font-family: "Roboto", sans-serif;
          font-weight: 600;
          font-size: 42px;
          color: #BF0603;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .industries-description {
          font-family: "Roboto", sans-serif;
          font-weight: 400;
          font-size: 18px;
          color: #000000;
          line-height: 1.6;
          max-width: 1200px;
          margin: 0 auto;
        }

        .industry-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .industry-card {
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: #ffffff;
        }

        .industry-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .industry-card-image-container {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .industry-card:hover .card-image {
          transform: scale(1.05);
        }

        .card-title-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: #BF0603;
          padding: 15px 20px;
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

        /* Large Desktop */
        @media screen and (min-width: 1200px) {
          .industry-cards-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* Tablet Styles */
        @media screen and (min-width: 769px) and (max-width: 1199px) {
          .industries-container {
            padding: 50px 15px;
          }

          .industries-title {
            font-size: 36px;
          }

          .industries-description {
            font-size: 16px;
          }

          .industry-cards-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
          }

          .industry-card-image-container {
            height: 220px;
          }
        }

        /* Mobile Styles */
        @media screen and (min-width: 481px) and (max-width: 768px) {
          .industries-container {
            padding: 40px 10px;
          }

          .industries-title {
            font-size: 28px;
            margin-bottom: 15px;
          }

          .industries-description {
            font-size: 15px;
          }

          .industry-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .industry-card-image-container {
            height: 250px;
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
          .industries-container {
            padding: 30px 10px;
          }

          .industries-title {
            font-size: 24px;
          }

          .industries-description {
            font-size: 14px;
          }

          .industry-cards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .industry-card-image-container {
            height: 250px;
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

export default Industries