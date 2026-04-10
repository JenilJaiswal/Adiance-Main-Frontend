import React from 'react'

const Innovation = () => {
  const innovationItems = [
    {
      id: 1,
      title: "S-Series — Edge AI CCTV Cameras",
      description: (
        <>
          <p>A premium range of AI-powered cameras designed for high-performance surveillance with real-time on-device analytics.</p>
          <br />
          <p><strong>Types:</strong> Bullet (3MP), Dome (3MP), PTZ (3MP / 5G-enabled)</p>
          <p><strong>Connectivity:</strong> 4G, WiFi, PoE</p>
        </>
      ),
      imageUrl: "/N_Images/S-Series-Edge-AI-CCTV-Cameras.webp",
    },
    {
      id: 2,
      title: "Eco-Series — Security CCTV Cameras",
      description: (
        <>
          <p>A scalable and budget-friendly surveillance range built for organizations that need high-quality monitoring across multiple locations with long-term reliability.</p>
          <br />
          <p><strong>Types:</strong> Dome (3MP/5MP), Bullet (3MP/5MP), PTZ (3MP/5MP), Baby PTZ (WiFi Only)</p>
          <p><strong>Connectivity:</strong> 4G, WiFi, PoE</p>
        </>
      ),
      imageUrl: "/N_Images/Eco-Series-Security-CCTV-Cameras.webp",
    },
    {
      id: 3,
      title: "STQC Cloud VMS — Video Management System",
      description: (
        <>
          <p>A government-compliant cloud video management platform that centralizes monitoring across multiple locations with seamless AI integration.</p>
          <br />
          <p><strong>Core Functions:</strong> Live View, Playback, Alerts, Camera Health Dashboard</p>
          <p><strong>Compliance:</strong> STQC, ONVIF, IP standards</p>
        </>
      ),
      imageUrl: "/N_Images/STQC-Cloud-VMS—Secure-Video-Management-System.webp",
    },
    {
      id: 4,
      title: "Arcis Bridge Device (ABD)",
      description: (
        <>
          <p>A plug-and-play device that connects any third-party ONVIF CCTV camera to ArcisAI's cloud ecosystem and enables advanced AI analytics.</p>
          <br />
          <p><strong>What It Does:</strong> Converts standard CCTV into AI-enabled surveillance</p>
          <p><strong>Compatibility:</strong> ONVIF + global camera brands</p>
        </>
      ),
      imageUrl: "/N_Images/Arcis-Bridge-Device.webp",
    },
    {
      id: 5,
      title: "NVRs — Network Video Recorders (ArcisAI)",
      description: (
        <>
          <p>High-performance NVRs designed for reliable recording, centralized management and smooth playback for on-premise installations.</p>
          <br />
          <p><strong>4-Channel NVR (2TB Storage)</strong></p>
          <p>Supports up to 4 cameras with stable recording, clean playback, and efficient performance.</p>
          <br />
          <p><strong>16-Channel NVR (4TB Storage)</strong></p>
          <p>Handles up to 16 cameras with enterprise-grade throughput and optimized long-duration recording.</p>
        </>
      ),
      imageUrl: "/N_Images/NVRs-Network-Video-Recorders-ArcisAI.webp",
    },
    {
      id: 6,
      title: "Robotic Arm — Industrial Automation",
      description: (
        <>
          <p>A precision-engineered robotic arm representing Adiance's advanced manufacturing and automation capabilities beyond CCTV.</p>
          <br />
          <p><strong>Applications:</strong> Assembly, inspection, industrial automation lines</p>
        </>
      ),
      imageUrl: "/N_Images/NVRs-ArcisAI-Robotics-arm.webp",
    },
  ];
  return (
    <div className="innovation-container">
      <div className="innovation-header">
        <h2 className="innovation-title">Advanced CCTV & AI Surveillance Products Engineered in India</h2>
        <p className="innovation-description">
          Adiance delivers a complete range of CCTV cameras, storage systems, cloud VMS, and integration devices under the ArcisAI ecosystem - fully designed, developed, and manufactured from India for OEM, ODM, and global partners.
        </p>
      </div>

      <div className="cards-grid">
        {innovationItems.map((item) => (
          <div key={item.id} className="innovation-card">
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
        .innovation-container {
          padding: 60px 20px;
          background-color: #ffffff;
          max-width: 1565px;
          margin: 0 auto;
        }

        .innovation-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .innovation-title {
          font-family: "Roboto", sans-serif;
          font-weight: 600;
          font-size: 42px;
          color: #BF0603;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .innovation-description {
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

        .innovation-card {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: #eeeeee;
        }

        .innovation-card:hover {
          transform: translateY(-8px);
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

        .innovation-card:hover .card-image {
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

        .innovation-card:hover .card-overlay {
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
          margin: 0 0 8px 0;
        }

        .card-description strong {
          font-weight: 600;
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

        .innovation-card:hover .card-title-overlay {
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
          .innovation-container {
            padding: 50px 15px;
          }

          .innovation-title {
            font-size: 36px;
          }

          .innovation-description {
            font-size: 16px;
          }

          .cards-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
          }

          .card-image-container {
            height: 300px;
          }
        }

        /* Mobile Styles */
        @media screen and (max-width: 768px) {
          .innovation-container {
            padding: 40px 10px;
          }

          .innovation-title {
            font-size: 28px;
            margin-bottom: 15px;
          }

          .innovation-description {
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
          .innovation-container {
            padding: 30px 10px;
          }

          .innovation-title {
            font-size: 24px;
          }

          .innovation-description {
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

export default Innovation