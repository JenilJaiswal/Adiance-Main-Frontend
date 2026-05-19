import './PCB_Turnkey.css';

const PCB_Turnkey = ({ 
  title,
  description,
  features = [],
  backgroundImage,
  checkIcon = "/N_Images/check.svg"
}) => {
  return (
    <section 
      className="pcb-turnkey-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="pcb-turnkey-overlay"></div>
      <div className="pcb-turnkey-content">
        <h2 className="pcb-turnkey-title">{title}</h2>
        <p className="pcb-turnkey-description">{description}</p>
        
        <ul className="pcb-turnkey-features">
          {features.map((feature, index) => (
            <li key={index} className="pcb-turnkey-feature">
              <img src={checkIcon} alt="check" className="pcb-feature-icon" loading="lazy" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PCB_Turnkey;
