import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/4kcamera");

export default function Page() {
  return (
    <>
      <PageSchema path="/4kcamera" />
      <ClientPage />
    </>
  );
}
