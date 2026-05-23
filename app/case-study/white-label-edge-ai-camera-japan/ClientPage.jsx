"use client";

import dynamic from "next/dynamic";

const SEOBlogPage = dynamic(() => import("@/views/SEOPages/BlogPage/SEOBlogPage"), { ssr: false });

export default function ClientPage() {
  return <SEOBlogPage type="case-study" />;
}
