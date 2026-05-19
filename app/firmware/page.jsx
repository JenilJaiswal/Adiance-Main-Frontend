"use client";

import dynamic from "next/dynamic";

const Firmware = dynamic(() => import("@/components/Firmware"), { ssr: false });

export default function Page() {
  return <Firmware />;
}
