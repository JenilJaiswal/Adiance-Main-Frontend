import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const TechnologyPartner = () => {
  return (
    <Container
      fluid="xl"
      style={{
        backgroundColor: "#800F0F",
        color: "#ffffff",
        paddingBlock: "5rem",
        borderRadius: "25px",
        marginBlock: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "3rem",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: { xs: "2.5rem", sm: "3.5rem", lg: "3.5rem" },
          }}
        >
          Looking for a technology partner, connect with us Today
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            endIcon={<ChevronRightIcon />}
            href="/pdfs/Adiance-S-Series-Camera.pdf"
            target="_blank"
            sx={{
              backgroundColor: "#1C2025",
              color: "#ffffff",
              textTransform: "none",
              padding: "0.7rem",
            }}
          >
            Download S Camera Brief
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default TechnologyPartner;
