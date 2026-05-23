import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/edge-ai-based-object-n-face-detection-cameras");

export default function Page() {
  return <ClientPage />;
}
