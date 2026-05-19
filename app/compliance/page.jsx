"use client";

import dynamic from "next/dynamic";

const Compliance = dynamic(() => import("@/components/Compliance"), { ssr: false });

export default function Page() {
  return <Compliance />;
}
