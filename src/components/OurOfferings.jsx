import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const OurOfferings = () => {
  const innovationItems = [
    {
      id: 1,
      title: "Retail",
      imageUrl: "/images/r1.webp",
      url: "#",
    },
    {
      id: 2,
      title: "Smart Cities",
      imageUrl: "/images/sc1.webp",
      url: "#",
    },
    {
      id: 3,
      title: "Banking",
      imageUrl: "/images/b1.webp",
      url: "#",
    },
    {
      id: 4,
      title: "Manufacturing",
      imageUrl: "/images/adiance-factory-001.webp",
      url: "#",
    },
    {
      id: 5,
      title: "Warehouse & Logistics",
      imageUrl: "/images/Traffic Management.webp",
      url: "#",
    },
    {
      id: 6,
      title: "Automotive",
      imageUrl: "/images/trafic2.webp",
      url: "#",
    },
    {
      id: 7,
      title: "Home Security",
      imageUrl: "/images/SmartWifi.webp",
      url: "#",
    },
    {
      id: 8,
      title: "Transportation",
      imageUrl: "/images/our1.webp",
      url: "#",
    },
    {
      id: 9,
      title: "Education",
      imageUrl: "/images/Education.webp",
      url: "#",
    },
    {
      id: 10,
      title: "Healthcare",
      imageUrl: "/N_Images/our2.webp",
      url: "#",
    },
    {
      id: 11,
      title: "Hospitality",
      imageUrl: "/images/ht1.webp",
      url: "#",
    },
    {
      id: 12,
      title: "Construction",
      imageUrl: "/images/Home_Construction.webp",
      url: "#",
    },
  ];

  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setDisplayItems(innovationItems);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "5%", marginBottom: "3%" }}>
        <h2
          style={{
            fontSize: "36px",
            marginBottom: "1%",
            paddingLeft: "2%",
            paddingRight: "2%",
          }}
        >
          Trusted CCTV & AI Video Surveillance Solutions Across Industries
        </h2>
        <p
          style={{
            fontSize: "18px",
            maxWidth: "1200px",
            margin: "0 auto",
            paddingLeft: "2%",
            paddingRight: "2%",
            lineHeight: "1.6",
          }}
        >
          As a leading AI cctv camera manufacturer in India, We delivers
          AI-powered and high-performance CCTV camera solutions - including
          S-series edge AI cameras, Eco-series security cameras, NVRs, STQC
          Cloud VMS, Arcis bridge device (ABD) and Robotic automation arms to
          strengthen security and operational efficiency across sectors.
        </p>
      </div>

      <div className="oo-container">
        {displayItems.map((item, index) => (
          // <Link to={item.url} key={item.id} style={{ textDecoration: "none" }}>
            <div className="oo-item">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="oo-image"
              />
              <h3 className="oo-title-overlay">{item.title}</h3>
            </div>
          // </Link>
        ))}
        <style jsx>{`
          .oo-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            padding: 20px;
            max-width: 1400px;
            margin: 0 auto;
          }

          .oo-item {
            position: relative;
            width: 100%;
            height: 250px;
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .oo-item:hover {
            transform: translateY(-5px);
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
          }

          .oo-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            border-radius: 8px;
            transition: transform 0.3s;
          }

          .oo-item:hover .oo-image {
            transform: scale(1.1);
          }

          .oo-title-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 10px;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            margin: 0;
            box-sizing: border-box;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
          }

          @media (max-width: 1024px) {
            .oo-container {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media (max-width: 768px) {
            .oo-container {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 480px) {
            .oo-container {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default OurOfferings;
