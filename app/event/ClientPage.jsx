"use client";

import dynamic from "next/dynamic";

const Event = dynamic(() => import("@/views/Events/Event"));

export default function ClientPage() {
  return <Event />;
}
