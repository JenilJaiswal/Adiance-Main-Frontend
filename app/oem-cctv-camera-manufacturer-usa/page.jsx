import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/oem-cctv-camera-manufacturer-usa");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/oem-cctv-camera-manufacturer-usa" landingSlug="oem-cctv-camera-manufacturer-usa" />
    </>
  );
}
