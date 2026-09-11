"use client";

import dynamic from "next/dynamic";

const ProductShow = dynamic(() => import("@/components/ProductShow"));

export default function ClientPage() {
  return <ProductShow productTitle="ADIANCE 8-16 Channel XVR – VM-72XVR816" />;
}
