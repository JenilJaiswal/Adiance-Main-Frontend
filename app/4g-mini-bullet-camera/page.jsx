"use client";

import dynamic from "next/dynamic";

const ProductShow = dynamic(() => import("@/components/ProductShow"), { ssr: false });

export default function Page() {
  return <ProductShow productTitle="AMBICAM 4G Mini Bullet Camera (VM-72H4G110AC)" />;
}
