"use client";

import dynamic from "next/dynamic";

const AutoplayCarousel = dynamic(() => import("@/components/AutoplayCarousel"), { ssr: false });

export default function Page() {
  return <AutoplayCarousel />;
}
