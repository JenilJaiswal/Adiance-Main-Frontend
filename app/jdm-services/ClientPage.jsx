"use client";

import dynamic from "next/dynamic";

const JDM = dynamic(() => import("@/views/Services/JDM/JDM"), { ssr: false });

export default function ClientPage() {
  return <JDM />;
}
