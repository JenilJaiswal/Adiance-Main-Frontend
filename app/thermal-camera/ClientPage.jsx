"use client";

import dynamic from "next/dynamic";

const ThermalCamera = dynamic(() => import("@/components/ThermalCamera"));

export default function ClientPage() {
  return <ThermalCamera />;
}
