"use client";

import dynamic from "next/dynamic";

const PublicTransport = dynamic(() => import("@/components/PublicTransport"));

export default function ClientPage() {
  return <PublicTransport />;
}
