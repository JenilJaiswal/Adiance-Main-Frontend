"use client";

import dynamic from "next/dynamic";

const Tools = dynamic(() => import("@/components/Tools"));

export default function ClientPage() {
  return <Tools />;
}
