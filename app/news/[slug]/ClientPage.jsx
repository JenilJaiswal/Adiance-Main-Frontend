"use client";

import dynamic from "next/dynamic";

const NewsDetail = dynamic(() => import("@/components/NewsDetail"));

export default function ClientPage() {
  return <NewsDetail />;
}
