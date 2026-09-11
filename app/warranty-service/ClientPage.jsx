"use client";

import dynamic from "next/dynamic";

const WarrantyService = dynamic(() => import("@/components/WarrantyService"));

export default function ClientPage() {
  return <WarrantyService />;
}
