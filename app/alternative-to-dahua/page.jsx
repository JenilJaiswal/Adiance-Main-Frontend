import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/alternative-to-dahua");

export default function Page() {
  return (
    <>
      <PageSchema path="/alternative-to-dahua" landingSlug="alternative-to-dahua" />
      <ClientPage />
    </>
  );
}
