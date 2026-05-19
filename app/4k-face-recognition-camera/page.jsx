"use client";

import dynamic from "next/dynamic";

const ProductShow = dynamic(() => import("@/components/ProductShow"), { ssr: false });

export default function Page() {
  return <ProductShow productTitle="Edge AI Based Face Recognition Dome Camera" imgIdx={0} />;
}
