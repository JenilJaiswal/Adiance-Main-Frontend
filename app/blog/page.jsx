import { buildMetadata } from "@/seo/pageMetadata";
import { BreadcrumbJsonLd } from "@/seo/JsonLd";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/blog");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />
      <ClientPage />
    </>
  );
}
