import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ImageSlider = () => {
  return (
    <div style={{ height: "600px", margin: "0 auto" }} className="main">
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
        
        .carousel-item p {
          position: absolute;
          top: 90%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-weight: bold;
          text-align: left;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        @media (max-width: 768px) {
          .carousel-item p {
            font-size: 9px;
            top: 75%;
            
          }
          .main {
            height: 200px !important; /* Use !important to ensure the height is applied */
          }
          .carousel-item .d-block.w-100 {
            height: 200px !important;  
          }
        }
      `}</style>
      <Carousel>
        {/* <Carousel.Item style={{ height: "800px" }}>
          <img
            className="d-block w-100"
            src="/images/SCameraPageOG.jpg"
            alt="First slide"
            style={{ height: "800px" }}
          />
          <div className="overlay"></div>
          <div> <h2>World’s First 5G-Enabled Edge AI Camera – S Series AI Surveillance</h2> </div>
        </Carousel.Item> */}

        {/* <Carousel.Item> */}
          {/* <img
            className="d-block w-100"
            src="/images/smart-tech-asia.png"
            alt="First slide"
            style={{ height: "800px" }}
          /> */}
          {/* <div className="overlay"></div>
          <div> <h2>World’s First 5G-Enabled Edge AI Camera – S Series AI Surveillance</h2> </div> */}
        {/* </Carousel.Item> */}

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/SCameraPageOG.jpg"
            alt="First slide"
            style={{ height: "800px" }}
          />
          {/* <div className="overlay"></div>
          <div> <h2>World’s First 5G-Enabled Edge AI Camera – S Series AI Surveillance</h2> </div> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slider1.png"
            alt="First slide"
            style={{ height: "800px", objectFit: "cover" }}
          />
          <div className="overlay"></div> {/* Overlay for gradient */}
          <div>
            <p>One stop solution for all your security needs</p>
            <p>
            One stop solution for all your security needs
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slider4.png"
            alt="First slide"
            style={{ height: "800px", objectFit: "cover" }}
          />
          <div className="overlay"></div> {/* Overlay for gradient */}
          <div>
            <p>From Concept to Completion</p>
          </div>
        </Carousel.Item>

        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slider3.png"
            alt="First slide"
            style={{ height: "800px", objectFit: "cover" }}
          />
          <div className="overlay"></div>
          <div>
            <h2>One stop solution for all your security needs</h2>
          </div>
        </Carousel.Item> */}

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slider5.png"
            alt="First slide"
            style={{ height: "800px", objectFit: "cover" }}
          />
          <div className="overlay"></div> {/* Overlay for gradient */}
          <div>
            <p>Integrated innovation, Limitless potential</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slider2.png"
            alt="First slide"
            style={{ height: "800px", objectFit: "cover" }}
          />
          <div className="overlay"></div> {/* Overlay for gradient */}
          <div>
            <p>Make in India Initiative</p>
          </div>
        </Carousel.Item>

        {/* Other carousel items */}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
