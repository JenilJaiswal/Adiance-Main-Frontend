"use client";

import dynamic from "next/dynamic";

const Firmware = dynamic(() => import("@/components/Firmware"));

export default function ClientPage() {
  return <Firmware />;
}
