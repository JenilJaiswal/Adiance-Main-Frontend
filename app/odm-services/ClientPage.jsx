"use client";

import dynamic from "next/dynamic";

const ODM = dynamic(() => import("@/views/Services/ODM/ODM"), { ssr: false });

export default function ClientPage() {
  return <ODM />;
}
