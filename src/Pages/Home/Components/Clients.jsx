import React from 'react'

const Clients = () => {
  return (
    <div className="clients-container">
      <div className="clients-content">
        <h2 className="clients-title">Our Clients</h2>
        <div className="clients-image-container">
          <img 
            src="../../N_Images/clients.svg" 
            alt="Our Clients" 
            className="clients-image"
          />
        </div>
      </div>
      
      <style jsx>{`
        .clients-container {
          padding: 40px 20px;
          text-align: center;
          background-color: #ffffff;
        }

        .clients-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .clients-title {
          font-family: "Roboto", sans-serif;
          font-weight: 600;
          font-size: 36px;
          color: #444444;
          margin-bottom: 30px;
          text-align: center;
        }

        .clients-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .clients-image {
          max-width: 1200px;
          width: 100%;
          height: auto;
          display: block;
        }

        /* Desktop Styles - Larger client images */
        @media screen and (min-width: 1025px) {
          .clients-image {
            max-width: 1400px;
            width: 115%;
          }
        }

        /* Tablet Styles */
        @media screen and (max-width: 1024px) {
          .clients-container {
            padding: 30px 15px;
          }

          .clients-title {
            font-size: 30px;
            margin-bottom: 25px;
          }
        }

        /* Mobile Styles */
        @media screen and (max-width: 768px) {
          .clients-container {
            padding: 25px 10px;
          }

          .clients-title {
            font-size: 26px;
            margin-bottom: 20px;
          }
        }

        /* Small Mobile Styles */
        @media screen and (max-width: 480px) {
          .clients-container {
            padding: 20px 10px;
          }

          .clients-title {
            font-size: 22px;
            margin-bottom: 15px;
          }
        }
      `}</style>
    </div>
  )
}

export default Clients