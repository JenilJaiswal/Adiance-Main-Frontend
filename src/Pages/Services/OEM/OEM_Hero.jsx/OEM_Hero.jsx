import './OEM_Hero.css';

const OEM_Hero = () => {
  return (
    <section className="oem-hero">
      <img
        src="/N_Images/OEM_Hero.svg"
        alt="OEM Background"
        className="oem-hero-bg-image"
        loading="lazy"
        decoding="async"
      />
      <div className="oem-hero-container">
        <div className="oem-hero-content">
          <div className="oem-hero-left">
            <h1 className="oem-hero-title">
              Original Equipment<br />
              Manufacturer Services<br />
              for CCTV, Robotics Arm & PCB
            </h1>
            <p className="oem-hero-description">
              We are a leading OEM company in India offering scalable production, custom 
              engineering and STQC-certified precision across video surveillance systems, industrial 
              robotic arms and electronic assemblies.
            </p>
            <button className="oem-hero-cta">
              Get a Custom OEM Quote
            </button>
          </div>
          <div className="oem-hero-right">
            <div className="oem-hero-images">
              <img
                src="/N_Images/OEM_Hero_Right_1.svg"
                alt="CCTV Camera"
                className="oem-hero-image-1"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/N_Images/OEM_Hero_Right_2.svg"
                alt="Robotics Arm"
                className="oem-hero-image-2"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OEM_Hero;