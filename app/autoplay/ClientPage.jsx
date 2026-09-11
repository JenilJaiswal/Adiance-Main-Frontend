"use client";

import dynamic from "next/dynamic";

const AutoplayCarousel = dynamic(() => import("@/components/AutoplayCarousel"));

export default function ClientPage() {
  return <AutoplayCarousel />;
}
