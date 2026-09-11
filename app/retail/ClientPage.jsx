"use client";

import dynamic from "next/dynamic";

const Retail = dynamic(() => import("@/components/Retail"));

export default function ClientPage() {
  return <Retail />;
}
