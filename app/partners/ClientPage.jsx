"use client";

import dynamic from "next/dynamic";

const PartnersPage = dynamic(() => import("@/components/PartnersPage"), { ssr: false });

export default function ClientPage() {
  return <PartnersPage />;
}
