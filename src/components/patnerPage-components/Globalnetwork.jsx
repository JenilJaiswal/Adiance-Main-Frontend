import { useNavigate } from "react-router-dom";

const Globalnetwork = ({ data }) => {
  const navigate = useNavigate();

  return (
    <section className="gn-cta-section">
      {/* Decorative top-right */}
      <div className="gn-deco gn-deco-right">
        <img src="/images/Group.svg" alt="" aria-hidden="true" />
      </div>

      <div className="gn-cta-content">
        <h2 className="gn-cta-title">
          {data.title}{" "}
          <span className="gn-cta-highlight">{data.highlight}</span>
        </h2>
        <p className="gn-cta-desc">{data.description}</p>
        <button
          className="gn-cta-btn"
          onClick={() => navigate("/contact")}
        >
          Contact Us &nbsp;›
        </button>
      </div>

      {/* Decorative bottom-left */}
      <div className="gn-deco gn-deco-left">
        <img src="/images/Group.svg" alt="" aria-hidden="true" />
      </div>

      <style>{`
        .gn-cta-section {
          position: relative;
          background-color: #BF0603;
          padding: 80px 20px;
          text-align: center;
          overflow: hidden;
          font-family: 'Roboto', sans-serif;
        }

        .gn-deco {
          position: absolute;
          width: 18%;
          opacity: 0.15;
          pointer-events: none;
        }

        .gn-deco-right {
          top: 0;
          right: 0;
        }

        .gn-deco-left {
          bottom: 0;
          left: 0;
          transform: rotate(180deg);
        }

        .gn-deco img {
          width: 100%;
          display: block;
        }

        .gn-cta-content {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
        }

        .gn-cta-title {
          font-size: 3rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .gn-cta-highlight {
          color: #ffffff;
          font-size: 3.5rem;
        }

        .gn-cta-desc {
          font-size: 18px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin-bottom: 36px;
        }

        .gn-cta-btn {
          display: inline-block;
          background-color: #ffffff;
          color: #BF0603;
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
          font-weight: 600;
          padding: 13px 40px;
          border: 2px solid #ffffff;
          border-radius: 2px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
        }

        .gn-cta-btn:hover {
          background-color: transparent;
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 1024px) {
          .gn-cta-section { padding: 60px 20px; }
          .gn-cta-title { font-size: 2.4rem; }
          .gn-cta-highlight { font-size: 2.8rem; }
        }

        @media (max-width: 768px) {
          .gn-cta-section { padding: 50px 15px; }
          .gn-cta-title { font-size: 1.9rem; }
          .gn-cta-highlight { font-size: 2.2rem; }
          .gn-cta-desc { font-size: 16px; }
        }

        @media (max-width: 480px) {
          .gn-cta-section { padding: 40px 10px; }
          .gn-cta-title { font-size: 1.6rem; }
          .gn-cta-highlight { font-size: 1.9rem; }
        }
      `}</style>
    </section>
  );
};

export default Globalnetwork;
