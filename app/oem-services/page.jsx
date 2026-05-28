import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/oem-services");

export default function Page() {
  return (
    <>
      <PageSchema path="/oem-services" />
      <ClientPage />
    </>
  );
}
