import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/compliance");

export default function Page() {
  return (
    <>
      <PageSchema path="/compliance" />
      <ClientPage />
    </>
  );
}
