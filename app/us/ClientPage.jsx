"use client";

import dynamic from "next/dynamic";

const UsLanding = dynamic(() => import("@/views/UsLanding/UsLanding"));

export default function ClientPage() {
  return <UsLanding />;
}
