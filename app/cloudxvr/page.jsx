"use client";

import dynamic from "next/dynamic";

const ProductShow = dynamic(() => import("@/components/ProductShow"), { ssr: false });

export default function Page() {
  return <ProductShow productTitle="ADIANCE 8-16 Channel XVR – VM-72XVR816" />;
}
