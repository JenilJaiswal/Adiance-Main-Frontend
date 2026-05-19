"use client";

import dynamic from "next/dynamic";

const ANPRCamera = dynamic(() => import("@/components/ANPRCamera"), { ssr: false });

export default function Page() {
  return <ANPRCamera />;
}
