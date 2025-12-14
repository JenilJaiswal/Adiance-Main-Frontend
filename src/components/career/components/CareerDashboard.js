import React from "react";
import { Box, Typography } from "@mui/material";

const CareerDashboard = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "column" },
          width: "100%",
          mx: "auto",
          mt: "3%",
          px:"3%"
        }}
      >
        <Box
          sx={{
            textAlign: { xs: "center", lg: "left" },
            mb: { xs: 8, lg: 10 },
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "32px", md: "48px", lg: "64px" },
              fontWeight: 600,
              mb: 6,
              lineHeight: { xs: "40px", md: "60px", lg: "81px" },
              width: { xs: "100%", md: "70%" },
            }}
          >
            Meet the team work behind our success
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: { xs: "flex-start" },
              flexDirection: { xs: "column", md: "row" },
              gap: 2, // In MUI, gap: 2 is theme.spacing(2) = 16px
            }}
          >
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
              >
                <path
                  d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM5 5L2.87868 7.12132L27.8787 32.1213L30 30L32.1213 27.8787L7.12132 2.87868L5 5Z"
                  fill="#BF0603"
                />
              </svg>
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                color: "#444",
                maxWidth: { xs: "100%", md: "50%" },
              }}
            >
              We are a company that values people as much as innovation. With a
              supportive culture, exciting challenges, and endless opportunities
              to grow, we make work rewarding and meaningful. Join us and be
              part of something bigger.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ flex: 1, width: "100%" }}>
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/images/CareerDash.png`}
            alt="Meet the team work behind our successes"
            sx={{
              borderRadius: "24px",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default CareerDashboard;
