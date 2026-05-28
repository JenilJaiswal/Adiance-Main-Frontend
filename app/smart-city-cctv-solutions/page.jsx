import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/smart-city-cctv-solutions");

export default function Page() {
  return (
    <>
      <PageSchema path="/smart-city-cctv-solutions" landingSlug="smart-city-cctv-solutions" />
      <ClientPage />
    </>
  );
}
