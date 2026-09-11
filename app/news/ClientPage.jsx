"use client";

import dynamic from "next/dynamic";

const News = dynamic(() => import("@/components/News"));

export default function ClientPage() {
  return <News />;
}
