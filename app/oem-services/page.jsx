import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/oem-services");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/oem-services" />
    </>
  );
}
