import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import {
  Visibility,
  People,
  Timeline,
  Business,
  Warning,
  RemoveCircle,
  DirectionsRun,
  Face,
  RemoveRedEye,
} from "@mui/icons-material";

const features = [
  {
    title: "Area Detection",
    description:
      "Tracks entries and exits in defined zones, alerting you to any movement in restricted or sensitive areas.",
    icon: <RemoveRedEye fontSize="large" />,
  },
  {
    title: "Traffic Detection",
    description:
      "Analyzes foot traffic patterns in real time to optimize both business operations and security planning.",
    icon: <Business fontSize="large" />,
  },
  {
    title: "Baggage Detection",
    description:
      "Detects abandoned objects promptly, helping prevent potential security threats or safety risks.",
    icon: <Warning fontSize="large" />,
  },
  {
    title: "Object Detection",
    description:
      "Identifies and alerts security teams when valuable items are removed from their designated spot.",
    icon: <RemoveCircle fontSize="large" />,
  },
  {
    title: "Motion Detection",
    description:
      "Detects any movement instantly, ensuring real-time security alerts for swift action.",
    icon: <DirectionsRun fontSize="large" />,
  },
  {
    title: "Human Detection",
    description:
      "Accurately identifies human presence, reducing false alarms from pets, shadows, or objects.",
    icon: <People fontSize="large" />,
  },
  {
    title: "Face Detection",
    description:
      "Detects and identifies faces in real time, improving security monitoring and situational awareness.",
    icon: <Face fontSize="large" />,
  },
  {
    title: "Line-cross Detection",
    description:
      "Triggers instant alerts when a defined boundary is crossed, preventing unauthorized access or entry.",
    icon: <Timeline fontSize="large" />,
  },
];

const BuyBackFeatureSection = () => {
  return (
    <Box
      sx={{
        // py: { xs: 6, md: 10 },
        // px: { xs: 3, md: 6 },
        // background: "linear-gradient(to right, #1a237e, #0d47a1)",
        backgroundColor: "#1C2025",
        color: "white",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            py: { xs: 6, md: 10 },
            px: { xs: 3, md: 6 },
            // background: "linear-gradient(to right, #1a237e, #0d47a1)",
            backgroundColor: "#1C2025",
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            fontWeight="bold"
            mb={8}
            sx={{ fontSize: { xs: "2.7rem", md: "3rem" } }}
          >
            Advanced AI-Powered CCTV Surveillance Features
          </Typography>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card
                  sx={{
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    // backgroundColor: "rgba(0, 0, 0, 0.5)", // Darker background for better contrast
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    color: "#ffffff",
                    borderRadius: "1rem",
                    backdropFilter: "blur(8px)",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 4px 20px rgba(255, 255, 255, 0.3)",
                    },
                  }}
                >
                  <Box sx={{ color: "#ffeb3b", mb: 2 }}>{feature.icon}</Box>
                  <CardContent>
                    <Typography
                      variant="h6"
                      component="h3"
                      fontWeight="bold"
                      gutterBottom
                      sx={{
                        color: "#ffffff",
                        textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
                      }} // Adds text shadow for better visibility
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      sx={{
                        opacity: 0.85,
                        color: "#ffffff",
                        textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default BuyBackFeatureSection;
