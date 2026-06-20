"use client";

import dynamic from "next/dynamic";

const ProductShow = dynamic(() => import("@/components/ProductShow"), { ssr: false });

export default function ClientPage() {
  return <ProductShow productTitle="ADIANCE CLOUD BASED THERMAL CAMERA – (VM-72F210AC)" />;
}
