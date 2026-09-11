"use client";

import dynamic from "next/dynamic";

const Trafic = dynamic(() => import("@/components/Trafic"));

export default function ClientPage() {
  return <Trafic />;
}
