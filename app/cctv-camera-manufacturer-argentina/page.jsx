"use client";

import dynamic from "next/dynamic";

const GeoPage = dynamic(() => import("@/views/SEOPages/GeoPage/GeoPage"), { ssr: false });

export default function Page() {
  return <GeoPage />;
}
