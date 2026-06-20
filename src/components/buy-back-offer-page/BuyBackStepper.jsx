"use client";

import React from "react";
import { Box, Typography, Stepper, Step, StepLabel, useMediaQuery, Paper, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const steps = [
  {
    title: "Buy New",
    description: "Pick your next-gen AI-powered CCTV camera for smarter security.",
  },
  {
    title: "Return Old",
    description: "Hand over any old CCTV camera – working or not, no worries.",
  },
  {
    title: "Get Cash",
    description: "Receive instant cashback for each CCTV camera you return.",
  },
  {
    title: "Limited Time",
    description: "Offer ends on March 31st - act before it’s gone!",
  },
];

const BuybackStepper = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detect mobile screen

  return (
    <Box
      sx={{
        backgroundColor: "#1C2025", // ✅ Light background for better readability
        color: "#white",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            py: 16,
            px: { xs: 3, md: 6 },
            backgroundColor: "#1C2025", // ✅ Matching `BuyBackFeatureSection`
            color: "white",
          }}
        >
          {/* Heading */}
          <Typography
            variant="h3"
            component="h2"
            fontWeight="bold"
            textAlign="center"
            mb={8}
            sx={{ fontSize: { xs: "2.7rem", md: "3rem" } }}
          >
            Effortless Buyback Process in Just 4 Easy Steps
          </Typography>

          <Paper
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: "1rem",
              backgroundColor: "rgba(255, 255, 255, 0.08)", // ✅ Matching `BuyBackFeatureSection`
              backdropFilter: "blur(10px)",
            }}
          >
            <Stepper activeStep={-1} orientation={isMobile ? "vertical" : "horizontal"}>
              {steps.map((step, index) => (
                <Step key={index} completed={false}>
                  <StepLabel
                    StepIconComponent={() => null} // ✅ Removes default MUI step number
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      flexDirection: isMobile ? "column" : "row", // ✅ Stack on mobile, inline on desktop
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 2 }}>
                      {/* Custom Step Number */}
                      <Box
                        sx={{
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "50%",
                          backgroundColor: "#ffeb3b", // ✅ Yellow step number
                          color: "#1C2025",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                          padding: "1rem", // ✅ Adjust padding for better appearance<
                        }}
                      >
                        {index + 1}
                      </Box>

                      {/* Step Title & Description */}
                      <Box>
                        <Typography variant="h6" fontWeight="bold" component="h3" sx={{ color: "#ffffff" }}>
                          {step.title}
                        </Typography>
                        <Typography variant="body2" component="p" sx={{ color: "#ffffff", opacity: 0.85, fontSize: "1rem" }}>
                          {step.description}
                        </Typography>
                      </Box>
                    </Box>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default BuybackStepper;
