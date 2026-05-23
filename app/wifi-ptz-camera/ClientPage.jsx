"use client";

import dynamic from "next/dynamic";

const WifiCameraPdf = dynamic(() => import("@/components/WifiCameraPdf"), { ssr: false });

export default function ClientPage() {
  return <WifiCameraPdf />;
}
