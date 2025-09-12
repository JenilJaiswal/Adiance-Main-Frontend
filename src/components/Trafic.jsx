import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";
import Header from "./Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer";
import Grid from "@mui/material/Grid";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Trafic = () => {
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
        <title>Traffic Management & Monitoring Solutions </title>
        <meta
          name="description"
          content="Adiance Technologies advanced traffic management, vehicle surveillance, and school bus monitoring solutions to enhance safety and improve urban mobility."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <NavHeader text={"Traffic Management and Monitoring"} />
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
              src="/images/trafic1.png"
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
              variant="body1"
              sx={{ marginRight: screenWidth > 888 ? "10%" : "2%" }}
              align="justify"
            >
              Specializing in traffic management, we tackle urban challenges
              head-on with cutting-edge solutions. Our advanced systems optimize
              traffic flow, alleviating congestion and enhancing transportation
              efficiency. Leveraging real-time data analysis, we dynamically
              adjust signals, manage lanes, and implement adaptive control
              strategies. From reducing gridlock to improving safety, our
              comprehensive approach ensures smoother journeys and more
              sustainable urban environments, making cities smarter and more
              livable for everyone.
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
              Trafic Monitoring
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginLeft: screenWidth > 888 ? "20%" : "2%" }}
              align="justify"
            >
              Through our state-of-the-art traffic monitoring technologies, we
              enable authorities to gather valuable insights into traffic
              patterns, vehicle movements, and congestion hotspots. Our systems
              employ advanced sensors, cameras, and data analytics to monitor
              traffic conditions, detect incidents, and provide timely
              information to commuters and transportation agencies.
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
              src="/images/trafic2.jpg"
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
              src="/images/trafic3.jpg"
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
              Vehicle Surveillance
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginRight: screenWidth > 888 ? "10%" : "2%" }}
              align="justify"
            >
              Our vehicle surveillance solutions play a crucial role in
              enhancing road safety and security. Utilizing high-definition
              cameras and intelligent video analytics, we enable authorities to
              monitor and track vehicles in real-time, identify traffic
              violations, and enhance law enforcement efforts. Additionally, our
              vehicle surveillance systems facilitate the implementation of
              tolling, parking management, and automated enforcement solutions.
            </Typography>
          </Grid>
        </Grid>

        {/* Fourth feature */}
        <Grid
          ref={ref4}
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
            opacity: animate4 ? 1 : 0,
            flexDirection: screenWidth < 600 ? "column-reverse" : "row",
          }}
        >
          {/* Text on the left */}
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              animation: animate4 ? "slideFromLeft 1s ease" : "none",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ marginLeft: screenWidth > 888 ? "20%" : "2%" }}
            >
              School Bus Monitoring
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginLeft: screenWidth > 888 ? "20%" : "2%" }}
              align="justify"
            >
              Ensuring the safety of school children during their commute is a
              top priority for us. Our school bus monitoring solutions offer
              real-time tracking and monitoring of school buses, providing
              parents, school administrators, and transportation authorities
              with peace of mind.
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
              animation: animate4 ? "slideFromRight 1s ease" : "none",
            }}
          >
            <img
              src="/images/trafic4.jpg"
              alt="Image"
              style={{
                maxWidth: screenWidth > 888 ? "350px" : "250px",
                maxHeight: screenWidth > 888 ? "350px" : "250px",
                objectFit: "cover",
              }}
            />
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

export default Trafic;
