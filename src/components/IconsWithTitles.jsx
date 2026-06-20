"use client";

import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import AutoModeOutlinedIcon from "@mui/icons-material/AutoModeOutlined";
import { Link } from "@/compat/react-router-dom";
import Typography from "@mui/material/Typography";

const IconsRow = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  let iconSize = "100px";
  if (isMediumScreen) {
    iconSize = "70px";
  }
  if (isSmallScreen) {
    iconSize = "25px";
  }

  const titleSize = isSmallScreen ? "10px" : "16px";

  return (
    <>
      <div>
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bolder",
            fontSize: isSmallScreen ? "24px" : isMediumScreen ? "36px" : "60px",
            marginTop: "15%",
            marginBottom: "16px",
          }}
        >
          Trusted OEM-ODM Partner for AI CCTV & Robotics
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10%",
          margin: "5% 5% 0 5%",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Link to="/blog" style={{ textDecoration: "none", color: "inherit" }}>
            <LibraryBooksOutlinedIcon
              sx={{ fontSize: iconSize }}
              className="icon"
            />

            <div style={{ fontSize: titleSize }}>Blogs</div>
          </Link>
        </div>
        {/* <div style={{ textAlign: "center" }}> */}
        {/* <Link
          to="/sustainability"
          style={{ textDecoration: "none", color: "inherit" }}
        > */}
        {/* <SchoolOutlinedIcon sx={{ fontSize: iconSize }} className="icon" /> */}

        {/* <div style={{ fontSize: titleSize }}>Success Story</div> */}
        {/* </Link> */}
        {/* </div> */}
        <div style={{ textAlign: "center" }}>
          <Link
            to="/sustainability"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <AllInclusiveOutlinedIcon
              sx={{ fontSize: iconSize }}
              className="icon"
            />
            <div style={{ fontSize: titleSize }}>Sustainability</div>
          </Link>
        </div>
        <div style={{ textAlign: "center" }}>
          <Link
            to="/future-and-growth"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <InsightsOutlinedIcon
              sx={{ fontSize: iconSize }}
              className="icon"
            />
            <div style={{ fontSize: titleSize }}>Future and Growth</div>
          </Link>
        </div>
        <div style={{ textAlign: "center" }}>
          <Link
            to="/360-approach"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <AutoModeOutlinedIcon
              sx={{ fontSize: iconSize }}
              className="icon"
            />
            <div style={{ fontSize: titleSize }}>360 Degree Approach</div>
          </Link>
        </div>
        <style jsx>{`
          .icon:hover {
            transform: scale(1.1);
          }
        `}</style>
      </div>
    </>
  );
};

export default IconsRow;
