import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/ndaa-compliance");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/ndaa-compliance" />
    </>
  );
}
