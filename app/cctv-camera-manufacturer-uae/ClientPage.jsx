"use client";

import dynamic from "next/dynamic";

const GeoPage = dynamic(() => import("@/views/SEOPages/GeoPage/GeoPage"));

export default function ClientPage() {
  return <GeoPage />;
}
