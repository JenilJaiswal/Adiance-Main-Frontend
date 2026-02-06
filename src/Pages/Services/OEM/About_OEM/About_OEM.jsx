import './About_OEM.css';

const About_OEM = () => {
  return (
    <>
      <section className="about-oem-container">
        <div className="about-oem-wrapper">
          <h2 className="about-oem-title">
            Original Equipment Manufacturing Company That Meets STQC <br /> Quality Protocols
          </h2>
          <p className="about-oem-description">
            With over 20 years of original equipment manufacturing expertise, Adiance Technologies Pvt. Ltd. stands as a leading Indian manufacturer delivering STQC-certified CCTV camera systems, precision robotic automation, and PCB assemblies tailored for complex industrial applications.
          </p>
          <p className="about-oem-description">
            Our vertically integrated infrastructure spans PCB design, SMT & THT assembly, camera system integration, robotic arm production, multi-level inspections, and packaging all under strict internal quality controls. Our end-to-end processes ensure confidentiality, traceability and compliance at every stage.
          </p>
          <p className="about-oem-description">
            Built on a foundation of engineering depth and scalable production, We consistently met the rigorous demands of both domestic and global partners serving OEM clients across safety, manufacturing and electronics sectors.
          </p>

        </div>
          <div className='clients-image'>
            <img src="/N_Images/clients.svg" alt="Our Clients" />
          </div>
      </section>
    </>
  );
};

export default About_OEM;