"use client";

import dynamic from "next/dynamic";

const IfsecIndia2025 = dynamic(() => import("@/views/Events/IfsecIndia2025"));

export default function ClientPage() {
  return <IfsecIndia2025 />;
}
