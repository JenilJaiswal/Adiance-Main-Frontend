import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/blog/qualcomm-soc-future-edge-ai-surveillance-cameras");

export default function Page() {
  return <ClientPage />;
}
