import React from "react";
import { useRef, useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AboutSlider from "./AboutSlider";
import ProductSlider from "./ProductSlider";
import AboutImgs from "./AboutImgs";
import AboutImgs2 from "./AboutImgs2";
import Certifications from "./Certifications";
const AboutMidSection = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const hiddenStyle = { display: "none" };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [animate1, setAnimate1] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  const [animate3, setAnimate3] = useState(false);
  const [animate4, setAnimate4] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate1(true);
          observer1.unobserve(ref1.current);
        }
      },
      { threshold: 0.5 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate2(true);
          observer2.unobserve(ref2.current);
        }
      },
      { threshold: 0.5 }
    );

    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate3(true);
          observer3.unobserve(ref3.current);
        }
      },
      { threshold: 0.5 }
    );

    const observer4 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate4(true);
          observer4.unobserve(ref4.current);
        }
      },
      { threshold: 0.5 }
    );

    if (ref1.current) {
      observer1.observe(ref1.current);
    }
    if (ref2.current) {
      observer2.observe(ref2.current);
    }
    if (ref3.current) {
      observer3.observe(ref3.current);
    }
    if (ref4.current) {
      observer4.observe(ref4.current);
    }

    return () => {
      if (ref1.current) {
        observer1.unobserve(ref1.current);
      }
      if (ref2.current) {
        observer2.unobserve(ref2.current);
      }
      if (ref3.current) {
        observer3.unobserve(ref3.current);
      }
      if (ref4.current) {
        observer4.unobserve(ref4.current);
      }
    };
  }, []);

  // const imagePaths = [
  //   "/images/P7-AMBICAM-4g-dome-ptz-camera-VM-72BPTZ410AC-02-150x150.webp",
  //   "/images/P5-Edge-AI-Based-Face-Recognition-VM-72D5AIVE-01-1-150x150.webp",
  //   "/images/P25-Edge-AI-Based-Object-Face-Detection-Cameras-VM-72B5AIVE-02-1.webp",
  //   "/images/P23-Edge-AI-Based-PTZ-ANPR-Bullet-Camera-VM-72BPTZ5AIVE-03-150x150.webp",
  //   "/images/P9-AMBICAM-4g-dome-camera-VM-72AD4G210C-02.webp",
  //   "/images/P23-Edge-AI-Based-PTZ-ANPR-Bullet-Camera-VM-72BPTZ5AIVE-02-1.webp",
  // ];
  // const imagePath2 = [
  //   "/images/t2-150x150.webp",
  //   "/images/t5-1-150x150.webp",
  //   "/images/t3-150x150.webp",
  //   "/images/t1-150x150.webp",
  //   "/images/t5-1-150x150.webp",
  // ];



  const imagePath3 = [
    "images/adiance-factory-008.webp",
    "images/adiance-factory-006.webp",
    "images/adiance-factory-002.webp",
    "images/adiance-factory-005.webp",
    "images/adiance-factory-007.webp",
    // "images/adiance-factory-004.webp",
    "images/adiance-factory-001.webp",
    "images/adiance-factory-003.webp",
    "images/adiance-factory-009.webp",
  ];
  return (
    <div>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          marginTop: "5%",
          marginBottom: "5%",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "80%", // Adjust the maximum width as needed
        }}
      >
        {/* First paragraph */}
        <Grid item xs={12} sm={12}>
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bolder",
              fontSize: screenWidth > 888 ? "60px" : screenWidth > 600 ? "40px" : "28px",
              margin: 0,
            }}
          >
            WE ARE ADIANCE
          </h1>
          <Typography variant="body1" align="justify">
            Adiance is a leading technology company specializing in innovative
            solutions for security, surveillance, and connectivity. We design
            and manufacture advanced CCTV cameras, cloud-based storage
            solutions, and integrated systems that empower businesses,
            governments, and communities to enhance safety, streamline
            operations, and drive digital transformation. With a focus on
            cutting-edge technology, seamless integration, and unparalleled
            support, Adiance is committed to delivering tailored solutions that
            meet the unique needs of our clients and contribute to a safer,
            smarter, and more connected world.
          </Typography>
        </Grid>
      </Grid>
      {/* <AboutSlider /> */}
      {/* <div style={{ marginLeft: "2.5%" }}>
        <ProductSlider />
      </div> */}

      <Grid
        ref={ref1}
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{
          marginTop: "5%",
          marginBottom: "5%",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "80%", // Adjust the maximum width as needed
          opacity: animate1 ? 1 : 0,
        }}
      >
        {/* Image on the left */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            animation: animate1 ? "slideFromLeft 1s ease" : "none",
          }}
        >
          <img
            src="/images/ourMission.webp"
            alt="Our Mission"
            loading="lazy"
            decoding="async"
            width="350"
            height="350"
            style={{
              maxWidth: screenWidth > 888 ? "350px" : "250px",
              maxHeight: screenWidth > 888 ? "350px" : "250px",
              objectFit: "cover",
            }}
          />
        </Grid>

        {/* Text on the right */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            animation: animate1 ? "slideFromRight 1s ease" : "none",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ marginRight: screenWidth > 888 ? "10%" : "2%" }}
          >
            Our Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginRight: screenWidth > 888 ? "10%" : "2%" }}
            align="justify"
          >
            We create innovative electronic solutions tailored to the needs of
            Businesses & Individuals, ensuring the highest quality and
            reliability at competitive prices.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        ref={ref2}
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{
          marginTop: "5%",
          marginBottom: "5%",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "80%", // Adjust the maximum width as needed
          opacity: animate2 ? 1 : 0,
          flexDirection: screenWidth < 600 ? "column-reverse" : "row",
        }}
      >
        {/* Text on the left */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            animation: animate2 ? "slideFromLeft 1s ease" : "none",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ marginLeft: screenWidth > 888 ? "20%" : "2%" }}
          >
            Our Vision
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginLeft: screenWidth > 888 ? "20%" : "2%" }}
            align="justify"
          >
            To become a leading electronics manufacturing company globally
            recognized for quality, innovation, and a commitment to bringing new
            technologies to market
          </Typography>
        </Grid>

        {/* Image on the right */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            animation: animate2 ? "slideFromRight 1s ease" : "none",
          }}
        >
          <img
            src="/images/ourVision.webp"
            alt="Our Vision"
            loading="lazy"
            decoding="async"
            width="350"
            height="350"
            style={{
              maxWidth: screenWidth > 888 ? "350px" : "250px",
              maxHeight: screenWidth > 888 ? "350px" : "250px",
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginTop: "4%",
          marginBottom: "5%",
        }}
      >
        OUR VALUES
      </h2>
      <div>
        <table
          className="image-table"
          align="center"
          style={{ ...(screenWidth < 925 && hiddenStyle) }}
        >
          <tbody>
            <tr>
              <td style={{ padding: "10px" }}>
                <div
                  style={{
                    position: "relative",
                    width: "400px",
                    height: "300px",
                  }}
                >
                  <img
                    src="/images/about1.webp"
                    alt="About image 1"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease-in-out" }}
                    className="hover-scale"
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      width: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "white",
                      textAlign: "center",
                      padding: "10px",
                      fontWeight: "bold",
                      fontSize: "1.1em",
                    }}
                  >
                    Quality Solutions
                  </div>
                </div>
              </td>
              <td rowSpan="2" style={{ padding: "0 5px" }}>
                <div
                  style={{
                    position: "relative",
                    width: "490px",
                    height: "520px",
                  }}
                >
                  <img
                    src="/images/about3.webp"
                    alt="About image 3"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease-in-out" }}
                    className="hover-scale"
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      width: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "white",
                      textAlign: "center",
                      padding: "10px",
                      fontWeight: "bold",
                      fontSize: "1.1em",
                    }}
                  >
                    Customer Satisfaction
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px" }}>
                <div
                  style={{
                    position: "relative",
                    width: "400px",
                    height: "200px",
                  }}
                >
                  <img
                    src="/images/about2.webp"
                    alt="About image 2"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease-in-out" }}
                    className="hover-scale"
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      width: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "white",
                      textAlign: "center",
                      padding: "10px",
                      fontWeight: "bold",
                      fontSize: "1.1em",
                    }}
                  >
                    Cyber-Security
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ padding: "10px" }}>
                <div
                  style={{
                    position: "relative",
                    width: "900px",
                    height: "300px",
                  }}
                >
                  <img
                    src="/images/about4.webp"
                    alt="About image 4"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease-in-out" }}
                    className="hover-scale"
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      width: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "white",
                      textAlign: "center",
                      padding: "10px",
                      fontWeight: "bold",
                      fontSize: "1.1em",
                    }}
                  >
                    Sustain-o-Vative
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          marginTop: "5%",
          marginBottom: "5%",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "80%", // Adjust the maximum width as needed
        }}
      >
        <Grid item xs={12} sm={12}>
          <Typography
            variant="h5"
            gutterBottom
            marginBottom="3%"
            style={{
              textAlign: "center",
              fontSize: "36px",
              marginTop: "4%",
              marginBottom: "5%",
            }}
          >
            <center>
              Redefining Camera Manufacturing with State-of-the-Art Technology
            </center>
          </Typography>
          <Typography variant="body1" align="justify">
            At Adiance, we are embarking on an exciting journey into the world
            of camera manufacturing. With our state-of-the-art facilities and a
            strong focus on AI-driven technology, we are dedicated to
            revolutionizing the industry and catering to clients both in India
            and around the globe. As a company driven by innovation and a
            commitment to excellence, we aim to redefine the boundaries of what
            cameras can achieve.
          </Typography>
        </Grid>
      </Grid>
      <AboutImgs />

      <Grid
        ref={ref3}
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{
          marginTop: "5%",
          marginBottom: "5%",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "80%", // Adjust the maximum width as needed
          opacity: animate3 ? 1 : 0,
          flexDirection: screenWidth < 600 ? "column-reverse" : "row",
        }}
      >
        {/* Text on the left */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            animation: animate3 ? "slideFromLeft 1s ease" : "none",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ marginLeft: screenWidth > 888 ? "20%" : "2%" }}
          >
            Adiance’s Research and Development "TORQUE'
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginLeft: screenWidth > 888 ? "20%" : "2%" }}
            align="justify"
          >
            To become a leading electronics manufacturing company globally
            recognized for quality, innovation, and a commitment to bringing new
            technologies to marketAs a leading CCTV manufacturer, our passion
            fuels innovation. We deliver cutting-edge features to maximize your
            security and profits. Our user-friendly systems boast simple
            installation and easy operation, minimizing downtime. Dedicated
            technical support ensures you're never left in the dark. Choose the
            best CCTV manufacturer - choose us!
          </Typography>
        </Grid>

        {/* Image on the right */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            animation: animate3 ? "slideFromRight 1s ease" : "none",
          }}
        >
          <img
            src="/images/about_torque.webp"
            alt="Manufacturing"
            loading="lazy"
            decoding="async"
            width="350"
            height="350"
            style={{
              maxWidth: screenWidth > 888 ? "350px" : "250px",
              maxHeight: screenWidth > 888 ? "350px" : "250px",
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          marginTop: "5%",
          marginBottom: "5%",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "80%", // Adjust the maximum width as needed
        }}
      >
        <Grid item xs={12} sm={12}>
          <Typography
            variant="h5"
            gutterBottom
            marginBottom="3%"
            style={{
              textAlign: "center",
              fontSize: "36px",
              marginTop: "4%",
              marginBottom: "0",
            }}
          >
            <center>Core Technologies</center>
          </Typography>
        </Grid>
      </Grid>
      <AboutImgs2 />

      <Certifications />

      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          marginTop: "5%",
          marginBottom: "5%",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "80%", // Adjust the maximum width as needed
        }}
      >
        <Grid item xs={12} sm={12}>
          <Typography
            variant="h5"
            gutterBottom
            marginBottom="3%"
            style={{
              textAlign: "center",
              fontSize: "36px",
              marginTop: "4%",
              marginBottom: "5%",
            }}
          >
            <center>OEM & ODM</center>
          </Typography>
          <Typography variant="body1" align="justify">
            Adiance is a leading manufacturer in the electronic manufacturing
            industry, offering both OEM and ODM services. As an OEM, Adiance
            produces CCTV cameras and related products under the branding of
            other companies, allowing clients to market them under their own
            brand. As an ODM, Adiance provides complete design and manufacturing
            services for electronic products, allowing clients to create unique,
            innovative products tailored to their specific needs and market
            demands.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          marginTop: "5%",
          marginBottom: "5%",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "80%", // Adjust the maximum width as needed
        }}
      >
        <Grid item xs={12} sm={12}>
          <Typography
            variant="h5"
            gutterBottom
            marginBottom="3%"
            style={{
              textAlign: "center",
              fontSize: "36px",
              marginTop: "4%",
              marginBottom: "5%",
            }}
          >
            <center>In-house PCB Manufacturer</center>
          </Typography>
          <Typography variant="body1" align="justify">
            Adiance is committed to quality, innovation, and security through
            its in-house PCB manufacturing capabilities. The company designs,
            prototypes, and produces high-quality printed circuit boards (PCBs)
            for CCTV cameras and other electronic products. This allows Adiance
            to maintain control over the production process, ensuring high
            standards of quality, reliability, and precision. The company's
            dedicated team of engineers uses this manufacturing facility to
            innovate and customize products, delivering cutting-edge solutions
            that exceed expectations. This approach ensures seamless
            compatibility, reliability, and security in CCTV cameras.
          </Typography>
        </Grid>
      </Grid>

      <Typography
        variant="h5"
        gutterBottom
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginTop: "4%",
          marginBottom: "5%",
        }}
      >
        Strength of Adiance
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{
          marginTop: "5%",
          marginBottom: "5%",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "80%",
        }}
      >
        {imagePath3.map((image, index) => (
          <Grid key={index} item xs={6} sm={4} md={3} lg={3}>
            <img
              src={image}
              alt={`Factory ${index + 1}`}
              loading="lazy"
              decoding="async"
              width="800"
              height="533"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Grid>
        ))}
      </Grid>
      <style>
        {`
          @media (max-width: 1024px) {
            .imagePath2 {
              display: none;
            }
          }
        `}
      </style>
      <style>
        {`

.hover-scale:hover {
  transform: scale(1.01);
}
          .image-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            gap: 10px;
            height: 800px; /* Set a fixed height for the container */
          }
          
          .short-images {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          
          .short-image img {
            width: 100%;
            height: calc(50% - 5px); /* Half height with gap */
          }
          
          .tall-image img {
            width: 100%;
            height: calc(100% - 5px); /* Full height with gap */
          }
          
          .full-width-image img {
            width: 100%;
            height: calc(100% - 5px); /* Full width with gap */
          }


          @media (max-width: 928px) {
            .image-table img {
              width: 70%;
              height: auto;
            }
          }
          
          @media (max-width: 600px) {
            .image-table img {
              width: 50%;
              height: auto;
            }
          
          




            /* Ensure your CSS is included in your project */
            @keyframes slideFromLeft {
              from {
                transform: translateX(-100%);
                opacity: 0;
              }
              to {
                transform: translateX(0);
                opacity: 1;
              }
            }
            
            @keyframes slideFromRight {
              from {
                transform: translateX(100%);
                opacity: 0;
              }
              to {
                transform: translateX(0);
                opacity: 1;
              }
            }
            
            .slideFromLeft {
              animation: slideFromLeft 1s ease-in-out;
            }
            
            .slideFromRight {
              animation: slideFromRight 1s ease-in-out;
            }
            
        `}
      </style>
    </div>
  );
};

export default AboutMidSection;
