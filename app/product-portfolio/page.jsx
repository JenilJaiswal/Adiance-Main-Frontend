import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/product-portfolio");

export default function Page() {
  return (
    <>
      <PageSchema path="/product-portfolio" landingSlug="product-portfolio" />
      <ClientPage />
    </>
  );
}
