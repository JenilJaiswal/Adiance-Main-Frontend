"use client";

import dynamic from "next/dynamic";

const Manufacturing = dynamic(() => import("@/components/Manufacturing"));

export default function ClientPage() {
  return <Manufacturing />;
}
