"use client";

import dynamic from "next/dynamic";

const PCB = dynamic(() => import("@/views/Services/PCB/PCB"));

export default function ClientPage() {
  return <PCB />;
}
