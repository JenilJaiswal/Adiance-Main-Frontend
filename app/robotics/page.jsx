"use client";

import dynamic from "next/dynamic";

const Robotics = dynamic(() => import("@/components/Robotics"), { ssr: false });

export default function Page() {
  return <Robotics />;
}
