import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/terms-of-service");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/terms-of-service" />
    </>
  );
}
