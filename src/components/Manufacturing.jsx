import React, { useEffect, useRef, useState } from "react";
import { Typography, Box, Card, CardContent } from "@mui/material";
import Header from "./Header/Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer/Footer";
import Grid from "@mui/material/Grid";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Manufacturing = () => {
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
  const [animate5, setAnimate5] = useState(false);

  const [animate11, setAnimate11] = useState(false);
  const [animate22, setAnimate22] = useState(false);
  const [animate33, setAnimate33] = useState(false);
  const [animate44, setAnimate44] = useState(false);
  const [animate55, setAnimate55] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const ref11 = useRef(null);
  const ref22 = useRef(null);
  const ref33 = useRef(null);
  const ref44 = useRef(null);
  const ref55 = useRef(null);

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

    const observer11 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate11(true);
          observer11.unobserve(ref11.current);
        }
      },
      { threshold: 0.5 }
    );

    const observer22 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate22(true);
          observer22.unobserve(ref22.current);
        }
      },
      { threshold: 0.5 }
    );

    const observer33 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate33(true);
          observer33.unobserve(ref33.current);
        }
      },
      { threshold: 0.5 }
    );

    const observer44 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate44(true);
          observer44.unobserve(ref44.current);
        }
      },
      { threshold: 0.5 }
    );

    const observer55 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate55(true);
          observer55.unobserve(ref55.current);
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

    if (ref11.current) {
      observer11.observe(ref11.current);
    }
    if (ref22.current) {
      observer22.observe(ref22.current);
    }
    if (ref33.current) {
      observer33.observe(ref33.current);
    }
    if (ref44.current) {
      observer44.observe(ref44.current);
    }
    if (ref55.current) {
      observer55.observe(ref55.current);
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

      if (ref11.current) {
        observer11.unobserve(ref11.current);
      }
      if (ref22.current) {
        observer22.unobserve(ref22.current);
      }
      if (ref33.current) {
        observer33.unobserve(ref33.current);
      }
      if (ref44.current) {
        observer44.unobserve(ref44.current);
      }
      if (ref55.current) {
        observer55.unobserve(ref55.current);
      }
    };
  }, []);

  const circleStyle = {
    width: screenWidth > 888 ? "100px" : "80px",
    height: screenWidth > 888 ? "100px" : "80px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2b3035",
    color: "white",
    fontSize: screenWidth > 888 ? "28px" : "14px",
    fontWeight: "bold",
  };

  const circleStyle2 = {
    width: screenWidth > 888 ? "100px" : "80px",
    height: screenWidth > 888 ? "100px" : "80px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bf0603",
    color: "white",
    fontSize: screenWidth > 888 ? "28px" : "14px",
    fontWeight: "bold",
  };

  const textStyle = {
    fontSize: screenWidth > 888 ? "28px" : "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };

  return (
    <>
      <Helmet>
        <title>End-to-End PCB Manufacturing & Quality Inspection</title>
        <meta
          name="description"
          content="Adiance Technologies ensures precision in PCB manufacturing, integration, and quality inspection from material selection to packaging for reliable CCTV systems."
        />
        <meta name="keywords" content="PCB manufacturing, CCTV manufacturing, quality inspection" />
        <meta property="og:title" content="End-to-End PCB Manufacturing & Quality Inspection" />
        <meta property="og:description" content="Adiance Technologies ensures precision in PCB manufacturing, integration, and quality inspection from material selection to packaging for reliable CCTV systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Adiance Technologies" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <NavHeader text={"Manufacturing"} />
      <div>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{
            marginTop: "2%",
            marginBottom: "5%",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "80%", // Adjust the maximum width as needed
          }}
        >
          {/* First paragraph */}
          <Grid item xs={12} sm={12}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "36px",
                marginTop: "5%",
                marginBottom: "5%",
              }}
            >
              PCB Manufacturing
            </h2>
            <Typography variant="body1" align="justify">
              Adiance's in-house PCB (Printed Circuit Board) manufacturing
              facility exemplifies our dedication to quality, innovation, and
              reliability. By overseeing the entire PCB production process, we
              guarantee exceptional performance and security for our electronic
              products, notably our advanced CCTV cameras. This facility enables
              us to uphold rigorous quality control, provide tailored solutions
              to meet specific client needs, and safeguard our proprietary
              technologies. By manufacturing PCBs in-house, we enhance our
              ability to innovate and maintain the highest standards, ensuring
              that our products consistently exceed customer expectations.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          ref={ref1}
          container
          spacing={3}
          justifyContent="center"
          sx={{
            marginTop: "0.1%",
            marginBottom: "0.1%",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "80%", // Adjust the maximum width as needed
            opacity: animate1 ? 1 : 0,
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: animate1 ? "slideFromLeft 1s ease" : "none",
            }}
          >
            <Box sx={circleStyle}>Step 1</Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: animate1 ? "slideFromLeft 1s ease" : "none",
            }}
          >
            <div style={textStyle}>Design and Prototyping</div>
          </Grid>
        </Grid>

        <Grid
          ref={ref2}
          container
          spacing={3}
          justifyContent="center"
          sx={{
            marginTop: "0.1%",
            marginBottom: "0.1%",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "80%", // Adjust the maximum width as needed
            opacity: animate2 ? 1 : 0,
            flexDirection: screenWidth < 600 ? "column-reverse" : "row",
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: animate2 ? "slideFromRight 1s ease" : "none",
            }}
          >
            <div style={textStyle}>Material Selection</div>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: animate2 ? "slideFromRight 1s ease" : "none",
            }}
          >
            <Box sx={circleStyle2}>Step 2</Box>
          </Grid>
        </Grid>

        <Grid
          ref={ref3}
          container
          spacing={3}
          justifyContent="center"
          sx={{
            marginTop: "0.1%",
            marginBottom: "0.1%",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "80%", // Adjust the maximum width as needed
            opacity: animate3 ? 1 : 0,
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: animate3 ? "slideFromLeft 1s ease" : "none",
            }}
          >
            <Box sx={circleStyle}>Step 3</Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: animate3 ? "slideFromLeft 1s ease" : "none",
            }}
          >
            <div style={textStyle}>PCB Fabrication</div>
          </Grid>
        </Grid>

        <Grid
          ref={ref4}
          container
          spacing={3}
          justifyContent="center"
          sx={{
            marginTop: "0.1%",
            marginBottom: "0.1%",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "80%", // Adjust the maximum width as needed
            opacity: animate4 ? 1 : 0,
            flexDirection: screenWidth < 600 ? "column-reverse" : "row",
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: animate4 ? "slideFromRight 1s ease" : "none",
            }}
          >
            <div style={textStyle}>Solder Mask and SilkScreen</div>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: animate4 ? "slideFromRight 1s ease" : "none",
            }}
          >
            <Box sx={circleStyle2}>Step 4</Box>
          </Grid>
        </Grid>

        <Grid
          ref={ref5}
          container
          spacing={3}
          justifyContent="center"
          sx={{
            marginTop: "0.1%",
            marginBottom: "0.1%",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "80%", // Adjust the maximum width as needed
            opacity: animate5 ? 1 : 0,
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: animate5 ? "slideFromLeft 1s ease" : "none",
            }}
          >
            <Box sx={circleStyle}>Step 5</Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: animate5 ? "slideFromLeft 1s ease" : "none",
            }}
          >
            <div style={textStyle}>Assembly and Testing</div>
          </Grid>
        </Grid>
      </div>

      <div>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{
            marginTop: "2%",
            marginBottom: "5%",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "80%", // Adjust the maximum width as needed
          }}
        >
          {/* First paragraph */}
          <Grid item xs={12} sm={12}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "36px",
                marginTop: "5%",
                marginBottom: "5%",
              }}
            >
              Product Assembly
            </h2>
            <Typography variant="body1" align="justify">
              Adiance’s in-house product assembly facility is crucial to our
              manufacturing process, ensuring precision, quality, and
              consistency in our advanced CCTV cameras. This facility enables us
              to uphold stringent standards and integrate cutting-edge
              technologies throughout the assembly process. By having direct
              control over production, we can swiftly implement improvements and
              provide customized solutions tailored to our clients' specific
              needs. This commitment to excellence ensures that every product
              meets our high-performance standards and delivers superior
              reliability and functionality to our customers.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          ref={ref11}
          container
          spacing={3}
          justifyContent="center"
          sx={{
            marginTop: "0.1%",
            marginBottom: "0.1%",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "80%", // Adjust the maximum width as needed
            opacity: animate11 ? 1 : 0,
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: animate11 ? "slideFromLeft 1s ease" : "none",
            }}
          >
            <Box sx={circleStyle}>Step 1</Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: animate11 ? "slideFromLeft 1s ease" : "none",
            }}
          >
            <div style={textStyle}>
              Component Procurement and Quality Inspection
            </div>
          </Grid>
        </Grid>

        <Grid
          ref={ref22}
          container
          spacing={3}
          justifyContent="center"
          sx={{
            marginTop: "0.1%",
            marginBottom: "0.1%",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "80%", // Adjust the maximum width as needed
            opacity: animate22 ? 1 : 0,
            flexDirection: screenWidth < 600 ? "column-reverse" : "row",
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: animate22 ? "slideFromRight 1s ease" : "none",
            }}
          >
            <div style={textStyle}>Assembly Line Setup</div>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: animate22 ? "slideFromRight 1s ease" : "none",
            }}
          >
            <Box sx={circleStyle2}>Step 2</Box>
          </Grid>
        </Grid>

        <Grid
          ref={ref33}
          container
          spacing={3}
          justifyContent="center"
          sx={{
            marginTop: "0.1%",
            marginBottom: "0.1%",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "80%", // Adjust the maximum width as needed
            opacity: animate33 ? 1 : 0,
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: animate33 ? "slideFromLeft 1s ease" : "none",
            }}
          >
            <Box sx={circleStyle}>Step 3</Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: animate33 ? "slideFromLeft 1s ease" : "none",
            }}
          >
            <div style={textStyle}>Assembly Process</div>
          </Grid>
        </Grid>

        <Grid
          ref={ref44}
          container
          spacing={3}
          justifyContent="center"
          sx={{
            marginTop: "0.1%",
            marginBottom: "0.1%",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "80%", // Adjust the maximum width as needed
            opacity: animate44 ? 1 : 0,
            flexDirection: screenWidth < 600 ? "column-reverse" : "row",
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: animate44 ? "slideFromRight 1s ease" : "none",
            }}
          >
            <div style={textStyle}>Software Integration</div>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: animate44 ? "slideFromRight 1s ease" : "none",
            }}
          >
            <Box sx={circleStyle2}>Step 4</Box>
          </Grid>
        </Grid>

        <Grid
          ref={ref55}
          container
          spacing={3}
          justifyContent="center"
          sx={{
            marginTop: "0.1%",
            marginBottom: "0.1%",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "80%", // Adjust the maximum width as needed
            opacity: animate55 ? 1 : 0,
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: animate55 ? "slideFromLeft 1s ease" : "none",
            }}
          >
            <Box sx={circleStyle}>Step 5</Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: animate55 ? "slideFromLeft 1s ease" : "none",
            }}
          >
            <div style={textStyle}>Packaging and Logistics</div>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{
            marginTop: "2%",
            marginBottom: "5%",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "80%", // Adjust the maximum width as needed
          }}
        >
          <Grid item xs={12} sm={12}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "36px",
                marginTop: "5%",
                // marginBottom: "5%",
              }}
            >
              Proto, Mold Making, Mechanical
            </h2>
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
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: "325px",
                height: "100%",
                borderRadius: "16px",
                boxShadow: 3,
                backgroundColor: "#2b3035",
                color: "white",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  Prototype Development
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  Our engineering team uses CAD drawings and 3D models to
                  conceptualize products based on client specifications and
                  functional requirements. We use advanced simulation software
                  to analyze design issues like stress points and material
                  suitability. We use 3D printing for initial prototypes,
                  allowing for quick iteration and refinement. For more robust
                  prototypes, we use CNC machining for precise parts. Prototypes
                  undergo rigorous testing to evaluate performance, durability,
                  and compliance with design specifications. We incorporate
                  client feedback to make necessary adjustments before moving to
                  mold making and full production.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              // animation: animate1 ? "slideFromRight 1s ease" : "none",
            }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: "325px",
                height: "100%",
                borderRadius: "16px",
                boxShadow: 3,
                backgroundColor: "#2b3035",
                color: "white",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  Mould Making
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  Our mold design process starts with creating detailed plans
                  using CAD software, which incorporates considerations for
                  material flow, cooling channels, and ejection mechanisms. To
                  optimize the design and minimize defects, we employ mold flow
                  analysis software. This ensures uniformity and addresses
                  potential issues before production. For fabricating intricate
                  and durable molds, we use CNC milling and Electrical Discharge
                  Machining (EDM) techniques, achieving high precision. The mold
                  components then undergo heat treatment to enhance their
                  hardness and durability. Once fabricated, the mold components
                  are meticulously assembled and fitted. We conduct trial
                  injection molding runs to test and refine the mold, making
                  necessary adjustments to ensure optimal performance and
                  product quality.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              // animation: animate1 ? "slideFromRight 1s ease" : "none",
            }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: "325px",
                height: "100%",
                borderRadius: "16px",
                boxShadow: 3,
                backgroundColor: "#2b3035",
                color: "white",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  Mechanical Manufacturing
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  The company specializes in manufacturing mechanical
                  components, sourcing high-quality materials for specific
                  components like metals, plastics, or composites. These
                  materials are prepared and processed to meet manufacturing
                  design specifications. CNC machining is used for precise
                  cutting, shaping, and finishing of mechanical parts, while
                  injection molding is used for plastic components. The
                  components are assembled into final products, incorporating
                  PCBs and other electronic elements as needed. Quality control
                  and testing are conducted using advanced metrology tools like
                  CMM and laser scanners, and functional and stress tests are
                  conducted to ensure products meet stringent quality standards.
                </Typography>
              </CardContent>
            </Card>
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

export default Manufacturing;
