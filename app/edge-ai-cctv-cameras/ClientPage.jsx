"use client";

import dynamic from "next/dynamic";

const SSeries = dynamic(() => import("@/views/SSeries/SSeries"), { ssr: false });

export default function ClientPage() {
  return <SSeries />;
}
