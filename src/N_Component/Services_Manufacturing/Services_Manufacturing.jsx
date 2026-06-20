import './Services_Manufacturing.css';

const Services_Manufacturing = ({ 
  title,
  subtitle,
  topFeatures = [],
  bannerText,
  bottomFeatures = [],
  certifications = [],
  backgroundImage,
  checkIcon = "/N_Images/check.svg",
  rightImage,
  rightImageAlt = "Product Image",
  rightImages = []
}) => {
  return (
    <section 
      className="services-manufacturing"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="services-manufacturing-container">
        <div className="services-manufacturing-left">
          <h2 className="services-manufacturing-title">{title}</h2>
          <p className="services-manufacturing-subtitle">{subtitle}</p>
          
          <ul className="services-manufacturing-features">
            {topFeatures.map((feature, index) => (
              <li key={index} className="services-manufacturing-feature">
                <img src={checkIcon} alt="check" className="feature-icon" loading="lazy" />
                {feature}
              </li>
            ))}
          </ul>

          {bannerText && (
            <div className="services-manufacturing-banner">
              <p>{bannerText}</p>
            </div>
          )}

          {bottomFeatures.length > 0 && (
            <ul className="services-manufacturing-features">
              {bottomFeatures.map((feature, index) => (
                <li key={index} className="services-manufacturing-feature">
                  <img src={checkIcon} alt="check" className="feature-icon" loading="lazy" />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {certifications && certifications.length > 0 && (
            <div className="services-manufacturing-certifications">
              {certifications.map((cert, index) => (
                <img
                  key={index}
                  src={cert.src}
                  alt={cert.alt}
                  className="certification-logo"
                  loading="lazy"
                />
              ))}
            </div>
          )}
        </div>

        {rightImages && rightImages.length > 0 ? (
          <div className="services-manufacturing-right">
            <div className="services-manufacturing-images-grid">
              {rightImages.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  className="services-manufacturing-grid-image"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        ) : rightImage ? (
          <div className="services-manufacturing-right">
            <img src={rightImage} alt={rightImageAlt} className="services-manufacturing-right-image" loading="lazy" decoding="async" />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Services_Manufacturing;
