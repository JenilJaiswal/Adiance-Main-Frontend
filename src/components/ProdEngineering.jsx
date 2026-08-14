"use client";

import React, { useEffect, useRef, useState } from "react";
import { Typography, Box, Card, CardContent } from "@mui/material";
import Header from "./Header/Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer/Footer";
import Grid from "@mui/material/Grid";
import { Helmet } from "react-helmet";
import { useLocation } from "@/compat/react-router-dom";

const ProdEngineering = () => {
  const [screenWidth, setScreenWidth] = useState(() => (typeof window !== "undefined" ? window.innerWidth : 1280));
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
        <title>Product Engineering Solutions - Adiance Technologies</title>
        <meta
          name="description"
          content="Adiance Technologies specializes in advanced product engineering, delivering innovative hardware and software solutions for cutting-edge surveillance."
        />
        <meta name="keywords" content="product engineering, hardware engineering, surveillance R&D" />
        <meta property="og:title" content="Product Engineering Solutions - Adiance Technologies" />
        <meta property="og:description" content="Adiance Technologies specializes in advanced product engineering, delivering innovative hardware and software solutions for cutting-edge surveillance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Adiance Technologies" />
        <meta property="og:image" content="https://www.adiance.com/images/Logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adiancetech" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <NavHeader text={"Product Engineering"} />
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
              Hardware Engineering
            </h2>
            <Typography variant="body1" align="justify">
              At Adiance, our product engineering process for hardware is
              meticulously detailed and driven by innovation, ensuring the
              delivery of top-tier electronic solutions. We focus on integrating
              advanced technologies to design, develop, and manufacture superior
              hardware components, with a particular emphasis on our CCTV
              cameras and surveillance systems. Our commitment to quality and
              precision guarantees that each component meets the highest
              standards of performance and reliability. By leveraging
              cutting-edge technology and rigorous engineering practices, we
              create hardware solutions that provide robust security and
              surveillance capabilities, reflecting our dedication to excellence
              and customer satisfaction.
            </Typography>
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
              Process
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
                  Design and development
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  Our engineers utilize advanced PCB design software, including
                  Altium Designer, Eagle PCB, and OrCAD, to craft detailed
                  schematics and layouts. These sophisticated tools enable the
                  design of printed circuit boards (PCBs) that deliver optimal
                  performance and reliability. We meticulously select
                  high-quality electronic components to meet specific criteria
                  for performance, durability, and cost-effectiveness, ensuring
                  that our hardware solutions are both robust and efficient.
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
                  Prototype
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  Prototyping at Adiance involves building detailed prototypes
                  to rigorously test functionality and performance. This phase
                  includes comprehensive functional testing, stress testing, and
                  environmental testing to validate the design's robustness.
                  Feedback from these tests is meticulously gathered, allowing
                  us to make necessary adjustments that optimize the design for
                  cost efficiency, manufacturability, and enhanced performance.
                  This iterative process ensures that our final products not
                  only meet but exceed industry standards, delivering reliable
                  and high-quality hardware solutions to our customers.
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
                  Production
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  Once the design is finalized, we meticulously set up the
                  manufacturing process, establishing efficient assembly lines
                  and robust quality control systems. This ensures that every
                  product meets our high standards. Mass production then begins,
                  with a strong focus on maintaining consistent quality and
                  strict adherence to design specifications. Our comprehensive
                  quality control measures involve continuous monitoring and
                  testing at each stage of production, ensuring that every
                  hardware component we produce is reliable, high-performing,
                  and true to our design vision.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <h2
          style={{
            textAlign: "center",
            fontSize: "36px",
            marginTop: "10%",
            marginBottom: "0%",
          }}
        >
          Technology used
        </h2>

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
          <Grid item xs={12} sm={12} md={5}>
            <Typography variant="body1" align="justify">
              <strong>CAD Software:</strong>
              <br />
              Tools like Altium Designer, Eagle PCB, and OrCAD are used for
              creating detailed schematics and PCB layouts.
              <br />
              <br />
              <strong>Simulation Tools:</strong>
              <br />
              SPICE and other simulation tools are used to test circuit designs
              virtually. This reduces the risk of errors and ensures
              reliability.
              <br />
              <br />
              <strong>Surface Mount Technology (SMT):</strong>
              <br />
              SMT is employed for mounting electronic components directly onto
              the surface of PCBs. This enables high-density and
              high-performance designs.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Typography variant="body1" align="justify">
              <strong>Automated Testing Equipment (ATE) :</strong>
              <br />
              ATE is used for conducting automated tests on prototypes and
              production units, ensuring thorough and consistent quality checks.
              <br />
              <br />
              <strong>Environmental Testing Chambers:</strong>
              <br />
              These chambers test the hardware under various environmental
              conditions such as temperature extremes and humidity to ensure
              durability and reliability.
            </Typography>
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
              Software Engineering
            </h2>
            <Typography variant="body1" align="justify">
              At Adiance, the product engineering of software is a meticulously
              structured process that merges cutting-edge technology, skilled
              expertise, and rigorous quality assurance to develop innovative
              and reliable software solutions tailored for the security and
              surveillance industry. Our dedicated software engineering team
              concentrates on creating robust applications that significantly
              enhance the functionality and usability of our hardware products.
              This ensures seamless integration, superior performance, and a
              cohesive user experience. By leveraging advanced development
              methodologies and thorough testing protocols, we deliver
              high-quality, dependable software that meets the specific needs of
              our clients. Our commitment to excellence drives us to
              continuously innovate, ensuring our solutions remain at the
              forefront of the security and surveillance technology landscape.
            </Typography>
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
              Process
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
                  1. Requirement Analysis
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  Requirement Analysis at Adiance involves comprehensive client
                  consultation to grasp their unique needs and security
                  challenges. Our team conducts thorough market research to
                  identify trends, gaps, and opportunities within the security
                  software domain. Additionally, we evaluate the technical
                  feasibility of proposed solutions, ensuring they align with
                  Adiance’s capabilities and meet client expectations. This
                  structured approach ensures that our software solutions are
                  not only innovative and effective but also practical and
                  tailored to the specific demands of our clients and the
                  market.
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
                  2. Design and Architecture
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  In system design, we meticulously develop detailed blueprints
                  outlining the software architecture, data flow, and
                  integration points with hardware. Our UI design focuses on
                  crafting intuitive interfaces, ensuring effortless navigation
                  and control for users. Through prototyping, we construct
                  preliminary models to validate design concepts and gather
                  valuable feedback from stakeholders. This iterative approach
                  enables us to refine and enhance our designs, ensuring that
                  our software solutions meet the highest standards of
                  functionality, usability, and user satisfaction.
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
                  3. Development
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  In the development phase, Adiance employs Agile Methodology,
                  ensuring flexibility and iterative progress through practices
                  like sprint planning, daily stand-ups, and regular reviews.
                  Our technology stack includes Python and C++ for backend
                  development, while frontend tasks are tackled using ReactJs,
                  NextJs, VueJs, CSS3, and JavaScript, alongside frameworks like
                  Angular and React for responsive UIs. We utilize PostgreSQL
                  and NoSQL databases like MongoDB for efficient data
                  management, integrate with cloud platforms such as AWS and
                  Azure for scalability and security, and incorporate AI/ML
                  algorithms for advanced features like facial recognition and
                  predictive analytics.
                </Typography>
              </CardContent>
            </Card>
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
                  4. Testing and QA
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  At Adiance, our rigorous approach to testing and quality
                  assurance encompasses both automated and manual methodologies.
                  We deploy automated testing frameworks to conduct thorough
                  assessments of functionality, performance, and security
                  aspects. Additionally, manual testing ensures validation of
                  user experience and interface usability, ensuring a seamless
                  interaction for end-users. Leveraging tools like JIRA, we
                  efficiently track, manage, and resolve any identified issues,
                  ensuring our software maintains the highest standards of
                  reliability and performance.
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
                  5. Deployment and Integration
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  We prioritize seamless deployment and integration of our
                  software solutions through advanced methodologies. We
                  implement Continuous Integration/Continuous Deployment (CI/CD)
                  pipelines to streamline the deployment process, ensuring
                  efficiency and reliability. During client onboarding, our team
                  offers comprehensive support, guiding clients through the
                  integration phase with meticulous attention to detail. This
                  approach not only fosters seamless integration but also
                  enhances client satisfaction by addressing any challenges
                  proactively, ensuring a smooth transition and optimal
                  utilization of our software solutions.
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
                  6. Maintenance and Support
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  We prioritize maintenance and support to ensure our software
                  remains at its peak performance. We roll out regular updates,
                  introducing new features, fixing bugs, and enhancing security
                  to keep our solutions cutting-edge. Our dedicated customer
                  support team is available 24/7 to promptly address any issues
                  or concerns our clients may encounter. By offering continuous
                  updates and responsive support, we guarantee our customers
                  experience seamless operations and maximum satisfaction with
                  our software solutions.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <h2
          style={{
            textAlign: "center",
            fontSize: "36px",
            marginTop: "10%",
            marginBottom: "0%",
          }}
        >
          Technology used
        </h2>

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
          <Grid item xs={12} sm={12} md={5}>
            <Typography variant="body1" align="justify">
              <strong>Backend Development: </strong>
              <br />
              Python, NodeJs,Express, C++
              <br />
              <br />
              <strong>Frontend Development: </strong>
              <br />
              React,Next,Vue, CSS3, JavaScript
              <br />
              <br />
              <strong>Database Management: </strong>
              <br />
              PostgreSQL, MongoDB
              <br />
              <br />
              <strong>Cloud Platforms: </strong>
              <br />
              AWS, Azure
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Typography variant="body1" align="justify">
              <strong>AI/ML: </strong>
              <br />
              TensorFlow, PyTorch
              <br />
              <br />
              <strong>Testing Tools:</strong>
              <br />
              Selenium, JUnit, Postman
              <br />
              <br />
              <strong>Project Management: </strong>
              <br />
              JIRA
              <br />
              <br />
              <strong>Version Control: </strong>
              <br />
              Git, GitHub
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

export default ProdEngineering;
