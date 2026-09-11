"use client";

import dynamic from "next/dynamic";

const EcoSeries = dynamic(() => import("@/views/EcoSeries/EcoSeries"));

export default function ClientPage() {
  return <EcoSeries />;
}
