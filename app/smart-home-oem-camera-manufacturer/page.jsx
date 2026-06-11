import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/smart-home-oem-camera-manufacturer");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/smart-home-oem-camera-manufacturer" landingSlug="smart-home-oem-camera-manufacturer" />
    </>
  );
}
