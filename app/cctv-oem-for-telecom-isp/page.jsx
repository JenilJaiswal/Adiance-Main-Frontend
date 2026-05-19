"use client";

import dynamic from "next/dynamic";

const SEOLandingPage = dynamic(() => import("@/views/SEOPages/LandingPage/SEOLandingPage"), { ssr: false });

export default function Page() {
  return <SEOLandingPage />;
}
