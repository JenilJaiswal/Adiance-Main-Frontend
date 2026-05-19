"use client";

import dynamic from "next/dynamic";

const BISERCertification = dynamic(() => import("@/views/BISERCertification/BISERCertification"), { ssr: false });

export default function Page() {
  return <BISERCertification />;
}
