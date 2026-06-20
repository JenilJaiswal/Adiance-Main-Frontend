import './Services_Diagram.css';

const Services_Diagram = ({ 
  title,
  subtitle,
  diagramImage,
  diagramAlt = "Process Flow Diagram"
}) => {
  return (
    <section className="oem-gathering-container">
      <div className="gathering-header">
        <h2 className="gathering-title">{title}</h2>
        <p className="gathering-subtitle">{subtitle}</p>
      </div>
      <div className="gathering-diagram">
        <img
          src={diagramImage}
          alt={diagramAlt}
          className="diagram-image"
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default Services_Diagram
