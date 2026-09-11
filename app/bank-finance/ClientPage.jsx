"use client";

import dynamic from "next/dynamic";

const BankFinance = dynamic(() => import("@/components/BankFinance"));

export default function ClientPage() {
  return <BankFinance />;
}
