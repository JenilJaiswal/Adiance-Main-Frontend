// SEO-006: these 33 logo files (/N_Images/client1.svg … client33.svg) shipped
// with generic "Client N" alt text — no accessibility or image-search value.
// Names below came from a visual identification pass (rendering every logo
// and reading it directly, since the SVGs carry no text metadata) rather
// than any CMS/data source, so confidence varies per logo. High-confidence
// names are used as-is; the handful of medium/low-confidence identifications
// are marked inline — please have someone who knows the client roster
// confirm those specific ones before treating them as final copy.
const CLIENT_NAMES = {
  1: "Adani",
  2: "State Bank of India (SBI)",
  3: "Eicher",
  4: "HDFC Bank",
  5: "ICICI Bank",
  6: "TEDx",
  7: "Pfizer",
  8: "L'Oréal",
  9: "Arab Republic of Egypt (government client)",
  10: "Reliance Jio",
  11: "IIM Ahmedabad",
  12: "Election Commission of India",
  13: "Government of Nagaland",
  14: "Chandigarh Administration",
  15: "Government of West Bengal",
  16: "Government of Kerala", // Medium confidence — emblem style match, please confirm
  17: "Central Bureau of Investigation (CBI), India",
  18: "Government of Punjab",
  19: "Gujarat state government body", // Low confidence — Gujarati text on the logo, exact department unconfirmed
  20: "IIM Ahmedabad", // Same logo as #11 — flagging as a likely duplicate, not a second confirmed client
  21: "State government body", // Low confidence — emblem text not legible at render size
  22: "Government of Jharkhand",
  23: "Government of India",
  24: "RAILTEL (Government of India enterprise)",
  25: "NICSI — National Informatics Centre Services Incorporated",
  26: "REIL — Rajasthan Electronics & Instruments Limited", // Medium confidence — logo style match, please confirm
  27: "NIC — National Informatics Centre",
  28: "BSNL — Bharat Sanchar Nigam Limited",
  29: "NTPC — National Thermal Power Corporation",
  30: "TCIL — Telecommunications Consultants India Limited",
  31: "Government of Uttar Pradesh",
  32: "Vadodara Municipal Corporation",
  33: "Gujarat Tourism",
};

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
                alt={CLIENT_NAMES[num] ? `${CLIENT_NAMES[num]} logo` : `Client ${num}`}
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

      {/* Raw, not a text child: React escapes " to &quot; when serialising text,
          but <style> is a raw-text element so the browser never decodes it —
          server and client text then disagree and hydration fails. */}
      <style dangerouslySetInnerHTML={{ __html: `
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
      ` }} />
    </div>
  );
};

export default Clients;
