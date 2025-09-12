import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const BuyBackCtaSection = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        py: 12,
        px: { xs: 3, md: 6 },
        textAlign: "center",
        // background: "linear-gradient(to right, #1a237e, #0d47a1)",
        color: "white",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h4" component="h2" fontWeight="bold" mb={2} color="#7D7D7D" sx={{ fontSize:{xs: "2rem", md: "2.5rem"}}}>
          Ditch the Old, Upgrade to Bold – Grab ArcisAI’s Buyback CCTV Camera
          Offer Today!
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            fontSize: "1.2rem",
            padding: "12px 24px",
            borderRadius: "30px",
            backgroundColor: "#BF0603",
            boxShadow: "0px 6px 15px rgba(132, 18, 8, 0.6)",

            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#800f0f",
              boxShadow: "0px 6px 15px rgba(132, 18, 8, 0.6)",
              transform: "translateY(-2px)",
            },
          }}
          onClick={handleScrollToTop}
        >
          Reach Out Now
        </Button>
      </Container>
    </Box>
  );
};

export default BuyBackCtaSection;
