import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/qualcomm-soc-future-edge-ai-surveillance-cameras");

export default function Page() {
  return <ClientPage />;
}
