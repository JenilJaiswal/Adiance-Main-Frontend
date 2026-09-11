"use client";

import dynamic from "next/dynamic";

const Blog1 = dynamic(() => import("@/components/Blog1"));

export default function ClientPage() {
  return <Blog1 />;
}
