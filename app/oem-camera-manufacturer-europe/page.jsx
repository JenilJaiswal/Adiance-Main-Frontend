import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/oem-camera-manufacturer-europe");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/oem-camera-manufacturer-europe" landingSlug="oem-camera-manufacturer-europe" />
    </>
  );
}
