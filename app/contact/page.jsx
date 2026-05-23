import { buildMetadata } from "@/seo/pageMetadata";
import { BreadcrumbJsonLd } from "@/seo/JsonLd";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/contact");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <ClientPage />
    </>
  );
}
