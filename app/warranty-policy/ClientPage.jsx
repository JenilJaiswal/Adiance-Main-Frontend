"use client";

import dynamic from "next/dynamic";

const WarrantyPolicy = dynamic(() => import("@/components/WarrantyPolicy"));

export default function ClientPage() {
  return <WarrantyPolicy />;
}
