"use client";

import dynamic from "next/dynamic";

const Compliance = dynamic(() => import("@/components/Compliance"));

export default function ClientPage() {
  return <Compliance />;
}
