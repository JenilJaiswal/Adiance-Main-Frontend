import React, { useState, useEffect } from "react";

const InnovationHome = () => {
  const innovationItems = [
    {
      id: 1,
      title: "OEM-ODM Solutions",
      description:
        "Adiance Technologies offers complete OEM-ODM services for AI CCTV cameras, robotic arms and PCBs. From product design and hardware engineering to prototyping and large-scale manufacturing, we provide custom-built solutions tailored to client requirements. Our expertise ensures flexibility, precision and faster time-to-market, making us the trusted partner for businesses seeking end-to-end manufacturing support in surveillance and automation.",
      imageUrl: "/images/oemodm.jpg",
    },
    {
      id: 2,
      title: "Cloud Storage",
      description:
        "We offer secure and scalable cloud storage for CCTV surveillance. Hosted on Indian servers, it ensures compliance with local regulations while providing real-time backup, remote access, and centralized management. Our cloud storage protects against data loss and integrates seamlessly with AI-powered CCTV cameras and VMS, giving businesses reliable and uninterrupted surveillance continuity.",
      imageUrl: "/images/NVRFree.png",
    },
    {
      id: 3,
      title: "Customization",
      description:
        "Adiance Technologies offers tailored customization services for AI CCTV cameras, robotic arms, and PCBs. From hardware design to AI feature tuning, we adapt solutions to meet specific client needs. Our flexible approach ensures scalability, precision and innovation for every project. With customization at the core, we help businesses achieve technology built exactly for their requirements.",
      imageUrl: "/images/customized.png",
    },
    {
      id: 4,
      title: "VMS",
      description:
        "With our next-generation Video Management System (VMS) solutions designed for seamless integration with our AI-powered CCTV cameras. Our VMS enables centralized monitoring, intelligent video analytics, and real-time event alerts, giving businesses complete control over their surveillance infrastructure. With features like multi-site management, cloud connectivity and advanced reporting, Adiance VMS ensures smarter, safer, and more efficient security operations.",
      imageUrl: "/images/VMS.png",
    },
    {
      id: 5,
      title: "Quality & Compliance",
      description:
        "We follow the highest standards of quality and compliance to deliver products that truly embody the trust of Made in India. Every AI CCTV camera, robotic arm, and PCB goes through rigorous quality checks and is aligned with global certifications like CE, FCC, and BIS. With our strong focus on precision, reliability, and safety, we ensure that businesses in India and across the globe receive solutions that are world-class yet proudly Indian.",
      imageUrl: "/images/backward.png",
    },
    {
      id: 6,
      title: "After-Sales Support & Training",
      description:
        "We believe our responsibility doesn’t end with delivery. We provide reliable after-sales support and training to ensure smooth and worry-free operations. From installation guidance and technical assistance to training sessions for clients and partners, our team ensures systems work at their best. With responsive service and continuous handholding, we stand with our customers to deliver long-term reliability and trust proudly Made in India.",
      imageUrl: "/images/aftersales.png",
    },
  ];

  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      // if (window.innerWidth < 1625) {
      //   setDisplayItems(innovationItems.slice(0, 4));
      // } else {
      setDisplayItems(innovationItems);
      // }
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        Our AI-Powered Innovations & Manufacturing Capabilities In CCTV & Robotics
      </h2>
      <div className="innovation-container wave-animation">
        {displayItems.map((item) => (
          <div key={item.id} className="innovation-item">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="innovation-image"
            />
            <div className="item-details">
              <h3 className="item-title">{item.title}</h3>
              <div className="item-description1">{item.description}</div>
            </div>
            <div className="item-title-overlay">{item.title}</div>
          </div>
        ))}
        <style jsx>{`
          .innovation-container {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 20px;
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
            box-sizing: border-box;
          }

          .innovation-item {
            position: relative;
            // max-width: 900px;
            max-height: 360px;
            min-height: 360px;
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .innovation-item:hover {
            transform: translateY(-5px);
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
          }

          .innovation-image {
            width: 100%;
            height: 100%;
            display: block;
            border-radius: 8px;
            transition: transform 0.3s;
            object-fit: cover;
          }
          .innovation-item:hover .innovation-image {
            transform: scale(1.1);
          }

          .item-details {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.9);
            padding: 20px;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
            transform: translateY(100%);
          }

          .innovation-item:hover .item-details {
            opacity: 1;
            transform: translateY(0);
          }

          .item-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .item-description1 {
            font-size: 16px;
            color: #666;
          }

          .item-title-overlay {
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
            box-sizing: border-box;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
          }

          @media (max-width: 1199px) {
            .innovation-container {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 600px) {
            .innovation-container {
              grid-template-columns: 1fr;
            }
          }

          @keyframes wave {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }

          // .wave-animation {
          //   // animation: wave s infinite;
          // }

          // @media (max-width: 767px) {
          //   .wave-animation {
          //     animation: none;
          //   }
          }
        `}</style>
      </div>
    </>
  );
};

export default InnovationHome;
