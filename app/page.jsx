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
      <JsonLd data={HOMEPAGE_WEBPAGE} />
      <JsonLd data={HOMEPAGE_FAQ} />
      <ClientPage />
    </>
  );
}
