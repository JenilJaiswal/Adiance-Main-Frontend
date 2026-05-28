import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/ndaa-compliant-cctv-camera-manufacturer");

export default function Page() {
  return (
    <>
      <PageSchema path="/ndaa-compliant-cctv-camera-manufacturer" landingSlug="ndaa-compliant-cctv-camera-manufacturer" />
      <ClientPage />
    </>
  );
}
