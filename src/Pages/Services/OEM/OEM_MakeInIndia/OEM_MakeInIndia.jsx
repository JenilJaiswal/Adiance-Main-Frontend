import './OEM_MakeInIndia.css';

const OEM_MakeInIndia = () => {
  const backgroundStyle = {
    backgroundImage: `url('/N_Images/make-in-india-bg.svg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <section className="make-in-india-container" style={backgroundStyle}>
      <div className="make-in-india-content">
        <div className="text-content">
          <h2 className="main-title">
            Make-in-India OEM Engineering & Product Assembly Process for Smart Innovation
          </h2>
          <p className="description">
            As a leading OEM manufacturer in India, we deliver smart innovation through scalable engineering, precision assembly and end-to-end manufacturing.
          </p>
        </div>
        
        <div className="logo-containers">
          <img 
            src="/N_Images/oem_make-in-india.svg" 
            alt="Make in India" 
            className="make-in-india-logo"
          />
        </div>
      </div>
    </section>
  )
}

export default OEM_MakeInIndia