import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const ThankYouPage = () => {
  const handleGoBack = () => {
    if (window.top !== window.self) {
      window.top.location.href = "/";
    } else {
      window.location.href = "/";
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        // background: "linear-gradient(135deg, #667eea, #764ba2)", // Stylish gradient
      }}
    >
      <Header />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 3,
          mt: { base: 4, md: 8 },
        }}
      >
        <Box
          sx={{
            maxWidth: 650,
            textAlign: "center",
            // background: "rgba(255, 255, 255, 0)",
            backdropFilter: "blur(10px)",
            borderRadius: "12px",
            padding: "40px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
              // color: "#fff",
              // textShadow: "1px 1px 10px rgba(0,0,0,0.3)",
            }}
          >
            Oops! Page Not Found
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.


          </Typography>
          <Button
            variant="contained"
            onClick={handleGoBack}
            sx={{
              cursor: "pointer",
              backgroundColor: "#BF0603",
              textTransform: "none",
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "black",
                transform: "scale(1.05)",
                transition: "0.3s ease-in-out",
              },
            }}
          >
            Go Back Home
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ThankYouPage;
