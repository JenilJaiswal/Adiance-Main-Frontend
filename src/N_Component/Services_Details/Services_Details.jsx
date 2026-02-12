import './Services_Details.css';

const Services_Details = ({ 
  title,
  paragraphs = [],
}) => {
  return (
    <>
      <section className="about-oem-container">
        <div className="about-oem-wrapper">
          <h2 
            className="about-oem-title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="about-oem-description">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services_Details;
