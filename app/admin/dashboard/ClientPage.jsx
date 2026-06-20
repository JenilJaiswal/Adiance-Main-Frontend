"use client";

import dynamic from "next/dynamic";

const Dashboard = dynamic(() => import("@/AdianceAdmin/pages/Dashboard/Dashboard"), { ssr: false });

export default function ClientPage() {
  return <Dashboard />;
}
