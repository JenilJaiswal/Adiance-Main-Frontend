"use client";

import dynamic from "next/dynamic";

const PublicSafety = dynamic(() => import("@/components/PublicSafety"), { ssr: false });

export default function ClientPage() {
  return <PublicSafety />;
}
