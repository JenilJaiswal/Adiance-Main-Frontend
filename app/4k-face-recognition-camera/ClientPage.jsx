"use client";

import dynamic from "next/dynamic";

const ProductShow = dynamic(() => import("@/components/ProductShow"));

export default function ClientPage() {
  return <ProductShow productTitle="Edge AI Based Face Recognition Dome Camera" imgIdx={0} />;
}
