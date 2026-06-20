"use client";

import dynamic from "next/dynamic";

const LoginDash = dynamic(() => import("@/AdianceAdmin/pages/LoginDash"), { ssr: false });

export default function ClientPage() {
  return <LoginDash />;
}
