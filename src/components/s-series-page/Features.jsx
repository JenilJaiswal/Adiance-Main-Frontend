"use client";

import { Box, Button, Typography, Grid, Container, Paper } from "@mui/material";
import React, { useState } from "react";

// --- Data Object at the Top ---

// Original image paths from your previous code
const images = [
  "/images/sentiment_analysis_accordian.webp", // [0]
  "/images/Humandetection.webp",             // [1]
  "/images/Facedetection.webp",             // [2]
  "/images/motion-ditection.webp",           // [3]
  "/images/Linecrossing.webp",               // [4]
  "/images/Areadetection.webp",              // [5]
  "/images/Buggagedetection.webp",           // [6]
];

// New dynamic data object
const featureData = [
  {
    id: "f1",
    title: "Unattended Baggage",
    description:
      "Instantly flags left objects in lobbies, branches, and transit zones to trigger SOP checks and prevent security risks.",
    image: images[6], // Mapped from original Buggagedetection.webp
  },
  {
    id: "f2",
    title: "Missing Objects",
    description:
      "Alerts when assets or merchandise disappear from shelves, showrooms, or stockrooms - speeding investigation and loss recovery.",
    image: images[0], // Mapped from original sentiment_analysis...webp
  },
  {
    id: "f3",
    title: "Line Crossing",
    description:
      "Monitors restricted perimeters (server rooms, cash areas, yards) and alerts the moment a boundary is breached for rapid response.",
    image: images[4], // Mapped from original Linecrossing.webp
  },
  {
    id: "f4",
    title: "Area Intrusion",
    description:
      "Secures no-go zones like data centers, warehouses, and loading bays—auto-notifying teams when someone enters after hours or without authorization.",
    image: images[5], // Mapped from original Areadetection.webp
  },
  {
    id: "f5",
    title: "Customer Traffic (Footfall & Dwell)",
    description:
      "Measures entries, exits, and dwell times across stores, branches, and campuses—turning visitor flow into staffing and layout decisions.",
    image: images[1], // Mapped from original Humandetection.webp
  },
  {
    id: "f6",
    title: "Motion Detection",
    description:
      "Detects unusual movement after hours on floors, aisles, or parking lots—reducing patrol load and catching incidents early.",
    image: images[3], // Mapped from original motion-ditection.webp
  },
  {
    id: "f7",
    title: "Human Detection",
    description:
      "Differentiates people from background motion to cut false alerts—ideal for office corridors, factory floors, and reception areas.",
    image: images[1], // Re-using Humandetection.webp
  },
  {
    id: "f8",
    title: "Face Detection",
    description:
      "Captures clear face events at entrances and counters for audit trails, incident review, and compliance support.",
    image: images[2], // Mapped from original Facedetection.webp
  },
];

// --- Component ---

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active index

  // Handle button click
  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  // Get the currently active feature object
  const activeFeature = featureData[activeIndex];

  return (
    <Box sx={{ paddingBlock: "2rem", backgroundColor: "#FFFFFF" }}>
      <Container maxWidth="xl">
        {/* Top Section */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: "2.5rem", sm: "3.5rem" },
            }}
          >
            Instant Detection. Instant Action. EdgeAI CCTV Cameras
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#7D7D7D",
              marginBlock: "1.5rem",
              maxWidth: "800px",
              marginInline: "auto",
            }}
          >
            Experience smarter detection and faster decisions via Edge AI CCTV
            security cameras: precise alerts, live view and immediate deterrence
            - unified in one app.
          </Typography>
        </Box>

        {/* New Layout: Buttons on Left, Content on Right */}
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {/* Left Side: Buttons */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {featureData.map((feature, index) => (
                <Button
                  key={feature.id}
                  onClick={() => handleButtonClick(index)}
                  variant="text"
                  sx={{
                    backgroundColor:
                      activeIndex === index ? "#F3F4F8" : "transparent",
                    color: activeIndex === index ? "#BF0603" : "#1A1E23",
                    fontWeight: activeIndex === index ? "bold" : "normal",
                    fontSize: "1rem",
                    justifyContent: "flex-start",
                    padding: "1rem",
                    borderRadius: "8px",
                    textTransform: "none",
                    border:
                      activeIndex === index
                        ? "1px solid #BF0603"
                        : "1px solid transparent",
                    "&:hover": {
                      backgroundColor: "#F3F4F8",
                    },
                  }}
                >
                  {feature.title}
                </Button>
              ))}
            </Box>
          </Grid>

          {/* Right Side: Content (Image + Description) */}
          <Grid item xs={12} md={8}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid #E0E0E0",
              }}
            >
              <img
                src={activeFeature.image}
                alt={activeFeature.title}
                style={{
                  width: "100%",
                  height: "400px", // Consistent height
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <Box sx={{ padding: { xs: 2, sm: 3, md: 4 } }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", mb: 2 }}
                >
                  {activeFeature.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "#555" }}>
                  {activeFeature.description}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;