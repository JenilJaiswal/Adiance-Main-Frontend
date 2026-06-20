"use client";

import dynamic from "next/dynamic";

const NdaaCompliance = dynamic(() => import("@/views/NdaaCompliance/NdaaCompliance"), { ssr: false });

export default function ClientPage() {
  return <NdaaCompliance />;
}
