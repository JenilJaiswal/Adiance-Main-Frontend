"use client";

import dynamic from "next/dynamic";

const PublicTransport = dynamic(() => import("@/components/PublicTransport"), { ssr: false });

export default function ClientPage() {
  return <PublicTransport />;
}
