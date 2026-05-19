"use client";

import dynamic from "next/dynamic";

const ProductShow = dynamic(() => import("@/components/ProductShow"), { ssr: false });

export default function Page() {
  return <ProductShow productTitle="Edge AI Based Object & Face Detection Cameras" imgIdx={0} />;
}
