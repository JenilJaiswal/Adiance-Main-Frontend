"use client";

import dynamic from "next/dynamic";

const Hospital = dynamic(() => import("@/components/Hospital"), { ssr: false });

export default function Page() {
  return <Hospital />;
}
