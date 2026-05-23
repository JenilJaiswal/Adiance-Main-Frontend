import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export async function generateMetadata({ params }) {
  const slug = params?.urlTitle || "";
  const title = slug
    ? slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()) + " | Adiance Blog"
    : "Adiance Blog";
  return buildMetadata("/blog/".replace(/\/+$/, "") || "/blog", {
    title,
    canonical: `/blog/${slug}`,
  });
}

export default function Page() {
  return <ClientPage />;
}
