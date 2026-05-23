"use client";

import dynamic from "next/dynamic";

const Education = dynamic(() => import("@/components/Education"), { ssr: false });

export default function ClientPage() {
  return <Education />;
}
