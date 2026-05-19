"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

const Industries = () => {
  return (
    <>
      <div style={{paddingBlock:"4rem"}}>
        <div>
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: { xs: "2.5rem", sm: "3.5rem", lg: "3.5rem" },
              }}
            >
              Industries
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "#7D7D7D",
                marginBlock: "1.5rem",
              }}
            >
              Hundreds of (Universities, Government Institutes, Warehouses, Banks) <br />
              Rely on Adiance AI camera for Security
            </Typography>
          </Box>
        </div>
        <div>
            <img src="/images/Frame1.webp" alt="" height="auto" width="100%" loading="lazy" decoding="async" />
            <img src="/images/Frame2.webp" alt="" height="auto" width="100%" loading="lazy" decoding="async" />
        </div>
      </div>
    </>
  );
};

export default Industries;
