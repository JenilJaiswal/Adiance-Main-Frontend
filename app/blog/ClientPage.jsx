"use client";

import dynamic from "next/dynamic";

const Blogs = dynamic(() => import("@/components/Blogs"), { ssr: false });

export default function ClientPage() {
  return <Blogs />;
}
