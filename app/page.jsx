"use client";

import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/views/Home/Home"), { ssr: false });

export default function Page() {
  return <Home />;
}
