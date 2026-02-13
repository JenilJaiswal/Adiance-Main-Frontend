import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";
import Header from "./Header/Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer/Footer";
import Grid from "@mui/material/Grid";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Sustainability = () => {
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
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const [animate1, setAnimate1] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  const [animate3, setAnimate3] = useState(false);
  const [animate4, setAnimate4] = useState(false);
  const [animate5, setAnimate5] = useState(false);
  const [animate6, setAnimate6] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

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

    const observer5 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate5(true);
          observer5.unobserve(ref5.current);
        }
      },
      { threshold: 0.5 }
    );

    const observer6 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate6(true);
          observer6.unobserve(ref6.current);
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

    if (ref5.current) {
      observer5.observe(ref5.current);
    }
    if (ref6.current) {
      observer6.observe(ref6.current);
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
      if (ref5.current) {
        observer5.unobserve(ref5.current);
      }
      if (ref6.current) {
        observer6.unobserve(ref6.current);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Sustainable Manufacturing Innovations</title>
        <meta
          name="description"
          content="Embraces sustainable manufacturing with eco-friendly designs, circular production, and innovative solutions like drones and robotic arms for a greener future."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <NavHeader text={"Sustainability"} />
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
              src="/images/sus1.png"
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
              Embracing Sustainable Manufacturing
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginRight: screenWidth > 888 ? "10%" : "2%" }}
              align="justify"
            >
              As a manufacturing company specializing in CCTV cameras, Adiance
              has already taken significant steps to reduce our environmental
              footprint. From implementing energy-efficient production processes
              to utilizing recyclable materials in our products, sustainability
              is ingrained in our manufacturing ethos. However, our commitment
              to sustainability extends far beyond our current offerings.
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
              Expanding Horizons: Sustainable Innovations
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginLeft: screenWidth > 888 ? "20%" : "2%" }}
              align="justify"
            >
              Adiance is on a mission to diversify our product portfolio to
              include a wide range of cutting-edge technologies, all with
              sustainability at their core. Our upcoming ventures into PCB
              manufacturing, robotic arms, drones, and technical solutions such
              as adapters present exciting opportunities to integrate
              sustainability into every aspect of our operations.
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
              src="/images/sus2.png"
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
              src="/images/sus3.png"
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
              Sustainable Design Principles
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginRight: screenWidth > 888 ? "10%" : "2%" }}
              align="justify"
            >
              In our pursuit of innovation, we prioritize sustainable design
              principles to ensure that every product we create aligns with our
              environmental goals. This means incorporating eco-friendly
              materials, optimizing energy efficiency, and designing products
              for longevity and recyclability. By prioritizing sustainability in
              the design phase, we minimize waste and maximize the lifespan of
              our products.
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
              A Circular Approach to Production
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginLeft: screenWidth > 888 ? "20%" : "2%" }}
              align="justify"
            >
              At Adiance, we believe in adopting a circular economy model where
              resources are kept in use for as long as possible, with minimal
              waste and environmental impact. This means exploring opportunities
              for product refurbishment, remanufacturing, and recycling. By
              closing the loop on product lifecycles, we reduce the demand for
              raw materials and contribute to a more sustainable future.
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
              src="/images/sus4.png"
              alt="Image"
              style={{
                maxWidth: screenWidth > 888 ? "350px" : "250px",
                maxHeight: screenWidth > 888 ? "350px" : "250px",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>

        {/* Fifth feature */}
        <Grid
          ref={ref5}
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
            opacity: animate5 ? 1 : 0,
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
              animation: animate5 ? "slideFromLeft 1s ease" : "none",
            }}
          >
            <img
              src="/images/sus5.jpg"
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
              animation: animate5 ? "slideFromRight 1s ease" : "none",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ marginRight: screenWidth > 888 ? "10%" : "2%" }}
            >
              Collaborating for Impact
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginRight: screenWidth > 888 ? "10%" : "2%" }}
              align="justify"
            >
              Sustainability is a collective effort, and Adiance is committed to
              collaborating with partners, suppliers, and customers who share
              our vision for a sustainable future. Through strategic
              partnerships and alliances, we aim to amplify our impact and drive
              positive change across industries.
            </Typography>
          </Grid>
        </Grid>
        {/* Sixth feature */}
        <Grid
          ref={ref6}
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
            opacity: animate6 ? 1 : 0,
            flexDirection: screenWidth < 600 ? "column-reverse" : "row",
          }}
        >
          {/* Text on the left */}
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              animation: animate6 ? "slideFromLeft 1s ease" : "none",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ marginLeft: screenWidth > 888 ? "20%" : "2%" }}
            >
              Looking Ahead: Our Sustainable Vision
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginLeft: screenWidth > 888 ? "20%" : "2%" }}
              align="justify"
            >
              Cameras installed onboard buses, trains, and other public vehicles
              serve as a deterrent against crimes such as vandalism, assaults,
              and fare evasion. Mobile surveillance systems with GPS tracking
              and remote monitoring capabilities allow authorities to track
              vehicle movements in real time and respond promptly to emergencies
              or incidents onboard.As we embark on this journey towards
              sustainability, Adiance remains steadfast in our commitment to
              innovation, quality, and environmental stewardship. By embracing
              sustainable practices in everything we do, we are not only
              safeguarding the planet for future generations but also paving the
              way for a more prosperous and resilient future.
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
              animation: animate6 ? "slideFromRight 1s ease" : "none",
            }}
          >
            <img
              src="/images/sus6.png"
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
                Join us as we pioneer sustainability, one innovation at a time,
                and together, let's build a brighter tomorrow for all.
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

export default Sustainability;
