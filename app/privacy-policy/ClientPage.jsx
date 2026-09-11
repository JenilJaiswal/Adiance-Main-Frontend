"use client";

import dynamic from "next/dynamic";

const PrivacyPolicy = dynamic(() => import("@/components/PrivacyPolicy"));

export default function ClientPage() {
  return <PrivacyPolicy />;
}
