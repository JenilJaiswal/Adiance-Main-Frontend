import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/alternative-to-chinese-cameras");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/alternative-to-chinese-cameras" landingSlug="alternative-to-chinese-cameras" />
    </>
  );
}
