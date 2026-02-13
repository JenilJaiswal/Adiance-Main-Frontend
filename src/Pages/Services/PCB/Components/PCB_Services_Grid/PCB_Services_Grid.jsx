import './PCB_Services_Grid.css';

const PCB_Services_Grid = ({ services = [] }) => {
  return (
    <section className="pcb-services-grid-container">
      <div className="pcb-services-grid">
        {services.map((service, index) => (
          <div key={index} className="pcb-service-card">
            <div className="pcb-service-icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <div className="pcb-service-content">
              <h3 className="pcb-service-title">{service.title}</h3>
              <p className="pcb-service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PCB_Services_Grid;
