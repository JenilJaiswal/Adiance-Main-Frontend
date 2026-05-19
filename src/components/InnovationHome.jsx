"use client";

import React, { useState, useEffect } from "react";

const InnovationHome = ({ type = "innovation" }) => {
  const innovationItems = [
    {
      id: 1,
      title: "S-Series — Edge AI CCTV Cameras",
      description: (
        <>
          <p>
            A premium range of AI-powered cameras designed for high-performance
            surveillance with real-time on-device analytics.
          </p>
          <br />
          <p>
            <strong>Types:</strong> Bullet (3MP), Dome (3MP), PTZ (3MP /
            5G-enabled)
          </p>
          <p>
            <strong>Connectivity:</strong> 4G, WiFi, PoE
          </p>
        </>
      ),
      imageUrl: "/images/S-Series-Edge-AI-CCTV-Cameras.webp",
    },
    {
      id: 2,
      title: "Eco-Series — Security CCTV Cameras",
      description: (
        <>
          <p>
            A scalable and budget-friendly surveillance range built for
            organizations that need high-quality monitoring across multiple
            locations with long-term reliability.
          </p>
          <br />
          <p>
            <strong>Types:</strong> Dome (3MP/5MP), Bullet (3MP/5MP), PTZ
            (3MP/5MP), Baby PTZ (WiFi Only)
          </p>
          <p>
            <strong>Connectivity:</strong> 4G, WiFi, PoE
          </p>
        </>
      ),
      imageUrl: "/images/Eco-Series-Security-CCTV-Cameras.webp",
    },
    {
      id: 3,
      title: "STQC Cloud VMS — Secure Video Management System",
      description: (
        <>
          <p>
            A government-compliant cloud video management platform that
            centralizes monitoring across multiple locations with seamless AI
            integration.
          </p>
          <br />
          <p>
            <strong>Core Functions:</strong> Live View, Playback, Alerts, Camera
            Health Dashboard
          </p>
          <p>
            <strong>Compliance:</strong> STQC, ONVIF, IP standards
          </p>
        </>
      ),
      imageUrl: "/images/STQC-Cloud-VMS—Secure-Video-Management-System.webp",
    },
    {
      id: 4,
      title: "Arcis Bridge Device (ABD)",
      description: (
        <>
          <p>
            A plug-and-play device that connects any third-party ONVIF CCTV
            camera to ArcisAI's cloud ecosystem and enables advanced AI
            analytics.
          </p>
          <br />
          <p>
            <strong>What It Does:</strong> Converts standard CCTV into AI-enabled
            surveillance
          </p>
          <p>
            <strong>Compatibility:</strong> ONVIF + global camera brands
          </p>
        </>
      ),
      imageUrl: "/images/Arcis-Bridge-Device.webp",
    },
    {
      id: 5,
      title: "NVRs — Network Video Recorders (ArcisAI)",
      description: (
        <>
          <p>
            High-performance NVRs designed for reliable recording, centralized
            management and smooth playback for on-premise installations.
          </p>
          <br />
          <p>
            <strong>4-Channel NVR (2TB Storage)</strong>
          </p>
          <p>
            Supports up to 4 cameras with stable recording, clean playback, and
            efficient performance.
          </p>
          <br />
          <p>
            <strong>16-Channel NVR (4TB Storage)</strong>
          </p>
          <p>
            Handles up to 16 cameras with enterprise-grade throughput and
            optimized long-duration recording.
          </p>
        </>
      ),
      imageUrl: "/images/NVRs-Network-Video-Recorders-ArcisAI.webp",
    },
    {
      id: 6,
      title: "Robotic Arm — Industrial Automation",
      description: (
        <>
          <p>
            A precision-engineered robotic arm representing Adiance’s advanced
            manufacturing and automation capabilities beyond CCTV.
          </p>
          <br />
          <p>
            <strong>Applications:</strong> Assembly, inspection, industrial
            automation lines
          </p>
        </>
      ),
      imageUrl: "/images/NVRs-ArcisAI-Robotics-arm.webp",
    },
  ];

  const serviceItems = [
    {
      id: 1,
      title: "ODM CCTV Camera Manufacturing",
      description: (
        <p>
          Adiance acts as your dedicated security camera manufacturing partner,
          producing ready-to-market IP CCTV cameras under your brand name. We
          handle the full process - engineering, component sourcing, assembly,
          testing, certifications, packaging, and shipping - so you can launch
          products quickly without investing in your own factory.
        </p>
      ),
      imageUrl: "/images/ODM-CCTV-Camera-Manufacturing.webp",
    },
    {
      id: 2,
      title: "OEM CCTV Camera Development",
      description: (
        <p>
          Our OEM capability allows you to create completely custom CCTV products
          tailored to your market. We design the hardware, PCB, firmware,
          enclosures, features, and performance parameters exactly as you
          require.
        </p>
      ),
      imageUrl: "/images/OEM-CCTV-Camera-Development.webp",
    },
    {
      id: 3,
      title: "JDM CCTV Camera Development",
      description: (
        <p>
          In Joint development manufacturing (JDM), your engineering team and
          Adiance’s R&D team collaborate to co-create your hardware with our
          intelligent system or our hardware with your system, delivering fully
          integrated video surveillance solutions from concept to production.
        </p>
      ),
      imageUrl: "/images/SmartTech.webp",
    },
    {
      id: 4,
      title: "PCB Assembly Manufacturing",
      description: (
        <p>
          Adiance provides high-precision PCB & Turnkey assembly for CCTV
          cameras and robotics for industrial automation. We manage the complete
          PCB lifecycle—SMT assembly, component sourcing, quality inspection,
          firmware loading, and product testing.
        </p>
      ),
      imageUrl: "/images/PCB-Assembly-Manufacturing.webp",
    },
    {
      id: 5,
      title: "Cloud Storage Solutions",
      description: (
        <p>
          Secure and scalable cloud storage for ArcisAI cameras, with flexible
          retention plans of 1, 3, 5, 7, and 30 days. Easily access and retrieve
          footage from multiple locations with fast, reliable, and safe storage.
        </p>
      ),
      imageUrl: "/images/cloudAbout.webp",
    },
    {
      id: 6,
      title: "Customization In Hardware & Custom Engineering",
      description: (
        <p>
          Brands can customize part of the hardware - including enclosures,
          lenses, connectivity, firmware, SoC selection, and functional
          features. We will modify both the design and technical specifications
          to match your brand identity and performance needs.
        </p>
      ),
      imageUrl: "/images/customized.webp",
    },
  ];

  const getData = () => {
    if (type === "service") {
      return {
        items: serviceItems,
        // subTitle: "Service Range",
        mainTitle:
          "Powering Global CCTV Brands With Advanced CCTV Manufacturing Services",
        desc: "We provide complete hardware design, development, and security cameras manufacturing services - covering OEM, ODM, JDM, PCB assembly, cloud storage and hardware customization. Every service is built to help brands launch, scale, and differentiate their CCTV products with confidence.",
      };
    }
    return {
      items: innovationItems,
      subTitle: null,
      mainTitle: "Advanced CCTV & AI Surveillance Products Engineered in India",
      desc: "Adiance delivers a complete range of CCTV cameras, storage systems, cloud VMS, and integration devices under the ArcisAI ecosystem - fully designed, developed, and manufactured from India for OEM, ODM, and global partners.",
    };
  };

  const { items, subTitle, mainTitle, desc } = getData();
  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setDisplayItems(items);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [type]); // Changed dependency to 'type' since that's what determines which items to show

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "3%" }}>
        {subTitle && (
          <h4
            style={{
              fontSize: "20px",
              color: "#666",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "10px",
            }}
          >
            {subTitle}
          </h4>
        )}
        <h2
          style={{
            fontSize: "36px",
            marginBottom: "1%",
            paddingLeft: "1%",
            paddingRight: "1%",
          }}
        >
          {mainTitle}
        </h2>
      </div>
      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          marginTop: "1%",
          marginBottom: "3%",
          marginLeft: "2%",
          marginRight: "2%",
        }}
      >
        {desc}
      </p>
      <div className="ih-container wave-animation">
        {displayItems.map((item) => (
          <div key={item.id} className="ih-item">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="ih-image"
            />
            <div className="ih-details">
              <div className="ih-description">{item.description}</div>
            </div>
            <div className="ih-title-overlay">{item.title}</div>
          </div>
        ))}
        <style jsx>{`
          .ih-container {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 20px;
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
            box-sizing: border-box;
          }

          .ih-item {
            position: relative;
            max-height: 360px;
            min-height: 360px;
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .ih-item:hover {
            transform: translateY(-5px);
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
          }

          .ih-image {
            width: 100%;
            height: 100%;
            display: block;
            border-radius: 8px;
            transition: transform 0.3s;
            object-fit: cover;
          }
          .ih-item:hover .ih-image {
            transform: scale(1.1);
          }

          .ih-details {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.95);
            padding: 20px 20px 60px 20px; /* Added bottom padding to avoid overlap with overlay */
            opacity: 0;
            transition: opacity 0.3s ease;
            transform: translateY(100%);
            display: flex;
            flex-direction: column;
            z-index: 20; /* Ensure it is on top */
            pointer-events: none; /* Disable interaction when hidden */
          }

          .ih-item:hover .ih-details {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto; /* Enable interaction when visible */
          }

          .ih-description {
            font-size: 16px;
            color: #333;
            overflow-y: auto;
            flex-grow: 1;
            min-height: 0; /* Important for flex scrolling */
            max-height: 100%; /* Ensure proper constraint */
            scrollbar-width: none; /* Hide scrollbar for Firefox */
            -ms-overflow-style: none; /* Hide scrollbar for IE/Edge */
            pointer-events: auto; /* Ensure scrolling works */
            touch-action: pan-y; /* Improve touch scrolling */
          }

          /* Hide scrollbar for WebKit browsers */
          .ih-description::-webkit-scrollbar {
            display: none;
          }

          .ih-description p {
            margin-bottom: 5px;
            line-height: 1.4;
          }

          .ih-title-overlay {
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
            z-index: 30; /* Ensure it stays on top of item-details */
          }

          @media (max-width: 1199px) {
            .ih-container {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 600px) {
            .ih-container {
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
        `}</style>
      </div>
    </>
  );
};

export default InnovationHome;
