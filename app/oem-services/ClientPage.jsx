"use client";

import dynamic from "next/dynamic";

const OEM = dynamic(() => import("@/views/Services/OEM/OEM"));

export default function ClientPage() {
  return <OEM />;
}
