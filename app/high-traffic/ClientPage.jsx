"use client";

import dynamic from "next/dynamic";

const HighTraffic = dynamic(() => import("@/components/HighTraffic"));

export default function ClientPage() {
  return <HighTraffic />;
}
