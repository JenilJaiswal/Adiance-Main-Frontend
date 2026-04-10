import './Services_Hero.css';

const Services_Hero = ({ 
  backgroundImage = "/N_Images/ODM_Hero.svg",
  title = "Original Equipment<br />Manufacturer Services<br />for CCTV, Robotics Arm & PCB",
  description = "We are a leading OEM company in India offering scalable production, custom engineering and STQC-certified precision across video surveillance systems, industrial robotic arms and electronic assemblies.",
  ctaText = "Get a Custom OEM Quote",
  onCtaClick
}) => {
  return (
    <section className="services-hero">
      <img
        src={backgroundImage}
        alt="Hero Background"
        className="services-hero-bg-image"
        loading="lazy"
        decoding="async"
        width="1440"
        height="600"
      />
      <div className="services-hero-container">
        <div className="services-hero-content">
          <div className="services-hero-left">
            <h1 
              className="services-hero-title"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="services-hero-description">
              {description}
            </p>
            <button 
              className="services-hero-cta"
              onClick={onCtaClick}
            >
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services_Hero;