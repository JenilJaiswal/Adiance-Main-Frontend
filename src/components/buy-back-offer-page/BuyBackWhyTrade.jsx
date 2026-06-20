"use client";

import React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
} from "@mui/material";
import {
  Bolt,
  Videocam,
  Security,
  HighQuality,
  MonetizationOn,
  Verified,
} from "@mui/icons-material";

const features = [
  {
    title: "Advanced EdgeAI Tech",
    description:
      "Upgrade to AI security camera with built-in AI features for faster and smarter cctv security camera surveillance. Our AI-driven system enhances real-time threat detection, ensuring your premises stay protected 24/7.",
    icon: <Bolt />,
  },
  {
    title: "Integrated VMS",
    description:
      "Gain full control with our seamless Video Management System, STQC certified for enhanced monitoring. Easily access, store and analyze video footage with an intuitive interface that simplifies security operations.",
    icon: <Security />,
  },
  {
    title: "Versatile Options",
    description:
      "Choose from a range of CCTV types, including Sim based 4G, 5G, PoE, Wi-Fi, Dome, Bullet and PTZ CCTV cameras to suit your needs. Whether for home, office or industrial use. Our diverse selection guarantees the perfect security solution.",
    icon: <Videocam />,
  },
  {
    title: "Patented Video Quality Tech",
    description:
      "Experience crystal-clear imaging with our patented technology that uses 70% less data without compromising quality. Get superior video clarity even in low-light conditions, ensuring accurate surveillance at all times.",
    icon: <HighQuality />,
  },
  {
    title: "Get Cash for Your Old Cameras",
    description:
      "Trade in your outdated CCTV security camera and get a cash reward instantly with our exclusive AI CCTV camera buyback offer. This hassle-free trade lets you upgrade affordably while embracing the latest in security technology.",
    icon: <MonetizationOn />,
  },
  {
    title: "2-Year Warranty",
    description:
      "Enjoy long-term reliability with guaranteed protection on all smart CCTV camera purchases. Our warranty covers repairs, ensuring your investment remains secure and functional for years to come.",
    icon: <Verified />,
  },
];

const BuyBackWhyTrade = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff5f5", // ✅ Light background for better readability
        color: "#1C2025",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            px: { xs: 3, md: 6 },
            backgroundColor: "#fff5f5", // ✅ Light background for better readability
            color: "#1C2025", // ✅ Dark text for contrast
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            fontWeight="bold"
            textAlign="center"
            mb={8}
            sx={{ fontSize: { xs: "2.7rem", md: "3rem" } }}
          >
            Why Trade Your Old CCTV Cameras for ArcisAI?
          </Typography>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <List
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 3,
                    borderRadius: "1rem",
                    // backgroundColor: "rgba(255, 255, 255, 0.85)", // ✅ Light background for contrast
                    transition: "0.3s",
                    "&:hover": {
                      transform: "scale(1.02)", // ✅ Subtle hover effect (removes box shadow)
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: "#BF0603",
                      fontSize: "2rem",
                      minWidth: "60px",
                    }}
                  >
                    {feature.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="h6"
                        component="h3"
                        fontWeight="bold"
                        sx={{
                          color: "#1C2025",
                        }}
                      >
                        {feature.title}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        variant="body2"
                        component="p"
                        sx={{
                          opacity: 1,
                          color: "#3A3A3A",
                          fontSize: "1rem",
                        }}
                      >
                        {feature.description}
                      </Typography>
                    }
                  />
                </List>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default BuyBackWhyTrade;
