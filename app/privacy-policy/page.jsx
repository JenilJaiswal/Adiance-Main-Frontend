"use client";

import dynamic from "next/dynamic";

const PrivacyPolicy = dynamic(() => import("@/components/PrivacyPolicy"), { ssr: false });

export default function Page() {
  return <PrivacyPolicy />;
}
