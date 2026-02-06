import './OEM_Benefits.css';

const OEM_Benefits = () => {
  const benefits = [
    {
      title: "Security & Surveillance Brands",
      description: "Build your own line of CCTV cameras with custom firmware, branded packaging and STQC compliance without setting up your own factory."
    },
    {
      title: "Startup Hardware Founders/ Entrepreneurs",
      description: "Want to launch your own product but lack manufacturing? We partner from prototype to production while protecting your IP."
    },
    {
      title: "Automation & Robotics Startups",
      description: "Prototype and mass-produce robotic arms and automation modules for manufacturing, logistics, and more applications."
    },
    {
      title: "Electronic Product Designers",
      description: "You bring the circuit or enclosure idea; we bring it to life. Ideal for firms looking to turn product designs into hardware."
    },
    {
      title: "Global Sourcing & Procurement Teams",
      description: "Looking for a cost-effective, scalable OEM manufacturer in India? Our audit-ready facilities meet export standards with NDA-protected processes."
    },
    {
      title: "System Integrators & VARs (Value-Added Resellers)",
      description: "Offer turnkey solutions to your clients using hardware powered by your brand and our OEM engineering capabilities."
    },
    {
      title: "AI/ML Software Companies Needing Edge Devices",
      description: "We manufacture smart hardware like AI cameras and robotics modules to complement your software stack."
    },
    {
      title: "Tech-Enabled Service Platforms",
      description: "Build your own camera or control system tailored to your software and brand identity, no dependency on off-the-shelf devices."
    },
    {
      title: "Government Contractors & Public Sector Vendors",
      description: "Get STQC-ready, Make-in-India-compliant surveillance or automation hardware under your brand for government or PSU projects."
    },
    {
      title: "Smart City & Infrastructure Solution Providers",
      description: "We support integrators with custom surveillance hardware and intelligent PCB systems for public sector and infrastructure projects."
    }
  ];

  return (
    <section className="oem-benefits-container">
      <div className="benefits-hero">
        <div className="hero-content">
          <h2 className="hero-title">
            Businesses That Benefit from Our Custom OEM Services
          </h2>
          <p className="hero-description">
            We deliver custom OEM manufacturing services to businesses seeking for scalable production, innovation and a reliable EMS OEM service provider in India.
          </p>
        </div>
        <div className="hero-image">
          <img 
            src="/N_Images/hand-shack.svg" 
            alt="Business Partnership" 
            className="handshake-image"
          />
        </div>
      </div>

      <div className="benefits-grid">
        <div className="benefits-column">
          {benefits.slice(0, 5).map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-icon">
                <img src="/N_Images/check.svg" alt="Check" />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="benefits-column">
          {benefits.slice(5, 10).map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-icon">
                <img src="/N_Images/check.svg" alt="Check" />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OEM_Benefits
