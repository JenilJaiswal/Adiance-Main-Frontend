"use client";

import dynamic from "next/dynamic";

const TermsOfService = dynamic(() => import("@/components/TermsOfService"), { ssr: false });

export default function Page() {
  return <TermsOfService />;
}
