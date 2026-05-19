"use client";

import dynamic from "next/dynamic";

const Innovation = dynamic(() => import("@/components/Innovation"), { ssr: false });

export default function Page() {
  return <Innovation />;
}
