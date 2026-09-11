"use client";

import dynamic from "next/dynamic";

const SEOLandingPage = dynamic(() => import("@/views/SEOPages/LandingPage/SEOLandingPage"));

export default function ClientPage() {
  return <SEOLandingPage />;
}
