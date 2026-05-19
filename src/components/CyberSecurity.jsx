"use client";

import React, { useEffect, useRef, useState } from "react";
import { Typography, Card, CardContent } from "@mui/material";
import Header from "./Header/Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer/Footer";
import Grid from "@mui/material/Grid";
import { Helmet } from "react-helmet";
import { useLocation } from "@/compat/react-router-dom";

const CyberSecurity = () => {
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
        <title>Advanced Cybersecurity Solutions for Data Protection</title>
        <meta
          name="description"
          content="Ensure data security with cutting-edge cybersecurity solutions. Protect sensitive information, mitigate risks, and stay compliant with evolving cyber threats"
        />
        <meta name="keywords" content="cybersecurity, data protection, camera security" />
        <meta property="og:title" content="Advanced Cybersecurity Solutions for Data Protection" />
        <meta property="og:description" content="Ensure data security with cutting-edge cybersecurity solutions. Protect sensitive information, mitigate risks, and stay compliant with evolving cyber threats" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Adiance Technologies" />
        <meta property="og:image" content="https://www.adiance.com/images/Logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adiancetech" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <NavHeader text={"Cyber Security"} />
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
          <Grid item xs={12}>
            <Typography variant="body1" align="justify">
              Adiance prioritizes cybersecurity as a cornerstone of our
              operations, recognizing its paramount importance in safeguarding
              client data, fortifying system integrity, and preserving
              intellectual property. Our robust cybersecurity policy underscores
              our unwavering commitment to mitigating risks, swiftly responding
              to emerging threats, and adhering to stringent legal and
              regulatory mandates. Through a comprehensive framework, we employ
              cutting-edge technologies, regular audits, and continuous staff
              training to fortify our defenses and ensure resilience against
              evolving cyber threats. By embracing a proactive stance, we not
              only protect our clients' interests but also uphold the trust of
              all stakeholders. Our dedication to maintaining a secure and
              trustworthy environment underscores our mission to deliver
              unparalleled service while safeguarding sensitive information and
              upholding the highest standards of ethical conduct.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          ref={ref1}
          container
          spacing={3}
          justifyContent="center"
          sx={{
            marginTop: "5%",
            marginBottom: "5%",
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
              animation: animate1 ? "slideFromLeft 1s ease" : "none",
            }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: "325px",
                height: "100%",
                borderRadius: "16px",
                boxShadow: 3,
                backgroundColor: "#bf0603",
                color: "white",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%", // Ensures content is centered vertically
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  style={{
                    fontSize: "36px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Security Measures in Product Development:
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
              animation: animate1 ? "slideFromRight 1s ease" : "none",
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
                  Secure PCB Design
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  Our PCBs feature robust security measures to thwart tampering
                  and unauthorized access. We employ advanced encryption to
                  protect data and secure boot processes to verify the integrity
                  of the board during startup. Each component is safeguarded
                  within a multi-layered secure environment, ensuring reliable
                  and secure operation. This comprehensive approach to security
                  ensures that our PCBs maintain the highest standards of
                  protection against threats, providing peace of mind for users
                  and maintaining the integrity of their operations.
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
              animation: animate1 ? "slideFromRight 1s ease" : "none",
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
                  AI Camera Security
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  Our AI cameras ensure robust security through multiple layers
                  of protection. The secure boot process verifies firmware
                  integrity at startup, preventing unauthorized modifications.
                  Encrypted data storage safeguards captured footage, ensuring
                  only authorized personnel can access the data. Secure firmware
                  updates further enhance security by allowing only verified
                  updates, protecting against vulnerabilities and cyber threats.
                  Together, these features provide comprehensive protection,
                  maintaining the confidentiality and integrity of the data
                  captured by our AI cameras.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid
          ref={ref1}
          container
          spacing={3}
          justifyContent="center"
          sx={{
            marginTop: "5%",
            marginBottom: "5%",
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
              animation: animate1 ? "slideFromLeft 1s ease" : "none",
            }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: "325px",
                height: "100%",
                borderRadius: "16px",
                boxShadow: 3,
                backgroundColor: "#bf0603",
                color: "white",
                fontWeight: "bold",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%", // Ensures content is centered vertically
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  style={{
                    fontSize: "36px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Network Security:
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
              animation: animate1 ? "slideFromRight 1s ease" : "none",
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
                  Secure Connectivity
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  Our products ensure secure network connectivity through robust
                  measures such as SSL/TLS encryption, VPN support, and secure
                  access protocols. SSL/TLS encryption protects data in transit
                  by encrypting it, making it unreadable to unauthorized
                  parties. VPN support adds an extra layer of security by
                  creating a private, encrypted tunnel for data exchange. Secure
                  access protocols ensure that only authorized users and devices
                  can connect, preventing unauthorized access and safeguarding
                  sensitive information from interception and cyber threats.
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
              animation: animate1 ? "slideFromRight 1s ease" : "none",
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
                  4G and Wireless Security
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  For our wireless and 4G-enabled products, we utilize advanced
                  encryption techniques and secure authentication methods to
                  safeguard data transmissions. These robust security protocols
                  are specifically designed to defend against a wide range of
                  threats, including eavesdropping and unauthorized access. By
                  ensuring that all data exchanges are protected, we provide
                  reliable and secure connectivity. Our commitment to security
                  guarantees that user information remains confidential and
                  secure, maintaining the integrity and trustworthiness of our
                  wireless solutions.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid
          ref={ref3}
          container
          spacing={3}
          justifyContent="center"
          sx={{
            marginTop: "5%",
            marginBottom: "5%",
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
              animation: animate3 ? "slideFromLeft 1s ease" : "none",
            }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: "325px",
                height: "100%",
                borderRadius: "16px",
                boxShadow: 3,
                backgroundColor: "#bf0603",
                color: "white",
                fontWeight: "bold",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%", // Ensures content is centered vertically
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  style={{
                    fontSize: "36px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Cloud Security:
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
              animation: animate3 ? "slideFromRight 1s ease" : "none",
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
                  Data Protection
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  Our data protection approach for cloud-based products is
                  comprehensive, prioritizing security at every step. Through
                  encryption techniques employed both while data is stored and
                  during transmission, we shield your data from unauthorized
                  access. Routine security audits bolster ongoing resilience,
                  ensuring robustness against emerging threats. Adherence to
                  stringent data protection regulations such as GDPR underscores
                  our commitment to compliance and trustworthiness. With these
                  measures in place, we guarantee the security of your data
                  throughout its lifecycle, instilling confidence and peace of
                  mind for both you and your users.
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
              animation: animate3 ? "slideFromRight 1s ease" : "none",
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
                  Access Control
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  Robust access control mechanisms, including multi-factor
                  authentication (MFA) and role-based access controls (RBAC),
                  form the cornerstone of our cloud solutions' security
                  framework. MFA adds an extra layer of protection by requiring
                  users to provide multiple forms of verification, such as
                  passwords, biometrics, or security tokens. RBAC ensures that
                  users only have access to the resources and data necessary for
                  their roles, reducing the risk of unauthorized access. These
                  measures collectively safeguard sensitive data and systems,
                  mitigating potential security threats and ensuring compliance
                  with regulatory requirements.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid
          ref={ref3}
          container
          spacing={3}
          justifyContent="center"
          sx={{
            marginTop: "5%",
            marginBottom: "5%",
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
              animation: animate3 ? "slideFromLeft 1s ease" : "none",
            }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: "325px",
                height: "100%",
                borderRadius: "16px",
                boxShadow: 3,
                backgroundColor: "#bf0603",
                color: "white",
                fontWeight: "bold",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%", // Ensures content is centered vertically
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  style={{
                    fontSize: "36px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  AI and Machine Learning Security:
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
              animation: animate3 ? "slideFromRight 1s ease" : "none",
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
                  Threat Detection
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  Our AI and machine learning models employ sophisticated
                  algorithms to continuously monitor network activities and
                  identify potential cybersecurity threats in real-time. By
                  analyzing patterns, anomalies, and known attack vectors, these
                  systems proactively detect suspicious behavior, enabling swift
                  responses to mitigate risks. This proactive approach enhances
                  overall system security by preemptively thwarting potential
                  breaches before they can inflict damage. With instant alerts
                  and automated responses, our technology ensures that threats
                  are swiftly contained and neutralized, bolstering the
                  resilience of our digital infrastructure against evolving
                  cyber threats.
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
              animation: animate3 ? "slideFromRight 1s ease" : "none",
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
                  Model Security
                </Typography>
                <Typography variant="body1" style={{ marginTop: "1%" }}>
                  Model security is paramount in our AI framework. We employ
                  stringent protocols to fortify our models against adversarial
                  threats. Regular updates and meticulous monitoring bolster the
                  integrity and reliability of AI-driven decision-making
                  processes. Our approach encompasses a multifaceted strategy,
                  incorporating techniques such as robust model architecture
                  design, data validation, and anomaly detection. Through
                  proactive measures and constant vigilance, we mitigate risks
                  and uphold the trustworthiness of our AI systems, fostering
                  confidence among stakeholders and safeguarding against
                  potential vulnerabilities in an ever-evolving landscape of
                  threats.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* <Grid>
          <Typography variant="h5">
            <strong>
              <center>
                In a world where security is paramount, trust Adiance to lead
                the way with our comprehensive solutions that redefine what it
                means to be secure.
              </center>
            </strong>
          </Typography>
        </Grid> */}
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

export default CyberSecurity;
