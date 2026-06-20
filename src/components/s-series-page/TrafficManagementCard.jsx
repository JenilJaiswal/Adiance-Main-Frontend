"use client";

import React from "react";
import styles from "./OneStopSolution.module.css";
import { Box } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

// Import the icons needed for the new data
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SchoolIcon from "@mui/icons-material/School";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import TrafficIcon from "@mui/icons-material/Traffic";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

// --- Data Array for Dynamicity ---
const cardData = [
  {
    id: "1",
    IconComponent: LocationCityIcon,
    title: "Smart Cities",
    description:
      "Our AI security cameras watch plazas, transit points, and infrastructure in real time - helping your teams prevent incidents, manage crowds, and keep the city moving.",
  },
  {
    id: "2",
    IconComponent: SchoolIcon,
    title: "Education",
    description:
      "With our AI CCTV Cameras, you’ll monitor entrances, corridors, and exam halls - reducing vandalism, ensuring fair tests, and keeping students and staff safe all day.",
  },
  {
    id: "3",
    IconComponent: LocalHospitalIcon,
    title: "Healthcare",
    description:
      "Our S-series AI security cameras at ICUs, pharmacies and entries to control access, capture clear evidence and support compliance - so your staff can focus on patients.",
  },
  {
    id: "4",
    IconComponent: TrafficIcon,
    title: "Traffic Management",
    description:
      "Use ArcisAI S-series AI CCTV cameras to read flow, spot incidents and flag violations in real time—informing signal timing and keeping roads safer for everyone.",
  },
  {
    id: "5",
    IconComponent: AccountBalanceIcon,
    title: "Banking & Finance",
    description:
      "With our AI security CCTV cameras, you deter threats, support fraud investigations and maintain audit trails that satisfy internal and regulatory checks.",
  },
];

// --- Component ---

const TrafficManagementCard = () => {
  // Split the data to match the original 1 - Image - 4 layout
  const firstCard = cardData[0];
  const otherCards = cardData.slice(1);

  return (
    <div className={styles.TrafficManagementCardmain}>
      {/* Render the first card */}
      <div className={styles.card}>
        <header className={styles.header}>
          <firstCard.IconComponent style={{ fontSize: "50px" }} />
          <ArrowOutwardIcon style={{ fontSize: "40px" }} />
        </header>
        <h2 className={styles.title}>{firstCard.title}</h2>
        <p className={styles.description}>{firstCard.description}</p>
      </div>

      {/* Central Image Box */}
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

      {/* Render the remaining cards dynamically */}
      {otherCards.map((card) => (
        <div className={styles.card} key={card.id}>
          <header className={styles.header}>
            <card.IconComponent style={{ fontSize: "50px" }} />
            <ArrowOutwardIcon style={{ fontSize: "40px" }} />
          </header>
          <h2 className={styles.title}>{card.title}</h2>
          <p className={styles.description}>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TrafficManagementCard;