import React, { useEffect, useRef, useState } from "react";
import { Typography, Box, Card, CardContent } from "@mui/material";
import Header from "./Header/Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer/Footer";
import Grid from "@mui/material/Grid";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const CloudApplication = () => {
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
        <title>Cutting-Edge Cloud Services for Modern Enterprises</title>
        <meta
          name="description"
          content="Adiance Technologies is customizable and efficient cloud solutions with patented technology, empowering enterprises with advanced, reliable cloud services."
        />
        <meta name="keywords" content="cloud VMS, cloud surveillance, video management system" />
        <meta property="og:title" content="Cutting-Edge Cloud Services for Modern Enterprises" />
        <meta property="og:description" content="Adiance Technologies is customizable and efficient cloud solutions with patented technology, empowering enterprises with advanced, reliable cloud services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Adiance Technologies" />
        <meta property="og:image" content="https://www.adiance.com/images/Logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adiancetech" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <NavHeader text={"Cloud Application"} />
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
            {/* <h2
              style={{
                textAlign: "center",
                fontSize: "36px",
                marginTop: "5%",
                marginBottom: "5%",
              }}
            >
              Hardware Engineering 


            </h2> */}
            <Typography variant="body1" align="justify">
              Adiance is at the forefront of providing cutting-edge cloud
              services, leveraging its patented technology to deliver
              unparalleled security, customization, and efficiency. Our cloud
              solutions are designed to meet the diverse needs of modern
              enterprises, ensuring that our clients have access to the most
              advanced and reliable technology available.
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
              Patented Technologies
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
                  Data Compression:
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  Our patented technology allows for highly efficient data
                  compression, reducing the storage requirements and costs for
                  our clients. This means that large volumes of data can be
                  stored in the cloud without sacrificing performance or
                  accessibility.
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
                  Seamless Data Transmission:
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  Adiance's cloud services ensure seamless data transmission,
                  even in low-bandwidth environments. Our technology optimizes
                  data transfer rates, enabling real-time access and streaming
                  of high-quality video footage and other data, even at 2G
                  speeds.
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
                  Enhanced Security:
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  Security is paramount in Adiance's cloud services. Our
                  patented technology incorporates advanced encryption and
                  security protocols to protect data from unauthorized access
                  and breaches. This ensures that sensitive information remains
                  secure at all times.
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
              Customization Services
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
                  Scalable Storage Solutions:
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  Clients can scale their storage needs up or down based on
                  their requirements. Our flexible plans allow businesses to pay
                  only for what they use, making it a cost-effective solution.
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
                  Integrated Software Solutions:
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  Our in-house R&D team, TORQUE, works closely with clients to
                  develop custom software solutions that integrate seamlessly
                  with our cloud services. Whether it's video management
                  software, analytics tools, or other specialized applications,
                  we ensure that the software is tailored to meet the client's
                  exact needs.
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
                  API Integration:
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  Adiance offers robust APIs that enable clients to integrate
                  our cloud services with their existing systems and platforms.
                  This ensures a smooth and cohesive experience across different
                  technological environments.
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

export default CloudApplication;
