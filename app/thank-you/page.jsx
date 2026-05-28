import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/thank-you");

export default function Page() {
  return (
    <>
      <PageSchema path="/thank-you" />
      <ClientPage />
    </>
  );
}
