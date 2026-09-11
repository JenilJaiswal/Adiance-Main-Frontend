"use client";

import dynamic from "next/dynamic";

const CrowdControl = dynamic(() => import("@/components/CrowdControl"));

export default function ClientPage() {
  return <CrowdControl />;
}
