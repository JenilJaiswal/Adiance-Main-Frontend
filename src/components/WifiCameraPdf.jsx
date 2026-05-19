"use client";

import React from "react";

const WifiCameraPdf = () => {
  return (
    <div style={{ width: "100%", height: "100vh",  }}>
      <iframe
        src="/pdfs/WIFI-PTZ-CAMERA.pdf"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="WiFi Camera PDF"
      ></iframe>
    </div>
  );
};

export default WifiCameraPdf;
