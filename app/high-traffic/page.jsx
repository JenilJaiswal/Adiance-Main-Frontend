"use client";

import dynamic from "next/dynamic";

const HighTraffic = dynamic(() => import("@/components/HighTraffic"), { ssr: false });

export default function Page() {
  return <HighTraffic />;
}
