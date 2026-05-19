"use client";

import dynamic from "next/dynamic";

const UsLanding = dynamic(() => import("@/views/UsLanding/UsLanding"), { ssr: false });

export default function Page() {
  return <UsLanding />;
}
