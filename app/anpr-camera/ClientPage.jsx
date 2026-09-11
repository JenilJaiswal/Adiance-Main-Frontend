"use client";

import dynamic from "next/dynamic";

const ANPRCamera = dynamic(() => import("@/components/ANPRCamera"));

export default function ClientPage() {
  return <ANPRCamera />;
}
