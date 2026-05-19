"use client";

import dynamic from "next/dynamic";

const Downloads = dynamic(() => import("@/components/Downloads"), { ssr: false });

export default function Page() {
  return <Downloads />;
}
