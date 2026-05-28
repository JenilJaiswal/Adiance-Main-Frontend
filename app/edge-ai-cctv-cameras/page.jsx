import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/edge-ai-cctv-cameras");

export default function Page() {
  return (
    <>
      <PageSchema path="/edge-ai-cctv-cameras" />
      <ClientPage />
    </>
  );
}
