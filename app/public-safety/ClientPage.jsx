"use client";

import dynamic from "next/dynamic";

const PublicSafety = dynamic(() => import("@/components/PublicSafety"));

export default function ClientPage() {
  return <PublicSafety />;
}
