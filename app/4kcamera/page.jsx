"use client";

import dynamic from "next/dynamic";

const _4KCamera = dynamic(() => import("@/components/_4KCamera"), { ssr: false });

export default function Page() {
  return <_4KCamera />;
}
