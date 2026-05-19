"use client";

import dynamic from "next/dynamic";

const Manufacturing = dynamic(() => import("@/components/Manufacturing"), { ssr: false });

export default function Page() {
  return <Manufacturing />;
}
