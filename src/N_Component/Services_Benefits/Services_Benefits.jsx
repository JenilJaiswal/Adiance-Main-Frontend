import './Services_Benefits.css';

const Services_Benefits = ({ 
  heroTitle,
  heroDescription,
  heroImage,
  heroImageAlt = "Business Partnership",
  benefits = [],
  checkIcon = "/N_Images/check.svg"
}) => {
  const midPoint = Math.ceil(benefits.length / 2);

  return (
    <section className="services-benefits-container">
      <div className="benefits-hero">
        <div className="hero-content">
          <h2 className="hero-title">{heroTitle}</h2>
          <p className="hero-description">{heroDescription}</p>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt={heroImageAlt} className="handshake-image"/>
        </div>
      </div>

      <div className="benefits-grid">
        <div className="benefits-column">
          {benefits.slice(0, midPoint).map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-icon">
                <img src={checkIcon} alt="Check" />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="benefits-column">
          {benefits.slice(midPoint).map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-icon">
                <img src={checkIcon} alt="Check" />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services_Benefits
