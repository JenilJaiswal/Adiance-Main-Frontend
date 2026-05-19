"use client";

import dynamic from "next/dynamic";

const _4GCamera = dynamic(() => import("@/components/_4GCamera"), { ssr: false });

export default function Page() {
  return <_4GCamera />;
}
