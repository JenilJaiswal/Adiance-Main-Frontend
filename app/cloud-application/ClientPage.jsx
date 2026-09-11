"use client";

import dynamic from "next/dynamic";

const CloudApplication = dynamic(() => import("@/components/CloudApplication"));

export default function ClientPage() {
  return <CloudApplication />;
}
