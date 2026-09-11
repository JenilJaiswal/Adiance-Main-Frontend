"use client";

import dynamic from "next/dynamic";

const ProductShow = dynamic(() => import("@/components/ProductShow"));

export default function ClientPage() {
  return <ProductShow productTitle="AMBICAM 4G Dome PTZ Camera (VM-72BPTZ410AC)" />;
}
