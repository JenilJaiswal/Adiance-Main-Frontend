import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/odm-services");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/odm-services" />
    </>
  );
}
