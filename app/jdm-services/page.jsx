import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/jdm-services");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/jdm-services" />
    </>
  );
}
