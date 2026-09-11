"use client";

import dynamic from "next/dynamic";

const SmartCity = dynamic(() => import("@/components/SmartCity"));

export default function ClientPage() {
  return <SmartCity />;
}
