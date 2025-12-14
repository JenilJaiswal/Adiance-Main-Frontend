import React, { useState, useEffect } from "react";
// import Topbar from "./Topbar";
// import MidBar from "./MidBar";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = screenWidth <= 993; // Adjust the threshold as needed

  return (
    <div>
      {/* {!isSmallScreen && <Topbar />} */}
      {/* {!isSmallScreen && <MidBar />} */}
      <ResponsiveNavbar />
    </div>
  );
};

export default Header;
