"use client";

import dynamic from "next/dynamic";

const WarrantyPolicy = dynamic(() => import("@/components/WarrantyPolicy"), { ssr: false });

export default function Page() {
  return <WarrantyPolicy />;
}
