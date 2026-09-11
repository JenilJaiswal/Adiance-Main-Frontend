"use client";

import dynamic from "next/dynamic";

const AboutUs = dynamic(() => import("@/components/AboutUs"));

export default function ClientPage() {
  return <AboutUs />;
}
