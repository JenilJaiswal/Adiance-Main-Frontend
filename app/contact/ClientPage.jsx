"use client";

import dynamic from "next/dynamic";

const ContactUs = dynamic(() => import("@/components/ContactUs"));

export default function ClientPage() {
  return <ContactUs />;
}
