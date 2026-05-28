import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/warranty-policy");

export default function Page() {
  return (
    <>
      <PageSchema path="/warranty-policy" />
      <ClientPage />
    </>
  );
}
