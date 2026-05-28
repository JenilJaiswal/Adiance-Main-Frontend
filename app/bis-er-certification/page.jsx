import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/bis-er-certification");

export default function Page() {
  return (
    <>
      <PageSchema path="/bis-er-certification" />
      <ClientPage />
    </>
  );
}
