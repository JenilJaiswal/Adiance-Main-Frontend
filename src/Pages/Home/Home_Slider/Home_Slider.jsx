import { Carousel } from "react-bootstrap";
import "./Home_Slider.css";
import "../BISHeroSection/BISHeroSection.css";

const slides = [
  {
    type: "bis",
    image: "/N_Images/BIS_ER_bg.jpg",
  },
  {
    type: "default",
    image: "/N_Images/Slider1.webp",
    heading: "India's Top Non-Chinese SoC CCTV Camera Manufacturer",
    subheading:
      "Designed, Developed & Manufactured in India for Reliable, Secure Surveillance.",
    ctaText: "Partner With Adiance",
    ctaLink: "/contact",
  },
  {
    type: "default",
    image: "/N_Images/Slider2.webp",
    heading: "Your Trusted OEM, ODM & JDM CCTV Manufacturing Partner",
    subheading:
      "From design to production — complete engineering, integration and delivery under one roof.",
    ctaText: "Explore Manufacturing Services",
    ctaLink: "/contact",
  },
  {
    type: "default",
    image: "/N_Images/Slider3.webp",
    heading: "Advanced Edge AI Cameras Built for Performance & Precision",
    subheading: "S-Series & Eco-Series powered by secure, non-Chinese SoC technology.",
    ctaText: "View ArcisAI Products",
    ctaLink: "/contact",
  },
  {
    type: "default",
    image: "/N_Images/Slider4.webp",
    heading: "Made in India Security Cameras to World",
    subheading:
      "Export-ready product engineering with global certifications and world-class standards.",
    ctaText: "Get in touch Now",
    ctaLink: "/contact",
  },
  {
    type: "default",
    image: "/N_Images/Slider5.webp",
    heading: "Edge AI, Cloud AI & Gen AI Powered Video Surveillance Solutions",
    subheading:
      "Smart, scalable, and intelligent security solutions built into ArcisAI's ecosystem of cameras and VMS platforms.",
    ctaText: "Explore AI Solutions",
    ctaLink: "/contact",
  },
];

const BISSlide = () => (
  <div className="bis-slide-wrapper">
    <div className="bis-slide-right">
      <h1 className="bis-slide-heading">
        BIS-ER Certified by<br />STQC Certification
      </h1>
      <p className="bis-slide-subheading">Ready for Your Brand</p>
      <p className="bis-slide-desc">
        Adiance enables you to launch fully compliant CCTV and surveillance
        products in India—under your own brand.
      </p>
      <div className="bis-slide-badges">
        <picture>
          <source media="(max-width: 768px)" srcSet="/N_Images/bis-icon-mobile.svg" />
          <img
            src="/N_Images/bis-icon.svg"
            alt="BIS-ER Certificate"
            className="bis-icon-img"
          />
        </picture>
      </div>
      <a href="/contact" className="bis-slide-cta">Connect with us</a>
    </div>
  </div>
);

const Home_Slider = () => {
  return (
    <div style={{ height: "886px", margin: "0 auto" }} className="main">
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
          top: 10%;
          left: 5%;
          color: white;
          text-align: left;
          max-width: 65%;
          z-index: 10;
          font-family: 'Roboto', sans-serif;
        }
        .carousel-caption-custom-para {
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
        .cta-button:hover {
          background: #ffffff;
          color: #000000;
        }

        .carousel { height: 100%; }
        .carousel-inner { height: 100%; }
        .carousel-item { height: 886px; }

        .bis-carousel-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: block;
        }
        .bis-carousel-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
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
          .carousel-caption-custom h1 { font-size: 1.5rem; margin-bottom: 10px; }
          .slide-heading { font-size: 1.5rem; margin-bottom: 10px; }
          .carousel-caption-custom p { font-size: 0.9rem; margin-bottom: 15px; }
          .main { height: 775px !important; }
          .carousel-item { height: 775px !important; }
          .carousel-item img:not(.bis-icon-img) { height: 775px !important; object-fit: cover; }
          .carousel-control-prev-icon::before,
          .carousel-control-next-icon::before { width: 30px; height: 30px; }
        }

        @media (max-width: 480px) {
          .main { height: 720px !important; }
          .carousel-item { height: 720px !important; }
          .carousel-item img:not(.bis-icon-img) { height: 720px !important; object-fit: cover; }
        }

        @media (max-width: 375px) {
          .main { height: 700px !important; }
          .carousel-item { height: 700px !important; }
          .carousel-item img:not(.bis-icon-img) { height: 700px !important; object-fit: cover; }
        }
      `}</style>

      <Carousel>
        {slides.map((slide, index) => {
          if (slide.type === "bis") {
            return (
              <Carousel.Item key={index} interval={5000}>
                <picture className="bis-carousel-bg">
                  <source media="(max-width: 768px)" srcSet="/N_Images/bis-mobile-bg.png" />
                  <img
                    src={slide.image}
                    alt="BIS-ER Certified by STQC Certification"
                    fetchpriority="high"
                    loading="eager"
                  />
                </picture>
                <div className="overlay-bis" />
                <BISSlide />
              </Carousel.Item>
            );
          }

          return (
            <Carousel.Item key={index} interval={3000}>
              <img
                className="d-block w-100"
                src={slide.image}
                alt={slide.heading}
                style={{ height: "886px", objectFit: "cover" }}
                width={1440}
                height={886}
                fetchpriority={index === 1 ? "high" : "low"}
                loading={index === 1 ? "eager" : "lazy"}
              />
              <div className="overlay"></div>
              <div className="carousel-caption-custom">
                {index === 1 ? (
                  <h1 className="slide-heading">{slide.heading}</h1>
                ) : (
                  <div className="slide-heading">{slide.heading}</div>
                )}
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
          );
        })}
      </Carousel>
    </div>
  );
};

export default Home_Slider;
