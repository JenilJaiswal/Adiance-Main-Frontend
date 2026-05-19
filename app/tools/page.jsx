"use client";

import dynamic from "next/dynamic";

const Tools = dynamic(() => import("@/components/Tools"), { ssr: false });

export default function Page() {
  return <Tools />;
}
