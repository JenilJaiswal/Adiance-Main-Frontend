"use client";

import dynamic from "next/dynamic";

const EdgeAICamera = dynamic(() => import("@/views/EdgeAICamera/EdgeAICamera"), { ssr: false });

export default function Page() {
  return <EdgeAICamera />;
}
