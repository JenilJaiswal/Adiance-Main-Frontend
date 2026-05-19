"use client";

import dynamic from "next/dynamic";

const Trafic = dynamic(() => import("@/components/Trafic"), { ssr: false });

export default function Page() {
  return <Trafic />;
}
