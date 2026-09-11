"use client";

import dynamic from "next/dynamic";

const ProductShow = dynamic(() => import("@/components/ProductShow"));

export default function ClientPage() {
  return <ProductShow productTitle="ADIANCE CLOUD BASED THERMAL CAMERA – (VM-72N210AC)" />;
}
