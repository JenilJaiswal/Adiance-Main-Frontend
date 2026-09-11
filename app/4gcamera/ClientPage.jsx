"use client";

import dynamic from "next/dynamic";

const _4GCamera = dynamic(() => import("@/components/_4GCamera"));

export default function ClientPage() {
  return <_4GCamera />;
}
