import './Services_Banner_Comp.css';

const Services_Banner_Comp = ({ 
  backgroundImage,
  title,
  description,
  backgroundImageAlt = "Manufacturing Background"
}) => {
  return (
    <section className="oem-manufacturing-container">
      <div className="oem-manufacturing-content-wrapper">
        <img
          src={backgroundImage}
          alt={backgroundImageAlt}
          className="oem-manufacturing-bg-image"
        />

        <div className="oem-manufacturing-overlay"></div>

        <div className="oem-manufacturing-content">
          <h2 
            className="oem-manufacturing-title"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <p 
            className="oem-manufacturing-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </section>
  );
};

export default Services_Banner_Comp;
