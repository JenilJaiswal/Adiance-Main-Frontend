"use client";

import dynamic from "next/dynamic";

const NdaaCompliance = dynamic(() => import("@/views/NdaaCompliance/NdaaCompliance"));

export default function ClientPage() {
  return <NdaaCompliance />;
}
