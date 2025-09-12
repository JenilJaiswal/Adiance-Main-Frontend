import React from "react";
import styles from "./OneStopSolution.module.css";
import { Box } from "@mui/material";
import TrafficIcon from "@mui/icons-material/Traffic";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SchoolIcon from "@mui/icons-material/School";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import Diversity1Icon from "@mui/icons-material/Diversity1";

const TrafficManagementCard = () => (
  <div className={styles.TrafficManagementCardmain}>
    <div className={styles.card}>
      <header className={styles.header}>
        <TrafficIcon style={{ fontSize: "50px" }} />
        <ArrowOutwardIcon style={{ fontSize: "40px" }} />
      </header>
      <h2 className={styles.title}>Traffic Management and Monitoring</h2>
      <p className={styles.description}>
        Monitor road conditions, traffic flow, and incidents in real-time,
        improving safety, reducing congestion.
      </p>
    </div>

    <Box
      className={styles.builderComponent}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: { xs: "4rem", md: "0" },
      }}
    >
      <div className={styles.containerimg}>
        <div className={styles.imageWrapper}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a9f2519bc814d2edefa27b25a89154b7572e4601d247c08d0f73919d311ad14?placeholderIfAbsent=true&apiKey=d228bf11a92f469d868c0952327415ff"
            className={styles.backgroundImage}
            alt=""
          />{" "}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/debc2daf16d05f9aadd0614ae0c6bcc7bf8608d0fc67821b3749676a96ede6dd?placeholderIfAbsent=true&apiKey=d228bf11a92f469d868c0952327415ff"
            className={styles.foregroundImage}
            alt="Foreground image"
          />
        </div>
      </div>
    </Box>

    <div className={styles.card}>
      <header className={styles.header}>
        <LocationCityIcon style={{ fontSize: "50px" }} />
        <ArrowOutwardIcon style={{ fontSize: "40px" }} />
      </header>
      <h2 className={styles.title}>Smart city and Surveillance</h2>
      <p className={styles.description}>
        Monitor public spaces, traffic, and urban activities in real-time,
        ensuring safety, efficiency, and proactive response.
      </p>
    </div>

    <div className={styles.card}>
      <header className={styles.header}>
        <SchoolIcon style={{ fontSize: "50px" }} />
        <ArrowOutwardIcon style={{ fontSize: "40px" }} />
      </header>
      <h2 className={styles.title}>University Surveillance</h2>
      <p className={styles.description}>
        Enhance security at your educational institution with our AI-powered
        surveillance cameras. Monitor all activities
      </p>
    </div>

    <div className={styles.card}>
      <header className={styles.header}>
        <Diversity3Icon style={{ fontSize: "50px" }} />
        <ArrowOutwardIcon style={{ fontSize: "40px" }} />
      </header>
      <h2 className={styles.title}>Crowd Control</h2>
      <p className={styles.description}>
        From crowd monitoring to emergency preparedness, our AI-powered camera
        ecosystem provides.
      </p>
    </div>

    <div className={styles.card}>
      <header className={styles.header}>
        <Diversity1Icon style={{ fontSize: "50px" }} />
        <ArrowOutwardIcon style={{ fontSize: "40px" }} />
      </header>
      <h2 className={styles.title}>Public Safety and Security</h2>
      <p className={styles.description}>
        Leveraging cutting-edge AI algorithms, our cameras provide smart
        analytics, including crowd detection.
      </p>
    </div>
  </div>
);

export default TrafficManagementCard;
