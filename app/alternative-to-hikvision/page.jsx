import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/alternative-to-hikvision");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/alternative-to-hikvision" landingSlug="alternative-to-hikvision" />
    </>
  );
}
