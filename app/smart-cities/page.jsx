"use client";

import dynamic from "next/dynamic";

const SmartCities = dynamic(() => import("@/components/SmartCities"), { ssr: false });

export default function Page() {
  return <SmartCities />;
}
