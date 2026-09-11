"use client";

import dynamic from "next/dynamic";

const Downloads = dynamic(() => import("@/components/Downloads"));

export default function ClientPage() {
  return <Downloads />;
}
