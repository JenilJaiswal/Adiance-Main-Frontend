"use client";

import dynamic from "next/dynamic";

const ProductShow = dynamic(() => import("@/components/ProductShow"));

export default function ClientPage() {
  return <ProductShow productTitle="AMBICAM 4G Mini Bullet Camera (VM-72H4G110AC)" />;
}
