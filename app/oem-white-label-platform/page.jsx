import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/oem-white-label-platform");

export default function Page() {
  return (
    <>
      <PageSchema path="/oem-white-label-platform" landingSlug="oem-white-label-platform" />
      <ClientPage />
    </>
  );
}
