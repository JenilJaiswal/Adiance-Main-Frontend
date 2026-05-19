"use client";

import dynamic from "next/dynamic";

const EcoSeries = dynamic(() => import("@/views/EcoSeries/EcoSeries"), { ssr: false });

export default function Page() {
  return <EcoSeries />;
}
