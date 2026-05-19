"use client";

import dynamic from "next/dynamic";

const RSeries = dynamic(() => import("@/components/RSeries"), { ssr: false });

export default function Page() {
  return <RSeries title="R Series" />;
}
