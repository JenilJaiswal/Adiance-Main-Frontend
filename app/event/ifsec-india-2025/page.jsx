"use client";

import dynamic from "next/dynamic";

const IfsecIndia2025 = dynamic(() => import("@/views/Events/IfsecIndia2025"), { ssr: false });

export default function Page() {
  return <IfsecIndia2025 />;
}
