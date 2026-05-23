import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/edge-ai-cctv-cameras");

export default function Page() {
  return <ClientPage />;
}
