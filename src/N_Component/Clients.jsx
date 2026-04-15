const Clients = ({ showTitle = true }) => {
  const clientLogos = Array.from({ length: 33 }, (_, i) => i + 1);

  return (
    <div className="clients-container">
      <div className="clients-content">
        {showTitle && <h2 className="clients-title">Our Clients</h2>}
        <div className="clients-grid">
          {clientLogos.map((num) => (
            <div key={num} className="client-logo-wrapper">
              <img
                src={`/N_Images/client${num}.svg`}
                alt={`Client ${num}`}
                className="client-logo"
                loading="lazy"
                decoding="async"
                width={150}
                // height={150}
                onLoad={(e) => e.currentTarget.classList.add('loaded')}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
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

        .clients-grid {
          display: grid;
          grid-template-columns: repeat(11, 1fr);
          gap: 20px;
          align-items: center;
          justify-items: center;
        }

        .client-logo-wrapper {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .client-logo {
          width: 100%;
          height: auto;
          max-width: 100px;
          object-fit: contain;
        }

        /* Desktop Styles */
        @media screen and (min-width: 1025px) {
          .clients-content {
            max-width: 1565px;
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

          .clients-grid {
            grid-template-columns: repeat(6, 1fr);
            gap: 15px;
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

          .clients-grid {
            grid-template-columns: repeat(6, 1fr);
            gap: 12px;
          }

          .client-logo {
            max-width: 80px;
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

          .clients-grid {
            grid-template-columns: repeat(5, 1fr);
            gap: 10px;
          }

          .client-logo {
            max-width: 60px;
          }
        }
      `}</style>
    </div>
  );
};

export default Clients;
