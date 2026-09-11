"use client";

import dynamic from "next/dynamic";

const Remote = dynamic(() => import("@/components/Remote"));

export default function ClientPage() {
  return <Remote />;
}
