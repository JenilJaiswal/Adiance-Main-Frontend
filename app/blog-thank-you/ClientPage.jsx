"use client";

import dynamic from "next/dynamic";

const ThankYouPage = dynamic(() => import("@/components/ThankYouPage"));

export default function ClientPage() {
  return <ThankYouPage />;
}
