import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/cyber-security");

export default function Page() {
  return (
    <>
      <PageSchema path="/cyber-security" />
      <ClientPage />
    </>
  );
}
