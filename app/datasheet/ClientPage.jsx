"use client";

import dynamic from "next/dynamic";

const Datasheet = dynamic(() => import("@/components/Datasheet"));

export default function ClientPage() {
  return <Datasheet />;
}
