import './OEM_GlobalPresence.css';

const OEM_GlobalPresence = () => {
  const leftFeatures = [
    {
      title: "20+ Years of Expertise",
      description: "Decades of proven experience in electronics, surveillance, robotics, and embedded systems manufacturing"
    },
    {
      title: "STQC-Compliant CCTV Production",
      description: "We meet stringent government standards for safety, reliability and compliance in all surveillance devices"
    },
    {
      title: "In-House Assembly",
      description: "Our facilities offer full control over PCB and product assembly — ensuring faster turnarounds and tighter quality control"
    },
    {
      title: "IP Protection",
      description: "All client data, designs and hardware blueprints are securely handled under NDA with a closed development environment"
    },
    {
      title: "OEM Manufacturing Services",
      description: "We manage the full product journey — from PCB design to mechanical housing, software integration, QA and packaging"
    },
    {
      title: "Flexible Product Customization",
      description: "We offer tailored features, firmware integration, enclosure design and branded packaging options"
    },
    {
      title: "End-to-End Logistics & Delivery Support",
      description: "We offer tailored features, firmware integration, enclosure design and branded packaging options"
    }
  ];

  const bottomFeatures = [
    {
      title: "Global & Indian Markets",
      description: "Our OEM infrastructure is export-ready and aligned with Make-in-India, meeting both domestic and international demand"
    },
    {
      title: "Flexible Product Customization",
      description: "We offer tailored features, firmware integration, enclosure design and branded packaging options"
    }
  ];

  return (
    <div className='oem-global-container'>
      <div className="oem-global-title">
        <h2>
          An Original Equipment Manufacturer Company <br /> Committed to Your Innovation
        </h2>
      </div>
      <div className="map-bg-img">
        <img src="/N_Images/map.png" alt="" />
      <div className="discription-bottom">
        <p>
          We don't just manufacture - we partner. Our in-house capabilities, 
          strict quality protocols and deep industry experience make us the 
          trusted OEM choice for growing and global brands alike.
        </p>
      </div>
      </div>
      <div className="left-column-sidebar">
        {leftFeatures.map((feature, index) => (
          <div key={index} className="left-feature-item">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="bottom-row-sidebar">
        {bottomFeatures.map((feature, index) => (
          <div key={index} className="bottom-feature-item">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OEM_GlobalPresence;
