"use client";

import dynamic from "next/dynamic";

const ProdEngineering = dynamic(() => import("@/components/ProdEngineering"), { ssr: false });

export default function ClientPage() {
  return <ProdEngineering />;
}
