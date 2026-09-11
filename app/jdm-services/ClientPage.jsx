"use client";

import dynamic from "next/dynamic";

const JDM = dynamic(() => import("@/views/Services/JDM/JDM"));

export default function ClientPage() {
  return <JDM />;
}
