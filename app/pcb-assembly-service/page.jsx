"use client";

import dynamic from "next/dynamic";

const PCB = dynamic(() => import("@/views/Services/PCB/PCB"), { ssr: false });

export default function Page() {
  return <PCB />;
}
