"use client";

import dynamic from "next/dynamic";

const Reset = dynamic(() => import("@/AdianceAdmin/pages/ForgotPassword/Reset"), { ssr: false });

export default function ClientPage() {
  return <Reset />;
}
