"use client";

import dynamic from "next/dynamic";

const RSeries = dynamic(() => import("@/components/RSeries"));

export default function ClientPage() {
  return <RSeries title="R Series" />;
}
