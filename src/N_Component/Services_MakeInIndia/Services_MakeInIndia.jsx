import './Services_MakeInIndia.css';

const Services_MakeInIndia = ({ 
  title,
  description,
  backgroundImage,
  logo,
  logoAlt = "Make in India"
}) => {
  const backgroundStyle = {
    backgroundImage: `url('${backgroundImage}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <section className="make-in-india-container" style={backgroundStyle}>
      <div className="make-in-india-content">
        <div className="text-content">
          <h2 className="main-title">{title}</h2>
          <p className="description">{description}</p>
        </div>
        
        <div className="logo-containers">
          <img
            src={logo}
            alt={logoAlt}
            className="make-in-india-logo"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default Services_MakeInIndia
