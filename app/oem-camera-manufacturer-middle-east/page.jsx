import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/oem-camera-manufacturer-middle-east");

export default function Page() {
  return (
    <>
      <PageSchema path="/oem-camera-manufacturer-middle-east" landingSlug="oem-camera-manufacturer-middle-east" />
      <ClientPage />
    </>
  );
}
