import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/h-series");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/h-series" />
    </>
  );
}
