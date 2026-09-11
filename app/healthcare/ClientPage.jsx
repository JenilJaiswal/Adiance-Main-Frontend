"use client";

import dynamic from "next/dynamic";

const Hospital = dynamic(() => import("@/components/Hospital"));

export default function ClientPage() {
  return <Hospital />;
}
