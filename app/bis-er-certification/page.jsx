import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/bis-er-certification");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/bis-er-certification" />
    </>
  );
}
