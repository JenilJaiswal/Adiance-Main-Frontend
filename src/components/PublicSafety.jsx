import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";
import Header from "./Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer";
import Grid from "@mui/material/Grid";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const PublicSafety = () => {
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
        <title>Public Safety & Security | AI-Powered CCTV Surveillance</title>
        <meta
          name="description"
          content="Enhance security with AI-driven CCTV solutions. HD imaging, wide-angle coverage, low-light performance & smart analytics for real-time monitoring & safety."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <NavHeader text={"Public Safety and Security"} />
      <div>
        {/* First paragraph */}
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
              Our CCTV systems offer an array of advanced features tailored to
              ensure comprehensive security and surveillance across various
              environments. With high-definition imaging, our cameras deliver
              crystal-clear resolution, facilitating detailed monitoring crucial
              for tasks like facial recognition and incident analysis.
              Wide-angle coverage ensures expansive area monitoring, minimizing
              blind spots in stations, platforms, and vehicles. Advanced
              low-light performance guarantees effective surveillance during
              nighttime or poorly lit conditions, ensuring round-the-clock
              monitoring without interruption. Leveraging cutting-edge AI
              algorithms, our cameras provide smart analytics, including crowd
              detection, abnormal behavior recognition, and object tracking,
              enhancing situational awareness and enabling proactive security
              responses. Real-time remote monitoring enables security personnel
              to access live feeds from any location, enabling swift responses
              to incidents or suspicious activities. Tamper detection features
              alert authorities to any attempts at vandalism or camera
              interference, maintaining continuous operation and security
              integrity. Seamless integration capabilities with existing
              security systems streamline management and response efforts, while
              robust construction and weatherproof designs ensure durability and
              reliability in outdoor environments, enduring harsh weather
              conditions and environmental factors.
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
            maxWidth: "75%", // Adjust the maximum width as needed
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            style={{ marginTop: "3%", marginBottom: "3%", textAlign: "left" }}
          >
            Features
          </Typography>
          <Typography variant="body1" align="justify">
            In the realm of public transportation security, our comprehensive
            CCTV solutions provide robust features tailored to safeguarding
            commuters, infrastructure, and personnel. Our cameras offer:
          </Typography>
        </Grid>

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
              src="/images/ps1.jpg"
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
              High Definition Imaging
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginRight: screenWidth > 888 ? "10%" : "2%" }}
              align="justify"
            >
              Our high-resolution cameras provide detailed monitoring,
              facilitating facial recognition and incident analysis for enhanced
              security. With night vision capabilities, they offer clear
              visibility even in low-light conditions, ensuring comprehensive
              surveillance for crime prevention and safety.
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
              Wide-Angle Coverage
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginLeft: screenWidth > 888 ? "20%" : "2%" }}
              align="justify"
            >
              Our cameras feature wide field-of-view lenses, capturing expansive
              areas with minimal blind spots. This ensures comprehensive
              surveillance of stations, platforms, and vehicles, maximizing
              security coverage in various environments for enhanced safety and
              monitoring efficiency.
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
              src="/images/ps2.jpg"
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
              src="/images/ps3.png"
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
              Low-Light Performance
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginRight: screenWidth > 888 ? "10%" : "2%" }}
              align="justify"
            >
              With advanced low-light capabilities, our cameras excel in
              nighttime or dimly lit conditions, ensuring uninterrupted
              surveillance round-the-clock. This feature enhances security by
              providing clear and detailed monitoring even in challenging
              lighting environments, maintaining vigilance and safeguarding
              premises with reliable surveillance capabilities day and night.
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
              Smart Analytics
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginLeft: screenWidth > 888 ? "20%" : "2%" }}
              align="justify"
            >
              Utilizing cutting-edge AI algorithms, our cameras offer
              intelligent analytics such as crowd detection, abnormal behavior
              recognition, and object tracking, enhancing situational awareness
              and enabling proactive security responses.
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
              src="/images/ps4.png"
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

export default PublicSafety;
