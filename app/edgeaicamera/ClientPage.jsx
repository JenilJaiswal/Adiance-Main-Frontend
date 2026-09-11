"use client";

import dynamic from "next/dynamic";

const EdgeAICamera = dynamic(() => import("@/views/EdgeAICamera/EdgeAICamera"));

export default function ClientPage() {
  return <EdgeAICamera />;
}
