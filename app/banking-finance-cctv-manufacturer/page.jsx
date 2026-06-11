import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/banking-finance-cctv-manufacturer");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/banking-finance-cctv-manufacturer" landingSlug="banking-finance-cctv-manufacturer" />
    </>
  );
}
