import './OEM_Manufacturing.css';

const OEM_Manufacturing = () => {
  return (
    <section className="oem-manufacturing-container">
      <div className="oem-manufacturing-content-wrapper">
        <img
          src="/N_Images/About_OEM_bg.png"
          alt="OEM Manufacturing Background"
          className="oem-manufacturing-bg-image"
        />

        <div className="oem-manufacturing-overlay"></div>

        <div className="oem-manufacturing-content">
          <h2 className="oem-manufacturing-title">
            Comprehensive OEM Manufacturing
            Solutions Built Around Your
            Product Needs
          </h2>

          <p className="oem-manufacturing-description">
            Turn your product vision into market-ready success with us — We are
            India's trusted original equipment manufacturer company for CCTV
            cameras, robotic arms and PCB solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OEM_Manufacturing;
