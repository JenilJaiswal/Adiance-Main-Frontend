import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/partner-thank-you");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/partner-thank-you" />
    </>
  );
}
