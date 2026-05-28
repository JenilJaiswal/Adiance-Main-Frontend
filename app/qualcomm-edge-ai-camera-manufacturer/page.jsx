import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/qualcomm-edge-ai-camera-manufacturer");

export default function Page() {
  return (
    <>
      <PageSchema path="/qualcomm-edge-ai-camera-manufacturer" landingSlug="qualcomm-edge-ai-camera-manufacturer" />
      <ClientPage />
    </>
  );
}
