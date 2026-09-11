"use client";

import dynamic from "next/dynamic";

const SSeries = dynamic(() => import("@/views/SSeries/SSeries"));

export default function ClientPage() {
  return <SSeries />;
}
