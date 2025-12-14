import React from "react";
import { Box, Button, Typography, Container } from "@mui/material"; // Changed Container import
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

const Globalnetwork = ({ data }) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fff5f5",
          paddingBlock: "1rem",
          marginBottom: "-6rem",
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
        <Container // Use MUI Container
          maxWidth="xl"
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
              {/* Use dynamic title */}
              {data.title}{" "}
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
                {/* Use dynamic highlight */}
                {data.highlight}
              </Typography>
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginTop: "1rem", textAlign: "center" }}
            >
              {/* Use dynamic description */}
              {data.description}
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
            {/* <Button
              variant="contained"
              endIcon={<ChevronRightIcon />}
              sx={{
                backgroundColor: "#BF0603",
                color: "#ffffff",
                textTransform: "none",
                padding: "0.7rem",
              }}
              onClick={handleContactClick}
            >
              Contact Us
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
    </>
  );
};

export default Globalnetwork;
