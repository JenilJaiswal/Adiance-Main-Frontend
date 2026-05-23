"use client";

import dynamic from "next/dynamic";

const ThankYouPage = dynamic(() => import("@/components/ThankYouPage"), { ssr: false });

export default function ClientPage() {
  return <ThankYouPage />;
}
