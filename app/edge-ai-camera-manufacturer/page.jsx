import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/edge-ai-camera-manufacturer");

export default function Page() {
  return (
    <>
      <PageSchema path="/edge-ai-camera-manufacturer" landingSlug="edge-ai-camera-manufacturer" />
      <ClientPage />
    </>
  );
}
