"use client";

import React from "react";
import CareerDashboard from "./components/CareerDashboard";
import CareerOportunity from "./components/CareerOportunity";
import { Box } from "@mui/material";
import Header from "../Header/Header";

const CareerHome = () => {
  return (
    <>
      <Header />
      <CareerDashboard />
      <CareerOportunity />
    </>
  );
};

export default CareerHome;
