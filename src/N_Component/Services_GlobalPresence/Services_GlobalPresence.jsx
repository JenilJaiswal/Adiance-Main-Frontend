import './Services_GlobalPresence.css';

const Services_GlobalPresence = ({ 
  title,
  description,
  mapImage = "/N_Images/map.webp",
  mapImageAlt = "Global presence map",
  leftFeatures = [],
  bottomFeatures = []
}) => {
  return (
    <section className="oem-global-container">
      <div className="oem-gp-shell">
        <aside className="oem-gp-left-column">
          {leftFeatures.map((feature, index) => (
            <article key={index} className="oem-gp-left-feature">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </aside>

        <div className="oem-gp-right-column">
          <header className="oem-gp-title">
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
          </header>

          <div className="oem-gp-map-wrap">
            <img src={mapImage} alt={mapImageAlt} />
            <div className="oem-gp-description">
              <p>{description}</p>
            </div>
            <span className="oem-gp-accent-line" />
          </div>

          <div className="oem-gp-bottom-row">
            {bottomFeatures.map((feature, index) => (
              <article key={index} className="oem-gp-bottom-feature">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services_GlobalPresence;
