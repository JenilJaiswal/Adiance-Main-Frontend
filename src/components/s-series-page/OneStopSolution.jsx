import React from "react";
import styles from "./OneStopSolution.module.css";
import { Box, Grid, Typography } from "@mui/material";
import TrafficManagementCard from "./TrafficManagementCard";
import { Container } from "react-bootstrap";

const OneStopSolution = () => {
  return (
    <>
      <section style={{ backgroundColor: "#1C2025", color: "#ffffff", paddingBlock: "4rem" }}>
        <Container fluid="xl">
          <div>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: { xs: "2.5rem", sm: "3.5rem", lg: "3.5rem" },
                }}
              >
                Build Safer Systems - Not Just Feeds With EdgeAI Security Cameras
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  color: "#7D7D7D",
                  marginBlock: "1.5rem",
                }}
              >
                Our S-series AI CCTV Cameras deliver real-time intelligence across smart cities, schools, hospitals, traffic hubs, and banks to prevent risks before they escalate.
              </Typography>
            </Box>
          </div>

          <div className={styles.container}>
            <div className={styles.contentWrapper}>
              {/* <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/57e3f86fed3922ebbd6c4c973dabcf771906a7faae9bb8e15da51e5f5808c719?placeholderIfAbsent=true&apiKey=d228bf11a92f469d868c0952327415ff"
              alt="Traffic Management Header"
              className={styles.headerImage}
            /> */}
              <TrafficManagementCard />
            </div>
            {/* <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb265753633cd91251349534a4cf16c538f0b342593c8c31977038a437e9196c?placeholderIfAbsent=true&apiKey=d228bf11a92f469d868c0952327415ff"
            alt="Traffic Management Footer"
            className={styles.footerImage}
          /> */}
          </div>
        </Container>
      </section>
    </>
  );
};

export default OneStopSolution;
