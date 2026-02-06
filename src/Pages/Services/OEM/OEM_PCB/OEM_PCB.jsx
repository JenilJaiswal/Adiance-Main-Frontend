import './OEM_PCB.css';
const OEM_PCB = () => {
  return (
    <section className="oem-pcb-container">
      <div className="oem-pcb-content">
        <div className="oem-pcb-left">
          <div className="oem-pcb-header">
            <h2 className="oem-pcb-title">OEM PCB Manufacturing & Assembly Services</h2>
            <p className="oem-pcb-subtitle">
              Ideal for startups, niche product manufacturers or R&D divisions looking for tailored PCB assemblies.
            </p>
          </div>
          <div className="oem-pcb-image">
            <img 
              src="/N_Images/OEM_PCB.svg" 
              alt="OEM PCB Manufacturing Equipment" 
              className="oem-pcb-main-image"
            />
          </div>
        </div>
        
        <div className="oem-pcb-right">
          <div className="oem-pcb-features">
            <div className="oem-pcb-feature">
              <img src="/N_Images/check.svg" alt="Check" className="feature-checkmark" />
              <span className="feature-text">Custom PCB Layout Design & Engineering Consultation</span>
            </div>
            <div className="oem-pcb-feature">
              <img src="/N_Images/check.svg" alt="Check" className="feature-checkmark" />
              <span className="feature-text">Prototype Assembly with Rapid Turnaround</span>
            </div>
            <div className="oem-pcb-feature">
              <img src="/N_Images/check.svg" alt="Check" className="feature-checkmark" />
              <span className="feature-text">Support for Rigid, Flexible or Rigid-Flex Boards</span>
            </div>
            <div className="oem-pcb-feature">
              <img src="/N_Images/check.svg" alt="Check" className="feature-checkmark" />
              <span className="feature-text">Multi-layer PCB Development (2–12+ layers)</span>
            </div>
            <div className="oem-pcb-feature">
              <img src="/N_Images/check.svg" alt="Check" className="feature-checkmark" />
              <span className="feature-text">Advanced Solder Mask, Silk Screening and Surface Finish Options (ENIG, HASL, OSP)</span>
            </div>
            <div className="oem-pcb-feature">
              <img src="/N_Images/check.svg" alt="Check" className="feature-checkmark" />
              <span className="feature-text">Environmental, Vibration and Thermal Testing Support</span>
            </div>
            <div className="oem-pcb-feature">
              <img src="/N_Images/check.svg" alt="Check" className="feature-checkmark" />
              <span className="feature-text">Microcontroller Programming & Pre-Bootloader Flashing</span>
            </div>
            <div className="oem-pcb-feature">
              <img src="/N_Images/check.svg" alt="Check" className="feature-checkmark" />
              <span className="feature-text">Integration with Final Enclosure/Chassis (Secondary Assembly)</span>
            </div>
            <div className="oem-pcb-feature">
              <img src="/N_Images/check.svg" alt="Check" className="feature-checkmark" />
              <span className="feature-text">Custom Branding, QR/Serial Tagging & Industry Certifications</span>
            </div>
            <div className="oem-pcb-feature">
              <img src="/N_Images/check.svg" alt="Check" className="feature-checkmark" />
              <span className="feature-text">Optional IPC Class 3 builds for mission-critical products</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OEM_PCB