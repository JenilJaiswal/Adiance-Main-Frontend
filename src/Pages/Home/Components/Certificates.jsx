import React from 'react'

const Certificates = () => {
  const certifications = [
    {
      id: 1,
      name: "ISO",
      imageUrl: "/N_Images/Home_ISO.webp",
      alt: "ISO Certification"
    },
    {
      id: 2,
      name: "RoHS",
      imageUrl: "/N_Images/Home_RoHS.webp",
      alt: "RoHS Compliant"
    },
    {
      id: 3,
      name: "BIS",
      imageUrl: "/N_Images/Home_BIS.webp",
      alt: "BIS Certification"
    },
    {
      id: 4,
      name: "FCC",
      imageUrl: "/N_Images/Home_FCC.webp",
      alt: "FCC Certification"
    },
    {
      id: 5,
      name: "CE",
      imageUrl: "/N_Images/Home_CE.webp",
      alt: "CE Marking"
    },
    {
      id:6,
      name: "ONVIF",
      imageUrl: "/N_Images/onvif.svg",
      alt: "ONVIF Certificate"
    }
  ];

  return (
    <div className="certificates-container">
      <div className="certificates-content">
        <h2 className="certificates-title">Certifications</h2>
        <div className="certificates-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certificate-item">
              <img
                src={cert.imageUrl}
                alt={cert.alt}
                className="certificate-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .certificates-container {
          padding: 60px 20px;
          background-color: #ffffff;
          text-align: center;
        }

        .certificates-content {
          max-width: 1565px;
          margin: 0 auto;
        }

        .certificates-title {
          font-family: "Roboto", sans-serif;
          font-weight: 600;
          font-size: 42px;
          color: #444444;
          margin-bottom: 50px;
          text-align: center;
        }

        .certificates-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .certificate-item {
          // padding: 20px;
          width: auto;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .certificate-item:last-child {
          width: auto;
        }

        .certificate-image {
          height: 90px;
          width: auto;
          object-fit: contain;
        }

        .certificate-item:last-child .certificate-image {
          height: 90px;
          width: auto;
        }

        /* Tablet Styles */
        @media screen and (max-width: 1024px) {
          .certificates-container {
            padding: 50px 15px;
          }

          .certificates-title {
            font-size: 36px;
            margin-bottom: 40px;
          }

          .certificates-grid {
            gap: 30px;
          }

          .certificate-item {
            width: auto;
            height: 100px;
            padding: 15px;
          }

          .certificate-item:last-child {
            width: auto;
          }

          .certificate-image {
            height: 70px;
            width: auto;
          }

          .certificate-item:last-child .certificate-image {
            height: 70px;
            width: auto;
          }
        }

        /* Mobile Styles */
        @media screen and (max-width: 768px) {
          .certificates-container {
            padding: 40px 10px;
          }

          .certificates-title {
            font-size: 30px;
            margin-bottom: 30px;
            text-align: center;
          }

          .certificates-grid {
            gap: 20px;
            justify-content: center;
            align-items: center;
          }

          .certificate-item {
            width: auto;
            height: 90px;
            padding: 12px;
          }

          .certificate-item:last-child {
            width: auto;
          }

          .certificate-image {
            height: 60px;
            width: auto;
          }

          .certificate-item:last-child .certificate-image {
            height: 60px;
            width: auto;
          }
        }

        /* Small Mobile Styles */
        @media screen and (max-width: 480px) {
          .certificates-container {
            padding: 30px 10px;
          }

          .certificates-title {
            font-size: 26px;
            margin-bottom: 25px;
          }

          .certificates-grid {
            gap: 0px;
            justify-content: space-around;
          }

          .certificate-item {
            width: auto;
            height: 80px;
            padding: 10px;
          }

          .certificate-item:last-child {
            width: auto;
          }

          .certificate-image {
            height: 50px;
            width: auto;
          }

          .certificate-item:last-child .certificate-image {
            height: 50px;
            width: auto;
          }
        }
      `}</style>
    </div>
  )
}

export default Certificates