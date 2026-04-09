import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";
import Header from "./Header/Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer/Footer";
import Grid from "@mui/material/Grid";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const BankFinance = () => {
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
        <title>PCB Manufacturing, OEM & ODM, R&D & Software Solutions</title>
        <meta
          name="description"
          content="Leading in PCB Manufacturing, OEM & ODM, Software. We provide secure, innovative, and high-quality solutions for automation, security, and various industries."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <NavHeader text={"360 Degree Approach"} />
      <div>
        {/* First feature */}
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
            <Typography variant="body1" align="justify">
              Adiance is a leading company in the CCTV industry, offering a
              360-degree approach to security solutions. Their holistic strategy
              goes beyond traditional limitations, focusing on a fully
              integrated system that adapts to unique requirements. Adiance's
              approach is built on flexibility, allowing them to tailor
              solutions to fit any environment, from small homes to large
              commercial complexes. They continuously innovate in the CCTV
              industry, pushing the boundaries of what's possible. Adiance's
              team provides unparalleled support every step of the way, from
              initial consultation to installation, ensuring an exceptional
              experience. Trust Adiance to lead the way in a world where
              security is paramount. Adiance is a company that focuses on a
              360-degree approach to security, ensuring that each customer's
              needs are met with a tailored system. This includes the use of
              high-resolution CCTV cameras for detailed surveillance and
              discreet cameras for covert monitoring. Adiance also integrates
              advanced features like motion detection, facial recognition, and
              license plate recognition into their security systems. This
              approach not only provides security but also makes the system an
              intelligent tool that works for the customer, not against them.
              Adiance understands that security needs can vary greatly, so they
              listen to their concerns and design a tailored solution.
            </Typography>
          </Grid>
        </Grid>
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
              src="/images/360_1.webp"
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
              OEM & ODM
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginRight: screenWidth > 888 ? "10%" : "2%" }}
              align="justify"
            >
              Adiance has introduced Original Design Manufacturing (ODM) of
              Printed Circuit Boards (PCBs) as part of its integrated solutions
              portfolio. This move allows Adiance to control every aspect of the
              production process, ensuring quality and reliability. ODM also
              allows for customization and innovation, allowing PCBs to
              integrate with CCTV cameras and security solutions, enhancing
              performance and functionality. This approach fosters a culture of
              innovation, allowing Adiance to explore new technologies and
              design concepts, pushing the boundaries of security solutions.
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
              In-house PCB Manufacturing
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginLeft: screenWidth > 888 ? "20%" : "2%" }}
              align="justify"
            >
              Adiance has introduced Original Design Manufacturing (ODM) of
              Printed Circuit Boards (PCBs) as part of its integrated solutions
              portfolio. This move allows Adiance to control every aspect of the
              production process, ensuring quality and reliability. ODM also
              allows for customization and innovation, allowing PCBs to
              integrate with CCTV cameras and security solutions, enhancing
              performance and functionality. This approach fosters a culture of
              innovation, allowing Adiance to explore new technologies and
              design concepts, pushing the boundaries of security solutions.
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
              src="/images/360_2.webp"
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
              src="/images/360_3.webp"
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
              Software and R&D
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginRight: screenWidth > 888 ? "10%" : "2%" }}
              align="justify"
            >
              Adiance has invested heavily in its in-house Research and
              Development department, TORQUE, to develop innovative software
              solutions for CCTV systems. TORQUE focuses on video management,
              analytics, and integration, ensuring efficient organization,
              search, and analysis of vast video data. The company also develops
              algorithms to detect anomalies in real time, alerting users to
              potential security threats before they escalate. TORQUE's
              integration platforms connect CCTV systems with other security
              technologies, creating a unified security ecosystem. Adiance's
              commitment to innovation and excellence is evident in TORQUE's
              efforts, ensuring that customers' security needs are met by
              visionaries dedicated to shaping the future of security
              technology.
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
              Security and Privacy
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginLeft: screenWidth > 888 ? "20%" : "2%" }}
              align="justify"
            >
              diance is a security company that prioritizes customer
              satisfaction and long-term partnerships. They streamline the
              onboarding process, ensuring a stress-free experience from initial
              consultations to system design and installation. They offer
              personalized support, including system functionality,
              troubleshooting, and upgrades. Adiance also provides ongoing
              maintenance services, ensuring your security system remains
              up-to-date and optimized for performance. They aim to serve as
              trusted security advisors, helping customers navigate the
              ever-changing landscape of security technology with confidence and
              ease. Adiance's commitment to customer journey extends beyond the
              initial sale.
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
              src="/images/360_4.webp"
              alt="Image"
              style={{
                maxWidth: screenWidth > 888 ? "350px" : "250px",
                maxHeight: screenWidth > 888 ? "350px" : "250px",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
        <Grid>
          <Typography variant="h5">
            <strong>
              <center>
                In a world where security is paramount, trust Adiance to lead
                the way with our comprehensive solutions that redefine what it
                means to be secure.
              </center>
            </strong>
          </Typography>
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

export default BankFinance;
