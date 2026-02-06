import './OEM_Gathering.css';

const OEM_Gathering = () => {
  return (
    <section className="oem-gathering-container">
      <div className="gathering-header">
        <h2 className="gathering-title">Requirement Gathering & Consultation</h2>
        <p className="gathering-subtitle">
          As a leading OEM manufacturer in India, we deliver smart innovation through scalable engineering, precision assembly and end-to-end manufacturing.
        </p>
      </div>
      
      <div className="gathering-diagram">
        <img 
          src="/N_Images/OEM_Gathering.svg" 
          alt="OEM Process Flow - Requirement Gathering & Consultation" 
          className="diagram-image"
        />
      </div>
    </section>
  )
}

export default OEM_Gathering