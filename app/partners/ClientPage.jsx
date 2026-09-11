"use client";

import dynamic from "next/dynamic";

const PartnersPage = dynamic(() => import("@/components/PartnersPage"));

export default function ClientPage() {
  return <PartnersPage />;
}
