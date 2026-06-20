import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/gdpr-compliant-surveillance-manufacturer");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/gdpr-compliant-surveillance-manufacturer" landingSlug="gdpr-compliant-surveillance-manufacturer" />
    </>
  );
}
