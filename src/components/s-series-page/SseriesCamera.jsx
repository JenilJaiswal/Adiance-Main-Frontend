import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SseriesCamera = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff5f5",
        paddingBlock: "3rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "2rem",
        }}
      >
        <Box sx={{ maxWidth: { xs: "20%" } }}>
          <img src="/images/Group.svg" alt="groupsvg" width="100%" />
        </Box>
      </Box>
      <Container
        fluid="xl"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {/* text part */}
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: "2.5rem", sm: "3.5rem", lg: "3.5rem" },
            }}
          >
            Protect What Matters With{" "}
            <Typography
              variant="h2"
              component="span"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                color: "#A00A09",
                fontSize: { xs: "2.5rem", sm: "3.5rem", lg: "4.5rem" },
              }}
            >
              S-Series AI CCTV Cameras
            </Typography>
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginTop: "1rem", textAlign: "center" }} // Adjust the margin as needed
          >
            Designed for modern enterprises: faster response, fewer false alarms, and visibility you can trust.
          </Typography>
        </Box>

        {/* buttons part */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            gap: "1rem",
          }}
        >

          <Button
            variant="contained"
            endIcon={<ChevronRightIcon />}
            href="/contact"
            target="_blank"
            sx={{
              backgroundColor: "#1C2025",
              color: "#ffffff",
              textTransform: "none",
              padding: "0.7rem",
            }}
          >
            Book Installation
          </Button>

          {/* <Button
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

          <Button
            variant="contained"
            endIcon={<ChevronRightIcon />}
            href="/pdfs/PTZ - 5G.pdf"
            target="_blank"
            sx={{
              backgroundColor: "#BF0603",
              color: "#ffffff",
              textTransform: "none",
              padding: "0.7rem",
            }}
          >
            Download Specifications
          </Button> */}

        </Box>
      </Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "2rem",
        }}
      >
        <Box sx={{ maxWidth: { xs: "20%" } }}>
          <img src="/images/Group.svg" alt="groupsvg" width="100%" />
        </Box>
      </Box>
    </Box>
  );
};

export default SseriesCamera;
