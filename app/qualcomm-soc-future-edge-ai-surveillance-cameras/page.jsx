import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/qualcomm-soc-future-edge-ai-surveillance-cameras");

export default function Page() {
  return (
    <>
      <PageSchema path="/qualcomm-soc-future-edge-ai-surveillance-cameras" landingSlug="qualcomm-soc-future-edge-ai-surveillance-cameras" />
      <ClientPage />
    </>
  );
}
