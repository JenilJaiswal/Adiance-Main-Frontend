"use client";

import dynamic from "next/dynamic";

const Innovation = dynamic(() => import("@/components/Innovation"));

export default function ClientPage() {
  return <Innovation />;
}
