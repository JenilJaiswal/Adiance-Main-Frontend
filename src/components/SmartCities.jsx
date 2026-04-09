import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";
import Header from "./Header/Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer/Footer";
import Grid from "@mui/material/Grid";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const SmartCities = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation(); // Get the current route
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

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

  return (
    <>
      <Helmet>
        <title>Smart City Surveillance Solutions - Adiance Technologies</title>
        <meta
          name="description"
          content="Adiance provides advanced CCTV solutions for smart cities, traffic management, parking efficiency, and infrastructure monitoring with cutting-edge technology."
        />
        <meta name="keywords" content="smart city surveillance, city CCTV camera, municipal security" />
        <meta property="og:title" content="Smart City Surveillance Solutions - Adiance Technologies" />
        <meta property="og:description" content="Adiance provides advanced CCTV solutions for smart cities, traffic management, parking efficiency, and infrastructure monitoring with cutting-edge technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Adiance Technologies" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <NavHeader text={"Smart Cities and Infrastructure"} />
      <div>
        {/* First feature */}
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
              src="/images/sc1.webp"
              alt="Image"
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
              Smart Cities
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginRight: screenWidth > 888 ? "10%" : "2%" }}
              align="justify"
            >
              As cities evolve into smart, data-driven hubs, our CCTV
              manufacturing company plays a pivotal role in providing
              surveillance solutions that enhance safety, security, and
              efficiency. Our CCTV cameras are equipped with advanced features
              such as high-definition imaging, night vision capabilities, and
              intelligent video analytics, enabling cities to monitor public
              spaces, traffic junctions, and critical infrastructure in
              real-time.
            </Typography>
          </Grid>
        </Grid>

        {/* Second feature */}
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
              Parking Facilities
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginLeft: screenWidth > 888 ? "20%" : "2%" }}
              align="justify"
            >
              Parking management is a crucial aspect of urban planning, and our
              CCTV systems are instrumental in optimizing parking facilities for
              both convenience and security. Our cameras are strategically
              deployed in parking lots and garages to monitor vehicle movements,
              detect parking violations, and ensure a safe environment for both
              vehicles and pedestrians. With features like license plate
              recognition and occupancy monitoring, our solutions streamline
              parking operations and enhance the overall parking experience.
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
              src="/images/sc2.webp"
              alt="Image"
              style={{
                maxWidth: screenWidth > 888 ? "350px" : "250px",
                maxHeight: screenWidth > 888 ? "350px" : "250px",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>

        {/* Third feature */}
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
              animation: animate3 ? "slideFromLeft 1s ease" : "none",
            }}
          >
            <img
              src="/images/sc3.webp"
              alt="Image"
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
              animation: animate3 ? "slideFromRight 1s ease" : "none",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ marginRight: screenWidth > 888 ? "10%" : "2%" }}
            >
              Monitoring
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginRight: screenWidth > 888 ? "10%" : "2%" }}
              align="justify"
            >
              In addition to traditional surveillance applications, our CCTV
              cameras are deployed for various monitoring purposes across smart
              cities and critical infrastructure assets. From monitoring traffic
              flow and congestion to overseeing public transportation systems
              and monitoring environmental conditions, our cameras provide
              valuable insights for city planners, transportation authorities,
              and infrastructure operators. With our state-of-the-art technology
              and expertise, we contribute to the creation of safer, more
              efficient, and sustainable urban environments.
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Footer />
      <style>
        {`
          @keyframes slideFromLeft {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(0);
            }
          }

          @keyframes slideFromRight {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default SmartCities;
