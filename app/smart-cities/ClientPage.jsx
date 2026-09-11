"use client";

import dynamic from "next/dynamic";

const SmartCities = dynamic(() => import("@/components/SmartCities"));

export default function ClientPage() {
  return <SmartCities />;
}
