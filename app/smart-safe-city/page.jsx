"use client";

import dynamic from "next/dynamic";

const SmartCity = dynamic(() => import("@/components/SmartCity"), { ssr: false });

export default function Page() {
  return <SmartCity />;
}
