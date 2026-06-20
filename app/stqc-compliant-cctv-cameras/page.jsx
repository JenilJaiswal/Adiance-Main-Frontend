import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/stqc-compliant-cctv-cameras");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/stqc-compliant-cctv-cameras" landingSlug="stqc-compliant-cctv-cameras" />
    </>
  );
}
