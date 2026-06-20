"use client";

import dynamic from "next/dynamic";

const CloudApplication = dynamic(() => import("@/components/CloudApplication"), { ssr: false });

export default function ClientPage() {
  return <CloudApplication />;
}
