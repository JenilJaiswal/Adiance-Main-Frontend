import React from 'react'

const Certificates = () => {
  const certifications = [
    {
      id: 1,
      name: "ISO",
      imageUrl: "/N_Images/Home_ISO.png",
      alt: "ISO Certification"
    },
    {
      id: 2,
      name: "RoHS",
      imageUrl: "/N_Images/Home_RoHS.png",
      alt: "RoHS Compliant"
    },
    {
      id: 3,
      name: "BIS",
      imageUrl: "/N_Images/Home_BIS.png",
      alt: "BIS Certification"
    },
    {
      id: 4,
      name: "FCC",
      imageUrl: "/N_Images/Home_FCC.png",
      alt: "FCC Certification"
    },
    {
      id: 5,
      name: "CE",
      imageUrl: "/N_Images/Home_CE.png",
      alt: "CE Marking"
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
          max-width: 1200px;
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
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .certificate-image {
          max-width: 90px;
          max-height: 90px;
          width: auto;
          height: auto;
          object-fit: contain;
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
            width: 100px;
            height: 100px;
            padding: 15px;
          }

          .certificate-image {
            max-width: 70px;
            max-height: 70px;
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
            width: 90px;
            height: 90px;
            padding: 12px;
          }

          .certificate-image {
            max-width: 60px;
            max-height: 60px;
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
            width: 80px;
            height: 80px;
            padding: 10px;
          }

          .certificate-image {
            max-width: 50px;
            max-height: 50px;
          }
        }
      `}</style>
    </div>
  )
}

export default Certificates