"use client";

import dynamic from "next/dynamic";

const WifiCameraPdf = dynamic(() => import("@/components/WifiCameraPdf"), { ssr: false });

export default function Page() {
  return <WifiCameraPdf />;
}
