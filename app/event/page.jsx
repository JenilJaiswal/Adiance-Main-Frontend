"use client";

import dynamic from "next/dynamic";

const Event = dynamic(() => import("@/views/Events/Event"), { ssr: false });

export default function Page() {
  return <Event />;
}
