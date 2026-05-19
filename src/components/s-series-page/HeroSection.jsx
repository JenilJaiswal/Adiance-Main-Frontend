"use client";

import React from "react";
import styles from "./HeroSection.module.css";
import { Container } from "react-bootstrap";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button } from "@mui/material";

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <img
          fetchpriority="high"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9c499e0cb9ae526ff0136c99f5430f56698ab490144c8a26921738d54138e85?placeholderIfAbsent=true&apiKey=5e6c7542e7f24225a4d3d5a1be551cbc"
          className={styles.backgroundImage}
          alt=""
        />
        <Container fluid="xl">
          <div className={styles.contentWrapper}>
            <div className={styles.twoColumnLayout}>
              <div className={styles.leftColumn}>
                <div className={styles.textContent}>
                  <div className={styles.textWrapper}>
                    <div className={styles.headingWrapper}>
                      <h1 className={styles.mainHeading}>
                        S-Series: India’s Most Advanced{" "}
                        <span style={{ color: "#bf0603" }}>
                          EdgeAI CCTV Cameras
                        </span>
                      </h1>
                      <p className={styles.subHeading}>
                        A new era of CCTV built around your safety: The S-Series
                        adapts to your world and protects you every second.
                      </p>
                    </div>
                    <div className={styles.ctaWrapper}>
                      <Button
                        variant="contained"
                        endIcon={<ChevronRightIcon />}
                        href="https://calendly.com/book-a-demo-with-adiance/60min"
                        target="_blank"
                        sx={{
                          backgroundColor: "#ffffff",
                          color: "#081B33",
                          cursor: "pointer",
                          fontSize: {
                            xs: "12px", // Extra-small devices (e.g., mobile phones)
                            sm: "14px", // Small devices (e.g., tablets)
                            md: "16px", // Medium devices (e.g., small laptops)
                            lg: "18px", // Large devices (e.g., desktops)
                          },
                        }}
                      >
                        Book Demo
                      </Button>
                      <Button
                        variant="contained"
                        endIcon={<ChevronRightIcon />}
                        href="/contact"
                        target="_blank"
                        sx={{
                          backgroundColor: "#ffffff",
                          color: "#081B33",
                          cursor: "pointer",
                          fontSize: {
                            xs: "12px", // Extra-small devices (e.g., mobile phones)
                            sm: "14px", // Small devices (e.g., tablets)
                            md: "16px", // Medium devices (e.g., small laptops)
                            lg: "18px", // Large devices (e.g., desktops)
                          },
                        }}
                      >
                        Let's Talk
                      </Button>
                      {/* <Button
                        variant="text"
                        endIcon={<ChevronRightIcon />}
                        href="/pdfs/Adiance-S-Series-Camera.pdf"
                        target="_blank"
                        sx={{
                          backgroundColor: "transparent",
                          color: "#ffffff",
                          cursor: "pointer",
                          fontSize: {
                            xs: "12px", // Extra-small devices (e.g., mobile phones)
                            sm: "14px", // Small devices (e.g., tablets)
                            md: "16px", // Medium devices (e.g., small laptops)
                            lg: "18px", // Large devices (e.g., desktops)
                          },
                        }}
                      >
                        Explore S Series
                      </Button> */}
                    </div>
                  </div>
                  <PaginationDots total={5} active={0} />
                </div>
              </div>
              <div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3a4152dc543900dd7550dbb3823eb9f38405bca6bda37b351593e64ef4355a4?placeholderIfAbsent=true&apiKey=5e6c7542e7f24225a4d3d5a1be551cbc"
                  className={styles.productImage}
                  style={{ minHeight: "100%", minWidth: "auto" }}
                  alt="5G Enabled Edge AI Camera"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

function PaginationDots({ total, active }) {
  return (
    <div className={styles.paginationDots}>
      {[...Array(total)].map((_, index) => (
        <div
          key={index}
          className={index === active ? styles.activeDot : styles.inactiveDot}
          aria-hidden="true"
        />
      ))}
      <span className={styles["visually-hidden"]}>
        Page {active + 1} of {total}
      </span>
    </div>
  );
}

export default HeroSection;
