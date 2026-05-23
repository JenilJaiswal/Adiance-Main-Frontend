import { buildMetadata } from "@/seo/pageMetadata";
import { BreadcrumbJsonLd } from "@/seo/JsonLd";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/about");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ]}
      />
      <ClientPage />
    </>
  );
}
