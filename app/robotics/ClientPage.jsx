"use client";

import dynamic from "next/dynamic";

const Robotics = dynamic(() => import("@/components/Robotics"));

export default function ClientPage() {
  return <Robotics />;
}
