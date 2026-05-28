import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/full-solution-oem-camera-manufacturer");

export default function Page() {
  return (
    <>
      <PageSchema path="/full-solution-oem-camera-manufacturer" landingSlug="full-solution-oem-camera-manufacturer" />
      <ClientPage />
    </>
  );
}
