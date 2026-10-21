"use client";

import Blogs from "@/components/Blogs";

// `archive` is a server-rendered list of article links (see BlogArchiveLinks).
export default function ClientPage({ archive = null }) {
  return <Blogs archive={archive} />;
}
