import { Carousel } from "react-bootstrap";
import "./Home_Slider.css";

const Home_Slider = () => {
  const slides = [
    {
      image: "/N_Images/Slider1.webp",
      heading: "India's Top Non-Chinese SoC CCTV Camera Manufacturer",
      subheading:
        "Designed, Developed & Manufactured in India for Reliable, Secure Surveillance.",
      ctaText: "Partner With Adiance",
      ctaLink: "/contact",
    },
    {
      image: "/N_Images/Slider2.webp",
      heading: "Your Trusted OEM, ODM & JDM CCTV Manufacturing Partner",
      subheading:
        "From design to production — complete engineering, integration and delivery under one roof.",
      ctaText: "Explore Manufacturing Services",
      ctaLink: "/contact",
    },
    {
      image: "/N_Images/Slider3.webp",
      heading: "Advanced Edge AI Cameras Built for Performance & Precision",
      subheading: "S-Series & Eco-Series powered by secure, non-Chinese SoC technology.",
      ctaText: "View ArcisAI Products",
      ctaLink: "/contact",
    },
    {
      image: "/N_Images/Slider4.webp",
      heading: "Made in India Security Cameras to World",
      subheading:
        "Export-ready product engineering with global certifications and world-class standards.",
      ctaText: "Get in touch Now",
      ctaLink: "/contact",
    },
    {
      image: "/N_Images/Slider5.webp",
      heading: "Edge AI, Cloud AI & Gen AI Powered Video Surveillance Solutions",
      subheading:
        "Smart, scalable, and intelligent security solutions built into ArcisAI’s ecosystem of cameras and VMS platforms.",
      ctaText: "Explore AI Solutions",
      ctaLink: "/contact",
    },
  ];

  return (
    <div style={{ height: "800px", margin: "0 auto" }} className="main">
      <style>{`
        .carousel-item img {
          max-width: 100%;
          height: auto;
          position: relative;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(1deg, rgba(43,48,53,0.8) 10%, rgba(0,0,0,0) 100%);
        }

        .carousel-caption-custom {
          position: absolute;
          top: 10%; /* Flex-start / top alignment */
          left: 5%; /* Left align with some padding */
          color: white;
          text-align: left;
          max-width: 65%;
          z-index: 10;
          font-family: 'Roboto', sans-serif;
        }
          .carousel-caption-custom-para{
          max-width: 70%;
          font-family: 'Roboto', sans-serif;
          }

        .carousel-caption-custom h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 25px;
          font-family: 'Roboto', sans-serif;
        }

        .slide-heading {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 25px;
          font-family: 'Roboto', sans-serif;
        }

        .carousel-caption-custom p {
          font-size: 1.5rem;
          margin-bottom: 25px;
          font-family: 'Roboto', sans-serif;
          font-weight: 400;
        }

        .cta-button {
          color: white;
          padding: 10px 20px;
          text-decoration: none;
          font-weight: 500;
          display: inline-block;
          border: 2px solid white;
          transition: background-color 0.3s;
          font-family: 'Roboto', sans-serif;
        }
        .cta-button:hover{
          background: #ffffff;
          color: #000000;
        }

        .carousel-control-prev,
        .carousel-control-next {
          top: 60%;
          transform: translateY(-50%);
        }

        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          background-image: none !important;
          width: 50px;
          height: 50px;
        }

        .carousel-control-prev-icon::before {
          content: '';
          display: block;
          width: 50px;
          height: 50px;
          background-image: url('/N_Images/left_direction.svg');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }

        .carousel-control-next-icon::before {
          content: '';
          display: block;
          width: 50px;
          height: 50px;
          background-image: url('/N_Images/right_direction.svg');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }

        @media (max-width: 768px) {
          .carousel-caption-custom {
             top: 5%;
             left: 5%;
             max-width: 90%;
          }
           .carousel-caption-custom h1 {
             font-size: 1.5rem;
              margin-bottom: 10px;
          }
           .slide-heading {
             font-size: 1.5rem;
              margin-bottom: 10px;
          }
           .carousel-caption-custom p {
             font-size: 0.9rem;
              margin-bottom: 15px;
          }
          .main {
            height: 400px !important; /* Adjusted for mobile */
          }
           .carousel-item {
             height: 400px !important;
           }
          .carousel-item img {
             height: 400px !important;
             object-fit: cover;
          }
          .carousel-control-prev-icon::before,
          .carousel-control-next-icon::before {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index} interval={3000}>
            <img
              className="d-block w-100"
              src={slide.image}
              alt={`Slide ${index + 1}`}
              style={{ height: "800px", objectFit: "cover" }}
              width={1440}
              height={800}
              fetchpriority={index === 0 ? "high" : "low"}
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="overlay"></div>
            <div className="carousel-caption-custom">
              {/* <div
                style={{
                  fontSize: "3rem",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  marginBottom: "25px",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                }}
              >
                {slide.heading}
              </div> */}

              <div className="slide-heading">
                {slide.heading}
              </div>


              <div className="carousel-caption-custom-para">
                <p>{slide.subheading}</p>
              </div>
              {slide.ctaText && (
                <a href={slide.ctaLink} className="cta-button">
                  {slide.ctaText}
                </a>
              )}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Home_Slider;
