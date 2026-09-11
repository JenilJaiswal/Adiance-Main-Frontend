"use client";

import dynamic from "next/dynamic";

const BISERCertification = dynamic(() => import("@/views/BISERCertification/BISERCertification"));

export default function ClientPage() {
  return <BISERCertification />;
}
