"use client";

import dynamic from "next/dynamic";

const OtpVerification = dynamic(() => import("@/AdianceAdmin/pages/OTP/OtpVerification"), { ssr: false });

export default function Page() {
  return <OtpVerification />;
}
