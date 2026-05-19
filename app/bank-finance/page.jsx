"use client";

import dynamic from "next/dynamic";

const BankFinance = dynamic(() => import("@/components/BankFinance"), { ssr: false });

export default function Page() {
  return <BankFinance />;
}
