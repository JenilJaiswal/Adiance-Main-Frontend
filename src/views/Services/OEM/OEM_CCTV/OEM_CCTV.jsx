import './OEM_CCTV.css';

const OEM_CCTV = () => {
  return (
    <section className="oem-cctv-container">
      <div className="oem-cctv-content">
        <div className="oem-cctv-left">
          <div className="oem-cctv-header">
            <h2 className="oem-cctv-title">OEM CCTV Camera Manufacturer</h2>
            <p className="oem-cctv-subtitle">
              Tailored to meet your unique surveillance goals and demands
            </p>
          </div>
          <div className="oem-cctv-image">
            <img
              src="/N_Images/OEM_CCTV.webp"
              alt="OEM CCTV Camera Equipment"
              className="oem-cctv-main-image"
              loading="lazy"
            />
          </div>
        </div>
        
        <div className="oem-cctv-right">
          <div className="oem-cctv-features">
            <div className="oem-cctv-feature">
              <img src="/N_Images/check.svg" alt="Check" className="feature-checkmark" loading="lazy" />
              <span className="feature-text">Complete hardware customization: PCB, SoC, sensors, lens</span>
            </div>
            <div className="oem-cctv-feature">
              <img src="/N_Images/check.svg" alt="Check" className="feature-checkmark" loading="lazy" />
              <span className="feature-text">Integration with ArcisGPT, or third-party VMS</span>
            </div>
            <div className="oem-cctv-feature">
              <img src="/N_Images/check.svg" alt="Check" className="feature-checkmark" loading="lazy" />
              <span className="feature-text">Enclosure design (IP66/IP67/ATEX certified, vandal-proof, mini-size, etc.)</span>
            </div>
            <div className="oem-cctv-feature">
              <img src="/N_Images/check.svg" alt="Check" className="feature-checkmark" loading="lazy" />
              <span className="feature-text">Custom firmware with smart features (PPE detection, face detection, loitering, etc.)</span>
            </div>
            <div className="oem-cctv-feature">
              <img src="/N_Images/check.svg" alt="Check" className="feature-checkmark" loading="lazy" />
              <span className="feature-text">Country-specific compliance (NDAA, UL, RoHS, REACH, etc.)</span>
            </div>
            <div className="oem-cctv-feature">
              <img src="/N_Images/check.svg" alt="Check" className="feature-checkmark" loading="lazy" />
              <span className="feature-text">Custom mobile app, GUI, and dashboard integration</span>
            </div>
            <div className="oem-cctv-feature">
              <img src="/N_Images/check.svg" alt="Check" className="feature-checkmark" loading="lazy" />
              <span className="feature-text">Localization: Language UI, time zone, app compatibility</span>
            </div>
            <div className="oem-cctv-feature">
              <img src="/N_Images/check.svg" alt="Check" className="feature-checkmark" loading="lazy" />
              <span className="feature-text">Branding: Logo on lens, app splash, QR/manual customization</span>
            </div>
            <div className="oem-cctv-feature">
              <img src="/N_Images/check.svg" alt="Check" className="feature-checkmark" loading="lazy" />
              <span className="feature-text">Field-ready kits: bundled with NVR, SIM, cloud services</span>
            </div>
            <div className="oem-cctv-feature">
              <img src="/N_Images/check.svg" alt="Check" className="feature-checkmark" loading="lazy" />
              <span className="feature-text">Industrial-grade packaging for export or rough handling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OEM_CCTV