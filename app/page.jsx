import { buildMetadata } from "@/seo/pageMetadata";
import { JsonLd, HOMEPAGE_FAQ, HOMEPAGE_WEBPAGE } from "@/seo/JsonLd";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/");

// No <PageSchema> on the homepage: it would emit a second WebPage entity for
// the same URL alongside HOMEPAGE_WEBPAGE, plus a single-item BreadcrumbList
// ("Home") that carries no information.
export default function Page() {
  return (
    <>
      {/* Preload the LCP hero (first carousel slide) so the browser starts
          fetching it before the carousel JS runs. Desktop and mobile ship
          different assets, so preload is scoped with matching media queries. */}
      <link
        rel="preload"
        as="image"
        href="/N_Images/BIS_ER_bg.jpg"
        media="(min-width: 769px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/N_Images/bis-mobile-bg.png"
        media="(max-width: 768px)"
        fetchPriority="high"
      />
      <JsonLd data={HOMEPAGE_WEBPAGE} />
      <JsonLd data={HOMEPAGE_FAQ} />
      <ClientPage />
    </>
  );
}
