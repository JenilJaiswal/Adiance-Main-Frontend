import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/start-your-own-cctv-brand");

export default function Page() {
  return (
    <>
      <PageSchema path="/start-your-own-cctv-brand" landingSlug="start-your-own-cctv-brand" />
      <ClientPage />
    </>
  );
}
