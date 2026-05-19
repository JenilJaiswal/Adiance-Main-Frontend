"use client";

import dynamic from "next/dynamic";

const Datasheet = dynamic(() => import("@/components/Datasheet"), { ssr: false });

export default function Page() {
  return <Datasheet />;
}
