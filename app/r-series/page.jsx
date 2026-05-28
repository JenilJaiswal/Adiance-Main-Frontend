import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/r-series");

export default function Page() {
  return (
    <>
      <PageSchema path="/r-series" />
      <ClientPage />
    </>
  );
}
