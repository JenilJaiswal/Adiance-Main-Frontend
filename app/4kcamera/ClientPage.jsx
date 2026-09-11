"use client";

import dynamic from "next/dynamic";

const _4KCamera = dynamic(() => import("@/components/_4KCamera"));

export default function ClientPage() {
  return <_4KCamera />;
}
