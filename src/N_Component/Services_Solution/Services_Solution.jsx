import './Services_Solution.css';

const Services_Solution = ({ 
  title,
  description,
  image,
  imageAlt = "Solution",
  backgroundColor,
  wideImage = false
}) => {
  return (
    <section className="services-solution">
      <div className="services-solution-container">
        <div className="services-solution-content" style={{ backgroundColor }}>
          <h2 className="services-solution-title">{title}</h2>
          <p className="services-solution-description">{description}</p>
        </div>
        <div className="services-solution-image">
          <img
            src={image}
            alt={imageAlt}
            className={wideImage ? 'wide-image' : ''}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Services_Solution;
