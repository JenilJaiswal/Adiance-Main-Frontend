import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/white-label-baby-monitor-manufacturer");

export default function Page() {
  return (
    <>
      <PageSchema path="/white-label-baby-monitor-manufacturer" landingSlug="white-label-baby-monitor-manufacturer" />
      <ClientPage />
    </>
  );
}
