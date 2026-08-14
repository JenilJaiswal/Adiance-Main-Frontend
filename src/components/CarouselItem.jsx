"use client";

import React, { useState, useEffect } from "react";

export default function CarouselItem({ imgUrl, imgTitle }) {
  //   console.log(imgUrl);
  const [screenWidth, setScreenWidth] = useState(() => (typeof window !== "undefined" ? window.innerWidth : 1280));
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="carousel-card">
      <img
        src={imgUrl}
        alt={imgTitle}
        height={screenWidth < 768 ? "100px" : "150px"}
      ></img>
    </div>
  );
}
