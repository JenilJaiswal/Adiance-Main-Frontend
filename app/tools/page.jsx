import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/tools");

export default function Page() {
  return (
    <>
      <PageSchema path="/tools" />
      <ClientPage />
    </>
  );
}
