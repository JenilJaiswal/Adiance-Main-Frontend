import './OEM_Robotic_Arm.css';

const OEM_Robotic_Arm = () => {
  return (
    <section className="oem-robotic-container">
      <div className='red-banner'>
        <div className="banner-content item">
          <div className="title">
            OEM Robotic Arm Manufacturing
          </div>
          <div className='description item'>
            Highly configurable robotic solutions purpose-built for your factory environment:
          </div>
        </div>

        <div className='rightside-img item'>
          <img src="/N_Images/OEM_Robotic_Arm.webp" alt="OEM Robotic Arm" />
        </div>
      </div>

      <div className='lower-content'>
        <div className='leftside item'>
          <div className='feature-item'>
            <img src="/N_Images/check.svg" alt="Check" className="check-icon" />
            <span>Custom payload, reach, speed and degrees of freedom</span>
          </div>

          <div className='feature-item'>
            <img src="/N_Images/check.svg" alt="Check" className="check-icon" />
            <span>Application-specific design: Conveyor integration, product inspection, precision placement</span>
          </div>

          <div className='feature-item'>
            <img src="/N_Images/check.svg" alt="Check" className="check-icon" />
            <span>End-of-arm tooling (EOAT) customization — grippers, suction cups, welders, rotary tools</span>
          </div>

          <div className='feature-item'>
            <img src="/N_Images/check.svg" alt="Check" className="check-icon" />
            <span>Motor & control integration: Servo, BLDC, stepper with adaptive torque and speed control</span>
          </div>

          <div className='feature-item'>
            <img src="/N_Images/check.svg" alt="Check" className="check-icon" />
            <span>Custom enclosures & protection: IP-rated, fireproof, cleanroom-compatible housings</span>
          </div>

          <div className='feature-item'>
            <img src="/N_Images/check.svg" alt="Check" className="check-icon" />
            <span>Energy efficiency optimization with low-power-consumption modes</span>
          </div>

          <div className='feature-item'>
            <img src="/N_Images/check.svg" alt="Check" className="check-icon" />
            <span>Export-ready compliance: CE, ISO 10218, UL, BIS</span>
          </div>

          <div className='feature-item'>
            <img src="/N_Images/check.svg" alt="Check" className="check-icon" />
            <span>White-label OEM branding and firmware support</span>
          </div>

          <div className='feature-item'>
            <img src="/N_Images/check.svg" alt="Check" className="check-icon" />
            <div className='feature-with-sublist'>
              <span>Smart connectivity:</span>
              <ul>
                <li>Communication protocols: Modbus, CANbus, Profinet, EtherCAT</li>
                <li>Industrial IoT integration (Industry 4.0-ready)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OEM_Robotic_Arm;
