"use client";

import dynamic from "next/dynamic";

const CyberSecurity = dynamic(() => import("@/components/CyberSecurity"), { ssr: false });

export default function Page() {
  return <CyberSecurity />;
}
