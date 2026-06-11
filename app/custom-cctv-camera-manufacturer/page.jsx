import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/custom-cctv-camera-manufacturer");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/custom-cctv-camera-manufacturer" landingSlug="custom-cctv-camera-manufacturer" />
    </>
  );
}
